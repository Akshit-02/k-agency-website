# 08 — Article Source References

Compiled from the five writers' research logs (November 2026), then checked by the lead editor against the published article text (see "Editor's verification" at the end).

**Source policy applied:** official or primary sources only for platform and legal claims (Meta, Instagram, Facebook, LinkedIn, YouTube and Google help centres and developer docs, PIB/MeitY, CERT-In, ASCI). No other agency's blog is cited for any claim. Where an official page couldn't be read in full (Meta help pages often render client-side), the claim was either confirmed from the official page's indexed text and dated "at the time of writing", or dropped. **No statistics are used anywhere in the batch.**

External URLs are kept in the article data for the record. Under the site's outbound-link policy (`src/lib/links.ts`) they render as plain text, not live links.

---


## File: src/content/brand-guides/smm-hiring.ts

### Sources log: smm-hiring.ts (Writer A)

File: src/content/brand-guides/smm-hiring.ts (export `smmHiringPosts`)
Hero SVGs: public/blog/brand-guides/{choose-social-media-management-agency,in-house-vs-outsourced-social-media-management,social-media-management-cost-india,social-media-agency-brief}.svg

## 01 choose-social-media-management-agency

| URL | Publisher | Published / updated | Accessed | Claim supported |
|---|---|---|---|---|
| https://www.facebook.com/business/help/1717412048538897 | Meta Business Help Centre ("Give a Partner Access to Business Assets in Your Business Portfolio") | undated | Nov 2026 | A Meta business portfolio lets you give a partner business access to your assets (so no shared login is needed). Only the existence of the feature is claimed; no menu steps. |
| https://www.linkedin.com/help/linkedin/answer/a541981 | LinkedIn Help ("LinkedIn Page admin roles") | undated | Nov 2026 | LinkedIn Page admin roles are Super admin, Content admin and Analyst (stated "at the time of writing (November 2026)"); Content admin manages posts; Super admin manages admins. |

Internal: /services/social-media-management#scope, /for-brands, /blog/in-house-vs-outsourced-social-media-management, /blog/social-media-agency-brief, /blog/social-media-management-cost-india, /blog/outsourcing-social-media-management-checklist, /blog/choose-influencer-marketing-agency-india, /blog/influencer-marketing-agency-checklist.

## 02 in-house-vs-outsourced-social-media-management
No external sources (operating-model guidance and opinion, no statistics, no salary figures).
Internal: /services/social-media-management#process, /blog/social-media-management-cost-india, /blog/influencer-marketing-agency-vs-in-house, /blog/choose-social-media-management-agency, /blog/outsourcing-social-media-management-checklist.

## 03 social-media-management-cost-india
No external sources. No prices, averages or ranges.
GST: tried to verify the current rate for advertising/marketing agency services from CBIC (cbic-gst.gov.in). Searches returned only third-party sites (taxmann, cleartax, studycafe, kanakkupillai etc.) that conflict on SAC codes and refer to Notification 11/2017-CT(Rate) as amended by 15/2025-CT(Rate) effective 22 Sep 2025; could not confirm the entry on an official page. Per spec, the article only says GST applies, asks for it as a separate line, and says to confirm the rate and input tax credit with an accountant/CA. No rate stated.
Internal: /services/social-media-management#scope, /for-brands, /blog/influencer-marketing-agency-fees-india, /blog/organic-vs-paid-social-media, /blog/social-media-agency-brief, /blog/choose-social-media-management-agency.

## 20 social-media-agency-brief
No external sources.
Internal: /services/social-media-management, /for-brands, /blog/social-media-management-cost-india, /blog/social-media-audit, /blog/influencer-marketing-agency-brief, /blog/influencer-marketing-rfp, /blog/choose-social-media-management-agency.

