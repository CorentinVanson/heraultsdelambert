import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Box, Center, Grid, GridItem, Spinner } from "../../components/ui";
import { ThemeContext } from "@/ColorMode";
import { getGames } from "@/api/game";
import Game, { GameDto } from "../Game";
import colors from "tailwindcss/colors"

const ConvensionInscriptionPage = () => {
  const { colorMode } = useContext(ThemeContext);
  const [ games, setGames ] = useState<GameDto[]>([]);
  const [ loading, setLoading ] = useState<boolean>(false);

  const getAllGames = async () => {
    setLoading(true);
    setGames(await getGames());
    setLoading(false);
  }

  useEffect(() => {
    getAllGames()
  }, [])

  return (
    <SafeAreaView
      className={`${
        colorMode === "light" ? "bg-herault-bg-light" : "bg-[#171717]"
      } flex-1 overflow-hidden font-serif`}
    >
      {loading ? <Center className="h-full w-full"><Spinner size="small" color={colors.gray[500]} /></Center>
      : <ScrollView
        className="h-[1px] pt-0 md:pt-14"
        >
        <Box
          className={`flex items-center p-3 pt-16 md:p-20`}
        >
          <section className="py-12">
              <h1 className="grenze text-7xl mb-4 text-[#273840]">La Convention</h1>
              <p className="text-xl font-light max-w-2xl">La Convention annuelle des Héraults de Lambersart, un événement incontournable pour les amateurs de jeux de rôle et de société.</p>
          </section>
          <Grid className="w-full md:w-3/4 md:h-[calc(100vh-144px)] gap-1"
            _extra={{
              className: "grid-cols-1 lg:grid-cols-2",
            }}>
            {
              games.map(game => 
                <GridItem
                  _extra={{
                    className: "col-span-1",
                  }}>
                  <Game updateGames={getAllGames} game={game} key={`${game.name}-${game.dateStart}:${game.timeStart}-${game.timeEnd}`}/>
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
