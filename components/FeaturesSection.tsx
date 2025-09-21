"use client";

import { CheckCircle } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Comprehensive Listings",
      desc: "Discover a curated list of all active Specialized Investment Funds.",
    },
    {
      title: "Compare in One Place",
      desc: "Compare minimum investment, strategies, and performance metrics at a glance.",
    },
    {
      title: "Data-Driven Insights",
      desc: "Get clear analytics, fund details, and trends before making a decision.",
    },
    {
      title: "Simple & Secure",
      desc: "Seamlessly explore SIFs with a modern, secure platform interface.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-background/80 to-background">
      {/* Background shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Use Our Platform?
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-card shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <CheckCircle className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>

              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
