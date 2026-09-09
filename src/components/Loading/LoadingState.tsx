import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "@/constants/theme";

type LoadingStateProps = {
  label: string;
};

export function LoadingState({ label }: LoadingStateProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} size="large" />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.lg
  },
  label: {
    color: colors.muted,
    fontSize: 15,
    textAlign: "center"
  }
});
