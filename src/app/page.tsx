import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Dock from "../components/Dock";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Projects />
      <Contact />
      <Dock />
    </div>
  );
}
