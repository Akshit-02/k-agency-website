# Founder questions, batch 7 (roadmap topics 121–140: industry-specific influencer marketing): audit, decisions and implementation log

Date: 2026-10-14. Status: implemented in the working tree; uncommitted and not deployed.

Every industry topic from 121 to 138 already had an India owner page. Most also had GCC and/or Australia counterparts, about 70 brand-side industry pages in total. The regulated India pages had been fact-checked in the October R2 audit (SEBI, ASCI qualifications, FSSAI including the August 2026 advisory, RERA s.3 and s.11(2), CCPA coaching guidelines, IMS Act).

Topic 139 had a strong owner (`influencers-for-product-launch`, reviewed 10 Oct). Topic 140 had no industry section in the strategy guide, and no page connected the industry guides.

| Decision | Topics |
| --- | --- |
| CREATE (1) | 140, the industry hub |
| UPDATE (4) | 128, 130, 131, 139 |
| SKIP (14) | All other industry topics |
| MONITOR (1) | 127 (fintech vs personal-finance overlap) |

No URLs changed and no redirects were needed.

## 1. Audit findings

Method:
- Imported all 850 posts and listed every brand-side page matching industry keywords.
- Scanned the 20 India industry owners for unsourced figures (percentages, rupee amounts, lakh or crore); none were found.
- Counted em dashes, sources and heroes.
- Extracted every regulatory statement from the regulated-industry pages to check what was already covered.

| Topic | Owner(s) | Finding |
| --- | --- | --- |
| 121 Beauty | beauty-brands-india, -uae, -saudi-arabia, beauty-skincare-australia, ugc-beauty-skincare | Complete; claims, filters and before/after guidance present |
| 122 Fashion | fashion-brands-india, fashion-brands-dubai | Complete |
| 123 Food and drink | food-brands-india (FSSAI regulations and Aug 2026 advisory, sourced), food-beverage-australia | Complete |
| 124 Travel | travel-brands-india, hospitality-brands-india, travel-brands-uae, tourism-australia | Complete |
| 125 Technology | consumer-electronics-india, technology-gcc | Complete |
| 126 Fitness and wellness | fitness-brands-india (ASCI qualifications, FSSAI), healthcare-brands-india, healthcare-wellness-uae, fitness-gcc, health-wellness-australia | Complete |
| 127 Finance | fintech-brands-india (SEBI finfluencer restrictions, ASCI), personal-finance-india (thin, unsourced), fintech-uae, financial-services-australia | Complete; overlap between the two India pages |
| 128 Education | education-edtech-brands-india (CCPA coaching guidelines), education-australia, universities-uae | Gap: nothing on processing data of under-18 students |
| 129 Real estate | real-estate-brands-india (RERA s.3 and s.11(2)) | Complete |
| 130 Parenting | parenting-baby-india (IMS Act, children on camera) | Gap: children's personal data |
| 131 Sustainability | sustainability-india (no sources, no regulation, never reviewed, no hero), sustainable-brands-gcc, greenwashing-australia | Gap: India's 2024 greenwashing guidelines missing |
| 132 Automotive | automotive-india, automotive-uae-saudi-arabia, automotive-australia, automotive-dealerships | Complete |
| 133 Home decor | home-interior-india | Complete |
| 134 Luxury | luxury-india, watches-jewellery-gcc | Complete |
| 135 FMCG | fmcg-brands-india, fmcg-uae-saudi-arabia | Complete |
| 136 Restaurants | restaurant-cafe-india, restaurant-dubai, hospitality-australia | Complete |
| 137 SaaS | saas-india, b2b-saas-australia, b2b-technology | Complete |
| 138 Jewellery | jewellery-brands-india, watches-jewellery-gcc | Complete |
| 139 Launch in a competitive category | influencers-for-product-launch (2,300 words), instagram-product-launch-campaigns, influencer-campaign-insights-product-launch | General launch fully covered; no competitive-category guidance |
| 140 Strategy by industry | influencer-marketing-strategy (10 steps, no industry section) | Gap: no hub connecting about 60 industry pages, and no cross-industry decision framework |

