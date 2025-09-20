function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-white font-mono font-semibold mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i} className="text-[11px] text-purple-200/90 bg-purple-500/10 border border-purple-400/20 rounded px-2 py-1">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white">Technical Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <Group title="Programming Languages" items={[
            "Java", "Python", "JavaScript ES6", "TypeScript", "Kotlin", "C"
          ]} />
          <Group title="Frontend Development" items={[
            "React.js", "Next.js", "React Native", "HTML5", "CSS3", "TailwindCSS", "shadCN UI", "Bootstrap 5", "Vite"
          ]} />
          <Group title="Backend Development" items={[
            "Node.js", "Express.js", "REST APIs", "JWT Auth", "Firebase Functions"
          ]} />
          <Group title="Databases" items={[
            "PostgreSQL", "MySQL", "Firebase Realtime DB", "Supabase", "SQL"
          ]} />
          <Group title="Mobile Development" items={[
            "React Native", "Android (Java/XML, Kotlin)", "Expo"
          ]} />
          <Group title="Tools & Cloud" items={[
            "Git", "GitHub", "VS Code", "NPM", "Android Studio", "Postman", "Vercel", "Firebase Hosting", "CI/CD"
          ]} />
          <Group title="Auth & Security" items={[
            "Clerk", "Firebase Auth", "JWT", "OAuth", "RBAC"
          ]} />
        </div>
      </div>
    </section>
  );
}
