import FadeIn from "@/components/animations/fade-in";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* LEFT */}
        <div>
          <FadeIn delay={0.1}>
            <p className="mb-4 font-mono text-sm text-zinc-500 dark:text-zinc-400">
              Frontend Developer
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-7xl">
              Krisana
              <br />
              Sangkawanna
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              I build scalable, production-ready frontend systems with React and
              Next.js, focused on performance, UX, and maintainable UI
              architecture.
            </p>

            {/* 👉 NEW: SIGNAL LINE (important for hire signal) */}
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
              React • Next.js • TypeScript
            </p>
          </FadeIn>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black"
            >
              View Projects
            </a>

            <a
              href="/images/resume/krisana_resume.pdf"
              className="rounded-xl border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-sm text-zinc-500">Current Focus</p>

            <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">
              Frontend Engineering Practice
            </h3>

            {/* 👉 CHANGED: from generic → proof-style language */}
            <div className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <p>• Building reusable UI components with React & TypeScript</p>
              <p>• Developing responsive, production-ready interfaces</p>
              <p>• Improving rendering performance in Next.js applications</p>
              <p>• Structuring scalable frontend architecture</p>
            </div>

            <div className="mt-6 border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-zinc-800">
              Focused on real-world frontend engineering workflows
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
