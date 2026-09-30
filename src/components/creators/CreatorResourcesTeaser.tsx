import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featured = [
  { label: "Creator media kit", href: "/blog/creator-media-kit" },
  { label: "Influencer rate card", href: "/blog/influencer-rate-card-india" },
  { label: "How to pitch brands", href: "/blog/how-to-pitch-brands-as-a-creator" },
  { label: "Influencer contract guide", href: "/blog/influencer-contract-guide-for-creators" },
  { label: "How to invoice brands", href: "/blog/how-to-invoice-brands-as-a-creator-india" },
  { label: "Spotting fake brand offers", href: "/blog/creator-scams-fake-brand-collaborations" },
];

export function CreatorResourcesTeaser() {
  return (
    <section className="border-t border-line py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
        <SectionHeading
          eyebrow="Creator Resources"
          title="Free guides for working with brands."
          description="Media kits, pricing, pitching, contracts, usage rights, invoicing and more, written for creators in India, whether or not you ever work with us."
        />
        <div>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {featured.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base font-medium text-ink underline decoration-coral decoration-2 underline-offset-4 hover:text-coral"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/creator-resources"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-dim underline decoration-2 underline-offset-4 hover:text-ink"
          >
            Browse all Creator Resources
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
