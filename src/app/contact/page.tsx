import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import { Mail } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import type { PlatformId } from "@/components/icons/PlatformLogo";

export const metadata: Metadata = buildMetadata({
  title: "Get in Touch: Brand, Creator & Press Inquiries",
  description:
    "Get in touch with Kudozz for general inquiries, partnerships, or press. Brands starting a campaign should use our brand inquiry form for a faster response.",
  path: "/contact",
});

// Used by the "Follow Along" block below, which is commented out until the accounts are active.
// Re-enabling it also needs `PlatformLogo` imported from "@/components/icons/PlatformLogo".
const socialLinks: { href: string; label: string; platform: PlatformId }[] = [
  { href: siteConfig.social.instagram, label: "Kudozz on Instagram", platform: "instagram" },
  { href: siteConfig.social.linkedin, label: "Kudozz on LinkedIn", platform: "linkedin" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-28 sm:pt-40 sm:pb-36">
      <p
        aria-hidden="true"
        className="font-black-display pointer-events-none absolute -top-[3vw] left-1/2 w-[140vw] -translate-x-1/2 select-none text-center text-[22vw] leading-none tracking-tight text-ink/[0.04] sm:text-[15vw]"
      >
        TALK
      </p>
      <Container className="relative">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-2xl font-display text-6xl leading-[0.98] tracking-tight text-balance text-ink sm:text-7xl">
            Let&apos;s <em className="italic text-coral">talk.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
            Brand inquiries go faster through our{" "}
            <Link
              href="/for-brands?from=contact#inquiry"
              className="font-medium text-ink underline decoration-coral decoration-2 underline-offset-4"
            >
              campaign inquiry form
            </Link>
            . Creators who want to join the network should{" "}
            <Link
              href="/for-creators#apply"
              className="font-medium text-ink underline decoration-coral decoration-2 underline-offset-4"
            >
              apply on the For Creators page
            </Link>
            . For everything else (press, partnerships, general questions) use the form below.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <Reveal delay={0.05} className="flex gap-4 bg-coral p-6 text-ink">
              <Mail className="mt-1 size-5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide opacity-60">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-1 block text-lg font-medium hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="border-[1.5px] border-ink p-6 text-sm text-ink/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Company</p>
              <p className="mt-2">
                {siteConfig.legalName}, registered in India. We run influencer campaigns for brands in India, the UAE,
                Saudi Arabia, the UK, Australia and Singapore.{" "}
                <Link href="/markets" className="underline underline-offset-4 hover:text-ink">
                  Markets we serve
                </Link>
              </p>
            </Reveal>

            {/* <Reveal delay={0.1} className="border-[1.5px] border-ink p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Follow Along</p>
              <div className="mt-4 flex gap-3">
                {socialLinks.map(({ href, label, platform }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex size-10 items-center justify-center border-[1.5px] border-ink/20 text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <PlatformLogo platform={platform} className="size-[18px]" />
                  </a>
                ))}
              </div>
            </Reveal> */}
          </div>

          <Reveal
            delay={0.1}
            className="border-[1.5px] border-ink bg-paper p-8 shadow-[10px_10px_0_0_var(--color-ink)] sm:p-12"
          >
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
