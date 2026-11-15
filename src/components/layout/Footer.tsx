import Link from "@/components/ui/Link";
import { siteConfig } from "@/config/site";
import { KudozzLogo } from "@/components/graphics/KudozzLogo";
import { PlatformLogo, type PlatformId } from "@/components/icons/PlatformLogo";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const socialLinks: { href: string; label: string; platform: PlatformId }[] = [
  { href: siteConfig.social.instagram, label: "Kudozz on Instagram", platform: "instagram" },
  { href: siteConfig.social.linkedin, label: "Kudozz on LinkedIn", platform: "linkedin" },
  // { href: siteConfig.social.youtube, label: "Kudozz on YouTube", platform: "youtube" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-black-display text-xs tracking-wide text-coral">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-paper/75 transition-colors hover:text-lime"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="pt-20 pb-10">
        <div className="grid gap-14 border-b border-paper/10 pb-16 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <KudozzLogo size="lg" dark />
            <p className="mt-5 text-sm leading-relaxed text-paper/60">
              {siteConfig.description}
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socialLinks.map(({ href, label, platform }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex size-10 items-center justify-center border-[1.5px] border-paper/20 text-paper/70 transition-colors hover:border-lime hover:bg-lime hover:text-ink"
                  >
                    <PlatformLogo platform={platform} className="size-[18px]" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <FooterColumn title="AGENCY" links={siteConfig.footerNav.company} />
            <FooterColumn
              title="FOR BRANDS"
              links={siteConfig.footerNav.forBrands}
            />
            <FooterColumn
              title="FOR CREATORS"
              links={siteConfig.footerNav.forCreators}
            />
            <div>
              <h3 className="font-black-display text-xs tracking-wide text-coral">
                CONTACT
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-paper/75">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-lime"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-coral py-10 text-ink [&_*:focus-visible]:outline-ink">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl tracking-tight">
              Stay ahead of the creator economy.
            </p>
            <p className="mt-1 text-sm text-ink/90">
              One email a month. No noise, just what&apos;s working.
            </p>
          </div>
          <NewsletterForm />
        </Container>
      </div>

      <div className="relative overflow-hidden bg-ink">
        <p
          aria-hidden="true"
          className="font-black-display pointer-events-none absolute -bottom-[6vw] left-1/2 w-[130vw] -translate-x-1/2 select-none text-center text-[16vw] leading-none tracking-tight text-paper/[0.04]"
        >
          KUDOZZ
        </p>
        <Container className="relative flex flex-col gap-4 py-8 text-xs text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {/* {siteConfig.footerNav.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-paper/80"
              >
                {link.label}
              </Link>
            ))} */}
          </div>
        </Container>
      </div>
    </footer>
  );
}
