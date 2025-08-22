import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Dock from "../components/Dock";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
  <About />
    <Projects />
  <Skills />
  <Education />
      <Contact />
      <Dock />
    </div>
  );
}
