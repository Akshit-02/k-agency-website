"""Query/page analysis for the 2026-10-22 Search Console exports.

Inputs: pages.csv, queries.csv (copies of the GSC exports), posts.json (exported from src/content/blog.ts),
url-inventory.csv and content-audit.csv from reports/seo-audit (2026-10-17 registers).
Outputs (written to OUT): query-page-mapping.csv, blog-audit.csv, plus gsc_pages.json for later steps.
"""
import csv, json, re, sys, statistics as st, collections

SCR = sys.argv[1]
REPO = sys.argv[2]
OUT = sys.argv[3]
EDITED = json.load(open(f"{SCR}/edited.json"))  # slug -> short description of this run's change

posts = {p["slug"]: p for p in json.load(open(f"{SCR}/posts.json"))}
prior = {r["slug"]: r for r in csv.DictReader(open(f"{REPO}/reports/seo-audit/content-audit.csv")) if r.get("slug")}

def path_of(url):
    return re.sub(r"^https?://[^/]+", "", url) or "/"

# ---------- pages: aggregate fragment URLs (#section jump links) into their page ----------
pages_raw = list(csv.DictReader(open(f"{SCR}/pages.csv")))
agg = collections.defaultdict(lambda: {"clicks": 0, "impr": 0, "pos_w": 0.0, "fragments": 0, "frag_impr": 0})
for r in pages_raw:
    full = path_of(r["Top pages"])
    base = full.split("#")[0]
    a = agg[base]
    c, i, p = int(r["Clicks"]), int(r["Impressions"]), float(r["Position"])
    if "#" in full:
        # Fragment rows are extra impressions of sitelinks / jump links; keep them separate from the page row.
        a["fragments"] += 1
        a["frag_impr"] += i
        continue
    a["clicks"] += c; a["impr"] += i; a["pos_w"] += p * i
for k, a in agg.items():
    a["pos"] = round(a["pos_w"] / a["impr"], 2) if a["impr"] else None
    a["ctr"] = round(100 * a["clicks"] / a["impr"], 2) if a["impr"] else None

def bucket(p):
    if p is None: return None
    return "1-3" if p <= 3 else "3-5" if p <= 5 else "5-7" if p <= 7 else "7-10" if p <= 10 else "10-15" if p <= 15 else "15-20" if p <= 20 else "20+"

med = collections.defaultdict(list)
for k, a in agg.items():
    if a["impr"] >= 100:
        med[bucket(a["pos"])].append(a["clicks"] / a["impr"])
BENCH = {b: round(100 * st.median(v), 2) for b, v in med.items()}
json.dump({"pages": agg, "bench": BENCH}, open(f"{SCR}/gsc_pages.json", "w"))

# ---------- queries ----------
STOP = set("a an the of in on for to and or is are do does how what which who can i my your with from by vs be it this that me at as get".split())
def toks(s):
    s = s.lower().replace("insta ", "instagram ").replace("ig ", "instagram ").replace("reel ", "reels ").replace("hook ", "hooks ")
    out = []
    for w in re.findall(r"[a-z0-9]+", s):
        if w in STOP: continue
        w = re.sub(r"(ies)$", "y", w)
        if len(w) > 3 and w.endswith("s") and not w.endswith("ss"): w = w[:-1]
        out.append(w)
    return out

cands = []
for path, a in agg.items():
    if a["impr"] == 0: continue
    if path.startswith("/blog/") and path[6:] in posts:
        p = posts[path[6:]]
        text_main = p["slug"].replace("-", " ") + " " + (p["seoTitle"] or p["title"])
        text_more = " ".join(p["headings"]) + " " + " ".join(p["faqs"])
    else:
        text_main = path.replace("/", " ").replace("-", " ")
        text_more = ""
    cands.append((path, set(toks(text_main)), set(toks(text_more)), a["impr"]))

def infer_page(q):
    qt = set(toks(q))
    if not qt: return "", 0.0
    best, bs = "", 0.0
    for path, main, more, impr in cands:
        hit_main = len(qt & main); hit_more = len((qt - main) & more)
        score = (hit_main + 0.4 * hit_more) / len(qt)
        score += 0.02 * min(impr, 5000) / 5000  # tie-break toward pages that demonstrably collect impressions
        if score > bs: best, bs = path, score
    return best, round(bs, 2)

