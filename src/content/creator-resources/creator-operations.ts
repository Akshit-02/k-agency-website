import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_9_PUBLISHED as PUBLISHED } from "@/content/creator-resources/shared";

/**
 * Creator operations (750–799 layer). Intent boundaries inside the cluster:
 * - creator-operations: the operating model and the business systems map (absorbs "creator business systems")
 * - creator-workflow-automation: which repeatable tasks to automate and how to design them
 * - creator-project-management: multi-step projects with milestones and several people
 * - creator-task-management: daily and weekly execution, capture and prioritisation
 * - creator-operations-checklist: an interactive 30-process audit
 * Existing owners stay in charge of their intents: creator-workflow (brand deal
 * stages and campaign tracker), creator-business-sops (process documents and
 * business documentation), creator-crm, creator-brand-partnership-pipeline and
 * creator-content-calendar (including the master calendar).
 */
export const creatorOperationsPosts: BlogPost[] = [
  {
    slug: "creator-operations",
    category: "Creator Resources",
    title: "Creator Operations: How to Run Your Content Business Like a Company",
    seoTitle: "Creator Operations: Run Your Content Business Like a Company",
    excerpt:
      "What creator operations means, the eight business systems every professional creator runs, a daily-to-quarterly operating rhythm, what operations looks like at each stage from solo creator to creator-led company, and a five-step plan to move from chaos to systems.",
    metaDescription:
      "Creator operations explained: the eight business systems professional creators run, an operating rhythm, stage-by-stage setups and a plan to fix chaos.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["creator operations", "creator business systems", "run a creator business", "creator operating model", "creator business management", "creator back office", "creator business operating system", "central system creator business"],
    related: ["creator-operations-checklist", "creator-business-sops", "creator-workflow-automation"],
    body: [
      {
        type: "paragraph",
        text: "Most creators don't lose money because their content is weak. They lose it in the gaps: a brand email that sat unanswered for nine days, a reel that went live without the approved caption, an invoice nobody sent, an editor waiting two days for feedback. Those gaps are operations problems, and they get worse as the business grows.",
      },
      {
        type: "paragraph",
        text: "This guide is the starting point for Kudozz's creator operations section. It explains the operating model; the pages it links to go deeper on SOPs, projects, tasks, automation and the brand-deal workflow.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator operations is everything that turns ideas and opportunities into delivered, paid work, reliably and without you holding every detail in your head. In practice it means running a small set of connected business systems (content production, brand deals, delivery and approvals, client relationships, finance, owned audience, team and vendors, and protection and records), each with a clear owner, a place where its information lives and a regular review. Start by fixing the one system that leaks the most time or money, document it, then organise, automate and measure it.",
      },
      { type: "heading", text: "What operations covers, and what it doesn't", id: "scope" },
      {
        type: "paragraph",
        text: "Strategy decides what you make and who it's for. Craft decides how good it is. Operations decides whether it ships on time, whether the brand gets what it signed for and whether the money arrives. A creator can have strong strategy and craft and still feel permanently behind, because the operating layer was never built. It usually grew by accident: a notes app, three WhatsApp chats, an inbox and memory.",
      },
      { type: "heading", text: "The eight business systems every creator runs", id: "systems" },
      {
        type: "paragraph",
        text: "A system is a repeatable way of getting one kind of work done: the steps, the tool where it's tracked, the person responsible and the check that tells you it's working. You already run all eight, even if some of them are informal.",
      },
      {
        type: "table",
        headers: ["System", "What it does", "Where it usually lives", "Signal it's broken"],
        rows: [
          ["Content production", "Takes ideas to published posts", "Content board, calendar, shared drive", "Publishing depends on a good week"],
          ["Brand deals (sales)", "Finds, qualifies and closes partnerships", "Pipeline and CRM", "Income swings with your inbox"],
          ["Delivery and approvals", "Delivers what was agreed, on time", "Campaign tracker, approval records", "Missed dates, surprise revisions"],
          ["Client relationships", "Keeps brands and clients coming back", "CRM notes, account notes", "Few repeat or retainer clients"],
          ["Finance", "Invoices, collects, tracks tax and costs", "Invoice log, income tracker, bank", "Late payments nobody chased"],
          ["Owned audience", "Moves followers to email, community or site", "Email tool, community, website", "All reach depends on one app"],
          ["Team and vendors", "Briefs, reviews and pays helpers", "Task tool, SOPs, contracts", "You redo delegated work"],
          ["Protection and records", "Keeps accounts, files and rights safe", "Password manager, backups, contract folder", "You can't find a signed contract"],
        ],
      },
      {
        type: "paragraph",
        text: "Each system has a deeper guide: the brand-deal workflow and campaign tracker in creator workflow, pipeline stages in the brand partnership pipeline, contacts in creator CRM, and money in the creator income tracker. The point of seeing them together is to spot which one is weakest.",
        links: [
          { text: "creator workflow", href: "/blog/creator-workflow" },
          { text: "brand partnership pipeline", href: "/blog/creator-brand-partnership-pipeline" },
          { text: "creator CRM", href: "/blog/creator-crm" },
          { text: "creator income tracker", href: "/blog/creator-income-tracker" },
        ],
      },
      {
        type: "image",
        src: "/blog/creator-resources/creator-operations-systems.svg",
        alt: "Diagram of eight creator business systems around a shared source of truth: content production, brand deals, delivery and approvals, client relationships, finance, owned audience, team and vendors, protection and records",
        caption: "Eight systems, one source of truth. Each system hands information to the next.",
        width: 1200,
        height: 675,
      },
      { type: "heading", text: "How the systems connect", id: "connections" },
      {
        type: "paragraph",
        text: "The systems break at the handoffs. A deal closes in your inbox but never reaches the content calendar. A campaign goes live but the invoice step isn't triggered. A freelancer finishes an edit but nobody knows the brand's approval deadline. Map the handoffs explicitly:",
      },
      {
        type: "list",
        items: [
          "Signed deal → deliverables and dates added to the calendar and campaign tracker the same day.",
          "Brand approval received → approval saved with the file, post scheduled.",
          "Post live → live link and screenshots saved, report date set, invoice sent.",
          "Invoice sent → payment due date tracked, follow-up reminder set.",
          "Campaign closed → results added to the case study file and CRM notes updated.",
        ],
      },
      {
        type: "paragraph",
        text: "Handoffs that happen the same way every time are the best candidates for automation later. Creator workflow automation covers which ones to automate first.",
        links: [{ text: "Creator workflow automation", href: "/blog/creator-workflow-automation" }],
      },
      { type: "heading", text: "An operating rhythm", id: "rhythm" },
      {
        type: "paragraph",
        text: "Systems need a heartbeat. Without scheduled reviews, even good tools decay into lists nobody trusts. This rhythm takes roughly two to three hours a week for a solo creator.",
      },
      {
        type: "table",
        headers: ["Cadence", "Time", "What you review"],
        rows: [
          ["Daily", "15 minutes", "Inbox and DMs for brand enquiries, today's tasks, anything waiting on you"],
          ["Weekly", "60–90 minutes", "Content board, campaign deadlines, pipeline follow-ups, unpaid invoices, team questions"],
          ["Monthly", "2 hours", "Income vs forecast, expenses, content performance, pipeline health, what broke"],
          ["Quarterly", "Half a day", "Business plan, rates, tools, which system to improve next"],
        ],
      },
      { type: "heading", text: "Operations at each stage", id: "stages" },
      {
        type: "paragraph",
        text: "You don't need company-grade operations to post twice a week. Build for the stage you're in and the next one, not three stages ahead.",
      },
      {
        type: "table",
        headers: ["Stage", "Typical setup", "Operations priority"],
        rows: [
          ["Solo creator", "One person, a spreadsheet, a notes app", "One tracker for deals and invoices; a simple content board"],
          ["Solo with freelancers", "Editor or designer on a per-piece basis", "Briefs, file handoffs, feedback turnaround, freelancer payments"],
          ["Small team", "Two to five regular people", "SOPs, a shared task tool, clear owners, weekly team check-in"],
          ["Professional creator business", "Manager or producer, several revenue lines", "Pipeline reporting, finance controls, access management, backups"],
          ["Creator-led company", "Multiple channels, products or clients", "Department owners, dashboards, documented decisions, continuity plans"],
        ],
      },
      { type: "heading", text: "From chaos to systems in five steps", id: "steps" },
      { type: "subheading", text: "1. Take an inventory" },
      {
        type: "paragraph",
        text: "For two weeks, write down every recurring task and where its information lives. Most creators find the same data in four places: the brand's email, a WhatsApp chat, a notes app and memory.",
      },
      { type: "subheading", text: "2. Find the most expensive leak" },
      {
        type: "paragraph",
        text: "Rank problems by cost: missed income first (unanswered enquiries, unsent invoices, unpaid work), then missed deadlines, then wasted hours. Fix one system at a time.",
      },
      { type: "subheading", text: "3. Document the process" },
      {
        type: "paragraph",
        text: "Write the steps down in a one-page SOP before choosing software. A clear process in a spreadsheet beats a vague one in an expensive tool. Creator business SOPs has a format and the fifteen processes most worth documenting.",
        links: [{ text: "Creator business SOPs", href: "/blog/creator-business-sops" }],
      },
      { type: "subheading", text: "4. Give it one home and one owner" },
      {
        type: "paragraph",
        text: "Pick a single source of truth for each system and name who keeps it current, even if that's you. Creator project management and creator task management cover how to organise the work itself.",
        links: [
          { text: "Creator project management", href: "/blog/creator-project-management" },
          { text: "creator task management", href: "/blog/creator-task-management" },
        ],
      },
      { type: "subheading", text: "5. Automate the repeatable parts, then measure" },
      {
        type: "paragraph",
        text: "Only automate steps that already work manually. Then track one or two operating metrics per system so you can tell whether it's improving.",
      },
      { type: "heading", text: "Operating metrics worth tracking", id: "metrics" },
      {
        type: "table",
        headers: ["Metric", "What it tells you"],
        rows: [
          ["Reply time to brand enquiries", "Whether opportunities are dying in your inbox"],
          ["On-time delivery rate", "Whether your production capacity matches your commitments"],
          ["Revision rounds per campaign", "Whether briefs and approvals are clear upfront"],
          ["Days from posting to payment", "Whether invoicing and follow-up are working"],
          ["Hours per finished video or post", "Whether production is getting more efficient"],
          ["Share of income from repeat clients", "Whether relationships are being looked after"],
        ],
      },
      {
        type: "paragraph",
        text: "These sit alongside content and revenue numbers on your creator analytics dashboard.",
        links: [{ text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" }],
      },
      { type: "heading", text: "Worked example", id: "example" },
      {
        type: "paragraph",
        text: "A Pune-based personal finance creator posts three reels and one YouTube video a week and closes two or three brand deals a month. Her problems: two invoices went unpaid for 70 days because she forgot to follow up, and her editor regularly waited for scripts. The inventory showed deal details spread across Gmail, Instagram DMs and WhatsApp. She moved every deal into one tracker with an \"invoice sent\" and \"payment due\" column, set a weekly Friday review, and agreed a Monday script deadline with her editor. Nothing about her content changed; her average days to payment and her editor's idle time both dropped within two months.",
      },
      {
        type: "paragraph",
        text: "The example is illustrative, but the pattern is common: the fix was a single source of truth and a rhythm, not new software.",
      },
      { type: "heading", text: "Your business operating system: one central hub", id: "operating-system" },
      {
        type: "paragraph",
        text: "A business operating system is the single place from which the eight systems are run: one hub that links your pipeline, content board, campaign tracker, calendar, finances, SOP library and file structure. It can be a workspace tool or a well-organised set of linked spreadsheets and folders; what matters is that everyone starts there.",
      },
      {
        type: "table",
        headers: ["Hub section", "Links to"],
        rows: [
          ["Today and this week", "Task board, master calendar"],
          ["Brand deals", "CRM and pipeline, campaign tracker"],
          ["Content", "Idea bank, production board, content calendar"],
          ["Money", "Invoice log, income tracker, monthly profit and loss"],
          ["Team", "SOP library, access register, contacts"],
          ["Files", "Folder structure, brand asset kit, backups status"],
        ],
      },
      {
        type: "paragraph",
        text: "The pieces are covered in creator business SOPs, creator file management and creator bookkeeping.",
        links: [
          { text: "creator business SOPs", href: "/blog/creator-business-sops" },
          { text: "creator file management", href: "/blog/creator-file-management" },
          { text: "creator bookkeeping", href: "/blog/creator-bookkeeping" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Buying tools before defining the process they should support.",
          "Building company-grade systems for a one-person business.",
          "Keeping the same information in several places with no single source of truth.",
          "Setting up a system and never reviewing it.",
          "Treating operations as admin to squeeze in, rather than work that protects income.",
          "Automating a process that doesn't yet work manually.",
        ],
      },
      {
        type: "paragraph",
        text: "To see where your own gaps are, work through the creator operations checklist; it scores 30 processes across six areas of the business.",
        links: [{ text: "creator operations checklist", href: "/blog/creator-operations-checklist" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Running a content business like a company doesn't mean adding layers. It means knowing your eight systems, giving each one a home and an owner, reviewing them on a steady rhythm and improving the weakest one first. Good operations are mostly invisible: brands get what they signed for, invoices get paid and you get your time back for the work only you can do.",
      },
    ],
    faqs: [
      {
        question: "What is creator operations?",
        answer:
          "Creator operations is the set of systems that turn content ideas and brand opportunities into delivered, paid work: production, brand deals, delivery and approvals, client relationships, finance, owned audience, team and vendors, and protection and records.",
      },
      {
        question: "What business systems does a creator need?",
        answer:
          "Most professional creators run eight: content production, brand deals, delivery and approvals, client relationships, finance, owned audience, team and vendors, and protection and records. Early on, each can be a simple spreadsheet or document; what matters is a single source of truth and a regular review.",
      },
      {
        question: "Do solo creators need operations?",
        answer:
          "Yes, but lightly. A single tracker for deals and invoices, a content board and a weekly review covers most solo creators. Add structure as freelancers and team members join.",
      },
      {
        question: "What's the difference between creator operations and a creator workflow?",
        answer:
          "Operations is the whole operating model across the business. A workflow is the sequence of steps inside one part of it, such as taking a brand deal from enquiry to payment.",
      },
    ],
  },
  {
    slug: "creator-workflow-automation",
    category: "Creator Resources",
    title: "Creator Workflow Automation: How to Automate Repetitive Business Tasks",
    seoTitle: "Creator Workflow Automation: What to Automate and How",
    excerpt:
      "Which creator business tasks are worth automating, 20 repeatable tasks across enquiries, production, publishing, invoicing and reporting, how to design an automation with a human checkpoint, and what creators should never automate.",
    metaDescription:
      "Creator workflow automation: 20 repetitive tasks creators can automate, how to design a safe automation, human checkpoints and what never to automate.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator workflow automation", "automate creator business", "tasks creators can automate", "creator automation", "automate brand deal admin", "automation ideas for creators"],
    related: ["no-code-automation-creators", "creator-operations", "creator-tech-stack"],
    body: [
      {
        type: "paragraph",
        text: "Every creator business has tasks that happen the same way every time: logging a new brand enquiry, sending the media kit, reminding yourself to follow up on an invoice, moving a finished edit into the review folder. Each takes two minutes. Together they eat hours a week, and they're the tasks most likely to be forgotten on a busy day.",
      },
      {
        type: "paragraph",
        text: "This guide covers what to automate and how to design automations that don't break things. How to connect specific tools is in no-code automation for creators.",
        links: [{ text: "no-code automation for creators", href: "/blog/no-code-automation-creators" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Automate tasks that are frequent, rule-based and low-risk if they go wrong: logging enquiries, filing assets, sending reminders, creating recurring tasks, collecting report data and routing notifications. Keep a human checkpoint on anything that speaks for you publicly, commits you to a brand, sends money or touches your accounts. Start with one automation, run it alongside the manual process for two weeks, then remove the manual step.",
      },
      { type: "heading", text: "What makes a task worth automating", id: "criteria" },
      {
        type: "table",
        headers: ["Question", "Automate if…"],
        rows: [
          ["How often does it happen?", "Weekly or more"],
          ["Is it the same every time?", "The steps follow clear rules"],
          ["What happens if it goes wrong?", "Easy to spot and fix; nobody outside sees it"],
          ["Does it need judgement or your voice?", "No"],
          ["Is the process already working manually?", "Yes; automation copies a process, it doesn't fix one"],
        ],
      },
      { type: "heading", text: "20 creator tasks you can automate", id: "tasks" },
      { type: "subheading", text: "Enquiries and pipeline" },
      {
        type: "list",
        items: [
          "Add a row to your CRM or tracker when an enquiry form is submitted.",
          "Label and file brand emails that match your collaboration keywords.",
          "Send an acknowledgement with your media kit link to form enquiries (reviewed template, not a quote).",
          "Create a follow-up reminder three working days after a proposal is sent.",
        ],
      },
      { type: "subheading", text: "Production" },
      {
        type: "list",
        items: [
          "Create the standard task set (script, shoot, edit, review, schedule) when a new content card is added.",
          "Notify your editor when raw footage lands in the shared folder.",
          "Move a card to \"ready for review\" when the edit is uploaded, and notify you.",
          "Generate a first-draft transcript or captions file for review.",
        ],
      },
      { type: "subheading", text: "Publishing and distribution" },
      {
        type: "list",
        items: [
          "Schedule approved posts with the platform's own scheduler or an approved scheduling tool.",
          "Post a new-video announcement to your email draft or community channel for you to review.",
          "Save live links to the campaign tracker when a post is published.",
        ],
      },
      { type: "subheading", text: "Finance" },
      {
        type: "list",
        items: [
          "Create an invoice draft from the campaign row when status changes to \"live\".",
          "Remind you when an invoice passes its due date.",
          "Log payments into your income tracker from your payment gateway's reports.",
          "Save receipts forwarded to a dedicated email address into a monthly folder for your accountant.",
        ],
      },
      { type: "subheading", text: "Reporting and admin" },
      {
        type: "list",
        items: [
          "Create a report-due task seven days after a campaign goes live.",
          "Pull monthly platform numbers into your dashboard where an integration exists.",
          "Back up key folders on a schedule.",
          "Create recurring weekly and monthly review tasks.",
          "Remind you to remove a freelancer's access when their project closes.",
        ],
      },
      { type: "heading", text: "How to design an automation", id: "design" },
      {
        type: "template",
        label: "Automation design card",
        text: "Name: Proposal follow-up reminder\nTrigger: Tracker status changes to \"Proposal sent\"\nAction: Create task \"Follow up with [brand]\" due in 3 working days\nHuman checkpoint: I write and send the follow-up myself\nFailure check: Weekly review lists proposals older than 7 days with no follow-up\nOwner: Me\nReviewed: Quarterly",
      },
      {
        type: "paragraph",
        text: "Write this card before building anything. If you can't name the trigger or the failure check, the task isn't ready to automate.",
      },
      { type: "heading", text: "Human checkpoints", id: "checkpoints" },
      {
        type: "paragraph",
        text: "Automations are fast and literal. Put a person between the automation and anything that's hard to undo:",
      },
      {
        type: "list",
        items: [
          "Anything published under your name, including captions and replies.",
          "Anything that quotes a rate, accepts terms or commits to a deadline.",
          "Anything that moves money or sends an invoice to a client.",
          "Anything that changes account settings or access.",
          "Sponsored content: disclosure labels and approved copy must be checked by a person.",
        ],
      },
      {
        type: "paragraph",
        text: "What a correct disclosure looks like on each platform is covered in the creator disclosure guide.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }],
      },
      { type: "heading", text: "What not to automate", id: "dont" },
      {
        type: "list",
        items: [
          "Replies to comments and DMs that pretend to be you. Audiences notice, and platforms restrict automated engagement.",
          "Negotiation, pricing and saying no to brands.",
          "Following, liking or commenting at scale; this can breach platform rules and damage trust.",
          "Anything requiring you to share passwords with a third-party tool that doesn't use official connections.",
        ],
      },
      { type: "heading", text: "A four-week rollout", id: "rollout" },
      {
        type: "table",
        headers: ["Week", "Step"],
        rows: [
          ["1", "List repetitive tasks for a week; score each on frequency and risk"],
          ["2", "Build the single highest-value, lowest-risk automation; run it alongside the manual step"],
          ["3", "Check every run; fix edge cases; write the design card"],
          ["4", "Retire the manual step; pick the next automation"],
        ],
      },
      { type: "heading", text: "Automation by stage", id: "stages" },
      {
        type: "table",
        headers: ["Stage", "Sensible automation"],
        rows: [
          ["Solo creator", "Built-in reminders, email filters, platform schedulers, recurring tasks"],
          ["With freelancers", "Folder notifications, review-ready alerts, standard task templates"],
          ["Small team", "Tracker-to-calendar sync, invoice drafts, report-due tasks"],
          ["Professional business", "Connected CRM, finance and reporting; monitored multi-step automations"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Automating before the manual process is clear.",
          "No failure check, so a broken automation goes unnoticed for weeks.",
          "Letting automations speak publicly for you.",
          "Building long chains that nobody else understands.",
          "Connecting tools through unofficial logins that put accounts at risk.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good creator automation removes the forgettable steps, not the judgement. Pick frequent, rule-based, low-risk tasks, keep a person on anything public, financial or contractual, and add one automation at a time. For the wider system these automations sit in, see creator operations.",
        links: [{ text: "creator operations", href: "/blog/creator-operations" }],
      },
    ],
    faqs: [
      {
        question: "What can creators automate?",
        answer:
          "Frequent, rule-based tasks such as logging enquiries, filing assets, creating recurring tasks, invoice and follow-up reminders, saving live links, backups and report-due tasks.",
      },
      {
        question: "Should creators automate comments and DMs?",
        answer:
          "Generally no. Automated replies that sound like you can erode trust, and platforms restrict automated engagement. Filters and saved replies you send yourself are safer.",
      },
      {
        question: "Where should a creator start with automation?",
        answer:
          "With one high-frequency, low-risk task, usually logging brand enquiries or a follow-up reminder. Run it alongside the manual step for two weeks before relying on it.",
      },
    ],
  },
  {
    slug: "creator-project-management",
    category: "Creator Resources",
    title: "Creator Project Management: How to Run Launches, Series and Multi-Deliverable Campaigns",
    seoTitle: "Creator Project Management: Launches, Series and Campaigns",
    excerpt:
      "How creators manage projects with several steps, people and deadlines: when work is a project, scoping, working back from the deadline, milestones and dependencies, a project board template, choosing a project management tool, and a worked campaign example.",
    metaDescription:
      "Creator project management for launches, series and multi-deliverable campaigns: scope, milestones, dependencies, a board template and choosing tools.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator project management", "creator project management tools", "manage content projects", "campaign project plan creator", "project board for creators", "creator launch plan"],
    related: ["creator-task-management", "creator-operations", "creator-workflow"],
    body: [
      {
        type: "paragraph",
        text: "A single reel is a task. A six-deliverable campaign with a brand, a product launch with a waitlist, or a ten-episode YouTube series is a project: several people, dependencies and a deadline that can't move. Projects fail differently from tasks. They rarely fail on the last day; they fail three weeks earlier, when a step nobody owned quietly slipped.",
      },
      {
        type: "paragraph",
        text: "This guide covers managing projects. Day-to-day execution is in creator task management, and the standard brand deal stages are in creator workflow.",
        links: [
          { text: "creator task management", href: "/blog/creator-task-management" },
          { text: "creator workflow", href: "/blog/creator-workflow" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Treat work as a project when it has several deliverables, more than one person, or steps that depend on each other. Define the scope and the fixed deadline, work backwards to set milestones, identify dependencies (approvals, product delivery, shoot days), give every milestone an owner, track it on one board and review it weekly. A spreadsheet or free board is enough for most creators; move to a dedicated tool when several people and projects overlap.",
      },
      { type: "heading", text: "Is it a project or a task?", id: "project-or-task" },
      {
        type: "table",
        headers: ["Signal", "Task", "Project"],
        rows: [
          ["Deliverables", "One", "Several, often linked"],
          ["People involved", "Usually you", "You plus editor, brand, designer or others"],
          ["Duration", "Hours or a day", "Weeks"],
          ["Dependencies", "Few", "Approvals, shipping, shoot dates, launches"],
          ["Examples", "Film a reel, reply to a brand", "Brand campaign, course launch, series, event"],
        ],
      },
      { type: "heading", text: "Step 1: Write a one-page scope", id: "scope" },
      {
        type: "template",
        label: "Project scope (one page)",
        text: "Project: [Brand] Diwali campaign\nGoal: 1 YouTube integration + 3 reels + 2 story sets, live 20 Oct–5 Nov\nFixed dates: Product arrives by 1 Oct; brand approval 3 working days per asset\nOut of scope: Extra reels, paid usage beyond 30 days (quoted separately)\nPeople: Me (script, shoot), editor, brand contact, designer (thumbnail)\nBudget and costs: Fee agreed; props ₹4,000; editor fee per piece\nDone means: All assets live, report sent, invoice paid",
      },
      {
        type: "paragraph",
        text: "The \"out of scope\" line prevents most campaign scope creep. For the brand-facing version of this, see creator deliverables.",
        links: [{ text: "creator deliverables", href: "/blog/creator-deliverables" }],
      },
      { type: "heading", text: "Step 2: Work back from the deadline", id: "work-back" },
      {
        type: "paragraph",
        text: "Start at the go-live date and walk backwards, adding realistic time for approvals and buffer. Brands usually take longer to approve than the contract says, especially around festive periods when their teams are running many campaigns at once.",
      },
      {
        type: "table",
        headers: ["Milestone", "Date", "Owner", "Depends on"],
        rows: [
          ["Product received", "1 Oct", "Brand", "Shipping"],
          ["Scripts sent for approval", "4 Oct", "Me", "Product received"],
          ["Scripts approved", "8 Oct", "Brand", "Scripts sent"],
          ["Shoot day", "10 Oct", "Me", "Scripts approved"],
          ["First edits ready", "14 Oct", "Editor", "Shoot"],
          ["Final approval", "17 Oct", "Brand", "Edits"],
          ["Go live (first asset)", "20 Oct", "Me", "Final approval"],
          ["Report and invoice", "12 Nov", "Me", "Last asset live + 7 days"],
        ],
      },
      { type: "heading", text: "Step 3: Map dependencies and the critical path", id: "dependencies" },
      {
        type: "paragraph",
        text: "The critical path is the chain of steps where any delay moves the deadline. In creator projects it almost always runs through external approvals and physical things: product delivery, location access, a guest's availability. Flag those early, ask for them in writing, and agree what happens to dates if the other side is late.",
      },
      { type: "heading", text: "Step 4: One board, reviewed weekly", id: "board" },
      {
        type: "paragraph",
        text: "Use columns for status (Not started, In progress, Waiting on someone, In review, Done) and one card per deliverable. The \"waiting on someone\" column is the most important: it shows at a glance what's blocked and by whom. Review the board every week and before every brand call.",
      },
      { type: "heading", text: "Project types creators run", id: "types" },
      {
        type: "table",
        headers: ["Project", "Watch for"],
        rows: [
          ["Multi-deliverable brand campaign", "Approval delays, usage and exclusivity dates, report deadline"],
          ["Product or course launch", "Tech setup, payment testing, email sequence, launch-week capacity"],
          ["Content series", "Consistent format, shoot batching, thumbnail and title set"],
          ["Event or meetup", "Venue, registrations, sponsor deliverables, safety"],
          ["Channel or website rebuild", "Scope creep; keep a list of phase-two ideas"],
        ],
      },
      {
        type: "paragraph",
        text: "Launch projects have their own checklists in how to launch a digital product and creator course launch.",
        links: [
          { text: "how to launch a digital product", href: "/blog/launch-digital-product-creators" },
          { text: "creator course launch", href: "/blog/creator-course-launch" },
        ],
      },
      { type: "heading", text: "Project management tools", id: "tools" },
      {
        type: "paragraph",
        text: "The tool matters less than having one. Choose by how many people and projects overlap, not by feature lists.",
      },
      {
        type: "table",
        headers: ["Option", "Good for", "Limitations"],
        rows: [
          ["Spreadsheet (Google Sheets, Excel)", "Solo creators, one or two projects, sharing with brands", "Weak on dependencies and notifications"],
          ["Kanban board tools (such as Trello)", "Visual status, small teams, simple checklists", "Can get cluttered across many projects"],
          ["All-in-one workspaces (such as Notion)", "Projects linked to scripts, SOPs and a content database", "Takes setup time; easy to over-build"],
          ["Work management tools (such as Asana, ClickUp)", "Several people, overlapping projects, timelines and dependencies", "Learning curve; paid tiers for advanced features"],
        ],
      },
      {
        type: "paragraph",
        text: "Most of these offer free plans with limits on users or features, and plans change often; check current pricing before committing, and prefer a tool your editor or manager already knows. How project tools fit with your CRM, calendar and finance tools is covered in the creator tech stack guide.",
        links: [{ text: "creator tech stack", href: "/blog/creator-tech-stack" }],
      },
      { type: "heading", text: "Worked example: when the product arrives late", id: "example" },
      {
        type: "paragraph",
        text: "In the campaign above, the product arrives on 6 October instead of 1 October. Because the plan shows the critical path, the creator can see immediately that go-live moves unless something shrinks. She emails the brand the same day with two options: keep 20 October by approving scripts within one working day, or move go-live to 25 October. The brand chooses the faster approval. Without the plan, the delay would have surfaced on shoot day as a crisis.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "No written scope, so extra deliverables creep in.",
          "Planning forwards from today instead of backwards from the deadline.",
          "Assuming brand approvals will arrive on time.",
          "Milestones with no named owner.",
          "Tracking the project in chat threads instead of one board.",
          "Choosing a complex tool for a two-person project.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator project management is about seeing slippage early. Write a scope, work back from the deadline, name owners, flag dependencies and review one board every week. Keep the tool simple until the number of people and overlapping projects forces you to upgrade.",
      },
    ],
    faqs: [
      {
        question: "What is creator project management?",
        answer:
          "Planning and tracking work that has several deliverables, people or dependent steps, such as a brand campaign, a product launch or a content series, using a scope, milestones, owners and a single board.",
      },
      {
        question: "What's the best project management tool for creators?",
        answer:
          "There isn't one best tool. A spreadsheet or free board works for most solo creators; work management tools help when several people and projects overlap. Choose the simplest tool your team will actually keep updated.",
      },
      {
        question: "How do creators handle delays from brands?",
        answer:
          "Put approval times and product delivery dates in writing, track them as dependencies, and when something is late, offer the brand clear options: faster approvals or a new go-live date.",
      },
    ],
  },
  {
    slug: "creator-task-management",
    category: "Creator Resources",
    title: "Creator Task Management: How to Organize Your Daily Content Business",
    seoTitle: "Creator Task Management: Organise Your Daily Work",
    excerpt:
      "A practical task management system for creators: capturing tasks from DMs and email, a single task list, prioritising by deadline and income, time blocking creative and admin work, a daily and weekly routine, and handling brand requests without losing the day.",
    metaDescription:
      "Creator task management: capture tasks from DMs and email, prioritise by deadline and income, time-block creative and admin work and plan each week.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["creator task management", "creator productivity", "to-do list for creators", "time blocking creators", "organize creator work", "daily routine content creator"],
    related: ["creator-project-management", "creator-content-calendar", "content-batching-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "A creator's to-do list arrives from everywhere: a brand's email asking for a revised caption, an editor's WhatsApp about a missing clip, a comment asking for a follow-up video, your own 2 a.m. idea. If those tasks live in five apps, the urgent ones win and the important ones slip.",
      },
      {
        type: "paragraph",
        text: "This guide is about daily and weekly execution. Bigger multi-week work is covered in creator project management.",
        links: [{ text: "creator project management", href: "/blog/creator-project-management" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Capture every task into one list the moment it appears, clarify each one into a next action with a due date, and prioritise by hard deadlines first, then income, then growth work. Protect creative time with calendar blocks, batch admin into one or two short slots a day, and run a 30-minute weekly plan to choose the few tasks that matter most.",
      },
      { type: "heading", text: "The four-step task loop", id: "loop" },
      {
        type: "table",
        headers: ["Step", "What it means", "Creator example"],
        rows: [
          ["Capture", "Get it out of chats and your head into one list", "Brand asks for a caption change on WhatsApp → task"],
          ["Clarify", "Turn it into a specific next action", "\"Caption\" → \"Send revised caption v2 to Neha\""],
          ["Prioritise", "Decide what happens today, this week, later", "Due tomorrow, contracted → today"],
          ["Do and review", "Work the list, then check it daily and weekly", "Tick off; move anything waiting on others"],
        ],
      },
      { type: "heading", text: "Where tasks come from, and how to catch them", id: "capture" },
      {
        type: "list",
        items: [
          "Email: star or label anything needing action, then move it to the list during your admin slot.",
          "WhatsApp and DMs: forward or screenshot into your list; don't rely on unread badges.",
          "Brand calls: write action items during the call and confirm them by email afterwards.",
          "Your own ideas: send them to an idea bank, not the task list, until you decide to make them.",
          "Team: agree that requests to you go into the shared task tool, not private chats.",
        ],
      },
      { type: "heading", text: "How to prioritise creator tasks", id: "prioritise" },
      {
        type: "paragraph",
        text: "Creators juggle three kinds of work with different pay-offs: committed work (contracted deliverables and deadlines), income work (pitching, invoicing, following up) and growth work (new formats, products, learning). A simple order keeps all three moving:",
      },
      {
        type: "list",
        items: [
          "1. Hard deadlines you've committed to (brand go-live dates, approval replies, payments due).",
          "2. Anything blocking someone else (your editor waiting for a script, a brand waiting for a draft).",
          "3. Income tasks (sending invoices, following up on proposals and late payments).",
          "4. Your core content for the week.",
          "5. Growth work, scheduled as a fixed block so it doesn't always lose.",
        ],
      },
      { type: "heading", text: "Time blocking creative and admin work", id: "time-blocking" },
      {
        type: "paragraph",
        text: "Scripting and editing need long, uninterrupted blocks; admin is short and scattered. Mixing them costs you both. Put creative work in your best hours and keep admin to fixed windows.",
      },
      {
        type: "template",
        label: "Sample weekday (illustrative)",
        text: "09:30–10:00  Admin window 1: inbox, DMs, brand replies, today's list\n10:00–13:00  Creative block: script, shoot or edit (phone on silent)\n13:00–14:00  Break\n14:00–16:00  Second block: production or brand deliverables\n16:00–16:45  Admin window 2: approvals, invoices, follow-ups, team questions\n16:45–17:00  Plan tomorrow",
      },
      {
        type: "paragraph",
        text: "Shoot days and editing days work well batched; see content batching for creators. Deadlines, campaign dates and shoot days belong on the master calendar described in the creator content calendar guide, and the task list holds the steps.",
        links: [
          { text: "content batching for creators", href: "/blog/content-batching-for-creators" },
          { text: "creator content calendar", href: "/blog/creator-content-calendar" },
        ],
      },
      { type: "heading", text: "The weekly plan (30 minutes)", id: "weekly-plan" },
      {
        type: "template",
        label: "Weekly plan",
        text: "1. Empty every inbox and chat into the task list\n2. Check the calendar: brand deadlines, shoots, approvals due\n3. Check projects: any milestones this week?\n4. Pick 3 priorities for the week (at least one income task)\n5. Block creative time for each priority\n6. Move \"waiting on\" items; send nudges\n7. Delete or defer anything that no longer matters",
      },
      { type: "heading", text: "Handling brand requests without losing the day", id: "brand-requests" },
      {
        type: "paragraph",
        text: "Brand requests feel urgent because a client is waiting. Most aren't. Acknowledge quickly (\"Got it, I'll send the revised caption by 4 p.m.\"), then do it in your next admin window. Reserve same-hour responses for genuinely time-critical items like a post that went live with an error. If revisions keep arriving outside the agreed scope, the fix is in your revision policy; see brand content approval and revisions.",
        links: [{ text: "brand content approval and revisions", href: "/blog/creator-brand-revisions" }],
      },
      { type: "heading", text: "Task lists for different setups", id: "setups" },
      {
        type: "table",
        headers: ["Setup", "What works"],
        rows: [
          ["Solo creator", "One app or notebook; a daily list and a weekly plan"],
          ["Creator plus freelancers", "Shared board for handoffs; your personal list for everything else"],
          ["Small team", "One shared task tool; each task has an owner and due date; no tasks assigned in chat"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Keeping tasks in chat threads and relying on unread badges.",
          "Writing vague tasks (\"brand stuff\") instead of next actions.",
          "Letting admin fill your best creative hours.",
          "A daily list with 25 items and no priorities.",
          "Never scheduling growth work, so it never happens.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Task management for creators comes down to one list, clear next actions, a priority order that protects deadlines and income, and time blocks that keep creative work safe from admin. Fifteen minutes a day and thirty minutes a week is enough to stay ahead.",
      },
    ],
    faqs: [
      {
        question: "How should content creators organise their tasks?",
        answer:
          "Capture every task into one list, turn each into a specific next action with a due date, prioritise committed deadlines and income tasks first, and time-block creative work separately from admin.",
      },
      {
        question: "What's the difference between task management and project management for creators?",
        answer:
          "Task management is daily and weekly execution of individual actions. Project management plans multi-week work with several deliverables, people and dependencies, such as a campaign or launch.",
      },
      {
        question: "How many tasks should a creator plan per day?",
        answer:
          "Fewer than you think: one or two creative priorities plus a short admin window usually beats a long list. Plan three priorities for the week and fit the rest around them.",
      },
    ],
  },
  {
    slug: "creator-operations-checklist",
    category: "Creator Resources",
    title: "Creator Operations Checklist: 30 Processes to Run Your Creator Business",
    seoTitle: "Creator Operations Checklist: 30 Processes to Review",
    excerpt:
      "An interactive creator operations checklist: 30 processes across brand deals, delivery, content production, finance, team and protection, with what 'in place' means for each, how to score your business and which gaps to fix first.",
    metaDescription:
      "Interactive creator operations checklist: score 30 processes across brand deals, delivery, content, finance, team and protection, then fix the gaps first.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "9 min read",
    tags: ["creator operations checklist", "creator business checklist", "creator process audit", "creator business systems checklist", "run a creator business checklist"],
    related: ["creator-operations", "creator-business-sops", "creator-business-continuity"],
    body: [
      {
        type: "paragraph",
        text: "It's hard to fix operations you can't see. This checklist turns the systems of a creator business into 30 concrete processes across six areas you can tick off, so you know exactly which gaps are costing you time or money.",
      },
      {
        type: "paragraph",
        text: "For the thinking behind the systems, read creator operations first. For how to write each process down, see creator business SOPs.",
        links: [
          { text: "creator operations", href: "/blog/creator-operations" },
          { text: "creator business SOPs", href: "/blog/creator-business-sops" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator operations checklist covers six areas: brand deals and pipeline, delivery and approvals, content production, finance, team and tools, and protection and records. Tick a process only if it happens the same way every time and someone other than you could follow it. Fix gaps in this order: anything that loses income, then anything that risks accounts or legal trouble, then anything that wastes time.",
      },
      { type: "heading", text: "How to use the checklist", id: "how-to-use" },
      {
        type: "list",
        items: [
          "Be strict: \"I usually remember\" isn't in place.",
          "In place means written down or built into a tool, and done consistently.",
          "Your ticks are saved in this browser only, so you can come back and update them.",
          "Re-run it every quarter, or when you add a person or revenue stream.",
        ],
      },
      { type: "heading", text: "The checklist", id: "checklist" },
      { type: "tool", tool: "creator-operations-checklist" },
      { type: "heading", text: "Reading your score", id: "score" },
      {
        type: "table",
        headers: ["Processes in place", "What it usually means", "Next step"],
        rows: [
          ["0–10", "Operations live in your head; growth will feel chaotic", "Fix finance and pipeline first; set a weekly review"],
          ["11–20", "The basics work; handoffs and records are patchy", "Document the processes you delegate; add backups"],
          ["21–27", "A professional operation with a few gaps", "Close protection and continuity gaps; automate repeat steps"],
          ["28–30", "Ready for a team to run parts without you", "Review quarterly; measure operating metrics"],
        ],
      },
      { type: "heading", text: "Which gaps to fix first", id: "priorities" },
      {
        type: "table",
        headers: ["Priority", "Gap type", "Examples"],
        rows: [
          ["1", "Losing income", "No invoice trigger, no payment follow-up, enquiries unanswered"],
          ["2", "Risk to accounts or legal position", "No two-factor authentication, no signed agreements, no disclosure check"],
          ["3", "Damaging client trust", "No approval record, missed go-live dates, no report"],
          ["4", "Wasting time", "No templates, no standard briefs, manual repeat steps"],
        ],
      },
      {
        type: "paragraph",
        text: "Account and legal gaps are covered in creator account security and the influencer contract guide; income gaps in how to handle late brand payments.",
        links: [
          { text: "creator account security", href: "/blog/creator-account-security" },
          { text: "influencer contract guide", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "how to handle late brand payments", href: "/blog/creators-handle-late-brand-payments" },
        ],
      },
      { type: "heading", text: "What the checklist looks like at each stage", id: "stages" },
      {
        type: "table",
        headers: ["Stage", "Realistic target"],
        rows: [
          ["Early solo creator", "Finance, pipeline and protection basics (around 12–15)"],
          ["Full-time solo creator", "Most processes except team ones (around 20–24)"],
          ["Creator with a team", "All 30, with owners named for each"],
        ],
      },
      {
        type: "paragraph",
        text: "Not every creator needs all 30. If you don't work with freelancers yet, skip the team items and come back to them before your first hire.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Ticking processes that work only when you remember them.",
          "Trying to fix all gaps in one weekend.",
          "Skipping protection items because nothing has gone wrong yet.",
          "Never re-running the checklist as the business changes.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A checklist won't run your business, but it shows where the cracks are. Score honestly, fix income and risk gaps first, and re-check every quarter. Pair it with the creator business continuity checklist to make sure the business can keep running on the weeks you can't.",
        links: [{ text: "creator business continuity", href: "/blog/creator-business-continuity" }],
      },
    ],
    faqs: [
      {
        question: "What should be on a creator operations checklist?",
        answer:
          "Processes across six areas: brand deals and pipeline, delivery and approvals, content production, finance, team and tools, and protection and records, such as enquiry logging, approval records, invoicing triggers, backups and two-factor authentication.",
      },
      {
        question: "How often should creators review their operations?",
        answer: "Quarterly, and whenever you add a team member, revenue stream or platform.",
      },
      {
        question: "Is my checklist data saved?",
        answer:
          "Your ticks are stored only in your own browser so you can return to them. Nothing is sent to Kudozz, and clearing your browser data removes them.",
      },
    ],
  },
];
