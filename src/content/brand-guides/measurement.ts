import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

const PUBLISHED = "2026-10-01";
const REVIEWED = "October 2026";

/**
 * 1050–1099 measurement layer (second 1050–1099 topic list, 2026-10-01). 48 of the 50 topics were already owned
 * by live pages, which were expanded instead (see docs/brand-guides-1050-1099-measurement-audit.md). Two
 * intents had no owner:
 * - influencer-marketing-cpm-cpe-cpa: CPM, CPE, CPC, CPA and conversion rate in one formulas page (1057, 1061–1064)
 * - influencer-reach-vs-impressions: reach vs impressions vs views, including Instagram's switch to views (1059–1060)
 */
export const measurementPosts: BlogPost[] = [
  {
    slug: "influencer-marketing-cpm-cpe-cpa",
    category: "Campaign Strategy",
    title: "Influencer Marketing CPM, CPE, CPC and CPA: How to Calculate and Compare Creator Costs",
    seoTitle: "Influencer CPM, CPE, CPC and CPA: Formulas for Brands",
    excerpt:
      "The four cost-efficiency metrics brands use to compare creator campaigns, with formulas, a worked rupee example, conversion rate, the inputs you must define first, and why none of them should be judged alone.",
    metaDescription:
      "How to calculate influencer CPM, CPE, CPC, CPA and conversion rate, what to include in cost, a worked example, and how to compare creators fairly.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-10-08",
    lastReviewed: REVIEWED,
    readingTime: "11 min read",
    tags: ["influencer CPM", "cost per engagement influencer", "influencer CPA", "influencer CPC", "influencer cost per result", "influencer conversion rate"],
    related: ["measuring-influencer-campaign-roi", "influencer-marketing-kpis", "influencer-reach-vs-impressions"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-cpm-cpe-cpa.svg",
      alt: "Total creator campaign cost divided by views, engagements, link clicks and conversions to give CPM, CPE, CPC and CPA",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator fee on its own tells you very little. ₹50,000 can be cheap or expensive depending on what it bought: how many people saw the content, how many responded, how many clicked and how many bought. Cost-per metrics turn a fee into a number you can compare across creators, campaigns and channels.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Divide the total campaign cost by the result you care about. CPM = cost ÷ impressions (or views) × 1,000. CPE = cost ÷ engagements. CPC = cost ÷ link clicks. CPA = cost ÷ conversions (orders, sign-ups or installs). Use CPM for awareness, CPE for consideration, CPC for traffic and CPA for sales or leads, and define every input the same way across creators before you compare them.",
      },
      { type: "heading", text: "The formulas at a glance", id: "formulas" },
      {
        type: "table",
        headers: ["Metric", "Formula", "What it tells you", "Best for objective"],
        rows: [
          ["CPM (cost per mille)", "Total cost ÷ impressions or views × 1,000", "Cost of 1,000 exposures", "Awareness"],
          ["CPE (cost per engagement)", "Total cost ÷ engagements", "Cost of each interaction", "Consideration, engagement"],
          ["CPC (cost per click)", "Total cost ÷ link clicks", "Cost of each visit you can track", "Traffic"],
          ["CPA (cost per acquisition)", "Total cost ÷ conversions", "Cost of each order, lead or install", "Sales, leads, app installs"],
          ["Conversion rate", "Conversions ÷ clicks × 100", "How well visits turn into the action", "Sales, leads"],
        ],
      },
      { type: "heading", text: "Define the inputs before you calculate", id: "define-inputs" },
      {
        type: "paragraph",
        text: "Most bad comparisons come from inconsistent inputs, not wrong arithmetic. Agree these definitions before the campaign starts and use them for every creator:",
      },
      {
        type: "list",
        items: [
          "Cost: creator fee plus product and shipping, production, usage-rights fees, paid amplification and the share of agency or team time. Using the creator fee alone flatters every metric.",
          "Impressions or views: the platform's own number from the creator's insights, captured on a fixed day (for example 7 days after posting). Instagram now reports views rather than impressions; see reach vs impressions vs views.",
          "Engagements: decide which actions count. Saves, shares and genuine comments say more than likes; many brands report CPE on these actions separately.",
          "Clicks: link clicks recorded by your analytics through each creator's UTM link, not platform 'taps', which can count differently.",
          "Conversions: delivered orders, qualified leads or completed installs. For cash-on-delivery-heavy categories, count delivered orders, not placed ones.",
        ],
      },
      {
        type: "paragraph",
        text: "Reach vs impressions vs views explains the exposure metrics, and influencer engagement rate covers which interactions to count.",
        links: [
          { text: "Reach vs impressions vs views", href: "/blog/influencer-reach-vs-impressions" },
          { text: "influencer engagement rate", href: "/blog/influencer-engagement-rate" },
        ],
      },
      { type: "heading", text: "A worked example", id: "worked-example" },
      {
        type: "paragraph",
        text: "The numbers below are illustrative, chosen to make the arithmetic easy to follow. They are not benchmarks or typical results.",
      },
      {
        type: "table",
        headers: ["Input or metric", "Value", "Calculation"],
        rows: [
          ["Creator fee", "₹60,000", ""],
          ["Product, shipping and share of management", "₹15,000", ""],
          ["Total cost", "₹75,000", "60,000 + 15,000"],
          ["Views (7 days)", "1,50,000", ""],
          ["CPM", "₹500", "75,000 ÷ 1,50,000 × 1,000"],
          ["Saves, shares and comments", "6,000", ""],
          ["CPE", "₹12.50", "75,000 ÷ 6,000"],
          ["Link clicks (UTM)", "1,500", ""],
          ["CPC", "₹50", "75,000 ÷ 1,500"],
          ["Delivered orders", "60", ""],
          ["CPA", "₹1,250", "75,000 ÷ 60"],
          ["Conversion rate", "4%", "60 ÷ 1,500 × 100"],
        ],
      },
      {
        type: "paragraph",
        text: "Whether ₹1,250 per order is good depends on your margin and customer value, not on an industry average. If the average first order earns ₹800 in gross margin and customers rarely reorder, this creator lost money on direct sales; if half of them reorder within six months, the same CPA may be profitable. That is why CPA belongs next to ROI, covered in how to measure influencer marketing ROI.",
        links: [{ text: "how to measure influencer marketing ROI", href: "/blog/measuring-influencer-campaign-roi" }],
      },
      { type: "heading", text: "Conversion rate: what to measure", id: "conversion-rate" },
      {
        type: "list",
        items: [
          "Click-to-conversion rate: conversions ÷ link clicks. Shows whether the creator sent the right people and the landing page kept the promise.",
          "Code redemption: orders using the creator's code. Catches buyers who never clicked, such as those who searched for the brand later.",
          "View-to-click rate: link clicks ÷ views. Shows whether the content created enough intent to act.",
        ],
      },
      {
        type: "paragraph",
        text: "A low click-to-conversion rate with a healthy view-to-click rate usually points to the landing page or offer, not the creator. The reverse points to the content or the audience fit.",
      },
      { type: "heading", text: "How to compare creators fairly", id: "compare-creators" },
      {
        type: "list",
        items: [
          "Compare on the metric that matches the objective. A creator with a high CPM can still have the best CPA.",
          "Compare like formats. A 60-second Reel and a 10-minute YouTube integration buy different attention.",
          "Wait for the same measurement window for every creator, since YouTube videos keep collecting views for months.",
          "Add the value of content you reuse in ads or on product pages; it would otherwise have cost production budget.",
          "Don't rank creators on one post. Small samples swing widely; judge on several posts or a test campaign.",
        ],
      },
      { type: "heading", text: "Other cost-per-result measures worth tracking", id: "other-cost-per-result" },
      {
        type: "table",
        headers: ["Measure", "Formula", "Use it for"],
        rows: [
          ["Cost per qualified lead", "Total cost ÷ leads that meet your qualification criteria", "B2B, education, finance and high-consideration categories where raw lead counts mislead"],
          ["Cost per new customer", "Total cost ÷ first-time customers", "Separating acquisition from orders by existing customers using a creator code"],
          ["Cost per usable asset", "Total cost ÷ content pieces you actually reuse", "UGC and content-led campaigns"],
          ["Cost per thousand target-audience views", "Total cost ÷ (views × share of audience in your markets) × 1,000", "Regional or city campaigns where much of a creator's audience is outside your market"],
        ],
      },
      {
        type: "paragraph",
        text: "Efficiency is not the same as return. A low cost per result tells you the spend was efficient at producing that result; it doesn't tell you whether the result was worth having. A ₹40 cost per engagement can be excellent for a launch and irrelevant for a brand that needed sales. Pick the cost-per-result measure that matches the objective, then judge it against what the outcome is worth to the business, which is the ROI question. Deciding before booking whether a creator's fee is likely to pay back is covered in how much to pay influencers.",
        links: [{ text: "how much to pay influencers", href: "/blog/how-much-to-pay-influencers" }],
      },
      { type: "heading", text: "Comparing creator costs with paid media", id: "vs-paid-media" },
      {
        type: "paragraph",
        text: "Brands often hold creator CPM against their Meta or YouTube ad CPM. It is a useful sanity check but not a verdict: an organic creator view comes with a recommendation from someone the viewer chose to follow, and the content can be reused as ads afterwards. Compare on the business outcome (CPA, cost per qualified lead) where you can, and use CPM comparisons only for pure reach goals. Influencer performance marketing covers running creator content as ads.",
        links: [{ text: "Influencer performance marketing", href: "/blog/influencer-performance-marketing" }],
      },
      { type: "heading", text: "Should you pay creators on CPM or CPA?", id: "pay-on-metrics" },
      {
        type: "paragraph",
        text: "These metrics are for evaluation first. Some brands also use them as payment terms, such as a fixed fee plus a bonus per sale, or pure commission. Performance-only deals shift risk to the creator, so experienced creators often decline them or price them higher. How brands should pay influencers compares flat fee, affiliate, CPA and hybrid models.",
        links: [{ text: "How brands should pay influencers", href: "/blog/influencer-marketing-payments" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Using only the creator fee as cost",
          "Mixing reach and views in the same CPM column",
          "Counting likes as engagement and ignoring saves, shares and comments",
          "Treating code redemptions as the only conversions, which undercounts results in India where WhatsApp sharing and marketplace purchases leave no code trail",
          "Calling a CPA 'good' without comparing it to margin and customer lifetime value",
        ],
      },
      {
        type: "paragraph",
        text: "How Kudozz handles this: Campaign Reporting & Performance Tracking.",
        links: [{ text: "Campaign Reporting & Performance Tracking", href: "/services/reporting" }],
      },
    ],
    faqs: [
      {
        question: "What is a good CPM for influencer marketing?",
        answer:
          "There is no universal figure. CPM varies by platform, format, niche and creator tier, and published averages mix very different markets. Build your own baseline from past campaigns and compare creators on the metric that matches your objective.",
      },
      {
        question: "How do you calculate cost per engagement for an influencer?",
        answer:
          "Divide the total cost of the collaboration by the number of engagements it earned. Define engagements first; many brands count saves, shares and comments and report likes separately.",
      },
      {
        question: "Is CPA reliable for influencer campaigns?",
        answer:
          "It is the closest link to revenue, but it usually undercounts. Some buyers see the content, then buy later through search, a marketplace or a WhatsApp recommendation with no code or link. Treat tracked CPA as a floor and look at branded search and sales lift alongside it.",
      },
      {
        question: "What is the difference between CPA and ROI?",
        answer:
          "CPA tells you what each conversion cost. ROI compares the return from those conversions with the full investment. A low CPA on a low-margin product can still produce a negative ROI.",
      },
      {
        question: "How do you calculate influencer conversion rate?",
        answer:
          "Divide conversions by link clicks and multiply by 100. For example, 60 orders from 1,500 tracked clicks is a 4% conversion rate. Track code redemptions separately for buyers who never clicked.",
      },
    ],
  },
  {
    slug: "influencer-reach-vs-impressions",
    category: "Campaign Strategy",
    title: "Reach vs Impressions vs Views in Influencer Marketing: What Brands Should Track",
    seoTitle: "Reach vs Impressions vs Views: What Brands Should Track",
    excerpt:
      "What reach, impressions and views mean in creator campaigns, how Instagram's switch to views changes reports, how to calculate frequency, which metric fits which objective, and how to collect the numbers from creators.",
    metaDescription:
      "Reach vs impressions vs views for influencer campaigns: definitions, Instagram's move to views, frequency, which to track by objective and how to collect them.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: ["reach vs impressions", "influencer reach", "instagram views vs reach", "influencer impressions", "influencer campaign metrics"],
    related: ["influencer-marketing-kpis", "influencer-marketing-cpm-cpe-cpa", "influencer-marketing-brand-awareness"],
    hero: {
      src: "/blog/brand-guides/influencer-reach-vs-impressions.svg",
      alt: "Followers, reach, views, frequency and engagement shown as steps from potential audience to what people did",
    },
    body: [
      {
        type: "paragraph",
        text: "Creator reports often mix three different numbers under one heading. A creator says a Reel 'reached 2 lakh', the screenshot says 2 lakh views, and the campaign summary adds both to a total. Knowing which is which changes how you judge awareness campaigns and how you calculate cost.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Reach is the number of unique accounts that saw a piece of content. Impressions, which Instagram now reports as views, count every time it was seen, including repeat views by the same person. Views are therefore always equal to or higher than reach. Track reach to know how many people you reached, views to know total exposure, and views divided by reach to see how often each person saw it.",
      },
      { type: "heading", text: "Definitions", id: "definitions" },
      {
        type: "table",
        headers: ["Metric", "Counts", "Repeat viewing", "Use it for"],
        rows: [
          ["Followers", "Accounts following the creator", "Not applicable", "Potential audience only; not a result"],
          ["Reach (accounts reached)", "Unique accounts that saw the content", "Counted once", "Audience size of a campaign"],
          ["Impressions / views", "Every time the content was shown or played", "Counted each time", "Total exposure, CPM"],
          ["YouTube views", "Plays counted by YouTube's own view rules", "Can include repeats", "Exposure on long-form video"],
          ["Frequency", "Views ÷ reach", "Average per person", "Whether the message was repeated enough"],
        ],
      },
      { type: "heading", text: "Instagram's switch from impressions to views", id: "instagram-views" },
      {
        type: "paragraph",
        text: "Instagram replaced impressions and Reel plays with a single views metric across Reels, posts, Stories and Live, completed in April 2025. Views count every time content is seen, including repeats, so treat them like impressions in older reports. If a campaign compares this year's Instagram views with last year's impressions, label the change rather than presenting it as growth or decline.",
        links: [{ text: "replaced impressions and Reel plays", href: "https://www.socialmediatoday.com/news/instagram-updates-metrics-to-focus-creators-on-views/723645/" }],
      },
      { type: "heading", text: "Which metric fits which objective", id: "by-objective" },
      {
        type: "table",
        headers: ["Objective", "Lead metric", "Supporting metrics"],
        rows: [
          ["Awareness in a new audience", "Reach", "Views, frequency, share of reach in target cities"],
          ["Repeated message (sale, launch day)", "Views and frequency", "Reach, saves"],
          ["Consideration", "Engagements", "Watch time, saves, comment quality"],
          ["Traffic or sales", "Clicks and conversions", "Reach only to explain volume"],
        ],
      },
      {
        type: "paragraph",
        text: "For awareness campaigns, reach in the right audience matters more than total views. A creator whose views come mostly from outside your selling regions adds exposure you can't convert. Influencer marketing for brand awareness covers planning for reach and recall, and influencer marketing KPIs maps metrics to every objective.",
        links: [
          { text: "Influencer marketing for brand awareness", href: "/blog/influencer-marketing-brand-awareness" },
          { text: "influencer marketing KPIs", href: "/blog/influencer-marketing-kpis" },
        ],
      },
      { type: "heading", text: "A simple example", id: "example" },
      {
        type: "paragraph",
        text: "Illustrative numbers: three creators post about a launch. Their Reels record 3,00,000 views in total, and each post's reach adds up to 2,00,000 accounts. That gives a frequency of about 1.5 views per account. But platforms report reach per post, and some people follow more than one of the creators, so the campaign's true number of unique people reached is somewhat below 2,00,000. Treat summed reach across creators as an upper limit, not a precise count.",
      },
      { type: "heading", text: "How to collect the numbers from creators", id: "collect" },
      {
        type: "list",
        items: [
          "Ask for insights screenshots or screen recordings of each post, captured on an agreed day (for example 7 days after posting) and again at campaign end.",
          "Request reach, views, saves, shares, comments and, for video, average watch time and retention.",
          "Ask for audience location and age from the creator's account insights, so you can judge reach in your target market.",
          "For Partnership Ads or creator ads, use the ad account's reporting, which separates paid from organic delivery.",
          "Write the reporting requirements into the brief and contract so they are a deliverable, not a favour.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Reporting follower counts as reach",
          "Adding reach across creators and posts as if audiences never overlap",
          "Comparing Instagram views with older impressions without noting the metric change",
          "Calculating CPM on reach in one report and on views in another",
          "Celebrating total views when most of them came from outside the regions you sell in",
        ],
      },
      {
        type: "paragraph",
        text: "Once reach and views are defined, influencer CPM, CPE, CPC and CPA turns them into cost comparisons, and how to create an influencer marketing report shows how to present them.",
        links: [
          { text: "influencer CPM, CPE, CPC and CPA", href: "/blog/influencer-marketing-cpm-cpe-cpa" },
          { text: "how to create an influencer marketing report", href: "/blog/influencer-marketing-report" },
        ],
      },
      {
        type: "paragraph",
        text: "How Kudozz handles this: Campaign Reporting & Performance Tracking.",
        links: [{ text: "Campaign Reporting & Performance Tracking", href: "/services/reporting" }],
      },
    ],
    faqs: [
      {
        question: "What is the difference between reach and impressions?",
        answer:
          "Reach counts unique accounts that saw content; impressions count every time it was shown. One person seeing a post three times adds one to reach and three to impressions.",
      },
      {
        question: "Are Instagram views the same as impressions?",
        answer:
          "They behave the same way: both count repeat viewing. Instagram replaced impressions and plays with views as its main metric in 2025, so older reports that show impressions should be compared with views carefully.",
      },
      {
        question: "Which is more important for influencer campaigns, reach or views?",
        answer:
          "Reach for awareness in a new audience, because it tells you how many people you actually reached. Views and frequency matter more when you need the message repeated, such as a sale or launch day.",
      },
      {
        question: "Can views be lower than reach?",
        answer:
          "No. Every account counted in reach saw the content at least once, so views are equal to or higher than reach. If a report shows otherwise, the numbers were captured at different times or come from different sources.",
      },
      {
        question: "How do I get reach data from an influencer?",
        answer:
          "Ask for insights screenshots or screen recordings of each post on an agreed date, plus audience location and age. Make this a written deliverable in the brief and contract.",
      },
    ],
  },
];
