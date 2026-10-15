"use client"

import { usePathname } from "next/navigation"

import { en } from "@/app/[lang]/dictionaries/en"
import { zh } from "@/app/[lang]/dictionaries/zh"
import { BackHomeLink } from "@/components/back-home-link"
import { SiteHeader } from "@/components/site-header"

/**
 * Localized 404. The not-found convention receives no route params, so the
 * locale is derived from the pathname client-side (both dictionaries are
 * tiny plain objects).
 */
export default function NotFound() {
  const lang = usePathname().split("/")[1] === "zh" ? "zh" : "en"
  const dict = lang === "zh" ? zh : en

  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <SiteHeader lang={lang} t={dict.header} />

      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-mono text-xs tracking-widest text-brand">
          {dict.notFound.code}
        </p>

        <h1 className="mt-4 font-heading text-6xl font-medium tracking-tight text-balance sm:text-7xl">
          {dict.notFound.title}
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          {dict.notFound.body}
        </p>

        <BackHomeLink label={dict.notFound.backHome} />
      </section>
    </main>
  )
}
