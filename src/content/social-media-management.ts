/**
 * Copy for /services/social-media-management.
 *
 * Ground rules (see reports/social-media-management-expansion/02-brand-positioning-strategy.md):
 * - No client names, results, follower or engagement promises, or fixed prices.
 * - Anything not confirmed as part of the standard service (paid ads, shoots, customer support, crisis
 *   communication, social listening tools) is described as "scoped separately", never as included.
 * - Platform facts stay general so they don't go stale; platform specifics belong in dated blog guides.
 */

export const SMM_SLUG = "social-media-management";
export const SMM_PATH = `/services/${SMM_SLUG}`;

/** Inquiry link with the existing attribution params, so leads from this page are identifiable in the lead email. */
export function smmInquiryHref(position: string) {
  return `/for-brands?from=service:${SMM_SLUG}&pos=${position}&t=Social%20Media%20Management#inquiry`;
}

export const smmMeta = {
  title: "Social Media Management Services for Brands",
  description:
    "Social media management for brands: strategy, content calendars, posts, Reels, publishing, community management and monthly reporting, connected with creators.",
};

export const smmAnswer = {
  question: "What is social media management?",
  text: "Social media management is the ongoing work of running a brand's social accounts: deciding what to say and where, planning a content calendar, creating posts and short videos, publishing them, responding to the community and reviewing what worked. Kudozz does this month by month, and can connect it with creator partnerships and UGC when your plan needs them.",
};

export const smmProblems: { title: string; body: string }[] = [
  { title: "Posting when someone finds time", body: "A burst of posts before a sale, then silence for three weeks. Followers notice the gaps." },
  { title: "No plan behind the posts", body: "Content gets made because the calendar is empty, not because it supports anything the business needs." },
  { title: "Every post looks the same", body: "The same product shot and the same caption format, month after month, until people scroll past by habit." },
  { title: "Reels that never get made", body: "Everyone agrees short video matters. Nobody has the time to script, shoot and edit it every week." },
  { title: "Comments nobody answers", body: "Questions sit unanswered under posts, and the people who did engage stop bothering." },
  { title: "Too many platforms, too few hands", body: "Instagram, LinkedIn, YouTube and Facebook each want something different, and one person is expected to do it all." },
  { title: "No calendar anyone can see", body: "Launches, festive moments and offers get remembered the night before, so content is rushed or missed." },
  { title: "Reports that say nothing", body: "A screenshot of follower count each month, with no view on what to do differently next month." },
  { title: "Social sitting apart from the business", body: "Social activity runs on its own track, disconnected from sales, launches and what the founder is actually trying to grow." },
];

/** "Our approach": how Kudozz thinks about a month of social, shown as a loop. */
export const smmApproach: { title: string; body: string }[] = [
  { title: "Understand the brand and its audience", body: "What you sell, who buys it, how you want to sound and what your customers already say about you." },
  { title: "Study competitors and the category", body: "What others in your space post, what gets a response, and where there is room to stand apart." },
  { title: "Set objectives for each platform", body: "Awareness on one, education or enquiries on another. Each platform gets a job, not the same post." },
  { title: "Build the content strategy", body: "Content pillars, formats, tone and a posting rhythm your team can realistically approve." },
  { title: "Plan the monthly calendar", body: "Every post, Reel and Story mapped against launches, offers, festive dates and creator activity." },
  { title: "Create and review content", body: "Designs, scripts, edits and captions, shared with you for approval before anything goes live." },
  { title: "Schedule and publish", body: "Approved content goes out on time, formatted properly for each platform." },
  { title: "Manage the community", body: "Comments and messages handled within the agreed scope, with anything sensitive passed to your team." },
  { title: "Review and improve", body: "A monthly look at what worked and what didn't, which shapes the next calendar." },
];

export type SmmCapability = {
  id: string;
  letter: string;
  title: string;
  summary: string;
  items: string[];
  note?: string;
};

