# Kudozz backlink strategy

Date: 2026-10-19. Site: https://www.kudozz.in. Scope: off-page authority for the brand, the 18 service pages, the six market pages and the agency guides.

## 1. Where we're starting

| Fact | What it means for link building |
| --- | --- |
| The repo's first commit is 2026-09-05. The domain is roughly six weeks old. | Authority is close to zero. The first 3–6 months matter most, and a sudden spike of low-quality links on a new domain looks unnatural. |
| 981 live URLs, 889 of them articles | There's plenty of content, but nothing that only Kudozz has. Generic "what is UGC" guides rarely earn links. |
| 15+ interactive tools already exist (pricing, break-even, budget allocator, ROI forecast, talent scorecard, vetting and contract checklists), plus 2 CSV templates | These are the best link assets on the site today. They're buried inside articles, and there's no tools hub. |
| Strong regulatory content: disclosure rules by country, the UAE advertiser permit, ASCI labels, DPDP | Journalists and other agencies cite this kind of reference material, and every rule change gives it a news hook. |
| 64 agency comparison and location guides that name other agencies | This is a legitimate reason to contact those agencies (see §4.7). |
| No named authors, case studies, client count or verified stats; no Search Console | This is the biggest blocker. Digital PR and expert quotes need a named person and real data, and without Search Console nothing can be measured. |
| The ZSpace Labs exchange is already `rel="sponsored"` with a disclosure | This is correct. Keep it that way, and don't add more reciprocal arrangements. |

**The strategy in one line:** earn links with things only Kudozz can publish (original Indian creator-market data, regulatory trackers, free tools), put a named expert in front of journalists, and use directories and partnerships only as a base, not as the plan.

## 2. Rules (non-negotiable)

Google's link-spam policy and the site's own claims rules both apply.

- **Never buy followed links.** No PBNs, link packages, Fiverr or "DA 50 guest post" sellers, link exchanges, or automated comment and forum links. A paid placement, a sponsorship or a swap must be `rel="sponsored"` with a disclosure, as ZSpace is.
- **No unverified claims in pitches or bylines.** No "40k+ creators", no "best agency in India", no client names without written permission. The rules in `public/llms.txt` apply to outreach too.
- **Anchor text is the publisher's choice.** Never ask for exact-match anchors such as "best influencer marketing agency in India". The natural mix is mostly brand, URL and topic anchors.
- **Quality over count.** One link from a page that marketers in India actually read (afaqs!, Social Samosa, Inc42) is worth more than 50 directory links.
- **Don't publish rate tables we can't source** (owner rule). The research in §4.1 has to publish its method.

## 3. Owner decisions needed first

| # | Decision | Why it blocks links |
| --- | --- | --- |
| 1 | **Name one spokesperson** (founder or head of strategy), with a real bio page at `/about`, a LinkedIn profile and a headshot | Journalist-request platforms, bylines, podcasts and speaker slots all need a person. "The Kudozz team" isn't quoted. |
| 2 | **Approve a `/tools` hub page** that collects the existing calculators and templates | It gives one URL to pitch and lets that page pass its links on to the rest of the site. |
| 3 | **Approve a research budget** for one original study per quarter | Original data is the main source of editorial links (see §4.1). |
| 4 | **Collect 1–3 real case studies or testimonials** with written client permission | Needed for Clutch and GoodFirms reviews, award entries and credible pitches. |
| 5 | **Connect Google Search Console, Bing Webmaster Tools and Ahrefs Webmaster Tools** (free) | Shows current links, toxic links and results. Nothing can be measured without them. |

## 4. The plays, by expected value

### 4.1 Original research and data PR (highest value)

Indian marketing trade media cover data constantly, and most "rate guides" in India publish no method. A study with a disclosed method fills that gap.

