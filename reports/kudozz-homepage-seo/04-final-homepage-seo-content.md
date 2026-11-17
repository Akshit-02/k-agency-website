# 04 · Final Homepage SEO Content

This is the live copy as implemented (source of truth: the files listed). Section numbers follow the brief.

| # | Brief section | Component | Heading (level) |
|---|---|---|---|
| 1 | Hero | `Hero.tsx` | H1 |
| 2 | Agency introduction | `ServiceAreas.tsx` + `serviceAreas` in `content/home.ts` | H2 + 3 × H3 cards |
| — | (kept) Why creator-led marketing, with sourced stats | `WhyInfluencer.tsx` | H2, unchanged |
| 3 | Influencer marketing services | `WhatWeDo.tsx` | H2 + service rows |
| 4 | UGC marketing | `HomeUgc.tsx` (**new**) | H2 + 5 × H3 |
| 5 | Social media marketing and management | `HomeSocial.tsx` (**new**) | H2 + 5 × H3 |
| 6 | Why brands choose Kudozz | `WhyKudozz.tsx` + `reasons` | H2 + 6 × H3 |
| 7 | Industries | `TrustBar.tsx` | H2 (promoted from a label) |
| 8 | Our process | `HowItWorks.tsx` | H2 + 5 × H3 |
| — | (kept) India coverage, global markets, creator network | unchanged | H2 each |
| 9 | FAQ | `homeFaqs` + `FAQSection` | H2 + 12 × H3 |
| 10 | Final enquiry CTA | `FinalCTA` props in `page.tsx` | H2 |

---

## 1. Hero
**Eyebrow (not a heading):** For D2C, e-commerce and consumer brands
**H1:** India's influencer, UGC and social media marketing agency for *growing brands.*
**Paragraph:** Kudozz helps brands work with the right creators, produce UGC videos they can run in ads and on product pages, and keep a consistent presence on social media, with every engagement planned around your objective and reported against it.
**CTAs:** Let's Grow Your Brand → `/for-brands?src=homepage&…&pos=hero#inquiry` · Explore Our Services → `#service-areas`
**Facts row (unchanged):** 3 connected service areas · 1 KPI agreed before launch · Pan-India creator sourcing · Nano–Macro creator tiers

## 2. Agency introduction
**H2:** A creative marketing partner for brands that want to grow.
Kudozz is an influencer marketing, UGC and social media marketing agency in India. Hire us for one service or all three: creators introduce your brand to new audiences, UGC gives you videos to run in ads and on product pages, and your own social media gives people a reason to stay.
Whether you need a launch campaign, a steady supply of ad creative or someone to run your accounts every month, the work follows the same order: a strategy tied to your business goal, execution handled by one team, and reporting that shows what worked.

| Card (H3) | Body | Link anchor → URL |
|---|---|---|
| Influencer Marketing | Creator campaigns planned around one agreed KPI, with creators vetted for audience fit and managed from outreach to reporting. | Influencer marketing services for brands → `/services/influencer-marketing` |
| UGC Marketing & Content | Creator-made videos your brand owns and runs in ads, on product pages, on marketplaces and in its own feed. | UGC content creation services → `/services/ugc-content-production` |
| Social Media Marketing & Management | Strategy, content and publishing for your brand's own accounts, with community management and a monthly report on what to change. | Social media management for growing brands → `/services/social-media-management` |

Brand/creator split: "Need creators, UGC, social media or all three?" → enquiry; "Want to be considered for brand collaborations?" → creator application.

## 3. Influencer marketing
**H2:** Influencer marketing services that connect brands with the right creators.
Influencer marketing is where Kudozz started. As an influencer marketing agency in India, we plan the strategy, find and select creators whose audiences match your customers, handle outreach and negotiation, coordinate briefs, approvals and publishing, and track performance against the goal we agreed. Hire us for end-to-end influencer campaign management or for the one piece your team can't cover.
Buttons: Explore Influencer Marketing Services → pillar · View All Services → `/services`. Service rows: strategy, discovery, outreach & management, reporting. Category lists: campaign types, platforms, audiences. The UGC category moved to section 4.

## 4. UGC marketing
**H2:** UGC marketing that turns authentic creator content into brand assets.
Brands use UGC videos because they look and sound like a real person talking about a product, not an advert. Kudozz works as a UGC content creation agency: we brief UGC creators across India, manage the shoots and deliver edited videos your brand can run in ads, on product pages, on marketplaces and in its own feed.

**Callout, "Commissioned, not collected":** "UGC" originally meant content customers post on their own. Most UGC used in marketing today is commissioned: brands pay creators to make it in that same style. That's what Kudozz produces. It's paid creator content, so it should be treated as advertising and never passed off as an unprompted customer review.

