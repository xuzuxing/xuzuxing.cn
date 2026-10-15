"use client"

import * as React from "react"
import { WechatIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { siteConfig } from "@/lib/site"

const OPEN_DELAY = 120
const CLOSE_DELAY = 160

export type WechatQrLabels = {
  trigger: string
  triggerAria: string
  hint: string
  qrAlt: string
}

export function WechatQrPopover({ labels }: { labels: WechatQrLabels }) {
  const [open, setOpen] = React.useState(false)
  const openTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  // Right after an explicit click-to-close, hover/focus must not instantly
  // re-open (touch taps fire pointerover + focus before the click).
  const suppressUntil = React.useRef(0)

  const clearTimers = React.useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current)
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  const scheduleOpen = React.useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    openTimer.current = setTimeout(() => {
      if (Date.now() >= suppressUntil.current) setOpen(true)
    }, OPEN_DELAY)
  }, [])

  const scheduleClose = React.useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY)
  }, [])

  React.useEffect(() => clearTimers, [clearTimers])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <span
        className="inline-flex"
        onMouseEnter={scheduleOpen}
        onMouseLeave={scheduleClose}
        onFocus={scheduleOpen}
        onBlur={scheduleClose}
      >
        <PopoverTrigger
          aria-label={labels.triggerAria}
          onClick={(event) => {
            if (event.currentTarget.getAttribute("data-state") === "open") {
              suppressUntil.current = Date.now() + OPEN_DELAY + 200
            }
          }}
          className="group bg-secondary inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:border-brand/40 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-[state=open]:border-brand/40 data-[state=open]:bg-accent data-[state=open]:text-foreground"
        >
          <HugeiconsIcon
            icon={WechatIcon}
            className="size-4 transition-colors group-hover:text-brand group-data-[state=open]:text-brand"
            strokeWidth={1.6}
          />
          {labels.trigger}
        </PopoverTrigger>
      </span>
      <PopoverContent
        align="start"
        sideOffset={10}
        className="w-[240px] p-3"
        onMouseEnter={clearTimers}
        onMouseLeave={scheduleClose}
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-md bg-white p-2">
            <Image
              src={siteConfig.wechatQrImage}
              alt={labels.qrAlt}
              width={200}
              height={200}
              unoptimized
            />
          </div>
          <p className="text-center font-mono text-xs tracking-wide text-muted-foreground">
            {labels.hint}
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
