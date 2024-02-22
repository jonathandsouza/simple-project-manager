import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuItem } from "./menu-item";
import { ThemeSwitcher } from "./theme-switcher";

export function Menu() {
	return (
		<div className="hide-scrollbar flex w-14 flex-col justify-between p-2 overflow-y-auto border-r bg-studio border-default">
			<Link href="/">
				<Image
					src="/logo.svg"
					alt="ssm"
					className="mx-auto h-[40px] w-6 cursor-pointer rounded"
					width={24}
					height={40}
				/>
			</Link>

			<ul className="flex flex-col space-y-2 flex-grow">
				<MenuItem
					href="/projects"
					icon={<SunIcon />}
					toolTipText="Projects"
					key="projects"
				/>
			</ul>

			<ThemeSwitcher />
		</div>
	);
}
