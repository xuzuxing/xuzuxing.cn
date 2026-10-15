"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

const LOCALES = [
  { value: "en", label: "EN" },
  { value: "zh", label: "中" },
] as const

/** Must match the cookie name read by proxy.ts. */
const LOCALE_COOKIE = "NEXT_LOCALE"

/** Persist the manual choice so proxy.ts stops auto-redirecting. */
function persistLocale(locale: string) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`
}

type LanguageToggleProps = {
  current: string
  ariaLabel: string
}

/** Switches the current page to the other locale and persists the choice. */
export function LanguageToggle({ current, ariaLabel }: LanguageToggleProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchTo = (locale: string) => {
    if (locale === current) return

    const segments = pathname.split("/")
    if (LOCALES.some((l) => l.value === segments[1])) {
      segments[1] = locale
    } else {
      segments.splice(1, 0, locale)
    }

    // Persist the manual choice so proxy.ts stops auto-redirecting.
    persistLocale(locale)
    router.push(segments.join("/") + window.location.search)
  }

  return (
    <nav
      aria-label={ariaLabel}
      className="flex items-center gap-2 rounded-md font-mono text-xs tracking-wide"
    >
      {LOCALES.map((locale, index) => (
        <React.Fragment key={locale.value}>
          {index > 0 && (
            <span aria-hidden="true" className="text-border">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => switchTo(locale.value)}
            aria-current={locale.value === current ? "true" : undefined}
            className={cn(
              "rounded-md transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
              locale.value === current
                ? "text-foreground"
                : "cursor-pointer text-muted-foreground hover:text-foreground"
            )}
          >
            {locale.label}
          </button>
        </React.Fragment>
      ))}
    </nav>
  )
}
