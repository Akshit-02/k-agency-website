# 04 — Implementation Report (Batch 05)

Implemented locally on 13 November 2026. **Nothing was committed, deployed or published.** The articles are wired into the blog index, so they would go live on the next deploy unless their arrays are commented out (see 06).

## Summary
- **20 articles** in five new data files, using the existing `BlogPost` format, the `/blog/[slug]` route and the "Social Media Management" category. `publishedAt` is 2026-11-13 (set it to the real release date per wave).
- **No topics replaced.** Every brief topic had a distinct business problem; the overlap boundaries are in 01 §2. One H1 tightened (03).
- **20 hero SVGs** (1600×700, house palette). Each one is a diagram of that article's own framework: no photos, people, anatomy, medical symbols, fake UI or logos.
- **Work split:**
  - five writers drafted four articles each against a shared spec (`smm-batch-05-spec.md`);
  - the lead review ran the validator, a numeric and claims scan, a pairwise overlap check and the hero contact sheet, then did the integration.

## Articles

Words are body plus FAQs. "Title / meta" is the `seoTitle` length and the meta description length. Internal links count unique in-body internal URLs. External links count source citations in the body; they render as plain text, because `src/lib/links.ts` allowlists only two domains.

| Article | File | Words | Title / meta | Int. | Ext. | Practical resources |
|---|---|---|---|---|---|---|
| [Social Media Marketing for Salons: How to Get More Appointment Enquiries From Instagram](/blog/social-media-marketing-for-salons) | `smm-salons.ts` | 2343 | 60 / 155 | 7 | 8 | 20 salon ideas; weekly framework; 6-stage enquiry journey; "price?" DM replies |
| [Instagram Marketing for Spas: How to Showcase Treatments, Experiences and Your Brand](/blog/instagram-marketing-for-spas) | `smm-salons.ts` | 2002 | 55 / 156 | 5 | 3 | monthly spa calendar; treatment explainer template; avoid/write-instead claims table |
| [How Beauty Salons Can Plan a Monthly Social Media Calendar Around Repeat Bookings](/blog/salon-social-media-content-calendar) | `smm-salons.ts` | 2046 | 55 / 156 | 4 | 2 | 30-day calendar; booking-data worksheet; batch shoot template; monthly review |
| [Social Media Management for Hair and Beauty Professionals: Building a Personal Brand That Attracts Clients](/blog/social-media-management-beauty-professionals) | `smm-salons.ts` | 1971 | 55 / 156 | 5 | 4 | 5 personal-brand pillars; account-choice table; client photo consent form |
| [How Skin and Aesthetic Clinics Can Use Educational Social Media Content to Build Trust](/blog/social-media-marketing-skin-clinics) | `smm-medical.ts` | 2338 | 52 / 160 | 6 | 2 | 11-point skin clinic approval checklist; practitioner credit line; reply templates |
| [Social Media Management for Doctors: How to Build a Professional and Consistent Online Presence](/blog/social-media-management-for-doctors) | `smm-medical.ts` | 2083 | 51 / 157 | 5 | 4 | 4-week publishing framework; bio template; permitted-content table; DM reply |
| [How Physiotherapy Clinics Can Use Social Media to Explain Treatments and Educate Patients](/blog/social-media-marketing-physiotherapy-clinics) | `smm-medical.ts` | 2105 | 48 / 155 | 4 | 7 | 15 educational ideas; safety-line template; demo filming checklist |
| [Social Media Marketing for Diagnostic Centres: Communicating Services, Processes and Patient Information](/blog/social-media-marketing-diagnostic-centres) | `smm-medical.ts` | 2237 | 54 / 158 | 5 | 9 | 4-week calendar; test-prep brief template; home-collection checklist |
| [Social Media Marketing for Dental Clinics: Building Patient Trust Through Useful Content](/blog/social-media-marketing-dental-clinics) | `smm-dental-vet.ts` | 2400 | 50 / 157 | 8 | 7 | 4-week dental calendar; allowed vs unethical table; patient-journey table |
| [Instagram Content Strategy for Dentists: What to Share Without Making Every Post Promotional](/blog/instagram-content-ideas-for-dentists) | `smm-dental-vet.ts` | 1676 | 58 / 147 | 4 | 3 | 20 ideas in 4 formats with guardrails; caption template |
| [Social Media Marketing for Wellness Brands: Educating Customers Without Making Unsupported Health Claims](/blog/social-media-marketing-wellness-brands) | `smm-dental-vet.ts` | 2250 | 51 / 158 | 5 | 6 | verification checklist; 3-rung claims ladder; rules table |
| [Social Media Marketing for Pet Clinics and Veterinary Practices: Building Trust With Pet Owners](/blog/social-media-marketing-veterinary-clinics) | `smm-dental-vet.ts` | 2050 | 54 / 157 | 4 | 5 | monthly calendar; pet photo consent template; hours and emergency post |
| [Social Media Marketing for Gyms: Turning Local Awareness Into Membership Enquiries](/blog/social-media-marketing-for-gyms) | `smm-fitness.ts` | 2223 | 51 / 157 | 7 | 3 | 20 gym ideas; weekly plan; membership journey table; facility-honesty checklist |
| [Instagram Content Strategy for Yoga Studios: Building a Community Beyond Class Promotions](/blog/instagram-marketing-for-yoga-studios) | `smm-fitness.ts` | 1803 | 57 / 155 | 4 | 4 | monthly calendar; teacher intro and workshop templates; wording table |
| [Social Media Management for Personal Trainers: Building Credibility and Attracting the Right Clients](/blog/social-media-management-personal-trainers) | `smm-fitness.ts` | 1898 | 45 / 159 | 5 | 3 | 5-pillar content framework; enquiry screening message; consent template |
| [How Pilates and Boutique Fitness Studios Can Build a Consistent Social Media Presence](/blog/social-media-marketing-pilates-studios) | `smm-fitness.ts` | 1787 | 55 / 160 | 5 | 2 | 15 concepts; format table; trial vs class-pack journey; schedule Story template |
| [Social Media Marketing for Coaching Businesses: Turning Expertise Into Consistent Enquiries](/blog/social-media-marketing-coaching-businesses) | `smm-local-services.ts` | 2351 | 46 / 157 | 8 | 4 | 30-day calendar; niche statement and discovery-call templates |
| [Instagram Marketing for Tutors and Private Teachers: Building Trust With Students and Parents](/blog/instagram-marketing-for-tutors) | `smm-local-services.ts` | 2007 | 51 / 157 | 5 | 3 | 20 ideas; safeguarding list; result caption and parent reply templates |
| [Social Media Marketing for Home Service Businesses: How to Generate Local Enquiries Through Content](/blog/social-media-marketing-home-services) | `smm-local-services.ts` | 1988 | 50 / 156 | 5 | 5 | weekly plan; trade-by-trade safe-to-show table; WhatsApp templates |
| [Social Media Management for Wedding Photographers and Event Professionals: A Content Strategy That Wins Enquiries](/blog/social-media-management-wedding-photographers) | `smm-local-services.ts` | 2021 | 49 / 160 | 5 | 4 | 20 concepts; monthly calendar; enquiry portfolio framework; contract checklist |
**Length:** four articles exceed the 2,300-word guideline: 01 (2,343), 05 (2,338), 06 (2,400) and 16 (2,351). For 01 and 16 the extra length is the assets the brief requires (20 ideas plus a journey; a 30-day calendar). For 05 and 06 it is the regulatory sections. Accepted, as with 09R in Batch 04.

