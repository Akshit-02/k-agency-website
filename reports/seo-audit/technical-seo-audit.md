# Technical SEO audit

Date: 2026-10-17. Method: production build (`next build`), then a full crawl of `next start` seeded from `/` and `/sitemap.xml`, following every internal link. Run before and after this batch's changes. Per-URL results are in `url-inventory.csv`.

## Stack and architecture

| Area | Finding |
| --- | --- |
| Framework | Next.js 16.3.4 (App Router), React 19, TypeScript, Tailwind 4, npm |
| Rendering | Every content route is statically generated (`generateStaticParams`); article text is in the HTML, not client-rendered |
| Content source | TypeScript data modules: `src/content/blog.ts` aggregates 889 articles from `brand-guides/`, `creator-resources/`, `location-guides/`, `gcc-guides/`, `au-guides/`, `uk-guides/`, `creator-economy/`; services in `services.ts`; markets in `markets.ts` |
| Metadata | `src/lib/metadata.ts` `buildMetadata()`: self-canonical, OG and Twitter tags, `— Kudozz` suffix dropped when the title would pass 60 characters |
| Structured data | `src/lib/schema.tsx`: Organization and WebSite sitewide; BlogPosting, BreadcrumbList and FAQPage on articles; Service on service and market pages; AboutPage, CollectionPage, ItemList |
| Sitemap / robots | `src/app/sitemap.ts` (lastmod only on articles, from real `publishedAt`/`updatedAt`); `src/app/robots.ts` (allow all, disallow `/api/`) |
| Redirects | 36 permanent redirects in `next.config.ts` from earlier consolidations |
| CTAs | `BlogMidCTA` (inserted at the article midpoint by `ArticleBody`) and `BlogBottomCTA`; copy from `src/lib/blogCta.ts` |
| Lead capture | `/api/brand-inquiry`, `/api/contact`, `/api/creator-application`, `/api/newsletter` (nodemailer, rate-limited, zod-validated). Not modified |
| Analytics | GA4 `G-HM12X0L35J` via `next/script`; CTA events in `src/lib/blogAnalytics.ts`. Not modified |

## Crawl results

| Check | Before | After |
| --- | --- | --- |
| URLs crawled (sitemap ∪ links) | 981 | 981 |
| In sitemap | 979 | 979 |
| Not in sitemap | 2 (CSV downloads, correct) | 2 |
| HTTP 200 | 981 | 981 |
| Configured redirects | 36, all single-hop 308 to a 200 page | same |
| Internal links pointing at a redirect or 404 | 0 | 0 |
| Pages without exactly one H1 (excluding CSVs) | 0 | 0 |
| Missing or non-self canonical (excluding CSVs) | 0 | 0 |
| `noindex` | 0 | 0 |
| Duplicate titles / descriptions | 0 / 0 | 0 / 0 |
| Rendered titles over 65 characters | 17 | **0** |
| Meta descriptions over 160 characters | 400 | **388** |
| JSON-LD parse errors | 0 | 0 |
| Heading-level skips | 0 | 0 |
| Images without `alt` | 0 | 0 |
| Articles with exactly one mid CTA | 889 / 889 | 889 / 889 |
| Pages with at most one internal inlink | 40 | **4** (2 CSVs, 2 legal pages) |
| `hreflang` | none | none (correct: no equivalent alternates exist) |

Live check: `https://www.kudozz.in/sitemap.xml` returned 979 URLs and `robots.txt` matched the repository on 2026-10-17, so the deployed site matches `main` before this batch.

## Confirmed issues fixed in this batch

1. **17 titles truncated in search results** (66–68 characters, podcast and X pages, three state agency guides, solar, statistics, Snapchat Spotlight). Added `seoTitle` (≤ 53 characters); H1s unchanged. The three state guides keep "Best Influencer Marketing Agency in …", which is the searcher's query, answered by a how-to-choose guide.
2. **36 articles reachable only from the `/blog` index** (15 podcast, 12 X, 7 niche India industries, 2 comparison explainers). Linked from their hubs with descriptive anchors: 51 new contextual links (see `internal-linking-plan.csv`). After: all 36 have two or more inlinks.
3. **12 commercial pages with descriptions of 161–178 characters** (About, 5 services, markets hub, 4 market pages, creator resources hub). Rewritten to 141–156 characters, keeping each page's distinguishing details.

## Checked and left alone (with reason)

| Item | Decision |
| --- | --- |
| No visible "Published" date on articles | Removed deliberately by the owner in `ccf13d7` ("removed published date"). `datePublished` is still in BlogPosting schema. Recommendation only: Google advises a visible date. |
| `og:locale="en"` on 65 GCC articles (`inLanguage: "en"`) | Not a valid language_TERRITORY value, but Saudi/UAE mixed pages have no single correct territory. Low impact; left for an owner decision (`en_AE`, or leave). |
| `<html lang="en">` sitewide while articles declare en-GB/en-AU/en-SG in schema | Root layout sets one value; varying it needs route groups. Low impact. |
| FAQPage JSON-LD on all 889 articles | Google removed FAQ rich results in June 2026 (prior audit). Markup is valid and matches visible FAQs; keeping or removing it is an open owner decision. |
| Legal pages (`/privacy-policy`, `/terms`) in sitemap with no inlinks | Footer links are intentionally off until counsel supplies reviewed copy (owner instruction, 2026-10-12). |
| 388 long blog descriptions | Overlength only costs the snippet's tail. Listed per URL in `content-audit.csv` for sentence-level rewrites (P3); not mass-truncated. |
| Dates | No future `publishedAt`/`updatedAt` (0 found). `updatedAt` was not bumped for this batch's additions: the content contract reserves it for genuine revisions. |
| UAE Media Council references | Deliberate: they cite the Media Council FAQ (last reachable source) and state that the National Media Authority replaced it. |

## Validation

- `npx tsc --noEmit`: pass.
- `npx eslint src`: 0 errors, 6 warnings (unused imports in `contact/page.tsx`, `for-brands/page.tsx` and `Footer.tsx`, not touched in this batch).
- `npm run build`: pass.
- Post-change crawl: figures above. 47/47 quick answers render and appear in the table of contents; on every page the mid CTA sits at least three sections below the answer.
- Redirects: 36/36 return 308 to the configured destination, which returns 200.

## Not tested

- Real form delivery and GA4 receipt: no test leads were sent (no permission to email real recipients).
- Core Web Vitals: no field data (CrUX/Search Console not connected). No performance changes were made.
- Mobile layout of edited pages: the additions are plain paragraphs and headings using existing components; no new layout. Earlier 390px CDP checks covered these templates.
- Structured data in Google's Rich Results Test: JSON-LD was parsed locally on all pages; no external validator was run.