## 2. Research summary

Sources were accessed 2026-10-14.

| Fact | Source | Status |
| --- | --- | --- |
| DPDP Act 2023 s.9: verifiable parental consent before processing a child's data; no tracking, behavioural monitoring or targeted advertising directed at children; exemptions may be prescribed. "Child" means under 18 | Official text, https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf | Verified against the downloaded PDF |
| DPDP Rules 2025 phase-in | Batch 4 research (notified Nov 2025, most obligations over 18 months) | Secondary |
| CCPA Guidelines for Prevention and Regulation of Greenwashing or Misleading Environmental Claims, 2024 (October 2024): generic terms need substantiation; recyclable or compostable claims need verification; misleading imagery covered; applies to endorsers | exchange4media, storyboard18, JSA, Vision IAS coverage | Secondary; consumeraffairs.nic.in unreachable from here, so the page says "as reported" and points readers to the official text |
| CMA Green Claims Code (six principles) | https://www.gov.uk/government/publications/green-claims-code-making-environmental-claims | Verified URL |
| Regulated-industry facts in the hub (SEBI, MAS 25 March 2026, FCA FG24/1, UK less-healthy food rules from 5 Jan 2026, RERA, IMS Act, CCPA coaching) | Existing sourced site content | Reused, not re-researched |

Competitor and SERP review: industry-specific pages from agencies are usually listicles of creators or generic tactics. The useful gaps are rules, measurement by purchase cycle, and how a strategy changes by industry type, which informed the hub.

Limitations:
- No Search Console or keyword tools, so no volumes or rankings were used.
- The CCPA greenwashing text was not read first-hand.

## 3. Twenty-topic decision matrix

| # | Topic | Decision | Final URL | Primary query (inferred) | Reason |
| --- | --- | --- | --- | --- | --- |
| 121 | Beauty and skincare | SKIP | /blog/influencer-marketing-beauty-brands-india | beauty influencer marketing | Complete owner plus 4 market and UGC pages |
| 122 | Fashion | SKIP | /blog/influencer-marketing-fashion-brands-india | fashion influencer marketing | Complete; Dubai page exists |
| 123 | Food and beverage | SKIP | /blog/influencer-marketing-food-brands-india | food influencer marketing | FSSAI 2026 already covered |
| 124 | Travel and hotels | SKIP | /blog/influencer-marketing-travel-brands-india and /blog/influencer-marketing-hospitality-brands-india | travel / hotel influencer marketing | Complete |
| 125 | Technology and gadgets | SKIP | /blog/consumer-electronics-influencer-marketing-india | tech influencer marketing | Complete |
| 126 | Fitness and wellness | SKIP | /blog/influencer-marketing-fitness-brands-india | fitness influencer marketing | ASCI and FSSAI already covered |
| 127 | Finance | MONITOR | /blog/influencer-marketing-fintech-brands-india | fintech influencer marketing | Owner complete; personal-finance-india overlaps and is thin, so consider consolidating once Search Console is available |
| 128 | Education and EdTech | UPDATE | /blog/influencer-marketing-education-edtech-brands-india | edtech influencer marketing | Adds DPDP children's data |
| 129 | Real estate | SKIP | /blog/influencer-marketing-real-estate-brands-india | real estate influencer marketing | RERA already covered |
| 130 | Parenting and baby | UPDATE | /blog/parenting-baby-influencer-marketing-india | parenting influencer marketing | Adds children's data |
| 131 | Sustainable brands | UPDATE | /blog/sustainability-influencer-marketing-india | sustainable brand influencer marketing / greenwashing | Adds India greenwashing rules and claims-evidence guidance |
| 132 | Automotive | SKIP | /blog/automotive-influencer-marketing-india | automotive influencer marketing | Complete across 4 pages |
| 133 | Home decor | SKIP | /blog/home-interior-influencer-marketing-india | home decor influencer marketing | Complete |
| 134 | Luxury | SKIP | /blog/luxury-influencer-marketing-india | luxury influencer marketing | Complete |
| 135 | FMCG | SKIP | /blog/influencer-marketing-fmcg-brands-india | FMCG influencer marketing | Complete |
| 136 | Restaurants and cafés | SKIP | /blog/restaurant-cafe-influencer-marketing-india | restaurant influencer marketing | Complete across 3 markets |
| 137 | SaaS | SKIP | /blog/saas-influencer-marketing-india | SaaS influencer marketing | Complete |
| 138 | Jewellery | SKIP | /blog/influencer-marketing-jewellery-brands-india | jewellery influencer marketing | Complete |
| 139 | Launch in a competitive category | UPDATE | /blog/influencers-for-product-launch#competitive-launch | influencer launch in a competitive category | A separate page would cannibalise the launch owner |
| 140 | Strategy by industry | CREATE | /blog/influencer-marketing-by-industry | influencer marketing by industry | Strategy guide lacks the angle; hub links about 60 industry guides |

