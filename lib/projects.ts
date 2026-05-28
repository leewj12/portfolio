import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/projects");

export type RepoLink = {
  label: string;
  url: string;
};

export type ProjectMeta = {
  slug: string;
  order: number;
  name: string;
  tagline: string;
  tech: string[];
  demo: string;
  period: string;
  role: string;
  repos: RepoLink[];
};

function readProject(slug: string): { meta: ProjectMeta; content: string } {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return {
    meta: { slug, ...(data as Omit<ProjectMeta, "slug">) },
    content,
  };
}

export function getAllProjects(): ProjectMeta[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => readProject(f.replace(/\.mdx$/, "")).meta)
    .sort((a, b) => a.order - b.order);
}

export function getProject(
  slug: string,
): { meta: ProjectMeta; content: string } | null {
  if (!fs.existsSync(path.join(CONTENT_DIR, `${slug}.mdx`))) return null;
  return readProject(slug);
}
