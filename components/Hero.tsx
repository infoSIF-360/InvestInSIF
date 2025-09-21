"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-28 pb-24">
      {/* Subtle background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Badge */}
          <Badge className="mb-6 bg-primary/15 text-primary border-primary/20 text-sm px-5 py-2 rounded-full tracking-wide">
            🚀 Your Gateway to Specialized Investments
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Discover, Compare & Invest in{" "}
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Specialized Investment Funds
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-foreground/80">(SIFs)</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Track, compare & access SIFs with next-gen tools. Simplifying
            sophisticated investing for everyone.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              See Latest SIFs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-primary/30 hover:border-primary hover:bg-primary/5 transition-colors"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
