import React from "react";
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
import { Heading } from "@/components/ui/heading/index.web";

const tabsData = [
  {
    title: "Thylgames",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/467342613_535349895988333_7644348880963533883_n-300x300.jpg",
    content: undefined,
  },
  {
    title: "Les quatre chemins",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/main.png",
    content: undefined,
  },
  {
    title: "38 CC et ludo gîte L'inter-Lude",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/6046ba51b393f673914281.avif",
    content: undefined,
  },
  {
    title: "Aleades",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/380152242_122117414576028103_9199796488951083932_n.png",
    content: undefined,
  },
  {
    title: "Les Canonniers",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/481195971_1146870303898480_1836080694960457085_n-300x166.jpg",
    content: undefined,
  },
];

const HeraultsPartenairesFold = () => {
  return (
    <Box id="partenaires">
      <Box className="pt-6 pb-2.5 px-4 md:px-0">
        <HStack className="w-full items-center justify-between">
          <Heading size="xl">Partenaires</Heading>
        </HStack>
      </Box>
      <Box className="pb-8 px-4 md:px-0">
        <TabPanelData />
      </Box>
    </Box>
  );
};

function chunk<T>(arr: T[], size: number) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}

const TabPanelData = ({ activeTab }: any) => {
  const rows = chunk(tabsData, 3);
  return (
    rows.map(row => 
      <VStack className="lg:flex-row">
        {row.filter(image => !!image).map((image: any, index: any) => {
          return (
            <Box key={index} className="lg:flex-row flex-1">
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
                  </VStack>
                </HStack>
              </Box>
            </Box>
          );
        })}
      </VStack>
    )
  );
};
export default HeraultsPartenairesFold;
