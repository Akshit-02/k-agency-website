# 05 · Content Improvements Report

## 1. Changes to every service page (template level)

| Element | Before | After | File |
|---|---|---|---|
| H1 | `service.name` (e.g. "UGC Campaigns") | New `heroTitle` with the page's primary keyword and India positioning | `ServiceDetail.tsx`, `services.ts` |
| Eyebrow | "Service 07" | The service name (e.g. "UGC Campaigns"), so the short label stays visible above the keyword H1 | `ServiceDetail.tsx` |
| FAQ heading | "Questions about instagram influencer marketing." (lower-cased brand names) | "Questions about Instagram influencer marketing." The fix also covers YouTube and LinkedIn. | `ServiceDetail.tsx` (`sentenceCase`) |
| Title format | Inconsistent " — Kudozz" | " \| Kudozz" when it fits in 62 characters | `src/app/services/[slug]/page.tsx` |
| New optional section | — | **"What to look for in a … agency"**: buyer criteria next to how Kudozz handles each one. It covers the brief's "what to consider before choosing" and "why choose Kudozz" sections through checkable practices instead of claims. | `ServiceChoosing.tsx` (new) |

Template sections that already met the brief were left as they were: definition answer, "Who it's for", process ("How it works"), benefits, deliverables, comparison tables, "What we need from you", "How success is measured", markets, FAQ, guides, related services and enquiry CTAs.

## 2. Page-by-page content changes

| Page | Hero copy | "What to look for" section | New FAQs | Related services |
|---|---|---|---|---|
| Influencer marketing (pillar) | Rewritten: India, end-to-end scope, creator-by-creator reporting | 6 criteria: plan before a creator list, vetting evidence, separated fees, content rights, ASCI disclosure, KPI reporting | "How does influencer campaign management work at Kudozz?", "Is an agency better than contacting influencers directly?" | UGC marketing, social media, UGC production |
| UGC campaigns | Rewritten: "UGC marketing as a programme for brands in India" | 5 criteria: casting for delivery, rights in writing, testing plan, honesty about commissioned UGC, language range | "How do I choose a UGC marketing agency in India?", "Can brands use UGC videos in paid ads?" | Influencer marketing, UGC production, social media |
| UGC content production | Unchanged (already specific) | — | — | UGC marketing, influencer marketing, social media |
| Social media marketing & management (custom page) | H1 rebuilt as a single sentence (the eyebrow moved out of the H1). Hero paragraph adds India and UGC. | 6 criteria: strategy, written scope, platform-specific content, sustainable rhythm and approvals, decision-led reports, link to creators/UGC | "How do I choose a social media marketing agency in India?", "Is social media marketing the same as social media management?" (states that paid social is scoped separately) | Influencer marketing, UGC marketing, Instagram influencer marketing (was UGC production, social campaigns, Instagram) |
| Instagram | Unchanged | 4 criteria: audience data, formats by objective, partnership ads, disclosure | — | Pillar first |
| YouTube | Unchanged | 4 criteria: viewer match, format advice, live-duration terms, measurement | — | Pillar first |
| Regional | Unchanged | 4 criteria: audience location, original content per language, language coverage, local timing | — | Pillar first |
| Micro & nano | Unchanged | 4 criteria: vetting at scale, logistics, deal mix, one combined report | — | Pillar first |
| Product launches | Rewritten (also removes the em dash) | 4 criteria: lead time, embargo, launch-day coordination, after-launch reuse | — | Pillar first |
| Other 11 sub-services | Unchanged | — | — | Unchanged |
| `/services` hub | H1 lead line now "Influencer, UGC and social media marketing services in India" | — | — | — |

Word counts after the changes: pillar 1,463 → 1,805; UGC campaigns 836 → 1,161; Instagram 805 → 976; YouTube 797 → 954; regional 783 → 934; micro & nano 837 → 979; product launches 697 → 845; social media 4,621 → 4,999.

## 3. Content rules applied

- **Every "How Kudozz handles it" answer restates a practice already published on the site** (existing FAQ answers, process steps, the `/for-brands` "What happens next" list or the SMM scope). Examples: the ASCI disclosure wording comes from the existing pillar FAQ; the 4–6 week launch lead time from the existing launch FAQ; separated creator/agency fees from `/for-brands`; the regional language list from the existing regional description.
- **Not added:** client names, logos, testimonials, case studies, campaign volumes, engagement rates, revenue, ROAS, awards, certifications, years in business or market-leadership claims.
- **"Best"** appears only in titles, H1s and descriptions on the 8 agreed pages. It isn't used in body copy, section headings or structured data. The Service schema still uses the plain service name.
- **No duplicated blocks:** the "What to look for" content is written per page, and no criterion text is repeated across pages. There's no shared "Why Kudozz" boilerplate.
- **Paid social:** never described as included. "Social media marketing" copy says it's scoped separately.

## 4. Recommended but not implemented

| Recommendation | Why not now |
|---|---|
| Add "What to look for" sections to `ambassador-programs` (592 words), `reporting` (649) and `social-campaigns` (684), the thinnest pages | No search demand yet. Better to wait for GSC data than to pad the pages. |
| Add real proof (2–3 case studies with permission) to the pillar, UGC and SMM pages | Needs genuine client material. This is the strongest remaining lever for "best" queries. |
| Retitle `/for-brands` around enquiry intent | Outside the service-page scope |
