import { NextResponse, type NextRequest } from "next/server"

const LOCALES = ["en", "zh"] as const
const DEFAULT_LOCALE = "en"
const LOCALE_COOKIE = "NEXT_LOCALE"

/**
 * Pick the request locale: manual choice (cookie) wins, then the
 * Accept-Language header, else English.
 */
function detectLocale(request: NextRequest): string {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value
  if (LOCALES.includes(cookie as (typeof LOCALES)[number])) return cookie!

  const langs = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=")
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { tag } of langs) {
    if (tag.startsWith("zh")) return "zh"
    if (tag.startsWith("en")) return "en"
  }
  return DEFAULT_LOCALE
}

/**
 * Locale-prefix gate. Requests that already start with a locale pass through;
 * everything else is redirected to the same path under the detected locale.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const firstSegment = pathname.split("/")[1]?.toLowerCase()
  if (LOCALES.includes(firstSegment as (typeof LOCALES)[number])) return

  const locale = detectLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip api, Next internals, and any path containing a dot (static files:
  // /icon.svg, /apple-icon.png, /sitemap.xml, /robots.txt, /manifest.webmanifest,
  // plus everything in /public). Page routes have no dots; /opengraph-image
  // lives under /[lang] so it is always prefixed and never matched here.
  matcher: [
    "/((?!api|_next|favicon\\.ico|sitemap\\.xml|robots\\.txt|manifest\\.webmanifest|.*\\..*).*)",
  ],
}
