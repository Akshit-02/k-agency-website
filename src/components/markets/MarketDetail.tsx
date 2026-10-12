import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { marketPhrase, type Market, type MarketLink } from "@/content/markets";
import { getServiceBySlug } from "@/content/services";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";

function SourceLink({ source }: { source: MarketLink }) {
  const className = "underline underline-offset-2 hover:text-ink";
  return source.url.startsWith("/") ? (
    <Link href={source.url} className={className}>
      {source.label}
    </Link>
  ) : (
    <a href={source.url} target="_blank" rel="noopener noreferrer" className={className}>
      {source.label}
    </a>
  );
}

export function MarketDetail({
  market,
  guides,
  inquiryHref,
  breadcrumbItems,
}: {
  market: Market;
  guides: { title: string; href: string }[];
  inquiryHref: (position: "hero" | "bottom") => string;
  breadcrumbItems: Crumb[];
}) {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <Container className="relative">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          <Reveal>
            <Eyebrow>Markets · {market.name}</Eyebrow>
          </Reveal>
          {/* No opacity fade on the H1 so it paints before hydration (LCP). */}
          <Reveal delay={0.06} fade={false}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.0] tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl">
              {market.h1}
            </h1>
          </Reveal>
          {market.intro.map((paragraph, i) => (
            <Reveal key={i} delay={0.12 + i * 0.04}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65 text-pretty">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={inquiryHref("hero")} size="lg">
              Discuss a Campaign in {marketPhrase(market)}
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              All Services
            </Button>
          </Reveal>
          <p className="mt-8 max-w-xl border-l-[3px] border-coral pl-5 text-sm text-ink/60">
            <span className="font-semibold text-ink">Coverage: </span>
            {market.coverage}. Rules on this page last checked {market.reviewed}.
          </p>
        </Container>
      </section>

      <section className="bg-ink py-20 text-paper sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">How Kudozz works in {marketPhrase(market)}</h2>
              <StaggerReveal className="mt-8 space-y-4">
                {market.delivery.map((line) => (
                  <StaggerItem key={line} className="flex items-start gap-3">
                    <Check className="mt-1 size-5 shrink-0 text-lime" aria-hidden="true" />
                    <p className="text-base text-paper/75">{line}</p>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Platforms, languages and timing</h2>
              <ul className="mt-8 space-y-4">
                {market.platformsAndLanguages.map((line) => (
                  <li key={line} className="flex items-start gap-3 border-b border-paper/15 pb-4">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-coral" />
                    <p className="text-base text-paper/75">{line}</p>
                  </li>
                ))}
              </ul>
              {market.marketFacts?.map((fact) => (
                <p key={fact.text} className="mt-6 text-sm text-paper/60">
                  {fact.text}{" "}
                  <a href={fact.source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-paper">
                    Source: {fact.source.label}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Services for brands in {marketPhrase(market)}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {market.services.map(({ slug, note }) => {
              const service = getServiceBySlug(slug);
              if (!service) return null;
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group border-[1.5px] border-ink bg-paper p-6 transition-colors hover:bg-ink hover:text-paper"
                >
                  <p className="flex items-start justify-between gap-3 font-display text-lg tracking-tight">
                    {service.name}
                    <ArrowUpRight className="size-4 shrink-0 opacity-50" aria-hidden="true" />
                  </p>
                  <p className="mt-2 text-sm opacity-70">{note}</p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim py-20 sm:py-28">
        <Container>
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Rules we plan around in {marketPhrase(market)}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-ink/60">
            A summary for planning, not legal advice. Rules change, so we re-check them against the sources below before each campaign.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {market.rules.map((rule) => (
              <div key={rule.title} className="border-t-[1.5px] border-ink pt-5">
                <h3 className="font-display text-xl tracking-tight text-ink">{rule.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">{rule.body}</p>
                <ul className="mt-3 space-y-1 text-xs text-ink/55">
                  {rule.sources.map((source) => (
                    <li key={source.url}>
                      Source: <SourceLink source={source} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">What to send us for a proposal</h2>
              <ul className="mt-8 space-y-4">
                {market.proposal.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-line pb-4">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet" />
                    <p className="text-base text-ink/70">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Questions to ask any agency, including us</h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Which creators would you shortlist, and why? Ask for the reasons, not just handles.",
                  "How do you check that a creator's audience is actually in this market?",
                  "Which local licences, disclosure rules and sector approvals apply, and who checks them?",
                  "Are creator fees shown separately from agency fees?",
                  "What will the report show, and which KPI will it be measured against?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-3 border-b border-line pb-4">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-coral" />
                    <p className="text-base text-ink/70">{q}</p>
                  </li>
                ))}
              </ul>
              {market.sectors.length > 0 && (
                <>
                  <h3 className="mt-12 font-display text-xl tracking-tight text-ink">Sector guides</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {market.sectors.map((sector) => (
                      <li key={sector.href}>
                        <Link href={sector.href} className="inline-block border-[1.5px] border-ink px-3 py-1.5 text-sm hover:bg-ink hover:text-paper">
                          {sector.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      <FAQSection faqs={market.faqs} eyebrow="FAQ" title={`Questions about influencer marketing in ${marketPhrase(market)}.`} />

      {guides.length > 0 && (
        <section className="pb-20 sm:pb-28">
          <Container>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Guides for planning</h2>
            <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} className="text-ink/75 underline-offset-4 hover:text-ink hover:underline">
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/markets" variant="secondary">
                All Markets
              </Button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
