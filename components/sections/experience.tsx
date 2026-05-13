import ExperienceCard from "../experience/experience-card";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
            Work Experience
          </h2>
        </div>

        <p className="max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          Professional experience developing operational systems for government
          organizations, including billing platforms, GIS applications, and
          internal workflow systems.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company}
            company={experience.company}
            role={experience.role}
            period={experience.period}
            description={experience.description}
            responsibilities={experience.responsibilities}
            productionTech={experience.productionTech}
            selfLearning={experience.selfLearning}
          />
        ))}
      </div>
    </section>
  );
}
