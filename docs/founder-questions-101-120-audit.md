# Founder questions, batch 6 (roadmap topics 101–120: platform-specific influencer marketing): audit, decisions and implementation log

Date: 2026-10-14. Status: implemented in the working tree; uncommitted and not deployed.

The site already had more than 150 brand-side platform pages. Instagram (22), YouTube (12), LinkedIn (10), Pinterest (10), Reddit (10) and podcasts (29) each had a cluster; most pages were written on 12–13 September 2026, had never been reviewed, and cited no sources. This batch is therefore mainly fact-checking and updating the cluster owners against current official documentation. It creates two pages where no owner existed.

| Decision | Topics |
| --- | --- |
| CREATE | 113 (with 120 folded in), 119 |
| UPDATE | 101, 102, 104, 105, 106, 107, 108, 109, 112, 114, 115, 116 |
| CONSOLIDATE | 103 into the Stories page; 111 into the employee page |
| SKIP | 110, 117, 118 |

No URLs changed and no redirects were needed.

## 1. Audit findings

Method:
- Imported all 848 posts.
- Listed every brand-side page by platform keyword.
- Read the outline of each cluster owner, and the full text where facts needed checking.
- Searched full body text for current platform features: Trial Reels, partnership ads, collab posts, engaged views, BrandConnect, Thought Leader Ads, BrandLink, Creator Marketplace, Idea Pins, Spark Ads, TikTok One and employee advocacy.

| Topic | Owner before batch 6 | State found |
| --- | --- | --- |
| 101 Instagram guide | `instagram-influencer-marketing` | India-framed title; no sources; "impressions" outdated; 12 em dashes; no hero |
| 102 Reels | `instagram-reels-influencer-marketing` | No sources; "plays" outdated; no length or Trial Reels facts; never reviewed |
| 103 Stories vs Reels | `instagram-stories-influencer-marketing` (comparison section), `instagram-reels-influencer-marketing` | A comparison existed but was thin; no separate page justified |
| 104 Collaborations and branded content | `instagram-collab-posts`, `instagram-partnership-ads`, `ugc-whitelisting-creator-licensing` | No sources. One claim ("collaborators can only be added at posting") couldn't be confirmed |
| 105 YouTube strategy | `youtube-influencer-marketing-india` (1 source), `youtube-creator-partnerships` | Missed the 24 Aug 2026 view redefinition and Creator Partnerships availability |
| 106 Shorts vs long-form | `youtube-shorts-influencer-marketing` | Comparison present; spec undated and unsourced; missed the view change |
| 107 Review or sponsorship campaign | `youtube-sponsorships`, `youtube-product-reviews` | Disclosure section named an "Includes paid promotion" label that YouTube's policy page doesn't use |
| 108 YouTube measurement | `youtube-influencer-marketing-roi` | No engaged-views guidance (flagged in batch 4) |
| 109 LinkedIn guide | `linkedin-influencer-marketing-india`, `linkedin-creator-marketing` | Creator Marketplace, Thought Leader Ads and BrandLink claims had no sources (now verified) |
| 110 B2B partnerships for leads | `b2b-creator-partnerships-linkedin` (reviewed Sept 2026) | Complete |
| 111 Employee advocacy vs influencers | `employee-influencer-marketing` (advocacy vs employee influencer), `linkedin-influencer-marketing-india` | Lacked a direct comparison with external creators |
| 112 LinkedIn measurement | `measure-linkedin-influencer-marketing-roi` | Nothing on measuring amplified creator posts; 5 em dashes |
| 113 Instagram vs YouTube vs TikTok | Market-specific pages only: `influencer-marketing-platforms-india`, `instagram-vs-tiktok-vs-snapchat-uae`, `instagram-tiktok-youtube-influencer-marketing-australia` | **Gap**: no cross-market comparison accounting for TikTok being unavailable in India |
| 114 Podcasts | 29 pages, 28 under 800 words; `podcast-influencer-marketing-india` is the main guide | Measurement only via a link; no definition of downloads vs listens |
| 115 Pinterest | `pinterest-creator-marketing`, `pinterest-influencer-marketing-india` (Idea Pins correctly treated as retired) | No sources; no paid partnership tag |
| 116 Reddit | `reddit-influencer-marketing-india` plus 9 others | Good rules-first framing; no sitewide-rules source or disclosure tool |
| 117 Multi-platform strategy | `multi-platform-influencer-campaigns` (batch 2) | Complete |
| 118 Repurposing | `repurpose-influencer-content` (reviewed Oct 2026) | Complete |
| 119 Disclosure across platforms | `influencer-marketing-compliance` (India), plus UK, Australia and Saudi rule pages | **Gap**: no page comparing platform tools with jurisdiction rules across all six markets |
| 120 Best platform for budget | Same as 113 | Same intent as 113, so folded into it |

