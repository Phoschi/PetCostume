export type Costume = {
  id: string;
  name: string;
  image: string;
  productUrl: string;
  affiliateUrl: string;
};

export type GenerationInput = {
  petImageUri: string;
  costume: Costume;
};

export type GenerationResult = {
  imageUri: string;
  costumeId: string;
  createdAt: string;
};

export type AppSelection = {
  petImageUri: string | null;
  costume: Costume | null;
  result: GenerationResult | null;
};
