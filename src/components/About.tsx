import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    id: 1,
    date: "Sep 2024 – Jun 2025",
    title: "Development Head — Coders Club APSIT",
    description: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Led a team of developers in designing and implementing technical solutions for club activities.</li>
        <li>Architected and developed the official Coders Club website using Next.js, JavaScript, and Firebase.</li>
        <li>Built a full‑stack Attendance Management System for club activities, replacing legacy manual methods.</li>
        <li>Developed reporting features with class‑wise, session‑wise, and year‑wise attendance insights.</li>
        <li>Organized and managed events in collaboration with cross‑functional student teams.</li>
      </ul>
    ),
  },
  {
    id: 2,
    date: "Aug 2025",
    title: "Speaker — Git & GitHub Workshop",
    description: (
      <div className="space-y-2">
        <div className="text-xs text-neutral-400">Coders Club APSIT</div>
        <ul className="list-disc pl-6 space-y-1">
          <li>Conducted a 3‑hour hands‑on interdepartmental workshop on Git and GitHub.</li>
          <li>Enabled 70+ students to practice version control commands including commits, branching, merging, rebasing, stashing, and cherry‑picking.</li>
          <li>Guided students through live exercises, pull requests, and merge conflict resolution, fostering confidence in collaborative workflows.</li>
        </ul>
      </div>
    ),
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white">Professional Summary & Experience</h2>
        <p className="mt-4 text-neutral-300 leading-7">
          Passionate Computer Engineering student with hands-on experience in full-stack web development,
          mobile application development, and database management. Proven leadership as Development Head at
          Coders Club with expertise in React.js, React Native, and modern web technologies. Committed to
          building practical, scalable solutions while effectively contributing to collaborative development teams.
        </p>

        {/* section separator above timeline */}
        <div className="mt-6 h-px w-full bg-white/10" />

        <div className="mt-6">
          <Timeline defaultValue={2}>
            {items.map((item) => (
              <TimelineItem
                key={item.id}
                step={item.id}
                className="group-data-[orientation=vertical]/timeline:sm:ms-32"
              >
                <TimelineHeader>
                  <TimelineSeparator />
                  <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
                    {item.date}
                  </TimelineDate>
                  <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
                  <TimelineIndicator />
                </TimelineHeader>
                <TimelineContent>{item.description}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
