import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, CREATOR_FACTS_REVIEWED, SOURCES } from "@/content/creator-resources/shared";

/** Brand deal lifecycle and campaign management: deals guide, proposals, briefs, revisions, payment terms, creator collabs. */
export const manageCampaignPosts: BlogPost[] = [
  {
    slug: "creator-brand-deals",
    category: "Creator Resources",
    title: "Creator Brand Deals: Complete Guide to Getting, Managing and Growing Brand Partnerships",
    seoTitle: "Creator Brand Deals: How to Get, Manage and Grow Them",
    excerpt:
      "The full lifecycle of a creator brand deal, from the first enquiry to the repeat booking, with what happens at each stage and a guide for every step.",
    metaDescription:
      "A complete guide to creator brand deals: types of deals, how creators get them, inbound enquiries, briefs, proposals, pricing, negotiation, contracts, production, approval, publishing, reporting, payment and repeat partnerships.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["creator brand deals", "brand partnerships", "sponsorship", "brand deal process", "influencer brand deals India"],
    related: ["creator-business-kit", "creator-workflow", "first-brand-collaboration-india"],
    body: [
      {
        type: "paragraph",
        text: "A brand deal is more than a sponsored post. It's a small project with a client, a scope, approvals, a deadline, an invoice and, if it goes well, a next time. Creators who treat it that way tend to get rebooked. This guide walks through the whole lifecycle and links to a deeper guide for each stage.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator brand deal is a paid or compensated agreement in which a creator produces content or other work for a brand. The lifecycle runs: get brand-ready, attract or pitch for deals, receive and qualify an enquiry, read the brief, send a proposal, agree pricing and terms, sign a contract, produce the content, get approval, publish with disclosure, report results, invoice and get paid, then turn it into a repeat partnership. Each stage has its own risks, and most problems come from skipping one.",
      },
      { type: "heading", text: "Types of brand deals", id: "types" },
      {
        type: "table",
        headers: ["Type", "What you give", "What you get", "Watch for"],
        rows: [
          ["Paid sponsorship", "Content on your channels, often with usage rights", "Fee (plus product)", "Scope creep, usage and exclusivity"],
          ["Product gifting", "Optional or light content", "Product or service", "Paid-level demands for a gift; disclosure still required"],
          ["UGC", "Content for the brand's own channels or ads", "Fee for production and usage", "Usage duration, whitelisting, raw footage"],
          ["Affiliate", "Recommendations with links or codes", "Commission on sales", "Conversion risk sits with you; track results"],
          ["Hybrid", "Sponsored content plus affiliate link", "Fee plus commission", "Clear split between fixed and variable pay"],
          ["Long-term ambassador", "Recurring content and appearances", "Retainer, often with exclusivity", "Exclusivity scope, renewal and exit terms"],
          ["Event or appearance", "Attendance, live content, hosting", "Fee, travel", "Travel costs, timings, content obligations"],
        ],
      },
      {
        type: "image",
        src: "/blog/creator-resources/brand-deal-lifecycle.svg",
        alt: "Creator brand deal lifecycle in twelve stages: get ready, find or receive, qualify, brief, proposal, negotiate, contract, produce, approve, publish, report, get paid, with an arrow back to repeat partnership",
        caption: "Every stage has a guide in Creator Resources. Most payment and rights disputes start in the early stages.",
        width: 1200,
        height: 675,
      },
      { type: "heading", text: "Stage 1: Get brand-ready", id: "brand-ready" },
      {
        type: "paragraph",
        text: "Before any brand calls, have a clear creator brand, a media kit, a portfolio and a rate card. These make you easy to shortlist. See how to build a creator brand, creator media kit, creator portfolio and influencer rate card.",
        links: [
          { text: "how to build a creator brand", href: "/blog/how-to-build-a-creator-brand" },
          { text: "creator media kit", href: "/blog/creator-media-kit" },
          { text: "creator portfolio", href: "/blog/creator-portfolio" },
          { text: "influencer rate card", href: "/blog/influencer-rate-card-india" },
        ],
      },
      { type: "heading", text: "Stage 2: How creators get deals", id: "how-creators-get-deals" },
      {
        type: "list",
        items: [
          "Outbound pitching to brands that fit your audience.",
          "Inbound enquiries from brands and agencies that find your content.",
          "Platform marketplaces such as Instagram's creator marketplace and YouTube Creator Partnerships (formerly BrandConnect), where eligible creators can be discovered by brands.",
          "Agencies and creator networks that match creators to client campaigns.",
          "Referrals from brands and creators you've worked with.",
        ],
      },
      {
        type: "paragraph",
        text: "YouTube Creator Partnerships is available to eligible creators in India who are in the YouTube Partner Program, at least 18, and without active Community Guidelines strikes. It offers a media kit, inquiry management and rate preferences inside YouTube Studio; check YouTube's help page for current requirements. For outbound, see how to pitch brands as a creator and how to find brands to collaborate with.",
        links: [
          { text: "YouTube's help page", href: SOURCES.youtubeCreatorPartnerships },
          { text: "how to pitch brands as a creator", href: "/blog/how-to-pitch-brands-as-a-creator" },
          { text: "how to find brands to collaborate with", href: "/blog/how-to-find-brands-to-collaborate-with" },
        ],
      },
      { type: "heading", text: "Stage 3: Handling inbound enquiries", id: "inbound" },
      {
        type: "list",
        items: [
          "Verify the sender: official domain, real brand, real person. Fake offers are common. See how to spot fake brand collaboration offers.",
          "Reply within one or two working days, even if only to say you'll send details.",
          "Ask for the brief, deliverables, timeline, usage and budget range before quoting.",
          "Log it in your tracker so nothing slips.",
        ],
      },
      {
        type: "paragraph",
        text: "Scam patterns and a verification checklist are in how to spot fake brand collaboration offers.",
        links: [{ text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" }],
      },
      { type: "heading", text: "Stage 4: Read the brief", id: "brief" },
      {
        type: "paragraph",
        text: "The brief tells you the objective, audience, key messages, mandatory and prohibited claims, deliverables, deadlines, approvals and disclosure. Missing details become disputes later. Use the creator brand brief guide and its question checklist.",
        links: [{ text: "creator brand brief guide", href: "/blog/creator-brand-brief" }],
      },
      { type: "heading", text: "Stage 5: Send a proposal", id: "proposal" },
      {
        type: "paragraph",
        text: "Respond with your creative idea, the exact deliverables, timeline, fee, usage and what's excluded. See how to create a creator campaign proposal. For proactive pitches to brands without a brief, use a creator pitch deck instead.",
        links: [
          { text: "how to create a creator campaign proposal", href: "/blog/creator-campaign-proposal" },
          { text: "creator pitch deck", href: "/blog/creator-pitch-deck" },
        ],
      },
      { type: "heading", text: "Stage 6: Price and negotiate", id: "price-negotiate" },
      {
        type: "paragraph",
        text: "Price from average views, audience fit, production, and separately priced rights and exclusivity. When budgets are tight, adjust scope rather than just cutting your rate. See how much creators should charge and how to negotiate brand deals as a creator.",
        links: [
          { text: "how much creators should charge", href: "/blog/how-much-should-creators-charge-india" },
          { text: "how to negotiate brand deals as a creator", href: "/blog/how-to-negotiate-brand-deals-as-a-creator" },
        ],
      },
      { type: "heading", text: "Stage 7: Contract and rights", id: "contract" },
      {
        type: "paragraph",
        text: "Get deliverables, payment terms, revisions, cancellation, usage, exclusivity and disclosure in writing. The key guides: influencer contract guide for creators, creator payment terms, creator usage rights, creator exclusivity, creator content licensing and creator whitelisting.",
        links: [
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "creator payment terms", href: "/blog/creator-payment-terms" },
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "creator exclusivity", href: "/blog/creator-exclusivity" },
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
          { text: "creator whitelisting", href: "/blog/creator-whitelisting" },
        ],
      },
      { type: "heading", text: "Stage 8: Produce the content", id: "produce" },
      {
        type: "list",
        items: [
          "Share a script or outline for approval before shooting anything complex.",
          "Shoot extra takes and a backup version of key lines.",
          "Check every product claim against the brief and the brand's substantiation.",
          "Build in disclosure from the start: on-screen label, caption label, platform tool.",
        ],
      },
      { type: "heading", text: "Stage 9: Approval and revisions", id: "approval" },
      {
        type: "paragraph",
        text: "Submit drafts on time, with a clear note on what feedback you need and by when. Keep revisions within the agreed rounds. See how to handle brand revisions for professional responses to common situations.",
        links: [{ text: "how to handle brand revisions", href: "/blog/creator-brand-revisions" }],
      },
      { type: "heading", text: "Stage 10: Publish", id: "publish" },
      {
        type: "list",
        items: [
          "Post in the agreed window with the approved caption, tags and links.",
          "Use Instagram's paid partnership label or YouTube's paid promotion setting, plus a clear label such as \"Ad\" as ASCI guidelines require.",
          "Check links and codes work immediately after posting.",
          "Send the live links to the brand the same day.",
        ],
      },
      { type: "heading", text: "Stage 11: Report results", id: "report" },
      {
        type: "paragraph",
        text: "Share native-insights screenshots and a short summary on the agreed date, compared with your own averages. See creator analytics for brand deals and creator case studies for turning results into proof for future deals.",
        links: [
          { text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" },
          { text: "creator case studies", href: "/blog/creator-case-study" },
        ],
      },
      { type: "heading", text: "Stage 12: Invoice and get paid", id: "payment" },
      {
        type: "paragraph",
        text: "Invoice as soon as the contract allows, to the right entity and with any PO number. Understand whether TDS will be deducted and whether you need to charge GST. See how to invoice brands as a creator, TDS for creators and GST for creators.",
        links: [
          { text: "how to invoice brands as a creator", href: "/blog/how-to-invoice-brands-as-a-creator-india" },
          { text: "TDS for creators", href: "/blog/tds-for-influencers-india" },
          { text: "GST for creators", href: "/blog/gst-for-influencers-india" },
        ],
      },
      { type: "heading", text: "Stage 13: Turn it into a repeat partnership", id: "repeat" },
      {
        type: "list",
        items: [
          "Thank the team and share one insight from the comments they might not see.",
          "Suggest a follow-up idea based on what performed well.",
          "Offer a usage extension if the content is working as an ad.",
          "Propose a longer arrangement once you've delivered two or three times.",
        ],
      },
      {
        type: "paragraph",
        text: "Brands think about the same progression from their side. Our brand-side guide to building long-term influencer partnerships explains what makes them rebook a creator. For squeezing more value from each deal, see how to turn brand content into multiple revenue streams.",
        links: [
          { text: "building long-term influencer partnerships", href: "/blog/influencer-partnerships" },
          { text: "how to turn brand content into multiple revenue streams", href: "/blog/creator-revenue-streams-from-brand-content" },
        ],
      },
      {
        type: "paragraph",
        text: "After a campaign ends, send a report, turn it into a case study and manage the relationship; see creator campaign reporting and creator client management.",
        links: [{ text: "creator campaign reporting", href: "/blog/creator-campaign-reporting" }, { text: "creator client management", href: "/blog/creator-client-management" }],
      },
      { type: "heading", text: "Brand deal lifecycle checklist", id: "checklist" },
      {
        type: "template",
        label: "One line per stage",
        text: "☐ Ready: brand, media kit, portfolio, rate card\n☐ Enquiry verified and logged\n☐ Brief read; questions answered\n☐ Proposal sent with scope, timeline, fee, usage, exclusions\n☐ Terms agreed; contract or confirmed email\n☐ Script approved\n☐ Content produced with disclosure built in\n☐ Draft approved within agreed revision rounds\n☐ Published on time; links checked; live links sent\n☐ Report sent on agreed date\n☐ Invoice sent; payment received; TDS checked\n☐ Follow-up idea or renewal proposed",
      },
      {
        type: "paragraph",
        text: "To run many deals at once without dropping anything, set up the creator workflow and campaign tracker.",
        links: [{ text: "creator workflow and campaign tracker", href: "/blog/creator-workflow" }],
      },
      {
        type: "paragraph",
        text: "Stage 13 in depth: creator partnership strategy explains how to turn one deal into a long-term relationship, and creator retainer deals covers structuring recurring work.",
        links: [
          { text: "creator partnership strategy", href: "/blog/creator-brand-partnerships" },
          { text: "creator retainer deals", href: "/blog/creator-retainer-deals" },
        ],
      },
      {
        type: "paragraph",
        text: "For Stage 3, how to manage brand collaboration leads covers qualifying and replying to inbound enquiries, and creator brand fit has a scorecard for deciding whether to proceed.",
        links: [
          { text: "how to manage brand collaboration leads", href: "/blog/manage-brand-collaboration-leads" },
          { text: "creator brand fit", href: "/blog/creator-brand-fit" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a creator brand deal?",
        answer:
          "A paid or compensated agreement where a creator produces content or other work for a brand, such as sponsored posts, UGC, affiliate promotion, ambassador work or event appearances.",
      },
      {
        question: "How do creators get brand deals?",
        answer:
          "Through outbound pitching, inbound enquiries, platform marketplaces such as Instagram's creator marketplace and YouTube Creator Partnerships, agencies and creator networks, and referrals from past partners.",
      },
      {
        question: "What are the stages of a brand deal?",
        answer:
          "Getting brand-ready, finding or receiving the deal, qualifying it, reading the brief, proposing, pricing and negotiating, contracting, producing, approval, publishing, reporting, invoicing and payment, and turning it into a repeat partnership.",
      },
      {
        question: "Is YouTube BrandConnect still available?",
        answer:
          "YouTube has brought BrandConnect into YouTube Creator Partnerships, which is available to eligible creators in India who are in the YouTube Partner Program. Check YouTube's help centre for current eligibility.",
      },
    ],
  },
  {
    slug: "creator-campaign-proposal",
    category: "Creator Resources",
    title: "How to Create a Creator Campaign Proposal for Brands",
    seoTitle: "Creator Campaign Proposal: How to Write One for Brands",
    excerpt:
      "When a brand sends a brief and asks \"what would you do?\", a clear proposal wins the deal and prevents disputes later. Here's the structure, with assumptions and exclusions most creators forget.",
    metaDescription:
      "How to create a creator campaign proposal for brands: understanding the brief, objective, creative idea, deliverables, timeline, pricing, usage rights, reporting, assumptions and exclusions, with an adaptable proposal structure.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "10 min read",
    tags: ["creator campaign proposal", "influencer proposal template", "sponsorship proposal", "brand proposal", "scope of work", "creator proposal", "consulting proposal template"],
    related: ["creator-brand-brief", "creator-pitch-deck", "creator-deliverables"],
    body: [
      {
        type: "paragraph",
        text: "A proposal is your answer to a brief. Done well, it does three jobs at once: it sells your idea, it sets the price, and it quietly defines what's in and out of scope so that nothing is assumed later.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator campaign proposal is a short document responding to a brand's brief. It restates the objective, proposes a creative idea, lists exact deliverables and a timeline, gives the fee with usage rights and add-ons itemised, explains how results will be reported, and states assumptions and exclusions. Keep it to two or three pages, follow the brand's brief order where possible, and send it within the brand's deadline.",
      },
      { type: "heading", text: "Proposal vs pitch deck", id: "proposal-vs-pitch-deck" },
      {
        type: "paragraph",
        text: "A pitch deck is proactive: you approach a brand with ideas. A proposal is reactive: the brand has a brief, a budget and a timeline, and wants your plan and price. Proposals should be more precise about scope and money. See the creator pitch deck guide for the proactive version.",
        links: [{ text: "creator pitch deck guide", href: "/blog/creator-pitch-deck" }],
      },
      { type: "heading", text: "Before you write: understand the brief", id: "understand-brief" },
      {
        type: "paragraph",
        text: "Read the brief twice and list anything unclear: usage, exclusivity, approvals, posting dates, mandatory claims. Ask before writing. The creator brand brief guide has a full question checklist.",
        links: [{ text: "creator brand brief guide", href: "/blog/creator-brand-brief" }],
      },
      { type: "heading", text: "The proposal structure", id: "structure" },
      {
        type: "image",
        src: "/blog/creator-resources/proposal-structure.svg",
        alt: "Creator campaign proposal structure in ten parts: objective, idea, deliverables, timeline, fee, usage and add-ons, reporting, assumptions, exclusions and payment terms",
        caption: "Assumptions and exclusions are the parts most creators skip, and the ones that prevent most disputes.",
        width: 1200,
        height: 675,
      },
      { type: "subheading", text: "1. Objective (in your words)" },
      {
        type: "paragraph",
        text: "One or two sentences restating what the brand wants: \"Introduce the new gel sunscreen to first-time buyers aged 18 to 27 and drive traffic to the Nykaa listing during launch week.\" This proves you read the brief and gives you something to measure against.",
      },
      { type: "subheading", text: "2. Creative idea" },
      {
        type: "paragraph",
        text: "The concept, the hook, how the product appears, and why it suits your audience. Include a short script outline or storyboard for the main deliverable.",
      },
      { type: "subheading", text: "3. Deliverables" },
      {
        type: "paragraph",
        text: "Exact formats, quantities, lengths and platforms. See creator deliverables for how to define each one.",
        links: [{ text: "creator deliverables", href: "/blog/creator-deliverables" }],
      },
      { type: "subheading", text: "4. Timeline" },
      {
        type: "paragraph",
        text: "Dates for product receipt, script, draft, feedback, posting and reporting. Make every date depend on the one before it.",
      },
      { type: "subheading", text: "5. Pricing" },
      {
        type: "paragraph",
        text: "A line per deliverable, then add-ons, then total, stating whether taxes are extra. If the brand gave a budget, show what fits within it and what would cost more. See how much creators should charge.",
        links: [{ text: "how much creators should charge", href: "/blog/how-much-should-creators-charge-india" }],
      },
      { type: "subheading", text: "6. Usage rights and add-ons" },
      {
        type: "paragraph",
        text: "Organic reposting period, paid usage (media, duration, territory), whitelisting, raw footage and exclusivity, each priced. See creator usage rights and creator whitelisting.",
        links: [
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "creator whitelisting", href: "/blog/creator-whitelisting" },
        ],
      },
      { type: "subheading", text: "7. Reporting" },
      {
        type: "paragraph",
        text: "Which metrics you'll share, from which source, and when. Promise only what your platform actually reports.",
      },
      { type: "subheading", text: "8. Assumptions" },
      {
        type: "paragraph",
        text: "What your price and timeline depend on. For example: product arrives by a date; one round of script feedback and one round of draft feedback; feedback within two working days; no location fees; no additional talent.",
      },
      { type: "subheading", text: "9. Exclusions" },
      {
        type: "paragraph",
        text: "What isn't included unless added: paid usage, whitelisting, raw footage, extra revision rounds, exclusivity, travel, reshoots due to brief changes, guaranteed views or sales.",
      },
      { type: "heading", text: "A proposal template you can adapt", id: "template" },
      {
        type: "template",
        label: "Creator campaign proposal (illustrative content)",
        text: "PROPOSAL: [Brand] × [@handle] — [Campaign name]\nPrepared for: [Name, role] · Date: [date] · Valid for: 14 days\n\n1. OBJECTIVE\n[One to two sentences in your words]\n\n2. IDEA\n\"[Working title]\" — [2–3 sentence concept]\nHook: [first 3 seconds]\nProduct moment: [where and how it appears]\n\n3. DELIVERABLES\n• 1 Instagram Reel, 30–45 sec, Collab post with @brand, paid partnership label\n• 1 Story set, 4 frames, link sticker, posted same day\n\n4. TIMELINE\nProduct by [date] → script [date] → draft [date] → feedback within 2 working days → post [date window] → report [date]\n\n5. FEE (INR, taxes extra as applicable)\nReel ................................ ₹____\nStory set ........................... ₹____\nIncluded: 90 days organic reposting with credit\nTotal ............................... ₹____\n\n6. OPTIONAL ADD-ONS\nPaid usage, Meta ads, India, 60 days ....... ₹____\nWhitelisting / partnership ads, 60 days .... ₹____\nRaw footage ................................ ₹____\n\n7. REPORTING\nNative-insights screenshots 7 days after posting: views, reach, saves, shares, comments, link taps\n\n8. ASSUMPTIONS\nOne script round, one draft round; feedback within 2 working days; no travel or extra talent\n\n9. EXCLUSIONS\nPaid usage and whitelisting unless added; exclusivity; guaranteed views or sales; reshoots from brief changes\n\nPAYMENT: [__]% on confirmation, balance within [__] days of posting",
      },
      { type: "heading", text: "Tips that improve acceptance", id: "tips" },
      {
        type: "list",
        items: [
          "Follow the brief's structure and terminology so the brand can compare proposals easily.",
          "Offer two options when the budget is tight: a core package and an extended one.",
          "Keep one strong idea rather than five weak ones.",
          "Add a validity period so an old quote can't be accepted months later.",
          "Put payment terms in the proposal, not only in the invoice. See creator payment terms.",
        ],
      },
      {
        type: "paragraph",
        text: "Payment terms are covered in detail in creator payment terms. Brands write the brief your proposal answers; our brand-side guide on how to create an influencer campaign brief shows how they structure it.",
        links: [
          { text: "creator payment terms", href: "/blog/creator-payment-terms" },
          { text: "how to create an influencer campaign brief", href: "/blog/influencer-campaign-brief" },
        ],
      },
      { type: "heading", text: "Proposals for consulting and coaching clients", id: "service-proposals" },
      {
        type: "paragraph",
        text: "If you sell services as well as brand content, the same principles apply to client proposals: restate the client's goal, propose the approach, list deliverables and timeline, show the price with options, and state what's included and excluded.",
      },
      {
        type: "template",
        label: "Service proposal outline",
        text: "1. Your goal (in the client's words from the discovery call)\n2. Recommended approach\n3. Deliverables and timeline\n4. Investment: recommended option + one smaller option\n5. What I need from you\n6. What's not included\n7. Next step: sign and deposit by [date]",
      },
      {
        type: "paragraph",
        text: "The call before the proposal is covered in creator discovery call, and what happens after a yes in creator client onboarding.",
        links: [
          { text: "creator discovery call", href: "/blog/creator-discovery-call" },
          { text: "creator client onboarding", href: "/blog/creator-client-onboarding" },
        ],
      },
    ],
    faqs: [
      {
        question: "What should a creator campaign proposal include?",
        answer:
          "The objective in your words, a creative idea, exact deliverables, a timeline, itemised pricing, usage rights and add-ons, reporting plans, assumptions and exclusions, and payment terms.",
      },
      {
        question: "How long should a creator proposal be?",
        answer: "Two or three pages is usually enough. Brands compare several proposals, so clarity and structure matter more than length.",
      },
      {
        question: "What's the difference between a proposal and a pitch deck?",
        answer:
          "A pitch deck is proactive and brings ideas to a brand without a brief. A proposal responds to a brand's brief with a precise plan, scope and price.",
      },
      {
        question: "Why include assumptions and exclusions?",
        answer:
          "They record what your price depends on and what isn't included, which prevents misunderstandings about revisions, usage, reshoots or guaranteed results later.",
      },
    ],
  },
  {
    slug: "creator-brand-brief",
    category: "Creator Resources",
    title: "Creator Collaboration Brief: How to Understand and Respond to a Brand Brief",
    seoTitle: "How to Read and Respond to a Brand Brief as a Creator",
    excerpt:
      "What each part of a brand brief means for you, which details are often missing, and the questions to ask before you accept a collaboration.",
    metaDescription:
      "How creators should read a brand brief: objective, audience, key message, mandatory talking points, prohibited claims, deliverables, deadlines, approvals, hashtags, tags, links, disclosure and usage rights, plus a checklist.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "9 min read",
    tags: ["brand brief", "influencer brief", "creator brief", "campaign brief questions", "collaboration brief"],
    related: ["creator-campaign-proposal", "creator-deliverables", "creator-brand-revisions"],
    body: [
      {
        type: "paragraph",
        text: "A brief is the brand's description of what it wants. Good briefs make great content easier. Vague briefs lead to rounds of revisions, missed expectations and awkward conversations about money. Reading the brief properly, and asking the right questions early, is one of the most valuable professional habits a creator can build.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A brand brief tells a creator the campaign objective, target audience, key message, mandatory and prohibited claims, deliverables, deadlines, approval process, required tags, hashtags and links, disclosure requirements and usage rights. Before accepting, check each of these is clear and in writing. Anything missing, especially usage, approvals, revision limits and posting dates, should be asked about before you quote or sign.",
      },
      { type: "heading", text: "The parts of a brief, and what they mean for you", id: "parts" },
      {
        type: "table",
        headers: ["Brief section", "What it tells you", "What to check"],
        rows: [
          ["Campaign objective", "Awareness, launch, consideration, sales, content for ads", "Is success defined? How will they judge your content?"],
          ["Target audience", "Who the brand wants to reach", "Does it match your audience's age, cities and language?"],
          ["Key message", "The one thing viewers should remember", "Can you say it naturally in your voice?"],
          ["Mandatory talking points", "Features, offers or phrases you must include", "How many? Too many turns content into an ad script"],
          ["Prohibited claims", "What you must not say", "Are there health, finance or comparative claims to avoid?"],
          ["Deliverables", "Formats, quantities, platforms", "Exact lengths, frames, slides, live duration"],
          ["Deadlines", "Draft and posting dates", "Do they start from product receipt?"],
          ["Approval process", "Who approves, how, how fast", "Number of rounds; feedback turnaround"],
          ["Hashtags, tags and links", "Campaign hashtag, handles, URLs, codes", "How long must links stay live?"],
          ["Disclosure", "How the partnership will be labelled", "Platform tool plus a clear label such as \"Ad\""],
          ["Usage rights", "How the brand will use the content", "Organic only? Paid? Duration? Whitelisting?"],
          ["Do's and don'ts", "Brand tone, competitors, visuals to avoid", "Any conflict with your existing partners?"],
        ],
      },
      { type: "heading", text: "Reading between the lines", id: "between-the-lines" },
      {
        type: "list",
        items: [
          "\"Authentic, in your own style\" plus a full script usually means they want your style but their words. Ask how much flexibility you have.",
          "\"Content may be used across brand channels\" is a usage clause. Ask whether that includes paid ads, and for how long.",
          "\"Quick turnaround\" means a rush fee may be justified.",
          "\"Performance-focused\" means they may ask for link clicks or sales data. Agree what you can realistically report.",
          "No mention of revisions doesn't mean one round. Ask.",
        ],
      },
      { type: "heading", text: "Claims and compliance", id: "claims" },
      {
        type: "paragraph",
        text: "You're responsible for what you say on camera, even if the brand wrote it. ASCI guidelines expect influencers to do reasonable due diligence on claims, and specialised advice in areas like health, nutrition and finance comes with extra expectations about qualifications. If a brief asks you to say a product \"cures\", \"guarantees\" or is \"the best\", ask for substantiation or propose softer, accurate wording based on your experience.",
      },
      { type: "heading", text: "Questions to ask before accepting", id: "questions" },
      {
        type: "template",
        label: "Brand brief checklist (copy and use)",
        text: "OBJECTIVE & AUDIENCE\n☐ What does success look like for this campaign?\n☐ Who is the target customer (age, cities, language)?\n\nCONTENT\n☐ What's the one key message?\n☐ Which talking points are mandatory, and which are optional?\n☐ Which claims are prohibited? Can you share substantiation for the claims you want?\n☐ How much creative freedom do I have on format and script?\n\nDELIVERABLES & TIMING\n☐ Exact deliverables, lengths and platforms?\n☐ When will the product and final brief arrive?\n☐ Draft date, posting window, and how long content stays live?\n\nAPPROVALS\n☐ Who approves, and in what format (script, draft, both)?\n☐ How many revision rounds are included?\n☐ How quickly will feedback come?\n\nTAGS, LINKS, DISCLOSURE\n☐ Handles, hashtags, links and codes to include?\n☐ Paid partnership label / paid promotion setting to be used?\n\nRIGHTS & MONEY\n☐ Organic reposting only, or paid usage? Duration and territory?\n☐ Whitelisting or partnership ads?\n☐ Any exclusivity?\n☐ Budget, payment terms and who pays (brand or agency)?",
      },
      { type: "heading", text: "How to respond to a brief", id: "respond" },
      {
        type: "list",
        items: [
          "Acknowledge within one or two working days.",
          "Send your questions in one organised email rather than a string of messages.",
          "Once answered, send a proposal that follows the brief's structure. See how to create a creator campaign proposal.",
          "If the brief doesn't fit your audience or values, decline politely and early.",
        ],
      },
      {
        type: "paragraph",
        text: "The proposal format is in how to create a creator campaign proposal, and deliverable definitions are in creator deliverables.",
        links: [
          { text: "how to create a creator campaign proposal", href: "/blog/creator-campaign-proposal" },
          { text: "creator deliverables", href: "/blog/creator-deliverables" },
        ],
      },
      {
        type: "paragraph",
        text: "Curious how brands are taught to write briefs? See how to create an effective influencer campaign brief and how to brief influencers, both written for brand teams.",
        links: [
          { text: "how to create an effective influencer campaign brief", href: "/blog/influencer-campaign-brief" },
          { text: "how to brief influencers", href: "/blog/how-to-brief-influencers" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a brand brief for creators?",
        answer:
          "A document from a brand describing the campaign objective, audience, key message, required and prohibited claims, deliverables, deadlines, approvals, tags, disclosure and usage rights.",
      },
      {
        question: "What should I ask before accepting a brand brief?",
        answer:
          "Clarify success measures, mandatory and prohibited claims, exact deliverables and dates, approval rounds and turnaround, usage rights and duration, exclusivity, and payment terms.",
      },
      {
        question: "Am I responsible for claims the brand asks me to make?",
        answer:
          "You're responsible for what you say publicly. ASCI expects influencers to do reasonable due diligence on claims, so ask for substantiation and avoid claims you can't support.",
      },
    ],
  },
  {
    slug: "creator-brand-revisions",
    category: "Creator Resources",
    title: "Brand Content Approval and Revisions: How Creators Keep Creative Control",
    seoTitle: "Brand Content Approval and Revisions: Keep Creative Control",
    excerpt:
      "How brand review works stage by stage, what to send for approval, how to keep an approval record, and how to handle normal feedback, endless changes, creative disagreements and scope creep professionally.",
    metaDescription:
      "Brand content approval and revisions for creators: approval stages, submission packages, approval records, normal vs excessive revisions, creative disagreements, compliance fixes, scope creep and professional replies.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    updatedAt: "2026-09-29",
    readingTime: "12 min read",
    tags: ["brand approval", "creator approval process", "creator revision policy", "brand revisions", "creative control", "scope creep"],
    related: ["creator-brand-brief", "creator-deliverables", "how-to-negotiate-brand-deals-as-a-creator"],
    body: [
      {
        type: "paragraph",
        text: "Feedback is part of brand work. Most revision requests are reasonable, and many make the content better. Problems start when revisions have no limit, arrive late, contradict the brief, or slowly turn your content into something your audience won't recognise.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Handle brand revisions by agreeing limits upfront (for example one script round and one draft round), getting script approval before shooting, and separating types of feedback: factual and compliance fixes should always be made; reasonable changes within the brief are normal; changes that contradict the approved brief or add new deliverables are scope changes that can be quoted. Reply calmly, in writing, with options rather than refusals.",
      },
      { type: "heading", text: "The approval process, stage by stage", id: "approval-stages" },
      {
        type: "table",
        headers: ["Stage", "What the brand reviews", "What to lock before moving on"],
        rows: [
          ["Concept", "The idea and angle", "Written approval of the concept"],
          ["Script or outline", "Key messages, claims, structure", "Approved script (with disclosure lines)"],
          ["Draft", "The edited video or images", "Consolidated feedback within the agreed round"],
          ["Final", "Last check before posting", "Written final approval, caption and tags"],
          ["Post-live", "Links, labels, tags", "Confirmation that it's live as agreed"],
        ],
      },
      {
        type: "paragraph",
        text: "Approving concept and script before filming prevents most expensive changes. Many creators treat script approval as the point after which a change of message becomes a scope change.",
      },
      { type: "heading", text: "What to send for approval", id: "submission" },
      {
        type: "template",
        label: "Approval submission package",
        text: "Subject: [Campaign] — draft v1 for approval (feedback by [date])\n\n• Draft link (view-only, not downloadable if usage isn't agreed)\n• Caption, hashtags, tags and disclosure label as they'll appear\n• Posting window\n• What feedback I need: accuracy of product details, mandatory points covered\n• Revision round: 1 of 2\n\nPlease send consolidated feedback in one message.",
      },
      { type: "heading", text: "Keep an approval record", id: "approval-record" },
      {
        type: "list",
        items: [
          "Save each version with a version number (v1, v2, final).",
          "Keep written approvals (email or message) with dates.",
          "Log each revision round against the agreed limit.",
          "Note who approved; approvals from someone without authority can cause disputes.",
          "Don't treat silence as approval unless your agreement says so; send a reminder instead.",
        ],
      },
      {
        type: "paragraph",
        text: "Approvals and revision limits start in the brief and contract; see how to read a brand brief and the influencer contract guide for creators.",
        links: [{ text: "how to read a brand brief", href: "/blog/creator-brand-brief" }, { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" }],
      },
      { type: "heading", text: "Types of revision requests", id: "types" },
      {
        type: "table",
        headers: ["Type", "Example", "How to treat it"],
        rows: [
          ["Factual correction", "Wrong price, wrong product name, outdated offer", "Always fix, quickly, at no charge"],
          ["Compliance fix", "Missing disclosure, unsupported claim, trademark issue", "Always fix; it protects you too"],
          ["Normal revision", "Tighter hook, clearer product shot, trim 5 seconds", "Within included rounds"],
          ["Creative disagreement", "\"Make it more polished\", \"less jokey\"", "Discuss; explain audience reasoning; offer an option"],
          ["Brief change", "New key message after the script was approved", "Scope change; may need a reshoot fee"],
          ["Scope creep", "\"Can you also cut a 15-second version and a carousel?\"", "New deliverable; quote it"],
          ["Excessive revisions", "Round five of small changes from different stakeholders", "Remind of the agreed limit; price further rounds"],
        ],
      },
      { type: "heading", text: "A revision policy you can share with brands", id: "revision-policy" },
      {
        type: "paragraph",
        text: "A short revision policy, shared in your proposal or media kit, sets expectations before any feedback arrives. It's easier to point to a policy than to negotiate limits mid-campaign.",
      },
      {
        type: "template",
        label: "Revision policy (template)",
        text: "\u2022 Script or concept: 1 round of revisions included\n\u2022 Draft video: 1 round of revisions included\n\u2022 Factual, compliance and disclosure corrections: always included\n\u2022 Changes that contradict the approved script or brief: quoted as additional work\n\u2022 Additional rounds: [\u20b9 amount or % of fee] per round\n\u2022 Brand feedback within [2] working days keeps the posting date; later feedback may move it\n\u2022 Consolidated feedback from one contact, please",
      },
      {
        type: "paragraph",
        text: "How you receive feedback matters as much as the policy: acknowledge it, sort it into fixes, reasonable changes and scope changes, reply with a plan and a date, and confirm in writing. Negotiating these limits before signing is covered in how to negotiate creative control.",
        links: [
          { text: "how to negotiate creative control", href: "/blog/negotiate-creative-control-brand-deals" },
        ],
      },
      { type: "heading", text: "Prevent problems before the shoot", id: "prevent" },
      {
        type: "list",
        items: [
          "Put revision limits in the proposal and contract: for example one round on script, one on draft.",
          "Define a revision as changes within the approved concept; a new concept is a new job.",
          "Get the script or outline approved in writing before filming.",
          "Ask for consolidated feedback from one contact, not separate notes from five people.",
          "Agree a feedback turnaround (for example two working days) and what happens to the posting date if it's missed.",
        ],
      },
      { type: "heading", text: "Protecting your creative voice", id: "creative-voice" },
      {
        type: "paragraph",
        text: "Brands hire you because your audience listens to you. Content that sounds like a TV ad usually underperforms, which hurts both of you. When feedback pushes toward a generic ad, explain why with evidence, such as how your most successful sponsored posts were structured, and offer a middle path.",
      },
      { type: "heading", text: "Professional replies you can use", id: "replies" },
      { type: "subheading", text: "Accepting normal feedback" },
      {
        type: "template",
        text: "Thanks for the notes. All clear. I'll tighten the opening, add the close-up of the texture and move the offer to the end. Updated draft by [date].",
      },
      { type: "subheading", text: "Creative disagreement" },
      {
        type: "template",
        text: "I understand wanting it more polished. My audience tends to respond best to the handheld, talk-to-camera style: my last two sponsored Reels in this format averaged [X]x my usual saves. Could we keep that style and I'll make the product shots cleaner and add on-screen text for the key benefits? Happy to share a quick sample of the adjusted opening.",
      },
      { type: "subheading", text: "Brief change after approval" },
      {
        type: "template",
        text: "Thanks for letting me know about the new messaging. Since the script was approved and the video is already shot, switching the key message would need a partial reshoot. I can do that for ₹[X] with a new draft by [date], or add the new message as on-screen text and in the caption within the current scope. Which works better?",
      },
      { type: "subheading", text: "Scope creep" },
      {
        type: "template",
        text: "Glad the Reel is working for you. The 15-second cut-down and carousel weren't part of the original scope, but I'd be happy to add them: ₹[X] for both, delivered by [date]. Let me know and I'll send a short confirmation.",
      },
      { type: "subheading", text: "Beyond the agreed revision rounds" },
      {
        type: "template",
        text: "We've now completed the two revision rounds included in our agreement. I'm happy to make these further changes; additional rounds are ₹[X] each. To keep things quick, could you send all remaining feedback together in one note?",
      },
      { type: "subheading", text: "Late feedback affecting posting" },
      {
        type: "template",
        text: "Just flagging that the draft went over on [date] and we'd agreed feedback within two working days. To keep the [date] posting slot, I'd need approval by [time/date]. If that's difficult, could we move posting to [new date]?",
      },
      { type: "heading", text: "When to stop and escalate", id: "escalate" },
      {
        type: "list",
        items: [
          "Requests to remove disclosure or make claims you can't support: decline and explain.",
          "Contradictory feedback from multiple stakeholders: ask for one consolidated decision.",
          "Repeated rounds with no end in sight: refer to the agreement and propose a final round.",
          "Payment being held until unlimited changes are made: escalate in writing to a senior contact.",
        ],
      },
      {
        type: "paragraph",
        text: "Revision limits start in the proposal and contract. See how to create a creator campaign proposal and the influencer contract guide for creators.",
        links: [
          { text: "how to create a creator campaign proposal", href: "/blog/creator-campaign-proposal" },
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
        ],
      },
    ],
    faqs: [
      {
        question: "How many revisions should a creator allow?",
        answer:
          "There's no universal number, but one round on the script and one on the draft is a common starting point. Agree the limit in writing and price additional rounds.",
      },
      {
        question: "Can a brand ask me to change content after it's approved?",
        answer:
          "They can ask, but changes that contradict an approved script or brief are usually a scope change. Offer options, such as a paid reshoot or a lighter caption change.",
      },
      {
        question: "Should I charge for factual or compliance corrections?",
        answer: "No. Fix wrong details, missing disclosure and unsupported claims quickly at no charge; they protect you as much as the brand.",
      },
      {
        question: "How do I push back on feedback without damaging the relationship?",
        answer:
          "Stay calm and specific, explain your reasoning with evidence from past content, and offer an alternative rather than a flat refusal.",
      },
    ],
  },
  {
    slug: "creator-payment-terms",
    category: "Creator Resources",
    title: "Creator Payment Terms: How to Negotiate Advance Payments and Payment Deadlines",
    seoTitle: "Creator Payment Terms: Advances, Deadlines and Follow-Ups",
    excerpt:
      "Advance, milestone, on-publication or after-campaign: how each payment structure works, what to agree in writing, and how to follow up when payment is late.",
    metaDescription:
      "Creator payment terms explained: advance payments, milestone payments, payment on publication, payment after campaign, deadlines, purchase orders, invoices, late payment and follow-ups, with a payment terms checklist.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "10 min read",
    tags: ["creator payment terms", "advance payment influencer", "influencer payment delay", "purchase order", "invoice follow-up"],
    related: ["how-to-invoice-brands-as-a-creator-india", "influencer-contract-guide-for-creators", "tds-for-influencers-india"],
    body: [
      {
        type: "paragraph",
        text: "A fee is only as good as its payment terms. ₹60,000 paid fifteen days after posting and ₹60,000 paid \"after the campaign\" with no date are very different deals. Payment terms are negotiable, and the best time to negotiate them is before you start work.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator payment terms define when and how you're paid: common structures are an advance on signing, milestone payments, payment on publication, or payment a fixed number of days after invoice. None is universally required. Agree in writing who pays you, the amount and schedule, the due date, invoicing requirements such as purchase orders, how TDS and GST are handled, and what happens if payment is late or the campaign is cancelled.",
      },
      { type: "heading", text: "Common payment structures", id: "structures" },
      {
        type: "table",
        headers: ["Structure", "How it works", "Good for", "Risk for creators"],
        rows: [
          ["Full advance", "100% before work starts", "Small deals, new or unknown brands", "Brands may resist; rare for larger deals"],
          ["Part advance", "e.g. 30–50% on signing, balance later", "New relationships, bigger shoots with upfront costs", "Balance can still be delayed"],
          ["Milestone", "Payments on script approval, draft, posting", "Multi-deliverable or long campaigns", "Needs clear milestone definitions"],
          ["On publication", "Due when content goes live, or X days after", "Standard one-off sponsored posts", "Approval delays push payment back"],
          ["Net days after invoice", "e.g. 15, 30 or 45 days after invoice date", "Brands and agencies with fixed payment cycles", "Long cycles hurt cash flow"],
          ["After campaign end", "Paid when the whole campaign wraps", "Rarely good for creators", "Open-ended; can drag on for months"],
          ["Retainer", "Monthly fee for ongoing work", "Ambassador and always-on partnerships", "Define notice period and what happens to unused work"],
        ],
      },
      { type: "heading", text: "What to agree in writing", id: "in-writing" },
      {
        type: "list",
        items: [
          "Who pays you: the brand, or an agency acting for it.",
          "The fee, currency, and whether taxes are extra.",
          "The schedule: advance percentage, milestones, balance.",
          "The trigger and deadline for each payment: \"within 15 days of posting\", not \"after the campaign.\"",
          "Invoicing requirements: PO number, vendor registration, billing entity, where to send invoices.",
          "TDS treatment, so your net payment isn't a surprise.",
          "What happens if the brand cancels after work starts (kill fee).",
          "What happens if payment is late.",
        ],
      },
      { type: "heading", text: "Purchase orders and vendor onboarding", id: "po-vendor" },
      {
        type: "paragraph",
        text: "Many companies can only pay against a purchase order (PO) and a registered vendor. Ask early: \"Do you need me set up as a vendor, and will there be a PO?\" Onboarding usually needs your PAN, bank details, address proof, and a GST certificate or a declaration that you're not registered. A missing PO is one of the most common reasons creator payments stall.",
      },
      { type: "heading", text: "How to negotiate better terms", id: "negotiate" },
      {
        type: "list",
        items: [
          "Ask for a part advance on first deals with a brand, or where you have upfront costs.",
          "Tie the balance to posting, not to the brand's campaign end date.",
          "Offer a small discount for faster payment if cash flow matters more than the last few rupees.",
          "Put payment terms in your proposal and rate card, so they're agreed before the contract.",
          "For agencies, ask whether they pay you on a fixed date or only after their client pays them.",
        ],
      },
      {
        type: "template",
        label: "Asking for an advance",
        text: "Before we confirm, could we agree 40% on signing and the balance within 15 days of the Reel going live? I'm booking the location and props in advance, and the advance lets me hold your posting slot.",
      },
      {
        type: "template",
        label: "Replacing \"after campaign\" with a date",
        text: "The agreement says payment after campaign completion. Could we make that a fixed date, within 30 days of my posting date, so both our finance teams can plan around it?",
      },
      { type: "heading", text: "When payment is late", id: "late-payment" },
      {
        type: "list",
        items: [
          "On the due date: a friendly reminder with the invoice attached.",
          "7 to 10 days late: follow up, copy the accounts contact, ask what's blocking it (PO, approvals, vendor details).",
          "30 days late: escalate politely to a more senior contact, referring to the agreed terms.",
          "Still unpaid: consider professional advice for significant amounts, and pause new work with that brand or agency.",
        ],
      },
      {
        type: "paragraph",
        text: "Reminder templates are in how to invoice brands as a creator. Remember that TDS may reduce the amount you receive; see TDS for creators before chasing a \"short\" payment.",
        links: [
          { text: "how to invoice brands as a creator", href: "/blog/how-to-invoice-brands-as-a-creator-india" },
          { text: "TDS for creators", href: "/blog/tds-for-influencers-india" },
        ],
      },
      { type: "heading", text: "Payment terms checklist", id: "checklist" },
      {
        type: "template",
        label: "Before you start work",
        text: "☐ Payer confirmed (brand / agency / legal entity)\n☐ Fee and currency; taxes inclusive or extra\n☐ Advance % and due date\n☐ Balance trigger and due date (fixed days, not \"after campaign\")\n☐ PO number / vendor onboarding done\n☐ Invoice address and accounts contact\n☐ TDS treatment confirmed\n☐ Kill fee if cancelled after work starts\n☐ Late-payment follow-up plan\n☐ All of the above in the contract or a confirmed email",
      },
      {
        type: "paragraph",
        text: "Payment terms sit inside the wider agreement; see the influencer contract guide for creators. Brands have their own view of this process in influencer marketing payments.",
        links: [
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "influencer marketing payments", href: "/blog/influencer-marketing-payments" },
        ],
      },
      {
        type: "paragraph",
        text: "If a payment is already overdue, how creators can handle late brand payments sets out a reminder and escalation process; if a brand cancels, see creator cancellation policy.",
        links: [
          { text: "how creators can handle late brand payments", href: "/blog/creators-handle-late-brand-payments" },
          { text: "creator cancellation policy", href: "/blog/creator-cancellation-policy" },
        ],
      },
    ],
    faqs: [
      {
        question: "Should creators ask for advance payment?",
        answer:
          "It's reasonable, especially with new brands, larger projects or upfront production costs. A part advance of 30 to 50% is a common ask, but terms are negotiable and no single structure is required.",
      },
      {
        question: "What are standard payment terms for influencers in India?",
        answer:
          "There's no single standard. Common arrangements include a part advance with the balance on posting, or payment a fixed number of days after invoice. What matters is that the trigger and deadline are clear and in writing.",
      },
      {
        question: "What should I do if a brand hasn't paid?",
        answer:
          "Send a reminder on the due date, follow up with the accounts contact about a week later, then escalate politely to a senior contact with reference to the agreed terms. For significant amounts, get professional advice.",
      },
      {
        question: "Why did I receive less than my invoice amount?",
        answer: "The payer may have deducted TDS. Check your tax statement on the Income Tax portal and ask for the TDS certificate.",
      },
    ],
  },
  {
    slug: "creator-collaborations-with-other-influencers",
    category: "Creator Resources",
    title: "Creator Collaboration With Other Influencers: How to Plan, Price and Manage Joint Campaigns",
    seoTitle: "Creator-to-Creator Collaborations: Plan, Price and Manage",
    excerpt:
      "Collabs with other creators can grow both audiences and win bigger brand deals. Here's how to choose partners, pick formats, split money fairly and put it in writing.",
    metaDescription:
      "How creators can collaborate with other influencers: audience overlap, Instagram Collab posts, YouTube collaborations, podcasts, lives, joint brand campaigns, revenue sharing, pricing, contracts and a planning framework.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "10 min read",
    tags: ["creator collaboration", "influencer collab", "Instagram collab post", "YouTube collaborations", "joint brand campaign"],
    related: ["creator-brand-deals", "how-to-build-an-audience-brands-want", "influencer-contract-guide-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "Creator-to-creator collaborations have always been one of the best ways to reach new audiences. They're also increasingly how bigger brand campaigns are sold: two or three creators pitching a joint concept can offer a brand more reach and a better story than any one of them alone.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creators collaborate to reach each other's audiences, make better content together and win joint brand campaigns. Choose partners with complementary (not identical) audiences and similar values, pick a format such as an Instagram Collab post, a YouTube video with collaborators added, a podcast episode or a joint live, and agree roles, deliverables, credits, usage and money in writing. For paid joint campaigns, decide upfront whether each creator is paid separately by the brand or one creator subcontracts the others.",
      },
      { type: "heading", text: "Why creators collaborate", id: "why" },
      {
        type: "list",
        items: [
          "Audience growth: exposure to a relevant audience that already trusts the other creator.",
          "Better content: different skills, perspectives and formats.",
          "Bigger brand deals: a joint pitch can cover more cities, languages or audience segments.",
          "Credibility: being associated with respected peers.",
          "Community: sharing leads, knowledge and support.",
        ],
      },
      { type: "heading", text: "Choosing the right partner", id: "choosing" },
      {
        type: "table",
        headers: ["Factor", "Good sign", "Caution"],
        rows: [
          ["Audience overlap", "Adjacent audiences (fitness × healthy cooking)", "Near-identical audiences add little reach"],
          ["Size", "Comparable reach, or a clear value exchange", "Very uneven sizes without an agreed trade"],
          ["Values and tone", "Similar standards on disclosure and honesty", "History of misleading content or controversy"],
          ["Reliability", "Delivers on time, communicates well", "Missed deadlines with past collaborators"],
          ["Brand conflicts", "No clashing exclusivity", "Partner is exclusive with a competitor"],
        ],
      },
      { type: "heading", text: "Formats that work", id: "formats" },
      {
        type: "table",
        headers: ["Format", "How it works", "Best for"],
        rows: [
          ["Instagram Collab post or Reel", "One post appears on each collaborator's profile, with shared engagement", "Cross-audience reach on Instagram"],
          ["YouTube collaborations", "Creators can invite other channels as collaborators on a video so each is credited", "Long-form and Shorts with multiple creators"],
          ["Guest appearance", "One creator appears on the other's channel", "Interviews, challenges, tutorials"],
          ["Podcast episode", "Guest or co-host an episode, often also on YouTube", "Deeper conversations, expertise"],
          ["Joint live stream", "Live together on Instagram or YouTube", "Q&As, launches, events"],
          ["Series swap", "Each creates an episode of the other's series", "Recurring formats"],
          ["Joint brand campaign", "Brand hires several creators for a shared concept", "Launches, regional campaigns"],
        ],
      },
      {
        type: "paragraph",
        text: "See Instagram's help on collab posts and YouTube's help on inviting collaborators for current limits and eligibility, which can change.",
        links: [
          { text: "Instagram's help on collab posts", href: SOURCES.instagramCollabPosts },
          { text: "YouTube's help on inviting collaborators", href: SOURCES.youtubeCollaborations },
        ],
      },
      { type: "heading", text: "Joint brand campaigns: two structures", id: "joint-campaigns" },
      {
        type: "table",
        headers: ["", "Each creator contracted by the brand", "Lead creator subcontracts others"],
        rows: [
          ["How it works", "Brand agrees terms and pays each creator separately", "One creator agrees with the brand and pays the others"],
          ["Pros", "Simple for creators; each has direct rights and payment", "One point of contact for the brand; lead creator can package the idea"],
          ["Cons", "More admin for the brand", "Lead creator carries payment risk, tax paperwork and responsibility for others' delivery"],
          ["Paperwork", "Separate agreements", "Brand agreement plus written agreements between creators"],
        ],
      },
      { type: "heading", text: "Pricing and revenue sharing", id: "pricing" },
      {
        type: "paragraph",
        text: "For unpaid audience-swap collabs, the \"price\" is usually equal effort and equal promotion. For paid work, there's no fixed split. Common approaches:",
      },
      {
        type: "list",
        items: [
          "Each creator prices their own deliverables from their own rate card; the brand pays the total.",
          "Split by contribution: who produces, edits, hosts, travels, and whose audience reach is larger.",
          "Equal split for genuinely equal partners and equal work.",
          "Lead creator fee: the creator who found the brand, wrote the concept and manages delivery takes a coordination share.",
        ],
      },
      {
        type: "template",
        label: "Illustrative split (hypothetical numbers)",
        text: "Brand budget: ₹1,50,000 for a joint launch (Collab Reel + 2 Story sets each)\n\nCreator A (lead): concept, script, edit, brand contact, own deliverables\nCreator B: appears in Reel, own Story sets\n\nOption 1 — rate-card based: A ₹90,000 · B ₹60,000\nOption 2 — equal split plus coordination share: 10% coordination to A (₹15,000), remaining ₹1,35,000 split equally → A ₹82,500 · B ₹67,500\n\nWhichever you choose, agree it before pitching.",
      },
      { type: "heading", text: "What to agree in writing", id: "agreement" },
      {
        type: "list",
        items: [
          "Who does what: concept, script, shoot, edit, posting, brand communication.",
          "Deliverables and posting dates for each creator.",
          "Credits: collab tags, mentions, links.",
          "Ownership and usage: who can repost, cut clips, or use footage later.",
          "Money: split, who invoices whom, when each creator is paid, how TDS and GST are handled.",
          "Brand conflicts and exclusivity for each creator.",
          "Disclosure: every creator labels the paid partnership.",
          "What happens if one creator can't deliver.",
        ],
      },
      { type: "heading", text: "A collaboration planning framework", id: "framework" },
      {
        type: "template",
        label: "Collab plan (fill in together)",
        text: "GOAL: audience growth / brand pitch / content series\nPARTNER FIT: audiences, tone, values, conflicts\nFORMAT: Collab Reel · YouTube collab · podcast · live · series swap\nROLES: concept · script · shoot · edit · post · brand contact\nDELIVERABLES & DATES: per creator\nCREDITS: tags, collaborator settings, links\nRIGHTS: who can reuse footage, for how long\nMONEY: split method · who invoices · payment dates · TDS/GST\nDISCLOSURE: labels and platform tools\nREVIEW: what worked, what to repeat",
      },
      {
        type: "paragraph",
        text: "For contracts, see the influencer contract guide for creators. If the joint campaign involves a brand, the creator brand deals guide covers the full lifecycle.",
        links: [
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "creator brand deals guide", href: "/blog/creator-brand-deals" },
        ],
      },
      {
        type: "paragraph",
        text: "For Instagram specifically, including who owns a Collab post and how to measure it, see Instagram Collab posts for creators.",
        links: [{ text: "Instagram Collab posts for creators", href: "/blog/instagram-collab-posts-for-creators" }],
      },
    ],
    faqs: [
      {
        question: "How do creators collaborate with other creators?",
        answer:
          "Through formats like Instagram Collab posts, YouTube videos with collaborators added, guest appearances, podcast episodes, joint lives and series swaps, or by pitching joint campaigns to brands.",
      },
      {
        question: "How should creators split money from a joint brand deal?",
        answer:
          "There's no fixed rule. Common approaches are pricing each creator's deliverables separately, splitting by contribution, splitting equally, or adding a coordination share for the lead creator. Agree it in writing before pitching.",
      },
      {
        question: "Do collab posts with other creators need disclosure?",
        answer: "Only if there's a material connection such as payment or gifts. Joint brand campaigns always need each creator to disclose the paid partnership.",
      },
    ],
  },
];
