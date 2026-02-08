import React, { useContext, useEffect } from "react";
import { Box, Button, ButtonText, Center, Link, Spinner } from "../components/ui";
import { SafeAreaView, ScrollView } from "react-native";
import { ThemeContext } from "@/ColorMode";
import { WorldDto } from "./univers/UniversContent";
import { getWorld } from "@/api/worlds";
import { useNavigation } from "@react-navigation/native";
import colors from "tailwindcss/colors";

const UniqueUniversPage = ({ route }) => {
  const [univer, setUniver] = React.useState<WorldDto>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const { colorMode } = useContext(ThemeContext);
  const navigation = useNavigation();
  const { id } = route.params;
  
    useEffect(() => {
      getWorld(id).then(data => {
        setUniver(data);
        setLoading(false);
      });
    }, []);

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
          className={`flex p-10 pt-20 md:p-20`}
        >
          <div>
            <Button variant="outline" action="primary" className="mb-8" onPress={() => { navigation.navigate('Univers', { screen: 'Liste des Univers' }) }}>
              <ButtonText className="text-[#273840] text-lg">← Retour aux Univers</ButtonText>
            </Button>
          </div>
          {
          loading ? <Center className="h-full w-full"><Spinner size="small" color={colors.gray[500]} /></Center>
          : 
          <>
            <div className="relative flex items-end rounded-xl overflow-hidden mb-12 shadow-gray-700">
              <img src={univer?.imgUrl} alt="Image de l'univers Donjons et Dragons" className="object-cover min-h-full min-w-full absolute -z-10" />
              <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-t from-herault-bg-dark-transparent to-transparent"></div>
              <div className="relative z-10 p-8 text-primary-50 h-full w-full flex flex-col justify-start">
                  <h2 className="grenze text-7xl lg:text-9xl mb-2 text-[#FFA400]" translate="no">{univer?.name}</h2>
                  <p className="text-xl lg:text-3xl font-sans">{univer?.smallDesc}</p>
                  
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 p-4 bg-black bg-opacity-40 rounded-lg">
                        <div className="text-center">
                            <span className="text-sm font-light uppercase opacity-75">Catégorie</span>
                            <p className="text-2xl font-bold">{univer?.category}</p>
                        </div>
                        <div className="text-center">
                            <span className="text-sm font-light uppercase opacity-75">Maître(s) du Jeu</span>
                            <div className="text-2xl font-bold" translate="no">{univer?.mjs.map(mj => <p>{mj}</p>)}</div>
                        </div>
                        <div className="text-center">
                            <span className="text-sm font-light uppercase opacity-75">Type de partie</span>
                            <p className="text-2xl font-bold">{univer?.type}</p>
                        </div>
                        <div className="text-center">
                            <span className="text-sm font-light uppercase opacity-75">Lien Discord</span>
                            {
                              univer?.links.map(link => <Link className="text-2xl font-bold hover:text-[#FFA400] transition-colors cursor-pointer" href={link} isExternal>#{univer?.name}</Link>)
                            }
                        </div>
                    </div>
              </div>
            </div>
          
            <div className="bg-[#273840] p-8 rounded-xl shadow-lg text-[#F1F7ED] mb-12">
                <h2 className="grenze text-4xl mb-4 text-[#FFA400]">⚠️ Sujets Sensibles (Safety Tools)</h2>
                <div className="flex flex-wrap gap-3">
                  {
                    univer?.tags.map(tag => 
                      <span key={tag} className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-medium">{tag}</span>
                    )
                  }
                </div>
                <p className="text-sm mt-4 opacity-80">
                    Si l'un de ces sujets vous met mal à l'aise, veuillez en informer le Maître du Jeu avant la session. La sécurité de tous est notre priorité.
                </p>
            </div>

            <div className="lg:mx-32 2xl:mx-72">
              <h2 className="grenze text-5xl mb-6">Description de l'univers</h2>
              {univer?.bigDesc?.split('\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </>}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UniqueUniversPage;
