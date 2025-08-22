export default function Certifications() {
  const certs = [
    "Oracle Certified Associate (OCA) — Java Programming",
    "Full Stack Web Development Certification (JavaScript MERN)",
    "HackerRank: 5★ Java, 3★ Python",
    "AWS Academy Graduate — Cloud Foundations",
    "Juniper Networking Cloud Certification",
    "Leadership: Development Head at Coders Club APSIT (2024–Present)",
  ];
  return (
    <section id="certifications" aria-label="Certifications" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white">Certifications & Achievements</h2>
        <ul className="mt-6 grid sm:grid-cols-2 gap-4">
          {certs.map((c) => (
            <li key={c} className="rounded-xl border border-white/10 bg-white/5 p-4 text-neutral-200">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
