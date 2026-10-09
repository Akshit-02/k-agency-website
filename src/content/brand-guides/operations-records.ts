import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { OPS_PUBLISHED, OPS_REVIEWED } from "@/content/brand-guides/operations-onboarding";

/**
 * Creator operations cluster, records and system (1225, 1227–1229). Creator campaign records (1226) is consolidated
 * into influencer-campaign-documentation (long-term history itself is owned by influencer-marketing-crm).
 */
export const operationsRecordsPosts: BlogPost[] = [
  {
    slug: "influencer-campaign-documentation",
    category: "Campaign Strategy",
    title: "Influencer Campaign Documentation: What Brands Should Keep on Record",
    seoTitle: "Influencer Campaign Documentation: What Brands Should Keep",
    excerpt:
      "The documents brands should keep for every creator campaign, stage by stage, why each matters (rights, disputes, compliance, learning), a folder structure, naming rules, how campaign files build long-term creator records, and a close-out checklist.",
    metaDescription:
      "What influencer campaign documents brands should keep: brief, agreements, approvals, content, rights, invoices, payments and results, with a folder structure.",
    author: AUTHOR,
    publishedAt: OPS_PUBLISHED,
    lastReviewed: OPS_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer campaign documentation", "creator campaign records", "influencer campaign records", "campaign documents to keep", "influencer partnership records"],
    related: ["influencer-campaign-handover", "influencer-marketing-crm", "influencer-usage-rights"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-documentation.svg",
      alt: "Campaign folder with brief, agreements, approvals, final content, usage rights, invoices, payments and results",
    },
    body: [
      {
        type: "paragraph",
        text: "Six months after a campaign, someone asks whether you can run a creator's Reel as an ad. Can you? The answer depends on a usage clause in an agreement that might be in a former colleague's inbox. Or a creator says they were promised a bonus; nobody can find the message. Campaign documentation is unglamorous, and it's what lets you answer these questions in minutes.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Brands should keep, for every creator campaign: the brief and any versions, the shortlist and selection reasons, outreach and proposals, signed agreements, deliverable specifications, drafts with approval records, final content and live links, usage rights and expiry dates, disclosure checks, invoices and payment records, performance data with capture dates, and learnings. Store them in one consistent folder structure linked from the campaign tracker, and copy the parts that matter long-term (results, rights, reliability, rebook decision) to each creator's record.",
      },
      { type: "heading", text: "What to keep, stage by stage", id: "by-stage" },
      {
        type: "table",
        headers: ["Stage", "Documents", "Why it matters"],
        rows: [
          ["Planning", "Campaign brief (all versions), objective, budget", "Shows what was intended and approved"],
          ["Selection", "Shortlist with reasons; vetting notes; audience screenshots (dated)", "Explains decisions; supports learning"],
          ["Outreach and negotiation", "Proposal, key emails, agreed terms summary", "Resolves 'what was promised' questions"],
          ["Agreement", "Signed contract or agreement; any amendments", "Defines obligations, rights and payment"],
          ["Production", "Creator brief version sent; kickoff recap; drafts", "Shows what was asked and submitted"],
          ["Approval", "Feedback rounds; final approval with approver and date", "Evidence content was approved as published"],
          ["Publishing", "Live links; screenshots of posts with disclosure visible", "Compliance evidence if posts are edited or deleted"],
          ["Rights", "Usage terms: platforms, duration, expiry date; partnership ad permissions", "Prevents using content beyond rights"],
          ["Payment", "Invoices; approval; payment confirmation; TDS records where applicable", "Financial and tax records"],
          ["Performance", "Insights at fixed capture days; tracking data; report", "Measurement and future decisions"],
          ["Close-out", "Scorecard; learnings; rebook decision", "Builds creator history"],
        ],
      },
      { type: "heading", text: "Why documentation matters", id: "why" },
      {
        type: "list",
        items: [
          "Usage rights: knowing exactly what you can do with content, and until when.",
          "Disputes: resolving disagreements about deliverables, payment or promises quickly and fairly.",
          "Compliance: showing that disclosure and claims were checked and approved.",
          "Continuity: letting new team members or partners pick up campaigns.",
          "Learning: understanding what worked and why, so the next campaign is better.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer usage rights and influencer marketing compliance explain the rights and disclosure records in more detail.",
        links: [
          { text: "Influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" },
        ],
      },
      { type: "heading", text: "A folder structure you can copy", id: "folders" },
      {
        type: "template",
        label: "Campaign folder structure",
        text: "/2026-10_brand_diwali-campaign\n  /01_brief             brief_v1, brief_v2_final, objectives\n  /02_selection         shortlist, vetting-notes, audience-screenshots\n  /03_agreements        creatorhandle_agreement_signed\n  /04_production        kickoff-recaps, product-dispatch\n  /05_drafts-approvals  creatorhandle_draft_v1, feedback_r1, approval\n  /06_live-content      creatorhandle_reel_final, live-screenshots\n  /07_rights            usage-register (platform, duration, expiry)\n  /08_finance           invoices, payment-confirmations (finance access)\n  /09_performance       insights_d7, insights_d30, tracking-export, report\n  /10_closeout          scorecards, learnings, rebook-decisions",
      },
      {
        type: "list",
        items: [
          "Use the same structure and naming for every campaign.",
          "Name files with creator handle, item and version (creatorhandle_draft_v2).",
          "Keep finance documents in a restricted folder or finance's own system.",
          "Link the folder from the campaign tracker.",
        ],
      },
      { type: "heading", text: "From campaign files to creator records", id: "creator-records" },
      {
        type: "paragraph",
        text: "Campaign folders hold everything about one campaign. Long-term creator history needs a different view: everything about one creator across campaigns. At close-out, copy the essentials to each creator's record: campaigns worked on, deliverables, fees (dated), results with capture dates, reliability, rights still in force with expiry dates, notes and the rebook decision. Influencer marketing CRM covers how to structure those records, and creator performance scorecard covers the evaluation.",
        links: [
          { text: "Influencer marketing CRM", href: "/blog/influencer-marketing-crm" },
          { text: "creator performance scorecard", href: "/blog/creator-performance-scorecard" },
        ],
      },
      { type: "heading", text: "Close-out checklist", id: "checklist" },
      {
        type: "template",
        label: "Campaign close-out checklist",
        text: "□ Final brief and all agreement amendments filed\n□ Final approved versions and live links recorded\n□ Screenshots of live posts with disclosure visible\n□ Usage register updated: platform, duration, expiry for every asset\n□ All invoices and payment confirmations filed (finance)\n□ Insights at day 7 and day 30 filed for every creator\n□ Report and learnings saved\n□ Scorecards completed; rebook decisions recorded\n□ Creator records updated\n□ Folder linked from tracker; access checked",
      },
      { type: "heading", text: "How long to keep records", id: "retention" },
      {
        type: "paragraph",
        text: "Keep agreements, rights records and approvals at least as long as you might use the content, plus a buffer; keep financial records as your finance team's retention policy requires. Remove personal data you no longer need, such as shipping addresses after delivery, in line with data protection obligations.",
      },
      { type: "heading", text: "A usage register", id: "usage-register" },
      {
        type: "paragraph",
        text: "Of all campaign records, the usage register is the one most often missing and most often needed. One row per asset:",
      },
      {
        type: "template",
        label: "Usage register fields",
        text: "Asset (creator, post, link) · Rights type (organic repost / paid ads / website / offline) · Platforms · Start date · Expiry date · Partnership ad permission (yes/until) · Fee paid for usage · Agreement reference · Owner · Reminder 30 days before expiry",
      },
      {
        type: "paragraph",
        text: "Set a reminder before each expiry. If you want to keep using content, renew the rights; if not, stop using it on time. Influencer usage rights explains the rights themselves.",
        links: [
          { text: "Influencer usage rights", href: "/blog/influencer-usage-rights" },
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a skincare brand's performance team wants to run a creator's video as an ad nine months after the campaign. Because the usage register shows organic-only rights, the team contacts the creator, agrees a three-month ad-usage fee and updates the register. Without the register, the video might have gone into ads without permission, damaging the relationship and creating legal risk.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Approvals given in chat and never recorded.",
          "No usage register, so nobody knows when rights expire.",
          "Live posts not screenshotted before creators edit or archive them.",
          "Documents scattered across personal inboxes.",
          "Campaign files kept but creator records never updated.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good campaign documentation is a consistent folder, a usage register and a close-out routine, plus copying the long-term essentials to each creator's record. It protects rights, settles disputes, supports compliance and makes every handover and future campaign easier. For passing campaigns between people and teams, see influencer campaign handover.",
        links: [{ text: "influencer campaign handover", href: "/blog/influencer-campaign-handover" }],
      },
    ],
    faqs: [
      {
        question: "What campaign documents should brands keep?",
        answer:
          "Briefs, shortlists and selection reasons, proposals and agreed terms, signed agreements, drafts and approvals, live links and disclosure screenshots, usage rights with expiry dates, invoices and payment records, performance data and learnings.",
      },
      {
        question: "How should brands organize creator campaign records?",
        answer:
          "Use one consistent folder structure per campaign with clear naming, link it from the campaign tracker, and copy long-term essentials (results, rights, reliability, rebook decisions) to each creator's record in a CRM or database.",
      },
      {
        question: "Why should brands keep screenshots of live influencer posts?",
        answer:
          "Posts can be edited, archived or deleted. Dated screenshots with disclosure visible are evidence of what was published and that compliance requirements were met.",
      },
    ],
  },
  {
    slug: "influencer-campaign-handover",
    category: "Campaign Strategy",
    title: "Influencer Campaign Handover: How Brands Can Keep Creator Projects Organized",
    seoTitle: "Influencer Campaign Handover: Avoid Losing Information",
    excerpt:
      "How to hand over creator campaigns without losing information or goodwill: agency to brand, brand manager to brand manager, marketing to finance and campaign to reporting, with a handover pack, checklist and creator introduction.",
    metaDescription:
      "How to hand over influencer campaigns: agency to brand, manager to manager, marketing to finance and reporting, with a handover pack and checklist.",
    author: AUTHOR,
    publishedAt: OPS_PUBLISHED,
    lastReviewed: OPS_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer campaign handover", "campaign handover checklist", "creator project handover", "agency to brand handover", "influencer campaign transition"],
    related: ["influencer-campaign-documentation", "influencer-marketing-operations", "influencer-communication"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-handover.svg",
      alt: "Campaign handover pack passing status, commitments, rights, payments and creator contacts from one owner to the next",
    },
    body: [
      {
        type: "paragraph",
        text: "A brand manager leaves mid-campaign. Their replacement inherits a tracker that hasn't been updated, a WhatsApp history they can't see and a creator who was promised something nobody else knows about. Or an agency contract ends and the brand discovers it doesn't have the creators' contacts, the agreements or the rights register. Handovers are where creator programmes lose information and goodwill, and most of it is avoidable.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A good influencer campaign handover transfers a written handover pack (status of every creator, open commitments, dates, agreements, usage rights, payments due, contacts and access), introduces the new owner to each creator, and leaves a short overlap period for questions. The key is that nothing important lives only in one person's inbox or phone, which is why consistent documentation and a shared tracker matter long before anyone leaves.",
      },
      { type: "heading", text: "Common handovers", id: "types" },
      {
        type: "table",
        headers: ["Handover", "What's most at risk", "Focus on"],
        rows: [
          ["Agency → brand team", "Creator contacts, agreements, rights, history", "Contractual data ownership; full export"],
          ["Brand manager → brand manager", "Promises in chats; creator relationships", "Open commitments; creator introductions"],
          ["Marketing → finance", "Payment details and timing", "Invoice status; due dates; agreements"],
          ["Campaign manager → reporting team", "Capture dates, definitions, tracking", "Data dictionary; raw data; context"],
          ["Brand → new agency", "Learnings, roster, rights in force", "Creator records; usage register; scorecards"],
        ],
      },
      { type: "heading", text: "The handover pack", id: "pack" },
      {
        type: "template",
        label: "Campaign handover pack",
        text: "1. CAMPAIGN SUMMARY: objective, status, key dates, budget spent and remaining\n2. CREATOR STATUS TABLE: each creator's stage (contracted / briefed / draft / approved / live / paid), next action, due date\n3. OPEN COMMITMENTS: anything promised that isn't in an agreement (feedback dates, extra product, bonus discussions, future work)\n4. AGREEMENTS: links to signed agreements and amendments\n5. USAGE RIGHTS: register with expiry dates and permissions\n6. PAYMENTS: what's due, invoice status, vendor setup pending\n7. CONTACTS: creators, managers, internal approvers, finance, agency\n8. ACCESS: tracker, folders, tools, partnership permissions; what needs transferring\n9. RISKS: delays, sensitive issues, creator concerns\n10. LEARNINGS SO FAR",
      },
      {
        type: "paragraph",
        text: "The most important section is open commitments. Promises made in calls and chats are what creators remember and what new owners don't know about.",
      },
      { type: "heading", text: "Introduce the new owner to creators", id: "introductions" },
      {
        type: "template",
        label: "Handover introduction message",
        text: "Hi [name], a quick update: I'm moving to [role/team], and [new owner] will be your contact for [campaign] from [date]. They're fully up to date on [your deliverables / feedback due on X / payment scheduled for Y]. Nothing changes in what we've agreed. Thank you for working with us. I've really enjoyed it.",
      },
      {
        type: "list",
        items: [
          "Send it before the change, not after the creator's message goes unanswered.",
          "Confirm that agreed terms and dates are unchanged.",
          "Copy managers where relevant.",
          "The new owner should follow up personally within a few days.",
        ],
      },
      { type: "heading", text: "Agency transitions", id: "agency" },
      {
        type: "list",
        items: [
          "Agree in the agency contract what data and documents the brand receives, in what format, and when.",
          "Request agreements, usage registers, creator contacts (with consent), scorecards and performance data before the contract ends.",
          "Clarify which agreements are between creators and the agency vs the brand, and what happens to rights and payments in progress.",
          "Make sure creators know who their contact is and who will pay them.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing agency onboarding covers the start of an agency relationship; the same data questions apply at the end.",
        links: [{ text: "Influencer marketing agency onboarding", href: "/blog/influencer-marketing-agency-onboarding" }],
      },
      { type: "heading", text: "Handover checklist", id: "checklist" },
      {
        type: "template",
        label: "Handover checklist",
        text: "□ Tracker updated and statuses current\n□ Handover pack written, including open commitments\n□ Agreements and usage register accessible to new owner\n□ Payments due and invoice statuses confirmed with finance\n□ Tool and folder access transferred\n□ Partnership permissions moved to accounts the brand controls\n□ Creators and managers introduced to new owner\n□ Overlap period for questions (a few days if possible)\n□ Personal chat threads summarised into the record",
      },
      { type: "heading", text: "Make handovers easy before they happen", id: "prevention" },
      {
        type: "paragraph",
        text: "The best handover is one that needs little preparation because information already lives in shared systems: a current tracker, a consistent campaign folder, a CRM with creator history, and agreements stored centrally rather than in personal inboxes. Influencer campaign documentation and influencer marketing CRM cover those foundations.",
        links: [
          { text: "Influencer campaign documentation", href: "/blog/influencer-campaign-documentation" },
          { text: "influencer marketing CRM", href: "/blog/influencer-marketing-crm" },
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a brand manager running an ambassador programme for six creators moves to a new role. Her handover pack lists each creator's next deliverable, a promised early look at an upcoming launch for two of them, a pending rate review for one and three usage rights expiring within a month. She sends introduction messages to all six with the new manager copied and spends two days overlapping. The new manager keeps every promise, renews the rights on time and the creators barely notice the change.",
      },
      { type: "heading", text: "Handing over to reporting and finance", id: "reporting-finance" },
      {
        type: "table",
        headers: ["To", "Include"],
        rows: [
          ["Reporting team", "Data dictionary, capture dates, tracking links and codes, raw insights, notes on outliers (boosted posts, sale days)"],
          ["Finance", "Agreements, payment schedule, invoice status, vendor setup status, TDS treatment agreed, creator contacts for payment queries"],
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing data covers the data dictionary, and creator payment tracking covers the payment status the finance handover should include.",
        links: [
          { text: "Influencer marketing data", href: "/blog/influencer-marketing-data" },
          { text: "creator payment tracking", href: "/blog/creator-payment-tracking" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Handing over a tracker without the open commitments.",
          "Not telling creators their contact has changed.",
          "Partnership permissions tied to a departing employee's personal account.",
          "Agency contracts with no data-handover clause.",
          "New owner renegotiating terms that were already agreed.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Campaign handovers go well when information already lives in shared systems and the departing owner writes down what doesn't: status, open commitments, rights, payments and contacts. Introduce the new owner to creators before the change, and keep agreed terms intact. It protects both the campaign and the relationships behind it.",
      },
    ],
    faqs: [
      {
        question: "What should an influencer campaign handover include?",
        answer:
          "Campaign summary, each creator's status and next action, open commitments, agreements, usage rights register, payments due, contacts, tool and folder access, risks and learnings, plus an introduction of the new owner to creators.",
      },
      {
        question: "How do brands avoid losing creator information when an agency changes?",
        answer:
          "Agree in the agency contract what data and documents the brand receives and when, and request agreements, usage registers, creator records and performance data before the contract ends.",
      },
      {
        question: "Should creators be told when their brand contact changes?",
        answer:
          "Yes, before the change, with confirmation that agreed terms and dates are unchanged and an introduction to the new contact.",
      },
    ],
  },
  {
    slug: "creator-experience",
    category: "Campaign Strategy",
    title: "Creator Experience: How Brands Can Build Better Influencer Campaign Workflows",
    seoTitle: "Creator Experience: Build Better Influencer Workflows",
    excerpt:
      "What creator experience means, why it affects communication, reliability, content quality and repeat partnerships, a journey map of friction points from outreach to payment, how to measure it and a practical improvement plan.",
    metaDescription:
      "What creator experience is and how brands improve it: a journey map from outreach to payment, common friction points, how to measure it and what to fix first.",
    author: AUTHOR,
    publishedAt: OPS_PUBLISHED,
    lastReviewed: OPS_REVIEWED,
    readingTime: "6 min read",
    tags: ["creator experience", "influencer experience", "creator journey brand", "improve creator experience", "influencer workflow from creator perspective"],
    related: ["influencer-retention", "influencer-marketing-operations", "influencer-relationship-management"],
    hero: {
      src: "/blog/brand-guides/creator-experience.svg",
      alt: "Creator journey map from outreach to payment, highlighting friction points brands can remove at each stage",
    },
    body: [
      {
        type: "paragraph",
        text: "Brands spend a lot of effort on customer experience and very little on creator experience, even though creators decide whether to work with you, how much effort to put in and whether to come back. A creator who had to chase three people for a brief, waited a week for feedback and two months for payment will still deliver. They just won't go out of their way next time.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator experience is how working with your brand feels from the creator's side, from the first message to payment and beyond. Brands improve it by mapping each step of the creator journey and removing friction: clear and respectful outreach, fair terms, simple onboarding, good briefs with creative freedom, fast and specific feedback, realistic deadlines, predictable approvals, on-time payment, shared results and genuine appreciation. A better experience tends to improve communication, reliability and repeat partnerships, though it doesn't guarantee campaign results.",
      },
      { type: "heading", text: "Why creator experience matters", id: "why" },
      {
        type: "table",
        headers: ["Area", "How experience affects it"],
        rows: [
          ["Communication", "Creators who trust you raise problems early instead of going quiet"],
          ["Reliability", "Clear processes make on-time delivery easier"],
          ["Content quality", "Time and creative freedom go into the content instead of admin and rework"],
          ["Repeat partnerships", "Good creators prioritise brands they enjoy working with"],
          ["Retention", "Fewer of your best creators drift to competitors"],
          ["Efficiency", "Fewer revisions, fewer chases, fewer disputes"],
          ["Reputation", "Creators and managers talk about which brands are good to work with"],
        ],
      },
      { type: "heading", text: "The creator journey and its friction points", id: "journey" },
      {
        type: "table",
        headers: ["Stage", "Common friction", "Better experience"],
        rows: [
          ["Outreach", "Generic message; unclear if paid", "Specific, honest, clear offer"],
          ["Negotiation", "Lowball offers; slow replies; vague terms", "Fair offer; prompt replies; terms in writing"],
          ["Onboarding", "Repeated requests for details; late agreement", "One information form; agreement within days"],
          ["Product", "Arrives late or wrong", "Shipped early, right size or shade, tracked"],
          ["Brief", "Script disguised as a brief; changes after filming", "Clear goals, few must-haves, creative freedom; brief frozen"],
          ["Feedback", "Vague, slow, many voices", "Specific, consolidated, within agreed time"],
          ["Approval", "Unlimited rounds; unclear final approval", "Agreed rounds; written approval"],
          ["Payment", "Vendor setup surprises; late payment; no updates", "Clear process; on time; proactive updates"],
          ["After the campaign", "Silence", "Results shared; thanks; talk about next time"],
        ],
      },
      {
        type: "paragraph",
        text: "Each stage has a detailed guide: influencer outreach strategy, negotiate influencer rates, influencer onboarding, influencer campaign brief, influencer feedback, influencer payment terms and repeat influencer collaborations.",
        links: [
          { text: "influencer outreach strategy", href: "/blog/influencer-outreach-strategy" },
          { text: "negotiate influencer rates", href: "/blog/negotiate-influencer-rates" },
          { text: "influencer onboarding", href: "/blog/influencer-onboarding" },
          { text: "influencer campaign brief", href: "/blog/influencer-campaign-brief" },
          { text: "influencer feedback", href: "/blog/influencer-feedback" },
          { text: "influencer payment terms", href: "/blog/influencer-payment-terms" },
          { text: "repeat influencer collaborations", href: "/blog/repeat-influencer-collaborations" },
        ],
      },
      { type: "heading", text: "Principles of a good creator experience", id: "principles" },
      {
        type: "list",
        items: [
          "Respect: creators are partners, not media inventory.",
          "Clarity: everything important is written down and easy to find.",
          "Predictability: dates, feedback windows and payment timing are known and kept.",
          "Fairness: pay that reflects the work; no unpaid extras; changes compensated.",
          "Creative freedom: direction without scripts.",
          "Speed: quick replies and feedback, so creators don't wait on you.",
          "Recognition: thanks, results and credit.",
        ],
      },
      { type: "heading", text: "How to measure creator experience", id: "measure" },
      {
        type: "table",
        headers: ["Measure", "How"],
        rows: [
          ["Brand response time", "Average time to reply to creator messages"],
          ["Feedback turnaround", "Days from draft received to consolidated feedback"],
          ["Revision rounds", "Average rounds per deliverable; rounds caused by brief changes"],
          ["Payment timeliness", "Share of payments made by the due date"],
          ["Repeat acceptance", "Share of rebooking offers top creators accept"],
          ["Creator feedback", "A short question after each campaign: 'How easy were we to work with?' (1–5) and 'What should we change?'"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator feedback loop covers how to ask and act on creators' input.",
        links: [{ text: "Creator feedback loop", href: "/blog/creator-feedback-loop" }],
      },
      { type: "heading", text: "Where to start", id: "start" },
      {
        type: "template",
        label: "Five fixes most brands can make in a month",
        text: "1. One named contact per creator, with a stated response time\n2. One information form at onboarding instead of repeated requests\n3. Consolidated feedback within two working days, with agreed revision rounds\n4. Vendor setup started at agreement; payment dates communicated and met\n5. A results-and-thank-you note after every campaign",
      },
      { type: "heading", text: "Creator experience in India", id: "india" },
      {
        type: "list",
        items: [
          "Many smaller and regional creators are new to contracts, invoicing and disclosure; patient guidance is part of the experience.",
          "Language matters: briefs and calls in the creator's language reduce friction.",
          "Delivery to smaller towns needs more planning; late product is a common frustration.",
          "Prompt payment matters especially to creators for whom brand income is a large share of earnings.",
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a beauty brand asks its last 20 creators one question after each campaign: 'How easy were we to work with, and what should we change?' The most common answers: feedback came from too many people, and payment dates weren't clear. The brand names a single reviewer, adds a payment-date line to every agreement summary and sends payment confirmations. Over the next few campaigns, fewer creators chase payments and more accept repeat offers. The brand didn't change fees; it changed the experience.",
      },
      { type: "heading", text: "Questions to ask about your own process", id: "self-audit" },
      {
        type: "list",
        items: [
          "How many messages does it take a creator to get from 'yes' to a signed agreement?",
          "How often do we ask creators for the same information twice?",
          "How many people give feedback on a typical draft?",
          "How many days from approval to payment, on average?",
          "Do creators hear from us after the campaign, without having to ask?",
          "Could a creator new to brand deals understand our agreement and invoicing instructions?",
        ],
      },
      {
        type: "paragraph",
        text: "Answer honestly and the fixes usually become obvious. Influencer marketing operations covers building those fixes into a repeatable system.",
        links: [
          { text: "Influencer marketing operations", href: "/blog/influencer-marketing-operations" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Designing processes only around internal convenience.",
          "Requiring creators to use tools that don't work on a phone.",
          "Adding approval layers without adding time.",
          "Assuming fee alone determines whether creators return.",
          "Never asking creators what they think.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator experience is the sum of many small things: a clear message, a fair offer, a simple onboarding, a good brief, fast feedback, on-time payment and a thank-you. Map the journey, remove the friction, measure a few signals and ask creators directly. It won't guarantee results, but it makes good creators want to work with you, which is where good results usually start. For the system that delivers it consistently, see influencer marketing operations.",
        links: [{ text: "influencer marketing operations", href: "/blog/influencer-marketing-operations" }],
      },
    ],
    faqs: [
      {
        question: "What is creator experience?",
        answer:
          "How working with a brand feels from the creator's side across outreach, negotiation, onboarding, briefing, feedback, approval, payment and after the campaign.",
      },
      {
        question: "How can brands improve creator experience?",
        answer:
          "Use one named contact, clear written terms, one onboarding form, good briefs with creative freedom, fast consolidated feedback, agreed revision rounds, on-time payment with updates, and shared results and thanks.",
      },
      {
        question: "Does a better creator experience improve campaign performance?",
        answer:
          "It tends to improve communication, reliability, content quality and repeat partnerships, which support good results, but it doesn't guarantee performance on its own.",
      },
    ],
  },
  {
    slug: "influencer-marketing-operations",
    category: "Campaign Strategy",
    title: "Influencer Marketing Operations: How Brands Can Build a Reliable Creator Partnership Process",
    seoTitle: "Influencer Marketing Operations: A Reliable Creator Process",
    excerpt:
      "The operating system behind creator partnerships: the eleven-stage process from discovery to relationship management, roles and ownership, service levels, the core documents and tools, a weekly rhythm, operations metrics and a maturity path.",
    metaDescription:
      "Influencer marketing operations for brands: the process from discovery to relationships, roles, service levels, documents, tools, weekly rhythm and metrics.",
    author: AUTHOR,
    publishedAt: OPS_PUBLISHED,
    lastReviewed: OPS_REVIEWED,
    readingTime: "8 min read",
    tags: ["influencer marketing operations", "creator marketing operating model", "influencer operations", "creator partnership process", "influencer marketing function"],
    related: ["influencer-campaign-management", "influencer-content-approval", "creator-experience"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-operations.svg",
      alt: "Influencer operations flow from discovery and outreach through onboarding, production, payment and reporting to relationships",
    },
    updatedAt: "2026-10-08",
    body: [
      {
        type: "paragraph",
        text: "Running one creator campaign well depends on a capable person. Running creator partnerships well month after month depends on a system: a defined process, clear owners, standard documents, service levels both sides can rely on and a rhythm for reviewing what's happening. That system is influencer marketing operations, and it's what lets a brand scale creator work without everything depending on whoever happens to be managing it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer marketing operations is the repeatable system a brand uses to run creator partnerships: a defined process from discovery through outreach, negotiation, onboarding, briefing, production, approval, publishing, payment, reporting and relationship management; named owners for each stage; standard templates and records; service levels for responses, feedback and payment; a shared tracker; and a regular review rhythm. It sits between strategy (what you're trying to achieve) and campaign management (running a specific campaign).",
      },
      { type: "heading", text: "Operations vs strategy vs campaign management vs governance", id: "differences" },
      {
        type: "table",
        headers: ["", "Question", "Example"],
        rows: [
          ["Strategy", "What are we trying to achieve with creators, and how?", "Objectives, audiences, creator mix, budget"],
          ["Operations", "How do we run creator work reliably, every time?", "Process, owners, templates, SLAs, tools, rhythm"],
          ["Campaign management", "How do we run this campaign?", "Steps, dates and creators for one campaign"],
          ["Governance", "What rules and approvals apply?", "Policies, approval matrix, compliance"],
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing strategy, how influencer campaign management works and influencer marketing governance cover the other three.",
        links: [
          { text: "Influencer marketing strategy", href: "/blog/influencer-marketing-strategy" },
          { text: "how influencer campaign management works", href: "/blog/influencer-campaign-management" },
          { text: "influencer marketing governance", href: "/blog/influencer-marketing-governance" },
        ],
      },
      { type: "heading", text: "The creator operations process", id: "process" },
      {
        type: "table",
        headers: ["Stage", "Output", "Guide"],
        rows: [
          ["1. Discovery", "Vetted, ranked shortlist", "Influencer shortlisting"],
          ["2. Outreach", "Interested creators", "Influencer outreach strategy"],
          ["3. Negotiation", "Agreed terms", "How to negotiate with influencers"],
          ["4. Onboarding", "Signed agreement, details, payment setup", "Influencer onboarding"],
          ["5. Briefing and kickoff", "Shared understanding", "Influencer campaign kickoff"],
          ["6. Production", "Drafts", "Influencer communication"],
          ["7. Approval", "Approved content", "Influencer feedback"],
          ["8. Publishing", "Live, disclosed content", "Influencer marketing compliance"],
          ["9. Payment", "Creators paid on time", "Influencer marketing payments"],
          ["10. Reporting", "Results and insights", "Influencer marketing report"],
          ["11. Relationship management", "Rebook decisions, repeat partnerships", "Influencer relationship management"],
        ],
      },
      {
        type: "paragraph",
        text: "Detailed guides for each stage: influencer shortlisting, influencer outreach strategy, how to negotiate with influencers, influencer onboarding, influencer campaign kickoff, influencer communication, influencer feedback, influencer marketing compliance, influencer marketing payments, influencer marketing report and influencer relationship management.",
        links: [
          { text: "influencer shortlisting", href: "/blog/influencer-shortlist" },
          { text: "influencer outreach strategy", href: "/blog/influencer-outreach-strategy" },
          { text: "how to negotiate with influencers", href: "/blog/how-to-negotiate-with-influencers" },
          { text: "influencer onboarding", href: "/blog/influencer-onboarding" },
          { text: "influencer campaign kickoff", href: "/blog/influencer-campaign-kickoff" },
          { text: "influencer communication", href: "/blog/influencer-communication" },
          { text: "influencer feedback", href: "/blog/influencer-feedback" },
          { text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" },
          { text: "influencer marketing payments", href: "/blog/influencer-marketing-payments" },
          { text: "influencer marketing report", href: "/blog/influencer-marketing-report" },
          { text: "influencer relationship management", href: "/blog/influencer-relationship-management" },
        ],
      },
      { type: "heading", text: "Roles and ownership", id: "roles" },
      {
        type: "table",
        headers: ["Role", "Owns"],
        rows: [
          ["Influencer lead", "Process, standards, creator roster, relationships, rate review"],
          ["Campaign manager", "Day-to-day campaign execution, creator communication, tracker"],
          ["Reviewer / approver", "Consolidated feedback and approvals within service levels"],
          ["Legal / compliance", "Agreement templates, claims review, disclosure standards"],
          ["Finance", "Vendor setup, invoice processing, payments, tax handling"],
          ["Analyst", "Data definitions, capture, reporting, benchmarks"],
          ["Agency (if used)", "Agreed stages, with data shared back to the brand"],
        ],
      },
      {
        type: "paragraph",
        text: "In small teams one person holds several roles. What matters is that every stage has a named owner. Influencer marketing team structure covers ownership models.",
        links: [{ text: "Influencer marketing team structure", href: "/blog/influencer-marketing-team-structure" }],
      },
      { type: "heading", text: "Service levels creators can rely on", id: "slas" },
      {
        type: "table",
        headers: ["Commitment", "Example service level"],
        rows: [
          ["Reply to creator messages", "Within one working day"],
          ["Send agreement after terms confirmed", "Within two working days"],
          ["Feedback on drafts", "Within two working days, consolidated"],
          ["Invoice check after receipt", "Within two working days"],
          ["Payment after trigger", "As agreed, typically a set number of days"],
          ["Results shared after campaign", "Within a few weeks of the final capture date"],
        ],
      },
      {
        type: "paragraph",
        text: "These are examples; set levels you can actually keep and tell creators what they are. Keeping them consistently is a large part of creator experience.",
        links: [{ text: "creator experience", href: "/blog/creator-experience" }],
      },
      { type: "heading", text: "Core documents and records", id: "documents" },
      {
        type: "list",
        items: [
          "Templates: outreach messages, proposal, agreement, information sheet, brief, feedback, handover pack.",
          "Records: campaign tracker, creator CRM, usage register, payment tracker, campaign folders.",
          "Definitions: a data dictionary so metrics mean the same thing every time.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer campaign documentation and creator payment tracking cover two of the most important records.",
        links: [
          { text: "Influencer campaign documentation", href: "/blog/influencer-campaign-documentation" },
          { text: "creator payment tracking", href: "/blog/creator-payment-tracking" },
        ],
      },
      { type: "heading", text: "Tools", id: "tools" },
      {
        type: "paragraph",
        text: "Operations don't require expensive software. A shared tracker, a CRM or database, consistent folders and an automation layer for reminders cover most brands. Dedicated influencer software helps as volume grows. The influencer marketing technology stack covers the options; the process should come first and the tools second.",
        links: [{ text: "influencer marketing technology stack", href: "/blog/influencer-marketing-technology" }],
      },
      { type: "heading", text: "A weekly operating rhythm", id: "rhythm" },
      {
        type: "template",
        label: "Weekly operations review (30 minutes)",
        text: "□ Campaign status: creators by stage; anything overdue\n□ Approvals waiting: who, since when\n□ Payments: due this fortnight, overdue, invoice issues\n□ Creator issues raised this week\n□ Rights expiring in the next 30 days\n□ Upcoming campaigns: onboarding and product dispatch on track?\nMONTHLY: SLA performance, creator feedback themes, process fixes\nQUARTERLY: roster review, rate review, tool and template review",
      },
      { type: "heading", text: "Operations metrics", id: "metrics" },
      {
        type: "table",
        headers: ["Metric", "What it tells you"],
        rows: [
          ["Time from shortlist approval to signed agreements", "Outreach and onboarding speed"],
          ["Share of drafts delivered on time", "Brief and onboarding quality"],
          ["Average feedback turnaround", "Internal approval health"],
          ["Average revision rounds", "Brief clarity and reviewer discipline"],
          ["Share of payments on time", "Finance process health"],
          ["Repeat acceptance by top creators", "Creator experience and relationship health"],
        ],
      },
      { type: "heading", text: "A maturity path", id: "maturity" },
      {
        type: "table",
        headers: ["Level", "Looks like", "Next step"],
        rows: [
          ["Ad hoc", "Each campaign run differently; knowledge in people's heads", "Standard templates and one tracker"],
          ["Defined", "Standard process and templates; owners named", "Service levels and weekly review"],
          ["Managed", "SLAs measured; payments tracked; documentation consistent", "Automation; creator feedback loop"],
          ["Optimised", "Metrics drive process changes; strong repeat partnerships", "Regular review; scale carefully"],
        ],
      },
      { type: "heading", text: "Operations across Indian markets", id: "india" },
      {
        type: "list",
        items: [
          "Build language support into templates and briefing for regional creators.",
          "Plan product logistics for tier 2 and tier 3 delivery times.",
          "Schedule around regional festivals, not only national ones.",
          "Make finance processes (vendor setup, GST and TDS handling) clear and quick for individual creators.",
        ],
      },
      { type: "heading", text: "The creator marketing operating model", id: "operating-model" },
      {
        type: "paragraph",
        text: "Operations is the engine; the operating model is the whole machine: what the brand does with creators, who owns each part, and how the parts connect. Brands scaling creator marketing usually need a deliberate answer to each row below, even if some answers are 'not yet'.",
      },
      {
        type: "table",
        headers: ["Component", "Decision", "Guide"],
        rows: [
          ["Strategy", "Objectives, audiences and where creators fit in the marketing mix", "Influencer marketing strategy"],
          ["Program model", "Campaigns, always-on roster, retainers, ambassadors, affiliates", "Long-term influencer partnerships"],
          ["Ownership and team", "In-house, agency or hybrid; who owns which stage", "Influencer marketing team structure"],
          ["Discovery and vetting", "How creators are found, screened and approved", "How to vet influencers"],
          ["Commercial model", "Flat fees, performance terms, affiliate commission, retainers", "Performance-based influencer marketing"],
          ["Creative model", "Brand-led briefs, creator-led ideas, or both", "Creator-led campaigns"],
          ["Governance and risk", "Policies, approvals, compliance and risk controls", "Influencer marketing governance"],
          ["Rights and paid media", "Usage rights, ad authorization and amplification", "Influencer usage rights"],
          ["Measurement", "KPIs by funnel stage, reporting rhythm, ROI", "The influencer marketing funnel"],
          ["Relationships", "Rebooking, retention and creator experience", "Influencer relationship management"],
          ["Technology and AI", "Tools for discovery, workflow and reporting, with human judgment kept", "AI influencer marketing"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides for each: influencer marketing strategy, long-term influencer partnerships, influencer marketing team structure, how to vet influencers, performance-based influencer marketing, creator-led campaigns, influencer marketing governance, influencer usage rights, the influencer marketing funnel, influencer relationship management and AI influencer marketing.",
        links: [
          { text: "influencer marketing strategy", href: "/blog/influencer-marketing-strategy" },
          { text: "long-term influencer partnerships", href: "/blog/influencer-partnerships" },
          { text: "influencer marketing team structure", href: "/blog/influencer-marketing-team-structure" },
          { text: "how to vet influencers", href: "/blog/how-to-vet-influencers" },
          { text: "performance-based influencer marketing", href: "/blog/performance-based-influencer-marketing" },
          { text: "creator-led campaigns", href: "/blog/creator-led-campaigns" },
          { text: "influencer marketing governance", href: "/blog/influencer-marketing-governance" },
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "the influencer marketing funnel", href: "/blog/influencer-marketing-funnel" },
          { text: "influencer relationship management", href: "/blog/influencer-relationship-management" },
          { text: "AI influencer marketing", href: "/blog/ai-influencer-marketing" },
        ],
      },
      { type: "heading", text: "Execution playbooks", id: "execution-playbooks" },
      {
        type: "paragraph",
        text: "A repeatable system needs written playbooks for the stages where campaigns most often go wrong. These are the ones worth standardising first:",
      },
      {
        type: "table",
        headers: ["Playbook", "What it standardises", "Guide"],
        rows: [
          ["Timeline and deadlines", "Stage durations, buffers, reminders", "Influencer marketing campaign timeline"],
          ["Content approval", "Submission, review order, approvers, turnaround", "Influencer content approval"],
          ["Revision policy", "Rounds, definitions, scope changes", "Influencer revision policy"],
          ["Quality control", "Pre-approval and go-live checklists", "Influencer content quality check"],
          ["Status tracking", "Statuses, columns, flags, views", "Influencer campaign tracker"],
          ["Delays and bottlenecks", "Stage timing analysis and fixes", "Influencer campaign delays"],
          ["Escalation", "Severity levels, owners, response times", "Influencer campaign escalation"],
          ["Non-compliance", "Proportionate responses to missed requirements", "Creator non-compliance"],
          ["Multi-creator coordination", "Waves, groups, shared FAQ, daily rhythm", "Influencer campaign coordination"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides for each: influencer marketing campaign timeline, influencer content approval, influencer revision policy, influencer content quality check, influencer campaign tracker, influencer campaign delays, influencer campaign escalation, creator non-compliance and influencer campaign coordination.",
        links: [
          { text: "influencer marketing campaign timeline", href: "/blog/influencer-marketing-campaign-timeline" },
          { text: "influencer content approval", href: "/blog/influencer-content-approval" },
          { text: "influencer revision policy", href: "/blog/influencer-revision-policy" },
          { text: "influencer content quality check", href: "/blog/influencer-content-quality-check" },
          { text: "influencer campaign tracker", href: "/blog/influencer-campaign-tracker" },
          { text: "influencer campaign delays", href: "/blog/influencer-campaign-delays" },
          { text: "influencer campaign escalation", href: "/blog/influencer-campaign-escalation" },
          { text: "creator non-compliance", href: "/blog/creator-non-compliance" },
          { text: "influencer campaign coordination", href: "/blog/influencer-campaign-coordination" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Buying software before defining the process.",
          "No owner for some stages (often payments and post-campaign).",
          "Service levels promised to creators but not measured.",
          "Agency processes that leave the brand without its own records.",
          "Treating operations as admin rather than as what makes creator partnerships work.",
        ],
      },
      {
        type: "paragraph",
        text: "Operations keeps campaigns running; influencer campaign optimization covers improving their results each cycle.",
        links: [
          { text: "influencer campaign optimization", href: "/blog/influencer-campaign-optimization" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Influencer marketing operations turns creator partnerships from a series of individual efforts into a reliable process: defined stages, named owners, standard templates and records, service levels, a weekly rhythm and a few metrics. It makes campaigns smoother for your team and more respectful of creators' time, and it's what allows a creator programme to grow without losing quality.",
      },
    ],
    faqs: [
      {
        question: "What is influencer marketing operations?",
        answer:
          "The repeatable system a brand uses to run creator partnerships: a defined process from discovery to relationship management, named owners, templates and records, service levels, tools and a regular review rhythm.",
      },
      {
        question: "How is influencer operations different from campaign management?",
        answer:
          "Campaign management runs a specific campaign. Operations is the system behind every campaign: process, roles, standards, service levels and metrics.",
      },
      {
        question: "What metrics should influencer operations track?",
        answer:
          "Time to signed agreements, on-time drafts, feedback turnaround, revision rounds, on-time payments and repeat acceptance by top creators.",
      },
    ],
  },
];
