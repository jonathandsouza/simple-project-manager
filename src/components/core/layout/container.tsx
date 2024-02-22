export function Container({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="flex h-full">{children}</div>;
}
