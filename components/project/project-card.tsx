import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiPhp,
  SiPostgresql,
  SiLeaflet,
  SiMysql,
  SiDocker,
} from "react-icons/si";

type ProjectCardProps = {
  featured?: boolean;
  period?: string;
  title: string;
  shortDescription: string;
  image: string;
  tech: string[];
  role: string;
  company?: string;
  status: string;
  demo?: string;
  restricted?: boolean;
};

const techIcons = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  PostgreSQL: SiPostgresql,
  "Leaflet.js": SiLeaflet,
  MySQL: SiMysql,
  Docker: SiDocker,
};

export default function ProjectCard({
  featured,
  period,
  title,
  shortDescription,
  image,
  tech,
  role,
  company,
  status,
  demo,
  restricted,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white shadow-sm dark:bg-zinc-950/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700">
      <div className="relative aspect-video overflow-hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-3">
          {featured && (
            <span className="rounded-full border border-zinc-700 bg-black/40 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
              Featured
            </span>
          )}

          <span className="rounded-full border border-zinc-700 bg-black/40 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            {status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              {title}
            </h3>

            {company && <p className="mt-2 text-sm text-zinc-500">{company}</p>}
          </div>

          {period && (
            <span className="whitespace-nowrap text-sm text-zinc-500">
              {period}
            </span>
          )}
        </div>

        <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
          {shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {tech.map((item) => {
            const Icon = techIcons[item as keyof typeof techIcons];

            return (
              <div
                key={item}
                className="flex items-center gap-3 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300"
              >
                {Icon && (
                  <Icon
                    size={14}
                    className="text-zinc-500 dark:text-zinc-400"
                  />
                )}

                <span className="font-mono">{item}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500">Role</p>

            <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-200">
              {role}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {demo && !restricted && (
              <a
                href={demo}
                target="_blank"
                className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-950 dark:text-white transition hover:bg-zinc-100 dark:bg-zinc-900"
              >
                Live Demo
              </a>
            )}

            {restricted && (
              <span className="text-sm text-zinc-500">Restricted Access</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
