import Link from "next/link"

import { FlipLogo } from "@/components/flip-logo"
import { navItems, siteConfig } from "@/lib/site"

/** Shared top bar: logo mark with primary nav beside it, both on the left. */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center gap-7 px-6 py-5 sm:px-10">
      <Link
        href="/"
        aria-label={`${siteConfig.name}, home`}
        className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <FlipLogo size={50} color="var(--brand)" mode="auto" />
      </Link>

      <nav
        aria-label="Primary"
        className="flex items-center gap-5 rounded-md font-mono text-xs tracking-wide sm:gap-6"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
