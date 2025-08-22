"use client";
import { FileText } from "lucide-react";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "connect", label: "Connect" },
];

export default function Dock() {
  const onClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 z-50 pointer-events-none"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex justify-center px-3 sm:px-0">
        <div className="pointer-events-auto inline-flex max-w-full overflow-x-auto scrollbar-none">
          <div className="inline-flex items-center whitespace-nowrap backdrop-blur-lg bg-white/5 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full px-2 sm:px-3 py-1.5 sm:py-2">
        {items.flatMap(({ id, label }, idx) => [
          (
            <a
              key={`link-${id}`}
              href={`#${id}`}
              onClick={onClick(id)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-white/85 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 text-xs sm:text-sm"
              aria-label={`Go to ${label}`}
            >
              {label}
            </a>
          ),
          idx < items.length - 1 ? (
            <span key={`sep-${id}`} aria-hidden className="h-5 w-px bg-white/20" />
          ) : null,
        ])}
        {/* Mobile: icon-only resume */}
        <a
          href="https://drive.google.com/file/d/1eVP5qVA36hoBQyWeeXK_1z1McAmTQ6uy/view?usp=sharing"
          target="_blank"
          rel="noopener"
          className="ml-2 inline-flex sm:hidden items-center justify-center p-2 rounded-full text-blue-200 hover:text-white border border-white/20 hover:border-white/30 transition-colors"
          aria-label="Open resume"
        >
          <FileText className="size-4" />
          <span className="sr-only">Resume</span>
        </a>
        <a
          href="https://drive.google.com/file/d/1eVP5qVA36hoBQyWeeXK_1z1McAmTQ6uy/view?usp=sharing"
          target="_blank"
          rel="noopener"
          className="ml-2 hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-blue-200 hover:text-white border border-white/20 hover:border-white/30 transition-colors text-xs sm:text-sm"
          aria-label="Open resume"
        >
          <FileText className="size-4" /> Resume
        </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
