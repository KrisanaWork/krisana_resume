import ProjectCard from "@/components/project/project-card";
import { projects } from "@/data/projects";
import FadeIn from "@/components/animations/fade-in";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      {/* HEADER */}
      <div className="mb-14 md:mb-20 grid gap-6 md:grid-cols-2 md:items-end">
        {/* LEFT */}
        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            Production Projects
          </h2>
        </div>

        {/* RIGHT */}
        <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg md:justify-self-end">
          Production systems built for government and spatial data workflows,
          focused on frontend architecture, usability, and real-world
          performance with scalable UI systems.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.08}>
            <ProjectCard {...project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
