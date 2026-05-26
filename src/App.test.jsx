/** @vitest-environment jsdom */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";

describe("Prop-based rendering", () => {
  it("Header renders name prop", () => {
    render(<Header name="My Test Blog" />);
    expect(screen.getByText("My Test Blog")).toBeInTheDocument();
  });

  it("About uses provided image and about text", () => {
    render(<About image="/test.jpg" about="Test description" />);
    expect(screen.getByAltText("blog logo")).toHaveAttribute("src", "/test.jpg");
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("About uses default image when none provided", () => {
    render(<About about="Default image text" />);
    expect(screen.getByAltText("blog logo")).toHaveAttribute("src", "https://via.placeholder.com/215");
  });

  it("Article displays title, date (default), and preview", () => {
    render(<Article title="Test Title" preview="Test preview" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("January 1, 1970")).toBeInTheDocument();
    expect(screen.getByText("Test preview")).toBeInTheDocument();
  });

  it("ArticleList maps posts into Article components", () => {
    const posts = [
      { id: 1, title: "A", date: "Jan 1", preview: "p1" },
      { id: 2, title: "B", date: "Jan 2", preview: "p2" }
    ];
    render(<ArticleList posts={posts} />);
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });
});