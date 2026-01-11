#!/usr/bin/env node
import { Command } from "commander";
import { readFileSync } from "node:fs";
import { generateMarkdown } from "./generate.js";
import type { Project } from "./types.js";

const program = new Command();

program
  .name("readme-cards")
  .description("Generate GitHub README project cards from a JSON file.")
  .requiredOption("-i, --input <path>", "Path to JSON file containing projects")
  .option("-o, --output <path>", "Output file path (defaults to stdout)");

program.parse(process.argv);

const opts = program.opts<{ input: string; output?: string }>();

function parseProjects(jsonPath: string): Project[] {
  const raw = readFileSync(jsonPath, "utf-8");
  const data = JSON.parse(raw);

  if (!Array.isArray(data)) {
    throw new Error("Input JSON must be an array of project objects.");
  }
  return data as Project[];
}

const projects = parseProjects(opts.input);
const md = generateMarkdown(projects);

if (opts.output) {
  const { writeFileSync } = await import("node:fs");
  writeFileSync(opts.output, md, "utf-8");
} else {
  process.stdout.write(md + "\n");
}
