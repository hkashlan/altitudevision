import { motion } from "motion/react";
import welcomeVideo from "../assets/welcome-video-compressed.mp4";
import { commonStyles } from "../componentStyles";

const styles = {
	grid: commonStyles.grid2Cols,
	heading: "text-5xl font-bold mb-6 leading-tight",
	videoContainer:
		"relative rounded-3xl overflow-hidden shadow-2xl bg-base-200 aspect-video",
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

			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
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
	);
}
