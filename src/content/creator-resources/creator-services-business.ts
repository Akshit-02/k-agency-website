import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_8_PUBLISHED as PUBLISHED } from "@/content/creator-resources/shared";

/**
 * Creator services (700–749 layer): the services pillar, consulting,
 * coaching, offer packaging, service pricing, discovery calls and client
 * onboarding. Proposals (726), retention (728) and case studies (729) are
 * covered by existing guides.
 */
export const creatorServicesPosts: BlogPost[] = [
  {
    slug: "creator-services",
    category: "Creator Resources",
    title: "Creator Services: How to Turn Your Expertise Into a Paid Service",
    seoTitle: "Creator Services: Turn Your Expertise Into a Paid Service",
    excerpt:
      "How creators turn expertise into paid services: the main service types (consulting, coaching, done-for-you, audits, speaking), choosing one that fits your skills and audience, the service business journey from offer to retention, and how services fit with content and products.",
    metaDescription:
      "How creators turn expertise into paid services: consulting, coaching, done-for-you, audits and speaking, choosing a service, and the journey from offer to retention.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator services", "sell services as a creator", "turn expertise into income", "creator consulting coaching", "done for you services creators", "service business creators"],
    related: ["creator-offer-packaging", "creator-service-pricing", "creator-business-model"],
    body: [
      {
        type: "paragraph",
        text: "Many creators have expertise their audience would pay for directly: a finance creator who could review someone's budget, a designer who could fix a brand's Instagram grid, a fitness coach who could build a personal plan. Services are often the fastest way for a creator with a specialist audience to earn meaningful income, because one client can be worth more than thousands of views. They're also limited by your time, which is why structure matters.",
      },
      {
        type: "paragraph",
        text: "This is the pillar guide for Kudozz's creator services section. It connects the guides on offer packaging, service pricing, discovery calls, proposals, onboarding, retention and case studies. For how services fit with other income, see creator business model.",
      },
      {
        type: "paragraph",
        text: "Related: creator business model and creator offer packaging.",
        links: [
          { text: "creator business model", href: "/blog/creator-business-model" },
          { text: "creator offer packaging", href: "/blog/creator-offer-packaging" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator services are paid work you do directly for clients using your expertise: consulting and advice, coaching, done-for-you work, audits and reviews, workshops for teams, and speaking. Choose a service that solves a valuable problem for people in or near your audience, that you can deliver well, and that fits your time. Package it with a clear outcome and scope, price it by value and time, sell it through content and a simple enquiry process, deliver it with a repeatable onboarding and delivery system, and turn results into proof and repeat business.",
      },
      { type: "heading", text: "The main service types", id: "types" },
      {
        type: "table",
        headers: ["Type", "What you sell", "Example (illustrative)"],
        rows: [
          ["Consulting / advisory", "Expert recommendations", "A D2C brand's creator strategy review"],
          ["Coaching", "Guided progress over time", "8-week career switch coaching"],
          ["Done-for-you", "You do the work", "Instagram content production for a clinic"],
          ["Audits and reviews", "A structured assessment", "YouTube channel audit; portfolio review"],
          ["Team workshops", "Training for a group", "Social media training for a small business"],
          ["Speaking", "Talks at events or companies", "College or corporate sessions"],
          ["UGC and content services", "Content made for brands' own channels", "UGC videos for ads"],
        ],
      },
      {
        type: "paragraph",
        text: "Consulting and coaching have their own guides.",
      },
      {
        type: "paragraph",
        text: "Guides: creator consulting services and creator coaching business.",
        links: [
          { text: "creator consulting services", href: "/blog/creator-consulting-services" },
          { text: "creator coaching business", href: "/blog/creator-coaching-business" },
        ],
      },
      { type: "heading", text: "Is a service right for you?", id: "fit" },
      {
        type: "template",
        label: "Service fit check",
        text: "☐ People already ask me for personal help with this\n☐ I can deliver a clear result, not just information\n☐ The problem is valuable enough to pay for\n☐ I have time each week I can reliably sell\n☐ I'm comfortable with client communication and deadlines",
      },
      { type: "heading", text: "The service business journey", id: "journey" },
      {
        type: "image",
        src: "/blog/creator-resources/creator-service-journey.svg",
        alt: "Creator service business journey: expertise, offer, pricing, lead, discovery, proposal, client, delivery, results, retention",
        caption: "Each step has its own guide in this section.",
        width: 1200,
        height: 675,
      },
      {
        type: "table",
        headers: ["Step", "Guide"],
        rows: [
          ["Offer", "Creator offer packaging"],
          ["Pricing", "Creator service pricing"],
          ["Lead and discovery", "Creator discovery call"],
          ["Proposal", "Creator campaign proposal (includes service proposals)"],
          ["Client onboarding", "Creator client onboarding"],
          ["Retention", "Creator client management"],
          ["Proof", "Creator case study"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: creator service pricing, creator discovery call, creator proposals, creator client onboarding, creator client management and creator case study.",
        links: [
          { text: "creator service pricing", href: "/blog/creator-service-pricing" },
          { text: "creator discovery call", href: "/blog/creator-discovery-call" },
          { text: "creator proposals", href: "/blog/creator-campaign-proposal" },
          { text: "creator client onboarding", href: "/blog/creator-client-onboarding" },
          { text: "creator client management", href: "/blog/creator-client-management" },
          { text: "creator case study", href: "/blog/creator-case-study" },
        ],
      },
      { type: "heading", text: "Services and content work together", id: "content" },
      {
        type: "paragraph",
        text: "Content attracts clients by showing how you think; clients give you real problems to make content about (anonymised and with permission). Many creators use services early to earn and learn, then turn repeated patterns into products or courses that scale beyond their hours.",
      },
      { type: "heading", text: "Protect your time", id: "time" },
      {
        type: "list",
        items: [
          "Limit the number of clients per month.",
          "Use packages instead of open-ended hourly work.",
          "Batch calls on set days.",
          "Raise prices as demand grows.",
          "Productise repeated work into templates or courses.",
        ],
      },
      { type: "heading", text: "Examples by creator type", id: "examples" },
      {
        type: "table",
        headers: ["Creator", "Service (illustrative)"],
        rows: [
          ["Finance educator", "One-hour money plan session for first-job earners (not investment advice unless registered)"],
          ["Designer", "Brand kit design for small businesses"],
          ["Photographer", "Product shoot packages for D2C brands"],
          ["LinkedIn creator", "Profile and content strategy for founders"],
          ["Fitness creator", "Personalised training plan with monthly check-ins"],
          ["Regional-language creator", "Social media workshops for local businesses"],
        ],
      },
      { type: "heading", text: "Regulated advice", id: "regulated" },
      {
        type: "paragraph",
        text: "Some areas, such as investment advice, legal advice, medical advice and tax, have professional and regulatory rules. Offer services within your qualifications, and be clear about what you do and don't provide.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Vague offers (\"DM me for help\").",
          "Open-ended hourly work with no scope.",
          "Underpricing because it feels awkward to charge.",
          "Taking every client regardless of fit.",
          "No system for delivery, so quality depends on memory.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator services turn expertise into direct income. Choose a service that solves a valuable problem you can deliver, package it clearly, price it well, sell it through content and a simple process, deliver with a system and turn results into proof and repeat clients.",
      },
    ],
    faqs: [
      {
        question: "What services can creators sell?",
        answer:
          "Consulting, coaching, done-for-you work, audits and reviews, team workshops, speaking, and UGC or content production for brands, based on the creator's expertise.",
      },
      {
        question: "Are services a good income stream for small creators?",
        answer:
          "They can be, because a specialist audience of any size can include people willing to pay for expert help. Services are limited by your time, so package and price them carefully.",
      },
      {
        question: "How do creators find clients for services?",
        answer:
          "Through content that shows their expertise, a clear offer and enquiry page, referrals from past clients and relevant communities.",
      },
    ],
  },
  {
    slug: "creator-consulting-services",
    category: "Creator Resources",
    title: "How Creators Can Sell Consulting and Advisory Services",
    seoTitle: "How Creators Can Sell Consulting and Advisory Services",
    excerpt:
      "How creators turn niche expertise into consulting: who buys creator consulting, common consulting offers, scoping advice work, delivering recommendations that get used, pricing structures, contracts and confidentiality, and finding clients through content.",
    metaDescription:
      "How creators sell consulting: who buys it, common offers, scoping advisory work, delivering useful recommendations, pricing structures, contracts and finding clients.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator consulting", "sell consulting services", "advisory services creators", "consultant creator", "social media consulting India", "niche consulting"],
    related: ["creator-services", "creator-coaching-business", "creator-service-pricing"],
    body: [
      {
        type: "paragraph",
        text: "Consulting sells your judgement: you look at someone's situation and tell them what to do. Creators often become consultants almost by accident, when businesses start asking \"could you look at our Instagram?\" or \"can you advise our team on creator campaigns?\" Turning that into a real offer means defining the question you answer, the deliverable you hand over and the boundaries of the engagement.",
      },
      {
        type: "paragraph",
        text: "This guide covers consulting and advisory work. Guided, ongoing behaviour change is coaching; see creator coaching business. Pricing is covered in creator service pricing.",
        links: [
          { text: "creator coaching business", href: "/blog/creator-coaching-business" },
          { text: "creator service pricing", href: "/blog/creator-service-pricing" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator consulting means selling expert recommendations to businesses or individuals. Define a specific problem you solve (for example a channel audit or a creator marketing plan), a clear deliverable (a report, a plan, a recorded review), a process (intake, analysis, session, follow-up) and boundaries (what's included, how many calls, who implements). Price by project or retainer rather than open-ended hours, use a written agreement with confidentiality terms, and find clients through content that demonstrates your thinking and through referrals.",
      },
      { type: "heading", text: "Who buys creator consulting?", id: "buyers" },
      {
        type: "table",
        headers: ["Buyer", "Typical need"],
        rows: [
          ["Small businesses and D2C brands", "Social media or creator marketing strategy"],
          ["Other creators", "Channel audits, niche and monetization advice"],
          ["Startups and founders", "Founder content, community, launch strategy"],
          ["Agencies", "Specialist input on a platform or niche"],
          ["Individuals", "Personal plans in your area of expertise"],
        ],
      },
      { type: "heading", text: "Common consulting offers", id: "offers" },
      {
        type: "table",
        headers: ["Offer", "Deliverable"],
        rows: [
          ["Audit", "Written findings and prioritised recommendations"],
          ["Strategy session", "A 90-minute session plus a summary"],
          ["Plan", "A 90-day plan with milestones"],
          ["Advisory retainer", "Monthly calls and async questions"],
          ["Second opinion", "Review of a plan, brief or campaign"],
        ],
      },
      { type: "heading", text: "Scope it clearly", id: "scope" },
      {
        type: "template",
        label: "Consulting scope (template)",
        text: "Question we're answering:\nWhat I'll review:\nDeliverable and format:\nCalls included:\nTimeline:\nNot included (implementation, extra reviews):\nClient provides: access, data, context by [date]",
      },
      {
        type: "paragraph",
        text: "Offer packaging covers turning this into a named, repeatable offer.",
      },
      {
        type: "paragraph",
        text: "Packaging: creator offer packaging.",
        links: [{ text: "creator offer packaging", href: "/blog/creator-offer-packaging" }],
      },
      { type: "heading", text: "Deliver recommendations that get used", id: "deliver" },
      {
        type: "list",
        items: [
          "Prioritise: three things to do first beat a list of thirty.",
          "Be specific: \"Post two carousels a week on X\" not \"improve content\".",
          "Explain why, with evidence from their data.",
          "Give a next step and an owner for each recommendation.",
          "Follow up after a few weeks.",
        ],
      },
      { type: "heading", text: "Pricing structures", id: "pricing" },
      {
        type: "table",
        headers: ["Structure", "Good for"],
        rows: [
          ["Fixed project fee", "Audits, plans, reviews"],
          ["Session fee", "One-off advice"],
          ["Monthly retainer", "Ongoing advisory"],
          ["Day rate", "Workshops or intensive sessions"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator service pricing explains how to set the numbers.",
      },
      { type: "heading", text: "Contracts and confidentiality", id: "contracts" },
      {
        type: "paragraph",
        text: "Put scope, fee, payment terms, confidentiality and how you'll use (or not use) client information in writing. Don't share client data or results publicly without permission. Creator contracts vs emails explains what should be in writing.",
      },
      {
        type: "paragraph",
        text: "Terms: creator contracts vs emails.",
        links: [{ text: "creator contracts vs emails", href: "/blog/creator-contracts-vs-emails" }],
      },
      { type: "heading", text: "Finding clients", id: "clients" },
      {
        type: "paragraph",
        text: "Content that shows your reasoning (teardowns, audits of public examples, frameworks) attracts consulting clients better than generic tips. Add a clear \"work with me\" page and enquiry form, and ask happy clients for referrals. Creator discovery call covers the first conversation.",
      },
      {
        type: "paragraph",
        text: "Discovery: creator discovery call.",
        links: [{ text: "creator discovery call", href: "/blog/creator-discovery-call" }],
      },
      { type: "heading", text: "Worked example: a creator marketing audit for a D2C brand", id: "example" },
      {
        type: "template",
        label: "Illustrative: a creator who runs a food channel and advises small food brands",
        text: "Offer: \"Creator marketing audit\" · fixed fee · 10 working days\nIntake: brand's goals, past creator campaigns, budget range, access to results\nProcess:\n• Review last 6 months of creator collaborations and results\n• Review 10 comparable creators in the category (public content only)\n• 60-minute session to present findings\nDeliverable: 8-page report: what worked, what didn't, 3 priorities for next quarter, a sample brief\nNot included: running campaigns, creator outreach, contract negotiation\nFollow-up: 30-day check-in call",
      },
      {
        type: "paragraph",
        text: "The audit was specific enough to price, deliver and repeat, and it led naturally to a monthly advisory retainer with two brands.",
      },
      { type: "heading", text: "Consulting vs agency work", id: "vs-agency" },
      {
        type: "table",
        headers: ["", "Consulting", "Agency or managed service"],
        rows: [
          ["You provide", "Recommendations", "Execution"],
          ["Client does", "Implementation", "Approvals"],
          ["Pricing", "Project or retainer", "Scope and volume"],
          ["Scale", "Limited by your time", "Needs a team"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Open-ended advice with no deliverable.",
          "Doing implementation for free.",
          "Recommendations too generic to act on.",
          "No confidentiality terms.",
          "Pricing by the hour for high-value advice.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator consulting sells judgement. Define the problem you solve, the deliverable and the boundaries, price by project or retainer, protect confidentiality and let content that shows your thinking attract clients.",
      },
    ],
    faqs: [
      {
        question: "How do creators start consulting?",
        answer:
          "Define a specific problem you solve and a clear deliverable, such as an audit or plan, set boundaries and a fixed price, and share content that demonstrates your thinking.",
      },
      {
        question: "What's the difference between consulting and coaching?",
        answer:
          "Consulting gives expert recommendations on a situation; coaching guides someone's progress over time while they do the work.",
      },
      {
        question: "Should consultants charge by the hour?",
        answer:
          "Project fees or retainers usually fit better, because clients pay for the outcome and expertise rather than hours.",
      },
    ],
  },
  {
    slug: "creator-coaching-business",
    category: "Creator Resources",
    title: "Creator Coaching Business: How to Turn Expertise Into a Coaching Offer",
    seoTitle: "Creator Coaching Business: Build a Coaching Offer",
    excerpt:
      "How creators build a coaching offer: one-to-one vs group coaching, defining the transformation and programme, session structure, accountability, ethical boundaries and regulated topics, pricing and capacity, and growing through results.",
    metaDescription:
      "How creators build a coaching business: one-to-one vs group coaching, programme design, session structure, accountability, ethical limits, pricing and capacity.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator coaching business", "coaching offer", "online coaching India", "group coaching creators", "how to start coaching", "coaching programme design"],
    related: ["creator-services", "creator-consulting-services", "creator-offer-packaging"],
    body: [
      {
        type: "paragraph",
        text: "Coaching sells guided progress. The client does the work; the coach provides structure, feedback and accountability until they reach a result. Creators with engaged audiences often have people asking for exactly that: \"Can you help me stick to this?\" \"Can you check my progress?\" A coaching offer turns those requests into a programme with a clear outcome.",
      },
      {
        type: "paragraph",
        text: "This guide covers building a coaching offer. For advice-based work, see creator consulting services; for packaging and pricing, see creator offer packaging and creator service pricing.",
        links: [
          { text: "creator consulting services", href: "/blog/creator-consulting-services" },
          { text: "creator offer packaging", href: "/blog/creator-offer-packaging" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To build a creator coaching business: define the specific result you help people reach and who it's for, choose one-to-one or group coaching, design a programme with a set length and milestones, structure sessions and accountability between them, set clear ethical boundaries (especially in health, finance, mental health and legal topics), price by the result and your capacity, and grow through documented client results and referrals.",
      },
      { type: "heading", text: "One-to-one vs group coaching", id: "formats" },
      {
        type: "table",
        headers: ["", "One-to-one", "Group"],
        rows: [
          ["Personal attention", "High", "Moderate"],
          ["Price per person", "Higher", "Lower"],
          ["Your time per client", "High", "Shared"],
          ["Community and peer learning", "None", "Strong"],
          ["Best for", "Complex, personal goals", "Common goals, accountability"],
        ],
      },
      {
        type: "paragraph",
        text: "Many creators start with a few one-to-one clients to learn, then create a group programme.",
      },
      { type: "heading", text: "Design the programme", id: "programme" },
      {
        type: "template",
        label: "Programme design (illustrative: 8-week career switch coaching)",
        text: "Outcome: interview-ready for a first role in [field]\nWeek 1: assessment and goals\nWeeks 2–3: CV and LinkedIn rebuild\nWeeks 4–5: portfolio project\nWeeks 6–7: interview practice\nWeek 8: application plan and next steps\nBetween sessions: weekly check-in form; async questions",
      },
      { type: "heading", text: "Session structure and accountability", id: "sessions" },
      {
        type: "list",
        items: [
          "Start with progress since last session.",
          "Work on one main challenge.",
          "Agree specific actions and a deadline.",
          "Check in between sessions (form, message or group thread).",
          "Track progress against the programme milestones.",
        ],
      },
      { type: "heading", text: "Ethical boundaries", id: "ethics" },
      {
        type: "paragraph",
        text: "Coaching isn't therapy, medical treatment, legal advice or investment advice. In India, giving investment advice for a fee generally requires SEBI registration, and health and mental health support may require qualified professionals. Be clear about what you offer, refer out when needed and don't promise specific outcomes such as a job, income or weight loss.",
      },
      { type: "heading", text: "Pricing and capacity", id: "pricing" },
      {
        type: "paragraph",
        text: "Price by the value of the result and the support included, then check your capacity: how many clients can you coach well each week? Group programmes let you serve more people at a lower price each. Creator service pricing covers the numbers.",
      },
      {
        type: "paragraph",
        text: "Pricing: creator service pricing.",
        links: [{ text: "creator service pricing", href: "/blog/creator-service-pricing" }],
      },
      { type: "heading", text: "Grow through results", id: "results" },
      {
        type: "paragraph",
        text: "Document progress with client permission, collect testimonials after results, and ask for referrals. Creator case study covers turning results into honest proof.",
      },
      {
        type: "paragraph",
        text: "Proof: creator case study.",
        links: [{ text: "creator case study", href: "/blog/creator-case-study" }],
      },
      { type: "heading", text: "Examples", id: "examples" },
      {
        type: "table",
        headers: ["Creator", "Coaching offer (illustrative)"],
        rows: [
          ["Fitness creator", "12-week group strength programme with weekly form checks"],
          ["LinkedIn creator", "6-week founder content coaching"],
          ["Language teacher", "Spoken English group coaching for job interviews"],
          ["Creator educator", "1:1 coaching for new YouTubers' first 90 days"],
        ],
      },
      { type: "heading", text: "Worked example: moving from 1:1 to group coaching", id: "example" },
      {
        type: "template",
        label: "Illustrative: a YouTube growth coach",
        text: "Months 1–4: 1:1 coaching, 6 clients at a time, fixed 8-week programme\nPattern noticed: 80% of sessions covered the same 5 topics (niche, titles, thumbnails, scripting, consistency)\nMonth 5: group programme launched\n• 8 weeks, 12 members, weekly live session + recorded lessons for the 5 topics\n• Fortnightly small-group feedback on members' videos\n• Community thread for accountability\n1:1 kept as a premium option with 2 seats\nResult: more people served at a lower price each; coach time per week roughly the same",
      },
      { type: "heading", text: "Coaching agreements", id: "agreement" },
      {
        type: "template",
        label: "Coaching agreement essentials",
        text: "Programme length and sessions · What's included between sessions · Rescheduling and no-show policy · Payment and refund terms · Confidentiality · What coaching isn't (therapy, medical, legal or investment advice) · Client responsibilities",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Selling \"sessions\" without a defined result.",
          "No structure between sessions.",
          "Promising outcomes you can't control.",
          "Coaching outside your qualifications.",
          "Taking more clients than you can serve well.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator coaching business sells guided progress. Define the result, choose one-to-one or group, design a programme with milestones and accountability, stay within ethical boundaries, price by value and capacity, and grow through documented results.",
      },
    ],
    faqs: [
      {
        question: "How do creators start a coaching business?",
        answer:
          "Define a specific result for a specific audience, design a programme with a set length and milestones, choose one-to-one or group format, price by value and capacity, and grow through documented results.",
      },
      {
        question: "Is group coaching better than one-to-one?",
        answer:
          "They suit different goals. One-to-one fits complex, personal goals; group coaching fits common goals and adds peer support at a lower price per person.",
      },
      {
        question: "Can creators coach on finance or health topics?",
        answer:
          "Only within their qualifications. Investment advice for a fee generally requires SEBI registration in India, and health or mental health support may need qualified professionals.",
      },
    ],
  },
  {
    slug: "creator-offer-packaging",
    category: "Creator Resources",
    title: "How to Package Your Expertise Into a High-Value Creator Offer",
    seoTitle: "How to Package Your Expertise Into a High-Value Offer",
    excerpt:
      "How creators turn scattered expertise into a clear, sellable offer: naming the outcome, choosing the vehicle, defining scope and deliverables, adding the right support, productised services, offer ladders and an offer builder template.",
    metaDescription:
      "How creators package expertise into a sellable offer: the outcome, vehicle, scope, deliverables, support level, productised services and an offer builder template.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator offer packaging", "package your expertise", "high value offer", "productised service", "offer design creators", "sellable offer"],
    related: ["creator-services", "creator-service-pricing", "creator-consulting-services"],
    body: [
      {
        type: "paragraph",
        text: "\"I can help with Instagram\" is expertise. \"A 30-day Instagram reset for local cafés: profile rebuild, 12 post templates and two review calls\" is an offer. The difference is what makes someone ready to pay: a specific outcome, for a specific person, delivered in a specific way, with clear limits.",
      },
      {
        type: "paragraph",
        text: "This guide covers packaging expertise into offers, for services and beyond. Pricing is covered in creator service pricing; the services journey in creator services.",
        links: [
          { text: "creator service pricing", href: "/blog/creator-service-pricing" },
          { text: "creator services", href: "/blog/creator-services" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To package expertise into an offer, define: who it's for, the specific outcome, the vehicle (session, audit, programme, done-for-you, product), what's included (deliverables, calls, templates, access), the timeline, what's not included, and the price. Give it a descriptive name, make the scope repeatable so you can deliver it consistently, and build an offer ladder from low-commitment to high-touch options.",
      },
      { type: "heading", text: "The offer builder", id: "builder" },
      {
        type: "template",
        label: "Offer builder",
        text: "Who it's for: [specific person or business]\nThe outcome: [what changes for them]\nVehicle: [audit / session / programme / done-for-you / product]\nIncludes: [deliverables, calls, templates, access]\nTimeline: [how long]\nNot included: [boundaries]\nProof: [examples, results, testimonials with permission]\nPrice: [see service pricing]\nName: [descriptive, outcome-led]",
      },
      { type: "heading", text: "Choose the vehicle", id: "vehicle" },
      {
        type: "table",
        headers: ["Vehicle", "Your time", "Client effort", "Scales?"],
        rows: [
          ["One-off session", "Low", "Medium", "No"],
          ["Audit or review", "Medium", "Low", "Somewhat (templates)"],
          ["Coaching programme", "High", "High", "Group format helps"],
          ["Done-for-you", "High", "Low", "Only with a team"],
          ["Digital product or course", "Upfront", "High", "Yes"],
        ],
      },
      { type: "heading", text: "Productised services", id: "productised" },
      {
        type: "paragraph",
        text: "A productised service has a fixed scope, fixed price and repeatable process, such as \"YouTube channel audit: ₹X, delivered in 7 days as a recorded review and a one-page plan\". Productising makes selling, delivering and pricing easier, and reduces scope creep.",
      },
      { type: "heading", text: "An offer ladder", id: "ladder" },
      {
        type: "table",
        headers: ["Rung", "Example (illustrative: YouTube educator)"],
        rows: [
          ["Free", "YouTube videos, newsletter"],
          ["Low-price product", "Script template pack"],
          ["Mid-price", "Group workshop on first 1,000 subscribers"],
          ["Higher-price", "90-day group coaching"],
          ["Premium", "1:1 channel strategy retainer"],
        ],
      },
      {
        type: "paragraph",
        text: "Ladders give people a next step at every level of commitment. Creator workshops and creator course business cover middle rungs.",
      },
      {
        type: "paragraph",
        text: "Middle rungs: creator workshops and creator course business.",
        links: [
          { text: "creator workshops", href: "/blog/creator-workshops" },
          { text: "creator course business", href: "/blog/creator-course-business" },
        ],
      },
      { type: "heading", text: "Name it for the outcome", id: "naming" },
      {
        type: "table",
        headers: ["Vague", "Outcome-led (illustrative)"],
        rows: [
          ["\"Consulting call\"", "\"Pricing review for UGC creators\""],
          ["\"Coaching\"", "\"First 10 clients programme for freelance designers\""],
          ["\"Instagram help\"", "\"30-day Instagram reset for cafés\""],
        ],
      },
      { type: "heading", text: "Test the offer", id: "test" },
      {
        type: "paragraph",
        text: "Offer it to three to five people from your audience, deliver it, collect feedback and refine scope and price before promoting widely. Creator digital product validation covers validation methods that also apply to services.",
      },
      {
        type: "paragraph",
        text: "Validation: creator digital product validation.",
        links: [{ text: "creator digital product validation", href: "/blog/creator-digital-product-validation" }],
      },
      { type: "heading", text: "Worked example: from \"I can help with LinkedIn\" to three offers", id: "example" },
      {
        type: "template",
        label: "Illustrative: a LinkedIn creator who writes about B2B sales",
        text: "Before: \"DM me if you want help with LinkedIn\"\nEnquiries showed three repeated needs: profile fixes, a posting plan, ongoing feedback\n\nOffer 1 (productised audit): \"LinkedIn profile teardown for B2B founders\"\n  Recorded 20-minute review + one-page fix list, delivered in 5 days · fixed price\nOffer 2 (programme): \"30-day founder posting sprint\"\n  Positioning session, 12 post outlines, 4 weekly feedback rounds · fixed price, 6 seats a month\nOffer 3 (retainer): \"Founder content advisor\"\n  Monthly strategy call + async review of 8 posts · monthly fee, 3 clients max\n\nResult: enquiries became easier to answer (\"the teardown is the right start\"), and the audit fed clients into the sprint.",
      },
      { type: "heading", text: "Common packaging decisions", id: "decisions" },
      {
        type: "table",
        headers: ["Decision", "Options", "Choose by"],
        rows: [
          ["Delivery", "Live, recorded, written", "What the client needs to act"],
          ["Duration", "One-off, weeks, monthly", "How long the result takes"],
          ["Group size", "1:1, small group, cohort", "Personal attention vs price"],
          ["Revisions", "None, one round, ongoing", "Whether the outcome needs iteration"],
          ["Guarantee", "None, satisfaction-based refund", "Your confidence and policy; never guarantee outcomes you don't control"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Offers named after what you do, not what clients get.",
          "No \"not included\" list.",
          "Too many options at once.",
          "Custom scope for every client.",
          "No next step after the first offer.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A high-value offer is expertise shaped around a specific outcome, with a clear vehicle, scope, timeline and price. Productise what you can, build an offer ladder and test with real clients before scaling.",
      },
    ],
    faqs: [
      {
        question: "How do creators package their expertise?",
        answer:
          "Define who it's for, the outcome, the delivery vehicle, what's included and not included, the timeline and the price, and give it an outcome-led name.",
      },
      {
        question: "What is a productised service?",
        answer:
          "A service with fixed scope, fixed price and a repeatable process, such as a channel audit delivered in seven days.",
      },
      {
        question: "What is an offer ladder?",
        answer:
          "A set of offers at increasing levels of price and support, from free content to low-price products, workshops, programmes and premium one-to-one work.",
      },
    ],
  },
  {
    slug: "creator-service-pricing",
    category: "Creator Resources",
    title: "Creator Service Pricing: How to Price Consulting, Coaching and Freelance Services",
    seoTitle: "Creator Service Pricing: Price Consulting, Coaching, Freelance",
    excerpt:
      "How creators price services: hourly, project, package, retainer and value-based models, working out your minimum rate from income goals and capacity, pricing by outcome, deposits and payment terms, raising rates and avoiding scope creep.",
    metaDescription:
      "How creators price services: hourly, project, package, retainer and value-based pricing, a minimum rate from capacity, deposits, raising rates and scope creep.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator service pricing", "price consulting services", "coaching pricing India", "freelance pricing creators", "retainer pricing", "value based pricing"],
    related: ["creator-offer-packaging", "creator-pricing-strategy", "creator-services"],
    body: [
      {
        type: "paragraph",
        text: "Service pricing goes wrong in two predictable ways. Creators either price by the hour and cap their income at the hours they can bear to work, or they pick a number that feels comfortable and discover later that it doesn't cover the preparation, admin and follow-up around each session.",
      },
      {
        type: "paragraph",
        text: "This guide covers pricing services. Pricing across all your offers (brand deals, products, memberships) is in creator pricing strategy; brand deliverables in how much creators should charge.",
        links: [
          { text: "creator pricing strategy", href: "/blog/creator-pricing-strategy" },
          { text: "how much creators should charge", href: "/blog/how-much-should-creators-charge-india" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Price creator services by first calculating your minimum sustainable rate (income target plus costs, divided by realistically billable hours), then choosing a model that fits the service: project or package fees for defined outcomes, retainers for ongoing work, session fees for one-off advice and value-based pricing where the outcome is clearly worth more than your time. Include preparation and admin time, take deposits, put scope in writing and raise prices as demand and proof grow.",
      },
      { type: "heading", text: "Pricing models", id: "models" },
      {
        type: "table",
        headers: ["Model", "How it works", "Best for"],
        rows: [
          ["Hourly", "Rate × hours", "Uncertain scope, short tasks"],
          ["Session", "Fixed fee per session", "One-off advice"],
          ["Project", "Fixed fee for a defined deliverable", "Audits, plans, builds"],
          ["Package", "Bundle of sessions or deliverables", "Coaching programmes"],
          ["Retainer", "Monthly fee for ongoing work", "Advisory, done-for-you"],
          ["Value-based", "Priced on the outcome's value to the client", "High-impact business work"],
        ],
      },
      { type: "heading", text: "Your minimum sustainable rate", id: "minimum" },
      {
        type: "template",
        label: "Minimum rate (illustrative, use your own numbers)",
        text: "Annual income target: ₹12,00,000\n+ Annual business costs: ₹1,80,000\n= ₹13,80,000 needed\nBillable hours: 20 hours/week × 44 weeks = 880 hours\nMinimum hourly equivalent ≈ ₹1,568",
      },
      {
        type: "paragraph",
        text: "Billable hours are fewer than working hours: marketing, admin, content and learning take time too. Use this as a floor, not a price.",
      },
      { type: "heading", text: "Include the hidden time", id: "hidden-time" },
      {
        type: "paragraph",
        text: "A one-hour coaching session may involve 30 minutes of preparation, 15 minutes of notes and messages afterwards, and admin. Price the whole block, or build it into package prices.",
      },
      { type: "heading", text: "From hours to packages", id: "packages" },
      {
        type: "template",
        label: "Package example (illustrative: Instagram strategy for small businesses)",
        text: "Audit + 90-min strategy session + written plan + one follow-up call\nEstimated time: 8 hours → floor at minimum rate ≈ ₹12,500\nValue to client: clearer plan for months of marketing\nPackage price: set above the floor based on value, demand and proof",
      },
      { type: "heading", text: "Value-based pricing, carefully", id: "value" },
      {
        type: "paragraph",
        text: "When a service clearly affects revenue or major costs (a launch strategy, a sales process), price relative to that value, not hours. Base it on honest estimates you can discuss with the client, never guaranteed outcomes.",
      },
      { type: "heading", text: "Deposits and payment terms", id: "payment" },
      {
        type: "paragraph",
        text: "Take a deposit or full payment before starting smaller projects, and milestone payments for larger ones. State cancellation and rescheduling terms. Creator payment terms covers negotiating terms with businesses.",
      },
      {
        type: "paragraph",
        text: "Terms: creator payment terms.",
        links: [{ text: "creator payment terms", href: "/blog/creator-payment-terms" }],
      },
      { type: "heading", text: "Scope creep", id: "scope" },
      {
        type: "paragraph",
        text: "Write down what's included and not included. When clients ask for more, quote it as an add-on or a new project. Creator offer packaging covers defining scope.",
      },
      {
        type: "paragraph",
        text: "Scope: creator offer packaging.",
        links: [{ text: "creator offer packaging", href: "/blog/creator-offer-packaging" }],
      },
      { type: "heading", text: "Raise rates as demand grows", id: "raise" },
      {
        type: "paragraph",
        text: "Signs to raise prices: you're fully booked, most clients accept without negotiation, and you have results and testimonials. Give existing clients notice. How to raise creator rates covers the conversation.",
      },
      {
        type: "paragraph",
        text: "Raising: how to raise creator rates.",
        links: [{ text: "how to raise creator rates", href: "/blog/how-to-raise-creator-rates" }],
      },
      { type: "heading", text: "GST and invoicing", id: "gst" },
      {
        type: "paragraph",
        text: "If you're GST-registered, GST applies to services as advised by your accountant. Invoice properly and keep records. See GST for creators and how to invoice brands.",
        links: [
          { text: "GST for creators", href: "/blog/gst-for-influencers-india" },
          { text: "how to invoice brands", href: "/blog/how-to-invoice-brands-as-a-creator-india" },
        ],
      },
      { type: "heading", text: "Worked example: moving from hourly to packages", id: "example" },
      {
        type: "template",
        label: "Illustrative: a freelance video editor who also creates content",
        text: "Before: hourly rate; clients disputed hours; income varied widely\nMinimum sustainable rate calculated from income target, costs and billable hours\nNew packages:\n• Short-form pack: 8 Reels/month, 2 revision rounds each, 5-day turnaround\n• YouTube pack: 2 long-form edits/month + 6 Shorts cut-downs\n• Retainer: priority turnaround + monthly strategy call\nResult: fewer disputes, predictable income, easier renewals; hourly kept only for small one-off fixes",
      },
      { type: "heading", text: "A simple pricing sheet", id: "sheet" },
      {
        type: "template",
        label: "Service pricing sheet",
        text: "Minimum sustainable hourly equivalent: ₹___\nPackage | Est. hours | Floor (hours × minimum) | Price | Margin above floor\nAudit     |           |                        |       |\nProgramme |           |                        |       |\nRetainer  |           |                        |       |\nReview quarterly against demand and results",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Pricing only by the hour, capped by your time.",
          "Forgetting preparation and admin.",
          "No deposit.",
          "Unwritten scope.",
          "Never raising prices.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Service pricing starts from a sustainable floor, then moves to packages, retainers or value-based fees that reflect outcomes. Include hidden time, take deposits, protect scope and raise prices as proof and demand grow.",
      },
    ],
    faqs: [
      {
        question: "How should creators price consulting or coaching?",
        answer:
          "Calculate a minimum sustainable rate from your income target, costs and billable hours, then price packages or projects above that floor based on the value of the outcome and demand.",
      },
      {
        question: "Should creators charge hourly for services?",
        answer:
          "Hourly works for short, uncertain tasks. For defined outcomes, packages, projects and retainers usually work better for both sides.",
      },
      {
        question: "Should creators take a deposit?",
        answer:
          "Yes. A deposit or upfront payment reduces no-shows and late payments, especially with new clients.",
      },
    ],
  },
  {
    slug: "creator-discovery-call",
    category: "Creator Resources",
    title: "Creator Discovery Call: How to Structure a Call With a Potential Client",
    seoTitle: "Creator Discovery Call: Run a Call With a Potential Client",
    excerpt:
      "How creators run discovery calls that help both sides decide: pre-call qualification, a 30-minute call structure, the questions to ask, explaining your offer and price, handling objections honestly, next steps and follow-up templates.",
    metaDescription:
      "How creators run discovery calls: pre-call qualification, a 30-minute structure, questions to ask, presenting the offer and price, objections and follow-up.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["creator discovery call", "discovery call questions", "sales call for coaches", "consultation call structure", "client call creators", "discovery call template"],
    related: ["creator-service-pricing", "creator-client-onboarding", "creator-offer-packaging"],
    body: [
      {
        type: "paragraph",
        text: "A discovery call isn't a sales pitch. It's a short conversation to find out whether you can genuinely help someone, and whether they're ready to work with you. Run well, it makes the decision easy for both sides: a clear yes, a clear no, or a referral elsewhere.",
      },
      {
        type: "paragraph",
        text: "This guide covers the call itself. What happens after a yes is in creator client onboarding; the offer and price you'll present are in creator offer packaging and creator service pricing.",
        links: [
          { text: "creator client onboarding", href: "/blog/creator-client-onboarding" },
          { text: "creator offer packaging", href: "/blog/creator-offer-packaging" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator discovery call is a 20- to 30-minute conversation with a potential client to understand their situation, goals and constraints, check fit, and explain how you'd help and at what price. Qualify people before booking with a short form, follow a simple structure (context, goals, obstacles, fit, offer, next steps), listen more than you talk, share the price clearly, handle objections honestly, and send a written summary and proposal or payment link within a day.",
      },
      { type: "heading", text: "Qualify before the call", id: "qualify" },
      {
        type: "template",
        label: "Pre-call form (short)",
        text: "Name and business/role\nWhat would you like help with?\nWhat have you tried?\nTimeline\nBudget range (optional but useful)\nHow did you find me?",
      },
      {
        type: "paragraph",
        text: "Share your starting price on your booking page to filter out people for whom it won't work.",
      },
      { type: "heading", text: "A 30-minute call structure", id: "structure" },
      {
        type: "table",
        headers: ["Minutes", "Stage", "Goal"],
        rows: [
          ["0–3", "Welcome and agenda", "Set expectations"],
          ["3–10", "Current situation", "Understand context"],
          ["10–17", "Goals and obstacles", "What success looks like; what's in the way"],
          ["17–22", "Fit", "Decide honestly if you can help"],
          ["22–27", "Offer and price", "Explain how you'd help and cost"],
          ["27–30", "Next steps", "Agree what happens next"],
        ],
      },
      { type: "heading", text: "Questions to ask", id: "questions" },
      {
        type: "list",
        items: [
          "What made you look for help now?",
          "What does success look like in three months?",
          "What have you tried, and what happened?",
          "What's the biggest obstacle?",
          "Who else is involved in the decision?",
          "What's your timeline?",
        ],
      },
      { type: "heading", text: "Presenting the offer and price", id: "price" },
      {
        type: "paragraph",
        text: "State the offer and price plainly: \"Based on what you've said, the 8-week programme fits. It includes X, Y and Z, and the price is ₹__.\" Then stop talking and let them respond. Offer one alternative at most (a smaller option) rather than a menu.",
      },
      { type: "heading", text: "Handling objections honestly", id: "objections" },
      {
        type: "table",
        headers: ["Objection", "Honest response"],
        rows: [
          ["\"It's expensive\"", "Explain what's included; offer a smaller option if one genuinely exists"],
          ["\"I need to think\"", "Agree a date to follow up; ask what they'd need to decide"],
          ["\"Will this work for me?\"", "Share relevant examples, and be honest about what depends on them"],
          ["\"Can you guarantee results?\"", "No; explain what you commit to and what they commit to"],
        ],
      },
      {
        type: "paragraph",
        text: "If you can't help, say so and suggest another route. It builds reputation.",
      },
      { type: "heading", text: "Follow-up", id: "follow-up" },
      {
        type: "template",
        label: "Follow-up email",
        text: "Hi [Name], thanks for the call.\n\nSummary: you want [goal] by [time]; the main obstacle is [obstacle].\nRecommended: [offer], including [items], at ₹[price].\nNext step: [payment link / proposal / onboarding form].\n\nHappy to answer any questions.",
      },
      {
        type: "paragraph",
        text: "Larger engagements may need a written proposal; see creator campaign proposal, which includes service proposals.",
      },
      {
        type: "paragraph",
        text: "Proposals: creator proposals.",
        links: [{ text: "creator proposals", href: "/blog/creator-campaign-proposal" }],
      },
      { type: "heading", text: "Worked example: a discovery call that ended in a referral", id: "example" },
      {
        type: "template",
        label: "Illustrative: a consultant who helps creators with brand pricing",
        text: "Pre-call form: \"I'm a food creator, 40K followers, getting brand offers but unsure what to charge\"\nCall:\n• Situation: 3 inbound offers a month, quoting ₹5,000 per Reel, most accepted instantly\n• Goal: price confidently, raise rates without losing deals\n• Obstacle: no view data organised, no rate card\n• Fit: good for the \"pricing sprint\" (2 sessions + rate card review)\n• Offer and price stated; question: \"Is it worth it at my size?\" → answered with what the sprint covers, no promises about income\nOutcome: booked",
      },
      {
        type: "template",
        label: "Another call",
        text: "Pre-call form: \"Need help with my restaurant's Instagram ads\"\nFit: poor (paid ads management isn't the consultant's service)\nOutcome: politely declined; suggested a paid-ads specialist",
      },
      {
        type: "paragraph",
        text: "Both outcomes are good: a clear yes and an honest no.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Pitching before understanding the problem.",
          "Avoiding the price until the end email.",
          "Offering many options at once.",
          "Pressure tactics or false scarcity.",
          "No written follow-up.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A discovery call helps both sides decide. Qualify first, follow a simple structure, listen more than you speak, state the offer and price plainly, handle objections honestly and follow up in writing the same day.",
      },
    ],
    faqs: [
      {
        question: "What is a discovery call?",
        answer:
          "A short conversation with a potential client to understand their situation and goals, check fit, and explain how you'd help and at what price.",
      },
      {
        question: "How long should a discovery call be?",
        answer:
          "Usually 20 to 30 minutes, enough to understand the situation, check fit and agree next steps.",
      },
      {
        question: "Should I mention price on a discovery call?",
        answer:
          "Yes. State it clearly once you've recommended an offer. Sharing a starting price on your booking page also helps filter enquiries.",
      },
    ],
  },
  {
    slug: "creator-client-onboarding",
    category: "Creator Resources",
    title: "Creator Client Onboarding: A Complete Process for New Clients",
    seoTitle: "Creator Client Onboarding: A Complete Process for New Clients",
    excerpt:
      "A client onboarding process for creators selling services: confirmation and agreement, payment, a welcome pack, intake forms and access, kickoff call, communication rules, first quick win and how onboarding sets up retention.",
    metaDescription:
      "A client onboarding process for creator services: agreement and payment, welcome pack, intake and access, kickoff call, communication rules and a first quick win.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["creator client onboarding", "client onboarding process", "onboarding checklist coaches", "new client welcome pack", "consulting onboarding", "freelance onboarding"],
    related: ["creator-discovery-call", "creator-client-management", "creator-services"],
    body: [
      {
        type: "paragraph",
        text: "The first week with a new client decides much of how the engagement goes. Clients who get a clear welcome, know what happens next and see an early result tend to stay engaged. Clients who wait days for access, don't know how to reach you and aren't sure what they've bought tend to drift, ask for refunds or never come back.",
      },
      {
        type: "paragraph",
        text: "This guide covers onboarding new service clients. The call before it is in creator discovery call; managing clients over time is in creator client management.",
        links: [
          { text: "creator discovery call", href: "/blog/creator-discovery-call" },
          { text: "creator client management", href: "/blog/creator-client-management" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator client onboarding process has seven steps: confirm the agreement in writing, take payment or deposit, send a welcome pack (what's included, timeline, how to communicate), collect intake information and access, hold a kickoff call to agree goals and first actions, set communication rules and response times, and deliver a quick first win. Use templates and a checklist so every client gets the same experience.",
      },
      { type: "heading", text: "The seven steps", id: "steps" },
      {
        type: "table",
        headers: ["Step", "What", "Tool"],
        rows: [
          ["1. Confirm", "Scope, price, timeline, terms in writing", "Agreement or confirmation email"],
          ["2. Payment", "Deposit or full payment", "Invoice or payment link"],
          ["3. Welcome", "Welcome pack", "Email or PDF"],
          ["4. Intake", "Questions, data, access", "Form"],
          ["5. Kickoff", "Goals, priorities, first actions", "30–60 min call"],
          ["6. Communication", "Channels, response times, meeting rhythm", "Welcome pack"],
          ["7. First win", "A quick visible result", "Early deliverable"],
        ],
      },
      {
        type: "paragraph",
        text: "Written terms: creator contracts vs emails.",
        links: [{ text: "creator contracts vs emails", href: "/blog/creator-contracts-vs-emails" }],
      },
      { type: "heading", text: "The welcome pack", id: "welcome" },
      {
        type: "template",
        label: "Welcome pack contents",
        text: "• What's included and not included\n• Timeline and milestones\n• What I need from you, and by when\n• How to reach me; response times; working hours\n• Meeting schedule and how to reschedule\n• Payment schedule and invoices\n• Refund or cancellation terms",
      },
      { type: "heading", text: "Intake and access", id: "intake" },
      {
        type: "paragraph",
        text: "Ask only for what you need: goals, current situation, past attempts, relevant data and access (analytics viewer access, shared folders). Prefer view-only access, never ask for passwords when a platform offers role-based access, and store client information securely.",
      },
      { type: "heading", text: "Kickoff call", id: "kickoff" },
      {
        type: "list",
        items: [
          "Restate the goal and success measures.",
          "Agree the first two or three priorities.",
          "Confirm who's involved and how decisions are made.",
          "Agree the first actions and dates.",
        ],
      },
      { type: "heading", text: "Deliver a quick first win", id: "first-win" },
      {
        type: "paragraph",
        text: "A small early result (a quick audit finding, a fixed profile, a first plan) builds confidence and momentum. Plan it into the first week.",
      },
      { type: "heading", text: "Make onboarding repeatable", id: "repeatable" },
      {
        type: "paragraph",
        text: "Turn the steps into an SOP with templates: confirmation email, welcome pack, intake form, kickoff agenda. Creator business SOPs covers documenting processes.",
      },
      {
        type: "paragraph",
        text: "SOPs: creator business SOPs.",
        links: [{ text: "creator business SOPs", href: "/blog/creator-business-sops" }],
      },
      { type: "heading", text: "Onboarding sets up retention", id: "retention" },
      {
        type: "paragraph",
        text: "Clear expectations and early results make renewals and referrals more likely. Plan how you'll report progress from the start; creator client management covers ongoing relationships and renewals.",
      },
      { type: "heading", text: "Worked example: a coach's first-week onboarding", id: "example" },
      {
        type: "template",
        label: "Illustrative: an 8-week fitness coaching programme",
        text: "Day 0 (payment received): confirmation email with welcome pack PDF and intake form link\nDay 1: intake form: goals, training history, injuries (with a note to consult a doctor where relevant), schedule, equipment\nDay 2: kickoff call (30 min): agree the 8-week goal and weekly check-in day\nDay 3: first plan delivered; a short form-check video request\nDay 5: feedback on the form-check video → the first quick win\nDay 7: week-one check-in; any adjustments",
      },
      {
        type: "paragraph",
        text: "The client knew exactly what would happen each day, had a result in the first week and knew how to reach the coach. That reduces anxious messages and early refund requests.",
      },
      { type: "heading", text: "Onboarding templates to save", id: "templates" },
      {
        type: "table",
        headers: ["Template", "Reuse for"],
        rows: [
          ["Confirmation email", "Every new client"],
          ["Welcome pack", "Per offer"],
          ["Intake form", "Per offer, with offer-specific questions"],
          ["Kickoff agenda", "Every engagement"],
          ["First-week checklist", "Your SOP"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Starting work before payment or terms are confirmed.",
          "Asking for passwords instead of access roles.",
          "No welcome pack, so clients don't know what happens next.",
          "Slow first deliverable.",
          "Every client onboarded differently.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good onboarding is a repeatable first week: confirm terms, take payment, welcome clearly, gather what you need securely, kick off with shared priorities and deliver an early win. It sets the tone for the whole engagement.",
      },
    ],
    faqs: [
      {
        question: "What is client onboarding for creators?",
        answer:
          "The process that moves a new client from yes to working together: confirming terms, taking payment, welcoming them, collecting information and access, a kickoff call and an early result.",
      },
      {
        question: "What should a client welcome pack include?",
        answer:
          "What's included and not, the timeline, what you need from the client, how to communicate, meeting and payment schedules and cancellation terms.",
      },
      {
        question: "Should creators ask clients for passwords?",
        answer:
          "Avoid it where possible. Use role-based or view-only access that platforms provide, and store client information securely.",
      },
    ],
  },
];
