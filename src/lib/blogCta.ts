/**
 * Blog CTA resolver
 * -----------------
 * Derives the two contextual CTAs (mid-article + end-of-article) for a blog
 * post purely from its existing `slug`/`category` — no per-article data
 * migration required. This is what lets the CTA system apply automatically
 * to all existing posts and to every future post added to blog.ts.
 *
 * Matching is ordered most-specific-intent first (UGC, pricing, ROI, legal/
 * ops, campaign management, discovery) before platform buckets (Instagram,
 * YouTube, LinkedIn, X, Podcast, Snapchat, Pinterest, Reddit), then industry
 * verticals and location pages, ending in a generic fallback. First match
 * wins.
 */

import type { BlogPost } from "@/content/blog";
import { getCreatorSectionForSlug, type CreatorResourceGroupId } from "@/content/creator-resources";
import { b2bCreatorEconomySlugs, marketplaceSlugs } from "@/content/creator-economy";

export type BlogCtaContent = {
  headline: string;
  body: string;
  ctaLabel: string;
  href: string;
};

/** Context passed to both CTA components and into analytics events. */
export type BlogCtaContext = {
  topic: string;
  audience: "brand" | "creator";
  ctaType: "brand_inquiry" | "creator_signup";
  /** Platform the article is about, or "multi-platform". */
  platform: string;
  /** What the reader is trying to do: the brand CTA topic, or the creator section. */
  intent: string;
  /** Creator Resources topic group (e.g. "seo", "protection"); empty for brand articles. */
  cluster: string;
};

export type BlogCtaSet = BlogCtaContext & {
  mid: BlogCtaContent;
  bottom: BlogCtaContent;
};

type BlogCtaCopy = { topic: string; mid: BlogCtaContent; bottom: BlogCtaContent };

const PLATFORM_PATTERNS: [string, RegExp][] = [
  ["youtube", /youtube/],
  ["instagram", /instagram/],
  ["linkedin", /linkedin/],
  ["snapchat", /snapchat/],
  ["pinterest", /pinterest/],
  ["reddit", /reddit/],
  ["tiktok", /tiktok/],
  ["whatsapp", /whatsapp/],
  ["podcast", /podcast/],
  ["x", /(^|-)x-/],
];

function detectPlatform(slug: string): string {
  return PLATFORM_PATTERNS.find(([, re]) => re.test(slug))?.[0] ?? "multi-platform";
}

const INQUIRY = "/for-brands#inquiry";

const MARKETPLACE_SLUGS = new Set(marketplaceSlugs);
/** The B2B cluster plus the employee program guide, which the LinkedIn/B2B slug pattern doesn't catch. */
const B2B_CREATOR_SLUGS = new Set([...b2bCreatorEconomySlugs, "employee-influencer-marketing"]);

function withTracking(basePath: string, slug: string, category: string, pos: "mid" | "bottom", topic: string): string {
  const [path, hash] = basePath.split("#");
  const params = new URLSearchParams({ src: slug, cat: category, pos, t: topic });
  return hash ? `${path}?${params.toString()}#${hash}` : `${path}?${params.toString()}`;
}

type Matcher = {
  topic: string;
  test: (slug: string) => boolean;
  mid: { headline: string; body: string; ctaLabel: string; path: string };
  bottom: { headline: string; body: string; ctaLabel: string };
};

/**
 * Brand lead-generation cluster (900–949): hand-written CTA pairs per article so the mid CTA matches the
 * reader's stage (agency research, planning, objective, industry, scale) and points to the closest real
 * service page. Checked before the generic matchers below. Topic doubles as the analytics `cta_topic` and
 * the inquiry form's campaign-goal prefill key.
 */
type GuideCta = { topic: string; midPath: string; mid: [string, string, string]; bottom: [string, string, string] };

const S = (slug: string) => `/services/${slug}`;

