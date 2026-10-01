import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { siteConfig } from "@/config/site";
import { services } from "@/content/services";
import { industries } from "@/content/home";

const values = [
  { title: "Strategy first", body: "Every engagement starts with your business objective, not a creator pitch.", bg: "bg-coral text-ink" },
  { title: "Radical transparency", body: "Reporting and communication that don't hide behind vanity metrics.", bg: "bg-violet text-paper" },
  { title: "Real partnerships", body: "With brands and creators alike — we build relationships, not transactions.", bg: "bg-lime text-ink" },
  { title: "Craft over shortcuts", body: "We'd rather run fewer campaigns well than many campaigns carelessly.", bg: "bg-ink text-paper" },
];

const platforms = [
  { name: "Instagram", href: "/blog/instagram-influencer-marketing" },
  { name: "YouTube", href: "/blog/youtube-influencer-marketing-india" },
  { name: "LinkedIn", href: "/blog/linkedin-influencer-marketing-india" },
  { name: "Snapchat", href: "/blog/snapchat-influencer-marketing-india" },
  { name: "Pinterest", href: "/blog/pinterest-influencer-marketing-india" },
  { name: "Podcasts", href: "/blog/podcast-influencer-marketing-india" },
];

const statStyles = ["bg-ink text-paper", "bg-coral text-ink", "bg-violet text-paper", "bg-lime text-ink"];

export function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <p
          aria-hidden="true"
          className="font-black-display pointer-events-none absolute -top-[3vw] left-1/2 w-[140vw] -translate-x-1/2 select-none text-center text-[20vw] leading-none tracking-tight text-ink/[0.04] sm:text-[13vw]"
        >
          STORY
        </p>
        <Container className="relative">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-display text-6xl leading-[0.98] tracking-tight text-balance text-ink sm:text-8xl">
              We started {siteConfig.shortName} because influencer marketing deserved <em className="italic text-coral">better operators.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/65 text-pretty">
              Too many campaigns were being run as spreadsheets and DMs — creators picked by follower count, briefs
              sent without strategy, and results reported in impressions nobody could act on. {siteConfig.name} was
              built to run this channel the way any serious marketing discipline should: with a strategy, a
              measurement plan, and people accountable for both sides of the partnership.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <SectionHeading eyebrow="What We Do" title="An influencer marketing agency for brands in India." />
          <Reveal>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/70 text-pretty">
              {siteConfig.name} ({siteConfig.legalName}) plans, runs and measures influencer and creator marketing
              campaigns for brands across India: D2C and e-commerce companies, consumer brands and B2B businesses. We
              find creators whose audience matches your customer, from nano to macro tiers and across regional
              languages, manage outreach, contracts and approvals, and report results against the KPI agreed before
              launch.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <Reveal>
              <h3 className="font-display text-xl tracking-tight text-ink">Services</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="underline-offset-4 hover:text-ink hover:underline">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="font-display text-xl tracking-tight text-ink">Industries</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {industries.map((industry) => (
                  <li key={industry.href}>
                    <Link href={industry.href} className="underline-offset-4 hover:text-ink hover:underline">
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.16}>
              <h3 className="font-display text-xl tracking-tight text-ink">Platforms</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {platforms.map((platform) => (
                  <li key={platform.href}>
                    <Link href={platform.href} className="underline-offset-4 hover:text-ink hover:underline">
                      {platform.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink/70">
                Coverage: pan-India, including{" "}
                <Link href="/blog/best-influencer-marketing-agencies-in-india" className="underline underline-offset-4 hover:text-ink">
                  state and city campaigns
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {siteConfig.stats.map((stat, i) => (
              <Reveal key={stat.label} className={`p-6 ${statStyles[i % statStyles.length]}`}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-black-display text-3xl tracking-tight sm:text-4xl">
                  <StatCounter value={stat.value} />
                </dd>
                <p className="mt-2 text-xs uppercase tracking-[0.1em] opacity-70">{stat.label}</p>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container>
          <SectionHeading eyebrow="What We Value" title="The principles behind every campaign we run." />
          <StaggerReveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <StaggerItem key={value.title} className={`p-7 ${value.bg}`}>
                <span className="font-black-display text-3xl opacity-30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl tracking-tight">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-70">{value.body}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Container>
      </section>
    </>
  );
}
