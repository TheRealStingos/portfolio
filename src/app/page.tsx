import Hero from "@/src/components/Hero";
import Background from "@/src/components/Background";
import About from "@/src/components/About";
import Contact from "../components/Contact";
import Badges from "../components/Badges";
import ProjectsSection from "../components/ProjectSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Background />

      <div className="relative z-10">
        <Hero />
        <About />
        <Badges />
        <ProjectsSection />
        <Contact />
      </div>
    </div>
  );
}
