import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

const RIGHTS_PUBLISHED = "2026-10-08";
const RIGHTS_REVIEWED = "October 2026";

/**
 * Content rights and commercial terms cluster (1290–1309). Usage rights, licensing, scope, duration,
 * rights pricing and the rights checklist live on the rewritten influencer-usage-rights hub; whitelisting
 * and ad authorization on ugc-whitelisting-creator-licensing. Only ownership (with buyouts) and brand-side
 * exclusivity had no owner. See docs/content-rights-1290-1309-audit.md.
 */
export const contentRightsPosts: BlogPost[] = [
  {
    slug: "influencer-content-ownership",
    category: "Influencer Marketing",
    title: "Who Owns Influencer Content? Ownership vs Usage Rights for Brands",
    seoTitle: "Who Owns Influencer Content? Ownership vs Licence",
    excerpt:
      "Paying a creator doesn't settle who owns the content or what you can do with it. The difference between ownership, assignment, licence and reuse, what Indian copyright law says when an agreement is silent, what a 'buyout' can mean, and when brands should ask for ownership at all.",
    metaDescription:
      "Does a brand own influencer content it paid for? Ownership vs licence vs usage rights, Indian copyright defaults, what a buyout can mean and what to agree.",
    author: AUTHOR,
    publishedAt: RIGHTS_PUBLISHED,
    lastReviewed: RIGHTS_REVIEWED,
    readingTime: "9 min read",
    tags: [
      "who owns influencer content",
      "influencer content ownership",
      "ownership vs usage rights",
      "influencer content buyout",
      "creator content copyright brand",
      "commissioned content copyright India",
    ],
    related: ["influencer-usage-rights", "influencer-marketing-contract", "ugc-whitelisting-creator-licensing"],
    hero: {
      src: "/blog/brand-guides/influencer-content-ownership.svg",
      alt: "Four layers of creator content rights: ownership, assignment, licence and usage scope, with reuse allowed only inside the agreed scope",
    },
    body: [
      {
        type: "paragraph",
        text: "The question usually comes up late. A creator's Reel is performing, the paid media team wants to run it for a year and cut it into ads, and someone asks: we paid for it, so don't we own it? Sometimes the answer is yes, often it's \"only for what the agreement says\", and occasionally nobody can tell because the agreement didn't say anything.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Paying a creator does not by itself settle who owns the content or what you may do with it. What a brand can do depends on whether copyright was assigned to it in writing, what any licence covers (channels, paid use, duration, territory, edits), and, where the agreement is silent, the default rules of the law that applies. In India, the Copyright Act makes the author the first owner, but for some commissioned work, including photographs and cinematograph films made for payment at another person's request, that person is the first owner unless the parties agree otherwise. Whether a particular creator video falls within that rule is a legal question. The reliable answer is not to depend on defaults at all: write down who owns the content and exactly what the brand may do with it.",
      },
      { type: "heading", text: "Ownership, assignment, licence, usage and reuse", id: "concepts" },
      {
        type: "table",
        headers: ["Term", "What it means", "In practice for a brand"],
        rows: [
          ["Ownership", "Holding the copyright in the content", "The owner decides who else may copy, adapt or publish it"],
          ["Assignment", "Transfer of some or all of the copyright from one party to another, in writing", "The brand becomes the owner of the rights assigned, for the term and territory stated"],
          ["Licence", "Permission from the owner to use the content, on defined terms, without transferring ownership", "The brand can use it only as the licence allows; the creator keeps ownership"],
          ["Usage scope", "The terms of that permission: channels, formats, organic or paid, territory, duration, edits", "Decides whether a specific use is covered"],
          ["Reuse or repurposing", "Actually using the content somewhere new", "Allowed only if ownership or the licence covers that use"],
        ],
      },
      {
        type: "paragraph",
        text: "Most creator agreements are licences. They give the brand permission for defined uses while the creator keeps the content and can usually keep it on their own account. Assignments are used when the brand needs the asset to behave like its own: edited freely, used across channels, kept indefinitely. Influencer usage rights covers how to define the scope of a licence.",
        links: [{ text: "Influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "The same Reel under three agreements", id: "example" },
      {
        type: "table",
        headers: ["Hypothetical agreement", "Brand reposts on its Instagram", "Runs it as a Meta ad for 6 months", "Cuts it into a product-page video", "Uses it after 2 years"],
        rows: [
          ["Organic collaboration only, nothing on reuse", "Unclear; ask first", "No", "No", "No"],
          ["Licence: organic and paid social, India, 6 months, edits allowed", "Yes", "Yes", "Only if 'product pages' is a listed channel", "No, unless renewed"],
          ["Assignment of copyright in the final video, creator keeps portfolio use", "Yes", "Yes", "Yes", "Yes, subject to music, likeness and other third-party rights"],
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical illustrations, not legal conclusions. Even the third row doesn't make everything in the video the brand's: the creator's face and voice, licensed music and anyone else who appears raise separate permissions, covered below.",
      },
      { type: "heading", text: "What Indian copyright law says when the agreement is silent", id: "india-law" },
      {
        type: "paragraph",
        text: "General information, not legal advice. The points below come from the Copyright Act, 1957; check the current consolidated text on India Code and take advice for a specific agreement.",
        links: [{ text: "the current consolidated text on India Code", href: SOURCES.indiaCopyrightAct }],
      },
      {
        type: "list",
        items: [
          "First owner (section 17). The author of a work is generally the first owner of copyright. Among the exceptions, for a photograph, painting or portrait, engraving or cinematograph film made for valuable consideration at the instance of any person, that person is the first owner in the absence of any agreement to the contrary. Work made in the course of employment under a contract of service generally belongs to the employer, again subject to agreement.",
          "Assignments (section 19). An assignment must be in writing and signed by the assignor or an authorised agent. If an assignment doesn't state its period, it is deemed to be five years from the date of assignment; if it doesn't state the territory, it is presumed to extend within India.",
          "Licences (sections 30 and 30A). A licence is granted in writing by the owner or an authorised agent, and section 19 applies to licences with necessary adaptations, so missing terms in a licence can also be filled by those defaults.",
        ],
      },
      {
        type: "paragraph",
        text: "Two practical consequences follow. First, defaults can surprise both sides: a creator may assume they own everything they film, while the commissioned-work rule may point the other way for some kinds of work, and a brand that assumes it owns a video outright may find the agreement, or the facts, say otherwise. Whether a sponsored Reel the creator also publishes on their own account was made 'at the instance of' the brand, and how the rule applies to the script, music and the creator's own performance, are questions for a lawyer, not a blog. Second, a vague grant can be read narrowly: an undated, unscoped permission may not cover what the marketing team assumed. Campaigns running outside India need advice for each market, because other countries' rules differ.",
      },
      { type: "heading", text: "What copyright in the video doesn't cover", id: "beyond-copyright" },
      {
        type: "table",
        headers: ["Element", "Why it needs separate attention"],
        rows: [
          ["The creator's name, face and voice", "Using a creator's identity in ads is a separate permission; Indian courts have recognised personality rights case by case"],
          ["Music and sounds", "Audio added from a platform's library may be licensed only for use on that platform; check before reusing the video elsewhere"],
          ["Other people in the video", "Friends, family or members of the public need their own consent for commercial reuse"],
          ["Logos, artwork and locations", "Third-party marks or artwork visible in frame can limit reuse, especially in ads"],
          ["The creator's handle and account", "Running ads through the creator's identity needs platform authorization and contract terms; see whitelisting"],
        ],
      },
      {
        type: "paragraph",
        text: "Ads that run through the creator's own handle are covered in influencer whitelisting and ad authorization.",
        links: [{ text: "influencer whitelisting and ad authorization", href: "/blog/ugc-whitelisting-creator-licensing" }],
      },
      { type: "heading", text: "What a 'buyout' can mean", id: "buyout" },
      {
        type: "paragraph",
        text: "\"Buyout\" isn't a legal term with one meaning. In creator deals it's used for at least four different arrangements, and two people can sign the same word expecting different things.",
      },
      {
        type: "table",
        headers: ["What someone may mean by 'buyout'", "What the brand actually gets"],
        rows: [
          ["Assignment of copyright", "Ownership of the rights assigned, for the stated term and territory"],
          ["A perpetual licence", "Permission to use without an end date; the creator still owns the content, and the licence may or may not be exclusive"],
          ["A broad licence for a long period", "All listed channels, including paid, for a fixed term such as a year or more"],
          ["Usage of raw footage", "Access to unedited files and the right to make new edits, sometimes with no change to the posting licence"],
        ],
      },
      {
        type: "paragraph",
        text: "If a quote or contract says buyout, ask for each of these to be spelled out: ownership or licence; exclusive or non-exclusive; duration; territory; channels and formats; paid media and through whose account; editing and derivative works (cut-downs, new voiceovers, translations, AI-assisted edits); raw files; whether the creator can keep the post up and use it in a portfolio; credit; and what happens to content still running when any term ends. Extended or permanent rights usually cost more, and most content isn't used for long, so compare a buyout with a shorter licence plus a pre-agreed renewal fee before paying for permanence.",
      },
      { type: "heading", text: "Should a brand ask for ownership?", id: "when-to-own" },
      {
        type: "table",
        headers: ["Ownership or a broad assignment makes sense when", "A licence is usually enough when"],
        rows: [
          ["The content is a brand asset made to your specification (product shots, packaging visuals, a brand film)", "The content's value comes from appearing on the creator's own account"],
          ["You'll edit heavily, translate or build new assets from it", "Reuse is for a campaign window or a known set of channels"],
          ["You expect to use it for years across many channels", "You want to test which content works before paying for long-term rights"],
          ["You're paying a production or UGC fee with no audience component", "The creator's identity is central and they'll want approval over how it's used"],
        ],
      },
      {
        type: "paragraph",
        text: "Asking for ownership of everything by default tends to raise fees, put off creators who value their content and audience, and buy rights you'll never use. Ask for what the content plan needs.",
      },
      { type: "heading", text: "What to settle in the agreement", id: "checklist" },
      {
        type: "list",
        items: [
          "Who owns the final content, the raw footage and any project files",
          "If licensed: channels, formats, organic or paid, territory, start and end dates, exclusive or non-exclusive",
          "Editing, cut-downs, translations, new voiceovers and other derivative uses",
          "Use of the creator's name, image and voice in ads, and through whose account ads run",
          "Music and third-party material: who clears it, and for which uses",
          "The creator's own use: keeping the post live, portfolio use, reposting on other platforms",
          "What happens at expiry: removal from ads, owned channels and listings, or renewal terms",
          "Any limits on AI training or synthetic edits using the creator's likeness",
        ],
      },
      {
        type: "paragraph",
        text: "These terms sit inside the wider influencer marketing contract, and every right should be recorded per asset in a rights register so expiry dates don't get missed. Creators can read the same questions from their side in creator intellectual property.",
        links: [
          { text: "influencer marketing contract", href: "/blog/influencer-marketing-contract" },
          { text: "rights register", href: "/blog/influencer-usage-rights" },
          { text: "creator intellectual property", href: "/blog/creator-intellectual-property" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming payment means ownership, or that the creator always keeps everything",
          "Using the word 'buyout' without defining it",
          "Leaving duration and territory blank and relying on assumptions",
          "Clearing the video but not the music, the creator's likeness or other people in frame",
          "Asking for full ownership on every deal when a scoped licence would do",
          "Keeping rights terms in email threads nobody can find at renewal time",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Ownership answers who controls the content; the licence answers what you may do with it. Payment doesn't decide either on its own, and legal defaults are a poor substitute for a clear agreement. Decide what the content plan needs, put ownership and scope in writing, and have a lawyer review agreements involving long-term, paid or cross-border use. This guide is general information, not legal advice.",
      },
    ],
    faqs: [
      {
        question: "If a brand pays a creator to make content, does the brand own it?",
        answer:
          "Not automatically, and not necessarily for every use. It depends on whether the agreement assigns copyright or grants a licence, what that licence covers, and the default rules of the law that applies where the agreement is silent. Write ownership and permitted uses into the agreement rather than relying on payment.",
      },
      {
        question: "What is the difference between ownership and usage rights?",
        answer:
          "Ownership means holding the copyright and controlling the content. Usage rights are permission from the owner to use the content in defined ways: specific channels, formats, territories and dates. Most creator deals give brands usage rights through a licence, not ownership.",
      },
      {
        question: "What does an influencer content buyout mean?",
        answer:
          "It depends on the agreement. It can mean an assignment of copyright, a perpetual licence, a long and broad licence, or access to raw footage with editing rights. Ask for ownership, duration, territory, channels, paid use, edits and the creator's own use to be spelled out.",
      },
      {
        question: "Who owns raw footage from an influencer shoot?",
        answer:
          "Whoever the agreement says. Raw files are often not included in a standard collaboration, so if you need them for new edits, agree access and the rights to edit them in writing.",
      },
      {
        question: "Can a brand edit a creator's video?",
        answer:
          "Only as far as the agreement allows. Editing, cut-downs, translations and new voiceovers should be listed explicitly, and creators often ask to approve edits that change what they appear to say.",
      },
      {
        question: "Is this legal advice?",
        answer:
          "No. It is general information about how content rights work in creator partnerships, with reference to the Indian Copyright Act. Take legal advice on specific agreements, especially for long-term, paid or cross-border use.",
      },
    ],
  },
  {
    slug: "influencer-exclusivity",
    category: "Influencer Marketing",
    title: "Influencer Exclusivity: What Brands Should Consider Before Restricting Creator Partnerships",
    seoTitle: "Influencer Exclusivity: Scope, Duration and Cost for Brands",
    excerpt:
      "When asking a creator not to work with competitors is worth paying for, how to define the category, duration, platforms and markets, how to judge the cost, narrower alternatives, and how restraint-of-trade law in India affects how long a restriction should run.",
    metaDescription:
      "Influencer exclusivity for brands: competitor vs category exclusivity, defining scope and duration, judging the cost, alternatives and Indian legal context.",
    author: AUTHOR,
    publishedAt: RIGHTS_PUBLISHED,
    lastReviewed: RIGHTS_REVIEWED,
    readingTime: "9 min read",
    tags: [
      "influencer exclusivity",
      "influencer exclusivity clause",
      "creator exclusivity for brands",
      "category exclusivity influencer",
      "influencer exclusivity cost",
      "competitor exclusivity influencer marketing",
    ],
    related: ["influencer-usage-rights", "how-to-negotiate-with-influencers", "influencer-marketing-contract"],
    hero: {
      src: "/blog/brand-guides/influencer-exclusivity.svg",
      alt: "Influencer exclusivity scope from narrow to broad: named competitors, product category, whole category, all sponsorships, with cost to the creator rising with breadth",
    },
    body: [
      {
        type: "paragraph",
        text: "A brand books a creator for a sunscreen launch. Two weeks later the same creator posts for a rival sunscreen, and the brand's partnership ads are still running through the creator's handle. Nobody broke the agreement; it simply never mentioned competitors. Exclusivity exists to prevent that, but asked for carelessly it can cost more than it protects and narrow your creator options for no reason.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer exclusivity is an agreed restriction on a creator working with competing brands for a period. Ask for it when competitor content would genuinely undermine your campaign: a launch window, paid ads running through the creator's identity, or an ambassador relationship. Define it narrowly (named competitors or a specific product category, not the creator's whole niche), match the duration to the period you actually need protected, state the platforms and markets, and treat it as a separately priced term, because it costs the creator income. Narrower alternatives, such as a gap before and after your post, often do the job for less.",
      },
      { type: "heading", text: "Types of exclusivity", id: "types" },
      {
        type: "table",
        headers: ["Type", "What the creator can't do", "Impact on the creator", "Typical use"],
        rows: [
          ["Named competitors", "Work with brands on a written list", "Lowest", "Most campaigns that need protection"],
          ["Product category", "Promote products in a defined category (for example sunscreen)", "Moderate", "Launches, single-product campaigns"],
          ["Broad category", "Promote anything in a wider category (for example all skincare)", "High for creators in that niche", "Ambassadors, long programmes"],
          ["Full exclusivity", "Take any other sponsorship", "Very high", "Rare; usually ambassador or talent deals"],
          ["Platform-limited", "Any of the above, only on the platforms where your campaign runs", "Lower than the same restriction on all platforms", "Platform-specific campaigns"],
          ["Market-limited", "Any of the above, only for audiences in defined markets", "Varies", "Regional or cross-border campaigns"],
        ],
      },
      {
        type: "paragraph",
        text: "Exclusivity is different from an exclusive licence to content. An exclusive licence stops the creator licensing the same content to someone else; exclusivity restricts who else the creator works with. Influencer usage rights covers licences.",
        links: [{ text: "Influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "Define the category before anything else", id: "define-category" },
      {
        type: "paragraph",
        text: "Most exclusivity disputes are about what the category meant. 'Beauty' could mean skincare, makeup, haircare and fragrance; 'competitors' could mean three brands or three hundred. Write it so a third party could apply it:",
      },
      {
        type: "list",
        items: [
          "Named brands, or a product category described by what the product does (for example 'sunscreens and SPF moisturisers'), not by a vague niche",
          "Whether retailer and marketplace promotions of competitor products count",
          "Whether organic, unpaid mentions count, or only paid and gifted content",
          "How the creator's own products, if any, are treated",
          "Existing agreements the creator already has, disclosed and carved out before signing",
          "Who decides if a new brand is a competitor, and how quickly",
        ],
      },
      { type: "heading", text: "Duration, platforms and markets", id: "scope" },
      {
        type: "table",
        headers: ["Scope", "Questions to settle", "Watch for"],
        rows: [
          ["Duration", "Does it cover the posting window, the whole campaign, or the period your ads run through the creator's handle?", "Paid ads running longer than the exclusivity window"],
          ["Platforms", "All platforms, or only those where your content and ads appear?", "Restricting platforms you aren't using"],
          ["Markets", "All audiences, or specific states, languages or countries?", "Cross-border creators whose main income is in other markets"],
          ["Content types", "Only sponsored posts, or also events, live sessions, affiliate links and gifting?", "Restricting income streams that don't affect your campaign"],
        ],
      },
      {
        type: "paragraph",
        text: "Duration is where paid usage and exclusivity meet. If your partnership ads will run through the creator's handle for three months, the creator promoting a competitor in that period can confuse the audience and weaken your ads; if you only reuse the content from your own account, a shorter window around the post may be enough. Ad authorization terms are covered in influencer whitelisting and ad authorization.",
        links: [{ text: "influencer whitelisting and ad authorization", href: "/blog/ugc-whitelisting-creator-licensing" }],
      },
      { type: "heading", text: "When exclusivity is worth paying for", id: "when-worth-it" },
      {
        type: "table",
        headers: ["Usually worth it", "Usually not"],
        rows: [
          ["A launch where a rival is likely to launch at the same time", "A single post in a crowded category where many creators are interchangeable"],
          ["Ads running through the creator's identity for a period", "Content reused only from your own account"],
          ["An ambassador or long-term programme where the creator becomes associated with you", "A test with creators you haven't worked with before"],
          ["A creator whose credibility in a narrow category is the reason you booked them", "A broad-lifestyle creator who mentions many brands"],
        ],
      },
      { type: "heading", text: "Judging the cost", id: "cost" },
      {
        type: "paragraph",
        text: "Exclusivity costs the creator the deals they would have taken in that category during the period, so its price depends on how broad the restriction is, how long it lasts, how much of the creator's income comes from your category, how in-demand they are, and which platforms and markets it covers. There's no reliable universal percentage. A beauty creator asked to avoid all skincare for six months is giving up far more than a tech creator asked to avoid one named phone brand for a month.",
      },
      {
        type: "list",
        items: [
          "Ask for exclusivity as its own line item, separate from the content fee and usage rights",
          "Ask what the creator would normally earn in that category in that period, and whether they've turned work down for exclusivity before",
          "Weigh it against the risk you're insuring: the value of the campaign or ad spend that competitor content could undermine",
          "Price a narrower option alongside it (named competitors, shorter window, one platform) and compare",
          "Check that you aren't paying for exclusivity on platforms or in markets you don't use",
        ],
      },
      {
        type: "paragraph",
        text: "How exclusivity fits with other cost lines in a campaign is covered in influencer campaign costs in India, and negotiating it in order with the other terms in influencer negotiation strategy.",
        links: [
          { text: "influencer campaign costs in India", href: "/blog/influencer-campaign-cost-india" },
          { text: "influencer negotiation strategy", href: "/blog/how-to-negotiate-with-influencers" },
        ],
      },
      { type: "heading", text: "Narrower alternatives", id: "alternatives" },
      {
        type: "list",
        items: [
          "A competitor gap: no competing sponsored content for a set number of days before and after your post",
          "Named competitors only, rather than a category",
          "Exclusivity limited to the platform where your content and ads run",
          "A notification clause: the creator tells you before accepting a competing deal during the campaign",
          "Exclusivity only while your partnership ads are live, ending when they stop",
        ],
      },
      { type: "heading", text: "Indian legal context", id: "india-law" },
      {
        type: "paragraph",
        text: "General information, not legal advice. Section 27 of the Indian Contract Act, 1872 makes agreements in restraint of trade void, subject to a narrow exception. Indian courts have generally been more willing to uphold restrictions that operate while an agreement is in force than restrictions that continue after it ends; in Percept D'Mark v Zaheer Khan (2006), a case about a cricketer's exclusive management agreement, the Supreme Court treated a restriction reaching beyond the agreement's term as unenforceable. How this applies to a particular creator clause depends on drafting and facts, so take legal advice. A practical step many brands take is to make the agreement's term cover the period they need protected, rather than adding a restriction that only starts once the agreement has ended.",
      },
      { type: "heading", text: "What to write down", id: "clause" },
      {
        type: "template",
        label: "Example structure only, not a standard clause or legal advice",
        text: "Exclusivity\n• Restricted: paid or gifted promotion of [named brands / products described as …]\n• Not restricted: [organic mentions / retailer content / the creator's own products / existing agreements listed in Schedule …]\n• Platforms: [Instagram and YouTube / all]\n• Markets: [audiences in India / specific states / all]\n• Period: from [signing / first post] to [date], within the term of this agreement\n• Fee: ₹[amount], separate from content and usage fees\n• Disputes about whether a brand is a competitor: [process and timeline]",
      },
      {
        type: "paragraph",
        text: "This structure only shows which points to decide; it isn't a clause to copy. The wider agreement is covered in influencer marketing contracts. Creators negotiating the same terms can read creator exclusivity.",
        links: [
          { text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract" },
          { text: "creator exclusivity", href: "/blog/creator-exclusivity" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Asking for category exclusivity by default on every deal",
          "Defining the category so loosely that neither side knows what's restricted",
          "Exclusivity that ends before your ads through the creator's handle stop running",
          "Not asking about the creator's existing deals before signing",
          "Bundling exclusivity into the fee so you can't see what it costs",
          "Restrictions that continue after the agreement ends instead of a term that covers the period you need",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Exclusivity is insurance against competitor content undermining a specific campaign. Buy it when that risk is real, define it narrowly enough that it can be applied, match it to the period you actually need, pay for it as its own line, and keep it inside the agreement's term. Anything broader costs more and narrows the creators willing to work with you.",
      },
    ],
    faqs: [
      {
        question: "What is influencer exclusivity?",
        answer:
          "An agreed restriction on a creator promoting competing brands for a period. It can cover named competitors, a product category, a broad category or all sponsorships, and can be limited to specific platforms and markets.",
      },
      {
        question: "Should brands always ask for exclusivity?",
        answer:
          "No. It's worth paying for during launches, when ads run through the creator's identity, and in ambassador programmes. For single posts in crowded categories, a short competitor gap before and after your post is often enough.",
      },
      {
        question: "How long should influencer exclusivity last?",
        answer:
          "As long as the period you actually need protected: the posting window, the campaign, or the time your ads run through the creator's handle. Longer and broader restrictions cost more and are harder to justify.",
      },
      {
        question: "How much does influencer exclusivity cost?",
        answer:
          "There's no universal rate. The cost depends on how broad the restriction is, how long it lasts, how much of the creator's income comes from that category, their demand, and the platforms and markets covered. Ask for it as a separate line item and compare it with a narrower option.",
      },
      {
        question: "Is a post-campaign exclusivity clause enforceable in India?",
        answer:
          "It depends on drafting and facts, so take legal advice. Section 27 of the Indian Contract Act voids agreements in restraint of trade, and courts have been more cautious about restrictions that continue after an agreement ends than those within its term.",
      },
    ],
  },
];
