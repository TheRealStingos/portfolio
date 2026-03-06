import Navbar from "@/src/components/Navbar";
import AnimatedBackground from "@/src/components/AnimatedBackground";
import About from "@/src/components/About";
import Contact from "../components/Contact";
import Badges from "../components/Badges";

export default function Home() {
  return (
    <div>
      <AnimatedBackground />
      <Navbar />
      <About />
      <Badges />
      <Contact />
    </div>
  );
}
