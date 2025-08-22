export default function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white">Experience</h2>
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-white font-semibold">Development Head, Coders Club APSIT</h3>
            <span className="text-xs text-neutral-400">2024–Present · Thane, India</span>
          </div>
          <ul className="mt-3 list-disc pl-6 text-neutral-300 space-y-1">
            <li>Lead a team of developers in designing and implementing technical solutions for college club activities.</li>
            <li>Architected and developed the official Coders Club website using Vite(ReactJS), JavaScript, and Firebase.</li>
            <li>Built a full-stack Attendance Management System for club activities, replacing legacy methods. Using NextJS, express, PostgreSQL and Prisma ORM</li>
            <li>Developed reporting features with class-wise, session-wise, and year-wise insights.</li>
            <li>Organized and managed events in collaboration with cross-functional student teams.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
