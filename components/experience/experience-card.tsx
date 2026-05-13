type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  productionTech: string[];
  selfLearning: string;
  impact?: string;
};

export default function ExperienceCard({
  company,
  role,
  period,
  description,
  responsibilities,
  productionTech,
  selfLearning,
  impact,
}: ExperienceCardProps) {
  return (
    <article className="group rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
      {/* HEADER */}
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            {role}
          </h3>

          <p className="text-sm text-zinc-500">{company}</p>

          {impact && (
            <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed max-w-xl">
              {impact}
            </p>
          )}
        </div>

        <span className="text-[11px] sm:text-xs font-mono text-zinc-500 whitespace-nowrap">
          {period}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl">
        {description}
      </p>

      {/* RESPONSIBILITIES */}
      <div className="mt-7">
        <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500">
          Key Contributions
        </h4>

        <ul className="mt-4 space-y-3">
          {responsibilities.slice(0, 4).map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* TECH */}
      <div className="mt-7">
        <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500">
          Production Stack
        </h4>

        <div className="mt-3 flex flex-wrap gap-2">
          {productionTech.slice(0, 5).map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <p className="text-[11px] text-zinc-500">Currently exploring</p>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {selfLearning}
        </p>
      </div>
    </article>
  );
}
