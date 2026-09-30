/**
 * Checklist data for CreatorChecklist. Item ids are stored in the reader's
 * browser, so change an id only if its meaning changes.
 */

export type ChecklistId =
  | "creator-operations-checklist"
  | "creator-continuity-checklist"
  | "creator-contract-checklist"
  | "creator-campaign-qa-checklist"
  | "agency-contract-checklist"
  | "influencer-vetting-checklist";

type Checklist = {
  title: string;
  intro: string;
  groups: { title: string; items: { id: string; label: string; detail: string }[] }[];
};

export const CHECKLISTS: Record<ChecklistId, Checklist> = {
  "agency-contract-checklist": {
    title: "Before you sign with an influencer marketing agency",
    intro: "Tick each point once it's written into the contract or statement of work. Anything you can't tick is a question for the agency before signing, and the agreement should be reviewed by your lawyer.",
    groups: [
      {
        title: "Scope",
        items: [
          { id: "ac-deliverables", label: "Creators, platforms and deliverables per campaign or month are listed", detail: "Including strategy work, content review, reporting and meetings." },
          { id: "ac-exclusions", label: "Exclusions are listed", detail: "Production, paid media, travel, extra campaigns." },
          { id: "ac-replacement", label: "What happens if a creator drops out or underdelivers", detail: "Replacement included, or refund of the creator fee." },
          { id: "ac-revisions", label: "Revision rounds and approval turnaround are defined", detail: "For both creators and your own team." },
        ],
      },
      {
        title: "Money",
        items: [
          { id: "ac-fee-model", label: "Agency fee model and amount are clear", detail: "Retainer, campaign fee, percentage or per creator." },
          { id: "ac-separate-fees", label: "Creator fees are shown separately from the agency fee", detail: "No hidden mark-ups." },
          { id: "ac-creator-payment", label: "Who pays creators, and when, is written down", detail: "If the agency pays, the timeline after you pay the agency." },
          { id: "ac-tax", label: "GST and TDS treatment of each payment is agreed", detail: "Confirmed with your finance team or CA." },
          { id: "ac-milestones", label: "Payment milestones and terms for the agency fee are set", detail: "Advance, on go-live, on report." },
        ],
      },
      {
        title: "Rights and compliance",
        items: [
          { id: "ac-usage", label: "Usage rights the brand receives are specified", detail: "Organic, paid ads, website; platforms, duration, territory." },
          { id: "ac-creator-contracts", label: "Creator contracts actually grant those rights", detail: "The brand's rights can't exceed what creators agreed." },
          { id: "ac-ownership", label: "Content ownership and file handover are stated", detail: "Raw files, final assets, captions." },
          { id: "ac-disclosure", label: "Responsibility for checking disclosure on every post is assigned", detail: "Both advertiser and influencer are responsible under ASCI's guidelines." },
          { id: "ac-claims", label: "Claims approval process is agreed", detail: "Especially for health, finance, food and education categories." },
        ],
      },
      {
        title: "Reporting, data and exit",
        items: [
          { id: "ac-report", label: "Report format, metrics and delivery date are agreed", detail: "Tied to the KPI set before launch." },
          { id: "ac-raw-data", label: "You receive live links, screenshots and creator insights", detail: "Not only a summary deck." },
          { id: "ac-confidentiality", label: "Confidentiality and data handling are covered", detail: "Including personal data under India's DPDP framework as it's phased in." },
          { id: "ac-term", label: "Minimum term, notice period and review points are reasonable", detail: "No long lock-in before a first campaign has run." },
          { id: "ac-handover", label: "Handover on exit is defined", detail: "Contracts, creator contacts, content and data; creators paid for completed work." },
        ],
      },
    ],
  },
  "influencer-vetting-checklist": {
    title: "Influencer due-diligence checklist",
    intro: "Run it for each creator before approval. Ticks are kept only in your browser; reset it for the next creator.",
    groups: [
      {
        title: "Profile and audience",
        items: [
          { id: "iv-profile", label: "Profile, bio and recent posting are consistent and active", detail: "No long gaps or sudden change of niche." },
          { id: "iv-insights", label: "Recent audience insights received from the creator", detail: "Top cities, age, gender, dated within the last few months." },
          { id: "iv-fit", label: "Audience location, language and age match the target customer", detail: "Compared against the brief, not guessed." },
        ],
      },
      {
        title: "Authenticity and engagement",
        items: [
          { id: "iv-growth", label: "Follower growth has no unexplained spikes", detail: "Check the trend over several months." },
          { id: "iv-comments", label: "Comments are specific and conversational", detail: "Not generic emojis or repeated phrases." },
          { id: "iv-views", label: "Views are consistent with follower count and recent history", detail: "Not one viral post carrying the average." },
        ],
      },
      {
        title: "Content and brand safety",
        items: [
          { id: "iv-content", label: "Recent content fits the brand's tone and quality", detail: "Several months reviewed, not just top posts." },
          { id: "iv-safety", label: "No brand-safety issues in content, comments or other platforms", detail: "Controversies, hateful or misleading content." },
          { id: "iv-disclosure", label: "Past sponsored posts were properly disclosed", detail: "A sign of how they'll handle yours." },
          { id: "iv-competitors", label: "No conflicting competitor partnerships or exclusivities", detail: "Checked for the campaign period." },
        ],
      },
      {
        title: "Commercial and working style",
        items: [
          { id: "iv-rate", label: "Fee quoted for the exact deliverables, usage and timeline", detail: "Including any paid-ad usage." },
          { id: "iv-availability", label: "Available in the go-live window", detail: "With time for drafts and revisions." },
          { id: "iv-professional", label: "Communication has been clear and timely", detail: "References checked for larger spends." },
          { id: "iv-qualifications", label: "Qualifications confirmed where the category requires them", detail: "For example health, nutrition or financial advice under ASCI's guidelines." },
        ],
      },
    ],
  },
  "creator-campaign-qa-checklist": {
    title: "Pre-live QA checklist for one deliverable",
    intro: "Run it for each creator deliverable before it goes to the client for approval or goes live. Reset it for the next one. Anything you can't tick goes back to the creator or into the escalation process.",
    groups: [
      {
        title: "Brief compliance",
        items: [
          { id: "qa-deliverable", label: "Right deliverable, format, length and platform", detail: "Matches the contract: Reel vs Story vs video, duration, aspect ratio." },
          { id: "qa-key-message", label: "Mandatory messages and product points included", detail: "The ones the brief marked as must-have, not every nice-to-have." },
          { id: "qa-donts", label: "Nothing the brief ruled out", detail: "Competitor products or logos, banned words, off-limits topics." },
          { id: "qa-product", label: "Correct product, variant and packaging shown", detail: "Current packaging and the right SKU or plan." },
        ],
      },
      {
        title: "Claims and accuracy",
        items: [
          { id: "qa-claims", label: "Every claim is in the brand's approved claims list", detail: "Prices, results, comparisons, health or financial statements." },
          { id: "qa-regulated", label: "Regulated-category rules checked", detail: "Qualified creator for technical health, nutrition or finance claims where required." },
          { id: "qa-facts", label: "Offers, prices and dates are current", detail: "Sale dates, discount levels, availability." },
        ],
      },
      {
        title: "Disclosure",
        items: [
          { id: "qa-label", label: "Disclosure label used and visible upfront", detail: "Not hidden after \"more\" or among hashtags; in the content's language." },
          { id: "qa-platform-tool", label: "Platform paid-partnership tool switched on where available", detail: "Alongside, not instead of, a clear label." },
          { id: "qa-video-disclosure", label: "Disclosure in the video itself where required", detail: "On screen or spoken for video formats." },
        ],
      },
      {
        title: "Rights and safety",
        items: [
          { id: "qa-music", label: "Music and third-party material are cleared for this use", detail: "Especially if the content may be used in paid ads." },
          { id: "qa-people", label: "People shown have agreed to appear", detail: "Extra care with children and private individuals." },
          { id: "qa-brand-safety", label: "Nothing unsafe or off-brand in frame or audio", detail: "Background details, language, risky behaviour." },
        ],
      },
      {
        title: "Technical",
        items: [
          { id: "qa-links", label: "Links and tracking parameters work", detail: "Tested on mobile, going to the right landing page." },
          { id: "qa-code", label: "Discount or referral code is correct and active", detail: "Checked against the brand's live system." },
          { id: "qa-tags", label: "Brand handle, collab invite and product tags set", detail: "As agreed in the brief." },
          { id: "qa-captions", label: "Captions and on-screen text proofread", detail: "Spelling, brand name, subtitles." },
          { id: "qa-timing", label: "Go-live date and time confirmed with the creator", detail: "And logged in the tracker." },
        ],
      },
    ],
  },
  "creator-contract-checklist": {
    title: "Brand deal contract checklist",
    intro: "Tick each point once you've checked it in the contract or confirmation email. Anything you can't tick is a question for the brand.",
    groups: [
      {
        title: "Parties and scope",
        items: [
          { id: "cc-parties", label: "Correct legal names for you and the brand or agency", detail: "Including who actually pays you if an agency is involved." },
          { id: "cc-deliverables", label: "Deliverables are specific", detail: "Formats, number of posts, length, platforms and go-live dates." },
          { id: "cc-out-of-scope", label: "Extra work is priced separately", detail: "Additional posts, stories, cut-downs or appearances aren't included by default." },
        ],
      },
      {
        title: "Money",
        items: [
          { id: "cc-fee", label: "Fee, GST treatment and expected TDS are clear", detail: "You know what arrives in your account." },
          { id: "cc-payment-terms", label: "Payment dates and any advance are written down", detail: "Including PO or vendor onboarding requirements." },
          { id: "cc-kill-fee", label: "Cancellation or kill fee is agreed", detail: "What you're paid if the brand cancels after work starts." },
        ],
      },
      {
        title: "Rights and restrictions",
        items: [
          { id: "cc-usage", label: "Usage rights have media, duration and territory", detail: "Organic reposting vs paid ads vs whitelisting are separate and priced." },
          { id: "cc-no-perpetual", label: "No perpetual or buyout rights for a standard fee", detail: "Or they're priced as a buyout on purpose." },
          { id: "cc-likeness", label: "Limits on using your face, voice and AI versions", detail: "No rights to create synthetic versions of you unless agreed and priced." },
          { id: "cc-exclusivity", label: "Exclusivity is narrow, time-limited and paid", detail: "Named competitors or a defined category, with an end date." },
        ],
      },
      {
        title: "Process and compliance",
        items: [
          { id: "cc-approvals", label: "Approval rounds and response times are defined", detail: "Number of revisions and how long the brand has to reply." },
          { id: "cc-claims", label: "The brand is responsible for its product claims", detail: "And provides evidence for technical claims you're asked to make." },
          { id: "cc-disclosure", label: "Disclosure requirements are stated and acceptable", detail: "Paid partnership label and clear wording." },
          { id: "cc-content-removal", label: "Rules for taking content down are clear", detail: "When you may remove it and what happens after the campaign." },
        ],
      },
      {
        title: "Exit and disputes",
        items: [
          { id: "cc-termination", label: "Either side can end it fairly", detail: "Including if the brand becomes controversial." },
          { id: "cc-liability", label: "No unlimited indemnities or penalties", detail: "Liability is reasonable and mutual." },
          { id: "cc-law", label: "Governing law and dispute process are stated", detail: "Where and how disagreements are handled." },
        ],
      },
    ],
  },
  "creator-operations-checklist": {
    title: "Creator operations checklist",
    intro: "Tick a process only if it happens the same way every time and someone else could follow it.",
    groups: [
      {
        title: "Brand deals and pipeline",
        items: [
          { id: "ops-enquiry-log", label: "Every brand enquiry is logged in one place", detail: "Email, DMs and WhatsApp enquiries all reach one tracker or CRM." },
          { id: "ops-reply-time", label: "Enquiries get a reply within an agreed time", detail: "For example, within two working days, even if it's a no." },
          { id: "ops-qualify", label: "Leads are verified and qualified before quoting", detail: "Brand legitimacy, budget, deliverables and dates checked." },
          { id: "ops-follow-up", label: "Proposals have a follow-up date", detail: "No proposal sits without a next step." },
          { id: "ops-pipeline-review", label: "The pipeline is reviewed weekly", detail: "Stages, values and stalled deals checked." },
        ],
      },
      {
        title: "Delivery and approvals",
        items: [
          { id: "ops-written-scope", label: "Deliverables, dates and usage are agreed in writing", detail: "A contract or confirmed email for every deal." },
          { id: "ops-calendar", label: "Signed deals reach the calendar the same day", detail: "Draft, approval and go-live dates on the master calendar." },
          { id: "ops-approval-record", label: "Brand approvals are saved with dates", detail: "Screenshots or emails stored with the final file." },
          { id: "ops-disclosure-check", label: "Every sponsored post gets a disclosure check", detail: "Label and wording checked before publishing." },
          { id: "ops-report", label: "Campaign reports are sent on a set schedule", detail: "Results, screenshots and live links shared with the brand." },
        ],
      },
      {
        title: "Content production",
        items: [
          { id: "ops-idea-bank", label: "Ideas live in one idea bank", detail: "Not scattered across notes apps and chats." },
          { id: "ops-board", label: "Content moves through a board with stages", detail: "Idea, script, shoot, edit, review, scheduled, live." },
          { id: "ops-briefs", label: "Editors and designers get written briefs", detail: "Goal, references, must-haves and deadline." },
          { id: "ops-qc", label: "A quality checklist is used before publishing", detail: "Captions, audio, facts, links and formats checked." },
          { id: "ops-buffer", label: "There's a buffer of finished content", detail: "At least one to two weeks of ready pieces." },
        ],
      },
      {
        title: "Finance",
        items: [
          { id: "ops-invoice-trigger", label: "Invoices go out when content goes live", detail: "A status change or reminder triggers the invoice." },
          { id: "ops-payment-follow-up", label: "Overdue payments are followed up on a schedule", detail: "Reminders at set intervals after the due date." },
          { id: "ops-income-tracker", label: "Income is tracked monthly by stream", detail: "Brand deals, platform payouts, products, services." },
          { id: "ops-expenses", label: "Receipts and expenses are filed monthly", detail: "Ready for your accountant, with GST and TDS records." },
          { id: "ops-forecast", label: "You review income against a forecast", detail: "Conservative and expected scenarios for the next three months." },
        ],
      },
      {
        title: "Team and tools",
        items: [
          { id: "ops-sops", label: "Delegated tasks have written SOPs", detail: "Trigger, steps, tools and examples of good output." },
          { id: "ops-owners", label: "Every recurring area has a named owner", detail: "Even if the owner is you." },
          { id: "ops-agreements", label: "Freelancers have written agreements", detail: "Scope, pay, ownership and confidentiality." },
          { id: "ops-weekly-review", label: "You run a weekly operations review", detail: "Board, deadlines, pipeline, invoices, team questions." },
          { id: "ops-stack-review", label: "Tools and subscriptions are reviewed quarterly", detail: "Unused tools cancelled; duplicates removed." },
        ],
      },
      {
        title: "Protection and records",
        items: [
          { id: "ops-2fa", label: "Passkeys or app-based 2FA on all key accounts", detail: "Email first, then Instagram, YouTube and business tools." },
          { id: "ops-no-shared-passwords", label: "Team access uses roles, not shared passwords", detail: "With an access register of who has what." },
          { id: "ops-backups", label: "Content and files are backed up in two places", detail: "Raw footage, finals, contracts and invoices." },
          { id: "ops-contract-folder", label: "Contracts and records are organised by campaign", detail: "Findable in under two minutes." },
          { id: "ops-continuity", label: "A continuity plan exists for time away", detail: "Buffer, backup person and a one-page continuity document." },
        ],
      },
    ],
  },
  "creator-continuity-checklist": {
    title: "Creator business continuity checklist",
    intro: "Work through this on a good week. Each item makes an unplanned break easier to survive.",
    groups: [
      {
        title: "Content",
        items: [
          { id: "bc-buffer", label: "Two or more weeks of finished evergreen content", detail: "Stored where a backup person can reach it." },
          { id: "bc-schedule", label: "Content can be scheduled without you", detail: "A trusted person has the right platform role." },
          { id: "bc-audience-message", label: "A short audience message is drafted", detail: "For an unexpected pause or account problem." },
        ],
      },
      {
        title: "Access and accounts",
        items: [
          { id: "bc-role-access", label: "Backup person has role-based access, not your password", detail: "YouTube channel permissions, Instagram access options, shared folders." },
          { id: "bc-recovery", label: "Recovery email, phone and backup codes are current", detail: "Backup codes stored offline." },
          { id: "bc-emergency-access", label: "Emergency access is set up in your password manager", detail: "For one trusted contact, if your manager supports it." },
        ],
      },
      {
        title: "Commitments",
        items: [
          { id: "bc-live-deals", label: "Live brand deals are listed with contacts and dates", detail: "In the continuity document, kept up to date." },
          { id: "bc-contract-terms", label: "Contracts cover delays and rescheduling", detail: "You know what each brand agreement says." },
          { id: "bc-brand-backup", label: "Someone can contact brands on your behalf", detail: "A manager or trusted person with agreed messages." },
        ],
      },
      {
        title: "Team and knowledge",
        items: [
          { id: "bc-sops", label: "Key processes are documented", detail: "Publishing, uploads, invoicing and brand deliverables." },
          { id: "bc-backup-editor", label: "A backup editor knows your style", detail: "Has completed a paid test." },
          { id: "bc-continuity-doc", label: "A one-page continuity document exists", detail: "Contacts, commitments, access map and decisions a backup can make." },
        ],
      },
      {
        title: "Money",
        items: [
          { id: "bc-runway", label: "Cash buffer covers several months of costs", detail: "Personal and business." },
          { id: "bc-recurring", label: "Some income continues when you pause", detail: "Memberships, products, retainers or licensing." },
          { id: "bc-invoices-visible", label: "Outstanding invoices and bills are listed", detail: "So nothing is missed while you're away." },
        ],
      },
    ],
  },
};
