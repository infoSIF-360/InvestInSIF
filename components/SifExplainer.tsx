"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What is a Specialized Investment Fund (SIF)?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Specialized Investment Funds (SIFs) are a new category introduced by SEBI...
              </p>
              <div className="space-y-4">
                {[
                  { title: "Minimum Investment", desc: "₹10 Lakhs minimum investment for institutional and HNI investors" },
                  { title: "Specialized Strategies", desc: "Access to alternative investments, private equity..." },
                  { title: "SEBI Regulated", desc: "Fully regulated under SEBI framework for investor protection" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
            {/* Right */}
            <div className="gradient-bg p-8 rounded-2xl">
              {/* Stats */}
              <div className="space-y-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">₹50,000 Cr+</div>
                  <p className="text-muted-foreground">Expected AUM in first year</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <p className="text-muted-foreground">AMCs preparing SIF launches</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success mb-2">15%+</div>
                  <p className="text-muted-foreground">Target returns for specialized strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
