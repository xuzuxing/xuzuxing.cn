import type { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"
import { projects } from "@/lib/site"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Xu Zuxing: full-stack apps, backend systems, and open-source developer tooling.",
  alternates: {
    canonical: "/project",
  },
}

export default function ProjectPage() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden">
      <SiteHeader />

      <section className="mx-auto max-w-2xl px-6 pt-32 pb-24 sm:px-10">
        <p className="mb-5 font-mono text-xs tracking-wide text-brand">
          /project
        </p>

        <h1 className="font-heading text-5xl font-medium tracking-tight text-balance sm:text-6xl">
          Projects
        </h1>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
          A selection of things I have built and shipped.
        </p>

        <ul className="mt-12 space-y-4">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-brand/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-heading text-xl font-medium transition-colors group-hover:text-brand">
                    {project.name}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="text-muted-foreground transition-colors group-hover:text-brand"
                  >
                    ↗
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border px-2 py-1 text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
