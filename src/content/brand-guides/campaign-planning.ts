import type { BlogPost } from "@/content/blog";
import { AUTHOR, PUBLISHED, REVIEWED } from "@/content/brand-guides/shared";

/**
 * Stage B of the brand lead-generation cluster (914–929): brands preparing an actual campaign.
 * Intent boundaries:
 * - influencer-marketing-campaign-timeline: how long a campaign takes, brief to report (914 + 915)
 * - influencer-budget-allocation: splitting a fixed budget across tiers and creators, and how many creators
 *   (917 fixed budget, 918 allocation, 920 how many influencers), with an allocator
 * - influencer-shortlist: longlist to shortlist to final selection (922)
 * - influencer-audience-quality: whether an audience is real, active and matches the customer (925 + 926)
 * - pan-india-influencer-marketing-campaign: national, multi-city and multilingual execution (929, absorbs 928)
 * Existing owners: how-to-create-a-successful-influencer-marketing-campaign (planning workflow, 916),
 * influencer-campaign-cost-india (cost calculator, 919), micro-vs-macro-influencers (creator mix, 921),
 * how-to-choose-the-right-influencer-for-your-brand (selection criteria and brand fit, 923 + 927),
 * how-to-vet-influencers (vetting checklist, 924), regional-influencer-marketing-india (regional creators keyword).
 */
