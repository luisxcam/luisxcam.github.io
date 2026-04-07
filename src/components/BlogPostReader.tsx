import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import "highlight.js/styles/atom-one-dark.css";
import { cn } from "@/lib/utils";
import TerminalWindow from "@/components/TerminalWindow";
import BlogCodeBlock from "@/components/BlogCodeBlock";
import BlogImage from "@/components/BlogImage";
import type { BlogPost } from "@/types/blog";

interface BlogPostReaderProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostReader = ({ post, onBack }: BlogPostReaderProps) => {
  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        aria-label="back to blog list"
        className="text-xs font-mono text-terminal hover:text-terminal/70 transition-colors duration-75"
      >
        ← blog/
      </button>

      <TerminalWindow title={`~/portfolio/blog/${post.slug}.md`}>
        <div className="space-y-4">
          {/* Meta */}
          <div className="text-[10px] text-muted-foreground font-mono">
            {post.date} — {post.tags.map((t) => `#${t}`).join(" ")}
          </div>

          {/* Cover image */}
          {post.coverImage && (
            <BlogImage src={post.coverImage} alt={post.title} />
          )}

          {/* Title */}
          <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            {post.title}
          </h1>

          {/* Body */}
          <div
            className={cn(
              "prose prose-invert prose-sm max-w-none",
              "prose-headings:font-display prose-headings:text-foreground prose-headings:font-bold",
              "prose-p:text-muted-foreground prose-p:leading-relaxed",
              "prose-a:text-terminal prose-a:no-underline hover:prose-a:underline",
              "prose-strong:text-foreground",
              "prose-hr:border-border",
              "prose-li:text-muted-foreground",
              "prose-table:w-full prose-table:border-collapse",
              "prose-th:border prose-th:border-border prose-th:px-3 prose-th:py-2 prose-th:text-foreground",
              "prose-td:border prose-td:border-border prose-td:px-3 prose-td:py-2 prose-td:text-muted-foreground",
              "prose-pre:p-0 prose-pre:bg-transparent prose-pre:border-none"
            )}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkUnwrapImages]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                code: BlogCodeBlock as React.ComponentType<React.ComponentPropsWithoutRef<"code">>,
                pre: ({ children }) => <>{children}</>, // strip pre wrapper — BlogCodeBlock handles its own block styling
                img: BlogImage as React.ComponentType<React.ComponentPropsWithoutRef<"img">>,
              }}
            >
              {post.body}
            </ReactMarkdown>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default BlogPostReader;
