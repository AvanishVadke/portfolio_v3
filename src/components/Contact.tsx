import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <footer id="connect" aria-label="Connect" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white">
          Let’s connect
        </h2>
        <p className="mt-2 text-neutral-300">
          Open to jobs, internships, part‑time roles, and collaborations.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="mailto:avanishvadke001@gmail.com?subject=Contacted%20from%20avanishvadke.me"
            className="inline-flex items-center gap-2 text-white/90 hover:text-[#EA4335] transition-colors"
            aria-label="Send email"
          >
            <Mail className="size-5" /> avanishvadke001@gmail.com
          </a>
          <a
            href="https://github.com/AvanishVadke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="size-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/avanishvadke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" /> LinkedIn
          </a>
          <a
            href="https://www.hackerrank.com/profile/avanishvadke001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 hover:text-[#00EA64] transition-colors"
            aria-label="HackerRank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.084 0-.16.045-.207.107L7.11 6.43c-.072.045-.12.126-.12.218 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .159-.045.208-.109l1.679-1.51c.072-.045.12-.127.12-.219 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494v.002z"
              />
            </svg>
            HackerRank
          </a>
          <a
            href="https://g.dev/AvanishVadke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 hover:text-[#4285F4] transition-colors"
            aria-label="Google Developer Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Google Dev
          </a>
          <span className="inline-flex items-center gap-2 text-neutral-300">
            <MapPin className="size-5" /> Mumbai, India
          </span>
        </div>

        <div className="mt-8 text-xs text-neutral-400">
          © {new Date().getFullYear()} Avanish Vadke. Built with Next.js and
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
