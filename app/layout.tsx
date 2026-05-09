import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";

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
				<PlausibleProvider src="https://plausible.io/js/pa-GK2saGpXluC-ZUUi4WAwe.js">
					{children}
				</PlausibleProvider>
			</body>
		</html>
	);
}
