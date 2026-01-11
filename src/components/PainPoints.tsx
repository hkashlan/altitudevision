import { motion } from "motion/react";
import { commonStyles } from "../componentStyles";

const styles = {
	section: commonStyles.sectionCentered + " py-24",
	eyebrow: commonStyles.eyebrow,
	heading: commonStyles.heading,
	subtitle: commonStyles.subtitle + " mx-auto",
};

export default function PainPoints() {
	return (
		<section className={styles.section}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className={styles.eyebrow}
			>
				Die Realität moderner Immobilienverwaltung
			</motion.div>

			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className={styles.heading}
			>
				Ihre Mieter brauchen Hilfe. <br />
				Aber niemand ist erreichbar.
			</motion.h2>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className={styles.subtitle}
			>
				Notfälle um Mitternacht, Sprachbarrieren und chaotische Prozesse —
				Immobilienverwaltung stößt an ihre Grenzen, wenn klassische
				Support-Strukturen nicht mehr mithalten können.
			</motion.p>
		</section>
	);
}
