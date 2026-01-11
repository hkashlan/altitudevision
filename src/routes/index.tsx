import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="layout-container bg-base-100 min-h-screen shadow-xl px-6 md:px-12">
			<Hero />
		</div>
	);
}
