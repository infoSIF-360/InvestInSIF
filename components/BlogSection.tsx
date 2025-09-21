"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogSection() {
  const posts = [
    {
      title: "What Are Specialized Investment Funds?",
      desc: "Learn the basics of SIFs, regulatory framework, and key features.",
      link: "#",
    },
    {
      title: "Top 5 Things to Know Before Investing",
      desc: "A quick guide for new investors exploring the SIF landscape.",
      link: "#",
    },
    {
      title: "SIF Market Trends 2025",
      desc: "Insights on how SIFs are changing the investment scene in India.",
      link: "#",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Articles & Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="p-6 bg-card rounded-2xl shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.desc}</p>
              <Button variant="ghost" className="p-0" asChild>
                <a href={post.link} className="flex items-center text-primary hover:underline">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
