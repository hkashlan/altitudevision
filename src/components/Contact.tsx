import { motion } from "motion/react";
import { commonStyles } from "../componentStyles";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const styles = {
	section: commonStyles.section,
	container: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",
};

export default function Contact() {
	return (
		<section className={styles.section}>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className={styles.container}
			>
				<ContactInfo />
				<ContactForm />
			</motion.div>
		</section>
	);
}
