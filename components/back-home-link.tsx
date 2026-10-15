"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

/**
 * The localized 404 page cannot read route params, so the home link derives
 * the current locale from the pathname on the client.
 */
export function BackHomeLink({ label }: { label: string }) {
  const pathname = usePathname()
  const lang = pathname.split("/")[1] || "en"

  return (
    <Link
      href={`/${lang}`}
      className="mt-10 inline-flex items-center rounded-lg border border-border px-5 py-2.5 font-mono text-sm transition-colors hover:border-brand/50 hover:text-brand focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {label}
    </Link>
  )
}
