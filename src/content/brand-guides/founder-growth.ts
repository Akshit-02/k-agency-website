import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

/**
 * Founder questions, batch 8 (roadmap topics 141–160, conversion, creative strategy and growth). Three genuinely
 * missing pages: influencer creative strategy (141, with formats by objective, 154, folded in), a creator content
 * library (151) and retargeting and follow-up built on creator activity (158). The other topics update or are already
 * served by existing owners. See docs/founder-questions-141-160-audit.md.
 */
const PUBLISHED = "2026-10-14";
const REVIEWED = "October 2026";

const EXT = {
  metaCustomAudienceTerms: "https://www.facebook.com/legal/terms/customaudience",
  whatsappBusinessPolicy: "https://whatsappbusiness.com/policy/",
  icoStorageAccess:
    "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/",
};

export const founderGrowthPosts: BlogPost[] = [
  // Topic 141 (topic 154, formats by objective, is folded in)
  {
    slug: "influencer-creative-strategy",
    category: "Campaign Strategy",
    title: "How to Build an Influencer Creative Strategy That Supports Business Goals",
    seoTitle: "Influencer Creative Strategy: Linking Content to Goals",
    excerpt:
      "The layer between your marketing strategy and a campaign brief: the message, the proof, the role each creator plays, which formats fit which objective, what stays fixed and what creators decide, and how you'll learn what works.",
    metaDescription:
      "Build an influencer creative strategy: messages and proof, creator roles, content formats by objective, fixed vs flexible creative, and a plan for testing what works.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: ["influencer creative strategy", "influencer content formats", "creator content strategy", "influencer messaging", "content formats by objective"],
    related: ["influencer-campaign-brief", "influencer-brand-consistency", "influencer-marketing-testing"],
    hero: {
      src: "/blog/brand-guides/influencer-creative-strategy.svg",
      alt: "Influencer creative strategy: one message, proof points, creator roles, formats by objective and a testing plan",
    },
    body: [
      {
        type: "paragraph",
        text: "Many creator campaigns go straight from 'we want sales' to a brief listing deliverables. The creators then guess at the message, every video says something slightly different, and the report can't explain why some content worked. A creative strategy fills the gap: it decides what the brand needs people to believe, what proves it, and how creators will show it, before anyone writes a brief.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer creative strategy sets five things for a campaign or a quarter: the one idea you want people to take away, the proof that makes it believable, the role each type of creator plays, the formats that fit each objective, and the line between what's fixed and what creators decide. Add a short list of creative questions you want to answer by testing. The brief then turns this into instructions for each creator.",
      },
      { type: "heading", text: "Where creative strategy sits", id: "where-it-sits" },
      {
        type: "table",
        headers: ["Layer", "Answers", "Changes"],
        rows: [
          ["Influencer marketing strategy", "Why creators, which audiences, budget, platforms, how success is measured", "Yearly"],
          ["Creative strategy", "What we say, what proves it, who says it, in which formats, what we're testing", "Per campaign or quarter"],
          ["Brief", "What this creator makes, by when, with which must-haves", "Per creator"],
          ["Content", "The creator's own execution", "Per post"],
        ],
      },
      {
        type: "paragraph",
        text: "The business-level plan is covered in influencer marketing strategy, and turning creative strategy into instructions in the influencer campaign brief.",
        links: [
          { text: "influencer marketing strategy", href: "/blog/influencer-marketing-strategy" },
          { text: "the influencer campaign brief", href: "/blog/influencer-campaign-brief" },
        ],
      },
      { type: "heading", text: "1. One idea and the proof behind it", id: "idea-and-proof" },
      {
        type: "list",
        items: [
          "The idea: one sentence the audience should remember, written in their words, not the brand's. 'It actually stays on through a 12-hour shift' beats 'long-lasting formula'.",
          "Where it comes from: customer reviews, support tickets, sales calls and comments on competitor posts. Customer language makes better creative than brand language.",
          "The proof: what a viewer needs to see to believe it. A demonstration, a before and after under honest conditions, a comparison, a price breakdown or an expert explanation.",
          "Claims you can substantiate: write the approved claims list now, so no creator invents one.",
        ],
      },
      {
        type: "paragraph",
        text: "Collecting customer language is covered in customer insights for influencer briefs.",
        links: [{ text: "customer insights for influencer briefs", href: "/blog/customer-insights-influencer-brief" }],
      },
      { type: "heading", text: "2. Give each creator type a role", id: "creator-roles" },
      {
        type: "table",
        headers: ["Role", "Typical creators", "Job in the campaign"],
        rows: [
          ["Expert", "Dermatologists, engineers, chefs, financial professionals (qualified where rules require)", "Explain why it works; answer objections"],
          ["Everyday user", "Micro and nano creators who match the customer", "Show real use and honest reactions"],
          ["Entertainer", "Comedy, storytelling and trend creators", "Earn attention from people not yet looking"],
          ["Community voice", "Regional, language or niche community creators", "Make it relevant to a specific group"],
        ],
      },
      { type: "heading", text: "3. Formats by objective", id: "formats-by-objective" },
      {
        type: "table",
        headers: ["Objective", "Formats that usually fit", "Why"],
        rows: [
          ["Reach new audiences", "Short-form video (Reels, Shorts, TikTok where available), Collab posts", "Recommendation feeds show it to non-followers"],
          ["Explain or educate", "Long-form YouTube, carousels, podcasts, LinkedIn posts for B2B", "Room to show and explain"],
          ["Drive a click or purchase now", "Stories with link stickers, pinned comments and description links, live shopping", "The format carries a direct next step"],
          ["Build trust for a considered purchase", "Reviews, comparisons, 'one month later' follow-ups", "Viewers want depth and honesty"],
          ["Supply ad creative", "Raw footage, multiple hooks, vertical and square cuts", "Paid testing needs variations"],
          ["Retention and repeat purchase", "Tutorials, routines, 'how I use it' content", "Helps customers get value after buying"],
        ],
      },
      {
        type: "paragraph",
        text: "No format or length guarantees performance; these are starting points to test. Platform choice is covered in Instagram vs YouTube vs TikTok, and format detail in Instagram Stories vs Reels and YouTube Shorts vs long-form.",
        links: [
          { text: "Instagram vs YouTube vs TikTok", href: "/blog/instagram-vs-youtube-vs-tiktok" },
          { text: "Instagram Stories vs Reels", href: "/blog/instagram-stories-influencer-marketing" },
          { text: "YouTube Shorts vs long-form", href: "/blog/youtube-shorts-influencer-marketing" },
        ],
      },
      { type: "heading", text: "4. Fixed, flexible and free", id: "fixed-flexible-free" },
      {
        type: "table",
        headers: ["", "Examples", "Who decides"],
        rows: [
          ["Fixed", "The core idea, approved claims, product shown correctly, disclosure, legal must-haves", "The brand"],
          ["Flexible", "The proof used, the hook, the format within the brief, the call to action wording", "Agreed between brand and creator"],
          ["Free", "Script, setting, humour, tone, editing style", "The creator"],
        ],
      },
      {
        type: "paragraph",
        text: "The tighter the fixed list, the more creator content looks like an ad and the less it performs like creator content. Influencer brand consistency covers this balance in more depth.",
        links: [{ text: "Influencer brand consistency", href: "/blog/influencer-brand-consistency" }],
      },
      { type: "heading", text: "5. Decide what you want to learn", id: "creative-questions" },
      {
        type: "list",
        items: [
          "Write two or three creative questions per campaign, for example: does a price comparison beat a texture demo for first orders?",
          "Tag every piece of content with the variables you care about (hook type, proof type, creator role, format) when it goes live.",
          "Read results by tag, not just by creator, so learnings survive when creators change.",
          "Carry the answers into the next creative strategy.",
        ],
      },
      {
        type: "paragraph",
        text: "Openings are covered in UGC ad hooks, structured experiments in creator campaign testing, and analysing winners in influencer content performance.",
        links: [
          { text: "UGC ad hooks", href: "/blog/ugc-ad-hooks" },
          { text: "creator campaign testing", href: "/blog/influencer-marketing-testing" },
          { text: "influencer content performance", href: "/blog/influencer-content-performance" },
        ],
      },
      { type: "heading", text: "A one-page creative strategy", id: "template" },
      {
        type: "template",
        label: "Creative strategy (one page)",
        text: "Objective and primary KPI:\nAudience (in their words):\nThe one idea:\nProof we'll show:\nApproved claims / claims to avoid:\nCreator roles and how many of each:\nFormats per objective:\nFixed / flexible / free:\nCreative questions to answer:\nDisclosure and market rules:\nWhere the content will be reused (and rights needed):",
      },
      { type: "heading", text: "Hypothetical example", id: "hypothetical-example" },
      {
        type: "paragraph",
        text: "Hypothetical. A sunscreen brand's reviews keep mentioning 'no white cast on darker skin'. That becomes the idea. The proof is an unfiltered application on camera in daylight. Two dermatologists explain the filters used (the expert role), twelve everyday creators with a range of skin tones show application and a midday check (the everyday role), and three comedy creators make the 'white cast' problem relatable (the entertainer role). Reels carry reach, Stories carry the offer, and raw clips are licensed for ads. The creative question: does the midday check or the application shot make the better opening for first orders?",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Several messages in one campaign, so none is remembered.",
          "Claims creators can't show, or the brand can't substantiate.",
          "Every creator asked to do every job.",
          "Choosing formats by habit rather than by objective.",
          "No tagging, so results can't explain why content worked.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creative strategy is short: one idea, its proof, creator roles, formats by objective, a clear line between fixed and free, and the questions you want answered. Done before the brief, it makes creator content more consistent without making it scripted, and it turns each campaign into learning for the next.",
      },
    ],
    faqs: [
      {
        question: "What is an influencer creative strategy?",
        answer:
          "It's the plan for what creator content will say and show: the main idea, the proof, the role each creator plays, the formats for each objective, what's fixed versus left to creators, and what you want to learn. It sits between the overall strategy and individual briefs.",
      },
      {
        question: "Which influencer content format is best?",
        answer:
          "It depends on the objective. Short-form video suits reach, long-form and carousels suit explanation, Stories with links suit immediate action, and reviews suit considered purchases. Treat these as starting points and test.",
      },
      {
        question: "How much creative control should brands keep?",
        answer:
          "Keep the core idea, approved claims, correct product use and disclosure fixed. Agree the proof, hook and call to action with the creator. Leave script, tone and style to them.",
      },
    ],
  },
  // Topic 151
  {
    slug: "influencer-content-library",
    category: "UGC Marketing",
    title: "How to Build an Influencer Content Library Your Team Can Actually Use",
    seoTitle: "Influencer Content Library: Organize, Tag and Reuse Assets",
    excerpt:
      "Creator content scattered across inboxes and drives gets lost, reused without rights or never reused at all. How to set up a content library: what to store, a tagging system, a rights register with expiry dates, performance notes and a reuse workflow.",
    metaDescription:
      "Build an influencer content library: what to store, a tagging system, a rights register with expiry dates, performance notes, access rules and a reuse workflow.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "7 min read",
    tags: ["influencer content library", "creator content library", "UGC asset management", "content rights register", "creator content reuse"],
    related: ["repurpose-influencer-content", "influencer-usage-rights", "influencer-content-performance"],
    hero: {
      src: "/blog/brand-guides/influencer-content-library.svg",
      alt: "An influencer content library: stored files, tags, a rights register with expiry dates and performance notes",
    },
    body: [
      {
        type: "paragraph",
        text: "After a few campaigns, most brands own hundreds of creator videos and photos, and can find almost none of them. The ad team asks for 'that unboxing from March', nobody knows whether the licence covers ads, and a strong video sits unused while new content is commissioned. A content library fixes this with a simple structure and one rule: nothing goes in without its rights record.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer content library is one shared place that stores every creator asset with three things attached: tags that make it findable (product, creator, format, hook, objective, market, language), a rights record (where it may be used, until when, and whether edits are allowed), and performance notes (how it did, where). Add a simple workflow for adding, requesting and retiring assets, review expiring rights monthly, and the library becomes a source of ad creative and product-page content rather than an archive.",
      },
      { type: "heading", text: "What to store", id: "what-to-store" },
      {
        type: "list",
        items: [
          "Final posted versions, with the live post URL and date.",
          "Raw footage and alternative takes, if the contract includes them; they are the most useful files for ads.",
          "Edited cuts made by your team, linked to the original.",
          "Captions, on-screen text and any claims used.",
          "The signed agreement or the rights section of it, linked rather than copied.",
          "Disclosure used, and the creator's handle and platform.",
        ],
      },
      { type: "heading", text: "A tagging system", id: "tagging" },
      {
        type: "table",
        headers: ["Tag group", "Example values", "Used for"],
        rows: [
          ["Product", "SKU, range, launch", "Finding content for a product page or ad set"],
          ["Creator", "Handle, tier, role (expert, everyday, entertainer)", "Rebooking and creator-level analysis"],
          ["Format and length", "Reel 30s, Story set, YouTube integration, raw", "Matching placements"],
          ["Hook and proof type", "Problem-first, demo, comparison, price, before/after", "Creative learning across campaigns"],
          ["Objective", "Reach, consideration, conversion, retention", "Choosing content for each stage"],
          ["Market and language", "India/Hindi, UAE/Arabic, UK/English", "Avoiding content in the wrong market"],
          ["Rights status", "Organic only, paid until date, expired", "Preventing unlicensed reuse"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep the tag list short and controlled: a fixed set of values per group, chosen from a drop-down, not typed freely. Free text creates 'Reel', 'reels' and 'IG reel' as three different things.",
      },
      { type: "heading", text: "The rights register", id: "rights-register" },
      {
        type: "table",
        headers: ["Field", "Example"],
        rows: [
          ["Channels allowed", "Organic brand social, paid social, website, product pages, email"],
          ["Paid permission", "Partnership ads from the creator's handle until 30 June; brand-handle ads not allowed"],
          ["Territory", "India and UAE"],
          ["Start and expiry", "1 March to 31 August"],
          ["Edits allowed", "Cuts and captions yes; no changes to what the creator says"],
          ["Exclusivity linked", "Category exclusivity until 31 May"],
          ["Agreement reference", "Link to the signed contract"],
        ],
      },
      {
        type: "paragraph",
        text: "Review the register monthly for anything expiring in the next 30 days: renew it, or pull the asset from ads and pages before the date. Influencer usage rights explains what to negotiate, and influencer content ownership the difference between owning and licensing.",
        links: [
          { text: "Influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "influencer content ownership", href: "/blog/influencer-content-ownership" },
        ],
      },
      { type: "heading", text: "Performance notes", id: "performance-notes" },
      {
        type: "list",
        items: [
          "Organic results captured on the agreed day: views, reach, saves, shares, clicks.",
          "Paid results if it ran as an ad: spend, cost per result, and when it started to fatigue.",
          "A one-line note on why it worked or didn't, in plain language.",
          "Where it has been reused, so the same asset isn't overused in one channel.",
        ],
      },
      {
        type: "paragraph",
        text: "Analysing winners is covered in influencer content performance, and spotting tired creative in influencer ad fatigue.",
        links: [
          { text: "influencer content performance", href: "/blog/influencer-content-performance" },
          { text: "influencer ad fatigue", href: "/blog/influencer-ad-fatigue" },
        ],
      },
      { type: "heading", text: "Workflow and access", id: "workflow" },
      {
        type: "list",
        items: [
          "Add: the campaign manager uploads each asset within a week of delivery, with tags and the rights record; incomplete records aren't published to the team.",
          "Request: teams search the library first and request new content only for gaps.",
          "Use: anyone using an asset logs where; the rights status is checked at the point of use.",
          "Retire: expired assets are archived and marked, not deleted, so you keep the history.",
          "Access: viewing for the wider team, editing for a few owners; contracts visible only to those who need them.",
        ],
      },
      {
        type: "paragraph",
        text: "A shared drive with a spreadsheet works for a few hundred assets. Dedicated digital asset management software helps once you have several teams, markets or thousands of files; choose it for search, tagging and rights-expiry alerts, not storage alone. Reuse ideas are in how to repurpose influencer content, and production at volume in the UGC production workflow.",
        links: [
          { text: "how to repurpose influencer content", href: "/blog/repurpose-influencer-content" },
          { text: "the UGC production workflow", href: "/blog/ugc-production-workflow" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Storing files without the rights record.",
          "Free-text tags that nobody uses consistently.",
          "Keeping only final posts and losing the raw footage.",
          "No expiry review, so licensed content keeps running after the term ends.",
          "A library only one person knows how to use.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A content library turns creator content into a reusable asset. Store files with tags, a rights record and performance notes, keep the tag list controlled, review expiring rights monthly, and make searching the library the first step before commissioning anything new.",
      },
    ],
    faqs: [
      {
        question: "What should an influencer content library include?",
        answer:
          "Final posts, raw footage where licensed, edited cuts, captions and claims, the rights record (channels, territory, dates, edits allowed), the creator's details and performance notes.",
      },
      {
        question: "How do I stop creator content being used after the licence expires?",
        answer:
          "Record expiry dates in a rights register, review it monthly for anything expiring in the next 30 days, and check rights status every time an asset is used.",
      },
      {
        question: "Do I need special software for a content library?",
        answer:
          "Not at first. A shared drive with a well-structured spreadsheet works for a few hundred assets. Asset management software becomes useful with several teams, markets or thousands of files.",
      },
    ],
  },
  // Topic 158
  {
    slug: "influencer-retargeting",
    category: "Campaign Strategy",
    title: "How to Connect Influencer Campaigns With Retargeting and Follow-Up Marketing",
    seoTitle: "Influencer Retargeting: Follow Up Without Losing Trust",
    excerpt:
      "Most people who see a creator's post don't buy that day. How to build retargeting audiences from creator traffic and engagement lawfully, what to show them, how to follow up by email and WhatsApp with consent, and how to measure it without double counting.",
    metaDescription:
      "Connect influencer campaigns with retargeting: audiences from creator traffic and engagement, consent rules, follow-up messages, email and WhatsApp opt-in, measurement.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "7 min read",
    tags: ["influencer retargeting", "retarget influencer traffic", "creator content retargeting", "influencer follow-up marketing", "influencer email WhatsApp follow-up"],
    related: ["influencer-performance-marketing", "influencer-utm-tracking", "influencer-marketing-ecommerce-brands-india"],
    hero: {
      src: "/blog/brand-guides/influencer-retargeting.svg",
      alt: "From creator post to follow-up: consented audiences, relevant ads and opted-in email or WhatsApp messages",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator's post is often the first time someone hears about a brand. They visit, look around and leave. Retargeting and follow-up give them a second, relevant reason to come back. Done badly, it follows people around with the same discount for weeks. Done well, it continues the conversation the creator started, with consent, in the right channel and for a limited time.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Build retargeting audiences from people who visited your site through creator links (with analytics and advertising consent where it's required), people who engaged with content on your own social accounts, and customers who've opted in. Show them creator content that answers the next question, such as a review, demo or comparison, rather than repeating the same ad. Follow up by email or WhatsApp only with opt-in. Cap frequency and duration, exclude recent buyers, and measure with a holdout so you don't credit retargeting for sales the creator already caused.",
      },
      { type: "heading", text: "Paid amplification vs retargeting", id: "amplification-vs-retargeting" },
      {
        type: "table",
        headers: ["", "Paid amplification", "Retargeting and follow-up"],
        rows: [
          ["Audience", "New people who haven't seen the creator", "People who already engaged, visited or opted in"],
          ["Goal", "More reach for proven creator content", "Bring interested people back to complete an action"],
          ["Content", "The best-performing creator posts", "The next piece of proof: reviews, demos, FAQs, offers"],
          ["Main risk", "Paying for reach that doesn't convert", "Annoying people; consent and privacy breaches"],
        ],
      },
      {
        type: "paragraph",
        text: "Running creator content as ads to new audiences is covered in influencer performance marketing.",
        links: [{ text: "influencer performance marketing", href: "/blog/influencer-performance-marketing" }],
      },
      { type: "heading", text: "Audiences you can build", id: "audiences" },
      {
        type: "table",
        headers: ["Audience", "How it's built", "Check before using"],
        rows: [
          ["Creator-link visitors", "Site visitors from tagged creator links, via your analytics and ad pixels", "Cookie and advertising consent where required; tags that identify the creator source"],
          ["Product viewers and cart abandoners", "Visitors who viewed a product or added to cart after arriving from creators", "Same consent; exclude people who bought"],
          ["Social engagers", "People who engaged with content on your own Instagram or Facebook accounts, using the ad platform's engagement audiences", "Which sources Ads Manager offers for your content; whether engagement with partnership ads is available as a source in your account"],
          ["Opted-in contacts", "Email or WhatsApp subscribers who joined through a creator offer", "Proof of opt-in; the creator source recorded on the record"],
          ["Customer lists", "Uploaded lists of existing customers, for exclusion or cross-sell", "A lawful basis to use the data; opt-outs removed"],
        ],
      },
      {
        type: "paragraph",
        text: "Meta's Custom Audience terms require advertisers to have the rights, permissions and lawful basis for audience and customer-list data, and to remove people who have opted out. Tagging creator links properly is covered in influencer UTM tracking.",
        links: [
          { text: "Meta's Custom Audience terms", href: EXT.metaCustomAudienceTerms },
          { text: "influencer UTM tracking", href: "/blog/influencer-utm-tracking" },
        ],
      },
      { type: "heading", text: "Consent and privacy", id: "consent-and-privacy" },
      {
        type: "list",
        items: [
          "UK: advertising and retargeting cookies need consent; the ICO's April 2026 guidance on storage and access technologies keeps advertising outside the new consent exceptions.",
          "India: the Digital Personal Data Protection Act and Rules require clear notice and consent for personal data, with obligations phasing in; targeted advertising directed at children isn't allowed. Review consent flows with counsel.",
          "UAE, Saudi Arabia, Australia and Singapore have their own data protection laws; take local advice before building audiences from personal data.",
          "Don't build audiences from data creators share about their followers, and don't ask creators to collect contact details on your behalf without a proper notice and consent.",
        ],
      },
      {
        type: "paragraph",
        text: "These notes are general information, not legal advice. See the ICO's storage and access guidance for the UK position.",
        links: [{ text: "the ICO's storage and access guidance", href: EXT.icoStorageAccess }],
      },
      { type: "heading", text: "What to show, and for how long", id: "messaging" },
      {
        type: "table",
        headers: ["Where they stopped", "Next message", "Window (starting point to test)"],
        rows: [
          ["Watched the creator video, didn't visit", "A second creator's demo or review of the same product", "Up to two weeks"],
          ["Visited, didn't view a product", "Creator content showing the bestseller in use", "One to two weeks"],
          ["Viewed a product", "A review or comparison answering the main objection", "One to two weeks"],
          ["Added to cart", "Delivery, returns and the creator's offer, if still valid", "A few days"],
          ["Bought", "Exclude from acquisition ads; show how-to content for retention", "Ongoing, by opt-in"],
        ],
      },
      {
        type: "list",
        items: [
          "Cap frequency, and stop sooner if the audience is small and people see the same ad repeatedly.",
          "Use creator content only within the usage rights you agreed, including paid use and duration.",
          "Keep the creator's offer consistent: don't retarget with a deeper discount than the creator's audience got.",
          "Keep disclosure visible when creator content runs as an ad.",
        ],
      },
      {
        type: "paragraph",
        text: "Usage terms for paid reuse are covered in influencer usage rights, and disclosure in influencer disclosure rules by platform and country.",
        links: [
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "influencer disclosure rules by platform and country", href: "/blog/influencer-disclosure-rules-by-country" },
        ],
      },
      { type: "heading", text: "Email and WhatsApp follow-up", id: "email-whatsapp" },
      {
        type: "paragraph",
        text: "Owned channels work best for follow-up, because people chose to hear from you. Offer something worth signing up for on the creator's landing page (a guide, a sample, early access), record the creator source on the subscriber, and send a short sequence that continues the creator's story: the product in use, an answer to the common question, then the offer. On WhatsApp, the WhatsApp Business Messaging Policy allows messages only to people who gave you their number and opted in to receive messages from you.",
        links: [{ text: "WhatsApp Business Messaging Policy", href: EXT.whatsappBusinessPolicy }],
      },
      { type: "heading", text: "Measuring it honestly", id: "measurement" },
      {
        type: "list",
        items: [
          "Report retargeting as its own line, not added to the creator's results; the same buyer can appear in both.",
          "Hold out part of the eligible audience from retargeting to see how many would have bought anyway.",
          "Compare cost per incremental order with your other retargeting, not with total attributed sales.",
          "Track opt-in rate from creator traffic as a result of the campaign in its own right.",
        ],
      },
      {
        type: "paragraph",
        text: "Holdouts and incrementality are explained in influencer marketing incrementality, and e-commerce journeys in influencer marketing for e-commerce.",
        links: [
          { text: "influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" },
          { text: "influencer marketing for e-commerce", href: "/blog/influencer-marketing-ecommerce-brands-india" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Retargeting without consent where it's required.",
          "Showing the same ad for weeks.",
          "Not excluding people who already bought.",
          "Running creator content beyond its licensed use.",
          "Adding retargeting sales to creator sales and counting buyers twice.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Retargeting turns creator interest into a second chance to convert, if it's consented, relevant and short. Build audiences from tagged creator traffic, your own engagers and opted-in contacts; show the next piece of proof rather than the same ad; follow up by email or WhatsApp only with opt-in; and measure with a holdout.",
      },
    ],
    faqs: [
      {
        question: "Can I retarget people who saw an influencer's post?",
        answer:
          "You can retarget people who visited your site through creator links, with consent where required, and people who engaged with content on your own social accounts. Check in Ads Manager which engagement sources are available for creator content in your account, and use creator content only within its usage rights.",
      },
      {
        question: "Do I need consent to retarget influencer traffic?",
        answer:
          "Often yes. In the UK, advertising cookies need consent. India's data protection law requires notice and consent for personal data. Other markets have their own rules, so check your consent setup before building audiences.",
      },
      {
        question: "How long should I retarget after an influencer campaign?",
        answer:
          "Usually days to a couple of weeks depending on where people stopped, with frequency caps. Longer windows tend to annoy people and waste budget; test and stop when results drop.",
      },
    ],
  },
];