CLUSTERS = [  # (cluster, regex, audience, intent) evaluated in order
    ("Brand: Kudozz (navigational)", r"\bkudoz|kudometrics", "Brand/navigational", "Navigational"),
    ("Other brand: Creator SEO Fixer (navigational)", r"seo ?fixer|creatorseo", "Other brand", "Navigational"),
    ("Automated / AI-grounding query (site: operators or quoted help-centre titles)", r"site[:.]|^\*|\"view insights|\"trial reels|\"recommendations|\"tiktok shop|\"creator eligibility", "Automated", "Informational"),
    ("AI-style prompt (conversational fan-out)", r"^(plan|outline|compare|create|evaluate) (a|the|youtube|my|different)|^what platform|^what kinds of platforms|^how do shoppable|^what shoppable", "AI prompt", "Informational"),
    ("Instagram Subscriptions: free access (viewer intent)", r"(subscri|exclusive|premium|members|paid content|channel members).*(free|without paid)|free.*(subscri|exclusive|premium|members)|exclusive content website|subscription.*website", "Viewer/consumer", "Informational"),
    ("Instagram Subscriptions: how it works, price, fees", r"subscri|exclusive|instagram paid$|premium content|membership|members only|paid content|insta paid|desi instagram", "Creator", "Informational"),
    ("Instagram Trial Reels", r"tri[a]?l reel|trail reel|test reel|reels test|trial (post|video|instagram)|trial setting|non followers first", "Creator", "Informational"),
    ("Reels views and analytics", r"1000 views|reels? views?\b|reels? (views|analytics|insights|dashboard|performance)|reel views|views count|average views|reel insights|reels analytics|reel analytics", "Creator", "Informational"),
    ("Instagram Insights / creator insights", r"insights", "Creator", "Informational"),
    ("Instagram Gifts / Stars", r"gift|stars on instagram", "Creator", "Informational"),
    ("Instagram monetization in India", r"instagram.*(monet|earn|pay|income|money)|monetization|monetisation|(earn|money).*instagram", "Creator", "Informational"),
    ("Instagram broadcast channels", r"broadcast|instagram channel|community channel|channels to join|channels list", "Creator", "Informational"),
    ("Instagram keywords / search SEO", r"key ?word|instagram search|instagram seo", "Creator", "Informational"),
    ("Short-form hooks", r"\bhoo?k|\bhok\b", "Creator", "Informational"),
    ("Agency: location (state/city)", r"agenc.* in (?!india)|agency (kerala|kochi|hyderabad|jaipur|gurgaon)|in (delhi|vizag|gurgaon|kerala|kochi)|influencer marketing (kerala|in vizag)", "Brand", "Commercial"),
    ("Agency: best/top lists (India)", r"(best|top|leading|biggest|largest|india's top|trusted|10).*(agenc|compan|marketing in)|alternatives to", "Brand", "Commercial investigation"),
    ("Agency: selection questions", r"questions to ask|ask (an|a) .*agenc|vet .*agenc|evaluating .*agenc|agency vs|in-house", "Brand", "Commercial investigation"),
    ("Agency: national head terms", r"influencer (marketing )?agenc|influencers? agency|influence marketing agency|agency for influencer|agencies for influencer|influencer marketing compan|influencer advertising agency|social media influencer (agenc|compan)|creator marketing agency|creator agency|digital influencer", "Brand", "Commercial"),
    ("Services: influencer marketing services", r"influencer marketing (services?|solutions)|services? (in|india)|what services|ugc services|creator services", "Brand", "Commercial"),
    ("Campaign management", r"campaign management|manage influencer campaigns|influencer management|management agenc|creator management|program management|creator approvals", "Brand", "Commercial / informational"),
    ("Pricing: brand-side influencer cost and rates", r"cost|price|rate|charge|chathe|fee|how much do (influencers|brands)|how much does an influencer|per (post|reel|view)|shoutout|pay influencers|rate card|commission", "Brand", "Commercial investigation"),
    ("Usage rights / ad rights / licensing", r"use creator content|usage rights|ad rights|ads right|perpetual|licen[cs]|ownership over content|protect your original|creator ip", "Creator and brand", "Informational"),
    ("Whitelisting / partnership ads", r"whitelist|partnership ad|paid amplification", "Creator and brand", "Informational"),
    ("Influencer outreach / contacting creators", r"email|letter|contact|outreach|connect with|collaboration (message|mail)|collab message|meet influencers|pitch", "Brand", "Informational"),
    ("Finding influencers", r"find .*influencer|search (creators|youtube influencer)|influencer search|creator database|content creator database|how to find creators", "Brand", "Informational"),
    ("Creator brand deals / collaborations", r"brand (deal|collab)|collab|collaborat|first brand|sponsored", "Creator", "Informational"),
    ("UGC", r"\bugc\b|user generated", "Brand", "Informational"),
    ("Reporting / KPIs / measurement / attribution", r"kpi|report|metric|measure|attribut|roi|post mortem|tracking link", "Brand", "Informational"),
    ("Industry: travel and tourism", r"travel|touris", "Brand", "Commercial / informational"),
    ("Industry: construction", r"construct|contractor", "Brand", "Commercial / informational"),
    ("Industry and campaign types (other)", r"esports|gaming|fintech|d2c|fmcg|gadget|automotive|vehicle|dealer|wedding|qsr|ott|insurance|education|edtech|student|employee|event|experiential|product launch|brand launch|launch|regional|vernacular|kannada|tamil|premium brand|fashion|beauty|food", "Brand", "Commercial / informational"),
    ("Creator audience growth", r"viral followers|audience growth|follower growth|views into followers|10 min vira", "Creator", "Informational"),
    ("Advertising law and disclosure (India)", r"consumer protection act|compliance|asci|disclos", "Brand", "Informational"),
    ("YouTube (creator)", r"youtube|shorts|long videos|watch retention|watch time", "Creator", "Informational"),
    ("TikTok", r"tiktok", "Creator", "Informational"),
    ("X / Twitter", r"\bx\b|xcreator|twitter|influence x", "Creator", "Informational"),
    ("Snapchat / Pinterest / LinkedIn / podcasts", r"snap|pinterest|linkedin|podcast", "Mixed", "Informational"),
    ("Creator marketplace / platforms", r"marketplace|market place|platform", "Mixed", "Informational"),
    ("Creator business, commerce and operations", r"creator|storefront|digital product|sell|affiliate|tds|gst|invoice|portfolio|media kit|link in bio|paywall|agency revenue|client|founder|business|roster|consultant|workshop|content", "Creator", "Informational"),
    ("Influencer marketing: definitions and general", r"influencer marketing|influencer|what is|meaning", "Brand", "Informational"),
]
COUNTRY = [("India", r"india|indian|desi|delhi|mumbai|kerala|kochi|hyderabad|jaipur|gurgaon|vizag|haryana|bihar|sikkim|meghalaya|manipur|tripura|rajasthan|uttar|bengal|maharashtra|andhra|arunachal|himachal|madhya|shillong|kannada|tamil|telugu|hindi|ladakh|chuchot|drass|panamik|chiktan|shargole|choglamsar|bodh kharbu|andrott|kadmat|elikalpeni|bitra|kodithala|wakha|asci|tds|gst|consumer protection act"),
             ("United States", r"usa|seattle|seller-us"), ("United Kingdom", r"\buk\b"), ("UAE", r"uae|dubai"), ("Singapore", r"singapore"), ("Australia", r"australia")]

