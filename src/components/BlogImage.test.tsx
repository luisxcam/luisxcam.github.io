import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogImage from "./BlogImage";

describe("BlogImage", () => {
  it("renders the image with the given src and alt", () => {
    render(<BlogImage src="https://example.com/photo.jpg" alt="A test image" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "https://example.com/photo.jpg");
    expect(img).toHaveAttribute("alt", "A test image");
  });

  it("shows the filename extracted from the src URL", () => {
    render(<BlogImage src="https://example.com/fft-output.png" alt="FFT" />);
    expect(screen.getByText("// fft-output.png")).toBeInTheDocument();
  });

  it("shows the alt text as a caption", () => {
    render(<BlogImage src="https://example.com/photo.jpg" alt="My caption" />);
    expect(screen.getByText("My caption")).toBeInTheDocument();
  });

  it("renders without crashing when src is undefined", () => {
    render(<BlogImage alt="no src" />);
    expect(screen.getByText("// image")).toBeInTheDocument();
  });
});
