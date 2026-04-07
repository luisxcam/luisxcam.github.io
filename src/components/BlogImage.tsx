type BlogImageProps = React.ComponentPropsWithoutRef<"img"> & { node?: unknown };

const BlogImage = ({ src, alt, ...props }: BlogImageProps) => {
  const filename = src ? src.split("/").pop()?.split("?")[0] ?? "image" : "image";

  return (
    <figure className="my-4 space-y-1">
      <div className="text-[10px] font-mono text-muted-foreground">// {filename}</div>
      <img
        src={src}
        alt={alt ?? ""}
        className="w-full border border-border"
        {...props}
      />
      {alt && (
        <figcaption className="text-[10px] font-mono text-muted-foreground italic">
          {alt}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage;
export type { BlogImageProps };
