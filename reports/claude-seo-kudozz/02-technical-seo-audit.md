# 02 · Technical SEO Audit

**Site:** https://www.kudozz.in · **Audited:** 13 November 2026 · **Stack:** Next.js 16.3.4 (App Router), React 19, statically generated, hosted on Vercel (`x-vercel-cache: PRERENDER/HIT`).

## How this was measured

| Evidence | Tool | Notes |
|---|---|---|
| Sitemap discovery and validation | claude-seo `sitemap_discovery.py --expand` | Live production sitemap |
| TLS, HTTPS, www and security headers | claude-seo `transport_check.py` | Live |
| AI-agent and crawler readiness | claude-seo `agentic_check.py` | Live |
| Per-page on-page checks | claude-seo `page_checks.py` | 13 live pages, then the same checks on the local production build |
| Full crawl of all 1,162 sitemap URLs | Custom crawler run in the claude-seo virtual environment (requests + lxml), 4 concurrent requests | Status, canonical, robots, title, description, H1, JSON-LD validity, images, internal links, HTML size |
| Core Web Vitals | **Not measured.** CrUX and PageSpeed Insights both need a Google API key, which isn't configured, and the keyless PSI endpoint returned "rate limit exceeded". | No field or lab CWV numbers appear anywhere in these reports |
| Indexing status | **Not available.** The GSC export has no Page Indexing data. | See P0-1 |

## Summary

The technical foundation is strong. Every sitemap URL resolves, canonicals are consistent, nothing is accidentally noindexed, every page has one H1, all JSON-LD parses, and content is server-rendered. The serious issues are not classic technical breakage:

1. **Content published after 3 October 2026 is almost entirely absent from Google's results** (an indexing or quality signal; needs Search Console to confirm).
2. **The `/blog` index was 2.07 MB of HTML**, over Googlebot's 2 MB read limit. **Fixed** in this project.

## Crawl results (live production, 13 Nov 2026)

| Check | Result |
|---|---|
| Sitemap URLs | 1,162 in one valid `urlset`; 0 invalid, 0 duplicates, 0 cross-host. `lastmod` on the 1,070 blog posts only (deliberate; static pages omit it) |
| HTTP status | 1,154 returned 200 on first pass. 8 timed out at 30 s; all 8 returned 200 on retry (one, `/blog/influencer-marketing-food-brands-india`, took 40 s on retry. **Monitor**) |
| Redirects | `http://` → `https://` is a single 308 hop. `kudozz.in` → `www.kudozz.in` resolves to the same final URL. 19 legacy blog URLs 301 to their consolidated targets (`next.config.ts`) |
| Canonicals | 1,154 / 1,154 self-referencing and absolute |
| Robots | No `noindex` meta or `X-Robots-Tag` on any URL. `robots.txt` allows all and disallows `/api/` only, with a `Sitemap:` line |
| H1 | Exactly one H1 on every page |
| Titles / descriptions | 0 missing, 0 duplicated. 54 titles over 60 chars; 352 descriptions over 160 chars (display truncation heuristic, not an error) |
| Structured data | JSON-LD on every page; 0 parse errors. See report 10 |
| Images | 0 `<img>` without an `alt` attribute |
| hreflang | None (correct for a single English site; see report 08) |
| Rendering | Content is in the initial HTML (`agentic_check`: 2,367 words without JavaScript on the homepage, no JS-shell markers) |
| Response time | Median 523 ms per HTML document from the audit location (includes download) |
| Orphans | Only `/privacy-policy` and `/terms` have no incoming links from crawled pages (they are linked from the footer of every page in reality; the crawler records them as nav links. Not an issue). 119 blog posts have ≤ 1 incoming link once the `/blog` index and creator hub pages are excluded (see report 04, class E) |

## Issues register

