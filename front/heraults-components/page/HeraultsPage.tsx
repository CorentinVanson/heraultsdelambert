import React, { useContext } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Box } from "../../components/ui";
import MobileModeChangeButton from "../MobileModeChangeButton";
import Explorepage from "../ExplorePage";
import { ThemeContext } from "@/App";

const HeraultsPage = () => {
  const { colorMode } = useContext(ThemeContext);
  return (
    <SafeAreaView
      className={`${
        colorMode === "light" ? "bg-white" : "bg-[#171717]"
      } flex-1 overflow-hidden`}
    >
      <Box className="flex-1">
        <StatusBar />
        <Box className="flex-1">
          <Explorepage />
          <MobileModeChangeButton />
        </Box>
      </Box>
    </SafeAreaView>
  );
};
export default HeraultsPage;
