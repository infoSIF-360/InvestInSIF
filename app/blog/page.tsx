"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Calendar, User, BookOpen } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const blogPosts = [
    {
      id: 1,
      title: "SEBI's New SIF Framework: What Investors Need to Know",
      excerpt:
        "A comprehensive breakdown of SEBI's regulatory framework for Specialized Investment Funds and its implications for the Indian investment landscape.",
      category: "Regulation",
      author: "Rajesh Kumar",
      date: "March 15, 2025",
      featured: true,
    },
    {
      id: 2,
      title: "Top 10 SIF Strategies for 2025",
      excerpt:
        "Explore the most promising specialized investment strategies that are expected to dominate the SIF landscape in 2025.",
      category: "Market Analysis",
      author: "Priya Sharma",
      date: "March 12, 2025",
      featured: true,
    },
    {
      id: 3,
      title: "How to Evaluate SIF Performance",
      excerpt:
        "Learn the key metrics and evaluation criteria for assessing Specialized Investment Fund performance and making informed investment decisions.",
      category: "Investment Guide",
      author: "Amit Patel",
      date: "March 10, 2025",
      featured: true,
    },
    {
      id: 4,
      title: "Understanding SIF Risk Management",
      excerpt:
        "Deep dive into risk management strategies employed by Specialized Investment Funds and how they protect investor capital.",
      category: "Risk Management",
      author: "Sneha Gupta",
      date: "March 8, 2025",
      featured: false,
    },
    {
      id: 5,
      title: "SIF vs Traditional Mutual Funds: A Comparison",
      excerpt:
        "Compare the key differences between Specialized Investment Funds and traditional mutual funds to understand which suits your investment goals.",
      category: "Comparison",
      author: "Vikram Singh",
      date: "March 5, 2025",
      featured: false,
    },
    {
      id: 6,
      title: "Tax Implications of SIF Investments",
      excerpt:
        "Understand the tax treatment of Specialized Investment Fund investments and optimize your tax planning strategy.",
      category: "Tax Planning",
      author: "Meera Joshi",
      date: "March 3, 2025",
      featured: false,
    },
    {
      id: 7,
      title: "Global Trends in Alternative Investments",
      excerpt:
        "A look at how alternative investment funds are shaping global capital markets and what it means for Indian SIFs.",
      category: "Global Trends",
      author: "Arjun Mehta",
      date: "Feb 28, 2025",
      featured: false,
    },
    {
      id: 8,
      title: "Beginner's Guide to Investing in SIFs",
      excerpt:
        "If you're new to alternative investments, here's a simple step-by-step guide to understanding and investing in SIFs.",
      category: "Beginner",
      author: "Neha Reddy",
      date: "Feb 25, 2025",
      featured: false,
    },
    {
      id: 9,
      title: "The Future of ESG in Specialized Funds",
      excerpt:
        "Environmental, Social, and Governance (ESG) principles are becoming critical in fund evaluation — here's how SIFs are adapting.",
      category: "ESG",
      author: "Karan Malhotra",
      date: "Feb 20, 2025",
      featured: false,
    },
  ]

  const categories = [
    "All",
    "Regulation",
    "Market Analysis",
    "Investment Guide",
    "Risk Management",
    "Comparison",
    "Tax Planning",
    "Global Trends",
    "Beginner",
    "ESG",
  ]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background text-foreground">
    

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-success/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 px-4 py-1.5 bg-primary/10 text-white border-primary/20 text-sm">
              Insights & Analysis
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">SIF Blogs Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted perspectives, market analysis, and guides on Specialized Investment Funds — written for both new and experienced investors.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="py-10 bg-card/40 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="flex flex-col h-full shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border"
                >
                  <div className="h-44 bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-primary/80" />
                  </div>
                  <CardHeader className="flex-1">
                    <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 text-xs uppercase">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-xl font-semibold line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><User className="h-3 w-3" />{post.author}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                    </div>
                    <Button variant="link" className="mt-3 px-0 text-primary">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      {regularPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="flex flex-col h-full hover:shadow-lg transition-all duration-300 border rounded-xl"
                >
                  <div className="h-40 bg-muted flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-muted-foreground/70" />
                  </div>
                  <CardHeader className="flex-1">
                    <Badge className="mb-2 text-primary border-primary/30 text-xs uppercase">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg font-semibold line-clamp-2 hover:text-primary cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><User className="h-3 w-3" />{post.author}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                    </div>
                    <Button variant="link" className="mt-3 px-0 text-primary">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
