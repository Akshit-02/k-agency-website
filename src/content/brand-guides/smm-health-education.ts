import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 03, writer D (2026-11-12): regulated-industry guides to managing an organisation's own social accounts.
 * Clinics (11), hospitals (12), coaching institutes (13) and schools and universities (14).
 * Regulatory statements were checked against primary sources in November 2026 (NMC, CCPA, MeitY/PIB, ASCI).
 * Sources log: smm-sources-smm-health-education.md in the batch scratchpad.
 */

const NMC_AD_GUIDELINES = "https://nmc.org.in/whats-new/download/1874";
const IMC_2002 = "https://nmc.org.in/storage/cms/Ethics-Regulations-2002.pdf";
const NMC_REGULATIONS_PAGE = "https://nmc.org.in/page/rules-regulations-rules-regulations-nmc";
const PIB_DMR = "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1809813";
const ASCI_CODE = "https://www.ascionline.in/the-asci-code/";
const ASCI_GUIDELINES = "https://www.ascionline.in/the-asci-code-guidelines/";
const DPDP_ACT = "https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf";
const DPDP_RULES = "https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf";
const PIB_DPDP = "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf";
const CCPA_COACHING =
  "https://ccpa.doca.gov.in/files/Guidelines%20for%20Prevention%20of%20Misleading%20Advertisement%20in%20Coaching%20Sector,%202024.pdf";
const PIB_COACHING = "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2073013";

