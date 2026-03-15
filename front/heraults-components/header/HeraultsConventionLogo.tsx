import React from "react";
import { Box, Image, Link } from "@/components/ui";
import { useNavigation } from "@react-navigation/native";

const HeraultsConventionLogo = () => {
  const navigation = useNavigation();
  return (
    <Box className="md:flex-grow md:basis-0" style={{ filter: 'invert(100%) brightness(100%)' }}>
      <Link onPress={() => navigation.navigate('Convention', { screen: 'ConventionHome' })}>
        <Image
          source={require("../../assets/logo.svg")}
          alt="Heraultslogo"
          className="h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
        />
      </Link>
    </Box>
  );
};

export default HeraultsConventionLogo;
