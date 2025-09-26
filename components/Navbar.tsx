"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { href: "/sifmarketplace", label: "SIF MarketPlace" },
    { href: "/blog", label: "Blogs" },
    { href: "/#about", label: "About SIFs" },
  ]

  const handleClose = () => setOpen(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold gradient-text">
          InvestInSIF
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md border border-border hover:bg-accent/30 transition">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <div className="flex flex-col gap-6 mt-8">
                {links.map((link) => {
                  const isActive =
                    link.href !== "/#about" && pathname.startsWith(link.href)

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleClose}
                      className={`text-lg transition-colors ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}

                {/* Insider Access (Mobile) */}
                <Link
                  href="/insider"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-md text-center"
                >
                  Insider Access
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
