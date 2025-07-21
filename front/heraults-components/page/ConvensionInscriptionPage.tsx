import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Box, Center, Grid, GridItem, Spinner } from "../../components/ui";
import { ThemeContext } from "@/App";
import Game, { GameDto } from "../Game";
import colors from "tailwindcss/colors"

const ConvensionInscriptionPage = () => {
  const { colorMode } = useContext(ThemeContext);
  const [ games, setGames ] = useState<GameDto[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);

  const getGames = async () => {
    setLoading(true);
    setGames(await (await fetch("http://localhost:3000/api/games")).json() as unknown as GameDto[]);
    setLoading(false);
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <SafeAreaView
      className={`${
        colorMode === "light" ? "bg-white" : "bg-[#171717]"
      } flex-1 overflow-hidden`}
    >
      {loading ? <Center className="h-full w-full"><Spinner size="small" color={colors.gray[500]} /></Center>
      : <ScrollView
        className="h-[1px]"
        >
        <Box
          className={`flex items-center`}
        >
          <Grid className="w-full md:w-3/4 md:h-[calc(100vh-144px)] gap-1"
            _extra={{
              className: "grid-cols-1 md:grid-cols-2",
            }}>
            {
              games.map(game => 
                <GridItem
                  _extra={{
                    className: "col-span-1",
                  }}>
                  <Game updateGames={getGames} game={game} key={`${game.name}-${game.dateStart}:${game.timeStart}-${game.timeEnd}`}/>
                </GridItem>
              )
            }
          </Grid>
        </Box>
      </ScrollView>}
    </SafeAreaView>
  );
};
export default ConvensionInscriptionPage;
