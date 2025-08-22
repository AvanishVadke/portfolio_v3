"use client";
import { useEffect, useMemo, useState } from "react";
import ProjectCard, { type Project } from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/projects.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const data = (await res.json()) as Project[];
        if (!cancelled) setProjects(data);
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Failed to load projects";
        if (!cancelled) setError(msg);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const stats = useMemo(() => {
    const total = projects?.length ?? 0;
    const oss = projects?.filter(p => p.visibility === "public").length ?? 0;
    const startYear = 2021; // adjust if needed
    const years = new Date().getFullYear() - startYear;
    return { total, oss, years };
  }, [projects]);

  return (
    <section id="projects" aria-label="Projects" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white">Selected Projects</h2>
          <p className="mt-2 text-neutral-300">A snapshot of things I’ve built and shipped recently.</p>
        </header>

        <div className="mb-8 grid grid-cols-3 gap-4">
          <Stat label="Projects" value={stats.total} />
          <Stat label="Open Source" value={stats.oss} />
          <Stat label="Years" value={stats.years} />
        </div>

        {error && (
          <p role="status" className="text-amber-300">{error}</p>
        )}
        {!projects && !error && (
          <p role="status" className="text-neutral-300">Loading projects…</p>
        )}

        {projects && (
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-white font-mono text-xl font-semibold">{value}</div>
      <div className="text-xs text-neutral-300/90 uppercase tracking-wider">{label}</div>
    </div>
  );
}
