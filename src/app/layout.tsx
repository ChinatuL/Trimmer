import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Trimmer | Url Shortener",
    description: "A simple url shortener",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            className={inter.className}
            style={{ scrollBehavior: "smooth" }}
        >
            <body>{children}</body>
        </html>
    );
}