export const smmCapabilities: SmmCapability[] = [
  {
    id: "strategy",
    letter: "A",
    title: "Social media strategy",
    summary: "The thinking that decides what you post, where and why. Revisited every quarter, not written once and forgotten.",
    items: [
      "Brand and account audit",
      "Audience research",
      "Competitor analysis",
      "Platform selection",
      "Content pillars",
      "Brand voice and communication guidelines",
      "Monthly and quarterly planning",
    ],
  },
  {
    id: "content-planning",
    letter: "B",
    title: "Content planning",
    summary: "A monthly calendar your team can see, comment on and approve in one go, with room for launches and timely moments.",
    items: [
      "Monthly content calendars",
      "Campaign planning",
      "Festive and seasonal content",
      "Product and service promotion",
      "Educational content",
      "Brand storytelling",
      "Platform-specific planning",
    ],
  },
  {
    id: "creative-design",
    letter: "C",
    title: "Creative design",
    summary: "Posts that look like they belong to your brand, designed for how people actually read on a phone.",
    items: [
      "Static posts",
      "Carousel posts",
      "Infographics",
      "Promotional creatives",
      "Product-focused creatives",
      "Brand storytelling creatives",
      "Campaign creatives",
    ],
  },
  {
    id: "reels-short-form-video",
    letter: "D",
    title: "Reels and short-form video",
    summary: "Short videos planned as a series, so you aren't starting from a blank page every week.",
    items: [
      "Instagram Reels",
      "YouTube Shorts",
      "Facebook short-form video",
      "Product demonstration videos",
      "Educational videos",
      "Trend-led content, where it fits the brand",
      "Brand storytelling videos",
      "Creator-led content",
    ],
    note: "We script, plan and edit from footage you share or footage creators shoot for you. Professional or on-location shoots are scoped separately.",
  },
  {
    id: "copywriting",
    letter: "E",
    title: "Social media copywriting",
    summary: "Words written for each platform, from the first line people see to the action you want them to take.",
    items: [
      "Captions and post copy",
      "Reel scripts",
      "Hooks",
      "Calls to action",
      "Platform-specific descriptions",
      "Relevant hashtag research",
    ],
  },
  {
    id: "publishing",
    letter: "F",
    title: "Publishing and scheduling",
    summary: "Approved content goes out when it should, in the right format, without anyone on your team setting reminders.",
    items: [
      "Content scheduling",
      "Publishing approved content",
      "Platform-specific formatting",
      "Content calendar coordination",
      "Publishing consistency",
    ],
  },
  {
    id: "community-management",
    letter: "G",
    title: "Community management",
    summary: "Keeping conversations going under your posts, in your brand's voice, within the hours and scope we agree.",
    items: [
      "Comment monitoring",
      "Relevant audience interactions",
      "Basic response coordination",
      "Community engagement",
      "Escalation of sensitive queries to your team",
    ],
    note: "Customer support, complaint resolution and 24/7 moderation are separate requirements. We can discuss them, but they are not part of community management unless written into your scope.",
  },
  {
    id: "analytics-reporting",
    letter: "H",
    title: "Analytics and reporting",
    summary: "A monthly report that explains what happened and what we'll change next, not only what the numbers were.",
    items: [
      "Reach and impressions",
      "Engagement",
      "Content performance by post and format",
      "Video views and retention, where the platform reports them",
      "Audience growth",
      "Profile activity",
      "Website clicks and enquiries, where tracking is set up",
      "Monthly insights and recommendations",
    ],
    note: "Each platform reports different metrics, and some only show them for business accounts. We report what your platforms make available.",
  },
];

export type SmmPlatform = { name: string; role: string; focus: string[] };

export const smmPlatforms: SmmPlatform[] = [
  {
    name: "Instagram",
    role: "Where most consumer brands are discovered, judged and followed.",
    focus: ["Reels", "Stories", "Carousels", "Static posts", "Community engagement", "Brand storytelling", "Creator collaborations"],
  },
  {
    name: "Facebook",
    role: "Still useful for reaching broader and older audiences, and for local communities.",
    focus: ["Page management", "Content distribution", "Reels", "Community engagement", "Brand updates"],
  },
  {
    name: "LinkedIn",
    role: "For B2B brands, hiring and building trust with buyers who research before they talk to sales.",
    focus: [
      "Company page management",
      "B2B content",
      "Thought leadership",
      "Industry insights",
      "Employer branding",
      "Founder and leadership content, where included",
    ],
  },
  {
    name: "YouTube",
    role: "Search-led video that keeps working long after it's posted.",
    focus: ["Shorts", "Long-form content planning", "Titles and descriptions", "Thumbnail creative direction", "Channel content strategy"],
  },
  {
    name: "Pinterest",
    role: "Visual discovery for products people plan to buy: fashion, home, food, weddings and gifting.",
    focus: ["Visual content planning", "Pins and boards", "Product discovery", "Evergreen content distribution"],
  },
  {
    name: "X",
    role: "For brands whose audience follows news, tech, finance or live conversations.",
    focus: ["Brand updates", "Relevant conversations", "Thought leadership", "Community engagement"],
  },
  {
    name: "Snapchat",
    role: "For reaching younger audiences, particularly in markets where it is widely used.",
    focus: ["Short-form content", "Youth-focused communication", "Platform-specific campaigns"],
  },
];

