import ProjectCard from "@/components/project/project-card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
            Production Projects
          </h2>
        </div>

        <p className="max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          Real-world systems developed for government and operational workflows,
          focusing on frontend architecture, spatial visualization, responsive
          interfaces, and scalable user experiences.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            featured={project.featured}
            period={project.period}
            title={project.title}
            shortDescription={project.shortDescription}
            image={project.image}
            tech={project.tech}
            role={project.role}
            company={project.company}
            status={project.status}
            demo={project.demo}
            restricted={project.restricted}
          />
        ))}
      </div>
    </section>
  );
}
