import Link from "next/link";
import { Check } from "lucide-react";
import type { Service } from "@/content/services";
import { ServiceMotif } from "@/components/graphics/ServiceMotif";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "@/components/ui/FAQSection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { markets, marketPhrase } from "@/content/markets";

const themes = [
  { bg: "bg-coral", text: "text-ink" },
  { bg: "bg-violet", text: "text-paper" },
  { bg: "bg-lime", text: "text-ink" },
  { bg: "bg-ink", text: "text-paper" },
];

/** Lowercases a service name for use mid-sentence while keeping acronyms such as "UGC" intact. */
function sentenceCase(name: string) {
  return name
    .split(" ")
    .map((word) => (word === word.toUpperCase() ? word : word.toLowerCase()))
    .join(" ");
}

export function ServiceDetail({
  service,
  related,
  guides,
  breadcrumbItems,
}: {
  service: Service;
  related: Service[];
  guides: { title: string; href: string }[];
  breadcrumbItems: Crumb[];
}) {
  const theme = themes[(parseInt(service.index, 10) - 1) % themes.length];

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <p
          aria-hidden="true"
          className="font-black-display pointer-events-none absolute -top-[2vw] right-[-2vw] select-none text-[16vw] leading-none text-ink/[0.04] sm:text-[10vw]"
        >
          {service.index}
        </p>
        <Container className="relative">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          <Reveal>
            <Eyebrow>Service {service.index}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.0] tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl">
              {service.name}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65 text-pretty">{service.description}</p>
          </Reveal>
          <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={`/for-brands?from=service:${service.slug}#inquiry`} size="lg">
              Start a Brand Inquiry
            </Button>
            <ServiceMotif motif={service.motif} className="h-12 w-12 text-coral" />
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-10 max-w-xl border-l-[3px] border-coral pl-5 text-sm text-ink/60">
              <span className="font-semibold text-ink">Who it&apos;s for: </span>
              {service.whoItsFor}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="max-w-3xl border-t-[1.5px] border-ink pt-8">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">{service.answer.question}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/75 text-pretty">{service.answer.text}</p>
          </div>
        </Container>
      </section>

      <section className={`py-20 sm:py-28 ${theme.bg} ${theme.text}`}>
        <Container>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">How it works</h2>
          <StaggerReveal className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <StaggerItem key={step.title} className="border-t-[1.5px] border-current/25 pt-5">
                <span className="font-black-display text-3xl opacity-40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-xl tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">{step.body}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Benefits</h2>
              <StaggerReveal className="mt-8 space-y-4">
                {service.benefits.map((benefit) => (
                  <StaggerItem key={benefit} className="flex items-start gap-3">
                    <Check className="mt-1 size-5 shrink-0 text-coral" aria-hidden="true" />
                    <p className="text-base text-ink/70">{benefit}</p>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Deliverables</h2>
              <StaggerReveal className="mt-8 space-y-4">
                {service.deliverables.map((deliverable) => (
                  <StaggerItem key={deliverable} className="flex items-start gap-3 border-b border-line pb-4">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet" />
                    <p className="text-base text-ink/70">{deliverable}</p>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </Container>
      </section>

      {service.comparison && (
        <section className="pb-20 sm:pb-28">
          <Container>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">{service.comparison.title}</h2>
            <div className="mt-8 overflow-x-auto border-[1.5px] border-ink">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <thead className="bg-ink text-paper">
                  <tr>
                    {service.comparison.columns.map((col, i) => (
                      <th key={i} scope="col" className="px-4 py-3 font-semibold">
                        {col || <span className="sr-only">Compared on</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {service.comparison.rows.map(([label, ...cells]) => (
                    <tr key={label} className="border-t border-line">
                      <th scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                        {label}
                      </th>
                      {cells.map((cell, i) => (
                        <td key={i} className="px-4 py-3 align-top text-ink/70">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      )}

      <section className="bg-paper-dim py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">What we need from you</h2>
              <ul className="mt-8 space-y-4">
                {service.clientProvides.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-line pb-4">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-coral" />
                    <p className="text-base text-ink/70">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">How success is measured</h2>
              <ul className="mt-8 space-y-4">
                {service.successMeasures.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-line pb-4">
                    <Check className="mt-1 size-5 shrink-0 text-violet" aria-hidden="true" />
                    <p className="text-base text-ink/70">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t-[1.5px] border-ink pt-8">
            <h2 className="font-display text-2xl tracking-tight text-ink">Where we run this service</h2>
            <p className="mt-3 max-w-2xl text-base text-ink/70">
              We run it for brands in India,{" "}
              {markets.map((market, i) => (
                <span key={market.slug}>
                  <Link href={`/markets/${market.slug}`} className="underline underline-offset-4 hover:text-ink">
                    {marketPhrase(market)}
                  </Link>
                  {i < markets.length - 2 ? ", " : i === markets.length - 2 ? " and " : "."}
                </span>
              ))}{" "}
              Local creator licences and disclosure rules are built into the plan for each market.
            </p>
          </div>
        </Container>
      </section>

      <FAQSection faqs={service.faqs} eyebrow="FAQ" title={`Questions about ${sentenceCase(service.name)}.`} />

      {guides.length > 0 && (
        <section className="py-20 sm:py-28">
          <Container>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Guides on this topic</h2>
            <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} className="text-ink/75 underline-offset-4 hover:text-ink hover:underline">
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="bg-paper-dim py-20 sm:py-28">
        <Container>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Related services</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group border-[1.5px] border-ink bg-paper p-6 transition-colors hover:bg-ink hover:text-paper"
              >
                <ServiceMotif motif={r.motif} className="h-8 w-8 text-coral" />
                <p className="mt-4 font-display text-lg tracking-tight">{r.name}</p>
                <p className="mt-2 text-sm opacity-60">{r.shortDescription}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
