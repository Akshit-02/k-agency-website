import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_11_PUBLISHED as PUBLISHED } from "@/content/creator-resources/shared";

/**
 * Creator campaign operations for agencies (870–879 layer): the operating system behind many campaigns at once.
 * Intent boundaries:
 * - creator-campaign-operations: the operating model, stage gates, trackers and rhythm (section pillar; absorbs
 *   multi-campaign project management, 872)
 * - creator-campaign-capacity-planning: how many campaigns the team can carry, plus allocating people and creators
 *   (absorbs resource planning, 873), with a capacity calculator
 * - creator-campaign-quality-assurance: checking deliverables before and after go-live, with an interactive checklist
 * - creator-campaign-escalation: severity levels, owners and response times for problems
 * - creator-campaign-post-mortem: reviewing campaigns and capturing what works (absorbs knowledge base, 879)
 * Existing owners: influencer-campaign-management (the single-campaign workflow; absorbs the brand–creator
 * collaboration process, 870), influencer-marketing-report (report content and client presentation; absorbs 877),
 * creator-agency-operations (money flow, creator payouts and agency systems).
 */
export const campaignOperationsPosts: BlogPost[] = [
  {
    slug: "creator-campaign-operations",
    category: "Creator Resources",
    title: "Creator Campaign Operations: How Agencies Manage Campaigns at Scale",
    seoTitle: "Creator Campaign Operations: Run Campaigns at Scale",
    excerpt:
      "The operating system behind running many creator campaigns at once: the eleven-stage campaign journey, stage gates, an operating model with clear owners, the master campaign tracker, multi-campaign project management, SLAs, a weekly operating rhythm and the metrics that show operations are healthy.",
    metaDescription:
      "How agencies run many creator campaigns at once: the campaign journey, stage gates, owners, a master tracker, SLAs, weekly rhythm and operations metrics.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "15 min read",
    tags: ["creator campaign operations", "influencer campaign operations", "creator campaign project management", "manage multiple influencer campaigns", "agency campaign workflow", "campaign operations at scale"],
    related: ["creator-campaign-capacity-planning", "creator-campaign-quality-assurance", "influencer-campaign-management"],
    body: [
      {
        type: "paragraph",
        text: "Running one creator campaign well is a matter of care. Running twelve at once, with forty creators, six brand approvers and three platforms, is a matter of systems. The failures at scale are rarely dramatic; they're a missed disclosure, a draft stuck with an approver on leave, a creator paid late because nobody owned the invoice.",
      },
      {
        type: "paragraph",
        text: "This is the pillar guide for Kudozz's campaign operations section, written for agencies and in-house teams running several campaigns in parallel. The step-by-step workflow for a single campaign is covered in how influencer campaign management works.",
        links: [{ text: "how influencer campaign management works", href: "/blog/influencer-campaign-management" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator campaign operations is the system that lets a team run many campaigns reliably: one standard campaign journey (brief, creator selection, planning, resourcing, capacity check, execution, quality assurance, escalation, reporting, post-mortem, knowledge capture), stage gates that must be passed before work moves on, a named owner for every campaign and stage, a master tracker covering all campaigns and creators, agreed response times, a weekly operating rhythm, and a few metrics such as on-time delivery, QA issues caught before go-live, approval turnaround and creator payment timeliness.",
      },
      { type: "heading", text: "The campaign journey", id: "journey" },
      {
        type: "image",
        src: "/blog/creator-resources/campaign-operations-journey.svg",
        alt: "Creator campaign operations journey in eleven stages: brand brief, creator selection, campaign planning, resource allocation, capacity check, creator execution, quality assurance, escalation, reporting, post-mortem and knowledge capture, with knowledge feeding back into the next brief",
        caption: "Every campaign follows the same journey; what's learned at the end improves the next brief.",
        width: 1200,
        height: 675,
      },
      {
        type: "table",
        headers: ["Stage", "Output", "Guide"],
        rows: [
          ["1. Brand brief", "Written brief with objective, KPI, audience, budget, dates, usage", "Influencer campaign brief"],
          ["2. Creator selection", "Shortlist with reasons, availability and conflicts checked", "How to vet influencers"],
          ["3. Campaign planning", "Timeline, deliverables per creator, approval path", "Influencer campaign management"],
          ["4. Resource allocation", "Named team owners; creators confirmed", "Creator campaign capacity planning"],
          ["5. Capacity check", "Confirmation the team can carry it on time", "Creator campaign capacity planning"],
          ["6. Creator execution", "Contracts, briefs, drafts, revisions", "How to brief influencers"],
          ["7. Quality assurance", "Deliverables checked before and after go-live", "Creator campaign quality assurance"],
          ["8. Escalation", "Problems handled by severity with clear owners", "Creator campaign escalation"],
          ["9. Reporting", "Results against the agreed objective", "Influencer marketing report"],
          ["10. Post-mortem", "What worked, what didn't, actions", "Creator campaign post-mortem"],
          ["11. Knowledge capture", "Playbooks, creator notes, benchmarks updated", "Creator campaign post-mortem"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides for each stage: influencer campaign brief, how to vet influencers, creator campaign capacity planning, how to brief influencers, creator campaign quality assurance, creator campaign escalation, influencer marketing report and creator campaign post-mortem.",
        links: [
          { text: "influencer campaign brief", href: "/blog/influencer-campaign-brief" },
          { text: "how to vet influencers", href: "/blog/how-to-vet-influencers" },
          { text: "creator campaign capacity planning", href: "/blog/creator-campaign-capacity-planning" },
          { text: "how to brief influencers", href: "/blog/how-to-brief-influencers" },
          { text: "creator campaign quality assurance", href: "/blog/creator-campaign-quality-assurance" },
          { text: "creator campaign escalation", href: "/blog/creator-campaign-escalation" },
          { text: "influencer marketing report", href: "/blog/influencer-marketing-report" },
          { text: "creator campaign post-mortem", href: "/blog/creator-campaign-post-mortem" },
        ],
      },
      { type: "heading", text: "Stage gates", id: "stage-gates" },
      {
        type: "paragraph",
        text: "A stage gate is a short checklist that must be complete before a campaign moves to the next stage. Gates stop problems travelling downstream, where they cost more to fix.",
      },
      {
        type: "table",
        headers: ["Gate", "Must be true before moving on"],
        rows: [
          ["Brief → selection", "Objective, KPI, budget range, dates, usage and approvers confirmed in writing"],
          ["Selection → contracting", "Client approved the shortlist; availability, exclusivities and conflicts checked"],
          ["Contracting → production", "Terms confirmed with every creator; briefs sent; tracking links or codes ready"],
          ["Production → go-live", "Every deliverable passed QA and client approval"],
          ["Go-live → reporting", "Live links, screenshots and disclosure verified; data collection dates set"],
          ["Reporting → close", "Report delivered; creators paid or payment scheduled; post-mortem booked"],
        ],
      },
      { type: "heading", text: "The operating model: who owns what", id: "operating-model" },
      {
        type: "table",
        headers: ["Role", "Owns", "Across campaigns"],
        rows: [
          ["Account lead", "Client relationship, scope, reporting story", "Several clients"],
          ["Campaign manager", "Timeline, creators, approvals, go-live", "Several concurrent campaigns"],
          ["Talent or creator coordinator", "Creator communication, contracts, payments status", "Many creators"],
          ["QA reviewer", "Pre- and post-live checks", "All campaigns"],
          ["Operations lead", "Master tracker, capacity, escalations, process", "The whole book of work"],
        ],
      },
      {
        type: "paragraph",
        text: "In a small agency one person holds several roles; the point is that each responsibility has exactly one named owner per campaign. As volume grows, many agencies organise into pods: a small team that owns a group of clients end to end. Role structure for creator management agencies is covered in creator agency operations.",
        links: [{ text: "creator agency operations", href: "/blog/creator-agency-operations" }],
      },
      { type: "heading", text: "The master campaign tracker", id: "tracker" },
      {
        type: "paragraph",
        text: "Managing several campaigns means seeing all of them at once. Keep one tracker with a row per creator deliverable, not one spreadsheet per campaign, so you can filter by campaign, creator, owner, stage or due date.",
      },
      {
        type: "template",
        label: "Master tracker columns",
        text: "Campaign | Client | Owner | Creator | Platform | Deliverable | Stage | Draft due | Approval due | Go-live date |\nQA status | Disclosure checked | Live link | Usage end date | Creator fee | Invoice status | Creator paid | Issues | Next action",
      },
      {
        type: "paragraph",
        text: "A downloadable starting point, built for creators but easy to extend, is the creator campaign tracker in creator campaign documentation.",
        links: [{ text: "creator campaign documentation", href: "/blog/creator-campaign-documentation" }],
      },
      { type: "heading", text: "Project management across campaigns", id: "project-management" },
      {
        type: "list",
        items: [
          "Plan backwards from go-live dates, with buffer for revisions and approvals.",
          "Stagger campaign milestones so the same approver or QA reviewer isn't hit by five deadlines on one day.",
          "Track dependencies: product shipped to creators, tracking links issued, client legal review.",
          "Use views, not copies: a calendar of go-lives, a board by stage, a list of overdue items.",
          "Hold creator and client deadlines in the same system so conflicts show up early.",
        ],
      },
      {
        type: "paragraph",
        text: "The same principles at creator scale are in creator project management.",
        links: [{ text: "creator project management", href: "/blog/creator-project-management" }],
      },
      { type: "heading", text: "Service levels", id: "slas" },
      {
        type: "table",
        headers: ["Commitment", "Example to agree (illustrative)"],
        rows: [
          ["Reply to client messages", "Within one working day"],
          ["Shortlist after brief is confirmed", "An agreed number of working days"],
          ["Feedback on creator drafts", "Within an agreed window, so creators aren't left waiting"],
          ["Client approval turnaround", "Written into the contract, with what happens if it's missed"],
          ["Creator payment after brand pays", "An agreed number of days, communicated to creators"],
          ["Report after campaign closes", "An agreed number of working days"],
        ],
      },
      { type: "heading", text: "The weekly operating rhythm", id: "rhythm" },
      {
        type: "template",
        label: "Weekly rhythm (example)",
        text: "Monday (30 min)   All-campaign stand-up: what goes live this week, what's blocked, capacity check\nDaily (10 min)    Overdue items from the tracker; escalations\nWednesday         QA review block for the week's go-lives\nFriday (30 min)   Look-ahead: next two weeks' go-lives, approvals and payments; update clients",
      },
      { type: "heading", text: "Operations metrics", id: "metrics" },
      {
        type: "table",
        headers: ["Metric", "What it tells you"],
        rows: [
          ["On-time go-live rate", "Reliability as clients experience it"],
          ["QA issues caught before go-live vs after", "Whether checks are working"],
          ["Average revision rounds per deliverable", "Brief and creator-selection quality"],
          ["Client approval turnaround", "Where delays really come from"],
          ["Escalations by severity", "Recurring problem types"],
          ["Days from brand payment to creator payment", "Trust with creators"],
          ["Team utilisation", "Whether capacity matches workload"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "One spreadsheet per campaign, so no one sees the whole book of work.",
          "Shared ownership, which means no ownership.",
          "Skipping gates when a client is in a hurry.",
          "Every campaign run slightly differently.",
          "Measuring only campaign results, never operational reliability.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Campaign operations is what lets creator marketing scale without losing quality. Use one journey for every campaign, gates between stages, one owner per responsibility, a master tracker, agreed service levels and a weekly rhythm, and measure reliability as carefully as results. Capacity, quality assurance, escalation and post-mortems each have their own guide in this section.",
      },
    ],
    faqs: [
      {
        question: "What is creator campaign operations?",
        answer:
          "The system that lets a team run many creator campaigns reliably: a standard campaign journey, stage gates, named owners, a master tracker, service levels, a weekly operating rhythm and operational metrics.",
      },
      {
        question: "How do agencies manage multiple influencer campaigns at once?",
        answer:
          "With one master tracker covering every creator deliverable across campaigns, milestones staggered so reviewers aren't overloaded, dependencies tracked, clear owners per campaign and a weekly stand-up focused on go-lives, blockers and capacity.",
      },
      {
        question: "What's the difference between campaign management and campaign operations?",
        answer:
          "Campaign management is running one campaign from brief to report. Campaign operations is the system across all campaigns: shared processes, capacity, quality checks, escalation and learning.",
      },
    ],
  },
  {
    slug: "creator-campaign-capacity-planning",
    category: "Creator Resources",
    title: "Creator Campaign Capacity Planning: How Agencies Know How Many Campaigns They Can Handle",
    seoTitle: "Creator Campaign Capacity and Resource Planning",
    excerpt:
      "How agencies work out how many creator campaigns their team can carry: estimating hours per campaign and per creator, available hours, a sustainable utilisation level, a capacity calculator, allocating people and creators across campaigns, peak seasons and when to hire or say no.",
    metaDescription:
      "Plan creator campaign capacity: hours per campaign and creator, available team hours, a capacity calculator, resource allocation, peaks and hiring.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator campaign capacity planning", "creator campaign resource planning", "agency capacity planning", "influencer campaign resourcing", "how many campaigns can an agency handle", "campaign workload planning"],
    related: ["creator-campaign-operations", "creator-agency-profitability", "creator-agency-growth-strategy"],
    body: [
      {
        type: "paragraph",
        text: "Agencies usually discover they're over capacity from symptoms: drafts reviewed late at night, go-lives slipping, clients noticing mistakes. Capacity planning replaces that with a number you can check before you say yes to the next campaign.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To plan campaign capacity, estimate the hours a campaign takes (fixed hours per campaign for strategy, setup and reporting, plus hours per creator for outreach, contracting, briefing, reviews, QA and payments), add up the team's available hours after leave, internal work and sales, and apply a sustainable utilisation level. Workload divided by usable hours shows how full you are; the calculator below does it with your own figures. Then allocate named people and creators to each campaign, check peaks week by week, and hire or decline work before the team is stretched.",
      },
      { type: "heading", text: "Estimate hours per campaign", id: "estimate" },
      {
        type: "table",
        headers: ["Work", "Scales with", "Examples"],
        rows: [
          ["Fixed per campaign", "Number of campaigns", "Brief review, strategy, shortlist presentation, client calls, report, post-mortem"],
          ["Per creator", "Number of creators", "Outreach, negotiation, contract, brief, draft reviews, QA, go-live checks, payment follow-up"],
          ["Per deliverable", "Pieces of content", "Extra review rounds, cut-downs, usage handover"],
          ["Complexity factors", "Campaign type", "Regulated categories, multiple approvers, events, travel, product shipping"],
        ],
      },
      {
        type: "paragraph",
        text: "Use your own history. Ask the team to log time on three or four representative campaigns, split by these buckets. The first estimates will be rough; they improve every quarter.",
      },
      { type: "heading", text: "Know your usable hours", id: "usable-hours" },
      {
        type: "list",
        items: [
          "Start with contracted hours per person per month.",
          "Subtract leave, holidays and festivals that matter in your market.",
          "Subtract internal work: team meetings, training, admin, sales support.",
          "Apply a sustainable utilisation level so there's slack for problems and quality.",
        ],
      },
      {
        type: "paragraph",
        text: "There's no universal utilisation target. Choose a level at which your team delivers well without routine overtime, and adjust it from experience. Creator agency profitability explains how utilisation affects margin.",
        links: [{ text: "Creator agency profitability", href: "/blog/creator-agency-profitability" }],
      },
      { type: "heading", text: "Calculate your campaign capacity", id: "calculator" },
      { type: "tool", tool: "creator-campaign-capacity-calculator" },
      { type: "heading", text: "Resource planning: allocating people", id: "allocation" },
      {
        type: "paragraph",
        text: "Capacity tells you whether the team can carry the work in total; resource planning decides who carries which part. Allocate by name, week by week.",
      },
      {
        type: "table",
        headers: ["Person (illustrative)", "Wk 1", "Wk 2", "Wk 3", "Wk 4", "Action"],
        rows: [
          ["Campaign manager A", "85%", "95%", "110%", "70%", "Week 3 has two launches: move one QA block to manager B"],
          ["Campaign manager B", "60%", "70%", "75%", "80%", "Can absorb overflow"],
          ["Talent coordinator", "90%", "90%", "95%", "90%", "At limit all month: no new creator onboarding"],
          ["Shared QA", "50%", "60%", "90%", "40%", "Book extra QA time in week 3"],
        ],
      },
      {
        type: "list",
        items: [
          "Match people to campaigns by category knowledge, language and client relationship.",
          "Keep one owner per campaign even when others help.",
          "Plan cover for leave before it happens.",
          "Watch weekly peaks, not just monthly totals.",
        ],
      },
      { type: "heading", text: "Allocating creators across campaigns", id: "creator-allocation" },
      {
        type: "paragraph",
        text: "Creators have capacity too. A creator booked into three campaigns in a fortnight may deliver rushed content, and their audience may see too much sponsored content at once. Track each creator's live and upcoming commitments, respect the monthly capacity they've told you, and check category exclusivities before offering them to a second brand. Sponsored content fatigue explains the audience side.",
        links: [{ text: "Sponsored content fatigue", href: "/blog/sponsored-content-fatigue-creators" }],
      },
      { type: "heading", text: "Peaks and seasons", id: "peaks" },
      {
        type: "paragraph",
        text: "Creator marketing in India bunches around festive seasons, sale events and launches. Map known peaks for the year, book creators and freelancers early for them, move internal projects out of those weeks, and agree realistic lead times with clients for peak-period campaigns.",
      },
      { type: "heading", text: "When to hire, and when to say no", id: "decisions" },
      {
        type: "table",
        headers: ["Situation", "Response"],
        rows: [
          ["Over capacity for a week or two", "Re-sequence, borrow from another pod, use freelancers"],
          ["Over capacity for a month or more", "Hire or bring in regular freelance support"],
          ["A new campaign would push the team over", "Negotiate dates, reduce scope, or decline"],
          ["Consistently under capacity", "Pull a growth lever; see creator agency growth strategy"],
        ],
      },
      {
        type: "paragraph",
        text: "Growth levers: creator agency growth strategy.",
        links: [{ text: "creator agency growth strategy", href: "/blog/creator-agency-growth-strategy" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Counting campaigns rather than creators and deliverables.",
          "Planning at full utilisation with no slack.",
          "Monthly totals that hide weekly peaks.",
          "Ignoring creators' own capacity.",
          "Saying yes to every brief and fixing it with overtime.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Capacity planning turns \"we're very busy\" into a number. Estimate hours per campaign and per creator from your own history, know your usable hours, keep slack, allocate named people and creators week by week, and hire or decline before quality suffers.",
      },
    ],
    faqs: [
      {
        question: "How many influencer campaigns can an agency handle?",
        answer:
          "It depends on hours per campaign and per creator, the team's usable hours and a sustainable utilisation level. Estimate workload from your own time data and compare it with capacity before accepting new work.",
      },
      {
        question: "What's the difference between capacity planning and resource planning?",
        answer:
          "Capacity planning checks whether the team can carry the total workload. Resource planning allocates named people and creators to specific campaigns and weeks.",
      },
      {
        question: "How do I estimate hours for a creator campaign?",
        answer:
          "Split the work into fixed hours per campaign (strategy, setup, reporting) and hours per creator (outreach, contracts, briefs, reviews, QA, payments), add complexity factors, and refine the estimates from logged time on real campaigns.",
      },
    ],
  },
  {
    slug: "creator-campaign-quality-assurance",
    category: "Creator Resources",
    title: "Creator Campaign Quality Assurance: How Agencies Check Deliverables",
    seoTitle: "Creator Campaign QA: Check Deliverables Before Go-Live",
    excerpt:
      "How agencies check creator deliverables before and after they go live: the difference between creative feedback and QA, brief compliance, claims, disclosure, rights and technical checks, an interactive QA checklist, post-live verification, and building QA into the workflow.",
    metaDescription:
      "Creator campaign QA: check brief compliance, claims, disclosure, rights and links before go-live, verify after, with an interactive QA checklist.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator campaign quality assurance", "influencer content QA", "check influencer deliverables", "influencer content approval checklist", "campaign QA checklist", "pre-live content checks"],
    related: ["creator-campaign-operations", "creator-campaign-escalation", "creator-disclosure-guide"],
    body: [
      {
        type: "paragraph",
        text: "Most campaign problems that reach a client could have been caught by a second pair of eyes with a checklist: a missing disclosure, the wrong discount code, a claim the brand can't substantiate, a competitor's product visible in the background. Quality assurance is that second pair of eyes, applied every time.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator campaign quality assurance is a structured check of every deliverable before it goes live and again after. Before go-live, check brief compliance, product and claims accuracy, disclosure, rights and permissions, brand safety, and technical details such as links, codes, tags and captions. After go-live, confirm the post is live as approved, disclosure is visible, links work and the live link is recorded. QA is separate from creative feedback: it checks against agreed requirements and rules, not taste.",
      },
      { type: "heading", text: "Creative feedback vs QA", id: "feedback-vs-qa" },
      {
        type: "table",
        headers: ["", "Creative feedback", "Quality assurance"],
        rows: [
          ["Question", "Does this work for the brand and audience?", "Does this meet the brief, the rules and the contract?"],
          ["Who", "Account lead and client", "A reviewer using a checklist"],
          ["Judgement", "Subjective, within agreed limits", "Mostly objective"],
          ["Limits", "Agreed revision rounds", "Every deliverable, every time"],
        ],
      },
      {
        type: "paragraph",
        text: "Keeping them separate protects creators from endless subjective changes and protects clients from avoidable errors. Revision limits are covered in brand content approval and revisions.",
        links: [{ text: "brand content approval and revisions", href: "/blog/creator-brand-revisions" }],
      },
      { type: "heading", text: "The QA checklist", id: "checklist" },
      { type: "tool", tool: "creator-campaign-qa-checklist" },
      { type: "heading", text: "Claims and regulated categories", id: "claims" },
      {
        type: "paragraph",
        text: "Health, nutrition, beauty, finance, education and other categories carry extra rules. Check every claim against what the brand has substantiated and approved, and be especially careful where ASCI expects technical claims to come from qualified creators or where sector regulators restrict promotion. The rules are summarised in creator advertising rules.",
        links: [{ text: "creator advertising rules", href: "/blog/creator-advertising-rules" }],
      },
      { type: "heading", text: "Disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "Check that the disclosure label is used, visible without clicking \"more\", in the language of the content, and present in video where required, alongside the platform's paid partnership tool where available. Both brand and creator share responsibility. Details are in the creator disclosure guide and influencer marketing compliance.",
        links: [
          { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" },
          { text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" },
        ],
      },
      { type: "heading", text: "Post-live verification", id: "post-live" },
      {
        type: "list",
        items: [
          "Post is live at the agreed time on the agreed account and platform.",
          "Content matches the approved version; no unapproved edits to captions or claims.",
          "Disclosure and paid partnership label visible.",
          "Links, codes and tags work.",
          "Live link and screenshot saved to the tracker.",
          "Comments checked in the first hours for problems that need escalation.",
        ],
      },
      {
        type: "paragraph",
        text: "Problems found at this stage go into the escalation process; see creator campaign escalation.",
        links: [{ text: "creator campaign escalation", href: "/blog/creator-campaign-escalation" }],
      },
      { type: "heading", text: "Building QA into the workflow", id: "workflow" },
      {
        type: "list",
        items: [
          "Make QA a stage gate: nothing goes to client approval or go-live without it.",
          "Use a reviewer who didn't manage the creator, where team size allows.",
          "Schedule QA blocks around the week's go-lives rather than squeezing it in.",
          "Log every issue found, and review the log monthly for patterns.",
          "Update briefs and templates when the same issue keeps appearing.",
        ],
      },
      {
        type: "paragraph",
        text: "Stage gates and scheduling are covered in creator campaign operations. Creators' own production QC is in creator content quality control.",
        links: [
          { text: "creator campaign operations", href: "/blog/creator-campaign-operations" },
          { text: "creator content quality control", href: "/blog/creator-content-quality-control" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Mixing personal taste into QA.",
          "Checking the draft but not the live post.",
          "Assuming creators know the claim rules for the category.",
          "No record of which version was approved.",
          "Skipping QA for trusted creators.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Quality assurance is a checklist, a habit and a stage gate. Check brief compliance, claims, disclosure, rights, brand safety and technical details before go-live, verify the live post afterwards, keep QA separate from creative taste, and use the issue log to fix causes, not just symptoms. This is operational guidance; regulated claims need the brand's legal or compliance review.",
      },
    ],
    faqs: [
      {
        question: "What should agencies check before influencer content goes live?",
        answer:
          "Brief compliance, product and claims accuracy, disclosure, usage rights and permissions, brand safety, and technical details such as links, discount codes, tags, captions and go-live timing.",
      },
      {
        question: "What's the difference between content approval and QA?",
        answer:
          "Approval is the client's creative decision within agreed revision limits. QA checks every deliverable against the brief, rules and contract, using a checklist, before and after go-live.",
      },
      {
        question: "Who is responsible for influencer disclosure in India?",
        answer:
          "Under ASCI's guidelines both the advertiser and the influencer are responsible for disclosure. Agencies running campaigns should check it on every deliverable.",
      },
    ],
  },
  {
    slug: "creator-campaign-escalation",
    category: "Creator Resources",
    title: "Creator Campaign Escalation Process: How to Handle Problems Before They Grow",
    seoTitle: "Creator Campaign Escalation: Severity Levels and Owners",
    excerpt:
      "How agencies handle problems in creator campaigns: four severity levels with owners and response times, common issues and first responses (missed deadlines, creator drop-outs, errors after go-live, backlash, payment disputes), telling the client, and an incident log that prevents repeats.",
    metaDescription:
      "Creator campaign escalation: four severity levels, owners and response times, first responses to common problems, client communication and incident logs.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator campaign escalation", "influencer campaign problems", "campaign escalation process", "influencer campaign issue management", "agency escalation matrix", "campaign crisis handling"],
    related: ["creator-campaign-quality-assurance", "creator-campaign-operations", "creator-crisis-communication"],
    body: [
      {
        type: "paragraph",
        text: "Every creator campaign will have problems. A creator falls ill, a parcel doesn't arrive, a post goes live with last week's discount code, a brand's legal team rewrites the script the night before. What separates reliable agencies is not fewer problems, but a known way of handling them before they grow.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator campaign escalation process classifies each problem by severity, assigns an owner and a response time for each level, and defines when the client and senior people are told. Low-severity issues are fixed within the team; medium issues are fixed and reported to the client; high-severity issues (public errors, compliance problems, missed launches) go to the account lead and client immediately; critical issues (legal, safety, serious reputational risk) go to agency leadership at once. Every escalation is logged so the causes can be fixed.",
      },
      { type: "heading", text: "Four severity levels", id: "severity" },
      {
        type: "table",
        headers: ["Level", "Examples", "Owner", "Response", "Client told"],
        rows: [
          ["1. Low", "Draft a day late; minor caption fix before go-live", "Campaign manager", "Same day", "In the next update"],
          ["2. Medium", "Creator misses go-live date; product not delivered; approval stuck", "Campaign manager, account lead informed", "Within hours", "Same day, with a plan"],
          ["3. High", "Wrong code or claim live; disclosure missing; creator drops out before launch", "Account lead", "Immediately", "Immediately"],
          ["4. Critical", "Legal complaint, safety threat, serious backlash, regulator or platform action", "Agency leadership", "Immediately", "Immediately, by a senior person"],
        ],
      },
      {
        type: "paragraph",
        text: "Response times here are illustrative; agree your own and write them into your operating process and, where relevant, client contracts.",
      },
      { type: "heading", text: "Common problems and first responses", id: "playbook" },
      {
        type: "table",
        headers: ["Problem", "First response"],
        rows: [
          ["Creator misses a draft deadline", "Contact the creator; agree a new date; check the knock-on for go-live; tell the client if go-live moves"],
          ["Creator drops out", "Check the contract; offer the client pre-screened backups from the shortlist"],
          ["Client approval is late", "Remind with the consequence for dates; offer a quick call; record the delay"],
          ["Error in a live post", "Ask the creator to correct or archive and repost as the contract allows; record what went live"],
          ["Missing disclosure", "Fix immediately; treat as high severity; review QA"],
          ["Negative comments or backlash", "Assess scale; pause related content if needed; follow the crisis process"],
          ["Payment dispute", "Check contract and invoice records; keep the creator informed; resolve in writing"],
          ["Brand wants changes beyond scope", "Explain scope; quote the extra work; don't pressure the creator"],
        ],
      },
      {
        type: "paragraph",
        text: "For public backlash, creator crisis communication has holding statements and apology templates; late payments are covered in how creators handle late brand payments.",
        links: [
          { text: "creator crisis communication", href: "/blog/creator-crisis-communication" },
          { text: "how creators handle late brand payments", href: "/blog/creators-handle-late-brand-payments" },
        ],
      },
      { type: "heading", text: "Telling the client", id: "client-communication" },
      {
        type: "template",
        label: "Issue update to a client (example)",
        text: "Subject: [Campaign] — issue with [creator] post, fixed\n\nWhat happened: [creator]'s post went live at 6 pm with last month's discount code.\nWhat we've done: the creator updated the caption at 6:40 pm; the story frame was reposted. Orders placed with the old code are listed in the attached sheet for your team.\nImpact: roughly 40 minutes with the wrong code.\nWhat we're changing: codes are now checked on the live post within 15 minutes of go-live, not only on the draft.\nNext update: tomorrow's campaign summary.",
      },
      {
        type: "list",
        items: [
          "Tell the client before they find out, even when the fix is already done.",
          "State facts, what you've done, the impact and what changes.",
          "Don't blame the creator publicly or in writing to the client; handle accountability separately.",
          "Follow up when you said you would.",
        ],
      },
      { type: "heading", text: "Protect the creator too", id: "creators" },
      {
        type: "paragraph",
        text: "Escalations often put creators under pressure: urgent edits, public criticism, disputes about fees. Keep them informed, never ask them to act outside their contract without agreement, and support them if they face harassment. The talent-side responsibilities are covered in creator talent management.",
        links: [{ text: "creator talent management", href: "/blog/creator-talent-management" }],
      },
      { type: "heading", text: "The incident log", id: "log" },
      {
        type: "template",
        label: "Incident log columns",
        text: "Date | Campaign | Severity | What happened | Found by (QA, client, creator, audience) | Response time | Owner |\nClient told (when) | Root cause | Fix | Prevention action | Status",
      },
      {
        type: "paragraph",
        text: "Review the log monthly and in every post-mortem. The same problem appearing twice is a process issue, not bad luck. See creator campaign post-mortem.",
        links: [{ text: "creator campaign post-mortem", href: "/blog/creator-campaign-post-mortem" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Hoping a problem resolves itself before telling the client.",
          "Everything treated as urgent, so nothing is.",
          "No named owner for high-severity issues.",
          "Blaming creators instead of fixing process.",
          "Not logging issues, so they repeat.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A clear escalation process turns campaign problems into routine work. Classify by severity, name owners and response times, use a short playbook for common issues, tell clients early and factually, protect creators, and log everything so causes get fixed. Legal complaints and regulatory matters need legal advice.",
      },
    ],
    faqs: [
      {
        question: "What is an escalation process in influencer campaigns?",
        answer:
          "A defined way to classify problems by severity, assign an owner and response time to each level, decide when clients and senior people are told, and log incidents so their causes are fixed.",
      },
      {
        question: "What should an agency do if a creator drops out of a campaign?",
        answer:
          "Check the contract, tell the client promptly, and offer pre-screened backup creators from the original shortlist, adjusting dates if needed.",
      },
      {
        question: "Should agencies tell clients about problems they've already fixed?",
        answer:
          "Yes. Clients should hear about problems from the agency first, with the facts, the fix, the impact and what will change, rather than discovering them later.",
      },
    ],
  },
  {
    slug: "creator-campaign-post-mortem",
    category: "Creator Resources",
    title: "Creator Campaign Post-Mortem: How to Review Campaigns and Capture What Works",
    seoTitle: "Creator Campaign Post-Mortem and Knowledge Base",
    excerpt:
      "How agencies review creator campaigns and turn the lessons into a knowledge base: when to run a post-mortem, a blameless meeting format, a copy-ready post-mortem template, what to capture about creators, formats and processes, and how to structure a campaign knowledge base the team actually uses.",
    metaDescription:
      "Run a creator campaign post-mortem: blameless format, a copy-ready template, what to capture, and how to build a campaign knowledge base teams use.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator campaign post mortem", "influencer campaign debrief", "campaign retrospective template", "creator campaign knowledge base", "agency knowledge management", "campaign learnings"],
    related: ["creator-campaign-operations", "influencer-marketing-report", "creator-agency-client-retention"],
    body: [
      {
        type: "paragraph",
        text: "An agency that has run a hundred creator campaigns should know far more than one that has run ten. Often it doesn't, because the lessons stayed in the heads of people who were busy, and some of those people have since left. A post-mortem captures what one campaign taught; a knowledge base makes sure the next campaign benefits.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator campaign post-mortem is a structured review held soon after a campaign ends, using the report, the incident log and feedback from the client and creators. It asks four questions: what we planned, what happened, why, and what we'll do differently, and it focuses on processes rather than blame. Each post-mortem should end with owned actions and with updates to the agency's knowledge base: creator performance notes, format and category playbooks, brief and report templates, and internal benchmarks built from your own campaigns.",
      },
      { type: "heading", text: "When to run one", id: "when" },
      {
        type: "list",
        items: [
          "After every campaign above a size you define, soon after the report is complete.",
          "After any campaign with a high-severity or critical escalation, whatever its size.",
          "For always-on programmes, quarterly rather than per post.",
          "A short version (15 minutes, internal) for small campaigns.",
        ],
      },
      { type: "heading", text: "Blameless by design", id: "blameless" },
      {
        type: "paragraph",
        text: "People hide mistakes when reviews look for someone to blame, and hidden mistakes repeat. Ask \"what made this easy to get wrong?\" rather than \"who got it wrong?\". Individual performance conversations still happen, separately and privately.",
      },
      { type: "heading", text: "Inputs", id: "inputs" },
      {
        type: "list",
        items: [
          "The original brief, objectives and KPIs.",
          "The campaign report and creator-level results; see how to create an influencer marketing report.",
          "The incident log and QA issue log.",
          "Timeline data: planned vs actual dates, approval turnaround, revision rounds.",
          "Client feedback, and a short feedback request to creators.",
          "Hours spent vs planned.",
        ],
      },
      {
        type: "paragraph",
        text: "Report structure: how to create an influencer marketing report.",
        links: [{ text: "how to create an influencer marketing report", href: "/blog/influencer-marketing-report" }],
      },
      { type: "heading", text: "Post-mortem template", id: "template" },
      {
        type: "template",
        label: "Creator campaign post-mortem (copy and fill in)",
        text: "Campaign: [ ]   Client: [ ]   Dates: [ ]   Facilitator: [ ]\n\n1. WHAT WE PLANNED\nObjective and KPI: [ ]   Creators: [n]   Budget: [ ]   Timeline: [ ]\n\n2. WHAT HAPPENED\nResults vs KPI: [ ]\nTop and bottom performers (creator, format, message): [ ]\nTimeline: planned vs actual, approval turnaround, revision rounds: [ ]\nIssues and escalations: [ ]\nHours: planned vs actual: [ ]\n\n3. WHY\nWhat worked, and why we think so: [ ]\nWhat didn't, and the likely causes (process, brief, selection, timing, external): [ ]\n\n4. WHAT WE'LL DO DIFFERENTLY\nAction — owner — date\n[ ]\n\n5. KNOWLEDGE BASE UPDATES\nCreator notes updated: [ ]   Playbook updated: [ ]   Template changed: [ ]   Benchmark added: [ ]\n\n6. FOR THE CLIENT\nRecommendations for the next campaign: [ ]",
      },
      { type: "heading", text: "Running the meeting", id: "meeting" },
      {
        type: "template",
        label: "60-minute agenda",
        text: "5 min   Objective recap and ground rules (blameless)\n15 min  Results: what the data says, creator by creator\n15 min  Process: timeline, approvals, issues, hours\n15 min  Causes and changes: agree actions and owners\n10 min  Knowledge base updates and client recommendations",
      },
      {
        type: "paragraph",
        text: "Share the client-facing recommendations at the next check-in or quarterly review; creator agency client retention covers how reviews keep accounts healthy.",
        links: [{ text: "creator agency client retention", href: "/blog/creator-agency-client-retention" }],
      },
      { type: "heading", text: "From post-mortem to knowledge base", id: "knowledge-base" },
      {
        type: "paragraph",
        text: "A campaign knowledge base is where the agency's experience is stored in a form the next team can use. Keep it simple and searchable; four sections cover most needs.",
      },
      {
        type: "table",
        headers: ["Section", "What goes in", "Used when"],
        rows: [
          ["Creator notes", "Performance by campaign type, working style, strengths, brand feedback", "Building shortlists"],
          ["Playbooks", "What works by category, format, platform and objective, with examples", "Planning and pitching"],
          ["Templates", "Briefs, trackers, QA checklists, reports, client updates, current versions", "Every campaign"],
          ["Internal benchmarks", "Your own ranges for views, engagement, clicks, costs by category and format", "Setting expectations and KPIs"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator notes belong in the talent database so they sit next to the rest of the creator's record; see creator talent database. Internal benchmarks should be labelled with campaign count and date range, because a benchmark built from three campaigns is a hint, not a standard.",
        links: [{ text: "creator talent database", href: "/blog/creator-talent-database" }],
      },
      { type: "heading", text: "Keeping the knowledge base alive", id: "maintenance" },
      {
        type: "list",
        items: [
          "Make \"knowledge base updated\" part of closing every campaign.",
          "Name an owner for each section.",
          "Date every entry; archive what's out of date rather than deleting history.",
          "Start new campaigns by reading the relevant playbook and creator notes.",
          "Review playbooks when platforms or rules change.",
        ],
      },
      {
        type: "paragraph",
        text: "Standard operating procedures follow the same principles; see creator business SOPs.",
        links: [{ text: "creator business SOPs", href: "/blog/creator-business-sops" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Post-mortems only after failures.",
          "Discussions that end without owned actions.",
          "Blame, which teaches people to hide problems.",
          "Lessons written in documents no one opens again.",
          "Treating a handful of campaigns as a reliable benchmark.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Post-mortems and a knowledge base are how an agency gets better with every campaign instead of just busier. Review soon after each campaign, stay blameless, end with owned actions, and update creator notes, playbooks, templates and benchmarks so the next brief starts from what you already know.",
      },
    ],
    faqs: [
      {
        question: "What is a campaign post-mortem?",
        answer:
          "A structured review after a campaign that compares what was planned with what happened, identifies why, and agrees owned actions and knowledge base updates, focusing on process rather than blame.",
      },
      {
        question: "What should an influencer campaign debrief include?",
        answer:
          "Results against the objective, creator-level performance, timeline and approval data, issues and escalations, hours versus plan, causes, actions with owners, knowledge base updates and recommendations for the client.",
      },
      {
        question: "What goes in a creator campaign knowledge base?",
        answer:
          "Creator performance notes, playbooks by category, format and objective, current templates, and internal benchmarks built from the agency's own campaigns, each dated and owned.",
      },
    ],
  },
];
