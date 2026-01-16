import {
	ArrowRight,
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import { motion } from "motion/react";

const styles = {
	footerContainer: "relative pt-24 pb-12 overflow-hidden bg-base-100",
	footerBackground: "absolute inset-0 pointer-events-none opacity-50",
	footerGradient:
		"absolute inset-0 bg-gradient-to-b from-transparent via-base-200/50 to-base-200",
	ctaSection: "relative z-10 container mx-auto px-6 mb-20",
	ctaCard:
		"bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative group",
	ctaHeading:
		"text-3xl md:text-4xl font-extrabold text-primary-content tracking-tight leading-tight",
	ctaText: "text-primary-content/80 text-lg max-w-xl",
	ctaButton:
		"btn btn-secondary btn-lg rounded-full px-8 group-hover:scale-105 transition-transform",

	mainGrid:
		"relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16",
	logoColumn: "space-y-6",
	logo: "h-10 w-auto",
	brandName: "text-2xl font-black tracking-tighter text-base-content",
	brandDescription: "text-base-content/60 leading-relaxed max-w-xs",

	navTitle: "text-sm font-bold uppercase tracking-widest text-primary mb-6",
	navLink:
		"flex items-center gap-2 text-base-content/70 hover:text-primary transition-all duration-300 hover:translate-x-1 group text-sm md:text-base",

	contactItem: "flex gap-4 items-start text-base-content/70",
	contactIcon: "text-primary shrink-0 mt-1",
	contactText: "text-sm leading-relaxed",

	socialLinks: "flex gap-4 mt-8",
	socialIcon:
		"w-10 h-10 rounded-xl bg-base-200 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-all duration-300 shadow-sm",

	bottomBar:
		"border-t border-base-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/50",
};

export default function Footer() {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			className={styles.footerContainer}
		>
			{/* Decorative background elements */}
			<div className={styles.footerBackground}>
				<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
				<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
			</div>
			<div className={styles.footerGradient} />

			{/* CTA Section */}
			<div className={styles.ctaSection}>
				<div className={styles.ctaCard}>
					<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
					<div className="space-y-4 relative z-10">
						<h2 className={styles.ctaHeading}>
							Ready to transform your business?
						</h2>
						<p className={styles.ctaText}>
							Join 500+ companies using Altivo Voice to automate their customer
							service and sales.
						</p>
					</div>
					<a href="/contact" className={styles.ctaButton}>
						Get Started Now{" "}
						<ArrowRight
							size={20}
							className="ml-2 group-hover:translate-x-1 transition-transform"
						/>
					</a>
				</div>
			</div>

			<div className={styles.mainGrid}>
				{/* Brand Column */}
				<div className={styles.logoColumn}>
					<aside className="space-y-4">
						<div className="flex items-center gap-3">
							<img
								src="https://cdn.prod.website-files.com/663e05f68dd7fe6c2ad7c858/690a1b5a8c90b82334674a7c_d1c7749857787235ac45c7c168ab799a_company-logo.svg"
								alt="Altivo Voice Logo"
								className={styles.logo}
							/>
							<span className={styles.brandName}>Altivo Voice</span>
						</div>
						<p className={styles.brandDescription}>
							Elevating customer interactions with cutting-edge AI Voice Agent
							solutions. Built for performance, scalability, and human-like
							engagement.
						</p>
						<div className={styles.socialLinks}>
							<SocialLink
								href="https://linkedin.com"
								icon={<Linkedin size={20} />}
							/>
							<SocialLink
								href="https://twitter.com"
								icon={<Twitter size={20} />}
							/>
							<SocialLink
								href="https://instagram.com"
								icon={<Instagram size={20} />}
							/>
							<SocialLink
								href="https://facebook.com"
								icon={<Facebook size={20} />}
							/>
						</div>
					</aside>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className={styles.navTitle}>Solution</h3>
					<nav className="flex flex-col gap-4">
						<FooterLink href="/#features">Features</FooterLink>
						<FooterLink href="/#pricing">Pricing</FooterLink>
						<FooterLink href="/#demo">Live Demo</FooterLink>
						<FooterLink href="/#faq">FAQ</FooterLink>
					</nav>
				</div>

				{/* Company */}
				<div>
					<h3 className={styles.navTitle}>Company</h3>
					<nav className="flex flex-col gap-4">
						<FooterLink href="/about">About Us</FooterLink>
						<FooterLink href="/careers">Careers</FooterLink>
						<FooterLink href="/blog">Blog</FooterLink>
						<FooterLink href="/contact">Contact</FooterLink>
					</nav>
				</div>

				{/* Contact Info */}
				<div className="space-y-6">
					<h3 className={styles.navTitle}>Reach Out</h3>
					<div className="space-y-4">
						<div className={styles.contactItem}>
							<MapPin size={20} className={styles.contactIcon} />
							<span className={styles.contactText}>
								Level 1, 12 Sample St, <br />
								Sydney NSW 2000
							</span>
						</div>
						<div className={styles.contactItem}>
							<Phone size={20} className={styles.contactIcon} />
							<a
								href="tel:18001234567"
								className="hover:text-primary transition-colors"
							>
								1-800-ALTIVO-V
							</a>
						</div>
						<div className={styles.contactItem}>
							<Mail size={20} className={styles.contactIcon} />
							<a
								href="mailto:hello@altivovoice.ai"
								className="hover:text-primary transition-colors"
							>
								hello@altivovoice.ai
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="container mx-auto px-6">
				<div className={styles.bottomBar}>
					<p>© {new Date().getFullYear()} Altivo Voice. All rights reserved.</p>
					<div className="flex gap-6">
						<a href="/privacy" className="hover:text-primary transition-colors">
							Privacy Policy
						</a>
						<a href="/terms" className="hover:text-primary transition-colors">
							Terms of Service
						</a>
						<a href="/cookies" className="hover:text-primary transition-colors">
							Cookies
						</a>
					</div>
				</div>
			</div>
		</motion.footer>
	);
}

function FooterLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<a href={href} className={styles.navLink}>
			<span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
			{children}
		</a>
	);
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className={styles.socialIcon}
		>
			{icon}
		</a>
	);
}
