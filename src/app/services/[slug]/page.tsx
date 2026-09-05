import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug, getRelatedServices } from "@/content/services";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { FinalCTA } from "@/components/home/FinalCTA";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.name} Services`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const url = `${siteConfig.url}/services/${service.slug}`;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(service, url)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.name, url },
        ])}
      />
      <JsonLd data={faqSchema(service.faqs.map((f) => ({ question: f.question, answer: f.answer })))} />

      <ServiceDetail service={service} related={related} breadcrumbItems={breadcrumbItems} />
      <FinalCTA />
    </>
  );
}
