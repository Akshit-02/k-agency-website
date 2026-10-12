import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { markets, getMarketBySlug } from "@/content/markets";
import { getBlogPostBySlug } from "@/content/blog";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { JsonLd, breadcrumbSchema, faqSchema, marketServiceSchema } from "@/lib/schema";
import { MarketDetail } from "@/components/markets/MarketDetail";
import { FinalCTA } from "@/components/home/FinalCTA";

export function generateStaticParams() {
  return markets.map((market) => ({ slug: market.slug }));
}

export async function generateMetadata(props: PageProps<"/markets/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const market = getMarketBySlug(slug);
  if (!market) return {};

  return buildMetadata({
    title: market.seoTitle,
    description: market.metaDescription,
    path: `/markets/${market.slug}`,
    locale: market.ogLocale,
  });
}

export default async function MarketPage(props: PageProps<"/markets/[slug]">) {
  const { slug } = await props.params;
  const market = getMarketBySlug(slug);
  if (!market) notFound();

  const url = `${siteConfig.url}/markets/${market.slug}`;
  const guides = market.guides.flatMap((guideSlug) => {
    const post = getBlogPostBySlug(guideSlug);
    return post ? [{ title: post.title, href: `/blog/${post.slug}` }] : [];
  });
  // ?from= attributes the lead to this page; ?t= carries the market into the lead email and pre-selects the goal.
  const inquiryHref = (position: "hero" | "bottom") =>
    `/for-brands?${new URLSearchParams({ from: `market:${market.slug}`, pos: position, t: market.ctaTopic })}#inquiry`;

  return (
    <>
      <JsonLd data={marketServiceSchema(market, url)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Markets", url: `${siteConfig.url}/markets` },
          { name: market.name, url },
        ])}
      />
      <JsonLd data={faqSchema(market.faqs)} />

      <MarketDetail
        market={market}
        guides={guides}
        inquiryHref={inquiryHref}
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Markets", href: "/markets" }, { label: market.name }]}
      />
      <FinalCTA inquiryHref={inquiryHref("bottom")} />
    </>
  );
}
