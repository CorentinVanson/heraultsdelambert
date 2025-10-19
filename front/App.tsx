import "./global.css";
import React from "react";
import { GluestackUIProvider, SafeAreaView } from "./components/ui";
import { useFonts, Grenze_600SemiBold } from '@expo-google-fonts/grenze';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Linking from "expo-linking";
import Header from "./heraults-components/Header";
import HeraultsPage from "./heraults-components/page/HeraultsPage";
import ConvensionInscriptionPage from "./heraults-components/page/ConvensionInscriptionPage";
import { Loader } from "lucide-react-native";
import { ThemeContext } from "./ColorMode";
import ClubPage from "./heraults-components/ClubPage";
import LudothequePage from "./heraults-components/LudothequePage";
import UniversPage from "./heraults-components/UniversPage";
import UniqueUniversPage from "./heraults-components/UniqueUniversPage";

let defaultTheme: "dark" | "light" = "light";

Linking.getInitialURL().then((url: any) => {
  let { queryParams } = Linking.parse(url) as any;
  defaultTheme = queryParams?.iframeMode ?? defaultTheme;
});

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Home: '',
    Inscription: 'Inscription',
    Club: 'Club',
    Ludotheque: 'Ludotheque',
    Univers: {
      path: 'Univers',
      screens: {
        "Liste des Univers": '',
        "Description de Univers": ':id',
      }
    }
  },
};

const linking = {
  prefixes: ["http://localhost:8081", "https://heraultsdelambert-1037528676095.europe-west1.run.app"],
  config,
}

export default function App() {
  const showBanner = false;

  const [colorMode, setColorMode] = React.useState<"dark" | "light">(
    defaultTheme
  );
  
  const [fontsLoaded] = useFonts({
    Grenze_600SemiBold,
  });

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };


  if (!fontsLoaded) {
    return <Loader />
  }

  return (
    <>
      <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
        <GluestackUIProvider mode={colorMode}>
          <NavigationContainer linking={linking}>
            <Stack.Navigator
              initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={() => <HeraultsPage />}
                options={{
                  header: () => <Header showBanner={showBanner} />,
                  title: 'Les Héraults de Lambert',
                }}

              />
              <Stack.Screen
                name="Inscription"
                component={() => <ConvensionInscriptionPage />} 
                options={{
                  header: () => <Header showBanner={false} />,
                  title: 'Les Héraults de Lambert',
                }}
              />
              <Stack.Screen
                name="Club"
                component={() => <ClubPage />} 
                options={{
                  header: () => <Header showBanner={false} />,
                  title: 'Les Héraults de Lambert',
                }}
              />
              <Stack.Screen
                name="Ludotheque"
                component={() => <LudothequePage />} 
                options={{
                  header: () => <Header showBanner={false} />,
                  title: 'Les Héraults de Lambert',
                }}
              />
              <Stack.Screen
                name="Univers"
                options={{
                  header: () => <Header showBanner={false} />,
                  title: 'Les Héraults de Lambert',
                }}
              >
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen name="Liste des Univers" component={() => <UniversPage />} options={{ headerShown: false }} />
                    <Stack.Screen name="Description de Univers" component={UniqueUniversPage} options={{ header: () => <Header showBanner={false} /> }} />
                  </Stack.Navigator>
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </GluestackUIProvider>
      </ThemeContext.Provider>
    </>
  );
}