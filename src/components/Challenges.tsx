import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { commonStyles } from "../componentStyles";

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

const styles = {
	section: commonStyles.section,
	grid: commonStyles.grid2Cols.replace("md:grid-cols-2", "lg:grid-cols-2"), // Override specific class
	tabButton: (isActive: boolean) =>
		`text-left p-6 rounded-xl transition-all duration-300 border-l-4 ${
			isActive
				? "bg-base-200 border-primary shadow-sm"
				: "bg-transparent border-transparent hover:bg-base-200/50"
		}`,
	tabTitle: (isActive: boolean) =>
		`text-xl font-bold mb-2 ${isActive ? "text-primary" : "text-base-content"}`,
	tabContent: "text-base-content/70 leading-relaxed",
	imageContainer:
		"h-full min-h-[400px] bg-base-200 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner",
	imagePlaceholder:
		"absolute inset-0 flex items-center justify-center text-base-content/20 font-bold text-2xl",
};

export default function Challenges() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section className={styles.section}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className={styles.grid}
			>
				{/* Tabs Navigation */}
				<div className="flex flex-col gap-4">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							type="button"
							onClick={() => setActiveTab(tab.id)}
							className={styles.tabButton(activeTab === tab.id)}
						>
							<h3 className={styles.tabTitle(activeTab === tab.id)}>
								{tab.title}
							</h3>
							<p className={styles.tabContent}>{tab.content}</p>
						</button>
					))}
				</div>

				{/* Tab Content (Image) */}
				<div className={styles.imageContainer}>
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.3 }}
							className={styles.imagePlaceholder}
						>
							{/* Placeholder for dynamic image based on tab */}
							Image for: {tabs[activeTab].title}
						</motion.div>
					</AnimatePresence>
				</div>
			</motion.div>
		</section>
	);
}
