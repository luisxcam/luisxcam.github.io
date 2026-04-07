import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogCodeBlock from "./BlogCodeBlock";

describe("BlogCodeBlock", () => {
  it("renders inline code without block styling", () => {
    render(<BlogCodeBlock>inline snippet</BlogCodeBlock>);
    const el = screen.getByText("inline snippet");
    expect(el.tagName).toBe("CODE");
    expect(el.className).not.toContain("border-l-2");
  });

  it("renders block code with left border and language label", () => {
    const { container } = render(
      <BlogCodeBlock className="language-rust">fn main() {"{}"}</BlogCodeBlock>
    );
    expect(container.querySelector("code")?.className).toContain("border-l-2");
    expect(screen.getByText("// rust")).toBeInTheDocument();
  });

  it("renders block code without label when no language is specified", () => {
    const { container } = render(
      <BlogCodeBlock className="hljs">some code</BlogCodeBlock>
    );
    expect(container.querySelector("code")).toBeTruthy();
    expect(screen.queryByText(/^\/\//)).not.toBeInTheDocument();
  });
});
