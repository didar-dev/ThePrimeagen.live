import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "ThePrimeagen",
  description: "A legend who works at Netflix and streams on Twitch.",
  metadataBase: new URL("https://www.theprimeagen.live"),
  openGraph: {
    type: "website",
    url: "https://www.theprimeagen.live",
    title: "ThePrimeagen",
    description: "A legend who works at Netflix and streams on Twitch.",
    siteName: "ThePrimeagen",
    images: [
      {
        url: "https://www.theprimeagen.live/ThePrimeagen.png",
      },
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
      <body className="bg-black">{children}</body>
      <GoogleAnalytics gaId="G-E61DW4YTL2" />
    </html>
  );
}