export const smmTogether: { title: string; body: string }[] = [
  {
    title: "Your own accounts give people a reason to stay",
    body: "Social media management builds a consistent presence, so when someone discovers you, there is a profile worth following.",
  },
  {
    title: "Creators bring you new audiences",
    body: "Influencer marketing introduces the brand to people who trust the creator. Those people usually check your profile next.",
  },
  {
    title: "UGC fills the calendar with real voices",
    body: "Creator-made and customer-style content can run on your own channels, where usage rights allow, alongside designed posts.",
  },
  {
    title: "Launches land with one plan",
    body: "Creator posts and your own content are scheduled together, so a launch doesn't look loud on creators' profiles and quiet on yours.",
  },
  {
    title: "Each month informs the next",
    body: "What performs on your account shapes creator briefs, and what creators learn shapes your content. One team sees both.",
  },
];

export const smmIndustries: { name: string; note: string }[] = [
  { name: "D2C and e-commerce", note: "Product education, offers and launches that send people to your store." },
  { name: "Beauty and skincare", note: "Routines, ingredients and results shown honestly, within advertising rules on claims." },
  { name: "Fashion and apparel", note: "Drops, styling and seasonal edits that keep the feed moving." },
  { name: "Food and beverage", note: "Recipes, behind-the-scenes and festive moments people want to share." },
  { name: "Consumer electronics", note: "Demos, comparisons and answers to the questions buyers ask before they pay." },
  { name: "Technology and SaaS", note: "LinkedIn-led content, product explainers and founder perspectives." },
  { name: "Healthcare and wellness", note: "Helpful, careful content planned around the advertising rules your category follows." },
  { name: "Education and edtech", note: "Explainers, student stories and admission-season planning." },
  { name: "Hospitality and travel", note: "Destinations, experiences and seasonal offers that are planned months ahead." },
  { name: "Lifestyle and consumer brands", note: "Everyday relevance, community and brand personality." },
  { name: "Home, interiors and lifestyle products", note: "Visual inspiration, room ideas and Pinterest-friendly content." },
];

export const smmProcess: { title: string; kudozz: string; you: string }[] = [
  {
    title: "Discovery and brand understanding",
    kudozz: "Learn your business, customers, goals and how decisions get made on your side.",
    you: "Share brand guidelines, product information, past content and who approves what.",
  },
  {
    title: "Social media audit and strategy",
    kudozz: "Review your accounts and competitors, then recommend platforms, content pillars and a posting rhythm.",
    you: "Give account access or insights exports, and sign off the strategy.",
  },
  {
    title: "Content calendar and creative planning",
    kudozz: "Plan the month's posts, Reels and Stories against your launches, offers and key dates.",
    you: "Tell us what's coming up and approve the calendar.",
  },
  {
    title: "Content creation and approval",
    kudozz: "Design posts, write copy, script and edit videos, and plan creator content where it's included.",
    you: "Review within the agreed turnaround, and share product, footage or samples we need.",
  },
  {
    title: "Publishing and community management",
    kudozz: "Schedule and publish approved content and handle comments within the agreed scope.",
    you: "Respond to escalated queries such as orders, complaints and anything legal or medical.",
  },
  {
    title: "Performance review and optimisation",
    kudozz: "Report monthly on what worked, what didn't and what changes next month.",
    you: "Share business context, such as sales or enquiries, so the review reflects what actually matters.",
  },
];