export const smmHealthEducationPosts: BlogPost[] = [
  {
    slug: "social-media-management-clinics",
    category: "Social Media Management",
    title: "Social Media Management for Clinics: How to Educate Patients and Build Trust Online",
    seoTitle: "Social Media Management for Clinics: Patient Education",
    excerpt:
      "How a doctor-led clinic in India can run its social accounts under the NMC's October 2026 advertising guidelines: patient education, doctor details, appointments, privacy, reviews and a pre-publish approval checklist.",
    metaDescription:
      "Social media for clinics under India's October 2026 NMC advertising guidelines: patient education, doctor details, consent, reviews and approval checks.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "12 min read",
    tags: [
      "social media management for clinics",
      "social media marketing for doctors",
      "clinic Instagram strategy",
      "healthcare social media India",
      "NMC advertising guidelines 2026",
    ],
    related: [
      "influencer-marketing-healthcare-brands-india",
      "dental-oral-care-influencer-marketing-india",
      "social-media-content-approval-process",
    ],
    hero: {
      src: "/blog/brand-guides/social-media-management-clinics.svg",
      alt: "A clinic content approval flow: draft, check against the rules, doctor review, consent check and publish, with the line between factual education and promotion shown underneath",
    },
    body: [
      {
        type: "paragraph",
        text: "At 10 pm a patient's daughter messages your clinic's Instagram account: her father's sugar reading is high, should she give him an extra tablet? The same week, the receptionist suggests reposting a grateful patient's Google review, and a freelancer pitches a 'Best Diabetologist in the City' Reel. Each of these needs a different answer, and for doctors in India the rules behind those answers were rewritten in October 2026.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media management for clinics in India means publishing factual clinic information and general, doctor-reviewed health education, never personal advice or self-promotion. The National Medical Commission's guidelines of 6 October 2026 restrict soliciting patients, superlatives, success rates, before-and-after images and sharing patient testimonials, and ask doctors to show their qualifications and registration number on posts. The doctor approves every post; an agency plans, designs and publishes.",
      },
      { type: "heading", text: "The rules that apply, as of November 2026", id: "rules-november-2026" },
      {
        type: "paragraph",
        text: "This is orientation, not legal advice. Your State Medical Council, professional body or legal team has the final word on any post you are unsure about.",
      },
      {
        type: "table",
        headers: ["Rule", "Status (checked November 2026)", "What it means for a clinic's posts"],
        rows: [
          [
            "NMC Guidelines on Ethical Advertising and Public Communication (No. R-13014/01/2024-Ethics)",
            "Issued 6 October 2026; in force immediately. No clarification or withdrawal listed on the NMC site at the time of writing",
            "Treats social, influencer, search, WhatsApp and AI-assisted promotion as advertising; allows factual information and education",
          ],
          [
            "Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002",
            "The 2026 guidelines say they are to be read with these Regulations (clause 4.2)",
            "Clause 6.1.1 calls soliciting patients unethical and limits announcements to set events, such as starting practice",
          ],
          [
            "NMC Registered Medical Practitioner (Professional Conduct) Regulations, 2023",
            "Dated 2 August 2023; kept in abeyance by an amendment dated 23 August 2023, still listed that way by the NMC",
            "Don't base your policy on them; watch for any later notification",
          ],
          [
            "Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954",
            "Administered by State Governments (Ministry of Health, March 2022)",
            "No advertisement suggesting a drug for diagnosing, curing, treating or preventing the conditions in its Schedule",
          ],
          [
            "ASCI Code",
            "Self-regulatory code for advertising",
            "Claims must be capable of substantiation; special care in ads addressed to people with illness",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the NMC's guidelines of 6 October 2026, the 2002 Regulations and the NMC regulations page, the Ministry of Health's description of the 1954 Act (PIB, 25 March 2022), and the ASCI Code.",
        links: [
          { text: "the NMC's guidelines of 6 October 2026", href: NMC_AD_GUIDELINES },
          { text: "the 2002 Regulations", href: IMC_2002 },
          { text: "the NMC regulations page", href: NMC_REGULATIONS_PAGE },
          { text: "the Ministry of Health's description of the 1954 Act", href: PIB_DMR },
          { text: "the ASCI Code", href: ASCI_CODE },
        ],
      },
      {
        type: "paragraph",
        text: "Two clauses matter for anyone who helps a clinic run its accounts. Clause 4.4 says publishing through an agency, influencer or platform does not absolve a doctor or clinic of responsibility for content it authorised or knowingly permitted. Clause 8.1(ii) lists engaging 'any third party for marketing medical services' among the practices doctors must avoid, while clause 8.1(viii) says the engagement of advertising and digital marketing agencies must not be structured so that payment is linked to procuring or referring individual patients. How those two clauses apply to outside help with factual and educational posting is a question to put to your State Medical Council or legal team before you sign anything.",
      },
      {
        type: "paragraph",
        text: "The NMC rules cover registered medical practitioners and hospitals or medical institutions. Dentists and AYUSH practitioners answer to their own commissions and codes: our guide to marketing for dental clinics and oral-care brands covers the National Dental Commission's October 2026 advisory, though it is written about creator campaigns rather than a clinic's own accounts.",
        links: [{ text: "our guide to marketing for dental clinics and oral-care brands", href: "/blog/dental-oral-care-influencer-marketing-india" }],
      },
      { type: "heading", text: "What a clinic can post", id: "what-to-post" },
      {
        type: "paragraph",
        text: "The useful test comes from the guidelines themselves: is this factual, verifiable information that helps a patient, or is it promoting the doctor's skill, results or reputation? The first kind is the backbone of a clinic feed.",
      },
      {
        type: "table",
        headers: ["Content type", "What it looks like", "Where the line is"],
        rows: [
          ["Patient education", "General explainers on conditions, prevention, screening and when to see a doctor", "Reviewed by the doctor; no diagnosis, no fear-based hooks, no promotion of the practice (clauses 5.1 and 8.1(i))"],
          ["Clinic information", "Address, timings, how to book, languages spoken, accessibility, what to bring", "Factual and verifiable. Any fees or packages must be stated transparently and not mislead"],
          ["Doctor details", "Name, recognised qualifications, specialty, registration number, consultation days", "No 'best', 'No.1', 'top' or 'most trusted' claims, no achievement reels"],
          ["Announcements", "Starting practice, new address, temporary absence, resumption, change of practice type, declared charges", "Keep to the events the 2002 Regulations (6.1.1) and the 2026 guidelines (8.2) list"],
          ["Process FAQs", "How to prepare for a test, insurance paperwork, follow-up booking", "Process questions only; personal medical questions go to a consultation"],
          ["Community awareness", "Government health campaigns, national health days, public screening drives", "Government programme campaigns are exempt (clause 7.3); your own camps must not become inducements"],
        ],
      },
      { type: "subheading", text: "Patient education that stays general" },
      {
        type: "paragraph",
        text: "Start each education post from a question patients genuinely ask, write it for a general reader, and have the doctor who will put their name to it check every sentence. Avoid hooks that create anxiety ('this symptom could mean something serious'), because clause 8.1(i) bars fear-based marketing and creating unnecessary demand for tests or procedures. End with a plain line such as 'This is general information, not medical advice. Please consult a doctor about your own situation.'",
      },
      { type: "subheading", text: "Doctor introductions" },
      {
        type: "paragraph",
        text: "Under the explanations to clause 3.2, a doctor's own electronic posts should disclose their name, qualifications, registration status and SMR or NMR registration number, and a clinical establishment's posts should name the doctors involved with the same details. Clause 1.4.2 of the 2002 Regulations allows only recognised qualifications as suffixes, so copy credentials from the registration certificate. Clause 9.2 bars using a doctor's photograph where it amounts to self-advertisement or promotional publicity, so keep introductions factual and directory-style, and check any photo-led format with your adviser first.",
      },
      { type: "subheading", text: "Appointments and clinic information" },
      {
        type: "paragraph",
        text: "Timings, holiday closures, booking links, directions and 'what to expect at your first visit' posts are low risk and genuinely useful, as long as they are kept current. Keep offers out: clause 8.1(x) bars discounts, limited-period offers, contests, coupons and free procedures used in a way likely to encourage unnecessary consultations or tests.",
      },
      { type: "heading", text: "Reviews, testimonials and patient stories", id: "reviews-testimonials" },
      {
        type: "paragraph",
        text: "This is the biggest change for clinics used to general marketing advice. Explanation V to clause 3.2 bars doctors and medical institutions from soliciting, buying or manipulating fake, paid or misleading reviews, ratings or testimonials, and says a doctor shall not request or share patient testimonials, recommendations or reviews for professional promotion on social media. Clause 8.1(v) rules out promotional case reports, surgical results, before-and-after photographs, celebrity patients and success stories, except strictly for scientific or educational purposes with anonymised patient consent. Clause 6.2 says consent alone does not make a prohibited testimonial acceptable.",
      },
      {
        type: "list",
        items: [
          "Don't repost reviews as social posts or run 'share your experience' campaigns.",
          "When replying to a public review, don't confirm the reviewer is a patient or discuss their care.",
          "Never buy followers, likes, reviews or comments, or manipulate search rankings (clause 8.1(xii)).",
          "Never use AI to create a patient's image, voice, testimonial or outcome (clause 7.2(b)).",
          "Health creators must state relevant qualifications upfront under ASCI's influencer guidelines (Addendum II, 6 March 2025).",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to influencer marketing for healthcare brands covers creator campaigns, which are separate from the clinic's own feed.",
        links: [{ text: "influencer marketing for healthcare brands", href: "/blog/influencer-marketing-healthcare-brands-india" }],
      },
      { type: "heading", text: "Patient privacy and consent", id: "privacy-consent" },
      {
        type: "paragraph",
        text: "Clause 6.1 of the 2026 guidelines says patient information, photographs, videos, records, clinical images and other identifiable details shall not be used for advertising unless the law permits it and the necessary consent and safeguards are in place. Where consent is legally required, clause 6.3 says it must be specific, informed, voluntary, documented and capable of verification. Clause 7.4 says doctors and clinical establishments shall not share patient data, such as names, faces or anomalies, that can identify someone publicly. The 2002 Regulations already required confidentiality (clauses 2.2 and 7.14) and barred publishing patient photographs or case reports in an identifiable way without permission (clause 7.17).",
      },
      {
        type: "paragraph",
        text: "Health information is also personal data. The Digital Personal Data Protection Act, 2023 governs it, and the DPDP Rules were notified on 14 November 2025 with an eighteen-month phased compliance period, according to the PIB backgrounder of 17 November 2025. Clause 7.6 of the NMC guidelines says advertising that involves personal data must comply with the IT Act, the DPDP Act and the 2025 Rules. Ask your legal team which obligations already apply to your clinic.",
        links: [
          { text: "the PIB backgrounder of 17 November 2025", href: PIB_DPDP },
          { text: "Digital Personal Data Protection Act, 2023", href: DPDP_ACT },
        ],
      },
      {
        type: "list",
        items: [
          "Shoot before opening hours or where no patient can be seen or heard.",
          "Keep screens, files, prescriptions and appointment boards out of every frame.",
          "Get written consent from staff who appear, and let them withdraw it.",
          "Don't feature identifiable patients in promotional content at all.",
        ],
      },
      { type: "heading", text: "Comments and DMs: inform, never diagnose", id: "comments-dms" },
      {
        type: "paragraph",
        text: "Whoever manages the inbox must never diagnose, interpret reports, suggest medicines or change doses, even when the answer seems obvious. Route every clinical question to a consultation, keep personal details out of public replies, and escalate urgent symptoms: tell the person to seek emergency care now, and alert the doctor. Our guide to community management vs customer support explains how to split routine replies from issues that need the clinic team.",
        links: [{ text: "community management vs customer support", href: "/blog/community-management-vs-customer-support" }],
      },
      {
        type: "template",
        label: "Reply to a medical question in comments (adapt and get it approved once)",
        text: "Thank you for asking. We can't advise on individual health questions over social media, because the doctor needs to understand your history first. Please call the clinic on [number] or book a consultation at [link]. If the symptoms are severe or sudden, please go to the nearest emergency department now.",
      },
      { type: "heading", text: "Choosing platforms", id: "platforms" },
      {
        type: "paragraph",
        text: "Instagram and Facebook suit short education and updates for local patients, YouTube suits longer explainers people search for, and a phone or WhatsApp line handles bookings. Pick channels you can moderate daily. Our guide to choosing social media platforms by business model covers the trade-offs.",
        links: [{ text: "choosing social media platforms by business model", href: "/blog/choose-social-media-platforms-for-business" }],
      },
      { type: "heading", text: "Who approves, and what an agency does", id: "approvals" },
      {
        type: "paragraph",
        text: "The doctor, or a named medical lead, approves every post, caption, reply template and Story before it goes live. Legal review is needed for anything new: a fee announcement, a health camp, a creator collaboration or a new format. An agency can plan, draft, design, edit footage the clinic supplies, schedule and moderate within an agreed scope. It does not replace the doctor's clinical judgement or legal advice, and its fee should never be tied to patients or bookings (clause 8.1(viii)). Our guide to the social media approval process covers stages and turnaround.",
        links: [{ text: "the social media approval process", href: "/blog/social-media-content-approval-process" }],
      },
      {
        type: "paragraph",
        text: "AI needs its own rule. Clause 7.2 prohibits AI-generated promotional campaigns for commercial interest and says any conforming AI-generated promotional content must carry a source mark stating it is AI-generated. A human should write and check every final version, and patient information never goes into an AI tool without legal sign-off.",
      },
      { type: "heading", text: "Pre-publish medical content approval checklist", id: "approval-checklist" },
      {
        type: "list",
        items: [
          "Factual and verifiable, not promoting a doctor's skill, results or reputation.",
          "Health statements sourced, and the final version read by the doctor.",
          "General education with a 'not medical advice' line, not individual advice.",
          "Doctor's name, recognised qualifications, registration status and SMR/NMR number shown.",
          "No best, No.1, top, leading, guaranteed, painless, miracle or 100%.",
          "No success rates, patient numbers, before-and-after images or patient stories.",
          "No discounts, contests, free procedures or other inducements.",
          "No medicine reference suggesting treatment of a condition in the 1954 Act's Schedule.",
          "Documented consent for everyone in frame; no patient identifiable.",
          "AI-generated material marked, and none of it depicting patients.",
          "Reply plan ready, including the escalation route for medical questions.",
        ],
      },
      {
        type: "template",
        label: "Approval record (keep one per post)",
        text: "Post ID and date:\nFormat and platform:\nDrafted by:\nHealth facts checked against:\nDoctor reviewer (name, registration no.):\nConsent on file for people shown (Y/N, reference):\nLegal or compliance review needed (Y/N, outcome):\nApproved by and date:\nScheduled for:",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Copying generic advice about testimonials and before-and-after posts into a clinic feed.",
          "Letting the receptionist or agency answer clinical questions in DMs.",
          "Listing credentials from memory instead of the registration certificate.",
          "Running 'free check-up this week only' posts.",
          "Paying a marketing partner per booking or per lead.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Start with a correct profile with registration details, a timings and booking post, and a short series of doctor-reviewed answers to common patient questions. Agree the checklist and the medical-question reply before the first post. If you run a multi-department hospital rather than a clinic, our guide to hospital social media strategy covers governance at that scale.",
        links: [{ text: "hospital social media strategy", href: "/blog/hospital-social-media-marketing" }],
      },
      {
        type: "paragraph",
        text: "Outside support such as Kudozz's covers planning, copy, design, publishing and community management within an agreed scope; for a clinic, all of that sits under the doctor's approval and does not replace medical or legal review.",
        links: [{ text: "Outside support such as Kudozz's", href: "/services/social-media-management#community-management" }],
      },
    ],
    faqs: [
      {
        question: "Can a clinic share patient reviews on Instagram?",
        answer:
          "Under the NMC's guidelines of 6 October 2026, a doctor shall not request or share patient testimonials, recommendations or reviews for professional promotion on social media, and fake, paid or misleading reviews are prohibited outright. Reposting reviews as content is therefore off the table for doctors. You can still reply politely to reviews on review platforms, without confirming anyone is a patient. Check edge cases with your State Medical Council or legal team.",
      },
      {
        question: "Can doctors post educational Reels in their own name?",
        answer:
          "Yes, within limits. The guidelines allow doctors to take part in health awareness and educational content provided it does not promote their personal practice, solicit patients or get monetised through promotional marketing. Posts should disclose the doctor's name, qualifications, registration status and SMR or NMR number. Keep the content general, avoid calls to book, and have the doctor approve the script and the final edit.",
      },
      {
        question: "Are the NMC's 2023 professional conduct regulations in force?",
        answer:
          "Not at the time of writing. The 2023 Regulations, dated 2 August 2023, were kept in abeyance by an amendment dated 23 August 2023, and the NMC's regulations page still lists them that way in November 2026. The October 2026 advertising guidelines are read with the 2002 Regulations. Check the NMC website for any later notification.",
      },
      {
        question: "Can we promote discounted health check-up packages?",
        answer:
          "Be careful. The guidelines bar discounts, limited-period offers, free procedures and similar inducements used in a way likely to encourage unnecessary consultations or tests, and say any lawful disclosure of charges or packages must be factual and transparent. A plain statement of what a package includes and costs differs from a countdown offer. Have legal review package posts first.",
      },
      {
        question: "Do these rules apply to dental and AYUSH clinics?",
        answer:
          "The NMC guidelines apply to registered medical practitioners and to hospitals and medical institutions. Dentists are regulated by the National Dental Commission and their own ethics regulations, and AYUSH practitioners by their own commissions. The principles are similar, but check the current rules and advisories from your own regulator rather than assuming the NMC text applies word for word.",
      },
    ],
  },
  {
    slug: "hospital-social-media-marketing",
    category: "Social Media Management",
    title: "Hospital Social Media Strategy: Content Planning for Patient Education, Reputation and Community Engagement",
    seoTitle: "Hospital Social Media Strategy and Governance in India",
    excerpt:
      "How a multi-department hospital can plan and govern its social media: a medical review committee, an approval matrix, department content, public health awareness, consent, crisis communication and measurement without outcome claims.",
    metaDescription:
      "Hospital social media strategy for India: medical review, an approval matrix, department content, consent, crisis response and the NMC's 2026 guidelines.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "hospital social media marketing",
      "hospital social media strategy",
      "healthcare social media management",
      "hospital content ideas",
      "hospital content approval matrix",
    ],
    related: [
      "influencer-marketing-healthcare-brands-india",
      "social-media-crisis-management-plan",
      "social-media-content-approval-process",
    ],
    hero: {
      src: "/blog/brand-guides/hospital-social-media-marketing.svg",
      alt: "A hospital content governance flow: department request, communications draft, medical review committee, legal and privacy check, and final sign-off, with crisis posts taking a separate escalation route",
    },
    body: [
      {
        type: "paragraph",
        text: "The cardiology department wants a post about its new cath lab. Orthopaedics wants to celebrate a milestone number of knee replacements. The CEO wants the hospital's latest award on every channel, and a patient's relative has just posted an angry video from the emergency waiting area. A hospital's social media team meets all four of these in a normal week, and each one needs a different decision-maker.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A hospital social media strategy in India should publish factual, verifiable information about departments, facilities and services, public health education checked by clinicians, and community programmes, all under a written approval matrix. Under the NMC's guidelines of 6 October 2026, hospitals must avoid solicitation, superiority claims, outcome guarantees and promotional portrayal of individual doctors. Medical, legal and privacy owners approve content; the social team or agency runs the calendar.",
      },
      { type: "heading", text: "What a hospital may publish", id: "what-hospitals-may-publish" },
      {
        type: "paragraph",
        text: "The National Medical Commission's Guidelines on Ethical Advertising and Public Communication by Hospitals/Medical Institutions and Registered Medical Practitioners (No. R-13014/01/2024-Ethics, 6 October 2026, in force with immediate effect) are the starting point. Clause 8.3 allows hospitals to share factual, objective and verifiable information about their name, location, contact details, departments, facilities, equipment, services, emergency services, accreditation status and charges. The same clause rules out patient solicitation, inducements, comparative superiority claims, guarantees of cure or outcome, unverifiable or exaggerated claims, and promotional portrayal of an individual doctor. It adds that the form, medium or frequency of communication must not turn factual information into solicitation.",
        links: [{ text: "Guidelines on Ethical Advertising and Public Communication", href: NMC_AD_GUIDELINES }],
      },
      {
        type: "list",
        items: [
          "New equipment or technology: allowed as factual information, without superiority, guaranteed accuracy, guaranteed outcomes or comparisons (Explanation II to clause 3.2).",
          "Doctors: posts should name the doctors involved with their qualifications, registration status and SMR/NMR number (Explanation IV). A directory of doctors with recognised qualifications, specialties, registration details and availability that serves a patient-information function is treated as distinct from promotional advertising (clause 9.1).",
          "Awards and rankings: words like best, No.1, leading, most trusted or top are barred unless objectively verifiable through a transparent, independent methodology; any award used should disclose the awarding body, methodology and date where needed (clause 8.1(ix) and its proviso). ASCI's guidelines on awards and rankings (21 April 2022) set extra requirements for healthcare.",
          "Charges and packages: any lawful disclosure must be factual, transparent and not misleading, and inducements likely to encourage unnecessary tests or treatment are barred (clause 8.1(x)).",
          "Reviews: hospitals must not solicit, buy, manipulate or cause to be published fake, paid or misleading reviews, ratings or testimonials (Explanation V), and must not buy followers or engagement (clause 8.1(xii)).",
        ],
      },
      {
        type: "paragraph",
        text: "For hospitals, the guidelines are read with the applicable Clinical Establishments Act, Rules or state law, and that law prevails if there is an irreconcilable conflict (clause 4.3). Violations by a hospital are handled under that law, and a doctor who personally authorised a prohibited post can be examined separately by the State Medical Council (clause 11.5). Your legal team should confirm which state law applies to you. ASCI's awards guidance is listed on its guidelines page.",
        links: [{ text: "its guidelines page", href: ASCI_GUIDELINES }],
      },
      { type: "heading", text: "Set up the governance group first", id: "governance-group" },
      {
        type: "paragraph",
        text: "A clinic can run on one doctor's approval. A hospital needs a small standing group with named people and deputies, because content touches clinical accuracy, patient privacy, law and reputation at once. A typical group looks like this:",
      },
      {
        type: "list",
        items: [
          "Medical review: a senior clinician (or a rota of department reviewers) who checks every health statement and every post about a department.",
          "Communications: owns the calendar, voice, scheduling and community management, and drafts or briefs every post.",
          "Legal and compliance: reviews new formats, awards, charges, campaigns, partnerships and anything about an incident.",
          "Privacy or data protection: checks consent records and anything involving patient or staff personal data.",
          "Quality or patient safety: joins when a post touches outcomes, accreditation or an incident.",
        ],
      },
      { type: "heading", text: "The approval matrix", id: "approval-matrix" },
      {
        type: "paragraph",
        text: "This is the practical resource: agree a version of it in writing before you post. The turnaround depends on your committee's capacity, so build lead times into the calendar instead of promising same-day approvals. Our guide to the social media approval process covers stages and tools in more depth.",
        links: [{ text: "the social media approval process", href: "/blog/social-media-content-approval-process" }],
      },
      {
        type: "table",
        headers: ["Content type", "Drafted by", "Medical review", "Legal / privacy", "Final sign-off"],
        rows: [
          ["Department and service information", "Communications with the department", "Department head or nominee", "Only for new service claims", "Communications lead"],
          ["Doctor directory-style posts", "Communications", "Medical administration checks credentials", "Privacy if photos are used", "Medical director's office"],
          ["Public health awareness", "Communications or clinician", "Clinician in that specialty", "Not usually", "Medical reviewer"],
          ["Equipment and facilities", "Communications", "Department head", "Legal checks wording for comparisons", "Communications lead"],
          ["Awards, accreditation, rankings", "Communications", "Quality team verifies", "Legal, always", "Leadership"],
          ["Charges, packages, health check-ups", "Communications with billing", "Medical reviewer for inclusions", "Legal, always", "Leadership"],
          ["Staff or patient stories", "Communications", "Clinician", "Privacy checks consent, always", "Medical director's office"],
          ["Community programmes and camps", "CSR or communications", "Clinician running it", "Legal if partners or offers involved", "Communications lead"],
          ["Incident, complaint or crisis statements", "Communications with leadership", "Medical director", "Legal, always", "CEO or nominee"],
        ],
      },
      { type: "heading", text: "Content to plan, department by department", id: "content-plan" },
      {
        type: "paragraph",
        text: "Hospitals rarely run short of ideas; they run short of approved, accurate content. Plan by department and by patient need, then rotate through these categories so no single department dominates the month:",
      },
      {
        type: "table",
        headers: ["Category", "Example posts", "Keep in mind"],
        rows: [
          ["Department and service information", "What the department treats, OPD days, how referrals work, which tests are available", "Factual, no outcome or superiority claims"],
          ["Specialists", "Directory-style profiles with qualifications, registration numbers and consultation timings", "No promotional portrayal of an individual doctor (clause 8.3(ii))"],
          ["Patient processes", "Admission steps, visiting hours, insurance and cashless desk, discharge, what to bring", "Update when processes change; date anything time-bound"],
          ["Facilities", "Emergency entrance, pharmacy hours, parking, accessibility, wayfinding", "Equipment posts stay factual (Explanation II)"],
          ["Public health awareness", "Seasonal illness precautions, vaccination drives, screening awareness", "Take health facts from official sources such as MoHFW or WHO; government programme campaigns are exempt (clause 7.3)"],
          ["Community programmes", "Blood donation drives, first-aid training, school health talks", "Show the programme, not patients; no inducements"],
          ["People behind the hospital", "Nursing, lab, housekeeping and support teams at work", "Written consent from staff; no patients in frame"],
        ],
      },
      {
        type: "paragraph",
        text: "For health facts, cite primary public health sources such as the Ministry of Health and Family Welfare or the World Health Organization, and have a clinician confirm the advice suits your patients. Doctors may give public health talks on electronic media in their own name and designation, but clause 8.2(iii) says this should not promote their employer, so plan clinician-led education carefully.",
        links: [
          { text: "Ministry of Health and Family Welfare", href: "https://www.mohfw.gov.in/" },
          { text: "World Health Organization", href: "https://www.who.int/india" },
        ],
      },
      { type: "heading", text: "Consent and privacy in a hospital setting", id: "consent-privacy" },
      {
        type: "paragraph",
        text: "Hospitals are full of identifiable people at their most vulnerable. Clause 6.1 of the NMC guidelines says patient information, images, records and treatment details shall not be used for advertising unless the law permits it and consent and safeguards are in place; clause 6.2 says consent alone does not make a prohibited testimonial or before-and-after acceptable; clause 6.4 asks for cropping, blurring or removing identifying marks even where disclosure is lawful. Clause 7.5 says live broadcast of surgical or clinical procedures must follow the NMC's separate framework on live surgery. Clause 7.6 requires compliance with the IT Act, the Digital Personal Data Protection Act, 2023 and its 2025 Rules, which were notified on 14 November 2025 with an eighteen-month phased compliance period (PIB, 17 November 2025).",
        links: [{ text: "PIB, 17 November 2025", href: PIB_DPDP }],
      },
      {
        type: "list",
        items: [
          "Create a photography policy: approved zones, approved times, and a rule that wards, ICUs and emergency areas are never filmed while patients are present.",
          "Keep a consent register for staff and any other person shown, with expiry and withdrawal handled.",
          "Never confirm in public that someone is or was a patient, even when they post about it themselves.",
          "Brief every department that personal phones and personal accounts must not be used to post from clinical areas.",
        ],
      },
      { type: "heading", text: "Crisis communication: incidents, complaints and misinformation", id: "crisis-communication" },
      {
        type: "paragraph",
        text: "Hospitals face situations most brands never will: an allegation of negligence going viral, a violent incident in the emergency department, a data breach, or a false message about the hospital forwarded across WhatsApp groups. Set severity levels and a holding-statement route in advance using our guide to building a social media crisis response plan, and add three hospital-specific rules: never discuss a patient's care or condition publicly, even to correct a claim; route anything involving an incident to the medical director and legal team before replying; and correct misinformation with verifiable facts about services, not with arguments. Serious incidents need specialist legal and PR advice; a social media team or agency does not replace them.",
        links: [{ text: "building a social media crisis response plan", href: "/blog/social-media-crisis-management-plan" }],
      },
      {
        type: "template",
        label: "Holding reply to a public complaint about care (approve with legal in advance)",
        text: "We're sorry to see this and we take every concern seriously. To protect patient privacy we can't discuss anyone's care here. Please contact our patient relations team on [number / email] so that a senior member of staff can look into it with you directly.",
      },
      { type: "heading", text: "Measure without outcome claims", id: "measurement" },
      {
        type: "paragraph",
        text: "Clause 8.1(iii) bars doctors from advertising professional success rates or numbers of patients treated, and hospital communication must not carry unverifiable or exaggerated claims, so 'our 5,000th surgery' milestone posts and success-rate graphics stay out of the feed. Measure what the channel can honestly influence: reach and saves on education posts, questions answered, response times, accuracy of information, the share of comments escalated correctly, and how often people use the booking or helpline details you post. Report trends to leadership, not single-post spikes. Our guide to social media KPIs by business goal covers metric selection.",
        links: [{ text: "social media KPIs by business goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Letting each department run its own account without the approval matrix.",
          "Posting award graphics without the awarding body, methodology and date.",
          "Featuring a star surgeon in a promotional series.",
          "Sharing recovered patients' stories or before-and-after images because the patient agreed.",
          "Replying to a complaint with details of the patient's treatment.",
          "Boasting about patient volumes, success rates or 'first in the city' claims that can't be independently verified.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Form the governance group, agree the approval matrix and the photography policy, then build a month of department information, process posts and clinician-checked awareness content. Smaller doctor-led practices can use our clinic social media guide instead. For creator partnerships, our guide to influencer marketing for healthcare brands covers campaigns with creators, which sit outside the hospital's own feed.",
        links: [
          { text: "clinic social media guide", href: "/blog/social-media-management-clinics" },
          { text: "influencer marketing for healthcare brands", href: "/blog/influencer-marketing-healthcare-brands-india" },
        ],
      },
      {
        type: "paragraph",
        text: "An agency's role, including what Kudozz includes in social media management, is planning, drafting, design, publishing and moderation inside the approvals you set; medical, legal and privacy decisions stay with the hospital.",
        links: [{ text: "what Kudozz includes in social media management", href: "/services/social-media-management#scope" }],
      },
    ],
    faqs: [
      {
        question: "Can a hospital post about its awards and accreditation?",
        answer:
          "Accreditation status is listed among the factual information hospitals may share under the NMC's October 2026 guidelines. Awards and rankings need more care: superiority words are barred unless objectively verifiable through a transparent, independent methodology, and the awarding body, methodology and date should be disclosed where needed. ASCI's 2022 awards and rankings guidelines add requirements for healthcare. Have legal approve every award post.",
      },
      {
        question: "Can hospital doctors run their own social media accounts?",
        answer:
          "Doctors' personal conduct is governed by the NMC guidelines and the 2002 Regulations, and a hospital should set a separate policy for staff accounts. Doctors may give public health talks in their own name and designation without promoting their employer. A hospital should not use doctors' personal accounts to do indirectly what it can't do directly; clause 8.1(xi) addresses this. Check specifics with your legal team.",
      },
      {
        question: "Should hospitals reply to negative reviews and posts?",
        answer:
          "Usually yes, briefly and without any clinical detail. Acknowledge the concern, say you can't discuss individual care publicly, and give a direct contact for patient relations. Never confirm the person was a patient. If the post alleges negligence, harm or a data breach, treat it as a potential incident and route it through the medical director and legal team before anyone replies.",
      },
      {
        question: "Can we publish health check-up package prices?",
        answer:
          "The NMC guidelines allow factual information about charges, and say any lawful disclosure of charges, packages or fees must be factual, transparent and not misleading. They also bar discounts, limited-period offers and similar inducements used in a way likely to encourage unnecessary tests or treatment. State what is included, avoid urgency, and have legal review the post. Your state's clinical establishments law may add requirements.",
      },
      {
        question: "Who should sit on a hospital's social media review committee?",
        answer:
          "At minimum a senior clinician for medical accuracy, the communications lead, someone from legal or compliance, and the person responsible for data protection. Quality or patient safety should join for posts about outcomes, accreditation or incidents. Name deputies for each role so approvals don't stall when someone is on leave or in theatre.",
      },
    ],
  },
  {
    slug: "social-media-marketing-coaching-institutes",
    category: "Social Media Management",
    title: "Social Media Marketing for Coaching Institutes: A Practical Strategy for Building Student Enquiries",
    seoTitle: "Social Media Marketing for Coaching Institutes in India",
    excerpt:
      "A practical social media plan for coaching institutes in India: subject content, faculty introductions, demo classes, parent communication and student stories, within the CCPA's 2024 coaching advertisement guidelines.",
    metaDescription:
      "Social media marketing for coaching institutes: content ideas, a monthly plan, demo-class journeys and what the CCPA's 2024 coaching ad guidelines require.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "social media marketing for coaching institutes",
      "coaching institute social media strategy",
      "Instagram for coaching classes",
      "edtech social media",
      "CCPA coaching advertisement guidelines",
    ],
    related: [
      "influencer-marketing-education-edtech-brands-india",
      "monthly-social-media-content-calendar",
      "social-media-content-from-customer-questions",
    ],
    hero: {
      src: "/blog/brand-guides/social-media-marketing-coaching-institutes.svg",
      alt: "A coaching institute's monthly content plan across four weeks, from subject lessons and faculty introductions to student questions and demo-class invitations, with a claims check before every post",
    },
    body: [
      {
        type: "paragraph",
        text: "Results day: your rival's Instagram is covered in student photos, rank numbers and '100% selection' banners, and your counsellor asks why your page is quiet. Meanwhile three parents have messaged asking whether your weekend batch covers the full syllabus and what happens to fees if their child drops out. The second set of messages is where enquiries actually come from, and the first set is exactly what India's consumer protection regulator has been penalising.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media marketing for coaching institutes works best when it teaches: subject lessons, exam strategy, faculty introductions with accurate credentials, honest course explanations, parent-focused answers and demo classes. Under the CCPA's coaching guidelines of 13 November 2024, institutes must not make false claims about selections, ranks or guarantees, must disclose rank, course and whether it was paid alongside a candidate's photo, and need the candidate's written consent obtained after selection.",
      },
      { type: "heading", text: "What the CCPA coaching guidelines require", id: "ccpa-guidelines" },
      {
        type: "paragraph",
        text: "The Central Consumer Protection Authority notified the Guidelines for Prevention of Misleading Advertisement in Coaching Sector, 2024 on 13 November 2024 under section 18 of the Consumer Protection Act, 2019, in force from the date of publication. They apply to all forms of advertisement by anyone engaged in coaching, including endorsers. 'Coaching' covers academic support, tuition and study programmes, but not counselling, sports, dance, theatre or other creative activities, and a 'coaching center' is one providing coaching to more than fifty students. Contraventions are dealt with under the Consumer Protection Act. This summary is not legal advice; confirm how the guidelines apply to your institute with your legal team.",
        links: [{ text: "Guidelines for Prevention of Misleading Advertisement in Coaching Sector, 2024", href: CCPA_COACHING }],
      },
      {
        type: "table",
        headers: ["Clause", "What it says (paraphrased)", "What it means on social media"],
        rows: [
          ["3(a)", "No false claims about courses, duration, faculty credentials, fees or exit and refund policy", "Course and faculty posts must match what you actually deliver"],
          ["3(b)", "No false claims about number of selections, ranks or success rate", "Only real, documented results, with nothing inflated or borrowed"],
          ["3(c)", "No false claims of guaranteed selection, job security, promotions, salary rises, admissions, or that enrolment ensures a good rank or high marks", "No 'guaranteed selection' or 'sure-shot rank' captions"],
          ["3(e)", "No false sense of urgency or scarcity, or false popularity", "No fake 'last 3 seats' or invented demand"],
          ["4(1)(a)", "Disclose rank secured, name and duration of course, and whether the course was paid, with the candidate's photograph", "Every topper post carries those details"],
          ["4(1)(b)", "Disclaimers and important information in the same font as the claim", "No fine print in the caption or a corner of the graphic"],
          ["4(1)(c)-(d)", "Represent facilities accurately; claim recognition or approval (such as AICTE or UGC) only if true", "Show only the infrastructure and approvals you actually have"],
          ["4(2)", "No name, photo, testimonial or video of a successful candidate without written consent, taken after selection", "Consent forms signed at admission don't count"],
        ],
      },
      {
        type: "paragraph",
        text: "When it announced the guidelines, the Department of Consumer Affairs said the CCPA had taken action against 45 coaching centres and imposed penalties on 18 for misleading advertisements (PIB, 13 November 2024). Separately, ASCI's guidelines for advertising of educational institutions, programmes and platforms (9 March 2023) ask for the disclaimer 'past record is no guarantee of future prospects' on substantiated outcome claims, and rule out abstract 100% claims and ads that create false urgency.",
        links: [
          { text: "PIB, 13 November 2024", href: PIB_COACHING },
          { text: "ASCI's guidelines for advertising of educational institutions", href: ASCI_GUIDELINES },
        ],
      },
      { type: "heading", text: "Content that builds enquiries without claims", id: "content-pillars" },
      {
        type: "paragraph",
        text: "Students choose a coaching institute because they believe it will teach them well. The most persuasive thing your feed can do is show that teaching. These categories cover most of what an institute needs:",
      },
      {
        type: "table",
        headers: ["Category", "Examples", "Watch-out"],
        rows: [
          ["Subject-wise lessons", "One concept per Reel or carousel, solved questions, common errors", "Accuracy check by the subject faculty"],
          ["Exam strategy and learning tips", "Revision plans, time management, reading the syllabus, handling mock tests", "General tips, not promised marks"],
          ["Faculty introductions", "Subject, teaching experience, qualifications, a short teaching clip", "Credentials exactly as documented (clause 3(a))"],
          ["Course explanations", "Who a batch suits, schedule, syllabus coverage, fee and refund policy explained", "Match the course document; no hidden conditions"],
          ["Student questions", "Weekly answers to doubts sent by DM or comments", "Use questions, not identities, unless consent is on file"],
          ["Parent communication", "How progress is tracked, safety and timings, how to raise concerns", "Honest; don't frame average scorers as failures"],
          ["Exam updates", "Notification released, form window open, syllabus change", "Only from the conducting body's official notice, linked or quoted"],
          ["Demo classes", "Invitations, what happens in a demo, recorded sample lessons", "No pressure tactics or fake deadlines"],
        ],
      },
      {
        type: "paragraph",
        text: "For exam dates, eligibility and syllabus changes, post only what the conducting body has officially published, and tell readers to confirm on the official website. If a date isn't announced, say so. Our guide to turning customer questions into social content explains how to build recurring series from the doubts students already send you.",
        links: [{ text: "turning customer questions into social content", href: "/blog/social-media-content-from-customer-questions" }],
      },
      { type: "heading", text: "A monthly content plan", id: "monthly-plan" },
      {
        type: "paragraph",
        text: "Here is a sample month for an institute posting four to five times a week on Instagram plus one longer YouTube lesson a week. Adjust the volume to what your faculty can review, and see our guide to building a monthly social media content calendar for the planning meeting and fields.",
        links: [{ text: "building a monthly social media content calendar", href: "/blog/monthly-social-media-content-calendar" }],
      },
      {
        type: "table",
        headers: ["Week", "Teaching", "People", "Students and parents", "Enquiry"],
        rows: [
          ["1", "Two concept Reels, one solved-problem carousel", "Faculty introduction", "Answers to last month's top doubts", "Demo class dates for the month"],
          ["2", "Two concept Reels, one long YouTube lesson", "A day in a classroom (consented students only)", "Parent FAQ: how progress is shared", "Course explainer: who the batch suits"],
          ["3", "Revision or mock-test strategy series", "Faculty answers a common doubt", "Student questions live session", "Fee and refund policy explained plainly"],
          ["4", "Topic recap carousel", "Support team: counsellors, doubt desk", "Official exam update (if any), with source", "Demo class recap and next dates"],
        ],
      },
      {
        type: "paragraph",
        text: "Short-form video carries most of this plan. Our guide to an Instagram Reels strategy covers formats and hooks, and our guide to influencer marketing for education and EdTech brands covers working with educator creators, which is separate from running your own accounts.",
        links: [
          { text: "an Instagram Reels strategy", href: "/blog/instagram-reels-strategy-for-brands" },
          { text: "influencer marketing for education and EdTech brands", href: "/blog/influencer-marketing-education-edtech-brands-india" },
        ],
      },
      { type: "heading", text: "Demo classes and the enquiry journey", id: "enquiry-journey" },
      {
        type: "paragraph",
        text: "Map what happens after someone engages, because a good post followed by a slow or pushy reply wastes the effort. A simple journey: a student sees a lesson, visits the profile, finds batch details and a booking link, messages a question, gets a reply from a named counsellor, attends a demo, and receives the course document with fees and refund policy in writing before paying. Keep the DM reply honest about fit; if a batch doesn't suit the student's level, say so. Never invent closing dates or seat counts to push a decision, because clause 3(e) treats false urgency as misleading.",
      },
      { type: "heading", text: "Student stories, toppers and consent", id: "student-stories" },
      {
        type: "paragraph",
        text: "Result posts are allowed when they are true, documented and consented. Clause 4(2) requires the successful candidate's written consent, taken after selection, before you use their name, photo, testimonial or video. Clause 4(1)(a) requires the rank secured, the name and duration of the course they took, and whether it was paid to be shown with the photograph. Never claim a student who only attended a test series or a free crash course as a full-course result, and never reuse another institute's toppers.",
      },
      {
        type: "paragraph",
        text: "Many coaching students are minors. Under the Digital Personal Data Protection Act, 2023 a child is anyone under eighteen; section 9 requires verifiable consent of a parent before processing a child's personal data, and bars tracking, behavioural monitoring and targeted advertising directed at children. Rule 10 of the DPDP Rules, 2025 sets out how verifiable parental consent works, and comes into force eighteen months after the Rules were published in November 2025. For any student under eighteen, get the parent's written consent as well as the student's, and check your current obligations with counsel.",
        links: [
          { text: "Digital Personal Data Protection Act, 2023", href: DPDP_ACT },
          { text: "DPDP Rules, 2025", href: DPDP_RULES },
        ],
      },
      {
        type: "template",
        label: "Result post caption structure (fill only with verified facts)",
        text: "[Student name] secured [rank or result] in [exam, year].\nCourse taken with us: [course name], [duration]. [Paid / free] course.\nShared with [student's / student's and parent's] written consent, given after the result.\nPast results are no guarantee of future results.",
      },
      { type: "heading", text: "Claims compliance checklist", id: "claims-checklist" },
      {
        type: "list",
        items: [
          "Every number (selections, ranks, students, years) has a document behind it that you could show a regulator.",
          "No 'guaranteed', 'assured', 'sure-shot' or '100%' claims about selection, marks, admissions or jobs.",
          "Topper posts show rank, course name, duration and whether it was paid, in the same font size as the claim.",
          "Written consent from the candidate, taken after selection, is on file; parental consent too for under-18s.",
          "Faculty credentials and course details match the course document.",
          "Recognition or approval claims (AICTE, UGC or others) are true and current.",
          "No invented scarcity, countdowns or 'seats filling fast' lines.",
          "Exam dates and rules quote the official notice.",
          "Infrastructure shown actually exists today.",
          "Someone with authority to say no has approved the post.",
        ],
      },
      { type: "heading", text: "Platforms and approvals", id: "platforms-approvals" },
      {
        type: "paragraph",
        text: "Instagram and YouTube carry most coaching content: Instagram for short lessons and community, YouTube for full-length lessons students search for and return to. A WhatsApp number handles enquiries, and a Facebook page often reaches parents. Whatever the mix, the institute's director or a named compliance owner approves claims, results and course posts, and subject faculty approve lessons. An agency can plan, script, edit and publish, but it does not replace your legal or compliance review.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Collecting blanket photo consent at admission and using it for result posts later.",
          "Claiming students who took a short test series as full-course results.",
          "Hiding 'paid course' or rank details in a caption that people won't expand.",
          "Posting unconfirmed exam dates from rumours or other channels.",
          "Running countdown offers that reset every week.",
          "Posting results only and no teaching, so the feed gives students no reason to trust you between result seasons.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Audit your last three months of posts against the claims checklist, fix or remove anything that fails, and rebuild the calendar around lessons, faculty and honest course information. Put the consent process for result posts in place before the next results day. Schools and universities face different rules, covered in our guide to social media management for educational institutions.",
        links: [{ text: "social media management for educational institutions", href: "/blog/social-media-management-schools-universities" }],
      },
      {
        type: "paragraph",
        text: "If you want outside help with the calendar and production, our content planning and production scope covers content planning, scripting, Reels editing and publishing; claims approval stays with the institute.",
        links: [{ text: "our content planning and production scope", href: "/services/social-media-management#content-planning" }],
      },
    ],
    faqs: [
      {
        question: "Do the CCPA coaching guidelines apply to online coaching and EdTech platforms?",
        answer:
          "The guidelines apply to all forms of advertisement by any person engaged in coaching, including endorsers, and define coaching broadly as academic support, tuition, guidance or study programmes. They don't distinguish between offline and online delivery. They exclude counselling, sports, dance, theatre and other creative activities. Whether a specific product counts as coaching is a question for your legal team.",
      },
      {
        question: "Can we post toppers' photos if they signed a consent form at admission?",
        answer:
          "Not under the CCPA guidelines. Clause 4(2) says a successful candidate's name, photograph, testimonial or video can't be used without their written consent, and that consent must be taken after the selection. A blanket form signed at admission doesn't meet that condition. For students under eighteen, also get a parent's written consent, and check DPDP obligations with counsel.",
      },
      {
        question: "Can a coaching institute say 'limited seats'?",
        answer:
          "Only if it is true. Clause 3(e) treats a false sense of urgency or scarcity, or false popularity, as misleading advertisement. If a batch genuinely has a fixed capacity, state the capacity and the real closing date, and don't reset countdowns. ASCI's education guidelines also warn against ads that create false urgency or fear of missing out.",
      },
      {
        question: "How should we share exam dates and notifications?",
        answer:
          "Only after the conducting body has published them, and with a link to or clear reference to the official notice. Don't post expected dates, leaked dates or dates taken from other coaching pages. If something is unconfirmed, say it hasn't been announced yet. When rules or dates change, update or remove older posts so students don't act on outdated information.",
      },
      {
        question: "Can we compare our results with other institutes?",
        answer:
          "Comparisons are risky. Any number you use must be true and documented, and a misleading comparison can breach both the CCPA guidelines and the ASCI Code's fair-competition chapter. Most institutes are better served by showing teaching quality than by trading result claims. If you want to make a comparison, have legal review the claim and the evidence first.",
      },
    ],
  },
  {
    slug: "social-media-management-schools-universities",
    category: "Social Media Management",
    title: "Social Media Management for Schools and Universities: Building a Consistent Digital Presence",
    seoTitle: "Social Media Management for Schools and Universities",
    excerpt:
      "How schools, colleges and universities in India can manage their social accounts: campus stories, academics, admissions, alumni and parents, with children's privacy, consent, safeguarding and approvals built in.",
    metaDescription:
      "Social media management for schools and universities in India: what to post, honest admissions content, children's privacy under DPDP, consent and approvals.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "social media management for educational institutions",
      "school social media strategy",
      "university social media management",
      "college social media marketing",
      "school social media consent policy",
    ],
    related: ["influencer-marketing-colleges", "social-media-content-approval-process", "social-media-crisis-management-plan"],
    hero: {
      src: "/blog/brand-guides/social-media-management-schools-universities.svg",
      alt: "A comparison of school and university social media: who the audience is, whose consent is needed and who approves, with a consent and safeguarding check that applies to both",
    },
    body: [
      {
        type: "paragraph",
        text: "Annual day went well, and by evening a teacher has shared forty photos to the school's Instagram, several showing children's full names on their costumes. A parent who had asked for her son never to appear online sees him in the third slide. At the university across town, the admissions office has just posted '100% placement' on a banner the placement cell can't support. Both institutions have active accounts; neither has a working process.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media management for educational institutions means a steady mix of campus stories, academic updates, events, faculty expertise, consented student achievements, admissions information, alumni and parent communication, run under a written consent and approval policy. Schools work mostly with minors, so parental consent and safeguarding come first. Universities work mostly with adults but still need consent, accurate admissions claims and clear approvals.",
      },
      { type: "heading", text: "Schools and universities need different rules", id: "schools-vs-universities" },
      {
        type: "table",
        headers: ["Question", "Schools", "Colleges and universities"],
        rows: [
          ["Main audiences", "Parents, prospective parents, the local community", "Prospective students, current students, alumni, recruiters, researchers"],
          ["Who is in the photos", "Mostly children under 18", "Mostly adults; some first-year students may be under 18"],
          ["Whose consent", "Parent or guardian, in writing; the child's agreement too where age-appropriate", "The student, in writing; a parent too if the student is under 18"],
          ["Main risks", "Child safety, identification, tagging, location", "Admissions and placement claims, campus incidents, student protest content"],
          ["Typical approvers", "Principal, with the safeguarding or child protection lead", "Communications office, with the registrar, admissions and legal"],
        ],
      },
      { type: "heading", text: "What to post", id: "what-to-post" },
      {
        type: "list",
        items: [
          "Campus storytelling: classrooms, labs, libraries, sports, clubs and everyday campus life, shot to show activity rather than identifiable children.",
          "Academic updates: new programmes, curriculum changes, exam timetables and results announcements already shared through official channels.",
          "Events: annual days, fests, conferences, guest lectures and sports meets, with recap posts reviewed for consent before publishing.",
          "Faculty expertise: research, publications, explainers in a teacher's subject and conference talks, with faculty approval of anything in their name.",
          "Student achievements: competitions, scholarships, publications and sports results, with consent from the student (and parent for minors).",
          "Admissions: dates, eligibility, process, fees and scholarships, all matching the official prospectus.",
          "Alumni: career stories and reunions, shared with the alumnus's consent and reviewed for accuracy.",
          "Parent communication: holiday notices, safety information and how to reach the school, with urgent notices also sent through official channels.",
        ],
      },
      {
        type: "paragraph",
        text: "Faculty and alumni content often works best on LinkedIn for universities; our guide to LinkedIn company page management covers that channel. Faculty hiring content overlaps with employer branding, covered in our guide to social media for recruitment and employer branding.",
        links: [
          { text: "LinkedIn company page management", href: "/blog/linkedin-company-page-management" },
          { text: "social media for recruitment and employer branding", href: "/blog/social-media-employer-branding" },
        ],
      },
      { type: "heading", text: "Admissions communication without misleading claims", id: "admissions" },
      {
        type: "paragraph",
        text: "Admissions posts are advertising, so ASCI's guidelines for advertising of educational institutions, programmes and platforms (9 March 2023) are the most useful reference. In summary, they say an advertisement shouldn't suggest a course or institution is official, recognised, accredited or affiliated unless that can be substantiated; shouldn't promise ranks, marks, jobs, admissions or salary rises unless substantiated, and then must carry the disclaimer 'past record is no guarantee of future prospects'; shouldn't use abstract 100% claims such as '100% placement'; should base placement, topper and ranking claims on the latest completed academic year, state the total batch size for placement numbers, and name the publisher and date of any ranking. They also warn against showing school students sacrificing sleep or meals to study, portraying average scorers as failures, or creating false urgency. ASCI's separate guidelines on awards and rankings (21 April 2022) cover educational institutions too.",
        links: [{ text: "ASCI's guidelines for advertising of educational institutions, programmes and platforms", href: ASCI_GUIDELINES }],
      },
      {
        type: "paragraph",
        text: "Your affiliating body, university regulator or school board may have its own rules on publicity; check with them and your legal team. Coaching providers have additional, statutory rules from the CCPA, covered in our guide to social media marketing for coaching institutes.",
        links: [{ text: "social media marketing for coaching institutes", href: "/blog/social-media-marketing-coaching-institutes" }],
      },
      { type: "heading", text: "Children's privacy and safeguarding", id: "childrens-privacy" },
      {
        type: "paragraph",
        text: "Under the Digital Personal Data Protection Act, 2023, a child is anyone who has not completed eighteen years. Section 9 requires a Data Fiduciary to obtain verifiable consent of the parent before processing a child's personal data, bars processing likely to harm a child's well-being, and rules out tracking, behavioural monitoring and targeted advertising directed at children. Rule 10 of the DPDP Rules, 2025 describes how verifiable parental consent is obtained, and comes into force eighteen months after the Rules were published in the Gazette in November 2025.",
        links: [
          { text: "Digital Personal Data Protection Act, 2023", href: DPDP_ACT },
          { text: "DPDP Rules, 2025", href: DPDP_RULES },
        ],
      },
      {
        type: "paragraph",
        text: "The Rules' Fourth Schedule exempts educational institutions from parts of section 9, but only for tracking and behavioural monitoring for their educational activities or in the interests of children's safety. Nothing in that exemption covers using children's photos or details for marketing, so treat social media posts as needing parental consent. Timelines can change, so check your current obligations with counsel.",
      },
      {
        type: "list",
        items: [
          "Never pair a child's face with their full name, class and section, or home locality.",
          "Don't tag or link to students' personal accounts, and turn off or moderate tagging on school accounts where you can.",
          "Keep a 'do not photograph' list from parents, shared with everyone who takes photos at events.",
          "Prefer group shots, hands-at-work and backs-of-heads for everyday posts; use close-ups only with specific consent.",
          "Post trips and off-campus events after the group has returned, not live.",
          "Remove uniforms or badges that show the school name from any close-up of an individual child, unless consent covers it.",
          "Take down any image within a set time when a parent asks.",
          "Staff use school accounts and school devices for school content, never personal ones.",
        ],
      },
      { type: "heading", text: "Content governance and approvals", id: "governance-approvals" },
      {
        type: "paragraph",
        text: "Most institution accounts drift into trouble because too many people can post and nobody owns the rules. Name one account owner, keep admin access limited and recorded, and agree who approves what. Our guide to the social media approval process explains stages and turnaround in more detail.",
        links: [{ text: "the social media approval process", href: "/blog/social-media-content-approval-process" }],
      },
      {
        type: "table",
        headers: ["Content", "Drafted by", "Checked by", "Approved by"],
        rows: [
          ["Everyday campus and event posts", "Communications or a trained staff member", "Consent register check", "Account owner"],
          ["Posts showing identifiable children", "Communications", "Safeguarding lead checks consent", "Principal or head of school"],
          ["Student achievements", "Department or communications", "Facts checked with the department; consent on file", "Account owner"],
          ["Admissions, fees, placements, rankings", "Admissions office", "Registrar or academic office; legal for claims", "Head of institution or nominee"],
          ["Faculty expertise", "Faculty member with communications", "Faculty member approves final", "Account owner"],
          ["Incidents, complaints, closures", "Communications with leadership", "Legal and safeguarding as needed", "Head of institution"],
        ],
      },
      {
        type: "paragraph",
        text: "Incidents need a plan before they happen: an accident on a trip, a viral video from a hostel, a protest or a data leak. Our guide to building a social media crisis response plan sets out severity levels and holding statements; for anything involving a child's safety, the safeguarding lead and legal team lead, and nothing identifying a child is posted.",
        links: [{ text: "building a social media crisis response plan", href: "/blog/social-media-crisis-management-plan" }],
      },
      { type: "heading", text: "Governance and consent checklist", id: "consent-checklist" },
      {
        type: "list",
        items: [
          "A written social media policy, approved by leadership, covering who posts, what needs approval and what is never posted.",
          "A consent form that names the platforms, purposes and duration, and is signed by a parent for anyone under 18.",
          "A consent register that every person posting can check before publishing.",
          "A 'do not photograph' list for every event.",
          "Rules on names, tagging, locations and live posting.",
          "Admissions and placement claims checked against documents and the ASCI education guidelines.",
          "Named approvers and deputies for each content type.",
          "A takedown process with a set response time.",
          "An incident route that includes the safeguarding lead and legal.",
          "An annual review of the policy, plus whenever DPDP obligations or board rules change.",
        ],
      },
      {
        type: "template",
        label: "Consent form outline (adapt with your legal team)",
        text: "Institution:\nStudent name, class or programme:\nI agree that photographs and videos of the student taken at [institution activities] may be shared on: [list platforms and the website].\nPurpose: [news, events, achievements, admissions material].\nThe student's name may / may not be shown with images. Tagging of personal accounts will not be used.\nThis consent lasts until: [date or end of academic year] and can be withdrawn at any time by writing to [contact]; images will be removed within [period].\nSigned (student, if 18 or over):\nSigned (parent or guardian, if under 18):\nDate:",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Collecting one-time consent at admission and never checking it again.",
          "Letting every teacher post from personal phones to the official account.",
          "Captioning children's photos with full names and classes.",
          "Claiming '100% placement' or a ranking without the batch size, publisher and date.",
          "Posting live from school trips.",
          "Deleting critical comments instead of responding under a clear moderation policy.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Write the policy, set up the consent register and agree the approval table before you plan more content. Then build a month around campus life, academics and one or two honest admissions posts. If you want to work with student and alumni creators for admissions, our guide to influencer marketing for colleges covers that separately from your own accounts.",
        links: [{ text: "influencer marketing for colleges", href: "/blog/influencer-marketing-colleges" }],
      },
      {
        type: "paragraph",
        text: "A managed social media service, such as the process Kudozz follows, can handle planning, design, publishing and moderation, but consent decisions, safeguarding and admissions claims stay with the institution.",
        links: [{ text: "the process Kudozz follows", href: "/services/social-media-management#process" }],
      },
    ],
    faqs: [
      {
        question: "Do schools need parental consent to post students' photos?",
        answer:
          "Treat it as required. Under the DPDP Act, 2023, anyone under eighteen is a child, and section 9 requires verifiable parental consent before processing a child's personal data. The educational-institution exemption in the DPDP Rules covers tracking and behavioural monitoring for educational activities or safety, not marketing. Get written parental consent that names the platforms and purposes, and check current obligations with counsel.",
      },
      {
        question: "Do universities need consent from adult students?",
        answer:
          "Yes. Adult students give their own consent, and they can withdraw it. Ask in writing for identifiable photos, achievement posts and testimonials, and say where content will appear. Some first-year students may still be under eighteen, so check ages and add parental consent where needed. Crowd shots at large public events are usually handled differently; confirm your approach with your legal team.",
      },
      {
        question: "Can we post placement statistics?",
        answer:
          "Only if they are accurate, documented and presented fairly. ASCI's education advertising guidelines say placement claims should come from the latest completed academic year, state the total number of students in the batch, and avoid abstract claims like '100% placement'. Outcome claims also need the disclaimer 'past record is no guarantee of future prospects'. Have the placement cell and legal team approve every placement post.",
      },
      {
        question: "Should teachers have access to the school's social media accounts?",
        answer:
          "Give access to as few people as possible, with individual logins and roles the platform supports, and remove access when someone leaves. Teachers can still contribute: let them submit photos and updates through a shared folder or form, so the account owner checks consent and approves before anything is published. Never let staff post school content from personal accounts.",
      },
      {
        question: "How should a school handle negative comments from parents?",
        answer:
          "Have a published moderation policy, reply calmly to genuine concerns, and move the conversation to an official channel such as the school office or email. Never discuss an individual child publicly. Hide or remove comments only for clear policy reasons, such as abuse or personal information about a child. Anything about safety goes straight to the safeguarding lead.",
      },
    ],
  },
];
