import { Image, StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "@/constants/theme";

type ImagePreviewProps = {
  uri: string | null;
  label?: string;
};

export function ImagePreview({ uri, label = "Aucune image" }: ImagePreviewProps) {
  if (!uri) {
    return (
      <View style={[styles.container, styles.empty]}>
        <Text style={styles.emptyText}>{label}</Text>
      </View>
    );
  }

  return <Image source={{ uri }} style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: radius.md,
    backgroundColor: colors.border
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.border,
    borderWidth: 1
  },
  emptyText: {
    color: colors.muted,
    fontSize: 15,
    padding: spacing.md,
    textAlign: "center"
  }
});
