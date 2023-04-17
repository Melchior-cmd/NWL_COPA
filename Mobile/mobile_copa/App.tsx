import { StyleSheet, View, StatusBar } from "react-native";
import { NativeBaseProvider, Text, Center } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { THEME } from "./src/styles/theme";
import { Loading } from "./src/components/Loading";
import { SignIn } from "./src/screens/SignIn";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { New } from "./src/screens/New";
import { Pools } from "./src/screens/Pools";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
