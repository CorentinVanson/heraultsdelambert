import React, { useContext } from "react";
import {
  Box,
  HStack,
  Icon,
  Link,
} from "../components/ui";
import HeaderTabs from "./header/HeaderTabs";
import HeraultsLogo from "./header/HeraultsLogo";
import ToggleMode from "./header/ToggleMode";
import { ThemeContext } from "@/App";
import {
  Facebook,
  Instagram,
  MessageSquare
} from "lucide-react-native";

const Header = React.memo(() => {
  const { colorMode } = useContext(ThemeContext);
  return (
    <>
      {/* big screen */}
      <Box className="px-16 w-full border-b hidden md:flex border-outline-100 min-h-20">
        <HStack className="items-center justify-between mx-auto w-full">
          <HeraultsLogo />
          <HeaderTabs />
          <HStack space="lg" className="items-center pr-1.5">
            <Link href="https://www.facebook.com/assojdrhdl">
              <Icon
                as={Facebook}
                size="xl"
                className="stroke-background-700 w-5 h-5"
              />
            </Link>
            <Link href="https://www.instagram.com/heraultsdelambert/#">
              <Icon
                as={Instagram}
                size="xl"
                className="stroke-background-700 w-5 h-5"
              />
            </Link>
            <Link href="https://discord.com/invite/ezYdJ7RT9k">
              <Icon
                as={MessageSquare}
                size="xl"
                className="stroke-background-700 w-5 h-5"
              />
            </Link>
            <ToggleMode />
          </HStack>
        </HStack>
      </Box>
      {/* small screen 
      <Box className="p-5 md:hidden w-full">
        <Button size="md" variant="solid" action="primary">
          <ButtonIcon as={StarIcon}/>
          <ButtonText>Adhérer</ButtonText>
        </Button>
      </Box>*/}
    </>
  );
});
export default Header;