const BRAND_GUIDE_CTAS: Record<string, GuideCta> = {
  "influencer-marketing-cpm-cpe-cpa": { topic: "Campaign Measurement", midPath: S("reporting"), mid: ["Comparing Creators on Cost?", "Kudozz reports CPM, CPE, CPC and CPA per creator with the full cost included, not just the fee.", "See Campaign Reporting"], bottom: ["Want Creator Costs You Can Compare?", "Share your objective and we'll plan a campaign with tracking set up before anything goes live.", "Plan a Campaign With Kudozz"] },
  "influencer-reach-vs-impressions": { topic: "Campaign Measurement", midPath: S("reporting"), mid: ["Getting Screenshots Instead of Reports?", "Kudozz collects dated insights from every creator and reports reach, views and frequency consistently.", "See Campaign Reporting"], bottom: ["Planning an Awareness Campaign?", "Tell us your audience and markets, and we'll plan creators for reach where you actually sell.", "Talk to Kudozz"] },
  "choose-influencer-marketing-agency-india": { topic: "Agency Selection", midPath: S("campaign-strategy"), mid: ["Shortlisting Influencer Agencies?", "Put these questions to Kudozz too. We'll walk you through how we'd approach your brief, team and pricing.", "See How We Plan Campaigns"], bottom: ["Evaluating Agencies for Your Next Campaign?", "Share your brief and we'll respond with an approach, sample creators and an itemized budget you can compare.", "Talk to the Kudozz Team"] },
  "influencer-agency-vs-freelancer": { topic: "Agency Selection", midPath: S("outreach-management"), mid: ["Outgrowing One-Person Creator Management?", "Kudozz handles outreach, contracts, approvals and reporting with a team, not a single point of failure.", "See Campaign Management"], bottom: ["Deciding Who Should Run Your Creator Campaigns?", "Tell us your volume and timelines, and we'll tell you honestly whether an agency makes sense yet.", "Talk to the Kudozz Team"] },
  "influencer-marketing-agency-vs-in-house": { topic: "Agency Selection", midPath: S("outreach-management"), mid: ["Considering a Hybrid Model?", "Keep strategy in-house and let Kudozz run sourcing, negotiation and day-to-day campaign management.", "See Campaign Management"], bottom: ["Weighing Agency vs In-House?", "Tell us your campaign volume and team bandwidth, and we'll help you see which model fits right now.", "Talk to the Kudozz Team"] },
  "influencer-marketing-services-india": { topic: "Agency Selection", midPath: S("campaign-strategy"), mid: ["Not Sure Which Services You Need?", "Kudozz offers strategy, discovery, management and reporting separately or together.", "Explore Kudozz Services"], bottom: ["Looking for a Partner to Run Part of Your Program?", "Tell us where your process gets stuck, and we'll suggest the smallest useful scope.", "Talk to the Kudozz Team"] },
  "influencer-marketing-agency-fees-india": { topic: "Agency Pricing", midPath: INQUIRY, mid: ["Comparing Agency Quotes?", "Kudozz shows creator fees and the agency fee as separate lines, so you can see exactly what you're paying for.", "Request an Itemized Quote"], bottom: ["Want a Transparent Quote for Your Campaign?", "Share your brief and budget range, and we'll send an itemized proposal you can compare line by line.", "Request a Proposal"] },
  "influencer-marketing-agency-brief": { topic: "Agency Selection", midPath: INQUIRY, mid: ["Brief Ready, or Nearly?", "Send it to Kudozz and we'll come back with an approach, sample creators and a budget split.", "Share Your Brief"], bottom: ["Have a Campaign to Brief?", "Share your objective, audience, budget range and dates, and we'll respond with a proposal you can compare.", "Share Your Brief With Kudozz"] },
  "influencer-marketing-rfp": { topic: "Agency Selection", midPath: INQUIRY, mid: ["Running an Agency RFP?", "Kudozz responds to RFPs with itemized budgets, named team members and a sample report.", "Invite Kudozz to Pitch"], bottom: ["Shortlisting Agencies for an RFP?", "Tell us your timeline and scope, and we'll confirm whether we're a fit before you invest time in a pitch.", "Talk to the Kudozz Team"] },
  "influencer-marketing-agency-pitch-questions": { topic: "Agency Selection", midPath: INQUIRY, mid: ["Want to Hear Kudozz's Answers?", "Ask us all twenty-five. We'd rather you compare answers than presentations.", "Book an Intro Call"], bottom: ["Interviewing Agencies This Month?", "Bring these questions to a call with the Kudozz team, including the ones about fees and exit terms.", "Talk to the Kudozz Team"] },
  "influencer-marketing-agency-checklist": { topic: "Agency Selection", midPath: INQUIRY, mid: ["Close to Signing an Agency?", "Kudozz scopes every engagement in writing: deliverables, creator fees, rights, reporting and handover.", "Talk to Kudozz"], bottom: ["Want Scope, Fees and Rights Spelled Out Upfront?", "Tell us about your campaign and we'll send a clear statement of work to review with your team.", "Request a Proposal"] },
  "influencer-marketing-campaign-timeline": { topic: "Campaign Planning", midPath: S("outreach-management"), mid: ["Working Back From a Fixed Date?", "Kudozz plans sourcing, contracts, approvals and go-lives so launches don't slip.", "See Campaign Management"], bottom: ["Have a Launch or Sale Date Coming Up?", "Tell us the date and scope, and we'll map a realistic creator timeline backwards from it.", "Plan a Campaign With Kudozz"] },
  "how-to-create-a-successful-influencer-marketing-campaign": { topic: "Campaign Planning", midPath: S("campaign-strategy"), mid: ["Want a Second Pair of Eyes on Your Plan?", "Kudozz's strategy work starts from your objective and customer, not a creator wishlist.", "See Campaign Strategy"], bottom: ["Planning an Influencer Campaign?", "Share your objective and budget range, and we'll help turn it into a plan with creators, timeline and tracking.", "Plan a Campaign With Kudozz"] },
  "influencer-campaign-cost-india": { topic: "Campaign Budget", midPath: INQUIRY, mid: ["Need Real Creator Quotes for Your Budget?", "Kudozz can size a campaign to your budget with creator fees shown line by line.", "Get a Budget Estimate"], bottom: ["Ready to Budget Your Next Campaign?", "Tell us your objective, markets and budget range, and we'll suggest a creator mix and cost breakdown.", "Plan Your Budget With Kudozz"] },
  "influencer-budget-allocation": { topic: "Campaign Budget", midPath: S("campaign-strategy"), mid: ["Working With a Fixed Budget?", "Kudozz recommends a creator mix sized to your budget and objective, not a default split.", "See Campaign Strategy"], bottom: ["Have a Budget and Need a Plan?", "Share the number and the goal, and we'll propose how many creators, which tiers and what to hold back.", "Plan Your Budget With Kudozz"] },
  "micro-vs-macro-influencers": { topic: "Creator Selection", midPath: S("creator-discovery"), mid: ["Deciding on Your Creator Mix?", "Kudozz tiers creators by objective and budget, with a reason for every name on the shortlist.", "See Creator Discovery"], bottom: ["Need the Right Mix of Creators?", "Tell us the objective and markets, and we'll propose a layered creator mix for your budget.", "Talk to the Kudozz Team"] },
  "influencer-shortlist": { topic: "Creator Selection", midPath: S("creator-discovery"), mid: ["Need a Shortlist You Can Approve Quickly?", "Kudozz delivers vetted shortlists with dated audience data and a written reason for every creator.", "See Creator Discovery"], bottom: ["Need Help Finding the Right Creators?", "Share your brief and target customer, and we'll build a vetted shortlist with backups.", "Get a Creator Shortlist"] },
  "how-to-choose-the-right-influencer-for-your-brand": { topic: "Creator Selection", midPath: S("creator-discovery"), mid: ["Choosing Between Creators?", "Kudozz scores creators on audience fit, brand fit and authenticity before they reach your shortlist.", "See Creator Discovery"], bottom: ["Need Help Choosing the Right Creators?", "Tell us about your customer and brand, and we'll recommend creators with the reasoning behind each.", "Get a Creator Shortlist"] },
  "how-to-vet-influencers": { topic: "Creator Selection", midPath: S("creator-discovery"), mid: ["Short on Time to Vet Every Creator?", "Kudozz runs authenticity, audience and brand-safety checks before any creator reaches your shortlist.", "See Creator Discovery"], bottom: ["Want Creators Vetted Before You Commit?", "Share your campaign and we'll return a vetted shortlist with audience evidence for each creator.", "Get a Vetted Shortlist"] },
  "influencer-audience-quality": { topic: "Creator Selection", midPath: S("creator-discovery"), mid: ["Need Audience Data You Can Trust?", "Kudozz screens creator audiences against your customer profile using creator-provided insights.", "See Creator Discovery"], bottom: ["Want Creators Whose Audience Is Your Customer?", "Tell us who you sell to and where, and we'll find creators whose audiences actually match.", "Get a Creator Shortlist"] },
  "pan-india-influencer-marketing-campaign": { topic: "Regional Campaign", midPath: S("campaign-strategy"), mid: ["Planning Across Several Cities or Languages?", "Kudozz plans national and regional creator layers, localized briefs and market-by-market reporting.", "See Campaign Strategy"], bottom: ["Planning a Multi-City Creator Campaign?", "Tell us your priority markets and languages, and we'll plan the creator layers and rollout.", "Plan a Multi-City Campaign"] },
  "regional-influencer-marketing-india": { topic: "Regional Campaign", midPath: S("creator-discovery"), mid: ["Need Creators in Specific Languages?", "Kudozz sources regional creators and checks audience location and language, not just where the creator lives.", "See Creator Discovery"], bottom: ["Planning a Regional or Vernacular Campaign?", "Tell us the markets and languages you need, and we'll find creators your customers already follow.", "Plan a Regional Campaign"] },
  "influencers-for-product-launch": { topic: "Product Launch", midPath: S("product-launches"), mid: ["Launching Something Soon?", "Kudozz coordinates seeding, embargoes, launch-day posts and post-launch reviews.", "See Product Launch Support"], bottom: ["Need a Creator Strategy for Your Launch?", "Share the launch date and product, and we'll plan the three phases backwards from it.", "Plan Your Launch With Kudozz"] },
  "influencer-marketing-brand-awareness": { topic: "Brand Awareness", midPath: S("social-campaigns"), mid: ["Building Reach in a New Market?", "Kudozz plans creator layers and staggered publishing so reach and frequency build together.", "See Social Campaigns"], bottom: ["Planning an Awareness Campaign?", "Tell us the audience and markets, and we'll plan reach that's measured in your audience, not raw views.", "Talk to the Kudozz Team"] },
  "influencer-marketing-lead-generation": { topic: "Lead Generation", midPath: S("campaign-strategy"), mid: ["Need Leads, Not Just Views?", "Kudozz plans creator campaigns around one tracked action and the leads your sales team can use.", "See Campaign Strategy"], bottom: ["Planning a Lead Generation Campaign?", "Tell us your sales process and lead action, and we'll plan creators, tracking and follow-up around it.", "Plan a Lead Campaign"] },
  "influencer-marketing-sales": { topic: "Sales", midPath: S("reporting"), mid: ["Want to See What Creators Actually Sell?", "Kudozz reports new customers and results by creator, not only campaign totals.", "See Reporting"], bottom: ["Planning a Sales-Focused Creator Campaign?", "Share your product, channels and targets, and we'll plan creators, codes, amplification and measurement.", "Plan a Sales Campaign"] },
  "always-on-influencer-marketing": { topic: "Always-On Program", midPath: S("ambassador-programs"), mid: ["Ready to Move Beyond One-Off Campaigns?", "Kudozz runs long-term creator programs with a roster, monthly calendar and reporting rhythm.", "See Long-Term Programs"], bottom: ["Building an Ongoing Creator Program?", "Tell us what's worked so far, and we'll propose a roster, calendar and budget model for the next quarter.", "Talk About a Long-Term Program"] },
  "influencer-marketing-d2c-brands-india": { topic: "Industry: D2C", midPath: S("ugc-campaigns"), mid: ["Need a Steady Flow of Creator Content?", "Kudozz runs creator and UGC programs that feed your ads, product pages and social every month.", "See UGC Campaigns"], bottom: ["Building an Always-On D2C Creator Program?", "Share your category and CAC targets, and we'll plan core and rotating creators around them.", "Plan a D2C Program"] },
  "influencer-marketing-ecommerce-brands-india": { topic: "Industry: E-commerce", midPath: S("social-campaigns"), mid: ["Planning Around a Sale Event?", "Kudozz books creators early and plans content before, during and after the sale.", "See Social Campaigns"], bottom: ["Planning an E-commerce Creator Campaign?", "Tell us your channels and sale dates, and we'll plan creators, codes and tracking across them.", "Plan an E-commerce Campaign"] },
  "influencer-marketing-startups-india": { topic: "Industry: Startups", midPath: S("campaign-strategy"), mid: ["Planning Your First Creator Campaign?", "Kudozz can help you design a small, measurable first test before you commit a bigger budget.", "See Campaign Strategy"], bottom: ["Launching Your First Creator Campaign?", "Share your product and budget, and we'll suggest a first campaign designed to teach you what works.", "Plan a First Campaign"] },
  "saas-influencer-marketing-india": { topic: "Industry: SaaS", midPath: INQUIRY, mid: ["Looking for Practitioners Your Buyers Trust?", "Kudozz finds LinkedIn and YouTube creators who can demo real workflows credibly.", "Talk to Kudozz"], bottom: ["Planning a SaaS Creator Campaign?", "Tell us your buyer and conversion path, and we'll plan creators around trials, demos and pipeline.", "Plan a SaaS Campaign"] },
  "influencer-marketing-real-estate-brands-india": { topic: "Industry: Real Estate", midPath: S("creator-discovery"), mid: ["Need Local Creators for a Project?", "Kudozz finds city and neighborhood creators whose audiences are actually nearby.", "See Creator Discovery"], bottom: ["Planning a Property Campaign?", "Share the project, city and lead goal, and we'll plan local creators and the site-visit flow.", "Plan a Real Estate Campaign"] },
  "influencer-marketing-healthcare-brands-india": { topic: "Industry: Healthcare", midPath: S("creator-discovery"), mid: ["Need Qualified Health Creators?", "Kudozz checks credentials and plans claims review before anything goes live.", "See Creator Discovery"], bottom: ["Planning a Healthcare or Wellness Campaign?", "Tell us your category and audience, and we'll plan qualified creators and a careful review process.", "Talk to the Kudozz Team"] },
  "influencer-marketing-education-edtech-brands-india": { topic: "Industry: Education", midPath: S("campaign-strategy"), mid: ["Planning Around Admissions Season?", "Kudozz plans education campaigns around the academic calendar, with honest content and tracked enquiries.", "See Campaign Strategy"], bottom: ["Planning an Education Campaign?", "Share your course, audience and enrolment window, and we'll plan creators for students and parents.", "Plan an Education Campaign"] },
  "automotive-influencer-marketing-india": { topic: "Industry: Automotive", midPath: S("product-launches"), mid: ["Planning a Vehicle Launch?", "Kudozz coordinates reviewers, regional creators and test-drive tracking across cities.", "See Product Launch Support"], bottom: ["Planning an Automotive Creator Campaign?", "Tell us the model, markets and dealer setup, and we'll plan creators and the test-drive flow.", "Plan an Automotive Campaign"] },
  "influencer-marketing-fintech-brands-india": { topic: "Industry: Fintech", midPath: S("creator-discovery"), mid: ["Need Qualified Finance Creators?", "Kudozz checks registrations and qualifications and plans content review for financial products.", "See Creator Discovery"], bottom: ["Planning a Fintech Campaign?", "Share your product and audience, and we'll plan qualified creators and a compliance-aware review.", "Talk to the Kudozz Team"] },
  "influencer-marketing-beauty-brands-india": { topic: "Industry: Beauty", midPath: S("creator-discovery"), mid: ["Need Creators Across Skin Types and Tones?", "Kudozz builds beauty shortlists by concern, skin type, region and price point.", "See Creator Discovery"], bottom: ["Planning a Beauty or Skincare Campaign?", "Tell us the product and customer, and we'll plan creators, claims and content reuse.", "Plan a Beauty Campaign"] },
  "influencer-marketing-fashion-brands-india": { topic: "Industry: Fashion", midPath: S("social-campaigns"), mid: ["Planning for Festive or Wedding Season?", "Kudozz books styling creators early and times content to regional calendars.", "See Social Campaigns"], bottom: ["Planning a Fashion Creator Campaign?", "Share your collection and season, and we'll plan creators, timing and sales tracking.", "Plan a Fashion Campaign"] },
  "influencer-marketing-food-brands-india": { topic: "Industry: Food", midPath: S("creator-discovery"), mid: ["Need Local Food Creators?", "Kudozz finds recipe, city and regional food creators and checks claims before posts go live.", "See Creator Discovery"], bottom: ["Planning a Food or Beverage Campaign?", "Tell us where customers buy and which cities matter, and we'll plan creators and measurement.", "Plan a Food Campaign"] },
  "consumer-electronics-influencer-marketing-india": { topic: "Industry: Electronics", midPath: S("product-launches"), mid: ["Planning a Device Launch?", "Kudozz coordinates review units, embargoes and launch-day coverage with tech creators.", "See Product Launch Support"], bottom: ["Planning an Electronics Creator Campaign?", "Share the product and launch date, and we'll plan reviewers, comparisons and a second wave.", "Plan an Electronics Campaign"] },
  // 950–999 layer
  "influencer-campaign-management": { topic: "Campaign Management", midPath: S("outreach-management"), mid: ["Need Help Managing Your Next Campaign?", "Kudozz runs briefs, approvals, publishing checks and creator follow-ups with one point of contact.", "See Campaign Management"], bottom: ["Planning a Campaign You'd Rather Not Run Alone?", "Tell us the scope and dates, and we'll show you how we'd manage it from brief to report.", "Talk to the Kudozz Team"] },
  "find-indian-influencers": { topic: "Creator Discovery", midPath: S("creator-discovery"), mid: ["Finding Creators at Scale?", "Kudozz screens audience fit, authenticity and brand safety and delivers shortlists with reasons.", "See Creator Discovery"], bottom: ["Need the Right Creators for Your Brand?", "Share your customer and markets, and we'll build a vetted shortlist you can approve quickly.", "Get a Creator Shortlist"] },
  "influencer-outreach-strategy": { topic: "Campaign Management", midPath: S("outreach-management"), mid: ["Short on Time for Creator Outreach?", "Kudozz handles first contact, negotiation, follow-ups and tracking for every creator.", "See Outreach and Management"], bottom: ["Want Outreach Handled Professionally?", "Tell us your creators or brief, and we'll manage communication and terms from first message to contract.", "Talk to the Kudozz Team"] },
  "influencer-marketing-report": { topic: "Reporting", midPath: S("reporting"), mid: ["Want Reports That Answer \"Did It Work?\"", "Kudozz reports against the KPI agreed at kickoff, creator by creator.", "See Campaign Reporting"], bottom: ["Need Clearer Campaign Reporting?", "Tell us how you track campaigns today, and we'll show you what a creator-level report would look like.", "Talk to the Kudozz Team"] },
  "influencer-marketing-strategy": { topic: "Campaign Planning", midPath: S("campaign-strategy"), mid: ["Want a Strategy Before Choosing Creators?", "Kudozz delivers a written plan: objectives, audience, creator and platform strategy, budget and measurement.", "See Strategy Services"], bottom: ["Planning Your Influencer Strategy?", "Share your goals and budget range, and we'll outline the strategy we'd build for your brand.", "Talk to the Kudozz Team"] },
  "brand-ambassador-program": { topic: "Always-On Program", midPath: S("ambassador-programs"), mid: ["Considering an Ambassador Program?", "Kudozz structures ambassador programs: selection, compensation, tiers and ongoing management.", "See Ambassador Programs"], bottom: ["Ready to Build a Long-Term Creator Network?", "Tell us about your brand and goals, and we'll propose an ambassador structure that fits.", "Talk About a Program"] },
  "influencer-partnerships": { topic: "Always-On Program", midPath: S("ambassador-programs"), mid: ["Moving Beyond One-Off Collaborations?", "Kudozz manages long-term creator partnerships and retainers with clear terms and regular reviews.", "See Long-Term Programs"], bottom: ["Ready to Build a Partnership Program?", "Share which creators have worked for you, and we'll propose how to turn them into a program.", "Talk About a Program"] },
  "repurpose-influencer-content": { topic: "Paid Amplification", midPath: S("ugc-campaigns"), mid: ["Want More Use From Every Creator Asset?", "Kudozz plans rights, raw files and cut-downs upfront so content can run in ads and on product pages.", "See UGC Campaigns"], bottom: ["Planning to Reuse Creator Content in Ads?", "Tell us your channels, and we'll plan rights and formats so content works beyond the first post.", "Talk to the Kudozz Team"] },
  "ugc-whitelisting-creator-licensing": { topic: "Paid Amplification", midPath: INQUIRY, mid: ["Planning to Run Creator Content as Ads?", "Kudozz negotiates usage, whitelisting permissions and licence terms before content is made.", "Talk to Kudozz"], bottom: ["Need Whitelisting or Licensing Terms Set Up?", "Tell us how you want to use creator content, and we'll structure rights creators and your legal team can agree to.", "Talk to the Kudozz Team"] },
  "influencer-product-seeding-program": { topic: "Product Seeding", midPath: S("product-launches"), mid: ["Planning a Creator Gifting Campaign?", "Kudozz builds seeding lists, handles opt-ins and logistics, and tracks who posts.", "See Launch Support"], bottom: ["Ready to Run a Seeding Program?", "Tell us the product, quantity and markets, and we'll plan a seeding program that finds your next partners.", "Plan a Seeding Program"] },
  "influencer-performance-marketing": { topic: "Paid Amplification", midPath: S("ugc-campaigns"), mid: ["Need Creator Content Your Ads Team Can Use?", "Kudozz secures paid usage and supplies creator and UGC assets built for testing.", "See UGC Campaigns"], bottom: ["Connecting Creators With Paid Media?", "Share your channels and CAC targets, and we'll plan creators, rights and assets around them.", "Talk to the Kudozz Team"] },
  "influencer-marketing-personal-care": { topic: "Industry: Personal Care", midPath: S("creator-discovery"), mid: ["Need Creators Who Fit Everyday Routines?", "Kudozz finds problem-specific and regional creators, and qualified experts where claims need them.", "See Creator Discovery"], bottom: ["Planning a Personal Care Campaign?", "Tell us the product and markets, and we'll plan trial, routine content and repeat exposure.", "Plan a Personal Care Campaign"] },
  "influencer-marketing-b2b-technology": { topic: "Industry: B2B Technology", midPath: INQUIRY, mid: ["Looking for Practitioners Your Buyers Trust?", "Kudozz finds developers, architects and IT voices who can show your technology honestly.", "Talk to Kudozz"], bottom: ["Planning a B2B Technology Creator Program?", "Share your buyers and sales cycle, and we'll plan creators for adoption and pipeline.", "Plan a B2B Tech Campaign"] },
  "influencer-marketing-construction": { topic: "Industry: Construction", midPath: S("campaign-strategy"), mid: ["Reaching Contractors, Architects or Homeowners?", "Kudozz plans creators for each decision-maker, market by market.", "See Campaign Strategy"], bottom: ["Planning a Building Materials Campaign?", "Tell us your products and markets, and we'll plan trade, professional and home-building creators with dealer follow-up.", "Plan a Construction Campaign"] },
  "influencer-marketing-automotive-dealerships": { topic: "Industry: Dealerships", midPath: S("creator-discovery"), mid: ["Need Creators Whose Audience Lives Nearby?", "Kudozz checks that local creators' audiences actually sit in your catchment.", "See Creator Discovery"], bottom: ["Planning a Local Dealership Campaign?", "Share your city and goals, and we'll plan local creators, visits and lead tracking within OEM guidelines.", "Plan a Dealership Campaign"] },
  "influencer-marketing-colleges": { topic: "Industry: Colleges", midPath: S("ambassador-programs"), mid: ["Considering a Student Ambassador Program?", "Kudozz structures ambassador programs with training, disclosure and fair compensation.", "See Ambassador Programs"], bottom: ["Planning an Admissions Campaign?", "Tell us your programs and feeder regions, and we'll plan student, alumni and regional creators.", "Plan an Admissions Campaign"] },
  "influencer-marketing-tier-2-tier-3-cities": { topic: "Regional Campaign", midPath: S("campaign-strategy"), mid: ["Expanding Beyond Metro Cities?", "Kudozz plans market-by-market creator campaigns with local and regional-language creators.", "See Campaign Strategy"], bottom: ["Planning an Influencer Campaign Across Multiple Indian Markets?", "Tell us where you can sell and deliver, and we'll plan which cities, creators and languages to start with.", "Plan a Regional Campaign"] },
  "mobile-app-influencer-marketing-india": { topic: "Industry: Mobile Apps", midPath: S("product-launches"), mid: ["Launching an App?", "Kudozz plans early access, launch-week creators and tracking tied to retained users.", "See Launch Support"], bottom: ["Planning an App User Acquisition Campaign?", "Share your app and targets, and we'll plan creators for installs that stick.", "Plan an App Campaign"] },
  "luxury-influencer-marketing-india": { topic: "Industry: Luxury", midPath: S("creator-discovery"), mid: ["Need a Few Creators Who Truly Fit?", "Kudozz selects creators for taste, audience quality and brand fit, not reach.", "See Creator Discovery"], bottom: ["Planning a Luxury Creator Campaign?", "Tell us your brand and clientele, and we'll propose a selective, controlled creator approach.", "Talk to the Kudozz Team"] },
  "influencer-marketing-jewellery-brands-india": { topic: "Industry: Jewellery", midPath: S("campaign-strategy"), mid: ["Planning for Wedding or Festive Season?", "Kudozz times bridal, festive and everyday creators to regional calendars.", "See Campaign Strategy"], bottom: ["Planning a Jewellery Creator Campaign?", "Share your collections and markets, and we'll plan creators, try-ons and store visits.", "Plan a Jewellery Campaign"] },
  "home-interior-influencer-marketing-india": { topic: "Industry: Home & Interiors", midPath: S("creator-discovery"), mid: ["Need Designers or Renovation Creators?", "Kudozz finds interior, renovation and home creators matched to your price point.", "See Creator Discovery"], bottom: ["Planning a Home or Interior Campaign?", "Tell us your products and customers, and we'll plan transformations, tours and showroom conversion.", "Plan a Home Campaign"] },
  "influencer-marketing-fmcg-brands-india": { topic: "Industry: FMCG", midPath: S("social-campaigns"), mid: ["Running Creators at FMCG Scale?", "Kudozz coordinates high-volume micro and regional creator waves with sampling and tracking.", "See Social Campaigns"], bottom: ["Planning an FMCG Creator Program?", "Share your markets and availability, and we'll plan regional waves, sampling and sales-lift measurement.", "Plan an FMCG Program"] },
  "parenting-baby-influencer-marketing-india": { topic: "Industry: Parenting", midPath: S("creator-discovery"), mid: ["Need Parent Creators Families Trust?", "Kudozz vets parenting creators for trust, safety and brand fit.", "See Creator Discovery"], bottom: ["Planning a Parenting or Baby Brand Campaign?", "Tell us your product and claims, and we'll plan creators and content guidelines that protect families.", "Talk to the Kudozz Team"] },
  "influencer-marketing-fitness-brands-india": { topic: "Industry: Fitness", midPath: S("social-campaigns"), mid: ["Planning a Fitness Challenge or Launch?", "Kudozz coordinates coaches, athletes and community creators around one campaign.", "See Social Campaigns"], bottom: ["Planning a Fitness or Sports Campaign?", "Share your product and audience, and we'll plan creators, challenges and qualified nutrition content.", "Plan a Fitness Campaign"] },
  "gaming-influencer-marketing-india": { topic: "Industry: Gaming", midPath: S("product-launches"), mid: ["Launching a Game or Update?", "Kudozz plans streams, gameplay creators and tournaments around your launch.", "See Launch Support"], bottom: ["Planning a Gaming Creator Campaign?", "Tell us your game and audience, and we'll plan streamers and communities within current rules.", "Plan a Gaming Campaign"] },
  "influencer-marketing-travel-brands-india": { topic: "Industry: Travel", midPath: S("campaign-strategy"), mid: ["Planning a Destination Campaign?", "Kudozz plans travel and regional-language creators, trips and itineraries.", "See Campaign Strategy"], bottom: ["Planning a Travel or Tourism Campaign?", "Share your destination and source markets, and we'll plan creators, languages and measurement.", "Plan a Destination Campaign"] },
  "influencer-marketing-hospitality-brands-india": { topic: "Industry: Hospitality", midPath: S("creator-discovery"), mid: ["Hosting Creators at Your Property?", "Kudozz selects creators whose audiences travel to you and plans stays around booking periods.", "See Creator Discovery"], bottom: ["Planning a Hotel Creator Campaign?", "Tell us your property and booking goals, and we'll plan stays, content and direct-booking tracking.", "Plan a Hotel Campaign"] },
  "restaurant-cafe-influencer-marketing-india": { topic: "Industry: Restaurants", midPath: S("social-campaigns"), mid: ["Opening a Restaurant or Launching a Menu?", "Kudozz plans local food creator visits so coverage lasts beyond one evening.", "See Social Campaigns"], bottom: ["Planning a Local Restaurant Campaign?", "Share your outlets and city, and we'll plan food creators and footfall tracking.", "Plan a Restaurant Campaign"] },
  "manufacturing-influencer-marketing-india": { topic: "Industry: Manufacturing", midPath: INQUIRY, mid: ["Reaching Engineers and Industrial Buyers?", "Kudozz finds technical and trade creators credible with your buyers.", "Talk to Kudozz"], bottom: ["Planning an Industrial Creator Campaign?", "Tell us your products and buyers, and we'll plan creators, demos and trade-fair content.", "Plan a Manufacturing Campaign"] },
  "influencer-marketing-website-traffic": { topic: "Website Traffic", midPath: S("campaign-strategy"), mid: ["Want Creator Traffic That Actually Engages?", "Kudozz plans link formats, tracking and landing pages before creators post.", "See Campaign Strategy"], bottom: ["Planning a Traffic-Led Creator Campaign?", "Tell us the pages that matter and the next step you want, and we'll plan creators and tracking around them.", "Plan a Traffic Campaign"] },
  "influencer-marketing-customer-retention": { topic: "Customer Retention", midPath: S("ambassador-programs"), mid: ["Keeping Customers After the First Order?", "Kudozz structures ambassador and customer creator programs with disclosure built in.", "See Ambassador Programs"], bottom: ["Planning Creator Content for Existing Customers?", "Share where customers drop off, and we'll plan onboarding, reorder and community content.", "Talk to the Kudozz Team"] },
  "influencer-marketing-roi-forecasting": { topic: "ROI Forecasting", midPath: S("reporting"), mid: ["Want Forecasts You Can Check Against Actuals?", "Kudozz sets up tracking and reports results against the plan, creator by creator.", "See Reporting"], bottom: ["Building the Case for a Creator Budget?", "Share your numbers and goals, and we'll help shape scenarios and a measurement plan.", "Plan a Campaign With Kudozz"] },
  "influencer-marketing-agency-onboarding": { topic: "Agency Onboarding", midPath: S("campaign-strategy"), mid: ["Starting With a New Agency?", "Kudozz begins every engagement with a structured onboarding, kickoff and 30-day plan.", "See Campaign Strategy"], bottom: ["Looking for an Agency That Onboards Properly?", "Tell us your goals and timelines, and we'll walk you through how we'd set up the first month.", "Talk to the Kudozz Team"] },
  "influencer-marketing-governance": { topic: "Governance", midPath: S("outreach-management"), mid: ["Need Consistent Standards Across Campaigns?", "Kudozz runs contracts, disclosure checks and payments to one standard.", "See Outreach Management"], bottom: ["Bringing Structure to Your Creator Program?", "Share how creator work runs today, and we'll suggest the policies and process to put in place.", "Talk to the Kudozz Team"] },
  "influencer-marketing-team-structure": { topic: "Team Structure", midPath: S("campaign-strategy"), mid: ["Deciding What to Keep In-House?", "Kudozz works alongside in-house teams, handling what they can't staff yet.", "See Campaign Strategy"], bottom: ["Setting Up Creator Marketing Inside Your Brand?", "Tell us your team and goals, and we'll suggest where an agency fits and where it doesn't.", "Talk to the Kudozz Team"] },
  "influencer-marketing-annual-plan": { topic: "Annual Plan", midPath: S("campaign-strategy"), mid: ["Planning Creator Activity for the Whole Year?", "Kudozz maps always-on activity, launches and festivals into one calendar.", "See Campaign Strategy"], bottom: ["Ready to Plan Your Next 12 Months?", "Share your launches, markets and budget, and we'll draft an annual creator plan with review points.", "Plan Your Year With Kudozz"] },
  "seasonal-influencer-marketing-india": { topic: "Seasonal Campaign", midPath: S("social-campaigns"), mid: ["Planning for a Festival Window?", "Kudozz books regional creators early and plans content around each festival's timing.", "See Social Campaigns"], bottom: ["Planning Your Next Festival Campaign?", "Tell us the festival, markets and products, and we'll plan creators, timing and offers.", "Plan a Seasonal Campaign"] },
  "experiential-influencer-marketing": { topic: "Event Campaign", midPath: S("product-launches"), mid: ["Hosting a Launch, Opening or Event?", "Kudozz plans the creator layer alongside the event, from invites to post-event content.", "See Launch Support"], bottom: ["Planning a Creator-Led Event?", "Share the event, city and date, and we'll plan creators before, during and after it.", "Plan an Event Campaign"] },
};