| Study | Method | Hook | Target URL |
| --- | --- | --- | --- |
| **India Creator Rates Report 2027** | Survey creators through the `/for-creators` application flow, the newsletter and creator communities. Target n ≥ 300, split by tier, platform and niche. Publish medians and ranges, sample size and questionnaire. | "What creators actually charge, with the method published." This fixes the problem with unsourced rate tables. | New `/research/creator-rates-2027` page plus a downloadable CSV |
| **Ad disclosure compliance study** | Manually audit a sample of sponsored posts in India and the UAE (for example 500 posts across top creators by category), checking ASCI labels and UAE permit disclosure. | "X% of sponsored posts don't follow ASCI's disclosure rules." It's newsworthy and reinforces Kudozz's compliance expertise. | A research page that links to `influencer-disclosure-rules-by-country` |
| **Brand marketer survey: influencer budgets 2027** | Survey D2C founders and marketing leads through LinkedIn, the newsletter and partners. | Budget outlook articles in January | A research page that links to the budget allocator |
| **Regulation tracker** (ongoing) | Keep the disclosure-rules-by-country page current, with a dated changelog. | Every rule change (NMA permit, ASCI, ASA, CCPA greenwashing) | The existing owner page |

How to run each one: publish the page with charts, a method section and an embeddable chart image, then send a press note to 30–50 relevant journalists (§5) under a 48-hour exclusive offered to one outlet first. After that, pitch the data to bloggers who write rate and budget posts, as a source they can cite.

### 4.2 Free tools as link magnets

- Build `/tools` (needs owner approval) that lists every calculator and checklist, each with its own short intro.
- Consider standalone tool pages for the strongest three: the **influencer budget allocator**, **campaign cost calculator** and **creator pricing calculator**. A tool URL earns links more easily than an article that happens to contain a tool.
- Add a small "Cite or embed this tool" line with the canonical URL.
- Promote the tools to:
  - "free influencer marketing tools" and "creator tools" resource lists (find them with searches such as `"influencer marketing" "free tools" inurl:resources`)
  - university and MBA marketing course resource pages (`site:ac.in` and `site:edu` searches)
  - creator-economy newsletters and Product Hunt-style launch sites
  - the CSV templates on template galleries (Notion and Google Sheets template directories)

### 4.3 Expert commentary (named spokesperson required)

Answer journalist requests every day. It takes 20–30 minutes.

| Platform | Markets |
| --- | --- |
| Qwoted, Featured.com, Help a B2B Writer | Global; mostly US, UK and India |
| `#journorequest` and `#prrequest` on X and LinkedIn | UK, India |
| SourceBottle | Australia, Singapore |
| ResponseSource (paid) | UK |

Answer only in the spokesperson's real areas: influencer budgets, creator vetting, disclosure rules, UGC, India and Gulf creator markets. Keep each reply under 150 words, with one concrete insight and no sales pitch. Expect about 1 link for every 10–15 good replies.

### 4.4 Bylines and contributed articles in trade media

Pitch opinion and how-to pieces built on Kudozz's real expertise, not reused blog posts.

| Market | Publications to approach |
| --- | --- |
| India (priority) | afaqs!, Social Samosa, BestMediaInfo, exchange4media, ET BrandEquity, Campaign India, Inc42, YourStory, Entrackr |
| UAE / Saudi | Campaign Middle East, Arabian Business, Gulf Business |
| UK | The Drum, Marketing Week, Campaign UK (opinion desks) |
| Singapore / Australia | Marketing-Interactive, Mumbrella, B&T |

Pitch angles that suit Kudozz's existing expertise:
- "What the UAE advertiser permit means for Indian D2C brands running Gulf campaigns"
- "Why follower count is the wrong first filter: a creator vetting framework"
- "Barter vs paid vs seeding: what Indian brands get wrong"
- A data angle drawn from each §4.1 study

Aim for 2 bylines a month. Usually the author bio carries the link, and the in-article link is the editor's call.

### 4.5 Partnerships and the wider ecosystem

