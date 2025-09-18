"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Calendar, Clock, User, BookOpen } from "lucide-react"

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
      readTime: "8 min read",
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
      readTime: "12 min read",
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
      readTime: "10 min read",
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
      readTime: "15 min read",
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
      readTime: "7 min read",
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
      readTime: "9 min read",
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold gradient-text">
            InvestInSIF
          </a>
          <div className="flex items-center gap-6">
            <a href="/blog" className="text-foreground font-medium">
              Blog
            </a>
            <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About SIFs
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-success/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2">
                SIF Insights & Analysis
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              SIF <span className="gradient-text">Knowledge Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Stay informed with the latest insights, analysis, and guides on Specialized Investment Funds
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Featured Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 leading-relaxed">{post.excerpt}</CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                          <Calendar className="h-3 w-3 ml-2" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="mt-4 p-0 h-auto text-primary hover:text-primary/80">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      {regularPosts.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">All Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background border-border/50"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 leading-relaxed">{post.excerpt}</CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                          <Calendar className="h-3 w-3 ml-2" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="mt-4 p-0 h-auto text-primary hover:text-primary/80">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/5 to-success/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest SIF insights and market analysis delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1 bg-background" />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold gradient-text mb-4">InvestInSIF</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                India's premier platform for discovering and accessing Specialized Investment Funds. Connecting
                sophisticated investors with verified SIF opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  SIF Database
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Market Research
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Investment Guides
                </a>
                <a
                  href="https://www.sebi.gov.in/legal/circulars/feb-2025/regulatory-framework-for-specialized-investment-funds-sif-_92299.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  SEBI SIF Circular
                </a>
              </div>
            </div>
            <div></div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p className="mb-4">
              <strong>Disclaimer:</strong> Specialized Investment Funds are subject to market risks. Past performance is
              not indicative of future results. Please read all scheme related documents carefully before investing.
              This platform is for informational purposes only.
            </p>
            <p>&copy; 2025 InvestInSIF. All rights reserved. | Regulated by SEBI</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
