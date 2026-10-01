import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/** Understand Brand Deals: pricing, contracts, usage rights, exclusivity, negotiation, deliverables. */
export const understandBrandDealPosts: BlogPost[] = [
  {
    slug: "how-much-should-creators-charge-india",
    category: "Creator Resources",
    title: "How Much Should Creators Charge for Brand Collaborations in India?",
    seoTitle: "How Much Should Creators Charge for Brand Deals in India?",
    excerpt:
      "Why two creators with the same follower count can charge very different fees, the factors that actually move a price, and a step-by-step way to work out your own number.",
    metaDescription:
      "How much should creators charge in India? The pricing factors that matter (views, engagement, niche, platform, production, rights, exclusivity) and a worked framework, with clearly labelled examples.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "12 min read",
    tags: ["how much should influencers charge", "creator pricing India", "influencer fees", "brand deal pricing", "how to price Reels and Stories", "CPM"],
    related: ["influencer-rate-card-india", "how-to-negotiate-brand-deals-as-a-creator", "creator-usage-rights"],
    body: [
      {
        type: "paragraph",
        text: "\"What should I charge?\" is the question creators ask us most, and the honest answer is that nobody can give you a universal number. What we can give you is the way brands and agencies actually think about price, so you can build a number you can defend.",
      },
      {
        type: "paragraph",
        text: "This article is about the pricing logic. If you want to turn your prices into a document to send brands, see the influencer rate card guide.",
        links: [{ text: "influencer rate card guide", href: "/blog/influencer-rate-card-india" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creators in India should price brand collaborations from their average views (not followers), then adjust for engagement quality, niche, audience location and language, platform and format, production effort, the number of deliverables, revisions, timelines, and especially usage rights, paid ads and exclusivity. There is no standard market rate. A useful starting check is the cost per thousand views (CPM) your price implies, compared with what the brand would otherwise pay to reach the same audience.",
      },
      { type: "heading", text: "Why follower count is a weak pricing basis", id: "why-not-followers" },
      {
        type: "paragraph",
        text: "Followers measure how many people chose to follow you at some point. Brands pay for how many of the right people will see and act on this piece of content. Those can be very different numbers. Reels and Shorts are distributed heavily to non-followers, and an account that has grown quickly on one viral video may have far lower typical views than its follower count suggests.",
      },
      { type: "heading", text: "The factors that move your price", id: "pricing-factors" },
      {
        type: "table",
        headers: ["Factor", "Pushes price up when…", "Pushes price down when…"],
        rows: [
          ["Average views", "Consistently high views per post over a recent period", "Views are volatile or mostly from one viral post"],
          ["Engagement quality", "High saves, shares, meaningful comments, link clicks", "Engagement is mostly emojis, giveaways or pods"],
          ["Niche", "Audience is hard to reach elsewhere (finance, B2B, tech, parenting, some health)", "Broad entertainment with many substitutes"],
          ["Audience geography and language", "Concentrated in the brand's target cities, states or language", "Scattered or mostly outside the brand's market"],
          ["Platform", "The platform suits the brand's goal (e.g. YouTube for considered purchases)", "The platform is a poor fit for the product"],
          ["Production", "Locations, props, extra people, heavy editing, travel", "Simple, phone-shot, one-take formats"],
          ["Deliverables", "More pieces, platforms and touchpoints", "One simple post"],
          ["Usage rights", "Brand wants paid ads, long duration or many media", "Organic reposting only, short duration"],
          ["Exclusivity", "Broad category, long duration", "None or very narrow"],
          ["Timelines", "Rush turnaround, fixed posting times", "Flexible dates"],
          ["Revisions", "Multiple rounds, script approvals", "One round included"],
          ["Raw footage", "Brand wants unedited files to re-cut", "Final edit only"],
        ],
      },
      { type: "heading", text: "Why two creators with identical follower counts charge differently", id: "same-followers-different-prices" },
      {
        type: "paragraph",
        text: "Here's an illustrative comparison. The numbers are hypothetical, chosen to show the logic, not market rates.",
      },
      {
        type: "table",
        headers: ["Hypothetical example", "Creator A", "Creator B"],
        rows: [
          ["Followers", "80,000", "80,000"],
          ["Average Reel views (last 90 days)", "15,000", "60,000"],
          ["Niche", "General memes", "Personal finance for first-jobbers"],
          ["Audience", "Spread across India, mixed ages", "70% aged 22–30 in six metros"],
          ["Saves per Reel", "Low", "High (content is referenced later)"],
          ["Production", "Quick edits", "Researched scripts, graphics, compliance care"],
          ["Likely price for the same Reel", "Lower", "Considerably higher"],
        ],
      },
      {
        type: "paragraph",
        text: "A fintech brand would reasonably pay Creator B several times what it would pay Creator A for the same deliverable, because B's audience is exactly who it wants, B's content gets watched and saved, and the production is heavier. Same followers, very different value.",
      },
      { type: "heading", text: "A step-by-step way to find your number", id: "framework" },
      {
        type: "list",
        items: [
          "Find your average views per format over the last 60 to 90 days, excluding obvious one-off outliers (or note them separately).",
          "Pick a working CPM (price per 1,000 views) as a starting point. There's no official figure; creators often start from what they've been paid before, what peers in their niche share privately, and what brands accept.",
          "Base fee = (average views ÷ 1,000) × your working CPM.",
          "Adjust for niche and audience fit: up for hard-to-reach, high-intent audiences; down if the fit is loose.",
          "Add production costs you actually incur: props, location, extra talent, travel.",
          "Add rights and restrictions as separate lines: paid usage, whitelisting, exclusivity, raw footage.",
          "Sense-check: would you be happy doing this work for this fee? Would the brand get fair value?",
        ],
      },
      {
        type: "template",
        label: "Worked example (hypothetical numbers only)",
        text: "Average Reel views, last 90 days: 40,000\nWorking CPM chosen: ₹[your figure]\nBase fee = 40 × ₹[CPM]\n\n+ Niche adjustment: skincare for a specific skin concern (+ a margin you choose)\n+ Production: props and a second location (actual cost)\n= Reel fee (organic, 1 revision, 30 days organic reposting)\n\nAdd-ons quoted separately:\n• Paid usage, Meta ads, 90 days: ₹____\n• Category exclusivity, 60 days: ₹____\n• Raw footage: ₹____",
      },
      {
        type: "paragraph",
        text: "We've deliberately left the CPM blank. Anyone who tells you the correct CPM for all Indian creators is guessing: it varies by niche, format, language and demand, and changes over time.",
      },
      { type: "heading", text: "Platform differences", id: "platforms" },
      {
        type: "list",
        items: [
          "Instagram Reels: priced from Reel views. Stories are priced separately and usually lower, but can drive clicks through link stickers.",
          "YouTube long-form: integrations are usually priced from average views in the first 30 days; dedicated videos cost more because the whole video is about the brand. Videos keep collecting views for months, which adds value.",
          "YouTube Shorts: priced from Shorts views, which behave differently from long-form; don't use your long-form averages.",
          "LinkedIn: smaller view counts but valuable professional audiences; B2B brands often pay for expertise and credibility rather than reach.",
          "UGC-only: priced for production and usage, not your audience.",
        ],
      },
      {
        type: "paragraph",
        text: "Brand-side platform guides show how planners weigh these differences: Instagram influencer rates, YouTube influencer rates and LinkedIn influencer rates.",
        links: [
          { text: "Instagram influencer rates", href: "/blog/instagram-influencer-rates-india" },
          { text: "YouTube influencer rates", href: "/blog/youtube-influencer-rates-india" },
          { text: "LinkedIn influencer rates", href: "/blog/linkedin-influencer-rates-india" },
        ],
      },
      { type: "heading", text: "How should creators price Reels, Stories, videos and usage rights?", id: "price-by-format" },
      {
        type: "paragraph",
        text: "Price each format from what drives its value and your effort, then list rights and extras separately so the brand can see what it's paying for.",
      },
      {
        type: "table",
        headers: ["Format", "Pricing basis", "Priced separately"],
        rows: [
          ["Instagram Reel", "Median views of recent Reels; production effort", "Paid usage, whitelisting, raw footage, extra revisions"],
          ["Instagram Story set", "Average Story views; number of frames; link", "Highlight placement; extra frames"],
          ["Carousel", "Reach and saves; design effort", "Additional slides; reuse in ads"],
          ["YouTube integration", "Average 30-day views of similar videos; length and placement", "Pinned comment, description links, product tags, back-catalogue segments"],
          ["Dedicated YouTube video", "Production effort; evergreen view expectations", "Usage outside YouTube"],
          ["YouTube Short", "Median Shorts views", "Multiple Shorts packages"],
          ["UGC video", "Production effort and turnaround", "Usage duration, platforms, paid ads"],
        ],
      },
      {
        type: "paragraph",
        text: "Usage rights are priced by what they add: how long the brand can use the content, on which platforms, whether it can run as paid ads, and whether it can be edited. Organic reposting for a short period is often included; paid usage, longer durations and editing rights usually carry a separate fee. Creator usage rights explains how to scope them, and the creator pricing calculator turns your numbers into a quote.",
        links: [
          { text: "Creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "creator pricing calculator", href: "/blog/creator-pricing-calculator" },
        ],
      },
      { type: "heading", text: "Pricing rights, ads, exclusivity and extras", id: "rights-and-extras" },
      {
        type: "paragraph",
        text: "These are the most common reasons creators undercharge. Paid usage means your content works as an ad for the brand, often for far longer than your organic post is seen. Exclusivity means you turn away other income. Raw footage lets a brand create many assets from one shoot. Each deserves its own line and price. Read creator usage rights and creator exclusivity before quoting either.",
        links: [
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "creator exclusivity", href: "/blog/creator-exclusivity" },
        ],
      },
      { type: "heading", text: "Gifting, affiliate and hybrid deals", id: "gifting-affiliate-hybrid" },
      {
        type: "list",
        items: [
          "Gifting only: reasonable for light, optional mentions of products you value. Not for scripted, scheduled or ad-licensed work.",
          "Affiliate only: you earn commission on sales. It shifts risk to you; ask for conversion data and a trial period.",
          "Hybrid: a lower fixed fee plus commission. Useful when a brand is testing and you're confident your audience buys.",
        ],
      },
      { type: "heading", text: "Signs your prices are wrong", id: "signs" },
      {
        type: "list",
        items: [
          "Too low: brands accept instantly and never negotiate; you're booked out; you resent the work.",
          "Too high (or poorly explained): consistent interest followed by silence once rates are shared. Check fit and how you present value before cutting prices.",
          "Inconsistent: similar work priced very differently for different brands without a reason you can explain.",
        ],
      },
      {
        type: "paragraph",
        text: "It's also worth knowing how brands budget. Our brand-side guides on how much brands should pay influencers, influencer marketing costs in India and how brands calculate an influencer marketing budget show the other half of the conversation.",
        links: [
          { text: "how much brands should pay influencers", href: "/blog/how-much-to-pay-influencers" },
          { text: "influencer marketing costs in India", href: "/blog/influencer-marketing-cost-india" },
          { text: "how brands calculate an influencer marketing budget", href: "/blog/influencer-marketing-budget" },
        ],
      },
      {
        type: "paragraph",
        text: "Brand collaborations are one offer among several; creator pricing strategy covers pricing UGC, services, workshops, products and memberships side by side.",
        links: [{ text: "creator pricing strategy", href: "/blog/creator-pricing-strategy" }],
      },
    ],
    faqs: [
      {
        question: "How much should a creator charge per post in India?",
        answer:
          "There's no standard rate. Start from your average views per format, apply a price per thousand views you can justify, then adjust for niche, audience fit, production, deliverables, and separately priced usage rights and exclusivity.",
      },
      {
        question: "Why do creators with the same followers charge different amounts?",
        answer:
          "Because brands pay for attention from the right audience, not follower counts. Average views, engagement quality, niche, audience location and language, and production effort can differ hugely between two accounts of the same size.",
      },
      {
        question: "Should I charge extra for usage rights?",
        answer:
          "Yes, for anything beyond limited organic reposting. Paid ads, whitelisting and long durations add value for the brand and should be quoted as separate line items with a stated duration and scope.",
      },
      {
        question: "Is it okay to work only for commission?",
        answer:
          "It can be, but it shifts risk to you. Ask for conversion data and a trial period, or propose a hybrid of a smaller fixed fee plus commission.",
      },
    ],
  },
  {
    slug: "influencer-contract-guide-for-creators",
    category: "Creator Resources",
    title: "Influencer Contract Guide for Creators: Clauses You Should Understand Before Signing",
    seoTitle: "Influencer Contract Guide for Creators: Key Clauses",
    excerpt:
      "What each clause in a brand collaboration agreement means for you as the creator, what to look for, and which questions to ask before you sign.",
    metaDescription:
      "An educational influencer contract guide for creators in India: deliverables, payment, revisions, approvals, cancellation, usage rights, exclusivity, ownership, disclosure, termination, taxes and disputes.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "13 min read",
    tags: ["influencer contract", "creator contract", "brand collaboration agreement", "usage rights clause", "exclusivity clause", "creator contract checklist", "brand deal contract checklist"],
    related: ["creator-usage-rights", "creator-exclusivity", "creator-brand-deal-checklist"],
    body: [
      {
        type: "paragraph",
        text: "Many creators sign brand agreements without reading past the fee. Most of the time nothing goes wrong. When something does, such as late payment, an ad running a year after you expected it to stop, or a competitor deal you can't take, the answer is usually in a clause you skimmed.",
      },
      {
        type: "paragraph",
        text: "Important: this guide is general, educational information, not legal advice. Contract law and your specific situation matter. For agreements involving significant money, long-term exclusivity or broad rights, have a lawyer review the contract before you sign.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before signing an influencer contract, make sure you understand: exactly what you're delivering and when; how much you're paid, when and how; how many revisions and approvals are involved; what happens if either side cancels; how the brand may use your content (organic, paid, duration, territory, editing); any exclusivity; who owns the content; disclosure obligations; confidentiality; how disputes are handled; and how taxes such as GST and TDS are treated. If any of these are missing or vague, ask for them in writing.",
      },
      { type: "heading", text: "Do you need a written contract?", id: "written-contract" },
      {
        type: "paragraph",
        text: "For anything beyond a small, simple deal, yes. A written agreement protects you as much as the brand. If a brand doesn't offer one, a detailed email summarising the terms that the brand confirms in reply is far better than nothing. The follow-up template in our email templates article is built for exactly this.",
        links: [{ text: "email templates", href: "/blog/brand-collaboration-email-templates" }],
      },
      { type: "heading", text: "The clauses, one by one", id: "clauses" },
      { type: "subheading", text: "1. Parties" },
      {
        type: "paragraph",
        text: "Who is the contract between? If an agency signs, check whether it's acting for the brand and who is responsible for paying you. The name on the contract is who you invoice and who you'd chase.",
      },
      { type: "subheading", text: "2. Deliverables" },
      {
        type: "paragraph",
        text: "Exact formats, number of pieces, platforms, length, key messages, tags, links and posting dates. \"Social media content\" is not a deliverable. Creator deliverables explains how to define each one.",
        links: [{ text: "Creator deliverables", href: "/blog/creator-deliverables" }],
      },
      { type: "subheading", text: "3. Compensation" },
      {
        type: "paragraph",
        text: "The fee, the currency, whether it's inclusive or exclusive of GST, and whether products, travel or expenses are covered separately. If part of the fee is performance-based, how is performance measured and who provides the data?",
      },
      { type: "subheading", text: "4. Payment schedule" },
      {
        type: "paragraph",
        text: "When you get paid: an advance, on approval, on posting, or a set number of days after invoice. Look for the invoice requirements (PO numbers, vendor forms) and what happens if payment is late. \"Payment within 90 days of campaign completion\" is very different from \"within 15 days of posting.\"",
      },
      { type: "subheading", text: "5. Revisions" },
      {
        type: "paragraph",
        text: "How many rounds of changes are included, what counts as a revision versus a new concept, and what additional rounds cost. Unlimited revisions is a red flag.",
      },
      { type: "subheading", text: "6. Approval" },
      {
        type: "paragraph",
        text: "Whether the brand approves scripts, drafts or both, how long they have to respond, and what happens if they don't respond in time. Approval delays shouldn't make you miss a deadline you're held responsible for.",
      },
      { type: "subheading", text: "7. Timelines" },
      {
        type: "paragraph",
        text: "Draft dates, posting dates or windows, and how long content must stay live. Check dependencies: timelines should start from when you receive the product and final brief, not from signing.",
      },
      { type: "subheading", text: "8. Cancellation (kill fee)" },
      {
        type: "paragraph",
        text: "If the brand cancels after you've started work, are you paid for work done? A kill fee (a percentage of the fee payable on cancellation) is common in professional agreements. Also check what happens if you have to cancel due to illness or emergency.",
      },
      { type: "subheading", text: "9. Usage rights" },
      {
        type: "paragraph",
        text: "How the brand may use your content: organic reposting, paid ads, website, email, offline; for how long; in which territories; and whether it can edit or cut your content. This is often the most valuable clause in the contract. See creator usage rights.",
        links: [{ text: "creator usage rights", href: "/blog/creator-usage-rights" }],
      },
      { type: "subheading", text: "10. Exclusivity" },
      {
        type: "paragraph",
        text: "Which competitors or categories you can't work with, for how long, and on which platforms. Broad or long exclusivity limits your income and should be paid for. See creator exclusivity.",
        links: [{ text: "creator exclusivity", href: "/blog/creator-exclusivity" }],
      },
      { type: "subheading", text: "11. Content ownership" },
      {
        type: "paragraph",
        text: "Ownership and licence are different. Many creator agreements give the brand a licence to use content while you keep ownership. Some ask for full assignment of copyright. Assignment is a big ask and should be priced accordingly. Check what happens to raw footage and to content the brand rejected.",
      },
      { type: "subheading", text: "12. Disclosure" },
      {
        type: "paragraph",
        text: "Contracts should require clear disclosure of the partnership. In India, ASCI's influencer guidelines require upfront, prominent labels such as \"Ad\", \"Sponsored\", \"Collaboration\" or \"Partnership\" on content with a material connection, alongside platform tools like Instagram's paid partnership label and YouTube's paid promotion disclosure. A brand asking you not to disclose is asking you to take a regulatory and reputational risk.",
        links: [{ text: "ASCI's influencer guidelines", href: SOURCES.asciSocial }],
      },
      { type: "subheading", text: "13. Claims and content standards" },
      {
        type: "paragraph",
        text: "What you can and can't say about the product. ASCI expects influencers to do reasonable due diligence on claims they make, and has added requirements for creators discussing specialised areas such as health, nutrition and finance. Ask the brand for substantiation of any technical or health claim it wants you to repeat.",
      },
      { type: "subheading", text: "14. Confidentiality" },
      {
        type: "paragraph",
        text: "Usually covers campaign details before launch and your fee. Reasonable, but check that it doesn't stop you showing the published work in your portfolio.",
      },
      { type: "subheading", text: "15. Termination" },
      {
        type: "paragraph",
        text: "When either party can end the agreement early. \"Morality\" clauses let brands terminate if you're involved in controversy; check they're specific and mutual where possible (you may not want to be associated with a brand facing a scandal either).",
      },
      { type: "subheading", text: "16. Liability and indemnity" },
      {
        type: "paragraph",
        text: "An indemnity makes you responsible for certain losses. Be careful with clauses making you liable for the brand's own product claims or for results you can't control. This is a clause worth legal review.",
      },
      { type: "subheading", text: "17. Dispute terms" },
      {
        type: "paragraph",
        text: "Which law applies, which city's courts have jurisdiction, and whether disputes go to arbitration first. A clause requiring you to resolve disputes in a distant city or country makes enforcing your rights expensive.",
      },
      { type: "subheading", text: "18. Taxes" },
      {
        type: "paragraph",
        text: "Whether the fee is inclusive or exclusive of GST, and whether the brand will deduct TDS (tax deducted at source) from your payment. From 1 April 2026, TDS is governed by the Income-tax Act, 2025, which replaced the 1961 Act and renumbered familiar sections. Check the current position with a tax professional, and see how to invoice brands as a creator.",
        links: [{ text: "how to invoice brands as a creator", href: "/blog/how-to-invoice-brands-as-a-creator-india" }],
      },
      { type: "heading", text: "Red flags in creator contracts", id: "red-flags" },
      {
        type: "list",
        items: [
          "Perpetual, worldwide, all-media usage rights for a standard post fee.",
          "Full copyright assignment without a matching fee.",
          "Exclusivity covering a broad category for months, unpaid.",
          "Unlimited revisions or approval at the brand's \"sole discretion\" with no time limit.",
          "Payment only after the brand's campaign ends, with no fixed date.",
          "Guaranteed views, sales or follower growth.",
          "Instructions to avoid disclosure labels.",
          "An agreement that asks you to pay anything to the brand or agency.",
        ],
      },
      { type: "heading", text: "Contract checklist: review before you sign", id: "checklist" },
      {
        type: "paragraph",
        text: "Work through this checklist with the contract or confirmation email open. Anything you can't tick is a question to raise before signing. Your ticks are saved only in your browser.",
      },
      { type: "tool", tool: "creator-contract-checklist" },
      {
        type: "paragraph",
        text: "Brand deals are one of several agreements a creator business signs; management, freelancer, licensing and collaboration agreements are mapped in creator contracts.",
        links: [
          { text: "creator contracts", href: "/blog/creator-contracts" },
        ],
      },
      { type: "heading", text: "Questions to ask before you sign", id: "questions" },
      {
        type: "list",
        items: [
          "Who pays me, and when exactly?",
          "Can you confirm usage is organic only / paid for [X] days?",
          "Can we limit exclusivity to [specific competitors] for [period]?",
          "What happens if the campaign is cancelled after I've shot the content?",
          "Can I keep the published content in my portfolio?",
          "Will TDS be deducted, and will I receive the certificate?",
        ],
      },
      {
        type: "paragraph",
        text: "Brands read contracts from the other side too. Our brand-side guides on influencer marketing contracts and influencer contracts in India show which clauses brands are advised to include, which helps you anticipate what you'll see.",
        links: [
          { text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract" },
          { text: "influencer contracts in India", href: "/blog/influencer-marketing-contract" },
        ],
      },
      {
        type: "paragraph",
        text: "Before signing anything, run through the full creator brand deal checklist.",
        links: [{ text: "creator brand deal checklist", href: "/blog/creator-brand-deal-checklist" }],
      },
      {
        type: "paragraph",
        text: "Two related guides: creator contracts vs emails explains when a confirmation email is enough and when to insist on a signed agreement, and creator cancellation policy covers kill fees and what happens when a brand cancels.",
        links: [
          { text: "creator contracts vs emails", href: "/blog/creator-contracts-vs-emails" },
          { text: "creator cancellation policy", href: "/blog/creator-cancellation-policy" },
        ],
      },
    ],
    faqs: [
      {
        question: "What should an influencer contract include?",
        answer:
          "Parties, deliverables, fee, payment schedule, revisions and approvals, timelines, cancellation terms, usage rights, exclusivity, content ownership, disclosure obligations, confidentiality, termination, liability, dispute terms and tax treatment.",
      },
      {
        question: "Do I need a lawyer to review a brand contract?",
        answer:
          "For small, simple deals many creators rely on a careful read and a checklist. For significant fees, long exclusivity, copyright assignment or broad paid usage, professional legal review is worth it. This guide is educational, not legal advice.",
      },
      {
        question: "Can a brand use my content forever?",
        answer:
          "Only if you agree to it. Usage rights are negotiable: define the type of use, duration, territory and media. Perpetual or paid usage should be priced separately.",
      },
      {
        question: "What is a kill fee?",
        answer: "A payment you receive if the brand cancels the collaboration after you've started work, usually a percentage of the agreed fee.",
      },
    ],
  },
  {
    slug: "creator-usage-rights",
    category: "Creator Resources",
    title: "Creator Usage Rights: What Brands Can and Can't Do With Your Content",
    seoTitle: "Creator Usage Rights: What Brands Can Do With Your Content",
    excerpt:
      "Organic reposting, paid ads, whitelisting, website use, editing and perpetual rights explained from the creator's side, with a simple way to define and price each one.",
    metaDescription:
      "Creator usage rights explained: organic vs paid usage, whitelisting, website and social reposting, duration, territory, media, editing, derivative content and perpetual rights, and why to price them separately.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "11 min read",
    tags: ["creator usage rights", "content licensing", "whitelisting", "paid usage", "perpetual rights", "organic vs paid usage rights", "usage rights explained"],
    related: ["influencer-contract-guide-for-creators", "creator-exclusivity", "how-much-should-creators-charge-india"],
    body: [
      {
        type: "paragraph",
        text: "When a brand pays you for a Reel, what exactly has it bought? One post on your profile? The right to repost it? The right to run it as an ad for a year? Unless the agreement says so, those are very different things, and the difference can be worth more than the original fee.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Usage rights define how a brand can use content you create: where (organic social, paid ads, website, offline), for how long, in which territories, on which media, and whether it can edit or remix it. Organic reposting with credit is often included in a creator fee. Paid advertising use, whitelisting, long durations and perpetual rights give the brand substantially more value and should be defined and priced separately rather than bundled in by default.",
      },
      { type: "heading", text: "Ownership vs licence", id: "ownership-vs-licence" },
      {
        type: "paragraph",
        text: "In most creator deals, you keep ownership (copyright) of what you make and grant the brand a licence to use it in defined ways. A contract that assigns copyright to the brand transfers ownership entirely. That's a much bigger deal, and worth legal advice before agreeing.",
      },
      { type: "heading", text: "Types of usage", id: "types" },
      {
        type: "table",
        headers: ["Usage type", "What it means", "Why it matters"],
        rows: [
          ["Organic (creator channel)", "Content posted on your account only", "The base of most deals"],
          ["Organic social reposting", "Brand reposts or shares your content on its own social accounts, credited", "Commonly included for a limited period"],
          ["Paid usage", "Brand runs your content as ads from its own account", "Your content works as advertising, often reaching far more people than your post"],
          ["Whitelisting / creator licensing", "Brand runs ads through your handle (e.g. Instagram partnership ads), so they appear as coming from you", "Uses your identity and credibility, not just your footage"],
          ["Website and e-commerce", "Content on product pages, the brand's site, marketplaces", "Long-lived; can stay up for years"],
          ["Email and CRM", "Content in newsletters and marketing emails", "Often forgotten in contracts"],
          ["Offline", "In-store screens, print, outdoor, TV", "Very different scale; always priced separately"],
        ],
      },
      { type: "heading", text: "Organic, paid, whitelisting and licensing at a glance", id: "at-a-glance" },
      {
        type: "table",
        headers: ["Right", "What the brand does", "Usually priced"],
        rows: [
          ["Organic sharing", "Reposts or shares your post on its own channels", "Often included or small fee; define duration"],
          ["Paid usage", "Runs your content as ads from its own account", "Separately, by duration and platforms"],
          ["Whitelisting / partnership ads", "Runs ads through or with your handle", "Separately; access and approval terms"],
          ["Licensing existing content", "Uses content you made earlier", "A licence fee by use, duration and territory"],
          ["Buyout", "Broad or permanent rights", "Significantly higher, if at all"],
        ],
      },
      {
        type: "paragraph",
        text: "Check these before signing with the interactive checklist in the influencer contract guide for creators.",
        links: [
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
        ],
      },
      { type: "heading", text: "Whitelisting and partnership ads", id: "whitelisting" },
      {
        type: "paragraph",
        text: "Whitelisting (sometimes called creator licensing or partnership ads) lets a brand run ads that appear under your name. On Instagram and Facebook, partnership ads show both the creator and brand. Because audiences see these as coming from you, agree on duration, budget visibility if possible, and whether you approve ad copy and targeting. You should be able to revoke access when the agreed period ends. The full creator whitelisting guide covers permissions, pricing and risks, and the brand-side guide to Instagram partnership ads explains how they work technically.",
        links: [
          { text: "creator whitelisting guide", href: "/blog/creator-whitelisting" },
          { text: "Instagram partnership ads", href: "/blog/instagram-partnership-ads" },
        ],
      },
      { type: "heading", text: "The five dimensions of any usage grant", id: "dimensions" },
      {
        type: "list",
        items: [
          "Purpose: organic, paid, website, offline, or a combination.",
          "Duration: 30, 90, 180 days, one year or perpetual. Starts from posting date or first ad date? Specify.",
          "Territory: India only, specific countries, or worldwide.",
          "Media: which platforms and channels (Meta ads, YouTube ads, website, print).",
          "Editing: can the brand cut, crop, add text, change audio, or combine with other footage?",
        ],
      },
      { type: "heading", text: "Editing rights and derivative content", id: "editing-derivatives" },
      {
        type: "paragraph",
        text: "Editing rights let a brand trim, subtitle or resize your content, which is usually fine. Derivative content is different: new assets made from your footage, voice or likeness, such as new edits combining your clips with other creators, or AI-generated variations of your voice or face. Agree whether that's allowed, and if so, whether you approve the results. Your likeness and voice are yours; don't give them away by accident.",
      },
      { type: "heading", text: "Perpetual rights", id: "perpetual" },
      {
        type: "paragraph",
        text: "\"Perpetual, worldwide, in all media now known or hereafter devised\" means forever, everywhere, in any form. For organic reposting it may not matter much. For paid use it can mean your face in ads years later, possibly after you've partnered with a competitor. If a brand needs perpetual rights, they should be clearly worth it to you, and it's reasonable to limit them to specific uses (for example, archival posts only, no new paid ads).",
      },
      { type: "heading", text: "Why usage shouldn't be casually bundled into your fee", id: "why-separate" },
      {
        type: "list",
        items: [
          "Value: a post on your profile is seen for days; an ad can run for months to much larger audiences.",
          "Clarity: separate lines stop \"we assumed we could run it as an ad\" disputes.",
          "Negotiation: when budgets are tight, reducing usage duration is a better lever than cutting your content fee.",
          "Future income: renewals become a natural, paid conversation when a usage period ends.",
        ],
      },
      {
        type: "paragraph",
        text: "We don't quote a universal percentage premium for usage rights. It varies by duration, media, category and creator, and published \"standard\" percentages are rarely based on reliable data. What matters is that each extension is visible and priced. The how much should creators charge guide shows how to add rights into your quote.",
        links: [{ text: "how much should creators charge", href: "/blog/how-much-should-creators-charge-india" }],
      },
      { type: "heading", text: "A simple way to write a usage clause", id: "clause-template" },
      {
        type: "template",
        label: "Plain-language usage summary to confirm in writing (not legal wording)",
        text: "Content: 1 Instagram Reel ([title/date])\nOrganic: Creator posts on @handle. Brand may repost on its Instagram and Facebook with credit for 90 days from posting.\nPaid: Brand may run the Reel as ads on Meta platforms, India only, for 60 days from first ad date. Extensions by agreement at ₹____ per 30 days.\nWhitelisting: Partnership ads through @handle for the same 60 days; creator approves ad captions.\nEditing: Brand may trim, subtitle and resize. No new edits combining with other footage, and no AI alteration of creator's face or voice, without written approval.\nAfter expiry: No new ads. Organic posts already published may remain on the brand's profile.",
      },
      { type: "heading", text: "What to do when a brand uses content beyond the agreement", id: "overuse" },
      {
        type: "list",
        items: [
          "Collect evidence: screenshots of ads with dates (Meta's Ad Library can show active ads).",
          "Check your agreement or email trail for the agreed scope.",
          "Contact the brand politely, point out the expiry, and offer a paid extension.",
          "If there's no response, escalate in writing. Significant or repeated misuse may warrant legal advice.",
        ],
      },
      {
        type: "paragraph",
        text: "Many overruns are honest mistakes by a busy media team. A calm message with an extension offer often turns them into extra income. Licensing content beyond a sponsored deal, including content a brand didn't commission, is covered in creator content licensing. For UGC creators, the brand-side UGC content usage rights guide covers the specific issues around content made solely for brand channels.",
        links: [
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
          { text: "UGC content usage rights guide", href: "/blog/ugc-content-usage-rights" },
        ],
      },
      {
        type: "paragraph",
        text: "Want to see how brands are advised to approach this? Read influencer usage rights: what brands should know and UGC whitelisting and creator licensing.",
        links: [
          { text: "influencer usage rights: what brands should know", href: "/blog/influencer-usage-rights" },
          { text: "UGC whitelisting and creator licensing", href: "/blog/ugc-whitelisting-creator-licensing" },
        ],
      },
    ],
    faqs: [
      {
        question: "What are usage rights for creators?",
        answer:
          "Usage rights define how a brand may use content a creator makes: the purpose (organic, paid, website, offline), duration, territory, media, and whether it can be edited. They're usually a licence; the creator often keeps ownership.",
      },
      {
        question: "What is whitelisting in influencer marketing?",
        answer:
          "Whitelisting, also called creator licensing or partnership ads, lets a brand run ads through the creator's handle so they appear to come from the creator. It should be time-limited and priced separately.",
      },
      {
        question: "Should I give brands perpetual rights to my content?",
        answer:
          "Be cautious. Perpetual paid usage can mean your content runs as an ad indefinitely. If a brand needs long-term rights, limit them to specific uses and price them accordingly.",
      },
      {
        question: "How much extra should I charge for usage rights?",
        answer:
          "There's no universal percentage. Price by purpose, duration, territory and media, and show each as a separate line so the brand can see what it's paying for.",
      },
    ],
  },
  {
    slug: "creator-exclusivity",
    category: "Creator Resources",
    title: "Creator Exclusivity: What It Means and How to Negotiate It in Brand Deals",
    seoTitle: "Creator Exclusivity in Brand Deals: Meaning and Negotiation",
    excerpt:
      "Exclusivity clauses stop you working with other brands, sometimes for months. Here's how the different types work, why they have a price, and what to ask before agreeing.",
    metaDescription:
      "Creator exclusivity explained: category, competitor, platform and geographic exclusivity, duration, why exclusivity has economic value, questions to ask and how to negotiate it, with examples.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "9 min read",
    tags: ["creator exclusivity", "exclusivity clause", "exclusive brand deals", "category exclusivity", "influencer non-compete", "brand deal negotiation", "creator exclusivity agreement", "creator category restrictions", "non-compete influencer India"],
    related: ["creator-usage-rights", "influencer-contract-guide-for-creators", "how-to-negotiate-brand-deals-as-a-creator"],
    body: [
      {
        type: "paragraph",
        text: "An exclusivity clause is a promise not to do something: usually, not to work with a brand's competitors for a period. Brands ask for it for good reasons. Creators often agree too quickly, because the cost doesn't show up until the next offer arrives and has to be turned down.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator exclusivity means agreeing not to promote competing brands, categories, platforms or regions for a set period. It has real economic value because it can cost you other deals, so it should be narrowly defined (named competitors or a specific product category), time-limited, and paid for. Before agreeing, ask what exactly counts as a competitor, when the period starts and ends, whether existing partnerships are affected, and what the brand is paying for it.",
      },
      { type: "heading", text: "Types of exclusivity", id: "types" },
      {
        type: "table",
        headers: ["Type", "What it restricts", "Example"],
        rows: [
          ["Competitor exclusivity", "Named brands", "No content for Brand X or Brand Y for 60 days"],
          ["Category exclusivity", "A product category", "No other sunscreen brands for 90 days"],
          ["Broad category exclusivity", "A wide category", "No skincare or beauty brands at all for 6 months"],
          ["Platform exclusivity", "Specific platforms", "No competing brand content on YouTube, but Instagram is unrestricted"],
          ["Geographic exclusivity", "Regions or markets", "No competing brands' campaigns in South India"],
          ["Pre/post-campaign windows", "A period around posting", "No competing content 15 days before and 30 days after the Reel"],
        ],
      },
      { type: "heading", text: "Why brands want it", id: "why-brands-want-it" },
      {
        type: "paragraph",
        text: "If you recommend a sunscreen on Monday and a rival sunscreen on Friday, both recommendations lose credibility. Brands want their investment to stand out, particularly during launches and long-term partnerships. That's a legitimate concern, which is why exclusivity is negotiable rather than unreasonable.",
      },
      { type: "heading", text: "Why exclusivity has a price", id: "economic-value" },
      {
        type: "list",
        items: [
          "Opportunity cost: every deal you turn down during the period is income lost.",
          "Niche concentration: if you're a skincare creator, skincare exclusivity blocks most of your market.",
          "Seasonality: exclusivity over Diwali, wedding season or year-end sales blocks your highest-demand weeks.",
          "Signalling: exclusivity signals to your audience that you're committed to one brand, which is valuable to that brand.",
        ],
      },
      {
        type: "paragraph",
        text: "A simple way to think about it: estimate what you'd reasonably earn from competing brands in that category over the exclusivity period. The exclusivity fee should make you comfortable giving that up. There's no fixed percentage, and it's reasonable for exclusivity to cost more than the content itself when the category is your core niche.",
      },
      { type: "heading", text: "Worked examples", id: "examples" },
      { type: "subheading", text: "Example 1: Narrow and fair" },
      {
        type: "paragraph",
        text: "A fitness creator is offered a protein powder Reel with no promotion of three named competitor protein brands for 30 days after posting. The restriction is narrow, short and specific. Many creators would accept this with a modest premium or within a well-priced fee.",
      },
      { type: "subheading", text: "Example 2: Too broad for the fee" },
      {
        type: "paragraph",
        text: "A beauty creator is offered one Reel with \"no beauty, skincare, haircare or personal care brands for 6 months.\" That covers most of the creator's income. Reasonable responses: narrow it to the product category (e.g. face serums), shorten it to 30 to 60 days, or price it as a significant add-on.",
      },
      { type: "subheading", text: "Example 3: Long-term partnership" },
      {
        type: "paragraph",
        text: "A tech creator signs a 12-month ambassador deal with a phone brand, with smartphone-category exclusivity for the whole year. Here exclusivity is the point, and the monthly retainer should reflect that the creator can't review competing phones, which may be a large part of their content.",
      },
      { type: "heading", text: "Questions to ask before agreeing", id: "questions" },
      {
        type: "list",
        items: [
          "Which brands or categories count as competitors? Can you list them?",
          "Does it cover organic content (like an unpaid review) or only paid partnerships?",
          "When does the period start and end: signing, posting, or campaign end?",
          "Which platforms and regions does it cover?",
          "Does it affect partnerships I already have? (Disclose these upfront.)",
          "Is exclusivity priced separately from the content fee?",
          "If the brand cancels the campaign, does exclusivity still apply?",
          "Does the exclusivity period match the usage period, or extend beyond it?",
        ],
      },
      { type: "heading", text: "How to negotiate exclusivity", id: "negotiate" },
      {
        type: "list",
        items: [
          "Narrow the scope: named competitors instead of a whole category.",
          "Shorten the period: tie it to the campaign window or the paid usage period.",
          "Limit it to paid content: allow organic mentions or unsponsored reviews.",
          "Price it visibly: add exclusivity as its own line on your quote.",
          "Protect existing relationships: carve out current partners by name.",
          "Make it conditional: exclusivity applies only once the brand has paid.",
        ],
      },
      {
        type: "template",
        label: "Example negotiation message",
        text: "Hi [Name],\n\nThanks for the agreement. On exclusivity: six months across all skincare would block most of my work, so I can't include it at the current fee.\n\nTwo options that could work:\n1. Exclusivity limited to face serums from the three brands you listed, for 45 days from posting, within the current fee.\n2. Broader skincare exclusivity for 90 days, as an add-on of ₹____.\n\nI also have an existing partnership with [brand] for body lotion, which I'd need to carve out.\n\nHappy to discuss.\n[Name]",
      },
      {
        type: "paragraph",
        text: "Exclusivity often travels with usage rights and long-term partnership terms. Read creator usage rights and how to negotiate brand deals as a creator for how they fit together.",
        links: [
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "how to negotiate brand deals as a creator", href: "/blog/how-to-negotiate-brand-deals-as-a-creator" },
        ],
      },
      { type: "heading", text: "Non-competes and category restrictions", id: "category-restrictions" },
      {
        type: "paragraph",
        text: "Brands sometimes use the words exclusivity, non-compete and category restriction interchangeably, but they can mean different things. A competitor exclusivity usually names specific rival brands. A category restriction bars you from promoting anything in a whole category, such as all skincare. A non-compete may try to restrict you from working in a field after the agreement ends.",
      },
      {
        type: "table",
        headers: ["Clause type", "Typical scope", "What to check"],
        rows: [
          ["Competitor exclusivity", "Named brands, during and briefly after the campaign", "Is the list reasonable? Is it paid?"],
          ["Category restriction", "A whole product category", "How the category is defined; whether it blocks your core niche"],
          ["Post-term non-compete", "Working in a field after the deal ends", "Duration and breadth; take legal advice"],
        ],
      },
      {
        type: "paragraph",
        text: "Under Indian law, section 27 of the Indian Contract Act, 1872 treats agreements that restrain someone from carrying on a lawful profession, trade or business as void to that extent, subject to limited exceptions. Courts have generally been more willing to uphold restrictions that apply during a contract than broad restrictions after it ends. How this applies to a specific clause depends on its wording and facts, so this is general information, not legal advice; ask a lawyer before signing broad or long restrictions.",
      },
      {
        type: "paragraph",
        text: "Before signing, narrow the category, limit the duration, tie it to the campaign period and price it. The interactive checklist in the influencer contract guide for creators covers exclusivity with the other key terms.",
        links: [
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
        ],
      },
      { type: "heading", text: "How to read an exclusivity clause", id: "reading-clauses" },
      {
        type: "paragraph",
        text: "Exclusivity clauses vary from a single named competitor to whole categories. The wording decides how much work you give up, so compare it with narrower alternatives before signing.",
      },
      {
        type: "table",
        headers: ["Broad wording (risky)", "Narrower alternative", "Why it matters"],
        rows: [
          ["\"Any competing brand\"", "Named competitors listed in the agreement", "\"Competing\" can be read very widely"],
          ["\"The beauty category\"", "\"Face sunscreen\"", "A category can block unrelated products"],
          ["\"All platforms\"", "\"Instagram and YouTube\"", "Blocks work on platforms the brand doesn't use"],
          ["\"During the term and thereafter\"", "\"30 days before and 60 days after posting\"", "Open-ended periods have no natural end"],
          ["\"Including existing partners\"", "\"Excluding existing commitments listed below\"", "Protects deals you already have"],
        ],
      },
      { type: "heading", text: "Exclusive brand deals and ambassadorships", id: "exclusive-deals" },
      {
        type: "paragraph",
        text: "Some brands offer an exclusive partnership: you become their only creator in a category, often as an ambassador over several months. These deals can provide steady income and a strong association, but they concentrate your income and restrict your options. Price the exclusivity explicitly, keep the category narrow, agree what happens if the brand ends the partnership early, and check it doesn't conflict with existing commitments. Creator brand partnerships and creator retainer deals cover long-term structures.",
        links: [
          { text: "Creator brand partnerships", href: "/blog/creator-brand-partnerships" },
          { text: "creator retainer deals", href: "/blog/creator-retainer-deals" },
        ],
      },
    ],
    faqs: [
      {
        question: "What does exclusivity mean in an influencer contract?",
        answer:
          "It means the creator agrees not to promote competing brands, categories, platforms or regions for a set period, so the brand's partnership isn't diluted.",
      },
      {
        question: "Should creators charge for exclusivity?",
        answer:
          "Yes, when it restricts meaningful income. The fee should reflect the deals you'd likely give up during the period, especially if the category is your core niche.",
      },
      {
        question: "How long should exclusivity last?",
        answer:
          "As short as the brand genuinely needs, often tied to the campaign window or paid usage period. Long exclusivity makes most sense in paid long-term partnerships.",
      },
      {
        question: "Can I negotiate an exclusivity clause?",
        answer:
          "Yes. Ask to narrow it to named competitors or a specific product category, shorten the duration, limit it to paid content, carve out existing partners, and price it separately.",
      },
      {
        question: "What is an exclusive brand deal for creators?",
        answer:
          "An agreement where a creator promotes only one brand in a category for a period, often as an ambassador. It should be narrowly defined, time-limited and priced for the income the creator gives up.",
      },
      {
        question: "What does a category exclusivity clause mean?",
        answer:
          "It stops you promoting brands in a defined product category for a set period. Narrow categories, such as a specific product type rather than a whole industry, reduce what you give up.",
      },
    ],
  },
  {
    slug: "how-to-negotiate-brand-deals-as-a-creator",
    category: "Creator Resources",
    title: "How to Negotiate Brand Deals as a Creator: Complete Guide",
    seoTitle: "How to Negotiate Brand Deals as a Creator",
    excerpt:
      "How to negotiate fees, deliverables, revisions, usage, exclusivity, timelines and payment terms without damaging the relationship, with example messages for common situations.",
    metaDescription:
      "How to negotiate brand deals as a creator: questions to ask first, negotiating fee, deliverables, revisions, usage rights, exclusivity, timelines and payment, when to say no, and example messages.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "12 min read",
    tags: ["negotiate brand deals", "creator rate negotiation", "creator negotiation", "influencer negotiation", "brand deal fee", "payment terms"],
    related: ["how-much-should-creators-charge-india", "creator-usage-rights", "creator-exclusivity"],
    body: [
      {
        type: "paragraph",
        text: "Negotiating a brand deal isn't about winning. The brand manager usually has a fixed budget and someone to answer to; you have a price that makes the work worth doing. Good negotiation finds a scope where both are true, and leaves both sides wanting to work together again.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To negotiate a brand deal as a creator: ask questions before quoting, so you understand deliverables, usage, exclusivity, timelines and budget; quote a clear price with rights and extras itemised; when the budget is lower, adjust scope (fewer deliverables, shorter usage, narrower exclusivity) rather than simply cutting your rate; get payment terms in writing; and walk away politely when the deal doesn't work. Stay honest and specific; avoid pressure tactics.",
      },
      { type: "heading", text: "Ask before you quote", id: "ask-first" },
      {
        type: "list",
        items: [
          "What are the campaign's goals: awareness, launch, sales, content for ads?",
          "Which deliverables, platforms and posting dates?",
          "How will the content be used: organic only, paid ads, website? For how long?",
          "Is there any exclusivity?",
          "How many revision rounds, and who approves?",
          "What are the payment terms?",
          "Is there a budget range for this campaign?",
        ],
      },
      {
        type: "paragraph",
        text: "Answers to these change the price more than anything else. Quoting before you know them usually means underpricing usage and exclusivity.",
      },
      { type: "heading", text: "Negotiating the fee", id: "fee" },
      {
        type: "paragraph",
        text: "Anchor your quote in value: average views, audience fit and relevant results. If the brand's offer is lower, ask what's fixed. Budgets are often fixed while scope is flexible.",
      },
      {
        type: "template",
        label: "When the offer is below your rate",
        text: "Thanks for the offer. For the scope in the brief (1 Reel, 2 Story sets, 90 days of paid usage), my fee is ₹[X].\n\nIf ₹[their budget] is fixed, I could do 1 Reel and 1 Story set with 30 days of organic reposting. Would either work for you?",
      },
      { type: "heading", text: "Negotiating deliverables", id: "deliverables" },
      {
        type: "paragraph",
        text: "Scope creep is common: \"one Reel\" becomes a Reel, three Stories, a carousel and a link in bio. Every addition should either be priced or traded. Define each deliverable precisely, using the creator deliverables guide.",
        links: [{ text: "creator deliverables guide", href: "/blog/creator-deliverables" }],
      },
      {
        type: "template",
        label: "When extra deliverables are added",
        text: "Happy to add the carousel. That would be ₹[X] extra, or I can swap it for one of the Story sets if you'd prefer to stay within budget.",
      },
      { type: "heading", text: "Negotiating revisions and approvals", id: "revisions" },
      {
        type: "list",
        items: [
          "Offer one or two rounds of revisions; price additional rounds.",
          "Agree what counts as a revision (changes within the agreed concept) vs a new concept.",
          "Set a response window for approvals, e.g. 2 working days, and adjust posting dates if approvals run late.",
          "Share a script or outline before shooting to reduce reshoots.",
        ],
      },
      {
        type: "paragraph",
        text: "For replies to use when revisions go beyond what was agreed, see how to handle brand revisions.",
        links: [{ text: "how to handle brand revisions", href: "/blog/creator-brand-revisions" }],
      },
      { type: "heading", text: "Negotiating usage rights", id: "usage" },
      {
        type: "paragraph",
        text: "Usage is often the most valuable part of a deal. When a brand asks for broad or perpetual rights, propose a specific duration, media and territory, with extensions available at an agreed price. See creator usage rights.",
        links: [{ text: "creator usage rights", href: "/blog/creator-usage-rights" }],
      },
      {
        type: "template",
        label: "When the contract asks for perpetual usage",
        text: "The agreement mentions perpetual usage in all media. My fee covers organic reposting for 90 days. For paid ads, I can offer 60 days on Meta platforms in India at ₹[X], with extensions at ₹[Y] per 30 days. Would that cover what your team needs?",
      },
      { type: "heading", text: "Negotiating exclusivity", id: "exclusivity" },
      {
        type: "paragraph",
        text: "Narrow it to named competitors or a specific product category, tie it to the campaign window, and price anything broader. See creator exclusivity for examples.",
        links: [{ text: "creator exclusivity", href: "/blog/creator-exclusivity" }],
      },
      { type: "heading", text: "Negotiating timelines", id: "timelines" },
      {
        type: "list",
        items: [
          "Timelines should start when you receive the product and final brief, not when the contract is signed.",
          "Build in time for approvals and reshoots.",
          "Charge for rush delivery if the brand needs content faster than your usual turnaround.",
          "Agree a posting window rather than an exact minute where possible.",
        ],
      },
      { type: "heading", text: "Negotiating payment", id: "payment" },
      {
        type: "paragraph",
        text: "Payment terms matter as much as price. ₹50,000 paid in 15 days is worth more to you than ₹55,000 paid in 120 days with reminders. Creator payment terms covers each structure in detail.",
        links: [{ text: "Creator payment terms", href: "/blog/creator-payment-terms" }],
      },
      {
        type: "list",
        items: [
          "Ask for a part advance with new brands or large projects (for example 30 to 50%).",
          "Agree when the balance is due: on posting, or a set number of days after invoice.",
          "Confirm who pays (brand or agency) and what the invoice needs (PO number, vendor registration, GST details).",
          "Ask whether TDS will be deducted so your net payment isn't a surprise.",
        ],
      },
      {
        type: "template",
        label: "Asking for better payment terms",
        text: "Before we confirm, could we agree 40% on signing and the balance within 15 days of the Reel going live? Since I'm booking the shoot and props in advance, the advance helps me hold the dates for you.",
      },
      { type: "heading", text: "How do you negotiate rates for different deliverables?", id: "rates-by-deliverable" },
      {
        type: "paragraph",
        text: "Each deliverable has its own levers. Negotiate the lever that matters to the brand rather than cutting your base price across the board.",
      },
      {
        type: "table",
        headers: ["Deliverable", "What drives the price", "Negotiation lever"],
        rows: [
          ["Instagram Reel", "Average views, production effort", "Organic-only vs paid usage; number of revisions"],
          ["Story set", "Story views, link needs", "Number of frames; link sticker; highlight duration"],
          ["YouTube integration", "Average views over 30 days, placement, length", "Integration length and position; pinned comment and links"],
          ["Dedicated YouTube video", "Production effort, evergreen views", "Scope of the video; usage outside YouTube"],
          ["UGC video (no posting)", "Production effort, usage", "Usage duration, platforms and paid ads"],
          ["Usage and whitelisting", "Duration, platforms, paid reach", "Shorter duration; fewer platforms; approval of ads"],
          ["Exclusivity", "Income you give up", "Narrow category; shorter period"],
        ],
      },
      {
        type: "paragraph",
        text: "To calculate a starting number for each deliverable, use the creator pricing calculator; for the full pricing logic, see how much creators should charge in India.",
        links: [
          { text: "creator pricing calculator", href: "/blog/creator-pricing-calculator" },
          { text: "how much creators should charge in India", href: "/blog/how-much-should-creators-charge-india" },
        ],
      },
      { type: "heading", text: "When to say no", id: "when-to-say-no" },
      {
        type: "list",
        items: [
          "The product conflicts with your values or you wouldn't recommend it to a friend.",
          "The brand asks you to hide disclosure or make claims you can't support.",
          "Rights and exclusivity are far broader than the fee justifies and the brand won't move.",
          "Payment terms are vague, extremely long, or dependent on results you don't control.",
          "The offer shows signs of a scam. See how to spot fake brand collaboration offers.",
        ],
      },
      {
        type: "paragraph",
        text: "Our brand collaboration email templates include a polite decline you can adapt. If you're unsure, check the offer against the creator brand deal checklist and how to spot fake brand collaboration offers.",
        links: [
          { text: "brand collaboration email templates", href: "/blog/brand-collaboration-email-templates" },
          { text: "creator brand deal checklist", href: "/blog/creator-brand-deal-checklist" },
          { text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" },
        ],
      },
      { type: "heading", text: "Maintaining the relationship", id: "relationship" },
      {
        type: "list",
        items: [
          "Be quick and clear. Slow, vague replies cost more goodwill than a firm price.",
          "Never negotiate by threatening negative content or public complaints.",
          "Deliver exactly what was agreed, on time, and share honest results afterwards.",
          "Thank the team when things go well, and mention you'd like to work together again.",
        ],
      },
      { type: "heading", text: "Tactics to avoid", id: "tactics-to-avoid" },
      {
        type: "list",
        items: [
          "Inventing competing offers to create urgency.",
          "Inflating or selectively presenting metrics.",
          "Agreeing to terms you intend to ignore later.",
          "Raising the price after agreement without a change in scope.",
        ],
      },
      {
        type: "paragraph",
        text: "It helps to know what brands are told. Our brand-side guide on how to negotiate with influencers is worth reading from the other side of the table.",
        links: [{ text: "how to negotiate with influencers", href: "/blog/how-to-negotiate-with-influencers" }],
      },
      {
        type: "paragraph",
        text: "If negotiation is the part of the business you'd rather hand to someone else, creator manager vs agency compares the options neutrally.",
        links: [{ text: "creator manager vs agency", href: "/blog/creator-manager-vs-agency" }],
      },
    ],
    faqs: [
      {
        question: "How do creators negotiate with brands?",
        answer:
          "By asking about scope, usage, exclusivity, timelines and budget first, quoting a clear itemised price, and when budgets are lower, adjusting scope rather than simply cutting their rate. Payment terms should be agreed in writing.",
      },
      {
        question: "What should I do if a brand's offer is too low?",
        answer:
          "Thank them, state your fee for the requested scope, and offer a reduced scope that fits their budget, such as fewer deliverables or shorter usage. If neither works, decline politely.",
      },
      {
        question: "Can I negotiate payment terms?",
        answer:
          "Yes. Ask for a part advance with new brands or bigger projects, a fixed number of days for the balance, and clarity on invoicing requirements and TDS deductions.",
      },
      {
        question: "When should a creator turn down a brand deal?",
        answer:
          "When the product conflicts with your values, the brand asks you to hide disclosure or make unsupported claims, the rights or exclusivity far exceed the fee, payment terms are unreasonable, or the offer looks like a scam.",
      },
    ],
  },
  {
    slug: "creator-deliverables",
    category: "Creator Resources",
    title: "Creator Deliverables: How to Define What You Are Actually Agreeing to",
    seoTitle: "Creator Deliverables: How to Define a Brand Deal's Scope",
    excerpt:
      "\"One Reel\" can mean a dozen different things. Here's how to define each deliverable, from Stories and Shorts to raw footage and reporting, so there are no surprises after you've signed.",
    metaDescription:
      "Creator deliverables explained: content formats, number of posts, Stories, Reels, Shorts, YouTube integrations, raw footage, captions, links, tags, revisions, reporting and deadlines, with a deliverables checklist.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "9 min read",
    tags: ["creator deliverables", "creator deliverables checklist", "influencer deliverables", "scope of work", "brand deal scope", "content deliverables"],
    related: ["creator-brand-deal-checklist", "influencer-contract-guide-for-creators", "how-to-negotiate-brand-deals-as-a-creator"],
    body: [
      {
        type: "paragraph",
        text: "Most brand deal disputes aren't about money. They're about what was supposed to be delivered: how long the video should be, whether the link stays up, whether Stories count as one deliverable or five, whether the brand gets raw files. Defining deliverables precisely is the cheapest way to avoid all of that.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator deliverable is a specific piece of work you agree to produce for a brand. Define each one by format, platform, quantity, length, key content requirements (messages, tags, links, disclosure), draft and posting dates, how long it stays live, revision rounds and any extras like raw footage, photos or a performance report. Write it down in the agreement or a confirmed email before you start.",
      },
      { type: "heading", text: "What counts as a deliverable", id: "what-counts" },
      {
        type: "paragraph",
        text: "Anything the brand expects to receive or see. That includes content you post, content you hand over, and work around it: captions, links, reports and appearances. If the brand expects it, list it.",
      },
      { type: "heading", text: "How to define each format", id: "formats" },
      {
        type: "table",
        headers: ["Deliverable", "Define these details"],
        rows: [
          ["Instagram Reel", "Length range, concept, on-screen text, audio (trending vs original), cover image, caption points, tags, paid partnership label, Collab post or not, how long it stays live"],
          ["Instagram Stories", "Number of frames, whether frames count individually or as one set, link sticker, mentions, highlight and for how long, posting times"],
          ["Carousel / static post", "Number of slides, image vs video slides, caption, tags"],
          ["YouTube integration", "Segment length, placement (early, mid, end), talking points, description link and code, pinned comment and duration"],
          ["YouTube dedicated video", "Length range, structure, title/thumbnail approval, description, chapters"],
          ["YouTube Shorts", "Length, link placement options, whether it's cross-posted from a Reel"],
          ["UGC-only video", "Number of videos, hook variations, aspect ratios, captions/subtitles, file format, no posting on creator channel"],
          ["Photos", "Number of edited images, resolution, orientation, usage"],
          ["Raw footage", "Which clips, file format, delivery method, whether it's included or extra"],
          ["Live session", "Platform, duration, date/time, talking points, disclosure at start and end"],
          ["Link in bio", "Duration and position"],
          ["Reporting", "Which metrics, screenshots or exports, and when (e.g. 7 days after posting)"],
        ],
      },
      { type: "heading", text: "Captions, links and tags", id: "captions-links-tags" },
      {
        type: "list",
        items: [
          "Caption: will you write it, or will the brand supply key points? Is caption approval required?",
          "Disclosure: ASCI guidelines require an upfront, clear label such as \"Ad\" or \"Paid partnership\", plus platform tools like Instagram's paid partnership label or YouTube's paid promotion setting.",
          "Tags and mentions: which handles, and where (caption, on-screen, both)?",
          "Links: link sticker, bio link, description link; tracked URL or code; how long they stay live.",
          "Hashtags: brand campaign hashtags, if any.",
        ],
      },
      {
        type: "paragraph",
        text: "Instagram's help centre explains how to add the paid partnership label, and YouTube's help centre covers the paid promotion disclosure.",
        links: [
          { text: "Instagram's help centre", href: SOURCES.instagramPaidPartnership },
          { text: "YouTube's help centre", href: SOURCES.youtubePaidPromotion },
        ],
      },
      { type: "heading", text: "Revisions", id: "revisions" },
      {
        type: "paragraph",
        text: "State the number of revision rounds included, what counts as a revision (changes within the approved concept), and the cost of additional rounds or reshoots caused by brief changes. Agree on script approval before shooting for anything complex. See how to handle brand revisions for replies when feedback goes beyond scope.",
        links: [{ text: "how to handle brand revisions", href: "/blog/creator-brand-revisions" }],
      },
      { type: "heading", text: "Deadlines", id: "deadlines" },
      {
        type: "list",
        items: [
          "Product delivery date (timelines start here).",
          "Brief final date.",
          "Script or concept approval date.",
          "Draft delivery date.",
          "Feedback deadline for the brand.",
          "Posting date or window.",
          "Report delivery date.",
        ],
      },
      { type: "heading", text: "Reporting", id: "reporting" },
      {
        type: "paragraph",
        text: "Agree which metrics you'll share, from which source (native insights screenshots), and when. Don't promise metrics your platform doesn't provide. Creator analytics for brand deals lists what's available on each platform and how to present it.",
        links: [{ text: "Creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" }],
      },
      { type: "heading", text: "A deliverables spec you can copy", id: "spec-template" },
      {
        type: "template",
        label: "Deliverables summary (confirm in writing with the brand)",
        text: "CAMPAIGN: [name]  BRAND: [name]  CREATOR: [@handle]\n\n1. Instagram Reel\n   Length 30–45 sec · Concept: [approved concept]\n   Caption: creator-written, brand approves key points\n   Tags: @brand in caption and on screen · Paid partnership label ON\n   Posting window: [date range] · Stays live: minimum 6 months\n\n2. Instagram Story set\n   4 frames on posting day · Link sticker to [tracked URL]\n   Highlight: 14 days\n\n3. Revisions: 1 round on script, 1 round on draft. Further rounds ₹____\n\n4. Timeline: product received [date] → script [date] → draft [date] → brand feedback within 2 working days → post [date]\n\n5. Report: screenshots of views, reach, likes, comments, saves, shares, link clicks 7 days after posting\n\n6. Not included: raw footage, paid usage, whitelisting (available as add-ons)",
      },
      { type: "heading", text: "Deliverables checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "Every format listed with quantity and length",
          "Platforms specified",
          "Concept or talking points agreed",
          "Caption ownership and approval clear",
          "Disclosure method confirmed",
          "Tags, links and codes listed, with how long links stay live",
          "Revision rounds defined and extra rounds priced",
          "All dates listed, starting from product receipt",
          "How long content stays live",
          "Raw footage, photos and extras either included or excluded explicitly",
          "Reporting metrics and date agreed",
        ],
      },
      {
        type: "paragraph",
        text: "Deliverables are one part of a deal. The creator brand deal checklist covers everything else to check before accepting, including money, rights and exclusivity.",
        links: [{ text: "creator brand deal checklist", href: "/blog/creator-brand-deal-checklist" }],
      },
    ],
    faqs: [
      {
        question: "What are deliverables in influencer marketing?",
        answer:
          "The specific pieces of work a creator agrees to produce for a brand, such as Reels, Stories, YouTube integrations, Shorts, UGC videos, photos, raw footage, links and performance reports, each defined by format, quantity, timing and requirements.",
      },
      {
        question: "Do Instagram Stories count as one deliverable or several?",
        answer: "It depends on the agreement. Define whether a Story deliverable means one frame or a set of frames, and say how many.",
      },
      {
        question: "Should raw footage be included in a creator fee?",
        answer:
          "Usually not by default. Raw footage lets a brand create new assets from your shoot, so it's typically listed and priced as an add-on.",
      },
      {
        question: "How long should sponsored content stay live?",
        answer: "Agree a minimum period in writing, such as six months or a year, and specify how long links and highlights stay up.",
      },
    ],
  },
];
