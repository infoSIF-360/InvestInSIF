// app/sifmarketplace/fundsData.ts
export type Fund = {
  slug: string
  name: string
  amc: string
  category: string
  aum: string
  risk: string
  description: string
  logo?: string // path in /public
  ogImage?: string
}

export const funds: Fund[] = [
  {
    slug: "edelweiss-altiva",
    name: "Edelweiss Altiva SIF",
    amc: "Edelweiss Mutual Funds",
    category: "Hybrid Long-Short",
    aum: "₹1,200 Cr",
    risk: "Moderate",
    description:
      "A diversified hybrid long-short strategy designed for balanced growth and risk management.",
    logo: "/logos/edelweiss.png",
    ogImage: "/og/edelweiss-altiva.png",
  },
  {
    slug: "quant-qsif",
    name: "Quant AMC QSIF",
    amc: "Quant Mutual Fund",
    category: "Equity Long-Short",
    aum: "₹900 Cr",
    risk: "High",
    description:
      "A dynamic equity long-short fund leveraging data-driven models to maximize alpha.",
    logo: "/logos/quant.png",
    ogImage: "/og/quant-qsif.png",
  },
]
