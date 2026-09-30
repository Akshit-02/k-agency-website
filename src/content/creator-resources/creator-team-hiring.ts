import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_9_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * Creator team and hiring (750–799 layer). Intent boundaries:
 * - creator-team-building (existing pillar): when to hire and in what order (absorbs "creator team" and "build a creator team")
 * - creator-team-roles: the role directory, incl. content manager and creator manager vs talent manager
 * - creator-assistant: what a creator VA does
 * - hire-video-editor-creator: hiring or outsourcing an editor (absorbs video editing outsourcing)
 * - hire-social-media-manager-creator: hiring or outsourcing social media management
 * - creator-team-compensation: pay structures (general information, not legal or tax advice)
 * - creator-team-management: running people day to day
 * creator-manager-vs-agency keeps representation choices.
 */
export const creatorTeamHiringPosts: BlogPost[] = [
  {
    slug: "creator-team-roles",
    category: "Creator Resources",
    title: "Creator Team Roles: 15 People You Can Hire as Your Business Grows",
    seoTitle: "Creator Team Roles: 15 Roles and When to Hire Each",
    excerpt:
      "The 15 roles creator businesses hire, what each one does, when it's worth it and how it's usually engaged, with clear differences between a freelancer, virtual assistant, editor, social media manager, content manager, creator manager and talent manager.",
    metaDescription:
      "15 creator team roles explained: what editors, VAs, social media managers, content managers, creator managers and talent managers do, and when to hire.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["creator team roles", "content manager for creators", "hire content manager", "creator manager vs talent manager", "creator business manager", "youtube team roles"],
    related: ["creator-team-building", "creator-manager-vs-agency", "creator-team-compensation"],
    body: [
      {
        type: "paragraph",
        text: "Job titles in the creator economy are loose. One person's \"manager\" books brand deals; another's runs the editing calendar. That confusion leads to bad hires: a creator who needed a producer hires a talent manager, or pays for a social media manager when the real bottleneck was editing.",
      },
      {
        type: "paragraph",
        text: "This page defines the roles. When to hire and in what order is covered in creator team building, and pay structures in creator team compensation.",
        links: [
          { text: "creator team building", href: "/blog/creator-team-building" },
          { text: "creator team compensation", href: "/blog/creator-team-compensation" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator teams are built from three groups of roles. Production roles make the content (video editor, videographer, photographer, thumbnail or graphic designer, scriptwriter or researcher). Operations roles keep the business running (virtual assistant, content manager or producer, community manager, social media manager, creator or business manager, accountant). Growth and representation roles bring in revenue (talent manager or agency, partnerships lead, product or commerce lead, legal adviser). Most creators only ever need three to five of these, usually as freelancers, and never all fifteen.",
      },
      { type: "heading", text: "The 15 roles at a glance", id: "roles" },
      {
        type: "table",
        headers: ["Role", "What they do", "Usually engaged as", "Worth it when"],
        rows: [
          ["Video editor", "Cuts, pacing, captions, platform versions", "Per piece or monthly retainer", "Editing is your biggest time sink"],
          ["Videographer", "Filming, lighting, sound on set", "Per shoot day", "Shoots are complex, outdoor or multi-camera"],
          ["Photographer", "Stills for posts, brands, portfolio", "Per shoot", "Visual niches: fashion, food, travel, beauty"],
          ["Thumbnail or graphic designer", "Thumbnails, carousels, templates", "Per design or monthly", "Design is weekly and affects clicks"],
          ["Scriptwriter or researcher", "Research, outlines, first drafts", "Per script or monthly", "Research-heavy formats: finance, tech, explainers"],
          ["Virtual assistant", "Inbox, scheduling, uploads, admin", "Hourly or monthly, often part-time", "Admin eats your creative hours"],
          ["Content manager or producer", "Runs the production pipeline and calendar", "Part-time or full-time", "Several people and formats need coordinating"],
          ["Community manager", "Comments, DMs, community spaces", "Part-time or monthly", "Engagement or a paid community outgrows you"],
          ["Social media manager", "Distribution, scheduling, cross-platform posting", "Monthly retainer", "You publish on several platforms"],
          ["Creator or business manager", "Day-to-day business operations and decisions", "Salary or retainer, sometimes plus share", "You run several revenue lines and a team"],
          ["Talent manager or agency", "Brand deals, negotiation, representation", "Commission on deals", "Deal flow or negotiation is the bottleneck"],
          ["Partnerships lead", "In-house brand sales and account management", "Salary plus incentive", "Brand revenue justifies a dedicated seller"],
          ["Product or commerce lead", "Digital products, merchandise, store operations", "Salary or project fee", "Products are a significant revenue line"],
          ["Accountant or CA", "Books, GST, TDS, filings, advice", "Monthly or annual fee", "Income, GST or team payments get complex"],
          ["Legal adviser", "Contracts, rights, disputes", "Per matter", "High-value, exclusive or long-term contracts"],
        ],
      },
      { type: "heading", text: "Roles people confuse", id: "confused-roles" },
      { type: "subheading", text: "Freelancer vs employee" },
      {
        type: "paragraph",
        text: "A freelancer is an independent contractor doing defined work for you and often for others; an employee works for you under your direction on an ongoing basis. The difference has tax and employment consequences, which are covered in creator team compensation.",
        links: [{ text: "creator team compensation", href: "/blog/creator-team-compensation" }],
      },
      { type: "subheading", text: "Virtual assistant vs content manager" },
      {
        type: "paragraph",
        text: "A virtual assistant does tasks you define: replying to routine emails, scheduling, uploading, research. A content manager (sometimes called a producer or head of content) owns the production pipeline itself: they plan shoots, brief editors, chase approvals and make sure the calendar ships. You tell a VA what to do; a content manager tells you what's due. The creator assistant guide goes deeper on VAs.",
        links: [{ text: "creator assistant guide", href: "/blog/creator-assistant" }],
      },
      { type: "subheading", text: "Social media manager vs community manager" },
      {
        type: "paragraph",
        text: "A social media manager focuses on getting content out: scheduling, platform versions, captions, analytics. A community manager focuses on the people who respond: comments, DMs, moderation and community spaces. Small creators often combine them; separate them when a paid community or large comment volume needs its own attention. See how to hire a social media manager.",
        links: [{ text: "how to hire a social media manager", href: "/blog/hire-social-media-manager-creator" }],
      },
      { type: "subheading", text: "Creator manager vs talent manager" },
      {
        type: "paragraph",
        text: "These titles overlap in the industry, so ask what the person will actually do. A talent manager represents you externally: brings in brand deals, negotiates and handles the commercial relationship, usually for a commission. A creator manager or business manager runs the business internally: operations, team, calendar, finances and decisions, usually for a salary or retainer. Some managers do both; if so, make sure the agreement says which work earns commission and which is covered by a fee. Representation options, including agencies and MCNs, are compared in creator manager vs agency.",
        links: [{ text: "creator manager vs agency", href: "/blog/creator-manager-vs-agency" }],
      },
      { type: "heading", text: "The content manager in more detail", id: "content-manager" },
      {
        type: "paragraph",
        text: "The content manager is the role creators most often hire too late. Signs you need one: you have an editor, a designer and brand deliverables, and you are the only person who knows what's due when; work waits for you to answer questions; you spend more time coordinating than creating.",
      },
      {
        type: "list",
        items: [
          "Owns the content calendar and production board.",
          "Briefs editors and designers and reviews first drafts against the brief.",
          "Tracks brand deliverables, approval dates and go-live dates.",
          "Runs the weekly production meeting.",
          "Maintains SOPs and templates for the production process.",
          "Reports on output, turnaround and bottlenecks.",
        ],
      },
      {
        type: "paragraph",
        text: "When hiring one, test for organisation and judgement more than editing skill: give a paid trial where they plan two weeks of content from a messy list of ideas, deadlines and constraints. How the role fits into a production team is covered in creator production team.",
        links: [{ text: "creator production team", href: "/blog/creator-production-team" }],
      },
      {
        type: "paragraph",
        text: "How talent managers should work with the creators they represent is covered in creator talent management.",
        links: [
          { text: "creator talent management", href: "/blog/creator-talent-management" },
        ],
      },
      { type: "heading", text: "Which roles fit which stage", id: "stages" },
      {
        type: "table",
        headers: ["Stage", "Typical roles"],
        rows: [
          ["Solo creator", "None, or a per-piece editor; an accountant at tax time"],
          ["Creator with freelancer support", "Editor, designer, VA, accountant"],
          ["Small creator team", "Editor(s), content manager, social or community manager"],
          ["Professional creator business", "Adds creator or business manager, partnerships lead or talent manager"],
          ["Creator-led company", "Department leads for content, partnerships, product and operations"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Hiring by title instead of by the task that's slowing you down.",
          "Expecting one person to be editor, designer, social manager and assistant.",
          "Giving a talent manager commission on income they didn't bring in, without meaning to.",
          "Hiring a manager before you have processes for them to manage.",
          "Copying a large YouTuber's team structure at a fraction of their revenue.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Define the work before the title. Most creator businesses need a small number of these roles, added one at a time as a bottleneck appears. Be especially clear about who represents you externally and who runs things internally, and put it in writing. Once people join, creator team management covers running the team day to day.",
        links: [{ text: "creator team management", href: "/blog/creator-team-management" }],
      },
    ],
    faqs: [
      {
        question: "What roles does a creator team need?",
        answer:
          "It depends on the bottleneck. Common first roles are a video editor, a designer and a virtual assistant; later a content manager, social or community manager, and a manager or agency for brand deals. Few creators need more than five roles.",
      },
      {
        question: "What's the difference between a creator manager and a talent manager?",
        answer:
          "A talent manager represents you externally and brings in and negotiates brand deals, usually for a commission. A creator or business manager runs internal operations, team and finances, usually for a salary or retainer. Some people do both, so define it in writing.",
      },
      {
        question: "What does a content manager do for a creator?",
        answer:
          "They run the production pipeline: owning the calendar, briefing editors and designers, tracking brand deliverables and approvals, and keeping content shipping on time.",
      },
    ],
  },
  {
    slug: "creator-assistant",
    category: "Creator Resources",
    title: "Creator Assistant: What Does a Creator Virtual Assistant Do?",
    seoTitle: "Creator Virtual Assistant: What a Creator VA Does",
    excerpt:
      "What a creator virtual assistant does, which tasks to hand over first, what a VA shouldn't do, how to hire and onboard one, how to give access safely without sharing passwords, and a weekly task list you can adapt.",
    metaDescription:
      "What a creator virtual assistant does: tasks to delegate first, what not to hand over, hiring and onboarding, safe account access and a weekly VA task list.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["creator assistant", "creator virtual assistant", "virtual assistant for content creators", "youtuber assistant", "influencer assistant tasks", "hire a VA India"],
    related: ["creator-team-roles", "creator-outsourcing", "creator-account-security"],
    body: [
      {
        type: "paragraph",
        text: "A creator virtual assistant is often the cheapest hire that gives back the most hours. Not because the work is unimportant, but because inbox triage, scheduling, uploads and research are exactly the tasks that fill a creator's day in fifteen-minute fragments.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator virtual assistant handles repeatable admin and support work, usually remotely and part-time: sorting the inbox and brand enquiries, scheduling calls and shoots, uploading and scheduling approved content, updating trackers, preparing invoices for your approval, research and file organisation. A VA shouldn't negotiate rates, approve sponsored content, speak as you publicly or hold your passwords. Start with a paid trial on documented tasks and give access through proper roles, not shared logins.",
      },
      { type: "heading", text: "What a creator VA can do", id: "tasks" },
      {
        type: "table",
        headers: ["Area", "Typical VA tasks"],
        rows: [
          ["Inbox and enquiries", "Label brand emails, log enquiries in the CRM, send your approved media kit reply, flag urgent items"],
          ["Scheduling", "Book calls, shoots and deliveries; keep the master calendar current"],
          ["Publishing support", "Upload approved videos, add descriptions and tags from your notes, schedule posts"],
          ["Trackers and records", "Update the campaign tracker, save live links and screenshots, file contracts"],
          ["Finance admin", "Prepare invoice drafts, track due dates, collect receipts for your accountant"],
          ["Research", "Brand research before pitches, topic research, competitor lists"],
          ["Community support", "Filter spam, flag questions you should answer, collect FAQs"],
        ],
      },
      { type: "heading", text: "What a VA shouldn't do", id: "not-tasks" },
      {
        type: "list",
        items: [
          "Negotiate or quote rates without your explicit approval.",
          "Approve sponsored content, disclosures or brand scripts.",
          "Reply to your audience as if they were you, unless that's clearly agreed and honest.",
          "Hold your passwords or two-factor codes.",
          "Make payments on your behalf without a limit and your sign-off.",
        ],
      },
      { type: "heading", text: "Which tasks to hand over first", id: "first-tasks" },
      {
        type: "paragraph",
        text: "Track your week for five days and highlight tasks that are repetitive, rule-based and not creative. Hand over the ones you can describe in a one-page SOP. Inbox triage and tracker updates are the usual starting point because they're frequent and easy to check. The creator outsourcing guide has a framework for deciding what to delegate at all.",
        links: [{ text: "creator outsourcing guide", href: "/blog/creator-outsourcing" }],
      },
      { type: "heading", text: "How to hire a creator VA", id: "hiring" },
      {
        type: "list",
        items: [
          "Write a role description with the actual tasks, hours per week and the tools you use.",
          "Look for experience with creators or small businesses, strong written English or your audience's language, and reliability over flashy skills.",
          "Run a short paid trial: for example, label and log a week of sample enquiries using your SOP.",
          "Check references and do a video call.",
          "Agree terms in writing: scope, hours, rate, confidentiality, who owns work created, notice period.",
        ],
      },
      {
        type: "paragraph",
        text: "Indian creators often hire VAs through referrals from other creators, freelance marketplaces or college networks. Many VAs work across time zones, so agree the hours when they must be reachable. Pay structures are compared in creator team compensation.",
        links: [{ text: "creator team compensation", href: "/blog/creator-team-compensation" }],
      },
      { type: "heading", text: "Give access safely", id: "access" },
      {
        type: "paragraph",
        text: "Sharing passwords is the most common creator security mistake. Use role-based access instead. YouTube Studio lets you add people with channel permissions such as Editor, Editor (limited) or Viewer, so they can upload or view without your Google password. Instagram offers ways for professional accounts to give people access without sharing a password, and business tools connected to Meta have their own roles; options and limits vary by account and plan, so check Instagram's help centre for yours. Use shared folders and a password manager's sharing feature for other tools, and remove access the day someone leaves.",
        links: [
          { text: "channel permissions", href: SOURCES.youtubeChannelPermissions },
          { text: "ways for professional accounts to give people access", href: SOURCES.instagramSharedAccess },
        ],
      },
      {
        type: "paragraph",
        text: "The full access checklist is in creator account security.",
        links: [{ text: "creator account security", href: "/blog/creator-account-security" }],
      },
      { type: "heading", text: "A weekly VA task list", id: "weekly" },
      {
        type: "template",
        label: "Creator VA weekly checklist (adapt to your business)",
        text: "Daily\n- Triage inbox; log new brand enquiries; flag urgent items by 11 a.m.\n- Check DMs for business messages; move them to the tracker\n\nMonday\n- Update master calendar for the week; confirm shoots and calls\n\nWednesday\n- Upload and schedule approved content; save live links\n\nFriday\n- Update campaign tracker; list invoices due and overdue\n- Collect receipts into the monthly folder\n- Send creator a 5-line weekly summary",
      },
      { type: "heading", text: "Onboarding in the first two weeks", id: "onboarding" },
      {
        type: "list",
        items: [
          "Day 1: tools access through roles, SOPs, examples of good work, communication rules.",
          "Week 1: shadow tasks; you review everything before it goes out.",
          "Week 2: they run the tasks; you spot-check daily.",
          "End of week 2: feedback conversation; adjust the SOPs with what they learned.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Hiring a VA without written processes, then being disappointed by guesses.",
          "Sharing your main account passwords and two-factor codes.",
          "Delegating judgement calls (pricing, approvals) too early.",
          "No weekly check-in, so small errors pile up.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good creator VA takes the fragments off your day. Hand over repeatable admin with clear SOPs, keep pricing, approvals and your public voice yourself, give access through roles rather than passwords, and review weekly.",
      },
    ],
    faqs: [
      {
        question: "What does a virtual assistant do for a content creator?",
        answer:
          "Repeatable admin and support: inbox and enquiry triage, scheduling, uploading and scheduling approved content, tracker updates, invoice drafts, research and file organisation.",
      },
      {
        question: "Should I give my VA my Instagram password?",
        answer:
          "Avoid it. Use role-based access where the platform offers it, such as YouTube channel permissions and Instagram's options for giving access without a password, and keep two-factor authentication on your own device.",
      },
      {
        question: "How many hours does a creator VA need?",
        answer:
          "Many creators start with 5–15 hours a week for inbox, scheduling and tracker work, then add hours as more tasks are documented.",
      },
    ],
  },
  {
    slug: "hire-video-editor-creator",
    category: "Creator Resources",
    title: "How to Hire a Video Editor as a Creator (and When to Outsource Editing)",
    seoTitle: "How to Hire a Video Editor as a Creator",
    excerpt:
      "How creators hire or outsource a video editor: freelancer vs agency vs in-house, where to find editors, a paid test edit, the editing brief, pricing structures, file handoff, feedback rounds, ownership and a first-month plan.",
    metaDescription:
      "How creators hire or outsource video editing: where to find editors, a paid test edit, editing briefs, pricing structures, feedback rounds and ownership.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["hire video editor for creator", "video editing outsourcing for creators", "youtube video editor", "reels editor", "outsource video editing", "freelance video editor India"],
    related: ["creator-outsourcing", "creator-content-quality-control", "creator-team-compensation"],
    body: [
      {
        type: "paragraph",
        text: "Editing is the most common first hire for video creators, and for good reason: a ten-minute YouTube video can take a full day to edit. But a bad editing hire costs more than doing it yourself, because you end up re-editing, explaining the same notes every week and missing upload dates.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Hire an editor when editing is your biggest time sink and you post often enough to give them steady work. Write down your editing style with reference videos, shortlist editors whose portfolios match your format, run a paid test edit on your own footage, then agree scope, rate, turnaround, revision rounds and ownership in writing. Start with a per-video freelancer; move to a monthly retainer or in-house editor once volume and trust are stable.",
      },
      { type: "heading", text: "Freelancer, agency or in-house?", id: "options" },
      {
        type: "table",
        headers: ["Option", "Best for", "Trade-offs"],
        rows: [
          ["Per-video freelancer", "Getting started; irregular volume", "Availability varies; you manage quality"],
          ["Retainer freelancer", "Weekly uploads; consistent style", "Fixed monthly cost; needs a steady pipeline"],
          ["Editing agency or studio", "High volume, several formats, tight turnaround", "Higher cost; less direct contact with the editor"],
          ["In-house editor", "Daily output; tight collaboration; brand work volume", "Employer responsibilities; fixed cost"],
        ],
      },
      { type: "heading", text: "Before you hire: define your style", id: "style" },
      {
        type: "list",
        items: [
          "Three to five reference videos (yours or others') with notes on what you like: pacing, captions, b-roll, music, zooms.",
          "Formats and lengths: long-form, Shorts, Reels, podcasts, brand integrations.",
          "Non-negotiables: caption style, fonts, colour, intro length, logo use.",
          "What you'll provide: raw footage, script, b-roll, music licences, brand guidelines.",
        ],
      },
      { type: "heading", text: "Where to find editors", id: "where" },
      {
        type: "paragraph",
        text: "Referrals from creators in your niche are usually the best source, because those editors already understand the format. Freelance marketplaces, creator communities, editing course alumni groups and LinkedIn are other options. Judge portfolios on videos similar to yours, not on showreels of travel montages if you make talking-head explainers.",
      },
      { type: "heading", text: "The paid test edit", id: "test" },
      {
        type: "paragraph",
        text: "Always pay for the test and use your own footage. Give the same brief and footage to two or three shortlisted editors. Judge the result on story and pacing first, polish second, and notice how they handle questions and feedback. An editor who asks smart questions about your audience is often a better long-term fit than one with the flashiest effects.",
      },
      { type: "heading", text: "The editing brief", id: "brief" },
      {
        type: "template",
        label: "Editing brief template",
        text: "Video: [Title / working title]\nFormat and length: YouTube long-form, 10–12 min + 3 Shorts cut-downs\nAudience and goal: First-time investors; explain SIPs clearly\nStructure: Hook (0:00–0:30) → context → 3 sections → summary → CTA\nStyle refs: [links] Keep jump cuts tight; captions only on key terms\nMust include: Sponsor segment at 2:10 exactly as approved; disclosure on screen\nAssets: Raw footage folder, script, b-roll folder, licensed music list\nDeliver: 1080p/4K MP4, project file, SRT captions\nDue: First cut Thursday 6 p.m.; final Saturday noon",
      },
      { type: "heading", text: "Pricing structures", id: "pricing" },
      {
        type: "paragraph",
        text: "Editing rates vary widely with experience, city, format complexity and turnaround, so compare quotes for your specific format rather than relying on averages. The structure matters as much as the number:",
      },
      {
        type: "table",
        headers: ["Structure", "Works when", "Watch out for"],
        rows: [
          ["Per finished video", "Clear, repeatable format", "Define length ranges and included revisions"],
          ["Per minute of final video", "Varied lengths", "Complex edits may be underpriced"],
          ["Monthly retainer for a set volume", "Weekly schedule", "What happens to unused or extra videos"],
          ["Hourly", "Unpredictable, one-off work", "Needs trust and time tracking"],
        ],
      },
      {
        type: "paragraph",
        text: "Include brand-deal edits separately if they need extra approval rounds. To see what an editor does to your cost per video, use the creator content production cost worksheet.",
        links: [{ text: "creator content production cost", href: "/blog/creator-content-production-cost" }],
      },
      { type: "heading", text: "Handoff, feedback and revisions", id: "feedback" },
      {
        type: "list",
        items: [
          "Use one shared folder structure per video: raw, assets, drafts, final.",
          "Give time-stamped feedback in one batch per round, not a stream of messages.",
          "Agree the number of included revision rounds (two is common) and turnaround per round.",
          "Separate your feedback from brand feedback, and pass brand notes on in writing.",
        ],
      },
      {
        type: "paragraph",
        text: "A structured review process is covered in creator content quality control.",
        links: [{ text: "creator content quality control", href: "/blog/creator-content-quality-control" }],
      },
      { type: "heading", text: "Agreement: what to put in writing", id: "agreement" },
      {
        type: "list",
        items: [
          "Scope, formats, turnaround and revision rounds.",
          "Rate, invoicing and payment timing.",
          "Ownership: the finished edits and project files belong to you on payment.",
          "Confidentiality, including brand deals before they're public.",
          "Music, fonts and stock assets: who licenses them and in whose name.",
          "Whether the editor may show your work in their portfolio, and when.",
          "Notice period for either side.",
        ],
      },
      {
        type: "paragraph",
        text: "Ownership of work made by freelancers is explained in creator copyright. This is general information; for high-value or long-term arrangements, have a lawyer review your agreement.",
        links: [{ text: "creator copyright", href: "/blog/creator-copyright" }],
      },
      { type: "heading", text: "The first month", id: "first-month" },
      {
        type: "table",
        headers: ["Week", "Focus"],
        rows: [
          ["1", "One video; detailed brief; you review closely; write down every repeated note"],
          ["2", "Turn repeated notes into a style guide; second video"],
          ["3", "Editor works from the style guide; fewer notes"],
          ["4", "Review: turnaround, revision rounds, quality, communication; decide on retainer"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Hiring from a showreel instead of a paid test on your footage.",
          "No written style guide, so every video starts from zero.",
          "Unlimited revisions, which frustrates good editors.",
          "No agreement on ownership of project files.",
          "Letting the editor publish or talk to brands without clear boundaries.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good editor multiplies your output; a poorly briefed one multiplies your notes. Define your style, test on your own footage, agree terms and ownership in writing, and turn every repeated piece of feedback into the style guide.",
      },
    ],
    faqs: [
      {
        question: "When should a creator hire a video editor?",
        answer:
          "When editing is your biggest time sink, you post regularly enough to give steady work, and your income can cover the cost with a buffer.",
      },
      {
        question: "How much does a video editor cost for creators in India?",
        answer:
          "It varies widely with experience, format complexity, turnaround and volume, so there's no reliable single rate. Compare quotes for your exact format and structure pay per video, per minute or as a monthly retainer.",
      },
      {
        question: "Who owns the edited video?",
        answer:
          "Put it in writing: usually the creator owns the finished edits and project files on payment. Without a written agreement, ownership can be unclear.",
      },
    ],
  },
  {
    slug: "hire-social-media-manager-creator",
    category: "Creator Resources",
    title: "How to Hire a Social Media Manager as a Creator (or Outsource It)",
    seoTitle: "How to Hire a Social Media Manager as a Creator",
    excerpt:
      "When a creator needs a social media manager, what they should and shouldn't do, freelancer vs agency, how to test candidates, the handover document, safe account access, reporting and how to keep your voice.",
    metaDescription:
      "How creators hire or outsource a social media manager: what they do, freelancer vs agency, a paid trial, safe account access, reporting and keeping your voice.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["hire social media manager", "social media outsourcing for creators", "social media manager for influencers", "outsource social media creator", "social media manager India"],
    related: ["creator-team-roles", "creator-account-security", "creator-content-distribution"],
    body: [
      {
        type: "paragraph",
        text: "For a creator, a social media manager isn't the same as for a brand. Your audience follows you, not a logo, so the job is to help your content travel further without sounding like someone else wrote it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Hire a social media manager when you publish across several platforms and distribution, scheduling and reporting are taking time away from making content. Define exactly what they own (usually scheduling, platform versions, captions from your notes, analytics and trend monitoring) and what stays with you (your voice, sponsored content approvals, sensitive replies). Test candidates with a paid two-week trial, give access through platform roles instead of passwords, and agree a monthly report.",
      },
      { type: "heading", text: "What a creator's social media manager does", id: "does" },
      {
        type: "table",
        headers: ["Usually owns", "Usually shares with you", "Stays with you"],
        rows: [
          ["Scheduling approved posts", "Caption drafts in your voice", "Final approval of captions and scripts"],
          ["Platform-specific versions and sizes", "Trend and format ideas", "Sponsored content and disclosures"],
          ["Hashtags, alt text, keywords", "Replies to routine comments (if agreed)", "Sensitive or personal replies"],
          ["Monthly analytics report", "Content mix planning", "Brand negotiations"],
        ],
      },
      {
        type: "paragraph",
        text: "If comments, DMs and a community space are the real workload, you may need a community manager instead. The difference is explained in creator team roles.",
        links: [{ text: "creator team roles", href: "/blog/creator-team-roles" }],
      },
      { type: "heading", text: "Freelancer or agency?", id: "freelancer-agency" },
      {
        type: "table",
        headers: ["Option", "Pros", "Cons"],
        rows: [
          ["Freelancer", "Direct relationship; learns your voice; flexible", "One person's availability; limited range"],
          ["Agency", "Team cover, design and reporting support", "Higher cost; account may be handled by juniors; templated output"],
        ],
      },
      {
        type: "paragraph",
        text: "Agencies that mostly serve brands often apply brand-style templates to creators. Ask to see creator accounts they've managed, and who will actually write for you.",
      },
      { type: "heading", text: "How to test candidates", id: "trial" },
      {
        type: "list",
        items: [
          "Ask for accounts they've managed and what changed while they did.",
          "Give a paid exercise: turn one of your long videos into platform versions and draft three captions in your voice.",
          "Run a paid two-week trial on scheduling and reporting before handing over more.",
          "Check how they talk about metrics: good managers talk about saves, shares, watch time and audience, not only follower counts.",
        ],
      },
      { type: "heading", text: "The handover document", id: "handover" },
      {
        type: "template",
        label: "Social media handover (one page)",
        text: "Voice: 5 words that describe how I sound; 3 phrases I use; 3 I never use\nPlatforms and roles: What each platform is for; posting frequency\nContent mix: Pillars and rough share of each\nApproval rule: Nothing goes live without my OK (or: routine posts auto-approved after 24 hrs)\nSponsored content: Always sent to me; disclosure label checked every time\nComments: Reply to FAQs using saved answers; flag criticism, brand mentions, personal questions\nNo-go topics: [list]\nEscalation: Call me immediately for: negative press, brand complaints, account warnings",
      },
      {
        type: "paragraph",
        text: "Sponsored posts need proper disclosure every time, whoever schedules them; see the creator disclosure guide.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }],
      },
      { type: "heading", text: "Account access without passwords", id: "access" },
      {
        type: "paragraph",
        text: "Give your social media manager access through the platform's own roles where they exist: YouTube channel permissions, Instagram's options for giving access without a password, and roles in Meta's business tools. Keep two-factor authentication on your own device, never share recovery codes, and remove access when the engagement ends. The details are in creator account security.",
        links: [
          { text: "YouTube channel permissions", href: SOURCES.youtubeChannelPermissions },
          { text: "creator account security", href: "/blog/creator-account-security" },
        ],
      },
      { type: "heading", text: "Reporting that's actually useful", id: "reporting" },
      {
        type: "list",
        items: [
          "What was published, by platform and format.",
          "Top and bottom performers, with a reason.",
          "Audience changes that matter (returning viewers, saves, shares), not only followers.",
          "One or two recommendations for next month.",
        ],
      },
      {
        type: "paragraph",
        text: "Distribution itself is covered in creator content distribution.",
        links: [{ text: "creator content distribution", href: "/blog/creator-content-distribution" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Handing over your voice without a voice guide.",
          "Sharing your main login and two-factor codes.",
          "Letting sponsored posts go live without your check.",
          "Judging the manager only on follower growth.",
          "Hiring before you have enough content for them to distribute.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A social media manager should make your content travel further while still sounding like you. Define what they own, keep your voice and sponsored approvals, give access through roles and judge them on audience quality, not just follower counts.",
      },
    ],
    faqs: [
      {
        question: "Do creators need a social media manager?",
        answer:
          "Only when distribution, scheduling and reporting across several platforms take significant time from creating. Many creators need an editor or assistant first.",
      },
      {
        question: "Should a social media manager reply to comments as me?",
        answer:
          "Only if you've agreed it and it's honest with your audience. Routine answers from a saved set are common; personal, sensitive or critical comments should come to you.",
      },
      {
        question: "Is it better to outsource social media to an agency or a freelancer?",
        answer:
          "A freelancer is usually closer to your voice and more flexible; an agency offers team cover and design support. Ask any agency for creator accounts they manage and who will write your posts.",
      },
    ],
  },
  {
    slug: "creator-team-compensation",
    category: "Creator Resources",
    title: "Creator Team Salary and Compensation: How to Structure Pay",
    seoTitle: "Creator Team Compensation: How to Structure Pay",
    excerpt:
      "How creators structure pay for editors, assistants, managers and other team members: per-piece, retainer, hourly, salary, commission and bonus models, what each costs you, how to budget team pay, and the tax and employment questions to take to a professional in India.",
    metaDescription:
      "How creators structure team pay: per-piece, retainer, hourly, salary, commission and bonuses, budgeting team costs and India tax and employment basics.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator team compensation", "creator team salary", "how to pay a video editor", "pay freelancers India creator", "talent manager commission", "creator team budget"],
    related: ["creator-team-roles", "creator-business-budget", "creator-team-building"],
    body: [
      {
        type: "paragraph",
        text: "Paying a team is where a creator business starts to feel like a real company. It's also where many creators overcommit: a fixed monthly salary that felt fine in a strong quarter becomes a weight in a slow one. The right pay structure depends on how predictable the work and your income are.",
      },
      {
        type: "paragraph",
        text: "This is general information for planning. It isn't legal, tax or employment advice; speak to a chartered accountant or employment lawyer before hiring employees or setting up recurring contractor payments.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Match pay to the work: per-piece rates for defined, repeatable output (edits, thumbnails), monthly retainers for steady weekly work, hourly for unpredictable tasks, salary for full-time roles you need every day, and commission only for people who directly bring in revenue, such as a talent manager. Keep total fixed team costs within what your conservative income forecast can cover, pay on time, and put every arrangement in writing. Ask a professional about TDS, GST and employment obligations before you start.",
      },
      { type: "heading", text: "Pay structures compared", id: "structures" },
      {
        type: "table",
        headers: ["Structure", "Suits", "Your risk", "Their risk"],
        rows: [
          ["Per piece", "Editors, designers, writers with clear output", "Low; cost follows volume", "Income varies with your schedule"],
          ["Monthly retainer", "Regular weekly work; VA, editor, social manager", "Fixed cost in slow months", "Scope creep"],
          ["Hourly", "Unpredictable admin, research, one-offs", "Hard to budget", "Low, if hours are honoured"],
          ["Salary (employee)", "Full-time core roles", "Highest fixed cost and employer duties", "Lowest"],
          ["Commission", "Talent managers, partnerships leads", "Only pay on results", "Income tied to deals closing"],
          ["Base plus bonus", "Managers, producers, senior editors", "Moderate", "Moderate"],
          ["Profit or revenue share", "Long-term partners, co-founders", "Gives up future income; complex", "Depends on business results"],
        ],
      },
      { type: "heading", text: "Choosing the structure for each role", id: "by-role" },
      {
        type: "table",
        headers: ["Role", "Common structure", "Notes"],
        rows: [
          ["Video editor", "Per video or retainer for a set volume", "Define revision rounds and length bands"],
          ["Thumbnail or graphic designer", "Per design or monthly", "Include number of concepts per thumbnail"],
          ["Virtual assistant", "Hourly or monthly retainer", "Agree hours and response windows"],
          ["Social or community manager", "Monthly retainer", "Define platforms, posts and reporting"],
          ["Content manager or producer", "Retainer or salary", "Consider a bonus tied to on-time delivery"],
          ["Talent manager", "Commission on deals", "Define which deals count: new, inbound, renewals"],
          ["Accountant", "Monthly or annual fee", "Clarify what filings are included"],
        ],
      },
      { type: "heading", text: "Commission: define the base", id: "commission" },
      {
        type: "paragraph",
        text: "Commission disputes rarely come from the percentage. They come from unclear definitions. Before agreeing a commission, write down:",
      },
      {
        type: "list",
        items: [
          "Which income it applies to: brand deals only, or also platform payouts, products and affiliates?",
          "Whether it applies to inbound deals you'd have got anyway, or only deals they source or negotiate.",
          "Whether it's calculated on the gross fee, the fee after GST, or after production costs.",
          "What happens to renewals and repeat clients after the agreement ends.",
          "When commission is paid: when the brand pays you, not when the deal is signed.",
        ],
      },
      {
        type: "paragraph",
        text: "Representation terms are compared in creator manager vs agency.",
        links: [{ text: "creator manager vs agency", href: "/blog/creator-manager-vs-agency" }],
      },
      { type: "heading", text: "Budgeting team pay", id: "budget" },
      {
        type: "template",
        label: "Team cost check (illustrative, hypothetical figures)",
        text: "Conservative monthly income (confirmed + recurring):  ₹2,40,000\nFixed team costs (retainers + salaries):               ₹70,000   (29%)\nVariable team costs (per-piece, expected volume):     ₹35,000\nOther business costs:                                 ₹30,000\nLeft for you, taxes and buffer:                       ₹1,05,000\n\nRule of thumb used here: keep fixed team costs well inside what the\nconservative forecast covers, so a slow month doesn't force cuts.",
      },
      {
        type: "paragraph",
        text: "Your conservative income comes from creator revenue forecasting, and team costs belong in your creator business budget. There's no universal percentage; what matters is that fixed commitments survive a slow quarter.",
        links: [
          { text: "creator revenue forecasting", href: "/blog/creator-revenue-forecasting" },
          { text: "creator business budget", href: "/blog/creator-business-budget" },
        ],
      },
      { type: "heading", text: "Setting fair rates", id: "fair-rates" },
      {
        type: "paragraph",
        text: "Published salary surveys rarely cover creator roles well, and rates vary a lot by city, language, experience and turnaround. Collect three to five quotes for the same brief, ask creator peers what they pay for similar work, and remember that the cheapest option often costs more in revisions. Review rates yearly and when scope grows.",
      },
      { type: "heading", text: "India: tax and employment questions to ask a professional", id: "india" },
      {
        type: "paragraph",
        text: "These are the questions to take to your chartered accountant or employment lawyer, not answers:",
      },
      {
        type: "list",
        items: [
          "TDS: Do my payments to contractors or professionals require me to deduct TDS, given my business's turnover and the payment amounts? From 1 April 2026 TDS is governed by the Income-tax Act, 2025, which renumbered the familiar sections, so check current rules rather than older guides.",
          "GST: If I'm GST-registered, can I claim input tax credit on invoices from GST-registered freelancers? Do my freelancers need to charge GST?",
          "Contractor or employee: Does the way I work with someone (hours, control, exclusivity) make them effectively an employee?",
          "Employment: India's four labour codes came into effect on 21 November 2025. What do they, and my state's rules, require if I hire employees (wages, social security, leave, records)?",
          "Written terms: Is my contractor agreement clear on scope, ownership of work, confidentiality and payment?",
        ],
      },
      {
        type: "paragraph",
        text: "Background reading: TDS for creators, GST for creators, and the Government of India's announcement on the labour codes.",
        links: [
          { text: "TDS for creators", href: "/blog/tds-for-influencers-india" },
          { text: "GST for creators", href: "/blog/gst-for-influencers-india" },
          { text: "announcement on the labour codes", href: SOURCES.labourCodes },
        ],
      },
      { type: "heading", text: "Paying people well operationally", id: "operations" },
      {
        type: "list",
        items: [
          "Pay on the agreed date, even if a brand is late paying you.",
          "Ask contractors for invoices and keep them with your tax records.",
          "Use bank transfer or UPI to business accounts so payments are traceable.",
          "Review pay yearly; tell people in advance if a structure will change.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Committing to salaries based on your best month.",
          "Commission terms with no definition of which income counts.",
          "Paying freelancers late because a brand paid you late.",
          "Treating someone as a freelancer while managing them like an employee, without advice.",
          "No written agreement on ownership of the work you're paying for.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good team pay matches the structure to the work and to how predictable your income is. Start variable, add fixed costs only when the conservative forecast can carry them, define commission carefully, pay on time and get professional advice on tax and employment before you scale.",
      },
    ],
    faqs: [
      {
        question: "How should creators pay their video editor?",
        answer:
          "Per finished video for irregular work, or a monthly retainer for a set weekly volume. Define video length, included revision rounds and turnaround in writing.",
      },
      {
        question: "What commission do talent managers take?",
        answer:
          "It varies by manager, creator and the services included, so compare offers. More important than the percentage is defining which income it applies to, whether it's calculated before or after GST and costs, and what happens to renewals after the agreement ends.",
      },
      {
        question: "Do creators need to deduct TDS when paying freelancers?",
        answer:
          "It depends on your business, turnover and payment amounts under the Income-tax Act, 2025. Ask a chartered accountant; this guide isn't tax advice.",
      },
    ],
  },
  {
    slug: "creator-team-management",
    category: "Creator Resources",
    title: "Creator Team Management: How to Build a Productive Content Team",
    seoTitle: "Creator Team Management: Run a Productive Content Team",
    excerpt:
      "How creators manage a small content team: clear ownership, briefs, a weekly rhythm, communication rules, feedback that improves work, remote and freelance teams, access and offboarding, and signs the team structure needs to change.",
    metaDescription:
      "Creator team management: clear ownership, briefs, weekly meetings, communication rules, useful feedback, remote freelancers, access and offboarding.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator team management", "manage content team", "manage freelancers creator", "creator team meetings", "remote content team", "creator team communication"],
    related: ["creator-production-team", "creator-team-roles", "creator-business-sops"],
    body: [
      {
        type: "paragraph",
        text: "Most creators become managers by accident. They hire an editor, then a designer, then an assistant, and suddenly they're answering questions all day instead of creating. The team is there, but it isn't making the creator's life easier yet.",
      },
      {
        type: "paragraph",
        text: "This guide is about managing people. How to structure the production pipeline itself is covered in creator production team.",
        links: [{ text: "creator production team", href: "/blog/creator-production-team" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Manage a creator team with five habits: give every task and area one owner, brief in writing with examples, run one short weekly meeting and one shared task board, give batched and specific feedback, and write down what \"good\" looks like so the team needs you less over time. Control access carefully, pay on time and review each role every quarter.",
      },
      { type: "heading", text: "1. One owner for everything", id: "ownership" },
      {
        type: "paragraph",
        text: "\"The team will handle it\" means nobody will. Every recurring area needs a named owner: calendar, editing, thumbnails, uploads, brand deliverables, invoicing. Owners can ask for help, but they're the ones who notice when something slips.",
      },
      {
        type: "table",
        headers: ["Area", "Owner", "Backup"],
        rows: [
          ["Content calendar and production board", "Content manager (or you)", "You"],
          ["Long-form edits", "Editor A", "Editor B / agency"],
          ["Thumbnails", "Designer", "Editor"],
          ["Uploads and scheduling", "VA", "Content manager"],
          ["Brand deliverables and approvals", "You or manager", "Content manager"],
        ],
      },
      { type: "heading", text: "2. Brief in writing", id: "briefs" },
      {
        type: "paragraph",
        text: "Verbal briefs on a call feel faster and cost more. A written brief with a goal, references, must-haves and a deadline reduces revisions and lets team members work while you're shooting or travelling. Keep brief templates for each recurring job.",
      },
      { type: "heading", text: "3. A weekly rhythm", id: "rhythm" },
      {
        type: "template",
        label: "30-minute weekly team meeting",
        text: "1. Last week: what shipped, what slipped and why (5 min)\n2. This week: board review, deadlines, brand deliverables (10 min)\n3. Blockers: who is waiting on whom (10 min)\n4. One improvement: a process or template to fix (5 min)",
      },
      {
        type: "paragraph",
        text: "Between meetings, the shared board is the source of truth. If a task isn't on the board, it doesn't exist.",
      },
      { type: "heading", text: "4. Communication rules", id: "communication" },
      {
        type: "list",
        items: [
          "Tasks and requests go on the board, not in private chats.",
          "One group chat for quick questions; decisions get written on the task.",
          "Agreed response times: for example, same working day for blockers, 24 hours otherwise.",
          "Quiet hours: nobody expects replies late at night or on days off, including you.",
          "Brand communication stays with the named owner, so the brand hears one voice.",
        ],
      },
      { type: "heading", text: "5. Feedback that improves the work", id: "feedback" },
      {
        type: "list",
        items: [
          "Batch notes into one round, time-stamped where relevant.",
          "Separate must-fix (errors, brand requirements) from preferences.",
          "Explain the why once, then add it to the style guide.",
          "Say what worked, specifically, so it's repeated.",
          "Give harder feedback privately and early, not after three bad weeks.",
        ],
      },
      { type: "heading", text: "Managing remote and freelance teams", id: "remote" },
      {
        type: "paragraph",
        text: "Many Indian creator teams are fully remote: an editor in another city, a designer who also works for other clients, a VA on flexible hours. That works well with clear deadlines and written briefs. Respect that freelancers have other clients: book their time in advance for launches and festive campaigns, and don't expect instant replies unless you're paying for that availability.",
      },
      { type: "heading", text: "Access, security and offboarding", id: "access" },
      {
        type: "list",
        items: [
          "Give access through platform roles and shared folders, never your passwords.",
          "Keep a simple access register: who has access to what, and since when.",
          "On offboarding: remove platform roles, shared folders and tool seats the same day; collect project files; pay the final invoice.",
        ],
      },
      {
        type: "paragraph",
        text: "The access checklist is in creator account security.",
        links: [{ text: "creator account security", href: "/blog/creator-account-security" }],
      },
      { type: "heading", text: "Documentation so the team needs you less", id: "documentation" },
      {
        type: "paragraph",
        text: "The goal of managing a team is to become less necessary for routine decisions. Each time you answer the same question twice, turn the answer into an SOP, template or style-guide entry. Creator business SOPs lists the processes to document first.",
        links: [{ text: "Creator business SOPs", href: "/blog/creator-business-sops" }],
      },
      { type: "heading", text: "Signs the structure needs to change", id: "signs" },
      {
        type: "list",
        items: [
          "Work regularly waits for your answer.",
          "The same mistakes keep repeating.",
          "One person is overloaded while others wait.",
          "You spend more time coordinating than creating; consider a content manager.",
          "A role no longer matches the work; update it or end it respectfully.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Managing through scattered chats.",
          "Vague ownership and no backups.",
          "Feedback as a stream of messages instead of batched rounds.",
          "Messaging team members at all hours.",
          "Forgetting to remove access when someone leaves.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A productive creator team comes from clear owners, written briefs, a steady weekly rhythm, useful feedback and good documentation. The measure of good management is that work keeps moving on the days you're not there to answer questions.",
      },
    ],
    faqs: [
      {
        question: "How do creators manage a content team?",
        answer:
          "Give each area one owner, brief in writing, keep tasks on one shared board, run a short weekly meeting, batch feedback and turn repeated answers into SOPs.",
      },
      {
        question: "How often should a creator team meet?",
        answer:
          "A 30-minute weekly meeting is enough for most small teams, with the shared board used between meetings.",
      },
      {
        question: "How do I manage freelancers who work for other clients?",
        answer:
          "Book their time ahead for busy periods, give written briefs with clear deadlines, agree response times, and pay on time so they prioritise your work.",
      },
    ],
  },
];
