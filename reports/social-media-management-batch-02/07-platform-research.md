# 07 — Platform Research (Batch 02)

Research done 11–12 November 2026 by the five writers and checked by the lead editor. Policy: official sources only for platform features, formats, limits and metrics. Every platform fact in the articles is dated "at the time of writing (November 2026)". Where an official page couldn't be read or confirmed, the fact was left out and readers are pointed to the platform's help page.

## Verified platform facts used in the articles (summary)

| Platform | Fact as stated in the articles | Official source type | Article |
|---|---|---|---|
| Instagram | Up to 20 photos and videos in one feed post (older help pages still say 10) | Instagram Help | 24 |
| Instagram | Bio up to 150 characters; more than one bio link, reorderable; up to three pinned posts; Contact button options; partner action buttons (Book, Reserve, Order Food) | Instagram Help | 25 |
| Instagram | Search matches text against usernames, names, bios, captions, hashtags and places (2021 explainer) | Instagram blog | 25 |
| Instagram | Ranking explainer (Mosseri, May 2023); originality update (April 2024: only the original is recommended when identical content is found); help page on reels shown less often (blurry, watermarked, mostly text, unoriginal) | Instagram / Meta | 21, 22 |
| Instagram | Trial Reels: professional account needed, not shown to followers in Feed or the Reels tab, insights within 24 hours, share-to-everyone option (announced December 2024) | Instagram Help, Meta Newsroom | 22 |
| Instagram | Reels watch time metrics added April 2023; views replaced plays and impressions (November 2024) | Instagram Creators, Meta for Creators | 21, 22, 26 |
| Instagram | Stories stickers (poll, quiz, questions, emoji slider, countdown, link, Add Yours); link sticker for all accounts from October 2021 with exceptions; Story insights for professional accounts; Stories with certain stickers can't be boosted | Instagram blog and Help | 23 |
| Instagram | Reply to a comment with a reel; questions-sticker responses shared without the responder's name or photo | Instagram Help | 32 |
| Instagram | Alt text editable before and after posting, plus automatic alt text; automatic captions on reels; photos at widths up to 1080px; reels aspect ratio between 1.91:1 and 9:16 | Instagram Help | 34 |
| Instagram | Collab posts shared with the collaborator's followers; the paid partnership label is required for branded content | Instagram Help, Meta Branded Content Policies | 35 |
| Instagram | Licensed audio must be credited and can be muted | Instagram Help | 22, 33 |
| Facebook | New Pages experience (January 2021); Page access and tasks; action button; creating a Group as a Page; Business Suite inbox and scheduling (Planner) | Meta Newsroom, Facebook Help, Meta Business Help | 26, 30 |
| LinkedIn | Page admin roles (Super admin, Content admin, Analyst); custom button; up to 25 Showcase Pages (created by the parent Page's super admin); Career Pages and the Life tab (paid); document posts (PDF, PPT, DOC; 100MB; 300 pages); Page newsletters; My Company and Employee Advocacy tabs discontinued from November 2024; combined post analytics; competitor analytics | LinkedIn Help | 27, 30, 40 |
| YouTube | Shorts up to 3 minutes for uploads after 15 October 2024; branding under Studio > Customisation; channel permissions; custom thumbnails need verification; chapter rules (start at 00:00, 3+ timestamps, each 10+ seconds); playlists; Premieres; impressions CTR; key moments and retention | YouTube Help | 28 |
| Pinterest | Business account; claiming your website; Pin creation; evergreen distribution and fresh Pins; visual search and Lens; catalogs not available in all regions (India's status unconfirmed); Pin stats definitions | Pinterest Help | 29 |
| Google | Business Profile posts (updates, offers, events; can be scheduled); customer photos on Maps | Google Business Profile Help | 39 |
| Accessibility | WCAG contrast 4.5:1 for body text, 3:1 for large text | W3C | 34 |

## Deliberately not stated (couldn't be verified on an official page)

- Maximum number of bio links
- Story length and number of poll options
- Instagram feed aspect-ratio range (official pages conflict)
- Reels maximum length
- Trial Reels follower thresholds
- Reels skip rate and the 2026 Insights redesign
- Instagram's "top signals" quotes from 2025
- Meta Business Suite WhatsApp inbox and cross-posting steps
- How far ahead Business Suite can schedule
- Facebook Groups per Page
- LinkedIn newsletter and Live eligibility thresholds
- YouTube banner, watermark and thumbnail pixel specs
- Pinterest Pin aspect ratio and catalog availability in India
- Idea Pins as a current format
- Collab collaborator limits
- LinkedIn alt text limits
- Instagram Shopping and product-tagging availability in India
- Ideal posting frequencies (no official figures exist; articles give a capacity-based method instead)

## Verification caveat

`help.instagram.com` and several Meta Business Help pages render client-side and returned no body text to automated fetches. Writers confirmed those claims from:
- the same articles mirrored at `facebook.com/help/instagram/<id>`, or
- the official pages' indexed text in search results.

Those claims are dated, and readers are told to check the current help page. LinkedIn, YouTube, Pinterest, Google, W3C, ASCI and PIB pages were read directly.

## Trend handling (Part 5 of the brief)

Themes were used only where relevant and labelled by evidence type:
- **Short-form video and originality:** Instagram's published announcements.
- **Social search:** Instagram's 2021 search explainer; YouTube's help on search and discovery.
- **AI-assisted design and production with human review:** practitioner recommendation (articles 34 and 38, plus ASCI's synthetic content guideline noted in 38).
- **Quality over volume:** practitioner recommendation, with no statistics.

No predictions are presented as fact.

---

# Writer source logs (verbatim)

## File: src/content/brand-guides/smm-instagram.ts

### Sources log: smm-instagram.ts (Batch 02, Writer A)

File: src/content/brand-guides/smm-instagram.ts (export `smmInstagramPosts`)
Hero SVGs: public/blog/brand-guides/{instagram-management-for-business,instagram-stories-for-business,instagram-carousel-strategy,instagram-business-profile-optimization}.svg (generator: scratchpad/svgA2.py)

Note on method: help.instagram.com pages are JS-rendered and returned no body to WebFetch/curl. Help-centre claims were verified from the official help-centre search snippets (title + text excerpt returned for that URL); about.instagram.com, ascionline.in pages were fetched directly. All accessed November 2026.

## 21 instagram-management-for-business

| URL | Publisher | Published / updated | Accessed | Claim supported |
|---|---|---|---|---|
| https://help.instagram.com/1525585517644948/ | Instagram Help Centre, "What kind of reels you may see on Instagram" | undated | Nov 2026 | Reels shown less often include muted or blurry reels, reels with borders or watermarks, mostly-text reels and non-original reels (snippet). Stated "at the time of writing (November 2026)", "among others". |
| https://help.instagram.com/788388387972460 | Instagram Help Centre, "About Instagram insights" | undated | Nov 2026 | Insights for professional accounts; views, reach, interactions (likes, comments, saves, shares) and profile activity. (snippet) |
| https://creators.facebook.com/introducing-views-to-simplify-content | Meta for Creators | 14 Nov 2024 | Nov 2026 | Views replaced plays and impressions as the main metric across Facebook and Instagram. (Same source as Batch 01 smm-performance log.) |

Internal: /blog/instagram-business-profile-optimization, /blog/instagram-reels-strategy-for-brands, /blog/instagram-stories-for-business, /blog/instagram-carousel-strategy, /blog/monthly-social-media-content-calendar, /blog/social-media-kpis, /services/social-media-management#scope, /for-brands.

## 23 instagram-stories-for-business

| URL | Publisher | Published / updated | Accessed | Claim supported |
|---|---|---|---|---|
| https://about.instagram.com/blog/tips-and-tricks/how-to-use-instagram-stories | Instagram blog, "How to Use Instagram Stories" (search title "Complete 2026 Guide") | date not shown in fetched text | Nov 2026 | Stories last 24 hours then go to archive; Highlights appear as round covers under bio and stay until removed; sticker list incl. poll, quiz, questions, emoji slider, countdown (followers can subscribe to a reminder), link, Add Yours; Close Friends list. |
| https://about.instagram.com/blog/announcements/expanding-sharing-links-in-stories-to-everyone | Instagram blog | 27 Oct 2021 | Nov 2026 | Link sticker expanded to all accounts; new accounts and repeat Community Guidelines violators excluded. |
| https://help.instagram.com/2281642782069520/ | Instagram Help Centre, "Boost an Instagram story" | undated | Nov 2026 | Boosted stories must not contain polls, quizzes, music or link stickers (snippet). |
| https://help.instagram.com/383939598845756/ | Instagram Help Centre, "View insights on your Instagram Stories" | undated | Nov 2026 | Story interactions include replies, shares, sticker taps, link taps; profile activity incl. profile visits, follows; insights available up to two years (snippet). |
| https://help.instagram.com/825941707897287/ | Instagram Help Centre, "Instagram Insights in Commerce Manager" | undated | Nov 2026 | Story navigation: forward taps, back taps, next story swipes, exits (snippet). Not linked in article; supports the navigation sentence. |

Internal: /blog/instagram-stories-influencer-marketing, /blog/customer-testimonials-ugc, /blog/instagram-business-profile-optimization, /blog/instagram-insights-for-creators, /blog/instagram-management-for-business, /services/social-media-management#community-management, /for-brands.

## 24 instagram-carousel-strategy

| URL | Publisher | Published / updated | Accessed | Claim supported |
|---|---|---|---|---|
| https://help.instagram.com/269314186824048/ | Instagram Help Centre, "Share a post with multiple photos or videos on Instagram" | undated (search tool reported page ~102 days old) | Nov 2026 | Up to 20 photos and videos in a single feed post; photos and videos can be mixed. Older Instagram pages still say 10; article states 20 "at the time of writing (November 2026)". |
| https://www.ascionline.in/the-asci-code/ | ASCI, The ASCI Code, Chapter IV "Fair in competition", clause 4.1 | undated | Nov 2026 | Comparisons permissible if: clear what is compared; subject not chosen for artificial advantage; factual, accurate, capable of substantiation; not likely to mislead; no unfair denigration. |
| https://help.instagram.com/553860108359435/ | Instagram Help Centre, "View Insights on Your Instagram Posts" | undated | Nov 2026 | Interactions = likes, comments, saves, shares; views and reach in post insights (snippet). |

Internal: /blog/social-media-graphic-design-for-business, /blog/accessible-content-captions-for-creators, /blog/social-media-kpis, /blog/instagram-management-for-business, /services/social-media-management#creative-design, /for-brands.

## 25 instagram-business-profile-optimization

| URL | Publisher | Published / updated | Accessed | Claim supported |
|---|---|---|---|---|
| https://about.instagram.com/blog/announcements/break-down-how-instagram-search-works | Instagram blog (Adam Mosseri) | 25 Aug 2021 | Nov 2026 | Search text is the most important signal; matched against usernames, bios, captions, hashtags and places; use a handle or profile name related to your content; bio keywords; local businesses add location. Attributed as "a 2021 post". |
| https://help.instagram.com/936495066470190 | Instagram Help Centre, "Edit Your Profile" | undated | Nov 2026 | Bio up to 150 characters (snippet). |
| https://help.instagram.com/1128232494579073/ | Instagram Help Centre, "How to add a Facebook profile link to your Instagram bio" | undated | Nov 2026 | Page covers how to reorder the links in your bio, i.e. more than one link is supported. |
| https://help.instagram.com/318456537074409/ | Instagram Help Centre, "Pin a post to the top of your profile" | undated | Nov 2026 | Up to three posts can be pinned (snippet). |
| https://help.instagram.com/529483457260403 | Instagram Help Centre, "How to edit your business information on Instagram" (also 138925576505882 "About professional accounts") | undated | Nov 2026 | Contact button near top of profile for professional accounts with phone, email, directions; Profile display lets you hide/show category label and contact info; anyone tapping Contact sees enabled details. |
| https://faq.whatsapp.com/647574060315065 | WhatsApp Help Centre, "How to add a WhatsApp Business account to an Instagram Profile" | undated | Nov 2026 | Linking WhatsApp Business to an Instagram professional account enables a WhatsApp button on the profile. |
| https://help.instagram.com/122793804938499 | Instagram Help Centre, "About Call To Action Buttons for Instagram Business Accounts" | undated | Nov 2026 | Action buttons Book Now, Reserve, Order Food via third-party partners; availability varies by location. |

Internal: /blog/instagram-keyword-strategy, /blog/link-in-bio-for-creators, /blog/instagram-stories-for-business, /blog/customer-testimonials-ugc, /blog/community-management-vs-customer-support, /blog/social-media-audit, /services/social-media-management#platforms, /for-brands.

## Facts dropped or softened (could not verify)
- Maximum number of bio links: widely reported as 5 (since 2023) but no official Instagram page confirming the number could be read. Article says multiple links can be added and reordered, points to the Edit profile screen, states no number.
- Max poll options / Story frame length: not stated.
- Instagram "Recommendation Guidelines" page itself: URL could not be confirmed; used the "What kind of reels you may see" help page instead.
- Business vs creator account feature differences: kept general, directing readers to Instagram Help.
- Whether changing a username frees the old one for others to claim: removed.

## Existing Kudozz articles checked for overlap
- instagram-stories-influencer-marketing (creator Stories): 23 is about the brand's own Stories and links it.
- instagram-content-strategy, reels-content-strategy (creator-side): used as related only; 21 is brand monthly management.
- instagram-insights-for-creators: linked from 23 for metric definitions, not repeated.
- instagram-keyword-strategy, link-in-bio-for-creators (creator-side): linked from 25, not repeated.
- customer-testimonials-ugc: linked for permission rules (23, 25).
- instagram-algorithm-changes-what-still-works: related slug on 21; no algorithm theory stated.
- Batch 01: social-media-audit (25), social-media-kpis (21, 24), community-management-vs-customer-support (25), social-media-content-workflow (related on 21). Batch 02 sisters linked: 22, 23, 24, 25, 31, 34.

## File: src/content/brand-guides/smm-planning.ts

### Sources log: smm-planning.ts (Batch 02, Writer B)

File: src/content/brand-guides/smm-planning.ts (export `smmPlanningPosts`)
Hero SVGs: public/blog/brand-guides/{instagram-reels-strategy-for-brands,instagram-reels-content-plan,monthly-social-media-content-calendar,manage-multiple-social-media-accounts}.svg
Note: help.instagram.com pages return an error page to automated fetches; they were read via the equivalent www.facebook.com/help/instagram/<id>?locale=en_US mirror of the same Help Centre article. The article links the canonical help.instagram.com URL.

## 22 instagram-reels-strategy-for-brands

| URL | Publisher | Published / updated | Accessed | Claim supported |
|---|---|---|---|---|
| https://about.instagram.com/blog/announcements/instagram-ranking-explained | Instagram (Adam Mosseri, "Instagram Ranking Explained") | 31 May 2023 | Nov 2026 | Reels are designed to help people discover new things; most Reels people see come from accounts they don't follow; Instagram aims to make low-resolution or watermarked Reels and Reels already posted on Instagram less visible. |
| https://creators.instagram.com/blog/recommendations-and-originality | Instagram Creators blog | 30 Apr 2024 | Nov 2026 | When Instagram finds two or more identical pieces of content it will only recommend the original. |
| https://help.instagram.com/1013292530224018 | Instagram Help Centre ("About trial reels on Instagram") | undated | Nov 2026 | Professional account needed; followers won't see a trial in Feed or Reels tab (some may via DMs or same-audio pages); insights within 24 hours; Share to everyone; automatic sharing if it gets a lot of views within the first 72 hours. Stated "at the time of writing (November 2026)". |
| https://about.fb.com/news/2024/12/trial-reels-try-content-non-followers-first-see-what-perfoms-best/ | Meta Newsroom ("Test Content With Non-Followers Using Trial Reels") | 10 Dec 2024, updated 26 Jun 2025 | Nov 2026 | Meta announced Trial Reels in December 2024. |
| https://help.instagram.com/788388387972460 | Instagram Help Centre ("About Instagram insights") | undated | Nov 2026 | Definitions of views (times content was played or displayed), viewers (unique accounts that saw a Reel on screen at least once), interactions (likes, comments, saves, shares). |
| https://creators.instagram.com/blog/creator-bundle-trends-editing-gifts | Instagram Creators blog | 14 Apr 2023 | Nov 2026 | Instagram added total watch time and average watch time to Reels insights. |
| https://help.instagram.com/329208821595430 | Instagram Help Centre ("What audio you can use in your reel") | undated | Nov 2026 | (FAQ) Licensed audio can be muted if agreements with rights holders change. |

Internal: /blog/instagram-management-for-business (sister 21), /services/creator-discovery, /blog/instagram-reels-influencer-marketing, /blog/instagram-reels-content-plan (sister 33), /blog/instagram-trial-reels, /blog/social-media-kpis, /services/social-media-management#reels-short-form-video, /for-brands.

## 33 instagram-reels-content-plan

| URL | Publisher | Published / updated | Accessed | Claim supported |
|---|---|---|---|---|
| https://help.instagram.com/329208821595430 | Instagram Help Centre ("What audio you can use in your reel on Instagram") | undated | Nov 2026 | Licensed audio must credit the artist and track name, and can be muted if agreements with rights holders change. |

Internal: /blog/instagram-reels-strategy-for-brands (sister 22), /blog/ugc-content-usage-rights, /services/ugc-content-production, /blog/social-media-content-workflow, /blog/monthly-social-media-content-calendar (sister 31), /services/social-media-management#content-planning.

## 31 monthly-social-media-content-calendar
No external sources. No posting-frequency figures or content-mix ratios (the article explicitly says not to rely on them). Indian festive list is generic, with a note that lunar-calendar dates change yearly; no dates stated.
Internal: /blog/social-media-content-workflow, /blog/seasonal-influencer-marketing-india, /blog/instagram-reels-content-plan (sister 33), /services/ugc-content-production, /blog/social-media-content-approval-process, /blog/social-media-kpis, /services/social-media-management#content-planning.

## 30 manage-multiple-social-media-accounts

| URL | Publisher | Published / updated | Accessed | Claim supported |
|---|---|---|---|---|
| https://www.facebook.com/business/tools/meta-business-suite | Meta for Business (Meta Business Suite tool page) | undated | Nov 2026 | Manage business activity on Facebook, Messenger and Instagram from one place; create or schedule posts and stories; respond to messages. Stated "at the time of writing (November 2026)". |
| https://www.facebook.com/business/help/1717412048538897 | Meta Business Help Centre ("Give a Partner Access to Business Assets in Your Business Portfolio") | undated | Nov 2026 | A business portfolio can give partner businesses access to its assets (existence of the feature only). |
| https://www.linkedin.com/help/linkedin/answer/a541981 | LinkedIn Help ("LinkedIn Page admin roles") | undated | Nov 2026 | Page admin roles: Super admin, Content admin, Analyst. |

Internal: /blog/choose-social-media-platforms-for-business, /blog/community-management-vs-customer-support, /blog/monthly-social-media-content-calendar (sister 31), /services/social-campaigns, /blog/social-media-brand-voice, /blog/social-media-content-repurposing, /blog/social-media-reporting-for-founders, /services/social-media-management#platforms.

## Dropped because not verified on an official page
- Trial Reels follower thresholds (200 / 1,000 followers): the current Help Centre page only says a professional account is needed; thresholds not stated, so omitted.
- Reels "skip rate", "share rate", retention chart and the April 2026 Insights redesign: only third-party sources found; omitted.
- Mosseri's "watch time, likes and sends are the top signals" (Jan 2025): only secondary coverage found; omitted.
- Boosted Reels can't use licensed music: Help Centre page body not retrievable; omitted.
- Meta Business Suite inbox including WhatsApp, and exact cross-posting steps: only older/undated help pages; kept to the general tool-page description.

## Existing Kudozz articles checked for overlap
- instagram-reels-influencer-marketing (blog.ts): creator Reels for campaigns; 22 links it for creator briefing and keeps to the brand's own Reels.
- reels-content-strategy, creator-content-calendar (creator-resources/content-creation.ts): creator-side; 33 and 31 are brand-side (approvals, product priorities, UGC rights, team capacity). Not linked, to avoid steering brands to creator guides.
- instagram-trial-reels (creator-resources/instagram-creators.ts): linked from 22 for a step-by-step test routine.
- social-media-content-workflow, social-media-content-approval-process (smm-operations.ts): linked from 31 and 33; pipeline and approvals not re-explained.
- social-media-content-repurposing, social-media-brand-voice (smm-consistency.ts): linked from 30; only a short adaptation matrix kept.
- choose-social-media-platforms-for-business (Batch 01): linked from 30; platform choice not redone.
- seasonal-influencer-marketing-india: linked from 31 for creator-led seasonal planning.
- influencer-campaign-calendar, multi-platform-influencer-campaigns: influencer-side; checked, not linked.

## File: src/content/brand-guides/smm-platforms.ts

### Sources log: smm-platforms.ts (Batch 02, writer C)

All accessed November 2026 (12 Nov 2026). Meta help pages render client-side; where WebFetch returned no body, claims were confirmed from search-engine extracts of the official facebook.com pages only (no third-party summaries relied on). Claims from third-party sites were not used.

## 26 facebook-page-management-for-business

| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://about.fb.com/news/2021/01/introducing-the-new-page-experience/ | Meta Newsroom | 6 Jan 2021 | New Pages experience: followers replace likes; task-based admin access (content, messages, insights, ads) |
| https://www.facebook.com/help/289207354498410 | Facebook Help Centre, "About Facebook Page access" | undated | Full control vs partial (task-based) access; a Page must have at least one person with full control (also verified in Batch 01 log) |
| https://www.facebook.com/help/977869848936797 | Facebook Help Centre, "Add an action button to your Facebook Page" | undated | Action button added/edited from the Page's options menu |
| https://www.facebook.com/business/help/2150969905216708 | Meta Business Help Centre, "Change your Page's action button" | undated | A Page has one call-to-action button at a time (not linked; supports the sentence) |
| https://creators.facebook.com/blog/combating-unoriginal-content | Facebook for Creators | 14 Jul 2025 | Reposting others' content without meaningful changes is treated as unoriginal |
| https://www.facebook.com/business/help/294426838452244 | Meta Business Help Centre, "About Inbox in Business Suite" | undated | Inbox brings Facebook/Messenger, Instagram Direct messages and comments into one place; assign conversations |
| https://www.facebook.com/help/598453443693392 | Facebook Help Centre, "Create a Facebook group as your Facebook Page" | undated | A Page can create a group and post as the Page; groups can be linked to a Page (also business/help/2167010730015450 "Create or Join Groups as a Facebook Page") |
| https://www.facebook.com/business/help/1252240869631062 | Meta Business Help Centre, "Schedule a post and manage scheduled posts for your Facebook Page" | undated | Create a post and schedule it for the Page; calendar/planner shows scheduled posts and Stories; drafts; mobile app scheduling (also /2223502627919449, /609176706604372, /1170295510042639); troubleshoot failed scheduled posts and publish manually (/816464273497113) |
| https://creators.facebook.com/introducing-views-to-simplify-content | Meta for Creators | 14 Nov 2024 | "Views" replaces plays (reels/video) and impressions (photo/text, Stories) across Facebook and Instagram; repeat views count |
| https://www.facebook.com/business/help/167222830549113 | Meta Business Help Centre, "About stores on Facebook" | undated | Main Page plus store (location) Pages (verified in Batch 01; mentioned without link) |

## 27 linkedin-company-page-management

| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://www.linkedin.com/help/linkedin/answer/a541981 | LinkedIn Help, "LinkedIn Page admin roles" | undated | Super admin, Content admin, Analyst |
| https://www.linkedin.com/help/linkedin/answer/a548316 | LinkedIn Help, "LinkedIn Pages admin view features" | undated | Only super admins can edit a Page and add/remove admins; content admins post (not linked) |
| https://www.linkedin.com/help/linkedin/answer/a5993422 | LinkedIn Help, "Add a custom call-to-action button to your LinkedIn Page" | undated | Without Premium Company Page the button is only visible under "More"; feature still rolling out |
| https://www.linkedin.com/help/learning/answer/a5970273 | LinkedIn Help, custom CTA / visitor analytics | undated | "Visit website" is a button option; clicks shown in Visitor analytics (not linked) |
| https://www.linkedin.com/help/linkedin/answer/44863 | LinkedIn Help, "Create a LinkedIn Showcase Page" | undated | Showcase Pages spotlight a brand, business unit or initiative; super admin of parent required; up to 25 |
| https://www.linkedin.com/help/lms/answer/a565388 | LinkedIn Help, "Career Pages for your LinkedIn Page" | undated | Life tab available after purchasing a Career Page licence; shows leaders, culture, employee perspectives (also a550288) |
| https://www.linkedin.com/help/linkedin/answer/a518909 | LinkedIn Help, "Upload and share documents on LinkedIn" | undated | Documents can be uploaded to posts from a LinkedIn Page; PDF, PPT/PPTX, DOC/DOCX; max 100MB and 300 pages |
| https://www.linkedin.com/help/linkedin/answer/a596833 | LinkedIn Help, "Create a LinkedIn Page newsletter" | undated | Super or content admins can create a Page newsletter if they meet access criteria |
| https://www.linkedin.com/help/linkedin/answer/a554183 | LinkedIn Help, "Create a LinkedIn Event" | undated | Pages can organise events; LinkedIn Live format only if eligible (not linked) |
| https://www.linkedin.com/help/linkedin/answer/a6836874 | LinkedIn Help, "My Company tab and Employee Advocacy tab is no longer available" | undated | Gradually discontinued beginning November 2024; admins can reshare employees' @mentions from the Feed tab; external partners suggested |
| https://www.linkedin.com/help/linkedin/answer/a701208 | LinkedIn Help, "Combined post analytics" | undated | Impressions, members reached, engagements definitions |
| https://www.linkedin.com/help/linkedin/answer/126090 | LinkedIn Help, "Competitor analytics for your LinkedIn Page" | undated | Compare follower and organic content metrics with competitors; more competitors on Premium |

## 28 youtube-channel-management-for-brands

| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://support.google.com/youtube/answer/10456525 | YouTube Help, "Manage your channel branding" | undated | Profile picture, banner, video watermark edited in Studio > Customisation > Profile; watermark at end (last 15s), custom start time or entire video |
| https://support.google.com/youtube/answer/2972003 | YouTube Help, "Manage your YouTube channel's profile" | undated | Name, handle, description, links in the channel profile settings (not linked) |
| https://support.google.com/youtube/answer/9481328 | YouTube Help, channel permissions | undated | Manager, Editor, Viewer etc.; Editor can upload/publish but not manage permissions or delete channel |
| https://support.google.com/youtube/answer/15424877 | YouTube Help, Shorts length | undated | Shorts up to three minutes; square/vertical videos uploaded after 15 Oct 2024 |
| https://support.google.com/youtube/answer/141805 | YouTube Help, "YouTube performance FAQ & Troubleshooting" | undated | Search ranks on title, description, video content match and engagement; accurate titles/thumbnails; avoid misleading/sensational |
| https://support.google.com/youtube/answer/72431 | YouTube Help, custom thumbnails | undated | Custom thumbnails require a verified account |
| https://support.google.com/youtube/answer/9884579 | YouTube Help, video chapters | undated | First timestamp 00:00; at least three timestamps ascending; min chapter 10 seconds |
| https://support.google.com/youtube/answer/57792 | YouTube Help, "Create & manage playlists" | undated | Daily limit on public playlists a channel can create; manage in Studio |
| https://support.google.com/youtube/answer/9080341 | YouTube Help, Premieres | undated | Premiere instantly or schedule for date/time; countdown |
| https://support.google.com/youtube/answer/7628154 | YouTube Help, "Impressions and click-through rate FAQ" | undated | Impressions CTR definition; not every thumbnail sighting counts |
| https://support.google.com/youtube/answer/9314415 | YouTube Help, key moments for audience retention | undated | Key moments report shows how moments held attention; watch time; average view duration |

## 29 pinterest-marketing-for-business

| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://help.pinterest.com/en/business/article/get-a-business-account | Pinterest Help | undated | Business account is free; gives Analytics and ads; convert personal account keeping Pins and followers; business accounts are public |
| https://help.pinterest.com/en/business/article/claim-your-website | Pinterest Help | undated (approx. 2 years old per search metadata) | Must own domain and edit source code; marketplaces mostly can't be claimed; HTML tag/file/TXT record; one account per website; benefits of claiming |
| https://help.pinterest.com/en/article/create-a-pin-from-an-image-or-video | Pinterest Help | undated | Create Pins from images or videos |
| https://help.pinterest.com/en/article/create-a-collage | Pinterest Help | undated | Collages from cut-outs of Pins in the app (not linked) |
| https://help.pinterest.com/en/article/create-a-board-section | Pinterest Help | undated | Board sections (not linked) |
| https://help.pinterest.com/en/business/article/pin-performance-and-distribution | Pinterest Help | undated | High-quality images; publish fresh Pins; create original content weekly; repeated saves may be flagged as spam; no set engagement window; Pins resurface seasonally |
| https://help.pinterest.com/en/article/use-visual-search-features | Pinterest Help | undated | Visual search within Pins; Lens via camera; not available on ads or collage Pins |
| https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs | Pinterest Help | undated | Product Pins show title, description, price, availability; catalogs from data source; Catalogs not available in all regions (India status NOT confirmed) |
| https://help.pinterest.com/en/business/article/promoted-pins-overview | Pinterest Help, "Ads overview" | undated | India listed under advertising partners, not direct ad-account countries; shopping ads only in some markets |
| https://help.pinterest.com/en-gb/business/article/pin-stats | Pinterest Help, "Review your Pin stats" | undated | Impressions, saves, Pin clicks, outbound clicks definitions; video views, average play time |

## Facts dropped or softened (not verified from official sources)
- Facebook: Meta Business Suite scheduling window (sources conflict: 29 / 30 / 75 days); max Groups per Page; Facebook Page Insights metric labels beyond "views" (described generically and told readers labels change).
- LinkedIn: full list of custom button labels ("Contact us" also appears in LinkedIn help but omitted to avoid CTA-like wording); Page newsletter follower thresholds and one-newsletter-per-Page limit (third-party only); LinkedIn Live follower threshold.
- YouTube: banner/watermark pixel sizes (left out); thumbnail resolution specs (left out); exact handle rules.
- Pinterest: whether Catalogs/shopping is available in India (stated as unconfirmed); recommended Pin aspect ratio; Idea Pins (not described as a current format); hashtags guidance (FAQ avoids claims).
- No statistics used in any article.

## Existing Kudozz articles checked for overlap
choose-social-media-platforms-for-business, social-media-management-multiple-locations, community-management-vs-customer-support, social-media-kpis, social-media-content-repurposing, outsourcing-social-media-management-checklist, social-media-reporting-for-founders, employee-influencer-marketing, linkedin-thought-leadership-marketing, linkedin-influencer-marketing-india, youtube-seo-for-creators, youtube-shorts-vs-long-form, youtube-influencer-marketing-india, pinterest-influencer-marketing-india, pinterest-product-marketing-creators. Sister Batch 02 links: monthly-social-media-content-calendar, manage-multiple-social-media-accounts, social-media-management-saas-companies.

## File: src/content/brand-guides/smm-creative.ts

### Sources log: smm-creative.ts (Writer D, Batch 02)

All accessed November 2026 (11 Nov 2026). Instagram Help pages render client-side; WebFetch returned only the page shell, so content was confirmed from search-engine extracts of the official help.instagram.com pages (no third-party summaries relied on for claims). LinkedIn, W3C and PIB pages were read directly.

## 32 social-media-content-from-customer-questions
| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://help.instagram.com/249714943742850/ | Instagram Help Centre ("Reply to a comment on your reel with a new reel") | undated | You can reply to a comment on your reel with a new reel (feature exists; dated "at the time of writing") |
| https://help.instagram.com/818507804873835 | Instagram Help Centre ("Adding Effects & Filters", questions sticker) | undated | Questions sticker; when you share a response, the responder's photo and username aren't shown |
| https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf | Press Information Bureau (MeitY backgrounder "DPDP Rules, 2025 Notified") | 17 Nov 2025 | DPDP Act, 2023 governs personal data; DPDP Rules notified November 2025 with phased compliance (same source verified by Batch 01 writers; no deadlines stated) |

No statistics. Home-cleaning brand example labelled hypothetical. No testimonials or reviews quoted.

## 34 social-media-graphic-design-for-business
| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://help.instagram.com/1631821640426723/ | Instagram Help Centre ("Image resolution of photos you share on Instagram") | undated | Photos shared at a width of up to 1080 pixels |
| https://help.instagram.com/1038071743007909 | Instagram Help Centre ("Reel size & aspect ratios") | undated | Reels can have an aspect ratio between 1.91:1 and 9:16 |
| https://help.instagram.com/503708446705527 | Instagram Help Centre ("How do I edit the alternative text for a photo") | undated | Write alt text in Advanced settings before posting; edit afterwards; automatic alt text that can be replaced |
| https://www.linkedin.com/help/linkedin/answer/a519856 | LinkedIn Help ("Add alternative text to images for accessibility") | undated (read directly) | Alt text on images shared in feed or embedded in articles; LinkedIn may add alt text automatically |
| https://help.instagram.com/7487270478066359/ | Instagram Help Centre ("Manage closed captions for your reels") | undated | Automatic closed captions for reels (speech recognition) |
| https://support.google.com/youtube/answer/6373554 | YouTube Help ("Use automatic captioning") | undated | Automatic captions quality varies; review and edit them |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | W3C WAI (Understanding SC 1.4.3) | updated 4 Oct 2026 (read directly) | Contrast at least 4.5:1 normal text, 3:1 large text |
| https://www.pib.gov.in/PressReleasePage.aspx?PRID=1983994&reg=48&lang=2 | Press Information Bureau (Dept of Consumer Affairs) | Dec 2023 release (read directly via curl) | CCPA issued Dark Patterns Guidelines 30 Nov 2023 (13 patterns incl. drip pricing, bait and switch, false urgency); Misleading Advertisements guidelines notified 9 Jun 2022 incl. stipulations on bait and free claim ads |

AI-assisted design labelled as practitioner practice.

## 35 social-media-content-mix-ugc-brand-product
| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://help.instagram.com/291200585956732 | Instagram Help Centre (collaborative posts) | undated | When an invited account accepts, its username is added and the post is shared with its followers |
| https://creators.instagram.com/faq?locale=en_US | Instagram for Creators FAQ | undated (verified by Batch 01 Writer C) | Less likely to recommend reposts of content already on Instagram or content with noticeable watermarks |
| https://www.facebook.com/business/help/221149188908254 | Meta Business Help Centre (Branded Content Policies) | undated | Paid partnership label required on branded content |
| https://www.ascionline.in/wp-content/uploads/2023/08/GUIDELINES-FOR-INFLUENCER-ADVERTISING-IN-DIGITAL-MEDIA.pdf | ASCI Guidelines for Influencer Advertising in Digital Media | 2021 guidelines (PDF Aug 2023; verified by Batch 01) | Upfront, clear disclosure where material connection exists |

No ratios or benchmarks given; reasoning method only. Kitchenware example labelled hypothetical.

## 36 social-media-management-d2c-brands
| URL | Publisher | Date | Claim supported |
|---|---|---|---|
| https://www.ascionline.in/the-asci-code/ | ASCI | undated current Code (verified by Batch 01) | Advertising claims must be truthful and capable of substantiation |
| https://www.pib.gov.in/PressReleasePage.aspx?PRID=1983994&reg=48&lang=2 | PIB (Dept of Consumer Affairs) | as above | Dark patterns guidelines Nov 2023 naming false urgency, drip pricing, bait and switch |

No statistics on Indian D2C, COD share or festive sales.

## Facts dropped (couldn't verify, or sources conflicted)
- Instagram feed photo aspect ratio range: Help Centre pages conflict (1.91:1 to 4:5 vs 1.91:1 to 3:4), so not stated.
- Meta ads feed ratio recommendations (1:1 vs 4:5 conflicts; also ads, not organic).
- Instagram collab post collaborator limit (only third-party quotes).
- LinkedIn alt text character limit (only third-party Pulse posts, conflicting).
- Instagram Reels maximum length (dated help page).
- Marketplace (Amazon/Flipkart) attribution tool names and eligibility: described generically ("whatever attribution tools your marketplace seller programme offers, where available").
- Instagram product tagging/Shopping availability in India: not mentioned.

## Existing Kudozz articles checked for overlap
- customer-insights-influencer-brief (sourcing and prioritising questions for creator briefs; 32 links it and covers own-channel formats only)
- customer-testimonials-ugc (permission, evidence, selection; 32 links it, not repeated)
- community-management-vs-customer-support (Batch 01; linked from 32)
- social-media-brand-voice (Batch 01; linked from 34), influencer-brand-consistency (creator briefing side; in 34 related)
- social-media-content-approval-process (Batch 01; linked from 34 for checklist placement)
- ugc-marketing-strategy, always-on-ugc-marketing, instagram-ugc-marketing (UGC programmes; 35 links ugc-marketing-strategy and covers the calendar mix only)
- ugc-content-usage-rights (linked from 35 for rights detail)
- social-media-content-repurposing (Batch 01; linked from 35)
- influencer-marketing-d2c-brands-india, ugc-marketing-d2c-brands, social-commerce-india-d2c-brands (36 links the first two, third in related)
- social-media-kpis (Batch 01; linked from 36)
- Sisters linked: 23 instagram-stories-for-business, 24 instagram-carousel-strategy (32, 34), 22 instagram-reels-strategy-for-brands (35, 36), 31 monthly-social-media-content-calendar (35), 35 (from 36)
