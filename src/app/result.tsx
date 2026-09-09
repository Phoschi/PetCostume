import { Asset, requestPermissionsAsync } from "expo-media-library";
import * as Sharing from "expo-sharing";
import { router } from "expo-router";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppButton } from "@/components/Button/AppButton";
import { colors, spacing } from "@/constants/theme";
import { openAffiliateLink } from "@/services/affiliate/openAffiliateLink";
import { useSelection } from "./_layout";

export default function ResultScreen() {
  const { costume, reset, result } = useSelection();

  async function saveImage() {
    if (!result) {
      return;
    }

    const permission = await requestPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission requise", "Autorisez l'acces a la galerie pour sauvegarder l'image.");
      return;
    }

    await Asset.create(result.imageUri);
    Alert.alert("Image sauvegardee");
  }

  async function shareImage() {
    if (!result) {
      return;
    }

    if (!(await Sharing.isAvailableAsync())) {
      Alert.alert("Partage indisponible", "Le partage n'est pas disponible sur cet appareil.");
      return;
    }

    await Sharing.shareAsync(result.imageUri);
  }

  async function openProduct() {
    if (!costume) {
      return;
    }

    try {
      await openAffiliateLink(costume.affiliateUrl);
    } catch (error) {
      Alert.alert("Erreur", error instanceof Error ? error.message : "Le lien ne peut pas etre ouvert.");
    }
  }

  function restart() {
    reset();
    router.replace("/");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Resultat</Text>
      {result ? (
        <Image source={{ uri: result.imageUri }} style={styles.resultImage} />
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Aucun resultat genere.</Text>
        </View>
      )}
      {costume ? <Text style={styles.costumeName}>{costume.name}</Text> : null}
      <View style={styles.actions}>
        <AppButton disabled={!result} label="Sauvegarder" onPress={saveImage} />
        <AppButton disabled={!result} label="Partager" onPress={shareImage} variant="secondary" />
        <AppButton disabled={!costume} label="Voir le produit" onPress={openProduct} variant="secondary" />
        <AppButton label="Recommencer" onPress={restart} variant="secondary" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.lg,
    padding: spacing.lg
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "800"
  },
  resultImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: colors.border
  },
  empty: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center"
  },
  emptyText: {
    color: colors.muted
  },
  costumeName: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700"
  },
  actions: {
    gap: spacing.md
  }
});
