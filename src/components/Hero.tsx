import { motion } from "motion/react";

export default function Hero() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
			<motion.h1
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="text-5xl font-bold mb-6"
			>
				Transform your customer conversations with AI
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				className="bg-base-200 rounded-box h-80 w-full flex items-center justify-center text-base-content/30 italic"
			>
				Placeholder Image / Content
			</motion.div>
		</div>
	);
}
