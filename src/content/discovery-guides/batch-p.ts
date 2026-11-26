import type { BlogPost } from "@/content/blog";

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };

export const discoveryBatchP: BlogPost[] = [
  // #76 always-on-influencer-marketing (UPGRADE, orig 2026-09-30)
  {
    slug: "always-on-influencer-marketing",
    category: "Campaign Strategy",
    title: "How to Build an Always-On Influencer Marketing Programme for Your Brand",
    seoTitle: "Always-On Influencer Marketing Programme Guide | Kudozz",
    excerpt:
      "An always-on influencer marketing programme replaces stop-start campaigns with a steady operating model: a creator roster, a discovery cadence, a 12-month calendar and recurring content. Here's how to set one up.",
    metaDescription:
      "Always-on influencer marketing explained: a creator roster, a monthly discovery cadence, a 12-month calendar, recurring content and a run-rate budget.",
    author: AUTHOR,
    publishedAt: "2026-09-30",
    updatedAt: "2026-11-26",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Always-On Influencer Marketing", "Creator Programme", "Content Calendar", "India"],
    related: ["influencer-partnerships", "always-on-ugc-marketing", "influencer-sourcing-workflow", "influencer-campaign-calendar"],
    hero: {
      src: "/blog/discovery/always-on-influencer-marketing.svg",
      alt: "A monthly loop of plan, produce, publish and learn around a core creator roster, fed by a weekly discovery cadence and topped by seasonal peaks",
    },
    discoveryCta: {
      headline: "Plan Next Month's Creator Additions",
      body: "Explore Kudozz Discovery to research Instagram creators in India by niche, city, language and engagement, and keep a saved list of candidates ready for your next test slot or festive peak. Your team handles outreach, contracts and measurement.",
    },
    body: [
      {
        type: "paragraph",
        text: "Picture a Kochi-based Ayurvedic haircare brand that works with creators three times a year: a launch in spring, Onam, then Diwali. Each time, the team searches for creators from scratch, negotiates from scratch and briefs from scratch. Between bursts the brand disappears from its customers' feeds, and the creators who did good work have moved on to other labels.",
      },
      {
        type: "paragraph",
        text: "Always-on influencer marketing is the alternative: a programme that keeps creators talking about your brand every month, on a planned rhythm, with the same people getting better at the work over time. This guide covers the operating model behind it: how often to discover new creators, how to structure the roster and the calendar, what recurring content looks like, and how to budget and measure a programme that never formally ends.",
      },
      {
        type: "paragraph",
        text: "It's about the programme as a whole. If you want to move one specific creator onto a longer deal, read the companion guide on turning one-time collaborations into long-term partnerships.",
        links: [{ text: "turning one-time collaborations into long-term partnerships", href: "/blog/influencer-partnerships" }],
      },
      { type: "heading", text: "What always-on influencer marketing actually means", id: "what-always-on-means" },
      {
        type: "paragraph",
        text: "An always-on programme isn't a big campaign stretched over twelve months. It's a set of habits that run continuously, with campaign peaks layered on top:",
      },
      {
        type: "table",
        headers: ["", "Campaign by campaign", "Always-on programme"],
        rows: [
          ["Creator search", "Starts from zero for each brief", "Runs on a fixed cadence, so a shortlist is always ready"],
          ["Creators", "A new set each time", "A core roster plus rotating and test creators"],
          ["Presence", "Bursts around launches and sales, silence in between", "Steady monthly presence with planned peaks"],
          ["Learning", "Each campaign judged on its own", "Results compared month on month by creator, format and message"],
          ["Budget", "One total per campaign", "A monthly run-rate plus seasonal layers"],
        ],
      },
      {
        type: "paragraph",
        text: "Programmes where creators make content for your own ads and pages, rather than posting to their audiences, are covered in always-on UGC marketing.",
        links: [{ text: "always-on UGC marketing", href: "/blog/always-on-ugc-marketing" }],
      },
      { type: "heading", text: "Are you ready to go always-on?", id: "readiness" },
      {
        type: "paragraph",
        text: "Going always-on too early locks budget into a channel that hasn't proved itself. Check these first:",
      },
      {
        type: "list",
        items: [
          "At least one campaign has produced results you can measure against a clear objective, and you know which creators and formats drove them.",
          "You have something worth saying every month: new products, use cases, routines, customer questions, seasonal angles. If you only have news twice a year, recurring campaigns may suit you better.",
          "Budget can be committed monthly or quarterly rather than approved campaign by campaign.",
          "Someone owns the programme week to week, whether that's an in-house marketer or an agency.",
          "You can reuse content in ads, on product pages or in email.",
        ],
      },
      {
        type: "paragraph",
        text: "If two or more are missing, start by rebooking your best creators for each launch; that builds the evidence you need.",
      },
      { type: "heading", text: "The four parts of the operating model", id: "operating-model" },
      {
        type: "table",
        headers: ["Part", "What it is", "The question it answers"],
        rows: [
          ["Roster", "Core, rotating and test creators with known rates, rights and renewal dates", "Who are we working with this quarter, and why?"],
          ["Discovery cadence", "A fixed rhythm for finding and vetting new creators", "Who joins or replaces someone next?"],
          ["Calendar", "Twelve months of themes, launches and seasonal peaks, broken into monthly plans", "What are creators talking about this month?"],
          ["Learning loop", "Monthly reporting that changes the next month's plan", "What will we do differently because of last month?"],
        ],
      },
      { type: "heading", text: "Structure the roster: core, rotating and test", id: "roster" },
      {
        type: "paragraph",
        text: "A programme needs continuity and freshness at the same time. Splitting the roster into three groups gives you both.",
      },
      {
        type: "table",
        headers: ["Group", "Role in the programme", "Typical arrangement"],
        rows: [
          ["Core creators", "The recognisable faces of the brand, with the deepest product knowledge", "Multi-month agreements or retainers with monthly deliverables"],
          ["Rotating creators", "New audiences, fresh angles, seasonal and regional coverage", "Booked campaign by campaign when the brief suits them"],
          ["Test creators", "Trying new niches, cities, languages or formats", "A small reserved slot each month on one-off terms"],
        ],
      },
      {
        type: "paragraph",
        text: "Movement between the groups is the point. Test creators who deliver move into rotation; rotation creators who keep delivering are offered longer terms; core creators whose results fade over several months, not after one weak post, are rotated out with thanks. How you treat creators between bookings matters as much as the bookings themselves, which is what influencer relationship management covers.",
        links: [{ text: "influencer relationship management", href: "/blog/influencer-relationship-management" }],
      },
      { type: "heading", text: "Build a continuous discovery cadence", id: "discovery-cadence" },
      {
        type: "paragraph",
        text: "The roster shrinks on its own. Creators raise rates, change direction, sign exclusivity with a competitor or simply get busy. If discovery only happens in a panic, you end up booking whoever is free. Put it on the calendar instead:",
      },
      {
        type: "table",
        headers: ["Cadence", "Discovery task", "Output"],
        rows: [
          ["Weekly (an hour or two)", "Search for new creators against the current gaps: a niche, a city, a language", "New candidates added to a saved list"],
          ["Monthly", "Vet the best candidates: recent content, engagement quality, comments, brand fit, past sponsorships", "A few creators ready for next month's test slots"],
          ["Quarterly", "Plan the next quarter's needs: new markets, upcoming launches, festive peaks", "A short brief for each gap and a backup for every core creator"],
          ["Ahead of each peak", "Book seasonal creators before their calendars fill", "Confirmed creators for festive periods, sale events and launches"],
        ],
      },
      {
        type: "paragraph",
        text: "Write the steps down so anyone on the team can run them. A repeatable influencer sourcing workflow sets out the intake form, stages and turnaround targets, and the guide to building an influencer shortlist covers the vetting step. Also watch for creators growing quickly in your niche; knowing how to find emerging influencers often gets you better fit at fairer rates.",
        links: [
          { text: "repeatable influencer sourcing workflow", href: "/blog/influencer-sourcing-workflow" },
          { text: "building an influencer shortlist", href: "/blog/influencer-shortlist" },
          { text: "how to find emerging influencers", href: "/blog/how-to-find-emerging-influencers" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Keep Your Always-On Roster Topped Up",
        body: "Kudozz Discovery lets you search Instagram creators in India by niche, city, language, engagement and posting frequency, and save candidates into a named list for each month's gaps. Vetting, outreach and contracts stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Plan a 12-month calendar with a monthly rhythm", id: "calendar" },
      {
        type: "paragraph",
        text: "Think of the calendar in two layers. The base layer is steady monthly content from core creators. The peak layer sits on top: launches, festive periods such as Raksha Bandhan, Navratri and Diwali, wedding season, end-of-season sales and the big marketplace sale events. Peaks should add to the base rather than replace it, so your presence doesn't vanish in the quiet months.",
      },
      {
        type: "template",
        label: "Monthly programme rhythm",
        text: "Week 1    Plan: confirm the month's theme and launches, send short briefs to core creators, review last month's report\nWeek 2    Produce: core creator drafts and approvals; ship product to rotating and test creators\nWeek 3    Publish: stagger go-lives through the month rather than on one day; reuse or amplify last month's best content where rights allow\nWeek 4    Test and learn: test creators go live; collect results; note what to change\nMonthly   Report: results by creator, format and message, ending in three decisions for next month\nQuarterly Review: roster moves, budget shifts, next quarter's themes and peak bookings",
      },
      {
        type: "paragraph",
        text: "Seasonal influencer marketing in India walks through the festive calendar in detail, and the guide to building an influencer campaign calendar shows how to map launches, approvals and go-live dates in one view. For the busiest periods, start finding influencers for seasonal campaigns a couple of months ahead.",
        links: [
          { text: "Seasonal influencer marketing in India", href: "/blog/seasonal-influencer-marketing-india" },
          { text: "building an influencer campaign calendar", href: "/blog/influencer-campaign-calendar" },
          { text: "finding influencers for seasonal campaigns", href: "/blog/find-influencers-seasonal-campaigns" },
        ],
      },
      { type: "heading", text: "Recurring content that keeps your presence consistent", id: "recurring-content" },
      {
        type: "paragraph",
        text: "Consistency doesn't mean the same post every month. It means recognisable series that audiences come to expect, with enough variety inside them that nobody gets bored. Formats that tend to work on a recurring basis:",
      },
      {
        type: "list",
        items: [
          "Routine content: how the product fits into a creator's morning, workout, commute or cooking week.",
          "Month-in-use updates: a creator coming back to a product after weeks of genuine use, something a one-off post can't do.",
          "Customer-question answers: core creators taking the questions your support team hears most and answering them on camera.",
          "Seasonal editions: the same series adapted for festive gifting, monsoon or exam season.",
          "Regional versions: the core message reinterpreted by creators in other languages and cities.",
        ],
      },
      {
        type: "paragraph",
        text: "Give core creators a standing brand guide (tone, product facts, approved claims, disclosure wording, things never to say) so that monthly briefs can be a few lines long. However familiar a creator is with the brand, every paid post still needs a clear disclosure label under ASCI's influencer advertising guidelines. Track usage rights per asset, with expiry dates, so the best pieces can move into ads and product pages only on agreed terms.",
      },
      { type: "heading", text: "Relationships are the engine", id: "relationships" },
      {
        type: "paragraph",
        text: "The programme works because the same creators get better at your brand over time, and that depends on how they're treated: paid on the agreed date, shown their results, given consolidated feedback, offered early access and reviewed fairly at renewal. Who deserves longer terms, and how to structure those deals, is covered in the companion partnerships guide linked above.",
      },
      { type: "heading", text: "Budget as a monthly run-rate", id: "budget" },
      {
        type: "paragraph",
        text: "A campaign budget is one total spent against one brief and judged at the end. An always-on budget is a recurring commitment, spent month by month against a content cadence and reallocated at every review. Build it from the cadence up:",
      },
      {
        type: "list",
        items: [
          "Start with output: how many pieces of creator content the programme needs each month, and where they'll run.",
          "Assign that output to the roster: core creators on monthly terms, rotating creators for reach, a small test slot.",
          "Price the core with retainer or multi-month quotes, and rotating and test creators per deliverable. Committed volume often earns a better per-post rate, but it varies by creator, so ask rather than assume.",
          "Add the non-creator lines: programme management, product and shipping, usage-rights renewals, amplification of the best content, and reporting.",
          "Plan peaks as separate layers on top of the base, so a busy festive quarter doesn't quietly drain the months after it.",
        ],
      },
      {
        type: "paragraph",
        text: "How to split a fixed amount across creators and budget lines is covered in how to allocate your influencer marketing budget. Commit core agreements a quarter at a time with clear exit terms, so the budget stays flexible enough to act on what each review shows.",
        links: [{ text: "how to allocate your influencer marketing budget", href: "/blog/influencer-budget-allocation" }],
      },
      { type: "heading", text: "Measure the programme, not just the posts", id: "measurement" },
      {
        type: "table",
        headers: ["Cadence", "What to look at", "Decisions it should produce"],
        rows: [
          ["Weekly", "What went live, what's late, early signals", "Chase delays; swap a late creator for a backup"],
          ["Monthly", "Results by creator, format and message against the primary KPI; content reused; spend against plan", "Which series continue, which test creators move into rotation"],
          ["Quarterly", "Business outcomes such as new customers, branded search and repeat purchase; cost-per-result trends; signs of audience fatigue", "Roster changes, budget moves between lines, next quarter's themes"],
        ],
      },
      {
        type: "paragraph",
        text: "Judge core creators on the trend across months rather than a single post; a gentle decline over a quarter usually means the series needs a new angle. A consistent influencer marketing report format keeps these reviews quick and comparable.",
        links: [{ text: "influencer marketing report", href: "/blog/influencer-marketing-report" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Keeping the same creators indefinitely with no test slot, so learning stops and audiences tire.",
          "Letting discovery lapse until a core creator drops out, then booking whoever is available.",
          "Monthly reports that list posts but don't change anything.",
          "Losing track of usage-rights expiry dates, so good content either can't be reused or is reused without permission.",
          "Treating festive peaks as the whole programme and going quiet in between.",
          "Asking core creators for so many brand posts that their feed starts to read like an advert.",
        ],
      },
      { type: "heading", text: "Your first 90 days", id: "first-90-days" },
      {
        type: "paragraph",
        text: "You don't need the full machine on day one. A sensible first quarter:",
      },
      {
        type: "list",
        items: [
          "Month 1: pick a provisional core from past campaigns, write the standing brand guide, block a weekly discovery slot and draft the 12-month calendar.",
          "Month 2: run the first monthly rhythm, add two or three test creators, start the rights log and produce the first monthly report.",
          "Month 3: hold the first quarterly review, confirm or change the core, book creators for the next peak and adjust the budget lines.",
        ],
      },
      {
        type: "paragraph",
        text: "When the programme outgrows what one person can run, the guide on how to scale influencer marketing covers workflows, roles and quality control. If you'd rather have a team run the programme alongside you, Kudozz's influencer marketing services cover planning, creator management and reporting.",
        links: [
          { text: "how to scale influencer marketing", href: "/blog/how-to-scale-influencer-marketing" },
          { text: "influencer marketing services", href: "/services/influencer-marketing" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is always-on influencer marketing?",
        answer:
          "It's a continuous creator programme rather than a series of separate campaigns. A brand keeps a roster of core, rotating and test creators, discovers new creators on a fixed cadence, publishes on a monthly rhythm and uses each month's results to plan the next. Launches and festive peaks are layered on top of that steady base.",
      },
      {
        question: "How many creators does an always-on programme need?",
        answer:
          "There's no fixed number; it depends on your monthly content needs, markets and budget. Many brands start with a small core drawn from past campaigns, a few rotating creators and a test slot, then grow once monthly reporting shows what works.",
      },
      {
        question: "How often should we look for new creators?",
        answer:
          "Put discovery on a schedule: a short weekly search against current gaps, a monthly vetting round and a quarterly planning session ahead of launches and festive peaks. That keeps a backup ready for every core creator.",
      },
      {
        question: "Is always-on the same as a brand ambassador programme?",
        answer:
          "No. An ambassador programme is a formal long-term arrangement with specific creators. An always-on programme is the wider operating model: roster, discovery cadence, calendar, budget and reporting. Ambassadors can sit in the core roster, but the programme also includes rotating and test creators.",
      },
      {
        question: "How do we stop audiences getting bored of the same creators?",
        answer:
          "Use recurring series with variety inside them and keep a test slot for fresh creators. Watch each core creator's results over a quarter; a steady decline is a signal to refresh the series or rotate the creator.",
      },
    ],
  },

  // #77 influencer-partnerships (UPGRADE, orig 2026-09-17)
  {
    slug: "influencer-partnerships",
    category: "Influencer Marketing",
    title: "How to Turn One-Time Influencer Collaborations Into Long-Term Partnerships",
    seoTitle: "Long-Term Influencer Partnerships: A Brand Guide | Kudozz",
    excerpt:
      "Most brands finish a campaign with a few creators they'd happily work with again, then do nothing about it. Here's how to choose who to keep, what to offer them and what to put in the contract.",
    metaDescription:
      "Long-term influencer partnerships: decide which creators to keep, choose repeat bookings, retainers or ambassador deals, and agree term, rights and exit.",
    author: AUTHOR,
    publishedAt: "2026-09-17",
    updatedAt: "2026-11-26",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Long-Term Influencer Partnerships", "Creator Retainers", "Influencer Contracts", "Ambassador Programmes"],
    related: ["influencer-relationship-management", "creator-retainer-deals", "brand-ambassador-program", "always-on-influencer-marketing"],
    hero: {
      src: "/blog/discovery/influencer-partnerships.svg",
      alt: "Creators from a one-time campaign pass through a keep-or-not filter of results, reliability and brand fit, then branch into repeat bookings, a retainer or an ambassador deal",
    },
    discoveryCta: {
      headline: "Pick Better First Collaborators",
      body: "Every long-term partner starts as a first collaboration. Explore Kudozz Discovery to find Instagram creators in India by niche, city, language and engagement, and save the strongest candidates for your next trial.",
    },
    body: [
      {
        type: "paragraph",
        text: "A Hyderabad-based home-fragrance brand wraps its Diwali campaign with fourteen creators. Three stood out: their videos explained the product well, their comments were full of buying questions, and working with them was easy. The other eleven did what was asked. The question every brand faces at this point is simple to ask and easy to get wrong: who do we keep, and what do we offer them?",
      },
      {
        type: "paragraph",
        text: "This guide covers that decision: converting one-time collaborations into long-term influencer partnerships by choosing the right creators, setting expectations, picking an offer structure and agreeing contract terms. It sits between two related guides. The day-to-day care of creator relationships, such as communication, records and feedback, is covered in influencer relationship management. What creators themselves look for in a recurring deal is covered in creator retainer deals, which is worth reading before you make an offer.",
        links: [
          { text: "influencer relationship management", href: "/blog/influencer-relationship-management" },
          { text: "creator retainer deals", href: "/blog/creator-retainer-deals" },
        ],
      },
      { type: "heading", text: "Four levels of working together", id: "partnership-levels" },
      {
        type: "table",
        headers: ["Level", "What it looks like", "Commitment", "Best for"],
        rows: [
          ["One-time collaboration", "One brief, one set of deliverables", "None beyond the campaign", "Testing creators, formats and messages"],
          ["Repeat bookings", "A separate agreement each time you rebook", "Low; terms reset each time", "Checking that a good first result repeats"],
          ["Retainer", "Agreed deliverables each month or quarter for a set fee", "Medium; a minimum term and notice period", "Proven creators and a steady content need"],
          ["Ambassador", "A longer, broader role: launches, product input, often narrow exclusivity", "High; a longer term and less freedom for the creator", "Creators who genuinely use the product and represent it well"],
        ],
      },
      {
        type: "paragraph",
        text: "Most partnerships should move up one level at a time. Jumping from a single campaign straight to an ambassador contract puts all the risk of an untested pairing into a much larger agreement.",
      },
      { type: "heading", text: "Decide who to keep", id: "who-to-keep" },
      {
        type: "paragraph",
        text: "Don't decide on gut feel, or on whoever the team enjoyed talking to. Score every creator from the campaign on the same criteria, then read their content and comments before deciding.",
      },
      {
        type: "table",
        headers: ["Criterion", "Questions to ask"],
        rows: [
          ["Results against the KPI", "Did their content move the metric the campaign was built around, read in the context of their tier and format?"],
          ["Content quality", "Did they land the key message accurately, in their own style?"],
          ["Audience response", "Were the comments real questions about the product, or generic emojis? Did people save and share?"],
          ["Reliability", "Deadlines met, revisions handled well, disclosure done properly?"],
          ["Brand fit over time", "Does their older and more recent content sit comfortably with your brand and category?"],
          ["Interest from their side", "Did they show interest in the product beyond the deliverable?"],
        ],
      },
      {
        type: "paragraph",
        text: "A creator performance scorecard keeps this consistent across team members and campaigns. Offer more only to creators who score well on both results and reliability. Strong numbers from a creator who missed deadlines and ignored the brief are a warning, not a green light.",
        links: [{ text: "creator performance scorecard", href: "/blog/creator-performance-scorecard" }],
      },
      { type: "subheading", text: "Signs a creator is ready for a longer partnership" },
      {
        type: "list",
        items: [
          "Two or more collaborations with consistent quality, not one standout post.",
          "Their content has improved as they've learned the product.",
          "Their audience keeps asking about the product weeks after the post.",
          "They've asked about upcoming launches or offered product feedback without being prompted.",
          "You have an ongoing need that their niche, city or language covers, not just one upcoming campaign.",
        ],
      },
      { type: "heading", text: "Check brand familiarity before offering more", id: "brand-familiarity" },
      {
        type: "paragraph",
        text: "A long-term partner becomes, in effect, a regular voice for your brand. Before you formalise that, make sure they understand the brand well enough to speak for it. A short call works better than a questionnaire. Talk through:",
      },
      {
        type: "list",
        items: [
          "What they think the product does best and who it's for. If their answer matches your positioning, good; if not, that's a briefing gap to fix first.",
          "Which claims they can and can't make. In beauty, health, food and finance especially, a long-term partner should know the approved claims without being reminded every time.",
          "How they like to work: preferred formats, lead times, how much creative freedom they expect.",
          "What else they're committed to: existing deals in your category, exclusivities, busy months.",
        ],
      },
      {
        type: "paragraph",
        text: "It also tells the creator you're serious, which stands out to people used to vague promises of 'more work soon'.",
      },
      { type: "heading", text: "Set clear expectations for long-term influencer partnerships", id: "expectations" },
      {
        type: "paragraph",
        text: "Long-term arrangements usually sour because each side assumed something different. Write the expectations down before discussing money.",
      },
      {
        type: "template",
        label: "Partnership expectations sheet",
        text: "Partnership: [Brand] x [Creator], [start month] to [end month]\nPurpose: what this partnership is for (e.g. monthly product education for new customers in Telangana and Andhra Pradesh)\nDeliverables per month: [e.g. 1 Reel + 3 Stories], formats, platform\nCreative freedom: what's fixed (claims, disclosure, product facts) and what's the creator's call\nBrief and approvals: brief by [date], draft by [date], up to [two] rounds of consolidated feedback\nBrand involvement: early access to launches, product feedback calls, events (if any)\nMeasurement: primary KPI, and how and when results are shared with the creator\nCommunication: named contact on each side, response times, which channel for what\nReview points: monthly check-in, quarterly review, renewal conversation by [date]",
      },
      { type: "heading", text: "Keep new candidates coming", id: "candidate-pipeline" },
      {
        type: "paragraph",
        text: "Long-term partners don't remove the need for new creators. You'll need trial creators to find the next partners, backups in case a partner leaves, and fresh faces so the brand doesn't depend on two or three voices. Keep a few one-time collaborations running alongside your partnerships, chosen for gaps your partners can't cover: a new city, a regional language, a different niche. The method is similar to sourcing influencers for a brand ambassador programme, where fit and genuine product interest matter more than reach.",
        links: [{ text: "sourcing influencers for a brand ambassador programme", href: "/blog/source-influencers-brand-ambassador-programme" }],
      },
      {
        type: "discovery-cta",
        headline: "Find the Next Creators Worth Trialling",
        body: "Kudozz Discovery helps you search Instagram creators in India by niche, city, language and engagement, and save candidates for trial collaborations into named lists. Outreach, the first brief and the partnership decision stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Choose the offer structure", id: "offer-structures" },
      {
        type: "table",
        headers: ["Structure", "How it works", "Suits", "Watch out for"],
        rows: [
          ["Repeat bookings on a calendar", "Pre-agreed slots across the year, each booked separately", "Brands with seasonal peaks; creators who prefer flexibility", "Rates and availability can change between bookings"],
          ["Retainer", "A fixed fee for a set volume of content per month or quarter", "Steady content needs and proven creators", "Content going stale; agree how briefs refresh and what happens to unused deliverables"],
          ["Ambassador", "A longer term and wider role: launches, events, product input, often narrow exclusivity", "Creators who genuinely use the product", "Exclusivity must be paid for and kept narrow"],
          ["Fee plus performance bonus", "A base fee with a bonus tied to tracked results such as code uses", "Products with trackable sales", "Bonus-only or commission-only offers rarely attract strong creators"],
          ["Product-led relationship", "New products sent without obligation; paid work when a brief fits", "Keeping warm creators close between paid campaigns", "An unposted gift is not a broken promise"],
        ],
      },
      {
        type: "paragraph",
        text: "Formal multi-creator programmes are covered in influencer ambassador programmes, and commission-led structures in influencer affiliate programmes.",
        links: [
          { text: "influencer ambassador programmes", href: "/blog/brand-ambassador-program" },
          { text: "influencer affiliate programmes", href: "/blog/influencer-affiliate-program" },
        ],
      },
      { type: "subheading", text: "Pricing a longer deal" },
      {
        type: "paragraph",
        text: "Committed volume often earns a lower per-deliverable rate than one-off bookings, but don't assume it. Exclusivity, wider usage rights and extra responsibilities such as events push the fee up. Ask the creator to quote the whole package, compare it with their one-off rate for the same work, and negotiate on the bundle rather than post by post. The guide on how to negotiate influencer rates covers the conversation itself.",
        links: [{ text: "how to negotiate influencer rates", href: "/blog/negotiate-influencer-rates" }],
      },
      { type: "heading", text: "Make the offer", id: "make-the-offer" },
      {
        type: "paragraph",
        text: "Lead with what you saw in their work, be specific about the proposal and leave room for their input.",
      },
      {
        type: "template",
        label: "Partnership offer message",
        text: "Hi [Name],\n\nThe [campaign] content you made did really well for us: [specific observation, e.g. lots of questions about refills in your comments]. We'd like to work together more regularly.\n\nWhat we have in mind:\n- [Structure, e.g. a three-month retainer]\n- [Deliverables per month]\n- [Usage, e.g. organic posting plus paid usage on Meta for an agreed period]\n- [Any exclusivity: category and period]\n- [Start date and first review point]\n\nWe'd value your view on formats and timing before anything is final. Could you share your rate for a package like this, or suggest what would work better for you?\n\n[Your name]",
      },
      { type: "heading", text: "Contract terms for a longer partnership", id: "contract-terms" },
      {
        type: "paragraph",
        text: "A long-term agreement needs more than a single-campaign contract. Cover these terms, and have the agreement reviewed by a lawyer before anyone signs:",
      },
      {
        type: "table",
        headers: ["Term", "What to agree"],
        rows: [
          ["Term and start date", "A defined period, often a few months to begin with, with a review point"],
          ["Deliverables", "Volume per period, formats, platforms, and what happens to unused deliverables"],
          ["Exclusivity", "The exact category, named competitors if needed, the period, and the fee for it"],
          ["Usage rights", "Organic reposting, paid usage and partnership ads, platforms, duration and expiry"],
          ["Approvals", "Number of revision rounds, turnaround times, who approves"],
          ["Disclosure", "How every post is labelled, in line with ASCI's influencer guidelines and the Department of Consumer Affairs' endorsement guidelines"],
          ["Payment", "Schedule (monthly, per deliverable or by milestone), invoicing, GST and tax deductions"],
          ["Renewal", "When renewal is discussed and how rates are reviewed"],
          ["Exit", "Notice period, termination for breach or conduct, and what happens to content and rights already granted"],
        ],
      },
      {
        type: "paragraph",
        text: "The influencer marketing contract guide explains each clause in more depth, and influencer usage rights covers the paid-usage questions that grow as a partnership produces more content. Log every rights grant with its expiry date in your creator records; the guide to organising influencer collaboration records shows a simple way to set that up.",
        links: [
          { text: "influencer marketing contract guide", href: "/blog/influencer-marketing-contract" },
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "organising influencer collaboration records", href: "/blog/influencer-marketing-crm" },
        ],
      },
      { type: "heading", text: "Keep the partnership healthy", id: "partnership-rhythm" },
      {
        type: "paragraph",
        text: "Once signed, a partnership needs a rhythm, not constant check-ins. A monthly touchpoint to confirm the next brief and share last month's results, plus a quarterly review of what's working and whether the structure still fits, is enough for most brands. Share results honestly; partners who see the numbers tend to make better content. Run several partnerships at once and they become part of a wider programme, which always-on influencer marketing covers: roster, calendar and budget.",
        links: [{ text: "always-on influencer marketing", href: "/blog/always-on-influencer-marketing" }],
      },
      { type: "heading", text: "Renew, adjust or wind down", id: "renew-or-end" },
      {
        type: "paragraph",
        text: "Decide at each review point rather than letting a partnership roll on by default. Renew when results and fit hold. Adjust when the fit is good but something isn't working, such as the format, frequency or deliverable mix. Wind down when results have declined over several months, the creator's direction has moved away from your brand, or reliability has slipped. When ending, give the agreed notice, pay what's owed, confirm what happens to rights you hold and thank them properly. Creators talk to each other.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Offering long terms or exclusivity after a single campaign.",
          "Asking for broad exclusivity, such as no other skincare brands for a year, without paying for it.",
          "Leaving usage rights vague, then running a partner's content as ads they didn't agree to.",
          "Keeping the same detailed brief for a partner who now knows the product better than your newest team member.",
          "No review dates, so a partnership drifts on long after it stopped working.",
          "Putting all creator activity into two or three partners, so one exit leaves a large gap.",
        ],
      },
      { type: "heading", text: "Before you send the offer", id: "before-the-offer" },
      {
        type: "paragraph",
        text: "Long-term partnerships rest on evidence and clear terms, not enthusiasm after one good post. Before you propose one, check you can say yes to each of these:",
      },
      {
        type: "list",
        items: [
          "The creator has delivered well at least once and scored well on both results and reliability.",
          "They understand the product and its approved claims.",
          "You have an ongoing need they cover, written into an expectations sheet.",
          "You've chosen the simplest structure that meets that need.",
          "Term, exclusivity, usage rights, renewal and exit are drafted and reviewed.",
          "Someone on your side owns the relationship and its review dates.",
        ],
      },
      {
        type: "paragraph",
        text: "If you want help structuring creator partnerships or running them as a formal programme, Kudozz's ambassador programme services cover selection, contracts and ongoing coordination.",
        links: [{ text: "ambassador programme services", href: "/services/ambassador-programs" }],
      },
    ],
    faqs: [
      {
        question: "How many campaigns should we run with a creator before offering a long-term partnership?",
        answer:
          "Usually at least one, ideally two. A single strong post can be a one-off; two good collaborations show that both the results and the working relationship repeat. Start with repeat bookings or a short retainer with a review point before committing to an ambassador-level deal.",
      },
      {
        question: "Are long-term influencer partnerships cheaper than one-off campaigns?",
        answer:
          "Sometimes, per deliverable, because creators value committed work. But exclusivity, wider usage rights and extra responsibilities add cost, and rates rise as creators grow. Compare the full package with the creator's one-off rate for the same work rather than assuming a discount.",
      },
      {
        question: "What's the difference between a retainer and an ambassador agreement?",
        answer:
          "A retainer pays a fixed fee for a set volume of content each month or quarter. An ambassador agreement is usually longer and broader: the creator represents the brand at launches or events, gives product input and often accepts narrow category exclusivity.",
      },
      {
        question: "Should a long-term partner be exclusive to our brand?",
        answer:
          "Only if competitor posts would genuinely undermine the partnership, and only if you pay for it. Keep exclusivity narrow: a defined product category, named competitors if needed, and a clear period. Broad, unpaid exclusivity is a common reason good creators turn down long-term deals.",
      },
      {
        question: "How do we end a partnership without damaging the relationship?",
        answer:
          "Raise concerns early and privately, then use the review point or notice period in the contract. Pay what's owed, confirm what happens to content and usage rights you hold, and thank the creator. Ending well keeps the door open and protects your reputation with other creators.",
      },
    ],
  },

  // #78 influencer-marketing-strategy-new-brands (NEW)
  {
    slug: "influencer-marketing-strategy-new-brands",
    category: "Brand Marketing",
    title: "How to Build an Influencer Marketing Strategy for a New Brand",
    seoTitle: "Influencer Marketing Strategy for New Brands | Kudozz",
    excerpt:
      "When nobody has heard of your brand, creators have to introduce it, explain it and vouch for it. Here's how to build an influencer marketing strategy for a new brand as a one-page document, section by section.",
    metaDescription:
      "Influencer marketing strategy for new brands: build a one-page plan covering objective, audience, creator criteria, budget, content, phases and measurement.",
    author: AUTHOR,
    publishedAt: "2026-11-26",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Influencer Marketing Strategy", "New Brand Launch", "Strategy Template", "India"],
    related: ["influencer-marketing-startups-india", "influencer-marketing-strategy", "pilot-influencer-campaign", "influencer-marketing-budget"],
    hero: {
      src: "/blog/discovery/influencer-marketing-strategy-new-brands.svg",
      alt: "A one-page strategy document with seven numbered sections: objective, audience, budget, creator criteria, content, phases and measurement",
    },
    discoveryCta: {
      headline: "Put Your Strategy's Creator Criteria to Work",
      body: "Once your one-page strategy is signed off, explore Kudozz Discovery to search Instagram creators in India against your niche, city, language and engagement criteria. Save a shortlist for each phase and take it from there.",
    },
    body: [
      {
        type: "paragraph",
        text: "A common belief about launching a brand is that you need one big creator to put it on the map. For most new brands, that's the wrong bet. A single large post can create a spike of attention, but with no reviews, no search demand and nobody else talking about the product, the attention has nowhere to land. What a new brand usually needs is a sequence: creators who explain what the product is, show it in real use and give people enough reasons to try something they've never heard of.",
      },
      {
        type: "paragraph",
        text: "This guide shows how to build an influencer marketing strategy for new brands as a one-page document, written before any creator is contacted. It applies to any brand starting with zero awareness: a funded startup, a family business launching its first consumer label, or an established company launching a new brand under a different name. Startups dealing with tight cash and a tiny team should also read influencer marketing for startups, which covers those operating constraints.",
        links: [{ text: "influencer marketing for startups", href: "/blog/influencer-marketing-startups-india" }],
      },
      { type: "heading", text: "Why a new brand needs a different strategy", id: "why-different" },
      {
        type: "paragraph",
        text: "Established brands use creators to remind, refresh and sell. A new brand has three harder jobs to do first.",
      },
      {
        type: "table",
        headers: ["Job", "What it means", "What creators need to do"],
        rows: [
          ["Introduce", "People don't know the brand exists", "Show the product to the right audience, more than once, in a real context"],
          ["Explain", "People don't know what it does or why it's different", "Demonstrate, compare honestly, answer the obvious questions"],
          ["Reassure", "There are no reviews, ratings or word of mouth yet", "Use it genuinely, show results where claims allow, come back to it later"],
        ],
      },
      {
        type: "paragraph",
        text: "That changes nearly every choice that follows: creator tiers, formats, how many times each creator posts and what you measure. A general influencer marketing strategy for an established brand assumes some awareness already exists. This one doesn't.",
        links: [{ text: "general influencer marketing strategy for an established brand", href: "/blog/influencer-marketing-strategy" }],
      },
      { type: "heading", text: "Section 1: Set an objective for each phase", id: "objective" },
      {
        type: "paragraph",
        text: "A new brand's objectives change quickly, so set one primary objective per phase rather than one for the whole year.",
      },
      {
        type: "table",
        headers: ["Phase", "Primary objective", "Example KPI"],
        rows: [
          ["Seed", "Learn how real users talk about the product", "Usable insights, organic posts, content you can reuse with permission"],
          ["Pilot", "Find which creators, messages and formats work", "Saves, shares, product questions in comments, link clicks"],
          ["First main wave", "Build awareness and first sales in the core audience", "Reach in the target audience, branded search, first orders through codes or links"],
          ["Ongoing", "Build trust and a repeat presence", "Results from repeat creators, reviews, returning customers"],
        ],
      },
      {
        type: "paragraph",
        text: "Write each KPI with a definition and a target you can justify from your own pilot data, not a borrowed benchmark. The guide to influencer marketing KPIs explains how.",
        links: [{ text: "influencer marketing KPIs", href: "/blog/influencer-marketing-kpis" }],
      },
      { type: "heading", text: "Section 2: Describe the audience precisely", id: "audience" },
      {
        type: "paragraph",
        text: "Vague audiences produce vague creator lists. Write a few lines that a teammate could use to judge whether a creator fits:",
      },
      {
        type: "list",
        items: [
          "Who they are: age range, life stage, city tier or specific cities, language.",
          "The problem they have, in their own words.",
          "What they use instead of your product today, and what annoys them about it.",
          "Where they discover products: Instagram Reels, YouTube reviews, family WhatsApp groups, marketplace listings.",
          "What they would need to believe to try a brand they've never heard of.",
        ],
      },
      {
        type: "paragraph",
        text: "That last line matters most for a new brand. It tells you what creators need to show on camera.",
      },
      { type: "heading", text: "Section 3: Shape the budget", id: "budget" },
      {
        type: "paragraph",
        text: "Don't start with a total. Start with what the plan needs, then decide how much to test before committing the rest. A new brand's budget usually has these lines:",
      },
      {
        type: "list",
        items: [
          "Product for seeding and creator samples, including shipping.",
          "Creator fees for the pilot, kept deliberately small.",
          "An amount held back for the first main wave, released only once the pilot shows what works.",
          "Usage rights, if you plan to run creator content as ads or on product pages.",
          "Amplification of the best-performing content.",
          "Management time, tools and reporting, whether internal or external.",
        ],
      },
      {
        type: "paragraph",
        text: "Creator fees vary widely by tier, niche, format and rights, so once you have a shortlist, get quotes from it rather than relying on rate lists. Estimating an influencer marketing budget covers the method, and running a pilot influencer campaign explains how to test before you commit the rest.",
        links: [
          { text: "Estimating an influencer marketing budget", href: "/blog/influencer-marketing-budget" },
          { text: "running a pilot influencer campaign", href: "/blog/pilot-influencer-campaign" },
        ],
      },
      { type: "heading", text: "Section 4: Write your creator selection criteria", id: "creator-criteria" },
      {
        type: "paragraph",
        text: "For a brand with no awareness, the best creators are usually not the biggest. Smaller specialist creators often have audiences who trust their recommendations and ask detailed questions, which is exactly what a new brand needs. Write the criteria down:",
      },
      {
        type: "table",
        headers: ["Criterion", "What to write down"],
        rows: [
          ["Niche", "The one or two content niches your customers follow, such as skincare routines, home cooking or beginner fitness"],
          ["Audience fit", "Evidence that a creator's followers match your audience: comments, language, cities, life stage"],
          ["Tier mix", "Mostly nano and micro creators for trust and testing; larger creators only once the message is proven"],
          ["Location and language", "Cities and languages where the product is actually available and delivered"],
          ["Content style", "Can they explain and demonstrate, not just make the product look good?"],
          ["Red flags", "Inflated engagement, a feed crowded with unrelated sponsorships, past content that clashes with your values"],
        ],
      },
      {
        type: "paragraph",
        text: "The guides to finding influencers whose audience matches your ideal customer and finding micro-influencers walk through the research, and choosing the right influencer for your brand covers the final fit check.",
        links: [
          { text: "finding influencers whose audience matches your ideal customer", href: "/blog/find-influencers-matching-target-audience" },
          { text: "finding micro-influencers", href: "/blog/how-to-find-micro-influencers" },
          { text: "choosing the right influencer for your brand", href: "/blog/how-to-choose-the-right-influencer-for-your-brand" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Shortlist Creators for a Brand Nobody Knows Yet",
        body: "Kudozz Discovery lets you turn your written criteria into filters, searching Instagram creators in India by niche, city, language, follower range and engagement, then saving them into a list for your pilot. Outreach and the brief stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Section 5: Decide the message and content", id: "content" },
      {
        type: "paragraph",
        text: "With no prior awareness, any creator post may be someone's first encounter with the brand. Keep the message simple and consistent across creators while letting each creator say it in their own way.",
      },
      {
        type: "list",
        items: [
          "One core message: what the product is and who it's for, in a sentence.",
          "Two or three proof points creators can show rather than just say: texture, taste, ease of use, price, a before-and-after where claims allow.",
          "Formats that explain: demos, routines, honest first impressions, comparisons with what people use now.",
          "Repetition by design: ask the best pilot creators for a second post a few weeks later, so audiences see continued use.",
          "Claims and disclosure: a list of approved claims and banned phrases, and a clear disclosure label on every paid post in line with ASCI's influencer advertising guidelines.",
        ],
      },
      {
        type: "paragraph",
        text: "Put all of this into a one-page creator brief for each wave. What to include in an influencer marketing brief has a full checklist.",
        links: [{ text: "What to include in an influencer marketing brief", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "heading", text: "Section 6: Plan the phases", id: "campaign-plan" },
      {
        type: "table",
        headers: ["Phase", "Indicative timing", "What happens"],
        rows: [
          ["Prepare", "Weeks 1–3", "Strategy signed off, tracking set up, product ready, shortlist built"],
          ["Seed", "Weeks 3–6", "Product sent to relevant creators with no posting obligation; reactions collected"],
          ["Pilot", "Weeks 6–10", "Paid posts with a small set of creators across two or three messages or formats"],
          ["Review", "Weeks 10–11", "Results compared; winning creators, messages and formats chosen"],
          ["First main wave", "Weeks 12–18", "More creators of the type that worked, winners rebooked, top content amplified"],
          ["Ongoing", "From month 5", "A monthly rhythm with repeat creators and a small test slot"],
        ],
      },
      {
        type: "paragraph",
        text: "Adjust the timing to your product. If the brand has a fixed launch date, seeding and the pilot need to happen before it; finding influencers for a product launch covers the launch-specific steps.",
        links: [{ text: "finding influencers for a product launch", href: "/blog/influencers-for-product-launch" }],
      },
      { type: "heading", text: "Section 7: Define how you'll measure", id: "measurement" },
      {
        type: "paragraph",
        text: "For a new brand, sales alone understate what creators do in the first months, because people often see a brand several times before buying. Track a mix of signals:",
      },
      {
        type: "table",
        headers: ["Signal", "What it tells you"],
        rows: [
          ["Reach and views in the target audience", "Whether the right people are seeing the brand"],
          ["Saves, shares and product questions in comments", "Whether people are interested enough to come back"],
          ["Branded search and direct traffic", "Whether people remember the name"],
          ["Link clicks and code uses", "Whether interest is turning into visits and orders"],
          ["Reviews and repeat orders", "Whether the product lives up to what creators showed"],
        ],
      },
      {
        type: "paragraph",
        text: "Set up UTM links and creator-specific codes before anything goes live. For the awareness side, influencer marketing for brand awareness explains how to measure reach and recall.",
        links: [{ text: "influencer marketing for brand awareness", href: "/blog/influencer-marketing-brand-awareness" }],
      },
      { type: "heading", text: "The one-page influencer marketing strategy for new brands", id: "strategy-template" },
      {
        type: "paragraph",
        text: "Bring the seven sections together in one document. If it doesn't fit on a page, it isn't focused enough yet.",
      },
      {
        type: "template",
        label: "One-page strategy template",
        text: "BRAND: [name] | HERO PRODUCT: [ ] | DATE: [month, year] | OWNER: [name]\n\n1. OBJECTIVE BY PHASE\nSeed: [what we want to learn]\nPilot: [primary KPI + target range]\nFirst main wave: [primary KPI + target range]\n\n2. AUDIENCE\n[Who, where, language, problem, current alternative]\nThey need to believe: [the one thing]\n\n3. BUDGET LINES\nSeeding product: [ ] | Pilot fees: [ ] | Held back for main wave: [ ]\nRights and amplification: [ ] | Management and tools: [ ]\n\n4. CREATOR CRITERIA\nNiches: [ ] | Tiers: [ ] | Cities and languages: [ ]\nMust be able to: [e.g. demonstrate on camera] | Red flags: [ ]\n\n5. MESSAGE AND CONTENT\nCore message: [one sentence] | Proof points: [2–3]\nFormats: [ ] | Approved claims: [ ] | Disclosure wording: [ ]\n\n6. PHASES AND DATES\nPrepare [ ] > Seed [ ] > Pilot [ ] > Review [ ] > Main wave [ ]\n\n7. MEASUREMENT\nTracking: [UTMs, codes, landing pages] | Report dates: [ ]\nDecision rule: [what result means scale, adjust or stop]",
      },
      { type: "heading", text: "A worked example", id: "worked-example" },
      {
        type: "paragraph",
        text: "Say an established Indore-based namkeen company launches a new brand of baked millet snacks under a separate name, sold on its own website and two quick-commerce apps in five cities. The parent company is well known in its home market; the new brand isn't known anywhere.",
      },
      {
        type: "list",
        items: [
          "Objective: in the pilot, find which of two messages (high protein, or a lighter tea-time snack) earns more saves and product questions; in the main wave, drive first orders in the five cities.",
          "Audience: working adults aged roughly 25–40 in Indore, Bhopal, Pune, Ahmedabad and Jaipur who snack at their desks and want something lighter, reached in Hindi, Gujarati, Marathi and English.",
          "Creators: food and fitness creators in those cities, mostly nano and micro, who post snack reviews, office-lunch routines or home-cooking content.",
          "Content: honest taste tests, office snack-drawer videos, comparisons with fried snacks that don't disparage named competitors.",
          "Measurement: city-specific codes, UTM links to the website, and a check on branded search in each city before and after the main wave.",
        ],
      },
      {
        type: "paragraph",
        text: "Notice that the plan doesn't lean on the parent company's name at all.",
      },
      { type: "heading", text: "Common mistakes new brands make", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Spending most of the budget on one big creator before any message has been tested.",
          "Choosing creators for follower count rather than audience fit and the ability to explain.",
          "Asking every creator for a single post, so nobody sees the product more than once.",
          "Working with creators in cities where the product isn't available or delivery is slow.",
          "Measuring only sales in the first month and stopping before awareness has had time to build.",
          "Forgetting usage rights, then being unable to reuse the best pilot content in ads.",
        ],
      },
      { type: "heading", text: "Next steps", id: "next-steps" },
      {
        type: "paragraph",
        text: "Draft the one-page strategy this week, even roughly. Share it with whoever approves the budget, agree the pilot and the decision rule, and only then start building the shortlist. If you'd like help shaping the strategy or running the pilot, Kudozz's campaign strategy service works with brands at exactly this stage.",
        links: [{ text: "campaign strategy service", href: "/services/campaign-strategy" }],
      },
    ],
    faqs: [
      {
        question: "How is an influencer strategy for a new brand different from one for an established brand?",
        answer:
          "A new brand has no awareness, reviews or word of mouth, so creators have to introduce the product, explain it and reassure people before they'll buy. That usually means specialist creators, demonstration formats, repeat posts from the best creators, and measuring awareness signals alongside sales in the first months.",
      },
      {
        question: "Should a new brand work with big influencers or micro-influencers?",
        answer:
          "Most new brands are better served starting with nano and micro creators whose audiences match their customer and trust their recommendations. Larger creators can make sense once a pilot has shown which message and format work. Putting most of the budget on one big name before that is a high-risk bet.",
      },
      {
        question: "How much should a new brand spend on influencer marketing?",
        answer:
          "There's no standard figure; it depends on category, creator tiers, formats, usage rights and how many cities you cover. Build the budget from the plan's lines, keep the pilot small and hold back the larger share until the pilot shows what works. Get real quotes from your shortlist rather than relying on rate lists.",
      },
      {
        question: "How long before a new brand sees results from influencer marketing?",
        answer:
          "Early signals such as saves, comments and product questions show up within days of a post. Awareness and branded search build over weeks of repeated exposure, and sales usually follow once people have seen the brand a few times. Plan for a pilot and at least one main wave before judging the channel.",
      },
      {
        question: "Does an established company launching a new brand need a separate strategy?",
        answer:
          "Yes, if the new brand has its own name. Customers won't automatically connect it to the parent company, so creators are building recognition from scratch. Write the strategy as though the brand were brand new.",
      },
    ],
  },

  // #79 how-to-scale-influencer-marketing (NEW)
  {
    slug: "how-to-scale-influencer-marketing",
    category: "Campaign Strategy",
    title: "How to Scale Influencer Marketing When Your Brand Starts Growing",
    seoTitle: "How to Scale Influencer Marketing Step by Step | Kudozz",
    excerpt:
      "What worked with one marketer and eight creators breaks at forty. Here's how to scale influencer marketing with a written workflow, a sourcing process, clear roles, budget rules and quality control.",
    metaDescription:
      "How to scale influencer marketing as your brand grows: a written workflow, a sourcing process, a playbook, a RACI, budget planning and quality checks.",
    author: AUTHOR,
    publishedAt: "2026-11-26",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Scale Influencer Marketing", "Influencer Workflow", "Team Roles", "Quality Control"],
    related: ["influencer-marketing-audit", "influencer-sourcing-workflow", "influencer-marketing-team-structure", "always-on-influencer-marketing"],
    hero: {
      src: "/blog/discovery/how-to-scale-influencer-marketing.svg",
      alt: "A swimlane workflow from request to report, with sourcing, contracts, approvals, payments and reporting each assigned to an owner and a quality check",
    },
    discoveryCta: {
      headline: "Give Your Growing Team One Place to Search",
      body: "Explore Kudozz Discovery to search Instagram creators in India by niche, city, language and posting frequency, keep named lists per campaign and reveal contact details with credits. Sign-up includes 30 credits valid for 30 days.",
    },
    body: [
      {
        type: "paragraph",
        text: "In its first year, influencer marketing at a growing Bengaluru coffee brand ran on one person's phone, and it worked with eight creators a month. Then the brand launched in three new cities, added a cold-brew range and doubled its creator budget. Within two months, product went to the wrong addresses, two creators posted before approval, a usage-rights expiry was missed and nobody could say which creators had driven orders.",
      },
      {
        type: "paragraph",
        text: "That's what growth does to an informal process. To scale influencer marketing without quality falling apart, the work has to live in workflows, documents and roles rather than in one person's head. This guide covers how to build that: a written workflow, a sourcing process, a playbook, clear ownership, budget planning and quality control at each stage.",
      },
      { type: "heading", text: "What it takes to scale influencer marketing", id: "what-it-takes" },
      {
        type: "paragraph",
        text: "Scaling isn't just more creators. Every extra creator adds outreach, negotiation, a contract, shipping, approvals, a payment and a line in the report. The workload grows faster than the budget, and the weak points show up in predictable places:",
      },
      {
        type: "table",
        headers: ["What breaks", "Symptom", "The fix"],
        rows: [
          ["Sourcing", "Last-minute searches, the same few creators every time, poor fit", "A sourcing process with intake, criteria and a weekly rhythm"],
          ["Records", "Rates, contacts and rights scattered across chats and inboxes", "One record per creator, in one place"],
          ["Approvals", "Drafts waiting days, contradictory feedback, posts going live unapproved", "An approval matrix with named approvers and turnaround times"],
          ["Compliance", "Missing disclosure labels, unapproved claims", "A claims sheet and a go-live check"],
          ["Payments", "Late payments, missing invoices, tax confusion", "A payment schedule and a finance owner"],
          ["Reporting", "Nobody can compare creators or campaigns", "A standard report with fixed metric definitions"],
        ],
      },
      { type: "heading", text: "Before you scale, check it's worth scaling", id: "before-you-scale" },
      {
        type: "paragraph",
        text: "Adding budget to a programme that doesn't work only makes the losses bigger. Before scaling, confirm that results are measurable and repeat across campaigns, that you know which creators, formats and messages drive them, and that product, stock and delivery can handle more demand. Auditing an influencer marketing programme before you scale it gives you a structured way to check each of these. This guide picks up after that audit. It's about building the system that lets the whole programme grow, which is a different question from whether one live campaign should be expanded, paused or stopped.",
        links: [{ text: "Auditing an influencer marketing programme before you scale it", href: "/blog/influencer-marketing-audit" }],
      },
      { type: "heading", text: "Step 1: Write the workflow down", id: "workflow" },
      {
        type: "paragraph",
        text: "List every stage a collaboration passes through, from request to report, and agree what done means at each one. A typical workflow:",
      },
      {
        type: "list",
        items: [
          "Request: someone asks for creators, with objective, audience, budget and dates.",
          "Sourcing: candidates found against written criteria.",
          "Vetting: content, engagement quality, audience fit and brand safety checked.",
          "Outreach and negotiation: offer sent; rates and deliverables agreed.",
          "Contract: terms, usage rights, exclusivity and disclosure confirmed in writing.",
          "Brief and product: brief sent, product shipped, delivery confirmed.",
          "Content approval: drafts reviewed against the brief and the claims sheet.",
          "Go-live check: posted on time, disclosure correct, links and codes working.",
          "Payment: invoice received and paid on the agreed date.",
          "Report and record: results logged against the creator's record, with a rebook decision noted.",
        ],
      },
      {
        type: "paragraph",
        text: "Once it's written, each stage can have an owner, a template and a turnaround time. Gaps become visible too: if nobody owns the go-live check, it probably isn't happening.",
      },
      { type: "heading", text: "Step 2: Document the playbook", id: "playbook" },
      {
        type: "paragraph",
        text: "A playbook is the set of documents that lets someone new run a collaboration correctly without having to ask. Keep each document short and in one shared place.",
      },
      {
        type: "table",
        headers: ["Document", "What it contains"],
        rows: [
          ["Brand guide for creators", "Tone, product facts, do's and don'ts, visual rules"],
          ["Claims sheet", "Approved claims, banned phrases, category-specific rules"],
          ["Disclosure rules", "Required labels and where they go in each format"],
          ["Brief templates", "One per campaign type: launch, seeding, always-on, festive"],
          ["Contract templates", "Standard terms, usage-rights options and exclusivity wording, reviewed by a lawyer"],
          ["Approval matrix", "Who approves what, and within how many working days"],
          ["Creator records", "Contact, rates, campaigns, rights with expiry dates, payment history, notes"],
          ["Report template", "Fixed metrics and definitions so campaigns can be compared"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator records are the backbone; organising influencer contact details and collaboration records shows a simple structure that works in a spreadsheet. For drafts, a creator content approval process sets out stages and turnaround times.",
        links: [
          { text: "organising influencer contact details and collaboration records", href: "/blog/influencer-marketing-crm" },
          { text: "creator content approval process", href: "/blog/influencer-content-approval" },
        ],
      },
      { type: "heading", text: "Step 3: Turn sourcing into a process", id: "sourcing-process" },
      {
        type: "paragraph",
        text: "Sourcing is usually the first bottleneck, because requests for creators arrive in bursts. Move it from a scramble to a routine:",
      },
      {
        type: "list",
        items: [
          "An intake form, so every request arrives with objective, audience, cities, languages, tiers, budget and dates.",
          "Written selection criteria and red flags, so two people judging the same creator reach the same answer.",
          "A weekly sourcing slot that keeps a vetted bench of candidates ready, rather than starting every search from zero.",
          "Saved lists per campaign, niche or city, so past research isn't lost when someone leaves.",
          "A standard vetting checklist, including checks for inflated followers and engagement.",
        ],
      },
      {
        type: "paragraph",
        text: "A repeatable influencer sourcing workflow sets out the intake form, stages and turnaround targets in detail. For vetting, use the influencer discovery checklist and the guide to spotting fake followers.",
        links: [
          { text: "repeatable influencer sourcing workflow", href: "/blog/influencer-sourcing-workflow" },
          { text: "influencer discovery checklist", href: "/blog/influencer-discovery-checklist" },
          { text: "spotting fake followers", href: "/blog/how-to-identify-fake-followers" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Make Sourcing the Part That Scales Easily",
        body: "Kudozz Discovery gives your team one place to search Instagram creators in India by niche, city, language, follower range and engagement, and to save candidates into named lists per campaign. Detailed vetting, outreach and contracts stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Step 4: Assign roles with a RACI", id: "roles-raci" },
      {
        type: "paragraph",
        text: "As the team grows, unclear ownership causes more problems than lack of effort. A simple RACI (responsible, accountable, consulted, informed) settles who does what. A version for a small growing team might look like this:",
      },
      {
        type: "table",
        headers: ["Task", "Programme lead", "Creator coordinator", "Brand or product team", "Finance"],
        rows: [
          ["Strategy and budget", "A, R", "C", "C", "C"],
          ["Sourcing and vetting", "A", "R", "C", "-"],
          ["Outreach and negotiation", "A", "R", "-", "I"],
          ["Contracts and rights", "A", "R", "C", "I"],
          ["Briefs and claims", "A", "R", "C", "-"],
          ["Content approval", "A", "R", "C", "-"],
          ["Payments", "I", "R", "-", "A"],
          ["Reporting", "A, R", "C", "I", "I"],
        ],
      },
      {
        type: "paragraph",
        text: "Adapt it to your team; the rule is that every row has exactly one A. Influencer marketing team structure covers ownership models in more depth, including when to add roles or bring in outside help.",
        links: [{ text: "Influencer marketing team structure", href: "/blog/influencer-marketing-team-structure" }],
      },
      { type: "heading", text: "Step 5: Plan the budget for scale", id: "budget" },
      {
        type: "paragraph",
        text: "Growth changes how you should think about money in three ways:",
      },
      {
        type: "list",
        items: [
          "Plan a run-rate, not just campaign totals. A monthly or quarterly base, plus seasonal and launch layers, makes resourcing predictable.",
          "Watch marginal results, not only averages. If each extra creator or rupee produces noticeably less than the last, you've hit a ceiling: widen the creator pool, add cities or improve the offer before adding money.",
          "Budget for the costs that grow with volume: product and shipping, coordination time, usage-rights renewals, tools and reporting.",
        ],
      },
      {
        type: "paragraph",
        text: "Increase spend in steps, such as one extra city or one new niche at a time, and review before the next step. How to allocate your influencer marketing budget covers splitting spend across creators and budget lines.",
        links: [{ text: "How to allocate your influencer marketing budget", href: "/blog/influencer-budget-allocation" }],
      },
      { type: "heading", text: "Step 6: Build quality control into each stage", id: "quality-control" },
      {
        type: "paragraph",
        text: "Quality slips at scale because the checks one person did by instinct stop happening. Make them explicit:",
      },
      {
        type: "table",
        headers: ["Stage", "Quality check"],
        rows: [
          ["Vetting", "Audience fit, engagement quality, recent content, past sponsorships, brand safety"],
          ["Contract", "Usage rights, exclusivity and disclosure written down before content is made"],
          ["Brief", "Claims sheet attached; one consolidated list of must-haves"],
          ["Draft review", "Message, accuracy, claims, a visible disclosure label"],
          ["Go-live", "Posted on the agreed date, disclosure correct, links and codes working"],
          ["After the campaign", "Results logged, creator scored, rights expiry added to the calendar"],
        ],
      },
      {
        type: "paragraph",
        text: "Disclosure needs particular care as volume grows. ASCI's influencer advertising guidelines expect a clear label on content where there is a material connection with the brand, and some categories, such as health and financial services, carry extra requirements. Influencer campaign compliance for Indian brands covers what to check before launch; treat it as a starting point and get legal advice for regulated categories.",
        links: [{ text: "Influencer campaign compliance for Indian brands", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Scale in steps, not leaps", id: "scale-in-steps" },
      {
        type: "paragraph",
        text: "Expansion is easier to manage, and easier to learn from, when you change one thing at a time. A sensible order:",
      },
      {
        type: "list",
        items: [
          "More creators of the type that already works, in the same niche and cities.",
          "Repeat bookings and longer terms with your best performers.",
          "One new niche or audience segment, tested with a small group first.",
          "New cities or languages, with regional creators and localised briefs.",
          "A continuous monthly programme with a roster, calendar and test slot.",
        ],
      },
      {
        type: "paragraph",
        text: "That last step is covered in always-on influencer marketing. And if the workload outgrows your team, comparing in-house and outsourced influencer marketing helps decide what to keep and what to hand over.",
        links: [
          { text: "always-on influencer marketing", href: "/blog/always-on-influencer-marketing" },
          { text: "comparing in-house and outsourced influencer marketing", href: "/blog/influencer-marketing-agency-vs-in-house" },
        ],
      },
      { type: "heading", text: "Common mistakes when scaling", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Scaling spend before results are measurable and repeatable.",
          "Hiring more people without writing the workflow down, so each person invents their own process.",
          "Letting several people message the same creator with different asks.",
          "Cutting vetting short to hit a volume target.",
          "Keeping usage rights and exclusivity terms in email threads instead of creator records.",
          "Comparing campaigns that used different metric definitions.",
          "Expanding into new cities and new niches at the same time, so you can't tell what worked.",
        ],
      },
      { type: "heading", text: "A 90-day scaling plan", id: "ninety-day-plan" },
      {
        type: "table",
        headers: ["Weeks", "Focus", "Output"],
        rows: [
          ["1–2", "Audit and map", "Audit findings; the current workflow written down with gaps marked"],
          ["3–4", "Records and sourcing", "Creator records set up; intake form and selection criteria in use"],
          ["5–6", "Playbook", "Claims sheet, disclosure rules, brief and contract templates, approval matrix"],
          ["7–8", "Roles", "RACI agreed; weekly sourcing slot and finance owner confirmed"],
          ["9–12", "First scaled cycle", "One step of expansion run through the new system, then reported and reviewed"],
        ],
      },
      {
        type: "paragraph",
        text: "By the end of the quarter, the programme should run the same way whoever is on leave. If you'd prefer to hand over the heavy coordination while keeping strategy in-house, Kudozz's outreach and management service can run sourcing, negotiation and creator coordination for you.",
        links: [{ text: "outreach and management service", href: "/services/outreach-management" }],
      },
    ],
    faqs: [
      {
        question: "When is a brand ready to scale influencer marketing?",
        answer:
          "When results are measurable and repeat across more than one campaign, you know which creators, formats and messages drive them, and product and delivery can handle more demand. If any of these is missing, fix it first, because scaling a process that doesn't work only increases the cost.",
      },
      {
        question: "What's the biggest bottleneck when scaling influencer marketing?",
        answer:
          "For many brands it's sourcing and coordination rather than budget. Each extra creator adds outreach, a contract, shipping, approvals and a payment. A written workflow, a weekly sourcing rhythm and clear ownership remove most of that friction.",
      },
      {
        question: "Do we need influencer marketing software to scale?",
        answer:
          "Not necessarily at first. Shared creator records, templates and an approval matrix cover a lot. Tools help once several people manage many creators at once, such as a discovery tool for sourcing or campaign management software for workflows, but choose them to fit a process you've already written down.",
      },
      {
        question: "Who should own influencer marketing as the team grows?",
        answer:
          "One person should be accountable for the programme, even when several people do the work. A simple RACI gives sourcing, contracts, approvals, payments and reporting each a clear owner, and brings in brand, product and finance where they're needed.",
      },
      {
        question: "How do we keep quality high when working with more creators?",
        answer:
          "Build checks into each stage: vetting before outreach, rights and disclosure in the contract, a claims sheet with every brief, a draft review, a go-live check and a post-campaign score. Expand one step at a time so problems surface before they spread.",
      },
    ],
  },

  // #80 influencer-marketing-agency-vs-in-house (UPGRADE, orig 2026-09-06)
  {
    slug: "influencer-marketing-agency-vs-in-house",
    category: "Brand Marketing",
    title: "In-House Influencer Marketing vs Outsourcing: What Should Growing Brands Choose?",
    seoTitle: "In-House vs Outsourced Influencer Marketing | Kudozz",
    excerpt:
      "Neither option is automatically better. Here's a balanced comparison of in-house and outsourced influencer marketing, covering team, expertise, sourcing, execution, cost structure and hybrid models, with a decision framework.",
    metaDescription:
      "In-house vs outsourced influencer marketing compared: team, expertise, sourcing, execution, cost structure, pros and cons, hybrid models and how to decide.",
    author: AUTHOR,
    publishedAt: "2026-09-06",
    updatedAt: "2026-11-26",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["In-House vs Agency", "Outsourced Influencer Marketing", "Hybrid Model", "Influencer Team"],
    related: ["influencer-agency-vs-freelancer", "influencer-marketing-agency-fees-india", "choose-influencer-marketing-agency-india", "influencer-marketing-team-structure"],
    hero: {
      src: "/blog/discovery/influencer-marketing-agency-vs-in-house.svg",
      alt: "A spectrum from fully in-house to fully outsourced influencer marketing, with tasks such as strategy, sourcing, outreach, contracts and reporting placed along it and hybrid models in the middle",
    },
    discoveryCta: {
      headline: "Try Self-Serve Discovery Before You Decide",
      body: "If you're weighing whether sourcing can stay in-house, explore Kudozz Discovery: search Instagram creators in India by niche, city, language and engagement, and save shortlists. Outreach and execution remain your team's call.",
    },
    body: [
      {
        type: "paragraph",
        text: "Every growing brand reaches the same point with creators. The marketer who started the work is spending more of the week chasing creators than planning, campaigns are getting bigger, and someone asks the obvious question: should we hire for this, or hand it to an agency?",
      },
      {
        type: "paragraph",
        text: "There isn't a universal answer. In-house vs outsourced influencer marketing is a trade-off between control and brand knowledge on one side, and capacity, experience and speed on the other. This guide compares the two honestly, including the situations where an agency (Kudozz included) isn't the right choice, and ends with a framework you can use to decide.",
      },
      { type: "heading", text: "The short answer", id: "short-answer" },
      {
        type: "paragraph",
        text: "Keep influencer marketing in-house when creator work is steady, someone can own it as a real part of their job, and you want creator relationships held inside the company. Outsource when volume is variable or spiking, internal bandwidth is thin, deadlines are fixed, or you need coverage across cities, languages or regulated categories your team doesn't know. Many growing brands end up hybrid: strategy and core relationships in-house, heavy execution handled outside.",
      },
      { type: "heading", text: "What you're actually deciding", id: "what-youre-deciding" },
      {
        type: "paragraph",
        text: "Influencer marketing is really a dozen tasks with very different demands. The decision gets clearer when you look at them separately.",
      },
      {
        type: "table",
        headers: ["Task", "What it takes", "Easy to keep in-house?"],
        rows: [
          ["Strategy and objectives", "Brand and business knowledge", "Usually yes"],
          ["Creator sourcing and vetting", "Time, a research method, tools", "Yes, with a good process and tools"],
          ["Outreach and negotiation", "Time, persistence, a feel for market rates", "Depends on volume"],
          ["Contracts and usage rights", "Reviewed templates, attention to detail", "Yes, with lawyer-reviewed templates"],
          ["Briefs and approvals", "Product and claims knowledge", "Usually yes"],
          ["Product logistics", "Coordination time", "Depends on volume"],
          ["Compliance checks", "Knowledge of ASCI guidelines and category rules", "Yes, with training and a checklist"],
          ["Payments and paperwork", "A finance process", "Usually yes"],
          ["Reporting", "Tracking set-up and analysis", "Yes, with a standard template"],
        ],
      },
      {
        type: "paragraph",
        text: "Very few of these tasks need an outside party by nature. What usually drives outsourcing is time and volume, not capability.",
      },
      { type: "heading", text: "In-house vs outsourced influencer marketing compared", id: "comparison" },
      {
        type: "table",
        headers: ["Factor", "In-house team", "Outsourced to an agency"],
        rows: [
          ["Team resources", "Salaries, hiring time and management; capacity fixed by headcount", "Capacity flexes with scope; the brand still needs someone to brief and approve"],
          ["Expertise", "Deep brand and product knowledge, built over time", "Breadth across many campaigns and categories from day one"],
          ["Creator sourcing", "Builds its own network and research habits", "Existing creator networks and sourcing processes"],
          ["Execution speed", "Slower at first while processes are built", "Usually quicker to start, if onboarding is done well"],
          ["Control", "Direct and day to day", "Through briefs, approvals and reporting"],
          ["Creator relationships", "Held inside the company", "Often held by the agency unless the contract says otherwise"],
          ["Scalability", "Scaling means hiring", "Scaling means changing scope"],
          ["Continuity risk", "Knowledge leaves with people unless documented", "Knowledge can leave with the agency when the contract ends"],
          ["Cost visibility", "Spread across salaries, tools and time", "A visible fee on top of creator costs"],
        ],
      },
      { type: "heading", text: "Pros and cons of each", id: "pros-and-cons" },
      { type: "subheading", text: "In-house" },
      {
        type: "list",
        items: [
          "Pro: the team knows the product, customers and brand voice deeply, and briefs improve over time.",
          "Pro: creator relationships and data belong to the company.",
          "Pro: quicker internal decisions, with no extra layer between brand and creator.",
          "Con: capacity is limited by headcount, so spikes such as festive season are hard to absorb.",
          "Con: building sourcing, negotiation and compliance skills takes time, and early mistakes cost money.",
          "Con: knowledge can sit with one person, which is risky when they leave.",
        ],
      },
      { type: "subheading", text: "Outsourced" },
      {
        type: "list",
        items: [
          "Pro: experience across many campaigns, categories and creator tiers from the start.",
          "Pro: capacity for volume, several cities and regional languages.",
          "Pro: established processes for contracts, approvals and reporting.",
          "Con: a management fee on top of creator costs.",
          "Con: less day-to-day control, and the agency needs time to learn your brand.",
          "Con: if the contract isn't clear, creator relationships and records may not stay with you.",
        ],
      },
      { type: "heading", text: "Cost: compare structures, not headline numbers", id: "cost-structure" },
      {
        type: "paragraph",
        text: "Neither model is automatically cheaper. The honest comparison is the total cost of running the same year of activity both ways.",
      },
      {
        type: "table",
        headers: ["Cost component", "In-house", "Outsourced"],
        rows: [
          ["People", "Salaries, benefits, recruitment and ramp-up time", "Included in the agency fee"],
          ["Tools", "Discovery, tracking and reporting subscriptions", "Usually the agency's own, sometimes recharged"],
          ["Creator fees", "Paid directly", "Paid directly or through the agency; should be itemised"],
          ["Management fee", "None", "Retainer, project fee or a percentage of spend, depending on the agency"],
          ["Learning curve", "The cost of early mistakes", "Depends on the agency's experience in your category"],
          ["Internal time", "Managing the team", "Briefing, approvals and reviewing the agency's work"],
        ],
      },
      {
        type: "template",
        label: "One-year cost comparison worksheet",
        text: "Same plan both ways: campaigns per year, creators per campaign, cities and languages.\n\nIn-house year =\n  salaries and benefits for the people who'll run it (share of time if part-time)\n  + recruitment, and the months before they're fully productive\n  + tools: discovery, tracking, reporting\n  + management oversight time\n  + an allowance for early mistakes (unusable rights, replacement creators, missed dates)\n\nOutsourced year =\n  agency fees for the same plan (retainer, project or percentage)\n  + any recharged tools or production\n  + internal time for briefing, approvals and reviews\n\nCreator fees, product and amplification appear in both: compare them separately.",
      },
      {
        type: "paragraph",
        text: "How agencies structure their fees is explained in influencer marketing agency fees in India. If your workload is small and specific, a freelancer can be a middle option; influencer marketing agency vs freelancer compares the two.",
        links: [
          { text: "influencer marketing agency fees in India", href: "/blog/influencer-marketing-agency-fees-india" },
          { text: "influencer marketing agency vs freelancer", href: "/blog/influencer-agency-vs-freelancer" },
        ],
      },
      { type: "heading", text: "Sourcing is often the easiest part to keep in-house", id: "in-house-sourcing" },
      {
        type: "paragraph",
        text: "Many brands assume they need an agency to find creators. Often they don't. With a clear brief and a discovery tool, an in-house marketer can research and shortlist creators efficiently while keeping the relationships inside the company. The comparison of discovery tools and manual research shows where each approach fits, and the roundup of influencer discovery tools in India covers the options.",
        links: [
          { text: "comparison of discovery tools and manual research", href: "/blog/influencer-discovery-vs-manual-research" },
          { text: "influencer discovery tools in India", href: "/blog/best-influencer-discovery-tools-india" },
        ],
      },
      {
        type: "paragraph",
        text: "What a tool doesn't do is the rest of the work. Outreach, negotiation, contracts, briefs, approvals and measurement still need people, and that's where the in-house or outsourced question really sits. If your team is taking outreach on itself, how to contact influencers is a good place to start.",
        links: [{ text: "how to contact influencers", href: "/blog/how-to-contact-influencers" }],
      },
      {
        type: "discovery-cta",
        headline: "Keep Creator Sourcing In-House",
        body: "Kudozz Discovery is a self-serve way for an in-house team to search Instagram creators in India by niche, city, language and engagement, save shortlists and reveal contact details with credits. Outreach, negotiation and campaign execution stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Hybrid models that work", id: "hybrid-models" },
      {
        type: "table",
        headers: ["Model", "In-house owns", "Outside partner handles", "Suits"],
        rows: [
          ["Strategy in, execution out", "Objectives, budget, brand guide, final approvals", "Sourcing, outreach, negotiation, coordination, reporting", "Brands with a marketer but no time for volume"],
          ["Core in, peaks out", "The always-on programme with core creators", "Launches and festive bursts", "Steady activity with big seasonal spikes"],
          ["Home markets in, new markets out", "Campaigns in existing cities and languages", "New regions and languages", "Brands expanding across India"],
          ["Tool-assisted in-house", "Sourcing with a discovery tool, relationships, approvals", "Freelance coordination or production as needed", "Smaller brands building capability"],
        ],
      },
      {
        type: "paragraph",
        text: "Whichever hybrid you choose, write down who owns each task. Influencer marketing team structure has a RACI you can adapt.",
        links: [{ text: "Influencer marketing team structure", href: "/blog/influencer-marketing-team-structure" }],
      },
      { type: "heading", text: "A decision framework", id: "decision-framework" },
      {
        type: "paragraph",
        text: "Answer each question for your brand as it is today, not where you hope to be in two years. Each answer points one way.",
      },
      {
        type: "table",
        headers: ["Question", "Points towards in-house", "Points towards outsourcing"],
        rows: [
          ["How steady is creator activity?", "Steady, month after month", "Spiky, or still being tested"],
          ["Does someone have real time for it?", "A dedicated owner exists", "It's squeezed into someone's week"],
          ["How fixed are deadlines?", "Flexible", "Fixed launch or sale dates you can't miss"],
          ["How many cities and languages?", "One or two you know well", "Many, or new to you"],
          ["How regulated is the category?", "Low risk, or compliance knowledge in-house", "Health, finance or similar, with no in-house expertise"],
          ["How important is owning creator relationships?", "A strategic priority", "Less important than speed right now"],
          ["How should costs behave?", "Fixed headcount suits finance", "Variable scope suits finance"],
        ],
      },
      {
        type: "paragraph",
        text: "If the answers point mostly one way, follow them. If they're split, a hybrid is probably right; start with a defined scope and a review after a quarter rather than an open-ended arrangement. As the programme grows, how to scale influencer marketing covers the workflows and roles that make either model hold up.",
        links: [{ text: "how to scale influencer marketing", href: "/blog/how-to-scale-influencer-marketing" }],
      },
      { type: "heading", text: "If you outsource, keep these in your hands", id: "keep-in-house" },
      {
        type: "list",
        items: [
          "Final approval of creators, content and anything involving claims.",
          "Contracts and usage rights in the brand's name, with copies on file.",
          "A creator record you can access: contacts, rates, rights and expiry dates.",
          "Access to raw results data, not just summary reports.",
          "A clear exit clause covering the handover of records and content.",
        ],
      },
      {
        type: "paragraph",
        text: "The influencer marketing agency checklist covers what to confirm before signing, and how to choose an influencer marketing agency in India covers evaluating candidates. What an agency should do day to day is set out in how influencer campaign management works.",
        links: [
          { text: "influencer marketing agency checklist", href: "/blog/influencer-marketing-agency-checklist" },
          { text: "how to choose an influencer marketing agency in India", href: "/blog/choose-influencer-marketing-agency-india" },
          { text: "how influencer campaign management works", href: "/blog/influencer-campaign-management" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Comparing an agency fee with one junior salary, ignoring tools, ramp-up time and management.",
          "Hiring in-house for a workload that only exists in festive season.",
          "Outsourcing everything, including strategy and final approvals, then feeling disconnected from the results.",
          "Letting an agency hold the only copy of creator contacts and contracts.",
          "Choosing on fee alone rather than on category experience and process.",
          "Never revisiting the decision as volume and the team change.",
        ],
      },
      { type: "heading", text: "Making the call", id: "making-the-call" },
      {
        type: "paragraph",
        text: "The right answer depends on your volume, bandwidth, markets and how much you value owning creator relationships, and it can change as you grow. Plenty of brands start outsourced and bring work in-house once processes are proven; others start in-house and outsource the peaks. Revisit the decision every six to twelve months. The same reasoning applies to social media more broadly, which in-house vs outsourced social media management covers.",
        links: [{ text: "in-house vs outsourced social media management", href: "/blog/in-house-vs-outsourced-social-media-management" }],
      },
      {
        type: "paragraph",
        text: "If you want to talk through whether outsourcing makes sense for your brand, Kudozz's influencer marketing services team can scope it with you, and will tell you when keeping the work in-house is the better call.",
        links: [{ text: "influencer marketing services", href: "/services/influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "Is it cheaper to run influencer marketing in-house or through an agency?",
        answer:
          "Neither is automatically cheaper. In-house costs include salaries, recruitment, ramp-up time, tools and management; outsourcing adds a visible management fee but replaces much of that. Compare the total cost of running the same year of activity both ways, with creator fees counted separately.",
      },
      {
        question: "When should a growing brand outsource influencer marketing?",
        answer:
          "When creator work regularly crowds out other priorities, volume is spiky, launch dates are fixed, or you're entering cities, languages or regulated categories your team doesn't know. Outsourcing can also make sense while you test the channel before committing to a hire.",
      },
      {
        question: "What is a hybrid influencer marketing model?",
        answer:
          "It's a split where the brand keeps some tasks and an outside partner handles others. A common version keeps strategy, budget, brand guidance and final approvals in-house while sourcing, outreach, negotiation and coordination are outsourced. Others keep the always-on programme in-house and outsource launches or new regions.",
      },
      {
        question: "Can an in-house team find creators without an agency?",
        answer:
          "Yes. With a clear brief, written selection criteria and a discovery tool, an in-house marketer can research and shortlist creators efficiently. Kudozz Discovery, for example, helps with finding Instagram creators in India, but outreach, negotiation, contracts and measurement still need to be handled by the team.",
      },
      {
        question: "What should we keep control of if we use an agency?",
        answer:
          "Final approvals, contracts and usage rights in the brand's name, access to creator records and raw results data, and a clear exit clause covering handover. That way the relationships and the learning stay with the brand if the agency changes.",
      },
    ],
  },
];
