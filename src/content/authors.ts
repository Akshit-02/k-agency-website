import type { BlogCategory, BlogPost } from "@/content/blog";

/**
 * Real people credited as article authors (byline, /authors/[slug] page, Person schema).
 *
 * Only add people who actually work on Kudozz content, with details they've approved. Never invent a person,
 * credential or profile: a fake author is worse for trust than a team byline. Until a category has a person,
 * its articles keep their team byline (Organization author in schema).
 */
export type Author = {
  slug: string;
  name: string;
  /** Job title at Kudozz, e.g. "Head of Influencer Strategy". */
  jobTitle: string;
  /** One or two sentences of real, checkable experience. */
  bio: string;
  /** Public profiles that confirm who this is (LinkedIn first). Emitted as schema `sameAs`. */
  sameAs: string[];
  /** Square photo under /public, e.g. "/authors/jane-doe.jpg". */
  image?: string;
  /** Topics they can credibly speak to; emitted as schema `knowsAbout`. */
  knowsAbout?: string[];
};

export const AUTHORS: Author[] = [
  {
    slug: "priya-jain",
    name: "Priya Jain",
    jobTitle: "Social Media Manager",
    bio: "Priya Jain is a social media manager at Kudozz. She writes our guides on running brand social media: planning, content calendars, community management and reporting.",
    sameAs: [],
    knowsAbout: ["Social media management", "Content calendars", "Community management", "Social media reporting"],
  },
  {
    slug: "ananya-panday",
    name: "Ananya Panday",
    jobTitle: "Social Media Manager",
    bio: "Ananya Panday is a social media manager at Kudozz. She writes our creator resources and Instagram guides, covering platform features, content, analytics and growing an audience.",
    sameAs: [],
    knowsAbout: ["Instagram", "Creator growth", "Social media analytics", "Short-form video"],
  },
  {
    slug: "nisha-agarwal",
    name: "Nisha Agarwal",
    jobTitle: "Growth Marketer",
    bio: "Nisha Agarwal is a growth marketer at Kudozz. She writes our brand marketing and creator economy guides, focused on budgets, channels and measuring what drives growth.",
    sameAs: [],
    knowsAbout: ["Growth marketing", "Brand marketing", "Marketing measurement", "Creator economy"],
  },
  {
    slug: "simran-kaur",
    name: "Simran Kaur",
    jobTitle: "Influencer Marketing Manager",
    bio: "Simran Kaur is an influencer marketing manager at Kudozz. She writes our campaign strategy guides, from briefs and creator selection to timelines, approvals and reporting.",
    sameAs: [],
    knowsAbout: ["Influencer marketing", "Campaign planning", "Creator selection", "Campaign reporting"],
  },
  {
    slug: "kavya-agarwal",
    name: "Kavya Agarwal",
    jobTitle: "Influencer Marketing Manager",
    bio: "Kavya Agarwal is an influencer marketing manager at Kudozz. She writes our influencer marketing and UGC guides, covering how brands find, brief and work with creators.",
    sameAs: [],
    knowsAbout: ["Influencer marketing", "UGC marketing", "Creator partnerships", "Influencer vetting"],
  },
];

/** Which person is credited on each category's articles. Fill in as AUTHORS gains people. */
const CATEGORY_AUTHOR: Partial<Record<BlogCategory, string>> = {
  "Social Media Management": "priya-jain",
  "Creator Resources": "ananya-panday",
  "Instagram Marketing": "ananya-panday",
  "Social Media Trends": "ananya-panday",
  "Brand Marketing": "nisha-agarwal",
  "Creator Economy": "nisha-agarwal",
  "Campaign Strategy": "simran-kaur",
  "Influencer Marketing": "kavya-agarwal",
  "UGC Marketing": "kavya-agarwal",
};

const bySlug = new Map(AUTHORS.map((a) => [a.slug, a]));

export const getAuthorBySlug = (slug: string) => bySlug.get(slug);

export function getPostAuthor(post: Pick<BlogPost, "category">): Author | undefined {
  const slug = CATEGORY_AUTHOR[post.category];
  return slug ? bySlug.get(slug) : undefined;
}

export const authorPath = (author: Author) => `/authors/${author.slug}`;
