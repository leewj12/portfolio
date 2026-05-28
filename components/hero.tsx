import Link from "next/link";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="container-px flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
      <div className="animate-fade-up">
        <p className="mb-4 font-mono text-sm text-indigo-500">
          $ whoami
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          이원재
        </h1>
        <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 sm:text-2xl">
          Frontend · Backend · Fullstack Developer
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 text-balance dark:text-neutral-400">
          팀 프로젝트에서 프론트엔드와 일부 백엔드 기능을 맡았고, 이후 백엔드
          기능 보완과 EC2 배포·운영까지 직접 진행했습니다. 프론트엔드·백엔드·풀스택
          모두 열려 있고, 문제를 구조적으로 풀고 일단 만들어 돌려보며 배우는 것을
          좋아합니다.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
          >
            프로젝트 보기
            <ArrowDown className="h-4 w-4" />
          </Link>
          <a
            href="https://github.com/leewj12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="mailto:wj.lee.contact@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
