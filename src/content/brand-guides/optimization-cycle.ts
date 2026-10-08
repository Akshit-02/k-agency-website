import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

const OPT_PUBLISHED = "2026-10-08";
const OPT_REVIEWED = "October 2026";

/**
 * Optimization and iteration cluster (1250–1269). Six new pages built on the distinction
 * measure (what happened) → analyse (why) → optimise (what to change) → test (what to compare) → iterate (next time).
 * Seven topics expanded existing owners (scorecard, repeat collaborations, retention, data analytics, feedback loop);
 * see docs/campaign-optimization-1250-1269-audit.md.
 */
export const optimizationCyclePosts: BlogPost[] = [
  {
    slug: "influencer-campaign-optimization",
    category: "Campaign Strategy",
    title: "Influencer Campaign Optimization: How Brands Can Improve Campaign Performance",
    seoTitle: "Influencer Campaign Optimization: What to Change and When",
    excerpt:
      "A practical optimization system for creator campaigns: the levers brands control before, during and after a campaign, how to decide what to change, the optimization cycle that improves each campaign, and a repeatable playbook.",
    metaDescription:
      "How to optimize influencer campaigns: levers before, during and after launch, deciding what to change, an iteration cycle and a repeatable playbook.",
    author: AUTHOR,
    publishedAt: OPT_PUBLISHED,
    lastReviewed: OPT_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer campaign optimization", "optimize influencer campaign", "influencer campaign iteration", "creator campaign playbook", "improve influencer campaign performance"],
    related: ["mid-campaign-optimization", "influencer-campaign-underperformance", "influencer-marketing-testing"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-optimization.svg",
      alt: "Optimization cycle: measure what happened, analyse why, change the right lever, test deliberately and carry learnings into the next campaign",
    },
    body: [
      {
        type: "paragraph",
        text: "Most influencer reports end with a page called 'learnings' that nobody acts on. The next campaign starts with a new brief, a new shortlist and the same assumptions. Optimization is the discipline of changing something on purpose because of what the last campaign showed, and checking whether the change worked.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer campaign optimization means using what a campaign shows to change the things that most affect results: creator selection, the brief and creative angle, format and platform, the offer and call to action, timing, amplification and the landing experience. Some changes can be made while a campaign is live; most of the biggest gains come between campaigns. Work in a cycle: measure what happened, analyse why, change one or two levers, test where you can, and record what you learned for the next campaign.",
      },
      { type: "heading", text: "Measure, analyse, optimise, test, iterate", id: "cycle" },
      {
        type: "table",
        headers: ["Step", "Question", "Guide"],
        rows: [
          ["Measure", "What happened?", "Influencer marketing KPIs; influencer marketing report"],
          ["Analyse", "Why did it happen?", "Influencer data analytics; influencer content performance"],
          ["Optimise", "What should we change?", "This guide; mid-campaign optimization"],
          ["Test", "What should we deliberately compare?", "Influencer marketing testing"],
          ["Iterate", "What do we do differently next time?", "Influencer campaign post-mortem"],
        ],
      },
      {
        type: "paragraph",
        text: "Each step has a guide: influencer marketing KPIs, influencer data analytics, influencer content performance, mid-campaign optimization, influencer marketing testing and influencer campaign post-mortem. Measurement tells you what happened; optimization is about what you do with it.",
        links: [
          { text: "influencer marketing KPIs", href: "/blog/influencer-marketing-kpis" },
          { text: "influencer data analytics", href: "/blog/influencer-data-analytics" },
          { text: "influencer content performance", href: "/blog/influencer-content-performance" },
          { text: "mid-campaign optimization", href: "/blog/mid-campaign-optimization" },
          { text: "influencer marketing testing", href: "/blog/influencer-marketing-testing" },
          { text: "influencer campaign post-mortem", href: "/blog/influencer-campaign-post-mortem" },
        ],
      },
      { type: "heading", text: "The levers you control", id: "levers" },
      {
        type: "table",
        headers: ["Lever", "What it changes", "When you can change it"],
        rows: [
          ["Creator selection and mix", "Who reaches which audience; role balance", "Mostly before booking; reserve slots during"],
          ["Brief and creative angle", "What creators say and how", "Before production; adjustments for later creators"],
          ["Hook and opening", "Whether people stop scrolling", "Before production; reshoots only by agreement"],
          ["Format and platform", "Reels vs long-form vs Stories; Instagram vs YouTube", "Before booking; extra deliverables by agreement"],
          ["Offer and CTA", "What people are asked to do and why now", "Often during (codes, landing pages, offer terms)"],
          ["Timing and sequence", "When content lands relative to sales, festivals, launches", "Before and during (go-live windows)"],
          ["Amplification", "Paid reach behind the best organic posts", "During and after, with usage permissions"],
          ["Landing experience", "Page, price, stock, delivery", "Any time; often the fastest fix"],
          ["Tracking", "Whether you can see what's working", "Before launch; fixes during"],
        ],
      },
      {
        type: "paragraph",
        text: "The last two levers sit outside the creator relationship and are often where weak results really come from. A great Reel sending people to a slow, English-only page with a sold-out product will look like a creator problem in the report.",
      },
      { type: "heading", text: "How to decide what to change", id: "decide" },
      {
        type: "template",
        label: "Optimization decision steps",
        text: "1. Is the problem real? Compare with your baseline, same capture day, same objective.\n2. Where in the funnel does it break? Reach → attention → engagement → click → conversion.\n3. What's the likeliest cause at that point? (creator, content, strategy, distribution, measurement, offer)\n4. Which lever addresses that cause, and can you change it now without breaking an agreement?\n5. Change one or two things, not everything.\n6. Decide in advance how you'll know if it worked.",
      },
      {
        type: "paragraph",
        text: "When results are weak, influencer campaign underperformance has a diagnostic table for separating creator, content, strategy, distribution, measurement and offer problems.",
        links: [{ text: "influencer campaign underperformance", href: "/blog/influencer-campaign-underperformance" }],
      },
      { type: "heading", text: "Optimizing across campaign cycles", id: "iteration" },
      {
        type: "paragraph",
        text: "The biggest improvements usually come from changing the next campaign, not rescuing the current one. Treat each campaign as a version of the last:",
      },
      {
        type: "table",
        headers: ["Carry forward", "Change", "Test"],
        rows: [
          ["Creators who performed in their role", "Creators who underperformed for reasons in their control", "One new creator segment"],
          ["Angles and hooks that worked", "Brief points that confused creators", "One new angle or format"],
          ["Offer mechanics that converted", "Landing pages or offers that leaked", "One offer or CTA variation"],
          ["Timing that worked", "Approval or shipping steps that caused delays", "A different timing window"],
        ],
      },
      {
        type: "paragraph",
        text: "Keeping most things stable while changing a few is what lets you learn what actually caused a difference. Influencer marketing testing covers how to structure those comparisons.",
        links: [{ text: "Influencer marketing testing", href: "/blog/influencer-marketing-testing" }],
      },
      { type: "heading", text: "A repeatable optimization playbook", id: "playbook" },
      {
        type: "template",
        label: "Optimization playbook",
        text: "BEFORE LAUNCH\n□ One primary KPI and baseline agreed\n□ Tracking (links, codes, capture days) set up and tested\n□ Reserve creators and flexible budget identified\n□ One or two test variables chosen deliberately\n\nFIRST DAYS LIVE\n□ Daily check of early signals: views, saves, shares, comments, clicks\n□ Fix leaks: links, codes, landing page, stock\n□ Identify standout content for amplification (if rights allow)\n□ Adjust brief notes for creators who haven't posted yet\n\nMID-CAMPAIGN\n□ Rebalance remaining budget towards what's working, within agreements\n□ Answer recurring audience questions in remaining content\n\nAFTER\n□ Results at fixed capture days; scorecards\n□ Post-mortem: what to keep, change, test\n□ Learnings register updated; next brief and shortlist adjusted",
      },
      {
        type: "paragraph",
        text: "Mid-campaign optimization covers the live-campaign steps in detail, and influencer campaign post-mortem covers the after-campaign review.",
        links: [
          { text: "Mid-campaign optimization", href: "/blog/mid-campaign-optimization" },
          { text: "influencer campaign post-mortem", href: "/blog/influencer-campaign-post-mortem" },
        ],
      },
      { type: "heading", text: "Optimization in Indian campaigns", id: "india" },
      {
        type: "list",
        items: [
          "Analyse by language and state: a campaign that looks average nationally may be strong in one region and weak in another.",
          "For cash-on-delivery-heavy categories, optimise on delivered orders, not placed orders.",
          "Marketplace sales may rise without showing in your link tracking; compare marketplace sales in campaign periods and regions against a baseline.",
          "Festival and sale periods distort comparisons; compare like with like.",
          "Regional landing pages and creator codes often lift conversion more than changing creators.",
        ],
      },
      {
        type: "paragraph",
        text: "Measuring influencer campaign ROI covers attribution for marketplace sellers.",
        links: [{ text: "Measuring influencer campaign ROI", href: "/blog/measuring-influencer-campaign-roi" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Changing creators, brief, offer and timing all at once, so nothing is learned.",
          "Judging content on day one when some formats build over weeks.",
          "Optimising for a vanity metric that isn't the campaign's objective.",
          "Blaming creators for landing page, offer or stock problems.",
          "Writing learnings nobody uses in the next brief.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Optimization is changing the right lever for the right reason and checking it worked. Know which levers you control at each stage, find where the funnel breaks before deciding what to change, change a few things at a time, test deliberately and carry learnings into the next campaign. Each cycle should make the next one better.",
      },
    ],
    faqs: [
      {
        question: "What is influencer campaign optimization?",
        answer:
          "Using what a campaign shows to change the factors that most affect results (creator mix, brief, format, offer, timing, amplification, landing experience) and checking whether the change worked, during the campaign and between campaigns.",
      },
      {
        question: "How do you optimize an influencer campaign?",
        answer:
          "Confirm the problem against a baseline, find where the funnel breaks, identify the likely cause, change one or two levers you can change without breaking agreements, decide how you'll judge the change, and record what you learn for the next campaign.",
      },
      {
        question: "Can influencer campaigns be optimized while they're live?",
        answer:
          "Partly: offers, links, landing pages, amplification, budget for remaining creators and brief notes for creators who haven't posted yet can often change. Published content and agreed deliverables usually can't without creator agreement.",
      },
    ],
  },
  {
    slug: "mid-campaign-optimization",
    category: "Campaign Strategy",
    title: "Influencer Campaign Mid-Flight Optimization: What Brands Can Change While a Campaign Is Live",
    seoTitle: "Mid-Campaign Influencer Optimization: What You Can Change",
    excerpt:
      "What brands can realistically change during a live creator campaign, organised by stage (before production, before publishing, after publishing) and by what needs creator approval, with early signals to watch and a mid-campaign checklist.",
    metaDescription:
      "What brands can change in a live influencer campaign: before production, before publishing and after posting, what needs creator consent, and a checklist.",
    author: AUTHOR,
    publishedAt: OPT_PUBLISHED,
    lastReviewed: OPT_REVIEWED,
    readingTime: "6 min read",
    tags: ["mid-campaign optimization", "influencer campaign mid-flight", "live influencer campaign optimization", "creator campaign optimization checklist", "adjust influencer campaign"],
    related: ["influencer-campaign-optimization", "influencer-content-performance", "influencer-campaign-underperformance"],
    hero: {
      src: "/blog/brand-guides/mid-campaign-optimization.svg",
      alt: "What can change mid-campaign, by stage: before production, before publishing and after publishing, with creator approval where needed",
    },
    body: [
      {
        type: "paragraph",
        text: "The first creator posts are live. One Reel is clearly working; two are quiet; ten creators haven't posted yet. This is the most useful moment in a campaign, because there's real evidence and still room to act. It's also when brands most often overreach, asking creators to reshoot published content or changing briefs in ways their agreements don't cover.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "While an influencer campaign is live, brands can usually change the offer, links, codes, landing pages and stock; amplify strong posts where usage rights allow; shift remaining budget and reserve slots towards what's working; and give creators who haven't produced yet better brief notes based on early results. Changes to content that's already approved or published, extra deliverables or new requirements need the creator's agreement and often extra payment. Act on early signals, but don't judge slower-building formats too soon.",
      },
      { type: "heading", text: "What can change, by stage", id: "by-stage" },
      {
        type: "table",
        headers: ["Stage", "Usually possible", "Needs creator agreement"],
        rows: [
          ["Before production (creator hasn't filmed)", "Brief notes and emphasis within the agreed scope; hooks and angles suggested from early winners; product variant", "New mandatory points, different concept, extra deliverables"],
          ["Before publishing (draft approved, not live)", "Caption, link, code, posting time within window", "Re-editing or reshooting approved content"],
          ["After publishing", "Brand-side: offer, landing page, stock, replies to comments, amplification (with permission)", "Editing the live post (beyond fixes for errors or compliance), adding Stories or reposts"],
          ["Campaign level", "Budget for unbooked or reserve creators; go-live order within windows; paid budget", "Moving agreed go-live dates; cancelling booked creators (follow agreement terms)"],
        ],
      },
      {
        type: "paragraph",
        text: "Compliance fixes (disclosure, unapproved claims) are always required, at any stage. Everything else should respect what was agreed. Creator non-compliance and influencer revision policy cover those boundaries.",
        links: [
          { text: "Creator non-compliance", href: "/blog/creator-non-compliance" },
          { text: "influencer revision policy", href: "/blog/influencer-revision-policy" },
        ],
      },
      { type: "heading", text: "Early signals worth watching", id: "signals" },
      {
        type: "table",
        headers: ["Signal", "Available", "What it suggests"],
        rows: [
          ["Views relative to the creator's usual", "Within a day or two (creator insights)", "Whether distribution and hook worked"],
          ["Saves and shares per view", "Within a day or two", "Whether content is useful or worth passing on"],
          ["Comment themes", "Immediately", "Interest, questions, objections"],
          ["Link clicks", "Same day (your analytics)", "Whether the CTA works"],
          ["Click-to-order rate", "Within days", "Whether the landing page and offer convert"],
          ["Code use", "Within days", "Purchase intent from the creator's audience"],
        ],
      },
      {
        type: "paragraph",
        text: "Compare against each creator's own baseline rather than across creators of different sizes. Long-form YouTube content and searchable posts can keep building for weeks, so give them longer before deciding. Influencer content performance covers reading these signals in more depth.",
        links: [{ text: "Influencer content performance", href: "/blog/influencer-content-performance" }],
      },
      { type: "heading", text: "Practical mid-flight moves", id: "moves" },
      { type: "subheading", text: "Fix leaks first" },
      {
        type: "paragraph",
        text: "Before changing anything creative, check what's on your side: broken links, expired codes, slow or wrong landing pages, out-of-stock variants, delivery not available in the regions creators reach. These are the fastest fixes and often the biggest.",
      },
      { type: "subheading", text: "Feed early learnings to creators who haven't produced yet" },
      {
        type: "paragraph",
        text: "If posts that show the product in the first few seconds or answer a specific question perform better, share that as a suggestion with creators still in production, framed as optional insight, not a new requirement. Most creators appreciate useful data.",
      },
      { type: "subheading", text: "Amplify what works" },
      {
        type: "paragraph",
        text: "Strong organic posts can be boosted as partnership ads where the creator has granted permission and usage terms allow. Check the agreement first; paid usage often has its own fee and duration. Influencer marketing for performance marketing and Instagram's partnership ad permissions explain how this works.",
        links: [
          { text: "Influencer marketing for performance marketing", href: "/blog/influencer-performance-marketing" },
          { text: "partnership ad permissions", href: SOURCES.instagramPartnershipAdPermissions },
        ],
      },
      { type: "subheading", text: "Rebalance remaining budget" },
      {
        type: "paragraph",
        text: "If you kept reserve budget or slots, use them for the creator types, regions or formats that are working. Don't cancel booked creators to do it unless the agreement allows and you honour its terms.",
      },
      { type: "subheading", text: "Answer the audience" },
      {
        type: "paragraph",
        text: "If comments keep asking the same question (price, suitability, delivery), answer from the brand account, add it to the landing page and mention it in remaining briefs.",
      },
      { type: "heading", text: "Mid-campaign optimization checklist", id: "checklist" },
      {
        type: "template",
        label: "Review every 2–3 days while live",
        text: "LEAKS\n□ Links and codes working for every live post\n□ Landing page loads fast on mobile; right language; right product\n□ Stock and delivery available in the regions creators reach\n\nSIGNALS\n□ Each live post compared with that creator's usual performance\n□ Saves, shares and comment themes reviewed\n□ Clicks and orders by creator checked\n\nACTIONS\n□ Standout posts identified; amplification permissions and usage checked\n□ Optional insights shared with creators still in production\n□ Recurring audience questions answered and added to briefs/FAQ\n□ Reserve budget or slots allocated to what's working\n□ Compliance checked on every live post\n\nGUARDRAILS\n□ No changes to approved/published content without creator agreement\n□ No new requirements without discussing scope\n□ Decisions recorded with the reason",
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a D2C footwear brand's first five Reels are live. Two Hindi creators' posts are drawing strong saves and code use; a Marathi creator's post has good views but almost no clicks. The team finds the Marathi creator's link went to the English homepage instead of the sale page, and fixes it. It shares a note with the eight creators still filming that showing the shoe on wet roads drew the most questions, and boosts the two strongest posts as partnership ads under the usage already agreed. No published content is touched.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Asking creators to edit or reshoot published posts because numbers are low.",
          "Judging slow-building formats in the first 24 hours.",
          "Changing the brief for creators already filming without discussing scope.",
          "Boosting content without paid usage rights.",
          "Optimising creative when the problem is the landing page.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Mid-campaign optimization works when it's realistic: fix brand-side leaks first, share early learnings with creators still in production, amplify what works within the rights you have, and move remaining budget towards the strongest segments. Respect what was agreed, and keep the bigger changes for the next campaign. Influencer campaign optimization covers the full cycle.",
        links: [{ text: "Influencer campaign optimization", href: "/blog/influencer-campaign-optimization" }],
      },
    ],
    faqs: [
      {
        question: "What can brands change while an influencer campaign is live?",
        answer:
          "Usually offers, links, codes, landing pages, stock, comment responses, amplification within usage rights, budget for reserve creators and optional brief notes for creators who haven't produced yet. Changes to approved or published content need the creator's agreement.",
      },
      {
        question: "Can brands ask influencers to change a live post?",
        answer:
          "Compliance fixes such as disclosure or unapproved claims should always be made. Other changes to published content need the creator's agreement and may involve extra payment.",
      },
      {
        question: "How soon can you judge an influencer post's performance?",
        answer:
          "Early signals appear within a day or two for short-form content, but long-form and searchable content often keeps building for weeks. Compare against each creator's usual performance and use fixed capture days for final evaluation.",
      },
    ],
  },
  {
    slug: "influencer-campaign-underperformance",
    category: "Campaign Strategy",
    title: "Influencer Campaign Underperformance: What Brands Should Do When Results Are Weak",
    seoTitle: "Why Is My Influencer Campaign Underperforming? A Diagnosis",
    excerpt:
      "How to diagnose weak influencer campaign results without automatically blaming creators: confirming the problem, locating where the funnel breaks, separating creator, content, strategy, distribution, measurement and offer problems, and what to do about each.",
    metaDescription:
      "How to diagnose an underperforming influencer campaign: confirm the problem, find where the funnel breaks, and separate creator, content and offer issues.",
    author: AUTHOR,
    publishedAt: OPT_PUBLISHED,
    lastReviewed: OPT_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer campaign underperformance", "underperforming influencer campaign", "creator performance problems", "why influencer campaign failed", "fix weak influencer results"],
    related: ["influencer-campaign-optimization", "mid-campaign-optimization", "creator-performance-scorecard"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-underperformance.svg",
      alt: "Diagnosing weak results: confirm the gap, find where the funnel breaks, then test six possible causes from creator to offer",
    },
    body: [
      {
        type: "paragraph",
        text: "When an influencer campaign underperforms, the usual reaction is to blame the creators and book different ones next time. Sometimes that's right. Often the creators were fine and the problem was the offer, the landing page, the objective, the tracking or the brief. Changing creators without diagnosing the cause tends to repeat the same result with new faces.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To fix an underperforming influencer campaign, first confirm it really underperformed (against a fair baseline, the right objective and the same capture day). Then find where the funnel breaks: reach, attention, engagement, clicks or conversion. The break point usually points to the cause: a creator or audience-fit problem, a content problem, a strategy problem, a distribution problem, a measurement problem or an offer and product problem. Fix the cause that fits the evidence, not the easiest one to change.",
      },
      { type: "heading", text: "Step 1: Is it really underperforming?", id: "confirm" },
      {
        type: "list",
        items: [
          "Compared with what? Your own baseline for similar creators, formats and objectives, not a generic benchmark.",
          "Judged on the right metric? An awareness campaign shouldn't be judged on code sales.",
          "At the right time? Long-form and searchable content may still be building.",
          "With complete data? Creator-reported insights, not just public likes.",
          "Including what tracking misses? Marketplace sales and later purchases may not show in links or codes.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer benchmarking and influencer performance data explain how to set a fair comparison.",
        links: [
          { text: "Influencer benchmarking", href: "/blog/influencer-benchmarking" },
          { text: "influencer performance data", href: "/blog/influencer-performance-data" },
        ],
      },
      { type: "heading", text: "Step 2: Find where the funnel breaks", id: "funnel" },
      {
        type: "table",
        headers: ["Break point", "Pattern", "Most likely causes"],
        rows: [
          ["Reach", "Views well below the creator's usual", "Distribution, timing, format, platform changes, hook"],
          ["Attention", "Views OK, low watch time or completion", "Hook, pacing, product appears too late"],
          ["Engagement", "Watched, but few saves, shares, meaningful comments", "Content relevance, audience fit, creator credibility on the topic"],
          ["Clicks", "Engaged, but few link clicks", "CTA, link placement, offer clarity, audience intent"],
          ["Conversion", "Clicks, but few orders or leads", "Landing page, price, offer, stock, delivery, trust"],
        ],
      },
      { type: "heading", text: "Step 3: Separate the six kinds of problem", id: "six-problems" },
      {
        type: "table",
        headers: ["Problem type", "Signs", "What to check", "Fix"],
        rows: [
          ["Creator / audience fit", "Low engagement from the target audience; comments from the wrong region or language", "Audience insights; comment language and location", "Different creators or segments next time"],
          ["Content", "Good reach but weak attention or engagement", "Hook, product timing, clarity, authenticity", "Better brief; creative freedom; different angle"],
          ["Campaign strategy", "Many creators underperform in the same way", "Objective, message, creator roles, budget split", "Rethink objective, message or mix"],
          ["Distribution", "Views well below creators' normal across the board", "Posting time, format, platform changes, overlap between creators", "Timing, format, amplification"],
          ["Measurement", "Results look weak but sales or search moved", "Tracking setup, attribution gaps, capture days", "Fix tracking; use wider measures"],
          ["Offer / product", "Clicks but no conversion; price objections in comments", "Landing page, price, stock, delivery, reviews", "Fix offer, page or product information"],
        ],
      },
      {
        type: "paragraph",
        text: "If most creators underperform in the same way, look at strategy, offer or measurement before blaming creators. If one creator underperforms while others in the same brief do well, look at that creator's fit and content.",
      },
      { type: "heading", text: "When the problem is one creator", id: "one-creator" },
      {
        type: "list",
        items: [
          "Compare the sponsored post with the creator's own recent posts: was it unusually weak for them?",
          "Check audience fit: did their audience match the campaign's market and language?",
          "Check execution: did they follow the brief, post on time, include the link and code?",
          "Check the content: was the product introduced late, or the message forced?",
          "Talk to them: creators often know why a post underperformed (timing, platform issues, audience reaction).",
          "Record it fairly on the scorecard; one weak post isn't a verdict on a creator.",
        ],
      },
      {
        type: "paragraph",
        text: "Creator performance scorecard covers evaluating creators across several dimensions, and creator feedback loop covers asking creators what they saw.",
        links: [
          { text: "Creator performance scorecard", href: "/blog/creator-performance-scorecard" },
          { text: "creator feedback loop", href: "/blog/creator-feedback-loop" },
        ],
      },
      { type: "heading", text: "What to do now vs next time", id: "now-vs-next" },
      {
        type: "table",
        headers: ["Now (campaign still live)", "Next campaign"],
        rows: [
          ["Fix links, codes, landing page, stock", "Change creator segments or roles"],
          ["Answer audience objections publicly", "Rewrite the brief and angle"],
          ["Amplify the posts that did work (with permission)", "Adjust objective and KPIs"],
          ["Share learnings with creators yet to post", "Fix tracking and attribution"],
          ["Shift reserve budget", "Test one change deliberately"],
        ],
      },
      {
        type: "paragraph",
        text: "Mid-campaign optimization covers what's realistic during a live campaign.",
        links: [{ text: "Mid-campaign optimization", href: "/blog/mid-campaign-optimization" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a fintech app's campaign with 12 personal-finance creators drives views in line with their usual numbers but very few installs. Comments are full of 'is this safe?' and 'what are the charges?'. The landing page answers neither question. The diagnosis isn't the creators; it's an offer and trust problem at the conversion step. The brand adds a clear fees and safety section, asks creators still to post to address safety in their own words, and plans the next campaign with an education-led brief.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Replacing all creators without diagnosing the cause.",
          "Judging against generic benchmarks instead of your own baseline.",
          "Ignoring comments, which often explain the problem directly.",
          "Measuring only link clicks and codes when much of the effect shows up elsewhere.",
          "Concluding from one campaign what needs two or three to confirm.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Weak results are information. Confirm the problem against a fair baseline, find where the funnel breaks, decide whether it's a creator, content, strategy, distribution, measurement or offer problem, and fix that cause. Change what you can now, plan the bigger fixes for the next campaign and record what you learned in the post-mortem.",
        links: [{ text: "post-mortem", href: "/blog/influencer-campaign-post-mortem" }],
      },
    ],
    faqs: [
      {
        question: "How do you fix an underperforming influencer campaign?",
        answer:
          "Confirm it's underperforming against a fair baseline, find where the funnel breaks (reach, attention, engagement, clicks, conversion), identify whether the cause is creator fit, content, strategy, distribution, measurement or offer, and fix that cause.",
      },
      {
        question: "Is it the influencer's fault if a campaign underperforms?",
        answer:
          "Not necessarily. If most creators underperform the same way, the cause is often strategy, offer, landing page or tracking. If one creator underperforms while others do well, look at that creator's fit and content.",
      },
      {
        question: "How do you know if a creator underperformed?",
        answer:
          "Compare the sponsored post with that creator's own recent performance and with similar creators in the same campaign, check audience fit and execution, and ask the creator what they observed.",
      },
    ],
  },
  {
    slug: "influencer-content-performance",
    category: "Campaign Strategy",
    title: "Influencer Content Performance: How Brands Can Identify High-Performing Creator Content",
    seoTitle: "How to Identify High-Performing Influencer Content",
    excerpt:
      "How to identify which creator content genuinely performed (by role and against the creator's baseline), analyse why it worked (hook, angle, format, proof, CTA), and what to do with winners: amplify, repurpose, rebrief and rebook.",
    metaDescription:
      "How brands identify high-performing influencer content, analyse why it worked (hook, angle, format, proof, CTA) and use winners for ads, briefs and rebooking.",
    author: AUTHOR,
    publishedAt: OPT_PUBLISHED,
    lastReviewed: OPT_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer content performance", "high-performing creator content", "creator content performance analysis", "top-performing influencer posts", "analyse influencer content"],
    related: ["influencer-data-analytics", "mid-campaign-optimization", "ugc-whitelisting-creator-licensing"],
    hero: {
      src: "/blog/brand-guides/influencer-content-performance.svg",
      alt: "Finding winning creator content: compare against each creator's baseline, tag what made it work and reuse winners in ads and briefs",
    },
    body: [
      {
        type: "paragraph",
        text: "Every campaign has a few posts that clearly outperform the rest. Most brands notice them, maybe boost one, and move on. The bigger value is understanding why they worked, because that's what tells you how to brief, which creators to rebook and which content to put money behind next time.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "High-performing creator content is content that did unusually well on the metric that matters for its role, compared with the creator's own baseline and with similar content in the campaign. Identify it with role-specific metrics and fixed capture days, then analyse why it worked by tagging hook, angle, product moment, proof, format, length, language and CTA. Use winners to amplify (with rights), repurpose, rebrief other creators and rebook the creators behind them.",
      },
      { type: "heading", text: "Step 1: Define 'high-performing' for each role", id: "define" },
      {
        type: "table",
        headers: ["Content role", "Strongest signals", "Compare against"],
        rows: [
          ["Reach", "Views vs the creator's median; reach in target markets", "Creator's own recent posts"],
          ["Consideration", "Saves, shares, substantive comments per view", "Similar creators in the campaign"],
          ["Conversion", "Clicks, code use, orders per view; cost per order", "Campaign median"],
          ["Content for ads", "Paid performance: hook rate, CTR, cost per result", "Other creatives in the same ad set"],
        ],
      },
      {
        type: "paragraph",
        text: "A post with modest views and many 'where can I buy?' comments may be the best content in a sales campaign. Influencer engagement quality explains how to read engagement properly.",
        links: [{ text: "Influencer engagement quality", href: "/blog/influencer-engagement-quality" }],
      },
      { type: "heading", text: "Step 2: Analyse why it worked", id: "why" },
      {
        type: "template",
        label: "Content tagging sheet (one row per post)",
        text: "Creator · Platform · Format · Length · Language\nHOOK: problem / result / question / surprise / trend\nPRODUCT MOMENT: first 3 seconds / middle / end\nANGLE: price / results / routine / comparison / story / tutorial\nPROOF: demo / before-after / unboxing / testimony / none\nTONE: educational / funny / emotional / aspirational\nCTA: code / link / comment / none; where placed\nRESULT on role metric vs creator baseline (index)",
      },
      {
        type: "paragraph",
        text: "With a dozen or more posts tagged, patterns appear: perhaps posts that show the product within the first few seconds and include a demo consistently beat those that don't. Treat patterns from small samples as hypotheses to test, not rules. Influencer data analytics covers content and cohort analysis more broadly.",
        links: [{ text: "Influencer data analytics", href: "/blog/influencer-data-analytics" }],
      },
      { type: "heading", text: "Questions to ask about a top post", id: "questions" },
      {
        type: "list",
        items: [
          "What happens in the first three seconds?",
          "When does the product appear, and how?",
          "Is there a clear, specific problem the product solves?",
          "Is there proof (a demo, a result, honest pros and cons)?",
          "What did the audience say in comments?",
          "Was it the creator's usual style, or something different?",
          "Did timing or a trend help?",
          "Would it work for a different creator, or is it about this creator's credibility?",
        ],
      },
      {
        type: "paragraph",
        text: "The last question matters. Some content wins because of a format anyone can use; some wins because one creator's audience trusts them on the topic. The first suggests a brief change; the second suggests a rebooking.",
      },
      { type: "heading", text: "Step 3: Use the winners", id: "use" },
      {
        type: "table",
        headers: ["Action", "When", "Check first"],
        rows: [
          ["Amplify as a partnership ad", "Strong organic engagement and fit with paid goals", "Paid usage rights and permission in place"],
          ["Repurpose on your channels", "Content fits your feed or website", "Usage terms; credit the creator"],
          ["Rebrief other creators", "A pattern that others can adapt in their own style", "Share as insight, not a script"],
          ["Rebook the creator", "Performance came from their credibility and fit", "Scorecard; availability; fair terms"],
          ["Test the pattern", "You're not sure the pattern holds", "Design a small test"],
        ],
      },
      {
        type: "paragraph",
        text: "Using creator content in ads is covered in UGC whitelisting and creator licensing, rights in influencer usage rights and testing in influencer marketing testing.",
        links: [
          { text: "UGC whitelisting and creator licensing", href: "/blog/ugc-whitelisting-creator-licensing" },
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "influencer marketing testing", href: "/blog/influencer-marketing-testing" },
        ],
      },
      { type: "heading", text: "Organic winners vs paid winners", id: "organic-vs-paid" },
      {
        type: "paragraph",
        text: "Content that does well organically doesn't always do well as an ad, and the reverse. Organic performance reflects the creator's relationship with their audience; paid performance reflects how the content works for strangers. If you plan to run creator content as ads, test several pieces in paid before scaling. UGC for paid social covers creative testing in ads.",
        links: [{ text: "UGC for paid social", href: "/blog/ugc-paid-social-testing" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: of 18 Reels in a skincare campaign, four stand out on saves and code use. Tagging shows all four open with the creator's skin concern, show application in the first five seconds, and are in Hindi or Tamil rather than English. The next brief suggests (not mandates) opening with a personal concern and showing the product early, and the next shortlist adds more Hindi and Tamil skincare creators. Two of the four winning creators are rebooked for a series.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Calling the post with the most views the winner, regardless of objective.",
          "Comparing a macro creator's views with a micro creator's.",
          "Copying a winning post's script into other briefs, losing what made it authentic.",
          "Boosting content without paid usage rights.",
          "Drawing rules from three posts.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Identify winning content by role and against each creator's baseline, tag what it did, ask why it worked, and use it: amplify with the right rights, rebrief others with insight rather than scripts, rebook the creators behind it and test patterns before treating them as rules.",
      },
    ],
    faqs: [
      {
        question: "How do you identify high-performing influencer content?",
        answer:
          "Use the metric that matches the content's role (reach, consideration, conversion, ad performance), compare with the creator's own baseline and similar content in the campaign, and use fixed capture days.",
      },
      {
        question: "Why does some influencer content perform better than others?",
        answer:
          "Common factors include a strong hook, showing the product early, a clear problem and proof, an authentic angle, the right language and audience fit, and the creator's credibility on the topic. Tag posts to find patterns in your own campaigns.",
      },
      {
        question: "Can brands run top-performing influencer posts as ads?",
        answer:
          "Yes, if the agreement includes paid usage rights and the creator grants partnership ad permission. Check duration and platforms, and test in paid before scaling.",
      },
    ],
  },
  {
    slug: "influencer-campaign-post-mortem",
    category: "Campaign Strategy",
    title: "Creator Campaign Post-Mortem: How Brands Should Review a Campaign After It Ends",
    seoTitle: "Influencer Campaign Post-Mortem: Template and Agenda",
    excerpt:
      "A structured post-campaign review for brands: what to analyse after launch (results, creators, content, process, costs), a blameless post-mortem agenda, a template, turning findings into decisions and what to share with creators.",
    metaDescription:
      "How brands run an influencer campaign post-mortem: what to analyse after launch, a meeting agenda, a template and turning findings into next-campaign decisions.",
    author: AUTHOR,
    publishedAt: OPT_PUBLISHED,
    lastReviewed: OPT_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer campaign post-mortem", "influencer campaign performance review", "creator campaign review", "post-campaign analysis influencer", "campaign retrospective"],
    related: ["influencer-data-analytics", "creator-feedback-loop", "influencer-campaign-optimization"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-post-mortem.svg",
      alt: "Post-mortem inputs (results, creators, content, process, costs) leading to decisions on what to keep, change and test",
    },
    body: [
      {
        type: "paragraph",
        text: "A campaign report says what happened. A post-mortem decides what to do about it. Without one, the same approval delays, briefing gaps and creator mismatches show up campaign after campaign, and the best learnings stay in one person's head.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer campaign post-mortem is a structured review held after the final results are in. It covers results against objectives, creator performance, content performance, process (timeline, approvals, payments, communication), costs and creator feedback, then turns findings into specific decisions: what to keep, change and test next time, and which creators to rebook. Keep it blameless, evidence-based and short, and record the decisions where the next campaign team will find them.",
      },
      { type: "heading", text: "What to analyse after launch", id: "inputs" },
      {
        type: "table",
        headers: ["Area", "Questions", "Inputs"],
        rows: [
          ["Results", "Did we hit the primary KPI? Against which baseline?", "Report; dashboard"],
          ["Creators", "Who performed in their role? Who didn't, and why?", "Scorecards; campaign index"],
          ["Content", "Which content worked, and what did it have in common?", "Content tagging; comment themes"],
          ["Audience", "What did people ask, object to, praise?", "Comments; sentiment; creator feedback"],
          ["Funnel", "Where did people drop off?", "Analytics; store data"],
          ["Process", "Where did we lose time? What went wrong?", "Tracker stage dates; issue log"],
          ["Costs", "Cost per result by creator and segment; unplanned costs", "Payment tracker"],
          ["Creators' view", "What made it easy or hard to work with us?", "Creator debrief"],
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing report covers the results document, influencer data analytics covers the analysis, and creator feedback loop covers the creator debrief.",
        links: [
          { text: "Influencer marketing report", href: "/blog/influencer-marketing-report" },
          { text: "influencer data analytics", href: "/blog/influencer-data-analytics" },
          { text: "creator feedback loop", href: "/blog/creator-feedback-loop" },
        ],
      },
      { type: "heading", text: "Keep it blameless", id: "blameless" },
      {
        type: "paragraph",
        text: "The point is to improve the system, not assign fault. Ask 'what made this happen?' rather than 'who did this?'. A creator missing a deadline because product arrived late is a logistics issue; a reviewer taking a week is a capacity issue. Blame makes people defensive and hides the real causes.",
      },
      { type: "heading", text: "A post-mortem agenda", id: "agenda" },
      {
        type: "template",
        label: "60-minute post-mortem",
        text: "1. Objective and headline result vs baseline (5 min)\n2. What worked: creators, content, process (15 min)\n3. What didn't, and the likely cause (15 min)\n4. Creator decisions: rebook, new role, not again (10 min)\n5. Decisions: keep / change / test next time (10 min)\n6. Owners and dates for each decision (5 min)",
      },
      { type: "heading", text: "Post-mortem template", id: "template" },
      {
        type: "template",
        label: "Campaign post-mortem record",
        text: "CAMPAIGN: [ ]   DATES: [ ]   OBJECTIVE / PRIMARY KPI: [ ]\nRESULT VS BASELINE: [ ] (confidence: high / medium / low)\n\nWHAT WORKED (with evidence)\n• \n\nWHAT DIDN'T (with likely cause: creator / content / strategy / distribution / measurement / offer / process)\n• \n\nCREATOR DECISIONS\nRebook: [ ]   Different role: [ ]   Not again (reason): [ ]\n\nPROCESS ISSUES (stage, cause, fix)\n• \n\nDECISIONS FOR NEXT CAMPAIGN\nKEEP: \nCHANGE: \nTEST: \n\nOWNERS AND DATES\n• ",
      },
      { type: "heading", text: "Turn findings into decisions", id: "decisions" },
      {
        type: "list",
        items: [
          "Every finding should end in keep, change, test or 'no action' with a reason.",
          "Each decision needs an owner and a date.",
          "Update the brief template, shortlist criteria and process documents directly.",
          "Add learnings to a running register so they survive team changes.",
          "Revisit last campaign's decisions at the start of the next post-mortem: did we act on them?",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer data analytics includes a learnings register for this, and influencer campaign optimization covers how changes feed the next cycle.",
        links: [
          { text: "Influencer data analytics", href: "/blog/influencer-data-analytics" },
          { text: "influencer campaign optimization", href: "/blog/influencer-campaign-optimization" },
        ],
      },
      { type: "heading", text: "What to share with creators", id: "share" },
      {
        type: "list",
        items: [
          "Thanks and specific results you can share for their content.",
          "What worked especially well in their content.",
          "Whether you'd like to work together again, if so.",
          "Any process improvements you're making because of their feedback.",
        ],
      },
      {
        type: "paragraph",
        text: "Agencies run similar reviews; creator campaign post-mortem describes the agency-side version, which can feed into yours if an agency ran the campaign.",
        links: [{ text: "creator campaign post-mortem", href: "/blog/creator-campaign-post-mortem" }],
      },
      { type: "heading", text: "When to run it", id: "timing" },
      {
        type: "paragraph",
        text: "Run the post-mortem soon after the final capture date (for example 30 days after the last post), while details are fresh but results are complete. For long campaigns or always-on programmes, hold a short review after each wave and a fuller one each quarter.",
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a personal-care brand's festive campaign hits its reach target but misses its order target. The post-mortem finds that creator content performed in line with each creator's usual numbers, but the landing page loaded slowly on mobile and two popular variants went out of stock in the second week. Process review shows legal approval added four days to every draft. Decisions: KEEP the regional creator mix; CHANGE the landing page and stock planning, and add a concept stage so legal reviews claims before filming; TEST a bundle offer against a discount in the next campaign. Owners and dates are assigned, and three creators are rebooked for a series.",
      },
      { type: "heading", text: "Post-mortems with an agency", id: "with-agency" },
      {
        type: "paragraph",
        text: "If an agency ran the campaign, ask it to bring its own review (results by creator, content tagging, process issues) and run the post-mortem together. Make sure decisions and learnings end up in your records, not only the agency's. Influencer campaign handover covers keeping campaign knowledge with the brand.",
        links: [
          { text: "Influencer campaign handover", href: "/blog/influencer-campaign-handover" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Skipping it because the campaign 'went fine'.",
          "Holding it before results are complete.",
          "Blame instead of causes.",
          "Findings with no owner or date.",
          "Not checking whether last time's decisions were implemented.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A post-mortem turns a finished campaign into better next ones. Review results, creators, content, audience, funnel, process, costs and creator feedback; keep it blameless; end with keep, change and test decisions with owners; and record them where the next team will look.",
      },
    ],
    faqs: [
      {
        question: "What should an influencer campaign post-mortem include?",
        answer:
          "Results against objective and baseline, creator and content performance, audience feedback, funnel drop-offs, process issues, costs and creator feedback, ending in keep, change and test decisions with owners and dates.",
      },
      {
        question: "When should brands review an influencer campaign?",
        answer:
          "After final results are in, often around 30 days after the last post, with shorter reviews after each wave in long or always-on programmes.",
      },
      {
        question: "What's the difference between a campaign report and a post-mortem?",
        answer:
          "A report explains what happened. A post-mortem reviews why, including process and creator feedback, and decides what to keep, change and test next time.",
      },
    ],
  },
  {
    slug: "influencer-marketing-testing",
    category: "Campaign Strategy",
    title: "Creator Campaign Testing: How Brands Can Test Different Creators, Content and Approaches",
    seoTitle: "Influencer Marketing Testing: How to Run Creator Experiments",
    excerpt:
      "A practical experimentation framework for creator campaigns: hypotheses, one variable at a time, baselines, test and comparison groups, success criteria, measurement windows, what can realistically be tested and the limits of influencer testing.",
    metaDescription:
      "How brands test creators, content and approaches: hypothesis, variable, baseline, groups, success criteria, measurement window and the limits of tests.",
    author: AUTHOR,
    publishedAt: OPT_PUBLISHED,
    lastReviewed: OPT_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer marketing testing", "creator campaign testing", "influencer campaign experimentation", "test influencer content", "influencer A/B testing"],
    related: ["influencer-campaign-optimization", "influencer-content-performance", "ugc-paid-social-testing"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-testing.svg",
      alt: "Creator campaign test structure: hypothesis, one variable, comparison groups, success criteria and a decision on what to do next",
    },
    body: [
      {
        type: "paragraph",
        text: "'Micro creators work better for us.' 'Hindi content converts better.' 'Unboxings don't work.' Most brands carry beliefs like these from one or two campaigns where many things changed at once. Testing is how you find out which beliefs are true for your brand, without pretending every creator campaign is a laboratory.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To test in influencer marketing, write a specific hypothesis, change one main variable (creator tier, creator type, format, hook, angle, CTA, platform or timing) while keeping others as similar as possible, run it across enough creators to see a pattern, compare against a baseline or comparison group on a success metric agreed in advance, measure over a fixed window and decide what to do next. Creator tests are rarely statistically rigorous: creators differ, audiences differ and samples are small. Treat results as directional evidence and confirm important ones with a repeat test.",
      },
      { type: "heading", text: "The anatomy of a creator test", id: "anatomy" },
      {
        type: "table",
        headers: ["Element", "What it means", "Example"],
        rows: [
          ["Hypothesis", "What you expect and why", "Showing the product in the first 3 seconds will raise saves per view, because viewers know immediately what it is"],
          ["Variable", "The one thing you change", "Product timing in the hook"],
          ["Baseline / comparison", "What you compare against", "Similar creators briefed with the usual structure"],
          ["Test group", "Creators who get the change", "6 micro skincare creators, Hindi"],
          ["Comparison group", "Similar creators without the change", "6 similar creators, usual brief"],
          ["Success metric", "One metric, decided in advance", "Median saves per 1,000 views at day 7"],
          ["Measurement window", "Fixed capture days", "Day 7 for all posts"],
          ["Decision rule", "What result leads to what action", "If clearly higher, make it the default brief suggestion"],
        ],
      },
      { type: "heading", text: "What you can test", id: "variables" },
      {
        type: "table",
        headers: ["Variable", "How to test it", "Watch out for"],
        rows: [
          ["Creator tier", "Comparable budgets across tiers in the same niche", "Different roles; judge on matching metrics"],
          ["Creator type", "Experts vs everyday users vs entertainers on one brief", "Audience differences"],
          ["Language / region", "Same brief in different languages or states", "Offer and delivery differences by region"],
          ["Format", "Reel vs carousel vs long-form, same creators where possible", "Platform algorithms treat formats differently"],
          ["Hook or opening", "Two suggested openings across similar creators", "Creators interpret suggestions differently"],
          ["Product angle", "Price vs results vs routine vs problem-solution", "One angle per creator"],
          ["CTA and offer", "Code vs link; discount vs bundle", "Offer changes affect everything downstream"],
          ["Platform", "Instagram vs YouTube for the same objective", "Different metrics and timelines"],
          ["Timing", "Before vs during a sale or festival", "External factors"],
        ],
      },
      { type: "heading", text: "Practical ways to run tests", id: "methods" },
      { type: "subheading", text: "Split a campaign" },
      {
        type: "paragraph",
        text: "Divide a campaign's creators into two similar groups and give each a different version of one variable. Keep tiers, niches and regions as balanced as you can.",
      },
      { type: "subheading", text: "Wave testing" },
      {
        type: "paragraph",
        text: "Run a first wave with two approaches, then brief the second wave with the winner. This uses the campaign itself to learn, though timing differences between waves can affect results.",
      },
      { type: "subheading", text: "Creator-led variations" },
      {
        type: "paragraph",
        text: "Some creators can test variations on their own channels; Instagram's Trial Reels let creators show a Reel to non-followers first and see how it performs before sharing with followers. Agree with the creator before asking for variations, as it's extra work.",
        links: [{ text: "Trial Reels", href: SOURCES.instagramTrialReels }],
      },
      { type: "subheading", text: "Paid testing of creator content" },
      {
        type: "paragraph",
        text: "Running several creator assets as ads with the same budget and audience is the most controlled test available, because distribution is held roughly constant. UGC for paid social covers ad testing.",
        links: [{ text: "UGC for paid social", href: "/blog/ugc-paid-social-testing" }],
      },
      { type: "heading", text: "The limits of influencer testing", id: "limits" },
      {
        type: "list",
        items: [
          "Creators aren't identical; their audiences, style and credibility differ, so creator differences can swamp the variable you're testing.",
          "Samples are small: six creators per group is a lot for a campaign and very little for statistics.",
          "Platform distribution varies post by post in ways you can't control.",
          "External factors (festivals, news, competitor activity) affect results.",
          "Attribution gaps mean some effects don't show in your tracking.",
        ],
      },
      {
        type: "paragraph",
        text: "So use medians rather than averages, look for large and consistent differences rather than small ones, record confidence honestly and repeat important tests before treating the result as a rule.",
      },
      { type: "heading", text: "A test plan template", id: "template" },
      {
        type: "template",
        label: "Creator campaign test plan",
        text: "TEST NAME: [ ]\nHYPOTHESIS: If we [change], then [metric] will [improve] because [reason].\nVARIABLE: [one thing]\nKEPT CONSTANT: [tier, niche, region, offer, timing, capture day]\nTEST GROUP: [creators]   COMPARISON GROUP: [creators or baseline]\nSUCCESS METRIC: [one metric]   MEASURED AT: [day 7 / day 30]\nDECISION RULE: If [clearly better], we [action]. If similar, we [action]. If worse, we [action].\nCONFIDENCE AFTER RESULT: high / medium / low\nNEXT STEP: [repeat / adopt / drop]",
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a snack brand believes regional-language creators convert better than Hindi-national creators. It books eight Gujarati and Marathi creators and eight Hindi creators of similar tier and niche, with the same offer and timing, and compares median cost per delivered order at day 14. Regional creators come out clearly lower, but with only eight per group the brand labels it medium confidence and repeats the test in the next campaign with Tamil and Telugu creators before shifting most of its budget.",
      },
      { type: "heading", text: "Reading test results fairly", id: "reading-results" },
      {
        type: "list",
        items: [
          "Compare on the metric chosen in advance, at the same capture day for every post.",
          "Use medians, so one viral post doesn't decide the result.",
          "Index each creator against their own usual performance before comparing groups.",
          "Check whether creator differences (audience, credibility, style) explain the gap better than the variable does.",
          "Record the result in your learnings register with an honest confidence level.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer benchmarking and influencer performance data explain baselines and indexes, influencer content performance covers tagging content variables, and influencer data analytics includes the learnings register.",
        links: [
          { text: "Influencer benchmarking", href: "/blog/influencer-benchmarking" },
          { text: "influencer performance data", href: "/blog/influencer-performance-data" },
          { text: "influencer content performance", href: "/blog/influencer-content-performance" },
          { text: "influencer data analytics", href: "/blog/influencer-data-analytics" },
        ],
      },
      { type: "heading", text: "Testing in Indian campaigns", id: "india" },
      {
        type: "list",
        items: [
          "Language and region are often the most useful variables to test; national results can hide large regional differences.",
          "Keep the offer and delivery coverage identical across regions you compare.",
          "Avoid comparing festival-period posts with normal-period posts.",
          "For cash-on-delivery-heavy categories, compare delivered orders, not placed orders.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Changing several variables at once.",
          "Choosing the success metric after seeing the results.",
          "Declaring winners from tiny differences.",
          "Ignoring creator differences that explain the result.",
          "Never repeating tests before changing strategy.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Testing replaces assumptions with evidence. Write a hypothesis, change one variable, compare against a baseline on a metric chosen in advance, measure at a fixed point, and be honest about confidence. Influencer tests are directional rather than scientific, but a sequence of well-designed tests is how a creator programme gets better campaign after campaign. Influencer campaign optimization shows how tests fit the wider cycle.",
        links: [{ text: "Influencer campaign optimization", href: "/blog/influencer-campaign-optimization" }],
      },
    ],
    faqs: [
      {
        question: "How should brands test influencer content?",
        answer:
          "Write a hypothesis, change one variable (such as hook, format, angle or CTA) across a group of similar creators, compare with a baseline group on a success metric chosen in advance, measure at a fixed capture day and decide what to do next.",
      },
      {
        question: "Can you A/B test influencer marketing?",
        answer:
          "Approximately. You can compare groups of similar creators or run creator content as ads with equal budgets. True controlled tests are hard because creators and audiences differ, so treat results as directional and repeat important tests.",
      },
      {
        question: "What should brands test first in influencer campaigns?",
        answer:
          "The variable you're least sure about that would most change your decisions: often creator tier or type, language or region, product angle or offer.",
      },
    ],
  },
];
