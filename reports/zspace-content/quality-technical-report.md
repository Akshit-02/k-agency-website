# Deliverable F: quality and technical report

Date: 2026-10-17. Scope: batch 1, five new Kudozz articles, plus the supporting code changes.

## Files changed (Kudozz working tree, uncommitted)

| File | Change |
| --- | --- |
| `src/content/brand-guides/conversion-readiness.ts` | New: the five articles, a sources map and the ZSpace destination URLs |
| `src/content/brand-guides/index.ts` | Registers `conversionReadinessPosts` |
| `src/content/blog.ts` | `InlineLink` gains optional `rel?: "sponsored"`. One sentence and link added to `mobile-app-influencer-marketing-india` pointing to the new app article |
| `src/components/blog/ArticleBody.tsx` | Sponsored inline links render with `rel="sponsored noopener noreferrer"`; all other links are unchanged |
| `src/lib/blogCta.ts` | CTA copy for the five slugs |
| `src/content/brand-guides/founder-measurement.ts` | One sentence and link in `influencer-utm-tracking`'s privacy section pointing to the UK article |
| `src/content/markets.ts` | UK market page lists the UK cookie-rules guide |

Nothing in the ZSpace repo was touched. No forms, API routes, environment variables or analytics were changed.

## Content checks

| Check | Result |
| --- | --- |
| Facts against primary sources | Every platform and regulatory claim was checked on 2026-10-17 against: Shopify Help (3 pages), web.dev, GA4 Help, Apple App Store Connect Help, Apple User Privacy and Data Use, Android App Links, Play Install Referrer, Play Console Help, the Firebase FAQ, Google Search Central, and the ICO guidance (3 pages) |
| Corrections made during the check | CRO article: replaced a ZSpace limit taken from the wrong service page. App article: removed unverified Google Play review and reporting claims. Shopify article: updated the discount-link description to Shopify's current admin flow |
| ZSpace capability claims | Each matches the wording on that service's live page (what it does, its stated limits, UK as a client market) |
| Fabrication | No statistics, clients, case studies or testimonials; the one worked example is labelled hypothetical |
| Overlap with 889 Kudozz articles | Highest 5-word-shingle Jaccard score: 0.013, between two of the new articles. Against existing articles: at most 0.006 |
| Overlap with ZSpace's 1,057 repo posts | Highest score: 0.006 (`app-deep-linking-influencer-campaigns` vs ZSpace's `mobile-app-deep-linking`). The angles differ: campaign preparation versus implementation |
| Em dashes in article text | 0 |
| Link anchors unique within their paragraph | 5/5 articles pass |
| Length | 1,487–1,732 words of body text each, decided by topic rather than a target |
| Structure | Each has a quick answer, at least one table or checklist, common mistakes, a conclusion and 4 FAQs written for real follow-up questions |

## Technical checks (production build, local `next start`)

| Check | Result |
| --- | --- |
| `tsc --noEmit` | Pass |
| `eslint src` | 0 errors, 6 warnings, all in files this batch didn't touch |
| `next build` | Pass |
| HTTP status of the 5 new URLs | 200 |
| Title length | 52–57 characters |
| Description length | 151–158 characters, all unique |
| H1 | Exactly one per page |
| Canonical | Self-referencing on www.kudozz.in |
| `og:locale` | `en_IN`, and `en_GB` for the UK article |
| Structured data | BlogPosting, BreadcrumbList and FAQPage parse; FAQ schema matches the visible FAQs |
| Mid CTA | Exactly one per article, below the quick answer |
| Sitemap | All 5 URLs present (984 URLs in total) |
| Internal links from the new articles | All return 200 |
| Inlinks to the new articles | 2–3 contextual inlinks each (none was linked only from the blog index) |
| ZSpace links | 5, one per article, each `rel="sponsored noopener noreferrer"` with a visible same-paragraph disclosure; all 4 destinations return 200 live |
| External source links | 16 return 200. Shopify Help returns 403 to scripted checks (bot protection), but its pages loaded through a web fetch |
| Sitewide regression crawl | 986 URLs, all 200; 0 duplicate titles or descriptions; 0 JSON-LD errors; one mid CTA on all 894 articles; no broken internal links |
| Images | No new images; articles use the existing category hero graphic and the generated OG image |

## Not done or not verifiable

- **Not published, deployed, committed or indexed.** Indexing can only be verified after deployment, through Search Console.
- **Phone-width rendering:** not re-screenshotted. The articles use existing block types (paragraph, list, table) that earlier 390px checks covered. Tables scroll horizontally inside their container, as on existing pages.
- **Outbound-click measurement:** GA4 counts outbound clicks only if enhanced measurement is on, which wasn't checked. Confirm it before judging referral value.
- **Legal review:** the UK article is general guidance with a not-legal-advice note. A privacy lawyer should review it before a client relies on it.
- **Search demand:** no volume data for any topic, so performance must be measured after publishing.

## Publishing checklist (when approved)

1. Review the five articles and the disclosure wording. Sponsored links with a visible disclosure are what Google's link-spam policy and reader trust require for a paid arrangement.
2. Commit, then deploy.
3. In Search Console, request indexing for the 5 URLs and resubmit the sitemap.
4. Confirm the live HTML still shows `rel="sponsored"` on the ZSpace links.
5. After 4–6 weeks, review impressions, queries and outbound clicks, then choose the next batch from `content-roadmap.md`.
