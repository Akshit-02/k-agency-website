import { blogPosts } from "@/content/blog";
import { services } from "@/content/services";
import { markets } from "@/content/markets";
import { writeFileSync } from "node:fs";
const out = blogPosts.map(p => {
  const text = p.body.map((b:any) => b.text ?? (b.items?.join(" ")) ?? (b.rows?.flat().join(" ")) ?? "").join(" ");
  return { slug: p.slug, category: p.category, title: p.title, seoTitle: p.seoTitle ?? "", excerpt: p.excerpt, metaDescription: p.metaDescription ?? "",
    publishedAt: p.publishedAt, updatedAt: p.updatedAt ?? "", words: text.split(/\s+/).filter(Boolean).length,
    headings: p.body.filter((b:any)=>b.type==="heading").map((b:any)=>b.text), faqs: (p.faqs??[]).map(f=>f.question),
    links: p.body.flatMap((b:any)=>(b.links??[]).map((l:any)=>l.href)), related: p.related ?? [], intro: p.body.slice(0,4).map((b:any)=>b.text??"").join(" ").slice(0,600) };
});
writeFileSync("posts.json", JSON.stringify(out));
writeFileSync("services.json", JSON.stringify(services.map((s:any)=>({slug:s.slug,title:s.title,seoTitle:s.seoTitle,metaDescription:s.metaDescription,keys:Object.keys(s)}))));
writeFileSync("markets.json", JSON.stringify(markets.map((m:any)=>({slug:m.slug,name:m.name,keys:Object.keys(m)}))));
console.log(out.length, services.length, markets.length);
