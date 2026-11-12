import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 03, writer B (2026-11-12): employer branding on the company's own channels (05), social media
 * management for real estate developers (06), real estate social media marketing by buyer-journey stage (07)
 * and social media management for construction companies (09).
 * RERA, MahaRERA, DPDP and platform facts checked November 2026; sources log: smm-sources-smm-property.md
 * in the batch scratchpad.
 */

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };
const PUBLISHED = "2026-11-12";
const REVIEWED = "November 2026";

const SRC = {
  liCareerPages: "https://www.linkedin.com/help/lms/answer/a565388",
  liLifeTab: "https://www.linkedin.com/help/linkedin/answer/a550288",
  liEmployeePerspectives: "https://www.linkedin.com/help/linkedin/answer/71370",
  dpdpBackgrounder: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf",
  reraActText: "https://haryanarera.gov.in/admincontrol/acts",
  apReraAdGuidance: "https://rera.ap.gov.in/RERA/Views/AdvertisementGuidelines.aspx",
  mahareraOrder46: "https://maharera.maharashtra.gov.in/sites/default/files/Orders_and_circulars/115.pdf",
  mahareraOrder46C: "https://maharera.maharashtra.gov.in/sites/default/files/Orders_and_circulars/Order46Cof2025_DisplayofQRCodeForntSize.pdf",
  mahareraOrders: "https://maharera.maharashtra.gov.in/order",
  gaUtm: "https://support.google.com/analytics/answer/10917952",
};

