"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: "/sifmarketplace", label: "SIF MarketPlace" },
    { href: "/blog", label: "Blogs" },
    { href: "/#about", label: "About SIFs" }, 
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text">
          InvestInSIF
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => {
            const isActive =
              link.href !== "/#about" && pathname.startsWith(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          {/* Insider Access Button */}
          <Link
            href="/insider"
            className="ml-4 px-4 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-md"
          >
            Insider Access
          </Link>
        </div>
      </div>
    </nav>
  )
}
