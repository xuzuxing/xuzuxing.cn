# i18n 中英双语改造计划

## Context

站点（Next.js 16.2.6 App Router，个人作品集）目前全英文硬编码，需要支持中文/英文双语：首次访问按浏览器语言自动切换，header 提供手动切换按钮并记忆偏好。已确认的决策：

- **路由方案**：语言前缀路由 `/en/...`、`/zh/...`（SEO 优先，hreflang + 双语 sitemap）
- **兜底语言**：浏览器语言非中/英 → 英文
- **中文名**：两种语言都显示 "Xu Zuxing"（不译）
- **顺带修正**：`lib/site.ts` description 写 "from Lebanon"、keywords 含 "Lebanon software engineer"（模板遗留，与 location Nanning 矛盾）→ 修正为南宁/中国；`components/person-json-ld.tsx` 的 `addressCountry` 误填 "Nanning" → 改为 "CN"

本地文档确认的关键事实：Next 16 中 middleware 改名 **proxy**（根级 `proxy.ts`，导出 `proxy(request)`）；i18n 官方模式为 `app/[lang]/` 动态段 + 根布局含 `<html lang>`；`app/layout.tsx` 必须整体迁入 `app/[lang]/`；404 用 catch-all 路由兜底（不开 experimental globalNotFound）。

## 隐藏坑（最重要）

`app/opengraph-image.tsx` 必须移入 `app/[lang]/`：它的 URL `/opengraph-image` 不含扩展名，若留根级会被 proxy 重定向到 `/en/opengraph-image` → 社交平台抓卡失败。移入后 URL 变 `/en/opengraph-image`、`/zh/opengraph-image`，天然放行。OG 图保持单一英文版（`next/og` 默认字体无 CJK 字形，中文会变豆腐块）。

## 实施步骤

### 1. 字典基础设施

新建 `app/[lang]/dictionaries/en.ts`（定义 shape + `export type Dictionary = typeof en`）、`app/[lang]/dictionaries/zh.ts`（`import type { Dictionary }`，类型强制同构）、`app/[lang]/dictionaries.ts`：

```ts
import 'server-only'
import { notFound } from 'next/navigation'
import type { Dictionary } from './dictionaries/en'

const dictionaries = {
  en: () => import('./dictionaries/en').then((m) => m.en),
  zh: () => import('./dictionaries/zh').then((m) => m.zh),
}
export type Locale = keyof typeof dictionaries  // 'en' | 'zh'
export const locales: Locale[] = ['en', 'zh']
export const defaultLocale: Locale = 'en'
export async function getDictionary(lang: string): Promise<Dictionary> {
  if (!hasLocale(lang)) notFound()
  return dictionaries[lang]()
}
```

字典结构（覆盖全部现有文案）：

- `site`: name（两语言均 "Xu Zuxing"）、role、location、description（en 版修正为 "based in Nanning, China"）、keywords（去掉 Lebanon 条目，中文版用中文关键词）、intro、roles[]、ogLocale（`en_US`/`zh_CN`）、htmlLang（`en`/`zh-CN`）
- `header`: logoAria、navAria、langToggleAria、nav: `[{label, path}]`（关于/项目/友链）
- `home`: imA（"I'm a"/"我是一名"）、footerWave（"click me to wave"/"点我挥手"）、wechat: `{trigger, triggerAria, hint, qrAlt}`
- `about`: title、metaDescription、paragraphs[3]、nowHeading、nowItems[3]
- `projects`: title、subtitle、metaDescription、items（name/description/tags/href，tags 可按语言：SSL/Automation/SaaS ↔ SSL/自动化/SaaS）
- `links`: title、subtitle、metaDescription、exchange、items
- `notFound`: code、title、body、backHome

`lib/site.ts` 瘦身为语言中立配置：保留 url、twitterHandle、wechatQrImage、socialLinks（GitHub/Email 品牌名与账号不译）、sameAs；**删除**可翻译字段（navItems、projects、friendLinks、description/intro/roles 等，全部移入字典）。

### 2. proxy.ts（根级新建）

- matcher：`'/((?!api|_next|favicon\\.ico|sitemap\\.xml|robots\\.txt|manifest\\.webmanifest|.*\\..*).*)'`（排除含点路径，覆盖 icon.svg/apple-icon.png/public 资源）
- 逻辑：取 pathname **第一段**精确比较是否为 `en`/`zh`（勿用 startsWith，防误伤 /english），是则直接放行（防循环）；否则 `detectLocale`（cookie `NEXT_LOCALE` 优先 → 解析 Accept-Language 按 q 值降序，`zh*`→zh、`en*`→en → 兜底 en）→ `NextResponse.redirect(nextUrl.clone() 前缀化)`，search 自动保留
- `/fr/about` 这类未知前缀 → prepend 成 `/en/fr/about` → catch-all 404，行为合理

