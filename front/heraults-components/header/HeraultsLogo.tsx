import React, { useContext } from "react";
import { Box, Image, Link } from "@/components/ui";
import { ThemeContext } from "@/App";
import { useNavigation } from "@react-navigation/native";

const HeraultsLogo = () => {
  const navigation = useNavigation();
  const { colorMode } = useContext(ThemeContext);
  return (
    <Box className="flex-grow basis-0" style={{ filter: colorMode === 'dark' ? 'invert(100%) brightness(100%)' : '' }}>
      <Link onPress={() => navigation.navigate('Home')}>
        <Image
          source={require("../../assets/logo.svg")}
          alt="Heraultslogo"
          className="h-[100px] w-[100px]"
        />
      </Link>
    </Box>
  );
};

export default HeraultsLogo;
