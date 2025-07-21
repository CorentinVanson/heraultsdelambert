import "./global.css";
import React from "react";
import { Box, GluestackUIProvider, SafeAreaView } from "./components/ui";
import { useFonts, Estonia_400Regular } from '@expo-google-fonts/estonia';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Linking from "expo-linking";
import Header from "./heraults-components/Header";
import Banner from "./heraults-components/Banner";
import { Star } from "lucide-react-native";
import HeraultsPage from "./heraults-components/page/HeraultsPage";
import ConvensionInscriptionPage from "./heraults-components/page/ConvensionInscriptionPage";

let defaultTheme: "dark" | "light" = "light";

Linking.getInitialURL().then((url: any) => {
  let { queryParams } = Linking.parse(url) as any;
  defaultTheme = queryParams?.iframeMode ?? defaultTheme;
});

type ThemeContextType = {
  colorMode?: "dark" | "light";
  toggleColorMode?: () => void;
};
export const ThemeContext = React.createContext<ThemeContextType>({
  colorMode: "light",
  toggleColorMode: () => {},
});

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Home: '',
    Inscription: 'convention/inscription',
  },
};

const linking = {
  prefixes: ["http://localhost:8081", "https://heraultsdelambert-1037528676095.europe-west1.run.app"],
  config,
}

export default function App() {
  const showBanner = true;

  const [colorMode, setColorMode] = React.useState<"dark" | "light">(
    defaultTheme
  );
  
  useFonts({
    Estonia_400Regular,
  });

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
        <GluestackUIProvider mode={colorMode}>
          <NavigationContainer linking={linking}>
            <Stack.Navigator
              initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HeraultsPage}
                options={{
                  header: () => 
                    <SafeAreaView
                      className={`${colorMode === "light" ? "bg-[#E5E5E5]" : "bg-[#262626]"}`}
                    >
                      <Box className={`w-full flex`}>
                        {showBanner && <Banner />}
                        <Header />
                      </Box>
                    </SafeAreaView>,
                  title: 'Les Héraults de Lambert',
                }}

              />
              <Stack.Screen
                name="Inscription"
                component={() => <ConvensionInscriptionPage />} 
                options={{
                  header: () => 
                    <SafeAreaView
                      className={`${colorMode === "light" ? "bg-[#E5E5E5]" : "bg-[#262626]"}`}
                    >
                      <Box className={`w-full flex`}>
                        <Header />
                      </Box>
                    </SafeAreaView>,
                  title: 'Les Héraults de Lambert',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GluestackUIProvider>
      </ThemeContext.Provider>
    </>
  );
}