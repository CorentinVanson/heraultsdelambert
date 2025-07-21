import React from "react";
import {
  Box,
  Heading,
  HStack,
  Image,
} from "../../components/ui";

const HeraultsHomeFold = () => {
  return (
    <Box className="w-full flex items-center">
      <Image 
        className="absolute -z-10 w-full h-full border-b border-white opacity-30"
        source={require("../../assets/dark-knight.png")}/>
      <Box className="w-full md:w-3/4 flex-1 md:h-[calc(100vh-144px)] md:pr-12 md:pl-12 overflow-auto py-32">
        <Box className="pt-6 pb-2.5 px-8 md:px-20" id="home">
          <HStack className="w-full justify-around">
            <Heading size="xl" className="drop-shadow-md text-center text-6xl" style={{ fontFamily: 'Estonia_400Regular'}}>Bienvenue</Heading>
          </HStack>
        </Box>
        <Box className="pt-6 pb-2.5 px-4 md:px-20" id="home-2">
          <HStack className="w-full justify-around">
            <Heading size="xl" className="drop-shadow-md text-center text-6xl" style={{ fontFamily: 'Estonia_400Regular'}}>chez les héraults</Heading>
          </HStack>
        </Box>
        <Box className="pt-6 pb-2.5 px-4 md:px-20" id="home">
          <HStack className="w-full justify-around">
            <Heading size="md" className="drop-shadow-md text-center text-5xl" style={{ fontFamily: 'Estonia_400Regular'}}> 0ù les dés du destin rencontrent les pions de la stratégie</Heading>
          </HStack>
        </Box>
        <Box className="pt-6 pb-2.5 px-4 md:px-20" id="home">
          <HStack className="w-full justify-around">
            <Heading size="md" className="drop-shadow-md text-center text-5xl" style={{ fontFamily: 'Estonia_400Regular'}}>tissant des contes épiques autour de tables conviviales !</Heading>
          </HStack>
        </Box>
        <Box className="pt-6 pb-2.5 px-4 md:px-20" id="home">
          <HStack className="w-full justify-around">
            <Heading size="md" className="drop-shadow-md text-center text-5xl" style={{ fontFamily: 'Estonia_400Regular'}}> Venez donc, âmes aventureuses...</Heading>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default HeraultsHomeFold;
