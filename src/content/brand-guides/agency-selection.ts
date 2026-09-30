import type { BlogPost } from "@/content/blog";
import { AUTHOR, PUBLISHED, REVIEWED } from "@/content/brand-guides/shared";

/**
 * Stage A of the brand lead-generation cluster (900–913): brands actively evaluating agencies.
 * Intent boundaries (the pillar is choose-influencer-marketing-agency-india, which absorbs 900; the generic
 * how-to-choose-an-influencer-marketing-agency is 301-redirected into it):
 * - influencer-agency-vs-freelancer: agency vs freelance manager (901)
 * - influencer-marketing-agency-fees-india: what agencies charge and how (905, absorbs pricing models 906)
 * - influencer-marketing-agency-brief: the brief a brand sends an agency (907, absorbs 913)
 * - influencer-marketing-rfp: running a formal selection (RFP, proposals, scoring) (908, absorbs 909 and 912)
 * - influencer-marketing-agency-pitch-questions: 20 questions with what good answers sound like (910)
 * - influencer-marketing-agency-checklist: checks before signing the agency contract (911)
 * Existing owners: influencer-marketing-agency-vs-in-house (902, absorbs 903), influencer-marketing-services-india (904).
 * Seller-side agency pricing for agency operators lives in creator-agency-pricing-strategy; don't mix audiences.
 */