## Existing Kudozz articles checked for overlap
- influencer-marketing-agency-vs-in-house (blog.ts): influencer programme ops; 02 is about the social media team and cross-links it.
- choose-influencer-marketing-agency-india (blog.ts), influencer-marketing-agency-checklist, influencer-marketing-agency-pitch-questions (brand-guides/agency-selection.ts): influencer agency selection; 01 covers SMM-specific criteria (workflow, community hours, reporting, access roles) and links to them.
- influencer-marketing-agency-fees-india (agency-selection.ts): influencer agency pricing models; 03 covers SMM cost drivers only, links to it.
- influencer-marketing-agency-brief and influencer-marketing-rfp (agency-selection.ts): campaign/creator-centred briefs and formal RFP; 20 is an ongoing-operation brief, links to both.
- influencer-agency-vs-freelancer, ugc-content-cost-india, influencer-marketing-cost-india: used as related slugs only.
- hire-social-media-manager-creator: creator-side, not linked.

## File: src/content/brand-guides/smm-operations.ts

### Sources log: smm-operations.ts (Writer B)

All accessed November 2026 (11 Nov 2026).

## 04 social-media-management-agency-first-90-days
No external sources. No statistics. Timings in the milestones table are presented explicitly as a suggested template, not an industry standard. Scope claims (shoots scoped separately, community management within agreed scope, monthly reporting) taken from src/content/social-media-management.ts.

Overlap checked: influencer-campaign-first-90-days (creator campaign; cross-linked), influencer-marketing-agency-onboarding (influencer agency prep), influencer-campaign-kickoff.

## 05 outsourcing-social-media-management-checklist
| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://www.facebook.com/business/help/1717412048538897 | Meta Business Help Center, "Give a Partner Access to Business Assets in Your Business Portfolio" | undated | Only people with full control of a business portfolio can add partners; partner identified by its business portfolio ID; full control vs partial access; partial access covers specific tasks such as creating content, managing ads and responding to messages. Page body did not render in WebFetch; verified via Meta's own search-indexed text. |
| https://en-gb.facebook.com/business/help/2222659621282858 | Meta Business Help Center, "Remove partners from your Facebook Business Manager" | undated | Removing a partner revokes permissions to assets that were granted (used in offboarding list; not linked in article). |
| https://www.linkedin.com/help/linkedin/answer/4783 | LinkedIn Help, "LinkedIn Page admin roles" | undated | Page admin roles super admin, content admin, analyst; content admins create and manage Page content; super admins can add and remove any type of admin. |
| https://support.google.com/youtube/answer/9481328?hl=en | YouTube Help, "Add or remove access to your YouTube channel with channel permissions" | undated | Permissions as safer than sharing password; roles Manager, Editor, Editor (limited), Subtitle editor, Viewer, Viewer (limited); Editor can upload/publish but can't manage permissions or delete content/channel; limited roles hide revenue; Settings > Permissions; invitations expire after 30 days; remove access from same screen. |
| https://www.ascionline.in/the-asci-code/ (Code text: https://www.ascionline.in/wp-content/uploads/guidelines/ASCI_Codes_Guidelines_Book.pdf) | Advertising Standards Council of India | undated (current Code) | Chapter I: advertisements must be truthful; claims about objectively ascertainable fact should be capable of substantiation; advertisers and agencies must produce substantiation when called upon by ASCI. |
| https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&reg=3&lang=2 | Press Information Bureau (MeitY) | November 2025 | Government notified DPDP Rules, 2025 (14 Nov 2025 per PIB backgrounder; one PIB item says 13 Nov, so article says only "November 2025") with an 18-month phased compliance period. DPDP Act, 2023 named as the governing Act. |

Overlap checked: influencer-marketing-agency-onboarding, influencer-marketing-agency-checklist, ugc-content-usage-rights (linked). Sister scope boundaries: links 20 (brief), 04, 06.

## 06 social-media-content-approval-process
| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://www.ascionline.in/the-asci-code/ | ASCI | undated | Advertising must be truthful; factual claims must be capable of substantiation. |

Turnaround times are framed as "the timings we suggest to brands, not industry benchmarks". No statistics.
Overlap checked: influencer-content-approval (creator content; cross-linked), creator-brand-revisions (creator-side), influencer-campaign-automation, influencer-marketing-healthcare-brands-india (linked).

## 08 social-media-content-workflow
No external sources. Capacity example is explicitly hypothetical with illustrative hours. No statistics.
Overlap checked: creator-content-workflow and creator-production-team (creator-side), ugc-production-workflow (cross-linked), influencer-campaign-calendar, influencer-marketing-operations.

