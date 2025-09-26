// app/sifmarketplace/[slug]/page.tsx
import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { funds } from "../fundsData" // adjust path if you put fundsData elsewhere

type Props = {
  params: { slug: string }
}

// dynamic metadata for each fund
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const fund = funds.find((f) => f.slug === params.slug)
  if (!fund) {
    return {
      title: "Fund Not Found | InvestInSIF",
      description: "The requested fund could not be found.",
    }
  }

  return {
    title: `${fund.name} — ${fund.amc} | InvestInSIF`,
    description: `${fund.description} AUM: ${fund.aum}. Risk level: ${fund.risk}.`,
    keywords: [fund.name, fund.amc, fund.category, "SIF", "Specialized Investment Fund"],
    openGraph: {
      title: `${fund.name} — ${fund.amc}`,
      description: fund.description,
      url: `https://investinsif.com/sifmarketplace/${fund.slug}`,
      images: fund.ogImage ? [fund.ogImage] : fund.logo ? [fund.logo] : ["/og/sif-marketplace.png"],
    },
  }
}

// tell Next which slugs to prerender at build time
export async function generateStaticParams() {
  return funds.map((f) => ({ slug: f.slug }))
}

export default function FundPage({ params }: Props) {
  const fund = funds.find((f) => f.slug === params.slug)
  if (!fund) return notFound()

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          {fund.logo && (
            <div className="w-20 h-20 relative rounded-lg overflow-hidden">
              <Image src={fund.logo} alt={fund.name} fill className="object-contain p-2" />
            </div>
          )}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{fund.name}</h1>
            <p className="text-sm text-muted-foreground">{fund.amc}</p>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-6">{fund.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-card border">
            <p className="text-sm text-muted-foreground">Category</p>
            <p className="font-semibold">{fund.category}</p>
          </div>
          <div className="p-4 rounded-lg bg-card border">
            <p className="text-sm text-muted-foreground">AUM</p>
            <p className="font-semibold">{fund.aum}</p>
          </div>
          <div className="p-4 rounded-lg bg-card border">
            <p className="text-sm text-muted-foreground">Risk</p>
            <p className="font-semibold">{fund.risk}</p>
          </div>
        </div>

        {/* CTA / Links */}
        <div className="flex gap-3">
          <a
            href="/sifmarketplace"
            className="inline-block px-5 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90"
          >
            ← Back to Marketplace
          </a>

          {/* Example: lead capture / invest CTA */}
          <a
            href="#insiderForm"
            className="inline-block px-5 py-3 rounded-full border border-primary text-primary hover:bg-primary/5"
          >
            Request Info
          </a>
        </div>
      </div>
    </section>
  )
}
