import type { MetadataRoute } from "next"

import { locales } from "@/app/[lang]/dictionaries"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/project", priority: 0.8 },
    { path: "/link", priority: 0.6 },
    { path: "/resume", priority: 0.7 },
  ]

  return locales.flatMap((lang) =>
    paths.map(({ path, priority }) => ({
      url: `${siteConfig.url}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: {
          en: `${siteConfig.url}/en${path}`,
          zh: `${siteConfig.url}/zh${path}`,
          "x-default": `${siteConfig.url}/en${path}`,
        },
      },
    }))
  )
}
