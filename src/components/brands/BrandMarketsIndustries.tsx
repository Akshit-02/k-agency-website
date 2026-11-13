import Link from "@/components/ui/Link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/content/home";
import { markets } from "@/content/markets";

/**
 * Who Kudozz works with and where. Industries link to the existing India playbooks; markets link to the
 * market pages (delivery in each confirmed by Kudozz, 2026-10-12). No offices, local teams or clients are claimed.
 */
export function BrandMarketsIndustries() {
  return (
    <section className="py-28 sm:py-36" id="industries-and-markets">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Industries"
              title="Creator strategy that changes with your category."
              description="What works for a skincare launch doesn't work for a fintech app. Each playbook covers the rules, formats and creator types for that category."
            />
            <ul className="mt-10 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link
                    href={industry.href}
                    className="inline-block border-[1.5px] border-ink px-4 py-2 font-display text-base tracking-tight text-ink transition-colors hover:bg-ink hover:text-paper"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Markets"
              title="India first, with campaigns in five more markets."
              description="Each market has its own creator licensing, disclosure rules, languages and platform mix, so the plan is built for the market rather than copied from India."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              <li>
                <Link
                  href="/services/regional-influencer-marketing"
                  className="group flex h-full flex-col justify-between border-[1.5px] border-ink bg-lime p-5 transition-colors hover:bg-ink hover:text-paper"
                >
                  <span className="flex items-start justify-between gap-2 font-display text-xl tracking-tight">
                    India
                    <ArrowUpRight className="size-4 shrink-0 opacity-60" aria-hidden="true" />
                  </span>
                  <span className="mt-3 block text-xs opacity-70">Metros, Tier 2 and Tier 3 cities, regional languages</span>
                </Link>
              </li>
              {markets.map((market) => (
                <li key={market.slug}>
                  <Link
                    href={`/markets/${market.slug}`}
                    className="group flex h-full flex-col justify-between border-[1.5px] border-ink p-5 transition-colors hover:bg-ink hover:text-paper"
                  >
                    <span className="flex items-start justify-between gap-2 font-display text-xl tracking-tight">
                      {market.name}
                      <ArrowUpRight className="size-4 shrink-0 opacity-60" aria-hidden="true" />
                    </span>
                    <span className="mt-3 block text-xs opacity-70">{market.coverage}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink/60">
              Kudozz Studios Private Limited is registered in India. Contracting, invoicing currency and working hours are
              agreed per campaign.{" "}
              <Link href="/markets" className="font-medium text-ink underline decoration-coral decoration-2 underline-offset-4">
                Compare markets
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
