# Kudozz LinkedIn: 30-day launch calendar

These are 30 ready-to-paste LinkedIn Company Page posts, one a day from **Saturday 17 October to Sunday 15 November 2026**, with suggested times in IST (Asia/Kolkata).

**Nothing has been scheduled or published.** The dates and times are suggestions for manual scheduling. No LinkedIn account, API or scheduling tool was connected.

## Files

| File | What it's for |
|---|---|
| `linkedin-30-day-calendar.xlsx` | Main working file: one row per post with all metadata, frozen header, filters and a status dropdown |
| `linkedin-30-day-calendar.md` | Easiest place to read and copy posts: one section per post, with the copy in a code block |
| `linkedin-30-day-calendar.csv` | Same data as the workbook (UTF-8, every field quoted, multi-line copy preserved) |
| `linkedin-posts.json` | Same data, structured |
| `images/` | 11 PNG images, 1200 × 1200, one per image post |
| `image-manifest.csv` | Post ID, filename, topic, alt text, format, size and status for each image |
| `blog-references.csv` | The 30 blog articles used, with publish/update dates and link verification results |
| `source/` | Source data and scripts: `posts_data.py` (all copy), `build.py` (regenerates and validates every file above), `images.py` + `render.mjs` (regenerate the images) |

## Posting a post

1. Find the post by its ID (`KDZ-LI-01` to `KDZ-LI-30`) or date in the Markdown file or the workbook.
2. Copy the full post copy: in the Markdown, the code block; in the workbook, the **Full post copy** cell. It already contains the blog link and the hashtags, so paste it as-is.
3. If the post has an image (**Image or text-only** = Image), upload `images/<Image filename>` in the LinkedIn composer. Then click **Alt** on the image and paste the **Alt text**.
4. When LinkedIn generates a link preview card, remove it for image posts so your image is the one that shows. For text-only posts, keeping the preview is your call.
5. Schedule or publish manually at the suggested date and time (IST), then update **Manual scheduling status** in the workbook: *Approved*, *Scheduled in LinkedIn*, *Published* or *On hold*.

## Dates and times

- Times vary between 09:00 and 17:30 IST on weekdays, and 11:00 to 11:30 on weekends. They're reasonable defaults for a professional audience, not guaranteed best times. Once you have a few weeks of data, check the Page analytics and adjust.
- The calendar runs every day for 30 days, so 10 posts land on weekends, including the launch post. If you'd prefer weekdays only, move the weekend posts. Each post stands on its own; the only ordering that matters is that `KDZ-LI-01` (the intro) goes first and `KDZ-LI-30` (the wrap-up) goes last.
- **Diwali** falls on or around **8 November 2026** (`KDZ-LI-23`). Confirm the date, then decide whether to keep the slot, move it or post a short greeting instead.

## Blog links

- Every post links to a different, published Kudozz article. All 30 returned HTTP 200 with no redirect and a self-referencing canonical on 16 Oct 2026 (see `blog-references.csv`).
- The links in the copy carry UTM tags: `utm_source=linkedin&utm_medium=organic_social&utm_campaign=linkedin_30_day_launch&utm_content=post-NN`. In GA4, filter by campaign `linkedin_30_day_launch`, and use `utm_content` to see which post sent the visit. The tracked URLs also return 200 and canonicalise to the clean URL, so they don't create duplicate pages.
- To re-check a link before posting, open it in a private window, or run `python3 build.py` from `source/`, which re-verifies all 30 links and fails if any break.
- If you'd rather show a shorter link, swap in the **Canonical blog URL** (you lose per-post tracking).

## Hashtags

- Each post has 4 or 5 hashtags at the end of the copy, chosen for its topic (for example #BeautyMarketing, #FMCG, #GA4, #B2BMarketing). The same hashtags are stored in the **Hashtags** column.
- #InfluencerMarketing appears on 25 posts as the core topic tag. #Kudozz is used only on the four posts about Kudozz itself.
- Hashtags help with topic relevance, not guaranteed reach. Sources disagree on the ideal number, and LinkedIn publishes no official guidance, so keep them few and specific.

## Images

- 11 image posts: 01, 03, 05, 09, 10, 11, 15, 17, 22, 27 and 29. The other 19 are text-only by design.
- 1200 × 1200 PNG, all under 3 MB. Square images display uncropped in the LinkedIn feed on desktop and mobile. LinkedIn's help centre says images in other ratios show in full, with light padding.
- Design: the site's brand palette (paper, ink, coral, lime), Fraunces, Inter and Archivo Black, and the Kudozz mark from `public/brand/`. They contain no photos, client logos or statistics. Every image summarises points from its linked article.
- To edit an image: change its entry in `source/images.py`, start Chrome with the command at the top of `source/render.mjs`, then run `python3 images.py && node render.mjs` from `source/`.

## Before you schedule: review these

- **KDZ-LI-24 (disclosure rules)** names regulators and licences in six markets, taken from the linked article. Rules change, so check that the article is still current before posting.
- **KDZ-LI-25 and KDZ-LI-30** give `connect@kudozz.in` as the contact address. Confirm that's the inbox you want LinkedIn enquiries to go to.
- **KDZ-LI-01 and KDZ-LI-30** state that Kudozz runs campaigns in India, the UAE, Saudi Arabia, the UK, Australia and Singapore, matching the website. No client names, results or statistics are claimed anywhere.
- **KDZ-LI-14** uses illustrative numbers (212 / 140 / 163) and labels them as hypothetical.

## Regenerating the files

Edit `source/posts_data.py`, then from `source/` run `python3 build.py`. It needs `openpyxl` (`pip install openpyxl`) and network access for the link checks. It rewrites the CSV, XLSX, Markdown, JSON, image manifest and blog references, then checks the following:

- 30 posts on 30 consecutive future dates
- each post contains its tracked blog link and 3–5 hashtags, and the hashtags match the metadata
- no placeholders or em dashes in the copy, and every post is under LinkedIn's 3,000-character limit
- no repeated blogs or hooks
- every image exists at 1200 × 1200 and matches its post number, and the image folder matches the calendar
- every link returns 200 with the right canonical
- all four data files contain identical copy
