import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 03, writer A (2026-11-12): B2B industry guides for a brand's own accounts. Manufacturing (01R),
 * cross-industry B2B strategy (02), IT companies (03) and LinkedIn for professional services (04). Platform and
 * professional-body facts checked against official sources in November 2026. Sources log: smm-sources-smm-b2b.md
 * in the batch scratchpad.
 */
export const smmB2bPosts: BlogPost[] = [
  {
    slug: "social-media-management-manufacturing-companies",
    category: "Social Media Management",
    title:
      "Social Media Management for Manufacturing Companies: Making Industrial Expertise Visible to Buyers, Partners and Talent",
    seoTitle: "Social Media Management for Manufacturing Companies",
    excerpt:
      "How manufacturers can run their own social accounts for four audiences at once: buyers, distributors, skilled talent and the local community, with a content planning matrix and the approvals shop-floor content needs.",
    metaDescription:
      "Social media management for manufacturing companies: a content matrix for buyers, dealers and talent, plant storytelling with safety sign-off, and trade shows.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "11 min read",
    tags: [
      "social media management for manufacturing companies",
      "manufacturing company social media strategy",
      "industrial B2B social media",
      "LinkedIn for manufacturers",
      "trade show social media plan",
    ],
    related: ["manufacturing-influencer-marketing-india", "linkedin-company-page-management", "social-media-content-approval-process"],
    hero: {
      src: "/blog/brand-guides/social-media-management-manufacturing-companies.svg",
      alt: "A manufacturing content planning matrix with four audience columns, buyers, distributors and dealers, skilled talent and the local community, each showing what to post and where, above a bar reminding that every shop-floor post needs confidentiality and safety sign-off",
    },
    body: [
      {
        type: "paragraph",
        text: "Your plant has just cleared a customer audit, a new machining line is running, and the sales team is packing for an industrial exhibition next month. The company LinkedIn page, meanwhile, last posted a festival greeting and a stock photo of a factory that isn't yours. The expertise is real. Buyers, distributors and job seekers just can't see it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media management for manufacturing companies means showing buyers, distributors and skilled candidates what your plant actually does, with approvals built in. Plan content by audience: process and quality proof for procurement teams, product and training updates for dealers, safety culture and career paths for talent, and local updates for the community. Use LinkedIn as the base, YouTube for process video, and post only certifications, capacities and claims the company can verify today.",
      },
      { type: "heading", text: "Who you're really posting for", id: "audiences" },
      {
        type: "paragraph",
        text: "A manufacturing company rarely has one audience. A procurement manager comparing three vendors, a dealer deciding which brand to push this quarter, a diploma engineer choosing between two job offers and a family living near the plant may all look at the same page, for very different reasons. Planning starts with what each of them needs to see.",
      },
      {
        type: "table",
        headers: ["Audience", "What they want to know", "Content that answers it"],
        rows: [
          ["Buyers and procurement teams", "Can you make it consistently, to our standard and at our volumes?", "Process explainers, quality checks, capability posts, certifications you hold, application notes"],
          ["Export buyers", "Can we trust a supplier we may not visit before the first order?", "Clear capability overviews, standards you work to, exhibition schedules, plant walkthrough video"],
          ["Distributors and dealers", "Is this brand easy to sell, install and support?", "Product updates, installation tips, training clips, approved scheme posts, partner recognition"],
          ["Skilled talent", "Is this a safe, well-run place to learn and grow?", "Training and apprenticeship posts, safety practices, supervisors explaining a skill, career paths"],
          ["Local community", "Is the plant a good neighbour?", "Local hiring drives, plant visit days, environment and CSR updates the company has verified"],
        ],
      },
      { type: "heading", text: "A content planning matrix for manufacturers", id: "planning-matrix" },
      {
        type: "paragraph",
        text: "Use this matrix to plan each month. Every row is an audience; the columns tell you what to make, where it goes, who supplies the facts and who approves it. A small team doesn't need to fill every row every month. Pick two audiences to prioritise each quarter and keep the others ticking over.",
      },
      {
        type: "table",
        headers: ["Audience", "Content types", "Main platforms", "Supplied by", "Approved by"],
        rows: [
          ["Buyers and procurement", "Process explainers, inspection clips, application notes, capability posts", "LinkedIn, YouTube", "Production, quality, applications engineering", "Plant head and quality head"],
          ["Export buyers", "Capability overviews in plain international English, standards, exhibition updates", "LinkedIn, YouTube", "Export sales, quality", "Export head and quality head"],
          ["Distributors and dealers", "New product notes, installation tips, training video, scheme announcements", "LinkedIn, Facebook", "Sales and service teams", "Sales head"],
          ["Skilled talent", "Training, apprenticeships, safety practices, team stories with consent", "LinkedIn, Instagram", "HR, plant supervisors", "HR and the safety (EHS) lead"],
          ["Local community", "Hiring drives, plant visit days, verified environment and CSR updates", "Facebook, LinkedIn", "Admin and CSR teams", "Management"],
        ],
      },
      { type: "subheading", text: "How to use the matrix each month" },
      {
        type: "list",
        items: [
          "Start from this quarter's business priority: a new product, an exhibition, a hiring push or a new export market.",
          "Choose the two rows that serve that priority and plan most posts there.",
          "Book one shop-floor capture session a month instead of filming whenever someone remembers.",
          "Give every post a fact owner and an approver before design starts, not after.",
          "Review what each audience actually did: questions from buyers, dealer requests, job applications, not only likes.",
        ],
      },
      { type: "heading", text: "Plant and process storytelling, with confidentiality and safety sign-off", id: "plant-process" },
      {
        type: "paragraph",
        text: "The shop floor is your most persuasive content, and also the riskiest. A clip of a press line or an inspection bench shows buyers more than any brochure. But customer parts, drawings, tooling and process settings may be covered by confidentiality agreements, and a video showing someone without the right protective equipment can undo years of safety work in a single post.",
      },
      {
        type: "paragraph",
        text: "So plant content needs a clear sign-off chain: the plant or production head for what can be shown, the quality head for technical claims, the safety lead for anything filmed on the floor, and sales when a customer's part or programme could be identified. How to set up stages and turnaround times is covered in our guide to the social media content approval process.",
        links: [{ text: "social media content approval process", href: "/blog/social-media-content-approval-process" }],
      },
      { type: "subheading", text: "Checklist: before you film on the shop floor" },
      {
        type: "list",
        items: [
          "Confirm which customer parts, drawings, moulds and fixtures are covered by confidentiality agreements, and keep them out of frame.",
          "Check screens, whiteboards, job cards and labels for customer names, part numbers and process settings.",
          "Ask the safety lead to confirm that everyone in frame follows the plant's protective equipment and safety rules.",
          "Don't show shortcuts, removed guards or unsafe handling, even in casual behind-the-scenes clips.",
          "Ask employees before filming them, and make it easy for them to say no.",
          "Have the plant or quality head check every technical claim in the caption.",
          "Record who approved each post and when.",
        ],
      },
      {
        type: "paragraph",
        text: "Employees' faces and names are personal data. India's Digital Personal Data Protection Act, 2023 now has rules in place: the government notified the DPDP Rules in November 2025 with phased compliance, according to the Press Information Bureau. Agree with HR and your legal adviser how consent for workplace photos and videos is collected, recorded and withdrawn.",
        links: [{ text: "according to the Press Information Bureau", href: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf" }],
      },
      { type: "heading", text: "Quality, certifications and capacity claims", id: "certifications" },
      {
        type: "paragraph",
        text: "Buyers notice certifications, and serious buyers check them. Post only certificates the company currently holds, name the standard and its scope accurately (which site, product range or process it covers), and update or remove posts when a certificate lapses or the scope changes. A quality management system certificate, such as one to ISO 9001, is about how the organisation manages quality. It isn't a product approval, and captions shouldn't blur the two.",
      },
      {
        type: "paragraph",
        text: "Treat capacity, tolerances, test results, customer lists and export destinations the same way: if sales and quality can't show a document behind it, it doesn't go in a post. Certification bodies and product-mark schemes often have their own rules on how marks and logos can be displayed, so check those before a mark appears on a creative. A simple certificate register, with expiry dates and approved wording, saves a lot of last-minute questions.",
      },
      { type: "heading", text: "Turning technical documents into posts", id: "technical-documents" },
      {
        type: "paragraph",
        text: "Datasheets, installation manuals and application notes are full of useful content, but they're written for someone who is already evaluating you. Social media can pull one useful idea out of each document and make it readable in a minute.",
      },
      {
        type: "table",
        headers: ["Source document", "Social format", "What to check first"],
        rows: [
          ["Product datasheet", "Carousel on how to read the key values, or a document post", "Values match the current revision"],
          ["Installation manual", "Short video of one installation step", "Safety warnings stay intact"],
          ["Application note", "Post explaining which grade suits which application", "Applications engineer signs off"],
          ["Inspection procedure", "Clip of one inspection step with a plain-language caption", "No customer parts or data visible"],
          ["Sales FAQ", "Text post or short video answering one question", "Sales head confirms the answer"],
          ["Maintenance schedule", "Checklist graphic for dealers and end users", "Matches the manual exactly"],
        ],
      },
      {
        type: "paragraph",
        text: "LinkedIn lets Pages upload documents to posts. At the time of writing (November 2026), its Help Centre lists PDF, PPT, PPTX, DOC and DOCX files of up to 100MB and 300 pages. In practice, a short, designed document of a few pages tends to be easier to read on a phone than a full catalogue upload.",
        links: [{ text: "upload documents to posts", href: "https://www.linkedin.com/help/linkedin/answer/a518909" }],
      },
      { type: "heading", text: "Trade shows, exhibitions and export buyers", id: "trade-shows-export" },
      {
        type: "paragraph",
        text: "An exhibition is one of the few moments when buyers, dealers and competitors are all paying attention to your category at once. Treat it as a short campaign rather than a single 'visit us at stall' post.",
      },
      {
        type: "list",
        items: [
          "A few weeks before: announce the stall location, what you'll display and which engineers or managers will be there.",
          "During the show: post short clips of live demos the same day, and film visitors only with their agreement.",
          "After the show: share a recap, then answer the questions visitors asked in posts over the following weeks.",
        ],
      },
      {
        type: "paragraph",
        text: "Export buyers may never visit the plant before a first order, so your page often stands in for that visit. Write in clear international English, use the units and standards the buyer's market expects, and list export markets only if sales confirms the list is accurate and shareable. If divisions serve very different markets, LinkedIn Showcase Pages can give a business unit its own page. LinkedIn's Help Centre says only a super admin of the parent Page can create one, with up to 25 per Page at the time of writing. Page setup and admin roles are covered in LinkedIn company page management.",
        links: [
          { text: "LinkedIn Showcase Pages", href: "https://www.linkedin.com/help/linkedin/answer/44863" },
          { text: "LinkedIn company page management", href: "/blog/linkedin-company-page-management" },
        ],
      },
      { type: "heading", text: "Distributors, dealers and skilled recruitment", id: "distributors-recruitment" },
      { type: "subheading", text: "Supporting the distribution network" },
      {
        type: "paragraph",
        text: "Dealers and distributors want material they can use: approved product images, short explainer clips, installation tips and launch announcements they can reshare. Public posts can recognise partners (with their permission), announce new territories once agreements are signed, and show training sessions. Keep prices, margins and scheme terms out of public feeds unless sales has approved them; dealer-only information belongs in your dealer communication channels.",
      },
      { type: "subheading", text: "Recruiting skilled people" },
      {
        type: "paragraph",
        text: "Machinists, welders, maintenance technicians, quality inspectors and engineers judge a plant on safety, training and growth. Show apprenticeship and training programmes, supervisors explaining a skill, and real career paths from operator to supervisor, with consent from everyone shown. Many candidates for shop-floor roles may respond better to Hindi or a regional language than to corporate English. Our guide to social media employer branding covers recruitment content in more depth.",
        links: [{ text: "social media employer branding", href: "/blog/social-media-employer-branding" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Posting only greetings, awards and dignitary visits.",
          "Using stock photos of factories that aren't yours.",
          "Filming customer parts or drawings without checking confidentiality agreements.",
          "Showing missing protective equipment or unsafe handling in casual clips.",
          "Listing certifications that have lapsed, or overstating their scope.",
          "Writing captions only engineers understand, or so vague that nobody learns anything.",
          "Treating a trade show as one post instead of a few weeks of content.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Name one owner in marketing and one technical reviewer in the plant.",
          "Run one monthly capture session with a shot list built from the matrix.",
          "Keep a certificate and claims register with expiry dates and approved wording.",
          "Build a backlog of posts from your ten most-used datasheets and sales FAQs.",
          "Plan each exhibition as a campaign, with posts before, during and after.",
        ],
      },
      {
        type: "paragraph",
        text: "Your own channels and creator partnerships do different jobs. Industrial educators, engineers and trade creators who already have an audience can explain your products to people your page doesn't reach yet; influencer marketing for manufacturing brands covers how that works. This guide is about the accounts you run yourself. For the wider B2B content system behind them, see our B2B social media strategy guide.",
        links: [
          { text: "influencer marketing for manufacturing brands", href: "/blog/manufacturing-influencer-marketing-india" },
          { text: "B2B social media strategy", href: "/blog/b2b-social-media-strategy" },
        ],
      },
      {
        type: "paragraph",
        text: "If your plant team can supply footage and facts but nobody has time to plan, design and publish, Kudozz's social media management for industrial teams covers content planning, creative, editing and publishing, with shoots scoped separately.",
        links: [{ text: "social media management for industrial teams", href: "/services/social-media-management#content-planning" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "List the two audiences that matter most this quarter, fill their rows in the matrix, and book one shop-floor session with your safety and quality leads present. Start a certificate register before you post a single badge.",
      },
      {
        type: "paragraph",
        text: "Manufacturing content earns trust when it's specific, accurate and approved by the people who run the plant. Do that consistently and buyers, dealers and candidates will see the company your customers already know.",
      },
    ],
    faqs: [
      {
        question: "Is LinkedIn enough for a manufacturing company?",
        answer:
          "For buyer and export audiences, LinkedIn is usually the base, and YouTube is useful for process and product video that people search for. Dealers, local communities and shop-floor candidates may be more active on Facebook, Instagram or regional-language channels. Start with LinkedIn, then add a second platform only when you know which audience it serves and who will feed it.",
      },
      {
        question: "Can we post photos of parts we make for our customers?",
        answer:
          "Only if the customer agrees. Many supply agreements restrict showing customer parts, drawings or even naming the relationship. Check the agreement, ask the customer in writing when in doubt, and record what they approved. If you can't show the part, show the process using your own products, sample pieces or generic components instead.",
      },
      {
        question: "How often should a manufacturer post?",
        answer:
          "Consistency matters more than volume. A steady rhythm of a few useful posts a week on LinkedIn is easier to sustain than daily posting that stops after a month. Plan around your capture capacity: if the plant can support one filming session a month, plan the calendar from what that session can realistically produce.",
      },
      {
        question: "Who should approve shop-floor content?",
        answer:
          "At minimum, the plant or production head for what can be shown, the safety lead for anything filmed on the floor, and the quality head for technical claims. Sales should check any post that might identify a customer. Agree turnaround times in advance, so approvals don't hold the calendar up for weeks.",
      },
      {
        question: "Should we post in Hindi or regional languages?",
        answer:
          "For recruitment, community and some dealer content, often yes. Shop-floor candidates and local communities may respond better in the language they use every day. Buyer and export content is usually best in clear English. You can mix both on one page, as long as each post is written for the audience it's meant to reach.",
      },
    ],
  },
  {
    slug: "b2b-social-media-strategy",
    category: "Social Media Management",
    title: "B2B Social Media Strategy: How to Turn Industry Expertise Into Consistent Brand Content",
    seoTitle: "B2B Social Media Strategy: Turning Expertise Into Content",
    excerpt:
      "A practical B2B social media strategy: capture expertise through subject expert interviews and question banks, organise it into content pillars, publish through the company page and experts, and measure more than likes.",
    metaDescription:
      "B2B social media strategy: turn expert knowledge into steady content with SME interviews, a pillar framework, case studies with permission and better metrics.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "B2B social media strategy",
      "B2B content strategy for social media",
      "B2B LinkedIn content",
      "thought leadership content",
      "subject matter expert content",
    ],
    related: ["b2b-influencer-marketing-india", "linkedin-company-page-management", "social-media-kpis"],
    hero: {
      src: "/blog/brand-guides/b2b-social-media-strategy.svg",
      alt: "An expertise-to-content system in four steps: capture knowledge from expert interviews and buyer questions, shape it into content pillars, check it with experts and clients, then publish and reuse, with a loop back from sales feedback",
    },
    body: [
      {
        type: "paragraph",
        text: "Your head of engineering spends forty minutes on a call explaining to a prospect why one design approach fails on humid sites. The prospect is impressed. None of it reaches the company's LinkedIn page, which this week announced an award and a webinar that few people registered for. Most B2B companies have more expertise than content. What's missing is a system for capturing it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A B2B social media strategy turns the knowledge inside your company into a steady stream of useful posts. Capture expertise through short interviews with subject experts and a bank of real buyer questions, sort it into a few content pillars, and publish through the company page plus the founders and experts willing to post. Build in approvals for technical and client claims, and measure conversations and pipeline signals, not likes.",
      },
      { type: "heading", text: "Why B2B content shouldn't sound like a brochure", id: "not-a-brochure" },
      {
        type: "paragraph",
        text: "B2B buyers are usually experts in their own jobs. They have read every 'end-to-end solution' and 'customer-centric approach' line before, and they skip them. What makes them stop is a specific problem they recognise, explained by someone who has clearly dealt with it. The difference is easy to see side by side (all examples hypothetical):",
      },
      {
        type: "table",
        headers: ["Brochure line", "Expert version"],
        rows: [
          ["We offer end-to-end logistics solutions.", "Three paperwork errors that keep inbound containers waiting at port, and how to catch them before arrival."],
          ["Industry-leading quality.", "What our inspectors check in the first twenty minutes of a new production run, and why."],
          ["A customer-centric approach.", "The one question we ask in every kick-off meeting that prevents a round of revisions later."],
          ["Innovative HR technology.", "Why most leave policies break down at 50 employees, and the three rules that need rewriting first."],
        ],
      },
      {
        type: "paragraph",
        text: "The expert version is more useful, more specific and easier to trust. It is also harder to produce, because it has to come from people who know the work. That's why B2B content needs a system, not just a calendar.",
      },
      { type: "heading", text: "Build an expertise-to-content system", id: "expertise-system" },
      {
        type: "list",
        items: [
          "Capture: short recorded interviews with subject experts, plus a running bank of real questions from buyers.",
          "Shape: marketing turns each idea into a post, carousel, short video or article, in plain language.",
          "Check: the expert confirms technical accuracy; legal or the client checks anything sensitive.",
          "Publish: through the company page, and through the expert's own profile if they want to post.",
          "Reuse: strong pieces become sales material, newsletter items, event talks and longer articles.",
        ],
      },
      { type: "subheading", text: "Running short SME interviews" },
      {
        type: "paragraph",
        text: "Most experts won't write posts, but nearly all of them will talk for twenty minutes about their work. Record a monthly call with each subject expert (an engineer, consultant, product lead or account manager), and one call can produce several posts. Send the questions ahead, keep it informal, and let them tell stories.",
      },
      {
        type: "template",
        label: "20-minute SME interview guide",
        text: "1. What question did a client or prospect ask you this month that surprised you?\n2. What do people in our industry commonly get wrong about [topic]?\n3. Walk me through a recent problem you solved, without naming the client.\n4. What changed in your field this quarter, and what does it mean in practice?\n5. If a new buyer had five minutes with you, what would you want them to understand?\n6. Is there anything here we must not publish (client details, pricing, unreleased work)?",
      },
      { type: "subheading", text: "Keeping a question bank" },
      {
        type: "paragraph",
        text: "Collect questions from sales calls, RFPs, onboarding sessions, support tickets, event conversations and comments in one shared sheet, tagged by topic and buyer role. Each repeated question is a ready-made post. Our guide on turning customer questions into social media content covers the formats in detail.",
        links: [{ text: "turning customer questions into social media content", href: "/blog/social-media-content-from-customer-questions" }],
      },
      { type: "heading", text: "A practical B2B content pillar framework", id: "pillar-framework" },
      {
        type: "paragraph",
        text: "Pillars stop the calendar drifting into announcements. Use this framework to choose four or five that fit your business; each pillar has a job, a source and a proof requirement.",
      },
      {
        type: "table",
        headers: ["Pillar", "Job it does", "Example post (hypothetical)", "Typical source", "Proof or approval needed"],
        rows: [
          ["Point of view", "Shows how you think about the industry's problems", "Why we stopped recommending a common approach for small sites", "Founders, senior experts", "Leadership sign-off"],
          ["Problem education", "Helps buyers name and understand a problem", "Carousel on early warning signs of a failing process", "Subject experts, support", "Technical check"],
          ["How we work", "Reduces the perceived risk of buying", "Walkthrough of your onboarding or quality process", "Delivery and operations", "Operations head"],
          ["Proof", "Shows outcomes with real clients", "Case study told from the client's side", "Account teams", "Client's written approval"],
          ["Industry insight", "Interprets news, standards and published data", "What a new rule or standard means in practice", "Experts, research", "Source check; legal for regulatory topics"],
          ["People and culture", "Builds trust in the team and supports hiring", "An engineer explains what their role involves", "HR and teams", "Consent from people shown"],
        ],
      },
      {
        type: "paragraph",
        text: "There's no correct split between pillars. Weight them by what the business needs this quarter: more proof during a sales push, more problem education when entering a new segment, more culture during hiring. For industry-specific versions of this approach, see our guide to social media management for manufacturing companies.",
        links: [{ text: "social media management for manufacturing companies", href: "/blog/social-media-management-manufacturing-companies" }],
      },
      { type: "heading", text: "Who posts: the company page, founders and experts", id: "who-posts" },
      {
        type: "paragraph",
        text: "The company page is the official record: accurate, consistent and on brand. It shouldn't carry the whole strategy alone. How to run the page itself, from admin roles to posting rhythm and formats, is covered in LinkedIn company page management, so we won't repeat it here.",
        links: [{ text: "LinkedIn company page management", href: "/blog/linkedin-company-page-management" }],
      },
      {
        type: "paragraph",
        text: "Founders and subject experts often reach buyers more personally, because people respond to people. If they're willing to post, marketing can help draft from their own ideas and interview notes, but the expert should read and approve every word that goes out under their name. Ghostwritten opinions the expert doesn't hold are easy to spot and hard to defend in a sales meeting.",
      },
      {
        type: "paragraph",
        text: "Wider employee sharing should be encouraged, not required, and employees promoting the company should make their connection clear. LinkedIn's Help Centre says the My Company and Employee Advocacy tabs were gradually discontinued from November 2024, and that Page admins can still reshare employees' mentions from the Page's Feed tab. Our guide to employee influencer marketing covers how to run an employee programme.",
        links: [
          { text: "gradually discontinued from November 2024", href: "https://www.linkedin.com/help/linkedin/answer/a6836874" },
          { text: "employee influencer marketing", href: "/blog/employee-influencer-marketing" },
        ],
      },
      {
        type: "paragraph",
        text: "External voices are a separate lever. Industry creators, analysts and practitioners with their own audience can introduce you to buyers you don't reach yet; B2B influencer marketing in India explains how those partnerships work. This guide is about the content you publish yourself.",
        links: [{ text: "B2B influencer marketing in India", href: "/blog/b2b-influencer-marketing-india" }],
      },
      { type: "heading", text: "Case studies and industry insight", id: "case-studies" },
      {
        type: "paragraph",
        text: "Case studies are the strongest proof in B2B, and the easiest to get wrong. The story belongs partly to the client, who may have strict rules about being named, quoted or associated with a supplier. Tell the story from their side: the problem they faced, what changed, and what they would tell a peer. Never invent a composite client and present it as real.",
      },
      { type: "subheading", text: "Case-study approval checklist" },
      {
        type: "list",
        items: [
          "Written approval for the client's name, logo and any quote, in the exact final wording.",
          "Approval for every number used, and agreement on how it was measured.",
          "Agreement on which channels the story can appear on, and for how long.",
          "A check that screenshots and photos show no client data or confidential material.",
          "If the client can't be named, a version that genuinely can't identify them.",
        ],
      },
      {
        type: "paragraph",
        text: "Industry insight posts work when they interpret something buyers care about: a new regulation, a standard, a published dataset. Link to the primary source, give its date, and separate what it says from your view of what it means. Predictions should be labelled as predictions.",
      },
      { type: "heading", text: "Generating leads without aggressive selling", id: "lead-generation" },
      {
        type: "paragraph",
        text: "Most B2B buying is slow and involves several people, so most posts won't produce an enquiry, and they don't need to. Their job is to make sure that when a buyer is ready, they already know who you are and trust that you understand the problem. Give interested people an easy, low-pressure next step: a useful checklist, an open session or a newsletter, or simply an invitation to reply with their question.",
      },
      {
        type: "paragraph",
        text: "Keep direct messages for people who have engaged and where you have something relevant to say. Pass warm conversations to sales with context, such as which post they responded to, so the follow-up feels like a continuation rather than a cold pitch. Automated pitch sequences sent to everyone who reacted to a post tend to damage the trust the content built.",
      },
      { type: "heading", text: "Approvals that don't stall the calendar", id: "approvals" },
      {
        type: "paragraph",
        text: "B2B content often waits weeks for sign-off because every post goes to the same busy people. Tier it instead: routine posts approved by marketing, technical posts by the relevant expert, and anything involving clients, regulation or pricing by legal or the account owner. Agree turnaround times for each tier. The social media content approval process guide covers stages, owners and tools.",
        links: [{ text: "social media content approval process", href: "/blog/social-media-content-approval-process" }],
      },
      { type: "heading", text: "Measuring beyond likes", id: "measurement" },
      {
        type: "paragraph",
        text: "Likes tell you a post was pleasant. B2B strategy needs to know whether the right people saw it and whether it moved a conversation forward. Combine platform metrics with sales signals.",
      },
      {
        type: "table",
        headers: ["Signal", "Where to find it", "What it tells you"],
        rows: [
          ["Members reached", "LinkedIn post analytics", "How many distinct members and Pages saw the post"],
          ["Clicks and click-through rate", "LinkedIn Page content analytics", "Whether the post made people want more"],
          ["Comments from target roles", "Manual review of comments", "Whether the right people are engaging"],
          ["Enquiries that mention content", "A 'how did you hear about us' field, sales notes", "Whether content is part of the buying journey"],
          ["Posts sales reuses", "Ask the sales team monthly", "Whether content helps live deals"],
        ],
      },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), LinkedIn's Help Centre defines members reached as the number of distinct members and Pages who viewed a post, without counting repeat views, and its Page content analytics define click-through rate as clicks divided by impressions. Our guide to social media KPIs explains how to pick metrics by goal.",
        links: [
          { text: "defines members reached", href: "https://www.linkedin.com/help/linkedin/answer/a701208" },
          { text: "Page content analytics", href: "https://www.linkedin.com/help/lms/answer/a564051" },
          { text: "social media KPIs", href: "/blog/social-media-kpis" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Publishing announcements and awards, but no expertise.",
          "Waiting for experts to write posts instead of interviewing them.",
          "Ghostwriting opinions the founder or expert doesn't actually hold.",
          "Naming clients or using logos without written approval.",
          "Pitching everyone who reacts to a post in their inbox.",
          "Sending every post to the same senior approver.",
          "Judging the strategy on follower counts after two months.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pick three subject experts, book a twenty-minute interview with each, and start a shared question bank this week. Choose four pillars from the framework, agree approval tiers, and plan one month from what those conversations produce. Review it with sales at the end of the month.",
      },
      {
        type: "paragraph",
        text: "If you'd like help running that system, a managed social media service such as Kudozz's can handle interviews, writing, design and company page publishing, while your experts keep the final say on accuracy.",
        links: [{ text: "a managed social media service", href: "/services/social-media-management#strategy" }],
      },
    ],
    faqs: [
      {
        question: "How long does B2B social media take to show results?",
        answer:
          "Expect months, not weeks, and it depends on your sales cycle. Early signs are usually qualitative: prospects mentioning posts on calls, the right job roles commenting, sales reusing content. Pipeline influence takes longer to show, especially when deals involve several decision makers. Review direction monthly and judge the strategy over at least two or three quarters.",
      },
      {
        question: "What if our founder doesn't have time to post?",
        answer:
          "Ask for thirty minutes a month instead of daily posting. A recorded conversation can be shaped into several posts for the founder to approve, and some of that thinking can run on the company page instead. If the founder doesn't want a personal presence at all, build visibility around two or three subject experts who do.",
      },
      {
        question: "Can we use AI tools to draft B2B posts?",
        answer:
          "As a drafting aid, yes, with care. AI tools can help structure interview notes or suggest formats, but they can also produce generic or wrong statements. Every post should be based on your experts' real knowledge, checked by a person who understands the subject, and approved by the expert whose name or expertise it uses.",
      },
      {
        question: "How many content pillars should a B2B company have?",
        answer:
          "Four or five is usually enough. Fewer can feel repetitive; more makes it hard to build recognition for any one theme. Each pillar should have a clear job, a reliable source of material and an owner. If you can't name who supplies a pillar each month, it probably isn't a real pillar yet.",
      },
      {
        question: "What if clients won't let us name them?",
        answer:
          "That's common in B2B. Describe the problem, approach and type of outcome in general terms, and make sure the details genuinely can't identify the client. Frame it clearly as an example, not a named case study. Over time, ask happy clients whether they'd approve a named story, and record exactly what they agreed to.",
      },
    ],
  },
  {
    slug: "social-media-management-it-companies",
    category: "Social Media Management",
    title: "Social Media Management for IT Companies: What to Post When Your Product Is Difficult to Explain",
    seoTitle: "Social Media Management for IT Companies: What to Post",
    excerpt:
      "How IT services firms and technical product companies can explain complex work on social media: turning features into simple hooks, demos and explainers, engineering content without client secrets, honest trust signals and a weekly production process.",
    metaDescription:
      "Social media management for IT companies: turn technical features into simple hooks, plan demos and explainers, protect client data and run a weekly process.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "social media management for IT companies",
      "IT company social media strategy",
      "technology company social media",
      "social media for IT services",
      "explaining technical products on social media",
    ],
    related: ["influencer-marketing-b2b-technology", "social-media-management-saas-companies", "choose-social-media-platforms-for-business"],
    hero: {
      src: "/blog/brand-guides/social-media-management-it-companies.svg",
      alt: "A feature-to-hook translator for IT companies: a technical feature such as patch automation, the person who notices it, the simple hook that person recognises, and the best post format, connected by arrows",
    },
    body: [
      {
        type: "paragraph",
        text: "Your company migrates legacy applications to the cloud, runs round-the-clock security monitoring and employs engineers who could explain zero-downtime deployments in their sleep. Your social feed says 'end-to-end digital transformation solutions' over a stock image of a glowing circuit board. Prospects scroll past, because nothing tells them what you actually do for a company like theirs.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media management for IT companies works when it translates technical capability into problems and outcomes a buyer recognises. Turn each feature or service into a simple hook, show it through short demos, explainer videos and carousels, share engineering work without exposing client information, and back trust claims with certifications and partner statuses you actually hold. LinkedIn is usually the base, with YouTube for longer explainers, run on a repeatable weekly production process.",
      },
      { type: "heading", text: "Who this guide is for", id: "scope" },
      {
        type: "paragraph",
        text: "This guide covers IT services and technical product companies: software development firms, managed IT and cloud providers, cybersecurity companies, system integrators and makers of technical tools sold to IT teams. If you sell subscription software with trials and self-serve sign-ups, our guide to social media management for SaaS companies covers product-led content and customer stories in more depth.",
        links: [{ text: "social media management for SaaS companies", href: "/blog/social-media-management-saas-companies" }],
      },
      { type: "heading", text: "Turn technical features into simple hooks", id: "feature-to-hook" },
      {
        type: "paragraph",
        text: "Buyers of IT services are often not the engineers who will use them. A founder, finance head or operations manager needs to understand why something matters before they care how it works. Run every feature or service through four questions before you write a post:",
      },
      {
        type: "list",
        items: [
          "What does it do, in one sentence a non-engineer would understand?",
          "Who notices when it's missing, and in which moment of their working week?",
          "What goes wrong without it, described as a situation rather than a statistic?",
          "What can we show as proof: a demo, a diagram, a real process?",
        ],
      },
      {
        type: "paragraph",
        text: "The answers usually give you the hook. Here's how that looks for a range of IT services. These are hypothetical examples to show the method, not claims about any real company.",
      },
      {
        type: "table",
        headers: ["Technical feature or service", "Who cares", "Simple hook", "Best format"],
        rows: [
          ["Automated patch management", "IT manager at a 200-person company", "What happens to the laptops nobody updated last month?", "Short explainer video"],
          ["Zero-downtime deployment", "Head of technology at an online retailer", "How to ship an update in the middle of a sale without taking the site down", "Diagram carousel"],
          ["Role-based access control", "Compliance or HR head", "Why the intern shouldn't be able to open the payroll folder", "Short screen demo"],
          ["Backup and disaster recovery", "Founder or finance head", "If the office server failed tonight, how long until invoices go out again?", "Text post with a simple diagram"],
          ["System integration via APIs", "Operations head", "Stop retyping orders from one system into another", "Before-and-after screen recording"],
          ["Security monitoring", "Business owner", "Who notices an unusual login at 3 a.m.?", "Short video with your security lead"],
          ["Cloud cost review", "Finance team", "Three line items in a cloud bill worth questioning", "Carousel or document post"],
        ],
      },
      {
        type: "paragraph",
        text: "Hooks must stay honest. Explaining a risk is fine; implying that your service prevents every breach, outage or failure is not. Avoid fear-heavy copy, guarantees and words like 'unhackable' or '100% secure'. Buyers in IT know those claims can't be true, and they remember who made them.",
      },
      { type: "heading", text: "Formats that make technical work visible", id: "formats" },
      { type: "subheading", text: "Demos" },
      {
        type: "paragraph",
        text: "Record short demos on a test environment with dummy data, focused on one task from start to finish. State what setup or licence the feature needs. A two-minute recording of a real workflow is more persuasive than a polished animation of an interface that doesn't exist.",
      },
      { type: "subheading", text: "Explainer videos" },
      {
        type: "paragraph",
        text: "An engineer at a whiteboard explaining one concept in plain language often works better than a produced video. Longer explainers and webinar recordings suit YouTube, where people search for them; shorter cuts can then run on LinkedIn and other platforms.",
      },
      { type: "subheading", text: "Carousels and document posts" },
      {
        type: "paragraph",
        text: "Architecture diagrams, checklists and step-by-step guides work well as carousels or document posts, one idea per slide. Simplify diagrams for social: a buyer needs to see the flow, not every component. LinkedIn lets Pages attach PDF, PowerPoint and Word documents to posts, according to its Help Centre at the time of writing.",
        links: [{ text: "attach PDF, PowerPoint and Word documents", href: "https://www.linkedin.com/help/linkedin/answer/a518909" }],
      },
      { type: "heading", text: "Engineering behind the scenes, without client secrets", id: "engineering-bts" },
      {
        type: "paragraph",
        text: "Content from your engineering team (how you plan a migration, review code, run an incident drill) shows buyers how you work. It also carries real risk, because IT teams handle other companies' systems and data. Contracts and NDAs may restrict even mentioning that a client relationship exists.",
      },
      { type: "subheading", text: "Checklist: before engineering content goes out" },
      {
        type: "list",
        items: [
          "No client names, logos, domains or project codenames without the client's written approval.",
          "No real dashboards, tickets, logs, IP addresses, hostnames or email addresses; recreate screens with dummy data.",
          "No code from client projects; use sample code your company owns.",
          "Check whiteboards, sticky notes and second monitors in the background of every photo and video.",
          "Security posts reviewed by your security lead, with no details of vulnerabilities in any client's systems.",
          "Incident stories only about your own systems, shared after the issue is fully resolved.",
          "Consent from every employee who appears.",
        ],
      },
      { type: "heading", text: "Trust signals: certifications, partnerships and security claims", id: "trust" },
      {
        type: "paragraph",
        text: "IT buyers, especially larger ones, check credentials during procurement. Post only certifications and attestations you currently hold, such as an ISO/IEC 27001 certificate or a SOC 2 report, and describe their scope accurately: which entity, location or service they cover. A certificate for one office or service line shouldn't be presented as covering the whole company.",
      },
      {
        type: "paragraph",
        text: "Technology partner statuses work the same way. Use the exact tier name the vendor currently lists for you, follow the vendor's rules on partner logos, and update posts when a status changes. Integration claims ('works with' a named platform) should reflect what is live today, not what's on the roadmap.",
      },
      { type: "heading", text: "Thought leadership and recruitment", id: "thought-leadership-recruitment" },
      {
        type: "paragraph",
        text: "Your engineers and architects are your most credible voices. Give willing team members a light routine: a monthly interview, help drafting from their own ideas, and final approval of anything posted under their name. Topics can include lessons from projects (anonymised), opinions on tools and practices, conference talks and explanations of new standards.",
      },
      {
        type: "paragraph",
        text: "The same content supports hiring, because good engineers want to work with people they can learn from. For a full recruitment content plan, see our guide to social media employer branding. Working with external tech creators and practitioners is a different job; influencer marketing for B2B technology brands covers how those partnerships work.",
        links: [
          { text: "social media employer branding", href: "/blog/social-media-employer-branding" },
          { text: "influencer marketing for B2B technology brands", href: "/blog/influencer-marketing-b2b-technology" },
        ],
      },
      { type: "heading", text: "Choosing platforms", id: "platforms" },
      {
        type: "table",
        headers: ["Platform", "Typical role for an IT company", "Watch out for"],
        rows: [
          ["LinkedIn", "The base for buyers, partners and experienced hires", "Turning the page into a feed of announcements"],
          ["YouTube", "Demos, webinars, tutorials and longer explainers", "Starting a channel you can't feed regularly"],
          ["X", "Developer and security conversations, if your audience is active there", "Fast-moving threads that need quick, careful replies"],
          ["Instagram", "Culture and campus hiring", "Expecting buyer enquiries from culture posts"],
        ],
      },
      {
        type: "paragraph",
        text: "Most IT companies do better running two platforms well than four badly. Our guide on how to choose social media platforms for your business model walks through the decision.",
        links: [{ text: "choose social media platforms for your business model", href: "/blog/choose-social-media-platforms-for-business" }],
      },
      { type: "heading", text: "A repeatable weekly production process", id: "production-process" },
      {
        type: "paragraph",
        text: "Technical content stalls when it depends on engineers finding spare time. A fixed weekly rhythm keeps it moving with small, predictable asks.",
      },
      {
        type: "table",
        headers: ["Step", "What happens", "Who"],
        rows: [
          ["1. Pick", "Choose two or three topics from the question bank and feature list", "Marketing"],
          ["2. Capture", "A 20-minute call or screen recording with one engineer", "Marketing and one engineer"],
          ["3. Draft", "Write posts, design carousels, cut demo clips", "Marketing or agency"],
          ["4. Check", "Technical accuracy, client data and security review", "The engineer, plus the security lead where needed"],
          ["5. Publish and reply", "Schedule posts and answer technical comments with the expert's help", "Marketing, engineer on call for replies"],
        ],
      },
      {
        type: "template",
        label: "One-page technical post brief",
        text: "Topic:\nFeature or service:\nWho this post is for (role, company size):\nThe problem in their words:\nThe simple hook:\nProof we can show (demo, diagram, process):\nWhat must not appear (client names, data, code):\nFormat and platform:\nTechnical reviewer:\nSecurity review needed? Yes / No",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Describing services in jargon a buyer can't connect to their problem.",
          "Stock images of code, servers and glowing networks instead of real work.",
          "Showing client screens, logos or data without written approval.",
          "Claiming certifications or partner tiers you don't currently hold, or overstating their scope.",
          "Fear-based security posts and promises no one can keep.",
          "Relying on engineers to write posts in their spare time.",
        ],
      },
      {
        type: "paragraph",
        text: "If your engineers can spare a few short calls a month but nobody can turn them into a calendar, Kudozz's managed content service for technical brands covers planning, writing, design, editing of the footage you supply, and publishing.",
        links: [{ text: "managed content service for technical brands", href: "/services/social-media-management#creative-design" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "List your five main services, run each through the four translation questions, and write one simple hook for each. Book one engineer call a week and publish what comes out of it. Within a month you'll have a feed that explains what you do, in words your buyers use.",
      },
    ],
    faqs: [
      {
        question: "How technical should an IT company's posts be?",
        answer:
          "As technical as the person you want to reach. Posts aimed at founders and finance heads should focus on situations and outcomes; posts for IT managers and engineers can go deeper. Many IT companies alternate between the two. If a non-technical colleague can't explain a post back to you, it's probably too technical for a buyer audience.",
      },
      {
        question: "Can we mention clients we've worked with?",
        answer:
          "Only with the client's written approval, and check your contract first. Many IT agreements include confidentiality clauses that restrict naming the client or describing the work. If you can't name them, describe the type of problem and approach in a way that genuinely can't identify the client, and label it as an example.",
      },
      {
        question: "Should our engineers post on their personal profiles?",
        answer:
          "If they want to, yes, and it can help both hiring and credibility. Make it voluntary, give them simple guidelines on confidentiality and security topics, and offer help drafting from their own ideas. Anything posted under their name should be their view, approved by them, and anyone promoting the company should make their connection clear.",
      },
      {
        question: "Can we use AI tools to create diagrams and explainer visuals?",
        answer:
          "They can speed up drafts, but every visual should be checked by an engineer for accuracy. AI tools can produce diagrams that look right but describe systems incorrectly, which damages credibility with technical buyers. Never paste client data, code or internal architecture into a tool without checking your company's data and security policies.",
      },
      {
        question: "What should a small IT firm with no marketing team post first?",
        answer:
          "Start with answers to the questions prospects ask most often, one per week, on LinkedIn. Add a short demo or diagram where it helps. Make sure the company page clearly says what you do, for whom and where. Consistency with a few useful posts is better than a burst of activity that stops after a month.",
      },
    ],
  },
  {
    slug: "linkedin-marketing-professional-services",
    category: "Social Media Management",
    title: "How Professional Services Firms Can Use LinkedIn to Build Authority and Generate Enquiries",
    seoTitle: "LinkedIn Marketing for Professional Services Firms",
    excerpt:
      "How consulting, legal, accounting and advisory firms can use LinkedIn: partner profiles vs the firm page, expertise-led posts, anonymised client questions, confidentiality, a four-week calendar and professional body rules.",
    metaDescription:
      "LinkedIn marketing for professional services: partner profiles vs firm page, expertise-led posts, BCI and ICAI rules to check, a calendar and enquiry tracking.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "LinkedIn marketing for professional services",
      "LinkedIn for consultants",
      "LinkedIn for law firms",
      "LinkedIn for CA firms",
      "professional services marketing",
    ],
    related: ["linkedin-thought-leadership-marketing", "executive-influencer-marketing-linkedin", "linkedin-company-page-management"],
    hero: {
      src: "/blog/brand-guides/linkedin-marketing-professional-services.svg",
      alt: "A four-week LinkedIn calendar for a professional services firm, with firm page and partner profile posts for each week, above a bar stating that every post is checked against professional body rules and client confidentiality",
    },
    body: [
      {
        type: "paragraph",
        text: "A tax partner at a mid-sized firm writes a clear two-page note for clients the day a new notification comes out. It gets forwarded around WhatsApp groups and nobody remembers where it came from. The firm's LinkedIn page, meanwhile, has a logo, a hiring post from last year and very little else.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Professional services firms build authority on LinkedIn by publishing expertise, not promotion. Partners share explainers, commentary on regulatory and market changes, and answers to anonymised client questions on their own profiles, while the firm page acts as the consistent official record. Client confidentiality comes first, and law and CA firms must follow their professional body's rules on advertising and solicitation. Measure relevant enquiries and conversations, not follower counts.",
      },
      { type: "heading", text: "Start with your professional body's rules", id: "professional-rules" },
      {
        type: "paragraph",
        text: "Before planning any calendar, check what your profession allows. What follows summarises official documents as we found them in November 2026. It isn't legal or ethics advice, and rules and their interpretation change, so confirm the current position with your professional body and your own counsel or ethics adviser.",
      },
      { type: "subheading", text: "Advocates and law firms" },
      {
        type: "paragraph",
        text: "Rule 36 in Chapter II, Part VI of the Bar Council of India Rules says an advocate 'shall not solicit work or advertise, either directly or indirectly', and lists methods including circulars, advertisements, touts, personal communications and interviews not warranted by personal relations, newspaper comments, and photographs published in connection with cases they have been engaged in.",
      },
      {
        type: "paragraph",
        text: "In a press release dated 17 March 2025, the Bar Council of India condemned advocates advertising legal services through social media, promotional videos and influencer endorsements. It called for the withdrawal of advertisements violating Rule 36, prohibited using celebrities or influencers to promote legal practice, and stated an 'absolute prohibition' on using social media or digital platforms to directly or indirectly solicit legal work. It also referred to its earlier directions to State Bar Councils in July 2024, following a Madras High Court judgment.",
        links: [{ text: "a press release dated 17 March 2025", href: "https://www.livelaw.in/pdf_upload/bci-statement-591603.pdf" }],
      },
      {
        type: "paragraph",
        text: "For law firms, that sets a much higher bar than for other businesses: no promotional posts, no publicity about your own cases or clients, no testimonials and no paid promotion by influencers. Whether a particular educational or commentary post is acceptable is a professional conduct question for the firm's partners, not for a marketing team or an agency.",
      },
      { type: "subheading", text: "Chartered accountants and CA firms" },
      {
        type: "paragraph",
        text: "ICAI's advisory of 28 April 2020 explains that advertising of services is generally prohibited under Clauses (6) and (7) of Part I of the First Schedule to the Chartered Accountants Act, 1949, and that the proviso to Clause (7) permits a 'write-up' only within the Council's Advertisement Guidelines of May 2008. The same advisory says fees, including 'free of charge', should not be mentioned in any advertisement of services.",
        links: [{ text: "ICAI's advisory of 28 April 2020", href: "https://www.icai.org/post/16461" }],
      },
      {
        type: "paragraph",
        text: "ICAI's website advisory of 14 October 2020 lists content members' and firms' websites must not carry, including client names and logos, testimonials with client names, awards given to the firm and videos other than educational videos. Its advisory of 22 October 2022 says members in practice may have social networking accounts, that a firm's account must follow the Advertisement Guidelines, 2008, and that members should use the 'CA' designation with 'utmost dignity'. Read these with ICAI's current Code of Ethics and the Ethical Standards Board's guidance.",
        links: [
          { text: "website advisory of 14 October 2020", href: "https://icai.org/post/advisory-website-guidelines-of-the-institute" },
          { text: "advisory of 22 October 2022", href: "https://www.icai.org/post/use-of-designation-chartered-accountant-or-prefix-ca-by-members" },
        ],
      },
      { type: "subheading", text: "Consultants and advisory firms" },
      {
        type: "paragraph",
        text: "Management and strategy consultants usually aren't governed by a single professional body in the same way, but marketing communication still falls under advertising standards such as the ASCI Code, which expects claims about facts to be capable of substantiation. If your firm or partners hold a regulatory registration, for example as an investment adviser or with another sector regulator, that regulator's communication rules apply too. Check them with your compliance owner.",
        links: [{ text: "the ASCI Code", href: "https://www.ascionline.in/the-asci-code/" }],
      },
      { type: "heading", text: "Partner profiles and the firm page do different jobs", id: "partner-vs-firm" },
      {
        type: "table",
        headers: ["", "Partner profiles", "Firm page"],
        rows: [
          ["Who owns it", "The individual; it stays with them if they leave", "The firm, with admin roles held by staff"],
          ["Main job", "Expert point of view, relationships, professional reputation", "The official, consistent record of the firm's work and people"],
          ["Typical content", "Commentary, explainers, lessons, talks, anonymised questions", "Explainers, publications, events, team news, hiring"],
          ["Voice", "First person, in the partner's own words", "Clear, measured, consistent firm voice"],
          ["Who writes", "The partner, often with help drafting from their notes", "Marketing team or agency, reviewed by a partner"],
          ["Approval", "The partner, plus a risk or ethics check on sensitive topics", "Designated partner, against professional body rules"],
        ],
      },
      {
        type: "paragraph",
        text: "In most firms, partners' profiles carry more trust than the page, because clients hire people. The page gives that trust a home: someone who reads a partner's post and checks the firm should find an accurate, active page. Page setup and admin roles are covered in LinkedIn company page management. For the wider idea of building authority through experts, see LinkedIn thought leadership marketing, which also covers working with external creators and specialists; executive influencer marketing on LinkedIn covers leaders building their own presence.",
        links: [
          { text: "LinkedIn company page management", href: "/blog/linkedin-company-page-management" },
          { text: "LinkedIn thought leadership marketing", href: "/blog/linkedin-thought-leadership-marketing" },
          { text: "executive influencer marketing on LinkedIn", href: "/blog/executive-influencer-marketing-linkedin" },
        ],
      },
      { type: "heading", text: "What to post: expertise without promotion", id: "what-to-post" },
      {
        type: "list",
        items: [
          "Explainers on new laws, rules, notifications and standards, with the source and date.",
          "'What changed' summaries that say who is affected and what to check.",
          "Common misconceptions in your area, explained calmly.",
          "Checklists, such as documents a business typically needs for a recurring filing or review.",
          "Commentary on published judgments, policy papers or market developments (for advocates, not on matters they are engaged in).",
          "Lessons and slides from talks partners have given.",
          "Firm news that isn't promotional: new publications, internal knowledge sessions, campus hiring.",
        ],
      },
      {
        type: "paragraph",
        text: "Make general information obviously general. A short line such as 'This is general information, not advice on your situation' helps, but the content itself should avoid telling a reader what to do in their specific case.",
      },
      { type: "subheading", text: "Turning client questions into anonymised posts" },
      {
        type: "paragraph",
        text: "The questions clients ask are the best guide to what other people want to know. To use them safely: strip out every identifying detail, generalise the facts, combine similar questions from several clients, never post about live matters, and have the responsible partner review the result. If anyone involved could recognise the situation, don't publish it. Our guide on turning customer questions into content covers formats.",
        links: [{ text: "turning customer questions into content", href: "/blog/social-media-content-from-customer-questions" }],
      },
      { type: "heading", text: "Confidentiality checklist", id: "confidentiality" },
      {
        type: "list",
        items: [
          "No client names, logos, transaction details or matter descriptions without written consent, and not at all where your professional rules prohibit it.",
          "No details that could identify a client through industry, location, size and timing combined.",
          "No photos from client sites or meetings, or of documents, screens or whiteboards.",
          "No comment on live matters, disputes or engagements, including your own wins.",
          "Team posts checked for anything visible in the background.",
          "A named partner reviews every post before it's published.",
        ],
      },
      { type: "heading", text: "A four-week LinkedIn content calendar", id: "content-calendar" },
      {
        type: "paragraph",
        text: "Here's a sample month for a hypothetical mid-sized firm with two partners willing to post. Adjust the volume to what your partners can genuinely review; law firms should remove anything that could read as promotion.",
      },
      {
        type: "table",
        headers: ["Week", "Firm page", "Partner profiles", "Check before publishing"],
        rows: [
          ["1", "Explainer on a recent regulatory change, with source and date", "Partner A: what the change means in practice for one sector", "Partner who owns the subject area"],
          ["2", "Checklist carousel or document post", "Partner B: answer to a common, anonymised client question", "Confidentiality check"],
          ["3", "Firm news: a publication, knowledge session or campus hiring", "Partner A: commentary on a published judgment, notification or report", "Risk or ethics partner for anything near a live matter"],
          ["4", "Longer article or newsletter summarising the month's topics", "Partner B: key points from a talk or panel they joined", "Final check against professional body rules"],
        ],
      },
      {
        type: "paragraph",
        text: "Plan the firm page and partner posts in the same calendar so they support each other rather than repeat. Our approval process guide explains how to set review stages and turnaround times, which matters when partners are the bottleneck.",
        links: [{ text: "approval process guide", href: "/blog/social-media-content-approval-process" }],
      },
      { type: "heading", text: "Measuring relevant enquiries, not applause", id: "measuring" },
      {
        type: "paragraph",
        text: "A post with modest engagement that the right general counsel or CFO reads can matter more than a viral one. Track whether the right people are noticing: comments and messages from your target sectors and roles, enquiries that mention a post or article, invitations to speak or write, referrals from other professionals, and interest from candidates.",
      },
      {
        type: "table",
        headers: ["Measure", "How to track it"],
        rows: [
          ["Members reached and engagements", "LinkedIn post analytics; LinkedIn's Help Centre counts reactions, comments, saves, sends and reposts as engagements"],
          ["Relevant enquiries", "A 'how did you hear about us' question at intake, logged in your CRM or a simple sheet"],
          ["Speaking and writing invitations", "A monthly note from partners"],
          ["Candidate interest", "Applications and questions that mention your content"],
        ],
      },
      {
        type: "paragraph",
        text: "LinkedIn's definitions are in its Help Centre article on combined post analytics, current at the time of writing. For law firms, be careful how you frame this: treat LinkedIn as reputation and knowledge sharing, and keep any intake process within your professional rules.",
        links: [{ text: "combined post analytics", href: "https://www.linkedin.com/help/linkedin/answer/a701208" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Planning content before checking professional body rules.",
          "Posting about wins, clients or cases where your rules restrict it.",
          "Anonymised stories that are still recognisable to the people involved.",
          "Ghostwritten partner posts the partner hasn't read.",
          "Generic motivational posts that show no expertise.",
          "Treating follower growth as the goal.",
        ],
      },
      {
        type: "paragraph",
        text: "An agency can help with planning, drafting from partner notes, design and publishing on the firm page. Kudozz's LinkedIn and social media support works on that basis: partners keep their own voice, and every professional conduct and confidentiality decision stays with the firm.",
        links: [{ text: "LinkedIn and social media support", href: "/services/social-media-management#copywriting" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Read your professional body's current guidance and agree in writing what the firm will and won't post. Then pick two willing partners, list the ten questions clients ask them most, and plan the first four weeks from that list, with a named reviewer for every post.",
      },
    ],
    faqs: [
      {
        question: "Can law firms use LinkedIn at all?",
        answer:
          "Advocates and firms use LinkedIn, but Bar Council of India rules restrict advertising and solicitation, and the BCI's March 2025 press release specifically warned against soliciting work through social media. Any content needs to stay clear of promotion and case publicity. Decide what is acceptable with your partners and ethics adviser, guided by the BCI and your State Bar Council.",
      },
      {
        question: "Can a CA firm mention client names or awards on social media?",
        answer:
          "ICAI's 2020 website advisory lists client names, logos, testimonials with client names and awards given to the firm among content not permitted on members' and firms' websites, and its 2022 advisory says firm social accounts must follow the 2008 Advertisement Guidelines. Check the current ICAI guidance and Code of Ethics before posting anything similar.",
      },
      {
        question: "Should junior team members post about their work?",
        answer:
          "They can share learning, events and general professional insight, but they should never post about clients, matters or anything they learned in confidence. Give everyone a short written policy covering confidentiality, professional rules and how to describe the firm. When in doubt, they should check with a partner before posting.",
      },
      {
        question: "Who should write partner posts?",
        answer:
          "Ideally the partner, from their own ideas. Many partners prefer to talk through a topic and have a writer shape it, which works if the partner reads, edits and approves the final post. Content that sounds unlike the partner is noticed quickly by people who know them, and it weakens the trust the post is meant to build.",
      },
      {
        question: "How often should partners post on LinkedIn?",
        answer:
          "Often enough to be recognisable, without lowering quality. One considered post a week, or even every two weeks, is realistic for most busy partners. Consistency over months matters more than frequency. If a partner can only manage one post a month, make it a substantial one that the firm page can also share.",
      },
    ],
  },
];