- **Startup incubators and accelerators:** offer portfolio companies a free influencer campaign audit (based on the existing `influencer-marketing-audit` framework). Their "perks" and "partners" pages link out. Candidates include Indian incubators, D2C accelerators and VC platform-perk programmes.
- **Universities and MBA marketing clubs:** offer guest lectures, case-competition judging or a creator-economy workshop. Event pages on `.ac.in` and `.edu` link to speakers.
- **Events and podcasts:** speaker pages at D2C, e-commerce and marketing events, plus guest spots on Indian marketing and founder podcasts. Show notes link to the guest.
- **Tool vendors Kudozz really uses** (contract, payment, analytics and social tools): write testimonials and appear in case studies. Only use tools you actually use.
- **Shopify and D2C ecosystem:** agency partner directories you genuinely qualify for.

### 4.6 Foundational profiles (week 1 or 2, once only)

These links are low-value one by one, but they establish the entity and its NAP (name, address, phone) consistency. Do them once, carefully, with the same description each time (taken from `llms.txt`). Don't buy them.

- **Company profiles:** LinkedIn company page, Crunchbase, Tracxn, the Startup India (DPIIT) listing if eligible, and the Google Business Profile for the registered Indian address only.
- **Agency directories:** Clutch, GoodFirms, DesignRush, Sortlist, the Influencer Marketing Hub agency directory and agencyspotter. Clutch and GoodFirms rank well once they have **real verified client reviews** (decision 4).
- **Social profiles:** YouTube, Instagram, X, Medium and Substack, with links back to the site.
- **Don't** create Google Business Profiles in the UAE, UK, Singapore or Australia. There are no offices there, and a profile would imply local presence.

### 4.7 Outreach from the agency comparison guides

The 64 location and specialist-agency guides already name real agencies. Send each listed agency a short, friendly note that it's featured, with the URL. Many will share or link to the page without being asked. **Don't make the listing conditional on a link, and don't offer a link swap.** That would make the guides look like a link scheme and damage their credibility.

### 4.8 Unlinked mentions and link reclamation

- Set Google Alerts and Ahrefs Alerts for `"Kudozz"` and `"kudozz.in"`. Exclude the similarly named products and blogs flagged in `llms.txt`.
- When Kudozz is mentioned without a link, send a polite request to add one.
- Check Ahrefs Webmaster Tools monthly for links pointing to 404s or redirected URLs. The 36 consolidated articles already redirect in a single hop, which is fine.

### 4.9 Resource pages and broken-link building

- Find "influencer marketing resources" and "creator economy resources" pages, especially Indian ones, with searches like `intitle:resources "influencer marketing"` and `"useful links" "creator"`.
- Use Ahrefs to find their **broken outbound links** to dead guides, pitch the matching Kudozz guide or tool as a replacement.
- Suitable replacement pages: the disclosure rules page, the UAE permit guide, the budget template, the vetting checklist, and the Singapore and Australia guides.

### 4.10 Community presence (mainly for discovery and brand demand)

Reddit (r/IndianStartups, r/digital_marketing, r/Influencermarketing), Quora, LinkedIn and Indian D2C founder communities. These links are mostly nofollow. Their value is that people find the tools and studies there, and some of those people later cite them. Answer first, and link only when the link is the best answer. Never post the same thing across many threads.

## 5. Outreach execution

**Prospect tracker:** one row per prospect, with prospect URL, contact, market, play (§4.x), target Kudozz URL, date pitched, follow-up date, status and link URL with its rel attribute. Two follow-ups at most, 5–7 days apart.

**Finding contacts:** author pages, LinkedIn, Hunter or Apollo (free tiers). Never email harvested lists in bulk.

**Volume:** 15–25 personalised pitches a week is enough. Personalisation matters more than volume.

**Templates (short, adapt every time):**

> **Data pitch.** Subject: New data: what Indian creators charge (n=3xx, method published)
> Hi {name}, you covered {their recent piece} last month. We surveyed {n} Indian creators on rates by tier and platform, and published the full method and raw ranges here: {url}. Two findings that might fit your coverage: {finding 1}; {finding 2}. Happy to share the chart files or set up a call with {spokesperson}. {signature}

