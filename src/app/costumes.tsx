import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { AppButton } from "@/components/Button/AppButton";
import { CostumeCard } from "@/components/CostumeCard/CostumeCard";
import { colors, spacing } from "@/constants/theme";
import { costumes } from "@/data/costumes";
import { useSelection } from "./_layout";

export default function CostumesScreen() {
  const { costume: selectedCostume, setCostume, setResult } = useSelection();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selectionnez un costume.</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={costumes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CostumeCard
            costume={item}
            selected={selectedCostume?.id === item.id}
            onPress={() => {
              setCostume(item);
              setResult(null);
            }}
          />
        )}
      />
      <AppButton disabled={!selectedCostume} label="Continuer" onPress={() => router.push("/generate")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.md,
    padding: spacing.lg
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "800"
  },
  list: {
    gap: spacing.md,
    paddingBottom: spacing.lg
  }
});