export const smmPropertyPosts: BlogPost[] = [
  // 05: employer branding on the company's own channels
  {
    slug: "social-media-employer-branding",
    category: "Social Media Management",
    title: "Social Media for Recruitment and Employer Branding: How Companies Can Attract Better Talent",
    seoTitle: "Social Media Employer Branding: Attract Better Talent",
    excerpt:
      "How a company can use its own social accounts to show candidates what working there is really like: culture content, employee stories with consent, leadership posts, job content, approvals and a sample monthly calendar.",
    metaDescription:
      "Social media employer branding for your own channels: culture and employee content with consent, LinkedIn Life tab, a sample monthly calendar and approvals.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "10 min read",
    tags: [
      "social media employer branding",
      "employer branding on social media",
      "recruitment marketing on social media",
      "LinkedIn employer branding",
      "employer brand content calendar",
    ],
    related: ["employer-branding-influencer-marketing", "employee-influencer-marketing", "linkedin-company-page-management"],
    hero: {
      src: "/blog/brand-guides/social-media-employer-branding.svg",
      alt: "A four-week employer-brand content calendar: the work, the people, how we hire and growth, with consent and HR sign-off running under every week",
    },
    body: [
      {
        type: "paragraph",
        text: "A hiring manager posts a sales role on Monday. By Friday there are two hundred applications, most of them a poor fit, and the three people the team actually wanted asked a friend what the company is like instead of applying. The company page, meanwhile, shows a festival greeting from October and a product launch from August. Candidates who look you up before applying find nothing that answers their real questions.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media employer branding means using your company's own accounts to show candidates what working there is actually like: the work, the people, how leaders communicate, how hiring works and how people grow. It supports job ads rather than replacing them. Plan a monthly calendar around real employee stories (with written, revocable consent), team and leadership content, hiring-process explainers and answers to candidate questions, and get HR sign-off before anything goes live.",
      },
      { type: "heading", text: "Employer branding vs recruitment advertising", id: "employer-branding-vs-recruitment-ads" },
      {
        type: "paragraph",
        text: "The two get mixed up, and that is usually why employer-brand content feels like a stream of 'We're hiring!' tiles. Recruitment advertising fills a specific role now. Employer branding builds a reputation that makes the next fifty roles easier to fill. You need both, but they are planned, measured and approved differently.",
      },
      {
        type: "table",
        headers: ["", "Employer branding", "Recruitment advertising"],
        rows: [
          ["Goal", "Make the right people want to work with you", "Fill a named role by a date"],
          ["Timeframe", "Ongoing, built month after month", "A campaign that ends when the role is filled"],
          ["Audience", "Future candidates, current employees, alumni", "People who match this role today"],
          ["Typical content", "Team stories, work in progress, leadership views, hiring-process explainers", "Job posts, hiring-drive creatives, campus or walk-in announcements"],
          ["Signals to watch", "Quality of applicants, candidate questions, careers page visits over time", "Applications per role, time to shortlist"],
          ["Main owner", "HR or talent lead with marketing", "Recruiter and hiring manager"],
        ],
      },
      {
        type: "paragraph",
        text: "This guide covers the company's own channels. If you want outside creators to talk about working with you, that is a different programme, covered in our guide to employer branding influencer marketing. If you want employees to post from their personal profiles as voices for the company, read our guide to employee influencer marketing. The calendar below works alongside both.",
        links: [
          { text: "employer branding influencer marketing", href: "/blog/employer-branding-influencer-marketing" },
          { text: "employee influencer marketing", href: "/blog/employee-influencer-marketing" },
        ],
      },
      { type: "heading", text: "Start with the questions candidates ask", id: "candidate-questions" },
      {
        type: "paragraph",
        text: "The best employer-brand content answers questions candidates already have. Ask your recruiters what comes up in screening calls, ask interview panels what candidates ask at the end, and look at why offers were declined. You'll usually find the same handful of questions:",
      },
      {
        type: "list",
        items: [
          "What will my first three months actually involve?",
          "Who will I work with, and what is my manager like?",
          "How are promotions and pay reviews decided?",
          "Is the role on-site, hybrid or remote, and how strict is that?",
          "How many interview rounds are there, and how long does it take to hear back?",
        ],
      },
      {
        type: "paragraph",
        text: "Each question can become a post, a short video or a carousel. The method is the same one brands use for customer questions, which we explain in turning customer questions into social media content. Only answer what HR has agreed to say publicly: if your company doesn't publish salary bands, don't let a caption hint at one.",
        links: [{ text: "turning customer questions into social media content", href: "/blog/social-media-content-from-customer-questions" }],
      },
      { type: "heading", text: "Five content streams that show the workplace honestly", id: "content-streams" },
      { type: "subheading", text: "Culture content that is specific" },
      {
        type: "paragraph",
        text: "'We value collaboration' says nothing. A ninety-second video of how a design review actually runs, or a carousel showing how the support team hands over between shifts, says a lot. Show real routines, real rooms and real work. Skip stock photos and staged high-fives.",
      },
      { type: "subheading", text: "Employee stories" },
      {
        type: "paragraph",
        text: "Short profiles of people in the roles you hire for most: what they do on a normal day, what they found hard in the first month, what they've learned. Rotate across teams, levels and locations, and let people speak in their own words rather than in a polished script. Consent rules for these are covered in the next section.",
      },
      { type: "subheading", text: "Leadership communication" },
      {
        type: "paragraph",
        text: "Candidates want to know how the people at the top think. A founder explaining why the company changed its hybrid policy, or a department head walking through how the team sets goals, is more useful than a quote card. Keep it in the leader's own voice.",
      },
      { type: "subheading", text: "Job and hiring-process content" },
      {
        type: "paragraph",
        text: "Job posts work better when they describe the work, not just the requirements. Add explainers on the hiring process itself: the rounds, what each one tests, how long decisions take and how to prepare.",
      },
      { type: "subheading", text: "Recruitment campaigns" },
      {
        type: "paragraph",
        text: "Campus hiring, a new office opening or a large hiring drive deserve a short, focused campaign: a launch post, role explainers, a 'meet the team' series and reminders before the application window closes. Plan it as a block inside the calendar so it doesn't crowd out the ongoing stories. If paid promotion is part of the plan, budget and run it separately from organic management.",
      },
      { type: "heading", text: "Employee stories need consent you can prove", id: "employee-consent" },
      {
        type: "paragraph",
        text: "An employee's name, face, voice, role and story are personal data. India's Digital Personal Data Protection Act, 2023 and the DPDP Rules notified in November 2025 set out how organisations handle it. The PIB backgrounder on the Rules says consent must be clear, informed and easy to understand, and that individuals may withdraw it at any time. The Rules apply in phases over eighteen months, so check your current obligations with your legal or compliance team.",
        links: [{ text: "The PIB backgrounder on the Rules", href: SRC.dpdpBackgrounder }],
      },
      {
        type: "paragraph",
        text: "There is also a practical issue: employees may feel they can't say no to their employer. Make participation genuinely optional, keep the request away from performance conversations, and make it as easy to withdraw as it was to agree. A simple consent record should cover:",
      },
      {
        type: "list",
        items: [
          "Written consent before filming or photographing, naming the person and the content",
          "Where it will appear (which accounts, the careers page, paid promotion) and for how long",
          "A plain statement that they can withdraw at any time, and who to tell",
          "What happens on withdrawal: you stop new use and remove posts you control, with any practical limits explained upfront",
          "A separate check that the background shows no client names, screens, documents or colleagues who haven't agreed",
          "A review when someone leaves the company, so alumni content is used only with fresh agreement",
        ],
      },
      { type: "heading", text: "Which platforms suit employer branding", id: "platforms" },
      {
        type: "paragraph",
        text: "Pick platforms based on where the people you hire spend time, not where your marketing team is most active. For most companies hiring professionals, LinkedIn comes first. For campus, frontline or creative roles, Instagram and YouTube often carry more weight.",
      },
      {
        type: "table",
        headers: ["Platform", "Best employer-brand use", "Notes (at the time of writing, November 2026)"],
        rows: [
          ["LinkedIn company page", "Team stories, leadership posts, job posts, hiring-process explainers", "Career Pages, a paid add-on, add a Life tab and a Jobs tab to your page"],
          ["LinkedIn Life tab", "Culture, leaders, photos, employee perspectives and testimonials in one place", "Only on pages with Career Pages; employee perspectives use LinkedIn articles, not posts"],
          ["Instagram", "Office and site life, campus hiring, short day-in-the-life Reels", "Works well for younger and creative talent; keep it consistent with the main brand"],
          ["YouTube", "Longer role explainers, panel discussions, campus talks", "Useful for roles that need more explaining; titles should match what candidates search"],
        ],
      },
      {
        type: "paragraph",
        text: "LinkedIn's help centre describes Career Pages as adding a Life tab and a Jobs tab to a page, and lists the Life tab's sections: company leaders, culture highlights, company photos, employee perspectives and employee testimonials. Its help on employee perspectives says only LinkedIn articles by employees can be shared there, not posts, and that the section needs two to three articles to show. Check the current versions before you plan around them. For the day-to-day running of the page itself, see our guide to LinkedIn company page management.",
        links: [
          { text: "LinkedIn's help centre describes Career Pages", href: SRC.liCareerPages },
          { text: "lists the Life tab's sections", href: SRC.liLifeTab },
          { text: "Its help on employee perspectives", href: SRC.liEmployeePerspectives },
          { text: "LinkedIn company page management", href: "/blog/linkedin-company-page-management" },
        ],
      },
      { type: "heading", text: "A sample monthly employer-brand calendar", id: "sample-calendar" },
      {
        type: "paragraph",
        text: "This is a hypothetical month for a company hiring engineers and sales staff, posting on LinkedIn and Instagram. Treat it as a starting structure, not a posting target. Two good employer-brand posts a week will do more than five thin ones.",
      },
      {
        type: "table",
        headers: ["Week", "Theme", "LinkedIn", "Instagram", "Sign-off"],
        rows: [
          ["1", "The work", "Carousel: what a new sales hire does in month one", "Reel: a sprint review, filmed with the team's consent", "Team lead, HR"],
          ["2", "The people", "Employee story in their own words", "Day-in-the-life Reel from the same person", "Employee, HR"],
          ["3", "How we hire", "Post: our interview rounds and what each one tests; open roles", "Stories: candidate questions answered by a recruiter", "Recruiter, hiring manager"],
          ["4", "Growth and leadership", "Leader's post on how promotions are decided", "Carousel: learning programmes that actually exist", "Leader, HR"],
        ],
      },
      {
        type: "paragraph",
        text: "Fit these slots into your main brand calendar rather than a separate one. Our guide to building a monthly social media content calendar explains the fields and the planning meeting.",
        links: [{ text: "building a monthly social media content calendar", href: "/blog/monthly-social-media-content-calendar" }],
      },
      { type: "heading", text: "Approvals: who signs off what", id: "approvals" },
      {
        type: "paragraph",
        text: "Employer-brand content touches people, pay and policy, so it needs more than a marketing review. Agree the approver for each content type once, and write it into the calendar.",
      },
      {
        type: "table",
        headers: ["Content type", "Drafted by", "Approved by"],
        rows: [
          ["Employee story", "Social or HR team", "The employee, then HR"],
          ["Leadership post", "Comms or social team", "The leader, in their own words"],
          ["Job post", "Recruiter", "Hiring manager and recruiter"],
          ["Benefits, policies or pay", "HR", "HR head; legal if wording is contractual"],
          ["Awards or certifications", "Social team", "HR, with the award name, year and source on file"],
          ["Hiring campaign", "Social team", "Talent lead; legal for any contest or eligibility terms"],
        ],
      },
      {
        type: "paragraph",
        text: "Mention only awards and certifications you actually hold, with the issuing body and year, and remove them when they lapse. For setting up stages and turnaround times, see the social media content approval process.",
        links: [{ text: "the social media content approval process", href: "/blog/social-media-content-approval-process" }],
      },
      { type: "heading", text: "How to measure employer-brand engagement", id: "measurement" },
      {
        type: "paragraph",
        text: "There's no universal 'good' engagement rate for employer branding. Compare your own numbers month to month, and watch signals that connect to hiring:",
      },
      {
        type: "list",
        items: [
          "Visits to the careers page from social links, tracked with consistent link tags",
          "Applications by source, if your applicant tracking system records it",
          "Recruiter judgement of applicant quality from social-sourced candidates",
          "Questions candidates mention in interviews ('I saw your post about...')",
          "Comments and messages from people in the roles you hire for",
          "Offer-acceptance reasons and decline reasons, reviewed each quarter",
        ],
      },
      {
        type: "paragraph",
        text: "Treat these as directional. Candidates see your company in many places before applying, and no single post can claim a hire. Our guide to social media KPIs explains how to pick a small set of measures for a goal and report them honestly.",
        links: [{ text: "social media KPIs", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Posting only job openings, so the page reads like a job board",
          "Featuring the same three photogenic employees every month",
          "Filming people without written consent, or treating consent as permanent",
          "Showing perks that only some teams get as if everyone gets them",
          "Claiming 'best place to work' without a real, current award to back it",
          "Letting employer content contradict what recruiters say in interviews",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Start with ten real candidate questions, three employees who are happy to take part with written consent, and one leader willing to explain how the team works. That is enough for the first month. Review what candidates mention in interviews, and let that shape the next calendar.",
      },
      {
        type: "paragraph",
        text: "Monthly social media planning from Kudozz covers strategy, content planning, creative and publishing for brands that want help running this calendar; hiring decisions, consent records and HR approvals stay with your team.",
        links: [{ text: "Monthly social media planning from Kudozz", href: "/services/social-media-management#content-planning" }],
      },
    ],
    faqs: [
      {
        question: "Should we ask employees to share company posts on their own profiles?",
        answer:
          "You can invite them, but don't require it. Sharing should be voluntary, with no link to performance reviews, and people should feel free to skip posts they don't agree with. Give them a short guide on what they can and can't say about clients, numbers and internal matters. If you want a structured programme where employees post regularly as voices for the company, plan it separately with clear guidelines and disclosure rules.",
      },
      {
        question: "Can we keep using content featuring someone who has left the company?",
        answer:
          "Check the consent they gave and ask them again. Many former employees are happy to stay featured, but some aren't, and continuing to show someone as part of the team after they've left can mislead candidates. Remove or archive posts you control when someone withdraws consent, and avoid tagging former employees in new posts without asking first.",
      },
      {
        question: "Do we need a separate careers account on Instagram?",
        answer:
          "Usually not at first. A separate account needs its own steady flow of content and someone to answer messages, and many companies struggle to keep one going. Start with employer-brand posts on your main account, perhaps under a recurring series name. Consider a separate account only if you hire at large volume and have the content and people to run it properly.",
      },
      {
        question: "How often should we post employer-brand content?",
        answer:
          "Pick a rhythm you can sustain with real content, such as one or two employer-brand posts a week on your main hiring platform. Consistency matters more than volume. If you run out of genuine stories, slow down rather than filling the gap with generic quote cards. Add short bursts during campus seasons or hiring drives, then return to the normal rhythm.",
      },
      {
        question: "Can we share salary or benefits information in posts?",
        answer:
          "Only what HR has approved for public use. Benefits that differ by role, level or location need careful wording, so readers don't assume everyone gets them. If your company publishes salary ranges in job posts, keep social captions consistent with the official job description. When in doubt, describe how pay reviews work rather than quoting numbers.",
      },
    ],
  },

  // 06: social media management for real estate developers
  {
    slug: "social-media-management-real-estate-developers",
    category: "Social Media Management",
    title: "Social Media Management for Real Estate Developers: A Content Strategy That Builds Buyer Confidence",
    seoTitle: "Social Media Management for Real Estate Developers",
    excerpt:
      "How real estate developers can run project social accounts that build buyer confidence: project storytelling, dated construction updates, location and amenity content, RERA disclosures, enquiry handling and an approval checklist.",
    metaDescription:
      "Social media management for real estate developers: project content, dated construction updates, RERA disclosures, enquiry handling and a pre-publish checklist.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "11 min read",
    tags: [
      "social media management for real estate developers",
      "real estate developer social media strategy",
      "social media for builders",
      "property developer marketing",
      "RERA advertisement compliance",
    ],
    related: ["influencer-marketing-real-estate-brands-india", "social-media-content-approval-process", "community-management-vs-customer-support"],
    hero: {
      src: "/blog/brand-guides/social-media-management-real-estate-developers.svg",
      alt: "A developer's social media approval flow: site and sales team inputs, a RERA disclosure check, legal and sales sign-off, then publishing and enquiry routing",
    },
    body: [
      {
        type: "paragraph",
        text: "A buyer who booked in your second tower last year comments under a new Reel: 'The render shows a clubhouse. When will it actually be ready?' The post was made by a designer working from the launch brochure, and nobody on the social team knows the answer. In real estate, every post is read as a promise, and buyers hold developers to it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media management for real estate developers is mostly about accuracy. Build content around the project story, dated construction updates, location, amenities, walkthroughs and buyer education. Treat project posts as advertisements: under the RERA Act, 2016 they must carry the project's registration number and the authority's website, and states such as Maharashtra add more rules. Your legal and sales teams approve every post. An agency organises the workflow; it doesn't replace them.",
      },
      { type: "heading", text: "Start with the rules, because they shape every post", id: "rera-disclosures" },
      {
        type: "paragraph",
        text: "Most social media guides put compliance at the end. For developers it has to come first, because it decides what a post may say and what it must show. This section is general information, not legal advice; confirm the position for your project with your legal team and your state authority.",
      },
      { type: "subheading", text: "What the central Act says" },
      {
        type: "paragraph",
        text: "The Real Estate (Regulation and Development) Act, 2016 defines an advertisement broadly: any document described or issued as an advertisement through any medium, including any notice, circular or other publicity in any form, informing people about a real estate project or offering a plot, building or apartment for sale. Section 3(1) says a promoter shall not advertise, market, book, sell or offer for sale any plot, apartment or building in a project without registering it with the authority. Section 11(2) says the advertisement or prospectus issued by the promoter shall mention prominently the website address of the authority, where the project's details are entered, and include the registration number obtained from the authority.",
        links: [{ text: "The Real Estate (Regulation and Development) Act, 2016", href: SRC.reraActText }],
      },
      {
        type: "paragraph",
        text: "Section 12 adds a reason to be careful with every caption: where a person makes an advance or deposit based on information in a notice, advertisement or prospectus, or on a model apartment, and suffers loss because of an incorrect or false statement in it, the promoter must compensate them under the Act. State authorities publish their own guidance too; Andhra Pradesh RERA, for example, summarises these provisions on its advertisement guidelines page.",
        links: [{ text: "summarises these provisions on its advertisement guidelines page", href: SRC.apReraAdGuidance }],
      },
      { type: "subheading", text: "State rules: the MahaRERA example" },
      {
        type: "paragraph",
        text: "Maharashtra shows how far state requirements can go. MahaRERA Order No. 46/2023, dated 29 May 2023, requires promoters to display the project's QR code prominently on every project promotion or advertisement published after 1 August 2023, beside the registration number and website address, and lists social media advertisements among the media covered. Order No. 46C/2025, dated 8 April 2025, adds that the registration number and website address must be at least as large as the font used for the project's contact details, placed in the top-right quadrant in a highly visible colour, with the QR code legible and also in the top-right quadrant. The order sets out penalties for each violation.",
        links: [
          { text: "MahaRERA Order No. 46/2023", href: SRC.mahareraOrder46 },
          { text: "Order No. 46C/2025", href: SRC.mahareraOrder46C },
        ],
      },
      {
        type: "paragraph",
        text: "Other states have their own orders on size, placement and format, and they change. Before you design a template, check your state authority's current orders (MahaRERA lists its orders and circulars on its website) and have your legal team confirm whether organic posts, Stories and Reels covers are treated the same way as paid ads. When in doubt, treat them the same.",
        links: [{ text: "MahaRERA lists its orders and circulars", href: SRC.mahareraOrders }],
      },
      { type: "heading", text: "The content that builds buyer confidence", id: "content-workstreams" },
      {
        type: "paragraph",
        text: "Buyers are making one of the largest purchases of their lives, often over months. Content that helps them check, compare and understand does more than content that only says 'luxury living'. These workstreams cover most developer feeds:",
      },
      {
        type: "table",
        headers: ["Workstream", "What it shows", "Accuracy check before posting"],
        rows: [
          ["Project storytelling", "Why the project exists, design intent, architect and planning choices", "Every feature named is in the approved plan and the RERA listing"],
          ["Construction progress", "Dated site photos and video, completed stages", "Date shown on the post; matches what the site engineer confirms"],
          ["Location and neighbourhood", "Travel routes, schools, markets, the feel of the area", "No future infrastructure presented as certain; distances checked"],
          ["Amenities", "Clubhouse, open spaces, facilities, how they'll be used", "Labelled as completed, under construction or planned"],
          ["Site walkthroughs", "Sample flat, site visit routes, actual views", "Sample flats and renders labelled as such"],
          ["Buyer education", "Carpet area, the booking process, documents, RERA basics", "General information only; no legal or financial advice"],
        ],
      },
      { type: "subheading", text: "Construction updates: accurate and dated" },
      {
        type: "paragraph",
        text: "Progress posts are the most valuable content a developer can publish, because existing buyers and prospects both watch them closely. Put the capture date on every update, show the actual site rather than renders, and describe the stage in plain terms ('slab casting complete on floor 12', not 'nearing completion'). Under section 11(1), the promoter maintains a project webpage on the authority's website for public viewing; your social updates should never run ahead of what is reported there. Never state or imply a possession date unless legal has approved the exact wording and it matches your registered timeline.",
      },
      { type: "subheading", text: "Location, amenities and walkthroughs" },
      {
        type: "paragraph",
        text: "Neighbourhood content works when it's specific and honest: a real drive to the nearest school at morning rush hour is more believable than a map with 'minutes away' labels. Mention a proposed metro line or road only with its official status and source, and never as a reason the property will appreciate. Label renders as artist's impressions and sample flats as sample flats. Section 12 names model apartments specifically, so what a buyer sees in a walkthrough must match what they'll receive or be clearly marked as indicative.",
      },
      { type: "heading", text: "Platform roles for a developer", id: "platforms" },
      {
        type: "table",
        headers: ["Platform", "Main job", "What to post"],
        rows: [
          ["Instagram", "Discovery and project feel", "Reels of the site and neighbourhood, carousels explaining layouts and the buying process, Stories for site-visit days"],
          ["YouTube", "Considered research", "Full walkthroughs, construction progress videos, buyer education explainers"],
          ["Facebook", "Local reach and existing buyer communities", "Progress updates, event announcements, community posts"],
          ["LinkedIn", "Corporate reputation, partners and talent", "Company milestones, leadership views, hiring"],
        ],
      },
      {
        type: "paragraph",
        text: "For Reels specifically, our guide to an Instagram Reels strategy explains how to turn products and customer questions into a repeatable series. For working with local property creators on top of your own channels, see influencer marketing for real estate brands, which covers creator selection and disclosure.",
        links: [
          { text: "an Instagram Reels strategy", href: "/blog/instagram-reels-strategy-for-brands" },
          { text: "influencer marketing for real estate brands", href: "/blog/influencer-marketing-real-estate-brands-india" },
        ],
      },
      { type: "heading", text: "The enquiry journey: who answers, and how fast", id: "enquiry-journey" },
      {
        type: "paragraph",
        text: "Social media for developers generates enquiries through comments, DMs, lead forms and WhatsApp click-to-chat links. The weak point is almost always the handover. Decide who owns each channel before you publish anything that invites a response.",
      },
      {
        type: "list",
        items: [
          "Comments asking general questions: the social team answers with approved replies and points to the right channel",
          "Price, availability, offers or payment plans: always handed to the sales team, never quoted by the social team",
          "Existing buyer complaints or possession questions: routed to customer relations, with a holding reply",
          "DMs and WhatsApp: one named sales owner per project, with a target response time",
          "Lead forms: connected to the CRM with the project and source recorded",
          "Anything that sounds like a legal dispute: escalated to legal, not debated in comments",
        ],
      },
      {
        type: "paragraph",
        text: "Write the approved replies once and update them when prices, phases or timelines change. Our guide to community management vs customer support explains where the social team's role ends and the business's begins.",
        links: [{ text: "community management vs customer support", href: "/blog/community-management-vs-customer-support" }],
      },
      { type: "heading", text: "How an agency organises approvals", id: "approvals" },
      {
        type: "paragraph",
        text: "An agency or social media manager can draft, design, schedule and route content, but it cannot know whether a clubhouse will be ready in March or whether a disclosure format meets your state's latest order. The developer's own team decides those. A workable approval chain looks like this:",
      },
      {
        type: "table",
        headers: ["Stage", "Who", "What they check"],
        rows: [
          ["1. Inputs", "Site engineer, sales head", "Progress facts, dates, current inventory and offers"],
          ["2. Draft", "Social team or agency", "Copy, design and the disclosure template"],
          ["3. Sales review", "Sales or marketing head", "Pricing, availability and offer wording (or their removal)"],
          ["4. Legal sign-off", "Developer's legal or compliance owner", "RERA details, claims, possession wording, renders"],
          ["5. Publish and route", "Social team", "Posting, then enquiries to named owners"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep a record of who approved what and when. The broader process, with turnaround times, is covered in our social media content approval process guide.",
        links: [{ text: "social media content approval process", href: "/blog/social-media-content-approval-process" }],
      },
      { type: "heading", text: "Pre-publish compliance and approval checklist", id: "pre-publish-checklist" },
      {
        type: "paragraph",
        text: "Run every project post, Reel cover, Story and ad creative through this before it goes live. It's a working checklist, not a legal standard; adapt it with your legal team.",
      },
      {
        type: "list",
        items: [
          "The project is registered with the state authority before any promotion",
          "Registration number and authority website shown prominently, in your state's current format",
          "QR code, size and placement rules met where your state requires them (in Maharashtra, the top-right quadrant)",
          "Every amenity, specification and area figure matches the approved plan",
          "Renders labelled as artist's impressions; sample flats labelled as such",
          "Construction photos dated and taken on the actual site",
          "No possession date unless legal has approved the exact words",
          "No appreciation, rental yield or return claims of any kind",
          "No price, offer or payment plan unless sales has approved it for this post and date",
          "Location distances and travel times checked; proposed infrastructure shown with its official status",
          "People in the content have given written consent",
          "Sales and legal sign-off recorded with the date",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "paragraph",
        text: "The most expensive mistakes are small ones repeated across dozens of posts: a registration number in faint grey at the bottom of every creative, renders posted without a label, or a caption saying 'ready soon' that buyers screenshot later. Others are about tone: 'investment opportunity' language that implies returns, comparisons with competitors' projects, and deleting critical comments instead of answering them. Use one disclosure template per project, built to the strictest current rule in your state, so designers don't recreate it from memory each time.",
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Before planning content, build three things: a disclosure template per project, an approval chain with named people, and an enquiry routing sheet. Then start with dated progress updates, which buyers value most and which are easiest to keep accurate. Our companion guide on real estate social media marketing maps what to post at each stage of the buyer journey.",
        links: [{ text: "real estate social media marketing", href: "/blog/real-estate-social-media-marketing" }],
      },
      {
        type: "paragraph",
        text: "If you work with an outside team, a managed social media service like Kudozz's can run the calendar, creative, publishing and comment handling within an agreed scope, while every claim and disclosure is signed off by your sales and legal teams.",
        links: [{ text: "a managed social media service", href: "/services/social-media-management#process" }],
      },
    ],
    faqs: [
      {
        question: "Do organic Instagram posts count as advertisements under RERA?",
        answer:
          "The Act defines an advertisement broadly, including publicity in any form that informs people about a project or offers units for sale, so most project posts are likely to be covered. MahaRERA's orders list social media advertisements among the covered media. Whether a particular organic post, Story or Reel is treated as an advertisement is a question for your legal team and state authority. The safe practice is to apply the same disclosures to all project content.",
      },
      {
        question: "Can we post about a project before RERA registration comes through?",
        answer:
          "Section 3(1) of the Act says a promoter shall not advertise, market, book, sell or offer for sale units in a project without registering it. That rules out project promotion before registration. Brand-level content about the company, its completed projects or its team is a different matter, but anything that hints at an upcoming project should be checked with your legal team first.",
      },
      {
        question: "How often should construction updates go out?",
        answer:
          "Choose a rhythm you can keep accurate, such as a monthly progress post per project with dated photos, plus extra posts at real milestones. Buyers notice gaps, so a steady schedule matters more than frequency. Make sure each update is signed off by the site or project team, and that it never runs ahead of what the project reports to the authority.",
      },
      {
        question: "Should the social team quote prices in comments?",
        answer:
          "No. Prices, offers and payment plans change and differ by unit, and a quoted number in a public comment can be read as an offer. Have the social team reply with an approved message that moves the conversation to a named sales owner on WhatsApp, a call or a form. Sales can then give the current, unit-specific details and keep a record.",
      },
      {
        question: "Can we show investment returns or appreciation in our content?",
        answer:
          "Avoid it entirely. Nobody can promise how a property's value or rental income will change, and such claims can mislead buyers. Talk about what the project offers today and what has been approved, with proposed infrastructure shown only with its official status. If your sales team wants to discuss market trends, that conversation belongs with qualified advisers, not in social captions.",
      },
    ],
  },

  // 07: real estate social media marketing by buyer-journey stage
  {
    slug: "real-estate-social-media-marketing",
    category: "Social Media Management",
    title: "Real Estate Social Media Marketing: What Property Brands Should Post at Every Stage of the Buyer Journey",
    seoTitle: "Real Estate Social Media Marketing by Buyer Journey Stage",
    excerpt:
      "A buyer-journey content matrix for developers, brokers and channel partners: what to post for awareness, research, site-visit consideration and decision, which formats fit, and how to track enquiry quality.",
    metaDescription:
      "Real estate social media marketing by buyer stage: a content matrix for awareness, research, site visits and decision, formats, FAQs and enquiry tracking.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "10 min read",
    tags: [
      "real estate social media marketing",
      "real estate content ideas",
      "property marketing on Instagram",
      "real estate social media strategy",
      "real estate buyer journey content",
    ],
    related: ["influencer-marketing-real-estate-brands-india", "influencer-utm-tracking", "social-media-content-from-customer-questions"],
    hero: {
      src: "/blog/brand-guides/real-estate-social-media-marketing.svg",
      alt: "A property buyer-journey content matrix with four stages, awareness, research, site visit and decision, each showing the buyer's question and the content that answers it",
    },
    body: [
      {
        type: "paragraph",
        text: "A couple in Pune has been scrolling property Reels for three months. They've saved a few, followed two developers and one broker, and still haven't sent an enquiry. What they need now isn't another drone shot of a tower at sunset. It's a clear explanation of what 'carpet area' means, a real drive from the site to their office, and someone who answers when they finally message. Most property feeds keep posting for the first moment and ignore the rest of the journey.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Real estate social media marketing works best when you plan content by buyer stage. In awareness, show the project, the area and the lifestyle honestly. In research, educate: buying basics, area comparisons and FAQs. Before a site visit, reduce friction with walkthroughs and visit logistics. At decision, answer objections and explain the process. Track enquiries with UTM-tagged links and CRM source tags, and never promise returns, appreciation or possession dates.",
      },
      { type: "heading", text: "Who this matrix is for", id: "who-its-for" },
      {
        type: "paragraph",
        text: "The approach works for any property brand: a developer marketing its own projects, a brokerage covering several, or a channel partner promoting a developer's inventory. The stages are the same; what changes is how much you can say about a project and who signs it off.",
      },
      {
        type: "paragraph",
        text: "Disclosure rules apply to everyone promoting registered projects, not only developers. In Maharashtra, for example, MahaRERA's Order No. 46C/2025 is addressed to both promoters and registered real estate agents. We cover RERA registration numbers, QR codes and approvals in detail in our guide to social media management for real estate developers, so this article doesn't repeat them. Apply that checklist to every project post below.",
        links: [
          { text: "MahaRERA's Order No. 46C/2025", href: SRC.mahareraOrder46C },
          { text: "social media management for real estate developers", href: "/blog/social-media-management-real-estate-developers" },
        ],
      },
      { type: "heading", text: "The buyer-journey content matrix", id: "content-matrix" },
      {
        type: "paragraph",
        text: "Use this as a planning grid. Each month, check that every stage has content in the calendar. A feed that is all awareness gets views but few serious enquiries; a feed that is all decision content feels like a sales brochure.",
      },
      {
        type: "table",
        headers: ["Stage", "Buyer's question", "Content that answers it", "Best formats", "Next step offered"],
        rows: [
          ["Awareness", "Is this area or project worth a look?", "Neighbourhood stories, project reveal, lifestyle in the area, developer track record", "Reels, static posts", "Follow, save, visit profile"],
          ["Research", "Can we afford it, and how does it compare?", "Buying basics, area explainers, layout carousels, FAQ series", "Carousels, YouTube explainers", "Download floor plans, ask a question"],
          ["Site-visit consideration", "Is it worth a Saturday to go and see it?", "Video walkthroughs, sample flat tour, route and visit logistics, construction progress", "Long walkthroughs, Stories", "Book a site visit"],
          ["Decision", "Is this the right choice, and what happens next?", "Objection answers, booking process explainer, documents checklist, existing buyer community updates", "Carousels, short Q&A videos, Stories", "Talk to a named sales contact"],
        ],
      },
      { type: "heading", text: "Awareness: earn the first look", id: "awareness" },
      {
        type: "paragraph",
        text: "At this stage, people aren't shopping for a project; they're forming a view of an area or a developer. Content that helps them picture daily life works better than spec lists. Ideas that suit this stage:",
      },
      {
        type: "list",
        items: [
          "A 'Saturday morning in this neighbourhood' Reel: the market, the park, the commute",
          "A project reveal that explains the design idea, not just the amenities list",
          "Completed projects revisited, with residents' consent, to show what you deliver",
          "Local history or landmark stories that give the area a personality",
        ],
      },
      {
        type: "paragraph",
        text: "Local area storytelling is where property brands can stand apart, because nobody else will film the walk from the gate to the nearest bus stop. Keep it accurate: real distances, real travel times at real hours, and any proposed road or metro shown with its official status rather than as a selling point.",
      },
      { type: "heading", text: "Research: become the most useful account they follow", id: "research" },
      {
        type: "paragraph",
        text: "This is the longest stage, and the one most feeds ignore. Buyers are comparing projects, working out budgets and learning vocabulary. Educational content earns saves and shares here, and it builds trust that pays off later.",
      },
      { type: "subheading", text: "Home-loan basics, framed generally" },
      {
        type: "paragraph",
        text: "Many buyers need a loan, and they have basic questions: what a down payment covers, what a sanction letter is, how EMIs relate to tenure, which documents banks usually ask for. Explain these terms in general language, without quoting interest rates, eligibility figures or lender comparisons, and tell viewers to confirm details with their lender or a qualified adviser. Rates and terms change and vary by person; a post that quotes them goes stale or misleads.",
      },
      { type: "subheading", text: "FAQs and objections" },
      {
        type: "paragraph",
        text: "Collect the questions your sales team hears every week and answer them one by one: carpet area vs built-up area, what maintenance charges cover, how parking is allotted, what 'under construction' means for the buyer. Our guide to turning customer questions into social media content shows how to turn these into a recurring series.",
        links: [{ text: "turning customer questions into social media content", href: "/blog/social-media-content-from-customer-questions" }],
      },
      { type: "heading", text: "Site-visit consideration: make the visit feel worth it", id: "site-visit" },
      {
        type: "paragraph",
        text: "A site visit costs the buyer half a day. Content at this stage should answer 'what will I see, and is it worth going?' Post full walkthroughs on YouTube, shorter cuts on Instagram, and practical details: visiting hours, directions, parking, how long a visit takes and who they'll meet. Show the actual site and dated construction progress alongside the sample flat, and label the sample flat and any renders clearly.",
      },
      { type: "heading", text: "Decision: answer the last doubts", id: "decision" },
      {
        type: "paragraph",
        text: "Close to booking, buyers want reassurance and clarity. Explain the booking process step by step, list the documents they'll typically need, and introduce the people they'll deal with after booking. Updates for existing buyers, such as progress posts and community events, are decision content too, because prospects watch how you treat people who have already paid. Leave prices, offers and payment plans to the sales conversation, where they can be specific and current.",
      },
      { type: "heading", text: "Choosing formats by stage", id: "formats" },
      {
        type: "table",
        headers: ["Format", "Strongest at", "Watch out for"],
        rows: [
          ["Reels and Shorts", "Awareness: area life, project reveal, quick myth-busters", "Renders passed off as real footage; missing disclosures on the cover frame"],
          ["Carousels", "Research and decision: explainers, layouts, process steps", "Too much text per slide; outdated figures"],
          ["Long walkthroughs", "Site-visit consideration", "Undated footage; sample flat not labelled"],
          ["Static posts", "Announcements, milestones, event dates", "Disclosure text too small to read"],
          ["Stories", "Visit-day logistics, quick polls, Q&A", "Questions left unanswered after the Story expires"],
        ],
      },
      {
        type: "paragraph",
        text: "For carousel structure, see our guide to planning Instagram carousels. If creators are part of the plan, influencer marketing for real estate brands covers working with local property creators alongside your own content.",
        links: [
          { text: "planning Instagram carousels", href: "/blog/instagram-carousel-strategy" },
          { text: "influencer marketing for real estate brands", href: "/blog/influencer-marketing-real-estate-brands-india" },
        ],
      },
      { type: "heading", text: "Tracking lead quality, not just lead count", id: "enquiry-tracking" },
      {
        type: "paragraph",
        text: "Property brands often judge social by the number of enquiries, then complain that the leads are poor. Track quality from the start. Tag every link in your bio, Stories and posts with UTM parameters; Google Analytics' help recommends always using utm_source, utm_medium and utm_campaign. Then record the source in your CRM for every enquiry, including those that arrive by WhatsApp or phone, and add tags your sales team can fill in after the first call.",
        links: [{ text: "Google Analytics' help recommends", href: SRC.gaUtm }],
      },
      {
        type: "list",
        items: [
          "Source and campaign (from the UTM or asked on the first call)",
          "Project and configuration enquired about",
          "Budget range and timeline, as stated by the buyer",
          "Site visit booked, completed or not",
          "Sales team's quality rating after the first conversation",
        ],
      },
      {
        type: "paragraph",
        text: "Expect gaps. Buyers forward posts on WhatsApp, see you on three platforms before calling, and often don't remember where they found you. Treat source data as directional, compare stages month to month rather than chasing a single cost-per-lead number, and look at which content themes appear in the history of buyers who actually visit. Our guide to UTM tracking explains the tagging itself in more detail.",
        links: [{ text: "UTM tracking", href: "/blog/influencer-utm-tracking" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "A feed that is ninety per cent awareness content and offers no help to serious buyers",
          "Promising appreciation, rental yields or 'investment returns'",
          "Quoting interest rates or loan eligibility in captions",
          "Using renders as if they were photographs",
          "Asking for enquiries without a named person ready to respond",
          "Judging success by lead count alone, without a quality tag",
          "Channel partners reusing a developer's creatives without the correct disclosures for their own registration",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Take last month's posts and sort them into the four stages. Most property brands find the research and decision columns nearly empty. Fill those first with one FAQ series and one walkthrough, set up UTM and CRM tags, and review which stage the enquiries that turn into site visits came through.",
      },
      {
        type: "paragraph",
        text: "Teams that want help planning a stage-based calendar can look at what an agency like Kudozz includes in social media management: strategy, content planning, creative and reporting, with disclosures and sales claims approved by your own team.",
        links: [{ text: "what an agency like Kudozz includes", href: "/services/social-media-management#scope" }],
      },
    ],
    faqs: [
      {
        question: "How many posts should a property brand publish each week?",
        answer:
          "There's no correct number. Decide by capacity and content quality: a small brokerage might manage three solid posts a week, while a developer with several projects may do more. What matters is that every buyer stage gets attention each month and that someone can answer the enquiries the posts generate. Volume without accurate, approved content creates risk rather than results.",
      },
      {
        question: "Can channel partners use the developer's photos and videos?",
        answer:
          "Only with the developer's permission, and with the correct disclosures for the project and, where state rules require it, the partner's own registration details. Agree in writing which assets can be used, for how long and with what changes. Ask the developer for an approved caption bank so prices, amenities and timelines stay consistent with the official information.",
      },
      {
        question: "Is Instagram or YouTube better for property marketing?",
        answer:
          "They do different jobs. Instagram tends to suit discovery and quick area or project content, while YouTube suits longer walkthroughs and explainers that buyers watch when they're seriously researching. Many property brands use both, with Instagram short cuts pointing to the full YouTube walkthrough. Choose based on where your buyers actually research and what you can produce consistently.",
      },
      {
        question: "Should we answer price questions in comments?",
        answer:
          "Reply publicly, but move the price conversation to a private channel with a named sales contact. Prices vary by unit, floor and offer, and a public figure can quickly become out of date or be read as a commitment. A short approved reply that thanks the person and offers a direct conversation keeps the comment section helpful without creating risk.",
      },
      {
        question: "How do we know if social media is producing serious buyers?",
        answer:
          "Look beyond enquiry counts. Track how many social-sourced enquiries book and complete a site visit, how your sales team rates them after the first call, and which content they engaged with first. Review these together each month. The numbers will be imperfect because buyers use several channels, but trends over a few months show whether your content attracts the right people.",
      },
    ],
  },

  // 09: social media management for construction companies
  {
    slug: "social-media-management-construction-companies",
    category: "Social Media Management",
    title: "Social Media Management for Construction Companies: Making Complex Projects Easier to Understand Online",
    seoTitle: "Social Media Management for Construction Companies",
    excerpt:
      "How contractors, EPC firms and builders can turn site work into clear B2B content: explaining complex work, milestones, safety and process education, team introductions, recruitment and a site-to-post approval workflow.",
    metaDescription:
      "Social media management for construction companies: explain complex work, share milestones, educate on safety and process, and use a site-to-post approval flow.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "10 min read",
    tags: [
      "social media management for construction companies",
      "construction company social media strategy",
      "social media for contractors",
      "construction marketing on LinkedIn",
      "construction site content approval",
    ],
    related: ["influencer-marketing-construction", "linkedin-company-page-management", "social-media-content-approval-process"],
    hero: {
      src: "/blog/brand-guides/social-media-management-construction-companies.svg",
      alt: "A site-to-post workflow for a construction company in four steps, capture, check, permission and publish, each with its named approver",
    },
    body: [
      {
        type: "paragraph",
        text: "Your team just finished a tricky foundation job under a live road, on time and without a single traffic diversion beyond what was planned. The project manager has two hundred photos on her phone. Six months later, the only post about it is a blurry crane shot captioned 'Another milestone achieved!' The client, the consultants and the engineers you want to hire never learn what was actually difficult or how your team solved it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media management for construction companies means turning site work into clear content for clients, consultants, partners and future hires. Explain methods simply, mark milestones with specifics, share safety and process education without unverified claims, and introduce the people behind the work. LinkedIn usually leads. Build a site-to-post workflow where the project manager checks facts, the client approves anything showing their project, and confidential details stay off camera.",
      },
      { type: "heading", text: "Who you're really talking to", id: "audiences" },
      {
        type: "paragraph",
        text: "Contractors and EPC firms don't sell to the public through social media; they build trust with people who influence tenders and partnerships. Each group needs something different:",
      },
      {
        type: "table",
        headers: ["Audience", "What they want to see", "Content that serves them"],
        rows: [
          ["Clients and developers", "Reliability, quality, communication", "Milestones, method explainers, project close-outs (with permission)"],
          ["Architects, consultants and PMCs", "Technical competence, coordination", "Problem-and-solution posts, engineering decisions explained"],
          ["Suppliers and subcontractors", "A partner worth working with", "Partner credits, process standards, site practices"],
          ["Engineers and site staff you want to hire", "Learning, safety culture, growth", "Team introductions, day-on-site videos, training content"],
          ["Local community near sites", "Disruption, timelines, contact points", "Approved notices about works, routes and contact details"],
        ],
      },
      {
        type: "paragraph",
        text: "Unlike real estate developers, who sell homes to buyers, most construction firms are B2B. If you also develop and sell your own projects, our guide to social media management for real estate developers covers the buyer-facing side and RERA disclosures. For the wider B2B content method, see our B2B social media strategy guide.",
        links: [
          { text: "social media management for real estate developers", href: "/blog/social-media-management-real-estate-developers" },
          { text: "B2B social media strategy", href: "/blog/b2b-social-media-strategy" },
        ],
      },
      { type: "heading", text: "Explaining complex work so non-engineers get it", id: "explaining-complex-work" },
      {
        type: "paragraph",
        text: "Most construction content fails because it shows the work without explaining it. A photo of rebar tells a client nothing. 'Why we used post-tensioned slabs here, and what it saved the client in floor height' tells them a lot. Use a simple structure for technical posts:",
      },
      {
        type: "list",
        items: [
          "The constraint: what made this part of the job difficult (site access, soil, live traffic, a tight schedule)",
          "The decision: the method or sequence the team chose",
          "The reason: why it suited this site, in one or two plain sentences",
          "The result: what was completed, stated factually and dated",
        ],
      },
      {
        type: "paragraph",
        text: "Short videos with an engineer talking over site footage work well for this, as do carousels with a simple diagram on each slide. Avoid jargon or explain it once. If a claim depends on numbers, such as time or cost saved, use only figures the project team has verified and the client has agreed you can share.",
      },
      { type: "heading", text: "Milestones and site progress", id: "milestones" },
      {
        type: "paragraph",
        text: "Milestones give a construction feed its rhythm: ground-breaking, foundation complete, structure topped out, façade closed, handover. Make each one specific. Name the stage, date it, and add one line on what it took, credited to the team and partners involved. Progress posts between milestones, such as a monthly 'from the site' update, keep the account active without needing a big event.",
      },
      {
        type: "paragraph",
        text: "Before posting, check that progress content doesn't reveal what a client hasn't announced: a tenant's identity, a launch date, a building's internal layout, or security features. Many contracts include confidentiality terms, so the client decides what can be shown and when.",
      },
      { type: "heading", text: "Safety and process education without risky claims", id: "safety-content" },
      {
        type: "paragraph",
        text: "Safety content can show that your company takes site practice seriously, and it helps recruitment. It also carries risk if handled carelessly. Educate rather than boast: explain why a toolbox talk happens before a shift, how a permit-to-work system works, or what a site induction covers. Show people wearing the protective equipment the task requires, because any image with a missing harness or helmet will be noticed.",
      },
      {
        type: "list",
        items: [
          "Don't publish safety records, incident-free hours or statistics unless they are verified, current and approved by your safety head",
          "Mention certifications only if you actually hold them, with the certifying body and validity checked",
          "Never post content from a site where an incident is under investigation",
          "Avoid footage of unsafe practice, even as a 'what not to do' example, unless it's clearly staged for training and labelled",
          "Get the client's and the site's permission before filming, and follow site rules on cameras and phones",
        ],
      },
      { type: "heading", text: "Introducing the team and your experts", id: "team-introductions" },
      {
        type: "paragraph",
        text: "Clients hire people, not logos. Introduce project managers, site engineers, planners, safety officers and supervisors: what they work on, a decision they're proud of, what they'd tell a junior engineer. These posts build trust with clients and are among the most useful content for hiring. Get written consent from anyone featured, keep personal details out, and let people review their own quotes.",
      },
      {
        type: "paragraph",
        text: "Recruitment deserves its own planned content stream, especially for site roles that are hard to fill. Our guide to social media employer branding covers employee stories, consent and a sample monthly calendar you can adapt for site teams.",
        links: [{ text: "social media employer branding", href: "/blog/social-media-employer-branding" }],
      },
      { type: "heading", text: "Choosing platforms", id: "platforms" },
      {
        type: "table",
        headers: ["Platform", "Role for a construction company", "Typical content"],
        rows: [
          ["LinkedIn", "The main B2B channel for clients, consultants and professional hires", "Milestones, method explainers, leadership views, team introductions"],
          ["YouTube", "A library of longer explainers and project films", "Construction sequence videos, technical talks, project close-out films"],
          ["Instagram", "Visual site storytelling and reaching younger site talent", "Short site videos, time-lapses, day-on-site Reels"],
          ["Facebook", "Local communities near sites and regional hiring", "Approved works notices, local hiring announcements"],
        ],
      },
      {
        type: "paragraph",
        text: "Most firms do best with LinkedIn done well plus one visual platform, rather than four done thinly. Our guides to LinkedIn company page management and YouTube channel management for brands cover running those channels week to week.",
        links: [
          { text: "LinkedIn company page management", href: "/blog/linkedin-company-page-management" },
          { text: "YouTube channel management for brands", href: "/blog/youtube-channel-management-for-brands" },
        ],
      },
      { type: "heading", text: "The site-to-post workflow, with approvals", id: "site-to-post-workflow" },
      {
        type: "paragraph",
        text: "The biggest practical problem in construction social media is getting good material from site to screen safely. Site teams are busy, photos sit on personal phones, and nobody is sure what can be shown. A simple, written workflow solves most of it.",
      },
      {
        type: "table",
        headers: ["Step", "What happens", "Who is responsible", "Who approves"],
        rows: [
          ["1. Plan", "Monthly list of milestones and stories to capture", "Social team with project managers", "Marketing head"],
          ["2. Capture", "Photos and video taken following site rules and PPE requirements", "Site engineer or a trained site contact", "Site in-charge allows filming"],
          ["3. Upload", "Files shared to one folder with date, project and stage noted", "Site contact", "Not needed"],
          ["4. Check", "Facts, safety visible in frame, confidential details removed", "Social team", "Project manager confirms facts"],
          ["5. Permission", "Client and any featured people agree to the specific content", "Project manager", "Client and individuals, in writing"],
          ["6. Draft and sign-off", "Caption, design and video edit", "Social team or agency", "Marketing head; safety head for safety content"],
          ["7. Publish and respond", "Post goes live; comments and enquiries routed", "Social team", "Business development owns tender and client enquiries"],
        ],
      },
      {
        type: "paragraph",
        text: "Give site teams a one-page brief: what to capture (wide shots, process close-ups, people at work in correct PPE), what never to capture (client documents, screens, security layouts, unsafe practice) and where to upload. For setting turnaround times across approvers, see our guide to the social media content approval process.",
        links: [{ text: "the social media content approval process", href: "/blog/social-media-content-approval-process" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "paragraph",
        text: "The usual problems are easy to spot. Captions that say 'milestone achieved' without saying which. Client projects posted without asking. Safety claims nobody can back up. Photos with someone working at height without a harness. A feed that goes quiet for months between handovers. And recruitment posts that list requirements but say nothing about what it's like to work on your sites. Each one is fixed by the workflow above and a monthly plan agreed with the project teams.",
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pick two live projects whose clients are happy to be featured, agree the site-to-post workflow with their project managers, and plan one milestone post, one method explainer and one team introduction per project for the next month. That's enough to show clients and candidates how your company actually works.",
      },
      {
        type: "paragraph",
        text: "If capacity is the problem, our social media management scope covers planning, creative and editing from site footage you supply (on-location shoots are scoped separately), with facts, permissions and safety content approved by your own team. For creator partnerships on top of your own channels, see influencer marketing for construction companies.",
        links: [
          { text: "our social media management scope", href: "/services/social-media-management#scope" },
          { text: "influencer marketing for construction companies", href: "/blog/influencer-marketing-construction" },
        ],
      },
    ],
    faqs: [
      {
        question: "Do we need a client's permission to post about their project?",
        answer:
          "In practice, yes. Many contracts include confidentiality clauses, and clients may not want details shared before their own announcements. Ask the client in writing which stages, images and facts you can share, and whether they want to be named. Some clients are happy to be tagged at handover but not during construction. Keep the approval on file with the post.",
      },
      {
        question: "Can we post our safety record on social media?",
        answer:
          "Only if the figures are verified, current and approved by your safety head, and only if you're comfortable defending them publicly. A safety statistic that later proves wrong does more damage than saying nothing. Educational content about how your site practices work is lower risk and usually more useful to clients and candidates than headline numbers.",
      },
      {
        question: "Who should take photos on site?",
        answer:
          "Usually a trained site contact, such as a site engineer or supervisor, following site rules on phones and cameras. Give them a short brief on what to capture and what to avoid, plus a shared folder. For major milestones or project films, a professional shoot may be worth planning separately. Never let filming distract from site safety or slow down the work.",
      },
      {
        question: "Is LinkedIn enough for a construction company?",
        answer:
          "For many contractors and EPC firms it's the most important platform, because clients, consultants and professional hires are active there. Adding YouTube for longer explainers or Instagram for site storytelling and younger talent can help, but only if you can keep both consistent. One well-run platform is better than several neglected ones.",
      },
    ],
  },
];
