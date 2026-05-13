"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-mono font-semibold tracking-tight text-zinc-950 transition hover:opacity-70 dark:text-white"
        >
          Krisana
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="#projects"
            className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Projects
          </Link>

          <Link
            href="#experience"
            className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Experience
          </Link>

          <Link
            href="#skills"
            className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Skills
          </Link>

          <a
            href="/images/resume/krisana_resume.pdf"
            target="_blank"
            className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
