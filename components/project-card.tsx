import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { ProjectMeta } from "@/lib/projects";

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-neutral-200 bg-neutral-50/50 p-6 transition-colors hover:border-indigo-400/60 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-indigo-500/50">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
            {project.period}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">
            <Link
              href={`/projects/${project.slug}`}
              className="after:absolute after:inset-0"
            >
              {project.name}
            </Link>
          </h3>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500" />
      </div>

      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {project.tagline}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded border border-neutral-200 bg-white px-2 py-0.5 font-mono text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-5 flex flex-wrap items-center gap-4 pt-1">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-500 hover:text-indigo-600"
        >
          <ExternalLink className="h-4 w-4" />
          배포
        </a>
        {project.repos.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <GithubIcon className="h-4 w-4" />
            {repo.label}
          </a>
        ))}
      </div>
    </div>
  );
}
