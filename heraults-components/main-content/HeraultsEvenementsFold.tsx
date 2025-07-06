import React, { useContext } from "react";
import {
  Box,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from "../../components/ui";
import { ChevronRight } from "lucide-react-native";
import { ScrollView } from "react-native";
import { Heading } from "@/components/ui/heading/index.web";
import { ThemeContext } from "@/App";

const tabsData = [
  {
    name: "Jeu de rôle",
    data: [
      {
        title: "L'appel des héraults",
        src: "https://heraultsdelambert.fr/wp-content/uploads/2024/12/affiche-AppelHeraults.png",
        location: "Ferme du Mont Garin 210 Rue de Verlinghem, Lambersart",
        fromDate: "2025-06-17T08:00:00.000Z",
        toDate: "2025-06-18T16:00:00.000Z",
        content: undefined,
      },
      {
        title: "Vermine",
        src: "https://heraultsdelambert.fr/wp-content/uploads/2019/05/vermine-une.jpg",
        location: "Centre Jules Maillot 12 rue Champètre, Lambersart",
        fromDate: "2025-01-18T12:00:00.000Z",
        toDate: "2025-01-18T21:00:00.000Z",
        content: undefined,
      },
      {
        title: "L'empire des cerisiers",
        src: "https://heraultsdelambert.fr/wp-content/uploads/2019/05/l-empire-des-cerisiers.webp",
        location: "Centre Jules Maillot 12 rue Champètre, Lambersart",
        fromDate: "2024-12-07T12:00:00.000Z",
        toDate: "2024-12-07T21:00:00.000Z",
        content: undefined,
      },
    ],
  },
  {
    name: "Jeu de plateau",
    data: [
      {
        title: "L'appel des héraults",
        src: "https://heraultsdelambert.fr/wp-content/uploads/2024/12/affiche-AppelHeraults.png",
        location: "Ferme du Mont Garin 210 Rue de Verlinghem, Lambersart",
        fromDate: "2025-06-17T08:00:00.000Z",
        toDate: "2025-06-18T16:00:00.000Z",
        content: undefined,
      },
      {
        title: "Nemesis",
        src: "https://heraultsdelambert.fr/wp-content/uploads/2019/05/nemesis-retaliation-core-pledge-special-edition-retail-pre-order-edition-kickstarter-board-game-awaken-realms-44191724896408_400x.webp",
        location: "Centre Jules Maillot 12 rue Champètre, Lambersart",
        fromDate: "2025-01-10T16:00:00.000Z",
        toDate: "2025-01-10T20:00:00.000Z",
        content: undefined,
      },
      {
        title: "Digimon",
        src: "https://heraultsdelambert.fr/wp-content/uploads/2019/05/s589104587340134390_cOI5TB24YKDSGD6YYTGRH6XK7_iQZ2ABU2EIEPW533GXGJRMGHI_w640.webp",
        location: "Centre Jules Maillot 12 rue Champètre, Lambersart",
        fromDate: "2024-12-06T16:00:00.000Z",
        toDate: "2024-12-06T21:00:00.000Z",
        content: undefined,
      },
    ],
  },
];

const tabs = tabsData.map(tab => ({ title: tab.name }));

const HeraultsEvenementsFold = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const { colorMode } = useContext(ThemeContext);
  return (
    <Box id="evenements">
      <Box className="pt-6 pb-2.5 px-4 md:px-0">
        <HStack className="w-full items-center justify-between">
          <Heading size="xl">Evénements</Heading>
        </HStack>
      </Box>
      <iframe src="https://calendar.google.com/calendar/embed?src=heraultsdelambert%40gmail.com&amp;ctz=Europe%2FParis" className="w-full h-96 sm:h-[550px]" style={{border: "0px", filter: colorMode === 'dark' ? 'invert(100%) brightness(100%)' : ''}}></iframe>
      <Box className="pb-8 px-4 md:px-0">
        <HeraultsInfoTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabPanelData activeTab={activeTab} />
      </Box>
    </Box>
  );
};

const HeraultsInfoTabs = ({ tabs, activeTab, setActiveTab }: any) => {
  return (
    <Box className="border-b border-outline-50 md:border-b-0 md:border-transparent">
      <Box className="py-5">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space="lg" className="mx-0.5 xl:gap-5 2xl:gap-6">
            {tabs.map((tab: any) => {
              return (
                <Pressable
                  key={tab.title}
                  className={`my-0.5 py-1 ${
                    activeTab === tab ? "border-b-[3px]" : "border-b-0"
                  } border-outline-900 hover:border-b-[3px] ${
                    activeTab === tab
                      ? "hover:border-outline-900"
                      : "hover:border-outline-200"
                  } `}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text
                    size="sm"
                    className={`${
                      activeTab === tab
                        ? "text-typography-900"
                        : "text-typography-600"
                    } font-medium`}
                  >
                    {tab.title}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const TabPanelData = ({ activeTab }: any) => {
  return (
    <VStack className="lg:flex-row">
      {tabsData.map((tab, index) => {
        const tabArrs = chunk(tab.data, 3);
        return tabArrs.map((tabArr) => (
          <Box key={index} className="lg:flex-row">
            {tab.name.toLowerCase() === activeTab.title.toLowerCase() &&
              tabArr.map((image: any, index: any) => {
                return (
                  <Box
                    key={index}
                    className={`flex-1 my-2 lg:my-0 ${
                      index === 0 ? "lg:ml-0" : "lg:ml-2"
                    } ${index === tabsData.length - 1 ? "lg:mr-0" : "lg:mr-2"}`}
                  >
                    <Pressable className="w-full">
                      {(props: any) => {
                        return (
                          <>
                            <Box className="overflow-hidden rounded-md h-72">
                              <Image
                                source={image.src}
                                className={`w-full h-72 ${
                                  props.hovered
                                    ? "scale-[1.04] opacity-90"
                                    : "scale-100 opacity-100"
                                }`}
                                alt="Explore"
                              />
                            </Box>
                            {props.hovered && (
                              <Box className="absolute bg-[#181718] opacity-30 w-full h-full cursor-pointer" />
                            )}
                            <Box
                              className={`absolute top-[45%] bg-transparent rounded border border-white self-center content-center py-1.5 px-4 flex-row ${
                                props.hovered ? "flex" : "hidden"
                              }`}
                            >
                              <Text className="text-white">Détails</Text>
                              <Icon
                                as={ChevronRight}
                                size="sm"
                                className="self-center"
                                color="white"
                              />
                            </Box>
                          </>
                        );
                      }}
                    </Pressable>

                    <HStack className="justify-between py-2 items-start">
                      <VStack space="sm" className="flex-1">
                        <Text className="font-semibold text-typography-900">
                          {image.title}
                        </Text>
                        <Text size="sm" className="text-typography-500">
                          {image.location}
                        </Text>
                        <HStack>
                          <Text
                            size="sm"
                            className="font-semibold text-typography-900"
                          >
                            {new Date(image.fromDate).toLocaleDateString()} - {new Date(image.toDate).toLocaleDateString()}
                          </Text>
                        </HStack>
                      </VStack>
                    </HStack>
                  </Box>
                );
              })}
          </Box>
        ));
      })}
    </VStack>
  );
};
export default HeraultsEvenementsFold;
