import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createElement } from "react";
import { describe, it, expect } from "vitest";
import { useBlogPosts, useBlogPost } from "./useBlog";
import { getAllPosts } from "@/lib/posts";

function makeWrapper() {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return ({ children }: { children: React.ReactNode }) =>
    createElement(QueryClientProvider, { client: qc }, children);
}

describe("useBlogPosts", () => {
  it("returns all posts", async () => {
    const { result } = renderHook(() => useBlogPosts(), { wrapper: makeWrapper() });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toHaveLength(getAllPosts().length);
  });

  it("returns posts with required fields", async () => {
    const { result } = renderHook(() => useBlogPosts(), { wrapper: makeWrapper() });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    const post = result.current.data![0];
    expect(post).toHaveProperty("slug");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");
  });
});

describe("useBlogPost", () => {
  it("returns the matching post by slug", async () => {
    const slug = getAllPosts()[0].slug;
    const { result } = renderHook(() => useBlogPost(slug), { wrapper: makeWrapper() });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data?.slug).toBe(slug);
  });

  it("returns null for an unknown slug", async () => {
    const { result } = renderHook(() => useBlogPost("no-such-post"), {
      wrapper: makeWrapper(),
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toBeNull();
  });

  it("does not run when slug is empty", () => {
    const { result } = renderHook(() => useBlogPost(""), { wrapper: makeWrapper() });
    expect(result.current.status).toBe("pending");
    expect(result.current.fetchStatus).toBe("idle");
  });
});
