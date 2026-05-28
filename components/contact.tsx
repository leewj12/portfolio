import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="container-px scroll-mt-20 border-t border-neutral-200 py-20 dark:border-neutral-800"
    >
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">연락처</h2>
      <p className="mt-2 max-w-lg text-neutral-600 text-balance dark:text-neutral-400">
        부족하지만 좋은 기회가 있다면 함께 성장하고 싶습니다. 궁금한 점이나
        제안은 편하게 연락 부탁드립니다.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href="mailto:wj.lee.contact@gmail.com"
          className="inline-flex items-center gap-2.5 rounded-lg border border-neutral-200 px-5 py-3 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
        >
          <Mail className="h-4 w-4 text-indigo-500" />
          wj.lee.contact@gmail.com
        </a>
        <a
          href="https://github.com/leewj12"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-lg border border-neutral-200 px-5 py-3 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
        >
          <GithubIcon className="h-4 w-4 text-indigo-500" />
          github.com/leewj12
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="container-px border-t border-neutral-200 py-8 dark:border-neutral-800">
      <p className="font-mono text-xs text-neutral-500">
        © {new Date().getFullYear()} 이원재 · Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
