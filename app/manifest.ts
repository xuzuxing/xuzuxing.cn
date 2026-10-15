import type { MetadataRoute } from "next"

import { en } from "@/app/[lang]/dictionaries/en"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${en.site.name} — ${en.site.role}`,
    short_name: en.site.name,
    description: en.site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#1A1715",
    theme_color: "#1A1715",
    icons: [
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
