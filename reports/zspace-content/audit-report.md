# Deliverable A: Kudozz → ZSpace audit report

Date: 2026-10-17. Status: the first batch of articles is written and validated in the Kudozz working tree. It is **not committed, deployed, published or indexed**. The ZSpace repository was read only; nothing in it was changed.

## Commercial relationship and link policy

The owner confirmed on 2026-10-17 that Kudozz and ZSpace have a **paid or exchange arrangement**. Under Google's guidance on qualifying outbound links, paid and exchanged links must be marked, so every Kudozz → ZSpace link:
- uses `rel="sponsored"` (rendered as `rel="sponsored noopener noreferrer"`);
- has a visible disclosure in the same paragraph: "Disclosure: Kudozz has a paid partnership with ZSpace Labs, and this is a sponsored link.";
- appears once per article, in a section about the specific problem that ZSpace service solves;
- never ranks or recommends ZSpace as the best provider.

No reciprocal ZSpace → Kudozz links were added or are recommended. If ZSpace ever links back as part of the same arrangement, that link also needs `rel="sponsored"`.

Because the links are sponsored, they **pass no ranking credit by design**. Their value is referral traffic from readers who need the service. The articles have to earn search visibility for Kudozz on their own merits.

## Verified ZSpace service portfolio

Source: live `https://www.zspace.in` (fetched 2026-10-17) and `src/lib/services-data.ts` in the ZSpace repo. Every service page returned 200, was self-canonical and was `index, follow`.

| Service | Canonical URL | Audience (ZSpace's own words, summarised) | Boundaries ZSpace states |
| --- | --- | --- | --- |
| Full-Stack Website Development | /services/website-development | Businesses replacing slow builders or legacy CMSs; startups needing a site and web app on one stack; integrations with CRM, payments and booking | Not for simple DIY sites, no-planning deadlines or ad management |
| Mobile App Development | /services/mobile-app-development | Founders with a validated idea; businesses adding an app; apps needing offline use, notifications, payments | Not for untested ideas, website-in-a-wrapper apps or apps with no post-launch plan |
| AI Automation | /services/ai-automation | Teams with repetitive email, document and data work; sales and support routing; AI agents with guardrails | Not for unsettled processes, fully unreviewed high-stakes actions or very low volume |
| UI/UX Design | /services/ui-ux-design | SaaS and product teams; hard-to-use sites and apps; teams without designers | Not for visual-only refreshes, work with no user evidence, or designs no one will build |
| Shopify Store Setup & Optimization | /services/shopify-development | Brands launching on or migrating to Shopify; slow themes; D2C conversion | Not for marketplaces, theme-only installs, or stores that can't be measured |
| CRO Audit | /services/cro-audit | Sites with steady traffic and poor conversion; Shopify brands before a redesign; ad landing pages | Not for very low traffic, guaranteed uplifts, or sites that can't be changed |

ZSpace's site also has 12 industry pages and 1,063 blog posts (live sitemap). It says it is remote-first with no branch offices. Its client markets were owner-confirmed on 17 October 2026 as India, the UAE, the UK, Australia and Singapore.

**Not verified:** clients, case studies, team members, pricing and results. None of these are claimed in the articles.

## Kudozz content relevant to ZSpace

Kudozz is an influencer agency, so a link to ZSpace is only defensible where a creator campaign depends on ZSpace-type work: the store, the landing page, the app or the tracking. Existing Kudozz owners checked before writing:

| Kudozz article | What it covers | Gap found |
| --- | --- | --- |
| influencer-landing-page-gcc | Gulf-specific landing pages | No general landing-page guide |
| influencer-marketing-website-traffic | Traffic as an objective; one short section on bouncing traffic | No diagnostic for low conversion |
| influencer-utm-tracking | Tagging; a four-line privacy note | No UK cookie-rule guide |
| track-influencer-sales | Codes, links, surveys | No store-readiness checklist |
| mobile-app-influencer-marketing-india | App campaign formats; one sentence on tracking | No deep-link, store-page or attribution guide |
| influencer-campaign-automation and two siblings | Automation workflows and tools | Already owns the AI-automation intent, so no new article |
| ugc-content-ecommerce | UGC on product pages, with an implementation checklist | Already owns the UI-on-product-pages intent, so no new article |

## Technical findings (Kudozz)

- Content is TypeScript data. The new posts live in `src/content/brand-guides/conversion-readiness.ts`, registered in `brand-guides/index.ts`. They appear in the sitemap automatically, with lastmod set from `publishedAt`.
- The article renderer previously hard-coded `rel="noreferrer noopener"` on every external link. `InlineLink` now has an optional `rel: "sponsored"`, and `ArticleBody` renders it as `rel="sponsored noopener noreferrer"`. All other links are unchanged: the crawl found the same output on the other 889 articles.
- CTA copy for the five slugs was added to `BRAND_GUIDE_CTAS` in `src/lib/blogCta.ts`, following the existing pattern. Mid CTAs link Kudozz services: reporting or campaign strategy.
- There's no RSS feed and no CMS front matter. The metadata, canonical, BlogPosting, BreadcrumbList and FAQPage schema all come from the existing templates.

## Research limitations

- **No search data.** No Search Console, Keyword Planner or third-party tool was available for either site, so search volume, difficulty and rankings are unknown. Every intent is an editorial hypothesis, recorded as such in the manifest.
- The SERP and competitor checks behind the earlier SEO audit used a US-hosted search; local results in each country weren't checked.
- Shopify's help centre returns 403 to scripted requests. All three Shopify pages cited were read through a web fetch on 2026-10-17, but automated link checks will keep reporting 403 for them.
- Apple's universal-links and ATT documentation pages render client-side, so they couldn't be quoted directly. The ATT rule is quoted from Apple's "User Privacy and Data Use" page instead, and the universal-links article only states well-established behaviour.
- The ZSpace repo has uncommitted local changes (1,057 posts in the repo against 1,063 live). The live site was treated as the source of truth.
