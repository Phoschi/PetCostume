import { router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppButton } from "@/components/Button/AppButton";
import { ImagePreview } from "@/components/ImagePreview/ImagePreview";
import { LoadingState } from "@/components/Loading/LoadingState";
import { colors, spacing } from "@/constants/theme";
import { generateCostumeImage } from "@/services/ai/generateCostumeImage";
import { useSelection } from "./_layout";

export default function GenerateScreen() {
  const { petImageUri, costume, setResult } = useSelection();
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!petImageUri || !costume) {
      Alert.alert("Selection incomplete", "Choisissez une photo et un costume avant de generer.");
      return;
    }

    try {
      setLoading(true);
      const generation = await generateCostumeImage({ petImageUri, costume });
      setResult(generation);
      router.push("/result");
    } catch (error) {
      Alert.alert("Erreur", error instanceof Error ? error.message : "La generation a echoue.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pret pour la generation.</Text>
      <View style={styles.previewRow}>
        <View style={styles.previewItem}>
          <Text style={styles.label}>Photo</Text>
          <ImagePreview uri={petImageUri} />
        </View>
        <View style={styles.previewItem}>
          <Text style={styles.label}>Costume</Text>
          {costume ? <Image source={{ uri: costume.image }} style={styles.costumeImage} /> : <ImagePreview uri={null} />}
        </View>
      </View>
      {loading ? <LoadingState label="Generation de l'image en cours" /> : null}
      <AppButton label="Generer l'image" loading={loading} onPress={handleGenerate} />
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
    fontSize: 24,
    fontWeight: "800"
  },
  previewRow: {
    flexDirection: "row",
    gap: spacing.md
  },
  previewItem: {
    flex: 1,
    gap: spacing.sm
  },
  label: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "700"
  },
  costumeImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: colors.border
  }
});
