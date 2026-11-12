# 01 — Content Audit (Batch 03)

Audit date: 12 November 2026. Inventory: **1,001 slug/title pairs** extracted from `src/content/**`, including the 40 social media management articles from Batches 01 and 02. GSC source: `gsc-data.xlsx` (web, last 3 months, early November 2026 export).

## 1. Existing content coverage

**Architecture:** unchanged from Batches 01 and 02:
- Content is TypeScript data, rendered through the `/blog/[slug]` template.
- Mid and end CTAs are inserted automatically.
- Each article emits BlogPosting, Breadcrumb and FAQ JSON-LD, and has an SVG hero.
- Articles use the "Social Media Management" category and appear in the sitemap.

**Website:**
- `/services/social-media-management` is the commercial hub. Its Guides section now lists the cluster grouped into five sections, because 60 links in one flat list would be unreadable.
- `/for-brands#inquiry` is the enquiry route.
- Influencer services are listed under `/services#influencer-marketing`.
- UGC lives at `/services/ugc-content-production`.

**Industry coverage before this batch:**

| Coverage type | Industries |
|---|---|
| Influencer-marketing guides (brand works with creators) | SaaS, B2B tech, manufacturing, HR and recruitment / employer branding, real estate (India and Dubai), home and interiors, construction, healthcare, dental, pharma, education/edtech, colleges, study abroad, fintech, personal finance, insurance, automotive, dealerships, EV, jewellery, fitness, travel, hospitality, nonprofits (GCC) |
| Social media management guides (brand runs its own accounts) | D2C, beauty, fashion, restaurants, SaaS (all Batch 02) |
| No coverage of either kind | Architecture |

## 2. Duplicate and overlapping topics

