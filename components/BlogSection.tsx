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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Latest Articles & Insights
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-8 bg-card rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Card Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.desc}
                </p>
              </div>

              {/* Read More */}
              <Button
                variant="outline"
                className="self-start mt-auto text-sm px-6 py-2 rounded-full hover:bg-primary/10 transition-colors flex items-center gap-2"
                asChild
              >
                <a href={post.link}>
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
