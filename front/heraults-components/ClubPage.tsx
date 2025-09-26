import React, { useContext } from "react";
import { Box } from "../components/ui";
import { SafeAreaView, ScrollView } from "react-native";
import { ThemeContext } from "@/ColorMode";
import ClubContent from "./club/ClubContent";

const Explorepage = () => {
  const { colorMode } = useContext(ThemeContext);
  
  return (
    <SafeAreaView
      className={`${
        colorMode === "light" ? "bg-white" : "bg-[#171717]"
      } flex-1 overflow-hidden font-serif`}
    >
      <ScrollView
        className="h-[1px] pt-0 md:pt-32"
        >
        <Box
          className={`flex p-10 pt-16 md:p-20`}
        >
          <ClubContent />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explorepage;
