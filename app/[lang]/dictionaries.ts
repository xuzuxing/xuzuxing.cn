import { notFound } from "next/navigation"

import { en, type Dictionary } from "./dictionaries/en"
import { zh } from "./dictionaries/zh"

export type Locale = "en" | "zh"

export const locales: Locale[] = ["en", "zh"]
export const defaultLocale: Locale = "en"

/** Name of the cookie that persists a visitor's manual language choice. */
export const LOCALE_COOKIE = "NEXT_LOCALE"

export function hasLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale)
}

/**
 * Load the dictionary for a locale. Unknown locales trigger the localized
 * 404 page, so callers never need to validate `lang` themselves.
 */
export async function getDictionary(lang: string): Promise<Dictionary> {
  if (!hasLocale(lang)) notFound()
  return lang === "zh" ? zh : en
}
