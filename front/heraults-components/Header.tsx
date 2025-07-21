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
import {
  Facebook,
  Instagram,
  MessageSquare
} from "lucide-react-native";

const Header = React.memo(() => {
  return (
    <>
      <Box className="px-4 md:px-16 w-full border-b border-outline-100 min-h-15 md:min-h-20 flex">
        <HStack className="flex items-center justify-between mx-auto w-full">
          <HeraultsLogo/>
          <HeaderTabs/>
          <HStack space="lg" className="flex-grow basis-0 items-center pr-1.5 hidden md:flex justify-end">
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
    </>
  );
});
export default Header;
