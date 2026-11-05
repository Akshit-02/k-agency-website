# Technical SEO Audit

Checked 2026-11-05 against the local production build (1,033 HTML pages) and the live site, using read-only requests.

| Area | Finding | Status |
|---|---|---|
| Framework | Next.js 16.3.4 App Router, statically prerendered (1,989 build outputs). Content is server-rendered HTML, so crawlers don't depend on JS rendering. | OK |
| robots.txt | `Allow: /`, `Disallow: /api/`, sitemap declared. Live returns 200. | OK |
| XML sitemap | `/sitemap.xml`: live has 1,018 URLs, local 1,033 (the extra 15 are the undeployed Batch 26 posts). Blog URLs carry real `lastmod`. | OK |
| Leftover route | `src/app/sitemap-pages.xml/` is an **empty directory** (untracked; live returns 404). | Harmless. Delete locally if you want; not done. |
| Canonicals | All 1,033 pages have a self-referencing absolute canonical on `https://www.kudozz.in`. None missing, none pointing elsewhere. | OK |
| Meta robots | No `noindex` anywhere. Sampled live pages return `index, follow`. | OK |
| Titles / descriptions | 0 missing, 0 duplicate titles, 0 duplicate descriptions sitewide. 211 descriptions are over 170 characters, which Google truncates (mostly creator-resource hub pages). Two high-impression ones were shortened. | OK / minor |
| H1 | Exactly one H1 on every page | OK |
| Internal links | 0 broken internal hrefs across all pages (redirect sources and static assets counted as valid). 0 orphan blog posts; 100 posts have ≤2 contextual inbound links. | OK |
| Redirects | 36 permanent redirects in `next.config.ts`: no chains, no loops, all targets resolve. 34 of 35 retired URLs that still get impressions are covered. | OK |
| 404 with impressions | `/blog/instagram-creator-marketing-dark-social` (1 impression) returns 404 live. Closest live page: `/blog/dark-social-influencer-marketing`. | **Needs approval** to add a redirect |
| Host / HTTPS | `http://kudozz.in` → `https://kudozz.in` → `https://www.kudozz.in`: a **two-hop** chain at the hosting layer. Trailing slashes 308 to the slashless URL. | Minor. Fix at the host/DNS level (Vercel domain settings), not in code; needs approval. |
| Structured data | Organization, WebSite and Service are sitewide; BlogPosting and BreadcrumbList on articles (valid). **FAQPage** is generated automatically for every post with FAQs. | FAQPage needs a decision (see the Batch 26 report). It is valid markup, but Google limits FAQ rich results to authoritative government and health sites. |
| Hreflang | None. The site is English-only with country-specific *pages*, not language or regional variants. | Correct; don't add hreflang. |
| Mobile | Mobile CTR is 2.42% at position 7.2; desktop is 0.81% at position 9.8. No mobile issue shows in the data. No Core Web Vitals data in the export. | Not measurable here |
| **Indexing coverage** | **Brand-guide, GCC, AU, UK, location and market pages have almost no impressions (0–10%)**, while creator and core blog pages have 88–93%. No technical block found (200, indexable, canonical, in sitemap, internally linked). | **P0 investigation.** Needs the GSC *Pages* (indexing) report and URL Inspection on samples. |
| Performance | No CWV or field data in the export. Pages are static HTML with self-hosted fonts and SVG heroes. | Run PageSpeed Insights / CrUX on the homepage and top templates |
| Search appearance | Only "Translated results" (14 impressions) | Nothing actionable |
