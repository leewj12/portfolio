import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur-md dark:border-neutral-800/60 dark:bg-neutral-950/70">
      <nav className="container-px flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          leewj12<span className="text-indigo-500">.dev</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-4">
          <Link
            href="/#projects"
            className="hidden rounded-md px-3 py-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 sm:inline-block"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="hidden rounded-md px-3 py-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 sm:inline-block"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
