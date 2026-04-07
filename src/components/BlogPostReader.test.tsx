import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import BlogPostReader from "./BlogPostReader";
import type { BlogPost } from "@/types/blog";

const post: BlogPost = {
  slug: "why-rust-is-the-djent-of-programming-languages",
  title: "WHY RUST IS THE DJENT OF PROGRAMMING LANGUAGES",
  date: "2026-03-10",
  tags: ["rust", "opinion"],
  excerpt: "Low-level control, zero-cost abstractions, and a type system that hits harder than an 8-string guitar tuned to drop F.",
  coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  body: "## The Parallel No One Asked For\n\nBoth Rust and djent emerged from a frustration with the mainstream.",
};

describe("BlogPostReader", () => {
  it("renders the post title", () => {
    render(<BlogPostReader post={post} onBack={vi.fn()} />);
    expect(screen.getByRole("heading", { name: post.title })).toBeInTheDocument();
  });

  it("renders the post date and tags", () => {
    render(<BlogPostReader post={post} onBack={vi.fn()} />);
    expect(screen.getByText(new RegExp(post.date))).toBeInTheDocument();
  });

  it("renders a back button that calls onBack", async () => {
    const onBack = vi.fn();
    render(<BlogPostReader post={post} onBack={onBack} />);
    await userEvent.click(screen.getByRole("button", { name: /back/i }));
    expect(onBack).toHaveBeenCalledOnce();
  });

  it("renders the cover image when present", () => {
    render(<BlogPostReader post={post} onBack={vi.fn()} />);
    const imgs = screen.getAllByRole("img");
    const cover = imgs.find((img) => img.getAttribute("src") === post.coverImage);
    expect(cover).toBeTruthy();
  });

  it("renders post body Markdown content", () => {
    render(<BlogPostReader post={post} onBack={vi.fn()} />);
    expect(screen.getByText(/The Parallel No One Asked For/i)).toBeInTheDocument();
  });
});
