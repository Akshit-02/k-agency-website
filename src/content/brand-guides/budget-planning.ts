import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

const BUDGET_PUBLISHED = "2026-10-08";
const BUDGET_REVIEWED = "October 2026";

/**
 * Budgeting and creator pricing cluster (1270–1289). Most of the 20 topics expanded existing owners
 * (budget hub, campaign cost, allocation, rates, tiers, cost per result, launch, always-on); the only
 * distinct intent without an owner was the nano vs micro decision. See docs/budget-pricing-1270-1289-audit.md.
 */
export const budgetPlanningPosts: BlogPost[] = [
  {
    slug: "nano-vs-micro-influencers",
    category: "Influencer Marketing",
    title: "Nano vs Micro Influencers: Which Creator Tier Fits Your Campaign and Budget?",
    seoTitle: "Nano vs Micro Influencers: Which Fits Your Budget?",
    excerpt:
      "Nano and micro creators are both 'small', but they buy different things. How they compare on audience, content, cost and coordination, which objectives suit each, how the budget maths changes when fees are low, and how to test both.",
    metaDescription:
      "Nano vs micro influencers: how they differ on audience, content, cost and effort, which objectives suit each, the budget maths at low fees and how to test both.",
    author: AUTHOR,
    publishedAt: BUDGET_PUBLISHED,
    lastReviewed: BUDGET_REVIEWED,
    readingTime: "8 min read",
    tags: [
      "nano vs micro influencers",
      "nano influencers",
      "micro influencers",
      "nano influencer budget",
      "nano vs micro influencer cost",
      "small budget influencer marketing",
    ],
    related: ["micro-vs-macro-influencers", "micro-influencers-india", "influencer-budget-allocation"],
    hero: {
      src: "/blog/brand-guides/nano-vs-micro-influencers.svg",
      alt: "Nano and micro creators compared: many small voices with more coordination per rupee, or fewer creators with more reach and polish each",
    },
    body: [
      {
        type: "paragraph",
        text: "The nano vs micro question usually comes up when a brand has a modest budget and wants more than one voice. Both tiers look cheap next to a macro creator, so the decision gets made on fees alone. It shouldn't be. At low fees, the cost of finding, briefing, shipping to and approving each creator becomes a large part of what you spend, and the two tiers ask very different things of your team.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Choose nano creators when you want many authentic voices in a niche, city or language, product seeding at volume, or a cheap way to find out which kinds of creators respond to your product, and you can handle the coordination. Choose micro creators when you need more reach and more polished content per partnership, fewer relationships to manage, and more reliable delivery against dates. Many brands use both: a nano batch to discover, then micro creators (and the best nano creators) to scale. Judge both on cost per result using the full cost per creator, not the fee.",
      },
      { type: "heading", text: "Nano vs micro at a glance", id: "comparison" },
      {
        type: "table",
        headers: ["", "Nano creators", "Micro creators"],
        rows: [
          ["Typical following", "Roughly 1,000 to 10,000 (boundaries vary by source)", "Roughly 10,000 to 100,000"],
          ["Audience", "Often friends-of-friends, a neighbourhood, a college or a tight niche", "A defined niche audience that follows for the creator's expertise or taste"],
          ["Typical payment", "Product, a small fee, or both", "A fee per deliverable, sometimes plus product"],
          ["Content", "Personal and less produced; quality varies widely", "More consistent, often closer to ad-ready"],
          ["Reach per creator", "Small", "Moderate"],
          ["Coordination per rupee", "High: many creators for the same spend", "Lower: fewer relationships"],
          ["Delivery reliability", "More variable; some are new to brand work", "Usually more experienced with briefs, dates and disclosure"],
          ["Data to judge them on", "Thin; may need help sharing insights", "Usually have a history of sponsored posts to review"],
          ["Strongest for", "Seeding, local and language reach, discovery, word of mouth", "Consideration, conversions, content for ads, niche credibility"],
        ],
      },
      {
        type: "paragraph",
        text: "Smaller accounts are commonly reported to have higher engagement rates on average, but that's a pattern, not a promise. A nano creator with an audience of classmates outside your market is worth less than a micro creator whose audience lives where you deliver.",
      },
      { type: "heading", text: "What follower count doesn't tell you", id: "beyond-followers" },
      {
        type: "list",
        items: [
          "Audience fit: the share of followers in your cities, language and age group, from recent insights screenshots",
          "Engagement quality: questions, saves and shares on recent posts, not just likes",
          "Content quality: whether the creator's normal content would look right next to your brand",
          "Niche relevance: whether people already come to this creator for recommendations in your category",
          "Reliability: response times, past deliveries on schedule, how they handled disclosure",
          "Authenticity: steady follower growth and comments from real accounts",
          "Past sponsored performance: whether sponsored posts perform close to the creator's organic ones",
        ],
      },
      {
        type: "paragraph",
        text: "These checks matter more at the nano tier, where one or two numbers can be misleading and fake engagement is cheap to buy. How to vet creators is covered in how to identify fake followers and influencer engagement rate.",
        links: [
          { text: "how to identify fake followers", href: "/blog/how-to-identify-fake-followers" },
          { text: "influencer engagement rate", href: "/blog/influencer-engagement-rate" },
        ],
      },
      { type: "heading", text: "Which objective suits which tier", id: "by-objective" },
      {
        type: "table",
        headers: ["Objective", "Leans towards", "Why"],
        rows: [
          ["Product seeding and word of mouth", "Nano", "Many genuine first reactions at low cost per creator"],
          ["Local or regional-language reach", "Nano, with some micro", "Dense local audiences in the language you need"],
          ["Discovering which creator types work", "Nano", "Enough creators to compare without large commitments"],
          ["Consideration in a specialist category", "Micro", "Credibility with a niche audience that asks for advice"],
          ["Sales with tracking", "Micro, plus proven nano creators", "Enough reach per creator to read results; nano results are often too small to tell apart from noise"],
          ["Content for ads and product pages", "Micro (or dedicated UGC creators)", "More consistent quality; rights easier to agree"],
          ["Launch-day visibility", "Micro, with nano for volume around it", "Reliable posting on a fixed date"],
        ],
      },
      { type: "heading", text: "The budget maths at low fees", id: "budget-maths" },
      {
        type: "paragraph",
        text: "When fees are small, the costs that don't shrink with the fee start to dominate: shipping the product, the time to find and brief each creator, reviewing drafts, chasing posts, processing payments and collecting results. Work out a real cost per creator before deciding how many you can afford.",
      },
      {
        type: "table",
        headers: ["Hypothetical, per creator", "Nano", "Micro"],
        rows: [
          ["Fee or product value", "₹5,000", "₹25,000"],
          ["Shipping, management time, payment admin", "₹3,000", "₹3,000"],
          ["Real cost per creator", "₹8,000", "₹28,000"],
          ["Overhead as a share of real cost", "About 38%", "About 11%"],
          ["Creators a ₹3,00,000 budget funds", "37", "10"],
        ],
      },
      {
        type: "paragraph",
        text: "These are illustrative figures, not rates. The point is the shape: the nano option buys almost four times as many creators, but more than a third of the money goes on running the programme rather than on creators. That's a good trade if you need 37 voices across several cities; it's a poor one if 10 well-matched micro creators would reach the same customers. Your own quotes and your team's capacity decide which, and influencer campaign costs in India shows how to calculate the real cost per creator.",
        links: [{ text: "influencer campaign costs in India", href: "/blog/influencer-campaign-cost-india" }],
      },
      { type: "heading", text: "Barter, gifting and paid deals", id: "barter-and-paid" },
      {
        type: "paragraph",
        text: "Product-only deals are more common with nano creators, and they can work when the creator genuinely wants the product. They aren't free. The product, shipping and coordination still cost money, a gift doesn't guarantee a post or a date, and a gifted product is a material connection that has to be disclosed under ASCI's influencer guidelines. If the campaign needs a specific deliverable on a specific date, pay a fee and write it down. Influencer gifting and influencer product seeding cover gifting programmes, and influencer marketing compliance covers disclosure.",
        links: [
          { text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines },
          { text: "Influencer gifting", href: "/blog/influencer-gifting" },
          { text: "influencer product seeding", href: "/blog/influencer-product-seeding-program" },
          { text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" },
        ],
      },
      { type: "heading", text: "Running many nano creators without drowning", id: "operations" },
      {
        type: "list",
        items: [
          "One standard brief with a short list of must-haves, so nobody needs a custom call",
          "Batch shipping and a single tracker for dispatch, delivery, draft, post and payment",
          "Approval in batches on fixed days rather than as each draft arrives",
          "A unique link or code per creator, set up before anything ships",
          "Clear disclosure instructions in the brief, since many nano creators are new to brand work",
          "Simple payment terms and a process for invoices and tax deductions agreed upfront",
        ],
      },
      {
        type: "paragraph",
        text: "If those steps would overwhelm your team, the lower fees won't save money. Managing groups of smaller creators is covered in how Indian brands can work with micro-influencers, and the payment side in the influencer payment process.",
        links: [
          { text: "how Indian brands can work with micro-influencers", href: "/blog/micro-influencers-india" },
          { text: "influencer payment process", href: "/blog/influencer-marketing-payments" },
        ],
      },
      { type: "heading", text: "Test both, then scale what works", id: "test-and-scale" },
      {
        type: "paragraph",
        text: "If you can't decide, don't. Run a first round with a batch of nano creators and a handful of micro creators on the same brief and offer, and compare them on the primary KPI using real cost per creator. Rebook the creators who performed, move the best nano creators into paid deals, and shift the next budget towards whichever tier produced results at a cost you can live with. Designing a fair comparison is covered in influencer marketing testing, and the bigger tiers in micro vs macro influencers.",
        links: [
          { text: "influencer marketing testing", href: "/blog/influencer-marketing-testing" },
          { text: "micro vs macro influencers", href: "/blog/micro-vs-macro-influencers" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing nano creators on fee alone, without counting the cost of running them",
          "Treating product-only deals as guaranteed deliverables",
          "Judging creators on one post when nano results are small enough to be noise",
          "Assuming higher engagement means the audience matches your customer",
          "Booking micro creators for local or language reach they don't actually have",
          "Skipping disclosure instructions for creators new to brand work",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Nano creators buy breadth, closeness and discovery at the cost of coordination; micro creators buy reach, consistency and easier management at a higher fee per creator. Neither tier is automatically better value. Decide by objective, check audience fit rather than follower count, count the real cost per creator, and let a side-by-side test settle the rest. How much to spend overall is covered in the influencer marketing budget guide.",
        links: [{ text: "influencer marketing budget guide", href: "/blog/influencer-marketing-budget" }],
      },
    ],
    faqs: [
      {
        question: "What is the difference between nano and micro influencers?",
        answer:
          "Nano influencers usually have roughly 1,000 to 10,000 followers and micro influencers roughly 10,000 to 100,000, though sources draw the lines differently. Nano creators tend to have closer, more local audiences and less produced content; micro creators offer more reach and consistency per partnership.",
      },
      {
        question: "Are nano influencers better than micro influencers?",
        answer:
          "Neither is better in general. Nano creators suit seeding, local or language reach and discovering what works; micro creators suit consideration, conversions and content you want to reuse. Audience fit matters more than tier.",
      },
      {
        question: "Do nano influencers work for free products?",
        answer:
          "Some accept product-only deals, especially when they genuinely want the product, but a gift doesn't guarantee a post or a date, and gifted products still need to be disclosed. Pay a fee when the campaign depends on specific deliverables.",
      },
      {
        question: "How many nano influencers does a campaign need?",
        answer:
          "Enough to cover the audiences and markets you need and to compare creators, but no more than your team can brief, ship to, approve and track properly. Count the real cost per creator, including coordination, before setting the number.",
      },
      {
        question: "Should a campaign mix nano and micro influencers?",
        answer:
          "Often, yes. A common approach is to start with a batch of nano creators and a few micro creators on the same brief, compare them on cost per result, then scale the tier and the individual creators that performed.",
      },
    ],
  },
];
