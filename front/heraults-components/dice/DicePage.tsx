import React, { useContext } from "react";
import { Box } from "../../components/ui";
import { SafeAreaView, ScrollView } from "react-native";
import { ThemeContext } from "@/ColorMode";
import DiceRoller from "./Dice";

const DicePage = () => {
  const { colorMode } = useContext(ThemeContext);
  
  return (
    <SafeAreaView
      className={`${
        colorMode === "light" ? "bg-white" : "bg-[#171717]"
      } flex-1 overflow-hidden font-serif`}
    >
      <ScrollView
        className=""
        >
        <Box
          className={`pt-28 h-[100vh] w-[100vw]`}
        >
          <DiceRoller />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DicePage;
