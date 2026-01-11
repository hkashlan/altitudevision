import { motion } from "motion/react";
import { commonStyles } from "../componentStyles";

const styles = {
	grid: commonStyles.grid2Cols,
	heading: "text-5xl font-bold mb-6", // Keeping custom big size for Hero
	imagePlaceholder:
		"bg-base-200 rounded-box h-80 w-full flex items-center justify-center text-base-content/30 italic",
};

export default function Hero() {
	return (
		<div className={styles.grid}>
			<motion.h1
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className={styles.heading}
			>
				Transform your customer conversations with AI
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				className={styles.imagePlaceholder}
			>
				Placeholder Image / Content
			</motion.div>
		</div>
	);
}