export const smmIncluded: string[] = [
  "Organic social media strategy and monthly planning",
  "Content calendars for the platforms we agree on",
  "Post, carousel and creative design",
  "Short-form video scripting and editing from available footage",
  "Captions, hooks and hashtag research",
  "Scheduling and publishing approved content",
  "Community management within agreed hours and scope",
  "Monthly performance report and recommendations",
];

export const smmScopedSeparately: { title: string; body: string }[] = [
  { title: "Paid social advertising", body: "Running ads is a separate discussion from organic management, with its own scope and fee." },
  { title: "Advertising budget", body: "Any ad spend is paid by you to the platform and is never part of a management fee." },
  { title: "Influencer fees", body: "Creator fees are quoted separately through our influencer marketing service." },
  { title: "Professional photoshoots", body: "Scoped per shoot when your content needs them." },
  { title: "On-location video shoots", body: "Planned and quoted separately, including crew, location and talent." },
  { title: "Product samples and logistics", body: "Products and shipping for creators or shoots are agreed per campaign." },
  { title: "Customer support", body: "Order queries, complaints and refunds stay with your support team unless agreed otherwise." },
  { title: "Advanced social listening tools", body: "Paid listening and monitoring tools are a separate cost if your brand needs them." },
  { title: "Crisis communication", body: "Handled with your leadership and legal team; we can support with a separately agreed plan." },
  { title: "Additional platforms", body: "Each extra platform adds planning and content, so it changes the scope." },
];

export const smmFaqs: { question: string; answer: string }[] = [
  {
    question: "What does social media management include?",
    answer:
      "At Kudozz it covers strategy, monthly content planning, creative design, short-form video scripting and editing, copywriting, scheduling and publishing, community management within an agreed scope, and a monthly performance report. The exact mix, platforms and number of posts are agreed in your proposal.",
  },
  {
    question: "Which social media platforms does Kudozz manage?",
    answer:
      "We plan content for Instagram, Facebook, LinkedIn, YouTube, Pinterest, X and Snapchat. Most brands don't need all of them. We recommend platforms based on your audience, business model, the content you can realistically produce and your goals, and the agreed platforms are listed in your scope.",
  },
  {
    question: "Is social media strategy included?",
    answer:
      "Yes. Every engagement starts with an audit of your accounts and competitors, then a strategy covering platforms, content pillars, tone and posting rhythm. We revisit it each quarter as we learn what works for your audience.",
  },
  {
    question: "Does Kudozz create Instagram Reels?",
    answer:
      "Yes. We plan Reels as series, write scripts and hooks, and edit from footage you share or footage creators shoot for you. If your Reels need a professional or on-location shoot, we scope that separately.",
  },
  {
    question: "Does Kudozz design social media posts and carousels?",
    answer:
      "Yes. Static posts, carousels, infographics, promotional and product creatives are designed in line with your brand guidelines and shared for approval before publishing.",
  },
  {
    question: "How often will content be published?",
    answer:
      "It depends on the platforms, your goals and how much content you can approve each month. We'd rather agree a rhythm you can keep than promise daily posting that drops off. The number of posts, Reels and Stories per platform is set in your scope.",
  },
  {
    question: "Does Kudozz manage comments and messages?",
    answer:
      "We monitor comments and handle routine interactions within the hours and scope we agree, and pass anything sensitive, such as complaints, order issues or medical and legal questions, to your team. Full customer support and 24/7 moderation are separate requirements.",
  },
  {
    question: "Does social media management include paid advertising?",
    answer:
      "No. Social media management covers your organic presence. Paid social advertising can be discussed and scoped separately, and any ad budget is paid by you to the platform.",
  },
  {
    question: "Can Kudozz manage social media for a D2C brand?",
    answer:
      "Yes. D2C brands are a natural fit because product education, launches, offers and creator content all need to work together. We plan your calendar around drops, sales and festive moments, and can bring creator and UGC content into it.",
  },
  {
    question: "Can Kudozz combine social media management with influencer marketing?",
    answer:
      "Yes, and this is where we're different from most social media agencies. One team can plan your own content and your creator campaigns together, so launches are coordinated and creator content, where rights allow, can be reused on your channels. Influencer fees are quoted separately.",
  },
  {
    question: "How is social media performance measured?",
    answer:
      "We agree what matters for each platform at the start, such as reach, engagement, video views, profile activity, website clicks or enquiries. Each month we report on these, explain which content performed and why, and recommend changes. Metrics differ by platform, and website and enquiry tracking needs to be set up on your side.",
  },
  {
    question: "How much does social media management cost?",
    answer:
      "There's no fixed package price. Cost depends on the number of platforms, how many posts and videos you need each month, whether creator content is involved, community management hours and any shoots. We share a scope and fee in the proposal after the first call.",
  },
  {
    question: "How long does it take to build a consistent social media presence?",
    answer:
      "Consistency is visible from the first month, because a planned calendar replaces ad hoc posting. Building an audience that recognises and engages with your brand takes longer and depends on your category, content and starting point. We review progress monthly rather than promising a timeline for growth.",
  },
  {
    question: "What does a brand need to provide before starting?",
    answer:
      "Brand guidelines or examples of what you like, product and service information, access to your social accounts or insights, upcoming launches and offers, any footage or images you already have, and a named person who approves content.",
  },
];

