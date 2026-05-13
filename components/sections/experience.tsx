import ExperienceCard from "../experience/experience-card";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
      {/* HEADER */}
      <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
        {/* LEFT */}
        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500">
            Experience
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Building Production Systems
          </h2>
        </div>

        {/* RIGHT */}
        <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg md:justify-self-end">
          Frontend-focused engineer building production systems for government
          workflows, GIS platforms, and internal business operations with
          real-world reliability and scalable architecture.
        </p>
      </div>

      {/* CONTENT */}
      <div className="space-y-8 md:space-y-10">
        {experiences.map((experience, index) => (
          <div key={experience.company} className="transition-all duration-300">
            <ExperienceCard {...experience} impact={experience.impact} />
          </div>
        ))}
      </div>
    </section>
  );
}