queries = list(csv.DictReader(open(f"{SCR}/queries.csv")))
REC_PRE = json.load(open(f"{SCR}/cluster_recs.json"))
rows = []
for q in queries:
    text = " ".join(q["Top queries"].split())
    low = text.lower()
    cl, aud, intent = "Unclustered / ambiguous", "Unknown", "Unclear"
    for name, rx, a, it in CLUSTERS:
        if re.search(rx, low):
            cl, aud, intent = name, a, it; break
    if re.fullmatch(r"(ha|haa|yes|ye|india|in india|indian|hindi|instagram|tiktok|2,300|give me examples|ismein kya kami hai|where is the subscription|yes gift|10 min vira|ai without rules)", low):
        cl, aud, intent = "Unclustered / ambiguous", "Unknown", "Unclear"
    market = next((m for m, rx in COUNTRY if re.search(rx, low)), "Not stated")
    page, conf, basis = ("", 0.0, "")
    owner = REC_PRE.get(cl, {}).get("owner")
    if owner:
        page, conf, basis = owner, 0.6, "cluster owner page"
    elif aud not in ("Automated",) and not cl.startswith("Unclustered"):
        page, conf = infer_page(text); basis = "token match"
    c, i, p = int(q["Clicks"]), int(q["Impressions"]), float(q["Position"])
    rows.append(dict(query=text, clicks=c, impressions=i, ctr_pct=round(100 * c / i, 2) if i else "", avg_position=p,
                     cluster=cl, intent=intent, audience=aud, market_signal=market,
                     inferred_landing_page=page, inference_confidence=("high" if conf >= 0.8 else "medium" if conf >= 0.5 else "low" if page else "n/a"), inference_basis=basis))

# cluster-level issue/recommendation text (written by hand after reading the pages; see implementation-log.md)
REC = json.load(open(f"{SCR}/cluster_recs.json"))
for r in rows:
    rec = REC.get(r["cluster"], {})
    r["issue"] = rec.get("issue", "")
    r["recommendation"] = rec.get("rec", "")
    r["priority"] = rec.get("priority", "P3")
    r["status"] = rec.get("status", "")

