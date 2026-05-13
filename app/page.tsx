import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/project";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-100">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6">
        {/* spacing system = Apple style rhythm */}
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
