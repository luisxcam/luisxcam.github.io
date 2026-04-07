import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/lib/posts";
import type { BlogPost } from "@/types/blog";

export function useBlogPosts() {
  return useQuery<BlogPost[]>({
    queryKey: ["blog-posts"],
    queryFn: () => Promise.resolve(getAllPosts()),
  });
}

export function useBlogPost(slug: string) {
  return useQuery<BlogPost | null>({
    queryKey: ["blog-post", slug],
    queryFn: () => Promise.resolve(getAllPosts().find((p) => p.slug === slug) ?? null),
    enabled: Boolean(slug),
  });
}
