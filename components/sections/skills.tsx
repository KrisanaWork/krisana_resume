import SkillCard from "@/components/skill/skill-card";
import { skills } from "@/data/skills";
import FadeIn from "@/components/animations/fade-in";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      {/* HEADER */}
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
            Engineering Stack
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Frontend Systems & Infrastructure
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          A focused collection of technologies used to build production-grade
          frontend systems, spatial visualization tools, and scalable web
          applications in real-world environments.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <FadeIn key={skill.category} delay={index * 0.08}>
            <SkillCard category={skill.category} items={skill.items} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
