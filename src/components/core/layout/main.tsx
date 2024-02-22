export function Main({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex-1 overflow-y-auto" style={{ maxHeight: "100vh" }}>
			{children}
		</main>
	);
}
