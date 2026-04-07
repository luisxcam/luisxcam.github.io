import { cn } from "@/lib/utils";

type CodeProps = React.ComponentPropsWithoutRef<"code"> & { node?: unknown };

const BlogCodeBlock = ({ className, children, ...props }: CodeProps) => {
  const isBlock = Boolean(className?.includes("language-"));
  const language = className?.match(/language-(\w+)/)?.[1];

  if (!isBlock) {
    return (
      <code
        className="text-terminal bg-muted px-1 py-0.5 text-xs font-mono rounded-sm"
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <div className="my-4">
      {language && (
        <div className="text-[10px] font-mono text-muted-foreground mb-1 uppercase tracking-widest">
          // {language}
        </div>
      )}
      <code
        className={cn(
          "block bg-card border-l-2 border-terminal px-4 py-3 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre",
          className
        )}
        {...props}
      >
        {children}
      </code>
    </div>
  );
};

export default BlogCodeBlock;
export type { CodeProps };
