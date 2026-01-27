import { motion } from "motion/react";
import welcomeVideo from "../assets/welcome-video-compressed.mp4";
import { commonStyles } from "../componentStyles";

const styles = {
	grid: commonStyles.grid2Cols,
	heading: "text-5xl font-bold mb-6 leading-tight",
	videoContainerWrapper: "relative group",
	glow: "absolute -inset-4 bg-linear-to-r from-primary/30 to-secondary/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500",
	videoContainer:
		"relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-base-200 aspect-video border border-white/10",
	video: "w-full h-full object-cover",
};

export default function Hero() {
	return (
		<div className={styles.grid}>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="flex flex-col justify-center"
			>
				<h1 className={styles.heading}>
					Transform your customer conversations with AI
				</h1>
				<p className="text-xl text-base-content/70 mb-8 max-w-lg">
					Automatisieren Sie Ihren Kundendialog mit intelligenten Voice-Agenten,
					die rund um die Uhr erreichbar sind.
				</p>
			</motion.div>

			<div className={styles.videoContainerWrapper}>
				{/* Decorative Glow */}
				<motion.div
					animate={{
						scale: [1, 1.05, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 4,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
					className={styles.glow}
				/>

				<motion.div
					initial={{ opacity: 0, scale: 0.9, x: 20 }}
					animate={{
						opacity: 1,
						scale: 1,
						x: 0,
						y: [0, -10, 0],
					}}
					whileHover={{
						scale: 1.02,
						rotateY: 5,
						rotateX: 2,
					}}
					transition={{
						opacity: { duration: 0.8 },
						scale: { duration: 0.8 },
						x: { duration: 0.8 },
						y: {
							duration: 5,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						},
						// Hover transitions
						rotateY: { type: "spring", stiffness: 300, damping: 20 },
						rotateX: { type: "spring", stiffness: 300, damping: 20 },
					}}
					style={{ perspective: 1000 }}
					className={styles.videoContainer}
				>
					<video
						src={welcomeVideo}
						autoPlay
						controls
						muted
						loop
						playsInline
						className={styles.video}
					/>
				</motion.div>
			</div>
		</div>
	);
}
