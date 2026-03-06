import Navbar from "@/src/components/Navbar";
import AnimatedBackground from "@/src/components/AnimatedBackground";
import About from "@/src/components/About";
import Contact from "../components/Contact";
import Badges from "../components/Badges";
import ProjectsSection from "../components/ProjectSection";

export default function Home() {
  return (
    <div>
      <AnimatedBackground />
      <Navbar />
      <About />
      <Badges />
      <ProjectsSection />
      <Contact />
    </div>
  );
}