> **Broken link.** Subject: Dead link on your {topic} resources page
> Hi {name}, the {link text} link on {page} returns a 404. If you want a replacement, our {page title} covers the same ground and is kept up to date: {url}. Either way, thought you'd want to know. {signature}

> **Featured agency.** Subject: {Agency} is in our {city} {service} agency guide
> Hi {name}, we included {agency} in our guide to {service} agencies in {city}: {url}. We listed you because your site names {service} as a service and publishes a {city} location. If anything is out of date, tell us and we'll correct it. {signature}

## 6. Which pages links should point to

| Link target | Share of effort | Why |
| --- | --- | --- |
| Research pages and `/tools` | ~50% | These are what people actually cite. |
| Regulatory references (disclosure rules, UAE permit, ASCI) | ~20% | Often cited, and they support compliance credibility. |
| Homepage and `/about` | ~15% | Brand and bio links from bylines, profiles and speaker pages. |
| Service, market and location guides | ~15% | Rarely linked directly. They get authority through internal links from the pages above. |

**Internal linking is half the job.** Every research and tool page must link clearly to the matching service page (for example, creator rates → `/services/creator-discovery` and `/services/paid-influencer-campaigns`, and the disclosure study → `/services/campaign-strategy` and the UAE market page). Earned authority only reaches the commercial pages through these links.

## 7. 90-day plan

| Weeks | Dates | Work |
| --- | --- | --- |
| 1–2 | 20 Oct – 2 Nov 2026 | Owner decisions 1–5. Connect Search Console, Bing and Ahrefs Webmaster Tools and record the baseline. Set up foundational profiles (§4.6). Build `/tools`. Set alerts. Join the journalist platforms. |
| 3–4 | 3 – 16 Nov | Start journalist replies daily. Send notes from the comparison guides (§4.7) in batches of 10 a week. Prospect resource pages and broken links. Launch the creator rates survey. |
| 5–8 | 17 Nov – 14 Dec | First 2–4 byline pitches to Indian trade media. Contact incubators and universities. Run the disclosure compliance study (data collection). Keep tools outreach going. |
| 9–12 | 15 Dec 2026 – 11 Jan 2027 | Publish the disclosure study and pitch it. Close the creator rates survey and publish in early January, timed for "2027 outlook" coverage. Review what's working and reallocate effort. |

**Ongoing cadence after 90 days:** one study a quarter, two bylines a month, daily journalist replies, monthly reclamation and broken-link checks, and quarterly updates to the regulation tracker.

## 8. Measuring results

These are targets to calibrate once the baseline exists, not forecasts.

| Metric | Source | 90-day target | 6-month target |
| --- | --- | --- | --- |
| New referring domains, relevant and editorial (excluding directories) | Ahrefs Webmaster Tools / Search Console Links report | 10–15 | 30–50 |
| Links from Indian marketing and startup trade media | Prospect tracker | 3+ | 10+ |
| Share of new links pointing to pages other than the homepage | Search Console Links report | >50% | >60% |
| Branded search impressions ("kudozz") | Search Console | Baseline | Growing month on month |
| Rankings of service and market pages for target queries | Search Console | Baseline | Measured against the baseline |
| Inquiries from referral traffic | GA4 | Tracked | Tracked |

**Monthly hygiene:** check the Links report for spammy domains pointing at the site. New sites attract them, and they're normally just ignored. Use the disavow file only if there's a manual action or a clear pattern of paid or negative-SEO links.

## 9. What not to do

- Buy "high DA" guest posts or link packages, or accept "free" links that are actually swaps.
- Pursue hundreds of directory submissions, web 2.0 blogs or profile links.
- Publish AI-spun guest posts on low-quality "write for us" sites.
- Use exact-match anchors, especially "best influencer marketing agency in India", which is still unsubstantiated.
- Imply offices or local teams outside India in any profile or pitch.
- Use client names, logos or results without written permission.
- Add more reciprocal arrangements like ZSpace without `rel="sponsored"` and a disclosure.
