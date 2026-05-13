import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPrisma,
  SiPostgresql,
  SiMaplibre,
  SiLeaflet,
  SiHtml5,
  SiCss,
  SiMysql,
  SiDocker,
  SiGit,
  SiPostman,
} from "react-icons/si";

type SkillCardProps = {
  category: string;
  items: string[];
};

const techIcons = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  PHP: SiPhp,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  "MapLibre GL JS": SiMaplibre,
  "Leaflet.js": SiLeaflet,
  HTML: SiHtml5,
  CSS: SiCss,
  MySQL: SiMysql,
  Docker: SiDocker,
  Git: SiGit,
  Postman: SiPostman,
};

export default function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      {/* HEADER */}
      <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-500">
        {category}
      </h3>

      {/* ITEMS */}
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => {
          const Icon = techIcons[item as keyof typeof techIcons];

          return (
            <span
              key={item}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {Icon && (
                <Icon size={12} className="text-zinc-500 dark:text-zinc-400" />
              )}

              <span className="font-mono">{item}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
