import { notFound } from "next/navigation"

/**
 * Catch-all for unknown paths under a locale. Renders the localized
 * app/[lang]/not-found.tsx via the notFound() error boundary.
 */
export default function CatchAllPage() {
  notFound()
}
