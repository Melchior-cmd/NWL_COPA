import { StyleSheet, StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, } from "@expo-google-fonts/roboto";
import { THEME } from "./src/styles/theme";
import { Loading } from "./src/components/Loading";
import { SignIn } from "./src/screens/SignIn";
export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    });
    return (React.createElement(NativeBaseProvider, { theme: THEME },
        React.createElement(StatusBar, { barStyle: "light-content", backgroundColor: "transparent", translucent: true }),
        fontsLoaded ? React.createElement(SignIn, null) : React.createElement(Loading, null)));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    titles: {
        color: "yellow",
        fontSize: 22,
    },
});
