import Link from "next/link"

import type { Dictionary } from "@/app/[lang]/dictionaries/en"
import { FlipLogo } from "@/components/flip-logo"
import { LanguageToggle } from "@/components/language-toggle"

type SiteHeaderProps = {
  lang: string
  t: Dictionary["header"]
}

/** Shared top bar: logo mark and primary nav on the left, language toggle on the right. */
export function SiteHeader({ lang, t }: SiteHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center gap-7 px-6 py-5 sm:px-10 print:hidden">
      <Link
        href={`/${lang}`}
        aria-label={t.logoAria}
        className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <FlipLogo size={50} color="var(--brand)" mode="auto" />
      </Link>

      <nav
        aria-label={t.navAria}
        className="flex items-center gap-5 rounded-md font-mono text-xs tracking-wide sm:gap-6"
      >
        {t.nav.map((item) => (
          <Link
            key={item.path}
            href={`/${lang}${item.path}`}
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="ml-auto">
        <LanguageToggle current={lang} ariaLabel={t.langToggleAria} />
      </div>
    </header>
  )
}
