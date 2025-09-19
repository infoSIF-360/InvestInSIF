"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  ExternalLink,
  Star,
  Building2,
} from "lucide-react"

export default function InvestInSIFLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">InvestInSIF</div>
          <div className="flex items-center gap-6">
            <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About SIFs
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-success/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2">
              🚀 India's First Platform for Investing in Specialized Investment Funds
            </Badge>
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">Discover,Compare & Invest in</span>
                <span className="block gradient-text">Specialized Investment Funds</span>
                <span className="block text-3xl md:text-5xl lg:text-6xl">(SIFs)</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 text-pretty max-w-4xl mx-auto leading-relaxed">
              Track, compare & access SIFs with next-gen tools. Don't miss out on the future of specialized investing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                See Latest SIFs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SIF Explainer Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What is a Specialized Investment Fund (SIF)?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Specialized Investment Funds (SIFs) are a new category of investment vehicles introduced by SEBI to
                  cater to sophisticated investors seeking exposure to specialized strategies and asset classes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Minimum Investment</h4>
                      <p className="text-muted-foreground">
                        ₹10 Lakhs minimum investment for institutional and HNI investors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Specialized Strategies</h4>
                      <p className="text-muted-foreground">
                        Access to alternative investments, private equity, and niche market opportunities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">SEBI Regulated</h4>
                      <p className="text-muted-foreground">
                        Fully regulated under SEBI's comprehensive framework for investor protection
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="mt-6 bg-transparent" asChild>
                  <a
                    href="https://www.sebi.gov.in/legal/circulars/feb-2025/regulatory-framework-for-specialized-investment-funds-sif-_92299.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More from SEBI
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="gradient-bg p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">₹50,000 Cr+</div>
                    <p className="text-muted-foreground">Expected AUM in first year</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">100+</div>
                    <p className="text-muted-foreground">AMCs preparing SIF launches</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-2">15%+</div>
                    <p className="text-muted-foreground">Target returns for specialized strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose InvestInSIF?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The only platform you need to discover, compare, and invest in Specialized Investment Funds
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="animate-stagger hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 border-border/50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SIF Scorecards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Comprehensive analysis and ratings for every SIF with performance metrics, risk assessment, and
                  strategy breakdown.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="animate-stagger hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 border-border/50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Compare Tool</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Side-by-side comparison of SIFs with advanced filtering, performance analytics, and investment
                  strategy matching.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="animate-stagger hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 border-border/50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Verified Badge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Only SEBI-registered and verified SIFs with complete due diligence, compliance checks, and
                  authenticity verification.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="animate-stagger hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 border-border/50">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Investor Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Exclusive access to pre-launch SIFs, priority allocation, and direct connect with fund managers for
                  qualified investors.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SIFs In Market Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">SIFs In Market</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Explore the latest Specialized Investment Funds available in the Indian market
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Active SIFs</h3>
                <p className="text-muted-foreground">Browse currently available SIFs across different strategies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Top Performers</h3>
                <p className="text-muted-foreground">Discover the highest-rated SIFs based on our analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-2">New Launches</h3>
                <p className="text-muted-foreground">Stay updated with the latest SIF launches and opportunities</p>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore SIFs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest in SIF regulations and market trends
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Badge className="w-fit mb-2">Regulation</Badge>
                <CardTitle className="text-xl">SEBI's New SIF Framework: What Investors Need to Know</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A comprehensive breakdown of SEBI's regulatory framework for Specialized Investment Funds and its
                  implications for the Indian investment landscape.
                </CardDescription>
                <Button variant="ghost" className="mt-4 p-0">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Badge className="w-fit mb-2">Market Analysis</Badge>
                <CardTitle className="text-xl">Top 10 SIF Strategies for 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore the most promising specialized investment strategies that are expected to dominate the SIF
                  landscape in 2025.
                </CardDescription>
                <Button variant="ghost" className="mt-4 p-0">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Badge className="w-fit mb-2">Investment Guide</Badge>
                <CardTitle className="text-xl">How to Evaluate SIF Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn the key metrics and evaluation criteria for assessing Specialized Investment Fund performance
                  and making informed investment decisions.
                </CardDescription>
                <Button variant="ghost" className="mt-4 p-0">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info - Takes more space */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="text-3xl font-bold gradient-text mb-6">InvestInSIF</div>
              <p className="text-muted-foreground mb-8 max-w-lg text-lg leading-relaxed">
                India's premier platform for discovering and accessing Specialized Investment Funds. Connecting
                sophisticated investors with verified SIF opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore SIFs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent">
                  Learn About SIFs
                </Button>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-foreground">Resources</h4>
              <div className="space-y-4">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-base">
                  SIF Database
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-base">
                  Market Research
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-base">
                  Investment Guides
                </a>
                <a href="/blog" className="block text-muted-foreground hover:text-primary transition-colors text-base">
                  Blog & Insights
                </a>
              </div>
            </div>

            {/* Legal & Compliance Column */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-foreground">Legal & Compliance</h4>
              <div className="space-y-4">
                <a
                  href="https://www.sebi.gov.in/legal/circulars/feb-2025/regulatory-framework-for-specialized-investment-funds-sif-_92299.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors text-base flex items-center"
                >
                  SEBI SIF Circular
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-base">
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-base">
                  Terms of Service
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-base">
                  Risk Disclosure
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-12">
            <div className="bg-card/50 rounded-2xl p-8 mb-8">
              <h5 className="font-semibold text-lg mb-4 text-foreground">Important Disclaimer</h5>
              <p className="text-muted-foreground leading-relaxed text-base">
                <strong className="text-foreground">Investment Risk:</strong> Specialized Investment Funds are subject
                to market risks and are suitable only for sophisticated investors. Past performance is not indicative of
                future results. Please read all scheme related documents carefully before investing. This platform is
                for informational purposes only and does not constitute investment advice.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-muted-foreground">&copy; 2025 InvestInSIF. All rights reserved.</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Regulated by SEBI</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
