import React from "react";
import { Box } from "@/components/ui";
import HeraultsEvenementsFold from "./HeraultsEvenementsFold";
import HeraultsHomeFold from "./HeraultsHomeFold";
import HeraultsPartenairesFold from "./HeraultsPartenairesFold";

const MainContent = () => {
  return (
    <>
      <HeraultsHomeFold />
      <Box className="w-full md:w-3/4 flex-1 md:h-[calc(100vh-144px)] md:pr-16 md:pl-8 overflow-auto px-4">
          <HeraultsEvenementsFold />
          <HeraultsPartenairesFold />
      </Box>
    </>
  );
};
export default MainContent;
