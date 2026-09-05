export type CreatorCategory = {
  slug: string;
  name: string;
  description: string;
  creatorCount: string;
};

export const creatorCategories: CreatorCategory[] = [
  { slug: "fashion", name: "Fashion", description: "Style, streetwear, and editorial-driven content.", creatorCount: "70+" },
  { slug: "beauty", name: "Beauty", description: "Skincare, makeup, and haircare specialists.", creatorCount: "85+" },
  { slug: "technology", name: "Technology", description: "Gadgets, software, and early-adopter reviews.", creatorCount: "40+" },
  { slug: "travel", name: "Travel", description: "Destination storytelling and travel guides.", creatorCount: "55+" },
  { slug: "food", name: "Food", description: "Recipes, restaurant culture, and food science.", creatorCount: "60+" },
  { slug: "fitness", name: "Fitness", description: "Training, wellness, and performance nutrition.", creatorCount: "65+" },
  { slug: "lifestyle", name: "Lifestyle", description: "Home, routines, and everyday culture.", creatorCount: "75+" },
  { slug: "finance", name: "Finance", description: "Personal finance, investing, and fintech.", creatorCount: "30+" },
  { slug: "gaming", name: "Gaming", description: "Streaming, esports, and game culture.", creatorCount: "45+" },
];

export const followerRanges = [
  "1K – 10K (Nano)",
  "10K – 50K (Micro)",
  "50K – 250K (Mid-tier)",
  "250K – 1M (Macro)",
  "1M+ (Celebrity)",
] as const;

export const contentNiches = [
  "Fashion",
  "Beauty",
  "Lifestyle",
  "Fitness",
  "Food",
  "Travel",
  "Technology",
  "Gaming",
  "Finance",
  "Education",
  "Parenting",
  "Entertainment",
  "Other",
] as const;
