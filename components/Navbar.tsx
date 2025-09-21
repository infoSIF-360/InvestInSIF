"use client"

export default function Navbar() {
  return (
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
  )
}
