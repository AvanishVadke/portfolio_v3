import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Avanish Vadke — Software Developer",
  description: "Minimalist portfolio with smooth animations and curated projects.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/weblogo.png",
    shortcut: "/weblogo.png",
    apple: "/weblogo.png",
  },
 openGraph: {
  title: "Avanish Vadke — Software Developer",
  description: "Showcasing my journey in MERN, React Native, and modern web development. A minimalist portfolio with smooth animations, curated projects, and modern UI.",
  url: siteUrl,
  siteName: "Avanish Vadke",
  images: [
    {
      url: "/og_img.png",
      width: 1200,
      height: 630,
      alt: "Avanish Vadke Portfolio — Software Developer",
    },
  ],
  locale: "en_US",
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "Avanish Vadke — Software Developer",
  description: "Minimalist portfolio with animations, curated projects, and insights into my MERN and React Native work.",
  images: [
    {
      url: "/og_img.png",
      width: 1200,
      height: 630,
      alt: "Avanish Vadke Portfolio — Software Developer",
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
  <body className={`${geistSans.variable} ${jetbrains.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
