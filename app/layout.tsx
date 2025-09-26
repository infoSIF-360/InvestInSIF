import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Navbar from "@/components/Navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "InvestInSIF - Discover Specialized Investment Funds (SIFs)",
    template: "%s | InvestInSIF",
  },
  description:
    "Track, compare & access Specialized Investment Funds (SIFs) with next-gen tools. The premier platform for SIF discovery and verified fund listings.",
  keywords: [
    "Specialized Investment Funds",
    "SIFs",
    "SEBI",
    "Investment Platform",
    "Fund Discovery",
    "Asset Management",
    "SIF tracker",
    "investinsif"
  ],
  authors: [{ name: "InvestInSIF", url: "https://investinsif.com" }],
  applicationName: "InvestInSIF",
  generator: "InvestInSIF",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { color: "#ffffff" },
  ],
  openGraph: {
    title: "InvestInSIF - Discover Specialized Investment Funds (SIFs)",
    description:
      "Track, compare & access Specialized Investment Funds (SIFs) with next-gen tools.",
    url: "https://investinsif.com",
    siteName: "InvestInSIF",
    images: [
      {
        url: "/og-image.png", // generate or place a 1200x630 OG image here
        width: 1200,
        height: 630,
        alt: "InvestInSIF — Specialized Investment Funds",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvestInSIF",
    description:
      "Track, compare & access Specialized Investment Funds (SIFs) with next-gen tools.",
    // site/creator - replace with real handle if you have one
    site: "@InvestInSIF",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://investinsif.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {/* Global persistent navbar */}
        <Navbar />

        {/* main has top padding so fixed navbar does not overlap content */}
        <main className="pt-[88px]"> 
          <Suspense fallback={null}>{children}</Suspense>
        </main>

        <Analytics />
      </body>
    </html>
  )
}
