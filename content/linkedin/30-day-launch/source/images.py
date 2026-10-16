# Writes one 1200x1200 HTML page per image post into source/html/.
# render.mjs then screenshots each page to ../images/<name>.png.
# Brand tokens come from src/app/globals.css; the mark is the geometry in public/brand/kudozz-mark.svg.
import html, os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "html")

MARK = ('<svg width="{s}" height="{s}" viewBox="0 0 32 32"><rect x="7" y="4" width="5" height="24" rx="1" fill="{ink}"/>'
        '<polygon points="14,15 24,5 27,5 17,15" fill="#FF4D1C"/><polygon points="14,17 24,27 27,27 17,17" fill="#FF4D1C"/></svg>')

CSS = """
:root{--paper:#FAF1E2;--paper-dim:#F0E3CA;--sand:#E8D8B8;--ink:#150F0B;--ink-soft:#322820;--coral:#FF4D1C;--violet:#5A2EEA;--lime:#CCFF3D}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:1200px;overflow:hidden;-webkit-font-smoothing:antialiased}
body{font-family:Inter,sans-serif;background:var(--bg);color:var(--fg)}
.c{position:relative;width:1200px;height:1200px;padding:84px 88px 0;display:flex;flex-direction:column}
.eyebrow{font-family:Inter;font-weight:700;font-size:22px;letter-spacing:.16em;text-transform:uppercase;color:var(--coral);display:flex;align-items:center;gap:14px}
.eyebrow:before{content:"";width:44px;height:4px;background:var(--coral);border-radius:2px}
h1{font-family:Fraunces,serif;font-weight:600;font-size:76px;line-height:1.02;letter-spacing:-.025em;margin-top:26px;font-variation-settings:"SOFT" 50,"WONK" 0}
h1 i{color:var(--coral);font-style:italic;font-variation-settings:"SOFT" 100,"WONK" 1}
.body{flex:1;display:flex;flex-direction:column;justify-content:center;padding:36px 0 30px}
.foot{height:118px;border-top:2px solid var(--line);display:flex;align-items:center;justify-content:space-between;margin:0 -88px;padding:0 88px}
.logo{display:flex;align-items:center;gap:8px}
.logo .w{font-family:Fraunces,serif;font-weight:600;font-size:40px;letter-spacing:-.03em}
.logo .w span{color:var(--coral)}
.url{font-weight:600;font-size:27px;color:var(--muted)}
.note{font-family:Fraunces,serif;font-style:italic;font-size:36px;line-height:1.3;color:var(--fg);margin-top:30px;font-variation-settings:"SOFT" 100}
.note b{color:var(--coral);font-weight:600}
/* steps */
.steps{display:flex;flex-direction:column;gap:var(--gap,18px)}
.step{display:flex;align-items:flex-start;gap:26px}
.num{flex:none;width:58px;height:58px;border-radius:50%;background:var(--coral);color:#FAF1E2;font-family:"Archivo Black";font-size:26px;display:flex;align-items:center;justify-content:center}
.st b{display:block;font-size:var(--sz,34px);font-weight:700;letter-spacing:-.01em;line-height:1.15;padding-top:9px}
.st span{display:block;font-size:29px;line-height:1.35;color:var(--muted);margin-top:5px}
/* grid */
.grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.card{background:var(--card);border:2px solid var(--fg);border-radius:18px;padding:15px 24px;box-shadow:6px 6px 0 var(--fg)}
.card .n{font-family:"Archivo Black";font-size:24px;color:var(--coral)}
.card b{display:block;font-size:36px;font-weight:700;margin-top:6px;letter-spacing:-.01em}
.card span{display:block;font-size:27px;line-height:1.35;color:var(--muted);margin-top:6px}
/* compare */
.cmp{display:grid;gap:22px}
.col{background:var(--card);border:2px solid var(--fg);border-radius:20px;padding:30px 30px 26px;box-shadow:7px 7px 0 var(--fg)}
.col h2{font-family:Fraunces,serif;font-weight:600;font-size:46px;letter-spacing:-.02em;padding-bottom:14px;border-bottom:3px solid var(--coral);margin-bottom:18px}
.col.alt{background:var(--ink);color:var(--paper);box-shadow:7px 7px 0 var(--coral)}
.col.alt h2{border-color:var(--lime)}
.col li{list-style:none;font-size:32px;line-height:1.3;padding:9px 0 9px 34px;position:relative}
.col li:before{content:"";position:absolute;left:2px;top:23px;width:14px;height:14px;border-radius:50%;background:var(--coral)}
.col.alt li:before{background:var(--lime)}
/* checklist */
.check{display:grid;grid-template-columns:1fr 1fr;gap:20px 34px}
.ck{display:flex;align-items:center;gap:18px;font-size:34px;font-weight:600;line-height:1.2}
.ck i{flex:none;width:46px;height:46px;border-radius:12px;background:var(--lime);border:2px solid var(--ink);display:flex;align-items:center;justify-content:center}
.formula{margin-top:26px;background:var(--ink);color:var(--paper);border-radius:18px;padding:22px 30px;font-size:31px;font-weight:700;display:flex;align-items:center;gap:20px}
.formula em{font-style:normal;color:var(--lime);font-family:"Archivo Black";font-size:24px;letter-spacing:.06em}
"""

