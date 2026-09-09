import * as Linking from "expo-linking";

export async function openAffiliateLink(url: string) {
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error("Impossible d'ouvrir ce lien.");
  }

  await Linking.openURL(url);
}
