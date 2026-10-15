import type { Metadata } from "next"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { SiteHeader } from "@/components/site-header"
import { SocialLinks } from "@/components/social-links"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const { about } = await getDictionary(lang)

  return {
    title: about.title,
    description: about.metaDescription,
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        en: "/en/about",
        zh: "/zh/about",
        "x-default": "/en/about",
      },
    },
  }
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const { about } = dict

  return (
    <main className="relative isolate min-h-svh overflow-hidden">
      <SiteHeader lang={lang} t={dict.header} />

      <section className="mx-auto max-w-2xl px-6 pt-32 pb-24 sm:px-10">
        <p className="mb-5 font-mono text-xs tracking-wide text-brand">/about</p>

        <h1 className="font-heading text-5xl font-medium tracking-tight text-balance sm:text-6xl">
          {about.heading}
        </h1>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <h2 className="mt-14 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {about.nowHeading}
        </h2>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {about.nowItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-14 -ml-2">
          <SocialLinks />
        </div>
      </section>
    </main>
  )
}
