import React, { useContext } from "react";
import { Box, Image } from "@/components/ui";
import { ThemeContext } from "@/App";

const HeraultsLogo = () => {
  const { colorMode } = useContext(ThemeContext);
  return (
    <Box style={{ filter: colorMode === 'dark' ? 'invert(100%) brightness(100%)' : '' }}>
      <Image
        source={require("../../assets/logo.svg")}
        alt="Heraultslogo"
        className="h-[100px] w-[100px]"
        
      />
    </Box>
  );
};

export default HeraultsLogo;
