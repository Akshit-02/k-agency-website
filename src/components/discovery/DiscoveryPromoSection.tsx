import { ArrowRight } from "lucide-react";
import Link from "@/components/ui/Link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { DiscoveryCTA } from "@/components/discovery/DiscoveryCTA";
import { DiscoveryLink } from "@/components/discovery/DiscoveryLink";
import { DiscoveryDashboardPreview } from "@/components/discovery/DiscoveryDashboardPreview";
import { DiscoveryFeatureCard } from "@/components/discovery/DiscoveryFeatureCard";
import { discoveryFacts, discoveryFeatures } from "@/config/discovery";
import { homeInquiryHref } from "@/content/home";

/**
 * Homepage product promotion for Kudozz Discovery (discover.kudozz.in): headline + CTA beside a product mock-up,
 * the verified feature set, and a "do it yourself vs done with you" split that hands agency-minded visitors to the
 * influencer marketing service and the inquiry form. Copy rules: only claim what's in src/config/discovery.ts.
 */
export function DiscoveryPromoSection() {
  const { signupCredits, signupCreditDays, platform, market } = discoveryFacts;
  return (
    <section
      id="kudozz-discovery"
      aria-labelledby="kudozz-discovery-heading"
      className="kz-discovery relative overflow-hidden bg-ink py-24 text-paper sm:py-32"
    >
      {/* Soft coral and lime light, plus a faint grid masked toward the product visual. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-coral/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 size-[30rem] rounded-full bg-lime/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(var(--color-paper)_1px,transparent_1px),linear-gradient(90deg,var(--color-paper)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_75%_35%,black,transparent_65%)]"
      />

      <Container className="relative">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-12">
          <div>
            <Reveal>
              <Eyebrow dark className="border-lime/40 text-lime">
                A Kudozz product · Influencer discovery platform
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                id="kudozz-discovery-heading"
                className="mt-6 font-display text-[2.6rem] leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[3.6rem]"
              >
                Your next creator collaboration <em className="italic text-coral">starts here.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/75 text-pretty">
                <strong className="font-semibold text-paper">Kudozz Discovery</strong> is our creator discovery tool
                for brands and marketers who want to find influencers themselves. Search {platform} creators in{" "}
                {market}, filter by niche, location and engagement, review profiles and shortlist the right fit for
                your campaign.
              </p>
            </Reveal>
            <Reveal delay={0.18} className="mt-9">
              <DiscoveryCTA placement="homepage_hero" variant="bright-dark" magnetic className="px-6 sm:px-8">
                Explore Kudozz Discovery
              </DiscoveryCTA>
              <p className="mt-4 text-sm text-paper/60">
                Free sign-up with {signupCredits} credits, valid for {signupCreditDays} days. Opens in a new tab.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-8 border-t border-paper/15 pt-5 text-sm text-paper/70">
                Looking for end-to-end influencer campaign management?{" "}
                <Link
                  href="/services/influencer-marketing"
                  className="group inline-flex items-center gap-1 font-semibold text-paper underline decoration-coral decoration-2 underline-offset-4 hover:text-lime"
                >
                  See our influencer marketing service
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={28}>
            <DiscoveryDashboardPreview />
          </Reveal>
        </div>

        <div className="mt-16 sm:mt-24">
          <Reveal>
            <h3 className="max-w-2xl font-display text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
              What you can do in Kudozz Discovery
            </h3>
          </Reveal>
          <StaggerReveal className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-5">
            {discoveryFeatures.map((feature, i) => (
              <StaggerItem key={feature.title} className={i === discoveryFeatures.length - 1 ? "col-span-2 xl:col-span-1" : undefined}>
                <DiscoveryFeatureCard feature={feature} index={i} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        {/* Two ways to work with Kudozz. */}
        <Reveal className="mt-10 grid border-[1.5px] sm:mt-16 border-paper/15 md:grid-cols-2">
          <div className="p-7 sm:p-9">
            <p className="font-black-display text-xs tracking-[0.14em] text-lime">KUDOZZ DISCOVERY · DO IT YOURSELF</p>
            <p className="mt-3 font-display text-2xl leading-snug tracking-tight">
              For teams who want to explore and shortlist creators on their own.
            </p>
            <p className="mt-3 hidden text-sm leading-relaxed text-paper/65 sm:block">
              Search, filter, compare and build lists at your own pace, and reveal contacts only for the creators you
              want to reach.
            </p>
            <DiscoveryLink
              placement="homepage_secondary"
              label="Start discovering creators"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lime underline decoration-2 underline-offset-4 hover:text-paper"
            >
              Start discovering creators
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </DiscoveryLink>
          </div>
          <div className="border-t-[1.5px] border-paper/15 bg-paper/[0.04] p-7 sm:p-9 md:border-l-[1.5px] md:border-t-0">
            <p className="font-black-display text-xs tracking-[0.14em] text-coral">KUDOZZ AGENCY · DONE WITH YOU</p>
            <p className="mt-3 font-display text-2xl leading-snug tracking-tight">
              For brands that want strategy, creators and execution handled.
            </p>
            <p className="mt-3 hidden text-sm leading-relaxed text-paper/65 sm:block">
              Our team plans the campaign, recruits and briefs creators, produces UGC, runs your social media and
              reports on what worked.
            </p>
            <Link
              href={homeInquiryHref("discovery")}
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-paper underline decoration-coral decoration-2 underline-offset-4 hover:text-lime"
            >
              Need help with your influencer campaign?
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
