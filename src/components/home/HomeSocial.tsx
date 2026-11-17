import Link from "@/components/ui/Link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { PlatformLogo, type PlatformId } from "@/components/icons/PlatformLogo";
import { platforms } from "@/components/icons/platformPaths";

/**
 * Homepage social media marketing and management section. Scope mirrors /services/social-media-management
 * (src/content/social-media-management.ts): organic management only. Paid social is scoped separately, so it is
 * mentioned as such and never listed as included.
 */
const scope: { title: string; body: string }[] = [
  { title: "Social media strategy", body: "An audit of your accounts and competitors, then platforms, content pillars, tone and a posting rhythm you can keep." },
  { title: "Content planning", body: "A monthly calendar built around launches, offers, seasons and the questions your customers ask." },
  { title: "Social media content creation", body: "Posts, carousels, Reels and Stories, with captions written for each platform." },
  { title: "Publishing and community management", body: "Approved content goes out on schedule, and comments and messages are handled within an agreed scope." },
  { title: "Analytics and reporting", body: "A monthly report on what performed, why, and what we'll change next month." },
];

const platformIds: PlatformId[] = ["instagram", "facebook", "linkedin", "youtube", "pinterest", "x", "snapchat"];

export function HomeSocial() {
  return (
    <section className="clip-notch -my-1 bg-ink py-32 text-paper sm:py-40" id="social-media-marketing">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow dark>Social Media Marketing</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-7 font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl">
                Social media marketing that gives your brand a consistent <em className="italic text-lime">presence.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70 text-pretty">
                Kudozz is also a social media marketing and management agency for brands whose own accounts have
                drifted: posting when someone finds time, with no plan behind it. We run your brand&apos;s accounts
                month by month, and because we also run your creator campaigns, launches, creator posts and your own
                content come from one calendar.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-paper/60">Platforms we plan for</p>
              <ul className="mt-4 flex flex-wrap gap-3" aria-label="Platforms we plan for">
                {platformIds.map((id) => (
                  <li key={id} className="flex items-center gap-2 border-[1.5px] border-paper/20 px-3 py-2 text-sm text-paper/85">
                    <PlatformLogo platform={id} className="size-4 text-paper" />
                    {platforms[id].title}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/60">
                Most brands do better on two or three platforms run well. Paid social advertising is scoped separately.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-10 flex flex-wrap gap-3">
              <Button href="/services/social-media-management" variant="outline-light">
                Explore Social Media Management
              </Button>
            </Reveal>
          </div>

          <div>
            <StaggerReveal className="grid border-t border-paper/20">
              {scope.map((item, i) => (
                <StaggerItem key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-paper/20 py-6">
                  <span className="font-black-display text-lg text-lime">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-paper/70">{item.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-sm leading-relaxed text-paper/70">
                Comparing options? See{" "}
                <Link
                  href="/blog/social-media-management-cost-india"
                  className="font-medium text-paper underline decoration-lime decoration-2 underline-offset-4 hover:text-lime"
                >
                  what social media management costs in India
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/choose-social-media-management-agency"
                  className="font-medium text-paper underline decoration-lime decoration-2 underline-offset-4 hover:text-lime"
                >
                  how to choose a social media agency
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