function brandGuideCta(slug: string, category: string): BlogCtaCopy | null {
  const c = BRAND_GUIDE_CTAS[slug];
  if (!c) return null;
  return {
    topic: c.topic,
    mid: { headline: c.mid[0], body: c.mid[1], ctaLabel: c.mid[2], href: c.midPath === INQUIRY ? withTracking(INQUIRY, slug, category, "mid", c.topic) : c.midPath },
    bottom: { headline: c.bottom[0], body: c.bottom[1], ctaLabel: c.bottom[2], href: withTracking(INQUIRY, slug, category, "bottom", c.topic) },
  };
}

const matchers: Matcher[] = [
  {
    topic: "Creator Marketplace",
    test: (s) => MARKETPLACE_SLUGS.has(s),
    mid: {
      headline: "Comparing Self-Serve Platforms With a Managed Approach?",
      body: "Kudozz handles creator discovery, vetting and matching as part of a managed campaign, alongside whatever tools you already use.",
      ctaLabel: "Explore Creator Discovery",
      path: "/services/creator-discovery",
    },
    bottom: {
      headline: "Need Creators Matched to Your Brief?",
      body: "Tell us about your brand, audience and goals, and we'll help you find and vet creators who genuinely fit.",
      ctaLabel: "Talk to Kudozz",
    },
  },
  {
    topic: "B2B Creator Economy",
    test: (s) => B2B_CREATOR_SLUGS.has(s),
    mid: {
      headline: "Looking to Build a Creator-Led B2B Campaign?",
      body: "Kudozz can help you find credible practitioners and experts your buyers already follow.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Creator-Led B2B Program?",
      body: "Tell us about your buyers and sales cycle, and let's plan creator partnerships around them.",
      ctaLabel: "Start the Conversation",
    },
  },
  {
    topic: "UGC",
    test: (s) => /\bugc\b/.test(s),
    mid: {
      headline: "Need UGC Creators for Your Brand?",
      body: "Get creator content tailored to your campaign and content goals.",
      ctaLabel: "Explore UGC Support",
      path: "/services/ugc-campaigns",
    },
    bottom: {
      headline: "Need UGC Content for Your Brand?",
      body: "Let's help you find creators and build a UGC content plan that fits your campaign goals.",
      ctaLabel: "Get UGC Support",
    },
  },
  {
    topic: "Product Launch",
    test: (s) => /product-launch/.test(s) || /influencers-for-product-launch/.test(s),
    mid: {
      headline: "Launching a New Product?",
      body: "Kudozz can help plan creator coverage timed around your launch window.",
      ctaLabel: "Plan the Launch",
      path: "/services/product-launches",
    },
    bottom: {
      headline: "Launching a New Product?",
      body: "Build a creator campaign around your launch, audience and objectives.",
      ctaLabel: "Plan My Campaign",
    },
  },
  {
    topic: "Ambassador Program",
    test: (s) => /ambassador-program/.test(s),
    mid: {
      headline: "Considering a Brand Ambassador Program?",
      body: "Kudozz can help structure a program built for long-term creator relationships, not one-off posts.",
      ctaLabel: "Talk to Kudozz",
      path: "/services/ambassador-programs",
    },
    bottom: {
      headline: "Ready to Build an Ambassador Program?",
      body: "Tell us about your brand and let's design a program structure that keeps creators engaged long-term.",
      ctaLabel: "Start the Conversation",
    },
  },
  {
    topic: "Pricing",
    test: (s) => /-cost|-costs|-budget|-rates|how-much/.test(s),
    mid: {
      headline: "Planning Your Influencer Marketing Budget?",
      body: "Tell us about your campaign and we'll help you think through the creator mix and campaign structure.",
      ctaLabel: "Discuss Your Campaign",
      path: INQUIRY,
    },
    bottom: {
      headline: "Ready to Scope Your Campaign Budget?",
      body: "Share your goals and we'll help you plan a creator mix that fits your budget.",
      ctaLabel: "Discuss Your Budget",
    },
  },
  {
    topic: "ROI & Reporting",
    test: (s) => /-roi|measure-|-metrics|-kpis|-analytics|marketing-report$/.test(s),
    mid: {
      headline: "Want Clearer Campaign Reporting?",
      body: "Kudozz tracks performance by creator, not just campaign totals, so you know what actually worked.",
      ctaLabel: "Improve Your Reporting",
      path: "/services/reporting",
    },
    bottom: {
      headline: "Want to Improve Campaign Measurement?",
      body: "Tell us how you're tracking campaigns today and let's build a clearer reporting setup.",
      ctaLabel: "Talk to Kudozz",
    },
  },
  {
    topic: "Legal & Compliance",
    test: (s) =>
      /-contract|-compliance|-brief$|-brief-|-negotiat|-payments|usage-rights|-whitelisting|-licensing|brand-safety/.test(
        s
      ),
    mid: {
      headline: "Need Help With Creator Contracts or Compliance?",
      body: "Kudozz handles contracting, usage rights and compliance as part of a managed campaign.",
      ctaLabel: "Talk to Kudozz",
      path: "/services/outreach-management",
    },
    bottom: {
      headline: "Want Campaign Contracting Handled for You?",
      body: "Let Kudozz manage negotiation, contracts and compliance so nothing falls through the cracks.",
      ctaLabel: "Get Campaign Support",
    },
  },
  {
    topic: "Campaign Management",
    test: (s) => /outreach|campaign-management|how-to-work-with|how-to-brief|how-to-contact/.test(s),
    mid: {
      headline: "Need Help Managing Your Campaign?",
      body: "From creator coordination to campaign execution and reporting, Kudozz can support the process.",
      ctaLabel: "Get Campaign Support",
      path: "/services/outreach-management",
    },
    bottom: {
      headline: "Need Help Running the Campaign End to End?",
      body: "Tell us what you're working on and let Kudozz manage outreach, coordination and reporting for you.",
      ctaLabel: "Get Campaign Support",
    },
  },
  {
    topic: "Creator Discovery",
    test: (s) =>
      /how-to-find|how-to-vet|avoid-fake-influencers|fake-follow|fake-influencer|micro-vs-macro|micro-influencers|-vetting|find-indian-influencers/.test(
        s
      ),
    mid: {
      headline: "Need the Right Creators for Your Campaign?",
      body: "Kudozz can help with creator discovery, vetting and shortlisting suited to your brand.",
      ctaLabel: "Find the Right Creators",
      path: "/services/creator-discovery",
    },
    bottom: {
      headline: "Need Help Finding the Right Creators?",
      body: "Tell us about your brand and audience, and let Kudozz build a vetted creator shortlist.",
      ctaLabel: "Find the Right Creators",
    },
  },
  {
    topic: "Podcast",
    test: (s) => /podcast/.test(s),
    mid: {
      headline: "Exploring Podcast Creator Partnerships?",
      body: "Kudozz can help identify the right shows and structure host-read or sponsorship-style partnerships.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Podcast Sponsorship Campaign?",
      body: "Tell us about your brand and let's find the right podcast creator partnerships for it.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "Instagram",
    test: (s) => /instagram/.test(s),
    mid: {
      headline: "Planning an Instagram Creator Campaign?",
      body: "Find the right creators and build a campaign around your audience and goals.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Ready to Plan Your Instagram Campaign?",
      body: "Tell us what you're trying to achieve and let Kudozz build the right Instagram creator strategy for your brand.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "YouTube",
    test: (s) => /youtube/.test(s),
    mid: {
      headline: "Looking for YouTube Creators?",
      body: "Build creator partnerships around reviews, integrations and sponsored content.",
      ctaLabel: "Find the Right Creators",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a YouTube Creator Campaign?",
      body: "Tell us about your campaign and let's find the right creator approach for your brand.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "LinkedIn / B2B",
    test: (s) => /linkedin|^b2b-|-b2b-/.test(s),
    mid: {
      headline: "Exploring B2B Creator Marketing?",
      body: "Kudozz can help you find credible voices for thought leadership and B2B campaigns.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Looking to Work With B2B Creators?",
      body: "Build creator partnerships around expertise, thought leadership and your business goals.",
      ctaLabel: "Talk to Kudozz",
    },
  },
  {
    topic: "X",
    test: (s) => /(^|-)x-/.test(s),
    mid: {
      headline: "Exploring Creator Marketing on X?",
      body: "Kudozz can help identify credible voices and build a campaign around real-time conversation.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Creator Campaign on X?",
      body: "Tell us about your brand and goals, and let's find the right creator approach on X.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "Snapchat",
    test: (s) => /snapchat/.test(s),
    mid: {
      headline: "Exploring Snapchat Creator Marketing?",
      body: "Kudozz can help you plan a creator campaign suited to Snapchat's younger, mobile-first audience.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Snapchat Creator Campaign?",
      body: "Tell us about your brand and goals, and let's build the right creator approach on Snapchat.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "Pinterest",
    test: (s) => /pinterest/.test(s),
    mid: {
      headline: "Exploring Pinterest Creator Marketing?",
      body: "Kudozz can help you plan a creator campaign around Pinterest's long content lifespan and purchase intent.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Pinterest Creator Campaign?",
      body: "Tell us about your brand and goals, and let's build the right creator approach on Pinterest.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "Reddit",
    test: (s) => /reddit/.test(s),
    mid: {
      headline: "Exploring Reddit Community Marketing?",
      body: "Kudozz can help you approach Reddit communities the way they expect — credibly, not like an ad.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Reddit Creator or Community Strategy?",
      body: "Tell us about your brand and goals, and let's find the right approach for Reddit's communities.",
      ctaLabel: "Start Your Campaign",
    },
  },
];

const LOCATION_OVERRIDES: Record<string, string> = {
  ahmedabad: "Ahmedabad",
  bangalore: "Bangalore",
  delhi: "Delhi",
  mumbai: "Mumbai",
};

function isLocationSlug(slug: string): string | null {
  const agencyMatch = slug.match(/^best-influencer-marketing-agencies-in-(.+)$/);
  if (agencyMatch) return titleCaseWords(agencyMatch[1]);
  const cityMatch = slug.match(/^influencer-marketing-(ahmedabad|bangalore|delhi|mumbai)$/);
  if (cityMatch) return LOCATION_OVERRIDES[cityMatch[1]];
  return null;
}

const ACRONYM_OVERRIDES: Record<string, string> = {
  d2c: "D2C",
  b2b: "B2B",
  saas: "SaaS",
  ev: "EV",
  hr: "HR",
  fmcg: "FMCG",
  edtech: "EdTech",
  it: "IT",
  nadu: "Nadu",
  pradesh: "Pradesh",
};

const STOPWORDS = new Set(["influencer", "marketing", "brands", "brand", "india", "agencies", "agency", "in", "best", "for", "funnel"]);

function titleCaseWords(raw: string): string {
  return raw
    .split("-")
    .map((w) => ACRONYM_OVERRIDES[w] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const SLUG_LABEL_OVERRIDES: Record<string, string> = {
  "d2c-influencer-marketing-funnel-india": "D2C",
  "photography-creative-services-influencer-marketing-india": "Photography & Creative Services",
  "hr-recruitment-influencer-marketing-india": "HR & Recruitment",
  "restaurant-cafe-influencer-marketing-india": "Restaurant & Cafe",
  "parenting-baby-influencer-marketing-india": "Parenting & Baby",
};

function extractIndustryLabel(slug: string): string {
  if (SLUG_LABEL_OVERRIDES[slug]) return SLUG_LABEL_OVERRIDES[slug];
  const words = slug.split("-").filter((w) => !STOPWORDS.has(w));
  const label = words
    .map((w) => ACRONYM_OVERRIDES[w] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .trim();
  return label || "Brand";
}

const isIndustryVerticalSlug = (slug: string) =>
  /influencer-marketing-.+-india$|influencer-marketing-.+-brands-india$|-influencer-marketing-india$/.test(slug) &&
  !/^(youtube|instagram|linkedin|snapchat|pinterest|reddit|regional)-/.test(slug) &&
  slug !== "influencer-marketing-india" &&
  slug !== "seasonal-influencer-marketing-india" &&
  slug !== "linkedin-influencer-marketing-india";

const isAgencyComparisonSlug = (slug: string) =>
  /agency-vs-in-house|choose-influencer-marketing-agency|how-to-choose-an-influencer-marketing-agency|influencer-management-vs-influencer-marketing|influencer-marketing-services-india/.test(
    slug
  );

const isTrendsSlug = (slug: string) => /trends-2026|state-of-the-creator-economy|algorithm-changes/.test(slug);

/**
 * Creator Resources articles are written for creators, not brands, so they
 * skip every brand matcher below (several of their slugs — usage-rights,
 * -contract, -negotiat — would otherwise pull in brand-side CTAs). Copy
 * varies by topic group but always points to the one real creator action,
 * the application form, and stays soft: no promised campaigns or income,
 * matching the creator page's own "no cost to join, no obligation" framing.
 */
const CREATOR_APPLY = "/for-creators#apply";

type CreatorCopy = { mid: Omit<BlogCtaContent, "href">; bottom: Omit<BlogCtaContent, "href"> };

const JOIN_LABEL = "Join the Kudozz Creator Network";
const REGISTER_LABEL = "Register as a Creator";
const NO_PROMISES =
  "Kudozz reviews every creator application personally. Joining is free, and there's no obligation until a campaign actually fits you.";
const BRIEF_UPFRONT =
  "Tell us about your content, platforms and audience. When a relevant campaign comes up, we'll reach out with the brief and terms upfront.";

const CREATOR_COPY: Record<CreatorResourceGroupId | "default", CreatorCopy> = {
  seo: {
    mid: { headline: "Getting Found by the Right Audience?", body: `Discoverability is also what brands look for when planning creator campaigns. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Want to Connect Your Content With Relevant Brands?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  content: {
    mid: { headline: "Building a Consistent Content System?", body: `Consistent, original content is what brands look for in long-term creator partners. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Looking to Build Stronger Brand Partnerships?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  growth: {
    mid: { headline: "Growing an Audience That Trusts You?", body: `Audience quality matters more to brands than follower count. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Ready to Explore Brand Collaborations?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  community: {
    mid: { headline: "Building an Audience That Talks Back?", body: `That trust is what relevant brands look for in creator partners. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Open to Relevant Brand Collaborations?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  analytics: {
    mid: { headline: "Know Your Numbers?", body: `Clear, honest analytics make brand conversations easier. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Ready to Put Your Numbers to Work?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "brand-deals": {
    mid: { headline: "Want to Work With Brands Through Kudozz?", body: `Kudozz runs campaigns for brands across India. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Interested in Brand Collaborations?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  monetization: {
    mid: { headline: "Growing More Than One Income Stream?", body: `Brand collaborations can sit alongside memberships, products and platform income. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Add Brand Partnerships to Your Income Mix", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  commerce: {
    mid: { headline: "Is Your Audience Already Buying What You Recommend?", body: `That's a strong signal for brands planning creator campaigns. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Interested in Brand Collaborations?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  protection: {
    mid: { headline: "Protecting Your Work and Your Name?", body: `Kudozz works with creators on clear briefs, agreed usage and proper disclosure. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Want Brand Collaborations With Clear Terms?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  business: {
    mid: { headline: "Treating Content Like a Business?", body: `Brand partnerships can be one steady line in a creator business. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Want to Connect Your Creator Business With Relevant Brands?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  agencies: {
    mid: {
      headline: "Building a Creator Partnership Operation?",
      body: "If you represent creators, each creator on your roster can apply to the Kudozz network individually. Applications are reviewed personally, joining is free, and there's no obligation until a campaign fits.",
      ctaLabel: "Explore the Creator Network",
    },
    bottom: {
      headline: "Representing Creators? Their Applications Are Welcome.",
      body: "Creators can apply to Kudozz individually with their content, platforms and audience. When a relevant campaign comes up, we share the brief and terms upfront.",
      ctaLabel: "Go to the Creator Application",
    },
  },
  instagram: {
    mid: { headline: "Planning Brand Collaborations on Instagram?", body: `Kudozz runs Instagram creator campaigns for brands across India. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Looking for Relevant Instagram Brand Partnerships?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  youtube: {
    mid: { headline: "Planning Brand Collaborations on YouTube?", body: `Kudozz runs YouTube creator campaigns for brands across India. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Looking for Relevant YouTube Brand Partnerships?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  tiktok: {
    mid: {
      headline: "Also Creating on Instagram or YouTube?",
      body: `Kudozz's campaigns for Indian brands run on platforms available in India, such as Instagram and YouTube. ${NO_PROMISES}`,
      ctaLabel: JOIN_LABEL,
    },
    bottom: { headline: "Looking for Relevant Brand Partnerships?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  default: {
    mid: { headline: "Want to Work With Brands Through Kudozz?", body: `Kudozz runs campaigns for brands across India. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Interested in Brand Collaborations?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
};

/** Section-level copy where the group default doesn't fit the reader's situation. */
const CREATOR_SECTION_COPY: Record<string, CreatorCopy> = {
  "business-model-and-strategy": {
    mid: { headline: "Looking for Relevant Brand Partnerships?", body: `Brand work can be one planned line in your business model. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Want Brand Partnerships That Fit Your Business Model?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "deal-operations": {
    mid: { headline: "Looking for the Right Brand Collaborations?", body: `Kudozz runs campaigns for brands across India and shares briefs and terms upfront. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Looking for the Right Brand Collaboration? Talk to Kudozz.", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "choosing-deals": {
    mid: { headline: "Want Collaborations That Fit Your Audience?", body: `Kudozz matches creators to campaigns on audience and brand fit, not follower count. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Looking for the Right Brand Collaboration? Talk to Kudozz.", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "pricing-and-profit": {
    mid: { headline: "Need Help Navigating a Creator-Brand Collaboration?", body: `Kudozz shares the brief, deliverables and terms before you commit. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Need Help Navigating a Creator-Brand Collaboration? Talk to Kudozz.", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "sponsored-content-and-trust": {
    mid: { headline: "Prefer Fewer, Better-Fit Brand Deals?", body: `Kudozz looks for creators whose audience genuinely fits each campaign. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Looking for Brand Partnerships Your Audience Will Welcome?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "commerce-measurement": {
    mid: { headline: "Can You Show What Your Content Sells?", body: `Clear, honest results make brand conversations easier. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Interested in Performance-Minded Brand Collaborations?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "team-and-representation": {
    mid: { headline: "Building a Team Around Your Content?", body: `Joining a network like Kudozz's is optional and doesn't replace your own manager or agency. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Open to Relevant Brand Collaborations?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "creator-operations": {
    mid: { headline: "Running Your Creator Business More Systematically?", body: `Clear timelines, clean approvals and reliable delivery are what brands value in long-term creator partners. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Want to Manage Your Creator Partnerships More Systematically?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "outsourcing-and-production": {
    mid: { headline: "Building a Smoother Production Workflow?", body: `Consistent, well-produced content makes brand collaborations easier to plan. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Ready for Brand Collaborations That Fit Your Production Capacity?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "tools-and-automation": {
    mid: { headline: "Building a More Professional Creator Business?", body: `Organised creators are easier for brands to plan campaigns with. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Want to Connect Your Creator Business With Relevant Brands?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "legal-and-ip": {
    mid: { headline: "Need Help Managing Creator Partnerships Professionally?", body: `Kudozz shares the brief, deliverables, usage and terms upfront, before you commit to anything. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Want Brand Collaborations With Clear, Written Terms?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "business-infrastructure": {
    mid: { headline: "Building a More Organised Creator Business?", body: `Organised creators are easier for brands to plan campaigns with. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Want to Connect Your Creator Business With Relevant Brands?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
  "creator-agencies": {
    mid: {
      headline: "Building a Creator Partnership Business?",
      body: "If you represent creators, each creator on your roster can apply to the Kudozz network individually. Applications are reviewed personally, joining is free, and there's no obligation until a campaign fits.",
      ctaLabel: "Explore the Creator Network",
    },
    bottom: {
      headline: "Representing Creators? Their Applications Are Welcome.",
      body: "Creators can apply to Kudozz individually with their content, platforms and audience. When a relevant campaign comes up, we share the brief and terms upfront.",
      ctaLabel: "Go to the Creator Application",
    },
  },
  "agency-growth": {
    mid: {
      headline: "Building a Creator Partnership Operation?",
      body: "Kudozz runs creator campaigns for brands across India. Creators you represent can apply to the network individually; applications are reviewed personally and joining is free.",
      ctaLabel: "Explore the Creator Network",
    },
    bottom: {
      headline: "Growing a Creator Business Around Brand Partnerships?",
      body: "Creators on your roster can apply to Kudozz individually. When a relevant campaign comes up, we share the brief and terms upfront.",
      ctaLabel: "Go to the Creator Application",
    },
  },
  "talent-and-roster": {
    mid: {
      headline: "Looking to Build a Stronger Creator Network?",
      body: "Creators you represent can apply to the Kudozz network individually, so relevant brand campaigns can reach them. Applications are reviewed personally, and there's no obligation until a campaign fits.",
      ctaLabel: "Explore the Creator Network",
    },
    bottom: {
      headline: "Representing Creators? Their Applications Are Welcome.",
      body: "Each creator can apply with their content, platforms and audience. When a relevant campaign comes up, we share the brief and terms upfront.",
      ctaLabel: "Go to the Creator Application",
    },
  },
  "scaling-and-resilience": {
    mid: { headline: "Building a Creator Business That Can Scale?", body: `Brand partnerships can be one steady line in a business that doesn't depend on a single platform or client. ${NO_PROMISES}`, ctaLabel: JOIN_LABEL },
    bottom: { headline: "Ready to Add Relevant Brand Partnerships to Your Business?", body: BRIEF_UPFRONT, ctaLabel: REGISTER_LABEL },
  },
};

function creatorCtaSet(post: BlogPost): BlogCtaSet {
  const { slug, category } = post;
  const section = getCreatorSectionForSlug(slug);
  const copy = (section && CREATOR_SECTION_COPY[section.id]) ?? CREATOR_COPY[section?.group ?? "default"];
  const topic = "Creator Resources";
  return {
    topic,
    audience: "creator",
    ctaType: "creator_signup",
    platform: detectPlatform(slug),
    intent: section?.id ?? "creator-resources",
    cluster: section?.group ?? "",
    mid: { ...copy.mid, href: withTracking(CREATOR_APPLY, slug, category, "mid", topic) },
    bottom: { ...copy.bottom, href: withTracking(CREATOR_APPLY, slug, category, "bottom", topic) },
  };
}

/**
 * Creator Resources articles written mainly for companies (founders building
 * a content-led brand) get the brand inquiry CTA instead of the creator one.
 */
const BRAND_AUDIENCE_CREATOR_SLUGS = new Set(["founder-creator-brand"]);
/** Sections read mainly by brand and agency campaign teams rather than creators. */
const BRAND_AUDIENCE_CREATOR_SECTIONS = new Set(["campaign-operations"]);

type BrandCopy = { mid: Omit<BlogCtaContent, "href">; bottom: Omit<BlogCtaContent, "href"> };

const BRAND_AUDIENCE_COPY: Record<string, BrandCopy> = {
  "founder-creator-brand": {
    mid: {
      headline: "Planning a Creator-Led Campaign?",
      body: "Founder content and creator partnerships work well together. Kudozz can help you find creators whose audiences fit your brand.",
      ctaLabel: "Talk to Kudozz",
    },
    bottom: {
      headline: "Planning a Creator-Led Campaign? Talk to Kudozz.",
      body: "Tell us about your brand and goals, and we'll help you plan a creator approach that fits alongside your own content.",
      ctaLabel: "Talk to Kudozz",
    },
  },
  "campaign-operations": {
    mid: {
      headline: "Planning a Creator Campaign?",
      body: "Kudozz can run coordination, quality checks and reporting for you, or support the parts your team can't cover this quarter.",
      ctaLabel: "Talk to Kudozz",
    },
    bottom: {
      headline: "Planning a Creator Campaign? Let's Scope It Together.",
      body: "Tell us about your brand, timeline and goals, and we'll show you how a managed campaign would run from brief to report.",
      ctaLabel: "Start a Brand Inquiry",
    },
  },
};

function brandAudienceCreatorCtaSet(post: BlogPost, copy: BrandCopy): BlogCtaSet {
  const { slug, category } = post;
  const section = getCreatorSectionForSlug(slug);
  const topic = "Creator Resources";
  return {
    topic,
    audience: "brand",
    ctaType: "brand_inquiry",
    platform: detectPlatform(slug),
    intent: section?.id ?? "creator-resources",
    cluster: section?.group ?? "",
    mid: { ...copy.mid, href: withTracking(INQUIRY, slug, category, "mid", topic) },
    bottom: { ...copy.bottom, href: withTracking(INQUIRY, slug, category, "bottom", topic) },
  };
}

export function getBlogCtaSet(post: BlogPost): BlogCtaSet {
  if (BRAND_AUDIENCE_CREATOR_SLUGS.has(post.slug)) return brandAudienceCreatorCtaSet(post, BRAND_AUDIENCE_COPY[post.slug]);
  const brandSection = getCreatorSectionForSlug(post.slug)?.id;
  if (brandSection && BRAND_AUDIENCE_CREATOR_SECTIONS.has(brandSection))
    return brandAudienceCreatorCtaSet(post, BRAND_AUDIENCE_COPY[brandSection]);
  if (post.category === "Creator Resources") return creatorCtaSet(post);
  const copy = resolveBrandCtaCopy(post);
  return {
    ...copy,
    audience: "brand",
    ctaType: "brand_inquiry",
    platform: detectPlatform(post.slug),
    intent: copy.topic,
    cluster: "",
  };
}

/**
 * Rebuilt location guides (src/content/location-guides): hand-written copy per market. The topic carries the
 * location into the form's `t` param and the analytics `cta_topic`, e.g. "Location: Gujarat".
 */
const LOCATION_GUIDE_CTAS: Record<string, { location: string; mid: [string, string, string]; bottom: [string, string, string] }> = {
  "best-influencer-marketing-agencies-in-india": {
    location: "India",
    mid: ["Comparing Agencies for a National Campaign?", "Tell us your markets and languages, and Kudozz will show you how it would plan the creator mix.", "Talk to Kudozz"],
    bottom: ["Looking for an Influencer Marketing Partner in India?", "Share your objective, budget range and priority markets, and we'll come back with a plan and a creator shortlist.", "Start Your Campaign"],
  },
  "best-influencer-marketing-agencies-in-maharashtra": {
    location: "Maharashtra",
    mid: ["Planning a Campaign Beyond Mumbai?", "Kudozz sources creators in Pune, Nagpur and across Maharashtra, including Marathi creators.", "Talk to Kudozz"],
    bottom: ["Planning an Influencer Campaign in Maharashtra?", "Tell us which cities and languages matter, and we'll plan the creator mix and timing.", "Start Your Campaign"],
  },
  "best-influencer-marketing-agencies-in-tamil-nadu": {
    location: "Tamil Nadu",
    mid: ["Need Tamil Creators Beyond Chennai?", "Kudozz checks that a creator's audience is in Coimbatore, Madurai or wherever you sell, not just Chennai.", "Talk to Kudozz"],
    bottom: ["Planning an Influencer Campaign in Tamil Nadu?", "Share your category and cities, and we'll plan Tamil and English creators around Pongal, Diwali or your launch.", "Start Your Campaign"],
  },
  "best-influencer-marketing-agencies-in-gujarat": {
    location: "Gujarat",
    mid: ["Need Gujarati Creators Whose Audience Is Local?", "Kudozz checks that a creator's followers are in Gujarat, not just that the creator is.", "Talk to Kudozz"],
    bottom: ["Planning an Influencer Campaign in Gujarat?", "Share your category and cities, and we'll plan creators around Navratri, Diwali or your launch date.", "Start Your Campaign"],
  },
  "best-influencer-marketing-agencies-in-karnataka": {
    location: "Karnataka",
    mid: ["Launching an App or Brand From Bengaluru?", "Kudozz plans creator campaigns with tracking for installs, sign-ups or sales set up before launch.", "Talk to Kudozz"],
    bottom: ["Planning an Influencer Campaign in Bengaluru or Karnataka?", "Tell us your objective and audience, and we'll recommend creators, including Kannada creators where they help.", "Start Your Campaign"],
  },
  "best-influencer-marketing-agencies-in-delhi": {
    location: "Delhi NCR",
    mid: ["Targeting a Specific Part of the NCR?", "Kudozz plans creators for Delhi, Gurugram or Noida audiences and checks where their followers live.", "Talk to Kudozz"],
    bottom: ["Planning an Influencer Campaign in Delhi NCR?", "Share your objective and timing, and we'll plan the creator mix around the NCR's festive and wedding calendar.", "Start Your Campaign"],
  },
  "best-influencer-marketing-agencies-in-mumbai": {
    location: "Mumbai",
    mid: ["Need Creators With a Mumbai Audience?", "Kudozz checks each creator's audience by city before recommending them for a local brief.", "Talk to Kudozz"],
    bottom: ["Planning an Influencer Campaign in Mumbai?", "Tell us whether you need Mumbai reach or national reach, and we'll build the shortlist to match.", "Start Your Campaign"],
  },
  "best-influencer-marketing-agencies-in-ahmedabad": {
    location: "Ahmedabad",
    mid: ["Want a Specialist for Your Ahmedabad Campaign?", "Kudozz focuses on creator marketing and can take a campaign from Ahmedabad to the rest of India.", "Talk to Kudozz"],
    bottom: ["Planning an Influencer Campaign in Ahmedabad?", "Share your category and goal, and we'll recommend Ahmedabad and Gujarati creators with the reasoning behind each.", "Start Your Campaign"],
  },
};

function locationGuideCta(slug: string, category: string): BlogCtaCopy | null {
  const copy = LOCATION_GUIDE_CTAS[slug];
  if (!copy) return null;
  const topic = `Location: ${copy.location}`;
  const [midHeadline, midBody, midLabel] = copy.mid;
  const [bottomHeadline, bottomBody, bottomLabel] = copy.bottom;
  return {
    topic,
    mid: { headline: midHeadline, body: midBody, ctaLabel: midLabel, href: withTracking(INQUIRY, slug, category, "mid", topic) },
    bottom: { headline: bottomHeadline, body: bottomBody, ctaLabel: bottomLabel, href: withTracking(INQUIRY, slug, category, "bottom", topic) },
  };
}

function resolveBrandCtaCopy(post: BlogPost): BlogCtaCopy {
  const { slug, category } = post;
  const guide = brandGuideCta(slug, category);
  if (guide) return guide;
  const location = locationGuideCta(slug, category);
  if (location) return location;

  for (const matcher of matchers) {
    if (matcher.test(slug)) {
      return {
        topic: matcher.topic,
        mid: {
          headline: matcher.mid.headline,
          body: matcher.mid.body,
          ctaLabel: matcher.mid.ctaLabel,
          href: matcher.mid.path === INQUIRY ? withTracking(INQUIRY, slug, category, "mid", matcher.topic) : matcher.mid.path,
        },
        bottom: {
          headline: matcher.bottom.headline,
          body: matcher.bottom.body,
          ctaLabel: matcher.bottom.ctaLabel,
          href: withTracking(INQUIRY, slug, category, "bottom", matcher.topic),
        },
      };
    }
  }

  const locationLabel = isLocationSlug(slug);
  if (locationLabel) {
    return {
      topic: "Location",
      mid: {
        headline: `Running a Campaign in ${locationLabel}?`,
        body: `Kudozz works with brands across India to plan and run influencer campaigns, including in ${locationLabel}.`,
        ctaLabel: "Talk to Kudozz",
        href: withTracking(INQUIRY, slug, category, "mid", "Location"),
      },
      bottom: {
        headline: `Ready to Plan a Campaign in ${locationLabel}?`,
        body: "Tell us about your brand and goals, and let's build the right creator strategy for your market.",
        ctaLabel: "Start Your Campaign",
        href: withTracking(INQUIRY, slug, category, "bottom", "Location"),
      },
    };
  }

  if (isAgencyComparisonSlug(slug)) {
    return {
      topic: "Agency Comparison",
      mid: {
        headline: "Weighing Your Options for Running a Campaign?",
        body: "Kudozz can walk you through what a managed campaign looks like for your specific situation.",
        ctaLabel: "Talk to Kudozz",
        href: withTracking(INQUIRY, slug, category, "mid", "Agency Comparison"),
      },
      bottom: {
        headline: "Ready to Talk to an Influencer Marketing Agency?",
        body: "Tell us about your brand and what you're trying to achieve, and we'll take it from there.",
        ctaLabel: "Talk to Kudozz",
        href: withTracking(INQUIRY, slug, category, "bottom", "Agency Comparison"),
      },
    };
  }

  if (isIndustryVerticalSlug(slug)) {
    const label = extractIndustryLabel(slug);
    return {
      topic: "Industry",
      mid: {
        headline: `Planning a Campaign for Your ${label} Brand?`,
        body: `Kudozz can help you find creators who understand the ${label.toLowerCase()} space and build a campaign around your audience.`,
        ctaLabel: "Talk to Kudozz",
        href: withTracking(INQUIRY, slug, category, "mid", "Industry"),
      },
      bottom: {
        headline: `Ready to Launch a ${label} Creator Campaign?`,
        body: "Tell us about your brand and goals, and let's build a creator strategy suited to your category.",
        ctaLabel: "Start Your Campaign",
        href: withTracking(INQUIRY, slug, category, "bottom", "Industry"),
      },
    };
  }

  if (isTrendsSlug(slug)) {
    return {
      topic: "Trends",
      mid: {
        headline: "Want to Put These Trends Into Practice?",
        body: "Kudozz can help you turn what's working right now into an actual campaign plan.",
        ctaLabel: "Talk to Kudozz",
        href: withTracking(INQUIRY, slug, category, "mid", "Trends"),
      },
      bottom: {
        headline: "Ready to Build a Campaign Around What's Working Now?",
        body: "Tell us about your brand and goals, and let's plan a campaign grounded in where the creator economy actually is.",
        ctaLabel: "Start Your Campaign",
        href: withTracking(INQUIRY, slug, category, "bottom", "Trends"),
      },
    };
  }

  return {
    topic: "General",
    mid: {
      headline: "Planning an Influencer Campaign?",
      body: "Kudozz can help you find relevant creators and plan the right campaign for your brand.",
      ctaLabel: "Talk to Kudozz",
      href: withTracking(INQUIRY, slug, category, "mid", "General"),
    },
    bottom: {
      headline: "Ready to Plan Your Influencer Campaign?",
      body: "Tell us what you're trying to achieve and let Kudozz help you build the right creator strategy for your brand.",
      ctaLabel: "Start Your Campaign",
      href: withTracking(INQUIRY, slug, category, "bottom", "General"),
    },
  };
}