## 2. Research summary

Sources were accessed 2026-10-14.

**YouTube:**

| Fact | Source |
| --- | --- |
| Views counted from the first frame in all formats from 24 Aug 2026; the old definition is now "engaged views" | https://blog.youtube/inside-youtube/engaged-views-youtube-explained/ |
| Paid promotion setting and disclosure label; creators and partners remain legally responsible | https://support.google.com/youtube/answer/154235 |
| YouTube Creator Partnerships countries include India, UAE, Saudi Arabia, UK, Australia and Singapore | https://support.google.com/youtube/answer/9385307 |
| Shorts up to 3 minutes from 15 Oct 2024 (square or vertical) | Press coverage of YouTube's 3 Oct 2024 announcement (PetaPixel, Tubefilter) |

**Instagram:**

| Fact | Source |
| --- | --- |
| Reels up to 3 minutes (Jan 2025) | Press coverage (Business Today, Social Samosa) |
| Trial Reels (from Dec 2024) | TechCrunch; Instagram help 1013292530224018 |
| Views replaced impressions and plays (2025) | Batch 4 sources |
| Collab posts, paid partnership label, partnership ad permissions | Instagram help pages 291200585956732, 1109894795810258, 442108830566254 (existing site sources; Instagram pages don't render to the fetch tool) |

**TikTok:**

| Fact | Source |
| --- | --- |
| Commercial content disclosure required; labels "Paid partnership" or "Promotional content"; undisclosed marketing can be excluded from the For You feed | https://ads.tiktok.com/help/article/about-the-content-disclosure-setting-for-creators (via search snippets; direct fetch failed) |
| TikTok blocked in India | Existing site source (newsonair.gov.in) |

**Pinterest and Reddit:**

| Fact | Source |
| --- | --- |
| Pinterest paid partnership tag: brand approval adds its name; approvals from desktop; a removed tag can't be re-added | https://help.pinterest.com/en/node/3261 |
| Reddit sitewide rules (follow community rules, authentic content, no content manipulation) | https://redditinc.com/policies/reddit-rules (URL resolves; text from known rules, as the fetch was blocked) |
| Reddit Brand Affiliate tag | Secondary sources only, so it is presented as "reported" |

**LinkedIn:**

| Fact | Source |
| --- | --- |
| Creator Marketplace in Campaign Manager, BrandWorks, amplifying creator posts with Thought Leader Ads, self-serve BrandLink (10 June 2026) | https://news.linkedin.com/2026/how-b2b-brands-can-drive-impact-with-creators-and-stronger-creat |
| Invite-only alpha for North America | Trade press (ppc.land, Metricool) |
| Thought Leader Ads for any member with approval (March 2024) | Trade press (Search Engine Land, MarTech) |

**Podcasts and country rules:**

| Fact | Source |
| --- | --- |
| IAB Tech Lab podcast measurement v2.3 final on 29 Sept 2026: a download is a unique request delivering at least one minute; covers RSS audio and video | https://iabtechlab.com/standards/podcast-measurement-guidelines/ and ppc.land coverage |
| Country disclosure rules (ASCI, DoCA, NMA permit, GAMR Mawthooq, ASA/CMA and DMCC, AANA 2.7 and ACCC, ASAS) | Owner-verified facts and sources in `src/content/markets.ts`, plus SOURCES constants |

Limitations:
- No Search Console or keyword tool access, so there are no volumes or rankings.
- Instagram, TikTok support and Reddit help pages can't be fetched from this environment.
- UAE government sites time out (as in batch 5).
- Instagram feature claims rely on existing site sources plus press; TikTok on search snippets of its ads help page; the Reddit Brand Affiliate tag on secondary sources (qualified in the text).
- TikTok Shop and YouTube Shopping availability by country was not verified, so the pages say to check rather than listing countries.

## 3. Decision table and URL map

| # | Topic | Decision | Final URL |
| --- | --- | --- | --- |
| 101 | Instagram guide | UPDATE | /blog/instagram-influencer-marketing |
| 102 | Reels campaign | UPDATE | /blog/instagram-reels-influencer-marketing |
| 103 | Stories vs Reels | CONSOLIDATE (Stories page retitled for the comparison) | /blog/instagram-stories-influencer-marketing |
| 104 | Collaborations and branded content | UPDATE | /blog/instagram-collab-posts#branded-content-planning |
| 105 | YouTube strategy | UPDATE | /blog/youtube-influencer-marketing-india |
| 106 | Shorts vs long-form | UPDATE (retitled for the comparison) | /blog/youtube-shorts-influencer-marketing |
| 107 | Review or sponsorship campaign | UPDATE (light; disclosure fix). `youtube-product-reviews` not changed | /blog/youtube-sponsorships |
| 108 | YouTube measurement | UPDATE | /blog/youtube-influencer-marketing-roi |
| 109 | LinkedIn guide | UPDATE | /blog/linkedin-influencer-marketing-india |
| 110 | B2B partnerships for leads | SKIP | /blog/b2b-creator-partnerships-linkedin |
| 111 | Employee advocacy vs influencers | CONSOLIDATE | /blog/employee-influencer-marketing#advocacy-vs-creators |
| 112 | LinkedIn measurement | UPDATE | /blog/measure-linkedin-influencer-marketing-roi |
| 113 | Instagram vs YouTube vs TikTok | CREATE | /blog/instagram-vs-youtube-vs-tiktok |
| 114 | Podcast host partnerships | UPDATE | /blog/podcast-influencer-marketing-india |
| 115 | Pinterest | UPDATE | /blog/pinterest-creator-marketing |
| 116 | Reddit | UPDATE | /blog/reddit-influencer-marketing-india |
| 117 | Multi-platform strategy | SKIP (link added) | /blog/multi-platform-influencer-campaigns |
| 118 | Repurposing | SKIP | /blog/repurpose-influencer-content |
| 119 | Disclosure rules across platforms | CREATE | /blog/influencer-disclosure-rules-by-country |
| 120 | Best platform for budget | CONSOLIDATE into 113 | /blog/instagram-vs-youtube-vs-tiktok#by-budget |

Title changes on existing URLs (H1s unchanged):

| Page | Change |
| --- | --- |
| instagram-influencer-marketing | seoTitle drops "in India" |
| instagram-stories-influencer-marketing | seoTitle now "Stories vs Reels" |
| youtube-shorts-influencer-marketing | seoTitle now "Shorts vs Long-Form" |
| linkedin-influencer-marketing-india | seoTitle drops "in India" |
| podcast-influencer-marketing-india | seoTitle drops "in India" |
| reddit-influencer-marketing-india | seoTitle drops "in India" |
| instagram-reels-influencer-marketing, pinterest-creator-marketing | seoTitle added |

India-specific content is kept on all of them. Watch Indian queries in Search Console after release.

## 4. Keyword and intent map (inferred; no volume data)

| URL | Primary query | Supporting concepts | Market note |
| --- | --- | --- | --- |
| instagram-vs-youtube-vs-tiktok | instagram vs youtube vs tiktok; best platform for influencer marketing | objective, budget, path to purchase, availability | TikTok excluded for India |
| influencer-disclosure-rules-by-country | influencer disclosure rules by country / platform | paid partnership label, paid promotion, permits, ASCI, ASA/CMA, AANA, ASAS | Each Gulf country treated separately |
| instagram-stories-influencer-marketing | instagram stories vs reels for brands | link stickers, urgency, reuse | — |
| youtube-shorts-influencer-marketing | youtube shorts vs long form influencer | specs, engaged views | — |
| instagram-collab-posts | instagram collab posts / branded content | paid partnership label, partnership ads, licence | — |
| youtube-influencer-marketing-roi | measure youtube influencer marketing | engaged views, retention | — |
| linkedin-influencer-marketing-india | linkedin influencer marketing | Thought Leader Ads, Creator Marketplace | Marketplace availability limited |
| employee-influencer-marketing | employee advocacy vs influencer marketing | B2B, disclosure | — |
| podcast-influencer-marketing-india | podcast influencer marketing | downloads vs listens, IAB guidelines | — |

## 5. Implementation summary

**New pages** (`src/content/brand-guides/founder-platforms.ts`):

- **instagram-vs-youtube-vs-tiktok** (topic 113, with 120 folded in):
  - A comparison table (formats, discovery, shelf life, path to purchase, ad formats, best for) and availability for all six markets.
  - Choosing by objective and by budget (small, mid and large), plus path-to-purchase and measurement checks.
  - Other platforms, a hypothetical India and UAE example, mistakes and FAQs.
- **influencer-disclosure-rules-by-country** (topic 119):
  - Two layers: a platform tools table (Instagram, YouTube, TikTok, Pinterest, Reddit with the tag qualified as reported, and LinkedIn with no verified label) and why platform labels aren't enough.
  - A country rules table (India, UAE, Saudi Arabia, Qatar/Kuwait/Oman, UK, Australia, Singapore) with nine official sources.
  - A cross-border rule of thumb, a brief and contract checklist, mistakes and FAQs.

**Updates:** see section 3. In summary:
- Dated, sourced fact tables for Instagram (2025–26 changes) and YouTube.
- A Reels facts list.
- A Stories vs Reels decision table.
- An Instagram branded-content tool matrix.
- YouTube Shorts spec and views change.
- YouTube paid promotion wording fixed.
- An engaged-views measurement section.
- LinkedIn Creator Marketplace dated and sourced.
- An employee advocacy vs external creators table.
- Measuring Thought Leader Ads layers.
- A podcast metrics table with the IAB v2.3 definition.
- Pinterest paid partnership tag and analytics.
- Reddit sitewide rules and disclosure.

All examples are labelled hypothetical. No Kudozz clients, creator relationships, prices or results were added.

## 6. SEO changes

- **New pages:** unique titles and metas, canonical and Open Graph from the template, and BlogPosting, BreadcrumbList and FAQPage JSON-LD. Both are in the sitemap with lastmod 2026-10-14.
- **Dates:** `updatedAt: 2026-10-14` and `lastReviewed: October 2026` set on the 14 updated pages. Link-only pages keep their dates.
- **Titles and metas:** seoTitle and meta changes are listed in section 3.
- **Template:** no changes. The FAQPage decision is still open.

## 7. Internal links

**Within the updated pages:**
- **New pages:** link to 20+ existing pages (platform guides, market guides, tracking, budget and compliance pages).
- **Instagram main page:** links to the disclosure guide.
- **Reels page:** links to the Stories comparison and partnership ads.
- **Collab page:** links to usage rights and the disclosure guide.
- **YouTube pages:** link to YouTube in Saudi Arabia and the disclosure guide.
- **Employee page:** links to LinkedIn measurement and the LinkedIn creator guide.
- **Pinterest page:** links to Pinterest ROI and the disclosure guide.
- **Reddit page:** links to the disclosure guide.

**Link-only additions** (dates unchanged):
- multi-platform-influencer-campaigns → instagram-vs-youtube-vs-tiktok
- influencer-marketing-compliance → influencer-disclosure-rules-by-country
- influencer-marketing-platforms-india → instagram-vs-youtube-vs-tiktok
- instagram-vs-tiktok-vs-snapchat-uae → instagram-vs-youtube-vs-tiktok

## 8. CTA and analytics

- Two `BRAND_GUIDE_CTAS` entries were added in `src/lib/blogCta.ts`:
  - instagram-vs-youtube-vs-tiktok: topic "Campaign Planning"; mid CTA to /services/campaign-strategy.
  - influencer-disclosure-rules-by-country: topic "Campaign Management"; mid CTA to /services/outreach-management.
- Updated pages keep their existing CTAs. No analytics or form code was changed.
- **Local check** (gtag stubbed; nothing submitted), on the two new pages and youtube-influencer-marketing-roi:
  - Each fired `blog_mid_cta_click` and `blog_bottom_cta_click` with the correct topic and position.
  - On the inquiry page, each fired `brand_lead_form_start` and `blog_lead_form_start`.
  - The goal field pre-fills for Campaign Planning and Campaign Management. The YouTube ROI page's existing "ROI & Reporting" topic has no goal mapping (pre-existing behavior).
- Form submission and GA4 receipt were not tested.

## 9. Images and accessibility

- 13 hero SVGs were added in `public/blog/brand-guides/`: the 2 new pages, plus 11 updated pages that had no hero.
  - instagram-influencer-marketing, -reels, -stories and instagram-collab-posts
  - youtube-influencer-marketing-india, youtube-shorts-influencer-marketing and youtube-influencer-marketing-roi
  - linkedin-influencer-marketing-india
  - podcast-influencer-marketing-india
  - pinterest-creator-marketing
  - reddit-influencer-marketing-india
- All are original diagrams in the site palette, with alt text.
- No platform screenshots or analytics images were created, and no existing image was overwritten.

## 10. Validation

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | 0 errors; 6 pre-existing warnings |
| `npm run build` | Pass; 1,794 static pages; 850 posts |
| Content checks (20 pages) | 0 issues on new and updated pages after fixes. Fixed during validation: one meta at 173 characters, one title over the limit, and three duplicate link texts (one pre-existing on the employee page) |
| Two remaining flags | Both on link-only pages and pre-existing: influencer-marketing-platforms-india meta at 191 characters; instagram-vs-tiktok-vs-snapchat-uae title length |
| Crawl of `next start` (20 pages) | All 200; 1 H1; self-canonical; valid JSON-LD; mid and bottom CTA; sitemap lastmod correct; listed on /blog. 165 internal links and 16 images, none broken |
| 390px mobile emulation | 20 of 20 pages, no horizontal overflow |
| CTA and form-start events | See section 8 |
| Secrets in `.next/static` | 0 occurrences |

## 11. Files changed

- **Created:**
  - `src/content/brand-guides/founder-platforms.ts`
  - `docs/founder-questions-101-120-audit.md`
  - 13 hero SVGs
- **Edited:**
  - `src/content/brand-guides/index.ts`
  - `src/lib/blogCta.ts` (2 entries)
  - `src/content/blog.ts`: 14 updated pages, plus link-only edits on compliance and platforms-india
  - `src/content/brand-guides/founder-execution.ts`: multi-platform link
  - `src/content/gcc-guides/gcc-platforms.ts`: UAE platform link
  - `docs/seo-register-blog-2026-10.csv`: 2 rows added, 18 updated; 850 rows
  - `docs/seo-audit-progress.md`: F6 row
- **Removed:** none.

## 12. Outstanding risks

**Source gaps:**
- Instagram, TikTok support and Reddit help pages couldn't be read directly. Instagram facts rely on existing help links plus press, and the Reddit Brand Affiliate tag is marked "reported".
- TikTok Shop and YouTube Shopping country availability is unverified.

**Overlap and consolidation:**
- Podcasts (28 thin pages) and X (37 thin pages): consolidation is still pending Search Console data. Batch 6 updated only the podcast owner.
- Instagram cluster overlaps to monitor:
  - partnership-ads vs collab-posts vs whitelisting
  - the reels and stories pair
  - instagram-influencer-marketing vs instagram-creator-marketing-d2c-brands
- YouTube: youtube-sponsorships vs youtube-product-reviews (topic 107). The reviews page wasn't updated and has no sources.

**Title changes:** several seoTitles dropped "in India". Monitor Indian rankings.

**Carried over:**
- FAQPage decision.
- UAE regulator URL reachability.
- Platform INR rate tables (instagram/youtube/linkedin/snapchat/pinterest rates India) still unsourced.
- Form submission and GA4 receipt untested.

## 13. Next batch (121–140): industry-specific influencer marketing

Industry pages already on the site: about 70 brand-side pages, mostly India, the GCC and Australia. Examples:
- **Multiple markets:** beauty (5), e-commerce (7), automotive (3), B2B (9), D2C (4), healthcare and wellness (3), retail (3), gaming (3).
- **Two markets each:** fintech, fashion, food, travel, education, SaaS, sports, fitness, jewellery, hospitality, restaurants, FMCG.
- **Single pages:** real estate, insurance, luxury, home interiors, parenting, pets, solar, agritech, nonprofit, universities and film or streaming.

UK and Singapore have almost no industry pages, apart from UK e-commerce, regulated products, seasonal and regional.

Recommended direction:

1. **Audit before creating.** Most industry intents already have an owner, often in India and the GCC. Expect UPDATE decisions. Check each page for unsourced rate tables, sources and review dates.
2. **Prioritise regulated industries, where the rules genuinely change the plan.** Verify each against current official guidance:
   - **Finance:** SEBI and ASCI in India; FCA FG24/1 in the UK; MAS digital advertising guidelines in Singapore (from 25 March 2026); SCA rules for finfluencers in the UAE; ASIC in Australia.
   - **Healthcare and pharma:** ASCI health qualifications and the DMR Act in India; MOH aesthetic-services restrictions in Singapore; TGA in Australia; MHRA and CAP in the UK.
   - **Food and drink:** UK less-healthy-food rules from 5 January 2026.
   - **Alcohol and gambling:** UK CAP and ABAC in Australia.
3. **Fill UK and Singapore gaps only where content differs genuinely,** for example regulated categories. Don't swap country names into India pages.
4. **Group by buying cycle** (impulse, considered and B2B) as well as industry, so measurement advice matches. Link to the batch 4 measurement pages.
5. **Re-verify industry claims dated before October 2026**, and replace unsourced figures with cost-factor guidance.
