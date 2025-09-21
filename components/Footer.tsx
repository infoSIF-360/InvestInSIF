"use client";

import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card mt-20 text-muted-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand / About */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">InvestInSIF</h3>
            <p className="mb-4 leading-relaxed text-sm">
              India’s first platform to discover and track Structured Investment Funds (SIFs).  
              Bringing transparency, insights and simplified investing for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Blog / Insights
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Regulatory</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#sebi"
                  className="hover:text-primary transition-colors inline-block"
                >
                  SEBI Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#disclaimer"
                  className="hover:text-primary transition-colors inline-block"
                >
                  Risk Disclaimer
                </a>
              </li>
            </ul>
            <p className="text-xs mt-4 leading-relaxed">
              Investments in securities markets are subject to market risks.  
              Read all related documents carefully before investing.  
              We comply with SEBI regulations to ensure investor protection.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-center md:text-left">
            © {new Date().getFullYear()} InvestInSIF. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
