import React, { useContext } from "react";
import {
  Box,
  Button,
  ButtonText,
  HStack,
  Icon,
  Link,
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

const Header = React.memo(({ showBanner }: { showBanner: boolean }) => {
  const { colorMode } = useContext(ThemeContext);
  const navigation = useNavigation();
  return ( 
    <SafeAreaView
      className={`${colorMode === "light" ? "bg-herault-bg-light text-primary-700" : "bg-herault-content"}`}
    >
      <Box className={`w-full flex`}>
        {showBanner && <Banner />}
        <Box className="fixed top-0 left-0 w-full z-20 flex justify-between items-center py-1 md:py-2 px-8 bg-herault-bg-light bg-opacity-90 backdrop-blur-sm shadow-md">
          <HStack className="w-full space-x-4 flex items-center">
            <HeraultsLogo/>
            <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 invisible md:visible" onPress={() => navigation.navigate('Club')}>Le Club</Link>
            <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 invisible md:visible" onPress={() => navigation.navigate('Ludotheque')}>Ludothèque</Link>
            <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 invisible md:visible" onPress={() => navigation.navigate('Inscription')}>Convention</Link>
              <Link href="https://www.facebook.com/assojdrhdl" className="invisible md:visible">
                <Icon
                  as={Facebook}
                  size="xl"
                  className="stroke-background-700 w-5 h-5"
                />
              </Link>
              <Link href="https://www.instagram.com/heraultsdelambert/#" className="invisible md:visible">
                <Icon
                  as={Instagram}
                  size="xl"
                  className="stroke-background-700 w-5 h-5"
                />
              </Link>
              <Link href="https://discord.com/invite/ezYdJ7RT9k" className="invisible md:visible">
                <Icon
                  as={MessageSquare}
                  size="xl"
                  className="stroke-background-700 w-5 h-5"
                />
              </Link>
              { false && <ToggleMode /> /* TODO when darkmode is ready */ }
              <Button className="bg-secondary-500 p-3 rounded-lg font-bold text-lg">
                <ButtonText>Adhérer</ButtonText>
              </Button>

          </HStack>
        </Box>
      </Box>
    </SafeAreaView>
  );
});
export default Header;
