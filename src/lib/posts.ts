import type { BlogPost } from "@/types/blog";

const postFiles = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, unknown> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim();
    // Arrays: ["a", "b"] or ['a', 'b']
    if (val.startsWith("[") && val.endsWith("]")) {
      data[key] = JSON.parse(val.replace(/'/g, '"'));
    } else if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      data[key] = val.slice(1, -1);
    } else {
      data[key] = val;
    }
  }

  return { data, content: match[2] };
}

export function getAllPosts(): BlogPost[] {
  return Object.entries(postFiles)
    .map(([, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      return {
        slug: data.slug as string,
        title: data.title as string,
        date: data.date as string,
        tags: data.tags as string[],
        excerpt: data.excerpt as string,
        coverImage: data.coverImage as string | undefined,
        body: content.trim(),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
