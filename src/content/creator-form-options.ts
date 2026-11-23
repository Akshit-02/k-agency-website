// Option lists for the creator onboarding form (/for-creators#apply).
// The values are sent verbatim to the Google Sheet, so keep them matching
// the sheet's expected answers.

export const genderOptions = ["Male", "Female", "Other", "Prefer not to say"] as const;

export const creatorContentCategories = [
  "Fashion & Lifestyle",
  "Beauty & Skincare",
  "Health & Fitness",
  "Food & Beverages",
  "Travel",
  "Technology & Gadgets",
  "Gaming",
  "Parenting & Family",
  "Finance & Business",
  "Education",
  "Entertainment & Comedy",
  "Home & Decor",
  "Automotive",
  "Photography",
  "Other",
] as const;

export const creatorLanguages = [
  "English",
  "Hindi",
  "Gujarati",
  "Marathi",
  "Bengali",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Punjabi",
  "Other",
] as const;

export const collaborationTypes = [
  "Paid Collaborations",
  "Barter Collaborations",
  "UGC Content Creation",
  "Product Reviews",
  "Brand Ambassadorships",
  "Affiliate Collaborations",
  "Open to All Types",
] as const;
