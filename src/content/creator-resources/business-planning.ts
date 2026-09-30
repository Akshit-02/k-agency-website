import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, CREATOR_FACTS_REVIEWED } from "@/content/creator-resources/shared";

/** Creator business foundations: expenses and the business plan. */
export const businessPlanningPosts: BlogPost[] = [
  {
    slug: "creator-business-expenses-india",
    category: "Creator Resources",
    title: "Creator Business Expenses: What Indian Creators Should Track and Manage",
    seoTitle: "Creator Business Expenses: What Indian Creators Should Track",
    excerpt:
      "Which costs creators should track, how to separate business and personal spending, what records to keep for income tax and GST, and a simple monthly system that takes twenty minutes.",
    metaDescription:
      "Creator business expenses in India: common expense categories, mixed personal and business use, records for income tax and GST input credit, presumptive taxation caveats, a tracking template and mistakes to avoid.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["creator business expenses", "influencer expenses India", "creator bookkeeping", "track expenses", "creator tax records"],
    related: ["creator-business-plan", "gst-for-influencers-india", "tds-for-influencers-india"],
    body: [
      {
        type: "paragraph",
        text: "Many creators know roughly what they earn and have no idea what they spend. Cameras, lights, editing software, internet, props, travel, freelance editors, platform fees: it adds up. Tracking expenses shows your real profit, helps you price properly, and makes tax time far less stressful.",
      },
      {
        type: "paragraph",
        text: "Important: this is general information, not tax advice. Whether an expense can be claimed, and how, depends on your tax regime, business structure and circumstances. Speak to a chartered accountant. Checked in September 2026.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Indian creators should track every cost connected to their creator work: equipment, software and subscriptions, internet and phone, props and production, travel for content, freelancers and editors, advertising, professional fees, platform and payment fees, workspace and learning. Keep bills and invoices, separate business from personal spending where possible, note the business share of mixed-use items, and record gifted products. Expenses matter for calculating profit, may be deductible depending on your tax regime, and, if you're GST-registered, eligible purchases may support input tax credit.",
      },
      { type: "heading", text: "Common creator expense categories", id: "categories" },
      {
        type: "table",
        headers: ["Category", "Examples", "Notes"],
        rows: [
          ["Equipment", "Camera, phone, lenses, mics, lights, tripods, laptop", "Larger items may be treated as assets rather than one-off expenses"],
          ["Software and subscriptions", "Editing apps, design tools, music libraries, cloud storage, email tools", "Track renewals; cancel unused ones"],
          ["Internet and phone", "Broadband, mobile data, phone bill", "Often mixed personal/business use"],
          ["Production and props", "Props, sets, backdrops, products bought for review", "Keep receipts; note if returned"],
          ["Travel for content", "Tickets, stays, local transport for shoots and events", "Keep itineraries showing business purpose"],
          ["Freelancers and team", "Editors, designers, assistants, managers", "Invoices and payment records; TDS may apply to payments you make"],
          ["Advertising and promotion", "Boosted posts, promoted channels, paid ads", "Platform invoices"],
          ["Professional fees", "Chartered accountant, lawyer, contract review", "Keep invoices"],
          ["Platform and payment fees", "Payment gateway fees, marketplace commissions, platform shares", "Often deducted before payout; record the gross"],
          ["Workspace", "Studio rent, co-working, a share of home office costs", "Get advice on home-office treatment"],
          ["Learning", "Courses, workshops, books relevant to your work", "Keep receipts"],
          ["Website and domain", "Domain, hosting, website builder, business email", "Annual renewals"],
        ],
      },
      { type: "heading", text: "Mixed personal and business use", id: "mixed-use" },
      {
        type: "paragraph",
        text: "Your phone, internet connection and home often serve both your personal life and your creator business. Keep a reasonable, consistent estimate of the business share (for example, a percentage of your phone bill) and a note explaining how you arrived at it. Your accountant can advise on what's acceptable.",
      },
      { type: "heading", text: "Records to keep", id: "records" },
      {
        type: "list",
        items: [
          "Bills and invoices for every business purchase, ideally with your GSTIN on them if you're registered.",
          "Bank and UPI statements showing payments.",
          "Invoices from freelancers you pay.",
          "Platform statements showing gross revenue and fees deducted.",
          "A log of gifted products with approximate values.",
          "Asset register for larger equipment (date, price, what it is).",
        ],
      },
      { type: "heading", text: "How expenses interact with tax", id: "tax" },
      {
        type: "list",
        items: [
          "Income tax: under normal computation, genuine business expenses reduce taxable profit. Under a presumptive taxation scheme (if you're eligible and opt in), income is estimated as a percentage of receipts and separate expense claims generally don't apply. Which is better depends on your numbers; ask your accountant.",
          "The Income-tax Act, 2025 has applied from 1 April 2026 and renumbered many provisions, so older guides quoting 1961 section numbers may be out of date.",
          "GST: if you're registered, GST paid on eligible business purchases may be claimed as input tax credit against the GST you collect, subject to conditions. You need proper tax invoices.",
          "TDS: if you pay freelancers or others above thresholds in a business capacity, you may have TDS obligations yourself. Check with your accountant.",
        ],
      },
      {
        type: "paragraph",
        text: "See GST for creators and TDS for creators.",
        links: [
          { text: "GST for creators", href: "/blog/gst-for-influencers-india" },
          { text: "TDS for creators", href: "/blog/tds-for-influencers-india" },
        ],
      },
      { type: "heading", text: "A simple monthly system", id: "system" },
      {
        type: "template",
        label: "20 minutes on the first of each month",
        text: "1. Download last month's bank and UPI statements\n2. Tag each business payment with a category\n3. Match each to a bill or invoice (save PDFs in a dated folder)\n4. Record mixed-use items at your agreed business share\n5. Log gifted products received\n6. Add totals to your creator analytics dashboard\n7. Note subscriptions to cancel",
      },
      {
        type: "template",
        label: "Expense log columns",
        text: "Date | Vendor | Category | Description | Amount (INR) | GST on bill | Business share % | Payment method | Bill saved? | Notes",
      },
      {
        type: "paragraph",
        text: "Your monthly totals feed the revenue section of your creator analytics dashboard, so you can see net earnings, not just income.",
        links: [{ text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" }],
      },
      { type: "heading", text: "Use expenses to price better", id: "pricing" },
      {
        type: "paragraph",
        text: "Once you know your monthly costs, you know your break-even. If a Reel takes a day, props, a location and an editor, your fee needs to cover those before it pays you. Factor production costs into your rate card and proposals. See influencer rate card and how much creators should charge.",
        links: [
          { text: "influencer rate card", href: "/blog/influencer-rate-card-india" },
          { text: "how much creators should charge", href: "/blog/how-much-should-creators-charge-india" },
        ],
      },
      { type: "heading", text: "Mistakes to avoid", id: "mistakes" },
      {
        type: "list",
        items: [
          "Mixing all spending in one account with no records.",
          "Losing bills, especially for large equipment.",
          "Claiming personal spending as business costs.",
          "Forgetting platform fees deducted before payouts.",
          "Paying for subscriptions you no longer use.",
          "Leaving everything until the tax deadline.",
        ],
      },
      {
        type: "paragraph",
        text: "Tracking tells you what you spent; a creator business budget plans what you'll spend before it happens.",
        links: [{ text: "creator business budget", href: "/blog/creator-business-budget" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Expense tracking isn't glamorous, but it's the difference between knowing your income and knowing your profit. Set up one log, spend twenty minutes a month on it, keep every bill, and review it with an accountant each year. Then use the numbers in your creator business plan.",
        links: [{ text: "creator business plan", href: "/blog/creator-business-plan" }],
      },
    ],
    faqs: [
      {
        question: "What expenses should creators track?",
        answer:
          "Equipment, software and subscriptions, internet and phone, props and production, travel for content, freelancers, advertising, professional fees, platform and payment fees, workspace, learning, and website costs.",
      },
      {
        question: "Can creators claim business expenses in India?",
        answer:
          "Genuine business expenses can reduce taxable profit under normal computation, but under presumptive taxation separate expense claims generally don't apply. The right approach depends on your situation; consult a chartered accountant.",
      },
      {
        question: "How do I handle phone and internet bills used personally and for work?",
        answer: "Keep a reasonable, consistent estimate of the business share with a note explaining it, and confirm the approach with your accountant.",
      },
    ],
  },
  {
    slug: "creator-business-plan",
    category: "Creator Resources",
    title: "Creator Business Plan: How to Turn Content Creation Into a Sustainable Business",
    seoTitle: "Creator Business Plan: Build a Sustainable Creator Business",
    excerpt:
      "A practical one-page business plan for creators: positioning, audience, content engine, revenue mix, pricing, operations, finances, risks and a 12-month roadmap, with a template you can fill in today.",
    metaDescription:
      "How to write a creator business plan: positioning, audience, content strategy, revenue streams, pricing, operations, finances, risks, milestones and KPIs, with a one-page template and 12-month roadmap.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "13 min read",
    tags: ["creator business plan", "content creator business", "creator strategy", "creator revenue plan", "sustainable creator business"],
    related: ["creator-business-kit", "creator-monetization-india", "creator-analytics-dashboard"],
    body: [
      {
        type: "paragraph",
        text: "Most creators don't decide to start a business. They make content, some brand deals arrive, and one day they realise it's their income. A business plan is how you move from reacting to deciding: what you're building, who pays you, what it costs, and what could go wrong.",
      },
      {
        type: "paragraph",
        text: "This is about strategy. For the documents you need for brand deals, see the creator business kit; for tracking costs, see creator business expenses.",
        links: [
          { text: "creator business kit", href: "/blog/creator-business-kit" },
          { text: "creator business expenses", href: "/blog/creator-business-expenses-india" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator business plan is a short document that defines your positioning and audience, how you'll make content consistently, which revenue streams you'll build and in what order, how you'll price, what it costs to run, what risks you face, and what you'll achieve in the next 12 months. Keep it to one or two pages, base it on your real analytics and income, diversify so no single platform or client dominates, and review it every quarter.",
      },
      { type: "heading", text: "The nine sections of a creator business plan", id: "sections" },
      { type: "subheading", text: "1. Positioning" },
      {
        type: "paragraph",
        text: "What you make, for whom, and why you. See how to build a creator brand and creator niche selection.",
        links: [
          { text: "how to build a creator brand", href: "/blog/how-to-build-a-creator-brand" },
          { text: "creator niche selection", href: "/blog/creator-niche-selection" },
        ],
      },
      { type: "subheading", text: "2. Audience" },
      {
        type: "paragraph",
        text: "Who they are (age, cities, language), what they want, where they spend time, and which platforms you'll prioritise.",
      },
      { type: "subheading", text: "3. Content engine" },
      {
        type: "paragraph",
        text: "Pillars, formats, publishing frequency per platform, and the workflow that makes it sustainable. See the AI content workflow for creators.",
        links: [{ text: "AI content workflow for creators", href: "/blog/ai-content-workflow-for-creators" }],
      },
      { type: "subheading", text: "4. Owned audience" },
      {
        type: "paragraph",
        text: "How you'll move followers onto channels you control: website, newsletter, community. See how to build a creator website and how to build an email newsletter.",
        links: [
          { text: "how to build a creator website", href: "/blog/how-to-build-a-creator-website" },
          { text: "how to build an email newsletter", href: "/blog/creator-newsletter-india" },
        ],
      },
      { type: "subheading", text: "5. Revenue mix" },
      {
        type: "table",
        headers: ["Stream", "Guide", "Role in the plan"],
        rows: [
          ["Brand deals", "Creator brand deals", "Often the largest early income"],
          ["Platform revenue", "YouTube creator monetization", "Scales with views; varies by platform"],
          ["Affiliate and Shopping", "Creator affiliate marketing", "Rewards recommendations"],
          ["Digital products", "How to sell digital products", "Owned, scalable"],
          ["Memberships and community", "Creator memberships", "Recurring, loyal"],
          ["Services and licensing", "Creator content licensing", "High value, time-limited"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: creator brand deals, YouTube creator monetization, creator affiliate marketing, how to sell digital products, creator memberships and creator content licensing.",
        links: [
          { text: "creator brand deals", href: "/blog/creator-brand-deals" },
          { text: "YouTube creator monetization", href: "/blog/youtube-creator-monetization" },
          { text: "creator affiliate marketing", href: "/blog/creator-affiliate-marketing-india" },
          { text: "how to sell digital products", href: "/blog/sell-digital-products-as-a-creator-india" },
          { text: "creator memberships", href: "/blog/creator-memberships" },
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
        ],
      },
      { type: "subheading", text: "6. Pricing" },
      {
        type: "paragraph",
        text: "Your rate card, add-ons (usage, whitelisting, exclusivity) and product prices, and when you'll review them. See influencer rate card.",
        links: [{ text: "influencer rate card", href: "/blog/influencer-rate-card-india" }],
      },
      { type: "subheading", text: "7. Operations" },
      {
        type: "paragraph",
        text: "How you manage deals, contracts, invoices and deadlines, and who helps you (editor, manager, accountant). See the creator workflow, influencer contract guide and how to invoice brands.",
        links: [
          { text: "creator workflow", href: "/blog/creator-workflow" },
          { text: "influencer contract guide", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "how to invoice brands", href: "/blog/how-to-invoice-brands-as-a-creator-india" },
        ],
      },
      { type: "subheading", text: "8. Finances" },
      {
        type: "paragraph",
        text: "Monthly costs, income targets by stream, cash buffer, tax set-aside and when you'll pay yourself. Use real numbers from your dashboard and expense log.",
      },
      { type: "subheading", text: "9. Risks" },
      {
        type: "table",
        headers: ["Risk", "Mitigation"],
        rows: [
          ["Platform dependence (algorithm, policy, account loss)", "Owned audience; multiple platforms; backups of content"],
          ["Client concentration (one brand is most income)", "Cap any single client's share; build other streams"],
          ["Irregular income", "Cash buffer; recurring streams; advance payments"],
          ["Burnout", "Sustainable schedule; batching; help with editing and admin"],
          ["Legal and tax", "Contracts; disclosure; accountant; records"],
          ["Reputation", "Honest recommendations; brand fit; clear disclosure"],
          ["Account security and scams", "Two-factor authentication; verify offers"],
        ],
      },
      { type: "heading", text: "One-page business plan template", id: "template" },
      {
        type: "template",
        label: "Fill in and review every quarter",
        text: "CREATOR BUSINESS PLAN — [Name] — [Quarter, Year]\n\nPOSITIONING: I make [content] for [audience] who want [outcome], in [language/style].\nAUDIENCE: [age] · [cities/regions] · [languages] · Priority platforms: [1], [2]\nCONTENT ENGINE: Pillars [a, b, c] · [N] posts/week on [platform] · [N] videos/month on [platform]\nOWNED AUDIENCE: Website [live/planned] · Newsletter [subs → target] · Community [members → target]\n\nREVENUE MIX (current → 12-month target, as % of income)\nBrand deals __% → __% · Platform __% → __% · Affiliate/Shopping __% → __%\nProducts __% → __% · Memberships __% → __% · Services/licensing __% → __%\n\nPRICING: Rate card reviewed [date] · Add-ons priced [yes/no] · Products [list + prices]\nOPERATIONS: Tracker [yes/no] · Contracts template [yes/no] · Editor [yes/no] · Accountant [yes/no]\nFINANCES: Monthly costs ₹__ · Cash buffer __ months · Tax set-aside __% of income\nTOP 3 RISKS + MITIGATIONS: 1. __ 2. __ 3. __\n\n12-MONTH MILESTONES: Q1 __ · Q2 __ · Q3 __ · Q4 __\nKPIs: avg views/format · email subs · revenue by stream · largest client share",
      },
      { type: "heading", text: "A 12-month roadmap (illustrative)", id: "roadmap" },
      {
        type: "table",
        headers: ["Quarter", "Focus", "Example milestones"],
        rows: [
          ["Q1", "Foundations", "Positioning set; media kit and rate card updated; website and newsletter live; tracker in use"],
          ["Q2", "Brand revenue", "Weekly pitching routine; 2–3 repeat partners; usage add-ons priced"],
          ["Q3", "Owned revenue", "First digital product or membership launched; affiliate and Shopping set up"],
          ["Q4", "Resilience", "No single client above an agreed share; cash buffer built; plan reviewed and reset"],
        ],
      },
      {
        type: "paragraph",
        text: "Targets are yours to set from your own numbers. We don't publish typical creator incomes because they vary too widely to be useful, and any promise of a specific income would be misleading.",
      },
      { type: "heading", text: "Reviewing the plan", id: "review" },
      {
        type: "list",
        items: [
          "Monthly: check your dashboard against the plan's KPIs.",
          "Quarterly: update revenue mix, prices, risks and next quarter's milestones.",
          "Annually: revisit positioning and platforms.",
        ],
      },
      {
        type: "paragraph",
        text: "Your creator analytics dashboard is the input for every review.",
        links: [{ text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" }],
      },
      {
        type: "paragraph",
        text: "A plan needs an operating model to deliver it; creator operations covers the systems behind the plan. When the business outgrows one person, scaling a creator business explains the growth stages.",
        links: [
          { text: "creator operations", href: "/blog/creator-operations" },
          { text: "scaling a creator business", href: "/blog/scaling-creator-business" },
        ],
      },
      { type: "heading", text: "Mistakes to avoid", id: "mistakes" },
      {
        type: "list",
        items: [
          "Writing a 30-page plan nobody reads; one or two pages is enough.",
          "Basing targets on other creators' claimed earnings instead of your numbers.",
          "Relying on one platform or one brand for most income.",
          "Ignoring costs and tax when setting income targets.",
          "Never reviewing the plan after writing it.",
        ],
      },
      {
        type: "paragraph",
        text: "To judge which formats earn their place in the plan, measure creator content ROI; to run the plan consistently, document creator business SOPs.",
        links: [{ text: "creator content ROI", href: "/blog/creator-content-roi" }, { text: "creator business SOPs", href: "/blog/creator-business-sops" }],
      },
      {
        type: "paragraph",
        text: "Before writing the revenue section, it helps to choose a primary model and check concentration risk; see creator business model and creator revenue diversification.",
        links: [
          { text: "creator business model", href: "/blog/creator-business-model" },
          { text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" },
        ],
      },
      {
        type: "paragraph",
        text: "Content pillars for creators explains how to choose the topics your plan is built on.",
        links: [{ text: "Content pillars for creators", href: "/blog/content-pillars-for-creators" }],
      },
      {
        type: "paragraph",
        text: "Turn the costs section of your plan into a monthly creator business budget, and the revenue section into a creator revenue forecast.",
        links: [
          { text: "creator business budget", href: "/blog/creator-business-budget" },
          { text: "creator revenue forecast", href: "/blog/creator-revenue-forecasting" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator business plan doesn't predict the future; it helps you make better decisions when things change. Write the one-page version this week using your real numbers, pick three milestones for the next quarter, and review it every three months. Everything in Creator Resources, from media kits to memberships, slots into one of its sections.",
        links: [{ text: "Creator Resources", href: "/creator-resources" }],
      },
    ],
    faqs: [
      {
        question: "Do creators need a business plan?",
        answer:
          "A short one helps. It clarifies positioning, revenue priorities, costs and risks, and gives you a basis for quarterly decisions instead of reacting to whatever arrives.",
      },
      {
        question: "What should a creator business plan include?",
        answer:
          "Positioning, audience, content engine, owned audience, revenue mix, pricing, operations, finances, risks, 12-month milestones and KPIs.",
      },
      {
        question: "How can creators make their income more stable?",
        answer:
          "By diversifying revenue streams, building an owned audience, adding recurring income such as memberships, limiting reliance on any single client or platform, and keeping a cash buffer.",
      },
    ],
  },
];
