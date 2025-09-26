"use client";

import { Button } from "@/components/ui/button";

export default function MarketSection() {
  const funds = [
    {
      fundName: "ALTIVA HYBRID LONG-SHORT FUND",
      amc: "EDELWEISS MUTUAL FUNDS",
      desc: "A hybrid fund focusing on long-short equity strategies for optimal returns.",
      link: "https://www.edelweissmf.com/altivasif",
      color: "from-yellow-200 to-yellow-400",
    },
    {
      fundName: "QSIF EQUITY LONG-SHORT FUND",
      amc: "QUANT AMC",
      desc: "An equity long-short strategy fund designed for aggressive investors.",
      link: "https://www.qsif.com/",
      color: "from-green-200 to-green-400",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Explore SIFs in the Market
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {funds.map((fund, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-3xl bg-card shadow-xl hover:shadow-2xl transition-all duration-500 group p-10 flex flex-col justify-between"
            >
              {/* Gradient Accent */}
              <div
                className={`absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br ${fund.color} opacity-20 blur-3xl group-hover:opacity-30 transition-all duration-500`}
              />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                    {fund.fundName}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {fund.amc}
                  </p>
                  <p className="text-muted-foreground">{fund.desc}</p>
                </div>

                <Button
                  asChild
                  className="mt-4 bg-primary hover:bg-primary/90 text-sm px-6 py-2 rounded-full shadow-md w-max transition-transform hover:scale-105"
                >
                  <a href={fund.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
