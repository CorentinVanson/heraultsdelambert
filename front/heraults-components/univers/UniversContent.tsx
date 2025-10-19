import { getWorlds } from "@/api/worlds";
import { Badge, BadgeText, Center, Spinner } from "@/components/ui";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import colors from "tailwindcss/colors";

export type WorldDto =  {
    name: string;
    category: string;
    smallDesc: string;
    bigDesc: string;
    tags: string[];
    mjs: string[];
    links: string[];
    imgUrl: string;
}

const UniversContent = () => {
  const [univers, setUnivers] = React.useState<WorldDto[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
    const navigation: any = useNavigation();

  useEffect(() => {
    getWorlds().then(data => {
      setUnivers(data);
      setLoading(false);
    });
  }, []);

  return loading ? <Center className="h-full w-full"><Spinner size="small" color={colors.gray[500]} /></Center>
      : (
    <>
        <section className="container-fluid py-12">
            <h1 className="grenze text-7xl mb-4 text-[#273840]">Nos Univers de Jeu de Rôle</h1>
            <p className="text-xl font-light max-w-2xl">Découvrez les mondes que nous explorons et les jeux que nous maîtrisons au sein du club.</p>
        </section>

        <section className="container-fluid py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    univers.map(univer => 
                        <div onClick={() => navigation.navigate('Description de Univers', { id: univer.name })} className="relative h-96 flex items-end rounded-xl overflow-hidden shadow-gray-700 cursor-pointer" key={univer.id}>
                            <img src={univer.imgUrl} alt="Image de l'univers Donjons et Dragons" className="object-cover min-h-full min-w-full absolute -z-10" />
                            <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-t from-herault-bg-dark-transparent to-transparent"></div>
                            <div className="relative z-10 p-8 text-primary-50 h-full w-full flex flex-col justify-end">
                                <div className="self-end mb-auto flex">
                                    {
                                    univer.tags.map(warning => 
                                        <Badge size="lg" variant="solid" action="muted" className="mx-2 bg-indicator-secondary" key={warning}>
                                            <BadgeText>{warning}</BadgeText>
                                        </Badge>)
                                    }
                                </div>
                                <h2 className="grenze text-5xl mb-2 text-[#FFA400]">{univer.name}</h2>
                                <p className="text-lg">{univer.smallDesc}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    </>
  );
};
export default UniversContent;
