import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { socialLinks, type SocialLink } from "@/lib/site"
import { cn } from "@/lib/utils"

// dev.to has no Hugeicons glyph, so the mark is inlined.
function DevToMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480.01 43.9 480h360.2c24.21.01 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.81-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" />
    </svg>
  )
}

// Juejin (掘金) — official logo, adapted to currentColor.
function JuejinMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1212 1024" className={className} fill="currentColor" aria-hidden="true">
      <path d="M600.737684 204.341895L512.458105 134.736842l-92.213894 72.730947-4.796632 3.853474 97.010526 77.338948 97.333895-77.338948-9.054316-6.979368z m334.551579 269.958737l-423.073684 333.608421-422.804211-333.41979L26.947368 524.665263l485.268211 382.625684 485.537684-382.841263-62.464-50.149052z m-423.073684 27.055157l-230.238316-181.517473-62.437052 50.149052 292.648421 230.777264 292.944842-230.992843-62.437053-50.149052-230.480842 181.733052z" />
    </svg>
  )
}

// Zhihu (知乎) — official logo, adapted to currentColor.
function ZhihuMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1024 1024" className={className} fill="currentColor" aria-hidden="true">
      <path d="M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0c282.7776 0 512 229.2224 512 512 0 282.7776-229.2224 512-512 512z m-129.877333-756.48s-36.1984 2.116267-48.981334 24.490667c-12.782933 22.357333-54.306133 137.3696-54.306133 137.3696s13.841067 6.382933 37.2736-10.6496c23.432533-17.0496 30.890667-46.865067 30.890667-46.865067l42.581333-2.116267 1.0752 121.3952s-73.489067-1.0752-88.405333 0c-14.8992 1.058133-23.415467 40.448-23.415467 40.448h111.8208s-9.591467 67.106133-38.3488 116.087467c-28.740267 48.981333-83.063467 87.313067-83.063467 87.313067s39.424 15.9744 77.738667-6.382934c38.3488-22.357333 66.6112-120.712533 66.6112-120.712533l89.941333 110.062933s8.192-52.394667-1.467733-67.1744c-9.659733-14.7968-62.208-74.2912-62.208-74.2912l-22.954667 20.224 16.3328-65.109333h97.962667s0-38.3488-19.1488-40.465067c-19.182933-2.133333-78.813867 0-78.813867 0v-119.278933h88.405334s-1.0752-39.389867-18.1248-39.389867H359.765333l22.357334-64.955733z m170.001066 61.184v358.570667h36.010667l13.090133 45.0048 63.351467-45.0048h89.053867V328.704H552.123733z m42.666667 39.918933h117.879467v277.9136h-41.864534l-53.384533 40.2432-11.639467-40.2432h-10.990933V368.64z" />
    </svg>
  )
}

// CSDN — official logo, adapted to currentColor.
function CsdnMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1024 1024" className={className} fill="currentColor" aria-hidden="true">
      <path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" />
    </svg>
  )
}

// Gitee — official logo, adapted to currentColor.
function GiteeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1024 1024" className={className} fill="currentColor" aria-hidden="true">
      <path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" />
    </svg>
  )
}

const ICONS = {
  github: GithubIcon,
  linkedin: Linkedin01Icon,
  x: NewTwitterIcon,
  instagram: InstagramIcon,
  discord: DiscordIcon,
  email: Mail01Icon,
} as const

function LinkIcon({ link, className }: { link: SocialLink; className?: string }) {
  if (link.key === "devto") return <DevToMark className={className} />
  if (link.key === "juejin") return <JuejinMark className={className} />
  if (link.key === "zhihu") return <ZhihuMark className={className} />
  if (link.key === "csdn") return <CsdnMark className={className} />
  if (link.key === "gitee") return <GiteeMark className={className} />
  return <HugeiconsIcon icon={ICONS[link.key as keyof typeof ICONS]} className={className} strokeWidth={1.6} />
}

export function SocialLinks({ className }: { className?: string }) {
  const visible = socialLinks.filter((link) => link.href !== "")
  return (
    <ul className={cn("flex flex-wrap items-center gap-1", className)}>
      {visible.map((link) => {
        const isMail = link.key === "email"
        return (
          <li key={link.key}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  aria-label={`${link.label}: ${link.handle}`}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  className="group inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <LinkIcon
                    link={link}
                    className="size-6 transition-colors group-hover:text-brand"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8}>
                {link.handle}
              </TooltipContent>
            </Tooltip>
          </li>
        )
      })}
    </ul>
  )
}
