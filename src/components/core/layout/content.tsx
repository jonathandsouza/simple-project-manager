export function Content({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full mx-auto my-16 space-y-16 max-w-7xl">
			{children}
		</div>
	);
}
