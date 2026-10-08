import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

const EXEC_PUBLISHED = "2026-10-08";
const EXEC_REVIEWED = "October 2026";

/**
 * Creator operations, execution layer (1230–1249). Eight new pages; twelve topics were consolidated into these or
 * into existing owners (timeline, campaign management, dashboard, operations). See
 * docs/campaign-execution-1230-1249-audit.md for every decision.
 */
export const operationsExecutionPosts: BlogPost[] = [
  {
    slug: "influencer-content-approval",
    category: "Campaign Strategy",
    title: "Creator Content Approval Process: A Step-by-Step Workflow for Brands",
    seoTitle: "Influencer Content Approval Process: A Faster Workflow",
    excerpt:
      "How brands collect, review and approve creator content without slowing campaigns: the submission setup, a review sequence, who approves what, turnaround times, parallel vs sequential reviews, approval records and a workflow you can copy.",
    metaDescription:
      "A step-by-step influencer content approval process: collecting drafts, review order, who approves what, turnaround times, approval records and faster workflows.",
    author: AUTHOR,
    publishedAt: EXEC_PUBLISHED,
    lastReviewed: EXEC_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer content approval process", "creator content review", "influencer campaign approvals", "creator content submission", "influencer approval workflow"],
    related: ["influencer-revision-policy", "influencer-content-quality-check", "influencer-feedback"],
    hero: {
      src: "/blog/brand-guides/influencer-content-approval.svg",
      alt: "Content approval workflow: draft submitted, checked, reviewed by one owner, specialist review if needed, approved in writing",
    },
    body: [
      {
        type: "paragraph",
        text: "Approval is where creator campaigns most often lose time. Drafts arrive by WhatsApp, email and Google Drive. Three people comment at different times. Legal sees the draft on the day it was meant to go live. The creator, who delivered on schedule, waits a week and then gets feedback that contradicts the brief. None of this improves the content; it just delays it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A good creator content approval process has five parts: one submission route with clear file and naming rules; a quick completeness check when drafts arrive; a single named reviewer who consolidates comments from everyone else within an agreed time; specialist review (legal, medical, compliance) only where the content needs it, scheduled in advance; and a written final approval naming the exact version that can go live. Agree the number of revision rounds and turnaround times before production, and track every draft's status so nothing waits unnoticed.",
      },
      { type: "heading", text: "The approval workflow", id: "workflow" },
      {
        type: "table",
        headers: ["Step", "What happens", "Owner", "Typical time limit"],
        rows: [
          ["1. Submit", "Creator uploads draft to the agreed place, named consistently, with caption and links", "Creator", "By the draft date"],
          ["2. Log and check", "Draft logged; quick check that it's complete (right format, length, caption, disclosure placeholder)", "Campaign manager", "Same or next working day"],
          ["3. Review", "Brief, claims, product, brand safety and disclosure reviewed; comments consolidated", "Named reviewer", "Within agreed window (e.g. 2 working days)"],
          ["4. Specialist review", "Legal, medical or compliance check if the category needs it", "Specialist", "Scheduled in advance"],
          ["5. Feedback", "One consolidated message: must-change vs suggestions; round number", "Reviewer", "Same day as review ends"],
          ["6. Revise", "Creator revises within agreed time", "Creator", "Agreed (e.g. 2–3 days)"],
          ["7. Approve", "Written approval naming the version; go-live details confirmed", "Reviewer", "On final review"],
          ["8. Go-live check", "Live post checked against the approved version and disclosure rules", "Campaign manager", "Within a day of posting"],
        ],
      },
      { type: "heading", text: "Step 1: Set up content submission properly", id: "submission" },
      {
        type: "paragraph",
        text: "Most approval delays start with messy submissions. Before production, tell creators exactly how to submit:",
      },
      {
        type: "template",
        label: "Submission instructions (send with the brief)",
        text: "WHERE: [shared folder link / portal / reply to brief email]: one place only\nWHAT: final-quality draft (video file, not a screen recording), caption text, links/codes, tags, music used\nFORMAT: [vertical 9:16, max length], subtitles if planned\nNAMING: [brand]_[creatorhandle]_[deliverable]_v1\nWHEN: by [date and time]\nNOTE: if you'll be late, tell [name] as early as possible",
      },
      {
        type: "list",
        items: [
          "Ask for files, not links to posts made private; screen recordings lose quality and hide issues.",
          "Ask for the caption with the video; disclosure, links and tags live there.",
          "Keep raw footage requests separate and agreed in advance; they're often a paid extra.",
          "Avoid WhatsApp for submissions where possible; compression and scattered threads make review harder.",
        ],
      },
      { type: "heading", text: "Step 2: Decide who approves what", id: "who-approves" },
      {
        type: "table",
        headers: ["Content element", "Reviewer"],
        rows: [
          ["Brief adherence, mandatory points, CTA", "Campaign owner"],
          ["Product shown correctly", "Campaign owner (product team if technical)"],
          ["Claims (health, finance, food, children)", "Legal or medical reviewer"],
          ["Disclosure", "Campaign owner, against ASCI rules"],
          ["Brand safety", "Campaign owner; escalate if unsure"],
          ["Creative style, tone, editing", "Creator (not reviewed unless it conflicts with the brief)"],
        ],
      },
      {
        type: "paragraph",
        text: "One person collects all comments and sends them to the creator. If the brand team disagrees internally, it resolves that before the creator hears anything. Influencer marketing governance covers wider approval rules inside the brand.",
        links: [{ text: "Influencer marketing governance", href: "/blog/influencer-marketing-governance" }],
      },
      { type: "heading", text: "Step 3: Review in a consistent order", id: "review" },
      {
        type: "template",
        label: "Review sequence",
        text: "1. Completeness: right deliverable, format, length, caption included?\n2. Compliance: disclosure present and placed correctly; claims match approved wording\n3. Brief: key message and mandatory points covered; nothing prohibited\n4. Product: shown correctly, safely, label visible if needed\n5. Links and CTA: correct link, code, tag, handle\n6. Brand safety: nothing in frame, audio or caption that creates risk\n7. Only then: optional suggestions",
      },
      {
        type: "paragraph",
        text: "Reviewing compliance and the brief first means must-fix issues are never lost under creative suggestions. Influencer content quality check has the full checklist; influencer feedback covers how to write the comments.",
        links: [
          { text: "Influencer content quality check", href: "/blog/influencer-content-quality-check" },
          { text: "influencer feedback", href: "/blog/influencer-feedback" },
        ],
      },
      { type: "heading", text: "Step 4: Parallel or sequential review?", id: "parallel" },
      {
        type: "table",
        headers: ["Approach", "How", "Use when"],
        rows: [
          ["Sequential", "Campaign owner → legal → brand head", "Regulated categories; high-risk claims"],
          ["Parallel", "All reviewers get the draft at once; reviewer consolidates by a deadline", "Most campaigns; faster"],
          ["Pre-approved concept", "Creator shares a short outline before filming; only compliance checked on the final", "Complex products; tight timelines; first collaborations"],
          ["Delegated approval", "Campaign owner approves alone within defined limits", "Repeat creators; low-risk content; always-on programmes"],
        ],
      },
      { type: "heading", text: "Step 5: Record approvals properly", id: "records" },
      {
        type: "list",
        items: [
          "Approve in writing (email or the tracker), not by a thumbs-up emoji in a chat.",
          "Name the exact version approved (file name or version number).",
          "Record the approver and date.",
          "Keep the approved file with the campaign documents.",
          "After posting, compare the live post with the approved version and screenshot it.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer campaign documentation covers where approval records belong.",
        links: [{ text: "Influencer campaign documentation", href: "/blog/influencer-campaign-documentation" }],
      },
      { type: "heading", text: "How to make approvals faster", id: "faster" },
      {
        type: "list",
        items: [
          "Freeze the brief before production. Most slow approvals are really brief changes.",
          "Agree turnaround times and book reviewers' time in advance, especially legal.",
          "Use a concept stage for complex or regulated content.",
          "Limit reviewers; more people means more opinions, not more quality.",
          "Track drafts by status, so waiting items are visible.",
          "Delegate approval for repeat creators and low-risk content.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer campaign delays covers diagnosing where approvals get stuck.",
        links: [{ text: "Influencer campaign delays", href: "/blog/influencer-campaign-delays" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a supplements brand's drafts used to go to the brand manager, then the product team, then legal, one after another, taking up to ten days. It switches to a short concept stage before filming (legal checks claims in the outline), parallel review of final drafts with a two-day deadline and a single reviewer who consolidates comments. Final approvals now usually take two or three days, and creators rarely need a second revision because claims were settled before filming.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Several submission channels for the same campaign.",
          "Reviewers commenting directly to creators, separately.",
          "Legal brought in at the last minute.",
          "Approvals given verbally or by emoji.",
          "No check of the live post against the approved version.",
          "New requirements introduced during review.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A fast, reliable approval process is mostly decided before drafts arrive: one submission route, a named reviewer, a fixed review order, specialist reviews scheduled in advance, agreed rounds and written approvals. Then track every draft so nothing waits unseen. For rules on how many changes creators should be asked to make, see influencer revision policy.",
        links: [{ text: "influencer revision policy", href: "/blog/influencer-revision-policy" }],
      },
    ],
    faqs: [
      {
        question: "What is an influencer content approval process?",
        answer:
          "The steps between a creator submitting a draft and the content going live: submission, completeness check, consolidated review, specialist review where needed, feedback, revision, written approval of a specific version and a check of the live post.",
      },
      {
        question: "How long should influencer content approval take?",
        answer:
          "It's agreed per campaign. Many brands commit to feedback within about two working days per round. Regulated content needs extra time for specialist review, which should be scheduled in advance.",
      },
      {
        question: "How can brands approve influencer content faster?",
        answer:
          "Freeze the brief before production, use one submission route and one consolidating reviewer, review in parallel, schedule legal review early, use a concept stage for complex content and delegate approvals for low-risk, repeat work.",
      },
      {
        question: "How should creators submit content for review?",
        answer:
          "Through one agreed place, as full-quality files with the caption, links and tags, named consistently, by the agreed date. Avoid scattered chat submissions and screen recordings.",
      },
    ],
  },
  {
    slug: "influencer-revision-policy",
    category: "Campaign Strategy",
    title: "Creator Revision Policy: How Brands Can Set Clear Rules for Content Changes",
    seoTitle: "Influencer Revision Policy: Rules for Content Changes",
    excerpt:
      "How to set fair, clear rules for creator content revisions: what counts as a revision vs a reshoot vs a scope change, how many rounds to agree, turnaround times, when extra changes are paid, handling revisions without friction and a policy you can copy.",
    metaDescription:
      "How brands should set an influencer revision policy: rounds, what counts as a revision, reshoots, scope changes, turnaround, extra fees and a template.",
    author: AUTHOR,
    publishedAt: EXEC_PUBLISHED,
    lastReviewed: EXEC_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer revision policy", "influencer content revisions", "creator revision rounds", "influencer reshoot", "content changes influencer"],
    related: ["influencer-content-approval", "influencer-feedback", "influencer-payment-terms"],
    hero: {
      src: "/blog/brand-guides/influencer-revision-policy.svg",
      alt: "Revision policy separating edits, re-records, reshoots and scope changes, with agreed rounds and turnaround",
    },
    body: [
      {
        type: "paragraph",
        text: "'Just one more small change' is how a two-round revision agreement becomes five rounds and a reshoot. Most revision disputes aren't about bad faith; they come from never defining what a revision is, how many are included and what happens when the brand changes its mind. A short, written policy fixes that before anyone picks up a camera.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator revision policy sets out how many rounds of changes are included (two is common for paid work), what counts as a revision (changes to bring content in line with the agreed brief, claims or disclosure), what doesn't (new requirements, a different concept or a reshoot caused by brand changes), turnaround times on both sides, and what happens beyond the included rounds (extra fee or agreed time). Put it in the agreement or brief, and apply it consistently.",
      },
      { type: "heading", text: "Revision, reshoot or scope change?", id: "definitions" },
      {
        type: "table",
        headers: ["Type", "Example", "Included?"],
        rows: [
          ["Edit", "Change caption wording, fix a link, adjust on-screen text, trim a section", "Yes, within rounds"],
          ["Re-record a line", "Correct a claim to approved wording; fix mispronounced product name", "Usually yes, within rounds"],
          ["Compliance fix", "Add or move disclosure; remove unapproved claim", "Yes, always (doesn't count against rounds if the brief was clear)"],
          ["Reshoot due to creator error", "Product shown wrongly; brief mandatory point missed", "Yes, within reason"],
          ["Reshoot due to brand change", "New messaging, new product, different concept after filming", "No: scope change, discuss fee and time"],
          ["Taste-based change", "'Try a different background', 'more energy'", "Optional; creator may decline"],
          ["New deliverable", "An extra Story or cut-down version", "No: additional work"],
        ],
      },
      {
        type: "paragraph",
        text: "The key distinction is whose change it is. Changes that bring content back to what was agreed are revisions. Changes to what was agreed are scope changes.",
      },
      { type: "heading", text: "How many rounds?", id: "rounds" },
      {
        type: "list",
        items: [
          "Two rounds of revisions is a common default for paid creator content.",
          "Simple gifted or seeding posts often have none: the brand checks only compliance.",
          "Complex or regulated content may warrant a concept round before filming plus two rounds after.",
          "UGC for ads may have more structured rounds, priced into the fee.",
        ],
      },
      {
        type: "paragraph",
        text: "Whatever you choose, agree it in writing before production, alongside fees and usage. Influencer payment terms and influencer marketing contract cover where it sits in the agreement.",
        links: [
          { text: "Influencer payment terms", href: "/blog/influencer-payment-terms" },
          { text: "influencer marketing contract", href: "/blog/influencer-marketing-contract" },
        ],
      },
      { type: "heading", text: "Turnaround times, both ways", id: "turnaround" },
      {
        type: "table",
        headers: ["Who", "Commitment", "Example"],
        rows: [
          ["Brand", "Consolidated feedback after each submission", "Within 2 working days"],
          ["Creator", "Revised version after feedback", "Within 2–3 working days"],
          ["Brand", "Final approval after last revision", "Within 1 working day"],
        ],
      },
      {
        type: "paragraph",
        text: "If the brand misses its turnaround, the creator's deadlines should move accordingly. A policy that only binds creators isn't fair and won't be respected.",
      },
      { type: "heading", text: "A revision policy you can copy", id: "template" },
      {
        type: "template",
        label: "Creator revision policy (adapt and include in brief or agreement)",
        text: "INCLUDED: [2] rounds of revisions per deliverable, to align content with the agreed brief, approved claims and disclosure requirements.\n\nA REVISION IS: edits to captions, text, links or cuts; re-recording lines to correct claims or product details; fixing missed mandatory points.\n\nNOT A REVISION: new messages or products added after filming; a different concept; additional deliverables. These are scope changes and will be agreed separately (fee and/or time).\n\nCOMPLIANCE: disclosure and claims corrections are always required and don't count against rounds where the brief was clear.\n\nTIMING: Brand feedback within [2] working days of each submission; creator revisions within [3] working days of feedback; if brand feedback is late, creator deadlines move by the same amount.\n\nFEEDBACK: one consolidated message per round from [reviewer name], separating must-change items from optional suggestions.\n\nEXTRA ROUNDS: beyond the included rounds, by agreement at [₹ / % of fee] or as agreed.",
      },
      { type: "heading", text: "Handling revisions without friction", id: "friction" },
      {
        type: "list",
        items: [
          "Freeze the brief before filming; most extra rounds come from late changes.",
          "Use a concept or outline stage for complex content, so direction is agreed before production.",
          "Send consolidated, specific feedback with timestamps; see influencer feedback.",
          "Label suggestions as optional and respect a creator's choice to keep their version.",
          "If you need a scope change, say so plainly and offer fair compensation or time.",
          "Thank creators for quick turnarounds; it's noticed.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer feedback covers writing the comments themselves, and influencer content approval covers the workflow revisions sit inside.",
        links: [
          { text: "Influencer feedback", href: "/blog/influencer-feedback" },
          { text: "influencer content approval", href: "/blog/influencer-content-approval" },
        ],
      },
      { type: "heading", text: "When revisions keep going wrong", id: "patterns" },
      {
        type: "table",
        headers: ["Pattern", "Likely cause", "Fix"],
        rows: [
          ["Many creators miss the same point", "Brief unclear", "Rewrite that part of the brief"],
          ["Every draft needs claims fixes", "Approved wording not shared clearly", "Give exact wording; concept stage"],
          ["Third and fourth rounds common", "Several reviewers; late brief changes", "One reviewer; freeze brief"],
          ["One creator always needs reshoots", "Fit or reliability issue", "Note on scorecard; reconsider for future"],
        ],
      },
      { type: "heading", text: "The creator's view", id: "creator-view" },
      {
        type: "paragraph",
        text: "Creators often publish their own revision terms, and many will push back on unlimited changes. That's reasonable: their time and creative voice are what you're paying for. Creator-side guidance on this, including how creators protect creative control, is in brand content approval and revisions for creators.",
        links: [{ text: "brand content approval and revisions for creators", href: "/blog/creator-brand-revisions" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "No defined number of rounds.",
          "Calling scope changes 'revisions'.",
          "Turnaround rules that apply only to creators.",
          "Taste-based changes presented as requirements.",
          "Feedback from multiple people each counting as a round.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A clear revision policy defines what's included, separates revisions from scope changes, sets turnaround times for both sides and prices extra work fairly. Agree it before production, apply it consistently and most revision friction disappears. To make sure revised content meets the standard before it goes live, see influencer content quality check.",
        links: [{ text: "influencer content quality check", href: "/blog/influencer-content-quality-check" }],
      },
    ],
    faqs: [
      {
        question: "How many revisions should an influencer do?",
        answer:
          "It's agreed per collaboration. Two rounds is a common default for paid content; simple gifted posts often have none beyond compliance checks.",
      },
      {
        question: "What counts as a revision in influencer marketing?",
        answer:
          "Changes that bring content in line with the agreed brief, approved claims or disclosure requirements. New messages, a different concept or reshoots caused by brand changes are scope changes, not revisions.",
      },
      {
        question: "Should brands pay for extra influencer revisions?",
        answer:
          "Beyond the included rounds, or when the brand changes requirements after filming, it's fair to agree an extra fee or more time. Compliance fixes should always be made.",
      },
    ],
  },
  {
    slug: "influencer-content-quality-check",
    category: "Campaign Strategy",
    title: "Influencer Campaign Quality Control: How Brands Can Check Creator Deliverables",
    seoTitle: "Influencer Content Quality Check: Deliverables Checklist",
    excerpt:
      "A two-stage quality-control system for creator content: a pre-approval quality checklist (brief, claims, product, disclosure, brand safety, technical quality) and a go-live deliverables checklist (links, tags, timing, labels), plus who checks what.",
    metaDescription:
      "How brands check creator deliverables: a pre-approval content quality checklist and a go-live checklist covering disclosure, claims, links and tags.",
    author: AUTHOR,
    publishedAt: EXEC_PUBLISHED,
    lastReviewed: EXEC_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer campaign quality control", "creator content quality checklist", "influencer deliverables checklist", "check influencer content before publishing", "influencer go-live checklist"],
    related: ["influencer-content-approval", "creator-non-compliance", "influencer-marketing-compliance"],
    hero: {
      src: "/blog/brand-guides/influencer-content-quality-check.svg",
      alt: "Two-stage quality control: a pre-approval content check, then a go-live check of the published post",
    },
    body: [
      {
        type: "paragraph",
        text: "Quality control in creator campaigns isn't about making content look like a TV ad. It's about catching the things that cause real problems: an unapproved health claim, a missing disclosure, a wrong discount code, a product shown upside down, a link to an out-of-stock page. Those mistakes are easy to miss when reviewers focus on creative taste, and expensive once content is live.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer quality control works best in two stages. Before approval, check the draft against the brief, approved claims, product accuracy, disclosure, brand safety and basic technical quality. After the creator posts, check the live content against the approved version: disclosure label and placement, caption, links, codes, tags, partnership label, timing and any deliverables such as Stories. Use the same checklist for every creator, record the result and fix issues quickly and respectfully.",
      },
      { type: "heading", text: "Two stages of quality control", id: "two-stages" },
      {
        type: "table",
        headers: ["Stage", "When", "Focus", "Owner"],
        rows: [
          ["Pre-approval check", "On each draft", "Content: brief, claims, product, disclosure, safety, technical basics", "Reviewer"],
          ["Go-live check", "Within a day of posting", "Delivery: live post matches approval; links, codes, tags, labels, timing", "Campaign manager"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep creative judgement out of quality control. Style, tone and editing are the creator's craft; QC is about accuracy, compliance and delivery. Influencer content approval covers where these checks sit in the workflow.",
        links: [{ text: "Influencer content approval", href: "/blog/influencer-content-approval" }],
      },
      { type: "heading", text: "Pre-approval content quality checklist", id: "content-checklist" },
      {
        type: "template",
        label: "Content quality checklist (before approval)",
        text: "BRIEF\n□ Key message comes through clearly\n□ Mandatory points covered\n□ Nothing from the 'avoid' list\n□ CTA present and correct\n\nCLAIMS\n□ Only approved claims; exact wording where required\n□ No exaggerated results, guarantees or comparisons not cleared\n□ Before/after or results content represented honestly\n\nPRODUCT\n□ Correct product, variant, shade or size\n□ Shown and used correctly and safely\n□ Label or branding visible where needed\n□ Price or offer stated correctly (if mentioned)\n\nDISCLOSURE\n□ Disclosure in the content where required and planned in the caption\n□ Platform paid-partnership label will be applied\n\nBRAND SAFETY\n□ Nothing in frame, audio or caption that creates risk\n□ No unlicensed music for branded use (where relevant)\n\nTECHNICAL\n□ Correct format, aspect ratio and length\n□ Audio clear; subtitles accurate if used\n□ Readable on-screen text",
      },
      { type: "heading", text: "Go-live deliverables checklist", id: "go-live-checklist" },
      {
        type: "template",
        label: "Deliverables checklist (after posting)",
        text: "□ Posted on the agreed platform, format and date/time window\n□ Matches the approved version (no unapproved edits)\n□ Disclosure label upfront in the caption (within the first lines)\n□ Platform paid-partnership label applied\n□ Correct link (link sticker, bio link or description) and it works\n□ Discount code correct and working\n□ Brand handle tagged; hashtags as agreed\n□ Stories / extra deliverables posted as agreed\n□ Partnership ad permission granted (if agreed)\n□ Comments: no immediate issues needing response\n□ Screenshot saved with date",
      },
      { type: "heading", text: "Disclosure: what to check", id: "disclosure" },
      {
        type: "paragraph",
        text: "ASCI's influencer guidelines set out specific disclosure expectations: a clear label (such as 'Ad', 'Collaboration' or 'Partnership') placed upfront, within the first two lines of the caption without needing to tap 'more'; a label superimposed on the content where there's no caption, such as Stories; and, for videos, a label shown for a minimum duration depending on the video's length. Check both the caption and the content itself, and check that the platform's paid-partnership tool has been used.",
        links: [{ text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines }],
      },
      {
        type: "paragraph",
        text: "Influencer marketing compliance covers disclosure and claims in more depth. This is general guidance, not legal advice.",
        links: [{ text: "Influencer marketing compliance", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Quality checks by format", id: "by-format" },
      {
        type: "table",
        headers: ["Format", "Extra checks"],
        rows: [
          ["Instagram Reels", "Disclosure on screen and in caption; product visible early; cover image; partnership label"],
          ["Stories", "Superimposed disclosure on each frame; link sticker works; frames posted in order"],
          ["YouTube integration", "Paid promotion setting enabled; disclosure in video and description; link in description; timestamps if agreed"],
          ["Static or carousel", "Disclosure in first lines; product details accurate on all slides"],
          ["UGC for ads (not posted by creator)", "Technical specs for ad platforms; rights and usage confirmed"],
        ],
      },
      {
        type: "paragraph",
        text: "YouTube's paid promotion setting is how creators declare paid content on the platform.",
        links: [{ text: "paid promotion setting", href: SOURCES.youtubePaidPromotion }],
      },
      { type: "heading", text: "Quality control at scale", id: "scale" },
      {
        type: "list",
        items: [
          "Use the same checklist for every creator, built into the tracker as columns.",
          "Have a second person spot-check a sample of approvals in large campaigns.",
          "Run go-live checks on a schedule (for example, every morning during the live window).",
          "Log issues by type; recurring issues point to brief or process problems.",
          "For regional-language content, use a reviewer who understands the language for claims and disclosure.",
        ],
      },
      { type: "heading", text: "When something fails the check", id: "fails" },
      {
        type: "paragraph",
        text: "Before approval, send specific, consolidated feedback. After posting, contact the creator quickly and politely with the exact fix needed, such as adding the disclosure label or correcting a code. Most issues are honest mistakes and are fixed within hours. Persistent or serious problems are covered in creator non-compliance.",
        links: [{ text: "creator non-compliance", href: "/blog/creator-non-compliance" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: during a 20-creator festive campaign, morning go-live checks find three posts with disclosure only in the hashtags at the end of the caption, and one Story with an expired discount code. The campaign manager messages each creator within the hour with exact fixes; all four are corrected the same day. The issues are added to the brief template for the next campaign: disclosure placement guidance with an example, and codes confirmed in writing two days before go-live.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Quality control focused on creative taste instead of accuracy and compliance.",
          "No go-live check, so mistakes surface only when customers complain.",
          "Disclosure checked in the caption but not in the video or Story.",
          "Codes and links tested only after posting.",
          "Issues fixed but never fed back into the brief.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Quality control protects campaigns from preventable mistakes. Check drafts against the brief, claims, product, disclosure, safety and technical basics before approval; check live posts against the approved version, disclosure rules, links, codes and tags after posting. Keep checklists consistent, fix issues fast and feed patterns back into the brief.",
      },
    ],
    faqs: [
      {
        question: "What should brands check before influencer content goes live?",
        answer:
          "That the content follows the brief, uses only approved claims, shows the product correctly, includes proper disclosure, is brand-safe and technically sound, and that captions, links, codes, tags and the paid-partnership label are correct.",
      },
      {
        question: "What should an influencer deliverables checklist include?",
        answer:
          "Platform, format and timing; match to the approved version; disclosure upfront in the caption and in the content where needed; paid-partnership label; working links and codes; tags and hashtags; extra deliverables such as Stories; partnership ad permission if agreed; and a dated screenshot.",
      },
      {
        question: "Who should check influencer content quality?",
        answer:
          "A named reviewer checks drafts before approval, with specialist review for regulated claims. The campaign manager checks live posts against the approved version after posting.",
      },
    ],
  },
  {
    slug: "influencer-campaign-delays",
    category: "Campaign Strategy",
    title: "Influencer Campaign Delays: Common Causes and How Brands Can Prevent Them",
    seoTitle: "Influencer Campaign Delays: Causes, Bottlenecks and Fixes",
    excerpt:
      "Why creator campaigns run late (brand-side, creator-side and external causes), how to diagnose workflow bottlenecks with stage timings, a prevention plan, buffers that work and what to do when a go-live date is at risk.",
    metaDescription:
      "Why influencer campaigns get delayed and how to fix it: brand, creator and external causes, finding workflow bottlenecks, buffers and handling at-risk dates.",
    author: AUTHOR,
    publishedAt: EXEC_PUBLISHED,
    lastReviewed: EXEC_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer campaign delays", "creator campaign bottlenecks", "prevent influencer campaign delays", "influencer campaign deadlines", "campaign workflow problems"],
    related: ["influencer-marketing-campaign-timeline", "influencer-content-approval", "influencer-campaign-escalation"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-delays.svg",
      alt: "Campaign stages with time spent waiting highlighted, showing where bottlenecks such as approvals and product dispatch occur",
    },
    body: [
      {
        type: "paragraph",
        text: "When a creator campaign runs late, the first instinct is to blame creators. In practice, many delays start on the brand side: a contract stuck with legal, product shipped late, a brief that changed after filming, feedback that took a week. Creators do miss deadlines too, but a campaign that is late every time usually has a process problem, not a creator problem.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer campaign delays usually come from slow contracts and vendor setup, late product dispatch, briefs that change after production starts, slow or fragmented approvals, unclear deadlines, and occasionally creator availability or production problems. Prevent them by fixing the brand-side causes first: freeze briefs, start contracts and shipping early, agree feedback times, track every creator's stage and build realistic buffers. To find your own bottlenecks, measure how long each stage actually takes and where items wait.",
      },
      { type: "heading", text: "Common causes", id: "causes" },
      {
        type: "table",
        headers: ["Cause", "Who", "Prevention"],
        rows: [
          ["Shortlist approval slow", "Brand", "One decision-maker; ranked list with reserves"],
          ["Contract or legal review slow", "Brand", "Standard template; legal review only for non-standard terms"],
          ["Vendor setup started late", "Brand", "Start at agreement"],
          ["Product shipped late", "Brand", "Dispatch before brief; allow time to use the product"],
          ["Brief changed after filming", "Brand", "Freeze the brief before production"],
          ["Slow or conflicting feedback", "Brand", "One reviewer; agreed turnaround"],
          ["Legal review at the last minute", "Brand", "Schedule specialist review in advance; concept stage"],
          ["Unclear deadlines", "Both", "All dates in one written recap"],
          ["Creator overbooked", "Creator", "Confirm availability; avoid peak periods; build buffer"],
          ["Production problems (location, weather, illness)", "Creator", "Buffer; early warning; flexible go-live window"],
          ["Platform or account issues", "External", "Backup plan; flexible window"],
        ],
      },
      { type: "heading", text: "Finding your bottlenecks", id: "bottlenecks" },
      {
        type: "paragraph",
        text: "A bottleneck is the stage where work waits longest. To find it, record the date each creator enters and leaves each stage for a couple of campaigns, then compare:",
      },
      {
        type: "template",
        label: "Stage timing analysis",
        text: "For each creator, record dates for:\nShortlist approved → outreach sent → terms agreed → contract signed → product delivered → brief sent → draft submitted → feedback sent → final approved → live → invoice received → paid\n\nThen calculate, per stage:\n• Median days\n• Longest cases and why\n• Days spent WAITING (on brand, on creator, on third party)\n\nThe stage with the most waiting time is your bottleneck. Fix that first.",
      },
      {
        type: "paragraph",
        text: "Teams are often surprised: the longest wait is frequently 'draft submitted → feedback sent' or 'terms agreed → contract signed', both on the brand side. Influencer campaign tracker shows how to capture these dates as part of normal tracking.",
        links: [{ text: "Influencer campaign tracker", href: "/blog/influencer-campaign-tracker" }],
      },
      { type: "heading", text: "Typical bottlenecks and fixes", id: "fixes" },
      {
        type: "table",
        headers: ["Bottleneck", "Symptom", "Fix"],
        rows: [
          ["Approvals", "Drafts wait days with no feedback", "One reviewer; parallel review; agreed turnaround; delegated approval for low risk"],
          ["Legal", "Every draft waits for legal at the end", "Concept stage; pre-approved claims library; scheduled review slots"],
          ["Contracting", "Agreed creators wait for paperwork", "Standard template; e-signature; clear variable terms"],
          ["Logistics", "Creators can't start without product", "Ship earlier; confirm addresses at onboarding"],
          ["Brief changes", "Reshoots and extra rounds", "Freeze the brief; scope change process"],
          ["Single owner", "Everything waits when one person is away", "Backup owner; shared tracker"],
        ],
      },
      {
        type: "paragraph",
        text: "Influencer content approval covers faster approval workflows in detail.",
        links: [{ text: "Influencer content approval", href: "/blog/influencer-content-approval" }],
      },
      { type: "heading", text: "Build buffers that work", id: "buffers" },
      {
        type: "list",
        items: [
          "Set draft deadlines several days before go-live, enough for at least one revision round.",
          "Use a go-live window (for example three days) rather than one fixed day, unless the date matters, like a launch embargo.",
          "Keep one or two reserve creators for campaigns with fixed dates.",
          "Avoid booking creators for peak festival weeks without confirming their capacity.",
          "Plan backwards from the go-live date; influencer marketing campaign timeline shows how.",
        ],
      },
      {
        type: "paragraph",
        text: "Timelines and backward planning are covered in influencer marketing campaign timeline.",
        links: [{ text: "influencer marketing campaign timeline", href: "/blog/influencer-marketing-campaign-timeline" }],
      },
      { type: "heading", text: "When a go-live date is at risk", id: "at-risk" },
      {
        type: "list",
        items: [
          "Find out early: track drafts due within the next three days, not only overdue ones.",
          "Ask the creator what's happening before restating the contract.",
          "Decide what's flexible: date, format, or creator.",
          "If the date is fixed, consider a reserve creator or a simpler deliverable.",
          "Escalate internally if a brand-side step is the cause.",
          "Record the cause, so the process can be fixed.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer campaign escalation covers when and how to escalate issues.",
        links: [{ text: "Influencer campaign escalation", href: "/blog/influencer-campaign-escalation" }],
      },
      { type: "heading", text: "Delays in Indian campaigns", id: "india" },
      {
        type: "list",
        items: [
          "Festival seasons compress creator calendars and courier networks at the same time; plan earlier.",
          "Delivery to tier 2 and tier 3 towns can take longer; ship first to those creators.",
          "Monsoon can affect outdoor shoots and deliveries in some regions.",
          "Marketplace sale dates are set by the marketplaces and may be announced at short notice; keep flexible windows.",
        ],
      },
      { type: "heading", text: "A pre-launch delay-risk check", id: "risk-check" },
      {
        type: "template",
        label: "Two weeks before go-live",
        text: "□ All agreements signed? (if not: who's blocking, by when)\n□ Vendor setup and POs done for every creator?\n□ All products delivered, or delivering at least several days before filming?\n□ Brief frozen and approved by everyone who needs to approve it?\n□ Legal or specialist reviewers booked for the review window?\n□ Draft deadlines leave room for at least one revision round?\n□ Reserve creators identified for fixed-date deliverables?\n□ Tracker flags set for due-soon and overdue items?\n□ Any creators with festival, travel or exam-season conflicts?",
      },
      {
        type: "paragraph",
        text: "Each 'no' is a likely delay. Fixing them two weeks out is far cheaper than discovering them on go-live day. Influencer campaign coordination covers running this across many creators.",
        links: [
          { text: "Influencer campaign coordination", href: "/blog/influencer-campaign-coordination" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming delays are the creator's fault without checking stage timings.",
          "Draft deadlines too close to go-live to allow revisions.",
          "No reserve creators for fixed-date launches.",
          "Fixing symptoms (chasing harder) instead of the bottleneck.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Most influencer campaign delays are predictable and many are brand-side. Measure where work waits, fix the biggest bottleneck first, build realistic buffers, track upcoming deadlines and act early when a date is at risk. Campaigns get faster when the process improves, not when creators are chased harder.",
      },
    ],
    faqs: [
      {
        question: "Why do influencer campaigns get delayed?",
        answer:
          "Common causes are slow contracts and vendor setup, late product shipping, briefs changing after production, slow or conflicting approvals, unclear deadlines and, sometimes, creator availability or production problems.",
      },
      {
        question: "How can brands find bottlenecks in their influencer campaigns?",
        answer:
          "Record when each creator enters and leaves each stage for a couple of campaigns, calculate median time and waiting time per stage, and fix the stage with the most waiting first.",
      },
      {
        question: "How can brands prevent influencer campaign delays?",
        answer:
          "Freeze briefs, start contracts, vendor setup and shipping early, agree feedback times, track every creator's stage, set draft deadlines with room for revisions and keep reserve creators for fixed-date campaigns.",
      },
    ],
  },
  {
    slug: "influencer-campaign-escalation",
    category: "Campaign Strategy",
    title: "Influencer Campaign Escalation: How Brands Should Handle Creator Issues Before They Grow",
    seoTitle: "Influencer Campaign Escalation: A Framework for Brands",
    excerpt:
      "A brand-side escalation framework for creator campaigns: severity levels, who handles what, response times, common issues (missed deadlines, wrong content, backlash, product problems, compliance) and how to escalate without damaging the relationship.",
    metaDescription:
      "How brands should escalate influencer campaign issues: severity levels, owners, response times, common scenarios and protecting creator relationships.",
    author: AUTHOR,
    publishedAt: EXEC_PUBLISHED,
    lastReviewed: EXEC_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer campaign escalation", "creator issue escalation", "influencer campaign problems", "handle influencer issues", "escalation framework influencer"],
    related: ["creator-non-compliance", "influencer-campaign-delays", "influencer-communication"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-escalation.svg",
      alt: "Escalation levels for creator campaign issues, from routine fixes to urgent brand-risk incidents, with owners and response times",
    },
    body: [
      {
        type: "paragraph",
        text: "Most creator campaign problems are small when they start: a draft a day late, a wrong code, a negative comment thread. They grow when nobody knows whose problem it is, when to involve someone senior, or how fast to act. An escalation framework answers those questions in advance, so the team reacts proportionately instead of either ignoring issues or panicking.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer campaign escalation framework sorts issues by severity, names who handles each level and how fast, and sets out when to involve senior people, legal or PR. Most issues (minor delays, small content fixes) are resolved directly between the campaign manager and the creator. Serious issues (missed launch dates, compliance breaches, public backlash, product safety concerns) go to named senior owners quickly. Always talk to the creator first, record what happened and fix the cause afterwards.",
      },
      { type: "heading", text: "Severity levels", id: "levels" },
      {
        type: "table",
        headers: ["Level", "Examples", "Owner", "Response"],
        rows: [
          ["1. Routine", "Draft a day late; small caption or link fix; minor question", "Campaign manager", "Same or next working day"],
          ["2. Significant", "Draft several days late with go-live at risk; repeated missed requirements; product not received", "Campaign manager + influencer lead", "Within a working day; agree a plan"],
          ["3. Serious", "Missed launch date; disclosure or claims breach in a live post; content not matching approval; contract dispute", "Influencer lead + legal or senior marketing", "Same day"],
          ["4. Urgent brand risk", "Public backlash; product safety concern; creator controversy; misleading claim spreading", "Senior marketing + PR + legal", "Immediately; agreed holding response"],
        ],
      },
      {
        type: "paragraph",
        text: "Define your own examples by category. A wrong claim in a skincare post may be level 3; the same mistake in a food post making a health claim may be level 4.",
      },
      { type: "heading", text: "Escalation principles", id: "principles" },
      {
        type: "list",
        items: [
          "Talk to the creator first, privately, unless the issue is urgent brand risk.",
          "Assume a mistake before bad faith.",
          "Escalate early: it's easier to stand down than to catch up.",
          "One owner at each level; others are informed, not all acting.",
          "Agree what to say externally before anyone posts publicly.",
          "Record the issue, actions and outcome.",
          "After resolution, fix the cause in the process.",
        ],
      },
      { type: "heading", text: "Common issues and first responses", id: "scenarios" },
      {
        type: "table",
        headers: ["Issue", "First response"],
        rows: [
          ["Creator misses draft deadline", "Ask what's happening; agree a new date; check go-live impact; see influencer campaign delays"],
          ["Live post missing disclosure", "Ask the creator to add it right away; check the platform label; record; see creator non-compliance"],
          ["Live post differs from approved version", "Ask for correction to the approved version; record"],
          ["Wrong discount code or broken link", "Ask creator to fix; check landing page and code on your side"],
          ["Negative comments about the product", "Brand responds to genuine product questions; creator not asked to delete critical comments"],
          ["Backlash against the creator unrelated to the brand", "Pause amplification; assess; agree with creator before any public action"],
          ["Product safety complaint in comments", "Escalate to level 4; product and legal involved; agreed response"],
          ["Creator unresponsive", "Try manager or alternate channel; set a deadline; prepare reserve"],
        ],
      },
      { type: "heading", text: "Escalating without damaging the relationship", id: "relationship" },
      {
        type: "list",
        items: [
          "Be specific and factual: what's wrong, what's needed, by when.",
          "Avoid accusatory language; most problems are honest mistakes.",
          "Acknowledge brand-side causes openly (late product, late feedback).",
          "Keep escalation internal where possible; the creator should hear one consistent voice.",
          "Once resolved, say thank you and move on.",
        ],
      },
      {
        type: "template",
        label: "First message for a level 2–3 issue",
        text: "Hi [name], flagging something on [deliverable]: [specific issue, e.g. 'the live Reel doesn't have the Ad label in the first lines of the caption']. Could you [specific fix] by [time]? This is needed because [reason: ASCI guidelines / brief / launch timing]. Thanks for sorting it quickly, and shout if anything's unclear.",
      },
      { type: "heading", text: "Incident log", id: "log" },
      {
        type: "template",
        label: "Incident log fields",
        text: "Date · Campaign · Creator · Issue · Level · Owner · Actions taken (with times) · Resolution · Root cause (brand / creator / external) · Process change · Closed date",
      },
      {
        type: "paragraph",
        text: "Review the log monthly. Repeated causes point to process fixes; repeated creators point to a conversation or a different role in future. Agencies running creator campaigns use a similar log; creator campaign escalation describes the agency-side process.",
        links: [{ text: "creator campaign escalation", href: "/blog/creator-campaign-escalation" }],
      },
      { type: "heading", text: "Prepare before the campaign", id: "prepare" },
      {
        type: "list",
        items: [
          "Share an escalation contact with creators at kickoff.",
          "Name level 3 and 4 owners inside the brand and their backups.",
          "Prepare a holding statement template for public issues.",
          "Agree with creators how negative comments will be handled.",
          "Keep reserve creators for fixed-date campaigns.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer campaign kickoff covers sharing escalation contacts, and influencer brand safety covers wider reputational risk. A pre-launch risk register, covered in influencer campaign risk management, makes these triggers easier to agree.",
        links: [
          { text: "influencer campaign risk management", href: "/blog/influencer-campaign-risk-management" },
          { text: "Influencer campaign kickoff", href: "/blog/influencer-campaign-kickoff" },
          { text: "influencer brand safety", href: "/blog/influencer-marketing-brand-safety" },
        ],
      },
      { type: "heading", text: "Escalation in Indian campaigns", id: "india" },
      {
        type: "list",
        items: [
          "Agree in advance who decides on public responses in regional languages, and who checks the wording.",
          "For managed creators, include the manager in level 2 and above.",
          "Festival and sale periods compress timelines; lower the threshold for escalating go-live risks during them.",
          "For regulated categories (health, finance, food claims), treat any live claims issue as at least level 3.",
          "Keep a holding response ready in Hindi and English, and in the languages of your main regional campaigns.",
        ],
      },
      {
        type: "paragraph",
        text: "Regional influencer marketing in India covers wider language planning.",
        links: [
          { text: "Regional influencer marketing in India", href: "/blog/regional-influencer-marketing-india" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Escalating everything to senior people, so nothing is prioritised.",
          "Escalating nothing until a launch is missed.",
          "Several brand team members contacting the creator at once.",
          "Public responses before facts are clear.",
          "No record, so the same issue repeats next campaign.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A clear escalation framework keeps small creator issues small and gets serious ones to the right people fast. Define severity levels with examples, name owners and response times, talk to creators first, record everything and fix causes afterwards. When the issue is a creator not meeting agreed requirements, see creator non-compliance. When the issue is a creator's public controversy rather than a campaign problem, see influencer controversy response.",
        links: [{ text: "creator non-compliance", href: "/blog/creator-non-compliance" }, { text: "influencer controversy response", href: "/blog/influencer-controversy-response" }],
      },
    ],
    faqs: [
      {
        question: "What is an influencer campaign escalation process?",
        answer:
          "A framework that sorts campaign issues by severity, names who handles each level and how quickly, and defines when to involve senior marketing, legal or PR.",
      },
      {
        question: "When should a brand escalate an influencer issue?",
        answer:
          "When a go-live date is at risk, requirements are repeatedly missed, a live post breaches disclosure or claims rules, there's a contract dispute, or there's public backlash or a product safety concern.",
      },
      {
        question: "Should brands ask influencers to delete negative comments?",
        answer:
          "Generally no. Respond to genuine product questions and concerns from the brand side. Asking creators to hide criticism can damage trust with their audience.",
      },
    ],
  },
  {
    slug: "creator-non-compliance",
    category: "Campaign Strategy",
    title: "Creator Non-Compliance: What Brands Should Do When Influencers Miss Campaign Requirements",
    seoTitle: "When Influencers Miss Requirements: A Brand's Response Guide",
    excerpt:
      "What brands should do when creators miss requirements (deadlines, disclosure, claims, deliverables, posting rules, exclusivity): separating mistakes from breaches, proportionate responses, what the agreement allows, documentation and preventing repeats.",
    metaDescription:
      "What brands should do when influencers miss requirements (deadlines, disclosure, claims, deliverables, exclusivity): proportionate responses and prevention.",
    author: AUTHOR,
    publishedAt: EXEC_PUBLISHED,
    lastReviewed: EXEC_REVIEWED,
    readingTime: "6 min read",
    tags: ["creator non-compliance", "influencer missed requirements", "influencer didn't follow brief", "influencer disclosure missing", "influencer breach of contract"],
    related: ["influencer-campaign-escalation", "influencer-content-quality-check", "influencer-marketing-contract"],
    hero: {
      src: "/blog/brand-guides/creator-non-compliance.svg",
      alt: "Responding to missed requirements: check the facts, talk to the creator, agree a fix, refer to the agreement and record the outcome",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator posts without the agreed disclosure. Another misses the launch date. A third adds a claim that legal never approved, or posts for a competitor during an exclusivity period. Each needs a response, but not the same one. Treating an honest mistake like a breach damages a relationship for no reason; ignoring a real breach leaves the brand exposed.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "When a creator misses campaign requirements, first confirm the facts against the agreement and approvals, then talk to the creator privately and ask for a specific fix by a specific time. Respond in proportion: most issues are mistakes fixed within hours. For compliance issues such as missing disclosure or unapproved claims, the fix is non-negotiable and fast. For serious or repeated breaches, refer to what the agreement says about corrections, payment and termination, involve legal where needed, and record everything. Then fix the cause, which is often an unclear brief or process.",
      },
      { type: "heading", text: "Types of non-compliance", id: "types" },
      {
        type: "table",
        headers: ["Requirement missed", "Typical cause", "Urgency"],
        rows: [
          ["Disclosure missing or hidden", "Habit, misunderstanding of placement", "High: fix immediately"],
          ["Unapproved or misleading claim", "Creator's own words; brief unclear", "High: fix or remove immediately"],
          ["Posted unapproved version", "Approval misunderstood; last-minute edit", "Medium–high"],
          ["Missed deadline or go-live", "Overbooking, production issue, brand delay", "Depends on date sensitivity"],
          ["Deliverable incomplete (e.g. Stories missing)", "Oversight", "Medium"],
          ["Wrong link, code or tag", "Copy error", "Medium: fix quickly"],
          ["Post removed or archived early", "Creator unaware of minimum duration", "Medium"],
          ["Exclusivity breach", "Misunderstood category or dates; deliberate", "High"],
          ["Partnership ad permission not granted", "Unfamiliar with the tool", "Low–medium"],
        ],
      },
      { type: "heading", text: "A proportionate response", id: "response" },
      {
        type: "template",
        label: "Response steps",
        text: "1. CHECK THE FACTS: What does the agreement and approved brief say? Was the requirement clearly communicated? Did anything on our side contribute?\n2. TALK TO THE CREATOR: Privately, specifically, politely. What's needed and by when.\n3. FIX: Most issues resolved here.\n4. IF NOT FIXED OR SERIOUS: Escalate internally; refer to the agreement (corrections, payment holds, termination, remedies).\n5. RECORD: Issue, communications, fix, outcome.\n6. LEARN: Brief, onboarding or contract change; note on creator scorecard if a pattern.",
      },
      {
        type: "paragraph",
        text: "Influencer campaign escalation covers who should be involved at each level.",
        links: [{ text: "Influencer campaign escalation", href: "/blog/influencer-campaign-escalation" }],
      },
      { type: "heading", text: "Disclosure and claims: why these are different", id: "compliance" },
      {
        type: "paragraph",
        text: "Missing disclosure and misleading claims aren't just campaign issues; they're advertising compliance issues for both creator and brand. ASCI's influencer guidelines require clear, upfront disclosure of material connections. Ask for an immediate fix: add the label in the right place, use the platform's paid-partnership tool, or edit out the claim. If the creator can't edit the content, agreeing to take it down and repost may be necessary. Don't let these wait for the next round of feedback.",
        links: [{ text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines }],
      },
      {
        type: "paragraph",
        text: "Influencer marketing compliance covers the rules in more detail. This is general guidance, not legal advice.",
        links: [{ text: "Influencer marketing compliance", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Payment and the agreement", id: "payment" },
      {
        type: "list",
        items: [
          "If payment is tied to delivery as agreed, it's reasonable to pay once the requirement is met, and to tell the creator that clearly.",
          "Don't withhold payment for issues outside the agreement or caused by the brand.",
          "For partial delivery, agree a fair adjustment rather than withholding everything.",
          "For serious breaches (deliberate exclusivity violation, refusal to correct a misleading claim), follow the agreement's remedies and involve legal.",
          "Keep the tone professional; most disputes are resolved by conversation.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing contract covers clauses that make these situations clearer, and influencer payment terms covers payment triggers. If the problems can't be fixed and you're considering ending the partnership, influencer campaign cancellation covers how to do it properly.",
        links: [
          { text: "influencer campaign cancellation", href: "/blog/influencer-campaign-cancellation" },
          { text: "Influencer marketing contract", href: "/blog/influencer-marketing-contract" },
          { text: "influencer payment terms", href: "/blog/influencer-payment-terms" },
        ],
      },
      { type: "heading", text: "Check the brand's side first", id: "brand-side" },
      {
        type: "paragraph",
        text: "Before treating something as creator non-compliance, check whether the requirement was actually clear. Was disclosure placement explained with an example? Was approved claim wording given? Was the deadline in writing? Did product arrive on time? Did feedback come late? A surprising share of 'non-compliance' turns out to be unclear instructions, and the right response is to fix the brief, not blame the creator.",
      },
      { type: "heading", text: "Message templates", id: "templates" },
      {
        type: "template",
        label: "Compliance fix (urgent)",
        text: "Hi [name], quick one on your [post]: [the 'Ad' label isn't in the first lines of the caption / the claim at 0:20 isn't one we're able to make]. Could you [add 'Ad' at the start of the caption and apply the paid-partnership label / edit or remove that section] today? It's required under ASCI guidelines and our agreement. Thanks, and sorry for the hassle.",
      },
      {
        type: "template",
        label: "Missed deliverable",
        text: "Hi [name], the [3 Stories] in our agreement for [date] haven't gone up yet. Is everything okay? Could you post them by [date/time], or let me know if something's stopping you and we'll work it out.",
      },
      { type: "heading", text: "Prevent repeats", id: "prevent" },
      {
        type: "list",
        items: [
          "Explain disclosure with an example at kickoff, especially for creators new to brand work.",
          "Give exact approved claim wording.",
          "Put all dates and minimum post duration in the written recap.",
          "Run go-live checks so issues are caught within hours.",
          "Add recurring issues to the brief template.",
          "Note patterns on creator scorecards; consider different roles for creators who repeatedly miss requirements.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer content quality check covers go-live checks, and creator performance scorecard covers recording reliability.",
        links: [
          { text: "Influencer content quality check", href: "/blog/influencer-content-quality-check" },
          { text: "creator performance scorecard", href: "/blog/creator-performance-scorecard" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating honest mistakes as breaches.",
          "Letting compliance issues wait.",
          "Withholding payment for brand-caused problems.",
          "Public criticism of creators.",
          "Not checking whether the brief was clear.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Respond to creator non-compliance proportionately: check the facts and your own side, talk privately, ask for specific fixes, act fast on disclosure and claims, use the agreement for serious breaches and record everything. Then improve the brief and process so the same issue doesn't happen again.",
      },
    ],
    faqs: [
      {
        question: "What should a brand do if an influencer doesn't follow the brief?",
        answer:
          "Check the agreement and approved brief, talk to the creator privately, ask for a specific fix by a specific time, and record it. Most issues are fixed quickly; serious or repeated breaches are handled under the agreement.",
      },
      {
        question: "What if an influencer posts without disclosure?",
        answer:
          "Ask them to add a clear disclosure label upfront in the caption, in the content where needed and via the platform's paid-partnership tool immediately. Disclosure is required under ASCI's guidelines.",
      },
      {
        question: "Can brands withhold payment if an influencer misses requirements?",
        answer:
          "Only as the agreement allows and in proportion. If payment is tied to delivery, paying once requirements are met is reasonable; withholding for brand-caused issues is not. Involve legal for serious disputes.",
      },
    ],
  },
  {
    slug: "influencer-campaign-tracker",
    category: "Campaign Strategy",
    title: "Influencer Campaign Status Tracking: How Brands Can Monitor Every Creator Partnership",
    seoTitle: "Influencer Campaign Tracker: Track Every Creator's Status",
    excerpt:
      "How to track every creator's status through a campaign: one row per creator per campaign, fixed statuses, the columns that matter, views for different people, update rules, what to flag and how the tracker feeds dashboards and reports.",
    metaDescription:
      "How brands track influencer campaign status: one row per creator, fixed statuses, key columns, views for each team, update rules and flags for at-risk items.",
    author: AUTHOR,
    publishedAt: EXEC_PUBLISHED,
    lastReviewed: EXEC_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer campaign tracker", "influencer campaign status tracking", "creator campaign tracker template", "track influencer campaigns", "influencer tracking spreadsheet"],
    related: ["influencer-marketing-dashboard", "influencer-campaign-coordination", "influencer-campaign-automation"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-tracker.svg",
      alt: "Campaign tracker with one row per creator, status columns from contracted to paid and flags for overdue items",
    },
    body: [
      {
        type: "paragraph",
        text: "'Where are we with the Pune creators?' If answering that means scrolling three WhatsApp groups and asking two colleagues, the campaign doesn't have a tracker; it has memory. A simple, disciplined tracker answers it in seconds, shows what's at risk before it's late, and becomes the source for dashboards, payments and reports.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Track influencer campaigns with one row per creator per campaign, a fixed list of statuses (from shortlisted through contracted, briefed, draft submitted, approved, live, insights received and paid), and columns for owner, key dates, deliverables, links and flags. Update statuses the same day something changes, review the tracker on a set rhythm, flag anything due in the next few days or overdue, and build views for different people from the same data.",
      },
      { type: "heading", text: "Statuses", id: "statuses" },
      {
        type: "template",
        label: "Status list (one meaning each)",
        text: "Shortlisted → Contacted → Negotiating → Contracted → Product sent → Briefed → Draft submitted → Changes requested → Approved → Live → Insights received → Invoice received → Paid → Closed\nSide statuses: On hold · Declined · Dropped (with reason)",
      },
      {
        type: "paragraph",
        text: "Each status should have one meaning everyone agrees on. 'In progress' isn't a status. Influencer campaign automation shows how status changes can trigger reminders and next steps.",
        links: [{ text: "Influencer campaign automation", href: "/blog/influencer-campaign-automation" }],
      },
      { type: "heading", text: "Columns that matter", id: "columns" },
      {
        type: "table",
        headers: ["Group", "Columns"],
        rows: [
          ["Identity", "Creator, platform, language, region, tier, manager"],
          ["Ownership", "Brand owner, reviewer"],
          ["Agreement", "Deliverables, fee, usage, exclusivity, agreement link"],
          ["Dates", "Product delivered, draft due, feedback due, go-live, insights due, payment due"],
          ["Status", "Current status, date entered status"],
          ["Content", "Draft link, approved version, live URL"],
          ["Tracking", "UTM link, discount code"],
          ["Results", "Views and engagements at day 7 and 30 (or link to report)"],
          ["Flags", "Overdue, due soon, issue, on hold reason"],
        ],
      },
      {
        type: "paragraph",
        text: "'Date entered status' is the column most teams skip and the most useful for finding bottlenecks later; influencer campaign delays explains why.",
        links: [{ text: "influencer campaign delays", href: "/blog/influencer-campaign-delays" }],
      },
      { type: "heading", text: "Views for different people", id: "views" },
      {
        type: "table",
        headers: ["Viewer", "View"],
        rows: [
          ["Campaign manager", "All creators by status, with flags and next dates"],
          ["Reviewer", "Drafts waiting for feedback, sorted by due date"],
          ["Brand lead", "Counts by status; at-risk creators; go-live calendar"],
          ["Finance", "Payments due, invoice status (no other columns needed)"],
          ["Logistics", "Product dispatch and delivery status"],
        ],
      },
      { type: "heading", text: "Update rules", id: "rules" },
      {
        type: "list",
        items: [
          "Update the status the same day something changes.",
          "One owner per row; they keep it current.",
          "Dates in one format; links rather than attachments.",
          "Notes are short and factual; long discussions belong elsewhere.",
          "Review the tracker on a set rhythm (daily during live windows, a few times a week otherwise).",
        ],
      },
      { type: "heading", text: "Flags to watch", id: "flags" },
      {
        type: "list",
        items: [
          "Drafts due in the next three days and not yet submitted.",
          "Drafts waiting for feedback longer than the agreed time.",
          "Approved content not live by the go-live date.",
          "Live posts without insights after the capture date.",
          "Payments due within a week with no invoice.",
          "Anything 'on hold' for more than a few days.",
        ],
      },
      { type: "heading", text: "From tracker to dashboard and reports", id: "dashboard" },
      {
        type: "paragraph",
        text: "The tracker is the operational record. Dashboards and reports should read from it rather than from copied numbers: counts by status, go-live progress, results per creator. Influencer marketing dashboard covers what to show in a dashboard, and creator payment tracking covers the finance view.",
        links: [
          { text: "Influencer marketing dashboard", href: "/blog/influencer-marketing-dashboard" },
          { text: "creator payment tracking", href: "/blog/creator-payment-tracking" },
        ],
      },
      { type: "heading", text: "Spreadsheet or software?", id: "tools" },
      {
        type: "paragraph",
        text: "A well-structured spreadsheet or database works for most brands running a few campaigns at a time. Dedicated campaign management software helps when many people need access, creators submit drafts through a portal, or you need automation built in. Either way, the statuses and update rules matter more than the tool. Influencer campaign management software compares the options.",
        links: [{ text: "Influencer campaign management software", href: "/blog/influencer-campaign-management-software" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a beauty brand runs 30 creators across Hindi, Tamil and Bengali for a launch. Its tracker has one row per creator, fixed statuses and a 'due in 3 days' flag. Each morning the campaign manager filters for flags: two drafts due tomorrow not yet submitted, one draft waiting three days for feedback, one Bengali creator's product still in transit. Each gets a specific action before lunch. Nothing reaches go-live day as a surprise.",
      },
      { type: "heading", text: "A tracker header row you can copy", id: "template" },
      {
        type: "template",
        label: "Campaign tracker columns",
        text: "Creator | Platform | Language | Region | Tier | Manager | Owner | Reviewer | Deliverables | Fee | Usage | Agreement link | Product delivered | Draft due | Feedback due | Go-live | Insights due | Payment due | Status | Date entered status | Draft link | Approved version | Live URL | UTM link | Code | Views D7 | Views D30 | Flag | Notes",
      },
      {
        type: "paragraph",
        text: "Start with these and remove what you don't use. Keep payment details (bank, tax documents) in finance's system and only the payment status here. Influencer campaign documentation covers where agreements, approvals and screenshots should live.",
        links: [
          { text: "Influencer campaign documentation", href: "/blog/influencer-campaign-documentation" },
        ],
      },
      { type: "heading", text: "Tracking across several campaigns", id: "multiple-campaigns" },
      {
        type: "list",
        items: [
          "Keep one tracker per campaign, or one table with a campaign column, but always one row per creator per campaign.",
          "Use the same statuses and column names everywhere so roll-up views work.",
          "Roll up counts by status across campaigns for a weekly operations review.",
          "Copy long-term essentials (results, reliability, rights) to the creator's CRM record when a campaign closes.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Free-text statuses that mean different things to different people.",
          "One row per creator across campaigns, mixing histories.",
          "Updating weekly instead of when things change.",
          "No 'date entered status', so waiting time is invisible.",
          "Sensitive payment data in the shared tracker.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good campaign tracker is simple: one row per creator per campaign, fixed statuses, the columns that drive action, same-day updates, flags for what's due or overdue and views for each team. It turns 'where are we?' into a filter, and it's the foundation for dashboards, payments and reports. For coordinating many creators at once, see influencer campaign coordination.",
        links: [{ text: "influencer campaign coordination", href: "/blog/influencer-campaign-coordination" }],
      },
    ],
    faqs: [
      {
        question: "How should brands track influencer campaign status?",
        answer:
          "With one row per creator per campaign, a fixed list of statuses, columns for owner, dates, deliverables, links and flags, same-day updates and a regular review of what's due or overdue.",
      },
      {
        question: "What columns should an influencer campaign tracker have?",
        answer:
          "Creator details, owner and reviewer, agreed deliverables and terms, key dates, current status and date entered, draft and live links, tracking links and codes, results at fixed capture days and flags.",
      },
      {
        question: "Is a spreadsheet enough to track influencer campaigns?",
        answer:
          "For many brands, yes, if statuses are fixed and someone owns it. Software helps when many people need access, creators submit through a portal or you need built-in automation.",
      },
    ],
  },
  {
    slug: "influencer-campaign-coordination",
    category: "Campaign Strategy",
    title: "Influencer Campaign Coordination: How Brands Can Manage Multiple Creators Efficiently",
    seoTitle: "How to Coordinate Multiple Influencers in One Campaign",
    excerpt:
      "How to coordinate many creators in one campaign: batching work into waves, group vs individual communication, staggered go-lives, managing regional and language groups, shared FAQs, logistics at scale and the team you need.",
    metaDescription:
      "How brands coordinate multiple influencers in one campaign: waves, batched briefings, staggered go-lives, regional groups, shared FAQs, logistics and team size.",
    author: AUTHOR,
    publishedAt: EXEC_PUBLISHED,
    lastReviewed: EXEC_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer campaign coordination", "manage multiple influencers", "coordinate creators campaign", "multi-creator campaign", "influencer campaign at scale"],
    related: ["influencer-campaign-tracker", "influencer-communication", "pan-india-influencer-marketing-campaign"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-coordination.svg",
      alt: "Many creators coordinated in waves, with shared briefings, a common FAQ, staggered go-lives and one tracker",
    },
    body: [
      {
        type: "paragraph",
        text: "Managing three creators is a series of conversations. Managing forty is a logistics operation: forty addresses, forty agreements, drafts arriving on different days, questions that ten creators ask in slightly different words, and a go-live calendar that needs to make sense to the audience as well as the team. Coordination is what makes scale manageable without turning creators into a queue.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Coordinate multiple creators by grouping them (by wave, language, region or deliverable type), running shared activities once (group briefings, a common FAQ, batch shipping) while keeping individual relationships personal, staggering go-lives deliberately, tracking everyone in one tracker with fixed statuses, and sizing the team to the number of creators. Standardise everything that can be standardised so time is left for the creators who need attention.",
      },
      { type: "heading", text: "Group creators sensibly", id: "groups" },
      {
        type: "table",
        headers: ["Grouping", "Why", "Example"],
        rows: [
          ["Waves", "Spread workload and go-lives", "Wave 1 launch week, wave 2 two weeks later"],
          ["Language", "Briefings, reviews and FAQs in the same language", "Hindi, Tamil, Bengali groups"],
          ["Region", "Logistics and local timing", "South India shipped first"],
          ["Deliverable type", "Different specs and reviews", "Reels creators vs YouTube integrations vs UGC"],
          ["Relationship", "Different level of guidance", "Repeat partners vs first-time creators"],
        ],
      },
      { type: "heading", text: "Do shared work once", id: "shared" },
      {
        type: "list",
        items: [
          "Group kickoff per wave or language, with a recording or written recap.",
          "One FAQ document, updated as questions arrive and shared with everyone.",
          "Batch shipping with tracking shared in one message.",
          "Standard submission instructions and naming.",
          "Batch reviews at set times each day, so feedback is consistent.",
        ],
      },
      {
        type: "paragraph",
        text: "Keep the relationship individual: personal confirmation messages, individual feedback, one-to-one calls for creators new to brand work. Influencer communication covers channels and ownership, and influencer campaign kickoff covers group sessions.",
        links: [
          { text: "Influencer communication", href: "/blog/influencer-communication" },
          { text: "influencer campaign kickoff", href: "/blog/influencer-campaign-kickoff" },
        ],
      },
      { type: "heading", text: "Plan go-lives deliberately", id: "go-lives" },
      {
        type: "table",
        headers: ["Pattern", "How", "Use for"],
        rows: [
          ["Synchronised burst", "Many creators post within a short window", "Launches, sale days, embargoed announcements"],
          ["Staggered", "Posts spread over days or weeks", "Sustained presence; avoiding audience fatigue"],
          ["Waves", "Groups post in planned phases", "Testing then scaling; regional rollouts"],
          ["Always-on", "Regular posts by a stable group", "Ambassador programmes"],
        ],
      },
      {
        type: "paragraph",
        text: "Synchronised bursts need the most coordination: drafts approved several days early, embargo instructions in writing, and a go-live checklist ready for the day. Influencers for product launch covers launch coordination.",
        links: [{ text: "Influencers for product launch", href: "/blog/influencers-for-product-launch" }],
      },
      { type: "heading", text: "Coordinating across languages and regions", id: "regional" },
      {
        type: "list",
        items: [
          "One core brief, localised per language and checked by native speakers.",
          "Reviewers who understand each language for claims and disclosure.",
          "Ship to farther regions first.",
          "Plan around regional festivals and local events.",
          "Report by region as well as overall.",
        ],
      },
      {
        type: "paragraph",
        text: "How to run a pan-India influencer marketing campaign covers multi-market planning in depth.",
        links: [{ text: "How to run a pan-India influencer marketing campaign", href: "/blog/pan-india-influencer-marketing-campaign" }],
      },
      { type: "heading", text: "Team size and roles", id: "team" },
      {
        type: "table",
        headers: ["Role", "Typical responsibility"],
        rows: [
          ["Campaign lead", "Plan, decisions, escalations, stakeholder updates"],
          ["Creator coordinators", "A defined group of creators each: communication, tracker updates"],
          ["Reviewer(s)", "Consolidated feedback within agreed times"],
          ["Logistics", "Shipping, tracking, replacements"],
          ["Analyst", "Insights collection and reporting"],
        ],
      },
      {
        type: "paragraph",
        text: "There's no fixed ratio of coordinators to creators; it depends on deliverable complexity, how many creators are new to brand work and how compressed the timeline is. A useful test: if a coordinator can't reply to every creator within the agreed response time during peak days, the team is too small. Influencer marketing team structure covers ownership models.",
        links: [{ text: "Influencer marketing team structure", href: "/blog/influencer-marketing-team-structure" }],
      },
      { type: "heading", text: "Daily coordination rhythm during live campaigns", id: "rhythm" },
      {
        type: "template",
        label: "Daily rhythm (live window)",
        text: "MORNING: tracker flags: drafts due, feedback overdue, posts due today, products in transit\nMIDDAY: batch review of submitted drafts; consolidated feedback sent\nAFTERNOON: go-live checks on today's posts; FAQ updated; issues escalated\nEND OF DAY: tracker updated; tomorrow's go-lives confirmed with creators",
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a D2C home brand runs 45 nano and micro creators across five languages for Diwali. It splits them into three waves and five language groups, runs one group kickoff per language, keeps a single FAQ, ships to the farthest regions first and assigns each of three coordinators about 15 creators. Wave 1 posts in the first festive week; insights from wave 1 refine the brief for waves 2 and 3. The team handles 45 creators without anyone feeling like a ticket number.",
      },
      { type: "heading", text: "Coordination checklist", id: "checklist" },
      {
        type: "template",
        label: "Before a multi-creator campaign goes live",
        text: "□ Creators grouped by wave, language and region\n□ One owner per creator; coordinators' groups assigned\n□ Group kickoffs scheduled; written recaps ready\n□ Shared FAQ created and linked in every brief\n□ Shipping plan: farthest regions first; tracking shared\n□ Submission instructions and naming standard sent\n□ Reviewers for each language confirmed; batch review times set\n□ Go-live pattern decided (burst, staggered, waves) and calendar shared\n□ Tracker set up with flags for due-soon and overdue items\n□ Escalation contacts shared; reserve creators identified\n□ Go-live checklist ready for each posting day",
      },
      {
        type: "paragraph",
        text: "Influencer content quality check provides the go-live checklist, and influencer campaign escalation covers what to do when something goes wrong mid-campaign.",
        links: [
          { text: "Influencer content quality check", href: "/blog/influencer-content-quality-check" },
          { text: "influencer campaign escalation", href: "/blog/influencer-campaign-escalation" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating every creator identically, including repeat partners and first-timers.",
          "Answering the same question 20 times instead of updating a shared FAQ.",
          "All go-lives on one day without a reason.",
          "No regional or language reviewers.",
          "One coordinator for too many creators at peak times.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Coordinating many creators is about grouping, standardising shared work, planning go-lives deliberately and keeping relationships personal. Use one tracker, a shared FAQ, batch reviews and a daily rhythm in live windows, and size the team so every creator still gets timely replies. For the tracker itself, see influencer campaign tracker.",
        links: [{ text: "influencer campaign tracker", href: "/blog/influencer-campaign-tracker" }],
      },
    ],
    faqs: [
      {
        question: "How do brands manage multiple influencers in one campaign?",
        answer:
          "By grouping creators by wave, language, region or deliverable type, running shared activities once (briefings, FAQ, shipping), keeping communication personal, staggering go-lives deliberately and tracking everyone in one tracker.",
      },
      {
        question: "Should all influencers post on the same day?",
        answer:
          "Only when timing matters, such as a launch or sale day. Otherwise staggered posts or waves often sustain presence and avoid audience fatigue.",
      },
      {
        question: "How many creators can one coordinator manage?",
        answer:
          "There's no fixed number. It depends on deliverable complexity, how many creators are new to brand work and timeline pressure. If a coordinator can't reply within agreed times at peak, the team is too small.",
      },
    ],
  },
];
