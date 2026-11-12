# 01 — Existing Website Audit (before changes)

Audit date: 11 November 2026. Source: local repository at commit `c245813`, plus `gsc-data.xlsx` (Search Console export, web search, last 3 months).

## 1. Technical architecture

| Area | Finding |
|---|---|
| Framework | Next.js 16.3.4 (App Router), React 19.2, Tailwind CSS 4, Framer Motion 13, lucide-react icons, zod + react-hook-form, nodemailer |
| Rendering | Almost everything is statically prerendered (SSG). Services, markets, blog and creator-resource sections use `generateStaticParams`. |
| Content model | Content lives in TypeScript data files under `src/content/` (no CMS). Services: `src/content/services.ts` → `/services/[slug]` via `ServiceDetail`. Blog: `src/content/blog.ts` aggregating ~16 sub-collections (brand-guides, location-guides, gcc/uk/au guides, creator-resources, creator-economy). |
| SEO helpers | `src/lib/metadata.ts` (`buildMetadata`: title, description, canonical, OG, Twitter), `src/lib/schema.tsx` (Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage, ItemList, Article). Root layout injects Organization + WebSite JSON-LD on every page. |
| Sitemap / robots | `src/app/sitemap.ts` generates every page from the data files (1,052 URLs before this work). `robots.ts` allows all, disallows `/api/`. |
| llms.txt | `public/llms.txt`, ~400 lines, carefully worded (no unverified claims, markets confirmed Oct 2026). |
| Outbound links | `src/lib/links.ts` allowlist; other external URLs render as plain text. |

## 2. Page hierarchy and navigation

- Primary nav (`src/config/site.ts`): Home, For Brands, For Creators, Services, Blog. CTA: "Start a Campaign" → `/for-brands#inquiry`. No services dropdown, no Contact link.
- Footer: Agency / For Brands / For Creators / Contact columns, newsletter band.
- Other pages: `/about`, `/contact`, `/markets` + 5 market pages (UAE, Saudi Arabia, UK, Australia, Singapore), `/tools`, `/creator-resources` + sections, `/blog` + ~960 articles, legal pages.

## 3. Services (all preserved)

18 services in 5 categories:

| Category | Services |
|---|---|
| Plan and manage | Campaign Strategy, Creator Discovery, Outreach & Management, Reporting |
| Campaign types and pay models | Paid, Barter, Seeding & Gifting, Affiliate, Ambassador Programs, Product Launches, Social (multi-creator) Campaigns |
| UGC and content | UGC Campaigns, UGC Content Production |
| Platforms | Instagram, YouTube, LinkedIn influencer marketing |
| Audiences and tiers | Regional, Micro & Nano |

There was **no social media management service**, page or brand-side article. The only "social media manager" content was a creator-side guide (`/blog/hire-social-media-manager-creator`).

## 4. Homepage

Order: Hero ("Best Influencer Marketing Agency in India" + "Influence isn't bought. It's built.") → industry chips → Why creator-led marketing (sourced stats) → Influencer services rows → How it works → Why Kudozz → India coverage → Global markets → Creator network → FAQ → Final CTA. Positioning was influencer-only. Hero fact "8 Core services" was already inaccurate (18 services).

## 5. For Brands / For Creators

- For Brands: hero, problems solved, 5 non-linked service cards, why choose us, markets/industries, FAQ, inquiry form. Influencer-only.
- For Creators: registration-focused (hero, benefits, how it works, expectations, apply form, FAQ, resources teaser). Healthy and focused; left unchanged by design.

## 6. Enquiry journey

- Brand form (`BrandInquiryForm.tsx`) fields: brand, contact name, email, phone, website/Instagram, "What are you looking for?" (Influencer Marketing, UGC Content, Creator Discovery, Campaign Management, Product Launch, Brand Awareness, Other), budget, message. Hidden attribution from `?src= ?cat= ?pos= ?t= ?from=`.
- **Gap:** no "Social Media Management" option. Budget buckets start at "Under ₹4 lakh", which reads as campaign budgets rather than monthly retainers. Not changed (form changes need approval); see report 13.

## 7. Blog inventory and CTA system

- ~286 posts in `blog.ts` plus generated collections; categories dominated by Campaign Strategy (141) and Brand Marketing (87).
- `src/lib/blogCta.ts` derives a mid-article and an end CTA from slug/category (brand inquiry vs creator signup), with hand-written per-cluster copy. Mid CTAs can point at a service page.
- No brand-side social media management cluster exists, so there is no cannibalisation risk for the new service page.

## 8. Search Console snapshot (last 3 months)

| Metric | Value |
|---|---|
| Clicks / impressions | 2,716 / 157,366 |
| Top country | India: 2,499 clicks, 112,188 impressions |
| Other target markets (clicks / impr.) | US 28 / 15,110 · UK 15 / 3,396 · Australia 8 / 906 · UAE 5 / 670 · Saudi Arabia 5 / 337 · Singapore 2 / 556 |
| Top pages | Creator-side Instagram guides (`instagram-subscriptions` 1,393 clicks), `best-influencer-marketing-agencies-in-india` (14,204 impr., pos 11.3) |
| Homepage | 26 clicks, 521 impressions, pos 9.5. Ranks for "influencer marketing agency" (2,901 impr., pos 11.7) |
| Service pages | Very little visibility: `/services/ugc-campaigns` 120 impr., others < 75 |
| Social media management queries | **None.** Only "social media influencer (marketing) agency" variants (≤ 43 impr., pos 20–30). |

**Implication:** the new service starts from zero search visibility. The homepage's "influencer marketing agency" visibility is the most valuable commercial asset and was protected (title and H1 search phrase unchanged).

## 9. Design system

Paper/ink base with coral, violet and lime accents; display serif + "black display" sans; 1.5px ink borders, hard offset shadows, clip-notch sections, ghost background words, `Reveal`/`StaggerReveal` scroll animations, `ServiceMotif` SVG motifs. No photography. The new page follows this system and uses a coded illustration instead of stock imagery.

## 10. Issues noted (pre-existing, not all fixed)

- Hero fact "8 Core services" inaccurate → fixed ("3 connected service areas").
- For Brands service cards were not links → fixed.
- `WhyChooseUs` shows a visible placeholder line ("Credentials, awards, and client results will appear here…") → not changed; flagged in report 13.
- FAQPage schema is used site-wide; Google only shows FAQ rich results for authoritative government/health sites, so it brings no rich result here (harmless, kept consistent).
