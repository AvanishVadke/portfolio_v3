"use client";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "connect", label: "Connect" },
];

export default function Dock() {
  const [active, setActive] = useState<string>("home");
  const onClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (id === "home") {
      // Scroll to the very top for home
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(id);
  };

  // Scrollspy using scroll + rAF for smooth updates
  useEffect(() => {
    const ids = items.map((i) => i.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    let ticking = false;
    const pickActive = () => {
      // If we're basically at the very top, force Home as active.
      const docEl = document.documentElement;
      const scrollY = window.scrollY || docEl.scrollTop || 0;
      if (scrollY <= 8) {
        setActive((prev) => (prev === "home" ? prev : "home"));
        return;
      }

      // If we're basically at the very bottom, force the last section as active.
      const winH = window.innerHeight;
      const bottomGap = (docEl.scrollHeight || 0) - (scrollY + winH);
      if (bottomGap <= 24) {
        const lastId = els[els.length - 1].id;
        setActive((prev) => (prev === lastId ? prev : lastId));
        return;
      }

      // Compute a document-level probe and select the last section whose top <= probe.
  const probeDoc = scrollY + winH * 0.35; // 35% from top of viewport
      let currentId = els[0].id;
      for (const el of els) {
        const topDoc = el.getBoundingClientRect().top + scrollY; // element's top relative to document
        if (topDoc <= probeDoc) {
          currentId = el.id;
        } else {
          break;
        }
      }
      setActive((prev) => (prev === currentId ? prev : currentId));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          pickActive();
          ticking = false;
        });
      }
    };

    pickActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 text-xs sm:text-sm transition-colors relative after:content-["""] after:absolute after:left-2 after:right-2 after:-bottom-1 after:h-0.5 after:rounded-full after:transition-transform after:duration-300 after:origin-left ${
                active === id
                  ? "text-blue-300 after:bg-blue-400 after:scale-x-100"
                  : "text-white/85 hover:text-white after:bg-blue-400/80 after:scale-x-0"
              } active:brightness-110`}
              aria-label={`Go to ${label}`}
              aria-current={active === id ? "page" : undefined}
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
