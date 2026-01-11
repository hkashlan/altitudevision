import { Clock, MessageSquare, Zap } from "lucide-react";
import { motion } from "motion/react";
import { commonStyles } from "../componentStyles";

const styles = {
	section: commonStyles.section,
	headerContainer: commonStyles.sectionCentered + " mb-16",
	eyebrow: commonStyles.eyebrow,
	heading: commonStyles.heading + " mb-6",
	subtitle: commonStyles.subtitle + " mx-auto",
	grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
	card: commonStyles.card,
	cardBody: "card-body items-center text-center",
	iconWrapper: commonStyles.iconWrapper,
	cardTitle: "card-title text-xl font-bold mb-2",
	cardDesc: "text-base-content/70",
};

export default function Solutions() {
	return (
		<section className={styles.section}>
			<div className={styles.headerContainer}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className={styles.eyebrow}
				>
					Drei Gründe, warum führende Immobilienverwalter auf uns setzen
				</motion.div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className={styles.heading}
				>
					Mehr leisten. Weniger zahlen. Grenzenlos wachsen.
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className={styles.subtitle}
				>
					Unsere KI-Agenten kombinieren natürliche Sprachverarbeitung, echte
					Mehrsprachigkeit und nahtlose Integration - für einen Service, der
					Ihre Mieter begeistert und Ihr Team entlastet.
				</motion.p>
			</div>

			<div className={styles.grid}>
				{features.map((feature, index) => (
					<motion.div
						key={feature.title}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
						className={styles.card}
					>
						<div className={styles.cardBody}>
							<div className={styles.iconWrapper}>{feature.icon}</div>
							<h3 className={styles.cardTitle}>{feature.title}</h3>
							<p className={styles.cardDesc}>{feature.description}</p>
						</div>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.6 }}
				className="flex justify-center mt-16"
			>
				<button type="button" className="btn btn-outline btn-primary px-8">
					KI-Agent testen
				</button>
			</motion.div>
		</section>
	);
}

const features = [
	{
		title: "Gespräche, die sich natürlich anfühlen",
		description:
			"Ihre Mieter erleben professionelle, empathische Kommunikation - so natürlich, dass sie nicht merken, mit KI zu sprechen. Keine frustrierenden Menüs, keine Wartezeiten.",
		icon: <MessageSquare className="w-8 h-8" />,
	},
	{
		title: "24/7 Erreichbarkeit ohne Mehrkosten",
		description:
			"Kein verpasster Anruf mehr. Keine Überstunden, keine Personalplanung, keine Lücken. Einfach durchgehende Verfügbarkeit.",
		icon: <Clock className="w-8 h-8" />,
	},
	{
		title: "Grenzenlos skalierbar",
		description:
			"Doppeltes Anrufvolumen? Dreifach? Kein Problem. Unser System skaliert automatisch mit - ohne neue Einstellungen, ohne höhere Fixkosten. Sie zahlen nur die tatsächliche Gesprächszeit.",
		icon: <Zap className="w-8 h-8" />,
	},
];
