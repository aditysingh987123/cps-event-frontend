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
  title: "C Prompt Solutions | IT Rental & Leasing Support",
  description:
    "C Prompt Solutions provides laptop rental, desktop rental, IT equipment leasing, event IT setup, bulk device rental, and customer onboarding support for businesses.",
  keywords: [
    "C Prompt Solutions",
    "laptop rental",
    "IT equipment rental",
    "desktop rental",
    "server rental",
    "corporate leasing",
    "event IT setup",
    "bulk laptop rental",
    "customer onboarding",
  ],
  authors: [{ name: "C Prompt Solutions" }],
  creator: "C Prompt Solutions",
  publisher: "C Prompt Solutions",
  openGraph: {
    title: "C Prompt Solutions | IT Rental & Leasing Support",
    description:
      "Get laptops, desktops, servers, workstations, and IT equipment on rent with flexible plans, bulk availability, fast deployment, and dedicated business support.",
    url: "https://www.cpromptsolutions.in/",
    siteName: "C Prompt Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "C Prompt Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C Prompt Solutions | IT Rental & Leasing Support",
    description:
      "Laptop rental, IT equipment leasing, event IT setup, bulk device rental, and customer onboarding support for businesses.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}