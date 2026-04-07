# Copilot Instructions

## Commands

```bash
npm run dev          # Dev server (Vite)
npm run build        # Production build → dist/
npm run lint         # ESLint
npm run test         # Vitest (single run)
npm run test:watch   # Vitest (watch mode)
```

Run a single test file:
```bash
npx vitest run src/components/BlogCodeBlock.test.tsx
```

Install dependencies (match CI):
```bash
npm install --legacy-peer-deps
```

## Architecture

This is a **single-page portfolio site** styled as a VS Code-like IDE. The layout has a persistent `IDESidebar` on the left, a tab bar across the top, a breadcrumb, and a fixed status bar at the bottom.

**Routing** uses `HashRouter` (required for GitHub Pages static hosting). All navigation goes through `/:section` or `/blog/:slug`. The app always defaults to `/about`.

**Sections** (`about`, `projects`, `blog`, `playlist`, `contact`) are rendered inside `src/pages/Index.tsx` based on the URL param. Adding a new section means adding it to `VALID_SECTIONS` and the `sections` map there.

**Blog system** — Markdown files live in `src/posts/*.md`. They are loaded at build time via Vite's `import.meta.glob` (eager, raw string). A custom frontmatter parser in `src/lib/posts.ts` handles them (no gray-matter at runtime). Posts are accessed via the `useBlogPost(slug)` / `useBlogPosts()` hooks (TanStack Query wrapping `getAllPosts()`). Blog rendering uses `react-markdown` + `rehype-highlight` with custom component overrides (`BlogCodeBlock`, `BlogImage`).

**UI components** come from shadcn/ui (`src/components/ui/`). Add new shadcn components with:
```bash
npx shadcn@latest add <component>
```

## Key Conventions

**Path alias**: `@/` maps to `src/`. Always use it for imports within the project.

**Theme**: Dark-only. No light mode. Custom semantic Tailwind tokens defined via CSS variables in `src/index.css`:
- `terminal` — terminal green (primary accent, links, active states)
- `metal` — metal red (destructive/accent)
- `steel` — cold steel dark (borders, muted backgrounds)

**Typography**: `font-display` (Space Grotesk) for headings, `font-mono` (JetBrains Mono) for body/code. The body default is `font-mono`.

**Adding a blog post**: Create `src/posts/<slug>.md` with this frontmatter:
```yaml
---
slug: your-post-slug
title: "Post Title"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
excerpt: "Short description"
coverImage: "/path/to/image.jpg"  # optional
---
```
Posts are sorted by `date` descending automatically.

**Tests**: Colocated with source files (`*.test.ts` / `*.test.tsx`). Use `@testing-library/react` + `vitest`. Setup file: `src/test/setup.ts`. E2E tests (Playwright) go in `e2e/` and require the preview server running at `localhost:8080`.

**Deployment**: Pushing to `main` triggers GitHub Actions (`deploy.yml`) which runs `npm run build` and deploys `dist/` to GitHub Pages.