THEMES = {
    "paper": dict(bg="#FAF1E2", fg="#150F0B", muted="#5a4c40", card="#FFF8EC", line="rgba(21,15,11,.14)", ink="#150F0B", wcol="#150F0B"),
    "dim": dict(bg="#F0E3CA", fg="#150F0B", muted="#5a4c40", card="#FAF1E2", line="rgba(21,15,11,.16)", ink="#150F0B", wcol="#150F0B"),
}

TICK = '<svg width="26" height="26" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5" stroke="#150F0B" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'

def e(s):
    return html.escape(s, quote=False)

def steps(items, gap=18, sz=34):
    rows = "".join(
        f'<div class="step"><div class="num">{i}</div><div class="st"><b>{e(t)}</b>{f"<span>{e(d)}</span>" if d else ""}</div></div>'
        for i, (t, d) in enumerate(items, 1))
    return f'<div class="steps" style="--gap:{gap}px;--sz:{sz}px">{rows}</div>'

def grid(items, numbered=True):
    cards = "".join(
        f'<div class="card">{f"<div class=n>0{i}</div>" if numbered else ""}<b>{e(t)}</b><span>{e(d)}</span></div>'
        for i, (t, d) in enumerate(items, 1))
    return f'<div class="grid">{cards}</div>'

def compare(cols):
    n = len(cols)
    out = "".join(
        f'<div class="col{" alt" if alt else ""}"><h2>{e(h)}</h2><ul>{"".join(f"<li>{e(x)}</li>" for x in xs)}</ul></div>'
        for h, xs, alt in cols)
    return f'<div class="cmp" style="grid-template-columns:repeat({n},1fr)">{out}</div>'

def checklist(items):
    return '<div class="check">' + "".join(f'<div class="ck"><i>{TICK}</i>{e(x)}</div>' for x in items) + "</div>"

