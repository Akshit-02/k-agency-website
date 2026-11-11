# 01 · Complete Website Audit

Date: 2026-11-10. **Method:**
- Every URL in the sitemap of a local production build of the current repository (identical in structure to the live site) was crawled: 1052 URLs, all HTTP 200.
- From each page's rendered HTML I extracted the title, meta description, H1, canonical, robots, word count of the main content, JSON-LD types, CTA links and images without alt text.
- The crawl was joined with the content data (category, dates, section depth) and Search Console (last 3 months).
- **The full per-URL inventory**, with title, meta, H1, main keyword, audience, conversion goal, quality, international relevance, problems and recommended action, is in **`01a-url-inventory.csv`** (one row per URL).

## Technology and architecture
| Area | Finding |
|---|---|
| Stack | Next.js 16 App Router, TypeScript, Tailwind; static generation (SSG) for every page; React Server Components; framer-motion animations |
| Content storage | TypeScript content modules: `src/content/blog.ts` plus brand-guides, creator-resources, gcc-, uk-, au- and location-guides; `services.ts`, `markets.ts`, `home.ts`. No CMS |
| Routing | `/`, `/for-brands`, `/for-creators`, `/services` + 18 `/services/[slug]`, `/markets` + 5 `/markets/[slug]`, `/blog` + 961 `/blog/[slug]`, `/creator-resources` + 56 sections, `/tools`, `/about`, `/contact`, `/privacy-policy`, `/terms` |
| Metadata | `buildMetadata()` gives a unique title, description, canonical, OG and Twitter on every page; market pages set OG locale and `inLanguage` per market |
| Structured data | Organization, WebSite, WebPage, BreadcrumbList, BlogPosting, FAQPage (visible FAQs only), Service, OfferCatalog, ImageObject. No LocalBusiness (correct: no eligible addresses) |
| Sitemap and robots | `sitemap.ts` covers all page types; blog `lastmod` comes from real dates; static pages omit `lastmod`; `robots.ts` allows crawling |
| Forms and APIs | `/api/brand-inquiry`, `/api/creator-application`, `/api/contact`, `/api/newsletter`; react-hook-form + zod; attribution parameters (`src`, `cat`, `pos`, `t`). **Not modified** |
| Analytics | `src/lib/blogAnalytics.ts` CTA events (`cta_topic`, `ctaType`, position). **Not modified** |
| CTA system | `src/lib/blogCta.ts`: exactly 2 contextual CTAs per article, brand or creator by category, with per-article copy for 30+ creator and 150+ brand guides |
| Design | Light "paper" theme with ink, coral, lime and violet accents; display serif plus Inter; bordered cards with offset shadows. Consistent across pages |
| Images | Hero SVGs per article (vector, small); OG images generated per page; 0 `<img>` without alt text in the crawl |

## Inventory summary
| Page type | Count |
|---|---|
| Blog: brand | 599 |
| Blog: creator | 298 |
| Blog: location listicle | 64 |
| Creator section | 56 |
| Service page | 18 |
| Market page | 5 |
| Legal | 2 |
| Homepage | 1 |
| About | 1 |
| Blog index | 1 |
| Contact | 1 |
| Creator hub | 1 |
| Brand landing | 1 |
| Creator landing | 1 |
| Markets hub | 1 |
| Service directory | 1 |
| Free tools | 1 |

## Technical SEO checks (all 1052 URLs)
| Check | Result |
|---|---|
| HTTP status | 100% 200 |
| Exactly one H1 | 100% |
| Self-referencing canonical | 100% |
| `noindex` | 0 |
| Duplicate titles, metas, H1s | 0 / 0 / 0 |
| Titles over 65 characters | 0 |
| Meta descriptions over 165 characters | 260 (243 articles, 17 creator section pages), median 189: snippet truncation, not an error |
| Images without alt | 0 |
| Internal links (content index) | 7,351; 0 broken; all `#anchors` resolve |

## Classification totals (recommended actions)
| Action | URLs |
|---|---|
| KEEP | 562 |
| EXPAND | 293 |
| NO CHANGE | 67 |
| UPDATE | 66 |
| REVIEW | 34 |
| MERGE | 30 |

