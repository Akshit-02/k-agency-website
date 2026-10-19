import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Download } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { toolDownloads, toolGroups } from "@/content/tools";
import { JsonLd, breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/animations/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";

const TITLE = "Free Influencer Marketing Tools and Calculators";
const SEO_TITLE = "Free Influencer Marketing Calculators & Templates";
const DESCRIPTION =
  "Free influencer marketing calculators, checklists and templates for brands, creators and agencies: campaign cost, budget, ROI, creator pricing and more.";

const toolCount = toolGroups.reduce((sum, group) => sum + group.tools.length, 0);

export const metadata: Metadata = buildMetadata({ title: SEO_TITLE, description: DESCRIPTION, path: "/tools" });

export default function ToolsPage() {
  const url = `${siteConfig.url}/tools`;
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: TITLE,
          description: DESCRIPTION,
          url,
          items: toolGroups.flatMap((group) =>
            group.tools.map((tool) => ({ name: tool.name, url: `${siteConfig.url}${tool.href}` })),
          ),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Free Tools", url },
        ])}
      />

      <section className="pt-32 pb-16 sm:pt-40">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Free Tools" }]} className="mb-6" />
          <Eyebrow>Free tools</Eyebrow>
          <Reveal fade={false}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.0] tracking-tight text-balance text-ink sm:text-6xl">
              Free influencer marketing calculators, checklists and templates.
            </h1>
          </Reveal>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
            {toolCount} tools for brands planning campaigns, creators pricing their work and agencies running a
            roster. Each one sits inside the guide that explains how to use it. They&apos;re free, need no sign-up and
            run in your browser: nothing you type is sent to Kudozz.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-ink/55">
            The calculators use the numbers you enter, not built-in market rates. Use real quotes from creators, and
            treat every result as a planning estimate, not a promise of results.
          </p>
          <nav aria-label="Tool groups" className="mt-8 flex flex-wrap gap-3">
            {toolGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="border-[1.5px] border-ink px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {group.title}
              </a>
            ))}
            <a
              href="#templates"
              className="border-[1.5px] border-ink px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Templates
            </a>
          </nav>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="space-y-16">
            {toolGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">{group.title}</h2>
                <p className="mt-3 max-w-2xl text-ink/65">{group.intro}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="group flex flex-col border-[1.5px] border-ink bg-paper p-6 transition-colors hover:bg-ink hover:text-paper"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide opacity-55">{tool.kind}</p>
                      <h3 className="mt-2 flex items-start justify-between gap-3 font-display text-xl tracking-tight">
                        {tool.name}
                        <ArrowUpRight className="size-5 shrink-0 opacity-60" aria-hidden="true" />
                      </h3>
                      <p className="mt-2 text-sm opacity-70">{tool.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div id="templates" className="scroll-mt-28">
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">Templates</h2>
              <p className="mt-3 max-w-2xl text-ink/65">
                Spreadsheet templates that open in Excel or Google Sheets.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {toolDownloads.map((file) => (
                  <div key={file.href} className="flex flex-col border-[1.5px] border-ink/15 bg-paper-dim p-6">
                    <h3 className="font-display text-xl tracking-tight text-ink">{file.name}</h3>
                    <p className="mt-2 text-sm text-ink/70">{file.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
                      <a
                        href={file.href}
                        download
                        className="inline-flex items-center gap-1.5 text-ink underline decoration-coral decoration-2 underline-offset-2 hover:text-coral"
                      >
                        <Download className="size-4" aria-hidden="true" />
                        Download
                      </a>
                      <Link href={file.guideHref} className="text-ink/70 underline-offset-4 hover:text-ink hover:underline">
                        How to use it
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-2xl border-t border-ink/15 pt-10">
              <h2 className="font-display text-2xl tracking-tight text-ink">Using these tools elsewhere</h2>
              <p className="mt-3 text-ink/65">
                You&apos;re welcome to share any tool or template with your team, students or readers. If you mention
                one in an article or course, please link to the tool&apos;s guide or to this page,{" "}
                <span className="font-medium text-ink">{url.replace("https://", "")}</span>. Found a mistake or want a
                tool we don&apos;t have?{" "}
                <Link href="/contact" className="font-medium text-ink underline decoration-coral decoration-2 underline-offset-2 hover:text-coral">
                  Tell us
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA inquiryHref="/for-brands?from=tools&pos=bottom#inquiry" />
    </>
  );
}
