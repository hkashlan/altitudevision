import { Phone } from "lucide-react";
import { motion } from "motion/react";
import architectureDiagram from "../assets/architecture/diagram.png";
import avatarImg from "../assets/demo/avatar.png";
import checkIcon from "../assets/demo/check.svg";
import emailIcon from "../assets/demo/email.svg";
import phoneIcon from "../assets/demo/phone.svg";
import { commonStyles } from "../componentStyles";

const styles = {
	section: commonStyles.section,
	grid: commonStyles.grid2Cols,
	contentCol: "flex flex-col justify-center",
	eyebrow: commonStyles.eyebrow,
	heading: "text-3xl md:text-5xl font-bold mb-6 leading-tight",
	intro: "text-lg text-base-content/70 mb-8",
	listWrapper: "flex flex-col gap-4 mb-8",
	listItem: "flex items-start gap-4",
	checkIcon: "w-6 h-6 flex-shrink-0 mt-1",
	listText: "text-lg font-medium",
	contactRow: "flex flex-col sm:flex-row gap-6 mt-8",
	contactItem:
		"flex items-center gap-4 p-4 rounded-xl bg-base-200 hover:bg-base-300 transition-colors cursor-pointer",
	contactIcon: "w-10 h-10",
	contactLabel: "text-sm text-base-content/60",
	contactValue: "font-bold text-lg",

	// Demo Card Styles
	demoCardWrapper:
		"relative w-full max-w-md mx-auto aspect-[3/4] bg-base-100 rounded-[2rem] shadow-2xl border-4 border-base-200 overflow-hidden",
	demoCardContent:
		"absolute inset-0 flex flex-col items-center justify-between p-8 bg-gradient-to-b from-base-100 to-base-200",
	avatar:
		"w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 object-cover",
	pulseRing: "absolute inset-0 rounded-full animate-ping bg-primary/20",
	statusBadge:
		"px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-8 flex items-center gap-2",
	statusDot: "w-2 h-2 rounded-full bg-green-500 animate-pulse",
	startButton:
		"btn btn-primary btn-lg w-full rounded-full gap-3 shadow-lg hover:shadow-primary/50",
	disclaimer: "text-xs text-center text-base-content/50 mt-4 max-w-[200px]",
	diagramContainer: "mt-16 w-full max-w-5xl mx-auto flex justify-center",

	image:
		"w-full h-auto max-w-[900px] object-contain drop-shadow-2xl rounded-2xl",
};

const checklistItems = [
	"„In meiner Wohnung tropft die Decke im Wohnzimmer.“",
	"„Es ist ein Notfall, das Wasser läuft seit gestern Abend.“",
	"„Wo melde ich defekte Hausbeleuchtung im Treppenhaus?“",
];

export default function DemoSection() {
	return (
		<section className={styles.section}>
			<div className={styles.grid}>
				{/* Text Content */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className={styles.contentCol}
				>
					<div className={styles.eyebrow}>
						Live erleben statt Folien anschauen
					</div>
					<h2 className={styles.heading}>
						Sprechen Sie jetzt mit dem AI Voice Agent
					</h2>
					<p className={styles.intro}>
						Testen Sie direkt im Browser, wie sich ein natürlicher, flüssig
						sprechender Sprachassistent anfühlt. Der Demo-Agent ist auf einen
						einfachen Schadensfall-Workflow trainiert.
					</p>

					<div className="font-bold mb-4">So können Sie ihn ausprobieren:</div>

					<div className={styles.listWrapper}>
						{checklistItems.map((item) => (
							<div key={item} className={styles.listItem}>
								<img src={checkIcon} alt="Check" className={styles.checkIcon} />
								<span className={styles.listText}>{item}</span>
							</div>
						))}
					</div>

					<p className="text-sm bg-base-200 p-4 rounded-lg border-l-4 border-warning mb-8">
						<strong>Hinweis:</strong> Dies ist eine Demo-Umgebung. Es werden
						keine echten Tickets erstellt.
					</p>

					<div className={styles.contactRow}>
						<a href="mailto:contact@company.com" className={styles.contactItem}>
							<img src={emailIcon} alt="Email" className={styles.contactIcon} />
							<div>
								<div className={styles.contactLabel}>Email:</div>
								<div className={styles.contactValue}>contact@company.com</div>
							</div>
						</a>
						<a href="tel:(414)687-5892" className={styles.contactItem}>
							<img src={phoneIcon} alt="Phone" className={styles.contactIcon} />
							<div>
								<div className={styles.contactLabel}>Phone:</div>
								<div className={styles.contactValue}>(414) 687 - 5892</div>
							</div>
						</a>
					</div>
				</motion.div>

				{/* Interactive Demo Card */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className={styles.demoCardWrapper}>
						<div className={styles.demoCardContent}>
							<div className="flex flex-col items-center mt-12">
								<div className="relative">
									<div className="absolute inset-0 rounded-full bg-primary/5 blur-xl"></div>
									<img
										src={avatarImg}
										alt="AI Agent"
										className={styles.avatar}
									/>
								</div>
								<div className={styles.statusBadge}>
									<div className={styles.statusDot}></div>
									Online & Ready
								</div>
							</div>

							<div className="w-full pb-8">
								<button type="button" className={styles.startButton}>
									<Phone className="w-6 h-6" />
									Live-Sprachdemo starten
								</button>
								<div className="flex justify-center">
									<p className={styles.disclaimer}>
										Bitte Mikrofon bei Aufforderung freigeben.
									</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
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
			</div>
		</section>
	);
}
