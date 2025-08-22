"use client";
import { useEffect, useState } from "react";
import { ArrowDown, Sparkles, FileText } from "lucide-react";
import dynamic from "next/dynamic";
const DarkVeil = dynamic(() => import("./DarkVeil"), { ssr: false });

export default function Hero() {
  const fullName = "Avanish Vadke";
  const [typed, setTyped] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let i = 0;
    const id = setInterval(() => {
      setTyped(fullName.slice(0, i + 1));
      i++;
      if (i >= fullName.length) clearInterval(id);
    }, 80);
    return () => clearInterval(id);
  }, [mounted]);

  const scrollTo = (id: string) => () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" aria-label="Hero" className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      {/* Background: swap grid for DarkVeil on this branch */}
      <div aria-hidden className="absolute inset-0">
        <DarkVeil hueShift={0} noiseIntensity={0.03} scanlineIntensity={0.1} scanlineFrequency={6.0} warpAmount={0.02} />
      </div>

  <div className="relative z-10 max-w-3xl text-center px-6">
        

        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          <span className="align-baseline">{typed}</span>
          <span className="ml-1 inline-block w-[1ch] bg-white animate-[blink_1s_steps(1)_infinite]" aria-hidden />
        </h1>

        <div className="inline-flex items-center gap-2 text-blue-400/90 mt-4">
          <Sparkles className="size-5" aria-hidden />
          <span className="text-xs tracking-widest uppercase">Computer Engineering Student — Software Developer</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button onClick={scrollTo("projects")} className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-xs sm:text-sm font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            View Projects
          </button>
          <button onClick={scrollTo("connect")} className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-white/25 text-xs sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
            Get In Touch
          </button>
          <a href="https://drive.google.com/file/d/1eVP5qVA36hoBQyWeeXK_1z1McAmTQ6uy/view?usp=sharing" target="_blank" rel="noopener" className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-md border border-white/15 text-blue-200 hover:text-white hover:border-white/25 text-xs sm:text-sm font-medium transition-colors inline-flex items-center justify-center gap-2">
            <FileText className="size-4" /> Resume
          </a>
        </div>

      </div>
      
      {/* Scroll indicator positioned above the dock */}
  <div className="absolute left-1/2 -translate-x-1/2 bottom-[96px] sm:bottom-24 text-white/70 animate-bounce z-10" aria-hidden>
        <ArrowDown className="size-6" />
      </div>

      <style jsx>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
