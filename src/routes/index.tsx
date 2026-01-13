import { createFileRoute } from "@tanstack/react-router";
import Benefits from "@/components/Benefits";
import Challenges from "@/components/Challenges";
import Solutions from "@/components/Solutions";
import UseCases from "@/components/UseCases";
import Hero from "../components/Hero";
import PainPoints from "../components/PainPoints";

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
		</div>
	);
}
