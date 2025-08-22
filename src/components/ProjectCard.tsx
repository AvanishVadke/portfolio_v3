import { ExternalLink, Github, Lock } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  visibility: "public" | "private";
  repo?: string;
  liveDemo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, technologies, visibility, repo, liveDemo } = project;
  const isPublic = visibility === "public";

  return (
    <article className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors transform-gpu will-change-transform duration-200 p-5 sm:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_10px_25px_-10px_rgba(37,99,235,0.45)] hover:scale-[1.01]">
      <header className="flex items-start justify-between gap-3">
        <h3 className="text-white text-lg font-semibold font-mono">{title}</h3>
        {isPublic ? (
          <span className="text-[10px] uppercase tracking-wider text-emerald-300/90 bg-emerald-500/10 border border-emerald-300/20 rounded px-2 py-0.5">Open Source</span>
        ) : (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-amber-300/90 bg-amber-500/10 border border-amber-300/20 rounded px-2 py-0.5"><Lock className="size-3" /> Private</span>
        )}
      </header>

      <p className="mt-2 text-sm text-neutral-300/95 leading-6">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li key={tech} className="text-[11px] text-blue-200/90 bg-blue-500/10 border border-blue-400/20 rounded px-2 py-1">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-2">
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} live demo`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
          >
            <ExternalLink className="size-4" /> View Live
          </a>
        )}
        {isPublic && repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-white/25 text-xs font-medium transition-colors"
          >
            <Github className="size-4" /> View Code
          </a>
        )}
      </div>
    </article>
  );
}
