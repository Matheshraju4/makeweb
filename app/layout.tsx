import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "MakeWeb — Under Development",
	description:
		"MakeWeb is crafting something great. Our website is under development.",
	icons: {
		icon: "/logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${outfit.className} `}>
				<Script
					defer
					src="https://plausible.io/js/pa-GK2saGpXluC-ZUUi4WAwe.js"
					strategy="afterInteractive"
				/>
				<Script id="plausible-init" strategy="afterInteractive">
					{`
						window.plausible = window.plausible || function () { (plausible.q = plausible.q || []).push(arguments) }, plausible.init = plausible.init || function (i) { plausible.o = i || {} };
						plausible.init();
					`}
				</Script>
				{children}
			</body>
		</html>
	);
}