export const agencySelectionPosts: BlogPost[] = [
  {
    slug: "influencer-agency-vs-freelancer",
    category: "Brand Marketing",
    title: "Influencer Marketing Agency vs Freelancer: What Should Your Brand Choose?",
    seoTitle: "Influencer Marketing Agency vs Freelancer: How to Choose",
    excerpt:
      "When a freelance influencer marketer is enough and when a brand needs an agency: what each actually covers, cost structure, capacity, risk, contracts and payments, a decision matrix by campaign size, and how to make either arrangement work.",
    metaDescription:
      "Agency or freelancer for influencer marketing? Compare scope, cost structure, capacity, risk and accountability, with a decision matrix for Indian brands.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: "September 2026",
    readingTime: "11 min read",
    tags: ["influencer marketing agency vs freelancer", "freelance influencer marketing manager", "hire influencer marketing freelancer", "influencer agency or freelancer", "outsource influencer marketing India"],
    related: ["choose-influencer-marketing-agency-india", "influencer-marketing-agency-vs-in-house", "influencer-marketing-agency-fees-india"],
    hero: { src: "/blog/brand-guides/influencer-agency-vs-freelancer.svg", alt: "Side-by-side comparison of a freelance influencer marketer and an influencer marketing agency across scope, capacity, backup cover and accountability" },
    body: [
      {
        type: "paragraph",
        text: "Many Indian brands reach the same fork after their first few creator collaborations: the founder or marketing manager can't keep doing outreach at night, so should they bring in a freelance influencer marketer or hire an agency? Both can work well. They fail in different ways, which is the useful thing to understand before choosing.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A freelancer suits brands running a small number of creators at a time, with a clear brief, someone in-house who approves content and handles contracts and payments, and a budget that doesn't justify agency fees. An agency suits brands running several campaigns or many creators at once, needing strategy as well as execution, working across regions and languages, or needing a team that can absorb deadlines, replacements and reporting without depending on one person. The deciding factors are volume, the scope you need covered, and how much risk you can carry if one person becomes unavailable.",
      },
      { type: "heading", text: "What each actually covers", id: "scope" },
      {
        type: "table",
        headers: ["Work", "Typical freelancer", "Typical agency"],
        rows: [
          ["Creator discovery and shortlisting", "Yes, often from their own network", "Yes, with a defined vetting process"],
          ["Outreach and negotiation", "Yes", "Yes"],
          ["Strategy and campaign planning", "Sometimes, depends on seniority", "Usually part of the offer"],
          ["Contracts and usage rights", "Often left to the brand", "Usually handled, with templates"],
          ["Creator payments", "Usually the brand pays creators directly", "Varies: some agencies collect and pay, some don't"],
          ["Content review and QA", "Yes, one reviewer", "Yes, often with a second check"],
          ["Multi-city or multilingual execution", "Limited by one person's reach", "Usually the reason brands hire agencies"],
          ["Reporting", "Basic, often spreadsheet-based", "Structured reports and reviews"],
          ["Cover when someone is unavailable", "Rarely", "Team backup"],
        ],
      },
      {
        type: "paragraph",
        text: "These are typical patterns, not rules. A senior freelancer can out-think a junior agency team, and some agencies only do outreach. Check scope in writing either way; what an agency normally includes is laid out in what an influencer marketing agency actually does.",
        links: [{ text: "what an influencer marketing agency actually does", href: "/blog/influencer-marketing-services-india" }],
      },
      { type: "heading", text: "Cost structure, not just cost", id: "cost" },
      {
        type: "paragraph",
        text: "Freelancers usually charge a monthly fee, a per-campaign fee or an hourly or daily rate. Agencies charge retainers, campaign management fees or a share of creator spend. The fee is rarely the whole comparison. With a freelancer, your team usually absorbs contracts, payments, compliance checks and reporting. With an agency, more of that is inside the fee. Compare the total cost of getting the campaign done, including your own team's hours. Agency pricing structures are explained in how much an influencer marketing agency charges in India.",
        links: [{ text: "how much an influencer marketing agency charges in India", href: "/blog/influencer-marketing-agency-fees-india" }],
      },
      { type: "heading", text: "Decision matrix", id: "decision-matrix" },
      {
        type: "table",
        headers: ["Your situation", "Leans towards", "Why"],
        rows: [
          ["Testing creators for the first time with a small budget", "Freelancer, or in-house with advice", "Low volume; learning matters more than scale"],
          ["Steady monthly work with a handful of micro-creators", "Freelancer", "Repeatable, manageable by one experienced person"],
          ["Product launch with a fixed date and many creators", "Agency", "Deadline risk and coordination load"],
          ["Campaigns across several cities or languages", "Agency", "Needs regional creator knowledge and more hands"],
          ["Regulated category (finance, health, education)", "Agency or senior specialist", "Claims review and compliance experience"],
          ["Always-on program with reporting to leadership", "Agency, or in-house lead plus agency", "Continuity, structured reporting, backup"],
          ["Mostly UGC for ads", "Either, or a UGC-focused partner", "Depends on volume and production needs"],
        ],
      },
      { type: "heading", text: "Risks to plan for", id: "risks" },
      {
        type: "table",
        headers: ["Risk", "Freelancer", "Agency"],
        rows: [
          ["Single point of failure", "High: illness or a better offer stalls the campaign", "Lower, if the account has more than one person"],
          ["Relationship ownership", "Creator relationships may leave with the freelancer", "Agree who owns creator contacts and content"],
          ["Quality consistency", "Depends on one person's judgment", "Depends on process; ask to see it"],
          ["Cost of management", "Lower fee, more internal time", "Higher fee, less internal time"],
          ["Account attention", "Usually high", "Can drop if you're a small client"],
        ],
      },
      { type: "heading", text: "How to make a freelancer arrangement work", id: "freelancer-setup" },
      {
        type: "list",
        items: [
          "Write a scope: creators per month, deliverables, what they negotiate, what you approve.",
          "Keep contracts, creator contacts and content files in your company's accounts, not theirs.",
          "Pay creators from your company directly, with invoices and TDS handled by your finance team.",
          "Agree a simple weekly update and a report format at the start.",
          "Have a backup plan for launch dates: who takes over if they're unavailable.",
        ],
      },
      { type: "heading", text: "How to make an agency arrangement work", id: "agency-setup" },
      {
        type: "list",
        items: [
          "Send a proper brief; see how to write an influencer marketing agency brief.",
          "Ask who actually works on your account and how much of their time you get.",
          "Agree what the fee includes and how creator fees are shown.",
          "Agree reporting against your objective before launch.",
          "Review the relationship after the first campaign, not only at renewal.",
        ],
      },
      {
        type: "paragraph",
        text: "Briefing: how to write an influencer marketing agency brief. If you're also weighing building a team internally, influencer marketing agency vs in-house covers that decision.",
        links: [
          { text: "how to write an influencer marketing agency brief", href: "/blog/influencer-marketing-agency-brief" },
          { text: "influencer marketing agency vs in-house", href: "/blog/influencer-marketing-agency-vs-in-house" },
        ],
      },
      {
        type: "paragraph",
        text: "Whichever you choose, one internal owner should manage all creator partners; see influencer marketing team structure.",
        links: [
          { text: "influencer marketing team structure", href: "/blog/influencer-marketing-team-structure" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Comparing a freelancer's fee with an agency's fee without counting your own team's time.",
          "Letting creator relationships and files live in a freelancer's personal accounts.",
          "Hiring an agency for strategy and giving it no access to sales or customer data.",
          "Choosing on price for a launch where missing the date is the bigger cost.",
          "No written scope, so expectations drift after the first month.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Freelancers are efficient for smaller, steady, well-defined work where your team can own contracts, payments and approvals. Agencies earn their fee when volume, deadlines, regional coverage, compliance or reporting make one person a risk. Decide by the work you need covered and the risk you can carry, then set either arrangement up with clear scope and ownership.",
      },
    ],
    faqs: [
      {
        question: "Is it cheaper to hire an influencer marketing freelancer than an agency?",
        answer:
          "The fee is often lower, but your team usually takes on more of the contracts, payments, compliance checks and reporting. Compare the total cost of running the campaign, including internal hours.",
      },
      {
        question: "When should a brand choose an agency over a freelancer?",
        answer:
          "When running many creators or several campaigns at once, working across cities or languages, facing fixed launch dates, operating in regulated categories, or needing structured reporting and backup cover.",
      },
      {
        question: "Who should own creator relationships if we use a freelancer?",
        answer:
          "Your company. Keep creator contacts, contracts and content files in company accounts, and pay creators directly, so the relationships stay with the brand if the freelancer moves on.",
      },
    ],
  },
  {
    slug: "influencer-marketing-agency-fees-india",
    category: "Brand Marketing",
    title: "How Much Does an Influencer Marketing Agency Charge in India?",
    seoTitle: "Influencer Marketing Agency Fees in India: Pricing Models",
    excerpt:
      "How influencer marketing agencies in India charge brands: retainers, campaign management fees, a percentage of creator spend, per-creator fees and performance elements, what the fee should include, the variables that move it, how to read a quote, and how to compare agency pricing fairly.",
    metaDescription:
      "How influencer marketing agencies in India charge: retainer, campaign fee, percentage of spend and hybrid models, what's included, and how to compare quotes.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: "September 2026",
    readingTime: "14 min read",
    tags: ["influencer marketing agency fees India", "influencer marketing agency pricing", "influencer agency retainer", "influencer agency commission", "agency management fee influencer", "influencer marketing agency cost"],
    related: ["influencer-marketing-cost-india", "influencer-campaign-cost-india", "influencer-marketing-rfp"],
    hero: { src: "/blog/brand-guides/influencer-marketing-agency-fees-india.svg", alt: "Stacked campaign budget showing creator fees, agency management fee, production, usage rights and paid amplification as separate lines" },
    body: [
      {
        type: "paragraph",
        text: "Ask three influencer marketing agencies for a quote on the same brief and you may get three numbers that can't be compared: one bundles creator fees, one shows a percentage on top, one quotes a monthly retainer with creators billed separately. Before judging which is expensive, you need to know what each number contains.",
      },
      {
        type: "paragraph",
        text: "There is no reliable published rate card for Indian influencer agencies, and fees vary widely with scope, so this guide doesn't state standard percentages or amounts. It explains how agencies charge, what should be included, and how to compare quotes fairly. Creator rates themselves are covered in how much influencer marketing costs in India.",
        links: [{ text: "how much influencer marketing costs in India", href: "/blog/influencer-marketing-cost-india" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer marketing agencies in India typically charge in one of five ways: a monthly retainer for ongoing work, a fixed campaign management fee per campaign, a percentage of the creator budget they manage, a per-creator or per-deliverable fee, or a performance element on top of a base fee. Creator fees, production, usage rights and paid amplification are usually separate costs. What an agency charges depends on scope (strategy, discovery, negotiation, management, reporting), the number of creators, platforms, regions and languages, timelines, category risk and how much reporting you need. Compare quotes by total campaign cost and by what the agency fee actually covers.",
      },
      { type: "heading", text: "The five pricing models", id: "pricing-models" },
      {
        type: "table",
        headers: ["Model", "How it works", "Suits", "Ask about"],
        rows: [
          ["Monthly retainer", "Fixed monthly fee for a defined scope over a minimum term", "Always-on programs, ongoing creator partnerships", "Exact monthly scope, overages, notice period, what happens to unused scope"],
          ["Campaign management fee", "Fixed fee per campaign", "Launches and one-off campaigns with clear deliverables", "Revision limits, replacement creators, reporting included"],
          ["Percentage of creator spend", "Fee calculated on the creator budget managed", "Campaigns whose size varies a lot", "The percentage, what it's calculated on, and whether it's shown separately"],
          ["Per creator or per deliverable", "Fee per creator managed or per piece of content", "High-volume micro-creator or UGC work", "How complex creators or extra rounds are handled"],
          ["Performance element", "Bonus or share linked to agreed results, on top of a base fee", "Sales or lead campaigns with clean tracking", "How results are measured and attributed"],
        ],
      },
      {
        type: "paragraph",
        text: "Hybrids are common: a retainer for strategy and management with creator fees passed through at cost, or a campaign fee with a small performance bonus. None is automatically better. A percentage model can reward spending more rather than spending well; a retainer can leave you paying for scope you don't use; a pure performance model can push an agency towards discount-heavy content that hurts your brand.",
      },
      { type: "heading", text: "What the agency fee should cover", id: "whats-included" },
      {
        type: "table",
        headers: ["Service", "Usually in the agency fee?", "Notes"],
        rows: [
          ["Campaign strategy and creator mix", "Often", "Deeper strategy work may be priced separately"],
          ["Creator discovery, vetting and shortlist", "Usually", "Ask how many options you'll see and how they're vetted"],
          ["Outreach and negotiation", "Usually", "Includes usage and exclusivity terms"],
          ["Contracts with creators", "Often", "Check who signs and who holds the contracts"],
          ["Briefing, content review and approvals", "Usually", "Agree revision limits"],
          ["Go-live checks and disclosure", "Should be", "Missing disclosure is a shared liability"],
          ["Reporting", "Usually", "Agree the format and depth before launch"],
          ["Creator fees", "Usually separate", "Should be shown line by line"],
          ["Production, shoots, editing", "Usually separate", "Unless the agency is producing content"],
          ["Paid amplification (media spend)", "Separate", "Management of it may be in or out of the fee"],
          ["Product, shipping and travel", "Separate", "Budget them explicitly"],
        ],
      },
      {
        type: "paragraph",
        text: "A detailed breakdown of each service is in what an influencer marketing agency actually does.",
        links: [{ text: "what an influencer marketing agency actually does", href: "/blog/influencer-marketing-services-india" }],
      },
      { type: "heading", text: "What moves the agency fee", id: "fee-drivers" },
      {
        type: "list",
        items: [
          "Scope: strategy plus execution costs more than outreach alone.",
          "Number of creators and deliverables: coordination time scales with creators, not just budget.",
          "Platforms and formats: long-form YouTube integrations and multi-format packages take more management than single Reels.",
          "Regions and languages: multilingual, multi-city campaigns need more people and local knowledge.",
          "Timelines: compressed launch dates need more hands at once.",
          "Category risk: health, finance and education need claims review and more careful approvals.",
          "Usage rights and paid amplification: more negotiation and tracking.",
          "Reporting depth: dashboards, creator-level analysis and quarterly reviews take time.",
          "Contract length: retainers can price differently from one-off projects.",
        ],
      },
      { type: "heading", text: "How to read an agency quote", id: "read-a-quote" },
      {
        type: "template",
        label: "What a clear quote shows (structure, illustrative)",
        text: "A. Creator fees: per creator: platform, deliverables, usage period, exclusivity\nB. Agency fee: model (retainer / campaign / % / per creator) and what it covers\nC. Production: shoots, editing, UGC, if any\nD. Usage rights and paid amplification: rights fees, media budget, management\nE. Product, shipping, travel\nF. Taxes: GST treatment of each line\nAssumptions: revision rounds, timelines, approval turnaround, replacement policy\nPayment terms: advance, milestones, who pays creators and when",
      },
      {
        type: "list",
        items: [
          "If creator fees and the agency fee are bundled into one number, ask for them separately.",
          "If the fee is a percentage, confirm what it's calculated on (creator fees only, or everything).",
          "Check what happens if a creator drops out: is a replacement included?",
          "Check whether the quote assumes your approvals come back within a set time.",
          "Ask whether creators are paid by the agency or by you, and on what timeline.",
        ],
      },
      { type: "heading", text: "Illustrative comparison of two quotes", id: "comparison-example" },
      {
        type: "paragraph",
        text: "Illustrative example with hypothetical numbers. Two agencies respond to the same brief for 12 micro-creators on Instagram.",
      },
      {
        type: "table",
        headers: ["Line", "Agency A", "Agency B"],
        rows: [
          ["Creator fees", "Bundled into total", "₹4,80,000 shown per creator"],
          ["Agency fee", "Bundled", "₹90,000 campaign fee"],
          ["Usage rights for ads (60 days)", "Not mentioned", "₹60,000 shown separately"],
          ["Replacement if a creator drops out", "Not mentioned", "Included"],
          ["Report", "\"Campaign summary\"", "Creator-level report and review call"],
          ["Total shown", "₹5,90,000", "₹6,30,000"],
        ],
      },
      {
        type: "paragraph",
        text: "Agency A looks cheaper, but you can't tell what you're paying the agency, whether ad usage is included, or what happens if a creator drops out. After clarification, the comparison may reverse. Structured comparison across several agencies is covered in the influencer marketing RFP guide.",
        links: [{ text: "influencer marketing RFP guide", href: "/blog/influencer-marketing-rfp" }],
      },
      { type: "heading", text: "Is an agency worth the fee?", id: "worth-it" },
      {
        type: "paragraph",
        text: "An agency is worth its fee when it saves more than it costs: in your team's time, in creator fees negotiated sensibly, in avoided mistakes (wrong creators, missing disclosure, unusable rights), and in results you can measure. It's rarely worth it when you run a few creators a quarter and have someone in-house who enjoys doing it. The in-house comparison is in influencer marketing agency vs in-house, and the freelancer option in agency vs freelancer.",
        links: [
          { text: "influencer marketing agency vs in-house", href: "/blog/influencer-marketing-agency-vs-in-house" },
          { text: "agency vs freelancer", href: "/blog/influencer-agency-vs-freelancer" },
        ],
      },
      { type: "heading", text: "When a long-term agency retainer makes sense", id: "retainer" },
      {
        type: "table",
        headers: ["A retainer tends to fit when", "A per-campaign fee tends to fit when"],
        rows: [
          ["You run creator activity most months", "You run a few campaigns a year"],
          ["You want an always-on program or ambassadors", "Each campaign has a different goal or team"],
          ["You value continuity with creators and the account team", "You're still testing agencies"],
          ["Planning, reporting and relationships happen between campaigns", "Work is mostly execution"],
        ],
      },
      {
        type: "list",
        items: [
          "Define monthly scope: campaigns, creators, content volume, reporting and meetings.",
          "Agree what happens to unused scope (it usually doesn't roll over indefinitely).",
          "Set a review point, often after three months, and a notice period.",
          "Keep creator fees separate from the retainer so both are visible.",
        ],
      },
      {
        type: "paragraph",
        text: "Onboarding a retained agency well is covered in influencer marketing agency onboarding.",
        links: [
          { text: "influencer marketing agency onboarding", href: "/blog/influencer-marketing-agency-onboarding" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Comparing bundled quotes with itemized ones.",
          "Choosing the lowest agency fee and paying more in creator fees or rework.",
          "Retainers with no written scope or overage rule.",
          "Percentage fees without knowing what they're calculated on.",
          "Forgetting usage rights, product costs and GST when setting the budget.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Agency fees in India are shaped by scope, creator volume, regions, timelines, category risk and reporting, and they come as retainers, campaign fees, percentages, per-creator fees or hybrids. Ask for itemized quotes that separate creator fees from the agency fee, check assumptions and replacement terms, and compare total cost against what's included. The total campaign budget, including creator fees, is covered in influencer campaign costs in India.",
        links: [{ text: "influencer campaign costs in India", href: "/blog/influencer-campaign-cost-india" }],
      },
    ],
    faqs: [
      {
        question: "How much does an influencer marketing agency charge in India?",
        answer:
          "It varies widely with scope, number of creators, platforms, regions, timelines and category, and there's no reliable published standard. Agencies charge retainers, campaign fees, a percentage of creator spend, per-creator fees or a performance element; creator fees are usually separate.",
      },
      {
        question: "Should brands pay an influencer agency a monthly retainer?",
        answer:
          "A retainer suits ongoing or always-on programs with steady monthly work. For a single launch, a campaign fee is often clearer. Either way, the scope, overage rules and notice period should be written down.",
      },
      {
        question: "Do influencer agency fees include creator payments?",
        answer:
          "Usually not. Creator fees, production, usage rights and paid media are typically separate. Ask for a quote that shows creator fees and the agency fee as separate lines.",
      },
      {
        question: "What affects influencer marketing agency fees?",
        answer:
          "Scope of services, number of creators and deliverables, platforms and formats, regions and languages, timelines, category risk, usage rights, reporting depth and contract length.",
      },
      {
        question: "When does an influencer agency retainer make sense?",
        answer:
          "When a brand runs creator activity most months, wants an always-on or ambassador program, and values continuity. Define monthly scope, what happens to unused scope, a review point and a notice period.",
      },
    ],
  },
  {
    slug: "influencer-marketing-agency-brief",
    category: "Brand Marketing",
    title: "How to Write an Influencer Marketing Agency Brief for Your Campaign",
    seoTitle: "Influencer Marketing Agency Brief: What Your Agency Needs",
    excerpt:
      "How to brief an influencer marketing agency so proposals come back comparable and campaigns start fast: the twelve sections of an agency brief, a copy-ready template, what to share about budget, audience and past campaigns, and how an agency brief differs from a creator brief.",
    metaDescription: "Brief an influencer marketing agency well: the 12 sections to include, a copy-ready template, budget and audience details, and agency vs creator briefs.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: "September 2026",
    readingTime: "12 min read",
    tags: ["influencer marketing agency brief", "brief influencer marketing agency", "agency brief template", "influencer campaign brief for agency", "how to brief an agency"],
    related: ["influencer-marketing-rfp", "influencer-campaign-brief", "choose-influencer-marketing-agency-india"],
    hero: { src: "/blog/brand-guides/influencer-marketing-agency-brief.svg", alt: "An agency brief document with sections for objective, audience, budget, timeline, approvals and success measures" },
    body: [
      {
        type: "paragraph",
        text: "The quality of an agency's proposal is capped by the quality of the brief it receives. A one-line email asking for \"an influencer plan for our launch\" gets back generic shortlists and numbers nobody can compare. A clear brief gets back thinking you can judge, and it cuts days off the start of the campaign.",
      },
      {
        type: "paragraph",
        text: "This is the brief a brand sends an agency. It's different from the creative brief creators receive, which is covered in how to create an influencer campaign brief.",
        links: [{ text: "how to create an influencer campaign brief", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer marketing agency brief should cover: the business context, the campaign objective and primary KPI, the target customer, the product and key messages, markets, regions and languages, platforms and formats if decided, the budget range and what it includes, timelines and fixed dates, approvals and compliance rules, usage rights needs, what worked or didn't in past creator campaigns, and what you want the agency to send back. Share a budget range, even a wide one; without it, proposals can't be compared.",
      },
      { type: "heading", text: "Agency brief vs creator brief", id: "vs-creator-brief" },
      {
        type: "table",
        headers: ["", "Agency brief", "Creator brief"],
        rows: [
          ["Audience", "The agency's strategy and account team", "Each creator"],
          ["Purpose", "Plan the campaign and propose creators, budget and approach", "Make specific content"],
          ["Contains", "Business context, objective, budget, audience, timelines, constraints", "Key message, deliverables, dos and don'ts, disclosure, dates"],
          ["Written by", "The brand", "Usually the agency, approved by the brand"],
        ],
      },
      { type: "heading", text: "The twelve sections", id: "sections" },
      {
        type: "table",
        headers: ["Section", "What to include", "Why the agency needs it"],
        rows: [
          ["1. Business context", "Brand, stage, category, competitors, current marketing mix", "Creators should fit where the brand is today"],
          ["2. Objective and KPI", "One primary objective and how success will be measured", "Changes creator mix, formats and budget split"],
          ["3. Target customer", "Who buys, where they live, languages, what they care about", "Drives creator selection by audience, not follower count"],
          ["4. Product and messages", "What's being promoted, proof points, claims you can substantiate", "Shapes briefs and review"],
          ["5. Markets and languages", "Pan-India, specific cities or states, language priorities", "Determines regional creator sourcing"],
          ["6. Platforms and formats", "If already decided; otherwise ask for a recommendation", "Avoids proposals for the wrong channels"],
          ["7. Budget", "Range, and whether it includes creator fees, agency fee, production and media", "Makes proposals comparable"],
          ["8. Timeline", "Fixed dates (launch, sale event), approval windows, go-live window", "Tests feasibility"],
          ["9. Approvals and compliance", "Who approves, turnaround, legal review, category rules", "Sets realistic schedules"],
          ["10. Usage rights", "Whether content will be used in ads, on site, for how long", "Changes creator fees and negotiation"],
          ["11. What you've learned", "Past creators and results, what failed and why", "Avoids repeating mistakes"],
          ["12. What to send back", "Format of response, deadline, questions contact", "Gets comparable proposals"],
        ],
      },
      { type: "heading", text: "Agency brief template", id: "template" },
      {
        type: "template",
        label: "Influencer marketing agency brief (copy and fill in)",
        text: "BRAND: [ ]   CONTACT: [name, role, email]   DATE: [ ]\n\n1. BUSINESS CONTEXT\nWhat we sell, to whom, our stage, main competitors, current marketing channels.\n\n2. OBJECTIVE AND PRIMARY KPI\nObjective: [awareness / launch / leads / sales / content for ads]\nPrimary KPI: [ ]   Secondary KPIs: [ ]\n\n3. TARGET CUSTOMER\nAge, gender mix, cities/states, languages, income band, interests, what they worry about.\n\n4. PRODUCT AND KEY MESSAGES\nProduct(s): [ ]   Proof points: [ ]   Claims we can substantiate: [ ]   Claims to avoid: [ ]\n\n5. MARKETS AND LANGUAGES\n[Pan-India / priority cities / states]   Languages: [ ]\n\n6. PLATFORMS AND FORMATS\n[Decided: ___ ]  or  [Please recommend]\n\n7. BUDGET\nRange: ₹[ ] to ₹[ ]   Includes: [creator fees / agency fee / production / paid media / product]\n\n8. TIMELINE\nFixed dates: [launch, sale, event]   Content live window: [ ]   Report needed by: [ ]\n\n9. APPROVALS AND COMPLIANCE\nApprovers: [ ]   Turnaround: [ ] working days   Category rules: [ ]\n\n10. USAGE RIGHTS\nOrganic only / paid ads / website / duration: [ ]\n\n11. WHAT WE'VE LEARNED\nPast creators or agencies, what worked, what didn't.\n\n12. WHAT WE'D LIKE BACK\nApproach, sample creator profiles (not a final list), budget split, timeline, team, reporting.\nResponse by: [date]   Questions to: [contact]",
      },
      { type: "heading", text: "Budget: share a range", id: "budget" },
      {
        type: "paragraph",
        text: "Brands often withhold budget to see what agencies propose. The result is proposals sized to guesses, which can't be compared. A range, with what it's meant to cover, lets agencies propose the best plan for your money. If you genuinely don't know, say so and ask for options at two or three budget levels. Budget planning is covered in how to calculate an influencer marketing budget.",
        links: [{ text: "how to calculate an influencer marketing budget", href: "/blog/influencer-marketing-budget" }],
      },
      { type: "heading", text: "Target customer: be specific", id: "audience" },
      {
        type: "paragraph",
        text: "\"Women 18–35 in India\" describes several hundred million people. \"Working women 25–34 in Pune, Bengaluru and Hyderabad who buy skincare online and read ingredient lists\" lets an agency find creators whose audiences actually overlap with your customers. Share customer data if you have it: order locations, age bands, languages from support tickets. Audience matching is covered in influencer audience quality and fit.",
        links: [{ text: "influencer audience quality and fit", href: "/blog/influencer-audience-quality" }],
      },
      { type: "heading", text: "After the brief: the briefing call", id: "briefing-call" },
      {
        type: "list",
        items: [
          "Walk the agency through the brief and answer questions; write down the answers and share them with every agency if you're comparing several.",
          "Share product samples or a demo so the agency understands what creators will be showing.",
          "Confirm the response deadline and format.",
          "Tell them how you'll choose, so proposals address what matters to you.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're sending the brief to several agencies, the formal process is covered in the influencer marketing RFP guide, and the questions to ask in the pitch meeting in questions to ask an influencer marketing agency.",
        links: [
          { text: "influencer marketing RFP guide", href: "/blog/influencer-marketing-rfp" },
          { text: "questions to ask an influencer marketing agency", href: "/blog/influencer-marketing-agency-pitch-questions" },
        ],
      },
      {
        type: "paragraph",
        text: "Once you've chosen an agency, the setup that follows is covered in influencer marketing agency onboarding.",
        links: [
          { text: "influencer marketing agency onboarding", href: "/blog/influencer-marketing-agency-onboarding" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Several objectives with no priority.",
          "No budget range.",
          "Describing the audience by age and gender only.",
          "Leaving out fixed dates and approval times, then discovering the plan is impossible.",
          "Not mentioning that content will be used in ads, which changes creator fees.",
          "Asking for a final creator list before the agency understands the brand.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good agency brief gives the context, objective, audience, budget, dates, constraints and history an agency needs to think well, and says what you want back. It takes an hour to write and saves weeks of back-and-forth. Keep it to a few pages, share a budget range, and use the same brief with every agency you're comparing.",
      },
    ],
    faqs: [
      {
        question: "What should an influencer marketing agency brief include?",
        answer:
          "Business context, objective and primary KPI, target customer, product and messages, markets and languages, platforms, budget range and what it covers, timelines, approvals and compliance, usage rights, past learnings and what you want the agency to send back.",
      },
      {
        question: "Should we share our budget with an influencer agency?",
        answer:
          "Yes, at least a range and what it's meant to cover. Without it, proposals are sized to guesses and can't be compared.",
      },
      {
        question: "How is an agency brief different from an influencer brief?",
        answer:
          "An agency brief helps the agency plan the campaign and propose creators and budget; a creator brief tells each creator what content to make, key messages, deliverables and disclosure.",
      },
    ],
  },
  {
    slug: "influencer-marketing-rfp",
    category: "Brand Marketing",
    title: "Influencer Marketing RFP: How Brands Should Evaluate Agencies",
    seoTitle: "Influencer Marketing RFP: Evaluate and Compare Agencies",
    excerpt:
      "How brands run an influencer marketing RFP: when a formal process is worth it, the RFP structure, how many agencies to invite, what a strong proposal contains, a weighted scoring matrix for comparing agencies, pitch meetings, paid pilots and making the final decision.",
    metaDescription:
      "Run an influencer marketing RFP: what to include, what a good agency proposal contains, a weighted scoring matrix to compare agencies, and pilots.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "15 min read",
    tags: ["influencer marketing RFP", "influencer marketing proposal", "compare influencer marketing agencies", "agency evaluation framework", "influencer agency selection process", "agency scoring matrix"],
    related: ["choose-influencer-marketing-agency-india", "influencer-marketing-agency-brief", "influencer-marketing-agency-pitch-questions"],
    hero: { src: "/blog/brand-guides/influencer-marketing-rfp.svg", alt: "Three agency proposals compared side by side with weighted scores for strategy, creator fit, process, reporting and pricing" },
    body: [
      {
        type: "paragraph",
        text: "A request for proposal (RFP) turns agency selection from a series of impressive presentations into a comparison you can defend to your CFO. It asks every agency the same questions, gets answers in the same format, and scores them on criteria you set before anyone pitches.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer marketing RFP is a document sent to a shortlist of agencies asking for a proposal against a defined brief, in a set format and by a set date. Invite three to five agencies, include the brief, budget range, evaluation criteria and timeline, and ask for an approach, sample creators with rationale, budget split, team, process, reporting and commercial terms. Score proposals on weighted criteria agreed in advance, meet the top two or three, check references, and consider a small paid pilot before a long commitment.",
      },
      { type: "heading", text: "When a formal RFP is worth it", id: "when" },
      {
        type: "table",
        headers: ["Worth a formal RFP", "A lighter process is fine"],
        rows: [
          ["Annual or always-on program", "One small test campaign"],
          ["Large budget or leadership scrutiny", "Budget within a manager's own approval"],
          ["Procurement requires it", "Founder-led startup choosing quickly"],
          ["Several stakeholders must agree", "One decision-maker"],
        ],
      },
      {
        type: "paragraph",
        text: "For a lighter process, send the same brief to two or three agencies and use the questions in questions to ask an influencer marketing agency.",
        links: [{ text: "questions to ask an influencer marketing agency", href: "/blog/influencer-marketing-agency-pitch-questions" }],
      },
      { type: "heading", text: "What to put in the RFP", id: "rfp-contents" },
      {
        type: "list",
        items: [
          "Company overview and the campaign or program brief; see how to write an influencer marketing agency brief.",
          "Budget range and what it covers.",
          "Scope of services you want (strategy, discovery, negotiation, management, UGC, reporting).",
          "Evaluation criteria and their weights.",
          "Required response format and page limit.",
          "Timeline: questions deadline, submission date, pitch dates, decision date, start date.",
          "Commercial requirements: pricing model, payment terms, contract basics.",
          "Confidentiality, and whether you'll pay for strategic work in the pitch.",
        ],
      },
      {
        type: "paragraph",
        text: "Brief structure: how to write an influencer marketing agency brief.",
        links: [{ text: "how to write an influencer marketing agency brief", href: "/blog/influencer-marketing-agency-brief" }],
      },
      { type: "heading", text: "How many agencies to invite", id: "how-many" },
      {
        type: "paragraph",
        text: "Three to five is usually enough. More than that and you can't evaluate properly, and good agencies may decline an RFP that looks like a lottery. Build the shortlist from agencies with relevant category, regional and platform experience; the criteria are in how to choose an influencer marketing agency in India.",
        links: [{ text: "how to choose an influencer marketing agency in India", href: "/blog/choose-influencer-marketing-agency-india" }],
      },
      { type: "heading", text: "What a strong proposal contains", id: "proposal" },
      {
        type: "table",
        headers: ["Section", "Strong", "Weak"],
        rows: [
          ["Understanding", "Restates your objective and customer in its own words, with sharp questions", "Repeats the brief back"],
          ["Approach", "Clear creator strategy, formats and phasing tied to the objective", "A generic influencer marketing overview"],
          ["Creators", "Sample profiles with a one-line reason each, audience data dated", "A long list of big names without reasoning"],
          ["Budget", "Split by creator fees, agency fee, production, usage, media", "One total"],
          ["Timeline", "Week-by-week plan with approval windows", "\"4–6 weeks\""],
          ["Team", "Named people and their time on your account", "Leadership bios only"],
          ["Process", "Vetting, contracts, QA, disclosure, escalation", "\"End-to-end management\""],
          ["Measurement", "KPIs, tracking method, report format and review cadence", "\"Detailed reporting\""],
          ["Risks", "What could go wrong and how they'll handle it", "No risks mentioned"],
        ],
      },
      {
        type: "paragraph",
        text: "Treat sample creators as evidence of thinking, not a final roster: availability and fees change, and a proposal promising named creators before contacting them is a warning sign.",
      },
      { type: "heading", text: "A weighted scoring matrix", id: "scoring" },
      {
        type: "paragraph",
        text: "Agree criteria and weights with your stakeholders before reading any proposal. The weights below are an illustrative starting point; adjust them to what matters for your campaign.",
      },
      {
        type: "table",
        headers: ["Criterion", "Illustrative weight", "What a 5 looks like"],
        rows: [
          ["Understanding of brand and customer", "15%", "Insight you hadn't articulated yourself"],
          ["Strategy and creator approach", "20%", "Creator mix and formats clearly tied to the objective"],
          ["Creator fit (samples)", "15%", "Audience-matched, varied, well reasoned"],
          ["Process and compliance", "15%", "Documented vetting, QA, disclosure, escalation"],
          ["Measurement and reporting", "15%", "Tracking plan and report format agreed upfront"],
          ["Team and capacity", "10%", "Named people with relevant experience and real time"],
          ["Commercials and transparency", "10%", "Itemized, clear on creator vs agency fees"],
        ],
      },
      {
        type: "template",
        label: "Scoring sheet (per evaluator)",
        text: "Agency: [ ]   Evaluator: [ ]\nCriterion                     Weight   Score (1–5)   Weighted\nUnderstanding                 15%      [ ]           [ ]\nStrategy and creator approach 20%      [ ]           [ ]\nCreator fit                   15%      [ ]           [ ]\nProcess and compliance        15%      [ ]           [ ]\nMeasurement and reporting     15%      [ ]           [ ]\nTeam and capacity             10%      [ ]           [ ]\nCommercials and transparency  10%      [ ]           [ ]\nTotal                                                 [ ]\nNotes / questions for the pitch:",
      },
      {
        type: "list",
        items: [
          "Score independently, then compare; discuss big disagreements.",
          "Keep price as one criterion, not a tie-breaker applied after everything else.",
          "Normalize quotes first: agencies may have priced different scope; see influencer marketing agency fees in India.",
        ],
      },
      {
        type: "paragraph",
        text: "Fee structures: influencer marketing agency fees in India.",
        links: [{ text: "influencer marketing agency fees in India", href: "/blog/influencer-marketing-agency-fees-india" }],
      },
      { type: "heading", text: "Pitch meetings and references", id: "pitch" },
      {
        type: "list",
        items: [
          "Meet the top two or three; insist the people who'll run your account attend.",
          "Ask them to walk through one past campaign end to end, including what went wrong.",
          "Ask for two references from clients with similar scope, and call them.",
          "Check how they handle disclosure and claims in your category.",
        ],
      },
      { type: "heading", text: "Consider a paid pilot", id: "pilot" },
      {
        type: "paragraph",
        text: "For large or long commitments, a small paid pilot (one campaign, a defined number of creators, a clear KPI) shows how an agency actually works: responsiveness, creator quality, approvals, reporting. Pay for it; asking agencies to run free trials skews the process towards agencies that can afford to give work away.",
      },
      { type: "heading", text: "After the decision", id: "after" },
      {
        type: "paragraph",
        text: "Tell unsuccessful agencies promptly, with brief, useful feedback. Before signing with the winner, run through the influencer marketing agency checklist so the contract reflects what was proposed.",
        links: [{ text: "influencer marketing agency checklist", href: "/blog/influencer-marketing-agency-checklist" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Inviting too many agencies.",
          "No budget range, so proposals can't be compared.",
          "Setting criteria after seeing the pitches.",
          "Choosing the best presentation rather than the best process.",
          "Not meeting the actual account team.",
          "Asking for free strategy work you'd otherwise pay for.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good RFP gives a small group of relevant agencies the same brief, budget range and criteria, asks for proposals in a comparable format, and scores them on what matters before anyone pitches. Meet the real team, check references, and use a paid pilot where the commitment is large. The result is a decision you can explain, and an agency that knows exactly what it was chosen to deliver.",
      },
    ],
    faqs: [
      {
        question: "What is an influencer marketing RFP?",
        answer:
          "A request for proposal sent to a shortlist of agencies, containing the brief, budget range, scope, evaluation criteria, response format and timeline, so proposals can be compared fairly.",
      },
      {
        question: "What should an influencer marketing agency proposal include?",
        answer:
          "Understanding of the brand and customer, a creator strategy tied to the objective, sample creators with reasoning, an itemized budget, a week-by-week timeline, the named team, process and compliance, measurement and reporting, and risks.",
      },
      {
        question: "How do you compare influencer marketing agencies?",
        answer:
          "Agree weighted criteria in advance, such as understanding, strategy, creator fit, process, measurement, team and commercials, score each proposal independently, normalize quotes to the same scope, meet the top agencies and check references.",
      },
      {
        question: "How many agencies should be invited to an RFP?",
        answer:
          "Usually three to five relevant agencies. More makes evaluation harder and can discourage strong agencies from responding.",
      },
    ],
  },
  {
    slug: "influencer-marketing-agency-pitch-questions",
    category: "Brand Marketing",
    title: "Influencer Marketing Agency Pitch: 20 Questions Brands Should Ask Before Hiring",
    seoTitle: "20 Questions to Ask an Influencer Marketing Agency",
    excerpt:
      "Twenty questions to ask an influencer marketing agency before hiring, grouped by strategy, creators, process, compliance, measurement, team and commercials, with what a strong answer and a weak answer sound like, and the red flags to listen for.",
    metaDescription:
      "20 questions to ask an influencer marketing agency before hiring, with what strong and weak answers sound like, plus red flags on creators, fees and reporting.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "13 min read",
    tags: ["questions to ask influencer marketing agency", "influencer agency interview questions", "influencer marketing agency pitch", "hire influencer marketing agency questions", "influencer agency red flags"],
    related: ["choose-influencer-marketing-agency-india", "influencer-marketing-rfp", "influencer-marketing-agency-checklist"],
    hero: { src: "/blog/brand-guides/influencer-marketing-agency-pitch-questions.svg", alt: "Question cards grouped into strategy, creators, process, measurement and commercials for an agency pitch meeting" },
    body: [
      {
        type: "paragraph",
        text: "Agency pitches are designed to impress. The useful part of the meeting is the conversation after the deck, when you ask how things actually work. These twenty questions are the ones that separate agencies with a real process from agencies with a good presentation.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before hiring an influencer marketing agency, ask how it would approach your objective, how it finds and vets creators, what a shortlist looks like, how it handles contracts, usage rights, disclosure and claims, how it measures and reports, who exactly works on your account, how it charges and what's included, and what happens when things go wrong. Strong answers are specific, show a documented process and admit trade-offs. Weak answers are generic, promise guaranteed results or avoid the question.",
      },
      { type: "heading", text: "Strategy (questions 1–4)", id: "strategy" },
      {
        type: "table",
        headers: ["Question", "Strong answer sounds like", "Weak answer sounds like"],
        rows: [
          ["1. How would you approach our objective?", "Specific creator mix, formats and phasing tied to your KPI", "\"We'll use top influencers to go viral\""],
          ["2. What would you not recommend for us, and why?", "Clear trade-offs (e.g. \"celebrities won't suit a consideration-led product\")", "Everything is recommended"],
          ["3. How would you split this budget?", "Split by tier, formats, usage and testing, with reasoning", "One total, no logic"],
          ["4. What would you test first?", "A small test with a decision point before scaling", "\"Launch big from day one\""],
        ],
      },
      { type: "heading", text: "Creators (questions 5–8)", id: "creators" },
      {
        type: "table",
        headers: ["Question", "Strong answer", "Weak answer"],
        rows: [
          ["5. How do you find creators for a brief like ours?", "Search methods, regional sourcing, tools plus manual review", "\"We have a huge database\""],
          ["6. How do you vet audience quality and fraud?", "Audience data from creators, authenticity checks, content review", "\"We check engagement rate\""],
          ["7. Can we see a sample shortlist with reasons?", "Profiles with dated audience data and one-line rationale", "Handles and follower counts only"],
          ["8. Do you have exclusive creators or represent creators too?", "Clear answer, with how conflicts are managed", "Vague, or pushing their own roster without saying so"],
        ],
      },
      {
        type: "paragraph",
        text: "What good vetting involves is covered in how to vet influencers before a brand collaboration.",
        links: [{ text: "how to vet influencers before a brand collaboration", href: "/blog/how-to-vet-influencers" }],
      },
      { type: "heading", text: "Process and compliance (questions 9–12)", id: "process" },
      {
        type: "table",
        headers: ["Question", "Strong answer", "Weak answer"],
        rows: [
          ["9. Walk us through a campaign week by week.", "Stages, approval windows, who does what", "\"Four to six weeks, end to end\""],
          ["10. How do you handle contracts and usage rights?", "Templates, rights defined by platform and duration, stored records", "\"Creators are fine with it\""],
          ["11. How do you make sure disclosure and claims are correct?", "Pre-live and post-live checks, ASCI rules, category claims review", "\"Creators handle that\""],
          ["12. What happens if a creator misses a deadline or drops out?", "Buffers, backup shortlist, escalation process", "\"That never happens\""],
        ],
      },
      {
        type: "paragraph",
        text: "Disclosure rules for Indian campaigns are summarized in influencer marketing compliance.",
        links: [{ text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Measurement (questions 13–15)", id: "measurement" },
      {
        type: "table",
        headers: ["Question", "Strong answer", "Weak answer"],
        rows: [
          ["13. How will you measure success against our KPI?", "Tracking plan: links, codes, landing pages, lift signals", "Reach and likes only"],
          ["14. Can we see a sample report?", "Creator-level results, learnings, recommendations", "A screenshot collage"],
          ["15. What results can you promise?", "Honest ranges and what they depend on; no guarantees", "Guaranteed ROI, sales or viral reach"],
        ],
      },
      {
        type: "paragraph",
        text: "Reporting expectations are set out in how to create an influencer marketing report.",
        links: [{ text: "how to create an influencer marketing report", href: "/blog/influencer-marketing-report" }],
      },
      { type: "heading", text: "Team (questions 16–17)", id: "team" },
      {
        type: "table",
        headers: ["Question", "Strong answer", "Weak answer"],
        rows: [
          ["16. Who will work on our account, and how much of their time do we get?", "Named people, roles, rough share of time", "\"Our whole team\""],
          ["17. Have you worked in our category and regions?", "Relevant examples, and honesty about gaps", "\"We've done everything\""],
        ],
      },
      { type: "heading", text: "Commercials (questions 18–20)", id: "commercials" },
      {
        type: "table",
        headers: ["Question", "Strong answer", "Weak answer"],
        rows: [
          ["18. How do you charge, and what's included?", "Model explained, creator fees shown separately", "One bundled number"],
          ["19. Who pays creators, and when?", "Clear money flow and timelines", "Unclear, or creators paid only after long delays"],
          ["20. What are the contract term and exit terms?", "Reasonable notice, handover of files and contacts", "Long lock-in, no handover"],
        ],
      },
      {
        type: "paragraph",
        text: "Pricing models are compared in influencer marketing agency fees in India.",
        links: [{ text: "influencer marketing agency fees in India", href: "/blog/influencer-marketing-agency-fees-india" }],
      },
      { type: "heading", text: "Red flags", id: "red-flags" },
      {
        type: "list",
        items: [
          "Guaranteed sales, ROI, followers or virality.",
          "Promising specific named creators before checking availability.",
          "Follower count as the main selection criterion.",
          "No sample report, or reports that only show reach.",
          "Reluctance to separate creator fees from the agency fee.",
          "Dismissive answers about disclosure or claims.",
          "The people in the pitch won't be on your account.",
        ],
      },
      { type: "heading", text: "Using the answers", id: "using-answers" },
      {
        type: "paragraph",
        text: "Ask every agency the same questions and note answers in the same sheet, so you're comparing like with like. For formal selection, fold these questions into the scoring matrix in the influencer marketing RFP guide; before signing, confirm the answers made it into the contract with the influencer marketing agency checklist.",
        links: [
          { text: "influencer marketing RFP guide", href: "/blog/influencer-marketing-rfp" },
          { text: "influencer marketing agency checklist", href: "/blog/influencer-marketing-agency-checklist" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "The right agency answers these questions specifically, shows its process, and is honest about trade-offs and risks. The wrong one answers with enthusiasm and guarantees. Ask all twenty, compare answers side by side, and weigh process and transparency as heavily as creative ideas. The wider selection criteria are in how to choose an influencer marketing agency in India.",
        links: [{ text: "how to choose an influencer marketing agency in India", href: "/blog/choose-influencer-marketing-agency-india" }],
      },
    ],
    faqs: [
      {
        question: "What questions should I ask an influencer marketing agency?",
        answer:
          "Ask how they'd approach your objective, find and vet creators, split the budget, handle contracts, usage rights, disclosure and claims, measure and report, who works on your account, how they charge and what's included, who pays creators, and what the exit terms are.",
      },
      {
        question: "What are red flags when hiring an influencer marketing agency?",
        answer:
          "Guaranteed results, promising named creators before checking availability, follower-count-led selection, reach-only reports, bundled fees, dismissive answers on disclosure, and a pitch team that won't work on your account.",
      },
      {
        question: "Should an influencer agency guarantee results?",
        answer:
          "No. Credible agencies explain likely ranges and what results depend on. Guaranteed sales, ROI or virality is a warning sign.",
      },
    ],
  },
  {
    slug: "influencer-marketing-agency-checklist",
    category: "Brand Marketing",
    title: "Influencer Marketing Agency Checklist: What to Check Before Signing a Contract",
    seoTitle: "Influencer Marketing Agency Checklist Before You Sign",
    excerpt:
      "What brands should check before signing with an influencer marketing agency: scope and deliverables, fees and payment flow, creator contracts, usage rights and content ownership, disclosure and claims responsibility, reporting, data, confidentiality and exit terms, with an interactive checklist.",
    metaDescription:
      "Check before signing an influencer marketing agency contract: scope, fees, creator payments, usage rights, compliance, reporting, data and exit terms.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: "September 2026",
    readingTime: "11 min read",
    tags: ["influencer marketing agency checklist", "influencer agency contract", "influencer marketing agency agreement", "agency scope of work influencer", "influencer agency contract checklist"],
    related: ["influencer-marketing-agency-pitch-questions", "influencer-marketing-rfp", "influencer-marketing-contract"],
    hero: { src: "/blog/brand-guides/influencer-marketing-agency-checklist.svg", alt: "Pre-signing checklist for an influencer marketing agency contract covering scope, fees, rights, compliance, reporting and exit" },
    body: [
      {
        type: "paragraph",
        text: "Most disagreements between brands and influencer agencies trace back to something the contract didn't say: whether a replacement creator was included, who owns the content, how quickly creators get paid, what the report would contain. The pitch is the time for ideas; the contract is the time for specifics.",
      },
      {
        type: "paragraph",
        text: "This checklist covers the agreement between a brand and its agency. Contracts between the brand (or agency) and individual creators are covered in influencer marketing contracts. This is general information, not legal advice; have your lawyer review the agreement.",
        links: [{ text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before signing with an influencer marketing agency, check that the contract or statement of work defines scope and deliverables, fees and what they include, how and when creators are paid, who contracts creators, usage rights and content ownership, responsibility for disclosure and claims, approval process and timelines, replacement and cancellation terms, reporting format and cadence, data and confidentiality, and term, notice and handover on exit.",
      },
      { type: "heading", text: "Interactive checklist", id: "checklist" },
      { type: "tool", tool: "agency-contract-checklist" },
      { type: "heading", text: "Scope: the most important page", id: "scope" },
      {
        type: "paragraph",
        text: "A statement of work should list what's included per campaign or per month: number of creators, platforms, deliverables, strategy work, content review, reporting and meetings. It should also list what's excluded: production, paid media, travel, extra campaigns. Anything not written is a future negotiation.",
      },
      { type: "heading", text: "Money: fees, creator payments and GST", id: "money" },
      {
        type: "list",
        items: [
          "Agency fee model and amount, with creator fees shown separately.",
          "Who pays creators: the brand directly, or the agency on the brand's behalf.",
          "If the agency pays creators: when, relative to when the brand pays the agency.",
          "Payment milestones and terms for the agency fee.",
          "GST treatment and TDS responsibilities for each payment; confirm with your finance team or CA.",
        ],
      },
      {
        type: "paragraph",
        text: "Fee structures are explained in influencer marketing agency fees in India, and creator payment practices in influencer marketing payments.",
        links: [
          { text: "influencer marketing agency fees in India", href: "/blog/influencer-marketing-agency-fees-india" },
          { text: "influencer marketing payments", href: "/blog/influencer-marketing-payments" },
        ],
      },
      { type: "heading", text: "Rights and ownership", id: "rights" },
      {
        type: "paragraph",
        text: "Check who owns the content creators produce, what usage rights the brand gets (organic reposting, paid ads, website, duration, territory), and that the agency's contracts with creators actually grant those rights. A common problem: the brand's agreement with the agency promises ad usage, but the agency's contract with the creator only covered organic posting. Usage rights are explained in influencer usage rights.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "Compliance responsibilities", id: "compliance" },
      {
        type: "paragraph",
        text: "Under ASCI's guidelines both advertiser and influencer are responsible for disclosure, and consumer protection rules apply to misleading claims. The contract should say who checks disclosure on every post, who approves product claims, and how regulated categories are handled. The brand remains responsible for its own product claims, so provide substantiation for anything creators are asked to say.",
      },
      { type: "heading", text: "Reporting and data", id: "reporting" },
      {
        type: "list",
        items: [
          "Report format, metrics and delivery date after each campaign.",
          "Access to raw data: live links, screenshots, creator-provided insights.",
          "Whether you receive creator contact details and contracts at the end.",
          "Confidentiality of your plans, pricing and customer data.",
          "Handling of personal data in line with India's DPDP framework as it's phased in.",
        ],
      },
      { type: "heading", text: "Exit terms", id: "exit" },
      {
        type: "paragraph",
        text: "Check the minimum term, notice period, what happens to campaigns in progress, and handover: content files, contracts, creator contacts and data. Agree that creators are paid in full for completed work whatever happens between brand and agency.",
      },
      { type: "heading", text: "Verify the agency before signing", id: "verify" },
      {
        type: "table",
        headers: ["Check", "How"],
        rows: [
          ["Company details", "Registered name, GST registration and address match the proposal and invoices"],
          ["Past work", "Ask for live campaign links you can open, not only screenshots"],
          ["References", "Speak to one or two current or past clients, if the agency can share them"],
          ["Creator relationships", "Ask how creators are paid and how quickly; creators talk"],
          ["Team", "Meet the people who will run your account, not only the pitch team"],
          ["Reporting sample", "Request an anonymized report to see what you'll actually receive"],
          ["Compliance", "Ask how disclosure is checked on every post"],
        ],
      },
      {
        type: "paragraph",
        text: "After signing, setup is covered in influencer marketing agency onboarding.",
        links: [
          { text: "influencer marketing agency onboarding", href: "/blog/influencer-marketing-agency-onboarding" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Signing a proposal instead of a statement of work.",
          "Assuming usage rights granted to the brand match what creators agreed.",
          "No replacement or cancellation terms.",
          "No agreed report format.",
          "Long lock-ins without performance review points.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good agency contract turns the pitch into specifics: scope, fees, payment flow, rights, compliance, reporting, data and exit. Run the checklist, fix gaps before signing, and have a lawyer review the agreement. If you haven't chosen yet, questions to ask an influencer marketing agency covers the conversation before the contract.",
        links: [{ text: "questions to ask an influencer marketing agency", href: "/blog/influencer-marketing-agency-pitch-questions" }],
      },
    ],
    faqs: [
      {
        question: "What should an influencer marketing agency contract include?",
        answer:
          "Scope and deliverables, fees and what they include, creator payment flow, who contracts creators, usage rights and ownership, disclosure and claims responsibilities, approvals, replacement and cancellation terms, reporting, confidentiality and data, and term, notice and handover.",
      },
      {
        question: "Who owns influencer content created through an agency?",
        answer:
          "It depends on the contracts. Check what rights the brand receives and that the agency's agreements with creators actually grant them, including paid ad usage and duration.",
      },
      {
        question: "Who is responsible for influencer disclosure: the brand or the agency?",
        answer:
          "Under ASCI's guidelines the advertiser and the influencer are both responsible. The agency contract should state who checks disclosure on each post.",
      },
      {
        question: "How can I verify an influencer marketing agency?",
        answer:
          "Check its registered company and GST details, open live campaign links, speak to references where possible, ask how and when creators are paid, meet the team who'll run your account, and request a sample report.",
      },
    ],
  },
];
