# Creator intelligence cluster (1170–1189): audit, decisions and content database

Date: 2026-10-07. New modules: `src/content/brand-guides/intelligence-data.ts`, `intelligence-scoring.ts`, `intelligence-research.ts` (registered in `src/content/brand-guides/index.ts`). CTA pairs in `src/lib/blogCta.ts` (`BRAND_GUIDE_CTAS`). Hero diagrams in `public/blog/brand-guides/<slug>.svg`. Builds on the technology cluster (`docs/influencer-technology-1150-1169-audit.md`): 1150–1169 = tools, 1170–1189 = data, intelligence and decisions.

## Summary

- 20 topics checked against all 639 live blog URLs, including the 1150–1169 technology pages.
- **17 new URLs.**
- **2 existing pages expanded** instead of duplicated:
  - 1176 → `/blog/influencer-shortlist` already owned "influencer shortlist". Added data requirements and pass rules per stage, when to score, a decision log, bias checks and a worked funnel example. Retitled "Influencer Shortlisting: How Brands Can Build a Data-Driven Creator Shortlist". URL unchanged.
  - 1179 → `/blog/influencer-audience-quality` already owned audience quality vs fit. Added a six-dimension Audience Quality Score (authenticity gate, activity, attention, interaction depth, stability, concentration), a scoring template with confidence level and a worked example. Retitled to cover scoring. URL unchanged.
- **1 consolidated:** 1187 "Creator landscape analysis" → `/blog/influencer-market-mapping` (section "Niche landscape analysis", tags include "creator landscape analysis"). Market mapping and landscape analysis return the same kind of SERP; two pages would compete.
- **1 existing page narrowed:** `/blog/influencer-social-listening` (1165) had a "Finding creators through listening" section that would overlap with the new 1182. It now summarises and links to `social-listening-creator-discovery` and `brand-mention-monitoring`; related articles updated.
- 23 older articles received a contextual link into the cluster (see "Backlinks added").
- **Pre-existing issue fixed:** `influencer-audience-quality` had two different anchor texts pointing at the same URL, one titled as a page that doesn't exist. The second now points to `influencer-fraud-detection-tools` with matching anchor text.

## Research notes (2026-10-07)

No keyword tool or Search Console data was available; no volumes, difficulty, CPC or traffic are claimed.

- "Creator intelligence" SERPs are dominated by vendor product pages. No ranking page explains it as a decision layer with questions, roles and a learning loop; the page is written to fill that gap.
- "Influencer benchmarks" results publish engagement figures that disagree by multiples across reports because of different formulas (÷ followers vs ÷ views), samples and periods. The benchmarking page explains why instead of quoting a number.
- Verified facts used on-page:
  - Meta added a branded content search to its Ad Library in August 2023 (DSA-driven). Coverage, date ranges and inclusion are limited (Social Media Today), so the page labels it partial.
  - Instagram "Paid partnership" label and YouTube "Includes paid promotion" disclosure (official help pages, `SOURCES`).
  - ASCI guidelines on disclosure once a material connection exists (`SOURCES.asciGuidelines`).
  - DPDP Rules timeline (`SOURCES.dpdpRules2025`).
  - Sentiment analysis on Hindi-English code-mixed text has well-documented difficulties (transliteration, limited training data, sarcasm): stated qualitatively; no accuracy figures quoted.
- Every worked example and figure on these pages is labelled hypothetical or illustrative. No Kudozz results, clients or statistics are claimed.

## Decision database

