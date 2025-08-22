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
		date: "2008 – 2020",
		title: "Smt. Sulochanadevi Singhania School",
		description: (
			<p className="text-neutral-300">
				Completed schooling with a strong foundation in mathematics ,science and computer applications(Java)
				
			</p>
		),
	},
	{
		id: 2,
		date: "2020 – 2022",
		title: "Junior College (HSC)",
		description: (
			<p className="text-neutral-300">
				Focused on Physics, Chemistry, and Mathematics.
			</p>
		),
	},
	{
		id: 3,
		date: "2022 – Present",
		title: "A. P. Shah Institute of Technology (APSIT) — B.E. Computer Engineering",
		description: (
			<p className="text-neutral-300">
				Undergraduate studies in Computer Engineering.
			</p>
		),
	},
];

export default function Education() {
	return (
		<section id="education" aria-label="Education" className="py-12 sm:py-16">
			<div className="max-w-5xl mx-auto px-6">
				<h2 className="font-mono text-2xl sm:text-3xl font-bold text-white">Education</h2>

				{/* section separator above timeline */}
				<div className="mt-6 h-px w-full bg-white/10" />

				<div className="mt-6">
					{/* defaultValue points to the last completed step */}
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