### 3. 路由迁移（git mv）

| 原路径 | 新路径 |
|---|---|
| app/layout.tsx | app/[lang]/layout.tsx |
| app/page.tsx | app/[lang]/page.tsx |
| app/about/page.tsx | app/[lang]/about/page.tsx |
| app/project/page.tsx | app/[lang]/project/page.tsx |
| app/link/page.tsx | app/[lang]/link/page.tsx |
| app/not-found.tsx | app/[lang]/not-found.tsx |
| app/globals.css | app/[lang]/globals.css（相对导入不变） |
| app/opengraph-image.tsx | app/[lang]/opengraph-image.tsx |

根级保留：`app/icon.svg`、`app/apple-icon.png`、`app/sitemap.ts`、`app/robots.ts`、`app/manifest.ts`。

新建 `app/[lang]/[...rest]/page.tsx`：只有 `notFound()` 一行（无 generateStaticParams，按需渲染，静态段优先级更高）。

### 4. app/[lang]/layout.tsx 改造

- `const { lang } = await params`；`export function generateStaticParams() { return [{lang:'en'},{lang:'zh'}] }`
- `<html lang>` 用字典 `site.htmlLang`
- `metadata` → `generateMetadata`：title 模板/description/keywords/OG/twitter 全来自字典；`canonical: '/'+lang`；`alternates.languages: { en: '/en', zh: '/zh', 'x-default': '/en' }`；`openGraph.locale` 用 `site.ogLocale`；metadataBase/viewport/robots/authors 不变
- `<PersonJsonLd lang={lang} dict={dict} />`

### 5. 组件改造

- **site-header.tsx**（服务端）：props 化 `{ lang, t }`（t = dict.header）；logo `href={`/${lang}`}`；nav 遍历 `t.nav`，href 拼 `${lang}${item.path}`；右侧 `ml-auto` 加 `<LanguageToggle>`
- **language-toggle.tsx**（新建 "use client"）：`usePathname` 取当前路径 → 替换第一段 locale；`document.cookie = 'NEXT_LOCALE=..; path=/; max-age=31536000; samesite=lax'`；`router.push(newPath + window.location.search)`（**不要用 useSearchParams**，避免静态渲染限制）；渲染 "中 / EN" font-mono text-xs，当前语言高亮
- **wechat-qr-popover.tsx**（client）：交互不动，文案改 props `labels: {trigger, triggerAria, hint, qrAlt}`（不要把整个 Dictionary 传进 client）
- **person-json-ld.tsx**：接收 `{lang, dict}`；jobTitle/description 用字典，`inLanguage` 用 lang，`addressCountry` 修正为 `"CN"`；knowsAbout 保留英文主题词
- **back-home-link.tsx**（新建 "use client" 小组件）：not-found 拿不到 params，用 `usePathname()` 第一段拼回首页链接，label 由服务端传 `dict.notFound.backHome`

### 6. 四个页面消费字典

每页 `async`，`const { lang } = await params` + `const dict = await getDictionary(lang)`；硬编码文案全部换字典；`export const metadata` → `generateMetadata`（title 用 dict.xxx.title，canonical `/${lang}/about` 等，alternates.languages 双语 + x-default）。注意：页级 generateMetadata **不要**写 `openGraph.images`（会覆盖 opengraph-image 文件约定）；OG locale 由 layout 级联。

### 7. SEO 文件

- **sitemap.ts**：4 路径 × 2 语言 = 8 条，每条带 `alternates.languages`（en/zh/x-default）
- **robots.ts / manifest.ts**：不改（allow "/" 已覆盖前缀路径；manifest 语言中立）
- **opengraph-image.tsx**：保持单一英文图，仅随迁移改变 URL

## 验证

1. `npm run typecheck`、`npm run lint`、`npm run build`
2. build 输出：`●` 静态 8 条（/en /zh × 4 页面）+ `ƒ` 按需 `/[lang]/[...rest]` 两条；根级仅 sitemap.xml/robots.txt/manifest/icon 路由
3. `npm run start` 后 curl：
   - `curl -I localhost:3000/` → 307 → `/en`
   - `-H "Accept-Language: zh-CN"` → `/zh`
   - `-H "Cookie: NEXT_LOCALE=zh"` + `/about` → `/zh/about`
   - `/en` → 200；`/en/nonexistent` → 404（渲染 not-found）；`/sitemap.xml` → 200 不被重定向
4. 浏览器验证：自动跳转、"中 / EN" 往返切换（URL、`<html lang>`、cookie、刷新保持）、两语言 404 页、hreflang/canonical/og:locale 抽查、sitemap.xml 含 8 条 + xhtml:link
