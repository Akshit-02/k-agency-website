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
];
