import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "All Wired Up Idaho | Electrical Contractor Wood River Valley",
    template: "%s | All Wired Up Idaho",
  },
  description:
    "Father-son electrical experts serving Wood River Valley since 1998. Licensed & insured residential and commercial electrical services in Sun Valley, Ketchum, Hailey, and Bellevue, Idaho.",
  keywords: [
    "electrical contractor Idaho",
    "electrician Wood River Valley",
    "electrician Sun Valley Idaho",
    "electrician Ketchum Idaho",
    "residential electrical",
    "commercial electrical",
    "All Wired Up Idaho",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "All Wired Up Idaho",
    title: "All Wired Up Idaho | Electrical Contractor Wood River Valley",
    description:
      "Father-son electrical experts serving Wood River Valley since 1998. Licensed & insured.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
