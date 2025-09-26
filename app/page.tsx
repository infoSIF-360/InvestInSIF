"use client"

import Hero from "@/components/Hero"
import SifExplainer from "@/components/SifExplainer"
import FeaturesSection from "@/components/FeaturesSection"
import MarketSection from "@/components/MarketSection"
import BlogSection from "@/components/BlogSection"
import Footer from "@/components/Footer"
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
import InsiderForm from "./insider/page"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <SifExplainer />
      <FeaturesSection />
      <MarketSection />
      <InsiderForm />
      <BlogSection />
      <Footer />
    </div>
  )
}
