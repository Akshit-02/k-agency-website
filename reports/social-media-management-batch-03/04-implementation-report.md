# 04 — Implementation Report (Batch 03)

**Status: all 20 articles are written, integrated locally, built and validated. Nothing is committed, deployed or published.** The blog has no draft flag, so the articles go live with the next deploy unless removed from `src/content/brand-guides/index.ts`. See `06-publishing-plan.md` for staging options.

## What was done

1. **Audit:** 1,001 inventory items and GSC. See `01-content-audit.md`.
2. **Article 01 (SaaS) handled as a duplicate:**
   - Replaced with **manufacturing companies**.
   - The SaaS content the brief asked for was added to the existing, unpublished Batch 02 article `/blog/social-media-management-saas-companies`:
     - sample 30-day plan
     - awareness, consideration and pipeline metrics
     - when outsourcing makes sense
   - That's 779 words added, bringing the article to 2,574 words and a 13-minute read.
3. **Writer spec addendum covering:**
   - Varied structures, so articles don't share one template
   - Regulated-industry rules
   - Consent and privacy
   - Scope boundaries between overlapping topics
   - Twin cross-links
   - Hero diagram rules
4. **Five writers worked in parallel:**
   - B2B, plus the SaaS update
   - Property and employer branding
   - Design and lifestyle
   - Health and education
   - Finance and other sectors
5. **Lead review:**
   - Independent validator: 0 issues.
   - Every numeric sentence reviewed.
   - Primary regulatory documents checked directly: NMC 2026 guidelines, SEBI circulars and regulations, IRDAI 2024 regulations.
   - Clinic CTA rewritten: given NMC clause 8.1(ii), it now tells clinics to check with their State Medical Council before engaging outside support.
   - Anchor text diversified: 10 anchors rewritten, giving 21 distinct anchors across 24 service-page links.
   - All 20 heroes reviewed on a contact sheet.
6. **Integration:**
   - Index wiring.
   - 20 hand-written CTA pairs; 120 unique headlines and bodies across all three batches.
   - Grouped Guides section on `/services/social-media-management`.
   - `llms.txt`.
7. **Validation:** see `05-qa-report.md`.

## Articles, URLs and metadata

Word counts are body plus FAQs. "Title / meta" is the rendered `<title>` length and the meta description length. CTA placement is computed with the live `getMidCtaIndex` logic.

