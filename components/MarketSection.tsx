"use client";

import { Button } from "@/components/ui/button";
import { Building2, Star, TrendingUp } from "lucide-react";

export default function MarketSection() {
  const funds = [
    {
      name: "Edelweiss Altiva SIF",
      desc: "Hybrid Long-Short",
      link: "https://www.edelweissmf.com/altivasif",
      icon: <Star className="h-6 w-6 text-accent" />,
      color: "from-primary to-accent",
    },
    {
      name: "Quant AMC QSIF",
      desc: "Equity Long Short",
      link: "https://www.qsif.com/",
      icon: <TrendingUp className="h-6 w-6 text-success" />,
      color: "from-success to-accent",
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
              className="relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Gradient Accent */}
              <div
                className={`absolute -top-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-br ${fund.color} opacity-20 blur-3xl group-hover:opacity-30 transition-all duration-500`}
              />
              <div className="p-10 relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    {fund.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{fund.name}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{fund.desc}</p>
                <Button
                  asChild
                  className="mt-auto bg-primary hover:bg-primary/90 text-lg py-4 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  <a href={fund.link}>View Details</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
