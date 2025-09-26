// app/sifmarketplace/page.tsx
import type { Metadata } from "next"
import SIFMarketPlaceClient from "./SIFMarketPlaceClient"

export const metadata: Metadata = {
  title: "SIF Marketplace - Compare Specialized Investment Funds in India",
  description:
    "Discover, compare, and explore SEBI-registered Specialized Investment Funds (SIFs) across top AMCs. Track AUM, categories, and risks with InvestInSIF.",
  keywords: [
    "SIF",
    "Altiva",
    "qsif",
    "SIF Marketplace",
    "Specialized Investment Funds",
    "Alternative Investment Funds",
    "AUM Tracker",
    "Fund Comparison",
  ],
  openGraph: {
    title: "SIF Marketplace - Explore & Compare Funds",
    description: "Your trusted marketplace for Specialized Investment Funds in India.",
    url: "https://investinsif.com/sifmarketplace",
    images: ["/og/sif-marketplace.png"],
  },
}

export default function SIFMarketPlacePage() {
  // Server component — renders the client UI
  return <SIFMarketPlaceClient />
}
