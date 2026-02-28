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
import ToggleMode from "./header/ToggleMode";
import { ThemeContext } from "@/ColorMode";
import {
  Facebook,
  Instagram,
  MessageSquare
} from "lucide-react-native";
import Banner from "./Banner";
import { useNavigation } from "@react-navigation/native";
import HeraultsConventionLogo from "./header/HeraultsConventionLogo";
import { MobileConventionHeader } from "./MobileConventionHeader";

const HeaderConvention = React.memo(({ showBanner }: { showBanner: boolean }) => {
  const { colorMode } = useContext(ThemeContext);
  const [showDrawer, setShowDrawer] = useState(false);

  const navigation = useNavigation();
  return ( 
    <SafeAreaView
      className={`${colorMode === "light" ? "bg-primary-700 text-[#F0F4F6]" : "bg-herault-content"}`}
    >
      <Box className={`w-full flex`}>
        {showBanner && <Banner />}
        <Box className="fixed top-0 left-0 w-[100vw] z-20 flex justify-between items-center py-1 md:py-2 px-8 bg-primary-700 bg-opacity-90 backdrop-blur-sm shadow-[#F0F4F6] shadow-sm">
          <HStack className="w-full md:space-x-4 flex items-center justify-between md:justify-end">
            <HeraultsConventionLogo/>
            <Link className="text-[#F0F4F6] hover:text-secondary-500 transition-colors duration-300 hidden md:flex" onPress={() => navigation.navigate('Convention', { screen: 'ConventionHome' })}>Accueil</Link>
            <Link className="text-[#F0F4F6] hover:text-secondary-500 transition-colors duration-300 hidden md:flex" onPress={() => navigation.navigate('Convention', { screen: 'Activities' })}>Activités</Link>
            <Link className="text-[#F0F4F6] hover:text-secondary-500 transition-colors duration-300 hidden md:flex" onPress={() => navigation.navigate('Convention', { screen: 'InfosPratiques' })}>Infos Pratiques</Link>
            <Link className="text-[#F0F4F6] hover:text-secondary-500 transition-colors duration-300 hidden md:flex" onPress={() => navigation.navigate('Home')}>L'association</Link>
              <Link href="https://www.facebook.com/assojdrhdl" className="hidden md:flex" isExternal>
                <Icon
                  as={Facebook}
                  size="xl"
                  className="stroke-[#F0F4F6] w-5 h-5"
                />
              </Link>
              <Link href="https://www.instagram.com/heraultsdelambert/#" className="hidden md:flex" isExternal>
                <Icon
                  as={Instagram}
                  size="xl"
                  className="stroke-[#F0F4F6] w-5 h-5"
                />
              </Link>
              <Link href="https://discord.com/invite/ezYdJ7RT9k" className="hidden md:flex" isExternal>
                <Icon
                  as={MessageSquare}
                  size="xl"
                  className="stroke-[#F0F4F6] w-5 h-5"
                />
              </Link>
              { false && <ToggleMode /> /* TODO when darkmode is ready */ }
              <Link className="mx-auto md:mx-0">
                <Button action="secondary" className="p-3 rounded-lg font-bold text-lg" onPress={() => navigation.navigate('Convention', { screen: 'Inscription' })} >
                  <ButtonText>Inscriptions</ButtonText>
                </Button>
              </Link>
              <Link className="md:hidden flex" onPress={() => setShowDrawer(!showDrawer)}>
                <Icon
                  as={MenuIcon}
                  size="xl"
                  className="stroke-[#F0F4F6] w-5 h-5"
                />
              </Link>
          </HStack>
        </Box>
      </Box>
      <MobileConventionHeader showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </SafeAreaView>
  );
});
export default HeaderConvention;