fields = ["query", "clicks", "impressions", "ctr_pct", "avg_position", "cluster", "intent", "audience", "market_signal",
          "inferred_landing_page", "inference_confidence", "inference_basis", "issue", "recommendation", "priority", "status"]
with open(f"{OUT}/query-page-mapping.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=fields, lineterminator="\n"); w.writeheader(); w.writerows(rows)

# cluster summary for the reports
summ = collections.defaultdict(lambda: [0, 0, 0, 0.0])
for r in rows:
    s = summ[r["cluster"]]; s[0] += 1; s[1] += r["clicks"]; s[2] += r["impressions"]; s[3] += r["avg_position"] * r["impressions"]
json.dump({k: {"queries": v[0], "clicks": v[1], "impressions": v[2], "wavg_pos": round(v[3] / v[2], 1)} for k, v in summ.items()},
          open(f"{SCR}/cluster_summary.json", "w"), indent=1)
mk = collections.Counter(); mki = collections.Counter()
for r in rows: mk[r["market_signal"]] += 1; mki[r["market_signal"]] += r["impressions"]
json.dump({"queries": mk, "impressions": mki}, open(f"{SCR}/market_summary.json", "w"), indent=1)

# ---------- blog audit: every live article ----------
EXPORT_DATE = "2026-10-22"
from datetime import date
def days_live(pub):
    y, m, d = map(int, pub.split("-")); return (date(2026, 10, 22) - date(y, m, d)).days

brows = []
for slug, p in sorted(posts.items()):
    a = agg.get(f"/blog/{slug}")
    impr = a["impr"] if a else 0
    clicks = a["clicks"] if a else 0
    pos = a["pos"] if a else None
    ctr = a["ctr"] if a else None
    b = bucket(pos)
    bench = BENCH.get(b)
    pr = prior.get(slug, {})
    age = days_live(p["publishedAt"])
    if slug in EDITED:
        action, reason, prio = "Updated this run", EDITED[slug], "P1"
    elif impr >= 500 and clicks / max(impr, 1) * 100 >= 2:
        action, reason, prio = "Protect: keep unchanged", f"Top performer ({clicks} clicks, {ctr}% CTR at position {pos}); no change without a clear problem", "P3"
    elif impr >= 300 and pos and pos <= 10 and bench is not None and ctr is not None and ctr < 0.5 * bench:
        action, reason, prio = "Improve title/snippet (next batch)", f"{impr} impressions at position {pos} but CTR {ctr}% vs site median {bench}% for that position band; check which queries trigger it before rewriting", "P2"
    elif impr >= 100 and pos and 10 < pos <= 20:
        action, reason, prio = "Near page one: refresh and add internal links", f"{impr} impressions, average position {pos}", "P2"
    elif impr >= 100 and pos and pos > 20:
        action, reason, prio = "Ranks poorly for demand it attracts: review intent fit", f"{impr} impressions, average position {pos}", "P2"
    elif impr == 0 and age >= 30:
        action, reason, prio = "No impressions: check indexing, then review for consolidation", f"Live {age} days with no impressions in this export; inspect in URL Inspection before any change", "P3"
    elif impr == 0:
        action, reason, prio = "Too new to judge", f"Published {p['publishedAt']} ({age} days before export)", "P3"
    else:
        action, reason, prio = "Keep; monitor", f"{impr} impressions, {clicks} clicks; no data-backed problem", "P3"
    brows.append(dict(url=f"https://www.kudozz.in/blog/{slug}", slug=slug, category=p["category"], published=p["publishedAt"],
                      updated=p["updatedAt"], words=p["words"], gsc_clicks=clicks if a else "", gsc_impressions=impr if a else "",
                      gsc_ctr_pct=ctr if a else "", gsc_avg_position=pos if a else "", fragment_rows=a["fragments"] if a else "",
                      ctr_benchmark_for_position_pct=bench if a else "", in_gsc_export="yes" if a else "no",
                      prior_register_action=pr.get("recommended_action", ""), prior_flags=pr.get("flags", ""),
                      action_this_run=action, reason=reason, priority=prio))
bf = list(brows[0].keys())
with open(f"{OUT}/blog-audit.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=bf, lineterminator="\n"); w.writeheader(); w.writerows(brows)
c = collections.Counter(r["action_this_run"] for r in brows)
print("blog actions", dict(c))
print("bench", BENCH)
print("gsc blog pages not live", [k for k in agg if k.startswith("/blog/") and k[6:] not in posts][:50])
