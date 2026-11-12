import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 02, writer C (2026-11-12): platform management guides for a brand's own accounts. Facebook Pages (26),
 * LinkedIn company pages (27), YouTube channels (28) and Pinterest (29). Platform facts checked against official help
 * centres in November 2026. Sources log: smm-sources-smm-platforms.md in the batch scratchpad.
 */
export const smmPlatformPosts: BlogPost[] = [
  {
    slug: "facebook-page-management-for-business",
    category: "Social Media Management",
    title: "Facebook Page Management for Businesses: A Practical Strategy for Consistent Growth",
    seoTitle: "Facebook Page Management for Businesses: A Strategy",
    excerpt:
      "How to set up, run and report on a Facebook business Page: Page optimisation, content planning, Reels, community and local communication, Groups, publishing in Meta Business Suite and the metrics worth tracking.",
    metaDescription:
      "Facebook Page management for businesses: optimise your Page, plan posts and Reels, handle comments and local updates, schedule posts and report clearly.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "Facebook page management for businesses",
      "Facebook business page",
      "Facebook page optimisation",
      "Facebook marketing for small business",
      "Meta Business Suite scheduling",
    ],
    related: ["choose-social-media-platforms-for-business", "social-media-management-multiple-locations", "community-management-vs-customer-support"],
    hero: {
      src: "/blog/brand-guides/facebook-page-management-for-business.svg",
      alt: "A four-step Facebook Page management cycle: set up the Page, plan posts and short video, engage with comments and local updates, report on views, actions and reply times",
    },
    body: [
      {
        type: "paragraph",
        text: "Your Facebook Page was set up years ago. The cover photo shows an old offer, the opening hours predate your move, and the last post went out three months back. Customers still find the Page, message it and leave comments nobody answers. A neglected Page quietly tells people the business isn't paying attention.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Facebook Page management for businesses means keeping the Page accurate, publishing a steady mix of useful posts and short videos, replying to comments and messages within agreed hours, and reviewing performance every month. Start by fixing the basics: name, category, contact details, action button and who has access. Then plan content around what your customers ask and need, schedule it in Meta Business Suite, and judge results on views, interactions, messages and clicks rather than Page follows alone.",
      },
      { type: "heading", text: "Where Facebook fits for a business", id: "where-facebook-fits" },
      {
        type: "paragraph",
        text: "Many customers use Facebook to check that a business is real: recent posts, opening hours, reviews and a way to message. It tends to suit local services, retail, restaurants, education, events and community-led brands.",
      },
      {
        type: "paragraph",
        text: "It may not be a priority if your buyers are mostly on LinkedIn, if your category is driven by short-video discovery on Instagram or YouTube, or if your team can only sustain one platform properly. In that case, keep the Page accurate and responsive and put the main effort elsewhere. We cover that decision in how to choose social media platforms for your business, so this guide assumes you've decided Facebook deserves real attention.",
        links: [{ text: "how to choose social media platforms for your business", href: "/blog/choose-social-media-platforms-for-business" }],
      },
      { type: "heading", text: "Set up and optimise the Page", id: "page-setup" },
      {
        type: "paragraph",
        text: "Facebook moved business Pages to what Meta called the new Pages experience, announced in January 2021. It replaced Page likes with followers as the main audience count and let owners give people access by task, such as content, messages, insights or ads, instead of one level of control for everything. Facebook's Help Centre now describes Page access as either full control or partial (task-based) access, and a Page must keep at least one person with full control.",
        links: [
          { text: "announced in January 2021", href: "https://about.fb.com/news/2021/01/introducing-the-new-page-experience/" },
          { text: "Facebook's Help Centre", href: "https://www.facebook.com/help/289207354498410" },
        ],
      },
      {
        type: "paragraph",
        text: "Keep full control with two people on your payroll, give an agency only the tasks it needs, then work through the Page.",
      },
      {
        type: "list",
        items: [
          "Page name that matches your brand name on signage, invoices and your website.",
          "The most accurate category, so the Page appears for the right searches.",
          "A profile picture that reads clearly at small sizes, usually your logo.",
          "A cover image that shows what you do today, not last year's campaign.",
          "A short bio that says what you offer, where, and for whom.",
          "Phone number, email, website, address and service area, checked for accuracy.",
          "Opening hours, including how you'll handle holidays and festival closures.",
          "An action button that matches the one thing you want visitors to do, such as send a message, call or visit your website.",
          "A pinned or recent post that answers the most common question new visitors have.",
        ],
      },
      {
        type: "paragraph",
        text: "On the action button: Facebook's help article on adding an action button to your Page describes adding or editing it from the Page's options menu, and Meta notes a Page has one call-to-action button at a time. Menu labels change, so follow the current help page rather than an old screenshot.",
        links: [{ text: "adding an action button to your Page", href: "https://www.facebook.com/help/977869848936797" }],
      },
      { type: "heading", text: "Plan content around what Facebook does well", id: "content-planning" },
      {
        type: "paragraph",
        text: "Facebook rewards Pages that give people a reason to stop, comment or share. For most businesses that means practical, local and human content rather than polished brand announcements. A simple set of content pillars keeps the calendar balanced.",
      },
      {
        type: "table",
        headers: ["Content pillar", "What it does", "Example (hypothetical)"],
        rows: [
          ["Useful answers", "Solves a question customers ask often", "A clinic explains what to bring to a first appointment"],
          ["Product or service in use", "Shows what people actually get", "A furniture store shows one sofa in three room sizes"],
          ["Behind the scenes", "Builds trust in the people and process", "A bakery shows the 6am prep shift"],
          ["Local and community", "Connects the business to its area", "A gym shares a neighbourhood run it's hosting"],
          ["Offers and updates", "Drives action at the right time", "Festival hours and a limited-time service bundle"],
          ["Customer stories", "Social proof, only with permission", "A customer's review shared with their written consent"],
        ],
      },
      {
        type: "paragraph",
        text: "Put these into a monthly calendar so posting doesn't depend on someone remembering; our guide to building a monthly social media content calendar walks through it. If the same ideas go to Instagram too, adapt them rather than cross-posting identical captions.",
        links: [
          { text: "building a monthly social media content calendar", href: "/blog/monthly-social-media-content-calendar" },
        ],
      },
      { type: "subheading", text: "Reels and video" },
      {
        type: "paragraph",
        text: "Short vertical video is part of Facebook's feed through Reels, and Meta now reports a single 'views' figure across Reels, videos and photo posts. You don't need a separate production budget: short clips of a product in use or a staff member answering one question often beat an expensive brand film. Meta's guidance for creators also warns that reposting other people's content without meaningful changes is treated as unoriginal, so use your own footage.",
        links: [{ text: "warns that reposting other people's content", href: "https://creators.facebook.com/blog/combating-unoriginal-content" }],
      },
      { type: "heading", text: "Community interactions and local communication", id: "community-and-local" },
      {
        type: "paragraph",
        text: "On Facebook, comments and messages often matter more than the posts themselves. A customer asking 'are you open on Sunday?' under a post is a sale you can lose in an hour. Meta Business Suite's Inbox brings Facebook Page messages, Messenger, Instagram Direct messages and comments into one view, which makes it easier to assign and track replies.",
        links: [{ text: "Meta Business Suite's Inbox", href: "https://www.facebook.com/business/help/294426838452244" }],
      },
      {
        type: "list",
        items: [
          "Agree reply hours and a target response time that your team can actually keep.",
          "Write saved replies for the ten most common questions, then personalise each one.",
          "Move order issues, refunds and complaints to your support process, not a comment thread.",
          "Hide spam and abuse according to a written rule, and never delete fair criticism.",
          "Post local updates quickly: closures, power cuts, weather delays, new timings.",
        ],
      },
      {
        type: "paragraph",
        text: "Where routine engagement ends and customer service begins is a decision worth writing down; we cover it in community management vs customer support. If you run several outlets, Meta's store Pages structure lets a main Page sit above location Pages, and our guide to social media management for multiple locations explains when to use it.",
        links: [
          { text: "community management vs customer support", href: "/blog/community-management-vs-customer-support" },
          { text: "social media management for multiple locations", href: "/blog/social-media-management-multiple-locations" },
        ],
      },
      { type: "heading", text: "When a Facebook Group makes sense", id: "groups" },
      {
        type: "paragraph",
        text: "Facebook's Help Centre confirms that a Page can create a Group and post in it as the Page, and that existing Groups can be linked to a Page. A Group suits businesses with a genuine shared interest among customers: a fitness studio's members, parents at a learning centre, owners of a product that needs tips and troubleshooting, or a hobby brand.",
        links: [{ text: "a Page can create a Group", href: "https://www.facebook.com/help/598453443693392" }],
      },
      {
        type: "paragraph",
        text: "Don't start a Group just for a second feed of promotions. Groups need rules, moderators and weekly conversation starters. Without that time, a well-run Page beats an empty Group.",
      },
      { type: "heading", text: "Publishing with Meta Business Suite", id: "publishing" },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), Meta Business Suite lets you create a post and schedule it for your Facebook Page, and its calendar (Planner) shows scheduled posts and Stories by date, with drafts you can save and reschedule. You can also schedule from the Business Suite mobile app. If a scheduled post fails, Meta's help pages suggest checking the scheduled list for errors and publishing it manually.",
        links: [{ text: "schedule it for your Facebook Page", href: "https://www.facebook.com/business/help/1252240869631062" }],
      },
      {
        type: "paragraph",
        text: "Scheduling saves time, but someone should still check the first hour after each post goes live, when questions arrive. A third-party scheduler is fine if it connects through proper Page access, not a shared login.",
      },
      { type: "heading", text: "Reporting: what to measure each month", id: "reporting" },
      {
        type: "paragraph",
        text: "In November 2024 Meta introduced 'views' as its main reach-style metric across Facebook and Instagram, replacing plays for reels and video and impressions for photo and text posts. Views count repeat views, so they aren't the number of people reached. Report a small set of measures and explain them.",
        links: [{ text: "Meta introduced 'views'", href: "https://creators.facebook.com/introducing-views-to-simplify-content" }],
      },
      {
        type: "table",
        headers: ["Question", "What to look at", "Why it matters"],
        rows: [
          ["Are people seeing us?", "Views, and the trend across months", "Shows whether distribution is growing or shrinking"],
          ["Is the content working?", "Reactions, comments and shares per post", "Separates useful posts from filler"],
          ["Are people taking action?", "Messages, calls, link clicks, direction requests", "Closest link to enquiries and visits"],
          ["Are we responsive?", "Reply time and unanswered messages", "Directly affects customer trust"],
          ["Is the audience growing?", "Net follows", "Useful context, not the main goal"],
        ],
      },
      {
        type: "paragraph",
        text: "Insights labels change, so match your report to your dashboard. For choosing which measures fit which goal, see social media KPIs by business goal.",
        links: [{ text: "social media KPIs by business goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Letting the Page's hours, phone number or address go out of date.",
          "Giving an agency full control when content and messages access would do.",
          "Copying Instagram captions word for word, hashtags and all.",
          "Posting offers only, so the Page reads like a noticeboard.",
          "Ignoring messages because nobody owns the inbox.",
          "Starting a Group without anyone to moderate it.",
          "Reporting follower counts without saying what they mean for the business.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Do a one-time Page clean-up before planning any content.",
          "Pick three or four content pillars and keep them for at least a quarter.",
          "Include a short video in most weeks, made from your own footage.",
          "Name one person responsible for the inbox and agree reply hours.",
          "Review the month's posts against messages and clicks, not views alone.",
        ],
      },
      {
        type: "paragraph",
        text: "If Facebook is one of several platforms you run, the operations side is covered in how to manage multiple social media accounts. For reference, here is how Kudozz plans platforms within a managed social media service, and if you also run creator campaigns that need Facebook support, multi-creator social campaigns are scoped separately.",
        links: [
          { text: "how to manage multiple social media accounts", href: "/blog/manage-multiple-social-media-accounts" },
          { text: "plans platforms within a managed social media service", href: "/services/social-media-management#platforms" },
          { text: "multi-creator social campaigns", href: "/services/social-campaigns" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Fix the Page before you post more. Accurate details, a clear action button, sensible access and an owned inbox do more for most businesses than a burst of new content. Then commit to a rhythm you can sustain, with a short monthly review of what customers responded to.",
      },
    ],
    faqs: [
      {
        question: "How often should a business post on its Facebook Page?",
        answer:
          "There's no official number. Post as often as you can keep quality and replies up. For many small businesses that's a few times a week, with at least one short video. A Page that posts daily for a month and then stops looks worse than one posting twice a week all year.",
      },
      {
        question: "Should we boost Facebook posts?",
        answer:
          "Boosting turns a post into a paid ad, so it's a paid media decision with its own budget. It can help a strong local post reach more people nearby, but it doesn't fix weak content. Decide your organic plan first, then test small paid budgets separately and report them separately so you can see what the money did.",
      },
      {
        question: "Can the agency own or create our Facebook Page for us?",
        answer:
          "The Page should belong to your business, created under your business portfolio, with your own people holding full control. An agency can do the setup work through task-based access. If an agency already holds your Page, ask them to give your team full control and reduce their own access before anything else changes.",
      },
      {
        question: "Do Facebook reviews matter for a business Page?",
        answer:
          "For local businesses, recommendations and reviews on the Page are often read before someone visits or calls. Reply to them politely, including negative ones, and move specific complaints to a private channel. Never post fake reviews or ask staff to leave them, and only share a customer's review as content with their permission.",
      },
      {
        question: "Is Facebook still worth it if our audience is young?",
        answer:
          "It depends on your category and city, so check your own data rather than general assumptions. Look at where enquiries actually come from and who follows the Page today. Even if Facebook isn't a priority, keep the Page accurate and responsive, because people still use it to check that a business exists and is active.",
      },
    ],
  },
  {
    slug: "linkedin-company-page-management",
    category: "Social Media Management",
    title: "LinkedIn Company Page Management: How B2B Brands Can Build a Consistent Presence",
    seoTitle: "LinkedIn Company Page Management for B2B Brands",
    excerpt:
      "How to run a LinkedIn company page for a B2B brand: page optimisation, admin roles, content pillars, document posts, video and newsletters, the role of founders and employees, and what to report.",
    metaDescription:
      "LinkedIn company page management for B2B brands: optimise the page, set admin roles, plan content pillars, use document posts and newsletters, involve founders.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "LinkedIn company page management",
      "LinkedIn company page strategy",
      "LinkedIn page optimisation",
      "LinkedIn content for B2B",
      "LinkedIn Page analytics",
    ],
    related: ["linkedin-thought-leadership-marketing", "employee-influencer-marketing", "social-media-kpis"],
    hero: {
      src: "/blog/brand-guides/linkedin-company-page-management.svg",
      alt: "Four boxes showing how a LinkedIn company page, founder posts and voluntary employee shares work together, measured through Page analytics",
    },
    body: [
      {
        type: "paragraph",
        text: "Your founder's LinkedIn posts get comments from customers and investors. The company page, meanwhile, shares a press release every few weeks and the occasional 'we're hiring' graphic. Prospects who click through from a founder post land on a page that says very little about what you do or why anyone should care.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "LinkedIn company page management means keeping the page complete and current, publishing a planned mix of industry insight, product education, proof and culture, and connecting it to the people who post from personal profiles. Set clear admin roles, plan three to five content pillars, use formats like document posts, video and a Page newsletter where they fit, reply to comments, and report on what moves buyers, not on follower counts alone.",
      },
      { type: "heading", text: "What a company page is for", id: "company-page-role" },
      {
        type: "paragraph",
        text: "A company page and a founder's profile do different jobs. Personal posts usually travel further because people respond to people. The company page is where prospects, candidates, partners and investors go to check what the business does, how it talks, and whether it's active. It's the brand's official record on LinkedIn.",
      },
      {
        type: "table",
        headers: ["", "Company page", "Founder and employee profiles"],
        rows: [
          ["Voice", "The brand: 'we'", "The person: 'I'"],
          ["Best for", "Product education, proof, announcements, hiring, culture", "Opinions, lessons, stories, industry commentary"],
          ["Who controls it", "Page admins under agreed roles", "Each individual"],
          ["Trust signal", "Shows the business is active and credible", "Shows there are real experts behind it"],
          ["Risk if neglected", "Prospects find an empty or outdated page", "The brand depends on one person's posting habits"],
          ["Agency role", "Plan, write, design, publish and report", "Support with ideas or drafts only if the person wants it and approves every word"],
        ],
      },
      {
        type: "paragraph",
        text: "The people side is covered in more depth in our guides to LinkedIn thought leadership marketing and employee influencer marketing. This article focuses on the page.",
        links: [
          { text: "LinkedIn thought leadership marketing", href: "/blog/linkedin-thought-leadership-marketing" },
          { text: "employee influencer marketing", href: "/blog/employee-influencer-marketing" },
        ],
      },
      { type: "heading", text: "Optimise the page", id: "page-optimisation" },
      {
        type: "paragraph",
        text: "Start with who can do what. At the time of writing (November 2026), LinkedIn Page admin roles include Super admin, Content admin and Analyst. Content admins can create and manage posts; only super admins can edit the page and add or remove admins. Give an agency content admin access and keep super admin with two people inside the company.",
        links: [{ text: "LinkedIn Page admin roles", href: "https://www.linkedin.com/help/linkedin/answer/a541981" }],
      },
      {
        type: "list",
        items: [
          "Logo and cover image that match your current brand and say what you do.",
          "A tagline that names the customer and the problem, not a slogan.",
          "An 'About' section written for a buyer: what you sell, who it's for, where you operate.",
          "Website, industry, company size and locations filled in accurately.",
          "A custom button pointing to the one action that matters most.",
          "A pinned post that introduces the company or your most useful resource.",
          "Showcase Pages only for business units with a distinct audience.",
          "Career page features only if hiring is a real, ongoing goal.",
        ],
      },
      {
        type: "paragraph",
        text: "On the custom button: LinkedIn's Page help lists options such as 'Visit website', and its help article on the custom button says that without a Premium Company Page subscription the button only appears when members click 'More'. It also notes the feature is still rolling out, so you may not see it yet.",
        links: [{ text: "its help article on the custom button", href: "https://www.linkedin.com/help/linkedin/answer/a5993422" }],
      },
      {
        type: "paragraph",
        text: "Showcase Pages are extensions of the main page for a brand, business unit or initiative. LinkedIn's help says only a super admin of the parent page can create one, and a company can have up to 25. Most B2B brands don't need any; each one needs its own content plan. The Life tab, which shows culture, leaders and employee perspectives to candidates, is part of LinkedIn's paid Career Pages.",
        links: [
          { text: "LinkedIn's help says", href: "https://www.linkedin.com/help/linkedin/answer/44863" },
          { text: "paid Career Pages", href: "https://www.linkedin.com/help/lms/answer/a565388" },
        ],
      },
      { type: "heading", text: "B2B content pillars", id: "content-pillars" },
      {
        type: "paragraph",
        text: "A B2B page works when every post helps a buyer understand the problem, the options or your company. Three to five pillars keep it focused.",
      },
      {
        type: "table",
        headers: ["Pillar", "What it covers", "Formats that suit it"],
        rows: [
          ["Industry insight", "Trends, regulation changes, common mistakes in your buyers' world", "Text posts, document posts, newsletter"],
          ["Product and service education", "How it works, use cases, implementation, FAQs", "Short video, document walkthroughs"],
          ["Proof", "Customer stories with permission, results the customer has approved, certifications", "Document case summaries, quote graphics"],
          ["Culture and people", "Team, hiring, values in practice, events", "Photos, short video, employee spotlights"],
          ["Company news", "Launches, partnerships, office openings", "Announcement posts, events"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep company news to a minority of posts. A page that only announces things gives followers little reason to read. For a SaaS-specific version of this plan, see social media management for SaaS companies.",
        links: [{ text: "social media management for SaaS companies", href: "/blog/social-media-management-saas-companies" }],
      },
      { type: "heading", text: "Formats: documents, video, newsletters and events", id: "formats" },
      {
        type: "paragraph",
        text: "LinkedIn's help confirms you can upload a document to a post from a LinkedIn Page. Supported files are PDF, PowerPoint and Word, up to 100MB and 300 pages at the time of writing. Document posts display as swipeable pages, which suits step-by-step explainers, checklists and short case summaries. Design them for a phone screen: large text, one idea per page.",
        links: [{ text: "upload a document to a post", href: "https://www.linkedin.com/help/linkedin/answer/a518909" }],
      },
      {
        type: "paragraph",
        text: "Video works for product demos, customer interviews and short explainers from team members. Keep the first few seconds clear without sound, and add captions. LinkedIn also lets Page super admins and content admins create a Page newsletter if the page meets LinkedIn's access criteria, and Pages can host LinkedIn Events, including LinkedIn Live where the page is eligible.",
        links: [{ text: "create a Page newsletter", href: "https://www.linkedin.com/help/linkedin/answer/a596833" }],
      },
      {
        type: "paragraph",
        text: "A newsletter is a commitment. Only start one if you can publish on a regular schedule with something worth subscribing to, such as a monthly round-up of changes in your industry.",
      },
      { type: "heading", text: "Founders, employees and community engagement", id: "people-and-engagement" },
      {
        type: "paragraph",
        text: "LinkedIn used to offer a 'My Company' tab and employee advocacy tools for Pages. Its help centre says these were gradually discontinued from November 2024. Page admins can still reshare employees' posts that mention the company from the page's activity feed, and LinkedIn points to external partners for advocacy tools.",
        links: [{ text: "Its help centre says", href: "https://www.linkedin.com/help/linkedin/answer/a6836874" }],
      },
      {
        type: "list",
        items: [
          "Share the content calendar with founders and key team members so their posts can echo the page's themes.",
          "Reshare strong employee posts from the page, with their agreement.",
          "Never write in an employee's name without their approval of every word.",
          "Keep personal accounts personal: the company doesn't log in to them.",
          "Make participation voluntary and say so.",
        ],
      },
      { type: "subheading", text: "Community engagement" },
      {
        type: "paragraph",
        text: "Reply to comments on the page's posts within a day or two, as the page. Comment thoughtfully as the page on partners' and customers' posts where it adds something. Agree what gets escalated: pricing questions, complaints and anything about a contract go to the right person, not into a public thread.",
      },
      { type: "heading", text: "Reporting on a LinkedIn page", id: "reporting" },
      {
        type: "paragraph",
        text: "LinkedIn Page analytics cover visitors, followers, content and competitors. For posts, LinkedIn's combined post analytics define impressions as the number of times a post was displayed on screen, members reached as distinct members and pages that saw it, and engagements as reactions, comments, saves, sends and reposts. Competitor analytics let you compare follower and content metrics with similar organisations, with more competitors available on Premium.",
        links: [
          { text: "combined post analytics", href: "https://www.linkedin.com/help/linkedin/answer/a701208" },
          { text: "Competitor analytics", href: "https://www.linkedin.com/help/linkedin/answer/126090" },
        ],
      },
      {
        type: "list",
        items: [
          "Members reached and engagements per post, by pillar.",
          "Custom button clicks and website visits from LinkedIn, tracked with UTM tags.",
          "Follower growth from your target industries and job functions.",
          "Enquiries or demo requests where the person mentions LinkedIn.",
          "Which formats your audience saves and shares, not only reacts to.",
        ],
      },
      {
        type: "paragraph",
        text: "For a fuller view of which metrics fit which goal, see social media KPIs by business goal.",
        links: [{ text: "social media KPIs by business goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating the page as a press release archive.",
          "Giving an agency super admin access when content admin is enough.",
          "Creating Showcase Pages that are never updated.",
          "Expecting the company page to match a founder's reach, then giving up.",
          "Pressuring employees to share company posts.",
          "Reporting follower counts with no link to enquiries or hiring.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Rewrite the About section and tagline for a buyer before anything else.",
          "Plan pillars for a quarter and turn your best sales answers into document posts.",
          "Agree a light monthly sync between whoever runs the page and the founder.",
          "Use the custom button and UTM tags so clicks can be tracked.",
          "Review posts by pillar each month and drop the pillar that consistently underperforms.",
        ],
      },
      {
        type: "paragraph",
        text: "LinkedIn is one of the platforms covered in Kudozz's social media management scope. If you also plan to work with B2B creators on LinkedIn, the planning for that sits under campaign strategy.",
        links: [
          { text: "Kudozz's social media management scope", href: "/services/social-media-management#platforms" },
          { text: "campaign strategy", href: "/services/campaign-strategy" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Make the page a clear, current answer to 'what does this company do and for whom?'. Then publish a steady mix of education and proof, and let founder and employee posts carry the opinions. The page doesn't need to be loud. It needs to be consistent and useful when a buyer checks it.",
      },
    ],
    faqs: [
      {
        question: "How often should a B2B company post on its LinkedIn page?",
        answer:
          "LinkedIn doesn't publish an ideal frequency. Many B2B pages manage two to four planned posts a week, but the right number is what you can sustain with useful content. If you only have one good idea a week, post once and make it strong. Gaps of several weeks make the page look inactive to anyone checking it.",
      },
      {
        question: "Should we post the same content on the company page and the founder's profile?",
        answer:
          "Not word for word. The founder's version should be personal: why it matters to them, what they learned. The page's version can be more structured, such as a document post or a short explainer. Posting the same text from both looks automated and wastes the chance to reach people in two different ways.",
      },
      {
        question: "Is LinkedIn Premium Company Page worth paying for?",
        answer:
          "It depends on how you use the page. At the time of writing, Premium features include making the custom button visible directly on the page and tracking more competitors in analytics. Check LinkedIn's current help pages for what's included, then decide whether those features support a clear goal like demo requests or hiring.",
      },
      {
        question: "Can an agency comment and engage as our company page?",
        answer:
          "Yes, a content admin can reply to comments and post as the page, within agreed rules. Set out which topics the agency can answer directly and which go to your team, such as pricing, contracts, complaints and anything legal. The agency should never engage from employees' personal profiles.",
      },
      {
        question: "Do we need a separate Showcase Page for each product?",
        answer:
          "Usually not. A Showcase Page makes sense when a product or business unit has a clearly different audience that wants its own updates, and when you can staff its content. Otherwise, it splits a small following and leaves an extra page to maintain. Most B2B brands are better served by one strong main page.",
      },
    ],
  },
  {
    slug: "youtube-channel-management-for-brands",
    category: "Social Media Management",
    title: "YouTube Channel Management for Brands: From Content Planning to Performance Reporting",
    seoTitle: "YouTube Channel Management for Brands: A Guide",
    excerpt:
      "How a brand should run its YouTube channel: positioning, branding, long-form and Shorts planning, titles, thumbnails, chapters, playlists, publishing and the analytics that guide improvement.",
    metaDescription:
      "YouTube channel management for brands: position the channel, set up branding, plan long-form and Shorts, write titles, use chapters and read analytics.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "YouTube channel management for businesses",
      "YouTube channel strategy for brands",
      "YouTube for business",
      "brand YouTube channel",
      "YouTube analytics for brands",
    ],
    related: ["youtube-influencer-marketing-india", "youtube-seo-for-creators", "outsourcing-social-media-management-checklist"],
    hero: {
      src: "/blog/brand-guides/youtube-channel-management-for-brands.svg",
      alt: "A four-step YouTube channel management loop: position the channel, plan long-form and Shorts, package with titles, thumbnails, chapters and playlists, analyse CTR and retention",
    },
    body: [
      {
        type: "paragraph",
        text: "Your brand's YouTube channel has forty videos. Some are TV ads, a few are webinar recordings, and the newest is a product demo from eight months ago with an auto-generated thumbnail. There are no playlists, the banner still shows an old logo, and nobody has opened YouTube Analytics. The videos exist, but the channel isn't being managed.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube channel management for businesses is the ongoing work around the videos: deciding what the channel is for, keeping branding and permissions in order, planning long-form videos and Shorts, writing titles and descriptions, designing thumbnails, adding chapters, organising playlists, scheduling uploads and reading analytics to improve the next video. It's different from video production, which makes the footage. A channel needs both, but they're separate jobs.",
      },
      { type: "heading", text: "Channel management vs video production", id: "management-vs-production" },
      {
        type: "paragraph",
        text: "Brands often hire a production house, get good videos, and assume the channel will take care of itself. Or they hire someone to 'manage YouTube' and expect them to shoot as well. Separate the two jobs before you brief anyone.",
      },
      {
        type: "table",
        headers: ["", "Channel management", "Video production"],
        rows: [
          ["Main question", "What should the channel publish, and how will people find it?", "How do we make this video well?"],
          ["Typical tasks", "Positioning, content calendar, titles, descriptions, thumbnails, chapters, playlists, scheduling, comments, analytics", "Scripting, filming, lighting, sound, editing, motion graphics"],
          ["Cadence", "Ongoing, every week and month", "Per video or per shoot"],
          ["Inputs", "Business goals, audience questions, analytics", "Brief, script, location, talent, equipment"],
          ["Outputs", "A coherent channel that improves over time", "Finished video files"],
          ["Who usually does it", "Social media manager or agency", "Production team, editor or creators"],
        ],
      },
      {
        type: "paragraph",
        text: "Many social media teams edit short videos from footage the brand supplies, but full shoots are usually scoped separately. Be clear which of these you're buying.",
      },
      { type: "heading", text: "Position the channel", id: "positioning" },
      {
        type: "paragraph",
        text: "Write one sentence that says who the channel is for and what they get from it. 'Product videos' is not a position. 'Short, practical guides that help home bakers get better results with our ovens' is. That sentence decides what gets made and what doesn't.",
      },
      {
        type: "list",
        items: [
          "Who is the viewer, and what are they trying to do when they search?",
          "Which questions do customers ask your sales or support team every week?",
          "Which two or three recurring series could the channel be known for?",
          "What will you not publish here, such as TV ads with no context?",
          "How will a viewer move from the channel to your website or store?",
        ],
      },
      { type: "heading", text: "Channel branding and access", id: "branding-and-access" },
      {
        type: "paragraph",
        text: "YouTube's help article on managing channel branding says the profile picture, banner image and video watermark are edited in YouTube Studio under Customisation, then Profile. The profile picture shows on your channel, your videos and your public activity across YouTube; the banner sits at the top of the channel page; and the watermark can appear at the end of a video, from a custom start time, or throughout. The same area holds your channel name, handle, description and links.",
        links: [{ text: "managing channel branding", href: "https://support.google.com/youtube/answer/10456525" }],
      },
      {
        type: "paragraph",
        text: "Check the banner on a phone, a laptop and a TV preview, because it's cropped differently on each. Use a handle that matches your other social accounts where possible, and write a channel description that repeats the positioning sentence in plain words.",
      },
      {
        type: "paragraph",
        text: "For access, YouTube's channel permissions let you invite people as Manager, Editor, Viewer and other roles instead of sharing a password. An Editor can upload and publish but can't manage permissions or delete the channel. How to set this up before handing work to an agency is covered in the outsourcing social media management checklist.",
        links: [
          { text: "YouTube's channel permissions", href: "https://support.google.com/youtube/answer/9481328" },
          { text: "outsourcing social media management checklist", href: "/blog/outsourcing-social-media-management-checklist" },
        ],
      },
      { type: "heading", text: "Plan long-form videos and Shorts", id: "content-planning" },
      {
        type: "paragraph",
        text: "Long-form videos and Shorts do different jobs. Long-form suits tutorials, comparisons, demos, webinars and customer interviews: content people search for and watch with intent. Shorts suit quick tips, product moments, behind-the-scenes clips and teasers for longer videos. According to YouTube Help, square or vertical videos up to three minutes long, uploaded after 15 October 2024, can be categorised as Shorts.",
        links: [{ text: "According to YouTube Help", href: "https://support.google.com/youtube/answer/15424877" }],
      },
      {
        type: "table",
        headers: ["Format", "Good for", "Planning note"],
        rows: [
          ["Tutorials and how-tos", "Search, existing customers", "Build from real support questions"],
          ["Product demos and comparisons", "Buyers close to deciding", "Be honest about who the product isn't for"],
          ["Customer stories", "Trust and proof", "Only with written permission"],
          ["Webinars and talks", "B2B depth", "Cut into shorter chapters or clips"],
          ["Shorts", "Discovery, quick tips, teasers", "Plan as series, not one-offs"],
        ],
      },
      {
        type: "paragraph",
        text: "A brand doesn't need to publish weekly to run a good channel. A smaller number of well-planned long-form videos, supported by Shorts cut from the same material, is often more sustainable. The creator-side trade-offs are covered in YouTube Shorts vs long-form.",
        links: [{ text: "YouTube Shorts vs long-form", href: "/blog/youtube-shorts-vs-long-form" }],
      },
      { type: "heading", text: "Titles, descriptions, thumbnails and chapters", id: "packaging" },
      {
        type: "paragraph",
        text: "YouTube's performance FAQ says search ranks videos on how well the title, description and video content match a search, and on engagement for that search. It asks for titles and thumbnails that accurately represent the content and warns against misleading or sensational ones. Write titles the way a customer would search, then make them specific.",
        links: [{ text: "YouTube's performance FAQ", href: "https://support.google.com/youtube/answer/141805" }],
      },
      {
        type: "list",
        items: [
          "Title: the viewer's problem or question first, brand name only if people search for it.",
          "Description: a short summary in the first lines, then useful links and chapters.",
          "Thumbnail: one clear subject, few words, readable on a phone, consistent brand style.",
          "Chapters: timestamps for each section of longer videos.",
          "End screen and cards: point to the next most useful video or playlist.",
        ],
      },
      {
        type: "paragraph",
        text: "YouTube Help says custom thumbnails need a verified account. For manual chapters, YouTube's help on video chapters says the first timestamp must start at 00:00, there must be at least three timestamps in ascending order, and each chapter must be at least 10 seconds long. For more depth on keywords and search, see YouTube SEO for creators.",
        links: [
          { text: "custom thumbnails need a verified account", href: "https://support.google.com/youtube/answer/72431" },
          { text: "YouTube's help on video chapters", href: "https://support.google.com/youtube/answer/9884579" },
          { text: "YouTube SEO for creators", href: "/blog/youtube-seo-for-creators" },
        ],
      },
      { type: "heading", text: "Playlists, scheduling and premieres", id: "playlists-and-publishing" },
      {
        type: "paragraph",
        text: "Playlists turn a list of uploads into something a viewer can follow: 'Getting started', 'Recipes under 20 minutes', 'Customer stories'. Create them in YouTube Studio and feature the most useful ones on the channel home page. YouTube's playlist help notes a daily limit on how many public playlists a channel can create, so build them gradually.",
        links: [{ text: "YouTube's playlist help", href: "https://support.google.com/youtube/answer/57792" }],
      },
      {
        type: "paragraph",
        text: "Schedule uploads in YouTube Studio so they go live when your team can watch the first comments. For launches or big announcements, a Premiere lets viewers watch a video together with a countdown and live chat; YouTube Help explains how to set one instantly or for a scheduled date and time.",
        links: [{ text: "YouTube Help explains", href: "https://support.google.com/youtube/answer/9080341" }],
      },
      { type: "heading", text: "Read analytics and improve the next video", id: "analytics" },
      {
        type: "paragraph",
        text: "YouTube Analytics in Studio shows views, watch time, average view duration, audience retention and impressions click-through rate, among other metrics. YouTube defines impressions click-through rate as how often viewers watched a video after a registered impression, and notes that not every thumbnail sighting counts as an impression. Read these together, not alone.",
        links: [{ text: "YouTube defines impressions click-through rate", href: "https://support.google.com/youtube/answer/7628154" }],
      },
      {
        type: "table",
        headers: ["Metric", "What it tells you", "What to change if it's weak"],
        rows: [
          ["Impressions click-through rate", "Whether the title and thumbnail earn the click", "Test a clearer thumbnail or more specific title"],
          ["Audience retention", "Where viewers leave", "Tighten the opening, cut slow sections"],
          ["Average view duration", "How much of the video people watch", "Shorter videos, or better structure with chapters"],
          ["Watch time", "Total attention the channel earns", "More videos on topics that already hold viewers"],
          ["Traffic sources", "How people find you: search, suggested, external", "Lean into what's working"],
        ],
      },
      { type: "subheading", text: "A simple improvement loop" },
      {
        type: "paragraph",
        text: "Each month, pick the two best and two weakest videos. Look at retention graphs and traffic sources, write down one reason for each, and turn those into rules for the next month's videos. YouTube's key moments report, which shows how different moments held viewers' attention, is useful here. For presenting results to leadership, see social media reporting for founders.",
        links: [
          { text: "key moments report", href: "https://support.google.com/youtube/answer/9314415" },
          { text: "social media reporting for founders", href: "/blog/social-media-reporting-for-founders" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Uploading TV ads with no context and calling it a channel.",
          "Sharing the channel login instead of using channel permissions.",
          "Clickbait titles that the video doesn't deliver on.",
          "Auto-generated thumbnails on every video.",
          "Long videos with no chapters or structure.",
          "Treating Shorts as unrelated to the long-form plan.",
          "Reporting views only, with no look at retention or traffic sources.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Write the channel's one-sentence position and pin it to the calendar.",
          "Fix branding, handle, description and permissions in one session.",
          "Group existing videos into three to five playlists before making new ones.",
          "Plan each long-form video with two or three Shorts cut from it.",
          "Review two strong and two weak videos every month.",
        ],
      },
      {
        type: "paragraph",
        text: "YouTube is one of the platforms in Kudozz's managed social media service, with editing done from footage you or creators supply. If you plan to add creator integrations on YouTube, those are planned through campaign strategy.",
        links: [
          { text: "Kudozz's managed social media service", href: "/services/social-media-management#platforms" },
          { text: "campaign strategy", href: "/services/campaign-strategy" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Before you make another video, decide what the channel is for, tidy its branding and permissions, and organise what you already have into playlists. Then plan a small number of useful videos, package them well, and let analytics tell you what to make next.",
      },
    ],
    faqs: [
      {
        question: "How many videos should a brand publish on YouTube each month?",
        answer:
          "YouTube doesn't set a number. A brand with limited production capacity might publish one or two long-form videos a month with a few Shorts cut from each. That's more sustainable than weekly uploads that stop after six weeks. Choose a rhythm you can hold for at least two quarters, then adjust based on analytics.",
      },
      {
        question: "Should we upload our TV ads to YouTube?",
        answer:
          "You can, but don't make them the channel's main content. Ads uploaded alone rarely give viewers a reason to subscribe. If you do upload them, put them in a separate playlist, write useful descriptions, and make sure the channel's main shelf features videos that answer customer questions or show the product in use.",
      },
      {
        question: "Can we reuse Instagram Reels as YouTube Shorts?",
        answer:
          "Often, yes, if you own the footage and the music is licensed for use on YouTube. Remove other platforms' watermarks, check the audio, and write a new title and description for YouTube. Our guide to repurposing social media content covers how to adapt rather than copy.",
      },
      {
        question: "Who should own the brand's YouTube channel?",
        answer:
          "Your business, through a Google account that the company controls, with at least two internal people holding owner-level access. Agencies and freelancers should be added through channel permissions with the role they need, such as Editor. That way access can be removed cleanly if the relationship ends.",
      },
      {
        question: "How long does it take for a brand channel to see results?",
        answer:
          "There's no reliable timeline, and anyone who promises one is guessing. Search-led videos can keep attracting views for a long time after publishing, while others fade quickly. Judge the first few months on whether the system works: consistent uploads, improving click-through and retention, and videos that answer real customer questions.",
      },
    ],
  },
  {
    slug: "pinterest-marketing-for-business",
    category: "Social Media Management",
    title: "Pinterest Marketing Management for Brands: How to Build a Visual Content Strategy",
    seoTitle: "Pinterest Marketing for Business: A Visual Strategy",
    excerpt:
      "How to manage Pinterest for a brand: business account setup, claiming your website, boards and Pins, visual search, product discovery and India availability caveats, evergreen content and Pinterest Analytics.",
    metaDescription:
      "Pinterest marketing for businesses: set up a business account, claim your website, plan boards and Pins, use evergreen and product content, and read Pin stats.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: [
      "Pinterest marketing for businesses",
      "Pinterest business account",
      "Pinterest strategy for brands",
      "Pinterest boards and pins",
      "Pinterest Analytics",
    ],
    related: ["pinterest-influencer-marketing-india", "pinterest-product-marketing-creators", "choose-social-media-platforms-for-business"],
    hero: {
      src: "/blog/brand-guides/pinterest-marketing-for-business.svg",
      alt: "A four-step Pinterest flow: set up a business account and claim the website, name boards the way customers search, publish fresh Pins, measure saves and outbound clicks",
    },
    body: [
      {
        type: "paragraph",
        text: "A home décor brand has hundreds of good product photos and styled room shots sitting in a shared drive. They go up on Instagram once and then disappear down the feed. Meanwhile, people planning a new living room are saving ideas on Pinterest for months before they buy. That gap is where Pinterest can be useful.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Pinterest marketing for businesses means running a business account as a visual search library: claiming your website, organising boards around what customers plan and search for, publishing fresh Pins that link to useful pages, and reviewing Pin stats each month. It suits categories where people plan ahead, such as home, food, fashion, beauty, weddings, travel and DIY. Content can keep working long after it's posted, so it rewards steady, evergreen effort.",
      },
      { type: "heading", text: "Which businesses benefit, and when it's not a priority", id: "who-benefits" },
      {
        type: "paragraph",
        text: "Pinterest works best when your product is visual and people plan before buying. Think interiors and furniture, recipes and kitchen products, fashion and accessories, beauty looks, weddings and events, gifting, travel, crafts, gardening and parenting ideas.",
      },
      {
        type: "paragraph",
        text: "It's usually not a priority for B2B services, local businesses that rely on walk-ins and calls, categories with little visual appeal, or teams that can only run one platform well. Pinterest also needs somewhere useful to send people, usually a website, so brands that sell only through marketplaces may get less from it. The wider decision is covered in how to choose social media platforms based on your business model.",
        links: [{ text: "how to choose social media platforms based on your business model", href: "/blog/choose-social-media-platforms-for-business" }],
      },
      { type: "heading", text: "Set up a business account and claim your website", id: "business-account" },
      {
        type: "paragraph",
        text: "Pinterest's help says a business account is free and gives you Pinterest Analytics and the ability to run ads. You can convert an existing personal account and keep its Pins and followers, though business accounts are public.",
        links: [{ text: "a business account is free", href: "https://help.pinterest.com/en/business/article/get-a-business-account" }],
      },
      {
        type: "paragraph",
        text: "Next, claim your website. Pinterest explains that claiming shows you how often your content is shared on Pinterest and links your profile to Pins saved from your site. You need to own the domain and be able to edit its code, which is why most marketplace storefronts can't be claimed. Methods include an HTML tag, an HTML file or a DNS TXT record, and a website can be claimed by only one Pinterest account.",
        links: [{ text: "Pinterest explains that claiming", href: "https://help.pinterest.com/en/business/article/claim-your-website" }],
      },
      {
        type: "list",
        items: [
          "Business account created under a company email, with at least two internal admins.",
          "Profile name, photo and description that say what you sell and who it's for.",
          "Website claimed by your own team or developer.",
          "Boards created before the first Pins go up.",
          "UTM tags agreed for Pin links, so website traffic can be tracked.",
          "A list of the pages each Pin should send people to.",
        ],
      },
      { type: "heading", text: "Boards and Pins", id: "boards-and-pins" },
      {
        type: "paragraph",
        text: "Boards are how people browse your profile and how you organise ideas. Name them the way customers search, not after internal product codes: 'Small balcony ideas' rather than 'Collection B-24'. Board sections let you split a large board into subtopics. Aim for boards that are useful on their own, mixing your own Pins with a few relevant ideas.",
      },
      {
        type: "paragraph",
        text: "At the time of writing, Pinterest's Help Centre describes creating Pins from images or videos, and making collages from cut-outs of Pins in the app. Each Pin can carry a title, description and link. Pinterest's guidance on Pin performance recommends high-quality images or videos, publishing your own fresh Pins rather than repeatedly saving the same ones, and warns that repeated saves can be flagged as spam.",
        links: [
          { text: "creating Pins from images or videos", href: "https://help.pinterest.com/en/article/create-a-pin-from-an-image-or-video" },
          { text: "guidance on Pin performance", href: "https://help.pinterest.com/en/business/article/pin-performance-and-distribution" },
        ],
      },
      {
        type: "list",
        items: [
          "Vertical images and video that read clearly on a phone.",
          "A short text overlay that says what the idea is, where it helps.",
          "A title and description written in the words people search with.",
          "A link to the most relevant page, not always the home page.",
          "Several fresh Pins for one popular page, using different images or angles.",
        ],
      },
      { type: "heading", text: "Visual search and product discovery", id: "visual-search" },
      {
        type: "paragraph",
        text: "Pinterest Lens and visual search let people search with images: through the camera, a photo, or by selecting an item inside a Pin to find similar ideas and products. Pinterest's help on visual search notes it isn't available on ads or collage Pins. This is a good reason to use clear product photography where the item is easy to pick out.",
        links: [{ text: "Pinterest's help on visual search", href: "https://help.pinterest.com/en/article/use-visual-search-features" }],
      },
      {
        type: "paragraph",
        text: "For product discovery, Pinterest uses product Pins that show a product's title, description, price and availability, usually created in bulk from a retail catalog fed by your product data. A note for India: Pinterest's catalog help says Catalogs isn't available in every region and points to a separate availability list, and we couldn't confirm India's status from official pages at the time of writing (November 2026). Pinterest's ads overview also lists India under advertising partners rather than direct ad account setup. Check the current help pages, or ask Pinterest's partner, before planning catalog or shopping work.",
        links: [
          { text: "Pinterest's catalog help", href: "https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs" },
          { text: "ads overview", href: "https://help.pinterest.com/en/business/article/promoted-pins-overview" },
        ],
      },
      { type: "heading", text: "Evergreen, product and lifestyle content", id: "content-mix" },
      {
        type: "paragraph",
        text: "Pinterest says there's no set engagement window for Pins and that high-quality, relevant Pins can resurface seasonally. That makes evergreen ideas valuable: how-tos, guides, style ideas and seasonal plans you can refresh each year. Plan seasonal content early, because people tend to save ideas well before the event.",
      },
      {
        type: "table",
        headers: ["Content type", "What it looks like", "When it helps"],
        rows: [
          ["Product", "Clean product shots, close-ups, colour options", "People who already know what they want"],
          ["Lifestyle", "The product in a real room, outfit, table or routine", "People looking for ideas before choosing a product"],
          ["How-to", "Step-by-step images or short video", "Search-led discovery and saves"],
          ["Seasonal", "Festival décor, wedding looks, monsoon recipes", "Planning ahead of key dates"],
          ["Collections", "A set of products around one idea", "Gifting and room or outfit planning"],
        ],
      },
      {
        type: "paragraph",
        text: "Most brands need both product and lifestyle content: lifestyle earns the save, and product detail helps the click. Creator content can supply lifestyle images and video with the right usage rights; our guide to Pinterest product marketing with creators explains how brands plan that.",
        links: [{ text: "Pinterest product marketing with creators", href: "/blog/pinterest-product-marketing-creators" }],
      },
      { type: "heading", text: "Reading Pinterest Analytics", id: "analytics" },
      {
        type: "paragraph",
        text: "Pinterest's Pin stats define impressions as the number of times your Pins were on screen, saves as the number of times people saved your Pin to a board, Pin clicks as taps that lead to a destination on or off Pinterest, and outbound clicks as clicks to the destination URL. Video Pins have their own measures, such as video views and average play time.",
        links: [{ text: "Pin stats", href: "https://help.pinterest.com/en-gb/business/article/pin-stats" }],
      },
      {
        type: "list",
        items: [
          "Saves: the clearest signal that the idea was useful.",
          "Outbound clicks: whether Pins send people to your site.",
          "Top boards and Pins by saves and clicks over the last three months.",
          "Website sessions and conversions from Pinterest, from your own analytics.",
          "Which pages your Pins send traffic to, and whether those pages convert.",
        ],
      },
      {
        type: "paragraph",
        text: "Because Pins can keep working for months, compare quarters rather than single weeks. Choosing the right measures for your goal is covered in social media KPIs by business goal.",
        links: [{ text: "social media KPIs by business goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Cross-posting square Instagram images with no text or link.",
          "Linking every Pin to the home page.",
          "Board names that mean nothing to a customer.",
          "Saving the same Pin again and again instead of creating fresh ones.",
          "Starting seasonal content a week before the festival.",
          "Judging Pinterest on a single month's numbers.",
          "Planning catalog or shopping features without checking availability in India.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Claim your website before publishing anything.",
          "Start with five to eight boards built around customer searches.",
          "Turn your best product and lifestyle photography into fresh vertical Pins every week.",
          "Build a seasonal calendar a few months ahead.",
          "Review saves and outbound clicks by board each quarter, then prune or merge weak boards.",
        ],
      },
      {
        type: "paragraph",
        text: "Pinterest is one of the platforms in Kudozz's social media management, usually alongside Instagram for visual categories. If creators are part of the plan, start with our guide to Pinterest influencer marketing in India, and the planning sits under campaign strategy.",
        links: [
          { text: "Kudozz's social media management", href: "/services/social-media-management#platforms" },
          { text: "Pinterest influencer marketing in India", href: "/blog/pinterest-influencer-marketing-india" },
          { text: "campaign strategy", href: "/services/campaign-strategy" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "If your category is visual and your customers plan ahead, Pinterest is worth a steady, patient effort. Set up the business account, claim your website, build boards around customer searches and publish fresh Pins each week. Then judge it by saves and clicks over quarters, not days.",
      },
    ],
    faqs: [
      {
        question: "Is Pinterest used in India?",
        answer:
          "Yes, Pinterest is available in India, and people use it for ideas in categories like fashion, home, food and weddings. Some business features differ by country, though. Pinterest's ads overview lists India under advertising partners rather than direct setup, and catalog availability should be checked on Pinterest's help pages before you plan shopping features.",
      },
      {
        question: "Can we use Pinterest if we sell only on Amazon or Flipkart?",
        answer:
          "You can link Pins to marketplace listings, but you can't claim a marketplace storefront as your website, and you'll get less data. Pinterest works best when Pins lead to pages you control, such as product pages or guides on your own site. If you plan to build a website, Pinterest is one reason to do it.",
      },
      {
        question: "How many Pins should a brand publish each week?",
        answer:
          "Pinterest doesn't give a fixed number, but its guidance encourages creating fresh, original content weekly rather than resaving the same Pins. Pick a rhythm your design team can sustain, such as a handful of new Pins a week across your main boards, and keep it steady. Consistency over months matters more than bursts.",
      },
      {
        question: "Do hashtags matter on Pinterest?",
        answer:
          "Focus on clear titles, descriptions and board names written in the words people search for. Those tell Pinterest and users what the Pin is about. Don't stuff descriptions with keywords or tags; write one or two natural sentences that describe the idea and who it's for.",
      },
      {
        question: "Should we pay for Pinterest ads from day one?",
        answer:
          "Usually not. Build an organic base first, so you know which Pins and boards people save and click. That gives any later paid test better creative to start from. Paid ads are a separate decision with their own budget, and in India ad accounts may go through Pinterest's advertising partners.",
      },
    ],
  },
];
