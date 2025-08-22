import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" aria-label="Contact" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white">Let’s connect</h2>
        <p className="mt-2 text-neutral-300">Open to collaborations and interesting problems.</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="mailto:avanishvadke@gmail.com"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            aria-label="Send email"
          >
            <Mail className="size-5" /> Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="size-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" /> LinkedIn
          </a>
          <span className="inline-flex items-center gap-2 text-neutral-300 ml-auto">
            <MapPin className="size-5" /> Mumbai, India
          </span>
        </div>

        <div className="mt-10 text-xs text-neutral-400">
          © {new Date().getFullYear()} Avanish Vadke. Built with Next.js and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
