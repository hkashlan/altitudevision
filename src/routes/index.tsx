import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="layout-container bg-base-100 min-h-screen shadow-xl">
			<h1>Altitude Vision</h1>
		</div>
	);
}
