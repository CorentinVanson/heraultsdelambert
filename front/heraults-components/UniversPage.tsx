import React, { useContext } from "react";
import { Box, Button, ButtonText, CloseIcon, Heading, Icon, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Text } from "../components/ui";
import { SafeAreaView, ScrollView } from "react-native";
import { ThemeContext } from "@/ColorMode";
import UniversContent, { WorldDto } from "./univers/UniversContent";

const Explorepage = () => {
  const { colorMode } = useContext(ThemeContext);
  
  return (
    <SafeAreaView
      className={`${
        colorMode === "light" ? "bg-herault-bg-light" : "bg-[#171717]"
      } flex-1 overflow-hidden font-serif`}
    >
      <ScrollView
        className="h-[1px] pt-0 md:pt-14"
        >
        <Box
          className={`flex p-10 pt-16 md:p-20`}
        >
          <UniversContent />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explorepage;