Detailed breakdown:
- EXPAND: 293
- KEEP: 275
- KEEP (published Oct 2026; awaiting indexing): 270
- NO CHANGE (updated Nov 2026): 65
- UPDATE (CTR: title/meta/intent): 41
- REVIEW (Sep 2026 post with no impressions): 34
- MERGE (review: near-duplicate city listicles, 0 impressions; needs approval): 30
- UPDATE (meta): 17
- KEEP (review in phase 2): 12
- UPDATE: 7
- KEEP (monitor indexing; verify regulatory facts quarterly): 5
- NO CHANGE (legal review): 2
- UPDATE (needs verified facts from Kudozz): 1

**How actions were assigned for articles** (rules applied in order; see the CSV for each URL):
1. **NO CHANGE:** updated or published in November 2026 (recent batches).
2. **MERGE (review):** the 30 near-duplicate specialist city listicles with zero impressions (report 10). Needs approval.
3. **KEEP (awaiting indexing):** published October 2026 and not yet in Search Console.
4. **UPDATE (CTR):** 300+ impressions, CTR under 1%, position 15 or better.
5. **EXPAND:** 60% or more of sections under 70 words (thin sections), with 6+ sections.
6. **REVIEW:** published September 2026 with no impressions.
7. **KEEP:** everything else.

No article was classed **REWRITE**, because no factual or positioning failures beyond the corrected items were found. **CREATE** items are in the roadmap (`06`), not in this inventory.

