import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_6_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * Deal operations (600–649 layer): brand partnership pipeline, creator CRM,
 * inbound lead handling, income tracking, contracts vs emails, campaign
 * documentation, tax records, late payments and cancellations. 604 (deal
 * tracker) was consolidated into creator-workflow, which already ships the
 * campaign tracker CSV.
 */
export const dealOperationsPosts: BlogPost[] = [
  {
    slug: "creator-brand-partnership-pipeline",
    category: "Creator Resources",
    title: "How Creators Can Build a Brand Partnership Pipeline",
    seoTitle: "How to Build a Brand Partnership Pipeline as a Creator",
    excerpt:
      "A brand partnership pipeline turns random brand deals into a steady flow: target lists, outreach, stages from prospect to paid, weekly pipeline habits, conversion between stages and how to keep enough deals in play without overcommitting.",
    metaDescription:
      "How creators build a brand partnership pipeline: target lists, pipeline stages from prospect to paid, weekly habits, stage conversion and capacity planning.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["brand partnership pipeline", "creator pipeline", "creator sales pipeline", "brand deal pipeline", "creator outreach system", "find brand deals consistently", "pitch to payment", "track brand deals to payment"],
    related: ["creator-crm", "manage-brand-collaboration-leads", "how-to-find-brands-to-collaborate-with"],
    body: [
      {
        type: "paragraph",
        text: "Most creators experience brand income as weather. Three deals arrive in October, nothing in January, and every quiet month feels like the end. The creators whose income is steadier usually aren't bigger. They have a pipeline: a visible list of brands at different stages, from \"haven't contacted yet\" to \"paid and ready to renew\", and a weekly habit of moving them forward.",
      },
      {
        type: "paragraph",
        text: "This is the pillar guide for Kudozz's deal operations section. It explains the pipeline as a system. For the tool you run it in, see creator CRM; for handling inbound enquiries, see how to manage brand collaboration leads; for finding brands in the first place, see how to find brands to collaborate with.",
        links: [
          { text: "creator CRM", href: "/blog/creator-crm" },
          { text: "how to manage brand collaboration leads", href: "/blog/manage-brand-collaboration-leads" },
          { text: "how to find brands to collaborate with", href: "/blog/how-to-find-brands-to-collaborate-with" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A brand partnership pipeline is a list of every brand opportunity you're working on, organised by stage: target, contacted, in conversation, proposal sent, negotiating, confirmed, in production, delivered, invoiced, paid and renewal. To build one, list 30 to 50 brands that fit your audience, add inbound enquiries as they arrive, move each brand through the stages with a dated next action, review it weekly, and track how many brands move from one stage to the next. The pipeline shows you early when future months look thin, so you can pitch before the gap arrives.",
      },
      { type: "heading", text: "What should a creator include in a brand partnership pipeline?", id: "stages" },
      {
        type: "image",
        src: "/blog/creator-resources/creator-brand-pipeline.svg",
        alt: "Brand partnership pipeline stages: target list, contacted, in conversation, proposal, negotiating, confirmed, delivered and invoiced, paid, renewal",
        caption: "Every brand sits in exactly one stage, with a dated next action.",
        width: 1200,
        height: 675,
      },
      {
        type: "table",
        headers: ["Stage", "Means", "Next action"],
        rows: [
          ["Target", "A brand that fits, not yet contacted", "Research contact; draft a specific pitch"],
          ["Contacted", "Pitch sent or enquiry received", "Follow up after 5–7 working days"],
          ["In conversation", "The brand has replied with interest", "Get the brief, budget range and timeline"],
          ["Proposal sent", "You've sent a proposal or quote", "Follow up; answer questions"],
          ["Negotiating", "Scope, fee or terms under discussion", "Agree terms in writing"],
          ["Confirmed", "Agreement signed or confirmed in writing", "Kick-off; add dates to your calendar"],
          ["In production", "Content being made or approved", "Hit draft and posting dates"],
          ["Delivered and invoiced", "Content live, invoice sent", "Send report; track payment due date"],
          ["Paid", "Money received and reconciled", "Check TDS; thank the brand"],
          ["Renewal", "Discuss what's next", "Propose the next campaign"],
          ["Lost or paused", "Not now, with a reason", "Note the reason; set a revisit date"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep a reason when a brand drops out (\"budget\", \"timing\", \"not our audience\"). Those reasons are the most useful data your pipeline produces.",
      },
      { type: "heading", text: "Build the target list", id: "targets" },
      {
        type: "paragraph",
        text: "A pipeline is only as good as the brands at the top of it. Build a target list of 30 to 50 brands in three rings:",
      },
      {
        type: "list",
        items: [
          "Ring 1: brands you already use and mention organically. Easiest yes, most credible content.",
          "Ring 2: brands in your niche that work with creators of your size (look at paid partnership labels and sponsored segments in your category).",
          "Ring 3: adjacent categories your audience buys from (a fitness creator's audience also buys groceries, apparel and apps).",
        ],
      },
      {
        type: "paragraph",
        text: "For each, note why it fits: an audience overlap, a product you've used, a campaign pattern you've seen. How to find brands to collaborate with explains the research methods, and creator brand fit has a scorecard for judging each one.",
        links: [{ text: "creator brand fit", href: "/blog/creator-brand-fit" }],
      },
      { type: "heading", text: "Outbound and inbound in one pipeline", id: "outbound-inbound" },
      {
        type: "table",
        headers: ["Source", "Where it enters", "Typical first stage"],
        rows: [
          ["Your pitches", "Target list", "Target → Contacted"],
          ["Inbound emails and DMs", "Lead triage", "Contacted or In conversation"],
          ["Platform tools (Creator Marketplace, YouTube Creator Partnerships)", "Inquiry in the platform", "In conversation"],
          ["Agencies and networks", "Brief shared with you", "In conversation"],
          ["Past clients", "Renewal list", "Renewal"],
        ],
      },
      {
        type: "paragraph",
        text: "Treat them all the same once they're in: one list, one set of stages, one weekly review. Inbound leads still need qualifying; see how to manage brand collaboration leads.",
      },
      {
        type: "paragraph",
        text: "Platform sources: Instagram Creator Marketplace and YouTube Creator Partnerships.",
        links: [
          { text: "Instagram Creator Marketplace", href: "/blog/instagram-creator-marketplace" },
          { text: "YouTube Creator Partnerships", href: "/blog/youtube-creator-partnerships-india" },
        ],
      },
      { type: "heading", text: "The weekly pipeline routine", id: "weekly" },
      {
        type: "template",
        label: "Weekly pipeline routine (45–60 minutes)",
        text: "1. Add new inbound leads and qualify them\n2. Send 3–5 new pitches from your target list\n3. Follow up on everything with a next action due this week\n4. Update stages and next-action dates\n5. Check the next 8 weeks: are enough deals confirmed or close?\n6. Move stalled deals to \"paused\" with a revisit date",
      },
      {
        type: "paragraph",
        text: "Consistency matters more than volume. Five good pitches every week for three months usually beat fifty sent in a panic after a quiet month. Brand collaboration email templates has pitch and follow-up wording.",
      },
      {
        type: "paragraph",
        text: "Templates: brand collaboration email templates.",
        links: [{ text: "brand collaboration email templates", href: "/blog/brand-collaboration-email-templates" }],
      },
      { type: "heading", text: "How many deals do you need in the pipeline?", id: "pipeline-maths" },
      {
        type: "paragraph",
        text: "Work backwards from your target. Use your own history for the conversion between stages; if you don't have history yet, track it for three months before relying on it.",
      },
      {
        type: "template",
        label: "Pipeline maths (illustrative, use your own rates)",
        text: "Monthly goal: 3 confirmed paid deals\nIf ~1 in 3 proposals is confirmed → ~9 proposals a month\nIf ~1 in 2 conversations reaches a proposal → ~18 conversations\nIf ~1 in 4 pitches leads to a conversation → ~72 pitches a month (or fewer, as inbound grows)",
      },
      {
        type: "paragraph",
        text: "These ratios are placeholders, not benchmarks; creators' rates vary widely by niche, audience and pitch quality. The value is in knowing your own.",
      },
      { type: "heading", text: "Read the pipeline for problems", id: "diagnose" },
      {
        type: "table",
        headers: ["Pattern", "Likely problem", "Fix"],
        rows: [
          ["Many pitches, few replies", "Weak targeting or generic pitches", "Narrow the list; personalise the first line"],
          ["Replies, but few proposals", "Poor fit or unclear offer", "Clarify your formats and audience in the pitch"],
          ["Proposals, but few confirmed", "Pricing, proof or timing", "Add case studies; offer scope options"],
          ["Confirmed, but late payments", "Terms not agreed", "Tighten payment terms upfront"],
          ["Paid, but no renewals", "No post-campaign rhythm", "Report and propose the next step"],
        ],
      },
      {
        type: "paragraph",
        text: "Proof that closes deals: creator case study.",
        links: [{ text: "creator case study", href: "/blog/creator-case-study" }],
      },
      { type: "heading", text: "Capacity: don't overfill the pipeline", id: "capacity" },
      {
        type: "paragraph",
        text: "A pipeline also tells you when to stop pitching. If the next eight weeks already hold as many deliverables as you can produce well, pause outbound and focus on delivery. Overcommitting leads to rushed content, missed deadlines and weaker renewals. Creator workflow covers production planning.",
      },
      {
        type: "paragraph",
        text: "Delivery: creator workflow.",
        links: [{ text: "creator workflow", href: "/blog/creator-workflow" }],
      },
      { type: "heading", text: "For brands: what a creator pipeline means for you", id: "for-brands" },
      {
        type: "paragraph",
        text: "Brands benefit when creators run a pipeline: replies are faster, proposals are clearer and capacity is known upfront. When briefing creators, share your timeline early, give a budget range, and tell creators when a decision will be made. Brand teams running their own outreach can use Kudozz's guide to influencer outreach and campaign management for the other side of this process.",
      },
      {
        type: "paragraph",
        text: "For brands: influencer campaign management.",
        links: [{ text: "influencer campaign management", href: "/blog/influencer-campaign-management" }],
      },
      { type: "heading", text: "From pitch to payment: track cycle time", id: "pitch-to-payment" },
      {
        type: "paragraph",
        text: "A deal isn't finished when it's signed; it's finished when the money is in your account. Track the dates each deal enters key stages, and two numbers become visible: how long deals take to close, and how long you wait to be paid.",
      },
      {
        type: "table",
        headers: ["Measure", "From → to", "What it tells you"],
        rows: [
          ["Time to close", "Contacted → confirmed", "How far ahead you need to pitch to fill a month"],
          ["Time to deliver", "Confirmed → content live", "Whether approvals or production slow you down"],
          ["Time to cash", "Content live → paid", "Whether invoicing and follow-ups work"],
          ["Pitch to payment", "Contacted → paid", "The full cycle to plan cash flow around"],
        ],
      },
      {
        type: "paragraph",
        text: "If pitch to payment is often three months, a gap you see in October's pipeline is a cash gap in January. Use these numbers in creator revenue forecasting and creator cash flow management, and keep late payers on a schedule using how creators handle late brand payments.",
        links: [
          { text: "creator revenue forecasting", href: "/blog/creator-revenue-forecasting" },
          { text: "creator cash flow management", href: "/blog/creator-cash-flow-management" },
          { text: "how creators handle late brand payments", href: "/blog/creators-handle-late-brand-payments" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Pitching only when income drops.",
          "Keeping the pipeline in your head or scattered across DMs.",
          "No next action or date on each deal.",
          "Never recording why deals were lost.",
          "Filling the pipeline beyond what you can deliver well.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A brand partnership pipeline turns brand income from weather into a system: a target list, clear stages, dated next actions, a weekly routine and honest stage-by-stage numbers. Run it in a simple CRM, review it every week, and let it tell you when to pitch and when to deliver.",
      },
    ],
    faqs: [
      {
        question: "What is a brand partnership pipeline for creators?",
        answer:
          "A list of every brand opportunity organised by stage, from target and contacted through negotiation, delivery and payment to renewal, with a next action for each.",
      },
      {
        question: "How many brands should a creator pitch each week?",
        answer:
          "Enough to keep future months filled at your own conversion rates. Many creators start with three to five personalised pitches a week and adjust once they know their numbers.",
      },
      {
        question: "Should inbound enquiries go in the same pipeline?",
        answer:
          "Yes. Inbound leads, pitches, platform inquiries and renewals should all sit in one pipeline with the same stages, after inbound leads are qualified.",
      },
    ],
  },
  {
    slug: "creator-crm",
    category: "Creator Resources",
    title: "Creator CRM: How to Track Brand Leads, Deals and Follow-Ups",
    seoTitle: "Creator CRM: Track Brand Leads, Deals and Follow-Ups",
    excerpt:
      "What a creator CRM is, the fields worth tracking for brands, contacts, deals and follow-ups, how to set one up in a spreadsheet or tool, and the habits that keep it useful instead of abandoned after two weeks.",
    metaDescription:
      "Creator CRM explained: fields for brands, contacts, deals and follow-ups, spreadsheet vs tool, setup in an afternoon, and habits that keep it up to date.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator CRM", "CRM for influencers", "track brand deals", "brand contacts creators", "creator follow-up system", "influencer CRM spreadsheet", "creator CRM tools", "creator client CRM", "manage brand relationships"],
    related: ["creator-brand-partnership-pipeline", "manage-brand-collaboration-leads", "creator-workflow"],
    body: [
      {
        type: "paragraph",
        text: "Every creator who works with brands has a CRM. For most, it's their inbox, their DMs, a few WhatsApp chats and their memory. That works for five deals a year. At fifteen, follow-ups slip, a brand manager who moved companies disappears from view, and nobody remembers what rate was quoted to whom.",
      },
      {
        type: "paragraph",
        text: "A creator CRM (customer relationship management system) fixes that by putting brands, people and conversations in one place. This guide explains what to track and how to set it up. The pipeline logic it supports is in how to build a brand partnership pipeline; the campaign-level tracker for deals you've already won is part of creator workflow.",
        links: [
          { text: "how to build a brand partnership pipeline", href: "/blog/creator-brand-partnership-pipeline" },
          { text: "creator workflow", href: "/blog/creator-workflow" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator CRM is a single system that records every brand you work with or want to work with, the people you deal with there, each deal or conversation and its stage, and the next follow-up. Track brands (category, fit, history), contacts (name, role, email, agency or in-house), deals (stage, deliverables, quote, dates) and activities (last contact, next action and date). A spreadsheet works for most creators; a CRM tool helps once you're managing dozens of active conversations. The system only works if you update it every time a conversation moves.",
      },
      { type: "heading", text: "CRM vs pipeline vs campaign tracker", id: "differences" },
      {
        type: "table",
        headers: ["Tool", "Answers", "Covers"],
        rows: [
          ["Creator CRM", "\"Who do I know, and what's happening with them?\"", "Brands, contacts, conversations, follow-ups over years"],
          ["Brand partnership pipeline", "\"Which opportunities are at which stage?\"", "A view of deals by stage (usually inside the CRM)"],
          ["Campaign tracker", "\"Is this confirmed campaign on track?\"", "Deliverables, dates, approvals, invoicing for won deals"],
        ],
      },
      {
        type: "paragraph",
        text: "The pipeline is a view of your CRM; the campaign tracker takes over once a deal is confirmed. Creator workflow includes a downloadable campaign tracker.",
      },
      { type: "heading", text: "What should a creator track in a CRM?", id: "fields" },
      { type: "subheading", text: "Brands" },
      {
        type: "table",
        headers: ["Field", "Why"],
        rows: [
          ["Brand name and category", "Filtering by category and spotting conflicts"],
          ["Website and social handles", "Quick research"],
          ["Fit notes", "Why this brand suits your audience"],
          ["Status", "Target, active, past client, not a fit"],
          ["Exclusivity or conflicts", "Avoid competing deals"],
          ["Source", "Pitch, inbound, platform, agency, referral"],
        ],
      },
      { type: "subheading", text: "Contacts" },
      {
        type: "table",
        headers: ["Field", "Why"],
        rows: [
          ["Name, role, company", "Who you're actually talking to"],
          ["Email (official domain) and phone", "Contact and scam checks"],
          ["In-house or agency (which agency)", "Who pays and who decides"],
          ["Last contact date", "Follow-up timing"],
          ["Notes", "Preferences, past feedback, relationship history"],
        ],
      },
      { type: "subheading", text: "Deals and conversations" },
      {
        type: "table",
        headers: ["Field", "Why"],
        rows: [
          ["Stage", "Pipeline view"],
          ["Deliverables discussed", "What's on the table"],
          ["Quote or budget", "Consistency across quotes"],
          ["Usage and exclusivity requested", "Pricing and conflicts"],
          ["Key dates", "Launches and deadlines"],
          ["Next action and due date", "The most important field"],
          ["Outcome and reason (won, lost, paused)", "Learning over time"],
        ],
      },
      { type: "heading", text: "Creator CRM tools: spreadsheet, database or dedicated CRM?", id: "tools" },
      {
        type: "table",
        headers: ["Option", "Good for", "Watch out for"],
        rows: [
          ["Spreadsheet (Google Sheets, Excel)", "Most creators; free, flexible, easy to share with a manager", "Needs discipline; no automatic reminders"],
          ["Database workspace (such as Notion or Airtable)", "Linked brands, contacts and deals; views by stage", "Setup time; easy to over-build"],
          ["Dedicated CRM (such as HubSpot's free CRM)", "High volume, teams, email tracking and reminders", "Learning curve; paid tiers for advanced features"],
        ],
      },
      {
        type: "paragraph",
        text: "Start with a spreadsheet: one tab for brands, one for contacts, one for deals. Move to a tool only when the spreadsheet actually limits you. Features and free-plan limits change often, so check current details before you commit.",
      },
      { type: "subheading", text: "Signs it's time to switch to a CRM tool" },
      {
        type: "list",
        items: [
          "You regularly miss follow-ups because the sheet can't remind you.",
          "A manager or assistant also works the pipeline and you need separate logins and history.",
          "You manage more than a few dozen active brand conversations at once.",
          "You want emails logged against each contact automatically.",
        ],
      },
      {
        type: "paragraph",
        text: "Whichever tool you choose, make sure it exports your data and connects to your calendar and invoicing. How a CRM fits with the rest of your tools is covered in the creator tech stack, and connecting it with no-code automation in no-code automation for creators.",
        links: [
          { text: "creator tech stack", href: "/blog/creator-tech-stack" },
          { text: "no-code automation for creators", href: "/blog/no-code-automation-creators" },
        ],
      },
      { type: "heading", text: "Set it up in an afternoon", id: "setup" },
      {
        type: "template",
        label: "Creator CRM setup",
        text: "1. Create three tabs: Brands, Contacts, Deals\n2. Add every brand you've worked with in the last 12 months\n3. Add every open conversation from email and DMs\n4. Give each open deal a stage and a next action with a date\n5. Add your target list of 30–50 brands (status: Target)\n6. Set a recurring weekly 30-minute CRM review",
      },
      { type: "heading", text: "Follow-up rules", id: "follow-up" },
      {
        type: "paragraph",
        text: "Most brand deals are won or lost in follow-up. Simple rules help:",
      },
      {
        type: "list",
        items: [
          "Every open deal has a next action and date. No exceptions.",
          "Follow up on pitches after five to seven working days, then once more a week later.",
          "After a proposal, follow up within a week with something useful (a relevant post, a date question), not just \"any update?\".",
          "After a \"not now\", set a revisit date and note the reason.",
          "Log every follow-up so you don't contact someone twice in a day or not at all for a month.",
        ],
      },
      {
        type: "paragraph",
        text: "Follow-up wording is in brand collaboration email templates.",
        links: [{ text: "brand collaboration email templates", href: "/blog/brand-collaboration-email-templates" }],
      },
      { type: "heading", text: "Keep it useful", id: "habits" },
      {
        type: "paragraph",
        text: "CRMs fail when updating them feels like extra work. Make it a two-minute habit: update the row whenever you send or receive an email about a deal. Review weekly. Archive dead rows rather than deleting them; lost-deal reasons become useful patterns over time.",
      },
      { type: "heading", text: "Privacy and security", id: "privacy" },
      {
        type: "paragraph",
        text: "Your CRM holds other people's contact details. Keep it private, don't share contact lists with third parties, use strong passwords and two-step verification on the tool, and delete personal details you no longer need. Treat brand pricing and contract information as confidential.",
      },
      { type: "heading", text: "For brands: why creator CRMs help campaigns", id: "for-brands" },
      {
        type: "paragraph",
        text: "Creators with a CRM respond faster, remember past feedback and flag conflicts early. Brands can help by using official email domains, naming the decision-maker, and keeping one point of contact per campaign. For brand teams, the equivalent discipline is influencer campaign management with a clear owner for each creator relationship.",
        links: [{ text: "influencer campaign management", href: "/blog/influencer-campaign-management" }],
      },
      {
        type: "paragraph",
        text: "Agencies tracking many creators rather than brand deals need a different structure; see creator talent database.",
        links: [
          { text: "creator talent database", href: "/blog/creator-talent-database" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Building a complex system you never update.",
          "No next-action date on open deals.",
          "Tracking brands but not the people who move between them.",
          "Deleting lost deals instead of recording why they were lost.",
          "Sharing contact data carelessly.",
        ],
      },
      {
        type: "paragraph",
        text: "Brands managing many creator relationships have a parallel guide: influencer marketing CRM.",
        links: [
          { text: "influencer marketing CRM", href: "/blog/influencer-marketing-crm" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator CRM is simply one place for brands, people, deals and follow-ups. Start with a three-tab spreadsheet, give every open deal a next action, review weekly, and let the history it builds make every future negotiation easier.",
      },
    ],
    faqs: [
      {
        question: "What is a creator CRM?",
        answer:
          "A system that records the brands a creator works with or targets, the contacts there, each deal or conversation and its stage, and the next follow-up.",
      },
      {
        question: "Do creators need CRM software?",
        answer:
          "Not at first. A spreadsheet with brands, contacts and deals tabs works for most creators. Move to a tool when volume or a team makes the spreadsheet hard to manage.",
      },
      {
        question: "What's the most important field in a creator CRM?",
        answer:
          "The next action and its due date. Without it, follow-ups slip and deals go quiet.",
      },
    ],
  },
  {
    slug: "manage-brand-collaboration-leads",
    category: "Creator Resources",
    title: "How to Manage Brand Collaboration Leads as a Creator",
    seoTitle: "How to Manage Brand Collaboration Leads as a Creator",
    excerpt:
      "How to handle inbound brand enquiries professionally: where leads arrive, a quick qualification checklist, response times, questions to ask before quoting, reply templates, scam checks and moving good leads into your pipeline.",
    metaDescription:
      "How creators manage inbound brand collaboration leads: where they arrive, qualifying in minutes, response times, questions before quoting, templates and scam checks.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["brand collaboration leads", "manage brand enquiries", "inbound brand deals", "reply to brand collaboration", "qualify brand leads", "creator enquiry process"],
    related: ["creator-crm", "creator-brand-partnership-pipeline", "creator-scams-fake-brand-collaborations"],
    body: [
      {
        type: "paragraph",
        text: "Inbound enquiries feel like the easy part of brand work: a brand found you and wants to pay. In practice, they're where a lot of value leaks. Good leads wait days for a reply, scam messages get the same attention as real briefs, and creators quote before knowing what the brand actually wants.",
      },
      {
        type: "paragraph",
        text: "This guide covers the first 48 hours of an inbound lead: capture, qualify, respond and route. For the system the lead then enters, see how to build a brand partnership pipeline and creator CRM.",
        links: [
          { text: "how to build a brand partnership pipeline", href: "/blog/creator-brand-partnership-pipeline" },
          { text: "creator CRM", href: "/blog/creator-crm" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To manage brand collaboration leads: capture every enquiry in one place whether it arrives by email, DM or platform tool; qualify it quickly (is the sender real, does the brand fit, is there a budget and timeline?); reply within one or two working days; ask for the brief, deliverables, usage, exclusivity, timeline and budget range before quoting; decline poor fits politely; and add qualified leads to your pipeline with a next action. Treat any request for fees, passwords or OTPs as a likely scam.",
      },
      { type: "heading", text: "Where leads arrive", id: "sources" },
      {
        type: "table",
        headers: ["Source", "Common quality", "Tip"],
        rows: [
          ["Email to your business address", "Usually highest", "Put a clear email in your bio and website"],
          ["Instagram or YouTube DMs", "Mixed; many low-quality or spam", "Move serious leads to email"],
          ["Platform tools (Creator Marketplace, YouTube Creator Partnerships)", "Structured briefs", "Check them regularly; they don't always notify well"],
          ["Agencies and networks", "Often clear briefs, tight timelines", "Confirm who the end client is"],
          ["WhatsApp or phone", "Fast but easy to lose", "Summarise in email afterwards"],
          ["Referrals from other creators", "Often good fit", "Thank the referrer"],
        ],
      },
      { type: "heading", text: "Qualify in five minutes", id: "qualify" },
      {
        type: "template",
        label: "Lead qualification checklist",
        text: "☐ Sender is real: official domain email, real brand or agency, findable online\n☐ Brand fits: I'd use or recommend this; my audience buys in this category\n☐ No red flags: no fee to join, no password/OTP request, no pressure to decide now\n☐ There's a real ask: product, deliverables or campaign idea mentioned\n☐ Timing is possible: dates fit my capacity\n☐ Budget signal: paid, gifted or unclear (ask)",
      },
      {
        type: "paragraph",
        text: "Score it simply: good fit, needs more info, or decline. How to spot fake brand collaboration offers covers red flags in detail, and creator brand fit has a fuller scorecard.",
      },
      {
        type: "paragraph",
        text: "Checks: how to spot fake brand collaboration offers and creator brand fit.",
        links: [
          { text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" },
          { text: "creator brand fit", href: "/blog/creator-brand-fit" },
        ],
      },
      { type: "heading", text: "How fast should creators reply to brand enquiries?", id: "response-time" },
      {
        type: "paragraph",
        text: "Within one or two working days for promising leads, even if the reply is \"thanks, I'm interested; could you share the brief?\" Brands often contact several creators and shortlist whoever responds clearly first. For leads you'll decline, a short polite reply within a few days protects your reputation.",
      },
      { type: "heading", text: "Ask before you quote", id: "questions" },
      {
        type: "paragraph",
        text: "Quoting before understanding the ask leads to underpricing or awkward renegotiation. Ask:",
      },
      {
        type: "list",
        items: [
          "What's the campaign objective and key message?",
          "Which deliverables, platforms and quantities?",
          "What usage do you need (organic repost, paid ads, duration)?",
          "Any exclusivity?",
          "Timeline: product arrival, draft, posting dates?",
          "Is there a budget range?",
          "Who is the end client, if you're an agency?",
        ],
      },
      {
        type: "template",
        label: "Reply template: interested, need details",
        text: "Hi [Name],\n\nThanks for reaching out about [brand/campaign]. It sounds like a good fit for my audience, who [one line on audience].\n\nTo send you an accurate proposal, could you share:\n• the brief or key message\n• deliverables and platforms you have in mind\n• usage (organic only, or paid ads too) and any exclusivity\n• timelines and budget range\n\nHappy to jump on a short call if easier.\n\n[Your name]",
      },
      { type: "heading", text: "Gifted-only and \"exposure\" offers", id: "gifted" },
      {
        type: "paragraph",
        text: "Many leads offer products without payment. Decide your policy in advance: some creators accept gifted products they'd genuinely use with no posting obligation; others treat any required posting as paid work. Either way, disclose gifted content if you post it. Creator product seeding covers turning gifting into relationships, and how creators say no to brand deals has decline wording.",
      },
      {
        type: "paragraph",
        text: "Related: creator product seeding and how creators say no to brand deals.",
        links: [
          { text: "creator product seeding", href: "/blog/creator-product-seeding" },
          { text: "how creators say no to brand deals", href: "/blog/how-creators-say-no-to-brand-deals" },
        ],
      },
      { type: "heading", text: "Route every lead", id: "route" },
      {
        type: "table",
        headers: ["Outcome", "Action"],
        rows: [
          ["Good fit, details received", "Send proposal; move to \"Proposal sent\""],
          ["Good fit, missing details", "Ask questions; set follow-up date"],
          ["Poor fit", "Polite decline; note reason in CRM"],
          ["Suspicious", "Don't engage further; report if needed"],
          ["Not now", "Note revisit date"],
        ],
      },
      { type: "heading", text: "For brands: how to send a lead creators can act on", id: "for-brands" },
      {
        type: "paragraph",
        text: "Brands get faster, better replies when the first message includes the product, objective, deliverables, usage, timeline and a budget range, sent from an official email domain. Vague \"collab?\" DMs look like spam to experienced creators. Kudozz's guide on how to contact Instagram influencers covers brand outreach.",
        links: [{ text: "how to contact Instagram influencers", href: "/blog/how-to-contact-instagram-influencers" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Leaving good leads in DMs for a week.",
          "Quoting a price before understanding usage and exclusivity.",
          "Engaging with offers that ask for fees or login details.",
          "Ignoring platform inquiry inboxes.",
          "Not recording declined leads and why.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Inbound leads are only valuable if you handle them well. Capture them in one place, qualify quickly, reply promptly, ask the right questions before quoting, decline gracefully and route every lead into your pipeline.",
      },
    ],
    faqs: [
      {
        question: "How should creators respond to brand collaboration requests?",
        answer:
          "Reply within one or two working days, thank them, confirm interest if it fits, and ask for the brief, deliverables, usage, exclusivity, timeline and budget range before quoting.",
      },
      {
        question: "How can I tell if a brand collaboration offer is real?",
        answer:
          "Check the sender uses an official email domain, the brand exists and is findable, and they're not asking for fees, passwords, OTPs or instant decisions.",
      },
      {
        question: "Should creators quote a price in the first reply?",
        answer:
          "Usually not. Ask about deliverables, usage, exclusivity and timelines first; the right price depends on them.",
      },
    ],
  },
  {
    slug: "creator-income-tracker",
    category: "Creator Resources",
    title: "Creator Income Tracker: How to Track Brand Deals and Creator Revenue",
    seoTitle: "Creator Income Tracker: Track Brand Deals and Revenue",
    excerpt:
      "How to set up a creator income tracker: the columns for brand deals, platform payouts, affiliate and product income, invoiced vs received vs outstanding, TDS and GST columns, monthly reconciliation and the reports it gives you.",
    metaDescription:
      "How creators track income: columns for every revenue stream, invoiced vs received, TDS and GST, monthly reconciliation and the reports a tracker gives you.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator income tracker", "track creator revenue", "influencer income spreadsheet", "brand deal income tracking", "creator revenue tracker", "creator bookkeeping India"],
    related: ["creator-tax-records-india", "creator-analytics-dashboard", "how-to-invoice-brands-as-a-creator-india"],
    body: [
      {
        type: "paragraph",
        text: "Ask a creator how much they earned last quarter and many will open their bank app and scroll. The number they find mixes brand payments for work done months ago, platform payouts from several sources, and refunds. It can't tell them what they've invoiced but not received, which client owes money, or how much TDS they should see credited.",
      },
      {
        type: "paragraph",
        text: "An income tracker answers those questions. This guide explains how to build one. It's about recording income; for the costs side see creator business expenses, and for the tax records you'll need at year-end see creator tax records.",
        links: [
          { text: "creator business expenses", href: "/blog/creator-business-expenses-india" },
          { text: "creator tax records", href: "/blog/creator-tax-records-india" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator income tracker is a sheet with one row per income item: brand deal invoices, platform payouts, affiliate commissions, product sales and other income. For each, record the source, client or platform, invoice number and date, gross amount, GST charged (if registered), TDS deducted, amount received, date received and status (invoiced, overdue, paid). Reconcile it with your bank statement monthly. It shows what you've earned, what you're owed, which streams and clients matter most, and gives your accountant clean records.",
      },
      { type: "heading", text: "Why a bank statement isn't enough", id: "why" },
      {
        type: "table",
        headers: ["Question", "Bank statement", "Income tracker"],
        rows: [
          ["What did I earn this month?", "Shows money received, not earned", "Shows invoiced and earned by month"],
          ["Who owes me money?", "No", "Outstanding invoices with due dates"],
          ["How much TDS should I see credited?", "No", "TDS column per invoice"],
          ["Which stream or client matters most?", "Hard", "Totals by source and client"],
          ["What did a campaign really pay?", "Mixed with other credits", "Linked to the deal"],
        ],
      },
      { type: "heading", text: "What columns should a creator income tracker have?", id: "columns" },
      {
        type: "table",
        headers: ["Column", "Example (illustrative)"],
        rows: [
          ["Income ID", "INC-2026-041"],
          ["Type", "Brand deal / platform payout / affiliate / product / other"],
          ["Source", "Brand, agency or platform name"],
          ["Linked deal or campaign", "Diwali Reel campaign"],
          ["Invoice number and date", "KZ-041, 12 Oct 2026"],
          ["Gross amount (excluding GST)", "₹40,000"],
          ["GST charged (if registered)", "As applicable"],
          ["TDS deducted", "Per the payer's deduction"],
          ["Expected amount", "Gross + GST − TDS"],
          ["Due date", "Per agreed payment terms"],
          ["Amount received and date", "₹39,600 on 28 Oct 2026"],
          ["Status", "Invoiced / overdue / paid / written off"],
          ["TDS certificate received?", "Yes / no"],
          ["Notes", "Part payment, disputes, currency"],
        ],
      },
      {
        type: "paragraph",
        text: "TDS and GST treatment depends on your situation and the payer; see TDS for creators and GST for creators rather than assuming a rate. How to invoice brands covers the invoice itself.",
      },
      {
        type: "paragraph",
        text: "Tax details: TDS for creators, GST for creators and how to invoice brands.",
        links: [
          { text: "TDS for creators", href: "/blog/tds-for-influencers-india" },
          { text: "GST for creators", href: "/blog/gst-for-influencers-india" },
          { text: "how to invoice brands", href: "/blog/how-to-invoice-brands-as-a-creator-india" },
        ],
      },
      { type: "heading", text: "Tracking non-brand income", id: "other-streams" },
      {
        type: "table",
        headers: ["Stream", "What to record", "Where the number comes from"],
        rows: [
          ["YouTube (ads, fan funding, Shopping)", "Monthly payout by source", "YouTube Studio and AdSense for YouTube"],
          ["Instagram (Gifts, Subscriptions, badges)", "Monthly payout", "Professional dashboard payouts"],
          ["Affiliate programmes", "Confirmed commission (after returns)", "Each programme's dashboard"],
          ["Digital products and memberships", "Sales, fees, refunds", "Your store or payment gateway"],
          ["Services and workshops", "Invoice per client", "Your invoices"],
        ],
      },
      {
        type: "paragraph",
        text: "Record confirmed amounts when they're confirmed, and note pending amounts separately; affiliate commissions often reverse for returns.",
      },
      { type: "heading", text: "The monthly reconciliation", id: "reconcile" },
      {
        type: "template",
        label: "Monthly reconciliation (30 minutes)",
        text: "1. Download last month's bank statement\n2. Match every credit to a tracker row; mark as paid with date and amount\n3. Add any income that arrived without a row (platform payouts, surprises)\n4. Flag invoices past their due date; start follow-up\n5. Check TDS: note deductions per invoice; check your tax statement periodically\n6. Total by type, source and client; update your analytics dashboard",
      },
      {
        type: "paragraph",
        text: "Late invoices trigger the steps in how creators can handle late brand payments.",
        links: [{ text: "how creators can handle late brand payments", href: "/blog/creators-handle-late-brand-payments" }],
      },
      { type: "heading", text: "Reports the tracker gives you", id: "reports" },
      {
        type: "list",
        items: [
          "Income by month: earned (invoiced) vs received.",
          "Income by stream: brand deals, platforms, affiliate, products.",
          "Income by client: your concentration risk (see creator revenue diversification).",
          "Outstanding: who owes what and for how long.",
          "Average deal size and payment time by client.",
        ],
      },
      {
        type: "paragraph",
        text: "Concentration: creator revenue diversification.",
        links: [{ text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" }],
      },
      { type: "heading", text: "Accrual vs cash, simply", id: "timing" },
      {
        type: "paragraph",
        text: "\"Earned\" (when you invoiced or did the work) and \"received\" (when money arrived) often fall in different months. Track both columns. For tax purposes, how income is recognised depends on your situation and the rules that apply to you; ask your accountant how they want records organised.",
      },
      { type: "heading", text: "Privacy and backups", id: "backup" },
      {
        type: "paragraph",
        text: "Keep the tracker private, back it up, and store related invoices and statements in a matching folder structure. Creator campaign documentation covers the folder system.",
      },
      {
        type: "paragraph",
        text: "Documents: creator campaign documentation.",
        links: [{ text: "creator campaign documentation", href: "/blog/creator-campaign-documentation" }],
      },
      {
        type: "paragraph",
        text: "The tracker feeds a wider monthly bookkeeping routine covering expenses, TDS and receipts; see creator bookkeeping.",
        links: [
          { text: "creator bookkeeping", href: "/blog/creator-bookkeeping" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Recording only what hits the bank.",
          "Mixing personal and creator income in one account without notes.",
          "Ignoring TDS until filing time.",
          "Counting affiliate clicks or pending commissions as income.",
          "No monthly reconciliation.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator income tracker turns scattered payments into a clear picture: what you earned, what you're owed, where it came from and what tax was deducted. Build the columns once, reconcile monthly, and your year-end, your pricing and your conversations with your accountant all get easier.",
      },
    ],
    faqs: [
      {
        question: "What should a creator income tracker include?",
        answer:
          "One row per income item with type, source, linked campaign, invoice number and date, gross amount, GST, TDS, expected and received amounts, due date, status and whether the TDS certificate arrived.",
      },
      {
        question: "How often should creators reconcile income?",
        answer:
          "Monthly: match bank credits to tracker rows, flag overdue invoices and note TDS deductions.",
      },
      {
        question: "Should pending affiliate commissions count as income?",
        answer:
          "Track them separately as pending. Record them as income once confirmed, since commissions are often reversed for returns.",
      },
    ],
  },
  {
    slug: "creator-contracts-vs-emails",
    category: "Creator Resources",
    title: "Creator Contracts vs Emails: What Should Be in Writing?",
    seoTitle: "Creator Contracts vs Emails: What Should Be in Writing?",
    excerpt:
      "When a confirmed email is enough for a brand deal and when you need a signed contract: the terms that must be in writing either way, risk-based guidance, a confirmation email template, and how to handle DMs, WhatsApp and verbal agreements.",
    metaDescription:
      "When creators can rely on a confirmation email and when they need a signed contract: terms to put in writing, risk-based guidance and an email template.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator contract vs email", "influencer agreement email", "brand deal in writing", "confirmation email brand deal", "do creators need contracts", "influencer contract India"],
    related: ["influencer-contract-guide-for-creators", "creator-campaign-documentation", "creator-deliverables"],
    body: [
      {
        type: "paragraph",
        text: "Many creator deals in India are agreed over email, WhatsApp or DMs, especially small ones. That's often fine, as long as the important terms are written down somewhere both sides can see. Problems start when the \"agreement\" is a voice note, a vague DM and a brand manager who has since left the company.",
      },
      {
        type: "paragraph",
        text: "This guide explains what needs to be in writing, when a confirmation email is reasonable and when to insist on a signed contract. It's general information, not legal advice; for significant deals, have an agreement reviewed by a qualified lawyer. Clause-by-clause explanations are in the influencer contract guide for creators.",
        links: [{ text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Every brand deal should have its key terms in writing: deliverables, dates, fee, payment terms, usage rights, exclusivity, revisions, disclosure and cancellation. For small, simple, organic-only deals with a known brand, a detailed confirmation email that the brand replies to accepting is often a practical minimum. Use a signed contract when the fee is significant, usage includes paid ads or long durations, exclusivity is involved, the deal runs over months, content will be heavily edited, or you don't know the brand well. Never rely only on verbal agreements, DMs or voice notes.",
      },
      { type: "heading", text: "Why \"in writing\" matters", id: "why" },
      {
        type: "list",
        items: [
          "Memories differ, and brand contacts change jobs.",
          "Finance teams pay against documents, not conversations.",
          "Disputes about usage, revisions or cancellation are decided by what was agreed.",
          "Written terms make you look professional and filter out unserious clients.",
        ],
      },
      { type: "heading", text: "What must be in writing either way?", id: "must-have" },
      {
        type: "template",
        label: "Minimum written terms (email or contract)",
        text: "• Parties: your name/business and the brand (and agency, if any)\n• Deliverables: format, platform, quantity, key requirements\n• Dates: product arrival, draft, posting, live duration\n• Fee: amount, GST treatment, what's included\n• Payment: schedule, due date, invoicing requirements\n• Usage: organic/paid, platforms, duration, editing\n• Exclusivity: category, period (or \"none\")\n• Revisions: number of rounds\n• Disclosure: labels and platform tools\n• Cancellation: what happens if either side cancels",
      },
      { type: "heading", text: "When is a confirmation email enough?", id: "email-ok" },
      {
        type: "table",
        headers: ["Situation", "Email confirmation", "Signed contract"],
        rows: [
          ["Small organic post, known brand, clear brief", "Often reasonable", "Optional"],
          ["Paid usage or whitelisting", "Risky", "Recommended"],
          ["Exclusivity", "Risky", "Recommended"],
          ["Multi-month deal or retainer", "Not enough", "Recommended"],
          ["Significant fee", "Not enough", "Recommended"],
          ["New or unknown brand", "Risky", "Recommended, or advance payment"],
          ["Agency deal with unclear end client", "Risky", "Recommended"],
          ["Co-created products or royalties", "Not enough", "Needed"],
        ],
      },
      {
        type: "paragraph",
        text: "\"Recommended\" doesn't mean a 20-page document. A clear two- or three-page agreement covering the terms above is often enough.",
      },
      { type: "heading", text: "A confirmation email template", id: "template" },
      {
        type: "template",
        label: "Confirmation email",
        text: "Subject: Confirming terms: [Brand] x [Your name], [campaign]\n\nHi [Name],\n\nThanks for the call. Confirming what we agreed:\n\nDeliverables: 1 Instagram Reel (30–45s) + 1 Story set (3 frames, link sticker)\nDates: product by 5 Oct; draft by 12 Oct; posting 18 Oct; stays live at least 6 months\nFee: ₹[amount] + GST as applicable\nPayment: [50% on confirmation, 50% within 15 days of posting]; invoice to [billing email/PO]\nUsage: brand may repost organically on its own Instagram for 90 days; no paid ads without a separate agreement\nExclusivity: none\nRevisions: 1 round on script, 1 on draft\nDisclosure: paid partnership label + \"Ad\" in caption and on screen\nCancellation: if cancelled after script approval, [X]% of fee is payable\n\nPlease reply to confirm, and I'll get started.\n\n[Your name]",
      },
      {
        type: "paragraph",
        text: "The brand's reply confirming is what makes this useful. Save the thread.",
      },
      { type: "heading", text: "DMs, WhatsApp and calls", id: "dms" },
      {
        type: "paragraph",
        text: "Casual channels are fine for conversation, but summarise any agreement in an email afterwards. If a brand refuses to confirm anything in writing, treat that as a warning sign.",
      },
      { type: "heading", text: "When the brand sends its own contract", id: "brand-contract" },
      {
        type: "paragraph",
        text: "Read it fully. Common issues are broad usage (\"in perpetuity, all media\"), vague exclusivity, one-sided cancellation and indemnities that make you liable for the brand's claims. Ask for changes in writing and keep the version history. The influencer contract guide lists red flags.",
      },
      { type: "heading", text: "For brands: why written terms protect you too", id: "for-brands" },
      {
        type: "paragraph",
        text: "Clear written terms protect brands from misunderstandings about deliverables, usage and timelines, and make approvals and payments smoother. Brands should send terms before content is made, match usage to what they actually need, and route payment details through official channels. Kudozz's influencer marketing contract guide covers the brand's view.",
        links: [{ text: "influencer marketing contract guide", href: "/blog/influencer-marketing-contract" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Starting work before terms are confirmed.",
          "Relying on a DM that says \"done, let's go\".",
          "Signing broad usage or exclusivity without pricing it.",
          "Losing the email thread when you change devices.",
          "Assuming an agency's terms match the brand's.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Put every deal's key terms in writing. A detailed confirmation email the brand accepts can work for small, simple, organic deals; significant fees, paid usage, exclusivity, long terms or unfamiliar brands call for a signed agreement. When in doubt, write it down, and get legal advice when the stakes are high.",
      },
    ],
    faqs: [
      {
        question: "Do creators need a contract for every brand deal?",
        answer:
          "Every deal needs its key terms in writing. For small, simple, organic-only deals, a confirmation email the brand accepts is often practical; larger or riskier deals call for a signed contract.",
      },
      {
        question: "Is an email agreement legally valid?",
        answer:
          "Written communications can record an agreement, but whether terms are enforceable depends on the facts. This is general information; for significant deals, get legal advice.",
      },
      {
        question: "What should a brand deal confirmation email include?",
        answer:
          "Parties, deliverables, dates, fee and GST treatment, payment terms, usage, exclusivity, revisions, disclosure and cancellation terms, with a request to reply confirming.",
      },
    ],
  },
  {
    slug: "creator-campaign-documentation",
    category: "Creator Resources",
    title: "Creator Campaign Documentation: The Documents Every Professional Creator Needs",
    seoTitle: "Creator Campaign Documentation: Documents Every Creator Needs",
    excerpt:
      "The documents a professional creator keeps for every brand campaign, from pitch to payment: brief, proposal, agreement, approvals, live links and proof of disclosure, reports, invoices and payment records, with a folder structure you can copy.",
    metaDescription:
      "The documents creators should keep for every brand campaign: brief, agreement, approvals, disclosure proof, reports, invoices and payments, with a folder structure.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator campaign documentation", "influencer campaign documents", "creator paperwork", "brand deal records", "creator folder system", "proof of disclosure"],
    related: ["creator-contracts-vs-emails", "creator-tax-records-india", "creator-workflow"],
    body: [
      {
        type: "paragraph",
        text: "Documentation is invisible when a campaign goes well. It becomes the most important thing you own when it doesn't: a brand disputes a revision, a payment is delayed, a usage period is exceeded, or a tax notice asks about an old invoice. Creators who keep a simple, consistent record for every campaign resolve those situations in minutes instead of weeks.",
      },
      {
        type: "paragraph",
        text: "This guide lists the documents to keep for each campaign and a folder system to store them. For the ongoing campaign tracker, see creator workflow; for year-end tax records, see creator tax records.",
        links: [
          { text: "creator workflow", href: "/blog/creator-workflow" },
          { text: "creator tax records", href: "/blog/creator-tax-records-india" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "For every brand campaign, keep: the enquiry and brief, your proposal or quote, the signed agreement or confirmation email, purchase order if any, product receipt records, scripts and drafts with approval emails, the final files, live links with screenshots showing disclosure, the campaign report, the invoice, payment confirmation and TDS details. Store them in one folder per campaign with a consistent naming structure, and keep them for as long as your accountant and contracts require.",
      },
      { type: "heading", text: "The documents, stage by stage", id: "documents" },
      {
        type: "table",
        headers: ["Stage", "Document", "Why keep it"],
        rows: [
          ["Enquiry", "Original email or message; brief", "Proves what was asked"],
          ["Proposal", "Your quote or proposal", "Shows what you offered"],
          ["Agreement", "Signed contract or confirmation email thread; PO", "The terms that apply"],
          ["Product", "Delivery record; note of gifted items and approximate value", "Disclosure and tax context"],
          ["Production", "Script, drafts, raw files (as agreed)", "Evidence of work and originality"],
          ["Approval", "Approval emails or messages for each round", "Protects against late changes"],
          ["Publishing", "Live links; screenshots showing labels and date", "Proof of delivery and disclosure"],
          ["Reporting", "Report sent and analytics screenshots", "Proof of results shared"],
          ["Finance", "Invoice, payment confirmation, TDS details", "Income and tax records"],
          ["Usage", "Start and end dates of licensed usage", "Know when rights expire"],
        ],
      },
      { type: "heading", text: "Proof of disclosure", id: "disclosure-proof" },
      {
        type: "paragraph",
        text: "Take a screenshot of each sponsored post showing the paid partnership label and your on-screen or caption disclosure, with the date. If a question ever arises about whether content was disclosed, this is your evidence. The creator disclosure guide explains what disclosure should look like.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }],
      },
      { type: "heading", text: "Approval records", id: "approvals" },
      {
        type: "paragraph",
        text: "Save every approval, even informal ones (\"looks great, go ahead\" on WhatsApp). Screenshot or forward them to your email. If a brand later asks for changes after approving, the record shows what was agreed. Creator brand revisions explains the approval process.",
      },
      {
        type: "paragraph",
        text: "Approvals: creator brand revisions.",
        links: [{ text: "creator brand revisions", href: "/blog/creator-brand-revisions" }],
      },
      { type: "heading", text: "A folder structure you can copy", id: "folders" },
      {
        type: "template",
        label: "Folder structure",
        text: "Creator Business/\n  2026-27/\n    Campaigns/\n      2026-10_BrandName_CampaignName/\n        01_Brief-and-Proposal/\n        02_Agreement-PO/\n        03_Scripts-Drafts-Approvals/\n        04_Final-Files/\n        05_Live-Links-Screenshots/\n        06_Report/\n        07_Invoice-Payment-TDS/\n    Income-Tracker.xlsx\n    Expenses/\n  Templates/",
      },
      {
        type: "paragraph",
        text: "Name files with dates and versions: 2026-10-12_Draft-v2.mp4, 2026-10-14_Approval-Email.pdf.",
      },
      { type: "heading", text: "Keep the tracker and folders in sync", id: "sync" },
      {
        type: "paragraph",
        text: "Your campaign tracker (in creator workflow) tells you what's happening; the folder holds the proof. Add a folder link to each tracker row. At the end of each campaign, check the folder is complete before archiving.",
      },
      { type: "heading", text: "How long to keep records", id: "retention" },
      {
        type: "paragraph",
        text: "Keep campaign documents at least as long as your contract obligations run (for example, the end of any usage period) and as long as tax rules require for your situation. Retention periods for tax purposes depend on applicable law and can change, so ask your accountant rather than relying on a generic number.",
      },
      { type: "heading", text: "For brands: documentation that helps both sides", id: "for-brands" },
      {
        type: "paragraph",
        text: "Brands that send a written brief, a PO or agreement, written approvals and clear payment details make campaigns easier to run and audit. Keeping creator disclosure screenshots also helps brands demonstrate compliance. Kudozz's guide to influencer campaign management covers the brand's process.",
        links: [{ text: "influencer campaign management", href: "/blog/influencer-campaign-management" }],
      },
      { type: "heading", text: "Worked example: a dispute documentation solves", id: "example" },
      {
        type: "paragraph",
        text: "A brand emails six weeks after a campaign: \"We never approved the final cut; please take the Reel down and redo it at no cost.\" Without records, this becomes a stressful argument. With the campaign folder, it takes one reply:",
      },
      {
        type: "template",
        label: "Reply using documentation",
        text: "Hi [Name],\n\nThanks for flagging this. For reference, the final cut was approved by [contact] on [date] (\"Looks great, go ahead\"), attached. The Reel went live on [date] with the paid partnership label (screenshot attached), and the report was shared on [date].\n\nI'm happy to discuss a new version as a separate piece of work if the brief has changed.\n\n[Your name]",
      },
      {
        type: "paragraph",
        text: "The same folder answers a finance query about an old invoice, a usage question (\"can we still run this ad?\"), or a disclosure question from a platform or regulator.",
      },
      { type: "heading", text: "A one-page checklist to close each campaign", id: "close-out" },
      {
        type: "template",
        label: "Campaign close-out checklist",
        text: "☐ Agreement or confirmation email saved\n☐ All approvals saved (including chat screenshots)\n☐ Final files and project file saved\n☐ Live links recorded; screenshots with disclosure and date\n☐ Report sent and saved\n☐ Invoice sent; payment and TDS recorded\n☐ Usage expiry date noted in tracker and calendar\n☐ Folder named and archived",
      },
      {
        type: "paragraph",
        text: "The same structure extends to the rest of your business files and brand assets; see creator file management.",
        links: [
          { text: "creator file management", href: "/blog/creator-file-management" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Approvals only in voice notes or disappearing messages.",
          "No screenshots of live posts with disclosure.",
          "Invoices saved in one place, contracts in another, emails nowhere.",
          "Deleting raw files that prove originality.",
          "No record of when usage rights expire.",
        ],
      },
      {
        type: "paragraph",
        text: "Brands keeping campaign records can use the brand-side guide to influencer campaign documentation.",
        links: [
          { text: "influencer campaign documentation", href: "/blog/influencer-campaign-documentation" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Campaign documentation is cheap insurance. Keep the brief, agreement, approvals, proof of delivery and disclosure, report, invoice and payment records for every campaign, in one consistently named folder. The first dispute it resolves will pay for all the time it took.",
      },
    ],
    faqs: [
      {
        question: "What documents should creators keep for brand deals?",
        answer:
          "The brief, proposal, agreement or confirmation email, PO, approvals, final files, live links with disclosure screenshots, the report, the invoice and payment and TDS records.",
      },
      {
        question: "How should creators organise campaign files?",
        answer:
          "One folder per campaign, named by date, brand and campaign, with subfolders for brief, agreement, drafts and approvals, final files, live proof, report and finance.",
      },
      {
        question: "How long should creators keep campaign records?",
        answer:
          "At least as long as contract obligations and usage periods run, and as long as tax rules require for your situation. Ask your accountant for the period that applies to you.",
      },
    ],
  },
  {
    slug: "creator-tax-records-india",
    category: "Creator Resources",
    title: "Creator Tax Records: What Indian Creators Should Keep for Brand Deals",
    seoTitle: "Creator Tax Records India: What to Keep for Brand Deals",
    excerpt:
      "A record-keeping system for Indian creators' tax affairs: income, invoices, TDS certificates and statements, GST records if registered, expenses, gifted products, bank reconciliation and what to hand your accountant, without guessing thresholds.",
    metaDescription:
      "What tax records Indian creators should keep: income and invoices, TDS certificates, GST records if registered, expenses, gifted products and reconciliation.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator tax records India", "influencer tax records", "TDS certificate creators", "creator bookkeeping India", "records for CA creators", "GST records influencers"],
    related: ["tds-for-influencers-india", "gst-for-influencers-india", "creator-business-expenses-india"],
    body: [
      {
        type: "paragraph",
        text: "Tax conversations for creators usually happen in a rush: in the weeks before a filing deadline, with an accountant asking for documents that are scattered across inboxes and apps. Good records don't reduce what you owe, but they make sure you pay the right amount, claim the credits you're due and can answer questions confidently.",
      },
      {
        type: "paragraph",
        text: "Important: this is general information for Indian creators, not tax advice. Rules, forms and thresholds change; check current official guidance and work with a chartered accountant. The detailed rules are covered in TDS for creators and GST for creators; this guide is the record-keeping system that ties them together.",
        links: [
          { text: "TDS for creators", href: "/blog/tds-for-influencers-india" },
          { text: "GST for creators", href: "/blog/gst-for-influencers-india" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Indian creators should keep records of all income (invoices, platform payout statements, affiliate and product sales), TDS deducted and the certificates payers issue (now Form No. 131 under the 2026 rules), GST invoices and returns if registered, business expenses with bills, a log of gifted products and their approximate value, contracts and POs, and bank statements reconciled monthly. Check TDS credited against your PAN on the income tax portal during the year, and keep everything organised by financial year for your accountant.",
      },
      { type: "heading", text: "The records, by category", id: "categories" },
      {
        type: "table",
        headers: ["Category", "Keep", "Detail guide"],
        rows: [
          ["Income", "Every invoice raised; platform payout statements; affiliate and product sales reports", "Creator income tracker"],
          ["TDS", "TDS register by invoice; certificates from payers; your annual tax statement and AIS checks", "TDS for creators"],
          ["GST (if registered)", "Tax invoices, credit notes, purchase bills for input tax credit, returns, challans", "GST for creators"],
          ["Expenses", "Bills and invoices for equipment, software, freelancers, travel, props", "Creator business expenses"],
          ["Gifted products", "Product, brand, date, approximate value, whether you posted", "TDS for creators (gifted products)"],
          ["Agreements", "Contracts, confirmation emails, POs", "Creator campaign documentation"],
          ["Banking", "Statements for your creator account; reconciliation notes", "Creator income tracker"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: creator income tracker, creator business expenses and creator campaign documentation.",
        links: [
          { text: "creator income tracker", href: "/blog/creator-income-tracker" },
          { text: "creator business expenses", href: "/blog/creator-business-expenses-india" },
          { text: "creator campaign documentation", href: "/blog/creator-campaign-documentation" },
        ],
      },
      { type: "heading", text: "TDS: the records that cause the most trouble", id: "tds" },
      {
        type: "paragraph",
        text: "TDS mismatches are common: a payer deducts but doesn't deposit, deposits against a wrong PAN, or deducts at a different rate than you expected. Keep a TDS register with one row per invoice (payer, invoice, amount, TDS deducted, certificate received) and compare it with what appears against your PAN on the income tax e-filing portal a few times a year. It's much easier to fix mismatches during the year than at filing time.",
      },
      {
        type: "paragraph",
        text: "Portal: Income Tax e-filing portal.",
        links: [{ text: "Income Tax e-filing portal", href: SOURCES.incomeTax }],
      },
      { type: "heading", text: "Gifted products", id: "gifted" },
      {
        type: "paragraph",
        text: "Gifted products can have tax implications for creators, depending on how they're treated and their value. Keep a simple log: what you received, from whom, when, an approximate value, and whether it was tied to posting. Your accountant can then advise on treatment. See the gifted products section of TDS for creators.",
      },
      { type: "heading", text: "Platform income", id: "platforms" },
      {
        type: "paragraph",
        text: "Download payout statements from YouTube (via AdSense for YouTube), Instagram's professional dashboard, affiliate programmes and your store or payment gateway monthly or quarterly. Payouts in foreign currency should be recorded with the date and the amount received in rupees.",
      },
      { type: "heading", text: "A monthly and yearly routine", id: "routine" },
      {
        type: "template",
        label: "Monthly (30–45 minutes)",
        text: "• Reconcile bank credits with your income tracker\n• File the month's invoices, bills and payout statements in the year folder\n• Update the TDS register; chase missing certificates\n• Log gifted products\n\nQuarterly\n• Check TDS credited against your PAN on the e-filing portal\n• If GST-registered, confirm returns and payments are on track with your accountant\n\nYear-end\n• Export income and expense summaries\n• Share organised folders with your accountant\n• Keep the year's folder intact",
      },
      { type: "heading", text: "What to hand your accountant", id: "accountant" },
      {
        type: "list",
        items: [
          "Income tracker with totals by stream and client.",
          "TDS register and certificates.",
          "Expense summary with bills.",
          "Gifted products log.",
          "Bank statements.",
          "GST returns and invoices, if registered.",
          "Questions list: new income types, foreign payments, large purchases.",
        ],
      },
      { type: "heading", text: "How long to keep tax records", id: "retention" },
      {
        type: "paragraph",
        text: "Keep records for the period your accountant advises under the rules that apply to you. Tax authorities can review past years within legally defined periods, and those rules change, so don't rely on a generic number from the internet.",
      },
      { type: "heading", text: "A simple folder structure", id: "folders" },
      {
        type: "template",
        label: "Tax records folder (per financial year)",
        text: "FY2026-27/\n  01_Income/            invoices, platform payout statements, affiliate reports\n  02_TDS/               TDS register, certificates from payers, portal screenshots\n  03_GST/               (if registered) tax invoices, credit notes, returns, challans\n  04_Expenses/          bills by month\n  05_Gifted-products/   log and delivery notes\n  06_Bank/              statements, reconciliation notes\n  07_Agreements/        contracts, confirmation emails, POs\n  00_Accountant/        summaries shared, questions, filed returns",
      },
      {
        type: "paragraph",
        text: "Keep campaign folders (see creator campaign documentation) and tax folders linked rather than duplicated: the tax folder holds the financial copy, the campaign folder holds the working documents.",
      },
      {
        type: "paragraph",
        text: "Keeping these records current is easier with a monthly close; creator bookkeeping sets out the routine.",
        links: [
          { text: "creator bookkeeping", href: "/blog/creator-bookkeeping" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Collecting documents only at filing time.",
          "Not checking TDS credit until it's too late to fix.",
          "No record of gifted products.",
          "Mixing personal and creator transactions without notes.",
          "Relying on social media posts for tax thresholds.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good tax records are a routine, not a year-end scramble: track income and TDS as it happens, keep bills and platform statements, log gifts, reconcile monthly, check your PAN credit quarterly and hand your accountant organised folders. For anything specific to your situation, ask a qualified professional.",
      },
    ],
    faqs: [
      {
        question: "What tax records should Indian creators keep?",
        answer:
          "Invoices and platform payout statements, TDS deductions and certificates, GST records if registered, expense bills, a gifted products log, contracts and POs, and reconciled bank statements.",
      },
      {
        question: "How do creators check TDS deducted by brands?",
        answer:
          "Keep a TDS register by invoice and compare it with the TDS shown against your PAN on the income tax e-filing portal, including your annual tax statement and AIS.",
      },
      {
        question: "Do creators need to record gifted products?",
        answer:
          "Keeping a log of gifted products, their approximate value and whether posting was required helps your accountant advise on any tax treatment.",
      },
    ],
  },
  {
    slug: "creators-handle-late-brand-payments",
    category: "Creator Resources",
    title: "How Creators Can Handle Late Brand Payments",
    seoTitle: "How Creators Can Handle Late Brand Payments (Step by Step)",
    excerpt:
      "A calm, escalating process for late brand payments: checking your side first, polite reminders, escalating to finance and decision-makers, pausing further work, formal notices, MSME Samadhaan for eligible Udyam-registered creators, and preventing it next time.",
    metaDescription:
      "How creators handle late brand payments: check your side, reminder templates, escalation, pausing work, formal notices, MSME Samadhaan eligibility and prevention.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["late brand payments", "brand not paying influencer", "creator payment delay", "payment reminder email", "MSME Samadhaan creators", "unpaid influencer invoice", "creator accounts receivable", "unpaid brand invoices"],
    related: ["creator-payment-terms", "how-to-invoice-brands-as-a-creator-india", "creator-income-tracker"],
    body: [
      {
        type: "paragraph",
        text: "Late payment is one of the most common frustrations in creator work. The content is live, the brand has had its campaign, and the invoice sits unpaid for weeks. Most late payments are resolved with a clear, persistent process; a few need escalation. Very few need anything dramatic.",
      },
      {
        type: "paragraph",
        text: "This guide covers what to do once a payment is late. Preventing it through good terms is covered in creator payment terms. This is general information, not legal advice; for large unpaid amounts, speak to a qualified professional.",
        links: [{ text: "creator payment terms", href: "/blog/creator-payment-terms" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "When a brand pays late: first check your invoice was complete and sent to the right place (PO number, GST details, billing email); then send a polite reminder on the due date, a firmer one a week later, and escalate to the finance team and your decision-maker contact; pause further work for that client until paid; send a formal written notice if needed. If you're registered under Udyam as a micro or small enterprise, the MSMED Act's payment protections and the MSME Samadhaan portal may apply, subject to eligibility. Prevent repeats with advances and clear terms.",
      },
      { type: "heading", text: "Step 1: check your side first", id: "check" },
      {
        type: "paragraph",
        text: "A surprising share of \"late\" payments are stuck on missing paperwork.",
      },
      {
        type: "list",
        items: [
          "Was the invoice sent to the billing email or portal the brand specified?",
          "Did it include the PO number, your PAN, GSTIN (if registered) and bank details?",
          "Did the brand need vendor onboarding documents?",
          "Is the due date what you both agreed, counted from the right event (invoice date, posting date)?",
        ],
      },
      {
        type: "paragraph",
        text: "How to invoice brands as a creator covers invoice requirements.",
      },
      {
        type: "paragraph",
        text: "Invoices: how to invoice brands as a creator.",
        links: [{ text: "how to invoice brands as a creator", href: "/blog/how-to-invoice-brands-as-a-creator-india" }],
      },
      { type: "heading", text: "Step 2: a reminder timeline", id: "timeline" },
      {
        type: "table",
        headers: ["When", "Action", "Tone"],
        rows: [
          ["A few days before due", "Friendly heads-up with invoice attached", "Helpful"],
          ["Due date", "Reminder with invoice and due date", "Polite, clear"],
          ["7 days overdue", "Second reminder; ask for expected payment date", "Firm"],
          ["14 days overdue", "Escalate to finance and your senior contact", "Formal"],
          ["30 days overdue", "Formal notice; pause further work", "Formal, documented"],
        ],
      },
      { type: "heading", text: "Reminder templates", id: "templates" },
      {
        type: "template",
        label: "First reminder (due date)",
        text: "Subject: Invoice [number] due today – [Campaign]\n\nHi [Name],\n\nA quick reminder that invoice [number] for [campaign] (₹[amount]) is due today, as per our agreement. I've attached it again for convenience.\n\nCould you confirm when payment is scheduled?\n\nThanks,\n[Your name]",
      },
      {
        type: "template",
        label: "Escalation (14 days overdue)",
        text: "Subject: Overdue invoice [number] – 14 days\n\nHi [Name] and [Finance contact],\n\nInvoice [number] for [campaign], due on [date], remains unpaid. The content went live on [date] as agreed and the report was shared on [date].\n\nPlease confirm the payment date by [date]. I've attached the invoice, the confirmation of terms and the live links.\n\nRegards,\n[Your name]",
      },
      { type: "heading", text: "Agencies in the middle", id: "agencies" },
      {
        type: "paragraph",
        text: "If an agency booked you, your agreement is usually with the agency, and the agency is responsible for paying you on the agreed terms, even if its client pays the agency late (unless your agreement says otherwise). Ask the agency for a specific date and escalate within the agency, not to the brand, unless the agency is unresponsive.",
      },
      { type: "heading", text: "Pause further work", id: "pause" },
      {
        type: "paragraph",
        text: "If a client is significantly overdue, it's reasonable to pause new deliverables until payment arrives, as long as your agreement allows it. Say so calmly in writing. Don't delete published content as leverage unless your agreement specifically allows it; it can breach your obligations and escalate the dispute.",
      },
      { type: "heading", text: "MSME protections for Udyam-registered creators", id: "msme" },
      {
        type: "paragraph",
        text: "Creators who run their work as a business and are registered under Udyam as a micro or small enterprise may benefit from the MSMED Act, 2006, which sets time limits for buyers to pay registered micro and small suppliers (generally up to 45 days from acceptance where agreed in writing) and provides for interest on delays. The Government's MSME Samadhaan portal lets eligible enterprises file delayed payment cases, which are referred to a facilitation council. Eligibility conditions apply, including when you registered relative to the invoice, so check the portal and consider professional advice before relying on it.",
        links: [{ text: "MSME Samadhaan", href: SOURCES.msmeSamadhaan }],
      },
      { type: "heading", text: "Formal notices and legal routes", id: "legal" },
      {
        type: "paragraph",
        text: "For large amounts that remain unpaid despite escalation, a formal written notice, sometimes sent by a lawyer, often prompts payment. Beyond that, options depend on the amount, your agreement and your circumstances; get legal advice rather than guessing.",
      },
      { type: "heading", text: "Record everything", id: "records" },
      {
        type: "paragraph",
        text: "Keep a timeline of reminders, replies and promised dates in your income tracker notes and campaign folder. It helps in escalation and shows a pattern if the same client is late again.",
      },
      {
        type: "paragraph",
        text: "Tracking: creator income tracker.",
        links: [{ text: "creator income tracker", href: "/blog/creator-income-tracker" }],
      },
      { type: "heading", text: "Prevent it next time", id: "prevent" },
      {
        type: "list",
        items: [
          "Ask for an advance (for example 30 to 50 percent) from new or slow-paying clients.",
          "Agree a due date in writing and what counts as the start date.",
          "Complete vendor onboarding before starting work.",
          "Consider late-payment terms in your agreement.",
          "Track average payment time by client and price accordingly.",
        ],
      },
      { type: "heading", text: "For brands: paying creators on time", id: "for-brands" },
      {
        type: "paragraph",
        text: "For brands, on-time payment is one of the strongest signals of a good partner, and creators talk to each other. Brands can avoid delays by onboarding creators as vendors before content is made, sharing PO numbers and billing details upfront, and agreeing realistic payment terms. Kudozz's influencer campaign management guide covers payment workflow on the brand side.",
        links: [{ text: "influencer campaign management", href: "/blog/influencer-campaign-management" }],
      },
      {
        type: "paragraph",
        text: "To see at a glance what's owed and how overdue it is, keep an invoice log with an ageing view (current, 1–30, 31–60 and 60+ days overdue); creator invoice management explains how.",
        links: [
          { text: "creator invoice management", href: "/blog/creator-invoice-management" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Waiting weeks before the first reminder.",
          "Emotional or public complaints instead of written escalation.",
          "Doing more work for a client who hasn't paid.",
          "Missing invoice details that stall payment.",
          "No record of reminders.",
        ],
      },
      {
        type: "paragraph",
        text: "Brands can read the other side of this guide: creator payment delays, on why brand payments run late and how to prevent it.",
        links: [
          { text: "creator payment delays", href: "/blog/creator-payment-delays" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Handle late payments with a calm, escalating process: check your paperwork, remind on the due date, escalate in writing, pause further work and, where eligible and necessary, use formal routes. Then fix your terms so the next client pays on time.",
      },
    ],
    faqs: [
      {
        question: "What should a creator do if a brand hasn't paid?",
        answer:
          "Check the invoice was complete and correctly sent, send polite reminders from the due date, escalate in writing to finance and senior contacts, pause further work, and consider formal notices for significant amounts.",
      },
      {
        question: "Can creators use MSME Samadhaan for late payments?",
        answer:
          "Creators registered under Udyam as micro or small enterprises may be eligible to file delayed payment cases on MSME Samadhaan, subject to conditions. Check the portal and consider professional advice.",
      },
      {
        question: "Who pays the creator when an agency books the deal?",
        answer:
          "Usually the agency, under your agreement with it, even if the brand pays the agency late, unless your agreement says otherwise.",
      },
    ],
  },
  {
    slug: "creator-cancellation-policy",
    category: "Creator Resources",
    title: "Creator Cancellation Policy: What Happens When a Brand Cancels a Campaign?",
    seoTitle: "Creator Cancellation Policy: When a Brand Cancels a Campaign",
    excerpt:
      "How creators handle campaign cancellations: kill fees by stage, what to write into your terms, postponements vs cancellations, products and expenses, cancellations from your side, and how to respond professionally when a brand pulls out.",
    metaDescription:
      "What creators should do when a brand cancels: kill fees by stage, cancellation terms to agree, postponements, products and expenses, and professional responses.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator cancellation policy", "kill fee influencer", "brand cancels campaign", "influencer contract cancellation", "campaign postponed creator", "cancellation fee creators"],
    related: ["creator-contracts-vs-emails", "influencer-contract-guide-for-creators", "creator-payment-terms"],
    body: [
      {
        type: "paragraph",
        text: "Campaigns get cancelled. A product launch slips, a budget is cut, a brand changes agency, or leadership changes its mind the day before posting. For a creator, a cancellation after work has started means lost time, a lost slot you may have turned other brands away from, and sometimes costs already paid.",
      },
      {
        type: "paragraph",
        text: "A cancellation policy decides in advance what happens. This guide explains how to set one. It's general information, not legal advice; for significant agreements, get the terms reviewed by a professional.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator cancellation policy sets what the brand pays if it cancels after confirming, usually as a kill fee that rises with how much work is done: a smaller share after confirmation, a larger share after script approval or filming, and most or all of the fee once the final content is delivered. It also covers postponements, reimbursable expenses, gifted products and what happens if you cancel. Agree it in writing before starting, and apply it calmly and consistently.",
      },
      { type: "heading", text: "Why creators need a cancellation policy", id: "why" },
      {
        type: "list",
        items: [
          "You reserve dates and may decline other work.",
          "Scripting, shooting and editing take real time.",
          "You may pay for props, travel, editors or locations.",
          "Exclusivity may have blocked competitor deals.",
        ],
      },
      { type: "heading", text: "A staged kill fee structure", id: "kill-fee" },
      {
        type: "table",
        headers: ["Stage when brand cancels", "Illustrative share of fee payable"],
        rows: [
          ["After confirmation, before any work", "A small share, or the advance retained"],
          ["After script or concept approved", "A moderate share"],
          ["After filming", "A larger share"],
          ["After final content delivered", "Most or all of the fee"],
          ["Plus, at any stage", "Reimbursement of agreed, incurred expenses"],
        ],
      },
      {
        type: "paragraph",
        text: "Percentages vary by creator and deal; set yours based on your time and the opportunity cost of the slot. The structure matters more than the exact numbers.",
      },
      {
        type: "template",
        label: "Cancellation clause (plain-language example, not legal drafting)",
        text: "If the brand cancels after confirmation, it will pay:\n• [X]% of the fee if cancelled before script submission\n• [Y]% if cancelled after script approval\n• [Z]% if cancelled after filming\n• 100% if cancelled after final content is delivered\nplus agreed expenses already incurred. Usage rights apply only to content that has been paid for.",
      },
      { type: "heading", text: "Postponement vs cancellation", id: "postponement" },
      {
        type: "paragraph",
        text: "A postponement isn't a cancellation, but open-ended delays can become one. Agree how long a campaign can be postponed before it's treated as cancelled, and whether you can take other work in the category meanwhile if exclusivity was involved.",
      },
      { type: "heading", text: "Products, expenses and usage", id: "products" },
      {
        type: "list",
        items: [
          "Gifted products: agree whether they're returned or kept if the campaign is cancelled.",
          "Expenses: reimburse agreed costs already incurred, with bills.",
          "Usage: the brand shouldn't use content it hasn't paid for; make that explicit.",
          "Exclusivity: cancellation should end any exclusivity tied to the campaign.",
        ],
      },
      { type: "heading", text: "If you need to cancel", id: "creator-cancels" },
      {
        type: "paragraph",
        text: "Illness, emergencies or a genuine conflict can force you to cancel. Tell the brand as early as possible, offer alternatives (a new date, a substitute format), return any advance for work not delivered as your agreement requires, and put it in writing. Handling your own cancellation well protects your reputation.",
      },
      { type: "heading", text: "Responding when a brand cancels", id: "respond" },
      {
        type: "template",
        label: "Reply to a cancellation",
        text: "Hi [Name],\n\nThanks for letting me know, and sorry to hear the campaign isn't going ahead.\n\nAs per our agreement, since the script was approved on [date], the cancellation fee is [Y]% (₹[amount]), plus [expenses]. I'll send the invoice today.\n\nI'd be glad to work together when the timing is right.\n\n[Your name]",
      },
      {
        type: "paragraph",
        text: "Stay professional. Many cancelled campaigns come back later, and brands remember who handled it well.",
      },
      { type: "heading", text: "Put it in writing", id: "writing" },
      {
        type: "paragraph",
        text: "Include cancellation terms in your confirmation email or contract, not after the fact. Creator contracts vs emails explains when a confirmation email is enough.",
      },
      {
        type: "paragraph",
        text: "Written terms: creator contracts vs emails.",
        links: [{ text: "creator contracts vs emails", href: "/blog/creator-contracts-vs-emails" }],
      },
      { type: "heading", text: "For brands: cancelling fairly", id: "for-brands" },
      {
        type: "paragraph",
        text: "For brands, clear cancellation terms reduce disputes and keep good creators willing to work with you again. Cancel as early as possible, pay kill fees promptly as agreed, and don't use content from a cancelled campaign without paying for it. Kudozz's influencer marketing contract guide covers cancellation from the brand side. Brands deciding whether and how to cancel can read influencer campaign cancellation.",
        links: [{ text: "influencer marketing contract guide", href: "/blog/influencer-marketing-contract" }, { text: "influencer campaign cancellation", href: "/blog/influencer-campaign-cancellation" }],
      },
      { type: "heading", text: "Worked example: applying a kill fee", id: "example" },
      {
        type: "template",
        label: "Illustrative example (hypothetical terms)",
        text: "Fee: ₹60,000. Agreed cancellation terms:\n• Before script: 20% · After script approval: 50% · After filming: 80% · After delivery: 100%\n• Plus agreed expenses incurred\n\nTimeline:\n• 2 Oct: confirmed · 6 Oct: script approved · 9 Oct: filmed (props ₹2,000 bought)\n• 11 Oct: brand cancels (\"launch postponed indefinitely\")\n\nDue: 80% of ₹60,000 = ₹48,000 + ₹2,000 props = ₹50,000 (+ GST if registered)\nUsage: brand may not use the filmed content unless it pays the full fee\nExclusivity: ends on cancellation",
      },
      {
        type: "paragraph",
        text: "Because the terms were agreed in writing before work started, this is an invoice, not an argument.",
      },
      { type: "heading", text: "Postponement template", id: "postponement-template" },
      {
        type: "template",
        label: "Reply to a postponement",
        text: "Hi [Name], thanks for the update. Happy to move the campaign to [new date]. As agreed, if the campaign hasn't gone live by [date], we'll treat it as cancelled under our terms. Could you confirm the new timeline in writing?",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "No cancellation terms at all.",
          "A single flat kill fee regardless of stage.",
          "Letting a postponement run indefinitely.",
          "Allowing usage of unpaid content.",
          "Getting angry in writing.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A cancellation policy protects the time and opportunities you commit to each campaign. Use staged kill fees, cover postponements, expenses, products and usage, agree it before starting and apply it calmly. The same terms should apply if you're the one who has to cancel.",
      },
    ],
    faqs: [
      {
        question: "What is a kill fee for creators?",
        answer:
          "A fee a brand pays if it cancels a campaign after confirming, usually rising with how much work has been done.",
      },
      {
        question: "What happens if a brand cancels after content is made?",
        answer:
          "Under a staged cancellation policy, the brand usually pays most or all of the fee once content is delivered, plus agreed expenses, and shouldn't use the content unless it pays for it.",
      },
      {
        question: "Is a postponement the same as a cancellation?",
        answer:
          "No, but agree how long a campaign can be postponed before it's treated as cancelled, especially if exclusivity is involved.",
      },
    ],
  },
];
