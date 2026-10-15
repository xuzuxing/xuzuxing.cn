import type { Metadata } from "next"
import Image from "next/image"

import { getDictionary } from "@/app/[lang]/dictionaries"
import { PrintButton } from "@/components/print-button"
import { SiteHeader } from "@/components/site-header"
import { siteConfig, socialLinks } from "@/lib/site"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params
  const { resume } = await getDictionary(lang)

  return {
    title: resume.title,
    description: resume.metaDescription,
    alternates: {
      canonical: `/${lang}/resume`,
      languages: {
        en: "/en/resume",
        zh: "/zh/resume",
        "x-default": "/en/resume",
      },
    },
  }
}

export default async function ResumePage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const { site, resume } = dict
  const email = socialLinks.find((link) => link.key === "email")

  return (
    <main className="relative isolate min-h-svh overflow-hidden">
      <SiteHeader lang={lang} t={dict.header} />

      <section className="mx-auto max-w-2xl px-6 pt-32 pb-24 sm:px-10 print:max-w-none print:px-0 print:pt-6 print:pb-0">
        <p className="mb-5 font-mono text-xs tracking-wide text-brand print:hidden">
          /resume
        </p>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-heading text-5xl font-medium tracking-tight text-balance sm:text-6xl">
            {resume.heading}
          </h1>
          <div className="flex items-center gap-4">
            <PrintButton label={resume.print} />
            <Image
              src="/avatar.jpg"
              alt={resume.photoAlt}
              width={375}
              height={480}
              priority
              unoptimized
              className="h-20 w-20 rounded-full border border-border object-cover sm:h-24 sm:w-24"
            />
          </div>
        </div>

        <p className="mt-4 font-mono text-xs tracking-wide text-muted-foreground">
          {site.name} · {resume.position} · {email?.handle} ·{" "}
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {resume.summary}
        </p>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {resume.experienceHeading}
          </h2>
          <ol className="mt-4 space-y-7">
            {resume.experience.map((job) => (
              <li key={job.company} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-heading text-lg font-medium">
                    {job.role}{" "}
                    <span className="text-brand">@ {job.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {job.period}
                  </p>
                </div>
                {job.points.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {resume.projectsHeading}
          </h2>
          <ol className="mt-4 space-y-7">
            {resume.projects.map((project) => (
              <li key={project.name} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-heading text-lg font-medium">
                    {project.name}{" "}
                    <span className="text-brand">{project.role}</span>
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {project.period}
                  </p>
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {project.stack}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {resume.skillsHeading}
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {resume.skills.map((group) => (
              <div
                key={group.group}
                className="break-inside-avoid rounded-xl border border-border p-4 print:rounded-none print:border-0 print:p-0"
              >
                <dt className="font-mono text-xs tracking-wide text-foreground">
                  {group.group}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {resume.educationHeading}
          </h2>
          <ol className="mt-4 space-y-4">
            {resume.education.map((school) => (
              <li key={school.school} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-heading text-lg font-medium">
                    {school.school}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {school.period}
                  </p>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {school.degree}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {resume.certificatesHeading}
          </h2>
          <ul className="mt-4 space-y-2">
            {resume.certificates.map((cert) => (
              <li
                key={cert}
                className="break-inside-avoid text-sm leading-relaxed text-muted-foreground"
              >
                {cert}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  )
}
