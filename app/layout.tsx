import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "InvestInSIF - Discover Specialized Investment Funds (SIFs)",
  description:
    "Track, compare & access Specialized Investment Funds (SIFs) with next-gen tools. The premier platform for SIF discovery and verified fund listings.",
  keywords: "Specialized Investment Funds, SIFs, SEBI, Investment Platform, Fund Discovery, Asset Management",
  openGraph: {
    title: "InvestInSIF - Discover Specialized Investment Funds (SIFs)",
    description: "Track, compare & access Specialized Investment Funds (SIFs) with next-gen tools.",
    type: "website",
  },
  generator: "InvestInSIF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
