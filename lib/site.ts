export type SocialLink = {
  /** Stable key used for icon mapping. */
  key:
    | "github"
    | "linkedin"
    | "x"
    | "instagram"
    | "devto"
    | "discord"
    | "juejin"
    | "zhihu"
    | "csdn"
    | "gitee"
    | "email"
  /** Human label, e.g. for aria-label and tooltips. */
  label: string
  /** Handle shown on hover / for screen readers. */
  handle: string
  /** Public URL. Leave empty ("") to hide the link from the UI. */
  href: string
}

/**
 * Language-neutral site configuration. Everything user-visible and
 * translatable lives in the dictionaries (app/[lang]/dictionaries/).
 */
export const siteConfig = {
  url: "https://xuzuxing.cn",
  twitterHandle: "@KhaleddSaeed18",
  /** WeChat contact QR shown in the "Wechat Me" popover. Drop your exported QR image in /public. */
  wechatQrImage: "/wechat-qr.png",
  /** Topics surfaced for search engines and answer engines (GEO). Kept in
      English across locales — these are canonical subject-matter labels. */
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Frontend Engineering",
    "Backend Architecture",
    "System Design",
    "TypeScript",
    "Node.js",
    "React",
    "NestJS",
    "PostgreSQL",
    "REST APIs",
    "Open Source",
  ],
} as const

/**
 * Social links. Only entries with a non-empty `href` are rendered —
 * comment out or blank the href to hide a platform.
 */
export const socialLinks: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    handle: "xuzuxing",
    href: "https://github.com/xuzuxing",
  },
  {
    key: "gitee",
    label: "Gitee",
    handle: "xuzuxing",
    href: "https://gitee.com/xuzuxing",
  },
  {
    key: "juejin",
    label: "掘金",
    handle: "xuzuxing",
    href: "https://juejin.cn/user/3746739760674605",
  },
  {
    key: "zhihu",
    label: "知乎",
    handle: "zuxcloud",
    href: "https://www.zhihu.com/people/zuxcloud",
  },
  {
    key: "csdn",
    label: "CSDN",
    handle: "xuzuxing",
    href: "https://blog.csdn.net/u014130056",
  },
  {
    key: "email",
    label: "Email",
    handle: "zuxing.xu@lettered.cn",
    href: "mailto:zuxing.xu@lettered.cn",
  },
]

/** Same-as URLs for structured data (GEO/SEO). */
export const sameAs = socialLinks
  .filter((l) => l.key !== "email" && l.href !== "")
  .map((l) => l.href)
