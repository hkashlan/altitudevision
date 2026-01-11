import { Link } from "@tanstack/react-router";
import {
	Home,
	Menu,
	Network,
	SquareFunction,
	StickyNote,
	X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
	{
		name: "Home",
		to: "/",
		hash: "" as const,
		icon: <Home className="w-4 h-4" />,
	},
	{
		name: "Features",
		to: "/",
		hash: "features",
		icon: <SquareFunction className="w-4 h-4" />,
	},
	{
		name: "How it works",
		to: "/",
		hash: "process",
		icon: <Network className="w-4 h-4" />,
	},
	{
		name: "Pricing",
		to: "/",
		hash: "pricing",
		icon: <StickyNote className="w-4 h-4" />,
	},
	{
		name: "Contact",
		to: "/",
		hash: "contact",
		icon: <StickyNote className="w-4 h-4" />,
	},
];

const styles = {
	headerRoot: "sticky top-0 z-50 bg-base-100/80 backdrop-blur-md shadow-sm",
	navLinkDesktop: "font-medium transition-colors hover:text-primary",
	btnCta: "btn btn-primary text-white hidden lg:flex btn-sm md:btn-md",
	mobileToggle: "btn btn-square btn-ghost lg:hidden",
	mobileDropdown:
		"lg:hidden absolute top-full left-0 w-full bg-base-100 shadow-xl border-t border-base-200",
	mobileMenuLink: "flex items-center gap-3 py-3",
};

export default function Header() {
	return (
		<header className={styles.headerRoot}>
			<div className="navbar layout-container px-4 lg:px-0">
				<div className="navbar-start">
					<Link to="/" className="text-2xl font-bold tracking-tight">
						Altitude<span className="text-primary">Vision</span>
					</Link>
				</div>

				<DesktopMenu />

				<div className="navbar-end gap-2">
					<Link to="/" hash="contact" className={styles.btnCta}>
						Get Started
					</Link>

					<MobileMenu />
				</div>
			</div>
		</header>
	);
}

function DesktopMenu() {
	return (
		<div className="navbar-center hidden lg:flex">
			<ul className="menu menu-horizontal px-1 gap-2">
				{navItems.map((item) => (
					<li key={item.name}>
						<Link
							to={item.to}
							hash={item.hash}
							className={styles.navLinkDesktop}
							activeProps={{ className: "text-primary font-bold" }}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				className={styles.mobileToggle}
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
			</button>

			{isOpen && (
				<div className={styles.mobileDropdown}>
					<ul className="menu p-4 gap-2">
						{navItems.map((item) => (
							<li key={item.name}>
								<Link
									to={item.to}
									hash={item.hash}
									className={styles.mobileMenuLink}
									onClick={() => setIsOpen(false)}
								>
									{item.icon}
									<span className="text-lg">{item.name}</span>
								</Link>
							</li>
						))}
						<li>
							<Link
								to="/"
								hash="contact"
								className="btn btn-primary text-white w-full mt-4"
								onClick={() => setIsOpen(false)}
							>
								Get Started
							</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
}
