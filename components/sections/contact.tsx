import { SiGithub, SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm transition dark:border-zinc-800 dark:bg-zinc-950">
        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
            Open to Frontend Roles & Product Teams
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            I’m currently looking for opportunities in frontend engineering,
            especially teams working on scalable web applications, dashboards,
            and data-heavy interfaces.
          </p>
        </div>

        {/* LINKS */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {/* Email */}
          <a
            href="mailto:krisana.s@kkumail.com"
            className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/70"
          >
            <div className="flex items-center gap-3">
              <SiGmail size={18} className="text-zinc-500" />
              <span className="text-sm font-medium text-zinc-900 dark:text-white">
                Email
              </span>
            </div>

            <span className="text-xs text-zinc-500 transition group-hover:translate-x-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
              Send →
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/KrisanaWork"
            target="_blank"
            className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/70"
          >
            <div className="flex items-center gap-3">
              <SiGithub size={18} className="text-zinc-500" />
              <span className="text-sm font-medium text-zinc-900 dark:text-white">
                GitHub
              </span>
            </div>

            <span className="text-xs text-zinc-500 transition group-hover:translate-x-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
              View →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
