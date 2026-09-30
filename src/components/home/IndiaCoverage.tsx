import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { markets } from "@/content/home";

/** India-wide positioning plus a compact set of links into the location guides (India → state → city). */
export function IndiaCoverage() {
  return (
    <section className="clip-notch -my-1 bg-ink py-32 text-paper sm:py-40" id="india">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow dark>Across India</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-7 font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl">
                Influencer marketing across <em className="italic text-lime">India</em>, not just its metros.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-paper/65 text-pretty">
                Kudozz runs campaigns with creators in Mumbai, Delhi, Bengaluru, Hyderabad, Chennai and Kolkata, and
                in cities like Ahmedabad, Pune, Jaipur, Lucknow and Surat where local creators often carry more trust
                than national names.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/65 text-pretty">
                We brief creators who work in Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, Bengali and other
                languages, and check that each creator&apos;s audience is where your customers are.{" "}
                <Link
                  href="/blog/regional-influencer-marketing-india"
                  className="font-medium text-paper underline decoration-lime decoration-2 underline-offset-4 hover:text-lime"
                >
                  How regional campaigns work
                </Link>
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Link
                href="/blog/best-influencer-marketing-agencies-in-india"
                className="group flex items-center justify-between gap-6 border-[1.5px] border-paper bg-coral p-6 text-ink transition-colors hover:bg-lime"
              >
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] opacity-70">National guide</span>
                  <span className="mt-2 block font-display text-2xl tracking-tight sm:text-3xl">
                    Compare influencer marketing agencies in India
                  </span>
                </span>
                <ArrowUpRight className="size-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Reveal>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-paper/45">Major markets</p>
            <StaggerReveal className="mt-4 grid grid-cols-1 border-t border-paper/20 sm:grid-cols-2">
              {markets.map((market) => (
                <StaggerItem key={market.name} className="border-b border-paper/20 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6">
                  <Link href={market.href} className="group flex items-center justify-between gap-4 py-4">
                    <span>
                      <span className="block font-display text-xl tracking-tight group-hover:text-lime">{market.name}</span>
                      <span className="block text-sm text-paper/50">{market.note}</span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-paper/40 group-hover:text-lime" aria-hidden="true" />
                  </Link>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