| ID | Priority | Issue | Affected URL(s) | Evidence | Fix / recommendation | Status |
|---|---|---|---|---|---|---|
| P0-1 | **P0** | New content isn't surfacing in Google | ~306 posts published 4 Oct – 3 Nov 2026 (all GCC, UK and AU guides; 175 brand guides; 30 location pages) | Of 621 posts published on or before 3 Oct, 552 (89%) have impressions. Of 306 published 4 Oct – 3 Nov, **1** has impressions. Weekly impressions peaked at 43,073 (week of 3 Oct) and fell to 21,797 (week of 24 Oct). No confirmed Google update in that window (claude-seo update ledger, verified 10 Nov 2026) | In Search Console: open **Pages** (indexing) and URL-inspect 20 October URLs. If they show "Discovered/Crawled – currently not indexed", slow publishing, strengthen internal links to new pages, and improve or consolidate low-value batches (report 06). Do not request indexing in bulk | **Needs GSC access** |
| P1-1 | P1 | `/blog` HTML over 2 MB | `/blog` | `page_checks`: `html-over-2mb` (High). 2,065,580 bytes; class attributes alone were 931 KB and the client-side card data 510 KB; every card had a decorative block and a scroll-reveal wrapper | First 12 results stay as visual cards; the rest render as a compact text list; archive items no longer ship excerpts to the client. **Now 716,912 bytes (−65%)**; all 1,070 article links still in the HTML | **Fixed** |
| P1-2 | P1 | No URL owned "influencer marketing services" | Nav pointed at `/services#influencer-marketing` | GSC: "influencer marketing agency" 2,901 impr (pos 11.7), "influencer marketing services" 453 (pos 16.0) | New pillar `/services/influencer-marketing` (report 07) | **Fixed** |
| P2-1 | P2 | Over-long descriptions | 352 URLs | Crawl | Trimmed on 15 GSC-visible pages (report 11). Rewrite the rest during refreshes; low impact per page | Partly fixed |
| P2-2 | P2 | Over-long titles | 54 URLs | Crawl | Fixed on `/blog`, `creator-whitelisting`; left `instagram-subscriptions` (61 chars) alone because it is the site's best performer (5.7% CTR) | Partly fixed |
| P2-3 | P2 | JSON-LD not escaped for `<` | All pages | `JsonLd` used raw `JSON.stringify` | Escapes `<` as `<` | **Fixed** |
| P2-4 | P2 | Organization + full 20-item OfferCatalog in the layout of every page | All 1,154 pages | Crawl: Organization on 1,154 pages | Fine for Google; consider emitting the full Organization only on `/` and `/about` and an `@id` reference elsewhere to cut ~2–3 KB per page | Recommended |
| P2-5 | P2 | Large hub HTML | `/creator-resources` (1.01 MB), `/services/social-media-management` (351 KB) | Crawl | Below the 2 MB limit; apply the same compact-list pattern to `/creator-resources` before it grows past ~1.5 MB | Recommended |
| P2-6 | P2 | Occasional slow responses | `/blog/influencer-marketing-food-brands-india` (40 s once), `/blog/podcast-*` (2.3–2.4 s) | Crawl + retry | Check Vercel function and ISR logs for those paths; likely cold regeneration | Recommended |
| P3-1 | P3 | Security headers | Site-wide | `transport_check`: no CSP, `X-Content-Type-Options`, `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`; HSTS without `includeSubDomains` | Not a ranking factor. Add via `next.config.ts` `headers()` after testing GA4/Clarity with a CSP. Hosting change, so needs approval | Awaiting approval |
| P3-2 | P3 | AI crawler policy is implicit | `robots.txt` | `agentic_check`: every AI agent falls through to `*` | Optional: add named groups if Kudozz wants different rules for training vs search crawlers. Policy decision | Awaiting decision |

## Performance (no CWV measured)

What can be said without field or lab data:

- **Architecture favours good CWV:** static HTML from the CDN, `next/font` self-hosted fonts, the hero H1 is deliberately not opacity-animated (it is the LCP element), and images are mostly CSS/SVG graphics.
- **Risks:** about 252 KB of first-party JavaScript (gzipped) on the homepage, much of it framer-motion; GA4 and Microsoft Clarity load `afterInteractive`. Many `Reveal`/`StaggerReveal` wrappers start content at `opacity: 0` until hydration, which can delay visual completeness on slow phones. The `/blog` fix removed about 1,000 scroll observers from that page.
- **Action:** add a free Google API key to the claude-seo config (`GOOGLE_API_KEY`) and run `pagespeed_check.py` and `crux_history.py` for `/`, `/for-brands`, `/services/influencer-marketing`, `/blog` and the top 5 blog posts. CrUX will only have data for URLs with enough Chrome traffic.

## Validation

- Re-run `page_checks.py --file` on the local production build after the fixes: `/blog` no longer reports `html-over-2mb`; `/services/influencer-marketing`, `/`, and `/blog/instagram-insights-for-creators` report **no findings**.
- After deployment: re-run the crawler and `sitemap_discovery.py` (expect 1,163 URLs), and check GSC → Pages weekly for the October cohort.
