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

  // 👉 NEW (important)
  impact?: string;
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
  impact,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative aspect-16/10 sm:aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={image}
          alt={title}
          width={900}
          height={600}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:top-4">
          {featured && (
            <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] sm:text-xs text-zinc-200 backdrop-blur border border-white/10">
              Featured
            </span>
          )}

          <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] sm:text-xs text-zinc-200 backdrop-blur border border-white/10">
            {status}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-6">
        {/* HEADER */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              {title}
            </h3>

            {company && (
              <p className="mt-1 text-xs sm:text-sm text-zinc-500">{company}</p>
            )}

            {impact && (
              <p className="mt-2 text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                {impact}
              </p>
            )}
          </div>

          {period && (
            <span className="text-[11px] sm:text-xs text-zinc-500 whitespace-nowrap">
              {period}
            </span>
          )}
        </div>

        {/* DESCRIPTION */}
        <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {shortDescription}
        </p>

        {/* TECH */}
        <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
          {tech.slice(0, 4).map((item) => {
            const Icon = techIcons[item as keyof typeof techIcons];

            return (
              <div
                key={item}
                className="flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-2.5 py-1 text-[10px] sm:text-xs text-zinc-600 dark:text-zinc-300"
              >
                {Icon && <Icon size={11} className="text-zinc-400" />}
                <span>{item}</span>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] text-zinc-500">Role</p>
            <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-200">
              {role}
            </p>
          </div>

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="inline-flex justify-center rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-900 dark:text-white transition hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              {restricted ? "Access Required" : "View Project"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
