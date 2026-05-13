import { SiGithub, SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
            Let&apos;s Build Something Together
          </h2>

          <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
            Currently interested in frontend development opportunities, modern
            web applications, and collaborative product teams.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {/* Email */}
          <a
            href="mailto:krisana.s@kkumail.com"
            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-100 px-5 py-4 transition hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            <SiGmail size={18} />
            <span>Email</span>
          </a>

          {/* Github */}
          <a
            href="https://github.com/KrisanaWork"
            target="_blank"
            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-100 px-5 py-4 transition hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            <SiGithub size={18} />

            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
