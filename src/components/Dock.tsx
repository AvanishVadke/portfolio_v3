"use client";
import { FileText, Home, Mail, NotebookPen } from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: NotebookPen },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Dock() {
  const onClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav aria-label="Primary" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-2xl px-3 py-2 flex items-center gap-1">
        {items.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={onClick(id)}
            className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label={`Go to ${label}`}
          >
            <Icon className="size-5 group-hover:scale-110 transition-transform" />
            <span className="sr-only">{label}</span>
          </a>
        ))}
        <button
          onClick={() => console.log("resume clicked")}
          className="ml-1 inline-flex items-center gap-2 px-3 py-2 rounded-xl text-blue-200 hover:text-white border border-white/20 hover:border-white/30 transition-colors"
          aria-label="Open resume"
        >
          <FileText className="size-5" />
        </button>
      </div>
    </nav>
  );
}
