import { motion } from "motion/react";
import architectureDiagram from "../assets/architecture/diagram.png";
import { commonStyles } from "../componentStyles";

const styles = {
	section: commonStyles.section,
	headerContainer: commonStyles.sectionCentered,
	eyebrow: commonStyles.eyebrow,
	heading: commonStyles.heading,
	subtitle: `${commonStyles.subtitle} mx-auto`,
	diagramContainer: "mt-16 w-full max-w-5xl mx-auto flex justify-center",
	image:
		"w-full h-auto max-w-[900px] object-contain drop-shadow-2xl rounded-2xl",
};

export default function Architecture() {
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
					Vom Anruf zur strukturierten Meldung – automatisch
				</motion.div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className={styles.heading}
				>
					Die Prozessarchitektur des AI Voice Agents
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className={styles.subtitle}
				>
					Ein klarer Überblick über Telefonie, KI-Verarbeitung, Geschäftslogik
					und Übergabe an Ihre Systeme. Transparent, nachvollziehbar,
					praxistauglich — genau so, wie moderne Serviceprozesse sein sollten.
				</motion.p>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className={styles.diagramContainer}
			>
				<img
					src={architectureDiagram}
					alt="AI Voice Agent Architecture Diagram"
					className={styles.image}
				/>
			</motion.div>
		</section>
	);
}
