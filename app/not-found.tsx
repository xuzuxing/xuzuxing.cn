import Link from "next/link"

import { SiteHeader } from "@/components/site-header"

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <SiteHeader />

      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-mono text-xs tracking-widest text-brand">404</p>

        <h1 className="mt-4 font-heading text-6xl font-medium tracking-tight text-balance sm:text-7xl">
          Page not found
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center rounded-lg border border-border px-5 py-2.5 font-mono text-sm transition-colors hover:border-brand/50 hover:text-brand focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Back home
        </Link>
      </section>
    </main>
  )
}
