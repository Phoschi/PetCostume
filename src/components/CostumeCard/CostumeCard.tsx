import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "@/constants/theme";
import { Costume } from "@/types";

type CostumeCardProps = {
  costume: Costume;
  selected?: boolean;
  onPress: () => void;
};

export function CostumeCard({ costume, selected = false, onPress }: CostumeCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, selected && styles.selected, pressed && styles.pressed]}
    >
      <Image source={{ uri: costume.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{costume.name}</Text>
        <Text style={styles.id}>{costume.id}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    overflow: "hidden"
  },
  selected: {
    borderColor: colors.accent,
    borderWidth: 2
  },
  pressed: {
    opacity: 0.88
  },
  image: {
    width: "100%",
    aspectRatio: 1.25,
    backgroundColor: colors.border
  },
  content: {
    padding: spacing.md,
    gap: spacing.xs
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "700"
  },
  id: {
    color: colors.muted,
    fontSize: 12
  }
});
