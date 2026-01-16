import { Monitor, Phone, Settings, Users } from "lucide-react";
import { motion } from "motion/react";
import { commonStyles } from "../componentStyles";

const features = [
	{
		title: "Keine verpassten Anfragen mehr",
		description:
			"Kein verpasster Anruf - nachts, am Wochenende, in Stoßzeiten. Jede Anfrage wird in Echtzeit beantwortet, in jeder Sprache. Mehr gelöste Anliegen, zufriedenere Mieter, keine entgangenen Gelegenheiten durch mangelnde Erreichbarkeit.",
		icon: <Phone className="w-8 h-8" />,
	},
	{
		title: "Ihr Team konzentriert sich aufs Wesentliche",
		description:
			"Routinefragen werden automatisch bearbeitet - Öffnungszeiten, Schadensmeldungen, Status-Updates. Ihr Team fokussiert sich auf wertschöpfende Aufgaben: komplexe Fälle, persönliche Betreuung, strategische Projekte. Weniger Admin, weniger Unterbrechungen.",
		icon: <Monitor className="w-8 h-8" />,
	},
	{
		title: "Premium-Service rund um die Uhr",
		description:
			"Professionelle, konsistente Antworten - 24/7. Mehrsprachiger Support in über 50 Sprachen verbessert den Service für alle Mieter erheblich. Sie positionieren sich als moderne, responsive Verwaltung und bauen nachhaltig Vertrauen auf.",
		icon: <Users className="w-8 h-8" />,
	},
	{
		title: "Messbare Verbesserungen",
		description:
			"Schnellere Reaktionszeiten steigern die Mieterzufriedenheit messbar. Reibungslosere Kommunikation stärkt die Mieterbindung. Operative Effizienz senkt Ihre Servicekosten bei gleichzeitig höherer Qualität - eine Win-Win-Situation.",
		icon: <Settings className="w-8 h-8" />,
	},
];

const styles = {
	section: commonStyles.section,
	headerContainer: `${commonStyles.sectionCentered} mb-16`,
	eyebrow: commonStyles.eyebrow,
	heading: commonStyles.heading,
	grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center",
	column: "flex flex-col gap-12",
	imageContainer: "flex items-center justify-center lg:px-8",
	image:
		"w-full max-w-[300px] h-auto rounded-[3rem] shadow-2xl border-4 border-base-200",
	featureItem:
		"flex flex-col items-center text-center lg:items-start lg:text-left",
	iconWrapper:
		"w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary",
	featureTitle: "text-xl font-bold mb-3",
	featureDesc: "text-base-content/70 leading-relaxed",
};

export default function Benefits() {
	const leftFeatures = features.slice(0, 2);
	const rightFeatures = features.slice(2, 4);

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
					Our features
				</motion.div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className={styles.heading}
				>
					Powerful features to supercharge your productivity
				</motion.h2>
			</div>

			{/* Content Grid */}
			<div className={styles.grid}>
				{/* Left Column */}
				<div className={styles.column}>
					{leftFeatures.map((feature, index) => (
						<FeatureItem key={feature.title} feature={feature} index={index} />
					))}
				</div>

				{/* Center Image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className={styles.imageContainer}
				>
					<div className="relative">
						{/* Placeholder for Phone Mockup */}
						<div className="bg-base-300 w-[300px] h-[600px] rounded-[3rem] border-8 border-base-content/10 flex items-center justify-center shadow-2xl">
							<span className="text-base-content/20 font-bold text-2xl">
								App Interface
							</span>
						</div>
					</div>
				</motion.div>

				{/* Right Column */}
				<div className={styles.column}>
					{rightFeatures.map((feature, index) => (
						<FeatureItem
							key={feature.title}
							feature={feature}
							index={index + 2}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function FeatureItem({
	feature,
	index,
}: {
	feature: (typeof features)[0];
	index: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
			className={styles.featureItem}
		>
			<div className={styles.iconWrapper}>{feature.icon}</div>
			<h3 className={styles.featureTitle}>{feature.title}</h3>
			<p className={styles.featureDesc}>{feature.description}</p>
		</motion.div>
	);
}
