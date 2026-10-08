# Influencer technology cluster (1150–1169): audit, decisions and content database

Date: 2026-10-07. New modules: `src/content/brand-guides/technology-ai.ts`, `technology-operations.ts`, `technology-tools.ts`, `technology-insights.ts` (registered in `src/content/brand-guides/index.ts`). CTA pairs in `src/lib/blogCta.ts` (`BRAND_GUIDE_CTAS`). Hero diagrams in `public/blog/brand-guides/<slug>.svg`.

## Summary

- 20 topics audited against all 621 live blog URLs (titles, H2s, tags and intent) before writing.
- **18 new URLs** (1150–1160, 1162–1168).
- **2 existing pages expanded** instead of duplicated:
  - 1161 → `/blog/creator-discovery-platform` already owned "influencer/creator discovery platform". Added a comparison of creator-finding options (native marketplaces, discovery SaaS, creator marketplaces, agency sourcing, manual search), a weighted scoring matrix, a two-week trial plan and a comparison FAQ. H1/SEO title retargeted to the comparison intent. URL unchanged.
  - 1169 → `/blog/influencer-marketing-technology` already owned "tools brands need to run campaigns". Rewritten as the cluster pillar: nine stack layers, stacks by stage, how layers connect, evaluation checklist, India considerations, example stacks. Kept its existing "no named-vendor recommendations" policy and FAQs. URL unchanged.
