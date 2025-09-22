import React, { useContext } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Box } from "../../components/ui";
import MobileModeChangeButton from "../MobileModeChangeButton";
import Explorepage from "../ExplorePage";
import { ThemeContext } from "@/ColorMode";

const HeraultsPage = () => {
  const { colorMode } = useContext(ThemeContext);
  return (
    <SafeAreaView
      className={`${
        colorMode === "light" ? "bg-herault-bg-light" : "bg-primary-700"
      } flex-1 overflow-hidden font-serif`}
    >
      <Box className="flex-1">
        <StatusBar />
        <Box className="flex-1">
          <Explorepage />
          {false && <MobileModeChangeButton /> /* TODO when darkmode is ok*/}
        </Box>
      </Box>
    </SafeAreaView>
  );
};
export default HeraultsPage;
