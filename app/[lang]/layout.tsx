import type { Metadata, Viewport } from "next"
import { Hanken_Grotesk, Geist, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { getDictionary } from "@/app/[lang]/dictionaries"
import { PersonJsonLd } from "@/components/person-json-ld"
import { TooltipProvider } from "@/components/ui/tooltip"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontHeading = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const { site } = await getDictionary(lang)

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${site.name} | ${site.role}`,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    keywords: [...site.keywords],
    authors: [{ name: site.name, url: siteConfig.url }],
    creator: site.name,
    publisher: site.name,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        zh: "/zh",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: site.ogLocale,
      url: siteConfig.url,
      siteName: site.name,
      title: `${site.name} — ${site.role}`,
      description: site.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${site.role}`,
      description: site.description,
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "technology",
  }
}

export const viewport: Viewport = {
  themeColor: "#1A1715",
  colorScheme: "dark",
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <html
      lang={dict.site.htmlLang}
      className={cn("dark",
        "antialiased",
        fontSans.variable,
        fontHeading.variable,
        fontMono.variable,
        "font-sans"
      )}
    >
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <PersonJsonLd dict={dict} />
      </body>
    </html>
  )
}
