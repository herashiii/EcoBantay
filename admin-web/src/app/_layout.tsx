import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}