import type { Dictionary } from "./en"

export const zh: Dictionary = {
  site: {
    name: "Xu Zuxing",
    role: "全栈开发工程师",
    location: "南宁",
    description:
      "Xu Zuxing（徐祖兴）是一名现居中国南宁的全栈工程师，使用 TypeScript 与 Node.js 构建精致的界面、稳健的后端系统与开发者工具。",
    keywords: [
      "Xu Zuxing",
      "徐祖兴",
      "全栈工程师",
      "前端工程师",
      "后端工程师",
      "开源开发者",
      "TypeScript",
      "Node.js",
      "NestJS",
      "系统设计",
      "南宁",
      "软件工程师作品集",
    ],
    intro:
      "我在全栈各层构建产品：前端追求像素级的界面质感，后端搭建稳健的系统，也用 TypeScript 和 Node.js 打磨开发者工具。无论请求的哪一端，我都希望设计足够干净。",
    roles: ["全栈工程师", "前端开发者", "后端开发者", "开源贡献者"],
    ogLocale: "zh_CN",
    htmlLang: "zh-CN",
  },
  header: {
    logoAria: "Xu Zuxing，返回首页",
    navAria: "主导航",
    langToggleAria: "切换语言",
    nav: [
      { label: "关于", path: "/about" },
      { label: "项目", path: "/project" },
      { label: "友链", path: "/link" },
      { label: "简历", path: "/resume" },
    ],
  },
  home: {
    imA: "我是一名",
    footerWave: "点我挥手",
    wechat: {
      trigger: "加我微信",
      triggerAria: "显示我的微信二维码",
      hint: "扫码加我微信",
      qrAlt: "Xu Zuxing 的微信二维码",
    },
  },
  about: {
    title: "关于",
    heading: "关于我",
    metaDescription:
      "关于 Xu Zuxing：一名现居中国南宁的全栈工程师，构建界面、后端系统与开发者工具。",
    paragraphs: [
      "我在全栈各层构建产品：前端追求像素级的界面质感，后端搭建稳健的系统，也用 TypeScript 和 Node.js 打磨开发者工具。无论请求的哪一端，我都希望设计足够干净。",
      "我现居南宁。白天我端到端地交付产品；业余时间喜欢折腾开发者工具，也为开源项目做贡献。",
      // TODO: 替换成你自己的故事——如何走上工程之路、喜欢做什么、接下来对什么好奇。
      "这是一段占位文案。请替换成你自己的故事：你是如何走上工程之路的、喜欢做什么、接下来又对什么好奇。",
    ],
    nowHeading: "近况",
    nowItems: [
      "用 TypeScript 在全栈各处构建东西。",
      "阅读系统设计与数据库相关的内容。",
      "寻找有趣的开源合作机会。",
    ],
  },
  projects: {
    title: "项目",
    subtitle: "一些我做过并已上线的作品。",
    metaDescription: "Xu Zuxing 的精选项目：全栈应用、后端系统与开源开发者工具。",
    items: [
      {
        name: "Certeasy",
        description: "一站式 SSL 证书服务：自动化签发、部署同步到云端资源，以及到期监控与告警。",
        href: "https://www.certeasy.cn",
        tags: ["SSL", "自动化", "SaaS"],
      },
      {
        name: "Betauper",
        description:
          "应用升级与分发平台：高可用应用升级中心，集监控、统计于一体，并提供跨端升级 SDK。",
        href: "",
        tags: ["NestJS", "Vue3", "SDK"],
      },
      {
        name: "Beaconix",
        description:
          "基于 NestJS 的轻量级监控与告警系统。Beacon Watch —— 时刻守护，永不停歇。",
        href: "https://beaconix.app",
        tags: ["NestJS", "监控", "告警"],
      },
    ],
  },
  links: {
    title: "友链",
    heading: "友情链接",
    subtitle: "值得一逛的站点与博客。",
    metaDescription: "友情链接：Xu Zuxing 关注并推荐的站点与博客。",
    exchange: "想交换友链？通过首页列出的邮箱联系我。",
    items: [
      {
        name: "Certeasy",
        description: "一站式 SSL 证书服务，覆盖自动签发、部署与监控。",
        href: "https://www.certeasy.cn",
      },
      {
        name: "Beaconix",
        description:
          "基于 NestJS 的轻量级监控与告警系统。Beacon Watch —— 时刻守护，永不停歇。",
        href: "https://beaconix.app",
      },
      {
        name: "Lettered",
        description: "一个技术博客，记录 Vue、Git、CSS 与前端工程笔记。",
        href: "https://lettered.cn",
      },
    ],
  },
  resume: {
    title: "简历",
    heading: "简历",
    metaDescription:
      "Xu Zuxing（徐祖兴）的简历：6 年经验的全栈开发工程师，涵盖工作经历、个人项目、技能与教育背景。",
    print: "打印 / 导出 PDF",
    updated: "更新于",
    photoAlt: "徐祖兴的证件照",
    position: "全栈开发工程师",
    summary:
      "6 年 Web 开发经验，定位全栈：前端基础扎实，熟练掌握 HTML、CSS、JavaScript 与 TypeScript，能高保真还原设计稿；深入掌握 Vue2 / Vue3 全家桶，灵活搭配 Ant Design、Element UI、TDesign 等主流 UI 库；熟悉 PHP（ThinkPHP）与 Node.js（NestJS）后端开发，可基于 uni-app 或原生方式开发微信小程序；了解 Docker 与 Kubernetes，能独立完成从技术选型、系统设计、开发实现到部署维护的完整生命周期。",
    experienceHeading: "工作经历",
    experience: [
      {
        company: "广西巨谷科技有限公司",
        role: "前端开发工程师",
        period: "2025.04 — 至今",
        points: [
          "外驻中国东信，交付多个政务信息系统：柳州市招生系统（2025—2026）、东盟博览会贵宾接待系统、东盟通、林联网、数据集团 OA",
          "主导现有产品的 UI 重构与加载优化，体验与性能双提升",
          "通过路由分包、构建压缩等手段为 Vue 应用提速",
        ],
      },
      {
        company: "广西龙讯互动信息技术股份有限公司",
        role: "前端开发工程师",
        period: "2023.02 — 2025.01",
        points: [
          "主导多个项目的前端交付，从视觉还原到交互方案端到端负责",
          "参与新项目立项规划，从 0 到 1 搭建前端工程化体系",
          "主导云媒平台重构，打通信息采集、编辑与一体化发布流程，内容生产效率与使用体验显著提升",
        ],
      },
      {
        company: "上海精软信息科技有限公司",
        role: "前端开发工程师",
        period: "2022.08 — 2023.02",
        points: [
          "参与广西信产三部智能呼叫中心二期项目，负责呼叫中心与比翼后台页面的功能开发及接口对接",
          "主导二期在线客服功能：基于 WebSocket（心跳保活）从 0 实现线上聊天、客服插件与工单，支持小程序、公众号、Web 多渠道接入",
          "分析优化一期功能界面，补充完善既有能力",
        ],
      },
      {
        company: "广西千行软件有限公司",
        role: "前端开发工程师",
        period: "2022.02 — 2022.08",
        points: [
          "参与教育高考分析系统前端开发：实现学生教学情况分析表、在线答卷预览与批注",
          "对接南宁市永茂燃气云平台，重构微信公众号下单界面，优化燃气产品下单流程",
        ],
      },
      {
        company: "广西汇美家汇生活网络科技有限公司",
        role: "PHP 后端开发工程师",
        period: "2021.03 — 2022.01",
        points: [
          "同时负责小程序前端与 ThinkPHP 后台 API 的开发对接",
          "主导前端小组，完成任务发布与评测功能建设",
          "负责新功能规划与文档：设计文档、流程图、测试文档全链路输出",
        ],
      },
      {
        company: "广西南宁市能威网络科技有限公司",
        role: "PHP 研发工程师",
        period: "2020.07 — 2021.02",
        points: [
          "独立从 0 开发人人接小程序商城：多商户电商、本地跑腿、基于 Socket.IO 的实时订单状态与分包加载优化，覆盖完整业务闭环",
          "主导产品研发规划，从需求评审到功能明细文档",
          "组织团队技术学习，协同项目联调与测试",
        ],
      },
      {
        company: "南京嘉环科技有限公司广西分公司",
        role: "通信设备工程师（实习）",
        period: "2019.07 — 2020.01",
        points: [
          "学习通信设备安装等硬装知识",
          "线下跟随指导施工单位，正确安装网络设备",
          "独立外出处理日常网络故障，以及站点软件系统升级",
        ],
      },
    ],
    projectsHeading: "个人项目",
    projects: [
      {
        name: "Certeasy",
        role: "创始人",
        period: "2024.06 — 至今",
        stack: "NestJS · Vue3 · TypeORM · MySQL · uni-app",
        points: [
          "HTTPS 证书自动申请、部署与续签工具，提供一站式证书自动化服务（certeasy.cn）",
          "基于 acme-client 二次开发，接入 Let's Encrypt、ZeroSSL 与 Google 签发",
          "集成云厂商 API 与 DNS 实现自动部署与自动验证；微信公众号、邮件到期预警",
          "腾讯云 Coding 配置 CI/CD，Docker 部署测试与上线",
        ],
      },
      {
        name: "Betauper",
        role: "创始人",
        period: "2023.06 — 至今",
        stack: "NestJS · Vue3 · MySQL · Redis · uni-app",
        points: [
          "应用升级与分发平台：集监控、统计于一体的高可用应用升级中心",
          "NestJS 高可用后端 + Vue3 管理平台，覆盖升级、分发、监控与统计",
          "基于 uni-app 的跨端升级 SDK，支持 Android 等平台快速接入",
        ],
      },
      {
        name: "Beaconix",
        role: "创始人",
        period: "2025 — 至今",
        stack: "NestJS · Vue3 · MySQL · Redis",
        points: [
          "基于 NestJS 的轻量级监控与告警系统 —— Beacon Watch：时刻守护，永不停歇",
          "NestJS 后端承载服务可用性监控与告警触达，Vue3 管理台统一配置与查看",
          "已上线 beaconix.app，功能持续迭代中",
        ],
      },
    ],
    skillsHeading: "技能",
    skills: [
      {
        group: "前端",
        items: [
          "Vue 2/3（Router、Pinia、Vite）",
          "TypeScript",
          "Ant Design / Element UI / TDesign",
          "HTML / CSS",
        ],
      },
      {
        group: "后端",
        items: ["Node.js（NestJS）", "PHP（ThinkPHP）", "MySQL / Redis", "TypeORM"],
      },
      {
        group: "跨端",
        items: ["uni-app", "微信小程序 / 公众号 H5"],
      },
      {
        group: "工程",
        items: [
          "CI/CD（阿里云效、腾讯云 Coding）",
          "Docker",
          "Kubernetes（了解）",
          "Git",
        ],
      },
    ],
    educationHeading: "教育背景",
    education: [
      {
        school: "贺州学院",
        degree: "电子信息工程 · 本科",
        period: "2016 — 2020",
      },
    ],
    certificatesHeading: "资格证书",
    certificates: ["系统架构设计师（软考高级）"],
  },
  notFound: {
    code: "404",
    title: "页面不存在",
    body: "你访问的页面不存在，或者已被移动。",
    backHome: "返回首页",
  },
}
