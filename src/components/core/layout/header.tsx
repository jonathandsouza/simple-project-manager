export function Header({
	title,
}: Readonly<{
	title: string;
}>) {
	return (
		<div className="flex h-12 max-h-12 items-center justify-between py-2 px-5 border-b border-default">
			<div className="-ml-2 flex items-center text-sm">
				<div className="flex items-center px-2">
					<div className="flex items-center space-x-2 cursor-pointer">
						<button
							type="button"
							className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong border-transparent text-xs px-2.5 py-1 pr-2"
						>
							<span className="truncate">
								<div className="flex items-center space-x-2">
									<p className="text-xs">{title}</p>
								</div>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
