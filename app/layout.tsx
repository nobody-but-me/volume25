
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Volume25",
    description: "Volume25: o melhor podcast da Unesp",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
	<html lang="pt-br">
	    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
	    >
            {children}
	</body>
	    </html>
    );
}
