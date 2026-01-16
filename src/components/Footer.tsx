import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

const styles = {
	footer: "footer p-10 bg-base-200 text-base-content",
	footerBottom:
		"footer footer-center p-4 bg-base-300 text-base-content border-t border-base-content/10",
	title: "footer-title opacity-100 font-bold text-primary",
	link: "link link-hover text-base-content/70 hover:text-primary transition-colors",
	socials: "grid grid-flow-col gap-4",
	logoSection: "flex flex-col gap-2 max-w-sm",
	logo: "h-8 w-auto mb-2",
	companyName: "text-xl font-bold",
	tagline: "text-sm text-base-content/60",
	addressSection: "space-y-4",
	infoItem: "flex flex-col gap-1",
	infoLabel: "text-sm font-bold uppercase tracking-wider opacity-50",
	infoValue: "text-base-content/80 text-sm",
};

export default function Footer() {
	return (
		<motion.footer
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className="mt-20 border-t border-base-300"
		>
			<div className={styles.footer}>
				<aside className={styles.logoSection}>
					<img
						src="https://cdn.prod.website-files.com/663e05f68dd7fe6c2ad7c858/690a1b5a8c90b82334674a7c_d1c7749857787235ac45c7c168ab799a_company-logo.svg"
						alt="ALTIVO VOICE Logo"
						className={styles.logo}
					/>
					<p className={styles.companyName}>Altivo Voice</p>
					<p className={styles.tagline}>AI Voice Agent Solutions</p>

					<div className="mt-6">
						<div className={styles.socials}>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Facebook size={24} />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Instagram size={24} />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Twitter size={24} />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Linkedin size={24} />
							</a>
						</div>
					</div>
				</aside>

				<nav className={styles.addressSection}>
					<h6 className={styles.title}>Standort</h6>
					<div className={styles.infoItem}>
						<span className={styles.infoLabel}>Geschäftsadresse</span>
						<span className={styles.infoValue}>
							Level 1, 12 Sample St, Sydney NSW 2000
						</span>
					</div>
					<div className={styles.infoItem}>
						<span className={styles.infoLabel}>Kontakt</span>
						<a href="tel:18001234567" className={styles.link}>
							1800 123 4567
						</a>
						<a href="mailto:info@relume.io" className={styles.link}>
							info@relume.io
						</a>
					</div>
				</nav>

				<nav>
					<h6 className={styles.title}>Unternehmen</h6>
					<a href="/impressum" className={styles.link}>
						Impressum
					</a>
					<a href="/datenschutz" className={styles.link}>
						Datenschutz
					</a>
					<a href="/kontakt" className={styles.link}>
						Kontakt
					</a>
				</nav>

				<nav>
					<h6 className={styles.title}>Rechtliches</h6>
					<a href="/privacy" className={styles.link}>
						Privacy Policy
					</a>
					<a href="/terms" className={styles.link}>
						Terms of Service
					</a>
					<a href="/cookies" className={styles.link}>
						Cookies Settings
					</a>
				</nav>
			</div>

			<div className={styles.footerBottom}>
				<aside>
					<p>© 2025 ALTIVO VOICE. Alle Rechte vorbehalten.</p>
				</aside>
			</div>
		</motion.footer>
	);
}
