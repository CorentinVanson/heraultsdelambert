import React from "react";
import { Box } from "../components/ui";
import MainContent from "./main-content/MainContent";
import { ScrollView } from "react-native";

const Explorepage = () => {
  return (
    <>
      <ScrollView
       className="h-[1px]"
       >
        <Box
          className={`flex items-center`}
        >
          <MainContent />
        </Box>
      </ScrollView>
    </>
  );
};

export default Explorepage;
