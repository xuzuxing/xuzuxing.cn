export type SocialLink = {
  /** Stable key used for icon mapping. */
  key: "github" | "linkedin" | "x" | "instagram" | "devto" | "discord" | "email"
  /** Human label, e.g. for aria-label and tooltips. */
  label: string
  /** Handle shown on hover / for screen readers. */
  handle: string
  href: string
}

export const siteConfig = {
  name: "Xu Zuxing",
  /** Short role used in the title tag and OG. */
  role: "Full-Stack Engineer",
  url: "https://xuzuxing.cn",
  location: "Nanning",
  twitterHandle: "@KhaleddSaeed18",
  /** WeChat contact QR shown in the "Wechat Me" popover. Drop your exported QR image in /public. */
  wechatQrImage: "/wechat-qr.png",
  /** ~155 chars, no em dashes, no emoji. */
  description:
    "Xu Zuxing is a full-stack engineer from Lebanon building pixel-perfect interfaces, backend systems, and developer tooling in TypeScript and Node.js.",
  intro:
    "I build across the full stack: pixel-perfect interfaces on the frontend, solid backend systems, and developer tooling in TypeScript and Node.js. I care about clean design on both sides of the wire.",
  /** Roles cycled by the rolling text. Sentence case, lowercase per brand. */
  roles: [
    "full-stack engineer",
    "frontend developer",
    "backend developer",
    "open-source contributor",
  ],
  /** Topics surfaced for search engines and answer engines (GEO). */
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

export const socialLinks: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    handle: "xuzuxing",
    href: "https://github.com/xuzuxing",
  },
//   {
//     key: "linkedin",
//     label: "LinkedIn",
//     handle: "khaled-s-saeed",
//     href: "https://www.linkedin.com/in/khaled-s-saeed/",
//   },
//   {
//     key: "x",
//     label: "X",
//     handle: "@KhaleddSaeed18",
//     href: "https://x.com/KhaleddSaeed18",
//   },
//   {
//     key: "devto",
//     label: "DEV",
//     handle: "khaledsaeed18",
//     href: "https://dev.to/khaledsaeed18",
//   },
//   {
//     key: "instagram",
//     label: "Instagram",
//     handle: "khaledd.saeed",
//     href: "https://www.instagram.com/khaledd.saeed",
//   },
//   {
//     key: "discord",
//     label: "Discord",
//     handle: "khaledsaeed18",
//     href: "https://discord.com/users/1496301841774805004",
//   },
  {
    key: "email",
    label: "Email",
    handle: "zuxing.xu@lettered.cn",
    href: "mailto:zuxing.xu@lettered.cn",
  },
]

/** Same-as URLs for structured data (GEO/SEO). */
export const sameAs = socialLinks
  .filter((l) => l.key !== "email")
  .map((l) => l.href)

/** Primary navigation rendered in the site header. */
export const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Links", href: "/link" },
] as const

export type ProjectItem = {
  name: string
  description: string
  href: string
  tags: string[]
}

/** Project showcase. */
export const projects: ProjectItem[] = [
  {
    name: "Certeasy",
    description:
      "One-stop SSL certificate service: automated issuance, deployment sync to cloud resources, and expiry monitoring with alerts.",
    href: "https://www.certeasy.cn",
    tags: ["SSL", "Automation", "SaaS"],
  },
  {
    name: "Beaconix",
    description: "A new project currently in the works. Details coming soon.",
    href: "https://beaconix.app",
    tags: [],
  },
]

export type FriendLink = {
  name: string
  description: string
  href: string
}

/** Friend links (blogroll). */
export const friendLinks: FriendLink[] = [
  {
    name: "Certeasy",
    description: "One-stop SSL certificate service with automated issuance, deployment, and monitoring.",
    href: "https://www.certeasy.cn",
  },
  {
    name: "Beaconix",
    description: "A project of mine. More coming soon.",
    href: "https://beaconix.app",
  },
  {
    name: "Lettered",
    description: "A tech blog covering Vue, Git, CSS, and frontend engineering notes.",
    href: "https://lettered.cn",
  },
]
