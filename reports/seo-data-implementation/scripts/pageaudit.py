import csv, json, collections
REPO = "/Users/akshit/Documents/secret-codes/influencer-agency"; OUT = REPO + "/reports/seo-data-implementation"
cr = json.load(open("crawl.json")); res = cr["res"]; sitemap = set(cr["sitemap"])
g = json.load(open("gsc_pages.json")); gsc = g["pages"]; bench = g["bench"]
inv = {r["path"]: r for r in csv.DictReader(open(f"{REPO}/reports/seo-audit/url-inventory.csv"))}
blog = {"/blog/" + r["slug"]: r for r in csv.DictReader(open(f"{OUT}/blog-audit.csv"))}
edited = {"/blog/" + k: v for k, v in json.load(open("edited.json")).items()}
inl = collections.Counter()
for p, v in res.items():
    for l in set(v["links"]):
        l = l.rstrip("/") or "/"
        if l != p: inl[l] += 1
def bucket(p):
    if p is None: return None
    return "1-3" if p <= 3 else "3-5" if p <= 5 else "5-7" if p <= 7 else "7-10" if p <= 10 else "10-15" if p <= 15 else "15-20" if p <= 20 else "20+"
def ptype(p):
    if p == "/": return "homepage"
    if p.startswith("/services/"): return "service page"
    if p == "/services": return "services hub"
    if p.startswith("/markets"): return "market page" if p != "/markets" else "markets hub"
    if p.startswith("/creator-resources"): return "creator resources hub/section"
    if p == "/blog": return "blog index"
    if p.startswith("/blog/"):
        t = inv.get(p, {}).get("page_type", "")
        return t or "blog article"
    if p in ("/privacy-policy", "/terms"): return "legal"
    return "primary page"
rows = []
for p in sorted(res):
    v = res[p]; a = gsc.get(p)
    impr = a["impr"] if a else 0; pos = a["pos"] if a else None; ctr = a["ctr"] if a else None
    pt = ptype(p); issues = []; action = ""; prio = "P3"; changed = ""
    if v["status"] in (301, 308):
        action = f"Keep redirect (single hop to {v['redirect_to']}); Google is still processing it" if a else f"Keep redirect (single hop to {v['redirect_to']})"
        if p == "/blog/how-much-does-influencer-marketing-cost": issues.append("Old URL still ranks ~19 while target ranks ~47; recheck in 4-6 weeks")
    elif v["status"] == 404:
        action = "Leave as 404: URL never existed in the repository; 1 impression, no relevant target"; issues.append("404 seen in GSC")
    else:
        if p in blog:
            b = blog[p]; action = b["action_this_run"] + ": " + b["reason"]; prio = b["priority"]
        elif pt == "homepage":
            issues.append("Only 358 impressions while 'influencer marketing agency' queries (1,874 impressions) average 13.7 and likely land on the listicle")
            issues.append("Title claims 'Best Influencer Marketing Agency in India' without public proof (open owner decision)")
            action = "Owner decision: replace or substantiate the 'Best' claim; add real proof (case studies, named team); earn links"; prio = "P1"
        elif pt == "service page":
            issues.append(f"Low search visibility ({impr} impressions)" if impr else "No impressions in this export")
            action = "Keep content; too new to judge (site ~7 weeks old, 10 of 18 services added 2026-10-15). Add contextual links from ranking brand guides; recheck in 8 weeks"; prio = "P2"
        elif pt == "services hub":
            issues.append("'influencer marketing services' (347 impressions, avg 17.7) mostly reaches a blog post, not this hub")
            action = "Needs a query×page export before changing title; keep for now"; prio = "P2"
        elif pt == "blog index":
            action = "Keep; 459 impressions at 10.9 with 0.22% CTR is normal for a blog index"
        else:
            action = "Keep; no data-backed issue"
        if p in edited: changed = edited[p]
    rows.append(dict(url="https://www.kudozz.in" + (p if p != "/" else "/"), path=p, page_type=pt, in_sitemap="yes" if p in sitemap else "no",
        http_status=v["status"], redirect_to=v["redirect_to"], indexable="yes" if v["status"] == 200 and "noindex" not in v["robots"] else "no",
        title=v["title"], title_len=len(v["title"]), meta_description_len=v["desc_len"], h1_count=v["h1"] if v["status"] == 200 else "",
        self_canonical=("yes" if v["canonical"].replace("https://www.kudozz.in", "") in (p, "" if p == "/" else None) else "no") if v["status"] == 200 else "",
        jsonld_types=v["jsonld"], internal_inlinks_all=inl.get(p, 0), gsc_clicks=a["clicks"] if a else "", gsc_impressions=impr if a else "",
        gsc_ctr_pct=ctr if a else "", gsc_avg_position=pos if a else "", ctr_benchmark_for_position_pct=bench.get(bucket(pos), "") if a else "",
        issues="; ".join(issues), recommended_action=action, priority=prio, changed_this_run=changed))
with open(f"{OUT}/page-audit.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0]), lineterminator="\n"); w.writeheader(); w.writerows(rows)
print(len(rows), collections.Counter(r["page_type"] for r in rows).most_common(12))
print("services inlinks", {r["path"]: (r["internal_inlinks_all"], r["gsc_impressions"]) for r in rows if r["page_type"] == "service page"})
print("min inlinks live", sorted([(r["internal_inlinks_all"], r["path"]) for r in rows if r["indexable"] == "yes"])[:8])
