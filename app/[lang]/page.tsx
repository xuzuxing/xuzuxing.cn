import type { Metadata } from "next"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { DitherCharacter } from "@/components/dither-character"
import { RollingText } from "@/components/rolling-text"
import { SiteHeader } from "@/components/site-header"
import { SocialLinks } from "@/components/social-links"
import { WechatQrPopover } from "@/components/wechat-qr-popover"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params

  return {
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        zh: "/zh",
        "x-default": "/en",
      },
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const { site, home } = dict

  return (
    <main className="relative isolate min-h-svh overflow-hidden">
      {/* Top bar: animated mark + primary nav. */}
      <SiteHeader lang={lang} t={dict.header} />

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl items-center px-6 pt-28 pb-8 sm:px-10 lg:min-h-svh lg:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs tracking-wide text-muted-foreground">
            <span className="text-brand">{site.role}</span>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span>{site.location}</span>
          </p>

          <h1 className="font-heading text-5xl font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>

          <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
            <span className="text-foreground">{home.imA}</span>
            <RollingText items={site.roles} />
          </p>

          <p className="mt-7 max-w-prose text-base lg:max-w-[40vw] xl:max-w-prose leading-relaxed text-muted-foreground sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-9 -ml-2">
            <SocialLinks />
          </div>

          <div className="mt-5">
            <WechatQrPopover labels={home.wechat} />
          </div>
        </div>
      </section>

      {/* Dithered self-portrait. Sits beside the content on large screens and
          below it on small ones; purely decorative, input is read globally. */}
      <DitherCharacter className="h-[min(100vw,480px)] mb-12 w-full lg:absolute lg:mb-0 lg:right-0 lg:bottom-0 lg:-z-10 lg:h-[94svh] lg:w-[52vw]" />

      {/* Footer */}
      <footer className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 py-5 font-mono text-xs text-muted-foreground sm:px-10">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span className="hidden lg:inline">{home.footerWave}</span>
      </footer>
    </main>
  )
}
