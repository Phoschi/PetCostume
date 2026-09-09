import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";
import { AppSelection, Costume, GenerationResult } from "@/types";

type SelectionContextValue = AppSelection & {
  setPetImageUri: (uri: string | null) => void;
  setCostume: (costume: Costume | null) => void;
  setResult: (result: GenerationResult | null) => void;
  reset: () => void;
};

const SelectionContext = createContext<SelectionContextValue | null>(null);

function SelectionProvider({ children }: PropsWithChildren) {
  const [petImageUri, setPetImageUri] = useState<string | null>(null);
  const [costume, setCostume] = useState<Costume | null>(null);
  const [result, setResult] = useState<GenerationResult | null>(null);

  const value = useMemo(
    () => ({
      petImageUri,
      costume,
      result,
      setPetImageUri,
      setCostume,
      setResult,
      reset: () => {
        setPetImageUri(null);
        setCostume(null);
        setResult(null);
      }
    }),
    [costume, petImageUri, result]
  );

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}

export function useSelection() {
  const value = useContext(SelectionContext);

  if (!value) {
    throw new Error("useSelection doit etre utilise dans SelectionProvider.");
  }

  return value;
}

export default function RootLayout() {
  return (
    <SelectionProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerBackTitle: "Retour",
          headerTintColor: "#1677A3",
          contentStyle: { backgroundColor: "#FBFAF7" }
        }}
      >
        <Stack.Screen name="index" options={{ title: "Pet Costume" }} />
        <Stack.Screen name="upload" options={{ title: "Photo" }} />
        <Stack.Screen name="costumes" options={{ title: "Costumes" }} />
        <Stack.Screen name="generate" options={{ title: "Generation" }} />
        <Stack.Screen name="result" options={{ title: "Resultat" }} />
      </Stack>
    </SelectionProvider>
  );
}
