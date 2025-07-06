import React from "react";
import { Box, HStack } from "../components/ui";
import Banner from "./Banner";
import Header from "./Header";
import MainContent from "./main-content/MainContent";
import { ScrollView } from "react-native";

const Explorepage = ({ activeTab, setActiveTab }: any) => {
  const showBanner = false;
  return (
    <>
      <Box className={`w-full ${activeTab != "Profile" ? "flex" : "hidden"}`}>
        {/* top banner */}
        {showBanner && <Banner />}
        {/* header */}
        <Header />
      </Box>

      <ScrollView
       className="h-[1px]"
       >
        <Box
          className={`flex items-center ${activeTab !== "Profile" ? "flex" : "hidden"}`}
        >
          <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
        </Box>
      </ScrollView>
    </>
  );
};

export default Explorepage;
