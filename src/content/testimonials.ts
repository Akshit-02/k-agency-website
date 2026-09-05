export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  isSample?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Kudozz didn't just hand us a list of creators — they handed us a strategy. The reporting alone was more transparent than any agency we'd worked with before.",
    name: "Sample Testimonial",
    role: "Head of Brand Marketing",
    company: "Sample Client — DTC Skincare Brand",
    isSample: true,
  },
  {
    quote:
      "We'd tried running influencer campaigns in-house for two years with mixed results. Handing it to a team that actually vets for engagement quality changed the entire ROI conversation.",
    name: "Sample Testimonial",
    role: "Growth Marketing Lead",
    company: "Sample Client — Fintech App",
    isSample: true,
  },
  {
    quote:
      "The ambassador program they built has become one of our most consistent content channels. It finally feels like a partnership instead of a transaction.",
    name: "Sample Testimonial",
    role: "VP of Marketing",
    company: "Sample Client — Outdoor Apparel",
    isSample: true,
  },
];
