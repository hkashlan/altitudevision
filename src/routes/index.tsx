import { createFileRoute } from "@tanstack/react-router";
import Architecture from "@/components/Architecture";
import Benefits from "@/components/Benefits";
import Challenges from "@/components/Challenges";
import Contact from "@/components/Contact";
import DemoSection from "@/components/DemoSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import PricingComparison from "@/components/PricingComparison";
import Solutions from "@/components/Solutions";
import UseCases from "@/components/UseCases";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="layout-container bg-base-100 min-h-screen shadow-xl px-6 md:px-12">
			<Hero />
			<PainPoints />
			<Challenges />
			<Solutions />
			<Benefits />
			<UseCases />
			<Architecture />
			<DemoSection />
			<PricingComparison />
			<FAQ />
			<Contact />
			<Footer />
		</div>
	);
}
