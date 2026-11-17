# 02 · Keyword Research and Search Intent

## Sources and limits

| Source | Used for | Limit |
|---|---|---|
| `gsc-data.xlsx` (Search Console, web, 5 Sep – 3 Nov 2026, top 1,000 queries / 697 pages) | Real impressions, clicks, CTR and position for Kudozz | Site-wide queries only, with no query × page split. It predates the 13 Nov homepage and pillar changes. |
| Web search (17 Nov 2026, US-based index, 3 queries) | SERP composition and competitor positioning | **Not a localised google.co.in SERP.** Treat it as directional. |
| Existing reports (`reports/claude-seo-kudozz/`, `reports/social-media-management-expansion/`) | Earlier keyword ownership and cannibalisation decisions | — |

**No search volumes, keyword difficulty scores or third-party ranking positions appear in this report.** No keyword tool (DataForSEO, Moz, Ahrefs, Semrush) is configured. Where demand is described without GSC numbers, it is labelled *unverified assumption*.

---

## 1. Primary cluster: what Search Console shows

| Keyword (as briefed) | Closest GSC queries | Impr | Clicks | CTR | Pos | Intent |
|---|---|---|---|---|---|---|
| best influencer marketing agency in India | "best influencer marketing agency in india" 539; "… agency" 187; "… agency india" 103; "best agency for influencer marketing" 78; "best influencer marketing agencies in india" 56; "best influencer agency india" 36 | ≈1,000 | 10 | ≈1% | 6–11 | **Commercial investigation, list-leaning** |
| best influencer marketing companies in India | "influencer marketing companies" 215; "top 10 influencer marketing agencies in india" 180; "top influencer marketing agencies in india" 160; "top influencer marketing agency in india" 102 | ≈660 | 3 | <1% | 5–17 | Commercial investigation, **list** |
| influencer marketing agency India | "influencer marketing agency" 2,901; "… agency india" 406; "… agency in india" 404; "influencer agency" 266; "influencer agency india" 114 | ≈4,100 | 58 | 1.4% | 8–15 | **Commercial / transactional** (find a vendor) |
| influencer marketing services India | "influencer marketing services" 453 | 453 | 1 | 0.2% | 16 | Commercial (service scope) |
| best UGC marketing agency in India | none | 0 | — | — | — | Commercial investigation (*unverified*) |
| UGC marketing agency India | "ugc content agency" 17 (pos 83) | 17 | 0 | — | 83 | Commercial |
| UGC content creation agency India | none; related "ugc marketing" 232 (pos 19), "ugc in marketing" 18 | 250 | 0 | 0 | 11–19 | Mostly informational at present |
| best social media marketing agency in India | none | 0 | — | — | — | Commercial investigation (*unverified*) |
| social media marketing agency India | none; only "social media influencer (marketing) agency" variants, 24–35 impr, pos 23–30 | ≈110 | 1 | — | 22–30 | Commercial |
| social media management agency India | none | 0 | — | — | — | Commercial |

**Brand:** "kudozz" has 43 impressions at position 1.3 with 32.6% CTR. Brand demand is very small, so non-brand search is the growth channel.

### What the numbers say

1. **Influencer agency demand is real and already reaches the site** (about 5,700 impressions on the cluster in three months). Clicks are tiny because positions are 8–16 and because the URL Google picks is usually the listicle `/blog/best-influencer-marketing-agencies-in-india` (14,204 impressions, avg position 11.3, CTR 0.99%). The homepage only had 521 impressions.
2. **UGC agency demand barely registers.** The site appears for informational UGC queries ("ugc marketing", "ugc in marketing", "whitelisting ugc"), not for agency queries. Total UGC query impressions: 304.
3. **Social media marketing agency demand doesn't reach the site at all.** The SMM pages were added on 12 Nov, after the export ends, so they have no data yet.

## 2. SERP composition and competitor positioning (directional)

| Query | What ranks | Implication |
|---|---|---|
| best influencer marketing agency in India | Listicles ("11 Best…", "Top 10… 2026"), sponsored PR posts on news sites, directories (HypeAuditor, DesignRush, Clutch), and a few agency homepages, e.g. Kofluence "India's #1 Influencer Marketing…" | Mixed intent: **list pages dominate**, but agency homepages that claim the position do appear. A homepage can rank, and the listicle is the natural owner of the list half. |
| best UGC marketing agency in India | Listicles (Bosswallah, EzUGC), sponsored PR (TechBullion), and agency/platform homepages (Grynow, WYLD "India's Leading UGC Marketing Platform") | Less competition from editorial publishers. Agency service pages do rank. |
| best social media marketing agency in India | DesignRush directory pages (multiple pages of listings, some paid placement) | Directory-dominated. The homepage alone is unlikely to rank here soon. The service page plus the existing SMM India listicle are better candidates. |

**Competitor patterns observed:** competitors lean on volume claims ("750K+ creators", "1000+ brands", "30K+ campaigns"), awards and client logos. Kudozz can't verify claims of this kind and must not copy them. It can differentiate with specifics it can stand behind: one agreed KPI, a written reason for every creator, cleared usage rights, regional-language sourcing, social media and creator work on one calendar, and transparent fee separation.

**SERP features:** Google no longer shows FAQ rich results for commercial sites (restricted to authoritative government and health sites since August 2023). The likely features for these queries are People Also Ask, AI Overviews and Discussions/forums. *Unverified for google.co.in.* Clear question-and-answer content on the homepage helps with PAA and AI citation whether or not schema rich results appear.

