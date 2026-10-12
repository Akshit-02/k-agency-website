import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { markets } from "@/content/markets";

/** Markets outside India, each linked to its market page (see src/content/markets.ts). */
export function GlobalMarkets() {
  return (
    <section className="py-28 sm:py-36" id="markets">
      <Container>
        <SectionHeading
          eyebrow="Beyond India"
          title="Campaigns for brands in the GCC, the UK, Australia and Singapore."
          description="The same strategy-first process, adapted to each market's creator licences, disclosure rules, languages and platforms."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
                <span className="mt-3 block text-xs opacity-60">{market.coverage}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/markets" className="mt-8 inline-block text-sm font-medium text-ink underline underline-offset-4 hover:text-coral">
          All markets we serve
        </Link>
      </Container>
    </section>
  );
}
