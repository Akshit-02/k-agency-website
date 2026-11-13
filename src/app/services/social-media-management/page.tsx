import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getServiceBySlug } from "@/content/services";
import { getBlogPostBySlug } from "@/content/blog";
import {
  SMM_PATH,
  SMM_SLUG,
  smmAnswer,
  smmApproach,
  smmCapabilities,
  smmFaqs,
  smmIncluded,
  smmIndustries,
  smmInquiryHref,
  smmMeta,
  smmPlatforms,
  smmProblems,
  smmProcess,
  smmGuideGroups,
  smmScopedSeparately,
  smmTogether,
} from "@/content/social-media-management";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FAQSection } from "@/components/ui/FAQSection";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { ContentCalendarGraphic } from "@/components/smm/ContentCalendarGraphic";
import { FinalCTA } from "@/components/home/FinalCTA";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: smmMeta.title,
  description: smmMeta.description,
  path: SMM_PATH,
});

const accents = ["bg-coral", "bg-violet", "bg-lime", "bg-ink"];

export default function SocialMediaManagementPage() {
  const service = getServiceBySlug(SMM_SLUG);
  const url = `${siteConfig.url}${SMM_PATH}`;
  // Brand-side guides, grouped; unpublished or missing slugs are skipped.
  const guideGroups = smmGuideGroups
    .map((group) => ({
      title: group.title,
      guides: group.slugs.flatMap((slug) => {
        const post = getBlogPostBySlug(slug);
        return post ? [{ title: post.title, href: `/blog/${post.slug}` }] : [];
      }),
    }))
    .filter((group) => group.guides.length > 0);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Social Media Management" },
  ];

  return (
    <>
      {/* areaServed narrowed to India: social media management outside India is confirmed case by case. */}
      {service && <JsonLd data={{ ...serviceSchema(service, url), areaServed: { "@type": "Country", name: "India" } }} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: "Social Media Management", url },
        ])}
      />
      <JsonLd data={faqSchema(smmFaqs)} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(180deg,var(--color-paper-dim)_0%,var(--color-paper)_60%)]" />
        <p
          aria-hidden="true"
          className="font-black-display pointer-events-none absolute -top-[2vw] left-1/2 w-[140vw] -translate-x-1/2 select-none text-center text-[22vw] leading-none tracking-tight text-ink/[0.04] sm:text-[14vw]"
        >
          SOCIAL
        </p>
        <Container className="relative">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Reveal fade={false}>
                <h1 className="text-ink">
                  <span className="mb-6 inline-flex items-center gap-2 border-[1.5px] border-ink px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
                    Social media management services
                    <span className="sr-only">:</span>
                  </span>
                  <span className="block font-display text-5xl leading-[1.0] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                    Social media that keeps your brand consistent, relevant and <em className="italic text-coral">connected.</em>
                  </span>
                </h1>
              </Reveal>
              <Reveal fade={false} delay={0.08}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/65 text-pretty">
                  Kudozz manages your brand&apos;s social media month by month: the strategy, the content calendar, posts
                  and Reels, publishing, community management and a report that tells you what to do next. And because
                  we also run influencer campaigns, your own content and your creator content can finally work from the
                  same plan.
                </p>
              </Reveal>
              <Reveal delay={0.16} className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={smmInquiryHref("hero")} size="lg" magnetic>
                  Discuss Your Social Media Goals
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Explore Our Services
                </Button>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-10 max-w-xl border-l-[3px] border-coral pl-5 text-sm text-ink/60">
                  <span className="font-semibold text-ink">Who it&apos;s for: </span>
                  founders, marketing heads and brand managers who need their own social accounts planned, produced and
                  run consistently, without building a full in-house social team.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <ContentCalendarGraphic />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Direct answer, for readers and answer engines */}
      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="max-w-3xl border-t-[1.5px] border-ink pt-8">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">{smmAnswer.question}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/75 text-pretty">{smmAnswer.text}</p>
          </div>
        </Container>
      </section>

      {/* 2. The business problem */}
      <section className="clip-notch bg-ink py-28 text-paper sm:py-36">
        <Container>
          <SectionHeading
            eyebrow="Sound Familiar?"
            title="Most brand accounts don't fail. They just drift."
            description="Social media rarely goes wrong in one big moment. It slips: a missed week, a rushed post, a comment left unanswered. These are the patterns we see most often when brands first talk to us."
            dark
          />
          <StaggerReveal className="mt-14 grid gap-px overflow-hidden border-[1.5px] border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">
            {smmProblems.map((problem, i) => (
              <StaggerItem key={problem.title} className="bg-ink p-7 sm:p-8">
                <span className="font-black-display text-xs text-coral">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight">{problem.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{problem.body}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* 3. Our approach */}
      <section className="bg-paper-dim py-28 sm:py-36" id="approach">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="Strategy first, then a calendar, then the content."
            description="Posting is the visible part. Most of the work happens before and after it. Every month runs through the same loop, and each loop gets sharper because it learns from the last one."
          />
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {smmApproach.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={(i % 3) * 0.05} className="flex h-full flex-col border-[1.5px] border-ink bg-paper p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-black-display text-3xl leading-none text-ink/20">{String(i + 1).padStart(2, "0")}</span>
                    <span className={cn("h-2 w-10", accents[i % accents.length])} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-ink/60">
            <ArrowRight className="size-4 text-coral" aria-hidden="true" />
            Then the next month&apos;s calendar starts from what step nine taught us.
          </p>
        </Container>
      </section>

      {/* 4. Complete service breakdown */}
      <section className="py-28 sm:py-36" id="services">
        <Container>
          <SectionHeading
            eyebrow="What's Included"
            title="Everything it takes to run a brand account well."
            description="Take the full service, or the parts your team can't cover. The final mix depends on your platforms, goals and the content you already have."
          />
          <div className="mt-16 grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
            <nav aria-label="Social media management services" className="hidden lg:block">
              <ul className="sticky top-28 space-y-1 border-l-[1.5px] border-ink">
                {smmCapabilities.map((cap) => (
                  <li key={cap.id}>
                    <a
                      href={`#${cap.id}`}
                      className="flex items-baseline gap-3 py-2 pl-4 text-sm text-ink/60 transition-colors hover:text-ink"
                    >
                      <span className="font-black-display text-xs text-coral">{cap.letter}</span>
                      {cap.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-6">
              {smmCapabilities.map((cap, i) => (
                <Reveal key={cap.id}>
                  <article id={cap.id} className="scroll-mt-28 border-[1.5px] border-ink bg-paper p-7 sm:p-10">
                    <div className="flex flex-wrap items-baseline gap-4">
                      <span
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center font-black-display text-lg",
                          accents[i % accents.length],
                          i % accents.length === 1 || i % accents.length === 3 ? "text-paper" : "text-ink"
                        )}
                      >
                        {cap.letter}
                      </span>
                      <h3 className="font-display text-3xl tracking-tight text-ink">{cap.title}</h3>
                    </div>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">{cap.summary}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {cap.items.map((item) => (
                        <li key={item} className="border-[1.5px] border-line-strong px-3 py-1.5 text-sm text-ink/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {cap.note && (
                      <p className="mt-6 bg-paper-dim px-4 py-3 text-sm leading-relaxed text-ink/70">
                        <span className="font-semibold text-ink">Good to know: </span>
                        {cap.note}
                      </p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-lime py-14">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-3xl tracking-tight text-ink">Not sure which of these you need?</p>
            <p className="mt-2 max-w-xl text-base text-ink/70">
              Tell us where your accounts are today and what you want them to do. We&apos;ll suggest a scope that fits.
            </p>
          </div>
          <Button href={smmInquiryHref("mid")} variant="dark" size="lg">
            Let&apos;s Plan Your Social Presence
          </Button>
        </Container>
      </section>

      {/* 5. Platform-specific management */}
      <section className="bg-violet py-28 text-paper sm:py-36" id="platforms">
        <Container>
          <SectionHeading
            eyebrow="Platforms"
            title="Each platform gets its own job."
            description="We don't copy one post across every app. Platform selection depends on your audience, business model, the content you can realistically produce and what you want to achieve. Most brands do better on two or three platforms run well than on seven run thinly."
            dark
          />
          <StaggerReveal className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {smmPlatforms.map((platform) => (
              <StaggerItem key={platform.name} className="flex flex-col border-[1.5px] border-paper/20 bg-violet-dim p-7">
                <h3 className="font-display text-3xl tracking-tight">{platform.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">{platform.role}</p>
                <ul className="mt-5 space-y-2">
                  {platform.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-paper/85">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerReveal>
          <p className="mt-10 max-w-2xl text-sm text-paper/60">
            Not every platform is included in every engagement. The platforms we manage for you are agreed and listed in
            your scope.
          </p>
        </Container>
      </section>

      {/* 6. Social media management + influencer marketing */}
      <section className="py-28 sm:py-36" id="with-influencer-marketing">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Why It Works Better Together"
                title={
                  <>
                    Your accounts, your creators and your content, <em className="italic text-coral">one plan.</em>
                  </>
                }
                description="Most brands hire one agency for social media and another for influencers, then spend their time getting the two to talk. Kudozz started in influencer marketing, so creator partnerships and UGC are part of how we think about your calendar from day one."
              />
              <Reveal delay={0.1} className="mt-10 grid grid-cols-3 gap-2 text-center">
                {[
                  { label: "Your accounts", className: "bg-ink text-paper" },
                  { label: "Creators", className: "bg-coral text-ink" },
                  { label: "UGC", className: "bg-lime text-ink" },
                ].map((item) => (
                  <div key={item.label} className={cn("px-2 py-6 font-display text-lg tracking-tight sm:text-xl", item.className)}>
                    {item.label}
                  </div>
                ))}
              </Reveal>
              <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
                <Button href="/services/influencer-marketing" variant="secondary">
                  Explore Influencer Marketing
                </Button>
                <Button href="/services/ugc-content-production" variant="ghost">
                  See UGC Content Production
                </Button>
              </Reveal>
            </div>
            <StaggerReveal className="space-y-4">
              {smmTogether.map((point, i) => (
                <StaggerItem key={point.title} className="border-[1.5px] border-ink bg-paper p-7 shadow-[6px_6px_0_0_var(--color-ink)]">
                  <span className={cn("block h-2 w-10", accents[i % accents.length])} aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight text-ink">{point.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/65">{point.body}</p>
                </StaggerItem>
              ))}
              <p className="text-sm text-ink/50">
                Working together doesn&apos;t guarantee more sales or engagement. It does mean fewer gaps between what
                creators say about you and what people find when they visit your profile.
              </p>
            </StaggerReveal>
          </div>
        </Container>
      </section>

      {/* 7. Industries */}
      <section className="bg-paper-dim py-28 sm:py-36" id="industries">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Brands we're set up to help."
            description="Every category has its own rhythm, rules and audience habits. These are the ones where social media, creators and UGC most often work together."
          />
          <ul className="mt-14 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {smmIndustries.map((industry) => (
              <li key={industry.name} className="border-t-[1.5px] border-ink py-5">
                <h3 className="font-display text-xl tracking-tight text-ink">{industry.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{industry.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 8. Working process */}
      <section className="py-28 sm:py-36" id="process">
        <Container>
          <SectionHeading
            eyebrow="How We Work Together"
            title="Six steps, with clear owners at each one."
            description="Social media management works when both sides know what they're responsible for. Here's how the work is split."
          />
          <div className="mt-14 border-t-[1.5px] border-ink">
            <div className="hidden grid-cols-[3rem_1.1fr_1.4fr_1.4fr] gap-6 border-b border-line py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45 md:grid">
              <span />
              <span>Stage</span>
              <span>Kudozz</span>
              <span>Your team</span>
            </div>
            {smmProcess.map((step, i) => (
              <Reveal key={step.title}>
                <div className="grid gap-3 border-b-[1.5px] border-ink py-7 md:grid-cols-[3rem_1.1fr_1.4fr_1.4fr] md:gap-6">
                  <span className="font-black-display text-2xl text-coral">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl tracking-tight text-ink">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/70">
                    <span className="font-semibold text-ink md:hidden">Kudozz: </span>
                    {step.kudozz}
                  </p>
                  <p className="text-sm leading-relaxed text-ink/70">
                    <span className="font-semibold text-ink md:hidden">Your team: </span>
                    {step.you}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Included vs scoped separately */}
      <section className="bg-ink py-28 text-paper sm:py-36" id="scope">
        <Container>
          <SectionHeading
            eyebrow="Clear Scope"
            title="What's included, and what's scoped separately."
            description="Your final scope depends on what your brand needs. We'd rather be clear upfront than surprise you with an invoice later."
            dark
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal className="border-[1.5px] border-paper/20 p-8 sm:p-10">
              <h3 className="font-display text-2xl tracking-tight text-lime">Organic social media management</h3>
              <p className="mt-2 text-sm text-paper/60">Typically part of a social media management scope:</p>
              <ul className="mt-6 space-y-3">
                {smmIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-paper/85">
                    <Check className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08} className="border-[1.5px] border-paper/20 p-8 sm:p-10">
              <h3 className="font-display text-2xl tracking-tight text-coral">Discussed and scoped separately</h3>
              <p className="mt-2 text-sm text-paper/60">Not included by default. We can talk through any of these:</p>
              <ul className="mt-6 space-y-4">
                {smmScopedSeparately.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <Minus className="mt-1 size-4 shrink-0 text-coral" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-paper/70">
                      <span className="font-semibold text-paper">{item.title}. </span>
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={smmInquiryHref("scope")} size="lg">
              Tell Us About Your Brand
            </Button>
            <p className="text-sm text-paper/60">
              We work with brands across India. Based elsewhere? Ask us about your market.{" "}
              <Link href="/markets" className="underline decoration-coral underline-offset-4 hover:text-paper">
                Markets we serve
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 10. FAQs */}
      <FAQSection faqs={smmFaqs} eyebrow="FAQ" title="Questions about social media management." />

      {guideGroups.length > 0 && (
        <section className="py-20 sm:py-28" id="guides">
          <Container>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Guides on social media management</h2>
            <p className="mt-3 max-w-2xl text-base text-ink/65">
              Practical guides for founders and marketing teams, whether you run social media yourself or work with an
              agency.
            </p>
            <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {guideGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="border-b-[1.5px] border-ink pb-3 font-display text-xl tracking-tight text-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.guides.map((guide) => (
                      <li key={guide.href}>
                        <Link href={guide.href} className="text-sm text-ink/75 underline-offset-4 hover:text-ink hover:underline">
                          {guide.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related services */}
      <section className="bg-paper-dim py-20 sm:py-24">
        <Container>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Related services</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { href: "/services/ugc-content-production", name: "UGC Content Production", body: "Creator-made videos your brand owns, ready for ads and your own feed." },
              { href: "/services/social-campaigns", name: "Social Media Campaigns", body: "Multi-creator campaigns around a launch, season or moment." },
              { href: "/services/instagram-influencer-marketing", name: "Instagram Influencer Marketing", body: "Reels, Stories and collab posts with creators your customers follow." },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group border-[1.5px] border-ink bg-paper p-6 transition-colors hover:bg-ink hover:text-paper"
              >
                <p className="font-display text-lg tracking-tight">{r.name}</p>
                <p className="mt-2 text-sm opacity-60">{r.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 11. Final CTA */}
      <FinalCTA
        inquiryHref={smmInquiryHref("bottom")}
        title="Let's build a social presence your audience wants to follow."
        body="Tell us about your brand, the platforms you're on and what you want social media to do for the business. We'll come back with a point of view and a scope, before we talk fees."
        primaryLabel="Talk to Our Team"
        secondary={{ label: "Explore All Services", href: "/services" }}
      />
    </>
  );
}
