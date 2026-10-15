import type { Metadata } from "next"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { SiteHeader } from "@/components/site-header"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const { projects } = await getDictionary(lang)

  return {
    title: projects.title,
    description: projects.metaDescription,
    alternates: {
      canonical: `/${lang}/project`,
      languages: {
        en: "/en/project",
        zh: "/zh/project",
        "x-default": "/en/project",
      },
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const { projects } = dict

  return (
    <main className="relative isolate min-h-svh overflow-hidden">
      <SiteHeader lang={lang} t={dict.header} />

      <section className="mx-auto max-w-2xl px-6 pt-32 pb-24 sm:px-10">
        <p className="mb-5 font-mono text-xs tracking-wide text-brand">
          /project
        </p>

        <h1 className="font-heading text-5xl font-medium tracking-tight text-balance sm:text-6xl">
          {projects.title}
        </h1>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
          {projects.subtitle}
        </p>

        <ul className="mt-12 space-y-4">
          {projects.items.map((project) => {
            const card = (
              <>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-heading text-xl font-medium transition-colors group-hover:text-brand">
                    {project.name}
                  </h2>
                  {project.href && (
                    <span
                      aria-hidden="true"
                      className="text-muted-foreground transition-colors group-hover:text-brand"
                    >
                      ↗
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.tags.length > 0 && (
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
                )}
              </>
            )

            const cardClass =
              "group block rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-brand/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"

            return (
              <li key={project.name}>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {card}
                  </a>
                ) : (
                  <div className={cardClass}>{card}</div>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
