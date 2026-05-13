import SkillCard from "@/components/skill/skill-card";
import { skills } from "@/data/skills";
import FadeIn from "@/components/animations/fade-in";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
            Technologies & Tools
          </h2>
        </div>

        <p className="max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          Technologies and tools used in production systems, frontend
          architecture, spatial visualization workflows, and enterprise
          application development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <FadeIn key={skill.category} delay={index * 0.1}>
            <SkillCard
              key={skill.category}
              category={skill.category}
              items={skill.items}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
