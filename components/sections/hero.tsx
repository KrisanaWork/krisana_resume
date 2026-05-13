export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
      {/* LEFT CONTENT */}
      <div>
        <p className="mb-4 font-mono text-zinc-600 dark:text-zinc-400">
          Frontend Developer
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight text-zinc-950 dark:text-white md:text-7xl">
          Krisana
          <br />
          Sangkawanna
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Building scalable and responsive web applications with Next.js,
          TypeScript, and modern frontend technologies.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-80 dark:bg-white dark:text-black"
          >
            View Projects
          </a>

          <a
            href="/images/resume/krisana_resume.pdf"
            className="rounded-xl border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Resume
          </a>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="relative hidden lg:block">
        {/* Glow */}
        <div className="absolute inset-0 bg-zinc-300/20 blur-3xl dark:bg-zinc-700/20" />

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
          {/* Top Bar */}
          <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          {/* Content */}
          <div className="space-y-6 p-6">
            {/* Chart */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500">Spatial Analysis</p>

                  <h3 className="mt-1 text-xl font-semibold text-zinc-950 dark:text-white">
                    Groundwater Monitoring
                  </h3>
                </div>

                <div className="rounded-full bg-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Live
                </div>
              </div>

              <div className="flex h-40 items-end gap-3">
                {[40, 65, 35, 80, 55, 90, 70].map((height) => (
                  <div
                    key={height}
                    style={{ height }}
                    className="flex-1 rounded-t-xl bg-zinc-300 dark:bg-zinc-700"
                  />
                ))}
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-sm text-zinc-500">Active Layers</p>

                <h4 className="mt-2 text-3xl font-bold text-zinc-950 dark:text-white">
                  65+
                </h4>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-sm text-zinc-500">Systems</p>

                <h4 className="mt-2 text-3xl font-bold text-zinc-950 dark:text-white">
                  3
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
