import { motion } from "motion/react";

export default function PainPoints() {
	return (
		<section className="flex flex-col items-center text-center py-24 max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-sm font-bold uppercase tracking-widest text-primary mb-4"
			>
				Die Realität moderner Immobilienverwaltung
			</motion.div>

			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
			>
				Ihre Mieter brauchen Hilfe. <br />
				Aber niemand ist erreichbar.
			</motion.h2>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className="text-xl text-base-content/80 max-w-2xl leading-relaxed"
			>
				Notfälle um Mitternacht, Sprachbarrieren und chaotische Prozesse —
				Immobilienverwaltung stößt an ihre Grenzen, wenn klassische
				Support-Strukturen nicht mehr mithalten können.
			</motion.p>
		</section>
	);
}
