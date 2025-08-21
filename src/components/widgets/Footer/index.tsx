

// import { Link } from "@heroui/link";
// import { Text } from "@mantine/core";
import Link from "next/link";
import LogoWithText from "../../shared/Logo/Logo";
import { siteConfig } from "@/src/config/site";


export function FooterWithLogo() {
	return (
		<footer className="w-full bg-zinc-800 p-8">
			<div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
				<LogoWithText className="text-white" />
				<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
					{siteConfig.footerItems.map(item => 
					<li key={item.label}>
						<Link
							href={item.href}
							className="font-normal transition-colors text-white hover:text-white/80 focus:text-foreground/80"
						>
							{item.label}
						</Link>
					</li>)}
				</ul>
			</div>
			<hr className="my-8 border-zinc-700" />
			<p className="text-center font-normal text-white">
				&copy; 2025 VAKI. All rights reserved.
			</p>
		</footer>
	);
}