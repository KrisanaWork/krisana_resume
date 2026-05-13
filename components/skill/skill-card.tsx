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
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/60 shadow-sm p-6">
      <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{category}</h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => {
          const Icon = techIcons[item as keyof typeof techIcons];
          return (
            <span
              key={item}
              className="flex items-center gap-3 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300"
            >
              {Icon && (
                <Icon size={14} className="text-zinc-500 dark:text-zinc-400" />
              )}
              <span className="font-mono">{item}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