IMAGES = {
"post-01-influencer-campaign-workflow": dict(theme="paper", eyebrow="How campaigns work",
    title='What running an influencer campaign <i>actually</i> involves',
    body=steps([("Plan", "Objective and target audience"),
                ("Find", "Creator discovery and evaluation"),
                ("Agree", "Outreach, negotiation, contracts and usage rights"),
                ("Make", "Briefing, content creation, review and approvals"),
                ("Measure", "Publishing, disclosure checks, tracking and the final report")], gap=24, sz=40),
    note='Most problems start at a <b>skipped step</b>.'),
"post-03-creator-selection-framework": dict(theme="paper", eyebrow="Creator selection",
    title='8 things to check before you <i>book</i> a creator',
    body=grid([("Audience fit", "Matches your target customer"),
               ("Content fit", "Can make the format you need"),
               ("Brand fit", "Tone, values, visual style"),
               ("Engagement quality", "Specific comments, saves, shares"),
               ("Authenticity", "No signs of bought followers"),
               ("Geography & language", "Followers where you sell"),
               ("Professionalism", "Deadlines, replies, disclosure"),
               ("Commercial fit", "Rate and availability")]),
    note='Weigh them against your <b>objective</b>, not follower count.'),
"post-05-nano-vs-micro-creators": dict(theme="dim", eyebrow="Creator tiers",
    title='Nano or micro? Choose by <i>job</i>, not budget',
    body=compare([("Nano creators", ["Many authentic voices in a niche, city or language", "Product seeding at volume", "A low-cost way to learn who responds", "More coordination to manage"], False),
                  ("Micro creators", ["More reach per partnership", "More polished content", "Fewer relationships to manage", "More reliable delivery against dates"], True)]),
    note='Many brands use <b>both</b>: nano to learn, micro to scale.'),
"post-09-creator-brief-checklist": dict(theme="paper", eyebrow="Creator briefing",
    title='What a good creator brief <i>includes</i>',
    body=checklist(["The objective", "The audience", "One key message", "Must-haves and banned claims", "Deliverables and specs", "References, not scripts", "The timeline", "The call to action", "Disclosure requirements", "How approval works"]),
    note='Then leave the <b>creative execution</b> to the creator.'),
"post-10-influencer-roi-calculation": dict(theme="paper", eyebrow="Measurement",
    title='Influencer ROI, <i>counted properly</i>',
    body=steps([("Total cost", "Fees, product, production, usage rights, amplification, discounts, team time"),
                ("Attributed orders", "Net of returns and cancellations, deduplicated"),
                ("Revenue", "Net, after discounts, excluding GST or VAT"),
                ("Contribution", "Revenue minus product, delivery, payment and returns costs")], gap=18, sz=39)
         + '<div class="formula"><em>05 · ROI</em>(Contribution − Total cost) ÷ Total cost × 100</div>',
    note=None),
"post-11-seeding-gifting-sampling": dict(theme="dim", eyebrow="Product seeding",
    title='Seeding, gifting and sampling are <i>not</i> the same thing',
    body=compare([("Seeding", ["Chosen creators", "No obligation to post", "Genuine reactions"], False),
                  ("Gifting", ["A smaller group", "Led by relationships", "Long-term goodwill"], True),
                  ("Sampling", ["Volume", "For products people need to try", "Drives trial"], False)]),
    note='Barter is different again: it comes with <b>agreed deliverables</b>.'),
"post-15-influencer-vetting-steps": dict(theme="paper", eyebrow="Creator vetting",
    title='Vetting a creator in <i>seven</i> steps',
    body=steps([("Basic profile review", ""), ("Audience analysis", ""), ("Engagement and authenticity", ""),
                ("Content review", ""), ("Brand-safety review", ""), ("Commercial review", ""), ("Final approval", "")], gap=18, sz=40),
    note='After the <b>shortlist</b>, before the <b>contract</b>.'),
"post-17-ugc-ad-testing-order": dict(theme="dim", eyebrow="UGC for paid social",
    title='Test UGC ads <i>one variable</i> at a time',
    body=grid([("Hook", "Decides if anyone watches"), ("Opening frame", "The very first visual"),
               ("Script & body", "How the middle is delivered"), ("Creator", "Same script, new delivery"),
               ("CTA", "Wording and placement"), ("Length", "Short vs long cuts"),
               ("Edit style", "Pacing, captions, music"), ("Aspect ratio", "Native to each platform")]),
    note='Start with <b>one creator</b> and a few hook variations.'),
"post-22-kpis-by-objective": dict(theme="paper", eyebrow="KPIs",
    title='Choose the KPI <i>before</i> the creator',
    body=compare([("Awareness", ["Reach", "Impressions", "Video views"], False),
                  ("Engagement", ["Engagement rate", "Comment quality", "Saves and shares"], True)])
         + '<div style="height:22px"></div>'
         + compare([("Traffic", ["Link clicks", "Click-through rate", "UTM-tracked sessions"], True),
                    ("Conversion", ["Conversions", "Revenue from codes or links", "CPA, ROI or ROAS"], False)]),
    note='Compare against <b>your own baseline</b> first.', compact=True),
"post-27-ambassador-programme-readiness": dict(theme="dim", eyebrow="Creator partnerships",
    title='One-off campaign or <i>ambassador</i> programme?',
    body=compare([("One-off campaigns", ["A single launch or moment", "Testing new creators", "A fresh brief each time"], False),
                  ("Ambassador programme", ["Creators who already know the product", "Ongoing content over months", "Tiers, roles and pay agreed up front"], True)]),
    note='Not ready yet? Start by <b>rebooking</b> the creators who worked.'),
"post-29-influencer-programme-audit": dict(theme="paper", eyebrow="Before you scale",
    title='Audit <i>before</i> you scale',
    body=steps([("Results measured consistently", ""), ("Tracking reliability", ""), ("Dependence on a few creators", ""),
                ("Content and rights records", ""), ("Contracts and payments", ""), ("Disclosure and claims, every market", ""),
                ("Operational capacity", "")], gap=18, sz=39),
    note='Fix anything rated <b>weak</b> before adding budget.'),
}

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,400..700,0..100,0..1;1,9..144,400..700,0..100,0..1&family=Inter:wght@400;500;600;700&display=block" rel="stylesheet">')

def page(spec):
    t = THEMES[spec["theme"]]
    vars_ = ";".join(f"--{k}:{v}" for k, v in t.items() if k in ("bg", "fg", "muted", "card", "line"))
    h1_size = "style=\"font-size:68px\"" if spec.get("compact") else ""
    note = f'<div class="note">{spec["note"]}</div>' if spec.get("note") else ""
    return f"""<!doctype html><html><head><meta charset="utf-8">{FONTS}<style>{CSS}</style></head>
<body style="{vars_}"><div class="c">
<div class="eyebrow">{e(spec["eyebrow"])}</div>
<h1 {h1_size}>{spec["title"]}</h1>
<div class="body">{spec["body"]}{note}</div>
<div class="foot"><div class="logo">{MARK.format(s=52, ink=t["ink"])}<div class="w">Kudo<span>zz</span></div></div><div class="url">kudozz.in/blog</div></div>
</div></body></html>"""

if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for name, spec in IMAGES.items():
        with open(os.path.join(OUT, name + ".html"), "w", encoding="utf-8") as f:
            f.write(page(spec))
    print(len(IMAGES), "pages written to", OUT)
