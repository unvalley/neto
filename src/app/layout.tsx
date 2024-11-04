import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Shadcn - Landing template",
	description: "Free Shadcn landing page for developers",
	openGraph: {
		type: "website",
		url: "https://github.com/nobruf/shadcn-landing-page.git",
		title: "Shadcn - Landing template",
		description: "Free Shadcn landing page for developers",
		images: [
			{
				url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
				width: 1200,
				height: 630,
				alt: "Shadcn - Landing template",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "https://github.com/nobruf/shadcn-landing-page.git",
		title: "Shadcn - Landing template",
		description: "Free Shadcn landing page for developers",
		images: [
			"https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
