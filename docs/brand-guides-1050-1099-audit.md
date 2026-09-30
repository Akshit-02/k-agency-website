# Brand Influencer Marketing Acquisition Knowledge Hub (1050–1099) — audit and decisions

Date: 2026-09-30. Module: `src/content/brand-guides/planning-and-programs.ts`.

## New URLs (7)
| Topic # | URL | Absorbs |
|---|---|---|
| 1055 | /blog/influencer-marketing-website-traffic | — |
| 1059 | /blog/influencer-marketing-customer-retention | — |
| 1078 | /blog/influencer-marketing-roi-forecasting (+ RoiForecastCalculator) | 1079 budget vs performance |
| 1087 | /blog/influencer-marketing-agency-onboarding | — |
| 1092 | /blog/influencer-marketing-governance | 1094 SOP |
| 1093 | /blog/influencer-marketing-team-structure | 1095 vendor management |
| 1099 | /blog/influencer-marketing-annual-plan | 1096 calendar, 1097 multi-product |

## Expanded existing URLs
| Topic # | URL | Change |
|---|---|---|
| 1052 | influencers-for-product-launch | "Launching a brand from zero" section + FAQ |
| 1065/1066 | seasonal-influencer-marketing-india | Festival calendar, festival plan template, FAQ; Getting help removed; hero; CTA |
| 1068 | retail-influencer-marketing-india | Store launch playbook, FAQ; Getting help removed; hero |
| 1069 | experiential-influencer-marketing | Related guides; Getting help removed; hero; CTA |
| 1074 | how-much-to-pay-influencers | Payment models table, FAQ; Getting help removed; hero |
| 1075 | influencer-marketing-agency-fees-india | When a retainer makes sense, FAQ |
| 1086 | influencer-marketing-agency-checklist | Verify the agency section, FAQ |
| 1072 | influencer-campaign-cost-india | CSV budget template (/downloads/influencer-campaign-budget-template.csv) |
| 1067 | influencer-marketing-ecommerce-brands-india | Already covered sale events; links added |

Link-only updates (to new pages): influencer-marketing-kpis, measure-influencer-marketing-roi-india, influencer-marketing-compliance (Getting help sections replaced; heroes added), influencer-marketing-sales, influencer-marketing-lead-generation, always-on-influencer-marketing, influencer-budget-allocation, influencer-marketing-agency-brief, choose-influencer-marketing-agency-india, influencer-campaign-management, influencer-marketing-agency-vs-in-house, influencer-agency-vs-freelancer, brand-ambassador-program.

## Kept (served by existing live pages; no new URL)
1050, 1051, 1053, 1054, 1056, 1057, 1058, 1060–1064, 1070, 1071, 1073, 1076, 1077, 1080–1085, 1088–1091, 1098.

## Redirects
None added this batch. Existing 308s verified.

## Infrastructure
Forms, /api routes, Nodemailer and env vars untouched. BrandInquiryForm: two topic→goal prefill mappings added (Annual Plan, Agency Onboarding → Campaign Management). Analytics events unchanged.

## Known pre-existing issues (not fixed)
- 7 link anchors not found in paragraph text (telangana, punjab, karnataka agency lists; edtech; fitness; cost-india; reddit).
- Many core posts have future publishedAt dates; ~230 core posts still end with a "Getting help" section.
- Brand form budget options are in USD.
- how-much-does-influencer-marketing-cost vs influencer-marketing-cost-india overlap.
