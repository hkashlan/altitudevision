import { useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { commonStyles } from "../componentStyles";

const styles = {
	section: commonStyles.section,
	headerContainer: `${commonStyles.sectionCentered} mb-16 px-4`,
	eyebrow: commonStyles.eyebrow,
	heading: `${commonStyles.heading} mb-6`,
	subtitle: `${commonStyles.subtitle} mx-auto max-w-3xl`,
	tabsContainer: "flex justify-center mb-12",
	tabList: "tabs tabs-boxed bg-base-200 p-1 rounded-2xl",
	tab: "tab tab-lg transition-all duration-300 px-8 h-12",
	activeTab: "tab-active bg-primary text-primary-content",
	pricingGrid: "grid grid-cols-1 md:grid-cols-3 gap-8",
	card: "card bg-base-100 shadow-xl border border-base-300 relative overflow-hidden h-full transform transition-all duration-500",
	cardPopular: "border-primary ring-2 ring-primary ring-opacity-50",
	cardBody: "card-body p-8",
	badge: "badge badge-primary font-bold px-4 py-3 absolute top-6 right-6",
	planName: "text-2xl font-bold mb-2",
	tagline: "text-base-content/70 text-sm mb-6 min-h-[3rem]",
	priceContainer: "mb-6",
	priceValue: "text-4xl font-extrabold flex items-baseline gap-1",
	pricePeriod: "text-base font-normal text-base-content/50 ml-1",
	featureList: "space-y-4 flex-grow mb-8",
	featureItem: "flex items-start gap-3 text-sm leading-relaxed",
	checkIcon:
		"w-5 h-5 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110",
	button: "btn w-full btn-lg font-bold transition-all duration-300",
};

type PaymentMode = "ratenzahlung" | "vorauszahlung";

export default function PricingComparison() {
	const [mode, setMode] = useState<PaymentMode>("ratenzahlung");
	const navigate = useNavigate();

	return (
		<section className={styles.section}>
			<div className={styles.headerContainer}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className={styles.eyebrow}
				>
					Ein fairer Start in die Automatisierung
				</motion.div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className={styles.heading}
				>
					Einmalige Einrichtung – dauerhafte Wirkung.
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className={styles.subtitle}
				>
					Sie starten mit einem Workflow und erweitern nur, wenn der Nutzen klar
					sichtbar ist. Keine laufende Lizenz. Keine Bindung. Nur Ergebnisse.
					Einmalige Projektgebühr – wählen Sie Ihre bevorzugte Zahlungsweise:
				</motion.p>
			</div>

			<div className={styles.tabsContainer}>
				<div className={styles.tabList}>
					<button
						type="button"
						className={`${styles.tab} ${mode === "ratenzahlung" ? styles.activeTab : ""}`}
						onClick={() => setMode("ratenzahlung")}
					>
						Ratenzahlung
					</button>
					<button
						type="button"
						className={`${styles.tab} ${mode === "vorauszahlung" ? styles.activeTab : ""}`}
						onClick={() => setMode("vorauszahlung")}
					>
						Vorauszahlung (-33%)
					</button>
				</div>
			</div>

			<div className={styles.pricingGrid}>
				<AnimatePresence mode="wait">
					{Object.values(plans).map((plan, index) => (
						<motion.div
							key={`${plan.name}-${mode}`}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -30 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className={`${styles.card} ${plan.badge ? styles.cardPopular : "hover:shadow-2xl hover:-translate-y-1"}`}
						>
							{plan.badge && <span className={styles.badge}>{plan.badge}</span>}
							<div className={styles.cardBody}>
								<h3 className={styles.planName}>{plan.name}</h3>
								<p className={styles.tagline}>{plan.tagline}</p>

								<div className={styles.priceContainer}>
									<div className={styles.priceValue}>
										{mode === "ratenzahlung"
											? plan.pricing_ratenzahlung.split(" ")[0]
											: plan.pricing_vorauszahlung.split(" ")[0]}
										<span className={styles.pricePeriod}>
											{mode === "ratenzahlung"
												? plan.pricing_ratenzahlung.replace(
														plan.pricing_ratenzahlung.split(" ")[0],
														"",
													)
												: plan.pricing_vorauszahlung.replace(
														plan.pricing_vorauszahlung.split(" ")[0],
														"",
													)}
										</span>
									</div>
								</div>

								<ul className={styles.featureList}>
									{plan.features.map((feature) => (
										<li key={feature} className={`${styles.featureItem} group`}>
											<Check className={styles.checkIcon} />
											<span>{feature}</span>
										</li>
									))}
								</ul>

								<button
									type="button"
									onClick={() => navigate({ to: "/thank-you" })}
									className={`${styles.button} ${plan.badge ? "btn-primary" : "btn-outline btn-primary"}`}
								>
									{plan.button_text}
								</button>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</section>
	);
}

interface Plan {
	name: string;
	tagline: string;
	pricing_ratenzahlung: string;
	pricing_vorauszahlung: string;
	features: string[];
	button_text: string;
	badge?: string;
}

const plans: Record<string, Plan> = {
	Basis: {
		name: "Basis",
		tagline: "Für einen klar abgegrenzten, ersten Anwendungsfall.",
		pricing_ratenzahlung: "$99 /in 2 Raten",
		pricing_vorauszahlung: "$999 einmalig",
		features: [
			"Natürlich klingender, flüssig sprechender AI Voice Agent",
			"1 Workflow (z. B. Schadensaufnahme)",
			"Geführte Schadensaufnahme mit gezielten Rückfragen",
			"Allgemeine Priorisierung",
			"Basissprache Deutsch",
			"Basisticket als exportierbare Datenübersicht (z. B. Google Sheet, CSV, Excel)",
			"Team-Onboarding + Dokumentation",
			"Up to 3 team members",
		],
		button_text: "Projektumfang besprechen",
	},
	Standard: {
		name: "Standard",
		badge: "Beliebt",
		tagline: "Für eine standardisierte Fallaufnahme & Serviceprozesse",
		pricing_ratenzahlung: "$199 /month",
		pricing_vorauszahlung: "$1,999 einmalig",
		features: [
			"Natürlich klingender, flüssig sprechender AI Voice Agent",
			"2 Workflows (z. B. Schäden + Allgemeine Anfragen)",
			"Gemeinsame Prozessanalyse",
			"Anpassung der Gesprächslogik an Ihre Abläufe & Terminologie",
			"Unternehmensspezifische Eskalationslogik",
			"Automatisierte Ticketanlage in Ihrem System",
			"Basissprache Deutsch",
			"Team-Onboarding + Dokumentation",
		],
		button_text: "Projektumfang besprechen",
	},
	Enterprise: {
		name: "Enterprise",
		tagline: "Für komplexe Abläufe & eine höhere Automatisierung",
		pricing_ratenzahlung: "$399 /month",
		pricing_vorauszahlung: "$3,999 einmalig",
		features: [
			"Natürlich klingender, flüssig sprechender AI Voice Agent",
			"3+ Workflows (z. B. Schäden + Allgemeine Fragen + Vermietung)",
			"Prozessanalyse, Gesprächslogik & Eskalationslogik wie 2",
			"Erweiterte Eskalationslogik & Playbooks",
			"Optional: ERP-/CRM-Integration + kontinuierliche Optimierung",
			"Dashboarding",
			"Mehrsprachige Knowledge Base + Antwortkompetenz pro Sprache",
			"Team-Onboarding + Dokumentation",
		],
		button_text: "Projektumfang besprechen",
	},
};
