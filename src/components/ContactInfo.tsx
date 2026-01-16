import { Mail, MapPin, Phone } from "lucide-react";
import { commonStyles } from "../componentStyles";

const styles = {
	leftSide: "space-y-8",
	eyebrow: commonStyles.eyebrow,
	heading: "text-4xl md:text-5xl font-bold leading-tight",
	text: "text-lg text-base-content/70 leading-relaxed",
	infoList: "space-y-6",
	infoItem:
		"flex items-center gap-4 text-base-content/80 hover:text-primary transition-colors",
	iconWrapper:
		"w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0",
};

export default function ContactInfo() {
	return (
		<div className={styles.leftSide}>
			<div>
				<span className={styles.eyebrow}>Wie können wir helfen?</span>
				<h2 className={styles.heading}>Kontakt</h2>
			</div>
			<p className={styles.text}>
				Wir entwickeln KI-Sprachassistenten, die Anrufe automatisch
				entgegennehmen, Anliegen aufnehmen und direkt in Ihrem System
				verarbeiten. Schreiben Sie uns – wir beraten Sie gern zu Ihrem konkreten
				Anwendungsfall.
			</p>

			<div className={styles.infoList}>
				<a href="mailto:hello@relume.io" className={styles.infoItem}>
					<div className={styles.iconWrapper}>
						<Mail size={24} />
					</div>
					<span>hello@relume.io</span>
				</a>
				<a href="tel:+15550000000" className={styles.infoItem}>
					<div className={styles.iconWrapper}>
						<Phone size={24} />
					</div>
					<span>+1 (555) 000-0000</span>
				</a>
				<div className={styles.infoItem}>
					<div className={styles.iconWrapper}>
						<Phone size={24} />
					</div>
					<span>Oder sprechen Sie mit unserem KI-Assistenten</span>
				</div>
				<div className={styles.infoItem}>
					<div className={styles.iconWrapper}>
						<MapPin size={24} />
					</div>
					<span>123 Sample St, Sydney NSW 2000 AU</span>
				</div>
			</div>
		</div>
	);
}