/** Industry-agnostic copy reused by homepage, services hub and For Brands cards. */
export const smmCard = {
  name: "Social Media Management",
  short: "Strategy, content calendars, posts, Reels, publishing, community and monthly reporting for your own brand accounts.",
};

/**
 * Brand-side guides shown on the service page, grouped so the list stays scannable as the cluster grows.
 * Only published posts render (the page filters by getBlogPostBySlug). Also the source for the SMM service's `guides`.
 */
export const smmGuideGroups: { title: string; slugs: string[] }[] = [
  {
    title: "Hiring and running social media",
    slugs: [
      "choose-social-media-management-agency",
      "social-media-management-cost-india",
      "in-house-vs-outsourced-social-media-management",
      "social-media-agency-brief",
      "outsourcing-social-media-management-checklist",
      "social-media-management-agency-first-90-days",
      "social-media-content-approval-process",
      "social-media-content-workflow",
      "manage-multiple-social-media-accounts",
      "monthly-social-media-content-calendar",
      "community-management-vs-customer-support",
      "social-media-crisis-management-plan",
      "social-media-management-multiple-locations",
      "franchise-social-media-management",
    ],
  },
  {
    title: "Strategy, measurement and listening",
    slugs: [
      "social-media-audit",
      "choose-social-media-platforms-for-business",
      "organic-vs-paid-social-media",
      "social-media-kpis",
      "social-media-reporting-for-founders",
      "social-listening-for-brands",
      "b2b-social-media-strategy",
    ],
  },
  {
    title: "Platforms",
    slugs: [
      "instagram-management-for-business",
      "instagram-reels-strategy-for-brands",
      "instagram-reels-content-plan",
      "instagram-stories-for-business",
      "instagram-carousel-strategy",
      "instagram-business-profile-optimization",
      "facebook-page-management-for-business",
      "linkedin-company-page-management",
      "linkedin-marketing-professional-services",
      "youtube-channel-management-for-brands",
      "pinterest-marketing-for-business",
    ],
  },
  {
    title: "Content and creative",
    slugs: [
      "social-media-brand-voice",
      "social-media-graphic-design-for-business",
      "social-media-content-repurposing",
      "social-media-content-from-customer-questions",
      "social-media-content-mix-ugc-brand-product",
      "social-media-employer-branding",
    ],
  },
  {
    title: "By industry",
    slugs: [
      "social-media-management-d2c-brands",
      "social-media-marketing-beauty-skincare-brands",
      "social-media-management-fashion-brands",
      "social-media-marketing-jewellery-brands",
      "social-media-marketing-restaurants-cafes",
      "social-media-marketing-fitness-brands",
      "social-media-management-travel-companies",
      "social-media-management-car-dealerships",
      "social-media-management-saas-companies",
      "social-media-management-it-companies",
      "social-media-management-manufacturing-companies",
      "social-media-management-real-estate-developers",
      "real-estate-social-media-marketing",
      "social-media-management-construction-companies",
      "social-media-marketing-interior-designers",
      "social-media-marketing-architects",
      "social-media-management-clinics",
      "hospital-social-media-marketing",
      "social-media-marketing-coaching-institutes",
      "social-media-management-schools-universities",
      "social-media-marketing-financial-services",
      "social-media-marketing-ngos",
    ],
  },
];