## 3. Supporting cluster: intent and best-fit URL

| Supporting keyword | Intent | Best owner (not the homepage unless stated) |
|---|---|---|
| influencer campaign management | Commercial | `/services/outreach-management` |
| influencer discovery and selection | Commercial | `/services/creator-discovery` |
| influencer outreach and partnerships | Commercial | `/services/outreach-management` |
| creator partnerships for brands | Commercial | **Homepage** (supporting phrase), `/services/ambassador-programs` |
| influencer marketing strategy | Commercial / informational | `/services/campaign-strategy` |
| influencer campaign reporting | Commercial | `/services/reporting` |
| influencer marketing for D2C / e-commerce brands | Commercial investigation | `/blog/influencer-marketing-d2c-brands-india` |
| regional influencer marketing | Commercial | `/services/regional-influencer-marketing` (25 impr, pos 5.2 on "regional influencer marketing agency in india") |
| micro-influencer marketing | Commercial | `/services/micro-nano-influencer-marketing` (34 impr, pos 10.3 on "micro influencer marketing agency in india") |
| user-generated content agency India / UGC creators India | Commercial | `/services/ugc-content-production` |
| UGC video production / UGC ads for brands | Commercial | `/services/ugc-content-production` |
| UGC for performance marketing / UGC creator campaigns | Commercial | `/services/ugc-campaigns` |
| UGC content for Instagram | Informational | `/blog/instagram-ugc-marketing` |
| UGC content strategy | Informational | `/blog/what-is-ugc-marketing` |
| social media marketing / management services India | Commercial | `/services/social-media-management` |
| social media strategy for brands | Commercial / informational | `/services/social-media-management` (strategy section) |
| Instagram marketing agency India | Commercial | `/services/social-media-management` (organic). "best instagram marketing agency india d2c" had 15 impr at pos 10.5. |
| social media content creation | Commercial | `/services/social-media-management` |
| social media campaign management | Commercial | Ambiguous: `/services/social-campaigns` covers *multi-creator* campaigns, and SMM covers owned-channel campaigns |
| social media marketing for D2C / e-commerce | Commercial investigation | `/blog/social-media-management-d2c-brands` |
| social media analytics and reporting | Commercial | `/services/social-media-management` (reporting) |
| social media growth strategy | Informational | Blog |

## 4. Questions brands ask before choosing an agency

From GSC queries already reaching the site (`influencer-marketing-agency-pitch-questions` 522 impr, `influencer-marketing-agency-fees-india` 435 impr, `influencer-marketing-agency-checklist` 175 impr, `creator-manager-vs-agency` 182 impr), plus the brief:

- What does an influencer marketing agency actually do?
- How do I choose one in India? What should I ask in the pitch?
- How much does it cost, and how are agency fees separate from creator fees?
- What's the difference between influencer marketing and UGC?
- Can one agency run our social media and creator campaigns together?
- Which platforms should we use?
- How is performance measured?
- How do we get started?

These shape the homepage FAQ (report 04).

## 5. Should each keyword get its own page?

| Keyword group | Verdict |
|---|---|
| Influencer agency (best / India) | **Homepage** owns the agency-level query. The **pillar** `/services/influencer-marketing` owns "influencer marketing services". The **listicle** keeps list intent ("top 10 …", "best agencies"). No new page. |
| UGC agency (best / India) | `/services/ugc-content-production` should own it, with the homepage as secondary support. The existing `/blog/best-ugc-marketing-agencies-in-india` covers list intent. **No new page.** The two UGC service pages need clearer roles (see report 03). |
| Social media marketing agency (best / India) | `/services/social-media-management` should own it, with the homepage as secondary support. The existing `best-social-media-marketing-agencies-in-india` covers list intent. **No new page.** A dedicated "social media marketing" page isn't justified yet, because the SMM page already covers organic marketing. Paid social isn't a confirmed service. |

## 6. Keyword decisions for the homepage

- **Primary:** best influencer marketing agency in India; influencer marketing agency India
- **Secondary:** UGC marketing agency India; social media marketing agency India (each named once in a natural sentence, plus the "best" form once in the meta description)
- **Supporting:** influencer marketing services, influencer campaign management, creator partnerships, UGC content creation, UGC creators / UGC videos, social media management, social media strategy, social media content creation

**Rule applied:** "best" appears in the title (owner's decision) and once in the description, framed as the searcher's question. It doesn't appear in the H1, headings or body copy as a claim.

**Sources (web search, 17 Nov 2026):** [HypeAuditor India list](https://agencies.hypeauditor.com/list/india/) · [Kofluence](https://www.kofluence.com/?p=64146) · [BrandStory top 10](https://brandstory.in/blogs/top-10-influencer-marketing-agencies-in-india/) · [DemandSage](https://www.demandsage.com/?p=19798) · [Clutch India influencer](https://clutch.co/in/agencies/social-media-marketing/influencer?page=8) · [Bosswallah UGC list](https://bosswallah.com/blog/creator-hub/top-10-ugc-agencies-in-india-2026/) · [EzUGC](https://www.ezugc.ai/blog/best-ugc-agencies-india) · [WYLD](https://getwyld.in/brands) · [Grynow UGC](https://grynow.in/top-user-generated-video-company-in-india.html) · [DesignRush India SMM](https://www.designrush.com/agency/social-media-marketing/in)
