"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeSwitcher() {
	const switchTheme = (mode: "dark" | "light") => {
		document.body.classList.remove("dark");
		document.body.classList.remove("light");
		document.body.classList.add(mode);
	};

	return (
		<>
			<button
				className="hidden dark:block"
				onClick={() => switchTheme("light")}
			>
				<span className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded text-foreground-lighter hover:text-foreground  bg-studio hover:bg-surface-200 !bg-surface-300 !text-foreground shadow-sm">
					<SunIcon />
				</span>
			</button>

			<button className="dark:hidden" onClick={() => switchTheme("dark")}>
				<span className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded text-foreground-lighter hover:text-foreground  bg-studio hover:bg-surface-200 !bg-surface-300 !text-foreground shadow-sm">
					<MoonIcon />
				</span>
			</button>
		</>
	);
}
