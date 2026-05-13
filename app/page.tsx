import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/project";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-100 text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
    </main>
  );
}
