import type { Metadata } from "next"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { SiteHeader } from "@/components/site-header"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const { links } = await getDictionary(lang)

  return {
    title: links.title,
    description: links.metaDescription,
    alternates: {
      canonical: `/${lang}/link`,
      languages: {
        en: "/en/link",
        zh: "/zh/link",
        "x-default": "/en/link",
      },
    },
  }
}

export default async function LinkPage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const { links } = dict

  return (
    <main className="relative isolate min-h-svh overflow-hidden">
      <SiteHeader lang={lang} t={dict.header} />

      <section className="mx-auto max-w-2xl px-6 pt-32 pb-24 sm:px-10">
        <p className="mb-5 font-mono text-xs tracking-wide text-brand">/link</p>

        <h1 className="font-heading text-5xl font-medium tracking-tight text-balance sm:text-6xl">
          {links.heading}
        </h1>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
          {links.subtitle}
        </p>

        <ul className="mt-12 space-y-4">
          {links.items.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-brand/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-heading text-xl font-medium transition-colors group-hover:text-brand">
                    {link.name}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="text-muted-foreground transition-colors group-hover:text-brand"
                  >
                    ↗
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {link.description}
                </p>

                <p className="mt-3 truncate font-mono text-xs text-muted-foreground">
                  {link.href}
                </p>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
          {links.exchange}
        </p>
      </section>
    </main>
  )
}
