import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { markets, otherMarketLinks } from "@/content/markets";
import { JsonLd, breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/animations/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";

const TITLE = "Markets We Serve: India, UAE, Saudi Arabia, UK, Australia, Singapore";
const SEO_TITLE = "Influencer Marketing Markets: India, GCC, UK, AU, SG";
const DESCRIPTION =
  "Kudozz runs influencer campaigns for brands in India, the UAE, Saudi Arabia, the UK, Australia and Singapore. See how we work, and the local rules we plan around, in each market.";

export const metadata: Metadata = buildMetadata({ title: SEO_TITLE, description: DESCRIPTION, path: "/markets" });

export default function MarketsPage() {
  const url = `${siteConfig.url}/markets`;
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: TITLE,
          description: DESCRIPTION,
          url,
          items: markets.map((m) => ({ name: m.h1, url: `${siteConfig.url}/markets/${m.slug}` })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Markets", url },
        ])}
      />

      <section className="pt-32 pb-16 sm:pt-40">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Markets" }]} className="mb-6" />
          <Eyebrow>Markets</Eyebrow>
          <Reveal fade={false}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.0] tracking-tight text-balance text-ink sm:text-6xl">
              Influencer campaigns in India, the GCC, the UK, Australia and Singapore.
            </h1>
          </Reveal>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
            Kudozz plans and runs influencer and creator campaigns for brands in six markets. The process is the same
            everywhere (one agreed KPI, vetted creators, managed content, honest reporting), but creator licences,
            disclosure rules, languages and platforms differ, so each market page explains what changes there.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-ink/55">
            Kudozz Studios Private Limited is registered in India. Contracting, invoicing currency and working hours
            are agreed per campaign.
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="sr-only">Market pages</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/"
              className="group border-[1.5px] border-ink bg-coral p-6 transition-colors hover:bg-ink hover:text-paper"
            >
              <p className="flex items-start justify-between gap-3 font-display text-2xl tracking-tight">
                India
                <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
              </p>
              <p className="mt-2 text-sm opacity-75">
                Our primary market: pan-India campaigns, regional-language creators and state and city guides.
              </p>
            </Link>
            {markets.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="group border-[1.5px] border-ink bg-paper p-6 transition-colors hover:bg-ink hover:text-paper"
              >
                <p className="flex items-start justify-between gap-3 font-display text-2xl tracking-tight">
                  {market.name}
                  <ArrowUpRight className="size-5 shrink-0 opacity-60" aria-hidden="true" />
                </p>
                <p className="mt-2 text-sm opacity-70">{market.coverage}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl tracking-tight text-ink">India guides</h2>
              <ul className="mt-4 space-y-2">
                {otherMarketLinks.india.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-ink/75 underline-offset-4 hover:text-ink hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl tracking-tight text-ink">Qatar, Kuwait, Oman and Bahrain</h2>
              <p className="mt-3 text-sm text-ink/60">
                We plan these GCC markets case by case, alongside a UAE or Saudi campaign. Licensing differs by
                country, so start with the country guides.
              </p>
              <ul className="mt-4 space-y-2">
                {otherMarketLinks.gcc.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-ink/75 underline-offset-4 hover:text-ink hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA inquiryHref="/for-brands?from=markets&pos=bottom#inquiry" />
    </>
  );
}
