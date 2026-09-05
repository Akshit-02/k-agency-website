import type { Metadata } from "next";
import Link from "next/link";
import { Mail, AtSign, Music3 } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { LinkedInGlyph, YouTubeGlyph } from "@/components/graphics/SocialIcons";

export const metadata: Metadata = buildMetadata({
  title: "Get in Touch: Brand, Creator & Press Inquiries",
  description:
    "Get in touch with Kudozz for general inquiries, partnerships, or press. Brands starting a campaign should use our brand inquiry form for a faster response.",
  path: "/contact",
});

const socialLinks = [
  { href: siteConfig.social.instagram, label: "Instagram", Icon: AtSign },
  { href: siteConfig.social.tiktok, label: "TikTok", Icon: Music3 },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInGlyph },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: YouTubeGlyph },
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
            <Link href="/for-brands#inquiry" className="font-medium text-ink underline decoration-coral decoration-2 underline-offset-4">
              campaign inquiry form
            </Link>
            . For everything else — press, partnerships, general questions — use the form below.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <Reveal delay={0.05} className="flex gap-4 bg-coral p-6 text-ink">
              <Mail className="mt-1 size-5 shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide opacity-60">Email</p>
                <a href={`mailto:${siteConfig.contact.email}`} className="mt-1 block text-lg font-medium hover:underline">
                  {siteConfig.contact.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="border-[1.5px] border-ink p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Follow Along</p>
              <div className="mt-4 flex gap-3">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex size-10 items-center justify-center border-[1.5px] border-ink/20 text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="border-[1.5px] border-ink bg-paper p-8 shadow-[10px_10px_0_0_var(--color-ink)] sm:p-12">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