H3s: UGC strategy and briefs · UGC creator sourcing · Product demos and short-form video · Ad-ready creative · Usage rights agreed up front
Links: See UGC Content Creation → `/services/ugc-content-production`; Ongoing UGC Campaigns → `/services/ugc-campaigns`; "how UGC marketing works for brands" → `/blog/what-is-ugc-marketing`; "what UGC videos cost in India" → `/blog/ugc-content-cost-india`

## 5. Social media marketing and management
**H2:** Social media marketing that gives your brand a consistent *presence.*
Kudozz is also a social media marketing and management agency for brands whose own accounts have drifted: posting when someone finds time, with no plan behind it. We run your brand's accounts month by month, and because we also run your creator campaigns, launches, creator posts and your own content come from one calendar.
Platforms we plan for: Instagram, Facebook, LinkedIn, YouTube, Pinterest, X, Snapchat (as listed in the SMM service FAQ). *Most brands do better on two or three platforms run well. Paid social advertising is scoped separately.*
H3s: Social media strategy · Content planning · Social media content creation · Publishing and community management · Analytics and reporting
Links: Explore Social Media Management → `/services/social-media-management`; "what social media management costs in India" → `/blog/social-media-management-cost-india`; "how to choose a social media agency" → `/blog/choose-social-media-management-agency`

## 6. Why brands choose Kudozz
**H2:** Why brands choose Kudozz.
Doing this in-house means finding creators, checking their audiences, negotiating, chasing drafts, keeping your own accounts posting and building reports. Here is how we work, whether you hire us for creators, UGC, social media or all three.

| H3 | Link |
|---|---|
| A strategy before any creator list or calendar | Campaign strategy |
| Creators chosen for your audience, not their follower count | How we find and vet creators |
| One team runs the whole campaign | Influencer campaign management |
| Content made for each platform | UGC video production |
| Your social media and creator work on one calendar | Social media management |
| Reporting you can take to your CFO | Campaign reporting |

Every claim describes a working practice already documented on a service page. There are no numbers, awards, logos or testimonials.

## 7. Industries
**H2:** Industries we plan campaigns for.
Kudozz plans creator, UGC and social media work for D2C and e-commerce brands, consumer brands, and fintech, app and B2B companies. Each category has its own creators, rules and buying cycle; these guides explain how creator marketing works in each one.
There are 11 chips, each linking to an existing industry guide (unchanged list, shared with `/for-brands` and `/about`).

## 8. Process
**H2:** How we work, from first call to final report. *The same five steps whether you hire us for an influencer campaign, a UGC batch or monthly social media.*
1. **Understand Your Brand:** business objective, customers and category, and the one KPI that will define success.
2. **Build the Strategy:** the mix of creators, UGC and your own channels, with platforms, formats and budget mapped to the KPI.
3. **Find Creators and Content:** a creator shortlist with a reason for every name, plus the content your channels and ads need.
4. **Plan and Execute:** outreach, contracts, briefs, approvals and publishing.
5. **Track, Analyse, Report:** reporting against the KPI, plus a plain-language debrief.

## 9. FAQ (H2 "Questions brands ask before choosing an agency.")
1. What does an influencer marketing agency do?
2. How do I choose an influencer marketing agency in India?
3. What services does Kudozz offer?
4. What is the difference between influencer marketing and UGC marketing?
5. How does a UGC marketing agency help brands?
6. What does a social media marketing agency handle?
7. Can brands use influencer marketing and UGC together?
8. Which social media platforms can brands use for influencer campaigns?
9. How do you measure influencer marketing campaign performance?
10. How much does influencer marketing cost in India?
11. Does Kudozz run influencer campaigns outside India?
12. How can a brand get started with Kudozz?

Full answers are in `src/content/home.ts`. Answer 12 mirrors the "What happens next" steps on `/for-brands` (reply within one business day → call → written plan with creator and agency fees shown separately).

**Removed from the old FAQ**, because a section now covers them: "Does Kudozz manage brand social media accounts?", "Can Kudozz run our social media and influencer campaigns together?", "Does Kudozz work with brands and creators across India?", "Can Kudozz run regional-language influencer campaigns?", "What types of brands work with Kudozz?" and "Can Kudozz manage an influencer campaign from start to finish?" (merged into Q1).

## 10. Final CTA
**H2:** Ready to build a stronger presence for your brand?
Tell us what you need: an influencer campaign, a batch of UGC videos, ongoing social media marketing or a mix of all three. We'll come back with a point of view and a suggested plan before we talk fees.
Buttons: Let's Discuss Your Brand → enquiry (`pos=bottom`) · Join Our Creator Network.

## Claims audit
No testimonials, client names, logos, campaign results, award claims, years in business, creator counts or guarantees were added. The only third-party figures on the page are the existing IAB/ASCI statistics in `WhyInfluencer`, each with a cited source. "Best" appears only in the title (owner decision) and in the description, as a question.
