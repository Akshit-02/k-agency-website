import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, CREATOR_FACTS_REVIEWED, SOURCES } from "@/content/creator-resources/shared";

/** Creator business: TDS, GST and workflow. Tax facts checked against official sources in September 2026. */
export const creatorBusinessOperationsPosts: BlogPost[] = [
  {
    slug: "tds-for-influencers-india",
    category: "Creator Resources",
    title: "TDS for Influencers and Content Creators in India: What Creators Should Know",
    seoTitle: "TDS for Influencers and Creators in India (2026)",
    excerpt:
      "Why brands and agencies deduct tax before paying you, which categories they usually use, what changed under the Income-tax Act, 2025, and the records and certificates creators should keep.",
    metaDescription:
      "TDS for influencers and content creators in India: what TDS is, when brands and agencies deduct it, common categories under the Income-tax Act, 2025, Form 131 certificates, checking TDS credit and records to keep.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["TDS for influencers", "TDS content creators India", "section 393", "Form 131", "influencer tax India"],
    related: ["gst-for-influencers-india", "how-to-invoice-brands-as-a-creator-india", "creator-payment-terms"],
    body: [
      {
        type: "paragraph",
        text: "You invoice a brand for ₹50,000 and receive ₹49,500, or ₹45,000. Nothing went wrong: the brand most likely deducted tax at source (TDS) and deposited it against your PAN. Understanding TDS helps you read payments correctly, keep the right records and claim the credit when you file your return.",
      },
      {
        type: "paragraph",
        text: "Important: this is general information, not tax advice. Tax treatment depends on your income, how payments are classified, your business structure and the facts of each deal. Rules were checked against official sources in September 2026. Please consult a chartered accountant or tax professional for your situation.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "TDS (tax deducted at source) is income tax that a payer deducts from certain payments and deposits with the government against the recipient's PAN. Indian brands and agencies paying creators may deduct TDS depending on how they classify the payment (for example as a payment to a contractor, as professional fees, as commission, or, for gifted products, as a business benefit) and whether thresholds are crossed. From 1 April 2026 these rules sit in section 393 of the Income-tax Act, 2025. TDS is not an extra tax: it's credited against your final tax liability, and the payer should give you a TDS certificate (now Form No. 131).",
      },
      { type: "heading", text: "What changed in 2026", id: "what-changed" },
      {
        type: "list",
        items: [
          "The Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026. For transactions up to 31 March 2026, the old Act still applies.",
          "TDS provisions that were spread across sections like 194C, 194H, 194J and 194R are now consolidated in section 393.",
          "The Income-tax Rules, 2026 renumbered forms. The non-salary TDS certificate earlier called Form 16A is now Form No. 131.",
          "Many older blog posts still quote the 1961 section numbers. The underlying categories are similar, but check current thresholds and rates rather than relying on old articles.",
        ],
      },
      {
        type: "paragraph",
        text: "Official references: the Income Tax Department's page on Form No. 131 and its FAQs on forms under the Income-tax Rules, 2026.",
        links: [
          { text: "Form No. 131", href: SOURCES.incomeTaxForm131 },
          { text: "FAQs on forms under the Income-tax Rules, 2026", href: SOURCES.incomeTaxRules2026Forms },
        ],
      },
      { type: "heading", text: "When TDS can apply to creator income", id: "when-it-applies" },
      {
        type: "paragraph",
        text: "The payer decides which category applies based on the nature of the payment. Categories creators commonly encounter are below, with rates and thresholds as generally reported for tax year 2026-27 for resident payees who have provided their PAN. Treat this as orientation, not advice, and confirm the current position.",
      },
      {
        type: "table",
        headers: ["Category (old 1961 section)", "Typical creator situation", "Commonly cited rate", "Commonly cited threshold"],
        rows: [
          ["Payment to contractors (194C)", "Sponsored content treated as a contract for work, which includes advertising", "1% for individuals/HUF, 2% for others", "₹30,000 single payment or ₹1,00,000 in a year"],
          ["Fees for professional services (194J)", "Payment treated as professional fees", "10%", "₹50,000 in a year"],
          ["Commission (194H)", "Affiliate or referral commissions", "2%", "₹20,000 in a year"],
          ["Benefit or perquisite of business (194R)", "Gifted products or trips kept by the creator", "10% of value", "₹20,000 in a year"],
        ],
      },
      {
        type: "list",
        items: [
          "Different payers may classify similar work differently; ask upfront which category they'll use.",
          "If you don't provide your PAN, a higher rate can apply.",
          "Individuals paying for purely personal purposes generally don't deduct TDS, but businesses paying you usually are expected to.",
          "Payments from foreign brands generally don't involve Indian TDS, but that income is still taxable in India if you're a resident. Get advice on foreign income.",
        ],
      },
      { type: "heading", text: "Gifted products and TDS", id: "gifted-products" },
      {
        type: "paragraph",
        text: "Gifted products you keep can be treated as a business benefit. When the value a brand gives you in a year crosses the threshold, it may need to deduct TDS on that value. Because there's no cash payment to deduct from, brands sometimes ask the creator to pay the TDS amount, or pay it themselves. Products you return after review are generally treated differently from products you keep. Keep a log of gifted items and their approximate value.",
      },
      { type: "heading", text: "Agencies and TDS", id: "agencies" },
      {
        type: "paragraph",
        text: "If an agency pays you, the agency is usually the deductor, not the brand. Your TDS certificate should come from whoever paid you, and your invoice should be addressed to them. Check this when you sign, especially if the contract is with the brand but payment comes from an agency.",
      },
      { type: "heading", text: "Your TDS certificate (Form No. 131)", id: "certificate" },
      {
        type: "list",
        items: [
          "The deductor files quarterly TDS statements and generates the certificate from the TRACES portal.",
          "The certificate shows your PAN, the amount paid, the TDS deducted and deposited, and the period.",
          "Ask for it if you don't receive it. It's the deductor's responsibility to issue it.",
          "Check that the PAN and amounts are correct; if not, ask the deductor to correct their TDS statement.",
        ],
      },
      { type: "heading", text: "Checking your TDS credit", id: "checking" },
      {
        type: "paragraph",
        text: "Log in to the Income Tax e-filing portal and check your annual tax statement and Annual Information Statement (AIS) for TDS credited against your PAN. Compare it with your invoices and payments received. Mismatches are common, and are much easier to fix during the year than at filing time.",
        links: [{ text: "Income Tax e-filing portal", href: SOURCES.incomeTax }],
      },
      { type: "heading", text: "How TDS affects your invoices and payments", id: "invoices" },
      {
        type: "template",
        label: "Illustrative example (hypothetical figures, not advice)",
        text: "Invoice amount (fee): ₹50,000 (+ GST if you're registered)\nPayer treats it as a payment to a contractor (individual): TDS at 1% on the fee = ₹500\nAmount received: ₹49,500 (+ GST, if charged)\n\nThe ₹500 appears against your PAN and is credited when you file your return.\n\nIf the same payment were treated as professional fees at 10%: TDS ₹5,000, received ₹45,000.",
      },
      {
        type: "paragraph",
        text: "Your invoice should show the full fee. Don't reduce it yourself; the payer deducts TDS. How to invoice brands as a creator covers invoice fields.",
        links: [{ text: "How to invoice brands as a creator", href: "/blog/how-to-invoice-brands-as-a-creator-india" }],
      },
      { type: "heading", text: "Records to keep", id: "records" },
      {
        type: "list",
        items: [
          "Contracts, POs and email confirmations of scope and fee.",
          "Every invoice you raise, numbered sequentially.",
          "Bank statements showing amounts received.",
          "A TDS register: payer, invoice, amount, TDS deducted, certificate received (yes/no).",
          "Form No. 131 certificates.",
          "A log of gifted products and their approximate value.",
          "Expenses related to your creator work (equipment, software, travel), with bills.",
        ],
      },
      { type: "heading", text: "General information vs advice you need", id: "advice" },
      {
        type: "table",
        headers: ["This guide can help with", "Get professional advice for"],
        rows: [
          ["Understanding why TDS was deducted", "Which category applies to your specific contracts"],
          ["Knowing which records to keep", "Your total tax liability and return filing"],
          ["Checking certificates and credits", "Presumptive taxation and business structure choices"],
          ["Asking brands the right questions", "Foreign income, gifted products of significant value, disputes"],
        ],
      },
      {
        type: "paragraph",
        text: "GST is a separate tax with separate rules; see GST for influencers and creators in India. For negotiating when and how you're paid, see creator payment terms.",
        links: [
          { text: "GST for influencers and creators in India", href: "/blog/gst-for-influencers-india" },
          { text: "creator payment terms", href: "/blog/creator-payment-terms" },
        ],
      },
    ],
    faqs: [
      {
        question: "Why do brands deduct TDS from influencer payments?",
        answer:
          "Indian tax law requires certain payers to deduct tax at source on specified payments, such as payments to contractors, professional fees or commissions, once thresholds are crossed. The deducted amount is deposited against the creator's PAN and credited when they file their return.",
      },
      {
        question: "What replaced Form 16A for TDS certificates?",
        answer:
          "Under the Income-tax Rules, 2026, the non-salary TDS certificate is Form No. 131. It's issued by the deductor from the TRACES portal.",
      },
      {
        question: "Is TDS an extra tax on creators?",
        answer:
          "No. TDS is an advance collection of income tax. It's credited against your final tax liability, and any excess can be refunded after you file your return.",
      },
      {
        question: "Do gifted products attract TDS?",
        answer:
          "They can. Gifted products kept by a creator may be treated as a business benefit, and TDS may apply once the value crosses the annual threshold. Speak to a tax professional about your situation.",
      },
    ],
  },
  {
    slug: "gst-for-influencers-india",
    category: "Creator Resources",
    title: "GST for Influencers and Creators in India: When Does a Creator Need GST?",
    seoTitle: "GST for Influencers in India: When Do Creators Need GST?",
    excerpt:
      "When GST registration becomes mandatory for creators, how it works for services to brands and agencies, inter-state and foreign clients, invoices and records, with the caveats that matter.",
    metaDescription:
      "GST for influencers and creators in India: registration threshold, voluntary registration, GST on creator services, invoices, inter-state and export considerations, agency and brand payments, and records to keep.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["GST for influencers", "GST for creators India", "GST registration threshold", "GST invoice", "influencer tax"],
    related: ["tds-for-influencers-india", "how-to-invoice-brands-as-a-creator-india", "creator-payment-terms"],
    body: [
      {
        type: "paragraph",
        text: "Sooner or later a brand's finance team will ask for your GSTIN, or a creator friend will tell you that you \"must\" register. Whether you need GST depends mainly on your turnover and who you work with. Here's how it works, in plain language.",
      },
      {
        type: "paragraph",
        text: "Important: tax treatment can depend on your circumstances, including your turnover, state, types of income and clients. This is general information, checked against official sources in September 2026, not tax advice. Consult a chartered accountant or GST practitioner before registering or charging GST.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator services to brands, such as sponsored content and UGC, are generally a taxable supply of services under GST. Registration becomes mandatory once your aggregate turnover crosses ₹20 lakh in a financial year (₹10 lakh in certain special category states), and can be required or useful earlier in some situations. Once registered, you charge GST on your invoices (typically 18% for advertising-type services; confirm the applicable rate), issue GST-compliant tax invoices and file returns. If you're not registered, you don't charge GST.",
      },
      { type: "heading", text: "GST basics for creators", id: "basics" },
      {
        type: "list",
        items: [
          "GST (Goods and Services Tax) is charged on supplies of goods and services, and collected by registered suppliers.",
          "Sponsored posts, UGC videos, brand appearances and content licensing are generally services.",
          "Registered suppliers charge GST to clients, can claim input tax credit on eligible business purchases, and file periodic returns.",
          "Unregistered creators don't charge GST and can't claim input tax credit.",
        ],
      },
      { type: "heading", text: "When registration is required", id: "registration" },
      {
        type: "table",
        headers: ["Situation", "General position (confirm with a professional)"],
        rows: [
          ["Aggregate turnover up to ₹20 lakh (₹10 lakh in special category states)", "Registration generally not mandatory for service providers"],
          ["Aggregate turnover above the threshold", "Registration mandatory"],
          ["Services to clients in other states, turnover below threshold", "Service providers below the threshold are exempt from compulsory registration for inter-state supplies"],
          ["Services to foreign brands (exports)", "Counted in aggregate turnover; exports can be zero-rated with conditions"],
          ["Selling goods (merchandise, physical products)", "Different thresholds and rules apply; e-commerce sales can trigger registration regardless of turnover"],
        ],
      },
      {
        type: "paragraph",
        text: "Aggregate turnover is calculated across all your supplies under the same PAN, including exempt and export supplies, not just brand deals. Registration and filing are done through the GST portal.",
        links: [{ text: "GST portal", href: SOURCES.gstPortal }],
      },
      { type: "heading", text: "Voluntary registration: pros and cons", id: "voluntary" },
      {
        type: "table",
        headers: ["Pros", "Cons"],
        rows: [
          ["Some brands and agencies prefer GST-registered vendors", "Monthly or quarterly returns and compliance, even in quiet months"],
          ["You can claim input tax credit on eligible business purchases (cameras, software, services)", "You must charge GST, which may matter to unregistered or small clients"],
          ["Looks more established on vendor forms", "Penalties for late filing"],
        ],
      },
      { type: "heading", text: "GST on your invoices", id: "invoices" },
      {
        type: "list",
        items: [
          "Your client is in the same state: GST is usually split as CGST and SGST.",
          "Your client is in another state: usually IGST.",
          "Show your GSTIN, the client's GSTIN (if registered), the SAC code, taxable value, tax rate and amount, and place of supply.",
          "Invoice numbers must be unique and consecutive within a financial year.",
          "Mandatory invoice contents are set out in Rule 46 of the CGST Rules.",
        ],
      },
      {
        type: "paragraph",
        text: "See Rule 46 of the CGST Rules, and how to invoice brands as a creator for a full template.",
        links: [
          { text: "Rule 46 of the CGST Rules", href: SOURCES.gstRule46 },
          { text: "how to invoice brands as a creator", href: "/blog/how-to-invoice-brands-as-a-creator-india" },
        ],
      },
      {
        type: "template",
        label: "Illustrative GST calculation (hypothetical)",
        text: "Registered creator in Maharashtra\n\nClient in Mumbai (same state)\nFee ₹40,000 · CGST 9% ₹3,600 · SGST 9% ₹3,600 · Total ₹47,200\n\nClient in Bengaluru (different state)\nFee ₹40,000 · IGST 18% ₹7,200 · Total ₹47,200\n\nConfirm the applicable rate and SAC for your services with your accountant.",
      },
      { type: "heading", text: "Foreign brands and export of services", id: "exports" },
      {
        type: "paragraph",
        text: "Services supplied to clients outside India can qualify as export of services, which can be zero-rated if conditions are met (such as receiving payment in convertible foreign exchange, or in Indian rupees where permitted by the RBI). Registered exporters commonly file a Letter of Undertaking (LUT) to export without paying IGST. The rules have conditions and exceptions; get advice before invoicing foreign brands.",
      },
      { type: "heading", text: "Agencies, brands and barter", id: "agencies-barter" },
      {
        type: "list",
        items: [
          "If an agency engages you, you usually invoice the agency, which then invoices the brand.",
          "Brands registered under GST generally prefer GST invoices from registered creators so they can claim input tax credit.",
          "Barter deals (content in exchange for products) can still have GST implications for registered creators. Ask your accountant how to treat them.",
          "Platform payouts (ad revenue, affiliate commissions) have their own treatment. Discuss them with your accountant too.",
        ],
      },
      { type: "heading", text: "GST and TDS are different", id: "gst-vs-tds" },
      {
        type: "paragraph",
        text: "GST is charged on top of your fee and paid to the government through your returns. TDS is income tax deducted from your fee by the payer. A registered creator's invoice may show GST added, while the payment received is reduced by TDS. See TDS for influencers and creators in India.",
        links: [{ text: "TDS for influencers and creators in India", href: "/blog/tds-for-influencers-india" }],
      },
      { type: "heading", text: "Records to keep", id: "records" },
      {
        type: "list",
        items: [
          "All sales invoices and credit notes.",
          "Purchase bills for business expenses where you claim input tax credit.",
          "Contracts and POs.",
          "Bank records matching invoices to receipts.",
          "Returns filed and payment challans.",
          "LUT and foreign-currency receipts for exports.",
        ],
      },
      { type: "heading", text: "Questions to ask your accountant", id: "questions" },
      {
        type: "list",
        items: [
          "Based on my income mix, do I need to register now, and would voluntary registration help?",
          "Which SAC and GST rate apply to each type of service I provide?",
          "Which return filing frequency suits me?",
          "How should I treat barter deals, platform payouts and affiliate income?",
          "What do I need for invoicing foreign brands?",
        ],
      },
    ],
    faqs: [
      {
        question: "Do influencers need GST registration in India?",
        answer:
          "Registration becomes mandatory once aggregate turnover crosses ₹20 lakh in a financial year for service providers (₹10 lakh in certain special category states). Some creators register voluntarily earlier. Check your situation with a tax professional.",
      },
      {
        question: "What GST rate applies to influencer services?",
        answer:
          "Advertising-type services such as sponsored content are generally taxed at 18%. Confirm the SAC code and rate for your specific services with an accountant.",
      },
      {
        question: "Do I need GST if I work with brands in other states?",
        answer:
          "Service providers whose aggregate turnover is below the threshold are exempt from compulsory registration for inter-state supplies of services. Above the threshold, registration is required.",
      },
      {
        question: "Can an unregistered creator charge GST?",
        answer: "No. Only registered suppliers can charge and collect GST. Unregistered creators should issue invoices without GST.",
      },
    ],
  },
  {
    slug: "creator-workflow",
    category: "Creator Resources",
    title: "Creator Workflow: How to Manage Brand Deals, Content and Deadlines Like a Business",
    seoTitle: "Creator Workflow: Manage Brand Deals and Deadlines",
    excerpt:
      "A practical operating system for creators juggling several brand deals: six stages from enquiry to payment, a weekly routine, and a campaign tracker you can download and start using today.",
    metaDescription:
      "A creator workflow for managing brand deals like a business: opportunity tracking, planning, production, approval, reporting and finance, with a downloadable creator campaign tracker and weekly routine.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "11 min read",
    tags: ["creator workflow", "creator campaign tracker", "brand deal management", "creator deal tracker", "content calendar"],
    related: ["creator-brand-deals", "creator-deliverables", "how-to-invoice-brands-as-a-creator-india"],
    body: [
      {
        type: "paragraph",
        text: "One brand deal fits in your head. Four at once, with different briefs, approval contacts, posting dates and invoices, does not. The creators brands rebook are rarely the most talented; they're the ones who never miss a deadline, never lose a brief and always send the report. That's a workflow, not a personality trait.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator workflow is a repeatable system for moving each brand deal through six stages: opportunity (log and qualify enquiries), planning (brief, deliverables, deadlines, approvals), production (scripts, shoots, edits, assets), approval and publishing (revisions, final approval, posting with disclosure), reporting (screenshots, analytics, campaign report) and finance (invoice, payment, tax records). Keep every deal in one tracker, review it weekly, and work backwards from posting dates.",
      },
      { type: "heading", text: "The six stages", id: "six-stages" },
      {
        type: "image",
        src: "/blog/creator-resources/creator-workflow-tracker.svg",
        alt: "Creator workflow in six stages: opportunity, planning, production, approval and publishing, reporting, finance, each with its key tasks, feeding a single campaign tracker",
        caption: "Every deal moves left to right. The tracker holds the status of each one.",
        width: 1200,
        height: 675,
      },
      { type: "subheading", text: "1. Opportunity: track inbound enquiries" },
      {
        type: "list",
        items: [
          "Log every enquiry the day it arrives: brand, contact, channel, what they asked for.",
          "Verify legitimacy before replying in detail. See how to spot fake brand collaboration offers.",
          "Qualify: audience fit, budget, timing, conflicts with existing exclusivity.",
          "Reply within one or two working days.",
        ],
      },
      { type: "subheading", text: "2. Planning: brief, deliverables, deadlines, approvals" },
      {
        type: "list",
        items: [
          "Save the brief and your questions and answers in one folder per campaign.",
          "List each deliverable with its format, platform and length.",
          "Work backwards from the posting date: report ← post ← final approval ← draft ← shoot ← script ← product receipt.",
          "Record who approves, how many rounds, and their feedback deadline.",
          "Confirm payment terms and invoice requirements now, not later.",
        ],
      },
      { type: "subheading", text: "3. Production: scripts, shoots, edits, assets" },
      {
        type: "list",
        items: [
          "Batch similar work: script several campaigns on one day, shoot on another.",
          "Keep a shot list with mandatory product shots, disclosure frames and on-screen text.",
          "Name files consistently: brand_campaign_deliverable_v1.",
          "Back up raw footage until usage periods end.",
        ],
      },
      {
        type: "paragraph",
        text: "For where AI can speed up scripting, editing and repurposing without losing your voice, see the AI content workflow for creators.",
        links: [{ text: "AI content workflow for creators", href: "/blog/ai-content-workflow-for-creators" }],
      },
      { type: "subheading", text: "4. Approval and publishing" },
      {
        type: "list",
        items: [
          "Send drafts with a clear note: what's included, what feedback you need, and by when.",
          "Track revision rounds against the agreed limit. See how to handle brand revisions.",
          "Before posting: disclosure label, platform partnership tool, tags, links, codes, caption approved.",
          "After posting: test links, send live URLs to the brand the same day.",
        ],
      },
      { type: "subheading", text: "5. Reporting" },
      {
        type: "list",
        items: [
          "Set a calendar reminder for the report date (often 7 days after posting).",
          "Take native-insights screenshots with dates visible.",
          "Send a short report compared with your averages. See creator analytics for brand deals.",
          "Turn strong results into a case study.",
        ],
      },
      { type: "subheading", text: "6. Finance" },
      {
        type: "list",
        items: [
          "Invoice on the trigger in your contract (signing, posting) with the right entity and PO.",
          "Record due dates and follow up on the day payment is due.",
          "Log TDS deducted and certificates received.",
          "Keep GST records if you're registered.",
          "Track gifted products and business expenses.",
        ],
      },
      {
        type: "paragraph",
        text: "What to track and how to keep records is covered in creator business expenses.",
        links: [{ text: "creator business expenses", href: "/blog/creator-business-expenses-india" }],
      },
      {
        type: "paragraph",
        text: "Guides for each finance step: how to invoice brands as a creator, creator payment terms, TDS for creators and GST for creators.",
        links: [
          { text: "how to invoice brands as a creator", href: "/blog/how-to-invoice-brands-as-a-creator-india" },
          { text: "creator payment terms", href: "/blog/creator-payment-terms" },
          { text: "TDS for creators", href: "/blog/tds-for-influencers-india" },
          { text: "GST for creators", href: "/blog/gst-for-influencers-india" },
        ],
      },
      { type: "heading", text: "The creator campaign tracker", id: "tracker" },
      {
        type: "paragraph",
        text: "One row per deal, one column per thing you need to know. A spreadsheet is enough; you can move to a CRM or project tool later. Download the creator campaign tracker (CSV) and open it in Google Sheets, Excel or Numbers.",
        links: [{ text: "Download the creator campaign tracker (CSV)", href: "/downloads/creator-campaign-tracker.csv" }],
      },
      {
        type: "table",
        headers: ["Column group", "Columns"],
        rows: [
          ["Opportunity", "Brand · Agency · Contact · Channel · Date received · Verified? · Status"],
          ["Scope", "Deliverables · Platforms · Usage · Exclusivity · Fee · Payment terms"],
          ["Dates", "Product received · Script due · Draft due · Feedback due · Post date · Report due"],
          ["Approval", "Revision rounds allowed · Rounds used · Final approval date"],
          ["Publishing", "Live links · Disclosure done · Links tested"],
          ["Reporting", "Report sent · Key results · Case study?"],
          ["Finance", "Invoice no. · Invoice date · Due date · Amount · GST · TDS · Paid date · Certificate received"],
        ],
      },
      {
        type: "paragraph",
        text: "Suggested statuses: New enquiry → Qualifying → Proposal sent → Negotiating → Confirmed → In production → Awaiting approval → Scheduled → Live → Reported → Invoiced → Paid → Closed. Mark declined deals as Declined rather than deleting them; they're useful history.",
      },
      { type: "heading", text: "Deal tracker vs CRM: which do you need?", id: "tracker-vs-crm" },
      {
        type: "paragraph",
        text: "The campaign tracker above is a deal tracker: one row per confirmed or likely campaign, following it from brief to payment. A creator CRM is the wider record of brands, contacts and conversations over time, including brands you haven't worked with yet, and your brand partnership pipeline is the stage-by-stage view of those opportunities. Most creators need all three, and they can live in the same spreadsheet. See creator CRM and how to build a brand partnership pipeline.",
        links: [
          { text: "creator CRM", href: "/blog/creator-crm" },
          { text: "how to build a brand partnership pipeline", href: "/blog/creator-brand-partnership-pipeline" },
        ],
      },
      { type: "heading", text: "A weekly routine", id: "weekly-routine" },
      {
        type: "template",
        label: "30–45 minutes every Monday",
        text: "1. Inbox sweep: log new enquiries; reply to anything older than 2 days\n2. Deadlines: list everything due this week (scripts, drafts, posts, reports)\n3. Blockers: products not received, feedback overdue, missing POs; send nudges\n4. Money: invoices to send, payments due or overdue\n5. Calendar: block production time around posting dates\n6. Pipeline: pitches to follow up (see weekly prospecting routine)",
      },
      {
        type: "paragraph",
        text: "Pair this with the weekly brand-prospecting routine in how to find brands to collaborate with.",
        links: [{ text: "how to find brands to collaborate with", href: "/blog/how-to-find-brands-to-collaborate-with" }],
      },
      {
        type: "paragraph",
        text: "To document these steps so an editor or manager can follow them, see creator business SOPs; for the relationship side of multiple deals, creator client management.",
        links: [{ text: "creator business SOPs", href: "/blog/creator-business-sops" }, { text: "creator client management", href: "/blog/creator-client-management" }],
      },
      {
        type: "paragraph",
        text: "This workflow is one of eight systems in a creator business; creator operations shows how they connect. Multi-deliverable campaigns with several people and dependencies are covered in creator project management.",
        links: [
          { text: "creator operations", href: "/blog/creator-operations" },
          { text: "creator project management", href: "/blog/creator-project-management" },
        ],
      },
      { type: "heading", text: "Creator workflow checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "Every enquiry logged the day it arrives",
          "One folder per campaign with brief, contract and assets",
          "Deadlines worked backwards from posting date",
          "Revision rounds tracked against the limit",
          "Disclosure checked before every sponsored post",
          "Report reminders set",
          "Invoices sent on the contractual trigger",
          "Payments, TDS and GST logged",
          "Weekly 30-minute review",
        ],
      },
      {
        type: "paragraph",
        text: "For the stages of an individual deal in more depth, see the creator brand deals guide and creator deliverables.",
        links: [
          { text: "creator brand deals guide", href: "/blog/creator-brand-deals" },
          { text: "creator deliverables", href: "/blog/creator-deliverables" },
        ],
      },
      {
        type: "paragraph",
        text: "When the workflow outgrows one person, see creator team building.",
        links: [{ text: "creator team building", href: "/blog/creator-team-building" }],
      },
      {
        type: "paragraph",
        text: "This guide covers brand deliverables. For your own content from idea to published post, see creator content workflow.",
        links: [{ text: "creator content workflow", href: "/blog/creator-content-workflow" }],
      },
    ],
    faqs: [
      {
        question: "How do creators manage multiple brand deals?",
        answer:
          "With one tracker listing every deal's scope, dates, approvals, reporting and payment status, a folder per campaign, deadlines planned backwards from posting dates, and a short weekly review.",
      },
      {
        question: "What should a creator campaign tracker include?",
        answer:
          "Brand and contact details, deliverables, usage and exclusivity, fee and payment terms, key dates, revision rounds, live links, reporting status, and invoice, payment, GST and TDS details.",
      },
      {
        question: "Do creators need a CRM?",
        answer:
          "Not at first. A well-structured spreadsheet works for most creators. A CRM or project tool becomes useful when you're handling many deals or working with a team.",
      },
    ],
  },
];
