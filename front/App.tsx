import "./global.css";
import React, { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import { GluestackUIProvider, SafeAreaView, ScrollView } from "./components/ui";
import { useFonts, Grenze_600SemiBold } from '@expo-google-fonts/grenze';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Linking from "expo-linking";
import Header from "./heraults-components/Header";
import HeraultsPage from "./heraults-components/page/HeraultsPage";
import ConventionInscriptionPage from "./heraults-components/page/ConventionInscriptionPage";
import { Loader } from "lucide-react-native";
import { ThemeContext } from "./ColorMode";
import ClubPage from "./heraults-components/ClubPage";
import LudothequePage from "./heraults-components/LudothequePage";
import UniversPage from "./heraults-components/UniversPage";
import UniqueUniversPage from "./heraults-components/UniqueUniversPage";
import { ConventionHome } from "./heraults-components/page/ConventionHome";
import HeaderConvention from "./heraults-components/HeaderConvention";
import { ConventionInfosPratiques } from "./heraults-components/page/ConventionInfosPratiques";
import { ConventionActivities } from "./heraults-components/page/ConventionActivities";
import { ConventionInscriptionPage2 } from "./heraults-components/page/ConventionInscriptionPage2";
import { Menu, MenuContext } from "./heraults-components/Menu";

let defaultTheme: "dark" | "light" = "light";

Linking.getInitialURL().then((url: any) => {
  let { queryParams } = Linking.parse(url) as any;
  defaultTheme = queryParams?.iframeMode ?? defaultTheme;
});

const Stack = createNativeStackNavigator();

const InscriptionWrapper = () => {
  const route = useRoute();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    let hasHidden = false;

    if ((route.params as any)?.hidden) {
      hasHidden = true;
    }

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.has("hidden")) {
        hasHidden = true;
      }
    }

    setShowForm(hasHidden);

    if (!hasHidden) {
      Linking.getInitialURL().then((url) => {
        if (!url) return;
        const query = url.split("?")[1];
        if (!query) return;
        const params = new URLSearchParams(query);
        if (params.has("hidden")) {
          setShowForm(true);
        }
      });
    }
  }, [route.params]);

  if (showForm) {
    return <ConventionInscriptionPage2 />;
  }

  return (
    <ScrollView className="font-serif">
      <main className="hidden-page" id="page-inscription-announcement">
        <section className="pt-48 pb-16 px-4 bg-[#273840] h-[100vh]">
          <div className="max-w-4xl mx-auto">
            <div className="card-glass p-8 md:p-12 rounded-[2rem] mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFA400]">Inscriptions Activités</h1>
              <p className="text-white text-lg mb-4">Ouverture des inscriptions le 18 avril.</p>
            </div>
          </div>
        </section>
      </main>
    </ScrollView>
  );
};

const config = {
  screens: {
    Home: '',
    Convention: {
      path: 'Convention',
      screens: {
        "ConventionHome": '',
        "Inscription": 'Inscription',
        "InfosPratiques": 'InfosPratiques',
        "Activities": 'Activities',
      }
    },
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

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = "fr";
      document.documentElement.setAttribute("translate", "no");
      document.documentElement.classList.add("notranslate");

      let existing = document.querySelector('meta[name="google"]');
      if (!existing) {
        const m = document.createElement("meta");
        m.name = "google";
        m.content = "notranslate";
        document.head.appendChild(m);
      }
    }
  }, []);

  const [colorMode, setColorMode] = React.useState<"dark" | "light">(
    defaultTheme
  );
  const [menuModalOpen, setMenuModalOpen] = React.useState(false);

  const [fontsLoaded] = useFonts({
    Grenze_600SemiBold,
  });

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenuModal = () => {
    setMenuModalOpen(!menuModalOpen);
  };


  if (!fontsLoaded) {
    return <Loader />
  }

  return (
    <>
      <MenuContext.Provider value={{ menuModalOpen, toggleMenuModal }}>
        <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
          <GluestackUIProvider mode={colorMode}>
            <NavigationContainer linking={linking}>
              <Stack.Navigator
                initialRouteName="Home">
                <Stack.Screen
                  name="Home"
                  component={HeraultsPage}
                  options={{
                    header: () => <Header showBanner={showBanner} />,
                    title: 'Les Héraults de Lambert',
                  }}

                />
                <Stack.Screen
                  name="Convention"
                  options={{
                    header: () => <HeaderConvention showBanner={false} />,
                    title: 'Héraults de Lambert - Convention',
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="ConventionHome" component={ConventionHome} options={{ headerShown: false, title: 'Héraults de Lambert - Convention' }} />
                      <Stack.Screen name="Activities" component={ConventionActivities} options={{ headerShown: false, title: 'Héraults de Lambert - Convention' }} />
                      <Stack.Screen name="InfosPratiques" component={ConventionInfosPratiques} options={{ headerShown: false, title: 'Héraults de Lambert - Convention' }} />
                      <Stack.Screen name="Inscription" component={InscriptionWrapper} options={{ headerShown: false, title: 'Héraults de Lambert - Convention' }} />
                    </Stack.Navigator>
                  )}
                </Stack.Screen>
                <Stack.Screen
                  name="Club"
                  component={ClubPage}
                  options={{
                    header: () => <Header showBanner={false} />,
                    title: 'Les Héraults de Lambert',
                  }}
                />
                <Stack.Screen
                  name="Ludotheque"
                  component={LudothequePage}
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
              <Menu />
            </NavigationContainer>
          </GluestackUIProvider>
        </ThemeContext.Provider>
      </MenuContext.Provider>
    </>
  );
}