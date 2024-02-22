import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { SunIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MenuItem({
	href,
	icon,
	toolTipText,
}: Readonly<{
	href: string;
	icon: React.ReactElement;
	toolTipText: string;
}>) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<button>
						<Link href={href}>
							<span className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded text-foreground-lighter hover:text-foreground  bg-studio hover:bg-surface-200 !bg-surface-300 !text-foreground shadow-sm">
								{icon}
							</span>
						</Link>
					</button>
				</TooltipTrigger>
				<TooltipContent>
					<p>{toolTipText}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

export function Menu() {
	return (
		<div className="hide-scrollbar flex w-14 flex-col justify-between p-2 overflow-y-auto border-r bg-studio border-default">
			<ul className="flex flex-col space-y-2">
				<Link href="/">
					<Image
						src="/logo.svg"
						alt="ssm"
						className="mx-auto h-[40px] w-6 cursor-pointer rounded"
						width={24}
						height={40}
					/>
				</Link>

				<MenuItem
					href="/projects"
					icon={<SunIcon />}
					toolTipText="Projects"
				/>

				<MenuItem
					href="/project"
					icon={<SunIcon />}
					toolTipText="Resources"
				/>
			</ul>
		</div>
	);
}
