import type { BlogPost } from "@/content/blog";

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };

export const discoveryBatchL: BlogPost[] = [
  // #56 influencer-relationship-management (UPGRADE, orig 2026-10-08)
  {
    slug: "influencer-relationship-management",
    category: "Influencer Marketing",
    title: "How to Build a Long-Term Relationship With Influencers",
    seoTitle: "Influencer Relationship Management for Brands | Kudozz",
    excerpt:
      "Most creator relationships don't end in a dispute. They end in silence after the payment clears. Here's how brands run influencer relationship management so good creators keep wanting to work with them.",
    metaDescription:
      "Influencer relationship management for brands: a fair first collaboration, communication rules, a creator record, two-way feedback and who to rebook.",
    author: AUTHOR,
    publishedAt: "2026-10-08",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Influencer Relationship Management", "Long-Term Creator Partnerships", "Creator Retention", "India"],
    related: ["influencer-marketing-crm", "influencer-partnerships", "creator-performance-scorecard", "what-to-do-after-finding-influencers"],
    hero: {
      src: "/blog/discovery/influencer-relationship-management.svg",
      alt: "A four-step ladder from one-off collaboration to repeat booking, retainer and ambassador, with what a brand must do to earn each next step",
    },
    discoveryCta: {
      headline: "Ready to Find Creators Worth Keeping?",
      body: "Explore Kudozz Discovery to research Instagram creators in India by niche, city, language and engagement, and save the ones who fit into named lists. Strong long-term relationships start with the right first picks.",
    },
    body: [
      {
        type: "paragraph",
        text: "Say a Jaipur block-print label worked with a creator in March and the Reel did well. Six months later the same creator posts a Diwali Reel for a competing label. Nobody fell out. The label simply never got in touch again after the payment cleared, and the competitor asked first. That is how most creator relationships end: not with a dispute, but with silence.",
      },
      {
        type: "paragraph",
        text: "This guide is about the opposite habit. It covers what brands should do during and between collaborations so that good creators know the brand, trust it, and say yes when it comes back. It assumes you have already found and booked the creator; if you haven't, start with the steps after discovery and come back here.",
        links: [{ text: "the steps after discovery", href: "/blog/what-to-do-after-finding-influencers" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer relationship management means treating good creators as ongoing partners rather than one-off suppliers. In practice: run a fair first collaboration, give every creator one named contact, keep a record of their work, rates, rights and preferences, share results and feedback both ways, pay on the agreed date, and decide deliberately who to rebook and on what terms. The aim is a small bench of creators who understand your brand, deliver reliably and want to work with you again.",
      },
      { type: "heading", text: "Why long-term relationships are worth the effort", id: "why-long-term" },
      {
        type: "list",
        items: [
          "Less briefing each time: a creator who has used your product already knows what it does, what you can't claim and how your approvals work.",
          "Better content: creators get sharper with a product over several posts, and a second or third mention often feels more natural than a first.",
          "More believable endorsement: an audience that sees a creator come back to a product over months has more reason to trust it than one sponsored post.",
          "Faster bookings in busy seasons: creators fill up before festive sales and big launches, and they tend to make room for brands they like.",
          "Fewer surprises: you know how a creator handles feedback, deadlines and disclosure before you sign.",
        ],
      },
      {
        type: "paragraph",
        text: "That doesn't mean every creator should become a long-term partner. Some collaborations are one-offs by design: a regional test, a single launch moment, a format experiment. Relationship management is about being a brand worth returning to, and then choosing carefully who to return to.",
      },
      { type: "heading", text: "The relationship lifecycle", id: "lifecycle" },
      {
        type: "table",
        headers: ["Stage", "What good looks like", "What damages trust"],
        rows: [
          ["Research and shortlist", "Creator chosen for fit and content quality, not only reach", "Booking someone whose audience or values clash with the brand"],
          ["Outreach", "A specific, honest first message through a professional channel", "Copy-paste messages, vague offers, chasing on personal numbers"],
          ["Negotiation", "A clear offer with deliverables, timeline and rights stated", "Moving the goalposts after the creator agrees"],
          ["Agreement", "Terms in writing, including usage rights and revision rounds", "Verbal deals that later turn into extra asks"],
          ["Campaign", "A useful brief, creative room, consolidated feedback", "Five reviewers, contradictory comments, last-minute rewrites"],
          ["Payment", "Paid on the agreed date, with invoice and tax handling clear", "Late payment without explanation"],
          ["Review", "Results shared with the creator; both sides give feedback", "No word after go-live"],
          ["Next step", "A deliberate decision to rebook, rotate or part well", "Silence"],
        ],
      },
      {
        type: "paragraph",
        text: "Each stage has its own deep guide. For the early stages, see how to shortlist influencers, how to contact influencers and how to negotiate influencer rates; for the agreement, the influencer marketing contract guide covers the clauses that protect both sides.",
        links: [
          { text: "how to contact influencers", href: "/blog/how-to-contact-influencers" },
          { text: "how to negotiate influencer rates", href: "/blog/negotiate-influencer-rates" },
          { text: "influencer marketing contract guide", href: "/blog/influencer-marketing-contract" },
        ],
      },
      { type: "heading", text: "The first collaboration sets the tone", id: "first-collaboration" },
      {
        type: "paragraph",
        text: "A creator decides whether they want to work with you again during the first campaign, usually long before results come in. These are the things creators tend to remember:",
      },
      {
        type: "list",
        items: [
          "Was the objective clear? A creator who knows you want product understanding, not just reach, makes a better video.",
          "Was the brief usable? One page of must-haves, the claims they can and can't make, and room for their own style.",
          "Was the timeline realistic? Product arriving two days before a go-live date forces a rushed, less honest review.",
          "Were revision rounds agreed and respected? Two rounds of consolidated feedback is a common, workable rule; endless rounds are not.",
          "Were usage rights stated upfront? Discovering later that a Reel is running as a paid ad without agreement is one of the fastest ways to lose a creator.",
          "Was payment on time? This matters more to most creators than an extra few thousand rupees on the fee.",
        ],
      },
      { type: "heading", text: "Communication rules that keep things easy", id: "communication" },
      {
        type: "paragraph",
        text: "Give every creator one named point of contact on your side, so they never have to repeat themselves to a new person. Commit to a response time, for example two working days, even if the reply is only to say when a decision will come. Then agree which channel is used for what:",
      },
      {
        type: "table",
        headers: ["Topic", "Channel", "Rule"],
        rows: [
          ["Fees, deliverables, rights", "Email", "Confirm every call or chat decision in writing the same day"],
          ["Shipping, reminders, quick questions", "The creator's preferred chat app", "One thread per creator; no forwarding of their number"],
          ["Draft feedback", "One consolidated message", "Merge comments from all reviewers before sending"],
          ["Delays and changes", "Call, then email", "Tell the creator as soon as you know, not on the go-live day"],
          ["Between campaigns", "Light-touch chat or email", "Share launches and send new products without obligation"],
        ],
      },
      {
        type: "paragraph",
        text: "Many creators in India work through a manager or talent agency for commercial terms but handle creative questions themselves. Ask early who to speak to about what, and copy both on anything that changes scope. The guide to influencer communication goes deeper on channels and ownership.",
        links: [{ text: "influencer communication", href: "/blog/influencer-communication" }],
      },
      { type: "heading", text: "Keep a record for every creator", id: "creator-record" },
      {
        type: "paragraph",
        text: "Relationships break when the person who knew the creator leaves the team. A short record per creator fixes that. A spreadsheet is enough for most brands; the structure matters more than the tool.",
      },
      {
        type: "template",
        label: "Creator relationship record (one row or card per creator)",
        text: "Creator name | Instagram handle and profile URL | Manager or agency (if any)\nPoint of contact on our side | Preferred channel | Language preference\nCampaigns so far: name, date, deliverables, fee, outcome\nUsage rights granted: asset, platforms, duration, expiry date\nExclusivity agreed: category, period, end date\nPayment history: invoice date, paid date, any delays and why\nWhat they do well | What needed extra guidance\nTheir feedback to us | Products they genuinely use\nRelationship status: core partner / rotation / one-off / paused\nNext touchpoint: date and reason",
      },
      {
        type: "paragraph",
        text: "If you're setting this up for the first time, the guide to organising influencer contact details and collaboration records shows how to structure it as a simple CRM and keep it current.",
        links: [{ text: "organising influencer contact details and collaboration records", href: "/blog/influencer-marketing-crm" }],
      },
      {
        type: "discovery-cta",
        headline: "Build a Bench of Creators Who Fit",
        body: "Long-term partners start as good first picks. Kudozz Discovery helps you search Instagram creators in India by niche, city, language and engagement, and save candidates into named lists. The relationship work after that stays with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Make feedback a two-way habit", id: "feedback" },
      {
        type: "paragraph",
        text: "Within two weeks of a campaign closing, send each creator a short note with how their content performed and what you learned, then ask what you could do better. Creators rarely get results from brands, so this alone sets you apart. It also gives you honest input on your briefs, approvals and payment process.",
      },
      {
        type: "template",
        label: "Post-campaign note to a creator",
        text: "Hi [Name],\n\nThanks again for the [product] Reel. A quick wrap-up from our side:\n\n- What worked: [e.g. the routine demo in the first few seconds; comments asking about texture]\n- Results we saw: [views, link clicks or code uses from your post, as tracked on our side]\n- What we'll do differently: [e.g. ship product earlier, shorter brief]\n\nThree quick questions, if you have a minute:\n1. Was anything in our brief or approvals unclear or slow?\n2. Is there a format you think would work better for this product?\n3. Would you be open to working together again around [season/launch]?\n\nPayment was processed on [date]; let me know if anything is missing.\n\n[Your name]",
      },
      { type: "heading", text: "Decide who to work with again", id: "rebook" },
      {
        type: "paragraph",
        text: "Rebooking shouldn't depend on who remembers whom. Score each creator after every campaign on the same criteria, and use the scores alongside judgement, not instead of it.",
      },
      {
        type: "table",
        headers: ["Criterion", "What to look at"],
        rows: [
          ["Content quality against the brief", "Did the content land the key message in the creator's own style?"],
          ["Results against the campaign KPI", "Views, clicks, code uses or saves, read in context of format and tier"],
          ["Audience response", "Questions about the product, comment quality, saves and shares"],
          ["Reliability", "Deadlines met, revisions handled, disclosure done properly"],
          ["Ease of working", "Responsiveness, professionalism, how feedback was received"],
          ["Ongoing brand fit", "Anything posted since that conflicts with your brand or category"],
        ],
      },
      {
        type: "paragraph",
        text: "Then sort creators into three groups. Core partners are the few you plan around for the next two or three campaigns. Rotation creators are good fits you'll rebook when the brief suits them. One-off creators did the job but aren't a priority. A creator performance scorecard keeps this consistent across team members.",
        links: [{ text: "creator performance scorecard", href: "/blog/creator-performance-scorecard" }],
      },
      { type: "heading", text: "Choose the right long-term structure", id: "structures" },
      {
        type: "table",
        headers: ["Structure", "How it works", "Suits", "Watch out for"],
        rows: [
          ["Repeat bookings", "Separate agreements campaign by campaign", "Testing whether a pairing lasts", "Rates and availability can change each time"],
          ["Retainer", "Set deliverables per month or quarter for an agreed fee", "Always-on presence, steady content", "Content going stale; agree how briefs refresh"],
          ["Ambassador", "Longer term, deeper product role, often exclusivity", "Creators who genuinely use and love the product", "Exclusivity must be paid for and kept narrow"],
          ["Fee plus commission", "A base fee with a commission or code-based bonus", "Products where sales are trackable", "Commission alone rarely motivates good content"],
          ["Seeding relationship", "New products sent with no obligation to post", "Keeping warm creators close between paid work", "Don't treat unposted gifts as a broken deal"],
        ],
      },
      {
        type: "paragraph",
        text: "If you're moving several creators onto longer terms, the guides to influencer ambassador programmes and long-term influencer partnership programmes cover selection, contracts and governance in detail.",
        links: [
          { text: "influencer ambassador programmes", href: "/blog/brand-ambassador-program" },
          { text: "long-term influencer partnership programmes", href: "/blog/influencer-partnerships" },
        ],
      },
      { type: "heading", text: "Handle rights, exclusivity and rates as you grow together", id: "rights-and-rates" },
      {
        type: "list",
        items: [
          "Log every usage-rights grant with an expiry date and set a reminder a month before; renew or stop using the asset, never let it drift.",
          "Keep exclusivity narrow (a defined category and period) and pay for it; a blanket non-compete across all beauty brands for a year is a big ask.",
          "Expect rates to rise as creators grow. Review fees at renewal rather than being surprised by a new rate card mid-campaign.",
          "Agree upfront how invoices, GST and tax deductions will be handled, so the creator knows the amount they will actually receive.",
          "Book early for festive and sale seasons. Your best creators will be busy around Diwali and big marketplace sales; a heads-up a couple of months ahead is a courtesy they notice.",
        ],
      },
      { type: "heading", text: "When a relationship isn't working", id: "not-working" },
      {
        type: "paragraph",
        text: "Sometimes a pairing stops making sense: results fall away, the creator's content moves in a different direction, or deadlines keep slipping. Raise it privately and early, with specifics. If it can't be fixed, finish the current agreement properly, pay what is owed, confirm what happens to any rights you hold, and leave the door open. Creators talk to each other, and how you end a relationship affects how the next creator receives your outreach.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Going silent after payment and only reappearing when you need something.",
          "Letting different team members message the same creator with different asks.",
          "Reusing content beyond the agreed rights because it performed well.",
          "Judging creators only on one campaign's numbers without reading the content and comments.",
          "Offering long exclusivity or retainers before you've run at least one campaign together.",
          "Not keeping records, so every rebooking starts from zero.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Long-term creator relationships aren't built with gifts or flattery. They're built by running fair campaigns, communicating clearly, keeping promises on rights and payments, sharing results, and choosing deliberately who comes back. Do that consistently and rebooking becomes easier, your briefs improve, and the content gets better with each round. If you'd rather have a team run creator relationships for you, Kudozz's influencer marketing services cover this end to end.",
        links: [{ text: "influencer marketing services", href: "/services/influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "How often should a brand contact creators between campaigns?",
        answer:
          "Often enough that the creator remembers you, not so often that it feels like pressure. A message when you launch something relevant, a product sent without obligation, and a heads-up before your next big season is usually plenty. Every contact should be useful to them, not just a reminder that you exist.",
      },
      {
        question: "Should we sign a long-term contract with a creator straight away?",
        answer:
          "It's usually safer to run one or two campaigns first. You learn how the creator handles briefs, feedback and deadlines, and they learn how you work. Once both sides are happy, a retainer or ambassador agreement rests on real experience rather than hope.",
      },
      {
        question: "What if a creator we like also works with our competitors?",
        answer:
          "That's normal unless you've paid for exclusivity. If competitor posts are a real concern, agree a narrow exclusivity window for your category during and just after your campaign, and pay for it. Asking for broad exclusivity without paying tends to damage the relationship.",
      },
      {
        question: "Do we need software for influencer relationship management?",
        answer:
          "Not at the start. A well-kept spreadsheet with one row per creator, campaign history, rights expiry dates and next touchpoints covers most small and mid-sized brands. Software helps once several team members manage dozens of active creators, but the habits matter more than the tool.",
      },
      {
        question: "A creator's rates doubled after they grew. Should we keep working with them?",
        answer:
          "Look at what the new rate buys: if their content still performs for your objective and the fit is strong, it may be worth it, perhaps with fewer deliverables. If not, part well and thank them. Growing creators often remember the brands that backed them early, so a respectful no keeps future options open.",
      },
    ],
  },

  // #57 how-to-create-a-successful-influencer-marketing-campaign (UPGRADE, orig 2026-09-06)
  {
    slug: "how-to-create-a-successful-influencer-marketing-campaign",
    category: "Campaign Strategy",
    title: "How to Create an Influencer Marketing Campaign Plan From Scratch",
    seoTitle: "Influencer Campaign Planning From Scratch | Kudozz",
    excerpt:
      "A complete influencer campaign plan fits on one page and is written before you message a single creator. Here's how to build it: objective, audience, formats, budget lines, creators, brief, timeline, rights, tracking and wrap-up.",
    metaDescription:
      "Influencer campaign planning step by step: objective and KPI, audience, formats, budget lines, creator selection, brief, timeline, rights and tracking.",
    author: AUTHOR,
    publishedAt: "2026-09-06",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Campaign Planning", "Campaign Plan Template", "Campaign Strategy", "India"],
    related: ["select-influencer-mix-for-campaign", "influencer-campaign-brief", "influencer-marketing-campaign-timeline", "influencer-marketing-budget"],
    hero: {
      src: "/blog/discovery/how-to-create-a-successful-influencer-marketing-campaign.svg",
      alt: "A one-page influencer campaign plan laid out as ten numbered boxes, from objective and KPI through creators, brief and timeline to tracking and wrap-up",
    },
    discoveryCta: {
      headline: "Ready to Find Creators for Your Campaign Plan?",
      body: "Once your objective, audience and creator mix are written down, explore Kudozz Discovery to research Instagram creators in India against them and build a relevant shortlist for your next campaign.",
    },
    body: [
      {
        type: "paragraph",
        text: "Here is the short version: a workable influencer campaign plan fits on one page, and it should be finished before anyone on your team messages a creator. Most campaigns that disappoint were planned the other way round. Someone found a creator they liked, a deal was agreed, and the objective, budget and measurement were worked out afterwards to fit.",
      },
      {
        type: "paragraph",
        text: "This guide walks through building that one-page plan from nothing, in the order the decisions depend on each other. Each step links to a deeper guide where one exists, and there's a copy-ready plan template and a worked example near the end.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To plan an influencer campaign from scratch, decide in this order: one objective and its primary KPI; the audience and the single message; platforms and formats; the budget, broken into lines beyond creator fees; the creator mix and shortlist; the brief and deliverables; a timeline with approval windows; contracts, usage rights and disclosure; tracking; and how you'll report and decide on repeat collaborations. Write it on one page, get it signed off, then start outreach.",
      },
      { type: "heading", text: "1. Set one objective and one primary KPI", id: "objective" },
      {
        type: "paragraph",
        text: "Pick a single primary objective. Secondary goals are fine, but the primary one decides the creators, formats and measurement. Trying to optimise for reach, sales and content all at once usually produces a campaign that is mediocre at each.",
      },
      {
        type: "table",
        headers: ["Objective", "Primary KPI (example)", "What creators should do", "Formats that often suit"],
        rows: [
          ["Awareness", "Reach or views among the target audience", "Introduce the brand naturally to new people", "Reels, Shorts, Story series"],
          ["Consideration", "Saves, shares, product questions in comments", "Show the product in use and answer doubts", "Demos, routines, honest reviews"],
          ["Traffic or sales", "Link clicks, code uses, attributed orders", "Give a clear reason and way to buy now", "Stories with links, codes, offers"],
          ["Content for ads", "Usable assets delivered with rights", "Produce footage your team can run as ads", "UGC-style videos, raw files"],
        ],
      },
      {
        type: "paragraph",
        text: "Write the KPI with a definition and a target range you can defend from your own past data or a test, not a number pulled from a benchmark. The guide to influencer marketing KPIs explains how to pick and define them.",
        links: [{ text: "influencer marketing KPIs", href: "/blog/influencer-marketing-kpis" }],
      },
      { type: "heading", text: "2. Define the audience and the single message", id: "audience-message" },
      {
        type: "list",
        items: [
          "Who: describe the buyer in a sentence (for example, women aged 22–30 in metros and Tier 2 cities with oily, acne-prone skin, who shop on Nykaa and Instagram).",
          "Problem: what they're trying to solve, in their words.",
          "Message: the one thing every creator's content should get across.",
          "Proof points: two or three facts creators can show or say (texture, ingredient, price, delivery).",
          "Claims: what may and may not be said, especially for health, beauty, food and finance categories.",
        ],
      },
      { type: "heading", text: "3. Choose platforms and formats", id: "platforms-formats" },
      {
        type: "paragraph",
        text: "Match platforms to where your audience watches and to what the objective needs. A product that needs explaining may suit a YouTube integration; an impulse purchase may suit Instagram Reels plus Stories with a link. Decide the format before you pick creators, because a great photo creator isn't automatically a great Reels creator. If you're running more than one platform, the guide to multi-platform influencer campaigns covers how to split roles between them.",
        links: [{ text: "multi-platform influencer campaigns", href: "/blog/multi-platform-influencer-campaigns" }],
      },
      { type: "heading", text: "4. Build the budget line by line", id: "budget" },
      {
        type: "paragraph",
        text: "Creator fees are only one line. Plan the others now, or they get taken out of the fee budget later.",
      },
      {
        type: "table",
        headers: ["Budget line", "What it covers"],
        rows: [
          ["Creator fees", "Agreed deliverables per creator"],
          ["Product and logistics", "Units sent, packaging, shipping, returns"],
          ["Usage rights and whitelisting", "Extra fees to reuse content in ads or run ads through the creator's handle"],
          ["Paid amplification", "Media spend to boost the best posts"],
          ["Production extras", "Props, locations, raw footage, edits"],
          ["Agency, tools and team time", "Discovery tools, management fees, internal hours"],
          ["Contingency", "Replacement creators, reshoots, delays"],
        ],
      },
      {
        type: "paragraph",
        text: "For estimating each line, use the influencer marketing budget worksheet; for how to split money across tiers and roles, see the guide to influencer budget allocation.",
        links: [{ text: "influencer marketing budget worksheet", href: "/blog/influencer-marketing-budget" }],
      },
      { type: "heading", text: "5. Decide the creator mix, then find creators", id: "creator-selection" },
      {
        type: "paragraph",
        text: "Before searching, write down the slots you need to fill: how many creators, in which roles, tiers, niches, cities and languages. A launch might need one larger creator for reach, a handful of mid-sized creators for demos, and a group of smaller creators for volume. The guide to selecting the right mix of influencers shows how to build those slots. Then search against them, research each candidate's content and audience signals, and shortlist with backups.",
        links: [{ text: "selecting the right mix of influencers", href: "/blog/select-influencer-mix-for-campaign" }],
      },
      {
        type: "discovery-cta",
        headline: "Fill Your Creator Slots Faster",
        body: "With the slots written down, Kudozz Discovery lets you search Indian Instagram creators by niche, follower band, city, language and minimum engagement, then save candidates into a list for this campaign.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      {
        type: "paragraph",
        text: "Treat any tool's numbers as a first filter. Watch recent content, read comments and ask finalists for audience insights screenshots before you confirm, as covered in the things to check before selecting an influencer.",
        links: [{ text: "things to check before selecting an influencer", href: "/blog/things-to-check-before-selecting-influencers" }],
      },
      { type: "heading", text: "6. Write the brief and lock the deliverables", id: "brief-deliverables" },
      {
        type: "paragraph",
        text: "The brief tells creators what the campaign needs without scripting them. Deliverables need to be exact, because vague deliverables cause most disputes. The influencer campaign brief guide covers the brief itself; for deliverables, agree at least the following per creator:",
        links: [{ text: "influencer campaign brief guide", href: "/blog/influencer-campaign-brief" }],
      },
      {
        type: "list",
        items: [
          "Format and count (for example, one Reel and three Stories).",
          "Length or duration range, and aspect ratio.",
          "Go-live date and time window.",
          "Mandatory elements: link, code, tag, product shown in use.",
          "Disclosure label and where it appears.",
          "Draft submission date and number of revision rounds.",
          "Raw files or edited files to be shared, if any.",
          "How long the post stays live.",
        ],
      },
      { type: "heading", text: "7. Build a timeline with approval windows", id: "timeline" },
      {
        type: "paragraph",
        text: "Work backwards from the go-live date. The example below is for a mid-sized Instagram campaign with product shipping; treat the weeks as a starting point and adjust to your approvals and logistics.",
      },
      {
        type: "table",
        headers: ["Week (example)", "What happens"],
        rows: [
          ["Weeks 1–2", "Plan signed off; creator slots defined; search and research"],
          ["Week 3", "Shortlist approved; outreach and negotiation"],
          ["Week 4", "Contracts signed; brief shared; product shipped"],
          ["Week 5", "Creators use the product; drafts due at the end of the week"],
          ["Week 6", "Feedback and approvals (two rounds); tracking links tested"],
          ["Week 7", "Go-live; comment monitoring; boosting the best posts"],
          ["Weeks 8–9", "Insights collected; payment; report; rebooking decisions"],
        ],
      },
      {
        type: "paragraph",
        text: "Festive and sale periods compress everything, so start earlier for Diwali or big marketplace sales. The influencer marketing campaign timeline guide has longer versions for launches and multi-wave campaigns.",
        links: [{ text: "influencer marketing campaign timeline", href: "/blog/influencer-marketing-campaign-timeline" }],
      },
      { type: "heading", text: "8. Agree contracts, usage rights and approvals", id: "contracts-rights" },
      {
        type: "list",
        items: [
          "Put fees, deliverables, dates, revision rounds and payment terms in a written agreement, even for small creators.",
          "State usage rights precisely: which assets, which platforms (organic reposts, paid ads, website), for how long, and whether ads run from the creator's handle.",
          "Name who approves drafts on your side and the turnaround you commit to.",
          "Make disclosure non-negotiable. ASCI's guidelines for influencer advertising in India expect paid and gifted partnerships to be clearly labelled.",
          "Agree what happens if a post must be edited or taken down.",
        ],
      },
      {
        type: "paragraph",
        text: "The guide to influencer usage rights explains how to word reuse terms so nobody is surprised later.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "9. Set up tracking before go-live", id: "tracking" },
      {
        type: "list",
        items: [
          "A unique UTM link and, where useful, a unique discount code per creator.",
          "A shared sheet where creators send Insights screenshots (reach, views, saves, link taps) on agreed days.",
          "A baseline of normal sales and site traffic for the same period, so you can see the lift.",
          "Someone assigned to read comments in the first 48 hours and answer product questions.",
        ],
      },
      { type: "heading", text: "10. Report, document and decide on repeats", id: "wrap-up" },
      {
        type: "paragraph",
        text: "Close the campaign properly: collect final Insights, compare against the KPI you set in step 1, write down what you'd change, log rights and expiry dates for every asset, pay on time, and note which creators you'd book again. Those notes are what make the next plan faster. The guide to influencer relationship management covers how to turn good first collaborations into repeat ones.",
        links: [{ text: "influencer relationship management", href: "/blog/influencer-relationship-management" }],
      },
      { type: "heading", text: "The one-page campaign plan template", id: "plan-template" },
      {
        type: "template",
        label: "Influencer campaign plan (one page)",
        text: "Campaign name:\nOwner: | Approver: | Dates: [go-live] to [wrap-up]\n\n1. Objective: [one]   Primary KPI: [definition + target range]   Secondary: [optional]\n2. Audience: [one sentence]   Message: [one line]   Proof points: [2-3]   Claims not allowed: [list]\n3. Platforms and formats: [e.g. Instagram Reels + Stories]\n4. Budget: fees [ ] | product and logistics [ ] | rights/whitelisting [ ] | amplification [ ] | production [ ] | agency/tools [ ] | contingency [ ]\n5. Creator slots: [role / tier band / niche / city / language / count]  Backups per slot: [ ]\n6. Deliverables per creator: [format, count, length, mandatory elements, disclosure, drafts, raw files]\n7. Timeline: plan / shortlist / contracts / shipping / drafts / approvals / go-live / report\n8. Rights and approvals: [usage terms] | Approvers: [names, turnaround]\n9. Tracking: [UTMs, codes, Insights screenshots, baseline]\n10. Wrap-up: report date | rebooking decision date | records updated by [name]",
      },
      { type: "heading", text: "A worked example", id: "example" },
      {
        type: "paragraph",
        text: "Say a Bengaluru D2C skincare brand is launching a niacinamide serum. Objective: consideration, measured as saves and product questions in comments. Audience: women in their twenties with oily skin across metros and Tier 2 cities. Message: lightweight, non-sticky, works under sunscreen. Format: one routine Reel plus two Stories per creator, on Instagram only. Mix: two mid-sized skincare creators for credibility, eight micro creators across Bengaluru, Hyderabad, Pune and Indore for range, and three UGC creators for ad assets with 90 days of paid usage. Timeline: eight weeks, with drafts in week five. Tracking: one UTM and code per creator, Insights screenshots on day 3 and day 7. Every one of those lines was decided before the first outreach email.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Choosing creators first and the objective afterwards.",
          "Budgeting only for creator fees and running out for rights, shipping or boosting.",
          "Leaving deliverables vague (one post) so expectations differ.",
          "No approval owner, so drafts sit for days and go-live slips.",
          "Forgetting usage rights until the content performs and someone wants to run it as an ad.",
          "Measuring something different from what the plan set out to achieve.",
        ],
      },
      { type: "heading", text: "From plan to execution", id: "conclusion" },
      {
        type: "paragraph",
        text: "A campaign plan isn't paperwork. It's the set of decisions that makes every later step easier: briefs write themselves, negotiations have a clear frame, and reports measure the right thing. Fill in the one-page template, get it signed off, and only then start contacting creators. If you'd like a team to build and run the plan with you, Kudozz's campaign strategy service does exactly that.",
        links: [{ text: "campaign strategy service", href: "/services/campaign-strategy" }],
      },
    ],
    faqs: [
      {
        question: "How long does it take to plan and launch an influencer campaign?",
        answer:
          "For a straightforward Instagram campaign with product shipping, six to nine weeks from plan to go-live is a reasonable working assumption. Simple gifting can be faster; multi-platform launches, regulated categories or many creators take longer. Approval speed on your side is often the deciding factor.",
      },
      {
        question: "How many creators should a first campaign include?",
        answer:
          "Enough to learn something, few enough to manage well. Many brands start with somewhere between five and fifteen creators across two or three tiers, so they can compare what works. Fewer, well-chosen creators beat a large group you can't brief and review properly.",
      },
      {
        question: "Should creators follow a script?",
        answer:
          "Give them must-have points and claims rules, not a script. Creators know what their audience responds to, and scripted content usually reads as an ad. Keep scripts for cases where exact wording is legally necessary.",
      },
      {
        question: "What should a campaign plan include that a brief doesn't?",
        answer:
          "The plan is internal: objective, KPI, budget lines, creator slots, timeline, approvers and tracking. The brief is what creators see: the message, proof points, deliverables, dates and dos and don'ts. Write the plan first and draw the brief from it.",
      },
      {
        question: "Can a small brand run a campaign without an agency?",
        answer:
          "Yes, if someone owns it and has time. The work is mostly planning, communication and follow-through. Agencies help most when you need many creators, several cities or languages, or tight timelines that your team can't absorb.",
      },
    ],
  },

  // #58 select-influencer-mix-for-campaign (NEW)
  {
    slug: "select-influencer-mix-for-campaign",
    category: "Campaign Strategy",
    title: "How to Select the Right Mix of Influencers for a Brand Campaign",
    seoTitle: "Influencer Mix Strategy for Brand Campaigns | Kudozz",
    excerpt:
      "Ten micro-influencers is a headcount, not a mix. Build your creator mix as a portfolio of roles across tiers, formats, platforms and regions, with a worked example and a mix sheet you can copy.",
    metaDescription:
      "Build an influencer mix as a portfolio: roles first, then tiers, formats, platforms and regions. Includes a worked example, a mix sheet and balance checks.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Mix", "Creator Selection", "Campaign Strategy", "India"],
    related: ["micro-vs-macro-influencers", "influencer-budget-allocation", "how-to-create-a-successful-influencer-marketing-campaign", "influencers-for-customer-journey"],
    hero: {
      src: "/blog/discovery/select-influencer-mix-for-campaign.svg",
      alt: "A grid of creator roles against follower tiers with marked slots showing how a campaign mix fills reach, credibility, conversion, content and local roles",
    },
    discoveryCta: {
      headline: "Ready to Fill Every Slot in Your Creator Mix?",
      body: "Explore Kudozz Discovery to search Instagram creators in India by follower band, niche, city, language and engagement, and keep a separate list for each role in your mix.",
    },
    body: [
      {
        type: "paragraph",
        text: "A common way to plan a creator line-up goes like this: we'll take ten micro-influencers, they're good value. That is a headcount, not a mix. It says nothing about what each creator is there to do, whether they'll all make the same kind of video for the same audience in the same city, or what happens if half of them drop out.",
      },
      {
        type: "paragraph",
        text: "A good influencer mix works more like a portfolio. Each creator fills a role, the roles together cover what the campaign needs, and no single creator carries all the risk. This guide shows how to build one: roles first, then tiers, formats, platforms and regions, with a worked hypothetical example and a mix sheet you can copy.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To select the right mix of influencers, start from the jobs the campaign needs done (reach, credibility, conversion, content for ads, local relevance) and turn each job into a slot. For every slot, choose the follower tier, format, platform, city and language that suit that job. Weight the budget toward the slots tied to your primary objective, add a backup for each slot, and check the finished mix for overlap and sameness before you start outreach.",
      },
      { type: "heading", text: "The five layers of a creator mix", id: "five-layers" },
      {
        type: "table",
        headers: ["Layer", "The question it answers", "Example choices"],
        rows: [
          ["Role", "What is this creator here to do?", "Reach, credibility, conversion, content, local voice, advocacy"],
          ["Tier", "How big an audience suits that role?", "Nano, micro, mid-tier, macro, celebrity"],
          ["Format", "What content will they make?", "Reels, Stories, carousels, long video, UGC for ads"],
          ["Platform", "Where does the audience watch?", "Instagram, YouTube, others"],
          ["Region and language", "Which customers do they reach?", "Metros, Tier 2 cities, Hindi, Tamil, Marathi, English"],
        ],
      },
      {
        type: "paragraph",
        text: "Most mix mistakes come from deciding the tier layer first. Tiers are a means; the role is the reason. Tier labels are also conventions rather than standards: one agency's micro is another's mid-tier, so define the follower bands you mean in your own plan.",
      },
      { type: "heading", text: "Start with roles, not tiers", id: "roles" },
      {
        type: "table",
        headers: ["Role", "What it does", "Tiers that often fit", "How to judge it"],
        rows: [
          ["Reach anchor", "Puts the brand in front of a large relevant audience quickly", "Macro, sometimes celebrity", "Views and reach among the right audience"],
          ["Credibility voice", "Explains and vouches for the product with authority", "Mid-tier or micro experts (dermatologists, coaches, chefs)", "Comment questions, saves, trust signals"],
          ["Conversion driver", "Moves followers to click or buy", "Micro creators with engaged, loyal audiences", "Link clicks, code uses, orders"],
          ["Content producer", "Creates assets your team runs as ads", "UGC creators, any tier with strong production", "Asset quality, ad performance"],
          ["Local voice", "Makes the brand relevant in a city or language", "Nano and micro regional creators", "Local engagement, store or city sales"],
          ["Volume and buzz", "Many genuine posts at once, often via gifting", "Nano creators, seeding lists", "Number of posts, mentions, UGC created"],
        ],
      },
      {
        type: "paragraph",
        text: "Not every campaign needs every role. A sale-week push may need conversion drivers and little else; a category-creating launch may lean on credibility voices. For a detailed comparison of what each tier tends to offer, see micro, macro or celebrity influencers and the nano vs micro comparison. If you're mapping creators to stages of the buying journey rather than campaign roles, the guide to influencers for each stage of the customer journey approaches the same problem from that angle.",
        links: [
          { text: "micro, macro or celebrity influencers", href: "/blog/micro-vs-macro-influencers" },
          { text: "nano vs micro comparison", href: "/blog/nano-vs-micro-influencers" },
          { text: "influencers for each stage of the customer journey", href: "/blog/influencers-for-customer-journey" },
        ],
      },
      { type: "heading", text: "Layer formats and platforms onto each role", id: "formats-platforms" },
      {
        type: "list",
        items: [
          "Reach anchors usually suit short video where the platform can push content beyond followers.",
          "Credibility voices often need room to explain: a longer Reel, a carousel, or a YouTube integration.",
          "Conversion drivers benefit from Stories with links and codes, posted close to the offer window.",
          "Content producers should be briefed for ad use: hooks, multiple cuts, raw files and paid usage rights.",
          "Use a second platform only where a role clearly needs it, such as YouTube for a product that needs a detailed review.",
        ],
      },
      {
        type: "paragraph",
        text: "Check that the formats in your mix aren't all identical. Ten unboxing Reels in one week look like an ad campaign to anyone who follows two of those creators.",
      },
      { type: "heading", text: "Add the region and language layer", id: "regions-languages" },
      {
        type: "paragraph",
        text: "If your sales or delivery footprint is uneven, your mix should be too. A brand selling mostly in Maharashtra and Karnataka gains little from creators whose audiences sit mainly in the North East. Decide which cities and languages matter, then assign slots: perhaps English-language creators for metro reach and Marathi or Kannada creators for local relevance. The guide to finding regional content creators in India covers how to source them.",
        links: [{ text: "finding regional content creators in India", href: "/blog/find-regional-content-creators-india" }],
      },
      { type: "heading", text: "A worked example: a protein snack launch", id: "worked-example" },
      {
        type: "paragraph",
        text: "Say a Pune protein-snack brand is launching a new bar in Maharashtra and Karnataka. Primary objective: trial, measured by code uses on its website and quick-commerce availability searches. Here is one way the mix could look. The slots and splits are illustrative for this one plan, not a benchmark.",
      },
      {
        type: "table",
        headers: ["Slot", "Role", "Tier band", "Profile", "Format", "Share of fee budget"],
        rows: [
          ["A", "Reach anchor", "100K–1M", "1 fitness creator, English and Hindi, metro audience", "1 Reel + 3 Stories", "About a quarter"],
          ["B", "Credibility voice", "10K–100K", "2 nutritionists or coaches", "1 explainer Reel each", "About a fifth"],
          ["C", "Conversion driver", "10K–100K", "6 fitness and food creators in Pune, Mumbai, Bengaluru", "Stories with code + 1 Reel", "About a third"],
          ["D", "Local voice", "5K–10K", "4 Marathi and Kannada creators", "1 Reel each", "About a tenth"],
          ["E", "Content producer", "Any", "2 UGC creators, 90 days paid usage", "4 ad-ready cuts each", "The remainder"],
          ["F", "Volume", "1K–10K", "15 gym-goers and runners via gifting", "Optional posts", "Product cost only"],
        ],
      },
      {
        type: "paragraph",
        text: "Notice what the mix does. Most of the fee budget sits with slot C because the objective is trial and those creators carry codes. The anchor gives the launch visibility, the nutritionists answer the is-it-healthy question before it becomes a doubt, local creators cover two languages, and the UGC slot feeds paid ads after week one. Each slot also needs one or two backups.",
      },
      {
        type: "discovery-cta",
        headline: "Build a List for Each Slot in Your Mix",
        body: "In Kudozz Discovery you can set a follower band, niche, city, language and minimum engagement for each slot, sort by average views or engagement, and save candidates into a separate named list per role.",
        ctaLabel: "Search creators by slot",
      },
      {
        type: "paragraph",
        text: "Once each list has candidates, research them properly. Engagement rate and average views are useful filters, but they don't prove audience location or quality; watch recent content, read comments, and ask finalists for audience screenshots. The guide on how to research influencers covers what to look at.",
        links: [{ text: "how to research influencers", href: "/blog/how-to-research-influencers" }],
      },
      { type: "heading", text: "Use a mix sheet", id: "mix-sheet" },
      {
        type: "template",
        label: "Influencer mix sheet (one row per slot)",
        text: "Slot ID | Role | Why this slot exists (link to objective)\nTier band | Niche | Cities | Languages | Platform | Format and count\nKPI for this slot | Share of fee budget | Product units needed\nCandidates (3-5, with profile links) | Chosen creator | Backup 1 | Backup 2\nUsage rights needed | Go-live window | Owner on our side | Status",
      },
      {
        type: "paragraph",
        text: "The sheet turns a vague line-up into something your team can brief, cost and track. It also makes trade-offs visible: if the fee for slot A comes in high, you can see exactly which slots lose budget.",
      },
      { type: "heading", text: "How the mix shifts with the objective", id: "objective-shifts" },
      {
        type: "paragraph",
        text: "The same brand might need a very different mix for two campaigns in the same year. Use the primary objective to decide which roles get the most weight:",
      },
      {
        type: "table",
        headers: ["Primary objective", "Roles to weight", "Roles to keep small or skip"],
        rows: [
          ["Awareness for a new brand", "Reach anchor, volume and buzz", "Conversion drivers until people know the name"],
          ["Category education", "Credibility voices, longer formats", "Large volume of gifted posts"],
          ["Sales during an offer window", "Conversion drivers with codes and links", "Celebrity reach without a clear call to action"],
          ["Entering new cities", "Local voices in the right languages", "National creators whose audience sits elsewhere"],
          ["Building an ad library", "Content producers with paid usage rights", "Creators who won't grant usage"],
        ],
      },
      { type: "heading", text: "Mixing on a small budget", id: "small-budget" },
      {
        type: "paragraph",
        text: "A smaller budget doesn't mean a single tier; it means fewer roles. Say a Kochi café wants weekend footfall. Its mix might be four local food creators as conversion drivers (each with a dine-in offer), one Malayalam-speaking creator as the local voice, and a handful of gifted visits for nano creators who already post about Kochi food. No reach anchor, no UGC slot. Two roles done properly will teach more than six roles done thinly, and the results tell you which role to expand next time.",
      },
      {
        type: "paragraph",
        text: "When you're unsure between two roles, run the cheaper one first as a small test. A mix is easier to grow from evidence than to defend from assumptions.",
      },
      { type: "heading", text: "Check the balance before outreach", id: "balance-checks" },
      {
        type: "list",
        items: [
          "Overlap: are several creators followed by the same people? Similar niches in one city often share audiences.",
          "Sameness: do too many creators make the same format or style of content?",
          "Concentration: does one creator hold so much of the budget that the campaign depends on their post?",
          "Coverage: are the priority cities and languages actually represented?",
          "Fit: does every creator's recent content sit comfortably next to your brand?",
          "Feasibility: can your team brief, review and pay this many creators on the timeline?",
          "Backups: does every slot have at least one researched alternative?",
        ],
      },
      { type: "heading", text: "Adjust the mix after the first wave", id: "adjust" },
      {
        type: "paragraph",
        text: "If you run the campaign in waves, treat the first as a test of the mix, not just the creators. Compare slots against their own KPIs: did the conversion drivers move codes, did the credibility voices draw product questions, did the UGC assets beat your existing ads? Shift budget toward the slots that did their job and replace or drop the ones that didn't. The guide to influencer budget allocation goes deeper on reallocating money between tiers and waves.",
        links: [{ text: "influencer budget allocation", href: "/blog/influencer-budget-allocation" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Choosing tiers before roles, so the mix has no clear job for each creator.",
          "Spending most of the budget on one big name for a campaign whose objective is sales.",
          "Filling every slot with the same niche and city, then wondering why results plateau.",
          "Ignoring language where it matters to the buyer.",
          "Forgetting backups, so a single dropout leaves a hole in the launch week.",
          "Judging every slot by one metric, when each role has a different job.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Select an influencer mix the way you'd build any portfolio: decide the jobs, assign each a slot, size the bets to the objective, keep backups, and rebalance once you have results. The creators then become easier to find, because you're searching for a specific role rather than a vague good creator. If you'd like help building and running a multi-creator mix, Kudozz's influencer marketing team can plan it with you.",
        links: [{ text: "influencer marketing team", href: "/services/influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "Is it better to work with many small creators or a few large ones?",
        answer:
          "It depends on the job. A few large creators give fast, broad reach; many smaller creators give range, local relevance and less dependence on any one post. Most campaigns benefit from a combination, with the balance set by the primary objective.",
      },
      {
        question: "How many roles should one campaign cover?",
        answer:
          "Usually two to four. Covering every role with a small budget spreads money too thin to learn anything. Pick the roles that serve the primary objective, then add one supporting role if budget allows.",
      },
      {
        question: "Can one creator fill more than one role?",
        answer:
          "Yes. A trusted micro creator can be both a credibility voice and a conversion driver, and a strong creator can also deliver ad-ready content if you agree usage rights. Just make the expectations and fee reflect the extra work.",
      },
      {
        question: "How do I avoid audience overlap between creators?",
        answer:
          "Look at who the creators follow and interact with, check whether they appear in each other's comments, and ask for audience insights screenshots showing top cities. Mixing niches and cities lowers overlap; picking five creators from the same Bengaluru fitness circle raises it.",
      },
      {
        question: "Should a first campaign include UGC creators?",
        answer:
          "If you plan to run paid ads, yes. A small UGC slot gives you assets with clear usage rights that your ad team can test, which is often harder to secure from influencer posts after the fact.",
      },
    ],
  },

  // #59 influencer-campaign-coordination (UPGRADE, orig 2026-10-08)
  {
    slug: "influencer-campaign-coordination",
    category: "Campaign Strategy",
    title: "How to Manage Multiple Influencer Collaborations at the Same Time",
    seoTitle: "How to Manage and Coordinate Multiple Influencers | Kudozz",
    excerpt:
      "Three creators is a few conversations. Thirty is an operation. Here's how to run many influencer collaborations at once: one tracker, clear statuses, grouped work, batched reviews, staggered go-lives and a rights log.",
    metaDescription:
      "Manage multiple influencer collaborations at once: one tracker with fixed statuses, grouped creators, batched reviews, staggered go-lives and a rights log.",
    author: AUTHOR,
    publishedAt: "2026-10-08",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Influencer Campaign Coordination", "Multiple Influencers", "Campaign Operations", "India"],
    related: ["influencer-campaign-tracker", "influencer-communication", "influencer-content-approval", "how-to-create-a-successful-influencer-marketing-campaign"],
    hero: {
      src: "/blog/discovery/influencer-campaign-coordination.svg",
      alt: "A status board with columns from confirmed to paid, creator cards moving across it, and notes on which work is shared across creators and which stays individual",
    },
    discoveryCta: {
      headline: "Ready to Line Up Creators for Your Next Wave?",
      body: "Explore Kudozz Discovery to research Instagram creators in India and keep a named list for each wave, region or language, with backups ready before you need them.",
    },
    body: [
      {
        type: "paragraph",
        text: "Say a Hyderabad home-decor brand books thirty creators for its festive collection: Telugu, Tamil, Hindi and English, spread across Reels, Stories and a few UGC videos for ads. By week two, drafts are arriving on different days, ten creators have asked the same question about colours in slightly different words, two parcels are stuck, and nobody is sure which creators have been paid. None of that is a creator problem. It's a coordination problem.",
      },
      {
        type: "paragraph",
        text: "This guide covers how to manage many influencer collaborations at the same time without turning creators into a queue: what to set up before the first message, how to group work, how to run reviews and go-lives at volume, and how to close out cleanly.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Manage multiple influencer collaborations by putting every creator in one tracker with fixed statuses, giving each creator one owner on your team, grouping creators by wave, language, region or deliverable type, doing shared work once (briefings, an FAQ, shipping, review slots) while keeping feedback and relationships individual, staggering go-lives on purpose, logging usage rights and payments per creator, and sizing the team to the number of active creators.",
      },
      { type: "heading", text: "Set up before the first message", id: "setup" },
      {
        type: "list",
        items: [
          "One tracker that everyone uses. Not one per team member, not chat threads.",
          "Fixed statuses, so everyone means the same thing by approved or live.",
          "One owner per creator on your side, written in the tracker.",
          "A file-naming rule for drafts and finals, such as campaign_creatorhandle_format_v1.",
          "A shared FAQ document you can update as questions arrive.",
          "Named approvers and a committed review turnaround.",
          "Backups for each role, researched and saved before outreach starts.",
        ],
      },
      {
        type: "table",
        headers: ["Status", "Means", "Moves on when"],
        rows: [
          ["Confirmed", "Fee, deliverables and dates agreed in writing", "Agreement signed"],
          ["Briefed", "Brief, FAQ and brand assets shared; kickoff done", "Creator confirms dates"],
          ["Product sent", "Shipped with tracking shared", "Creator confirms delivery"],
          ["Draft in", "First draft received", "Consolidated feedback sent"],
          ["Approved", "Final version approved in writing", "Go-live date and time confirmed"],
          ["Live", "Posted with correct disclosure, links and tags", "Insights screenshots received"],
          ["Paid and closed", "Invoice paid, rights logged, notes written", "Record updated"],
        ],
      },
      {
        type: "paragraph",
        text: "The guide to building an influencer campaign tracker has a full column layout; the statuses above are the part that matters most when many creators are moving at once.",
        links: [{ text: "building an influencer campaign tracker", href: "/blog/influencer-campaign-tracker" }],
      },
      { type: "heading", text: "Group creators sensibly", id: "groups" },
      {
        type: "table",
        headers: ["Grouping", "Why", "Example"],
        rows: [
          ["Waves", "Spreads workload and go-lives", "Wave 1 in launch week, wave 2 two weeks later"],
          ["Language", "Briefings, reviews and FAQs in the same language", "Telugu, Tamil and Hindi groups"],
          ["Region", "Logistics and local timing", "Ship to farther cities first"],
          ["Deliverable type", "Different specs and reviewers", "Reels creators vs UGC creators vs YouTube integrations"],
          ["Experience", "Different levels of guidance", "Repeat partners vs creators new to brand work"],
        ],
      },
      { type: "heading", text: "Do shared work once, keep relationships individual", id: "shared-work" },
      {
        type: "list",
        items: [
          "One kickoff call per wave or language group, with a written recap for anyone who missed it.",
          "One FAQ, updated as questions arrive and re-shared with everyone in the group.",
          "Batch shipping with tracking numbers sent in one message per creator.",
          "Standard submission instructions: where to upload, how to name files, what to include.",
          "Fixed review slots, for example twice a day, so feedback is consistent and fast.",
        ],
      },
      {
        type: "paragraph",
        text: "What stays individual: confirmation messages, feedback on drafts, payment conversations, and one-to-one calls with creators who are new to brand collaborations. A creator should never feel like a row in a spreadsheet, even if that's where they live on your side. The guide to influencer communication covers channels and response rules.",
        links: [{ text: "influencer communication", href: "/blog/influencer-communication" }],
      },
      {
        type: "table",
        headers: ["Message type", "Send to", "Channel"],
        rows: [
          ["Brief, FAQ updates, schedule changes", "Whole group or wave", "Email, with a short chat nudge"],
          ["Shipping and tracking details", "Each creator", "Their preferred chat app"],
          ["Draft feedback", "Each creator", "One consolidated message"],
          ["Fee, rights or scope changes", "Each creator (and manager)", "Email, confirmed in writing"],
        ],
      },
      {
        type: "discovery-cta",
        headline: "Keep Backups Ready for Every Wave",
        body: "Creators drop out, fall ill or get double-booked. Kudozz Discovery lets you save researched Instagram creators into named lists per wave, region or language, so a replacement is a few clicks away instead of a fresh search.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      {
        type: "paragraph",
        text: "Discovery is only the finding stage. Agreements, shipping, reviews and payments still run through your tracker and your team. If you need to replace someone mid-campaign, the influencer shortlisting guide explains how to keep a ranked backup list.",
        links: [{ text: "influencer shortlisting guide", href: "/blog/influencer-shortlist" }],
      },
      { type: "heading", text: "Run reviews and approvals at volume", id: "approvals" },
      {
        type: "paragraph",
        text: "Draft review is where multi-creator campaigns usually jam. Set a rule that all reviewers comment in one place by a fixed time, one person consolidates, and the creator gets one clear message. Agree two rounds of revisions in the contract and stick to them. Check every draft against the same short list:",
      },
      {
        type: "list",
        items: [
          "Key message landed, in the creator's own words.",
          "No claims beyond the approved list.",
          "Disclosure label present and visible.",
          "Correct link, code and tags.",
          "Product shown correctly (right variant, packaging, usage).",
          "Specs met: length, aspect ratio, captions if required.",
        ],
      },
      {
        type: "paragraph",
        text: "The creator content approval process guide sets out roles and turnaround times; the influencer content quality check covers what to inspect before you approve.",
        links: [
          { text: "creator content approval process", href: "/blog/influencer-content-approval" },
          { text: "influencer content quality check", href: "/blog/influencer-content-quality-check" },
        ],
      },
      { type: "heading", text: "Plan go-lives deliberately", id: "go-lives" },
      {
        type: "table",
        headers: ["Pattern", "How", "Use for"],
        rows: [
          ["Synchronised burst", "Many creators post within a short window", "Launches, sale days, embargoed announcements"],
          ["Staggered", "Posts spread over days or weeks", "Sustained presence; avoiding audience fatigue"],
          ["Waves", "Groups post in planned phases", "Testing then scaling; regional rollouts"],
          ["Always-on", "A stable group posts on a regular rhythm", "Retainers and ambassador programmes"],
        ],
      },
      {
        type: "paragraph",
        text: "Bursts need the most coordination: drafts approved several days early, embargo instructions in writing, and a go-live checklist for the day. For staggered schedules, keep a simple calendar view so you can see if three creators with overlapping audiences are about to post on the same evening.",
      },
      { type: "heading", text: "Coordinating across languages and regions", id: "languages-regions" },
      {
        type: "list",
        items: [
          "Write one core brief, then localise it per language and have a native speaker check it.",
          "Make sure someone who understands each language reviews drafts for claims and disclosure.",
          "Ship to farther regions first so everyone has product for the same number of days.",
          "Check regional festivals and local events before fixing go-live dates; a date that suits Hyderabad may clash with a festival in Chennai.",
          "Report results by language and region as well as overall, so the next mix can shift toward what worked.",
        ],
      },
      {
        type: "paragraph",
        text: "For campaigns running across many states at once, the guide to running a pan-India influencer marketing campaign covers multi-market planning in more depth.",
        links: [{ text: "running a pan-India influencer marketing campaign", href: "/blog/pan-india-influencer-marketing-campaign" }],
      },
      { type: "heading", text: "Log rights, disclosure and payments per creator", id: "rights-payments" },
      {
        type: "paragraph",
        text: "With many creators, small differences in agreements are easy to lose. One creator granted 90 days of paid usage, another only organic reposting; one invoices on delivery, another monthly. Keep a rights log (asset, platforms, start date, expiry) and a payment log (invoice received, due date, paid date) next to the tracker, and check both before anyone reuses content or closes a creator. The influencer usage rights guide explains how to word rights so the log stays simple.",
        links: [{ text: "influencer usage rights guide", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "A weekly rhythm for live campaigns", id: "rhythm" },
      {
        type: "table",
        headers: ["When", "What", "Who"],
        rows: [
          ["Daily, morning", "Update statuses; chase overdue drafts and confirmations", "Creator owners"],
          ["Daily, fixed slots", "Review drafts; send consolidated feedback", "Approvers, then owners"],
          ["Daily, after go-lives", "Check posts, disclosure and links; answer comments", "Community or campaign lead"],
          ["Twice a week", "Collect Insights screenshots; update results", "Campaign lead"],
          ["Weekly", "Review blockers, budget, backups and next wave", "Campaign lead and approver"],
        ],
      },
      {
        type: "paragraph",
        text: "How many creators one person can handle depends on deliverables, languages and how much hand-holding creators need, so treat any ratio as a rule of thumb. If owners can't keep statuses current daily, they have too many creators. The guide to influencer marketing team structure covers roles as programmes grow, and influencer campaign escalation covers what to do when something goes wrong mid-campaign.",
        links: [
          { text: "influencer marketing team structure", href: "/blog/influencer-marketing-team-structure" },
          { text: "influencer campaign escalation", href: "/blog/influencer-campaign-escalation" },
        ],
      },
      { type: "heading", text: "A worked example", id: "example" },
      {
        type: "paragraph",
        text: "Back to the Hyderabad home-decor brand. Its thirty creators are split into two waves of fifteen, each with a Telugu, Tamil and Hindi-English group. Wave 1 gets one kickoff call per language, a shared FAQ and product shipped to Chennai and Delhi first. Drafts are due on a Thursday; the two approvers review at 11am and 5pm, and one campaign executive sends consolidated feedback. Wave 1 posts are staggered across five evenings. Two creators drop out before shipping, and backups from the saved list are confirmed within a day. By the time wave 2 starts, the FAQ has answered most colour and size questions in advance, and reviews take noticeably less time.",
      },
      { type: "heading", text: "Close out cleanly", id: "close-out" },
      {
        type: "list",
        items: [
          "Collect final Insights from every creator by an agreed date.",
          "Pay on schedule and mark each payment in the log.",
          "Record rights expiry dates and set reminders.",
          "Send each creator a short results note and thank-you.",
          "Write one paragraph per creator on what worked and whether to rebook.",
          "Archive briefs, approvals and final files in one folder per campaign.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Managing creators across personal chats with no shared tracker.",
          "Letting several reviewers message creators directly with conflicting feedback.",
          "Shipping everything on the same day regardless of distance, so far-away creators get product late.",
          "Approving drafts on the go-live day.",
          "Not checking posts after they go live for disclosure, links and tags.",
          "Treating every creator identically when some need much more guidance than others.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Managing many influencer collaborations at once is mostly about standardising the repeatable parts so you have time for the personal ones. One tracker, clear statuses, grouped work, batched reviews, deliberate go-lives and clean records will carry a campaign from ten creators to fifty without chaos. If you'd rather hand the day-to-day to a team, Kudozz's social campaigns service runs multi-creator campaigns end to end.",
        links: [{ text: "social campaigns service", href: "/services/social-campaigns" }],
      },
    ],
    faqs: [
      {
        question: "Should all creators post on the same day?",
        answer:
          "Only when the moment demands it, such as a launch, sale day or embargo lift. Otherwise staggering posts keeps the brand visible for longer and avoids followers of several creators seeing the same product repeatedly in one evening.",
      },
      {
        question: "Is a WhatsApp group with all creators a good idea?",
        answer:
          "Usually not. Creators don't always want their numbers shared, questions get lost, and one person's issue becomes everyone's noise. Use individual threads for conversation and a shared FAQ document or broadcast-style updates for information everyone needs.",
      },
      {
        question: "What tool should we use to track multiple creators?",
        answer:
          "A shared spreadsheet with fixed statuses works well for most campaigns. Dedicated campaign management software helps when many people manage many creators at once. The discipline of updating statuses daily matters more than the tool.",
      },
      {
        question: "What do we do if a creator misses their go-live date?",
        answer:
          "Find out why first, then agree a new date in writing. If the post was tied to a fixed moment, such as a sale day, decide quickly whether to move the slot to a backup creator. Your contract should say what happens to fees if deliverables slip.",
      },
      {
        question: "How do we keep feedback consistent across many drafts?",
        answer:
          "Use one short checklist for every draft, review in fixed slots, and have one person consolidate comments before anything goes to a creator. Share common fixes through the FAQ so later drafts avoid them.",
      },
    ],
  },

  // #60 what-to-do-after-finding-influencers (NEW, bridge/hub)
  {
    slug: "what-to-do-after-finding-influencers",
    category: "Influencer Marketing",
    title: "What Should Brands Do After Finding the Right Influencers?",
    seoTitle: "What to Do After Finding Influencers: 9 Steps | Kudozz",
    excerpt:
      "You have a shortlist. Now what? The nine stages between finding creators and a repeat collaboration, what each one involves, when it's done, and where to read more.",
    metaDescription:
      "After finding influencers: verify, reach out, brief, negotiate, sign usage rights, onboard, approve content, track results and build the relationship.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["After Influencer Discovery", "Influencer Campaign Steps", "Creator Collaboration", "India"],
    related: ["how-to-contact-influencers", "influencer-campaign-brief", "influencer-relationship-management", "influencer-shortlist"],
    hero: {
      src: "/blog/discovery/what-to-do-after-finding-influencers.svg",
      alt: "A route from a highlighted discovery stage through nine numbered stages: verify, outreach, brief, negotiate, contract, onboard, approve, track and relationship",
    },
    discoveryCta: {
      headline: "Ready to Find Creators for Your Next Campaign?",
      body: "Explore Kudozz Discovery to research Instagram creators in India and build a relevant shortlist. It covers the discovery stage; the steps in this guide are where your team or agency takes over.",
    },
    body: [
      {
        type: "paragraph",
        text: "You've done the searching. There's a list of creators who look right: the niche fits, the content is good, the engagement seems healthy. What happens next is where many brands lose momentum. Messages go out without a clear offer, terms get agreed over chat, nobody owns approvals, and by the time content goes live the campaign has drifted from what it was meant to do.",
      },
      {
        type: "paragraph",
        text: "This is a map of the stages between finding influencers and a repeat collaboration. Each stage is kept short, with what it involves, when it's done, and a link to the full guide.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "After finding the right influencers, a brand should: verify each finalist properly, contact them with a specific offer, share a clear brief, negotiate fees and terms, put the agreement and usage rights in writing, onboard creators with product and assets, review and approve content against a checklist, track results against the objective, and then decide which creators to build a longer relationship with.",
      },
      { type: "heading", text: "Where Kudozz Discovery stops", id: "discovery-scope" },
      {
        type: "paragraph",
        text: "Kudozz Discovery is built for the stage before this guide: searching and filtering Instagram creators in India, opening creator profiles, saving them into lists, and revealing contact details with credits. It doesn't send outreach, negotiate, hold contracts, manage campaigns, pay creators or report on results. Everything below is done by your team, with whatever tools you already use, or by an agency.",
        links: [
          {
            text: "Kudozz Discovery",
            href: "https://discover.kudozz.in/?utm_source=kudozz_website&utm_medium=blog&utm_campaign=discovery_content&utm_content=what-to-do-after-finding-influencers",
          },
        ],
      },
      {
        type: "table",
        headers: ["Stage", "What you do", "Done when", "Full guide"],
        rows: [
          ["1. Verify", "Final checks on content, audience and fit", "Each finalist passes or is dropped", "Things to check before selecting"],
          ["2. Outreach", "Contact with a specific offer", "Creator replies with interest and rates", "How to contact influencers"],
          ["3. Brief", "Share objective, message and must-haves", "Creator confirms they can deliver", "Influencer campaign brief"],
          ["4. Negotiate", "Agree fee, deliverables and timing", "Terms accepted by both sides", "Negotiating influencer rates"],
          ["5. Contract and rights", "Written agreement incl. usage rights", "Signed by both sides", "Influencer usage rights"],
          ["6. Onboard", "Product, assets, FAQ, dates", "Creator has everything to start", "Influencer onboarding"],
          ["7. Approve", "Review drafts against a checklist", "Final approved in writing", "Content approval process"],
          ["8. Track", "Links, codes, Insights, comments", "Results logged against the KPI", "Influencer marketing report"],
          ["9. Relationship", "Pay, share results, decide on rebooking", "Record updated; next step chosen", "Relationship management"],
        ],
      },
      { type: "heading", text: "1. Verify your finalists", id: "verify" },
      {
        type: "paragraph",
        text: "A discovery tool's numbers are a first filter, not proof. Before you reach out, watch several recent posts, read the comments, look at how past brand content was handled, and note anything that clashes with your brand. Ask finalists for audience insights screenshots (top cities, age range, gender split) once they're interested. The full list is in the 15 things to check before selecting an influencer, and the guide to spotting fake followers and suspicious engagement covers authenticity.",
        links: [
          { text: "15 things to check before selecting an influencer", href: "/blog/things-to-check-before-selecting-influencers" },
          { text: "spotting fake followers and suspicious engagement", href: "/blog/how-to-identify-fake-followers" },
        ],
      },
      { type: "heading", text: "2. Reach out with a specific offer", id: "outreach" },
      {
        type: "paragraph",
        text: "The first message should say who you are, why this creator, what you're proposing (paid, gifting, UGC or longer term), and the rough timing. Use a professional channel: the email in their bio or a revealed contact, not repeated DMs. If there's no reply, one or two polite follow-ups are fine. See how to contact influencers for channels, influencer collaboration email examples for wording, and the guide to following up with influencers for timing.",
        links: [
          { text: "how to contact influencers", href: "/blog/how-to-contact-influencers" },
          { text: "influencer collaboration email examples", href: "/blog/influencer-outreach-email" },
          { text: "following up with influencers", href: "/blog/influencer-follow-up" },
        ],
      },
      { type: "heading", text: "3. Share a clear brief", id: "brief" },
      {
        type: "paragraph",
        text: "Once a creator is interested, send a brief before you negotiate details, so the fee reflects the actual work. Include the objective, the one message, proof points, claims they can't make, the deliverables, dates and the disclosure requirement. Leave room for their style. What to include is covered in the guide to writing an influencer marketing brief.",
        links: [{ text: "writing an influencer marketing brief", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "heading", text: "4. Negotiate fees and terms", id: "negotiate" },
      {
        type: "paragraph",
        text: "Discuss the full package, not just the fee: deliverables, revision rounds, usage rights, exclusivity, timelines and payment terms all affect the price. Be clear about your budget and flexible on structure: if the fee is above range, adjusting deliverables or usage terms is often better than asking for a straight discount. The guide on how to negotiate influencer rates covers tactics that keep the relationship intact.",
        links: [{ text: "how to negotiate influencer rates", href: "/blog/negotiate-influencer-rates" }],
      },
      {
        type: "discovery-cta",
        headline: "Need a Backup Before You Negotiate?",
        body: "If a finalist declines or the numbers don't work, you don't have to start over. Kudozz Discovery keeps your saved creator lists, so you can go back to researched alternatives or search again by niche, city and engagement.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "5. Put the agreement and usage rights in writing", id: "contract-rights" },
      {
        type: "paragraph",
        text: "Even small collaborations need a written agreement: deliverables, dates, fee, payment terms, revision rounds, disclosure, takedown terms and usage rights. Usage rights deserve their own line: which assets, which platforms, organic or paid, and for how long. The influencer marketing contract guide covers clauses; the influencer usage rights guide covers reuse.",
        links: [
          { text: "influencer marketing contract guide", href: "/blog/influencer-marketing-contract" },
          { text: "influencer usage rights guide", href: "/blog/influencer-usage-rights" },
        ],
      },
      { type: "heading", text: "6. Onboard creators properly", id: "onboard" },
      {
        type: "paragraph",
        text: "Send product early enough for honest use, plus brand assets, the FAQ, links and codes, and a single contact. Confirm draft and go-live dates. The guide to influencer onboarding has a full checklist.",
        links: [{ text: "influencer onboarding", href: "/blog/influencer-onboarding" }],
      },
      { type: "heading", text: "7. Review and approve content", id: "approve" },
      {
        type: "paragraph",
        text: "Review drafts against a short checklist (message, claims, disclosure, links, product shown correctly), consolidate feedback into one message, and respect the agreed revision rounds. Approve the final version in writing. The creator content approval process walks through roles and turnaround times. If you're running many creators at once, the guide to managing multiple influencer collaborations covers trackers and review slots.",
        links: [
          { text: "creator content approval process", href: "/blog/influencer-content-approval" },
          { text: "managing multiple influencer collaborations", href: "/blog/influencer-campaign-coordination" },
        ],
      },
      { type: "heading", text: "8. Track results against your objective", id: "track" },
      {
        type: "paragraph",
        text: "Set up unique links and codes before go-live, collect Insights screenshots on agreed days, and watch comments for product questions. Measure against the KPI you chose at the planning stage, not whatever number looks best afterwards. The guide to influencer marketing reports shows how to structure the results so they inform the next campaign.",
        links: [{ text: "influencer marketing reports", href: "/blog/influencer-marketing-report" }],
      },
      {
        type: "list",
        items: [
          "Before go-live: test every link and code, and note your normal daily sales and traffic as a baseline.",
          "First 48 hours: check each post for disclosure, links and tags; answer product questions in comments.",
          "Day 3 and day 7: collect Insights screenshots (reach, views, saves, link taps).",
          "After the offer window: compare code uses and attributed orders against the baseline.",
        ],
      },
      { type: "heading", text: "9. Pay, share results and build the relationship", id: "relationship" },
      {
        type: "paragraph",
        text: "Pay on the agreed date, send each creator a short results note, log rights expiry dates, and decide who to rebook. The best creators from this round are the start of your bench for the next. The guide to building long-term relationships with influencers covers records, feedback and repeat structures.",
        links: [{ text: "building long-term relationships with influencers", href: "/blog/influencer-relationship-management" }],
      },
      { type: "heading", text: "Who owns each stage", id: "ownership" },
      {
        type: "paragraph",
        text: "Say a Chennai filter-coffee brand has a shortlist of twelve creators and a two-person marketing team. Splitting ownership early stops stages from falling between people:",
      },
      {
        type: "table",
        headers: ["Stage", "Typical owner in a small team", "Needs sign-off from"],
        rows: [
          ["Verify and outreach", "Marketing executive", "Marketing lead (final list)"],
          ["Brief", "Marketing executive", "Marketing lead; product team for claims"],
          ["Negotiate and contract", "Marketing lead", "Founder or finance (budget)"],
          ["Onboard and approve", "Marketing executive", "Marketing lead (final drafts)"],
          ["Track, pay and review", "Marketing executive", "Finance (payments)"],
        ],
      },
      {
        type: "paragraph",
        text: "In a larger team or with an agency, the names change but the principle doesn't: every stage has one owner and one approver, written down before the first message goes out.",
      },
      { type: "heading", text: "A handover checklist from discovery to execution", id: "handover-checklist" },
      {
        type: "template",
        label: "Before outreach starts, confirm:",
        text: "[ ] Campaign objective and primary KPI written down\n[ ] Shortlist approved, with 1-2 backups per slot\n[ ] Research notes saved for each creator (why chosen, risks)\n[ ] Contact details recorded where lawfully obtained\n[ ] Offer type decided per creator (paid / gifting / UGC / long-term)\n[ ] Budget range per creator agreed internally\n[ ] Brief drafted and usage rights needs listed\n[ ] Owner named for each creator; approvers named\n[ ] Tracker set up with statuses\n[ ] Disclosure requirement included in brief and agreement",
      },
      {
        type: "paragraph",
        text: "If you haven't written the plan yet, the guide to creating an influencer campaign plan from scratch fills in these items in the right order.",
        links: [{ text: "creating an influencer campaign plan from scratch", href: "/blog/how-to-create-a-successful-influencer-marketing-campaign" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Reaching out before deciding what you're offering, so the first reply turns into a guessing game.",
          "Negotiating a fee before sharing the brief, then adding work afterwards.",
          "Agreeing everything on chat with no written agreement.",
          "Leaving usage rights out and discovering the gap when you want to run an ad.",
          "Assuming discovery-stage metrics are enough verification.",
          "Dropping contact after payment and starting from scratch next campaign.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding the right influencers is the start, not the finish. The nine stages after it decide whether a good shortlist turns into good content, measurable results and creators who want to work with you again. Use this map to see what's next, then go deep on the stage in front of you. For a team that handles outreach and creator management for you, see Kudozz's outreach management service.",
        links: [{ text: "outreach management service", href: "/services/outreach-management" }],
      },
    ],
    faqs: [
      {
        question: "How long does it take to go from a shortlist to live content?",
        answer:
          "For a straightforward Instagram collaboration, often three to six weeks: a week or so for outreach and negotiation, time to agree terms and ship product, a week or two for the creator to use the product and submit drafts, and a few days for approvals. Many creators or regulated claims take longer.",
      },
      {
        question: "Should we contact every creator on the shortlist at once?",
        answer:
          "Contact your first choices for each slot first, and keep backups warm but uncontacted until you know who has said yes. Contacting everyone at once can leave you with more acceptances than budget, which is awkward to walk back.",
      },
      {
        question: "Does Kudozz Discovery help with outreach or contracts?",
        answer:
          "No. Kudozz Discovery covers finding and researching Instagram creators in India, saving them into lists and revealing available email or phone contacts with credits. Outreach, negotiation, contracts, campaign management and payments are handled by your team or an agency.",
      },
      {
        question: "What if a creator asks for a much higher fee than expected?",
        answer:
          "Ask what's included, then see whether changing the package (fewer deliverables, shorter usage, no exclusivity) brings it within range. If it still doesn't fit, thank them, keep the door open, and move to your backup for that slot.",
      },
      {
        question: "Do gifting collaborations need a written agreement?",
        answer:
          "A short written note is still wise: what you're sending, whether posting is optional, the disclosure expectation, and whether you may reshare. It avoids misunderstandings and makes disclosure clear, since gifted content generally needs labelling under ASCI's guidelines too.",
      },
    ],
  },
];
