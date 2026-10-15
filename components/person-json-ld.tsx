import type { Dictionary } from "@/app/[lang]/dictionaries/en"
import { sameAs, siteConfig } from "@/lib/site"

type PersonJsonLdProps = {
  dict: Dictionary
}

/**
 * Person + WebSite structured data. Helps search engines and answer engines
 * (GEO) understand who this site is about and link the verified profiles.
 */
export function PersonJsonLd({ dict }: PersonJsonLdProps) {
  const { site } = dict
  const personId = `${siteConfig.url}/#person`

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: siteConfig.url,
        jobTitle: site.role,
        description: site.description,
        knowsAbout: [...siteConfig.knowsAbout],
        sameAs,
        address: {
          "@type": "PostalAddress",
          addressCountry: "CN",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: site.name,
        description: site.description,
        inLanguage: site.htmlLang,
        author: { "@id": personId },
        publisher: { "@id": personId },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // Structured data is static and trusted (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
