import type { ComponentProps } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getAllProjects, getProject } from "@/lib/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/contact";
import { GithubIcon } from "@/components/icons";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "프로젝트를 찾을 수 없음" };
  return {
    title: `${project.meta.name} | 이원재`,
    description: project.meta.tagline,
  };
}

const mdxComponents = {
  a: (props: ComponentProps<"a">) => {
    const external = props.href?.startsWith("http");
    return (
      <a
        {...props}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      />
    );
  },
  img: (props: ComponentProps<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={props.alt ?? ""}
      className="rounded-lg border border-neutral-200 dark:border-neutral-800"
    />
  ),
};

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { meta, content } = project;

  return (
    <>
      <Navbar />
      <main className="container-px py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <ArrowLeft className="h-4 w-4" />
          프로젝트 목록
        </Link>

        <header className="mt-8 border-b border-neutral-200 pb-8 dark:border-neutral-800">
          <p className="font-mono text-sm text-indigo-500">
            {meta.period} · {meta.role}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {meta.name}
          </h1>
          <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
            {meta.tagline}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {meta.tech.map((t) => (
              <li
                key={t}
                className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={meta.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
            >
              <ExternalLink className="h-4 w-4" />
              배포 사이트
            </a>
            {meta.repos.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
              >
                <GithubIcon className="h-4 w-4" />
                {repo.label}
              </a>
            ))}
          </div>
        </header>

        <article className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-a:text-indigo-500 prose-a:no-underline hover:prose-a:underline">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
