import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  ButtonText,
  HStack,
  Icon,
  Link,
  MenuIcon,
  SafeAreaView,
} from "../components/ui";
import HeraultsLogo from "./header/HeraultsLogo";
import ToggleMode from "./header/ToggleMode";
import { ThemeContext } from "@/ColorMode";
import {
  Facebook,
  Instagram,
  MessageSquare
} from "lucide-react-native";
import Banner from "./Banner";
import { useNavigation } from "@react-navigation/native";
import { MobileHeader } from "./MobileHeader";

const Header = React.memo(({ showBanner }: { showBanner: boolean }) => {
  const { colorMode } = useContext(ThemeContext);
  const [showDrawer, setShowDrawer] = useState(false);

  const navigation = useNavigation();
  return ( 
    <SafeAreaView
      className={`${colorMode === "light" ? "bg-herault-bg-light text-primary-700" : "bg-herault-content"}`}
    >
      <Box className={`w-full flex`}>
        {showBanner && <Banner />}
        <Box className="fixed top-0 left-0 w-[100vw] z-20 flex justify-between items-center py-1 md:py-2 px-8 bg-herault-bg-light bg-opacity-90 backdrop-blur-sm shadow-md">
          <HStack className="w-full md:space-x-4 flex items-center justify-between md:justify-end">
            <HeraultsLogo/>
            <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 hidden md:flex" onPress={() => navigation.navigate('Home')}>Accueil</Link>
            <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 hidden md:flex" onPress={() => navigation.navigate('Club')}>Le Club</Link>
            <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 hidden md:flex" onPress={() => navigation.navigate('Univers')}>Univers</Link>
            <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 hidden md:flex" onPress={() => navigation.navigate('Ludotheque')}>Ludothèque</Link>
            <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 hidden md:flex" onPress={() => navigation.navigate('Inscription')}>Convention</Link>
            <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 hidden md:flex" onPress={() => navigation.navigate('Dices')}>Dés</Link>
              <Link href="https://www.facebook.com/assojdrhdl" className="hidden md:flex" isExternal>
                <Icon
                  as={Facebook}
                  size="xl"
                  className="stroke-background-700 w-5 h-5"
                />
              </Link>
              <Link href="https://www.instagram.com/heraultsdelambert/#" className="hidden md:flex" isExternal>
                <Icon
                  as={Instagram}
                  size="xl"
                  className="stroke-background-700 w-5 h-5"
                />
              </Link>
              <Link href="https://discord.com/invite/ezYdJ7RT9k" className="hidden md:flex" isExternal>
                <Icon
                  as={MessageSquare}
                  size="xl"
                  className="stroke-background-700 w-5 h-5"
                />
              </Link>
              { false && <ToggleMode /> /* TODO when darkmode is ready */ }
              <Link href="https://www.helloasso.com/associations/heraults-de-lambert/adhesions/inscriptions-2022-2023" className="mx-auto md:mx-0" isExternal>
                <Button className="bg-secondary-500 p-3 rounded-lg font-bold text-lg">
                  <ButtonText>Adhérer</ButtonText>
                </Button>
              </Link>
              <Link className="md:hidden flex" onPress={() => setShowDrawer(!showDrawer)}>
                <Icon
                  as={MenuIcon}
                  size="xl"
                  className="stroke-background-700 w-5 h-5"
                />
              </Link>
          </HStack>
        </Box>
      </Box>
      <MobileHeader showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </SafeAreaView>
  );
});
export default Header;
