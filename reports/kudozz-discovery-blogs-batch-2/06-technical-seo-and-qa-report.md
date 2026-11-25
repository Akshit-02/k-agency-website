# 06 — Technical SEO and QA report (batch 2)

All checks were run on 25 Nov 2026 against a local production build (`next build` + `next start`). Nothing was committed or deployed.

## Build, type-check, lint

| Check | Result |
| --- | --- |
| `npx tsc --noEmit -p .` | Pass |
| ESLint on `src/content`, `src/components/discovery`, `src/components/blog`, `src/lib`, `src/config`, `src/app/blog/[slug]/page.tsx` | Pass, 0 warnings. Removing the old seeding entry left `GCC_SRC` unused in `brand-guides/programs-and-industries.ts`; that import was removed. |
| `next build` | Pass: 2,308 static pages (2,274 after batch 1 + 17 new articles + 17 OG images) |
| Post count | 1,098 (1,081 + 17 new); 0 duplicate slugs, titles or SEO titles site-wide |
| Site-wide link check (repository) | 7,739 `/blog/` links: 0 broken, 0 anchors missing from their paragraph; every `related` slug exists |

## Article validator (all 20)

Same checks as batch 1, plus: no links to or `related` entries for noindexed posts, and an explicit end-CTA headline and body. **All 20 pass.** Reported flags reviewed and accepted:
- Two claim-scan hits were honest negatives ("Kudozz Discovery doesn't show audience demographics"; "discovery tools, including Kudozz Discovery, can't show retention").
- One banned-phrase hit was a legitimate use: the FAQ "Can I lock in today's rate for a year?"

## Rendered-page checks (all 20 URLs)

| Check | Result |
| --- | --- |
| HTTP status | 200 for all 20 |
| Canonical | Self-referencing on all 20 |
| Robots | None are noindex |
| H1 | Exactly one per page |
| Structured data | `BlogPosting`, `BreadcrumbList`, `FAQPage` on every page; all JSON-LD parses; dates match (the 3 upgrades show `dateModified` 2026-11-25); image present; all FAQ questions visible |
| Open Graph | `og:title` and `og:image` on all 20 |
| Discovery CTAs | 2 per article (3 on the food article with its in-text link); every href exactly matches the UTM pattern with the article's slug |
| Internal links | 134 unique internal URLs, all 200 |
| Sitemap | All 20 present |
| Blog index | All 20 linked from `/blog` (existing listing, search and category filters, no new categories) |

## Responsive checks

Headless Chromium at 1440×900, 768×1024 and 375×812 on four articles (multi-city shortlist, gaming, parenting, LinkedIn): no horizontal overflow, hero loads, exactly one mid and one end CTA, wide tables scroll inside their wrapper on mobile. Screenshots of the header and CTAs reviewed. Safari, Firefox and real devices not tested.

## Changes to existing content (deliberate)

1. Three old entries were removed and replaced by rewrites on the same URLs: `how-to-find-linkedin-influencers` and `how-to-find-podcasts-and-podcast-creators` (`content/blog.ts`), and `influencer-product-seeding-program` (`brand-guides/programs-and-industries.ts`). Their old hero SVGs remain in `public/` but are no longer used.
2. 18 existing strategy posts got one added sentence each, with an inbound link (report 04). Articles 1–20 were not edited.
3. `trackDiscoveryArticleClick` now also sends `destination` (the full URL), for all 40 articles.

## Remaining issues and recommendations

- **Publishing volume vs the current SEO situation (most important).** Batches 1 and 2 add 28 new URLs and rewrite 12. The site noindexed ~144 weak pages on 19 Nov after the November core update, because volume was judged to be weighing down the domain, and posts published after 3 Oct have mostly not been surfacing in Google. Recommendation: deploy the 12 rewrites first, then release new URLs in small groups (e.g. 5–7 a week, starting with the strongest: tools comparison, Reels, regional, multi-city, seasonal), request indexing for each in GSC, and check the GSC Pages report between groups.
- **Nothing is committed.** Batch-1 work (`src/content/discovery-guides/batch-a…d.ts`, CTA components, `noindex.ts` change) and batch 2 are uncommitted working-tree changes; batch 2 depends on batch 1.
- **No keyword data.** No volume or difficulty figures were available or invented. A SERP and keyword-tool pass before publishing would help titles for #21, #23 and #25.
- **Residual cannibalisation to watch** (report 02): #21 vs `influencer-search-tools`, #33 vs `instagram-reels-influencer-marketing`, #28 vs `influencer-marketing-travel-brands-india`. If GSC shows URLs swapping for the same query, merge the weaker into the stronger with a 301.
- **Platform facts that date quickly:** LinkedIn Creator Marketplace availability, YouTube Shorts metrics, Spotify for Creators data, and Indian gaming platforms. These are marked "Last reviewed November 2026"; re-check quarterly.
- **The discovery platform has no analytics.** UTM tags only show in its server logs until analytics is added there.
- **Not done:** deployment, GSC indexing requests, cross-browser and device testing.
