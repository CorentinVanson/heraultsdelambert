import React, { useEffect } from "react";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Center,
  Link,
  Spinner,
} from "../../components/ui";
import { getPartners } from "@/api/partner";
import colors from "tailwindcss/colors";

export type PartnerDto = {
  id: number;
  name?: string;
  category?: string;
  image?: string;
  socialLink?: string;
};

const HeraultsPartenairesFold = () => {
  return <section className="py-20 text-center bg-[#282D30] text-white">
      <h2 className="grenze text-6xl mb-10">Nos Partenaires</h2>
      <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-[slide_30s_linear_infinite]">
              <div className="inline-flex space-x-12">
                  <TabPanelData />
              </div>
          </div>
      </div>
  </section>
};

const TabPanelData = () => {
  const [tabsData, setTabsData] = React.useState<PartnerDto[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    getPartners().then(data => {
      setTabsData(data);
      setLoading(false);
    });
  }, []);

  return loading ? <Center className="h-full w-[100vw]"><Spinner size="small" color={colors.gray[500]} /></Center>
      : (
    [...tabsData, ...tabsData, ...tabsData].map(partenaire => 
      <Link href={partenaire.socialLink} isExternal className="flex flex-col items-center space-y-2">
        <Avatar size="2xl">
          <AvatarFallbackText>{partenaire.name}</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: partenaire.image,
            }}
          />
        </Avatar>
        <span className="text-center">{partenaire.name}</span>
      </Link>
    )
  );
};
export default HeraultsPartenairesFold;
