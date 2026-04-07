import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { createElement } from "react";
import { describe, it, expect, vi } from "vitest";
import BlogSection from "./BlogSection";
import * as useBlogModule from "@/hooks/useBlog";
import { getAllPosts } from "@/lib/posts";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return { ...actual, useNavigate: () => navigateMock };
});

const allPosts = getAllPosts();

function makeWrapper(initialPath = "/blog") {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return ({ children }: { children: React.ReactNode }) =>
    createElement(
      QueryClientProvider,
      { client: qc },
      createElement(MemoryRouter, { initialEntries: [initialPath] },
        createElement(Routes, null,
          createElement(Route, { path: "/blog/:slug", element: children }),
          createElement(Route, { path: "/blog", element: children }),
        )
      )
    );
}

describe("BlogSection", () => {
  it("renders the post list on initial load", async () => {
    render(<BlogSection />, { wrapper: makeWrapper() });
    await waitFor(() =>
      expect(screen.getByText(allPosts[0].title)).toBeInTheDocument()
    );
    expect(screen.getAllByRole("article")).toHaveLength(allPosts.length);
  });

  it("renders each post's excerpt and tags", async () => {
    render(<BlogSection />, { wrapper: makeWrapper() });
    await waitFor(() =>
      expect(screen.getByText(allPosts[0].excerpt)).toBeInTheDocument()
    );
  });

  it("navigates to the post URL when a post is clicked", async () => {
    navigateMock.mockClear();
    render(<BlogSection />, { wrapper: makeWrapper() });
    await waitFor(() =>
      expect(screen.getByText(allPosts[0].title)).toBeInTheDocument()
    );
    await userEvent.click(screen.getByText(allPosts[0].title));
    expect(navigateMock).toHaveBeenCalledWith(`/blog/${allPosts[0].slug}`);
  });

  it("renders the reader directly when slug prop is provided", async () => {
    const post = allPosts[0];
    render(<BlogSection slug={post.slug} />, { wrapper: makeWrapper(`/blog/${post.slug}`) });
    await waitFor(() =>
      expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument()
    );
  });

  it("navigates to /blog when back button is clicked", async () => {
    navigateMock.mockClear();
    const post = allPosts[0];
    render(<BlogSection slug={post.slug} />, { wrapper: makeWrapper(`/blog/${post.slug}`) });
    await waitFor(() =>
      expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument()
    );
    await userEvent.click(screen.getByRole("button", { name: /back/i }));
    expect(navigateMock).toHaveBeenCalledWith("/blog");
  });

  it("shows an error message when the query fails", () => {
    const spy = vi.spyOn(useBlogModule, "useBlogPosts").mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      isPending: false,
    } as ReturnType<typeof useBlogModule.useBlogPosts>);
    render(<BlogSection />, { wrapper: makeWrapper() });
    expect(screen.getByText(/error: failed to load posts/i)).toBeInTheDocument();
    spy.mockRestore();
  });
});