| Article | File | Words | Read | Title / meta | Int. links | Ext. sources | CTA placement | Tags (first 3) | Status |
|---|---|---|---|---|---|---|---|---|---|
| [Social Media Management for Manufacturing Companies: Making Industrial Expertise Visible to Buyers, Partners and Talent](/blog/social-media-management-manufacturing-companies) | `smm-b2b.ts` | 2168 | 11 min read | 51 / 159 | 6 | 3 | after "Quality, certifications and capacity claims" (block 20 of 42) + after article | social media management for manufacturing companies; manufacturing company social media strategy; industrial B2B social media | Integrated (local, unpublished) |
| [B2B Social Media Strategy: How to Turn Industry Expertise Into Consistent Brand Content](/blog/b2b-social-media-strategy) | `smm-b2b.ts` | 2053 | 10 min read | 57 / 158 | 8 | 3 | after "Who posts: the company page, founders and experts" (block 23 of 42) + after article | B2B social media strategy; B2B content strategy for social media; B2B LinkedIn content | Integrated (local, unpublished) |
| [Social Media Management for IT Companies: What to Post When Your Product Is Difficult to Explain](/blog/social-media-management-it-companies) | `smm-b2b.ts` | 1766 | 9 min read | 54 / 157 | 5 | 1 | after "Engineering behind the scenes, without client secrets" (block 22 of 40) + after article | social media management for IT companies; IT company social media strategy; technology company social media | Integrated (local, unpublished) |
| [How Professional Services Firms Can Use LinkedIn to Build Authority and Generate Enquiries](/blog/linkedin-marketing-professional-services) | `smm-b2b.ts` | 1887 | 9 min read | 50 / 159 | 6 | 6 | after "Partner profiles and the firm page do different jobs" (block 17 of 37) + after article | LinkedIn marketing for professional services; LinkedIn for consultants; LinkedIn for law firms | Integrated (local, unpublished) |
| [Social Media for Recruitment and Employer Branding: How Companies Can Attract Better Talent](/blog/social-media-employer-branding) | `smm-property.ts` | 2172 | 10 min read | 53 / 156 | 8 | 4 | after "Five content streams that show the workplace honestly" (block 22 of 47) + after article | social media employer branding; employer branding on social media; recruitment marketing on social media | Integrated (local, unpublished) |
| [Social Media Management for Real Estate Developers: A Content Strategy That Builds Buyer Confidence](/blog/social-media-management-real-estate-developers) | `smm-property.ts` | 2066 | 11 min read | 50 / 160 | 6 | 5 | after "The content that builds buyer confidence" (block 18 of 37) + after article | social media management for real estate developers; real estate developer social media strategy; social media for builders | Integrated (local, unpublished) |
| [Real Estate Social Media Marketing: What Property Brands Should Post at Every Stage of the Buyer Journey](/blog/real-estate-social-media-marketing) | `smm-property.ts` | 1715 | 10 min read | 57 / 154 | 6 | 2 | after "Research: become the most useful account they follow" (block 19 of 35) + after article | real estate social media marketing; real estate content ideas; property marketing on Instagram | Integrated (local, unpublished) |
| [Social Media Management for Construction Companies: Making Complex Projects Easier to Understand Online](/blog/social-media-management-construction-companies) | `smm-property.ts` | 1610 | 10 min read | 50 / 160 | 8 | 0 | after "Safety and process education without risky claims" (block 17 of 32) + after article | social media management for construction companies; construction company social media strategy; social media for contractors | Integrated (local, unpublished) |
| [Social Media Marketing for Interior Designers: How to Turn Projects Into a Consistent Content Pipeline](/blog/social-media-marketing-interior-designers) | `smm-design-lifestyle.ts` | 2174 | 11 min read | 45 / 152 | 8 | 2 | after "Reels, walkthroughs and the Pinterest role" (block 19 of 36) + after article | social media marketing for interior designers; interior design social media strategy; Instagram for interior designers | Integrated (local, unpublished) |
| [How Architects Can Build a Strong Social Media Presence Without Sharing Only Project Photographs](/blog/social-media-marketing-architects) | `smm-design-lifestyle.ts` | 1856 | 9 min read | 52 / 151 | 7 | 1 | after "18 post ideas beyond the finished photograph" (block 15 of 31) + after article | social media marketing for architects; architecture firm social media; Instagram for architects | Integrated (local, unpublished) |
| [Social Media Marketing for Jewellery Brands: Building Desire, Trust and Product Discovery](/blog/social-media-marketing-jewellery-brands) | `smm-design-lifestyle.ts` | 1895 | 10 min read | 43 / 157 | 8 | 5 | after "The resource: a festive and wedding season calendar" (block 18 of 33) + after article | social media marketing for jewellery brands; jewellery brand Instagram strategy; jewellery content ideas | Integrated (local, unpublished) |
| [Social Media Strategy for Fitness Brands: Turning Expertise, Member Stories and Community Into Content](/blog/social-media-marketing-fitness-brands) | `smm-design-lifestyle.ts` | 1840 | 9 min read | 40 / 156 | 8 | 4 | after "The resource: a monthly content plan" (block 18 of 37) + after article | social media marketing for fitness brands; gym social media strategy; fitness studio Instagram | Integrated (local, unpublished) |
| [Social Media Management for Clinics: How to Educate Patients and Build Trust Online](/blog/social-media-management-clinics) | `smm-health-education.ts` | 2376 | 12 min read | 54 / 152 | 7 | 7 | after "Reviews, testimonials and patient stories" (block 22 of 42) + after article | social media management for clinics; social media marketing for doctors; clinic Instagram strategy | Integrated (local, unpublished) |
| [Hospital Social Media Strategy: Content Planning for Patient Education, Reputation and Community Engagement](/blog/hospital-social-media-marketing) | `smm-health-education.ts` | 2037 | 10 min read | 54 / 153 | 6 | 5 | after "Content to plan, department by department" (block 17 of 30) + after article | hospital social media marketing; hospital social media strategy; healthcare social media management | Integrated (local, unpublished) |
| [Social Media Marketing for Coaching Institutes: A Practical Strategy for Building Student Enquiries](/blog/social-media-marketing-coaching-institutes) | `smm-health-education.ts` | 1998 | 10 min read | 55 / 155 | 6 | 5 | after "A monthly content plan" (block 15 of 30) + after article | social media marketing for coaching institutes; coaching institute social media strategy; Instagram for coaching classes | Integrated (local, unpublished) |
| [Social Media Management for Schools and Universities: Building a Consistent Digital Presence](/blog/social-media-management-schools-universities) | `smm-health-education.ts` | 1800 | 9 min read | 52 / 157 | 7 | 3 | after "Children's privacy and safeguarding" (block 15 of 27) + after article | social media management for educational institutions; school social media strategy; university social media management | Integrated (local, unpublished) |
| [Social Media Marketing for Financial Services: Building Credibility Without Making Risky Promises](/blog/social-media-marketing-financial-services) | `smm-sectors.ts` | 2375 | 12 min read | 54 / 159 | 7 | 6 | after "What to post: content that builds trust" (block 20 of 40) + after article | social media marketing for financial services; financial services social media strategy; fintech social media | Integrated (local, unpublished) |
| [Social Media Management for Car Dealerships: Content That Supports Local Discovery and Test-Drive Enquiries](/blog/social-media-management-car-dealerships) | `smm-sectors.ts` | 1874 | 9 min read | 43 / 159 | 5 | 4 | after "Content ideas that work for dealerships" (block 17 of 36) + after article | social media management for car dealerships; car dealership social media marketing; automobile dealer Instagram | Integrated (local, unpublished) |
| [Social Media Management for Travel Companies: Building Destination Interest and Generating Enquiries](/blog/social-media-management-travel-companies) | `smm-sectors.ts` | 1761 | 9 min read | 44 / 160 | 7 | 1 | after "Short-form destination video" (block 17 of 34) + after article | social media management for travel companies; travel agency social media strategy; tour operator social media | Integrated (local, unpublished) |
| [Social Media Marketing for NGOs: How to Communicate Impact, Build Communities and Encourage Support](/blog/social-media-marketing-ngos) | `smm-sectors.ts` | 1931 | 10 min read | 40 / 159 | 5 | 3 | after "Programmes, community education and volunteers" (block 18 of 34) + after article | social media marketing for NGOs; NGO social media strategy; nonprofit social media India | Integrated (local, unpublished) |

