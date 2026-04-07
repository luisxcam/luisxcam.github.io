import { useNavigate } from "react-router-dom";
import TerminalWindow from "@/components/TerminalWindow";
import BlogPostReader from "@/components/BlogPostReader";
import { useBlogPosts } from "@/hooks/useBlog";

interface BlogSectionProps {
  slug?: string;
}

const BlogSection = ({ slug }: BlogSectionProps) => {
  const navigate = useNavigate();
  const { data: posts, isLoading, isError } = useBlogPosts();

  const activePost = slug ? posts?.find((p) => p.slug === slug) ?? null : null;

  if (activePost) {
    return <BlogPostReader post={activePost} onBack={() => navigate("/blog")} />;
  }

  return (
    <div className="space-y-4">
      <TerminalWindow title="~/portfolio/blog/">
        <div className="text-xs text-muted-foreground">
          <span className="text-terminal">$</span> find blog/ -name "*.md" | sort -r
        </div>
      </TerminalWindow>

      {isError && (
        <p className="text-xs font-mono text-metal">
          <span className="text-terminal">$</span> error: failed to load posts.
        </p>
      )}

      {isLoading && (
        <p className="text-xs font-mono text-muted-foreground">
          <span className="text-terminal">$</span> loading posts...
        </p>
      )}

      {posts?.map((post) => (
        <article
          key={post.slug}
          onClick={() => navigate(`/blog/${post.slug}`)}
          className="border border-border bg-card p-5 hover:border-metal transition-colors duration-75 cursor-pointer group"
        >
          <div className="text-[10px] text-muted-foreground mb-2 font-mono">
            {post.date} — {post.tags.map((t) => `#${t}`).join(" ")}
          </div>
          <h3 className="font-display font-bold text-lg mb-2 group-hover:text-metal transition-colors duration-75">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{post.excerpt}</p>
          <div className="mt-3 text-xs text-terminal">→ read_more.sh</div>
        </article>
      ))}
    </div>
  );
};

export default BlogSection;