## 4. Cannibalisation review

- **140:** the hub is a decision framework plus directory. It doesn't repeat any industry guide's content, and links out to each instead. The strategy guide links to it.
- **139:** handled as a section on the existing launch page rather than a new URL. instagram-product-launch-campaigns remains the Instagram-specific page.
- **127:** fintech-brands-india and personal-finance-india overlap. Monitor, and consolidate with a 301 only once Search Console data exists.
- **No country duplicates were created.** UK and Singapore have few industry pages, but research didn't justify country-swapped copies. The hub's regulated-industries table carries the UK and Singapore points instead.

## 5. Implementation summary

**influencer-marketing-by-industry** (new, `src/content/brand-guides/founder-industries.ts`):
- Quick answer.
- Five industry types (frequent purchases, considered purchases, regulated, local, B2B), with creators, formats and measures for each.
- Five deciding questions.
- A regulated-industries table: finance, health, food, education and children, environmental claims, real estate, alcohol and gambling.
- A directory of 49 industry guides in 11 paragraphs.
- Mistakes and FAQs.

**Updates:**
- **sustainability-influencer-marketing-india:**
  - Quick answer and a section on greenwashing rules in India and other markets.
  - A claims-evidence table and links to the UK, Australia and GCC.
  - New seoTitle, meta and hero.
- **parenting-baby-influencer-marketing-india:** a "Children's personal data" section (DPDP s.9 plus four practical rules).
- **influencer-marketing-education-edtech-brands-india:** a DPDP paragraph for under-18 students; seoTitle shortened; em dash removed.
- **influencers-for-product-launch:** "Launching into a crowded category", a six-step table, share-of-attention measurement, a hypothetical example and links.
- **influencer-marketing-strategy:** link-only addition pointing to the hub.

## 6. SEO, AEO and GEO

- **Hub page:** unique title and meta; one H1; BlogPosting, BreadcrumbList and FAQPage JSON-LD from the template; in the sitemap with lastmod 2026-10-14.
- **Updated pages:**
  - `updatedAt: 2026-10-14` and `lastReviewed: October 2026` on all four.
  - seoTitle changes: sustainability (now "Without Greenwashing") and edtech (shortened).
  - Meta changes: sustainability and the launch page.
- **Quality:** no em dashes on touched pages.
- **Template:** no schema or template changes. FAQPage remains an open owner decision.

## 7. Internal links

- **Hub:**
  - 49 industry guide links, plus links to the strategy guide, the platform comparison, the disclosure guide, expert creator marketing and the product-launch page.
  - Inbound from influencer-marketing-strategy.
