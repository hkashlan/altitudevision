import { useState } from "react";

const tabs = [
	{
		id: 0,
		title: "Notfälle kennen keine Öffnungszeiten",
		content: (
			<>
				Rohrbruch um Mitternacht?
				<br />
				Heizungsausfall am Sonntag?
				<br />
				Schadensmeldungen in der Mittagspause?
				<br />
				<br />
				Ihre Mieter brauchen 24/7-Hilfe, aber Sie können sich keine durchgehende
				Besetzung leisten.
			</>
		),
	},
	{
		id: 1,
		title: "Chaos statt System",
		content: (
			<>
				Jeder dokumentiert anders?
				<br />
				Tickets bleiben liegen?
				<br />
				Verzögerungen schaden Ihrem Ruf?
				<br />
				<br />
				Ohne einheitliche Prozesse haben Sie keine Kontrolle.
			</>
		),
	},
	{
		id: 2,
		title: "Von Routine bis Krise — alles beim selben Team",
		content: (
			<>
				Heute: einfache Reparaturanfrage
				<br />
				Morgen: wütender Mieter wegen Wasserschaden
				<br />
				Übermorgen: Notfall im Aufzug
				<br />
				<br />
				Unter Druck leiden Qualität und Konsistenz. Menschen haben schlechte
				Tage. Systeme nicht.
			</>
		),
	},
];

export default function Challenges() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section className="py-24">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				{/* Tabs Navigation */}
				<div className="flex flex-col gap-4">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							type="button"
							onClick={() => setActiveTab(tab.id)}
							className={`text-left p-6 rounded-xl transition-all duration-300 border-l-4 ${
								activeTab === tab.id
									? "bg-base-200 border-primary shadow-sm"
									: "bg-transparent border-transparent hover:bg-base-200/50"
							}`}
						>
							<h3
								className={`text-xl font-bold mb-2 ${
									activeTab === tab.id ? "text-primary" : "text-base-content"
								}`}
							>
								{tab.title}
							</h3>
							<p className="text-base-content/70 leading-relaxed">
								{tab.content}
							</p>
						</button>
					))}
				</div>

				{/* Tab Content (Image) */}
				<div className="h-full min-h-[400px] bg-base-200 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
					<div className="absolute inset-0 flex items-center justify-center text-base-content/20 font-bold text-2xl">
						{/* Placeholder for dynamic image based on tab */}
						Image for: {tabs[activeTab].title}
					</div>
					{/* 
            You can dynamically change images here like this:
            <img src={tabs[activeTab].imageUrl} alt={tabs[activeTab].title} className="object-cover w-full h-full" />
          */}
				</div>
			</div>
		</section>
	);
}
