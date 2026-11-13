# 09 · AEO and GEO Audit

**Framework:** claude-seo `seo-geo` (v2.6.0) criteria: citability, structural readability, multi-modal, authority and brand signals, technical accessibility. Following that skill and Google's AI optimisation guidance, GEO is treated as **SEO fundamentals applied to AI search surfaces**, not a separate discipline. No AI citation tracking tool is configured, so **this report doesn't claim any ChatGPT, Gemini, Perplexity or AI Overviews citations**, and nothing here promises them.

## Evidence from Search Console

Google reports AI Overviews and AI Mode traffic inside the normal web search data, without a separate filter in this export. One pattern is visible: **105 conversational, prompt-like queries** (8+ words) gave Kudozz 3,636 impressions and 11 clicks. Examples:

| Query | Impr | Avg pos |
|---|---|---|
| plan a creative content strategy to grow a youtube shorts channel | 315 | 7.4 |
| how long can brands use creator content in paid ads | 146 | 9.2 |
| questions to ask before signing with an influencer marketing platform | 78 | 3.6 |
| whitelisting creator content for paid ads how does it work | 70 | 2.4 |
| how do agencies generate profit when managing live content creators? | 68 | 2.9 |
| best agency for influencer and creator marketing in india | 59 | **1.9** |
| how do brands manage influencer campaigns from start to finish? | 51 | 7.3 |

These look like AI Mode or assistant-style prompts. Kudozz pages already rank well for several of them, but CTR is near zero, which is normal for answer surfaces. **Measure GEO by impressions and positions on these queries, and by branded search growth, not by CTR.**

## Scorecard (qualitative, claude-seo criteria)

The skill's weights (25/20/15/20/20) are a prioritisation heuristic, not a citation model, so no numeric score is given.

| Criterion | Assessment | Evidence |
|---|---|---|
| **Citability** | Strong | 1,058 of 1,070 articles open with a "Quick answer" section; every service page has a 40–70-word answer block under the hero ("What is creator discovery?" → "Creator discovery is…"); claims are attributed to named primary sources (ASCI, Meta Help Centre, Ofcom, ACCC) with dates |
| **Structural readability** | Strong | One H1 per page (crawl: 1,154/1,154); question-style H2s; tables and lists throughout; 1,049 of 1,070 articles have visible FAQs |
| **Multi-modal** | Moderate | 18 interactive calculators and checklists (`/tools`, embedded in articles) are a real asset. Few real images: article heroes are mostly category graphics. No video |
| **Authority and brand signals** | **Weak** | All 1,070 articles are by teams ("Kudozz Strategy Team"), with no named people; no case studies or client proof; social presence limited to Instagram and LinkedIn (no YouTube); no Wikipedia or Wikidata entity; `sameAs` lists 2 profiles. "Last reviewed" dates exist on fact-heavy articles (good) |
| **Technical accessibility** | Strong | Server-rendered HTML (2,367 words visible without JavaScript on the homepage); `robots.txt` allows all crawlers, including AI search crawlers (OAI-SearchBot, Claude-SearchBot, PerplexityBot) through `*`; `/llms.txt` present and accurate. claude-seo gives llms.txt **no weight**; Google says it doesn't use it |

## Entity clarity

How clearly Kudozz explains who it is, before and after this project:

| Signal | Before | After |
|---|---|---|
| Homepage title / H1 | "Best Influencer Marketing Agency in India" (unverifiable superlative) | "Influencer Marketing & Social Media Agency in India", a factual category statement that matches Organization `description` and `llms.txt` |
| Service relationships | Influencer marketing had no page of its own; the three service areas were only explained on the hub | `/services/influencer-marketing` defines the service, lists its 16 parts, and has a comparison table separating influencer marketing, UGC and social media management |
| Agency-ranking pages | 38 shortlists ranked Kudozz first with no statement that Kudozz publishes them | All carry a publisher disclosure, which makes the content more trustworthy to readers and to systems that judge sources |
| Structured data | Organization (`@id`), WebSite, WebPage, Service, BlogPosting, BreadcrumbList, FAQPage | Same, plus a stable `@id` on every Service node, and `<` escaping in JSON-LD |
| `llms.txt` | Accurate, cautious, 536 lines | Adds the pillar page under Core Services and Key Pages; positioning line no longer says "best" |

## Recommendations (ranked)

1. **Named authors (owner input).** Add 2–4 real people (founder, strategy lead, partnerships lead) with short bios, LinkedIn links and a Person schema node, and attribute new and refreshed articles to them. This is the biggest E-E-A-T gap. Never invent people.
2. **Proof Kudozz can publish.** Case studies, anonymised sample reports and shortlist formats are original material that answer engines can cite and competitors can't copy.
3. **Brand mentions off-site.** The toolkit's evidence base (Ahrefs, 75,000 brands, Dec 2025; a correlation, not causation) shows YouTube, Reddit and LinkedIn mentions track AI visibility far more than backlinks. Practical steps: a YouTube channel repurposing the calculators and guides, founder posts on LinkedIn, genuine participation in relevant Reddit communities (no astroturfing), and listing on credible agency directories.
4. **Wikidata entity** for Kudozz Studios Private Limited, once there are independent sources to reference. Don't create a Wikipedia article without notability.
5. **Original data.** One small annual study (for example, anonymised campaign benchmarks from Kudozz's own work, with method stated) would give the site something unique to be cited for.
6. **Keep answer-first structure** on refreshes, and keep "last reviewed" dates honest. Update only when facts change.
7. **Optional:** add named AI-crawler groups and a `Content-Signal` line in `robots.txt` if Kudozz wants to allow AI search but not training. That's a policy decision; the current allow-all is fine for visibility.

## What was implemented

- Pillar service page with an answer-first definition, deliverables, process, comparison table and sub-service map.
- Homepage entity framing without the superlative.
- Publisher disclosure on 38 agency shortlists.
- Service `@id`s and JSON-LD escaping.
- `llms.txt` updated (pillar page, positioning line).
- Metadata on Instagram help-style pages rewritten to match how people (and assistants) phrase those questions.
