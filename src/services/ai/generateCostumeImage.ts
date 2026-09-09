import { GenerationInput, GenerationResult } from "@/types";
import { formatIsoDate } from "@/utils/date";

export async function generateCostumeImage(input: GenerationInput): Promise<GenerationResult> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1200);
  });

  return {
    imageUri: input.petImageUri,
    costumeId: input.costume.id,
    createdAt: formatIsoDate()
  };
}
