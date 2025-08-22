"use client";
import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

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
      {/* Grid/gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(37,99,235,0.15),_transparent_35%),radial-gradient(circle_at_80%_30%,_rgba(29,78,216,0.12),_transparent_35%)]" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.04),_transparent)]" />
      <div aria-hidden className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative z-10 max-w-3xl text-center px-6">
        <div className="inline-flex items-center gap-2 text-blue-400/90 mb-4">
          <Sparkles className="size-5" aria-hidden />
          <span className="text-xs tracking-widest uppercase">Full Stack Developer</span>
        </div>

        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          <span className="align-baseline">{typed}</span>
          <span className="ml-1 inline-block w-[1ch] bg-white animate-[blink_1s_steps(1)_infinite]" aria-hidden />
        </h1>

        <p className="mt-5 text-neutral-300 text-base sm:text-lg">
          I craft performant web apps with clean architecture, delightful UX, and robust, scalable code.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={scrollTo("projects")} className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            View Projects
          </button>
          <button onClick={scrollTo("contact")} className="px-5 py-2.5 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-white/25 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
            Get In Touch
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 text-white/70 animate-bounce" aria-hidden>
          <ArrowDown className="size-6" />
        </div>
      </div>

      <style jsx>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
