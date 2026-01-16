import { motion } from "motion/react";
import { commonStyles } from "../componentStyles";

const styles = {
	section: commonStyles.section,
	headerContainer: "mb-12",
	heading: "text-3xl md:text-4xl font-bold mb-4",
	subtitle: "text-lg text-base-content/70 max-w-2xl mb-8",
	grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
	faqList: "space-y-4",
	collapse:
		"collapse collapse-plus bg-base-200 border border-base-300 rounded-2xl",
	collapseTitle: "collapse-title text-lg font-bold py-4 px-6",
	collapseContent:
		"collapse-content px-6 pb-6 text-base-content/80 leading-relaxed",
	button: "btn btn-outline btn-primary px-8 rounded-full",
};

export default function FAQ() {
	return (
		<section className={styles.section}>
			<div className={styles.grid}>
				{/* Left Side: Header */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className={styles.headerContainer}
				>
					<h2 className={styles.heading}>FAQs</h2>
					<p className={styles.subtitle}>
						Haben Sie Fragen? Hier finden Sie Antworten auf die häufigsten
						Fragen zu Implementierung, Kosten und Technologie. Für alle weiteren
						Fragen stehen wir Ihnen gerne persönlich zur Verfügung.
					</p>
					<button type="button" className={styles.button}>
						Gespräch vereinbaren
					</button>
				</motion.div>

				{/* Right Side: Accordions */}
				<div className={styles.faqList}>
					{faqs.map((faq, index) => (
						<motion.div
							key={faq.question}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className={styles.collapse}
						>
							<input type="checkbox" name="faq-accordion" />
							<div className={styles.collapseTitle}>{faq.question}</div>
							<div className={styles.collapseContent}>{faq.answer}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

const faqs = [
	{
		question: "Wie schnell können wir starten?",
		answer: (
			<p>
				Nach einem initialen Requirements-Workshop, in dem wir Ihre
				Anforderungen und bestehenden Systeme besprechen, dauert die
				Implementierung je nach Komplexität einige Wochen. Kein monatelanger
				Rollout, keine großen IT-Projekte - nur fokussierte Umsetzung. Über den
				Fortschritt halten wir Sie in Ihren gewünschten Intervallen auf dem
				Laufenden.
			</p>
		),
	},
	{
		question: "Was ist der Unterschied zu Chatbots?",
		answer: (
			<div className="space-y-4">
				<p>Es gibt drei Stufen der Automatisierung:</p>
				<p>
					<strong>1. Klassische Chatbots</strong>
					<br />
					Hart kodiert, folgen festen Skripten. Begrenzte Antworten, keine
					Flexibilität. "Drücken Sie 1 für..."
				</p>
				<p>
					<strong>2. KI-basierte Konversation (LLMs)</strong>
					<br />
					Führen natürliche, komplexe Gespräche. Verstehen Kontext und Nuancen.
					Können flexibel antworten (mit Guardrails für Qualitätssicherung).
				</p>
				<p>
					<strong>3. KI-Agenten</strong> ← Das sind wir
					<br />
					Gehen einen Schritt weiter: Führen nicht nur Gespräche, sondern führen
					eigenständig Aktionen aus. Rufen Daten ab, legen Tickets an,
					aktualisieren Systeme - wie ein menschlicher Mitarbeiter.
				</p>
				<p>
					<strong>Der Unterschied?</strong> Grad der Automatisierung. Chatbots
					haben niedrige Automatisierung, KI-Agenten nähern sich den Fähigkeiten
					menschlicher Mitarbeiter.
				</p>
			</div>
		),
	},
	{
		question: "Was passiert, wenn mehrere Anrufer gleichzeitig anrufen?",
		answer: (
			<div className="space-y-4">
				<p>
					Für Kund:innen wirkt das wie ein normaler Anruf — für Sie bedeutet es
					eine nahezu <strong>unbegrenzte Skalierbarkeit</strong> ohne
					zusätzliche Personal- oder Infrastrukturkosten.
				</p>
				<p>
					Nein — es entsteht keine klassische Warteschlange.
					<br />
					Der AI Voice Agent kann mehrere Gespräche gleichzeitig führen, weil
					die Verarbeitung nicht an einzelne Leitungen oder Mitarbeitende
					gebunden ist. Das System ist{" "}
					<strong>parallelfähig (concurrent)</strong> und skaliert je nach
					Bedarf automatisch mit.
				</p>
				<p>In der Praxis bedeutet das:</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<strong>
							Mehrere Anrufe können gleichzeitig entgegengenommen werden
						</strong>
					</li>
					<li>
						<strong>Ohne Wartezeiten</strong>
					</li>
					<li>
						<strong>
							Ohne Engpässe, da der Agent nicht „besetzt“ sein kann
						</strong>
					</li>
					<li>
						Die einzige natürliche Grenze ist die{" "}
						<strong>Netzwerk- und Serverkapazität</strong>, die in der Regel
						weit über dem typischen Anrufvolumen liegt
					</li>
				</ul>
			</div>
		),
	},
	{
		question: "Was passiert, wenn die KI eine Frage nicht beantworten kann?",
		answer: (
			<p>
				Bei komplexen Anfragen oder auf Wunsch des Anrufers leitet unser System
				nahtlos an Ihr Team weiter. Sie erhalten eine vollständige
				Zusammenfassung des Gesprächs inklusive Kontext - Ihr Mitarbeiter kann
				sofort weiterhelfen, ohne dass der Mieter sich wiederholen muss.
			</p>
		),
	},
	{
		question: "Lässt sich das System in unsere bestehenden Tools integrieren?",
		answer: (
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				varius enim in eros elementum tristique. Duis cursus, mi quis viverra
				ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
				Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
				sem vitae risus tristique posuere.
			</p>
		),
	},
	{
		question: "Wie viel kostet es?",
		answer: (
			<div className="space-y-4">
				<p>
					Die <strong>Implementierungskosten</strong> hängen von Ihren
					spezifischen Anforderungen ab - welche Systeme integriert werden, wie
					viele Sprachen Sie benötigen, und welche Prozesse automatisiert werden
					sollen.
				</p>
				<p>
					<strong>Laufende Kosten:</strong> Pay-as-you-go nach tatsächlicher
					Gesprächszeit - etwa €0,30-0,50 pro 3-Minuten-Gespräch.
				</p>
				<p>
					<strong>Was wir sagen können:</strong> Die meisten Kunden amortisieren
					die Implementierungskosten innerhalb von 2-3 Monaten durch eingesparte
					Personalkosten und erhöhte Erreichbarkeit.
				</p>
				<p>
					Im Erstgespräch können wir Ihnen basierend auf Ihrer Situation eine
					konkrete Einschätzung geben.
				</p>
			</div>
		),
	},
	{
		question: "Gibt es eine Mindestvertragslaufzeit?",
		answer: (
			<p>
				Nein. Sie zahlen nur für tatsächliche Nutzung (Pay-as-you-go) und können
				jederzeit kündigen. Nach der Implementierung läuft Ihr Vertrag direkt
				mit den AI-Providern - flexibel und ohne Mindestlaufzeit. Wir sind
				überzeugt, dass Sie bleiben, weil der Service funktioniert - nicht weil
				ein Vertrag Sie bindet.
			</p>
		),
	},
];
