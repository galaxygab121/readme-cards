import { describe, expect, it } from "vitest";
import { generateMarkdown } from "../src/generate.js";

describe("generateMarkdown", () => {
  it("generates markdown with separators", () => {
    const md = generateMarkdown([
      { title: "A", description: "desc" },
      { title: "B", description: "desc2" }
    ]);
    expect(md).toContain("### A");
    expect(md).toContain("### B");
    expect(md).toContain("---");
  });
});
