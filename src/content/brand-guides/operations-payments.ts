import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";
import { OPS_PUBLISHED, OPS_REVIEWED } from "@/content/brand-guides/operations-onboarding";

/**
 * Creator operations cluster, payments (1221–1224). The payment process (1220) expanded influencer-marketing-payments.
 * Tax statements are deliberately general and link to official sources; see the audit doc for what was verified.
 */
const TAX_NOTE =
  "This is general operational information, not tax or legal advice. Requirements depend on the creator's status (individual or business, GST-registered or not), the nature of the payment and current rules, which change. Confirm specifics with your finance team or a chartered accountant.";

export const operationsPaymentPosts: BlogPost[] = [
  {
    slug: "influencer-payment-terms",
    category: "Campaign Strategy",
    title: "Influencer Payment Terms: What Brands and Creators Should Agree on Before a Campaign",
    seoTitle: "Influencer Payment Terms: What to Agree Before a Campaign",
    excerpt:
      "The payment terms brands and creators should agree before any work starts: total compensation, schedule, what triggers payment, revisions, usage and exclusivity fees, cancellation, expenses, product value, invoicing, taxes and late payment.",
    metaDescription:
      "What influencer payment terms should cover: total fee, schedule, payment triggers, usage and exclusivity, cancellation, expenses, invoicing and tax handling.",
    author: AUTHOR,
    publishedAt: OPS_PUBLISHED,
    lastReviewed: OPS_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer payment terms", "creator payment terms brands", "influencer payment schedule", "influencer advance payment", "influencer cancellation fee"],
    related: ["influencer-marketing-payments", "influencer-invoicing", "influencer-marketing-contract"],
    hero: {
      src: "/blog/brand-guides/influencer-payment-terms.svg",
      alt: "Payment terms to agree before a campaign: fee, schedule, trigger, rights, cancellation, expenses and invoicing",
    },
    body: [
      {
        type: "paragraph",
        text: "Payment disputes between brands and creators rarely start with someone refusing to pay. They start with two different assumptions: the creator expected payment when the post went live; finance pays 45 days after receiving an invoice that matches a purchase order nobody raised. Agreeing payment terms upfront removes the assumptions.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before a campaign, brands and creators should agree the total compensation (fee, product, commission), what it covers (deliverables, revisions, usage rights, exclusivity), the payment schedule (advance, milestones or on completion), what triggers each payment and how many days after, invoice and vendor requirements, how taxes are handled, what happens if the campaign is cancelled or changed, who covers expenses, and what happens if payment is late. Put it in the agreement, not just in messages.",
      },
      { type: "heading", text: "The terms to agree", id: "terms" },
      {
        type: "table",
        headers: ["Term", "What to agree", "Why it matters"],
        rows: [
          ["Total compensation", "Fee in ₹, whether GST is extra, product value, any commission or bonus", "No surprises on the total"],
          ["What the fee covers", "Deliverables, revision rounds, usage rights (platforms, duration), exclusivity", "Prevents 'that wasn't included'"],
          ["Payment schedule", "Advance, milestones or on completion; percentages", "Cash-flow expectations on both sides"],
          ["Payment trigger", "Signature, approval, go-live, insights shared or invoice receipt", "Removes ambiguity about when the clock starts"],
          ["Payment period", "Number of days after the trigger", "A date the creator can plan around"],
          ["Invoicing", "Who to invoice (legal entity), reference numbers, where to send", "Avoids rejected invoices"],
          ["Vendor setup", "Documents finance needs and when", "Avoids first-payment delays"],
          ["Taxes", "Whether GST applies to the invoice and whether TDS will be deducted", "Creator knows what they'll receive"],
          ["Revisions beyond scope", "Whether extra rounds or reshoots are charged", "Fairness when the brand changes plans"],
          ["Cancellation and changes", "Fees if the brand cancels or postpones after work starts", "Protects creator time"],
          ["Expenses", "Travel, props, locations, studio: included or reimbursed", "Avoids disputes over costs"],
          ["Late payment", "What happens if payment is late; who to contact", "Clear escalation path"],
        ],
      },
      { type: "heading", text: "Common payment schedules", id: "schedules" },
      {
        type: "table",
        headers: ["Schedule", "How it works", "Suits"],
        rows: [
          ["On completion", "Full payment after deliverables are live and approved", "Small, single-deliverable collaborations"],
          ["Advance plus balance", "Part on signing, rest on completion", "Larger deals; creators with production costs"],
          ["Milestones", "Payments tied to stages (e.g. per video in a series)", "Multi-deliverable or multi-month work"],
          ["Monthly retainer", "Fixed monthly amount for ongoing work", "Ambassadors and always-on creators"],
          ["Fixed plus performance", "Fee plus commission or bonus on tracked results", "Sales-focused campaigns with fair, transparent tracking"],
        ],
      },
      {
        type: "paragraph",
        text: "Payment models and timing are covered in more detail in influencer marketing payments.",
        links: [{ text: "influencer marketing payments", href: "/blog/influencer-marketing-payments" }],
      },
      { type: "heading", text: "Choosing the payment trigger", id: "trigger" },
      {
        type: "paragraph",
        text: "The trigger is the event that starts the payment clock. Choose one both sides can verify: 'within 15 days of the post going live and the invoice being received' is clear; 'after the campaign ends' isn't. Avoid tying payment to results the creator doesn't control unless it's a separate, agreed performance element on top of a fair fee.",
      },
      { type: "heading", text: "Cancellation and changes", id: "cancellation" },
      {
        type: "list",
        items: [
          "If the brand cancels before any work: usually no fee, but agree a notice period.",
          "If the brand cancels after production starts: agree a cancellation fee that reflects work done.",
          "If the brand postpones: agree how long the creator holds the slot and whether rescheduling has a cost.",
          "If the brand changes the brief after filming: treat substantial changes as additional work.",
          "If the creator can't deliver: agree what happens to any advance.",
        ],
      },
      { type: "heading", text: "Taxes: agree how they'll be handled", id: "taxes" },
      {
        type: "paragraph",
        text: "Discuss tax treatment before agreeing the fee, not when the invoice arrives. Creators registered for GST will typically add GST to their invoice; those who aren't registered shouldn't. Indian businesses paying creators may need to deduct tax at source (TDS); from 1 April 2026 the non-salary TDS provisions sit in section 393 of the Income-tax Act, 2025, and deductors issue Form No. 131 as the TDS certificate. Tell creators upfront whether you'll deduct TDS so they know what they'll actually receive.",
        links: [
          { text: "Form No. 131", href: SOURCES.incomeTaxForm131 },
        ],
      },
      { type: "paragraph", text: TAX_NOTE },
      {
        type: "paragraph",
        text: "The creator-side view is covered in GST for influencers in India and TDS for influencers in India.",
        links: [
          { text: "GST for influencers in India", href: "/blog/gst-for-influencers-india" },
          { text: "TDS for influencers in India", href: "/blog/tds-for-influencers-india" },
        ],
      },
      { type: "heading", text: "Paying small creators and MSME suppliers", id: "msme" },
      {
        type: "paragraph",
        text: "Creators who run registered businesses may be micro or small enterprises under the MSMED Act. Where they are, buyers are expected to pay within the agreed credit period, which the Act caps at 45 days from acceptance of the services, and delayed payments can attract interest. Ask creators whether they're Udyam-registered during vendor setup, and set payment periods comfortably within the limit. Disputes can be raised through the government's MSME Samadhaan portal.",
        links: [{ text: "MSME Samadhaan portal", href: SOURCES.msmeSamadhaan }],
      },
      { type: "heading", text: "Payment terms checklist", id: "checklist" },
      {
        type: "template",
        label: "Payment terms checklist (agree before work starts)",
        text: "□ Total fee in ₹; GST treatment stated\n□ Product, commission or bonus stated separately\n□ Deliverables, revisions, usage and exclusivity covered by the fee\n□ Schedule: advance / milestones / completion (percentages)\n□ Trigger for each payment and number of days\n□ Invoice: billing entity, references, where to send\n□ Vendor setup documents and timeline\n□ TDS: whether it will be deducted\n□ Cancellation, postponement and change terms\n□ Expenses: included or reimbursed\n□ Late-payment contact and process\n□ All of the above in the signed agreement",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Agreeing the fee in chat and the terms never.",
          "'Payment after campaign' with no date.",
          "Not mentioning TDS until the creator notices a smaller payment.",
          "Long payment periods used as an unspoken discount.",
          "No cancellation terms, so creators bear the cost of brand changes.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Clear payment terms protect both sides: the total, what it covers, when and how payment happens, how taxes are handled, what happens if plans change and what to do if payment is late. Agree them before work starts and put them in the agreement. For processing payments once the work is done, see influencer marketing payments and influencer invoicing.",
        links: [
          { text: "influencer invoicing", href: "/blog/influencer-invoicing" },
        ],
      },
    ],
    faqs: [
      {
        question: "What should influencer payment terms include?",
        answer:
          "Total compensation and what it covers, the payment schedule and trigger, payment period, invoicing and vendor requirements, tax handling (GST, TDS), cancellation and change terms, expenses and what happens if payment is late.",
      },
      {
        question: "Should brands pay influencers in advance?",
        answer:
          "It depends on the deal. Advances are common for larger or production-heavy collaborations; smaller single posts are often paid on completion. Whatever you choose, agree percentages and triggers in writing.",
      },
      {
        question: "Do brands deduct TDS when paying influencers in India?",
        answer:
          "Brands may be required to deduct TDS depending on the payment and the creator. From 1 April 2026 non-salary TDS sits under section 393 of the Income-tax Act, 2025. Confirm the treatment with your finance team or a chartered accountant and tell creators upfront.",
      },
    ],
  },
  {
    slug: "creator-payment-tracking",
    category: "Campaign Strategy",
    title: "Creator Payment Tracking: How Brands Can Manage Influencer Payments at Scale",
    seoTitle: "Creator Payment Tracking: Influencer Payments at Scale",
    excerpt:
      "How to track payments to many creators across campaigns: the fields to record, payment statuses, the link between approvals and invoices, a weekly payment review, what to keep out of the tracker and how to share status with creators.",
    author: AUTHOR,
    publishedAt: OPS_PUBLISHED,
    lastReviewed: OPS_REVIEWED,
    readingTime: "6 min read",
    tags: ["creator payment tracking", "track influencer payments", "influencer payment tracker", "manage creator payments", "influencer payments at scale"],
    related: ["creator-payment-delays", "influencer-invoicing", "influencer-marketing-payments"],
    hero: {
      src: "/blog/brand-guides/creator-payment-tracking.svg",
      alt: "Creator payment tracker statuses from agreed and deliverables approved to invoice received, approved, scheduled and paid",
    },
    metaDescription: "How brands track influencer payments at scale: fields, statuses, linking approvals to invoices, a weekly review and keeping sensitive data out.",
    body: [
      {
        type: "paragraph",
        text: "Paying three creators is easy. Paying sixty across four campaigns, with different fees, schedules, invoice formats and approval chains, is where payments slip. Creators chase, the campaign team chases finance, finance asks for documents nobody has, and the brand's reputation among creators and managers takes the hit. A simple tracker that links each payment to its approval and invoice prevents most of it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Track creator payments with one row per payment (not per creator), recording creator, campaign, agreed fee, deliverables covered, approval status, invoice received and checked, payment due date, status and date paid. Use a fixed set of statuses, link each row to the agreement and invoice, review it weekly with finance, and keep bank and identity details out of the tracker. Share status proactively with creators so they never have to chase.",
      },
      { type: "heading", text: "The fields to track", id: "fields" },
      {
        type: "table",
        headers: ["Field", "Example", "Note"],
        rows: [
          ["Payment ID", "DIW26-014-1", "Unique per payment (a creator may have several)"],
          ["Creator", "[creator name / handle]", "Link to creator record"],
          ["Campaign", "Diwali 2026", ""],
          ["Deliverables covered", "1 Reel + 3 Stories", "What this payment is for"],
          ["Agreed amount", "₹[ ] + GST (if applicable)", "From the agreement"],
          ["Payment type", "Advance / milestone / balance / retainer / commission", ""],
          ["Deliverables approved", "Date / pending", "Trigger check"],
          ["Invoice received", "Date / missing", "Link to file"],
          ["Invoice checked", "Matches agreement? yes / issue", ""],
          ["Due date", "Date", "From agreed terms"],
          ["Status", "See statuses below", ""],
          ["Date paid", "Date", "From finance"],
          ["Notes", "e.g. 'vendor setup pending'", ""],
        ],
      },
      {
        type: "paragraph",
        text: "Leave bank account numbers, PAN images and other sensitive details out of the campaign tracker. They belong in finance's vendor system with restricted access.",
      },
      { type: "heading", text: "Payment statuses", id: "statuses" },
      {
        type: "template",
        label: "Payment statuses",
        text: "1. Agreed: terms signed; payment not yet due\n2. Awaiting deliverables: trigger not met\n3. Awaiting invoice: deliverables approved; invoice requested\n4. Invoice issue: invoice doesn't match terms; creator contacted\n5. Approved for payment: invoice checked and approved internally\n6. Scheduled: in finance's payment run, with date\n7. Paid: payment confirmed; creator informed\nSide status: On hold (with reason and owner)",
      },
      { type: "heading", text: "Link approvals to payments", id: "link" },
      {
        type: "paragraph",
        text: "The most common internal delay is a gap between 'content approved' and 'invoice approved'. Make the link explicit: when content is approved and live, the tracker moves the payment to 'awaiting invoice' and requests the invoice; when the invoice arrives, someone checks it against the agreement within a set time; approved invoices go to finance with everything they need. Influencer campaign automation shows how to trigger these steps automatically.",
        links: [{ text: "Influencer campaign automation", href: "/blog/influencer-campaign-automation" }],
      },
      { type: "heading", text: "A weekly payment review", id: "weekly" },
      {
        type: "template",
        label: "Weekly payment review (15–20 minutes with finance)",
        text: "□ Payments due in the next 14 days: everything ready?\n□ Overdue payments: reason, owner, new date\n□ Invoices with issues: who's resolving, by when\n□ Vendor setups pending\n□ Creators to update proactively\n□ Anything on hold longer than a week",
      },
      { type: "heading", text: "Tell creators before they ask", id: "updates" },
      {
        type: "list",
        items: [
          "Confirm when the invoice is received and approved.",
          "Share the scheduled payment date.",
          "Confirm when it's paid.",
          "If there's a delay, explain why and give a new date before the original date passes.",
          "Tell creators if TDS has been deducted and when they'll get the certificate.",
        ],
      },
      {
        type: "paragraph",
        text: "Proactive updates cost a minute and save hours of chasing. They're also one of the things creators remember most about a brand. Creator payment delays covers what to do when something goes wrong.",
        links: [{ text: "Creator payment delays", href: "/blog/creator-payment-delays" }],
      },
      { type: "heading", text: "Tools", id: "tools" },
      {
        type: "paragraph",
        text: "A shared spreadsheet or database works for most brands if statuses are fixed and someone owns it. Larger programmes may use influencer campaign management software with payment tracking, or connect the campaign tracker to finance's system. What matters is that each payment links to its agreement, approval and invoice, and that statuses are updated weekly. Influencer campaign management software covers options.",
        links: [{ text: "Influencer campaign management software", href: "/blog/influencer-campaign-management-software" }],
      },
      { type: "heading", text: "Metrics worth watching", id: "metrics" },
      {
        type: "list",
        items: [
          "Average days from approval to payment.",
          "Share of payments made by the due date.",
          "Invoices returned for errors (and the most common error).",
          "Number of payment queries from creators.",
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a D2C brand pays 45 creators across three campaigns each month. Before a tracker, creators chased payments by DM and the campaign team had to search emails to answer. After moving to one row per payment with fixed statuses, a link to each agreement and invoice, and a Tuesday review with finance, the team can answer any payment question in seconds and sends creators their payment dates proactively. The same people handle more creators with fewer messages.",
      },
      { type: "heading", text: "Handling TDS and certificates in the tracker", id: "tds" },
      {
        type: "paragraph",
        text: "If TDS is deducted, record the amount deducted and the net amount paid against each payment, and track when the TDS certificate is issued to the creator. From 1 April 2026 the certificate for non-salary TDS is Form No. 131 under the Income-tax Act, 2025. Finance owns the details; the tracker simply makes sure creators aren't left wondering why they received less than the invoice. This is general information, not tax advice.",
        links: [
          { text: "Form No. 131", href: "https://www.incometaxindia.gov.in/w/form-no.-131" },
        ],
      },
      {
        type: "paragraph",
        text: "Influencer invoicing covers checking invoices, and influencer payment terms covers what should be agreed before any payment is due.",
        links: [
          { text: "Influencer invoicing", href: "/blog/influencer-invoicing" },
          { text: "influencer payment terms", href: "/blog/influencer-payment-terms" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "One row per creator, so multiple payments get confused.",
          "No link between content approval and invoice approval.",
          "Sensitive financial data in shared campaign sheets.",
          "No weekly review, so overdue payments surface only when creators complain.",
          "Not telling creators about TDS deductions.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Payment tracking at scale needs one row per payment, fixed statuses, links to agreements, approvals and invoices, a weekly review with finance and proactive updates to creators. It's simple to set up and it protects the relationships everything else depends on. For what to check on each invoice, see influencer invoicing.",
        links: [{ text: "influencer invoicing", href: "/blog/influencer-invoicing" }],
      },
    ],
    faqs: [
      {
        question: "How should brands track influencer payments?",
        answer:
          "With one row per payment recording creator, campaign, deliverables, agreed amount, approval status, invoice status, due date, payment status and date paid, linked to the agreement and invoice, reviewed weekly with finance.",
      },
      {
        question: "Should creator bank details be in the payment tracker?",
        answer:
          "No. Keep bank and identity details in finance's vendor system with restricted access. The campaign tracker only needs statuses, amounts and dates.",
      },
      {
        question: "How can brands avoid creators chasing payments?",
        answer:
          "Agree clear terms, link approvals to invoice requests, review payments weekly and update creators proactively when invoices are approved, payments are scheduled and payments are made.",
      },
    ],
  },
  {
    slug: "influencer-invoicing",
    category: "Campaign Strategy",
    title: "Influencer Invoicing: What Brands Should Know Before Paying Creators",
    seoTitle: "Influencer Invoicing: What Brands Should Check Before Paying",
    excerpt:
      "Influencer invoicing from the brand side: why brands need invoices, what an invoice generally contains, GST tax invoice basics, matching invoices to agreements, an approval workflow, common errors and record keeping, with official sources for tax points.",
    metaDescription:
      "Influencer invoicing for brands: what creator invoices usually contain, GST invoice basics, matching to agreements, approval workflow, errors and records.",
    author: AUTHOR,
    publishedAt: OPS_PUBLISHED,
    lastReviewed: OPS_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer invoicing", "influencer invoice", "creator invoice brands", "check influencer invoice", "influencer invoice India"],
    related: ["influencer-payment-terms", "creator-payment-tracking", "influencer-marketing-payments"],
    hero: {
      src: "/blog/brand-guides/influencer-invoicing.svg",
      alt: "Influencer invoice checked against the agreement: billing entity, deliverables, amount, taxes and references before approval",
    },
    body: [
      {
        type: "paragraph",
        text: "Many late creator payments come down to the invoice: billed to the brand's trade name instead of its legal entity, missing a reference, GST charged by someone who isn't registered, a different amount from the agreement. The creator thinks they've done everything; finance can't process it. Brands can prevent most of this by telling creators exactly what's needed and checking invoices quickly.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Brands need invoices to process and record creator payments correctly. An influencer invoice generally includes a unique invoice number and date, the creator's name or business details and PAN, your legal billing entity and address, a reference (PO or campaign), the deliverables covered, the amount, GST details only if the creator is GST-registered, the total and payment details. Check each invoice against the agreement (entity, deliverables, amount, taxes), approve it within a set time and keep it with the agreement and payment record.",
      },
      { type: "heading", text: "Why brands need invoices", id: "why" },
      {
        type: "list",
        items: [
          "Finance can't process most vendor payments without one.",
          "It records what was paid for, matching the agreement.",
          "It supports the brand's own tax and accounting records.",
          "It gives creators a clear record of what they've been paid for.",
        ],
      },
      { type: "heading", text: "What an influencer invoice generally contains", id: "contents" },
      {
        type: "table",
        headers: ["Item", "What to look for"],
        rows: [
          ["Invoice number and date", "Unique number; date after or on completion as agreed"],
          ["Creator details", "Name or business name, address, contact, PAN"],
          ["GSTIN", "Only if the creator is GST-registered"],
          ["Bill-to", "Your exact legal entity name and address, and your GSTIN if applicable"],
          ["Reference", "PO number, campaign name or agreement date"],
          ["Description", "Deliverables covered by this invoice"],
          ["Amount", "Matches the agreed fee for this payment"],
          ["Taxes", "GST lines only if registered; no GST if not"],
          ["Total and payment terms", "Total and due date matching the agreement"],
          ["Payment details", "Provided through finance's vendor process"],
        ],
      },
      {
        type: "paragraph",
        text: "For GST-registered creators, the invoice should be a GST tax invoice with the particulars set out in Rule 46 of the CGST Rules, such as GSTIN, invoice number, the recipient's details, description, taxable value, tax rate and amount, and place of supply. Creators who aren't registered should not charge GST.",
        links: [{ text: "Rule 46 of the CGST Rules", href: SOURCES.gstRule46 }],
      },
      { type: "paragraph", text: TAX_NOTE },
      { type: "heading", text: "Tell creators what you need before they invoice", id: "brief-creators" },
      {
        type: "template",
        label: "Invoice instructions to send creators",
        text: "Please address your invoice to:\n[Legal entity name]\n[Registered address]\n[GSTIN, if applicable]\n\nInclude:\n• Reference: [PO number / campaign name]\n• Deliverables: [as agreed]\n• Amount: ₹[ ] (add GST only if you're GST-registered)\n• Your PAN\nSend to: [finance / campaign email]\nWe'll confirm receipt within [x] working days and pay within [x] days of approval.\n[If applicable: we'll deduct TDS as required and share the certificate.]",
      },
      { type: "heading", text: "Matching invoices to agreements", id: "matching" },
      {
        type: "template",
        label: "Invoice check (before approval)",
        text: "□ Billed to the correct legal entity and address\n□ Reference (PO / campaign) present\n□ Deliverables match what was agreed and delivered\n□ Amount matches the agreement for this payment\n□ GST shown only if the creator is registered; GSTIN present if so\n□ Invoice number unique (not a duplicate of an earlier invoice)\n□ Deliverables approved and live (if that's the trigger)\n□ Vendor setup complete",
      },
      { type: "heading", text: "An approval workflow", id: "workflow" },
      {
        type: "template",
        label: "Invoice approval workflow",
        text: "1. Invoice received → logged in payment tracker (same day)\n2. Campaign owner checks against agreement and deliverables (within 2 working days)\n3. Issues → creator contacted with specific correction\n4. Approved → sent to finance with agreement and approval record\n5. Finance processes → payment scheduled → creator informed of date\n6. Paid → confirmation to creator; files stored",
      },
      {
        type: "paragraph",
        text: "Creator payment tracking covers the tracker that supports this workflow.",
        links: [{ text: "Creator payment tracking", href: "/blog/creator-payment-tracking" }],
      },
      { type: "heading", text: "Common invoice errors, and how to prevent them", id: "errors" },
      {
        type: "table",
        headers: ["Error", "Prevention"],
        rows: [
          ["Wrong billing entity (trade name, agency, wrong group company)", "Send exact bill-to details with the agreement"],
          ["Missing PO or reference", "Raise the PO early and share it"],
          ["GST charged by an unregistered creator, or missing GSTIN", "Ask about GST status during onboarding"],
          ["Amount differs from agreement", "Confirm the amount per payment in writing"],
          ["Invoice before trigger is met", "Explain when to invoice"],
          ["Duplicate invoice numbers", "Check against previous invoices from the same creator"],
        ],
      },
      {
        type: "paragraph",
        text: "When you find an error, tell the creator quickly and specifically. Many creators are new to invoicing; a clear correction request is more helpful than a rejection. Creators can follow how to invoice brands as a creator in India.",
        links: [{ text: "how to invoice brands as a creator in India", href: "/blog/how-to-invoice-brands-as-a-creator-india" }],
      },
      { type: "heading", text: "Gifted products and barter", id: "barter" },
      {
        type: "paragraph",
        text: "Gifted products and barter arrangements can have tax implications for both brand and creator, and the treatment depends on the arrangement and current rules. Don't assume 'no payment, no paperwork'. Ask your finance team how such arrangements should be recorded, and be transparent with creators about it.",
      },
      { type: "heading", text: "Record keeping", id: "records" },
      {
        type: "list",
        items: [
          "Keep each invoice with its agreement, approval record and payment confirmation.",
          "Record any TDS deducted and certificates issued.",
          "Store in one place finance and the campaign team can both reference.",
          "Follow your finance team's retention policy.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer campaign documentation covers how invoices fit into the wider campaign record.",
        links: [{ text: "Influencer campaign documentation", href: "/blog/influencer-campaign-documentation" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Not telling creators what an acceptable invoice needs.",
          "Letting invoices sit unchecked for weeks.",
          "Rejecting invoices without saying what's wrong.",
          "Starting vendor setup only after the invoice arrives.",
          "Treating tax questions as the creator's problem alone.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Smooth influencer invoicing starts before the invoice: tell creators exactly what's needed, start vendor setup early, check invoices against the agreement promptly, correct errors helpfully and keep good records. Confirm tax specifics with your finance team using current official guidance. For the payment terms that sit behind each invoice, see influencer payment terms.",
        links: [{ text: "influencer payment terms", href: "/blog/influencer-payment-terms" }],
      },
    ],
    faqs: [
      {
        question: "What should an influencer invoice contain?",
        answer:
          "Generally a unique invoice number and date, the creator's name or business details and PAN, the brand's legal billing entity and address, a PO or campaign reference, deliverables, the amount, GST details only if the creator is registered, the total and payment terms.",
      },
      {
        question: "Can an influencer who isn't GST-registered charge GST?",
        answer:
          "No. Only GST-registered suppliers should charge GST, and a GST tax invoice needs the particulars set out in Rule 46 of the CGST Rules. Confirm specifics with your finance team.",
      },
      {
        question: "Why do influencer invoices get rejected?",
        answer:
          "Common reasons are the wrong billing entity, missing PO or reference, incorrect GST treatment, amounts that don't match the agreement, invoicing before the agreed trigger and incomplete vendor setup.",
      },
    ],
  },
  {
    slug: "creator-payment-delays",
    category: "Campaign Strategy",
    title: "Creator Payment Delays: How Brands Can Avoid Damaging Influencer Relationships",
    seoTitle: "Creator Payment Delays: How Brands Avoid Late Payments",
    excerpt:
      "Why brand payments to creators run late (vendor setup, POs, approvals, invoice errors, finance cycles), how delays affect relationships, how to prevent them, what to say when a payment will be late and how to escalate internally.",
    metaDescription:
      "Why influencer payments get delayed and how brands can prevent it: vendor setup, approvals, invoices and finance cycles, plus how to communicate a delay.",
    author: AUTHOR,
    publishedAt: OPS_PUBLISHED,
    lastReviewed: OPS_REVIEWED,
    readingTime: "6 min read",
    tags: ["creator payment delays", "late influencer payments", "avoid delayed creator payments", "influencer paid late", "brand payment delays creators"],
    related: ["creator-payment-tracking", "influencer-payment-terms", "influencer-retention"],
    hero: {
      src: "/blog/brand-guides/creator-payment-delays.svg",
      alt: "Common causes of late creator payments, from vendor setup and missing POs to slow approvals, and the fixes for each",
    },
    body: [
      {
        type: "paragraph",
        text: "For a large brand, a creator payment is one of hundreds of vendor payments in a month. For a creator, it may be a significant part of their income. That difference explains why payment delays damage relationships so quickly. Creators talk to each other and to their managers, and 'pays late' is one of the hardest reputations for a brand to shake.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Brands avoid creator payment delays by agreeing clear payment terms upfront, starting vendor setup and purchase orders during onboarding, linking content approval to an immediate invoice request, checking invoices within a set time, reviewing payments weekly with finance and having an escalation route. When a delay is unavoidable, tell the creator before the due date, explain why and give a firm new date.",
      },
      { type: "heading", text: "Why payments run late", id: "causes" },
      {
        type: "table",
        headers: ["Cause", "Fix"],
        rows: [
          ["Vendor setup started after the invoice", "Start during onboarding"],
          ["No purchase order raised", "Raise the PO when the agreement is signed"],
          ["Content approved, invoice never requested", "Request the invoice automatically on approval"],
          ["Invoice errors (entity, amount, GST)", "Send exact invoicing instructions upfront"],
          ["Invoice waiting for campaign owner's check", "Set a check deadline (e.g. two working days)"],
          ["Missed the finance payment run", "Know the payment run dates; plan approvals around them"],
          ["Approver away", "Named backup approver"],
          ["Agency hasn't been paid by the brand yet", "Agree agency payment terms that don't make creators wait"],
        ],
      },
      { type: "heading", text: "How delays affect creator relationships", id: "impact" },
      {
        type: "list",
        items: [
          "Creators spend time chasing instead of creating.",
          "Trust falls; future negotiations become harder.",
          "Managers may ask for advances or higher rates to cover the risk.",
          "Good creators prioritise other brands.",
          "The brand's reputation spreads through creator networks.",
        ],
      },
      {
        type: "paragraph",
        text: "Reliable payment is one of the strongest reasons creators keep working with a brand; influencer retention strategy covers the others.",
        links: [{ text: "influencer retention strategy", href: "/blog/influencer-retention" }],
      },
      { type: "heading", text: "Prevent delays: the internal workflow", id: "prevent" },
      {
        type: "template",
        label: "Payment-ready workflow",
        text: "AT AGREEMENT: payment terms signed · PO raised · vendor setup started · invoice instructions sent\nAT APPROVAL: content approved → invoice requested same day\nINVOICE IN: logged → checked within 2 working days → errors flagged specifically\nAPPROVED: sent to finance with agreement and approval → scheduled in next payment run\nWEEKLY: payment review with finance; overdue items escalated\nPAID: creator told the same day",
      },
      {
        type: "paragraph",
        text: "Creator payment tracking describes the tracker and weekly review in detail.",
        links: [{ text: "Creator payment tracking", href: "/blog/creator-payment-tracking" }],
      },
      { type: "heading", text: "When a payment will be late", id: "communicate" },
      {
        type: "list",
        items: [
          "Tell the creator before the due date, not after they ask.",
          "Explain the reason briefly and honestly.",
          "Give a firm new date, and meet it.",
          "If the delay is long, consider paying part now.",
          "Apologise; don't blame finance or the creator.",
        ],
      },
      {
        type: "template",
        label: "Delay message",
        text: "Hi [name], I wanted to let you know before the due date: your payment for [campaign] will be late because [brief reason: vendor setup is still being completed / it missed this week's payment run]. It's now scheduled for [date]. I'm sorry for the delay and I'll confirm as soon as it's paid.",
      },
      { type: "heading", text: "Escalation inside the brand", id: "escalation" },
      {
        type: "list",
        items: [
          "Define who to escalate to when a payment is overdue (marketing lead, then finance lead).",
          "Track overdue payments as a standing item in campaign reviews.",
          "Fix recurring causes: if vendor setup always delays first payments, change when it starts.",
        ],
      },
      { type: "heading", text: "Payments to small enterprises", id: "msme" },
      {
        type: "paragraph",
        text: "Some creators operate as registered micro or small enterprises. The MSMED Act caps the credit period buyers can agree with such suppliers at 45 days from acceptance of the services, and late payments can attract interest. The government's MSME Samadhaan portal lets suppliers raise delayed-payment cases. Ask about registration during vendor setup and keep payment terms well within the limit. This is general information, not legal advice.",
        links: [{ text: "MSME Samadhaan portal", href: SOURCES.msmeSamadhaan }],
      },
      { type: "heading", text: "Agencies and payment flow", id: "agencies" },
      {
        type: "paragraph",
        text: "When an agency pays creators on a brand's behalf, delays often happen because the agency is waiting for the brand to pay it. Agree terms that don't make creators wait on that cycle, and ask your agency how and when it pays creators. The creator-side view is in how creators can handle late brand payments.",
        links: [{ text: "how creators can handle late brand payments", href: "/blog/creators-handle-late-brand-payments" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a consumer tech brand's creators regularly wait 60–70 days for first payments. A review shows the cause: vendor registration only starts when the first invoice arrives, and takes several weeks. The brand moves vendor setup to the day the agreement is signed, raises purchase orders at the same time and adds a payment-date line to every kickoff recap. First payments start arriving within the agreed period, and creators stop having to chase.",
      },
      { type: "heading", text: "A payment-delay audit", id: "audit" },
      {
        type: "template",
        label: "Quarterly payment-delay audit",
        text: "1. List payments made late last quarter\n2. For each: which step caused the delay? (vendor setup / PO / invoice request / invoice error / internal check / payment run / approver away / agency)\n3. Count causes; fix the top one or two\n4. Check whether creators were told before the due date\n5. Update templates, onboarding steps or SLAs accordingly",
      },
      {
        type: "paragraph",
        text: "Influencer onboarding covers starting vendor setup early, and influencer marketing payments covers the full payment workflow.",
        links: [
          { text: "Influencer onboarding", href: "/blog/influencer-onboarding" },
          { text: "influencer marketing payments", href: "/blog/influencer-marketing-payments" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Saying nothing until the creator chases.",
          "Giving a new date and missing it.",
          "Blaming another team to the creator.",
          "Treating late payment as normal because 'finance is slow'.",
          "Not fixing the cause after it happens twice.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Most creator payment delays are internal and preventable: start vendor setup and POs early, link approvals to invoice requests, check invoices quickly, review payments weekly and escalate overdue items. When a delay happens anyway, tell the creator first and keep the new date. Reliable payment is one of the simplest ways to be a brand creators want to work with.",
      },
    ],
    faqs: [
      {
        question: "Why are influencer payments often delayed?",
        answer:
          "Usually internal reasons: vendor setup started late, no purchase order, invoices not requested on approval, invoice errors, slow internal checks, missed payment runs or agencies waiting for brand payments.",
      },
      {
        question: "How can brands avoid delayed creator payments?",
        answer:
          "Agree clear terms, start vendor setup and POs during onboarding, request invoices when content is approved, check invoices within a set time, review payments weekly and escalate overdue items.",
      },
      {
        question: "What should a brand do if a creator payment will be late?",
        answer:
          "Tell the creator before the due date, explain briefly, give a firm new date and meet it. Consider a partial payment if the delay is long.",
      },
    ],
  },
];