export const campaignPlanningPosts: BlogPost[] = [
  {
    slug: "influencer-marketing-campaign-timeline",
    category: "Campaign Strategy",
    title: "Influencer Marketing Campaign Timeline: From Brief to Final Report",
    seoTitle: "How Long Does an Influencer Campaign Take? Timeline Guide",
    excerpt:
      "How long an influencer marketing campaign takes in India, stage by stage from brief to final report: planning, creator sourcing and vetting, negotiation and contracts, briefing, production and approvals, go-live and reporting, with example timelines for a small test, a product launch and a festive campaign, and what slows campaigns down.",
    metaDescription:
      "How long an influencer campaign takes, stage by stage from brief to report, with example timelines for tests, launches and festive campaigns in India.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "12 min read",
    tags: ["influencer campaign timeline", "influencer marketing campaign timeline", "how long does an influencer campaign take", "influencer campaign planning timeline", "influencer launch timeline India"],
    related: ["how-to-create-a-successful-influencer-marketing-campaign", "influencer-campaign-management", "influencers-for-product-launch"],
    hero: { src: "/blog/brand-guides/influencer-marketing-campaign-timeline.svg", alt: "Week-by-week influencer campaign timeline from brief and creator sourcing through contracts, production, approvals, go-live and reporting" },
    body: [
      {
        type: "paragraph",
        text: "The most common planning mistake in influencer marketing is starting three weeks before a launch date that can't move. Creators need time to find a slot, make content and get it approved; your legal team needs time to read claims; parcels take time to reach Guwahati and Coimbatore. A realistic timeline is the difference between a campaign and a scramble.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A typical influencer campaign takes several weeks from brief to go-live, plus a live window and a few weeks for results and reporting. As a planning rule of thumb (illustrative, not a standard), a small test with a handful of micro-creators can go live in about three to five weeks from brief; a multi-creator product launch usually needs six to ten weeks; campaigns tied to festive seasons or large regional rollouts should start planning two to three months ahead. The biggest variables are creator availability, product shipping, approval speed, usage-rights negotiation and category compliance.",
      },
      { type: "heading", text: "The stages and what drives their length", id: "stages" },
      {
        type: "table",
        headers: ["Stage", "What happens", "What makes it longer"],
        rows: [
          ["1. Brief and planning", "Objective, KPI, audience, budget, platforms agreed", "Unclear objective; many stakeholders"],
          ["2. Creator sourcing and vetting", "Longlist, audience checks, shortlist, client approval", "Niche or regional creators; slow shortlist approval"],
          ["3. Outreach and negotiation", "Availability, fees, usage, exclusivity", "Usage rights for ads; exclusivity; many creators"],
          ["4. Contracts", "Terms confirmed in writing", "Legal review; vendor onboarding and POs"],
          ["5. Product and briefing", "Product shipped, creator brief sent", "Shipping to many cities; product not ready"],
          ["6. Production", "Creators make content", "Complex formats, shoots, travel"],
          ["7. Review and approvals", "Drafts checked, revised, approved", "Several approvers; regulated claims"],
          ["8. Go-live", "Staggered or synchronized publishing", "Launch-date dependencies"],
          ["9. Live window and tracking", "Monitoring, amplification", "Longer windows for sales or leads"],
          ["10. Reporting and review", "Data collection, report, post-mortem", "Waiting for sales data or platform insights"],
        ],
      },
      { type: "heading", text: "Example timelines", id: "examples" },
      {
        type: "paragraph",
        text: "Illustrative examples, not benchmarks. Your timeline depends on creator availability, approvals and logistics.",
      },
      {
        type: "subheading",
        text: "Small test: 6 micro-creators, one platform",
      },
      {
        type: "table",
        headers: ["Week", "Work"],
        rows: [
          ["1", "Brief, audience definition, sourcing longlist"],
          ["2", "Vetting, shortlist approval, outreach"],
          ["3", "Confirmations, product shipped, creator briefs"],
          ["4", "Drafts, one round of feedback, approvals"],
          ["5", "Go-live across a few days"],
          ["6–8", "Tracking window, then report and review"],
        ],
      },
      {
        type: "subheading",
        text: "Product launch: 20+ creators, launch date fixed",
      },
      {
        type: "table",
        headers: ["Weeks before launch", "Work"],
        rows: [
          ["10–8", "Strategy, creator mix, budget split, shortlist approval"],
          ["8–6", "Negotiation, usage rights, contracts, vendor onboarding"],
          ["6–4", "Product seeding, briefs, pre-launch teaser planning"],
          ["4–2", "Drafts, review, legal check of claims, approvals"],
          ["2–0", "Teasers, embargoed content scheduled, launch-day plan confirmed"],
          ["Launch +0–4", "Launch-day posts, follow-up waves, paid amplification"],
          ["Launch +4–8", "Results, report, post-mortem"],
        ],
      },
      {
        type: "paragraph",
        text: "Launch planning in detail: how to find the right influencers for a product launch.",
        links: [{ text: "how to find the right influencers for a product launch", href: "/blog/influencers-for-product-launch" }],
      },
      {
        type: "subheading",
        text: "Festive campaign across regions",
      },
      {
        type: "paragraph",
        text: "Popular creators in India book up ahead of Diwali, Durga Puja, Onam, Pongal and wedding season, and regional festivals fall on different dates. Start sourcing two to three months before the first festival you're targeting, lock creators early, and plan language-specific briefs and approvals per region. Seasonal planning is covered in seasonal influencer marketing in India.",
        links: [{ text: "seasonal influencer marketing in India", href: "/blog/seasonal-influencer-marketing-india" }],
      },
      { type: "heading", text: "What slows campaigns down, and fixes", id: "delays" },
      {
        type: "table",
        headers: ["Delay", "Fix"],
        rows: [
          ["Slow shortlist approval", "One decision-maker; approve on criteria agreed in the brief"],
          ["Usage-rights negotiation late in the process", "Decide ad usage before outreach"],
          ["Vendor onboarding and purchase orders", "Start finance paperwork in week one"],
          ["Product not ready or stuck in transit", "Ship early; track every parcel; plan a buffer"],
          ["Many approvers, unlimited rounds", "Named approvers, set turnaround, fixed revision rounds"],
          ["Claims needing legal review", "Share approved claims list with creators in the brief"],
          ["Creator misses a date", "Buffer days; backup creators from the shortlist"],
        ],
      },
      { type: "heading", text: "How long should a campaign stay live?", id: "live-window" },
      {
        type: "paragraph",
        text: "It depends on the objective. Awareness campaigns often run as a concentrated burst so reach overlaps; sales and lead campaigns need a longer window, because creator content keeps working after posting and buying decisions take time. Considered purchases (cars, property, education, B2B software) need measurement windows of weeks or months. Metrics by objective are covered in influencer marketing KPIs.",
        links: [{ text: "influencer marketing KPIs", href: "/blog/influencer-marketing-kpis" }],
      },
      { type: "heading", text: "Build the plan backwards", id: "backwards" },
      {
        type: "list",
        items: [
          "Start from the fixed date (launch, sale, event) and work back.",
          "Add buffers at approvals and shipping, where delays cluster.",
          "Book creators before you finalize every detail of the brief when dates are tight.",
          "Put approval deadlines in writing for your own team, not just the agency.",
          "Keep a master tracker; see how influencer campaign management works.",
        ],
      },
      {
        type: "paragraph",
        text: "Execution workflow: how influencer campaign management works. The planning steps themselves: how to create a successful influencer marketing campaign.",
        links: [
          { text: "how influencer campaign management works", href: "/blog/influencer-campaign-management" },
          { text: "how to create a successful influencer marketing campaign", href: "/blog/how-to-create-a-successful-influencer-marketing-campaign" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Influencer campaigns take longer than most first plans assume, because creator availability, shipping, approvals and rights negotiation all take time. Plan backwards from the fixed date, add buffers where delays cluster, make approval turnaround a commitment, and allow a measurement window that fits the purchase. A campaign planned this way goes live calmly.",
      },
    ],
    faqs: [
      {
        question: "How long does an influencer marketing campaign take?",
        answer:
          "Usually several weeks from brief to go-live plus a live and reporting window. As an illustrative planning guide, small tests can go live in about three to five weeks, multi-creator launches often need six to ten weeks, and festive or regional campaigns should start two to three months ahead.",
      },
      {
        question: "How far in advance should we book influencers for a launch?",
        answer:
          "For a launch with a fixed date, start sourcing about two months ahead so there's time for negotiation, contracts, product seeding, drafts and approvals, and earlier for festive periods when popular creators book up.",
      },
      {
        question: "What delays influencer campaigns most?",
        answer:
          "Slow shortlist and content approvals, late usage-rights negotiation, vendor onboarding, product shipping, legal review of claims and creators missing dates without buffers.",
      },
    ],
  },
  {
    slug: "influencer-budget-allocation",
    category: "Campaign Strategy",
    title: "How to Allocate Your Influencer Marketing Budget Across Creators",
    seoTitle: "Influencer Budget Allocation: Creators and Tiers",
    excerpt:
      "How to plan an influencer campaign with a fixed budget: reserving money for non-creator costs, splitting the creator budget by objective and tier, working out how many influencers you can afford, test-and-scale allocation, and an allocator that turns your budget and quoted fees into a creator count.",
    metaDescription:
      "Plan an influencer campaign on a fixed budget: reserve non-creator costs, split by tier and objective, work out how many creators you can afford.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: "September 2026",
    readingTime: "13 min read",
    tags: ["influencer marketing budget allocation", "influencer marketing budget planning", "how many influencers for a campaign", "fixed budget influencer campaign", "influencer tier budget split"],
    related: ["influencer-marketing-budget", "influencer-campaign-cost-india", "micro-vs-macro-influencers"],
    hero: { src: "/blog/brand-guides/influencer-budget-allocation.svg", alt: "A fixed influencer budget split into reserved costs and creator tiers, showing how many micro, mid-tier and macro creators it can fund" },
    body: [
      {
        type: "paragraph",
        text: "Most brands don't start from a blank budget. They start from a number finance has approved and a question: what's the best campaign we can run with this? That's an allocation problem, and it's different from calculating a budget from scratch, which is covered in how to calculate an influencer marketing budget.",
        links: [{ text: "how to calculate an influencer marketing budget", href: "/blog/influencer-marketing-budget" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To allocate a fixed influencer budget: first reserve money for everything that isn't a creator fee (agency or management, production, usage rights, paid amplification, product and shipping, tracking, contingency). Then split what's left across creator tiers based on your objective: more to larger creators for reach, more to micro-creators for trust, conversions and content volume, and a slice for testing. Divide each tier's budget by the realistic fee you've been quoted to see how many creators you can afford. The right number of influencers is the number your budget, objective and management capacity can support well, not the largest number you can fit.",
      },
      { type: "heading", text: "Step 1: Reserve non-creator costs first", id: "reserve" },
      {
        type: "table",
        headers: ["Cost", "Why it's easy to forget"],
        rows: [
          ["Agency or campaign management", "Coordination time scales with creator count"],
          ["Production", "Shoots, editing, UGC beyond creators' own posts"],
          ["Usage rights and whitelisting", "Needed if content will run as ads"],
          ["Paid amplification", "Media spend behind the best creator content"],
          ["Product, shipping and returns", "Seeding many creators across cities adds up"],
          ["Tracking", "Landing pages, codes, affiliate tools"],
          ["Contingency", "Replacements, extra rounds, price changes"],
        ],
      },
      {
        type: "paragraph",
        text: "Brands that allocate the whole budget to creator fees often discover the extras when it's too late to cut creators. Full budget components are in influencer campaign costs in India.",
        links: [{ text: "influencer campaign costs in India", href: "/blog/influencer-campaign-cost-india" }],
      },
      { type: "heading", text: "Step 2: Split the creator budget by objective", id: "split" },
      {
        type: "table",
        headers: ["Objective", "Leans towards", "Why"],
        rows: [
          ["Awareness and reach", "More to macro and mid-tier creators, some micro for frequency", "Reach concentrated in fewer, larger accounts"],
          ["Launch buzz", "A few larger creators for launch day, many micro-creators around it", "Visibility plus volume of conversation"],
          ["Consideration and trust", "More to micro and mid-tier specialists", "Credibility in a niche"],
          ["Sales and conversions", "Micro and mid-tier with codes or links; test before scaling", "Measurable, cheaper to test"],
          ["Content for ads", "UGC creators and micro-creators", "Many assets to test in paid media"],
          ["Regional reach", "Regional-language creators per market", "Local trust and language"],
        ],
      },
      {
        type: "paragraph",
        text: "Tier trade-offs are covered in micro vs macro influencers.",
        links: [{ text: "micro vs macro influencers", href: "/blog/micro-vs-macro-influencers" }],
      },
      { type: "heading", text: "Step 3: Work out how many creators you can afford", id: "how-many" },
      {
        type: "paragraph",
        text: "Divide each tier's budget by the realistic fee for the deliverables you need, using quotes you've actually received rather than published averages. Then check the count against capacity: every creator needs sourcing, negotiation, briefing, review and payment.",
      },
      { type: "tool", tool: "influencer-budget-allocator" },
      { type: "heading", text: "How many influencers does a campaign need?", id: "how-many-influencers" },
      {
        type: "paragraph",
        text: "There's no universal number. Use these questions instead:",
      },
      {
        type: "list",
        items: [
          "Reach: roughly how many people in your target audience need to see the campaign, and what's each creator's typical reach (not follower count)?",
          "Frequency: will the same people see several creators, which helps recall?",
          "Segments: how many audience segments, cities or languages must be covered? Each may need its own creators.",
          "Testing: do you have enough creators to learn which types work, typically several per creator type you're testing?",
          "Capacity: can your team or agency manage each creator properly?",
          "Budget: does the count leave enough per creator for good content and rights?",
        ],
      },
      {
        type: "paragraph",
        text: "A campaign of five well-chosen creators can outperform one of fifty spread thin. For product launches specifically, see the creator-count section in how to find the right influencers for a product launch.",
        links: [{ text: "how to find the right influencers for a product launch", href: "/blog/influencers-for-product-launch" }],
      },
      { type: "heading", text: "Test, then scale", id: "test-scale" },
      {
        type: "table",
        headers: ["Phase", "Share of creator budget (illustrative)", "Purpose"],
        rows: [
          ["Test", "A smaller first slice", "Several creator types, formats or messages; learn what works"],
          ["Scale", "The larger remainder", "Rebook winners, add similar creators, amplify top content"],
        ],
      },
      {
        type: "paragraph",
        text: "Holding back part of the budget for a second wave means you spend most of it on what's proven, not on guesses. It needs time in the timeline; see influencer campaign timeline.",
        links: [{ text: "influencer campaign timeline", href: "/blog/influencer-marketing-campaign-timeline" }],
      },
      { type: "heading", text: "Illustrative allocation", id: "example" },
      {
        type: "paragraph",
        text: "Illustrative example with hypothetical numbers: a skincare D2C brand has ₹10,00,000 for a consideration-led campaign in four metro cities.",
      },
      {
        type: "table",
        headers: ["Line", "Amount", "Notes"],
        rows: [
          ["Management, production, usage, tracking, product, contingency", "₹3,00,000", "Reserved first"],
          ["Mid-tier skincare educators", "₹3,00,000", "Divided by quotes received: e.g. 5 creators"],
          ["Micro-creators across four cities", "₹3,00,000", "e.g. 15 creators at the fees quoted"],
          ["Held for second wave", "₹1,00,000", "Rebook best performers or amplify top content"],
        ],
      },
      {
        type: "paragraph",
        text: "The creator counts depend entirely on the fees you're quoted for the deliverables and rights you need. Influencer rates are explained in how much to pay influencers.",
        links: [{ text: "how much to pay influencers", href: "/blog/how-much-to-pay-influencers" }],
      },
      {
        type: "paragraph",
        text: "To estimate what an allocation might return before committing, use influencer marketing ROI forecasting; to spread budget across a full year, see influencer marketing annual plan.",
        links: [
          { text: "influencer marketing ROI forecasting", href: "/blog/influencer-marketing-roi-forecasting" },
          { text: "influencer marketing annual plan", href: "/blog/influencer-marketing-annual-plan" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Allocating everything to creator fees.",
          "Maximizing creator count rather than fit and content quality.",
          "Using published rate averages instead of real quotes.",
          "No money held back for scaling what works.",
          "Too many creators for the team to manage properly.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A fixed budget goes furthest when non-creator costs are reserved first, the creator budget follows the objective, creator counts come from real quotes and real capacity, and part of the money waits for evidence. That turns a number from finance into a plan you can defend.",
      },
    ],
    faqs: [
      {
        question: "How many influencers do I need for a campaign?",
        answer:
          "It depends on the reach you need, how many audience segments, cities or languages you must cover, how many creator types you want to test, your budget per creator and your capacity to manage them. Fewer well-chosen creators often beat many poorly matched ones.",
      },
      {
        question: "How should I split an influencer budget between micro and macro creators?",
        answer:
          "By objective: more to larger creators for broad reach, more to micro and mid-tier creators for trust, conversions and content volume, with a portion held for testing and scaling what works.",
      },
      {
        question: "What should I reserve before paying creators?",
        answer:
          "Management or agency fees, production, usage rights, paid amplification, product and shipping, tracking and a contingency.",
      },
    ],
  },
  {
    slug: "influencer-shortlist",
    category: "Influencer Marketing",
    title: "How to Build an Influencer Shortlist for Your Brand",
    seoTitle: "How to Build an Influencer Shortlist (With Template)",
    excerpt:
      "How brands and agencies build an influencer shortlist: from discovery longlist to vetted shortlist to final selection, how many options to keep, what each shortlist entry should show, availability and conflict checks, backups, a shortlist template, and how to approve it quickly.",
    metaDescription:
      "Build an influencer shortlist: longlist to shortlist to final picks, what each entry should show, availability and conflict checks, backups and a template.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "11 min read",
    tags: ["influencer shortlist", "influencer longlist", "creator shortlist template", "influencer selection process", "shortlist influencers for campaign"],
    related: ["how-to-vet-influencers", "how-to-choose-the-right-influencer-for-your-brand", "find-indian-influencers"],
    hero: { src: "/blog/brand-guides/influencer-shortlist.svg", alt: "Influencer selection funnel narrowing a discovery longlist to a vetted shortlist and final selection with backups" },
    body: [
      {
        type: "paragraph",
        text: "A shortlist is where a campaign's quality is decided. Discovery produces lots of plausible names; vetting removes the risky ones; the shortlist is the small, reasoned set that a decision-maker can approve in one sitting. When shortlists are just spreadsheets of handles and follower counts, approvals drag and weak creators slip through.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Build an influencer shortlist in three passes: a longlist from discovery (search, tools, referrals), a vetted shortlist after audience, authenticity, content and brand-safety checks, and a final selection after availability, fees and conflicts are confirmed. Keep more options than you need so you have backups. Each shortlist entry should show the creator's platform and typical reach, audience match with dated data, content examples, past brand work, estimated fee and a one-line reason they fit the brief.",
      },
      { type: "heading", text: "The three passes", id: "passes" },
      {
        type: "table",
        headers: ["Pass", "Input", "Filter", "Output"],
        rows: [
          ["Longlist", "Platform search, discovery tools, referrals, past creators", "Topic, platform, language, region, rough size", "A broad list of possible creators"],
          ["Shortlist", "Longlist", "Audience fit, authenticity, content quality, brand safety", "Vetted options with reasons"],
          ["Final selection", "Shortlist", "Availability, fees, usage, exclusivity, conflicts, mix", "Creators to contract, plus backups"],
        ],
      },
      {
        type: "paragraph",
        text: "Discovery methods are in how to find the right Indian influencers for your brand; the vetting pass in how to vet influencers before a brand collaboration.",
        links: [
          { text: "how to find the right Indian influencers for your brand", href: "/blog/find-indian-influencers" },
          { text: "how to vet influencers before a brand collaboration", href: "/blog/how-to-vet-influencers" },
        ],
      },
      { type: "heading", text: "How many to keep at each stage", id: "how-many" },
      {
        type: "paragraph",
        text: "Keep a margin at every stage because some creators won't be available, some will quote beyond budget and some will decline your terms. As an illustrative planning guide, a shortlist is often around one and a half to two times the number of creators you need, and the longlist several times larger. Niche and regional briefs need wider longlists because fewer creators fit.",
      },
      { type: "heading", text: "What every shortlist entry should show", id: "entry" },
      {
        type: "template",
        label: "Shortlist template (one row per creator)",
        text: "Creator | Platform(s) | Typical views/reach (dated) | Audience: top cities, age, language (dated, source) |\nContent examples (2–3 links) | Past brands and conflicts | Estimated fee for these deliverables |\nUsage/exclusivity notes | Brand-safety notes | Why they fit this brief (one line) | Tier/role | Status",
      },
      {
        type: "list",
        items: [
          "Date and source every audience number; mark estimates as estimates.",
          "Write the reason for each creator in one line; it forces clear thinking and speeds approval.",
          "Show the mix: which creators play which role (reach, trust, conversions, regional coverage).",
          "Flag risks honestly rather than leaving them for the approver to discover.",
        ],
      },
      { type: "heading", text: "Checks before final selection", id: "checks" },
      {
        type: "list",
        items: [
          "Availability in your go-live window.",
          "Fees for the exact deliverables, usage and exclusivity you need.",
          "Existing exclusivities with competitors.",
          "Recent sponsored content volume, so your post isn't lost among many ads.",
          "Overlap between creators' audiences, if you want reach rather than frequency.",
        ],
      },
      { type: "heading", text: "Approving the shortlist quickly", id: "approval" },
      {
        type: "list",
        items: [
          "Approve against the criteria agreed in the brief, not personal taste.",
          "One decision-maker, with others consulted before, not after.",
          "Approve a ranked list with backups, so replacements don't need another round.",
          "Set a turnaround time; shortlist approval is one of the most common delays in the campaign timeline.",
        ],
      },
      {
        type: "paragraph",
        text: "Timeline impact: influencer campaign timeline. Selection criteria for judging fit: how to choose the right influencer for your brand. Kudozz's creator discovery service delivers shortlists in this format, with a written rationale for each creator.",
        links: [
          { text: "influencer campaign timeline", href: "/blog/influencer-marketing-campaign-timeline" },
          { text: "how to choose the right influencer for your brand", href: "/blog/how-to-choose-the-right-influencer-for-your-brand" },
          { text: "creator discovery service", href: "/services/creator-discovery" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Shortlists sorted by follower count.",
          "No backups, so one decline restarts the process.",
          "Undated or estimated audience data presented as fact.",
          "Ignoring competitor exclusivities until contracting.",
          "Everyone in the team approving, nobody deciding.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good influencer shortlist is small, vetted, reasoned and ready to approve. Build it in three passes, keep margins and backups, show dated evidence and a clear reason for every creator, and confirm availability, fees and conflicts before final selection.",
      },
    ],
    faqs: [
      {
        question: "What should an influencer shortlist include?",
        answer:
          "For each creator: platforms, typical reach, audience match with dated data and source, content examples, past brands and conflicts, estimated fee, usage and exclusivity notes, brand-safety notes and a one-line reason they fit the brief.",
      },
      {
        question: "How many influencers should be on a shortlist?",
        answer:
          "More than you need, to allow for unavailability, fees and declined terms. As an illustrative guide, about one and a half to two times the final number, with wider longlists for niche or regional briefs.",
      },
      {
        question: "What's the difference between a longlist and a shortlist?",
        answer:
          "A longlist is broad discovery output filtered by topic, platform, language and size. A shortlist has passed audience, authenticity, content and brand-safety checks and shows why each creator fits.",
      },
    ],
  },
  {
    slug: "influencer-audience-quality",
    category: "Influencer Marketing",
    title: "Influencer Audience Quality: What Brands Should Check Before a Collaboration",
    seoTitle: "Influencer Audience Quality and Fit: What to Check",
    excerpt:
      "How brands check whether an influencer's audience is real, active and matches their target customer: the audience data to request, reading location, age, gender and language against your customer profile, authenticity and activity signals, an audience-fit worksheet and when estimated data isn't enough.",
    metaDescription:
      "Check influencer audience quality and fit: data to request, matching location, age and language to your customer, authenticity signals and a fit worksheet.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "12 min read",
    tags: ["influencer audience quality", "influencer audience fit", "influencer audience analysis", "check influencer audience demographics", "influencer audience match target customer"],
    related: ["how-to-vet-influencers", "how-to-identify-fake-followers", "how-to-choose-the-right-influencer-for-your-brand"],
    hero: { src: "/blog/brand-guides/influencer-audience-quality.svg", alt: "Creator audience demographics by city, age and language overlaid on a brand's target customer profile to show audience fit" },
    body: [
      {
        type: "paragraph",
        text: "Two creators with the same follower count can deliver completely different results for the same brand. One's audience lives in the cities you ship to, speaks the language of your ads and buys in your category. The other's audience is mostly elsewhere, mostly inactive, or mostly other creators. Audience quality and fit decide which one you're paying for.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Check two things: quality (is the audience real and active?) and fit (does it match your target customer?). For quality, look at follower growth patterns, comment substance, views relative to followers and engagement consistency. For fit, ask creators for recent platform insights screenshots showing top cities, countries, age bands, gender and, where available, language, and compare them with your customer profile. Treat third-party estimates as estimates, date every number, and weigh fit above size.",
      },
      { type: "heading", text: "Quality vs fit", id: "quality-vs-fit" },
      {
        type: "table",
        headers: ["", "Audience quality", "Audience fit"],
        rows: [
          ["Question", "Are these real, active people who pay attention?", "Are they the people we sell to?"],
          ["Signals", "Growth pattern, comment substance, views vs followers, consistency", "Location, age, gender, language, interests, buying context"],
          ["Main risk", "Fake or inactive audiences", "Real audience, wrong customers"],
        ],
      },
      { type: "heading", text: "The audience data to request", id: "request" },
      {
        type: "list",
        items: [
          "Recent insights screenshots (last 30–90 days): top cities and countries, age range, gender split.",
          "Reach and views on recent posts in the format you're buying (Reels, Stories, long-form video).",
          "For YouTube: audience geography, age and returning viewers from YouTube Analytics.",
          "Insights from two or three recent sponsored posts, if the creator is comfortable sharing.",
          "Date of each screenshot, so you know how current it is.",
        ],
      },
      {
        type: "paragraph",
        text: "Creators own this data and share it voluntarily; ask politely, explain why, and handle it confidentially. Public profile numbers and third-party estimates can support the picture but shouldn't replace creator-provided insights for significant spends.",
      },
      { type: "heading", text: "Reading audience fit against your customer", id: "fit" },
      {
        type: "table",
        headers: ["Dimension", "What to compare", "Watch for"],
        rows: [
          ["Location", "Top cities and states vs where you sell and ship", "Large share outside India for an India-only product"],
          ["Tier of city", "Metro vs tier 2 and 3 vs your distribution", "Metro-heavy audience for a tier 2 and 3 push"],
          ["Language", "Content language and comment language vs your ad and pack language", "Hindi audience for a Tamil Nadu launch"],
          ["Age", "Age bands vs your buyer (and payer, if different)", "Teen-heavy audience for a product parents buy"],
          ["Gender", "Split vs your buyer", "Skewed split for a gendered product"],
          ["Interests and context", "What they come to the creator for", "Entertainment audience for a considered purchase"],
        ],
      },
      { type: "heading", text: "Audience-fit worksheet", id: "worksheet" },
      {
        type: "template",
        label: "Audience-fit worksheet (per creator)",
        text: "Target customer: [cities/states] · [age band] · [gender] · [languages] · [context]\n\nCreator: [ ]   Data date: [ ]   Source: [creator insights / tool estimate]\nShare of audience in target locations: [ ]%   → fit: strong / partial / weak\nShare in target age bands: [ ]%              → fit: strong / partial / weak\nGender match: [ ]                              → fit: strong / partial / weak\nLanguage match: [ ]                            → fit: strong / partial / weak\nContent context fits the purchase? [yes/no, why]\nOverall: strong / partial / weak: notes: [ ]",
      },
      {
        type: "paragraph",
        text: "There's no universal threshold for \"enough\" overlap; set your own by category and objective. A regional launch needs a much tighter location match than a national awareness push.",
      },
      { type: "heading", text: "Quality signals", id: "quality" },
      {
        type: "table",
        headers: ["Signal", "Healthy", "Worth investigating"],
        rows: [
          ["Follower growth", "Steady, with explainable jumps (a viral post, a collaboration)", "Sudden spikes with no visible cause"],
          ["Comments", "Specific, questions, conversation in the creator's language", "Generic emojis, repeated phrases, unrelated languages"],
          ["Views vs followers", "Consistent with the creator's recent history", "Very low views relative to followers"],
          ["Consistency", "Similar performance across recent posts", "One outlier carrying the average"],
          ["Sponsored posts", "Engagement similar to organic posts", "Sponsored posts ignored by the audience"],
        ],
      },
      {
        type: "paragraph",
        text: "No single signal proves fraud; look for patterns. The detailed checks are in how to identify fake followers and fake engagement and how to avoid fake followers and influencer fraud in India.",
        links: [
          { text: "how to identify fake followers and fake engagement", href: "/blog/how-to-identify-fake-followers" },
          { text: "how to avoid fake followers and influencer fraud in India", href: "/blog/how-to-identify-fake-followers" },
        ],
      },
      { type: "heading", text: "India-specific considerations", id: "india" },
      {
        type: "list",
        items: [
          "Language fit matters as much as location: a creator in Mumbai may have a largely Marathi-speaking or largely English-speaking audience.",
          "Regional creators often have tighter geographic audiences, which is ideal for city or state launches; see regional influencer marketing in India.",
          "Diaspora audiences can be large for some creators; valuable for some brands, wasted for India-only products.",
          "Tier 2 and 3 audiences may respond to different formats and price points; check the creator's content style, not just the numbers.",
        ],
      },
      {
        type: "paragraph",
        text: "Regional strategy: regional influencer marketing in India.",
        links: [{ text: "regional influencer marketing in India", href: "/blog/regional-influencer-marketing-india" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Judging by follower count or engagement rate alone.",
          "Treating third-party estimates as fact.",
          "Undated audience screenshots.",
          "Ignoring language and city tier.",
          "Checking audience quality but not fit (a real audience of the wrong people).",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Audience quality tells you the audience is real; audience fit tells you it's yours. Request recent creator insights, compare location, language, age and context with your customer, read quality signals as patterns, and weigh fit above reach. That's how a smaller creator becomes the better booking.",
      },
    ],
    faqs: [
      {
        question: "How do I check if an influencer's audience matches my target customer?",
        answer:
          "Ask for recent platform insights screenshots showing top cities, age bands, gender and, where available, language, and compare them with your customer profile, including city tier and the context in which the audience follows the creator.",
      },
      {
        question: "What is influencer audience quality?",
        answer:
          "Whether a creator's audience is made of real, active people who pay attention, judged from growth patterns, comment substance, views relative to followers and consistency across posts.",
      },
      {
        question: "Can I rely on influencer analytics tools for audience data?",
        answer:
          "Use them to narrow options, but treat demographic and authenticity scores as estimates. For meaningful spends, ask creators for their own recent insights screenshots.",
      },
    ],
  },
  {
    slug: "pan-india-influencer-marketing-campaign",
    category: "Campaign Strategy",
    title: "How to Run a Pan-India Influencer Marketing Campaign",
    seoTitle: "Pan-India and Multi-City Influencer Campaigns: A Guide",
    excerpt:
      "How to plan and run an influencer campaign across India: national vs regional creator layers, choosing cities and languages, finding regional creators for each market, localizing briefs without losing the core message, logistics, approvals in several languages, staggered rollouts and measuring by market.",
    metaDescription: "Plan a pan-India or multi-city influencer campaign: national and regional creators, cities and languages, localized briefs, logistics and measurement.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "14 min read",
    tags: ["pan India influencer marketing", "multilingual influencer marketing", "multi-city influencer campaign", "multi-language creator campaign", "national influencer campaign India"],
    related: ["regional-influencer-marketing-india", "find-indian-influencers", "influencer-budget-allocation"],
    hero: { src: "/blog/brand-guides/pan-india-influencer-marketing-campaign.svg", alt: "Pan-India campaign plan with a national creator layer and regional creator clusters by city and language" },
    body: [
      {
        type: "paragraph",
        text: "A campaign that works in Delhi can fall flat in Chennai, not because the product is wrong, but because the creators, language, references and even the festival calendar are. Pan-India campaigns succeed when they're planned as one national idea delivered through several local voices.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Run a pan-India influencer campaign in two layers: a national layer of creators with broad Hindi or English audiences for reach, and a regional layer of creators in each priority language and city for local trust. Choose markets from sales and distribution data, not a map; source regional creators per market; write one core brief with localized versions checked by native speakers; plan shipping and approvals per region; stagger the rollout if capacity or stock is limited; and measure each market separately.",
      },
      { type: "heading", text: "National layer vs regional layer", id: "layers" },
      {
        type: "table",
        headers: ["", "National layer", "Regional layer"],
        rows: [
          ["Creators", "Hindi and English creators with country-wide audiences", "Creators in Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi and other languages"],
          ["Role", "Reach, launch visibility, brand familiarity", "Local trust, relevance, conversion in specific markets"],
          ["Brief", "Core message", "Core message, localized references, language, examples"],
          ["Measurement", "Reach, search lift, overall sales", "Market-level sales, leads or store visits"],
        ],
      },
      {
        type: "paragraph",
        text: "Not every campaign needs both layers. A national awareness push may be mostly national; a regional launch may be entirely regional. Language and cultural relevance is covered in depth in regional and vernacular influencer marketing in India.",
        links: [{ text: "regional and vernacular influencer marketing in India", href: "/blog/regional-influencer-marketing-india" }],
      },
      { type: "heading", text: "Choosing cities and languages", id: "markets" },
      {
        type: "list",
        items: [
          "Start from where you can sell: distribution, delivery coverage, store presence, service areas.",
          "Look at where current customers are, and where growth targets are.",
          "Group markets by language rather than by state boundary alone; Hindi covers many states, while Tamil Nadu, Kerala or West Bengal may need their own creators.",
          "Consider city tier: metro, tier 2 and tier 3 audiences may need different creators and formats.",
          "Prioritize: a few well-covered markets beat many thin ones.",
        ],
      },
      { type: "heading", text: "Finding regional creators for each market", id: "regional-creators" },
      {
        type: "list",
        items: [
          "Search in the local language and script, not only in English.",
          "Look for city-specific food, lifestyle, family and explainer creators.",
          "Check audience location and language data; a creator based in a city may have a national audience.",
          "Ask local teams, distributors or store staff which creators customers mention.",
          "Keep a market-by-market longlist; see how to build an influencer shortlist.",
        ],
      },
      {
        type: "paragraph",
        text: "Shortlisting: how to build an influencer shortlist. Audience checks: influencer audience quality and fit.",
        links: [
          { text: "how to build an influencer shortlist", href: "/blog/influencer-shortlist" },
          { text: "influencer audience quality and fit", href: "/blog/influencer-audience-quality" },
        ],
      },
      { type: "heading", text: "One brief, localized properly", id: "localization" },
      {
        type: "table",
        headers: ["Keep the same everywhere", "Localize per market"],
        rows: [
          ["Product facts and approved claims", "Language, idioms and humor"],
          ["Disclosure requirements", "Cultural references and occasions"],
          ["Brand safety rules", "Examples, locations, use cases"],
          ["Core message and CTA", "Offers, if pricing or availability differs"],
        ],
      },
      {
        type: "paragraph",
        text: "Have a native speaker check localized briefs and review regional content before approval. Machine translation of a Hindi brief into Tamil is a common source of awkward or wrong content. Disclosure should be in the language of the content or in English, per ASCI's guidelines.",
      },
      { type: "heading", text: "Managing creators across languages", id: "multilingual" },
      {
        type: "table",
        headers: ["Approach", "What it means", "Use when"],
        rows: [
          ["Translation", "Same script translated", "Rarely; only for factual product information"],
          ["Transcreation", "Core message adapted to local idiom and references", "Brand messages that must stay consistent"],
          ["Native creation", "Creators make original content in their language from a core brief", "Most creator content"],
        ],
      },
      {
        type: "table",
        headers: ["Workflow step", "Multilingual practice"],
        rows: [
          ["Brief", "One master brief plus localized notes per language"],
          ["Review", "A native-speaker reviewer per language, with a back-translation summary for brand approvers"],
          ["Approvals", "Clear turnaround per language so one market doesn't hold up the rest"],
          ["Consistency", "Fixed product facts, claims and disclosure across all languages"],
          ["Reporting", "Results by language and market, compared fairly"],
        ],
      },
      { type: "heading", text: "Logistics and approvals", id: "logistics" },
      {
        type: "list",
        items: [
          "Ship product early; delivery times vary widely between metros and smaller towns.",
          "Plan approvers who can read each language, or a trusted reviewer per language.",
          "Stagger go-lives if stock, service capacity or customer support is limited in some markets.",
          "Use regional festival dates; Onam, Pongal, Durga Puja, Bihu, Gudi Padwa and Baisakhi fall on different days and matter differently by region.",
          "Track everything in one master tracker with a market column.",
        ],
      },
      {
        type: "paragraph",
        text: "If the national layer is mainly about reach, the reach-planning levers are covered in influencer marketing for brand awareness.",
        links: [
          { text: "influencer marketing for brand awareness", href: "/blog/influencer-marketing-brand-awareness" },
        ],
      },
      { type: "heading", text: "Budget across markets", id: "budget" },
      {
        type: "paragraph",
        text: "Allocate by market priority, not evenly. Regional creators may offer strong local trust for their fee, but each market adds coordination work. Reserve budget for translation, review and shipping. Allocation methods are in how to allocate your influencer marketing budget.",
        links: [{ text: "how to allocate your influencer marketing budget", href: "/blog/influencer-budget-allocation" }],
      },
      {
        type: "paragraph",
        text: "Deciding which smaller cities to add, and how audiences differ beyond metros, is covered in influencer marketing in tier 2 and tier 3 cities.",
        links: [
          { text: "influencer marketing in tier 2 and tier 3 cities", href: "/blog/influencer-marketing-tier-2-tier-3-cities" },
        ],
      },
      { type: "heading", text: "Measure by market", id: "measurement" },
      {
        type: "table",
        headers: ["Signal", "How to split by market"],
        rows: [
          ["Sales or orders", "Pin code or city of orders during and after the campaign"],
          ["Codes and links", "Separate codes or UTM parameters per market or creator"],
          ["Search interest", "Region-level branded search trends"],
          ["Leads and store visits", "City field on forms; store-level footfall where tracked"],
          ["Content performance", "Creator-level reach and engagement by language"],
        ],
      },
      {
        type: "paragraph",
        text: "Measurement methods are covered in how to measure influencer marketing ROI for Indian brands. Kudozz runs multi-city and regional creator campaigns; its campaign strategy service starts with the market and language plan.",
        links: [
          { text: "how to measure influencer marketing ROI for Indian brands", href: "/blog/measuring-influencer-campaign-roi" },
          { text: "campaign strategy service", href: "/services/campaign-strategy" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Translating one Hindi campaign into other languages instead of localizing.",
          "Choosing markets without checking distribution or delivery.",
          "Creators based in a city but with national audiences, booked for local reach.",
          "Approvers who can't read the content they're approving.",
          "Measuring only national totals, hiding which markets worked.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pan-India campaigns work as one idea in many voices: a national layer for reach where needed, regional creators for trust, markets chosen from where you can sell, briefs localized by native speakers, logistics planned per region, and results measured market by market so the next campaign puts money where it worked.",
      },
    ],
    faqs: [
      {
        question: "How do you run an influencer campaign across multiple Indian cities?",
        answer:
          "Choose markets from distribution and customer data, source regional creators per city and language, localize one core brief with native-speaker review, plan shipping and approvals per region, stagger go-lives if needed, and measure each market separately.",
      },
      {
        question: "Should a pan-India campaign use national or regional influencers?",
        answer:
          "Often both: national Hindi and English creators for reach, and regional-language creators for local trust in priority markets. The mix depends on the objective and where you sell.",
      },
      {
        question: "How do I find regional influencers in India?",
        answer:
          "Search in the local language and script, look for city-specific creators, check audience location and language data, ask local teams which creators customers mention, and build a longlist per market.",
      },
      {
        question: "How do you manage influencers across multiple languages?",
        answer:
          "Use one master brief with localized notes, let native creators make original content, have a native-speaker reviewer per language with summaries for approvers, keep product facts and disclosure fixed, and report by language and market.",
      },
    ],
  },
];
