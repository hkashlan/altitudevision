import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { commonStyles } from "../componentStyles";

const styles = {
	container: "min-h-[80vh] flex items-center justify-center py-20 px-6",
	contentWrapper: "max-w-4xl w-full",
	header: "text-center mb-16",
	successIcon:
		"inline-flex items-center justify-center w-24 h-24 bg-success/10 text-success rounded-full mb-8 shadow-inner",
	title: "text-4xl md:text-6xl font-black mb-6 tracking-tight",
	description: commonStyles.subtitle + " mx-auto",
	bookingCard:
		"card bg-base-200 border border-base-300 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:border-primary/30",
	cardBody: "card-body items-center text-center p-8 md:p-16",
	cardIconBg:
		"absolute top-[-20px] right-[-20px] opacity-5 text-base-content group-hover:rotate-12 transition-transform duration-700 pointer-events-none",
	cardTitle: "card-title text-3xl font-bold mb-4",
	cardText: "text-lg text-base-content/70 mb-10 max-w-md",
	ctaButton:
		"btn btn-primary btn-lg px-12 gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 group/btn",
	backButton:
		"btn btn-ghost gap-2 mt-12 hover:bg-base-300/50 transition-all font-semibold",
};

export const Route = createFileRoute("/thank-you")({
	component: ThankYouPage,
});

function ThankYouPage() {
	return (
		<div className="bg-base-100">
			<main className={styles.container}>
				<div className={styles.contentWrapper}>
					{/* Header Section */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className={styles.header}
					>
						<div className={styles.successIcon}>
							<CheckCircle2 size={48} strokeWidth={2.5} />
						</div>
						<h1 className={styles.title}>Vielen Dank!</h1>
						<p className={styles.description}>
							Ihre Anfrage ist bei uns eingegangen. Wir melden uns in Kürze.
							Möchten Sie den nächsten Schritt direkt jetzt gehen?
						</p>
					</motion.div>

					{/* Booking Card */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
						className={styles.bookingCard}
					>
						<div className={styles.cardIconBg}>
							<Calendar size={280} />
						</div>

						<div className={styles.cardBody}>
							<h2 className={styles.cardTitle}>Direkt Erstgespräch buchen</h2>
							<p className={styles.cardText}>
								Sichern Sie sich jetzt Ihren Termin für eine kostenlose
								15-minütige Strategie-Beratung.
							</p>

							<a
								href="https://calendly.com/hkashlan/15min"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.ctaButton}
							>
								Termin reservieren
								<ExternalLink
									size={22}
									className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
								/>
							</a>
						</div>
					</motion.div>

					{/* Navigation Back */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
						className="text-center"
					>
						<Link to="/" className={styles.backButton}>
							<ArrowLeft size={20} />
							Zurück zur Übersicht
						</Link>
					</motion.div>
				</div>
			</main>
		</div>
	);
}
