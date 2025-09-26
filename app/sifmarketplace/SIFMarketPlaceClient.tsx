// app/sifmarketplace/SIFMarketPlaceClient.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Star } from "lucide-react";
import { funds } from "./fundsData";

export default function SIFMarketPlaceClient() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
      {/* Hero */}
      <div className="relative text-center py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-300" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          SIF Marketplace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Discover, compare, and explore Specialized Investment Funds from top AMCs.
        </motion.p>
      </div>

      {/* Fund Cards */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {funds.map((fund, i) => (
            <motion.div
              key={fund.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link href={`/sifmarketplace/${fund.slug}`} className="block group">
                <Card className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-card/90 border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`}
                  />

                  <CardHeader className="relative z-10 flex items-center gap-5">
                    <div className="w-14 h-14 relative rounded-xl overflow-hidden border border-border/40 bg-background shadow-md">
                      {fund.logo ? (
                        <Image src={fund.logo} alt={`${fund.name} logo`} fill className="object-contain p-2" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">LOGO</div>
                      )}
                    </div>

                    <div>
                      <CardTitle className="text-xl font-bold">{fund.name}</CardTitle>
                      <CardDescription>{fund.category}</CardDescription>
                      <p className="text-sm text-muted-foreground mt-2">{fund.amc}</p>
                    </div>
                    <div className="ml-auto">{fund.icon ?? <Star className="h-6 w-6 text-yellow-400" />}</div>
                  </CardHeader>

                  <CardContent className="relative z-10 mt-4 space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-4 rounded-xl bg-background/50">
                        <p className="text-muted-foreground">AUM</p>
                        <p className="font-semibold">{fund.aum}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-background/50">
                        <p className="text-muted-foreground">Risk</p>
                        <Badge variant="outline" className="mt-1 px-3 py-1 rounded-full text-sm">
                          {fund.risk}
                        </Badge>
                      </div>
                    </div>
                    <Button className="w-full py-4 rounded-full font-semibold text-lg shadow-md bg-primary group-hover:scale-105 transition-transform">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
