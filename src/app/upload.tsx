import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";
import { AppButton } from "@/components/Button/AppButton";
import { ImagePreview } from "@/components/ImagePreview/ImagePreview";
import { colors, spacing } from "@/constants/theme";
import { useSelection } from "./_layout";

export default function UploadScreen() {
  const { petImageUri, setPetImageUri, setResult } = useSelection();

  async function pickImage() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission requise", "Autorisez l'acces a la galerie pour choisir une photo.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.9
    });

    if (!result.canceled) {
      setPetImageUri(result.assets[0].uri);
      setResult(null);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choisissez une photo claire de votre animal.</Text>
      <ImagePreview uri={petImageUri} label="Aucune photo selectionnee" />
      <AppButton label={petImageUri ? "Remplacer la photo" : "Choisir une photo"} onPress={pickImage} />
      <AppButton
        disabled={!petImageUri}
        label="Continuer"
        onPress={() => router.push("/costumes")}
        variant="secondary"
      />
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
    fontWeight: "800",
    lineHeight: 30
  }
});