## CTAs
- **Two per article, placed automatically.** The mid CTA is inserted by `getMidCtaIndex` at the section break nearest the midpoint (after the 4th to 6th H2; never after the introduction). The bottom CTA follows the article.
- **Copy:** 20 hand-written pairs in `BRAND_GUIDE_CTAS` (`src/lib/blogCta.ts`). All 80 headlines and bodies are unique across the file. The mid CTA links the most relevant service-page anchor (`#content-planning`, `#creative-design`, `#publishing`, `#copywriting`, `#reels-short-form-video`, `#community-management`, `#strategy` or `#process`). The bottom CTA uses the existing enquiry route. The topic for all of them is "Social Media Management".
- **Healthcare CTAs:** the skin, doctor, diagnostic and dental CTAs tell readers to check their council's rules on outside help before engaging any, consistent with the clinics article.
- **Forms:** no forms, fields, APIs or email were changed.

## Internal linking
- **Outbound:** 89 distinct internal URLs across the 20 pages; 0 broken. Every article links:
  - the SMM service page, or an anchor on it;
  - the generic guides it builds on, instead of repeating them;
  - its influencer twin, where one exists (dental, fitness, beauty, Ayurveda/nutraceutical, wedding, photography, pet, small business).
- **Siblings:** links are capped at two per article (for example, 01 ↔ 03, 06 ↔ 07, 05 → 08, 13/14 → 11).
- **Deliberately not linked:** `influencer-marketing-healthcare-brands-india`, because of the open testimonial FAQ issue.
- **Inbound:**
  - three new groups on `/services/social-media-management` ("Salons, beauty, fitness and wellness"; "Healthcare and veterinary practices"; "Coaches, tutors and local services");
  - the blog listing and category filter;
  - `llms.txt`.

## Files

**Created**
| File | Purpose |
|---|---|
| `src/content/brand-guides/smm-salons.ts` | 01–04 (`smmSalonPosts`) |
| `src/content/brand-guides/smm-medical.ts` | 05, 08, 09, 10 (`smmMedicalPosts`) |
| `src/content/brand-guides/smm-dental-vet.ts` | 06, 07, 15, 20 (`smmDentalVetPosts`) |
| `src/content/brand-guides/smm-fitness.ts` | 11–14 (`smmFitnessPosts`) |
| `src/content/brand-guides/smm-local-services.ts` | 16–19 (`smmLocalServicePosts`) |
| `public/blog/brand-guides/<slug>.svg` × 20 | Heroes |
| `reports/social-media-management-batch-05/` 01–06 + `sources/` | Reports and per-file source logs |

**Modified**
| File | Change |
|---|---|
| `src/content/brand-guides/index.ts` | 5 imports + 5 spreads with a comment flagging the regulated files |
| `src/lib/blogCta.ts` | 20 CTA pairs |
| `src/content/social-media-management.ts` | 3 new `smmGuideGroups` |
| `public/llms.txt` | Batch 05 section (with a "not legal or medical advice" note); **also adds the missing Batch 04 section** |

**Not changed:** forms, APIs, environment variables, email, analytics, existing URLs, redirects and existing articles.

## Services supported
- `/services/social-media-management`: all 20 articles.
- `/services/ugc-content-production` and `/for-brands`: through the shared navigation and CTAs.
- Influencer marketing: through the twin links.

## Housekeeping note
`shots/` at the repo root is an untracked screenshot folder left by an earlier QA run. It isn't part of the site; delete it or add it to `.gitignore` before committing.
