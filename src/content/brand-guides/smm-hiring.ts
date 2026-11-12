import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 01, writer A (2026-11-11): hiring and buying social media management. Choosing an agency (01),
 * in-house vs outsourced (02), cost drivers in India (03) and the agency brief (20). No prices or market ranges.
 * Sources log: smm-sources-smm-hiring.md in the batch scratchpad.
 */
export const smmHiringPosts: BlogPost[] = [
  {
    slug: "choose-social-media-management-agency",
    category: "Social Media Management",
    title: "How to Choose the Right Social Media Management Agency for Your Business in 2027",
    seoTitle: "How to Choose a Social Media Management Agency (2027)",
    excerpt:
      "A practical way to compare social media management agencies: a scorecard with the evidence to ask for, 15 questions to ask before hiring, warning signs, and how to compare proposals like-for-like.",
    metaDescription:
      "Choosing a social media management agency? Use this scorecard, 15 questions to ask, warning signs and a like-for-like way to compare proposals before you sign.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "11 min read",
    tags: [
      "social media management agency",
      "social media management company",
      "hire social media management agency",
      "social media agency for businesses",
      "questions to ask a social media agency",
    ],
    related: ["choose-influencer-marketing-agency-india", "influencer-marketing-agency-checklist", "influencer-marketing-agency-pitch-questions"],
    hero: {
      src: "/blog/brand-guides/choose-social-media-management-agency.svg",
      alt: "A four-step agency selection flow: define the job, score the evidence, compare proposals like-for-like, check access and exit terms",
    },
    body: [
      {
        type: "paragraph",
        text: "You've had three agency calls this week. Each showed a polished deck, a reel of other brands' work and a monthly fee. One offered 'twelve posts and eight Reels', another 'complete social media management', and the third wants a paid strategy phase before quoting anything. On paper they look similar. In practice they're offering three different jobs, and the one you pick will decide how your brand looks online for the next year.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Choose a social media management agency on evidence, not the pitch deck. Define the job first: organic content, community management, paid ads, influencer work or a mix. Then score each agency on strategy, creative quality, video, copy, community handling, reporting, team and contract terms, using real samples, a named team and a written scope. Compare proposals on identical deliverables, confirm you keep ownership of accounts and content, and walk away from anyone promising follower numbers.",
      },
      { type: "heading", text: "Define the job before you meet anyone", id: "define-the-job" },
      {
        type: "paragraph",
        text: "Most bad agency matches start with a vague brief. 'Handle our social media' can mean a few designed posts a week, or a full content operation with video, daily comment replies and monthly strategy reviews. Agencies quote what they think you mean, so you end up comparing different services at different prices.",
      },
      {
        type: "paragraph",
        text: "Before the first call, write down which platforms matter, roughly how much content you expect each month, who on your side will approve it, and what the business needs social to do: build trust before purchase, support launches, generate enquiries, or recruit. If you haven't yet decided whether an agency is the right model at all, settle that first with our guide to in-house vs outsourced social media management. Turning these answers into a document agencies can respond to is covered in how to write a social media agency brief.",
        links: [
          { text: "in-house vs outsourced social media management", href: "/blog/in-house-vs-outsourced-social-media-management" },
          { text: "how to write a social media agency brief", href: "/blog/social-media-agency-brief" },
        ],
      },
      { type: "heading", text: "Organic, paid and influencer: know which capability you're buying", id: "capabilities" },
      {
        type: "paragraph",
        text: "Three different skills often get sold under the label 'social media'. Some agencies do all three well, many do one well and outsource or improvise the rest. Ask directly which of these they do with their own team.",
      },
      {
        type: "table",
        headers: ["Capability", "What it involves", "What to check", "Usually in a management retainer?"],
        rows: [
          ["Organic social management", "Strategy, calendars, design, Reels editing, copy, publishing, community management, monthly reporting", "Samples, monthly workflow, named team", "Yes, this is the core"],
          ["Paid social advertising", "Campaign setup, audiences, budgets, ad creative testing, ad reporting", "Who runs ads day to day, whose ad account is used, how budget is billed", "Often scoped separately, with its own fee; ad spend is paid to the platform"],
          ["Influencer marketing", "Creator discovery, outreach, negotiation, contracts, disclosure checks, content approvals", "Whether creators are sourced in-house, how creator fees are shown", "Usually separate, with creator fees on top"],
          ["Shoots", "Photo and video production, crew, locations, talent", "In-house team or vendors, who owns raw footage", "Usually quoted per shoot"],
        ],
      },
      {
        type: "paragraph",
        text: "None of these is better than the others. The point is to know what you're paying for: an agency strong in organic content may be the wrong choice if your real need is performance ads. If creators are part of your plan, check that capability with the same care you'd use when you choose an influencer marketing agency in India.",
        links: [
          { text: "choose an influencer marketing agency in India", href: "/blog/choose-influencer-marketing-agency-india" },
        ],
      },
      { type: "heading", text: "An agency evaluation scorecard", id: "scorecard" },
      {
        type: "paragraph",
        text: "Score each agency from 1 to 5 on the criteria below, and ask for the evidence in the third column. Weight the criteria to your situation: a brand that runs on short video should weight video heavily, while a B2B company may care more about LinkedIn copy and reporting.",
      },
      {
        type: "table",
        headers: ["Criterion", "What good looks like", "Evidence to ask for"],
        rows: [
          ["Understanding of your business", "They ask about customers, margins, sales cycle and approvals before talking about posts", "A short written read-back of your brief after the first call"],
          ["Strategy", "Platform choices and content pillars tied to a business goal, with reasons for what they'd drop", "An anonymised strategy document from a past client"],
          ["Creative quality", "Work that looks different from brand to brand and reads well on a phone", "Recent posts and carousels they made, with the brief behind them"],
          ["Short-form video", "Reels planned as series, with scripts, hooks and clean edits", "Raw footage next to the final edit; who scripts and who edits"],
          ["Copywriting", "Captions that sound like the brand, adapted per platform and language", "Captions written for two different brands; regional language samples if you need them"],
          ["Community management", "Agreed hours, response times and clear escalation rules", "A sample response guideline or escalation matrix"],
          ["Reporting", "Explains what worked and what changes next month, not only numbers", "An anonymised monthly report"],
          ["Process and approvals", "A fixed monthly cycle with calendar dates, revision rounds and turnaround times", "Their workflow calendar for a typical month"],
          ["Team", "Named people, with a clear day-to-day lead and realistic time on your account", "Names, roles and how many other accounts each person handles"],
          ["Compliance awareness", "Checks claims, disclosures, music and image rights before publishing", "How they review a post in a regulated category, such as health or finance"],
          ["Contract and exit", "You own accounts and content; fair notice period; clean handover", "Their standard contract terms"],
        ],
      },
      {
        type: "paragraph",
        text: "If you've used a scorecard for influencer agencies before, the logic is the same as in our influencer marketing agency checklist, but the evidence differs. Social media management is judged on consistency month after month, so the workflow and the team matter as much as the best piece in the portfolio.",
        links: [{ text: "influencer marketing agency checklist", href: "/blog/influencer-marketing-agency-checklist" }],
      },
      { type: "heading", text: "15 questions to ask before hiring", id: "questions" },
      {
        type: "list",
        items: [
          "What would you need to know about our business before recommending anything?",
          "Which platforms would you recommend for us, and which would you leave out? Why?",
          "Who exactly will work on our account, and roughly how much of their time do we get?",
          "Can we see three pieces of work for a brand like ours, along with the brief behind each?",
          "How does a month run: when do we see the calendar, how many revision rounds are included, and what turnaround do you need from us?",
          "What is in the monthly scope, line by line, and what is charged extra?",
          "For video, do you edit our footage, run shoots, or work with creators? Which of these is in the fee?",
          "What are the community management hours and response times, and what gets escalated to our team?",
          "What does the monthly report contain? Can we see an anonymised sample?",
          "What do you do when a post draws an unexpected wave of negative comments?",
          "How do you check product claims, disclosures and music or image rights?",
          "Who owns the accounts, designs, raw files and templates if we part ways?",
          "What access do you need, and how will you get it without our passwords?",
          "What is the notice period, and what does a handover include?",
          "How would you work with our ads agency, influencer partners or in-house team?",
        ],
      },
      {
        type: "paragraph",
        text: "Listen for specifics. 'We'll post consistently and grow your engagement' is not an answer to any of these. 'Calendar by the 20th, two rounds of revisions, you approve within three working days' is.",
      },
      { type: "heading", text: "Warning signs", id: "warning-signs" },
      {
        type: "list",
        items: [
          "Guaranteed follower counts, engagement rates or sales. Nobody controls platform distribution, and promises like these sometimes lead to bought followers or engagement groups.",
          "Asking for your account passwords instead of role-based access.",
          "Offering to create or hold your pages in the agency's own name.",
          "Portfolio pieces that all look alike across brands, which suggests templates rather than thinking.",
          "A pitch team you never see again, or no named team at all.",
          "'Unlimited' posts or revisions with no definition of what a post or a revision is.",
          "A sample report that is a set of follower-count screenshots.",
          "Ad budgets bundled into the management fee, so you can't see what went to the platform.",
          "A long lock-in with no review point, or vague answers about what is out of scope.",
        ],
      },
      { type: "heading", text: "How to compare proposals like-for-like", id: "compare-proposals" },
      {
        type: "paragraph",
        text: "Proposals arrive in different formats, which makes them hard to compare. Rewrite each one into the same grid before you look at the fee. Where a proposal is silent on a line, ask. Silence usually means 'not included' or 'charged extra'.",
      },
      {
        type: "table",
        headers: ["Line to fill for each agency", "What to watch for"],
        rows: [
          ["Platforms covered", "Whether a 'cross-post' to a second platform counts as managing it"],
          ["Static posts and carousels per month", "Carousel slide counts; whether resized versions count as separate posts"],
          ["Reels or short videos per month", "Edited from your footage, from stock, or shot by them"],
          ["Stories per month", "Often left vague; ask for a number"],
          ["Strategy deliverable", "One-time document vs quarterly review"],
          ["Copy and languages", "Extra languages, transcreation, Reel scripts"],
          ["Community management", "Hours, days, response times, DMs vs comments only"],
          ["Reporting", "Monthly report, review call, what metrics"],
          ["Revision rounds and approval turnaround", "What happens when you exceed them"],
          ["Shoots, ads management, influencer work", "In scope, quoted separately, or not offered"],
          ["Tools", "Scheduling, design or listening tools billed to you"],
          ["Term, notice period and GST", "Minimum term; whether the fee includes GST or adds it"],
        ],
      },
      {
        type: "paragraph",
        text: "Avoid dividing the fee by the number of posts. A cheaper cost per post often means less strategy, fewer revisions or no community management. What actually drives the difference between quotes is explained in social media management cost in India.",
        links: [{ text: "social media management cost in India", href: "/blog/social-media-management-cost-india" }],
      },
      { type: "heading", text: "Access, ownership and exit terms", id: "access-ownership" },
      {
        type: "paragraph",
        text: "Your brand should own every account, page and ad account, and the agency should work inside them through role-based access. On Meta, a business portfolio lets you give a partner business access to your assets, as described in Meta's Business Help Centre, so nobody needs your login. LinkedIn Pages have separate admin roles, at the time of writing (November 2026) Super admin, Content admin and Analyst, so an agency can post without being able to remove your admins. Keep the highest role with someone on your payroll.",
        links: [
          { text: "Meta's Business Help Centre", href: "https://www.facebook.com/business/help/1717412048538897" },
          { text: "separate admin roles", href: "https://www.linkedin.com/help/linkedin/answer/a541981" },
        ],
      },
      {
        type: "paragraph",
        text: "In the contract, check that final designs, edited videos, captions and editable source files transfer to you, that any stock music or images were licensed for your use, and that the agency hands back access and files within a set period after notice.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing on the best portfolio piece instead of the work produced month after month.",
          "Letting each agency define the scope, then comparing fees that cover different jobs.",
          "Hiring an organic content team and expecting it to run paid ads well, or the reverse.",
          "Not naming one approver on your side, then blaming the agency for slow publishing.",
          "Judging the first month on follower growth rather than on whether the system works.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Shortlist three or four agencies, not ten. You can't do proper diligence on more.",
          "Send all of them the same brief and the same deadline.",
          "Score them on the scorecard above before anyone discusses price.",
          "Meet the person who will lead your account day to day, not only the founder.",
          "Start with a defined term and a review point, such as the end of month three.",
        ],
      },
      {
        type: "paragraph",
        text: "Once you've signed, prepare your side with the outsourcing social media management checklist. For a reference point, here is what a managed social media service from Kudozz includes and scopes separately, and how we work with brands more generally.",
        links: [
          { text: "how we work with brands", href: "/for-brands" },
          { text: "outsourcing social media management checklist", href: "/blog/outsourcing-social-media-management-checklist" },
          { text: "what a managed social media service from Kudozz includes", href: "/services/social-media-management#scope" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Write down the job before you talk to anyone, then ask every agency for evidence rather than promises. A good social media management company will be specific about scope, team, process and ownership, and comfortable telling you what it doesn't do. If two agencies score close, pick the one whose monthly process you understand best.",
      },
    ],
    faqs: [
      {
        question: "How many social media agencies should we speak to before deciding?",
        answer:
          "Three or four is usually enough. Fewer gives you little to compare, and more makes proper diligence hard: reading samples, meeting teams and rewriting proposals into the same format takes time. Send every shortlisted agency the same brief and deadline so their answers are comparable.",
      },
      {
        question: "Should a social media agency have experience in our industry?",
        answer:
          "It helps, especially in regulated categories like health, finance or food, where claims need care. But category experience matters less than whether the agency asks good questions about your customers and can show work that looks different for each brand. Ask how they would learn your category in the first month.",
      },
      {
        question: "Is a freelancer a reasonable alternative to an agency?",
        answer:
          "For a small scope, such as one platform with a few designed posts a week, a capable freelancer can work well. The risks are continuity during leave or illness and a narrower skill set across design, video, copy and reporting. Use the same scorecard, and ask how they cover absences.",
      },
      {
        question: "Can we ask an agency for a trial month?",
        answer:
          "You can ask, and some agencies agree to a short paid pilot. Keep expectations realistic: the first month is mostly onboarding, strategy and setting up the calendar, so judge the pilot on process, quality and communication rather than audience growth. Agree the scope and fee for the pilot in writing.",
      },
      {
        question: "What should we do if the agency we hired isn't working out?",
        answer:
          "Raise specific issues in writing against the agreed scope first, and give a fair period to fix them. If things don't improve, follow the notice terms, and make sure access, source files and the content calendar are handed back. This is why ownership and exit terms belong in the contract from the start.",
      },
    ],
  },
  {
    slug: "in-house-vs-outsourced-social-media-management",
    category: "Social Media Management",
    title: "In-House Social Media Team vs Outsourcing to an Agency: What Makes Sense for Your Business?",
    seoTitle: "In-House vs Outsourced Social Media Management",
    excerpt:
      "The roles a full in-house social media team needs, how it compares with an agency on control, speed, skills, cost categories and continuity, when each model fits, and how a hybrid setup works.",
    metaDescription:
      "In-house vs outsourced social media management: the roles you need, a side-by-side comparison, when each model fits, the hybrid option and a decision checklist.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "in-house vs outsourced social media management",
      "social media agency vs in-house team",
      "outsource social media management",
      "social media team costs",
      "hybrid social media team",
    ],
    related: ["influencer-marketing-agency-vs-in-house", "influencer-agency-vs-freelancer", "choose-influencer-marketing-agency-india"],
    hero: {
      src: "/blog/brand-guides/in-house-vs-outsourced-social-media-management.svg",
      alt: "Three operating models side by side: an in-house team, an outsourced agency, and a hybrid with an in-house owner and agency execution",
    },
    body: [
      {
        type: "paragraph",
        text: "Your marketing executive has been running Instagram on the side for a year. Posting is patchy, Reels happen when someone remembers, and comments sit unanswered over weekends. The founder wants it fixed, and the two obvious options are to hire a proper team or hand it to an agency. Both cost real money, and both can fail for reasons that have little to do with talent.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Build in-house when social media is central to how you sell, you need real-time presence through the day, and you can hire and manage several specialists. Outsource when you need a full skill set quickly, your content needs are steady rather than minute-by-minute, and nobody internally can manage a creative team. Many brands settle on a hybrid: an in-house owner who knows the business, with an agency handling strategy, design, video editing and reporting.",
      },
      { type: "heading", text: "What a full in-house team actually needs", id: "roles" },
      {
        type: "paragraph",
        text: "The common mistake is to hire one 'social media manager' and expect them to cover everything. A consistent presence across two or three platforms draws on six distinct skills. In a small team some roles combine, but each one still has to be done by someone.",
      },
      { type: "subheading", text: "Strategist or social media lead" },
      {
        type: "paragraph",
        text: "Decides platforms, content pillars, tone and posting rhythm, plans the monthly calendar against launches and offers, and owns the relationship with leadership. Without this role, the team produces content but nobody decides what it's for.",
      },
      { type: "subheading", text: "Graphic designer" },
      {
        type: "paragraph",
        text: "Makes static posts, carousels, infographics and campaign creatives that follow brand guidelines and read well on a phone screen. Volume is high and steady, which is why design is often the first role brands hire.",
      },
      { type: "subheading", text: "Video editor" },
      {
        type: "paragraph",
        text: "Cuts Reels and Shorts, adds captions and text overlays, and keeps a series looking consistent. Someone also has to shoot the footage, whether that's the editor, a team member with a phone, creators or a hired crew.",
      },
      { type: "subheading", text: "Copywriter" },
      {
        type: "paragraph",
        text: "Writes captions, hooks, Reel scripts and calls to action in the brand's voice, and adapts them for each platform. If you post in Hindi, Tamil or other languages, you need someone fluent, not a translation tool.",
      },
      { type: "subheading", text: "Community manager" },
      {
        type: "paragraph",
        text: "Replies to comments and messages, spots complaints early and passes them to support, and keeps the tone consistent. This is the role most affected by evenings, weekends and festive peaks.",
      },
      { type: "subheading", text: "Analyst" },
      {
        type: "paragraph",
        text: "Pulls platform insights, connects them to website traffic and enquiries where tracking allows, and turns the numbers into next month's decisions. In small teams this often falls to the lead and quietly stops happening.",
      },
      { type: "heading", text: "In-house vs agency, side by side", id: "comparison" },
      {
        type: "table",
        headers: ["Factor", "In-house team", "Agency"],
        rows: [
          ["Control", "Direct day-to-day control over priorities and output", "Control through the scope, the calendar and approvals"],
          ["Speed", "Fast for reactive posts and real-time replies during working hours", "Fast once the monthly cycle runs; ad hoc requests depend on scope"],
          ["Skills breadth", "Limited to the people you hire", "Access to design, video, copy, strategy and reporting from one team"],
          ["Cost categories", "Salaries, hiring, tools, devices, training, management time, cover for leave", "Monthly fee, plus shoots, ad spend, tools or extra platforms where scoped separately"],
          ["Continuity", "At risk when one key person leaves", "The agency covers absences, but your account lead may change"],
          ["Knowledge of the brand", "Deep, built daily, close to product and customers", "Built through onboarding and briefings; needs ongoing input from you"],
          ["Scalability", "Slow: more output means more hiring", "Scope can be expanded for launches or festive peaks"],
          ["Approvals", "Informal and quick, but easily skipped", "Formal rounds and turnaround times, which add structure and some lead time"],
          ["Outside perspective", "Can become inward-looking over time", "Sees patterns across other brands and categories"],
        ],
      },
      {
        type: "paragraph",
        text: "Neither column wins outright. The question is which weaknesses your business can live with. A brand that sells through live conversations on Instagram can't accept slow replies. A brand with a small marketing team can't accept six separate hires.",
      },
      { type: "heading", text: "The costs that don't show up in a salary", id: "cost-categories" },
      {
        type: "paragraph",
        text: "Comparing one agency fee with one salary misleads in both directions. List every cost category for each model before you compare figures. The detail on what moves an agency quote is in social media management cost in India.",
        links: [{ text: "social media management cost in India", href: "/blog/social-media-management-cost-india" }],
      },
      { type: "subheading", text: "In-house cost categories" },
      {
        type: "list",
        items: [
          "Salaries and statutory benefits for each role, not just one hire",
          "Recruitment time and fees, plus the months before a new hire is productive",
          "Design, editing, scheduling and analytics software licences",
          "Laptops, phones, lighting and basic shooting kit",
          "Training as platforms change formats and features",
          "Your own time managing, reviewing and appraising the team",
          "Cover for leave, notice periods and replacement hiring",
        ],
      },
      { type: "subheading", text: "Agency cost categories" },
      {
        type: "list",
        items: [
          "The monthly management fee for the agreed scope",
          "Shoots, extra platforms, additional languages or campaign spikes outside scope",
          "Ad spend and ad management, which are usually separate budgets",
          "Your internal time for briefings, approvals and sharing product information",
          "Onboarding time, during which output is lower",
        ],
      },
      { type: "heading", text: "When in-house makes more sense", id: "when-in-house" },
      {
        type: "list",
        items: [
          "Social media is the main sales channel, for example orders taken through DMs.",
          "You need real-time presence: live events, news-led content, or constant customer conversation.",
          "Your product knowledge is hard to transfer, such as technical, medical or financial detail that needs daily expert input.",
          "You already have a marketing lead who can hire and manage creative people.",
          "You can sustain the full set of roles, or have a clear plan for which ones to combine.",
        ],
      },
      { type: "heading", text: "When outsourcing makes more sense", id: "when-outsource" },
      {
        type: "list",
        items: [
          "You need design, video, copy and reporting at once, and can't hire for all of them.",
          "Content needs are steady and plannable a month ahead.",
          "No one internally has the time or experience to manage a creative team.",
          "Your current setup depends on one person, and continuity has already been a problem.",
          "You want an outside view of what works across brands, not only inside your own.",
          "You plan to run creator campaigns alongside your own content and want them coordinated.",
        ],
      },
      { type: "heading", text: "The hybrid model", id: "hybrid" },
      {
        type: "paragraph",
        text: "Most brands that outsource well don't hand everything over. They keep ownership and business knowledge inside, and buy specialist capacity outside. Three common splits:",
      },
      {
        type: "table",
        headers: ["Model", "Who does what", "Works when", "Watch for"],
        rows: [
          ["In-house owner, agency execution", "Your marketing lead sets priorities and approves; the agency plans, creates, publishes and reports", "You have one capable owner but no creative team", "The owner becoming a bottleneck on approvals"],
          ["Agency strategy, in-house creation", "The agency sets strategy and calendars; your team creates and publishes", "You have designers or editors but no strategist", "Strategy that your team can't produce at the planned volume"],
          ["In-house day-to-day, agency for peaks", "Your team runs routine posting and replies; the agency handles launches, festive campaigns and video series", "Demand spikes a few times a year", "Inconsistent look between the two teams' work"],
        ],
      },
      {
        type: "paragraph",
        text: "Community management is a common split too. Many brands keep complaints, orders and refunds with their own support team and let the agency handle routine comments within agreed hours. The same in-house-or-agency question for creator programmes is covered in influencer marketing agency vs in-house.",
        links: [{ text: "influencer marketing agency vs in-house", href: "/blog/influencer-marketing-agency-vs-in-house" }],
      },
      { type: "heading", text: "Decision checklist", id: "decision-checklist" },
      {
        type: "list",
        items: [
          "Which platforms matter, and how much content does each need per month?",
          "Does anyone need to reply in real time, and during which hours?",
          "Which of the six roles do you already have, even part-time?",
          "Who will own social media internally and approve content?",
          "Can that person manage creative hires, or only review work?",
          "How often do you have launches, offers or festive peaks?",
          "How hard is your product knowledge to transfer to outsiders?",
          "What happens today when your social media person is on leave?",
          "Do you plan creator or influencer campaigns that should connect with your own content?",
          "Have you listed every cost category for both models, not just one salary against one fee?",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Hiring one junior generalist and expecting strategy, design, video and analytics.",
          "Outsourcing without naming an internal owner, so nobody approves or shares context.",
          "Comparing an agency fee with one salary and ignoring tools, management time and cover.",
          "Expecting an agency to handle customer support when it was hired for content.",
          "Switching models every few months before either has had time to settle.",
          "Running an in-house team and an agency without a shared calendar or style guide.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Whichever model you choose, keep account ownership and admin access with the business.",
          "Name one internal owner with authority to approve content and set priorities.",
          "Write down the scope, even for an in-house team: platforms, volume, reply hours.",
          "If you outsource, keep a monthly review with the agency and someone senior on your side.",
          "If you build in-house, hire the strategist or lead first, then the roles they need.",
          "Review the model after two quarters, using the decision checklist again.",
        ],
      },
      {
        type: "paragraph",
        text: "If you decide to outsource, the next steps are choosing a social media management agency and getting your side ready with the outsourcing social media management checklist. You can also see how social media management works at Kudozz, including which parts sit with the brand.",
        links: [
          { text: "choosing a social media management agency", href: "/blog/choose-social-media-management-agency" },
          { text: "outsourcing social media management checklist", href: "/blog/outsourcing-social-media-management-checklist" },
          { text: "how social media management works at Kudozz", href: "/services/social-media-management#process" },
        ],
      },
      { type: "heading", text: "Making the call", id: "conclusion" },
      {
        type: "paragraph",
        text: "In-house buys you closeness and speed; an agency buys you breadth and continuity. Work out which of those your business can least afford to lack, list the real cost categories for both, and remember that a hybrid with a strong internal owner is often the most stable answer.",
      },
    ],
    faqs: [
      {
        question: "Can one person manage social media for a growing brand?",
        answer:
          "For one platform and a modest posting rhythm, a capable person with good tools can manage. As platforms, video and community conversations grow, one person ends up choosing which jobs to skip, usually analysis and replies. Plan for either more people, an agency, or a narrower scope.",
      },
      {
        question: "Will an agency understand our brand as well as our own team?",
        answer:
          "Not on day one. An agency learns your brand through onboarding, guidelines, product training and feedback on drafts. It reaches a useful level when someone internal keeps sharing context: upcoming launches, customer questions and what the sales team hears. Without that input, agency content tends to stay generic.",
      },
      {
        question: "How long does it take to switch from an in-house team to an agency?",
        answer:
          "Plan for a handover period rather than a hard switch. The agency needs access, brand assets, past content and performance history, then time to audit and plan before its first calendar. Keeping the outgoing person involved during that period avoids a gap in posting and replies.",
      },
      {
        question: "Can we bring social media back in-house later?",
        answer:
          "Yes, if you planned for it. Keep accounts and admin roles in the company's name, make sure the contract transfers source files, templates and calendars, and ask for documented guidelines. Those let a new in-house team continue the same look and voice without starting from scratch.",
      },
    ],
  },
  {
    slug: "social-media-management-cost-india",
    category: "Social Media Management",
    title: "Social Media Management Pricing in India: What Influences the Monthly Cost?",
    seoTitle: "Social Media Management Cost in India: What Drives It",
    excerpt:
      "Why social media management quotes in India vary so much: the cost drivers behind a monthly fee, what changes a quote, what sits in separate budgets, a scope checklist and what cheap packages leave out.",
    metaDescription:
      "What drives social media management cost in India: platforms, content mix, video, community hours, reporting and approvals, plus a scope checklist to use.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "social media management cost in India",
      "social media management pricing",
      "social media agency charges",
      "Instagram management cost",
      "social media management packages",
    ],
    related: ["influencer-marketing-agency-fees-india", "ugc-content-cost-india", "influencer-marketing-cost-india"],
    hero: {
      src: "/blog/brand-guides/social-media-management-cost-india.svg",
      alt: "Diagram of the main drivers of a monthly social media management fee, with ad spend, influencer fees and shoots shown as separate budgets",
    },
    body: [
      {
        type: "paragraph",
        text: "You asked four agencies to quote for 'Instagram and LinkedIn management'. The quotes came back so far apart that they can't be describing the same work, and they aren't. One assumed a few designed posts a week. Another assumed weekly Reels, daily comment replies and a monthly strategy call. Social media management pricing only makes sense once you know what each quote is actually buying.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media management cost in India depends on scope, not on a standard rate. The biggest drivers are the number of platforms, monthly content volume and mix (static, carousel, Reels), whether video is edited from your footage or shot, copy and languages, strategy depth, community management hours, reporting depth and approval rounds. Ad spend, ad management, influencer fees and shoots are usually separate budgets. Compare quotes against one written scope.",
      },
      { type: "heading", text: "What drives the monthly fee", id: "cost-drivers" },
      {
        type: "paragraph",
        text: "There's no standard price for social media management because there's no standard scope. A monthly fee is mostly people's time: strategists, designers, editors, copywriters and community managers. Anything that adds hours adds cost. These are the drivers that move it most.",
      },
      { type: "subheading", text: "Number of platforms" },
      {
        type: "paragraph",
        text: "Each platform needs its own planning, formats and copy. Instagram, LinkedIn and YouTube reward different content, so managing three platforms properly is close to three jobs. Posting the same image everywhere is cheaper, and usually performs like it.",
      },
      { type: "subheading", text: "Content volume and mix" },
      {
        type: "paragraph",
        text: "A static post, a ten-slide carousel and a scripted Reel take very different amounts of time. Carousels need a narrative and several designed slides. Reels need a script, hook, edit, captions and often music checks. Two packages with the same number of 'posts' can differ widely in effort depending on this mix. Stories add volume too, and are often left unquantified.",
      },
      { type: "subheading", text: "Video: editing versus shoots" },
      {
        type: "paragraph",
        text: "Editing footage you supply is part of many management scopes. Shooting is a different cost: crew, equipment, location, talent and a day of someone's time. Many agencies scope shoots separately. If your brand needs professional or on-location shoots every month, expect a separate line or a separate budget.",
      },
      { type: "subheading", text: "Copy and languages" },
      {
        type: "paragraph",
        text: "Captions, hooks and Reel scripts are writing work. Posting in more than one language adds proper transcreation, not just translation, and needs fluent writers and reviewers. Regional language content for Tier 2 and Tier 3 audiences is a common reason a quote rises.",
      },
      { type: "subheading", text: "Strategy depth" },
      {
        type: "paragraph",
        text: "A one-time content plan costs less than ongoing strategy with competitor reviews, quarterly planning and monthly review calls. The cheaper option suits a stable brand; the deeper option suits one that is launching, repositioning or entering new platforms.",
      },
      { type: "subheading", text: "Community management hours and response times" },
      {
        type: "paragraph",
        text: "Checking comments once a day on weekdays is very different from replying within an hour, seven days a week, including direct messages. Response times, weekend cover and DM handling are among the largest hidden variables. Customer support, such as order issues and refunds, is a separate job and usually priced separately if offered at all.",
      },
      { type: "subheading", text: "Reporting depth" },
      {
        type: "paragraph",
        text: "A platform-insights export takes minutes. A report that compares formats, links social to website clicks or enquiries where tracking exists, and recommends what to change next month takes analyst time.",
      },
      { type: "subheading", text: "Approval rounds" },
      {
        type: "paragraph",
        text: "Each revision round costs design and copy time. A brand with three approvers and four rounds per post costs more to serve than one with a single approver and two rounds. Agencies price this in, either openly or by limiting revisions.",
      },
      { type: "subheading", text: "Festive and campaign spikes" },
      {
        type: "paragraph",
        text: "Diwali, end-of-season sales, launches and events need more content in a short window. Some agencies include a set number of campaign posts; others quote extra for peak months. Agree this before October, not during it.",
      },
      { type: "subheading", text: "Tools" },
      {
        type: "paragraph",
        text: "Scheduling, design, stock libraries, licensed music and listening tools all have subscription costs. Ask whether these are absorbed in the fee, passed through, or expected on your own accounts.",
      },
      { type: "heading", text: "What changes the quote", id: "what-changes-the-quote" },
      {
        type: "table",
        headers: ["If you change this", "What it adds to the work", "Effect on the quote"],
        rows: [
          ["Add a platform", "Separate planning, formats, copy and reporting", "Raises it; less if content is adapted rather than created new"],
          ["Shift the mix from static posts to Reels", "Scripting, editing, captions, music checks", "Raises it"],
          ["Move from editing your footage to agency shoots", "Crew, kit, location, talent, shoot days", "Usually a separate quote"],
          ["Add a second content language", "Transcreation and native review", "Raises it"],
          ["Extend reply hours to evenings and weekends", "More community management time", "Raises it noticeably"],
          ["Include DMs, not just comments", "Higher volume and more escalations", "Raises it"],
          ["Ask for deeper reporting and a monthly review call", "Analyst and lead time", "Raises it"],
          ["Cut approvers to one and rounds to two", "Less rework", "Can lower it or free time for more content"],
          ["Supply good raw footage and product photos", "Less sourcing and production", "Can lower it"],
          ["Add festive or launch campaigns", "Extra content in a short window", "Extra for those months, unless pre-agreed"],
        ],
      },
      {
        type: "paragraph",
        text: "An agency that won't tell you how its quote moves when the scope changes makes it hard to plan. Ask for the effect of each change in writing.",
      },
      { type: "heading", text: "What sits in separate budgets", id: "separate-budgets" },
      {
        type: "paragraph",
        text: "A management fee pays for managing your organic presence. Several costs that brands often assume are included usually aren't:",
      },
      {
        type: "list",
        items: [
          "Ad spend: paid by you to Meta, LinkedIn, Google or another platform, never part of a management fee.",
          "Ad campaign management: a separate job from organic management, often with its own fee.",
          "Influencer and creator fees: quoted per creator, with any agency fee for running the campaign on top.",
          "Shoots: photography and video production, scoped per shoot.",
          "Product samples and shipping for creators or shoots.",
          "Paid tools, such as advanced social listening.",
          "Customer support and crisis communication, if you need them.",
        ],
      },
      {
        type: "paragraph",
        text: "If creators are part of the plan, read influencer marketing agency fees in India to see how those charges are structured. The difference between running organic content and running paid campaigns is explained in organic vs paid social media.",
        links: [
          { text: "influencer marketing agency fees in India", href: "/blog/influencer-marketing-agency-fees-india" },
          { text: "organic vs paid social media", href: "/blog/organic-vs-paid-social-media" },
        ],
      },
      { type: "subheading", text: "GST on agency invoices" },
      {
        type: "paragraph",
        text: "GST applies to a registered agency's fees in India. Ask every agency to show the fee before GST and the GST amount as separate lines, so you compare like with like, and confirm the applicable rate and whether you can claim input tax credit with your accountant or CA.",
      },
      { type: "heading", text: "Monthly scope checklist", id: "scope-checklist" },
      {
        type: "paragraph",
        text: "Fill this in before asking for quotes, and ask each agency to quote against it. It also becomes the scope annexe in your contract.",
      },
      {
        type: "template",
        label: "Monthly social media management scope",
        text: "PLATFORMS\n[ ] Instagram   [ ] Facebook   [ ] LinkedIn   [ ] YouTube   [ ] Pinterest   [ ] X   [ ] Other: ____\n\nCONTENT PER MONTH (per platform)\nStatic posts: __   Carousels: __ (max slides: __)   Reels / Shorts: __   Stories: __\nCreated new for each platform, or adapted from one master: ____\n\nVIDEO\nSource footage: [ ] we supply  [ ] creators supply  [ ] agency shoots (quote separately)\nScripting included: [ ] yes  [ ] no\n\nCOPY\nLanguages: ____   Reel scripts: [ ] yes  [ ] no   Hashtag research: [ ] yes  [ ] no\n\nSTRATEGY\n[ ] One-time strategy document   [ ] Monthly planning call   [ ] Quarterly review\n\nCOMMUNITY MANAGEMENT\nDays: ____   Hours: ____   Target response time: ____\n[ ] Comments  [ ] DMs   Escalation contact on our side: ____\n\nREPORTING\n[ ] Monthly report   [ ] Review call   Metrics agreed: ____\n\nAPPROVALS\nApprovers: ____   Revision rounds included: __   Our turnaround: __ working days\n\nPEAKS\nFestive or launch months: ____   Extra content in those months: ____\n\nOUTSIDE THIS FEE (confirm each)\nAd spend | Ad management | Influencer fees | Shoots | Samples and shipping | Paid tools | Customer support\n\nCOMMERCIALS\nFee before GST: ____   GST shown separately: [ ] yes   Minimum term: ____   Notice: ____",
      },
      { type: "heading", text: "Cheap packages: what you trade off", id: "cheap-packages" },
      {
        type: "paragraph",
        text: "Low-cost packages exist for a reason, and for a small business that needs a basic, regular presence they can be fine. The trade-offs are predictable, so check which ones you're accepting:",
      },
      {
        type: "list",
        items: [
          "Templated design that looks like other brands using the same templates.",
          "Few or no Reels, or Reels assembled from stock footage.",
          "No real strategy: content fills the calendar rather than serving a goal.",
          "Community management limited to occasional checks, or none.",
          "Reports that list numbers without explaining them.",
          "One person handling many accounts, so turnaround and attention suffer.",
          "Little help with claims, disclosures or licensed music.",
        ],
      },
      {
        type: "paragraph",
        text: "The opposite risk exists too. A large retainer with a strategy deck and no clear monthly deliverables is just as hard to judge. Price is only meaningful against a written scope.",
      },
      { type: "heading", text: "Questions to ask before accepting a proposal", id: "questions" },
      {
        type: "list",
        items: [
          "Can you quote against our scope checklist, line by line?",
          "How many posts, carousels, Reels and Stories per platform, per month?",
          "Is video edited from our footage, or do you shoot? What does a shoot cost extra?",
          "What are the community management hours, and are DMs included?",
          "How many revision rounds are included, and what happens beyond them?",
          "Which tools are included, and which would we pay for?",
          "How do festive and launch months change the fee?",
          "Is the fee shown before GST, with GST as a separate line?",
          "What is the minimum term and notice period?",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Fill in the scope checklist before you ask anyone for a price.",
          "Send the same scope to every agency, ideally inside a written brief.",
          "Set ad spend, influencer fees and shoots as separate budget lines from day one.",
          "Start with fewer platforms done properly, then add one when the first is stable.",
          "Agree peak-month content in advance so festive campaigns don't become surprise invoices.",
          "Review scope against actual delivery every quarter and adjust the fee or the work.",
        ],
      },
      {
        type: "paragraph",
        text: "The brief that carries this scope is covered in our social media agency brief template, and how to judge the agencies quoting on it in choosing a social media management agency. For comparison, our social media management scope lists what Kudozz includes by default and what it quotes separately, alongside what we do for brands more broadly.",
        links: [
          { text: "what we do for brands", href: "/for-brands" },
          { text: "social media agency brief template", href: "/blog/social-media-agency-brief" },
          { text: "choosing a social media management agency", href: "/blog/choose-social-media-management-agency" },
          { text: "our social media management scope", href: "/services/social-media-management#scope" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Instagram management cost, or the cost of any platform, is really the cost of a specific amount of planning, design, video, copy, community time and reporting. Write that amount down, ask every agency to price the same thing, and keep ads, creators and shoots in their own budgets.",
      },
      {
        type: "paragraph",
        text: "Once quotes are comparable, the cheapest one is rarely the deciding factor. The right one is the agency whose scope you understand and whose work you'd be happy to publish every week.",
      },
    ],
    faqs: [
      {
        question: "Why do social media agencies in India quote such different fees for the same request?",
        answer:
          "Because the request usually isn't the same once it's written down. Agencies fill gaps with their own assumptions about platforms, content mix, video, reply hours and reporting. Two quotes for 'Instagram management' can cover very different amounts of work. Sending a written scope to everyone narrows the gap and shows which differences are real.",
      },
      {
        question: "Is a fixed monthly package better than a custom scope?",
        answer:
          "A fixed package is simpler to buy and fine if it genuinely matches your needs. Check what a package assumes about Reels, Stories, revisions and community hours. A custom scope suits brands with launches, multiple languages or regulated categories, where standard assumptions often break down.",
      },
      {
        question: "Can we reduce the cost without reducing quality?",
        answer:
          "Often, yes. Supply good raw footage and product photos, keep one approver and two revision rounds, plan launches early, and start with fewer platforms. These cut rework and production time, so the same fee buys more useful content or a lower fee covers the same work.",
      },
      {
        question: "Should social media management and influencer marketing be on one invoice?",
        answer:
          "They can come from one agency, but keep them as separate lines. Management fees, creator fees and any agency fee for running creator campaigns behave differently and are reviewed differently. Separate lines make it easier to see what each part costs and to change one without renegotiating the other.",
      },
      {
        question: "How often should we revisit the scope and fee?",
        answer:
          "A quarterly review works for most brands. Compare what was delivered with the scope: number of posts and Reels, reply hours, revision rounds and extras. If you consistently need more or less, change the scope and fee together rather than letting extras pile up informally.",
      },
    ],
  },
  {
    slug: "social-media-agency-brief",
    category: "Social Media Management",
    title: "How to Write a Social Media Management Agency Brief: A Checklist for Brands",
    seoTitle: "Social Media Agency Brief: Checklist and Template",
    excerpt:
      "A copy-ready social media agency brief template, the questions to answer before you write it, a scope and deliverables checklist, what to share before and after an NDA, and how to run a fair agency process.",
    metaDescription:
      "Write a social media agency brief that gets comparable proposals: a copy-ready template, scope checklist, what to share before an NDA and how to run it fairly.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "social media agency brief",
      "social media management requirements",
      "social media marketing agency brief",
      "hiring social media agency checklist",
      "social media agency brief template",
    ],
    related: ["influencer-marketing-agency-brief", "influencer-marketing-rfp", "influencer-marketing-agency-pitch-questions"],
    hero: {
      src: "/blog/brand-guides/social-media-agency-brief.svg",
      alt: "The parts of a social media agency brief in order: business and goals, platforms and scope, ways of working, budget and process",
    },
    body: [
      {
        type: "paragraph",
        text: "A founder sends a two-line WhatsApp message to five agencies: 'Need someone to handle our Instagram and LinkedIn. Please share your packages.' Five PDFs come back, each describing a different service at a different price, and none of them mentions the product launch in March. The problem wasn't the agencies. It was the brief.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A good social media agency brief tells agencies what your business does, what social media should achieve, which platforms and how much content you need, how approvals and community management will work, your budget range, timelines and how you'll decide. Answer the key questions internally first, use a fixed template so proposals are comparable, keep sensitive data for after an NDA, and send it to three to five agencies at the same time.",
      },
      { type: "heading", text: "Answer these questions before you write", id: "before-you-write" },
      {
        type: "paragraph",
        text: "Most weak briefs are weak because the brand hasn't agreed internally on what it wants. Get the founder, marketing lead and whoever approves content to answer these together:",
      },
      {
        type: "list",
        items: [
          "What should social media do for the business in the next 6 to 12 months: trust before purchase, launches, enquiries, hiring, community?",
          "Who is the customer, and where do they actually spend time online?",
          "Which platforms are non-negotiable, and which are you unsure about?",
          "What has worked and not worked on your accounts so far?",
          "How much content can you realistically review and approve each month?",
          "Who approves content, and how fast can they turn it around?",
          "Can you supply footage and product photos, or will content need shoots?",
          "Who handles complaints, orders and refunds that arrive through social media?",
          "Are paid ads, creator campaigns or shoots part of this brief, or separate?",
          "What budget range is realistic, and for what term?",
        ],
      },
      {
        type: "paragraph",
        text: "If you can't answer the last two, read how the monthly cost is built in social media management cost in India first. If your accounts have history, a quick social media audit gives agencies far better context than a description from memory.",
        links: [
          { text: "social media management cost in India", href: "/blog/social-media-management-cost-india" },
          { text: "social media audit", href: "/blog/social-media-audit" },
        ],
      },
      { type: "heading", text: "Scope and deliverables checklist", id: "scope-checklist" },
      {
        type: "paragraph",
        text: "These are the social media management requirements agencies need in order to quote accurately. Tick each one as 'in scope', 'out of scope' or 'please advise'.",
      },
      {
        type: "list",
        items: [
          "Strategy: audit, platform recommendations, content pillars, brand voice guidelines",
          "Monthly content calendar and planning call",
          "Static posts and carousels: number per platform per month",
          "Reels or Shorts: number per month, and whether footage comes from you, creators or shoots",
          "Stories: number per week",
          "Copy: captions, hooks, Reel scripts, languages",
          "Scheduling and publishing",
          "Community management: platforms, days, hours, response time, comments and DMs",
          "Escalation route for complaints, orders and sensitive questions",
          "Monthly reporting and review meeting",
          "Festive, sale and launch campaigns in the period",
          "Paid ads management (state if this is a separate brief)",
          "Influencer or UGC content (state if this is a separate brief)",
          "Photo or video shoots",
          "Tools the agency should use or that you already pay for",
        ],
      },
      { type: "heading", text: "Social media agency brief template", id: "template" },
      {
        type: "paragraph",
        text: "Copy this into a document, fill in every bracket, and send the same version to every agency.",
      },
      {
        type: "template",
        label: "Social media management agency brief",
        text: "1. ABOUT US\nCompany, what we sell, price range, where we sell (website, marketplaces, stores, B2B)\nWho our customer is: [age, city tier, language, what they care about]\nCompetitors or brands we admire on social, and why: [ ]\n\n2. WHAT SOCIAL MEDIA SHOULD DO FOR US\nMain objective for the next [6/12] months: [ ]\nHow we'll judge progress: [e.g. reach, engagement on Reels, profile visits, website clicks, enquiries]\nWhat we will not judge it on: [ ]\n\n3. CURRENT STATE\nAccounts and handles: [ ]\nWhat has worked / not worked: [ ]\nWho runs it today: [ ]\nBrand guidelines available: [yes/no]  Past content library: [yes/no]\n\n4. SCOPE\nPlatforms: [ ]\nContent per month, per platform: static [ ] carousels [ ] Reels/Shorts [ ] Stories [ ]\nVideo source: [our footage / creators / shoots needed]\nLanguages: [ ]\nCommunity management: days [ ] hours [ ] response time [ ] DMs [yes/no]\nReporting: [monthly report / review call]\nKnown campaigns and dates: [launches, sales, festive periods]\nNOT in this brief: [paid ads / influencer campaigns / shoots / customer support]\n\n5. HOW WE WORK\nApprovers: [names/roles]  Revision rounds expected: [ ]  Our turnaround: [ ] working days\nOther agencies or teams you'll work with: [ads, PR, website]\nCategory rules: [claims we can't make, regulated topics]\n\n6. BUDGET AND TERM\nMonthly budget range for management, before GST: [ ]\nSeparate budgets (not to be included in your fee): [ad spend, creator fees, shoots]\nPreferred term: [ ] with review after [ ] months\n\n7. WHAT WE'D LIKE IN YOUR RESPONSE (max [ ] pages)\na) Your read of our objective and audience\nb) Recommended platforms and what you'd leave out\nc) Sample content approach for one month (no full creative needed)\nd) Monthly deliverables, line by line\ne) Team: names, roles, who leads day to day\nf) Process: calendar dates, approvals, community management, reporting\ng) Fee before GST, what's included, what's extra\nh) Two relevant work samples and one anonymised monthly report\ni) Standard contract terms: term, notice, ownership of accounts and files\n\n8. HOW WE'LL DECIDE\n[Criteria and weights, e.g. understanding of our business 25%, creative quality 25%, process and team 20%, reporting 10%, fee 20%]\n\n9. PROCESS AND DATES\nQuestions by [date] to [email]; answers shared with all agencies\nResponses by [date]; meetings [dates]; decision by [date]; start [date]\nUnpaid response, no spec creative expected. Ideas in responses remain the agency's unless we hire or pay for them.",
      },
      {
        type: "paragraph",
        text: "If you've briefed an influencer agency before, the structure will feel familiar, but the emphasis is different. An influencer marketing agency brief centres on a campaign and its creators; a social media brief centres on an ongoing monthly operation, so the scope, approvals and community management sections carry more weight.",
        links: [{ text: "influencer marketing agency brief", href: "/blog/influencer-marketing-agency-brief" }],
      },
      { type: "heading", text: "What to share now and what to keep for after an NDA", id: "nda" },
      {
        type: "table",
        headers: ["Share in the brief", "Share after shortlisting and an NDA", "Share only after signing"],
        rows: [
          ["Business overview, customer description, goals", "Sales figures, margins and channel mix", "Account access, through role-based permissions"],
          ["Public account handles and what's worked", "Unannounced launches and pricing plans", "Full content library and raw footage"],
          ["Brand guidelines (public parts)", "Internal performance dashboards", "Approver contact details and escalation numbers"],
          ["Budget range and term", "Detailed competitive strategy", "Customer service processes and templates"],
          ["Timelines and decision criteria", "Category legal guidance you've received", "Login-free shared folders for assets"],
        ],
      },
      {
        type: "paragraph",
        text: "Never send passwords or customer lists at the brief stage. Customer personal data shouldn't go to a pitching agency at all, and after signing, account access should be given through each platform's admin or partner roles rather than shared logins.",
      },
      { type: "heading", text: "How many agencies, and how to run a fair process", id: "process" },
      {
        type: "paragraph",
        text: "Three to five agencies is usually the right number. Fewer gives you little to compare; more makes it hard to give each response proper attention, and good agencies are less likely to invest in a pitch they see as a lottery.",
      },
      {
        type: "list",
        items: [
          "Send the same brief to everyone on the same day, with the same deadline.",
          "Set one window for questions and share all answers with every agency.",
          "Tell agencies how you'll decide, including criteria and weights.",
          "Don't ask for full creative campaigns unpaid. A one-month content approach is enough to judge thinking.",
          "Meet the people who would actually run your account.",
          "Score responses with the same scorecard, ideally with two people scoring separately.",
          "Tell every agency the outcome, including the ones you didn't choose.",
          "Don't use an agency's ideas from a pitch unless you hire or pay them.",
        ],
      },
      {
        type: "paragraph",
        text: "For a larger organisation that needs procurement sign-off, the more formal structure in our influencer marketing RFP guide adapts well to social media management. To score responses, use the scorecard in how to choose a social media management agency.",
        links: [
          { text: "influencer marketing RFP guide", href: "/blog/influencer-marketing-rfp" },
          { text: "how to choose a social media management agency", href: "/blog/choose-social-media-management-agency" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Asking for 'packages' instead of describing the work, then comparing prices for different scopes.",
          "Leaving out launch and festive dates, so proposals ignore your busiest months.",
          "Hiding the budget entirely, which produces proposals at every price level.",
          "Mixing paid ads, influencer campaigns and organic management in one vague scope.",
          "Not saying who approves content or how quickly, so agencies can't plan a workflow.",
          "Asking for unpaid spec creative, which favours agencies with time to spare over careful ones.",
          "Changing the brief for one agency mid-process without telling the others.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Keep the brief to three or four pages. Agencies should spend time thinking, not decoding.",
          "Share a budget range before GST, with ad spend and creator fees clearly outside it.",
          "Attach two or three posts you like and two you don't, with one line on why.",
          "Name what's out of scope as clearly as what's in.",
          "Hold a 30-minute briefing call for shortlisted agencies to ask questions.",
          "Once you've chosen, prepare your side with the outsourcing social media management checklist.",
        ],
      },
      {
        type: "paragraph",
        text: "If you'd like to see how one agency structures this work, what an agency like Kudozz includes in social media management sets out the standard scope and what sits outside it, and how we work with brands covers the wider service mix.",
        links: [
          { text: "what an agency like Kudozz includes in social media management", href: "/services/social-media-management" },
          { text: "how we work with brands", href: "/for-brands" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Spend an hour with your approvers answering the questions above, then fill in the template. The brief does most of the work in an agency search: a clear one produces comparable proposals, honest pricing and a realistic first month.",
      },
      {
        type: "paragraph",
        text: "Keep the final brief. It becomes the starting point for the scope annexe in your contract and the benchmark for your first quarterly review.",
      },
    ],
    faqs: [
      {
        question: "Should we include our budget in a social media agency brief?",
        answer:
          "Yes, as a range before GST. Without it, agencies guess, and you receive proposals at every price level that can't be compared. A range lets each agency tell you what it can deliver within it. Make clear that ad spend, creator fees and shoots are outside the range if they are.",
      },
      {
        question: "How long should agencies get to respond to a brief?",
        answer:
          "Around two weeks is reasonable for a social media management brief, with a question window in the first few days. Very short deadlines favour agencies with pre-made decks over those who tailor their thinking. If the brief is large or covers several markets, allow more time.",
      },
      {
        question: "Should we ask agencies for sample posts in their response?",
        answer:
          "Ask for a content approach for one month, such as pillars, formats and a few example post ideas, rather than finished designs. Finished creative takes real time, which is unfair to ask for unpaid, and agencies' existing samples already show execution quality. Judge thinking in the response and quality in the portfolio.",
      },
      {
        question: "Can one brief cover social media management and paid ads?",
        answer:
          "It can, but split them into separate sections with separate scopes and budget lines. Organic management and paid campaign management are different jobs, often done by different specialists. Separate sections let an agency strong in one say so, and let you compare each part fairly.",
      },
      {
        question: "What if no agency's response matches the brief?",
        answer:
          "Check the brief first: unclear scope or an unrealistic budget is the usual cause. If the brief was clear, talk to the closest two agencies about where they'd change it and why. Sometimes the right answer is a smaller first phase, such as one platform for three months, before the full scope.",
      },
    ],
  },
];