| ID | Topic | URL (/blog/…) | Action | Primary keyword | Intent | Funnel | CTA topic (mid → / bottom → inquiry) | Schema |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1170 | Influencer marketing data | influencer-marketing-data | CREATE | influencer marketing data | What to collect, when, how reliable, who owns it | TOFU/MOFU | Campaign Measurement → /services/reporting | BlogPosting, BreadcrumbList, FAQPage |
| 1171 | Creator intelligence | creator-intelligence | CREATE | creator intelligence | Concept: decision layer (who, why, which campaign/audience/stage/role) | TOFU/MOFU | Creator Selection → /services/creator-discovery | same |
| 1172 | Influencer data analytics | influencer-data-analytics | CREATE | influencer data analytics | Turning data into insights (analyses, confidence, cadence) | MOFU | Campaign Measurement → /services/reporting | same |
| 1173 | Performance data | influencer-performance-data | CREATE | influencer performance data | Normalising creator results across campaigns (rates, cost metrics, campaign index) | MOFU | Campaign Measurement → /services/reporting | same |
| 1174 | Benchmarking | influencer-benchmarking | CREATE | influencer benchmarking | What to compare against (own history, cohort, campaign median, reports) | MOFU | Campaign Measurement → /services/reporting | same |
| 1175 | Performance scorecards | creator-performance-scorecard | CREATE | creator performance scorecard | Post-campaign evaluation and rebooking | MOFU | Campaign Management → /services/reporting | same |
| 1176 | Shortlisting | influencer-shortlist | EXPAND | influencer shortlisting | Data-driven shortlist building | MOFU/BOFU | Creator Selection (existing CTA) | same |
| 1177 | Ranking | influencer-ranking | CREATE | influencer ranking | Prioritising shortlisted creators into tiers and a portfolio | MOFU/BOFU | Creator Selection → /services/creator-discovery | same |
| 1178 | Creator quality score | creator-quality-score | CREATE | creator quality score | Brand-agnostic creator quality beyond followers | MOFU | Creator Selection → /services/creator-discovery | same |
| 1179 | Audience quality score | influencer-audience-quality | EXPAND | influencer audience quality score | Scoring the audience itself (vs fit) | MOFU | Creator Selection (existing CTA) | same |
| 1180 | Engagement quality | influencer-engagement-quality | CREATE | influencer engagement quality | Separating meaningful engagement from vanity metrics | MOFU | Creator Selection → /services/creator-discovery | same |
| 1181 | Sentiment analysis | influencer-sentiment-analysis | CREATE | influencer sentiment analysis | Reading audience reactions, with limits | MOFU | Campaign Measurement → /services/reporting | same |
| 1182 | Listening for discovery | social-listening-creator-discovery | CREATE | social listening for creator discovery | Finding creators through conversations | TOFU/MOFU | Creator Discovery → /services/creator-discovery | same |
| 1183 | Brand mention monitoring | brand-mention-monitoring | CREATE | brand mention monitoring | Finding creators already talking about the brand; warm outreach | MOFU | Creator Discovery → /services/ambassador-programs | same |
| 1184 | Competitor creators | competitor-influencers | CREATE | influencer competitor analysis | Finding which creators work with competitors | MOFU | Creator Discovery → /services/creator-discovery | same |
| 1185 | Competitor strategy | competitor-influencer-strategy | CREATE | competitor influencer research | Analysing competitors' creator strategies and gaps | MOFU | Campaign Planning → /services/campaign-strategy | same |
| 1186 | Market mapping | influencer-market-mapping | CREATE | influencer market mapping | Category-wide creator landscape and whitespace | TOFU/MOFU | Campaign Planning → /services/campaign-strategy | same |
| 1187 | Landscape analysis | influencer-market-mapping | CONSOLIDATE | creator landscape analysis | Niche deep-dive section on 1186 | MOFU | (as 1186) | (as 1186) |
| 1188 | Trend analysis | influencer-trend-analysis | CREATE | influencer trend analysis | Medium-term emerging creator opportunities with signal validation | TOFU/MOFU | Campaign Planning → /services/campaign-strategy | same |
| 1189 | Intelligence platform | creator-intelligence-platform | CREATE | creator intelligence platform | What a modern influencer data system should contain | MOFU/BOFU | Influencer Technology → /services/creator-discovery | same |