- **0 merges or redirects.**
- Creator-side pages with similar names (`creator-crm`, `creator-talent-database`, `creator-tech-stack`, `creator-workflow-automation`, `ai-for-creator-brand-collaborations`) serve creators, not brands, so brand-side pages were created and the pairs cross-linked with an audience note.
- 18 older articles received a contextual link into the cluster (two-way graph). See "Backlinks added".
- 4 pre-existing broken inline anchors elsewhere on the site were fixed during QA (Telangana and Punjab agency guides, edtech and fitness guides: anchor text didn't match paragraph text, so the link never rendered).

## Research notes (2026-10-07)

No keyword tool or Search Console data was available; no volumes, difficulty or CPC are claimed anywhere.

- "AI influencer marketing" SERPs mix two intents: virtual/AI-generated influencers and AI used inside campaigns. The page addresses the ambiguity in the intro and routes the virtual-influencer intent to `ai-influencers-vs-human-creators`.
- Ranking pages for discovery, CRM, fraud and outreach topics are mostly vendor blogs with "best tools" lists. The gap: neutral evaluation criteria, what the tools can't do, and India coverage (regional languages, tier 2/3, managers, WhatsApp). The cluster is written to fill that gap without naming vendors, consistent with the site's existing policy.
- Verified platform facts used (with links on-page):
  - Instagram creator marketplace launched in India, February 2024 (Meta newsroom, `SOURCES.instagramCreatorMarketplace`).
  - Meta added keyword search and AI recommendations to the creator marketplace in 2025 (`SOURCES.metaNewFronts2025`).
  - YouTube brand partnerships now run under YouTube Creator Partnerships (formerly BrandConnect), available in India (`SOURCES.youtubeCreatorPartnerships`; unification reported March 2026).
  - India's DPDP Rules notified November 2025; most business obligations (notice, consent, security, breach intimation, data principal rights) apply from May 2027 (`SOURCES.dpdpRules2025`).
  - ASCI influencer guidelines require virtual influencers to disclose they are not real people (`SOURCES.asciGuidelines`).
- Survey statistics found during research (e.g. outreach surveys with ~50 respondents, non-Indian virtual-influencer trust figures) were deliberately **not** quoted: small or non-Indian samples.
- All numeric examples on the pages (dashboard table, search funnel, seeding example, CRM record) are labelled illustrative.

## Decision database

| ID | Topic | URL (/blog/…) | Action | Primary keyword | Intent | Funnel | CTA topic (mid → / bottom → inquiry) | Schema |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1150 | AI influencer marketing | ai-influencer-marketing | CREATE | AI influencer marketing | Informational: practical AI uses across the campaign | TOFU | Influencer Technology → /services/campaign-strategy | BlogPosting, BreadcrumbList, FAQPage |
| 1151 | AI influencer discovery | ai-influencer-discovery | CREATE | AI influencer discovery | Informational/commercial: technology-assisted creator finding | MOFU | Creator Discovery → /services/creator-discovery | BlogPosting, BreadcrumbList, FAQPage |
| 1152 | AI influencer matching | ai-influencer-matching | CREATE | AI influencer matching | Informational: using AI fit scores as a brand (mechanics stay on creator-matching) | MOFU | Creator Selection → /services/creator-discovery | BlogPosting, BreadcrumbList, FAQPage |
| 1153 | AI campaign management | ai-influencer-campaign-management | CREATE | AI influencer campaign management | Informational: AI inside live campaign operations | MOFU | Campaign Management → /services/outreach-management | BlogPosting, BreadcrumbList, FAQPage |
| 1154 | AI-powered tools | ai-influencer-marketing-tools | CREATE | AI influencer marketing tools | Commercial evaluation of AI features | MOFU/BOFU | Influencer Technology → /services/creator-discovery | BlogPosting, BreadcrumbList, FAQPage |
| 1155 | Marketing automation | influencer-marketing-automation | CREATE | influencer marketing automation | Decision: what to automate vs keep human; maturity model | MOFU | Campaign Management → /services/outreach-management | BlogPosting, BreadcrumbList, FAQPage |
| 1156 | Campaign automation | influencer-campaign-automation | CREATE | influencer campaign automation | Implementation: data model, pipeline, trigger-action rules | MOFU | Campaign Management → /services/outreach-management | BlogPosting, BreadcrumbList, FAQPage |
| 1157 | Outreach automation | influencer-outreach-automation | CREATE | influencer outreach automation | How-to: scaling creator communication | MOFU | Campaign Management → /services/outreach-management | BlogPosting, BreadcrumbList, FAQPage |
| 1158 | Influencer CRM | influencer-marketing-crm | CREATE | influencer marketing CRM | Informational/commercial: managing creator relationships | MOFU | Always-On Program → /services/ambassador-programs | BlogPosting, BreadcrumbList, FAQPage |
| 1159 | Influencer database | influencer-database | CREATE | influencer database | How-to: build and maintain brand-owned creator data | MOFU | Creator Discovery → /services/creator-discovery | BlogPosting, BreadcrumbList, FAQPage |
| 1160 | Influencer search tools | influencer-search-tools | CREATE | influencer search tools | How-to: find creators by niche, audience, location | TOFU/MOFU | Creator Discovery → /services/creator-discovery | BlogPosting, BreadcrumbList, FAQPage |
| 1161 | Discovery platforms | creator-discovery-platform | EXPAND | influencer discovery platforms | Comparison of creator-finding options | MOFU/BOFU | Creator Discovery → /services/creator-discovery | BlogPosting, BreadcrumbList, FAQPage |
| 1162 | Influencer marketing software | influencer-marketing-software | CREATE | influencer marketing software | Commercial: feature needs and buying | BOFU | Influencer Technology → /services/campaign-strategy | BlogPosting, BreadcrumbList, FAQPage |
| 1163 | Campaign management software | influencer-campaign-management-software | CREATE | influencer campaign management software | Commercial: ops software for growing teams | BOFU | Campaign Management → /services/outreach-management | BlogPosting, BreadcrumbList, FAQPage |
| 1164 | Analytics tools | influencer-analytics-tools | CREATE | influencer analytics tools | Commercial: reporting technology choice | MOFU | Campaign Measurement → /services/reporting | BlogPosting, BreadcrumbList, FAQPage |
| 1165 | Social listening | influencer-social-listening | CREATE | social listening for influencer marketing | Informational: finding creator opportunities from conversations | TOFU/MOFU | Creator Discovery → /services/creator-discovery | BlogPosting, BreadcrumbList, FAQPage |
| 1166 | Trend tracking | influencer-trend-tracking | CREATE | influencer trend tracking | Informational: spotting trends early enough to brief | TOFU | Campaign Planning → /services/social-campaigns | BlogPosting, BreadcrumbList, FAQPage |
| 1167 | Fraud detection tools | influencer-fraud-detection-tools | CREATE | influencer fraud detection tools | Informational/commercial: how tools flag suspicious creators | MOFU | Creator Selection → /services/creator-discovery | BlogPosting, BreadcrumbList, FAQPage |
| 1168 | Dashboard | influencer-marketing-dashboard | CREATE | influencer marketing dashboard | Informational: what to track in one view | MOFU | Campaign Measurement → /services/reporting | BlogPosting, BreadcrumbList, FAQPage |
| 1169 | Technology stack | influencer-marketing-technology | EXPAND (pillar) | influencer marketing technology stack | Informational/commercial: full operational stack | MOFU | Influencer Technology → /services/campaign-strategy | BlogPosting, BreadcrumbList, FAQPage |

All 20: target audience = brand marketers, founders, D2C/ecommerce and growth teams in India; topic cluster = Influencer Technology; publication status = published 2026-10-07 (1161 and 1169 updated 2026-10-07). Secondary keywords, related articles and inbound counts per URL are in `docs/blog-content-map.csv`.

### Intent split inside the cluster (cannibalization guard)

| Pair | How they differ |
| --- | --- |
| ai-influencer-matching vs creator-matching | Brand using AI scores (weights, testing, failure modes) vs how matching systems work (platform builders). Cross-linked. |
| ai-influencer-discovery vs creator-discovery-platform vs influencer-search-tools | AI search methods vs comparing discovery options vs manual/free search methods by niche, audience, location. |
| influencer-marketing-automation vs influencer-campaign-automation | What to automate and maturity (decision) vs how to build the workflows (implementation). |
| ai-influencer-campaign-management vs influencer-campaign-automation | AI reading/writing tasks vs rule-based triggers. |
| influencer-marketing-software vs influencer-campaign-management-software vs influencer-marketing-platforms | Feature priorities for any platform vs operations tooling for growing teams vs agency-vs-platform choice. |
| influencer-analytics-tools vs influencer-marketing-dashboard vs influencer-marketing-report | Choosing data sources/tools vs the live monitoring view vs the end-of-campaign document. |
| influencer-fraud-detection-tools vs how-to-identify-fake-followers | How automated tools work and fail vs manual signs. |
| influencer-social-listening vs x-social-listening | Cross-platform creator opportunities vs X specifically. |
| influencer-marketing-crm / influencer-database vs creator-crm / creator-talent-database | Brand side vs creator/agency side. |

## Backlinks added (older → new)

influencer-campaign-management → campaign automation, campaign management software · how-to-identify-fake-followers → fraud detection tools · how-to-vet-influencers → fraud detection tools, AI discovery · influencer-marketing-report → dashboard, analytics tools · influencer-marketing-kpis → dashboard · influencer-outreach-strategy → outreach automation, CRM · find-indian-influencers → search tools, AI discovery · creator-matching → AI matching · influencer-marketing-platforms → software, technology stack · x-social-listening → social listening · influencer-marketing-trends-2026 → AI influencer marketing, trend tracking · influencer-partnerships → CRM · creator-talent-database → influencer database · ai-influencers-vs-human-creators → AI influencer marketing · influencer-audience-quality → AI matching · influencer-marketing-governance → campaign automation, marketing automation · influencer-marketing-team-structure → technology stack · creator-crm → influencer marketing CRM.

## CTAs and analytics

- Exactly two CTAs per article via the existing components: `BlogMidCTA` (auto-placed at the section boundary nearest the middle, never after the intro or before the conclusion) and `BlogBottomCTA`. No CTA blocks were added to article bodies.
- CTA copy is hand-written per slug in `BRAND_GUIDE_CTAS`; Kudozz is described as an agency that works alongside tools, never as a software vendor.
- Analytics unchanged: `blog_mid_cta_click` / `blog_bottom_cta_click` (slug, category, topic, CTA type) and `blog_lead_form_start` / `blog_lead_form_submit` via the inquiry form's `src`, `cat`, `pos`, `t` params. New topic "Influencer Technology" pre-selects "Influencer Marketing" in the form (`TOPIC_TO_CAMPAIGN_GOAL`).

## Known limitations

- Word counts (body + FAQs, excluding the auto-inserted CTAs) are ~1,250–2,000 per page rather than 1,800–3,000. Pages are dense with tables, templates and checklists; they were not padded to hit a number.
- No third-party vendors are named, by design (consistent with `influencer-marketing-technology`'s existing policy). Platform-native tools are named and linked to official sources.
- Platform facts (marketplace availability, YouTube Creator Partnerships naming) should be re-checked at the next review; `lastReviewed` is "October 2026".
