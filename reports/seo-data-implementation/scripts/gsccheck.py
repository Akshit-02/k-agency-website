import csv, re, urllib.request, json, sys
class NoRedir(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k): return None
op = urllib.request.build_opener(NoRedir)
def fetch(path):
    try:
        r = op.open("http://localhost:3481" + path, timeout=30); return r.status, None, r.read().decode("utf-8", "ignore")
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Location"), ""
out = []
seen = set()
for r in csv.DictReader(open("pages.csv")):
    path = re.sub(r"^https?://[^/]+", "", r["Top pages"]).split("#")[0] or "/"
    if path in seen: continue
    seen.add(path)
    st, loc, body = fetch(path)
    hops = 0; final = path; fst = st
    while fst in (301, 302, 307, 308) and hops < 5:
        hops += 1; final = re.sub(r"^https?://[^/]+", "", loc); fst, loc, body = fetch(final)
    canon = re.search(r'<link rel="canonical" href="([^"]+)"', body)
    robots = re.search(r'<meta name="robots" content="([^"]+)"', body)
    out.append(dict(path=path, status=st, hops=hops, final=final, final_status=fst, canonical=canon.group(1) if canon else "", robots=robots.group(1) if robots else ""))
json.dump(out, open(sys.argv[1], "w"), indent=0)
import collections
print(collections.Counter((o["status"], o["hops"], o["final_status"]) for o in out))
for o in out:
    if o["final_status"] != 200 or o["hops"] > 1 or (o["canonical"] and o["canonical"].replace("https://www.kudozz.in", "") not in (o["final"], "" if o["final"] == "/" else None)) or "noindex" in o["robots"]:
        print(o)
