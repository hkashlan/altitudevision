import { Link } from "@tanstack/react-router";
import {
	ChevronDown,
	ChevronRight,
	Home,
	Menu,
	Network,
	SquareFunction,
	StickyNote,
	X,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [groupedExpanded, setGroupedExpanded] = useState<
		Record<string, boolean>
	>({});

	return (
		<>
			<header></header>
		</>
	);
}
