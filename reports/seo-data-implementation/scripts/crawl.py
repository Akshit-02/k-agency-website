import csv, re, json, html, urllib.request, concurrent.futures as cf
REPO = "/Users/akshit/Documents/secret-codes/influencer-agency"
class NoRedir(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k): return None
op = urllib.request.build_opener(NoRedir)
paths = set()
for u in open("sitemap_urls.txt"): paths.add(re.sub(r"^https?://[^/]+", "", u.strip()) or "/")
sitemap = set(paths)
gsc = json.load(open("gsc_pages.json"))["pages"]
paths |= set(gsc)
inv = {r["path"]: r for r in csv.DictReader(open(f"{REPO}/reports/seo-audit/url-inventory.csv"))}
paths |= set(p for p in inv if not p.endswith(".csv"))
def get(p):
    try:
        r = op.open("http://localhost:3481" + p, timeout=60); b = r.read().decode("utf-8", "ignore"); st = r.status; loc = ""
    except urllib.error.HTTPError as e:
        b = ""; st = e.code; loc = e.headers.get("Location") or ""
    t = re.search(r"<title>(.*?)</title>", b); d = re.search(r'<meta name="description" content="([^"]*)"', b)
    c = re.search(r'<link rel="canonical" href="([^"]+)"', b); rb = re.search(r'<meta name="robots" content="([^"]+)"', b)
    ld_ok = True; types = []
    for x in re.findall(r'<script type="application/ld\+json">(.*?)</script>', b, re.S):
        try: o = json.loads(x); types.append(o.get("@type", "?") if isinstance(o, dict) else "list")
        except Exception: ld_ok = False
    links = set(re.findall(r'href="(/[^"#?]*)', b))
    return p, dict(status=st, redirect_to=re.sub(r"^https?://[^/]+", "", loc), title=html.unescape(t.group(1)) if t else "",
                   desc_len=len(html.unescape(d.group(1))) if d else 0, canonical=c.group(1) if c else "", robots=rb.group(1) if rb else "",
                   h1=len(re.findall(r"<h1[\s>]", b)), jsonld="+".join(types), jsonld_valid=ld_ok, mid_cta=b.count('<aside class="not-prose my-2'), links=sorted(links))
with cf.ThreadPoolExecutor(8) as ex: res = dict(ex.map(get, sorted(paths)))
json.dump({"sitemap": sorted(sitemap), "res": res}, open("crawl.json", "w"))
import collections
print(len(res), collections.Counter(v["status"] for v in res.values()))
# broken internal links
live = {p for p, v in res.items() if v["status"] == 200}
redir = {p for p, v in res.items() if v["status"] in (301, 308)}
broken = collections.Counter(); to_redirect = collections.Counter()
for p, v in res.items():
    for l in v["links"]:
        l = l.rstrip("/") or "/"
        if l.startswith(("/_next", "/api", "/blog/", "/services", "/markets", "/creator-resources", "/for-", "/about", "/contact", "/tools", "/privacy", "/terms")) or l == "/":
            if l.startswith("/_next") or l.startswith("/api"): continue
            if l in redir: to_redirect[l] += 1
            elif l not in live and not re.search(r"\.(csv|svg|png|jpg|pdf|txt|xml)$", l): broken[l] += 1
print("broken internal targets", broken.most_common(10)); print("links to redirects", to_redirect.most_common(10))
print("non-self canonical", [p for p, v in res.items() if v["status"] == 200 and v["canonical"].replace("https://www.kudozz.in", "") not in (p, "" if p == "/" else None)][:10])
print("noindex", [p for p, v in res.items() if "noindex" in v["robots"]])
print("h1!=1", [p for p, v in res.items() if v["status"] == 200 and v["h1"] != 1][:10])
print("jsonld invalid", [p for p, v in res.items() if not v["jsonld_valid"]])
print("live not in sitemap", [p for p in live if p not in sitemap])
print("sitemap not 200", [p for p in sitemap if res[p]["status"] != 200])