All: audience = brand marketers, founders, D2C, ecommerce and growth teams in India; status = published 2026-10-07 (1176 and 1179 updated 2026-10-07). Secondary keywords, related articles and inbound counts per URL are in `docs/blog-content-map.csv` (cluster "Creator Intelligence").

### Intent split (cannibalization guard)

| Pages | How they differ |
| --- | --- |
| creator-quality-score / ai-influencer-matching / influencer-ranking / creator-performance-scorecard | Quality (is this a strong creator, any brand) / fit (right for this brief) / priority (who first, as a portfolio) / post-campaign evaluation (how did they do with us) |
| influencer-performance-data / influencer-benchmarking / influencer-marketing-kpis | Normalising results across campaigns / choosing the reference point / choosing what to measure |
| influencer-data-analytics / influencer-analytics-tools | Analyses that produce decisions / choosing measurement technology |
| influencer-engagement-quality / influencer-engagement-rate | What engagement consists of / how to calculate the rate |
| influencer-audience-quality (expanded) / influencer-engagement-quality | Scoring the audience / scoring the interactions |
| social-listening-creator-discovery / influencer-social-listening / brand-mention-monitoring | Finding creators from category conversations / listening for briefs, monitoring and risk / creators who already mention you |
| competitor-influencers / competitor-influencer-strategy | Finding the creators / analysing the strategy |
| influencer-trend-analysis / influencer-trend-tracking | Medium-term creator, niche and regional shifts / short-term formats and sounds for briefs |
| creator-intelligence-platform / influencer-marketing-software / creator-discovery-platform | Intelligence layer (provenance, history, explainable scoring) / operational features / search and comparing discovery options |
| creator-intelligence / creator-intelligence-platform | Practice and decisions / software requirements |

## Backlinks added (older → new)

influencer-engagement-rate → engagement quality, benchmarking · influencer-marketing-kpis → performance data, benchmarking · influencer-marketing-report → data analytics, scorecard · measuring-influencer-campaign-roi → performance data · how-to-choose-the-right-influencer-for-your-brand → quality score, ranking · how-to-vet-influencers → engagement quality, sentiment · influencer-database → marketing data, creator intelligence · influencer-analytics-tools → data analytics, sentiment · influencer-marketing-dashboard → performance data · influencer-trend-tracking → trend analysis · ai-influencer-matching → quality score, ranking · creator-discovery-platform → intelligence platform · influencer-marketing-software → intelligence platform · influencer-marketing-technology → creator intelligence · influencer-fraud-detection-tools → engagement quality · influencer-marketing-strategy → competitor research, market mapping · creator-competitor-analysis → competitor influencers · influencer-marketing-brand-safety → sentiment · influencer-partnerships → scorecard · influencer-outreach-strategy → brand mention monitoring · regional-influencer-marketing-india → market mapping · influencer-marketing-trends-2026 → trend analysis · influencer-marketing-crm → scorecard.

## CTAs and analytics

- Exactly two CTAs per page via the existing `BlogMidCTA` (auto-placed at the section boundary nearest the middle) and `BlogBottomCTA`. Verified on every page in rendered HTML: one mid CTA, one bottom CTA. No CTA blocks in article bodies.
- Copy is hand-written per slug; no new CTA components. Existing analytics events (`blog_mid_cta_click`, `blog_bottom_cta_click`, `blog_lead_form_start`, `blog_lead_form_submit`) and the inquiry form are unchanged.

## Known limitations and future review

- Word counts (body + FAQs, excluding CTAs) are about 1,100–1,600 per page, below the 1,800–3,000 guide. Each page carries frameworks, tables, templates and worked examples; they were not padded.
- Review by April 2027: the Meta branded content search (availability and coverage change), and Instagram/YouTube disclosure label behaviour.
- `competitor-influencer-strategy` and `creator-intelligence-platform` have the fewest inbound links (3 each); add links from future competitive-strategy and software content.