## Facts dropped (could not verify or out of scope)
- Exact current Meta Business Suite menu path for partner access and partner removal (Meta help pages didn't render; article says menu names change and to follow the current help article).
- Instagram-specific standalone access steps outside Meta Business Suite (left general).
- Whether LinkedIn requires a Page to keep at least one super admin (sources disagree; article only recommends keeping two internal super admins as practice).
- Sector-specific rules for health/finance posts (e.g. SEBI, drugs and remedies law): not stated; articles say sector regulators can add rules and defer to legal/compliance.
- DPDP obligation-by-date schedule: not stated beyond "18-month phased compliance".

## File: src/content/brand-guides/smm-consistency.ts

### Sources log: smm-consistency.ts (Writer C)

All accessed November 2026 (11 Nov 2026). Meta Business Help pages render client-side; WebFetch returned only titles, so their content was confirmed from search-engine extracts of the official facebook.com pages (no third-party summaries relied on for claims).

## 07 social-media-brand-voice
| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://www.ascionline.in/social/guidelines/ | Advertising Standards Council of India | Guidelines effective 14 Jun 2021; consolidated version applicable from 1 Sep 2023 | Paid or gifted creator content needs a clear disclosure label (used for "keep disclosure intact" when reposting creator content) |

No statistics used. Brewline and Ledgerly are labelled hypothetical.

## 09 social-media-management-multiple-locations
| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://www.facebook.com/business/help/167222830549113 | Meta Business Help Centre ("About stores on Facebook") | undated | Stores are for businesses with multiple physical locations; setting up stores creates a Page structure with a main Page and a store Page per location; map of locations on main Page |
| https://www.facebook.com/business/help/1656255721308266 | Meta Business Help Centre ("About posts within a Page structure") | undated | Main Page posts can be published to store Pages; automatic sharing stops by default once a store Page publishes its own post; only main Page admins manage posts on store Pages |
| https://www.facebook.com/business/help/293042287781370 | Meta Business Help Centre ("Manually add and edit stores") | undated | Stores added from Store Locations; admin or editor rights on main Page required |
| https://www.facebook.com/business/help/783016505141610 and /188216008202418 | Meta Business Help Centre (store Page names; location descriptor) | undated | Store Pages share the main Page name; location descriptor defaults to city; article applies to classic Pages experience |
| https://www.facebook.com/business/help/905034079579176 | Meta Business Help Centre ("Global Pages") | undated | Global Pages are for regions/languages, not physical locations |
| https://support.google.com/business/answer/4490296?hl=en | Google Business Profile Help ("Verify Business Profiles in bulk") | undated | 10+ profiles for the same business can bulk verify via Business Profile Manager; agencies with more than one business in one account can't; business groups: when main owner verified, eligible profiles in group are too |
| https://support.google.com/business/answer/3403100?hl=en | Google Business Profile Help ("Manage your Business Profile owners & managers") | undated | Owners and managers can reply to reviews; only owners add/remove users |

Not verified, so stated as such: no Instagram equivalent of store Pages found in Meta help at time of writing (article says "we couldn't find").

## 10 franchise-social-media-management
| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://www.facebook.com/help/289207354498410 | Facebook Help Centre ("About Facebook Page access") | undated | Full control vs partial (task-based) access; people with full control can remove anyone; a Page must have at least one person with full control (also Meta Business Help 152071822895768, 273201236806115) |
| https://support.google.com/business/answer/3403100?hl=en | Google Business Profile Help | undated | Owners vs managers; both reply to reviews; only owners add/remove users; primary owner can't be removed until ownership transferred |
| https://www.ascionline.in/social/guidelines/ | ASCI | as above | Disclosure if franchisees host local creators |

Agreement section framed as questions for a lawyer; no Indian franchise law claims made.

## 16 social-media-content-repurposing
| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://creators.instagram.com/faq?locale=en_US | Instagram for Creators FAQ | undated | Instagram encourages original content for best reach; less likely to recommend reposts of a reel already on Instagram or content with noticeable watermarks; advises removing third-party watermarks from Reels |
| https://creators.facebook.com/blog/combating-unoriginal-content | Facebook for Creators blog | 14 Jul 2025 | Aimed at accounts reusing others' content; you can share the same content across your own Pages/profiles; stitching clips or adding a watermark is not meaningful enhancement |

Practice (not policy) is labelled as such: clean exports, avoiding identical reposts, auto cross-posting caveat.

## Facts dropped (couldn't verify from primary source)
- Exact Instagram policy start date for the 2026 originality changes (only secondary coverage).
- Any Instagram multi-location/store account feature.
- Pinterest recommended pin aspect ratio and YouTube Shorts length limits (left out rather than stated).
- BIS IS 19000:2022 online reviews standard (verified on PIB, but its current mandatory/voluntary status is unclear, so left out of the franchise reviews section).
- Meta's March 2026 claim that views of original Reels roughly doubled (statistic, not needed).

## Existing Kudozz articles checked for overlap
- repurpose-influencer-content (creator assets; 16 limited to brand-owned content and cross-links it)
- influencer-usage-rights, ugc-content-usage-rights (linked for rights; not repeated)
- influencer-brand-consistency (creator briefing side; 07 links it, covers own-feed voice)
- franchise-influencer-marketing-gcc (creator campaigns for franchises in GCC; 10 covers governance and links it)
- regional-influencer-marketing-india, restaurant-cafe-influencer-marketing-india, retail-influencer-marketing-india (linked/related, different scope)
- content-repurposing-for-creators (creator-side; not linked, different audience)
- influencer-campaign-comment-management (creator campaign comments; 09 links sister 11 instead)

## File: src/content/brand-guides/smm-listening.ts

### Sources log: smm-listening.ts (Writer D)
All accessed November 2026 (11 Nov 2026).

## 11 community-management-vs-customer-support
- https://www.facebook.com/help/297845860255949 | Meta (Facebook Help Centre), "Hide a comment from a post on your Facebook Page" | undated | Claim: a hidden Page comment stays visible to the person who wrote it and their friends.
- https://help.instagram.com/700284123459336 | Instagram Help Centre, "Hide comments or message requests you don't want to see" | undated | Claim: Hidden Words can automatically filter comments with offensive terms. (Page is JS-rendered; content verified via Instagram help-centre search snippets.)
- https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf | Press Information Bureau, Government of India, "DPDP Rules, 2025 Notified" backgrounder | 17 Nov 2025 | Claims: DPDP Rules notified November 2025; eighteen-month phased compliance; principles incl. purpose limitation, data minimisation, security safeguards. Text extracted from the PDF directly.
- Internal (Kudozz scope): src/content/social-media-management.ts, community-management capability note (customer support, complaint resolution, 24/7 moderation are separate).

## 12 social-media-crisis-management-plan
- https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf | CERT-In (MeitY), Directions under section 70B(6) of the IT Act | 28 Apr 2022 | Claims: service providers, intermediaries, data centres, body corporates and government organisations must report Annexure I incidents within 6 hours of noticing; Annexure I includes "Data Breach" and "Unauthorised access to social media accounts". Text extracted from the official PDF. No later amendment found; article tells readers to check current obligations with counsel.
- https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf | PIB | 17 Nov 2025 | Claims: Data Fiduciary must inform affected individuals of a personal data breach; Board notification (penalty clause references notifying the Board or affected individuals); eighteen-month phased compliance.
- Status check (not cited in article): law-firm and news reports (Jan to Apr 2026) say MeitY consulted on shortening the 18-month window to 12 months; no notified amendment found. Hence "check current legal obligations with counsel" and no specific DPDP breach deadline (72 hours) stated.
- Internal: Kudozz scope lists crisis communication as scoped separately.

## 13 social-listening-for-brands
- No external sources cited. Tool coverage described as categories only; no vendor named, no feature claims. Platform API-access limits stated as general practice. DPDP mentioned generally with "check obligations with counsel".

## 14 social-media-audit
- https://help.instagram.com/788388387972460 | Instagram Help Centre, "About Instagram insights" | undated | Claim: insights include views, interactions and follower changes (verified via help-centre search snippets; page is JS-rendered).
- https://help.instagram.com/1407497629635879/ | Instagram Help Centre, "Select a date range for your account insights" | undated | Claim: date ranges cover up to the past 90 days (via help-centre search snippets).
- https://www.linkedin.com/help/linkedin/answer/a551206/ | LinkedIn Help, "Export your LinkedIn Page analytics report" | undated | Claim: Page admins can export visitor, content, follower, competitor (and leads, employee advocacy) analytics as XLS.
- https://support.google.com/youtube/answer/9717005 | YouTube Help, "Learn how to use Advanced mode for analytics reports" | undated | Claim: reports can be exported from Advanced mode in YouTube Studio.
- https://www.facebook.com/help/794890670645072 | Facebook Help Centre, Page Insights topic | undated | Claim: help centre covers exporting Page insights data.
- https://www.ascionline.in/wp-content/uploads/2023/08/GUIDELINES-FOR-INFLUENCER-ADVERTISING-IN-DIGITAL-MEDIA.pdf | ASCI, Guidelines for Influencer Advertising in Digital Media | 2021 guidelines (PDF uploaded Aug 2023) | Claims: upfront, prominent disclosure label required where a material connection exists; responsibility shared by advertiser and influencer.

## Existing Kudozz articles checked for overlap
- influencer-campaign-comment-management (gcc-guides/gcc-performance.ts): creator-post comment ownership; 11 covers brand-account community vs support. Cross-linked.
- influencer-marketing-brand-safety (blog.ts): creator vetting and reputation; 12 covers brand-wide crisis response. Cross-linked.
- creator-crisis-communication / creator-crisis-management: creator-side; not linked.
- x-social-listening (blog.ts) and influencer-social-listening (technology-insights.ts): X-only and creator-finding; 13 cross-links both.
- influencer-sentiment-analysis, customer-insights-influencer-brief: linked from 13.
- influencer-marketing-audit (founder-final.ts): programme audit; 14 cross-links. content-performance-audit (creator-side) not linked.
- influencer-marketing-data-privacy, ugc-content-usage-rights, influencer-disclosure-rules-by-country: linked as supporting reads.

## File: src/content/brand-guides/smm-performance.ts

### Sources log: smm-performance.ts (Writer E)

File: src/content/brand-guides/smm-performance.ts (export `smmPerformancePosts`). All accessed November 2026.

## 15 choose-social-media-platforms-for-business

| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://pib.gov.in/PressReleasePage.aspx?PRID=1635206 | Press Information Bureau, Ministry of Electronics & IT | 29 June 2020 | MeitY blocked 59 apps (TikTok first in appendix) under Section 69A of the IT Act read with the 2009 Blocking Rules. Text read in full via download. |
| https://www.newsonair.gov.in/no-order-issued-to-lift-ban-on-tiktok-in-india-govt | All India Radio News (Prasar Bharati, govt) | 23 August 2025 | "The government yesterday clarified that no order has been issued to lift the ban on TikTok in India"; MeitY sources called unblocking claims "false and misleading"; followed reports the website homepage was accessible. |

- "At the time of writing (November 2026) we have found no official notice reversing it": based on no newer official source found; phrased as absence of evidence, not a claim.
- Platform user figures: none used.
- Matrix, content-demand table, checklist: practice/opinion, framed as "common practice", not platform facts. Consistent with src/content/social-media-management.ts platform roles.

## 17 organic-vs-paid-social-media

| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/partnership-ads/ads-creation | Meta for Developers | undated | Partnership ads "allow you to run ads with creators, brands, and other businesses"; header shows brand and partner accounts; creator permission at account level or post level required. |
| https://creators.instagram.com/earn-money/partnership-ads | Instagram (Meta) | undated (© 2026) | Brand funds the ad spend; Reels, Stories, static posts and carousels can run as partnership ads. |
| https://www.facebook.com/business/help/317083072148603 | Meta Business Help Center | undated | Page titled "The difference between boosted posts and Meta ads" exists. **Body text could not be fetched (login wall).** |

Flagged / softened:
- Boost vs Ads Manager description ("boosting turns an existing post into an ad with simplified choices; Ads Manager gives more control over objectives, audiences, placements, creative") is NOT verified from Meta's page text; only corroborated by multiple third-party sources (Hootsuite, Metricool help, GoDaddy help). Softened: kept "in broad terms", removed "billed through the same ad account", added "the available options change, so check Meta's page before deciding".
- Removed "(formerly branded content ads)": only seen in a search snippet of an Instagram help page, not fetched.
- Removed an FAQ claiming Meta documents no organic-reach penalty for boosts and that insights split boosted results: not verified. Replaced with a reasoning-only FAQ on test budgets (no figures).
- Meta's reported partnership-ads performance figures (lower CPA / higher CTR, seen in secondary coverage) deliberately NOT used.
- Kudozz scope statement (organic only; paid ads and budgets scoped separately) matches smmScopedSeparately in src/content/social-media-management.ts.

## 18 social-media-kpis

| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://creators.facebook.com/introducing-views-to-simplify-content | Meta for Creators | 14 November 2024 | Views = number of times a reel or video was played or photo/text posts were on screen; replaces Plays (reels/video) and Impressions (Stories, photo, text); calculated the same way across Facebook and Instagram; repeat views count. |
| https://www.linkedin.com/help/linkedin/answer/a701208 | LinkedIn Help ("Combined post analytics") | undated | Impressions = times post displayed on screen (an estimate); members reached = distinct members and pages, repeat views not counted; engagements = reactions, comments, saves, sends, reposts. |
| https://support.google.com/youtube/answer/7628154 | YouTube Help ("Impressions and click-through rate FAQ") | undated | Impressions CTR measures how often viewers watched after a registered impression; not every thumbnail sighting counts; external sites and end screens excluded; some views don't originate from impressions. |
| https://support.google.com/analytics/answer/10917952 | Google Analytics Help ("URL builders: Collect campaign data with custom URLs") | undated | Always use utm_source, utm_medium, utm_campaign; values case sensitive; data in Acquisition > Traffic acquisition. |

Flagged / softened:
- Instagram "accounts reached" definition: the official Instagram Help page (help.instagram.com/788388387972460) appeared in search with the definition "unique accounts that have seen your content on screen at least once", but WebFetch returned no body. Softened to "counts each account once rather than every display, so it will usually be lower than views", and no link given.
- Engagement-rate benchmarks: none used (deliberately).

## 19 social-media-reporting-for-founders

No external sources. All content is practice and opinion; examples are labelled hypothetical. Softened the Google Business Profile line to "calls and direction requests, where your Google Business Profile performance report shows them" (not verified against Google help; phrased conditionally).

## Existing Kudozz articles checked for overlap
- instagram-vs-youtube-vs-tiktok, influencer-marketing-platforms-india (creator campaign platform choice; 15 cross-links the first)
- ugc-paid-social-testing, creator-whitelisting (linked from 17)
- influencer-marketing-kpis, influencer-utm-tracking, influencer-marketing-attribution-models, dark-social-influencer-marketing (18 links all four)
- influencer-marketing-report, influencer-marketing-quarterly-review, influencer-marketing-dashboard (19 links the quarterly review; others in related)
- linkedin-thought-leadership-marketing (related on 15)

---

## Editor's verification (lead)

- Every sentence containing a figure, legal reference or platform claim was extracted across all 20 articles and reviewed. Figures are recommendations ("we'd suggest…"), clearly hypothetical examples, or dated facts from the official sources above.
- Spot-checked facts consistent with primary sources:
  - CERT-In Directions (28 April 2022): report listed incidents within 6 hours.
  - MeitY block of TikTok and 58 apps under s.69A (29 June 2020, PIB).
  - DPDP Rules notified November 2025 with phased compliance (PIB).
  - Meta "Introducing Views" (14 November 2024).
  - Google Business Profile bulk verification for 10+ locations.
  - LinkedIn Page admin roles.
- Claims softened or removed by writers because they couldn't be verified:
  - GST rate on agency services
  - Meta menu paths
  - The "boost vs Ads Manager" billing detail
  - "Formerly branded content ads"
  - The Instagram Restrict behaviour
  - The DPDP 72-hour figure
  - Platform user numbers and benchmarks
  - Pinterest and Shorts specs
  - The TikTok status after August 2025 (stated as "no official reversal found")