## Core pages
| URL | Type | Title | Meta length | H1 | Audience | Conversion goal | Words | GSC (3 months) | Problems | Action |
|---|---|---|---|---|---|---|---|---|---|---|
| / | Homepage | Best Influencer Marketing Agency in India / Kudozz | 156 | Best Influencer Marketing Agency in India:Influenceisn't bought.It's b | Brands (primary), creators (secondary) | Brand inquiry + creator path | 1855 | 521 impr / 26 cl / 5.0% / pos 9.5 | Strong structure; H1/title use unsupported "Best" superlative; subtitle says "for Indian brands" while markets section lists 5 international markets; creator pa | UPDATE |
| /about | About | About Kudozz: Influencer Marketing Agency in India — Kudozz | 155 | We started Kudozz because influencer marketing deserved better operato | Brands, partners | Inquiry | 392 | 90 impr / 0 cl / 0.0% / pos 6.4 | 392 words; no verified team, founding, location or proof details (proof gap) | UPDATE (needs verified facts from Kudozz) |
| /contact | Contact | Get in Touch: Brand, Creator & Press Inquiries — Kudozz | 155 | Let's talk. | All | Routing | 68 | no impressions | 68 words: does not explain routes (brand inquiry vs creator application vs general) | EXPAND |
| /creator-resources | Creator hub | Creator Resources: Brand Deals, Platforms, Commerce & Business | 156 | Work with brands professionally. | Creators | Articles, application | 14778 | 17 impr / 0 cl / 0.0% / pos 6.9 | Large hub; 14 groups / 56 sections | KEEP |
| /for-brands | Brand landing | Influencer Marketing Services for Brands: Strategy to Reporting | 157 | Influencer marketing services for brands:Stop chasing attention. Start | Founders, marketing managers | Brand inquiry form | 778 | 34 impr / 0 cl / 0.0% / pos 7.9 | 778 words; no international or industries section; FAQ answers include unverified operating claims (2–4 week launch, "most common starting point for our clients | EXPAND |
| /for-creators | Creator landing | For Creators: Join Our Influencer & Content Creator Network | 149 | Great brands are looking for creators like you. | Creators | Creator application form | 313 | 50 impr / 0 cl / 0.0% / pos 5.3 | Thin (313 words): no "what we look for", what to include, how opportunities are shared, expectations or FAQs | EXPAND |
| /markets | Markets hub | Influencer Marketing Markets: India, GCC, UK, AU, SG | 150 | Influencer campaigns in India, the GCC, the UK, Australia and Singapor | International brands | Market pages | 242 | no impressions | 242 words; thin hub; no market-selection guidance | EXPAND |
| /markets/australia | Market page | Influencer Marketing Agency in Australia — Kudozz | 155 | Influencer marketing agency for brands in Australia | International brands | Brand inquiry | 1021 | no impressions | 1021 words; published Oct 2026; no impressions yet in GSC window | KEEP (monitor indexing; verify regulatory facts quarterly) |
| /markets/saudi-arabia | Market page | Influencer Marketing Agency in Saudi Arabia — Kudozz | 153 | Influencer marketing agency for brands in Saudi Arabia | International brands | Brand inquiry | 994 | no impressions | 994 words; published Oct 2026; no impressions yet in GSC window | KEEP (monitor indexing; verify regulatory facts quarterly) |
| /markets/singapore | Market page | Influencer Marketing Agency in Singapore — Kudozz | 160 | Influencer marketing agency for brands in Singapore | International brands | Brand inquiry | 1128 | no impressions | 1128 words; published Oct 2026; no impressions yet in GSC window | KEEP (monitor indexing; verify regulatory facts quarterly) |
| /markets/uae | Market page | Influencer Marketing Agency in Dubai and the UAE — Kudozz | 148 | Influencer marketing agency for brands in Dubai and the UAE | International brands | Brand inquiry | 1243 | no impressions | 1243 words; published Oct 2026; no impressions yet in GSC window | KEEP (monitor indexing; verify regulatory facts quarterly) |
| /markets/uk | Market page | Influencer Marketing Agency in the UK — Kudozz | 156 | Influencer marketing agency for brands in the UK | International brands | Brand inquiry | 1115 | no impressions | 1115 words; published Oct 2026; no impressions yet in GSC window | KEEP (monitor indexing; verify regulatory facts quarterly) |
| /privacy-policy | Legal | Privacy Policy — Kudozz | 57 | Privacy Policy | All | — | 222 | 9 impr / 0 cl / 0.0% / pos 5.6 | Short; check DPDP Act alignment with counsel (not changed) | NO CHANGE (legal review) |
| /services | Service directory | Influencer Marketing Services: What We Do — Kudozz | 160 | Influencer marketing services:18 services. One coordinated engine. | Brands | Service pages / inquiry | 1864 | 42 impr / 0 cl / 0.0% / pos 8.8 | 1,864 words, 18 services grouped; good | KEEP |
| /services/ambassador-programs | Service page | Brand Ambassador Program Services — Kudozz | 141 | Brand Ambassador Programs | Brands | Brand inquiry | 588 | 2 impr / 0 cl / 0.0% / pos 4.5 | 588 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/barter-influencer-campaigns | Service page | Barter Influencer Campaigns for Brands in India — Kudozz | 160 | Barter Influencer Campaigns | Brands | Brand inquiry | 955 | no impressions | 955 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/campaign-strategy | Service page | Influencer Marketing Strategy Services in India — Kudozz | 151 | Influencer Marketing Strategy | Brands | Brand inquiry | 707 | 22 impr / 0 cl / 0.0% / pos 38.7 | 707 words; little search visibility; India-centric wording in places; no international-buyer section | UPDATE |
| /services/creator-discovery | Service page | Creator Discovery & Influencer Matchmaking Services — Kudozz | 149 | Creator Discovery & Matchmaking | Brands | Brand inquiry | 718 | 35 impr / 1 cl / 2.9% / pos 17.2 | 718 words; little search visibility; India-centric wording in places; no international-buyer section | UPDATE |
| /services/influencer-affiliate-marketing | Service page | Influencer Affiliate & Performance Marketing — Kudozz | 159 | Influencer Affiliate & Performance Marketing | Brands | Brand inquiry | 847 | no impressions | 847 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/influencer-seeding-gifting | Service page | Influencer Seeding & Product Gifting Services — Kudozz | 156 | Influencer Seeding & Gifting | Brands | Brand inquiry | 784 | no impressions | 784 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/instagram-influencer-marketing | Service page | Instagram Influencer Marketing Agency Services — Kudozz | 159 | Instagram Influencer Marketing | Brands | Brand inquiry | 773 | no impressions | 773 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/linkedin-influencer-marketing | Service page | LinkedIn Influencer Marketing for B2B Brands — Kudozz | 150 | LinkedIn Influencer Marketing | Brands | Brand inquiry | 781 | no impressions | 781 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/micro-nano-influencer-marketing | Service page | Micro & Nano Influencer Marketing Services — Kudozz | 155 | Micro & Nano Influencer Marketing | Brands | Brand inquiry | 837 | no impressions | 837 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/outreach-management | Service page | Influencer Outreach & Campaign Management Services — Kudozz | 156 | Influencer Outreach & Management | Brands | Brand inquiry | 841 | 71 impr / 0 cl / 0.0% / pos 15.5 | 841 words; some visibility; India-centric wording in places; no international-buyer section | UPDATE |
| /services/paid-influencer-campaigns | Service page | Paid Influencer Campaign Services in India — Kudozz | 160 | Paid Influencer Campaigns | Brands | Brand inquiry | 904 | no impressions | 904 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/product-launches | Service page | Influencer Marketing for Product Launches — Kudozz | 150 | Product Launch Campaigns | Brands | Brand inquiry | 595 | 34 impr / 0 cl / 0.0% / pos 20.2 | 595 words; little search visibility; India-centric wording in places; no international-buyer section | UPDATE |
| /services/regional-influencer-marketing | Service page | Regional & Vernacular Influencer Marketing — Kudozz | 160 | Regional Influencer Marketing | Brands | Brand inquiry | 783 | no impressions | 783 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/reporting | Service page | Influencer Campaign Reporting & ROI Tracking — Kudozz | 159 | Campaign Reporting & Performance Tracking | Brands | Brand inquiry | 645 | no impressions | 645 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/social-campaigns | Service page | Multi-Creator Social Media Campaign Services — Kudozz | 153 | Social Media Campaigns | Brands | Brand inquiry | 574 | 29 impr / 0 cl / 0.0% / pos 7.8 | 574 words; little search visibility; India-centric wording in places; no international-buyer section | UPDATE |
| /services/ugc-campaigns | Service page | UGC Campaign Services for Brands in India — Kudozz | 160 | UGC Campaigns | Brands | Brand inquiry | 743 | 120 impr / 3 cl / 2.5% / pos 36.0 | 743 words; some visibility; India-centric wording in places; no international-buyer section | UPDATE |
| /services/ugc-content-production | Service page | UGC Video & Content Production Services — Kudozz | 155 | UGC Content Production | Brands | Brand inquiry | 912 | no impressions | 912 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /services/youtube-influencer-marketing | Service page | YouTube Influencer Marketing Agency Services — Kudozz | 159 | YouTube Influencer Marketing | Brands | Brand inquiry | 797 | no impressions | 797 words; little search visibility; India-centric wording in places; no international-buyer section | KEEP (review in phase 2) |
| /terms | Legal | Terms & Conditions — Kudozz | 46 | Terms & Conditions | All | — | 188 | 25 impr / 0 cl / 0.0% / pos 14.6 | Short | NO CHANGE (legal review) |
| /tools | Free tools | Free Influencer Marketing Calculators & Templates — Kudozz | 152 | Free influencer marketing calculators, checklists and templates. | Brands, creators | Tool use, inquiry | 789 | no impressions | 789 words; KEEP | KEEP |

## Problems discovered (site-wide)
1. **October 2026 content isn't surfacing in Google** (report 04). This includes every market page and international guide.
2. **Credibility:** an unsupported "Best" superlative on the homepage; self-ranked listicles with partial disclosure; `llms.txt` steering language (fixed); an unused creator-count field (report 19).
3. **Doorway risk:** 30 near-duplicate specialist city listicles (report 10).
4. **Outdated facts (fixed in this pass):**
   - UAE permit fees, enforcement wording and dead regulator URLs.
   - Australian Consumer Law maximum penalty; under-16 penalty statement.
   - UK ASA guide edition; the ICO is now the Information Commission.
   - YouTube "BrandConnect" naming in 2 articles.
5. **Thin conversion pages:** For Creators (fixed), Contact routing (fixed), About (needs owner facts), Markets hub.
6. **Low service-page visibility:** commercial queries land on the listicle (report 13).
7. **Snippet truncation:** 260 meta descriptions over 165 characters.
8. **Missing doc:** `docs/international-seo-audit.md` is referenced in code but absent.
