/**
 * English dictionary. Defines the Dictionary shape; every other locale must
 * satisfy this type.
 */
export const en = {
  site: {
    name: "Xu Zuxing",
    role: "Full-Stack Engineer",
    location: "Nanning",
    description:
      "Xu Zuxing is a full-stack engineer based in Nanning, China building pixel-perfect interfaces, backend systems, and developer tooling in TypeScript and Node.js.",
    keywords: [
      "Xu Zuxing",
      "full-stack engineer",
      "backend engineer",
      "open-source developer",
      "TypeScript",
      "Node.js",
      "NestJS",
      "system design",
      "Nanning software engineer",
      "software engineer portfolio",
    ],
    intro:
      "I build across the full stack: pixel-perfect interfaces on the frontend, solid backend systems, and developer tooling in TypeScript and Node.js. I care about clean design on both sides of the wire.",
    roles: [
      "full-stack engineer",
      "frontend developer",
      "backend developer",
      "open-source contributor",
    ],
    ogLocale: "en_US",
    htmlLang: "en",
  },
  header: {
    logoAria: "Xu Zuxing, home",
    navAria: "Primary",
    langToggleAria: "Switch language",
    nav: [
      { label: "About", path: "/about" },
      { label: "Projects", path: "/project" },
      { label: "Links", path: "/link" },
      { label: "Resume", path: "/resume" },
    ],
  },
  home: {
    imA: "I'm a ",
    footerWave: "click me to wave",
    wechat: {
      trigger: "Wechat Me",
      triggerAria: "Show my WeChat QR code",
      hint: "Scan to add me on WeChat",
      qrAlt: "Xu Zuxing's WeChat QR code",
    },
  },
  about: {
    title: "About",
    heading: "About me",
    metaDescription:
      "About Xu Zuxing: a full-stack engineer based in Nanning, China building interfaces, backend systems, and developer tooling.",
    paragraphs: [
      "I build across the full stack: pixel-perfect interfaces on the frontend, solid backend systems, and developer tooling in TypeScript and Node.js. I care about clean design on both sides of the wire.",
      "I'm based in Nanning. By day I ship products end to end; in my spare time I tinker with developer tooling and contribute to open source.",
      // TODO: replace with your own story — how you got into engineering,
      // what you enjoy building, and what you are curious about next.
      "This is placeholder copy for your story. Replace it with how you got into engineering, what you enjoy building, and what you are curious about next.",
    ],
    nowHeading: "Now",
    nowItems: [
      "Building things across the stack in TypeScript.",
      "Reading about system design and databases.",
      "Looking for interesting open-source work.",
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "A selection of things I have built and shipped.",
    metaDescription:
      "Selected projects by Xu Zuxing: full-stack apps, backend systems, and open-source developer tooling.",
    items: [
      {
        name: "Certeasy",
        description:
          "One-stop SSL certificate service: automated issuance, deployment sync to cloud resources, and expiry monitoring with alerts.",
        href: "https://www.certeasy.cn",
        tags: ["SSL", "Automation", "SaaS"],
      },
      {
        name: "Betauper",
        description:
          "App release and distribution platform: a high-availability upgrade center with built-in monitoring and analytics, plus a cross-platform upgrade SDK.",
        href: "",
        tags: ["NestJS", "Vue3", "SDK"],
      },
      {
        name: "Beaconix",
        description:
          "NestJS-based lightweight monitoring and alerting system. Beacon Watch — always watching, never sleeping.",
        href: "https://beaconix.app",
        tags: ["NestJS", "Monitoring", "Alerting"],
      },
    ],
  },
  links: {
    title: "Links",
    heading: "Friend links",
    subtitle: "Sites and blogs worth a visit.",
    metaDescription:
      "Friend links: sites and blogs from people Xu Zuxing follows and recommends.",
    exchange: "Want to exchange links? Reach me by email listed on the homepage.",
    items: [
      {
        name: "Certeasy",
        description:
          "One-stop SSL certificate service with automated issuance, deployment, and monitoring.",
        href: "https://www.certeasy.cn",
      },
      {
        name: "Beaconix",
        description:
          "NestJS-based lightweight monitoring and alerting system. Beacon Watch — always watching, never sleeping.",
        href: "https://beaconix.app",
      },
      {
        name: "Lettered",
        description:
          "A tech blog covering Vue, Git, CSS, and frontend engineering notes.",
        href: "https://lettered.cn",
      },
    ],
  },
  resume: {
    title: "Resume",
    heading: "Resume",
    metaDescription:
      "Resume of Xu Zuxing: full-stack engineer with 6 years of experience — Vue, Node.js, PHP, WeChat mini-programs, and personal projects like Certeasy.",
    print: "Print / save as PDF",
    updated: "Updated",
    photoAlt: "Portrait photo of Xu Zuxing",
    position: "Full-Stack Engineer",
    summary:
      "Full-stack developer with 6 years of web experience — strong frontend foundation in HTML/CSS/JavaScript/TypeScript and the Vue 2/3 ecosystem with pixel-faithful design implementation, backed by PHP (ThinkPHP) and Node.js (NestJS) on the server side. Ships WeChat mini-programs with uni-app. Working knowledge of Docker and Kubernetes, and independently owns the full lifecycle from tech selection and system design through development to deployment and maintenance.",
    experienceHeading: "Experience",
    experience: [
      {
        company: "广西巨谷科技有限公司",
        role: "Frontend Developer",
        period: "2025.04 — Present",
        points: [
          "Seconded to China-ASEAN Information Harbor, shipping government platforms: the Liuzhou admissions system (2025–2026), the CAEXPO VIP reception system, ASEANTong, and a data-group OA.",
          "Drove UI refactoring and loading optimization across existing products, improving both experience and performance.",
          "Sped up Vue applications with route-level splitting and bundle compression.",
        ],
      },
      {
        company: "广西龙讯互动信息技术股份有限公司",
        role: "Frontend Developer",
        period: "2023.02 — 2025.01",
        points: [
          "Led frontend delivery across company projects, owning visual fidelity and interaction solutions end to end.",
          "Shaped new project kickoffs and built frontend engineering from 0 to 1.",
          "Led the Yunmei media platform rebuild, unifying content collection, editing, and one-stop publishing — a clear step up in production efficiency and UX.",
        ],
      },
      {
        company: "上海精软信息科技有限公司",
        role: "Frontend Developer",
        period: "2022.08 — 2023.02",
        points: [
          "Joined phase two of the Guangxi Xinchan intelligent cloud call center, developing call-center and Biyi backend-page features with API integration.",
          "Led phase-two online customer service: built online chat, an embeddable service widget, and ticketing from scratch over WebSocket with heartbeat keep-alive, serving mini-program, WeChat, and Web channels.",
          "Analyzed and refined the phase-one UI, filling gaps and improving existing features.",
        ],
      },
      {
        company: "广西千行软件有限公司",
        role: "Frontend Developer",
        period: "2022.02 — 2022.08",
        points: [
          "Developed an education and Gaokao analytics system: teaching-performance reports, online answer-sheet preview, and annotation.",
          "Integrated the Yongmao gas cloud platform, rebuilding its WeChat ordering interface to streamline the gas ordering flow.",
        ],
      },
      {
        company: "广西汇美家汇生活网络科技有限公司",
        role: "PHP Backend Developer",
        period: "2021.03 — 2022.01",
        points: [
          "Owned both mini-program frontends and backend APIs (ThinkPHP).",
          "Led the frontend team to deliver task publishing and evaluation features.",
          "Drove feature planning end to end: design docs, flowcharts, and test handoffs.",
        ],
      },
      {
        company: "广西南宁市能威网络科技有限公司",
        role: "PHP Developer",
        period: "2020.07 — 2021.02",
        points: [
          "Independently built the Renrenjie mini-program mall from 0 — multi-vendor commerce, local errand services, real-time order updates over Socket.IO, and subpackage loading — covering the full business loop.",
          "Led product R&D planning, from requirement reviews to feature specifications.",
          "Organized engineering study sessions and coordinated joint testing across projects.",
        ],
      },
      {
        company: "南京嘉环科技有限公司广西分公司",
        role: "Telecom Equipment Engineer (Intern)",
        period: "2019.07 — 2020.01",
        points: [
          "Learned telecom hardware and installation fundamentals.",
          "Followed construction teams on-site to install network equipment correctly.",
          "Independently handled day-to-day network faults and site software upgrades in the field.",
        ],
      },
    ],
    projectsHeading: "Personal Projects",
    projects: [
      {
        name: "Certeasy",
        role: "Founder",
        period: "2024.06 — Present",
        stack: "NestJS · Vue3 · TypeORM · MySQL · uni-app",
        points: [
          "Automated HTTPS certificate issuance, deployment, and renewal — one-stop certificate automation at certeasy.cn.",
          "Built on a fork of acme-client, integrating Let's Encrypt, ZeroSSL, and Google issuance.",
          "Cloud-vendor API + DNS integration for automated deployment and verification, with WeChat and email expiry alerts.",
          "CI/CD on Tencent Cloud Coding with Docker-based testing and release.",
        ],
      },
      {
        name: "Betauper",
        role: "Founder",
        period: "2023.06 — Present",
        stack: "NestJS · Vue3 · MySQL · Redis · uni-app",
        points: [
          "App release and distribution platform with built-in monitoring and analytics for high-availability updates.",
          "High-availability NestJS backend covering upgrade, distribution, monitoring, and stats, plus a Vue3 admin dashboard.",
          "Cross-platform upgrade SDK built with uni-app for quick integration on Android and beyond.",
        ],
      },
      {
        name: "Beaconix",
        role: "Founder",
        period: "2025 — Present",
        stack: "NestJS · Vue3 · MySQL · Redis",
        points: [
          "NestJS-based lightweight monitoring and alerting system — Beacon Watch: always watching, never sleeping.",
          "NestJS backend powering uptime monitoring and alert delivery, with a Vue3 admin dashboard.",
          "Live at beaconix.app, with features shipping iteratively.",
        ],
      },
    ],
    skillsHeading: "Skills",
    skills: [
      {
        group: "Frontend",
        items: [
          "Vue 2/3 (Router, Pinia, Vite)",
          "TypeScript",
          "Ant Design / Element UI / TDesign",
          "HTML / CSS",
        ],
      },
      {
        group: "Backend",
        items: ["Node.js (NestJS)", "PHP (ThinkPHP)", "MySQL / Redis", "TypeORM"],
      },
      {
        group: "Cross-platform",
        items: ["uni-app", "WeChat Mini-Program / H5"],
      },
      {
        group: "Engineering",
        items: [
          "CI/CD (Aliyun Flow, Tencent Cloud Coding)",
          "Docker",
          "Kubernetes (basic)",
          "Git",
        ],
      },
    ],
    educationHeading: "Education",
    education: [
      {
        school: "Hezhou University",
        degree: "B.Eng. in Electronic Information Engineering",
        period: "2016 — 2020",
      },
    ],
    certificatesHeading: "Certificates",
    certificates: ["System Architect (National Soft Exam, Senior Level)"],
  },
  notFound: {
    code: "404",
    title: "Page not found",
    body: "The page you are looking for does not exist or has been moved.",
    backHome: "Back home",
  },
}

export type Dictionary = typeof en