Total: about 39,300 words across the 20 new articles, plus 779 words added to the SaaS article.

**Varied structures (not one template), by article:**
- Rules-first: 11, 15, 10.
- Governance-led: 06, 12.
- Calendar-led: 05, 13, 04.
- Journey matrix: 07, 16.
- Pipeline or workflow: 08, 09, 02.
- Ideas list: 10 (18 ideas), 16 (12 ideas).
- Comparison-led: 14 (schools vs universities).
- Translation table: 03.
- Audience matrix: 01R.
- Seasonal calendar: 17, 19.
- Consent-checklist-led: 20.

## Files created

| File | Articles |
|---|---|
| `src/content/brand-guides/smm-b2b.ts` | 01R manufacturing, 02 B2B strategy, 03 IT companies, 04 professional services |
| `src/content/brand-guides/smm-property.ts` | 05 employer branding, 06 real estate developers, 07 real estate buyer journey, 09 construction |
| `src/content/brand-guides/smm-design-lifestyle.ts` | 08 interior designers, 10 architects, 17 jewellery, 18 fitness |
| `src/content/brand-guides/smm-health-education.ts` | 11 clinics, 12 hospitals, 13 coaching institutes, 14 schools and universities |
| `src/content/brand-guides/smm-sectors.ts` | 15 financial services, 16 car dealerships, 19 travel, 20 NGOs |
| 20 SVG heroes in `public/blog/brand-guides/` | One per article: an industry-specific diagram, no photos, no fake UI |
| `reports/social-media-management-batch-03/internal-links.csv` | Supporting data: every link in the batch |

## Files modified

| File | Change |
|---|---|
| `src/content/brand-guides/index.ts` | Imports and spreads the five new arrays |
| `src/content/brand-guides/smm-industries.ts` | SaaS article only: three new H2 sections and the reading time |
| `src/lib/blogCta.ts` | 20 `BRAND_GUIDE_CTAS` entries (topic "Social Media Management"); clinic CTA worded for NMC 2026 |
| `src/content/social-media-management.ts` | New `smmGuideGroups`: all 60 guides in five groups |
| `src/content/services.ts` | SMM `guides` now derived from `smmGuideGroups` (single source) |
| `src/app/services/social-media-management/page.tsx` | Guides section is grouped (two-column, five headed groups) instead of one flat list of 60 |
| `public/llms.txt` | Batch 03 guides added, with a note that regulated guides summarise official rules and are not advice |

**Not touched:** forms, API routes, email, environment variables, analytics and tracking, existing published articles, URLs and redirects.

## Internal linking changes

- **Volume:** 204 links in the batch — 107 blog, 27 service, and 70 external official references, which render as plain text under the site's link policy.
- **Service page:** 24 links to the SMM page (main URL plus 8 section anchors), using 21 distinct anchors (no anchor more than twice).
- **Other services:** UGC Production, Product Launches and Social Campaigns.
- **Twins:** every article links its influencer twin with a clarifying sentence (architects has none; it links interiors and Pinterest instead).
- **Earlier batches:** articles link the Batch 01 and 02 operations and platform guides: approvals, crisis, community vs support, KPIs, LinkedIn page, Pinterest, Reels, multiple locations, calendar and customer questions.
- **Inbound:** the service page's grouped Guides section, the blog category filter and `llms.txt`.

## SEO and metadata

- Unique `seoTitle` (49–60 characters rendered) and `metaDescription` (140–160) per article.
- Self-referencing canonical, one H1, and an H2/H3 hierarchy with a table of contents.
- BlogPosting, BreadcrumbList and FAQPage JSON-LD. FAQ markup matches the visible FAQs, under the existing template convention.
- Sitemap entries; `index, follow`; alt text on every hero.
