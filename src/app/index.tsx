import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppButton } from "@/components/Button/AppButton";
import { colors, spacing } from "@/constants/theme";
import { costumes } from "@/data/costumes";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Pet Costume</Text>
        <Text style={styles.title}>Transformez la photo de votre animal en essayage costume.</Text>
      </View>

      <AppButton label="Commencer" onPress={() => router.push("/upload")} />

      <View style={styles.examples}>
        {costumes.map((costume) => (
          <Image key={costume.id} source={{ uri: costume.image }} style={styles.exampleImage} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.lg,
    padding: spacing.lg
  },
  header: {
    gap: spacing.sm,
    paddingTop: spacing.lg
  },
  logo: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: "800"
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 36
  },
  examples: {
    flexDirection: "row",
    gap: spacing.sm
  },
  exampleImage: {
    flex: 1,
    aspectRatio: 0.8,
    borderRadius: 8,
    backgroundColor: colors.border
  }
});
