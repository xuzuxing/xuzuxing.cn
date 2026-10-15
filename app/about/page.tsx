import type { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"
import { SocialLinks } from "@/components/social-links"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.description,
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden">
      <SiteHeader />

      <section className="mx-auto max-w-2xl px-6 pt-32 pb-24 sm:px-10">
        <p className="mb-5 font-mono text-xs tracking-wide text-brand">/about</p>

        <h1 className="font-heading text-5xl font-medium tracking-tight text-balance sm:text-6xl">
          About me
        </h1>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>{siteConfig.intro}</p>
          <p>
            I&apos;m based in {siteConfig.location}. By day I ship products end
            to end; in my spare time I tinker with developer tooling and
            contribute to open source.
          </p>
          <p>
            {/* TODO: replace with your own story — how you got into engineering,
                what you enjoy building, and what you are curious about next. */}
            This is placeholder copy for your story. Replace it with how you
            got into engineering, what you enjoy building, and what you are
            curious about next.
          </p>
        </div>

        <h2 className="mt-14 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Now
        </h2>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {/* TODO: keep this short list current — it reads well and ages fast. */}
          <li>Building things across the stack in TypeScript.</li>
          <li>Reading about system design and databases.</li>
          <li>Looking for interesting open-source work.</li>
        </ul>

        <div className="mt-14 -ml-2">
          <SocialLinks />
        </div>
      </section>
    </main>
  )
}