- **Sustainability page:** links to greenwashing-influencer-marketing-australia and sustainable-brands-influencer-marketing-gcc.
- **Launch page:** links to competitor-influencer-strategy, influencer-exclusivity, influencer-product-seeding-program and scale-pause-stop-influencer-campaigns.
- **Broken links:** none found. The crawl checked 122 internal links and 6 images, all returning 200.

## 8. Conversion tracking

- One CTA entry was added for the hub: topic "Campaign Planning", mid CTA to /services/campaign-strategy, and the inquiry form at the bottom.
- Updated pages keep their existing CTAs.
- **Local check** (gtag stubbed; nothing submitted):
  - **Hub:** fired `blog_mid_cta_click` and `blog_bottom_cta_click`; on the inquiry page, `brand_lead_form_start` and `blog_lead_form_start`. The goal field pre-fills to Campaign Management.
  - **Sustainability page:** fired the same events. Its existing "Industry" topic has no goal mapping (pre-existing).
- Form submission and GA4 receipt were not tested.

## 9. Images and accessibility

- Two hero SVGs were added: influencer-marketing-by-industry and sustainability-influencer-marketing-india (which had none).
- Both are original diagrams with alt text. No stock or third-party images were used.
- 390px emulation shows no horizontal overflow on all six touched pages.

## 10. Validation

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | 0 errors; 6 pre-existing warnings |
| `npm run build` | Pass; 1,796 static pages; 851 posts |
| Content checks (6 pages) | 0 issues after fixing one meta length, one title length and one em dash |
| Crawl (6 pages) | All 200; 1 H1; self-canonical; valid JSON-LD; mid and bottom CTA; sitemap lastmod; listed on /blog |
| 390px emulation | 6 of 6, no overflow |
| Secrets in `.next/static` | 0 occurrences |

## 11. Files changed

- **Created:**
  - `src/content/brand-guides/founder-industries.ts`
  - `docs/founder-questions-121-140-audit.md`
  - Two hero SVGs
- **Edited:**
  - `src/content/brand-guides/index.ts`
  - `src/lib/blogCta.ts`
  - `src/content/blog.ts` (4 updated pages and 1 link-only addition)
  - `docs/seo-register-blog-2026-10.csv` (1 row added, 5 updated; 851 rows)
  - `docs/seo-audit-progress.md` (F7 row)

## 12. Outstanding issues

- **CCPA greenwashing guidelines:** the official text wasn't read first-hand (consumeraffairs.nic.in unreachable). Verify before relying on the summary.
- **Finance overlap:** fintech-brands-india vs personal-finance-india consolidation is waiting on Search Console data.
- **UK and Singapore industry coverage:** thin. A future regulated-industry page per market may be justified once demand is evidenced.
- **Older pages:** most industry pages from 6–8 September cite 0–1 sources. They make few factual claims, but should be re-reviewed periodically.
- **Carried over:** FAQPage decision; form submission and GA4 receipt untested; UAE regulator URLs unreachable; X and podcast consolidation.

## 13. Next steps (recommended cluster, 141–160)

Evidence from batches 1–7: the site has broad coverage. The gaps are now depth, sources and consolidation rather than new topics. Recommended next cluster:

1. **Consolidation and refresh sprint**, once Search Console is connected:
   - Merge the thin X (37) and podcast (28) pages into a few owners each, with 301s.
   - Resolve the monitored pairs (negotiation, relationships, fintech vs personal finance, scoring pages).
2. **Regulated categories for the UK and Singapore,** where rules genuinely change plans: finance (FCA FG24/1, MAS guidelines), health and aesthetics (MOH), and less-healthy food (UK from January 2026). Build these from official sources.
3. **Conversion assets:** comparison and pricing-factor pages linked from the industry hub, and service-page FAQs answering pre-sales questions. Base these on real enquiry questions, if the owner can share anonymised themes from the inquiry form.