| Proposed article | Overlap | Severity | Decision |
|---|---|---|---|
| **01 SaaS** | `social-media-management-saas-companies` (Batch 02 #40). Same primary keyword, same coverage (education, features, use cases, founder vs company page, LinkedIn and YouTube) | **Substantial** | **Replaced.** New Article 01: *Social media management for manufacturing companies* (B2B cluster; only an influencer twin exists). The requested SaaS additions (sample 30-day plan, metrics by funnel stage, when to outsource) are added to the existing, unpublished Batch 02 SaaS article instead of creating a duplicate URL. |
| 02 B2B strategy | `linkedin-company-page-management` (Batch 02), `b2b-influencer-marketing-india`, `creator-led-b2b-marketing` | Moderate | Kept. Scoped to the cross-industry content *strategy* (expertise-to-content system, pillars, SMEs, case studies, measurement); page operations are linked, not repeated |
| 03 IT companies | SaaS (Batch 02), 02 | Moderate | Kept. Scoped to IT services and technical products (feature-to-hook translation); SaaS is linked |
| 04 professional services | `linkedin-company-page-management`, `linkedin-thought-leadership-marketing` | Low | Kept (industry-specific, includes professional-body rules) |
| 05 employer branding | `employer-branding-influencer-marketing` (creators), `employee-influencer-marketing` (employee voices), `hr-recruitment-influencer-marketing-india` (HR firms) | Low | Kept. Scoped to the company's own channels; twins linked |
| 06 vs 07 real estate | Each other; `influencer-marketing-real-estate-brands-india` | Moderate (intra-batch) | Kept both. 06 = developer brand, project operations, RERA and approvals; 07 = buyer-journey content matrix for any property brand, linking 06 for compliance |
| 08 vs 10 interiors and architects | Each other; `home-interior-influencer-marketing-india` | Low | Kept both. 08 = project-to-content pipeline; 10 = beyond photographs, 15+ ideas |
| 09 construction | 06; `influencer-marketing-construction` | Low | Kept. Contractors and EPC as B2B, distinct from developers |
| 11 vs 12 clinics and hospitals | Each other; healthcare, dental and pharma influencer twins | Moderate (intra-batch) | Kept both. 11 = clinic or doctor scale; 12 = multi-department governance, public health and crisis |
| 13 vs 14 coaching and schools | Each other; edtech and colleges influencer twins | Low | Kept both. 13 = enquiries plus the CCPA coaching guidelines; 14 = institutions, safeguarding and governance |
| 15 financial services | fintech, personal-finance and insurance influencer twins | Low | Kept (brand-owned channels plus multi-regulator compliance) |
| 16 car dealerships | `influencer-marketing-automotive-dealerships` (227 impressions, position 9.1) | Moderate | Kept. Scoped strictly to the dealership's own accounts; the twin is linked for creator campaigns |
| 17, 18, 19, 20 jewellery, fitness, travel, NGOs | Influencer twins only | Low | Kept |

## 3. Existing relevant URLs (twins and links)

Each article links its influencer twin with a clarifying sentence, plus 1–3 relevant Batch 01 or 02 guides. The full map is in `02-keyword-map.md`.

## 4. GSC opportunities

| Finding | Data | Recommendation |
|---|---|---|
| No SMM-intent queries for any Batch 03 industry | 0 impressions for every primary keyword | New articles carry no cannibalisation risk |
| `/blog/influencer-marketing-construction` | 536 impressions, **0 clicks**, position 14.8; queries "construction industry influencer marketing" (107), "construction influencer marketing" (104, position 8.2) | **Improve the existing page** (title and meta for CTR) rather than create anything. Needs approval because it's a published article. Article 09 targets SMM intent, not these queries. |
| `/blog/influencer-marketing-travel-brands-india` | 627 impressions, 3 clicks (0.48% CTR), position 15.8 | Title/meta review recommended (needs approval). Article 19 doesn't target "travel influencer marketing" queries. |
| `/blog/influencer-marketing-automotive-dealerships` | 227 impressions, position 9.1; query "how dealers can acquire leads from automotive influencers" | Keep as the owner of dealer influencer intent. Article 16 targets dealership social media management and links to it. |
| `/blog/influencer-marketing-education-edtech-brands-india` | 50 impressions, 8% CTR, position 6.9 | Healthy; 13 links to it |
| Others (jewellery 42, healthcare 30, real estate 16, manufacturing 14 impressions) | Low volume | No action |

## 5. Keyword cannibalisation risks

- **Eliminated:** Article 01 (SaaS) was replaced, as above.
- **Managed by scope boundaries and cross-links:**
  - 06 vs 07: "social media management for real estate developers" vs "real estate social media marketing".
  - 11 vs 12: "for clinics" vs "hospital social media marketing".
  - 02 vs 04: B2B strategy vs LinkedIn for professional services.
- **No Batch 03 primary keyword** matches an existing page's GSC queries.

## 6. Recommended internal links

- **From each Batch 03 article:**
  - the SMM page (main URL or a section anchor),
  - its influencer twin,
  - 1–3 Batch 01/02 operations or platform guides (approvals, crisis, community vs support, KPIs, LinkedIn page, Pinterest, multiple locations),
  - influencer or UGC services where natural.
- **To Batch 03 articles:**
  - The SMM service page's grouped Guides section (the "By industry" group).
  - `llms.txt`.
  - The blog category.
  - `related` fields.
- **Recommended, needs approval:** one-line links from each influencer twin to its new SMM counterpart. These would change published articles.

## 7. Topics modified, merged or excluded

| Topic | Change |
|---|---|
| 01 SaaS | **Excluded as a new URL** (duplicate). Its requested content is merged into the existing Batch 02 SaaS article. **Replaced** by manufacturing companies. |
| 03 IT companies | Narrowed to IT services and technical products |
| 07 Real estate buyer journey | Narrowed to the journey matrix; compliance detail is linked to 06 |
| 16 Car dealerships | Narrowed to the dealership's own accounts |
| All others | Kept as briefed, with scope boundaries recorded in the writer spec |

**Publishing sequence impact:** Week 1 slot 1 becomes the manufacturing article. The SaaS enhancement ships whenever Batch 02 ships. See `06-publishing-plan.md`.
