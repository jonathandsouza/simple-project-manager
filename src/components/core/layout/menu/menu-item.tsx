import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useId } from "react";

export function MenuItem({
	href,
	icon,
	toolTipText,
}: Readonly<{
	href: string;
	icon: React.ReactElement;
	toolTipText: string;
}>) {
	return (
		<Link href={href}>
			<span className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded text-foreground-lighter hover:text-foreground  bg-studio hover:bg-surface-200 !bg-surface-300 !text-foreground shadow-sm">
				{icon}
			</span>
		</Link>
	);
}
