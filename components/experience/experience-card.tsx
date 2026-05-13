type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  productionTech: string[];
  selfLearning: string;
};

export default function ExperienceCard({
  company,
  role,
  period,
  description,
  responsibilities,
  productionTech,
  selfLearning,
}: ExperienceCardProps) {
  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transtion hover:shadow-md dark:border-zinc-800 dark:bg-zinc950">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">
            {role}
          </h3>

          <p className="mt-2 text-zinc-500">{company}</p>
        </div>

        <span className="font-mono text-sm text-zinc-500">{period}</span>
      </div>

      {/* Description */}
      <p className="mt-6 max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      {/* Responsibilities */}
      <div className="mt-8">
        <h4 className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
          Responsibilities
        </h4>

        <ul className="mt-5 space-y-4">
          {responsibilities.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-zinc-400" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Production Tech */}
      <div className="mt-10">
        <h4 className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
          Production Experience
        </h4>

        <div className="mt-4 flex flex-wrap gap-3">
          {productionTech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Self Learning */}
      <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
        <h4 className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
          Self Learning
        </h4>

        <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-400">
          {selfLearning}
        </p>
      </div>
    </article>
  );
}
