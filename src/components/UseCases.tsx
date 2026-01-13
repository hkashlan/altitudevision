import { motion } from "motion/react";
import arrowIcon from "../assets/usecases/arrow.svg";
import facilitiesImg from "../assets/usecases/facilities.jpg";
import movingImg from "../assets/usecases/moving.jpg";
// Importing images directly to ensure they work with Vite's asset handling
import rentingImg from "../assets/usecases/renting.jpg";
import requestsImg from "../assets/usecases/requests.jpg";
import { commonStyles } from "../componentStyles";

const useCases = [
	{
		title: "Vermietung & Besichtigungen",
		description:
			"Interessenten können Verfügbarkeiten abfragen oder Besichtigungstermine anfragen – ganz ohne Wartezeiten.",
		image: rentingImg,
		link: "#",
	},
	{
		title: "Alltägliche Mieteranfragen",
		description:
			"„Wie hoch ist mein aktueller Saldo?“ „Wo stehen die Mülltonnen?“ Häufige Fragen werden sofort und konsistent beantwortet.",
		image: requestsImg,
		link: "#",
	},
	{
		title: "Gemeinschaftsflächen & Anlagen",
		description:
			"Vorfallmeldungen zu Aufzügen, Hausfluren oder Müllräumen werden erfasst und direkt an die Hausverwaltung weitergeleitet.",
		image: facilitiesImg,
		link: "#",
	},
	{
		title: "Einzug & Auszug",
		description:
			"Unterstützung bei Schlüsselübergabe, Zählerständen, Namensschildern und organisatorischen Fragen rund um den Wohnungswechsel.",
		image: movingImg,
		link: "#",
	},
];

const styles = {
	section: commonStyles.section,
	headerContainer: commonStyles.sectionCentered + " mb-16",
	eyebrow: commonStyles.eyebrow,
	heading: commonStyles.heading,
	subtitle: commonStyles.subtitle + " mx-auto",
	grid: "grid grid-cols-1 md:grid-cols-2 gap-8",
	card: "group relative overflow-hidden rounded-3xl h-[400px] flex transform transition-all duration-300 hover:scale-[1.02]",
	cardContent:
		"relative z-20 flex flex-col justify-between p-8 h-full w-full bg-linear-to-t from-black/80 via-black/40 to-transparent",
	textContainer: "mt-auto text-white", // Pushing text to bottom
	cardTitle: "text-2xl font-bold mb-3 text-white",
	cardDesc: "text-white/80 leading-relaxed mb-6",
	learnMore: "flex items-center gap-2 font-bold text-white",
	arrowIcon:
		"w-6 h-6 transition-transform duration-300 group-hover:translate-x-1",
	cardImage:
		"absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
	overlay:
		"absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors",
};

export default function UseCases() {
	return (
		<section className={styles.section}>
			{/* Header */}
			<div className={styles.headerContainer}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className={styles.eyebrow}
				>
					Weitere Anwendungen des AI Voice Assistenten
				</motion.div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className={styles.heading}
				>
					Schritt für Schritt zu einem automatisierten Kundendialog
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className={styles.subtitle}
				>
					Der Agent wird so konfiguriert, wie Sie ihn brauchen: von der
					strukturierten Schadensaufnahme über allgemeine Mieterfragen bis hin
					zur Priorisierung von Notfällen außerhalb der Geschäftszeiten. Weitere
					Workflows wie Vermietung oder Ein- und Auszug können jederzeit ergänzt
					oder später ausgebaut werden. So starten Sie schlank – und erweitern,
					wenn es sinnvoll ist.
				</motion.p>
			</div>

			{/* Use Cases Grid */}
			<div className={styles.grid}>
				{useCases.map((useCase, index) => (
					<motion.a
						key={useCase.title}
						href={useCase.link}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
						className={styles.card}
					>
						{/* Background Image with Zoom Effect */}
						<img
							src={useCase.image}
							alt={useCase.title}
							className={styles.cardImage}
						/>

						{/* Dark Overlay */}
						<div className={styles.overlay}></div>

						{/* Content */}
						<div className={styles.cardContent}>
							<div className={styles.textContainer}>
								<h3 className={styles.cardTitle}>{useCase.title}</h3>
								<p className={styles.cardDesc}>{useCase.description}</p>

								<div className={styles.learnMore}>
									Learn more
									<img
										src={arrowIcon}
										alt="Arrow Right"
										className={styles.arrowIcon}
									/>
								</div>
							</div>
						</div>
					</motion.a>
				))}
			</div>
		</section>
	);
}
