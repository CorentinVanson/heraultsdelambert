import React from "react";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "../../components/ui";

const tabsData = [
  {
    title: "Obhéa Editions",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/07/grecka_annonce_jdr-270x152.jpg",
    category: 'Auteur/Editeur',
    content: undefined,
  },
  {
    title: "Aether Lab",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/05/Sans-titre-2-150x150.png",
    category: 'Auteur/Editeur',
    content: undefined,
  },
  {
    title: "Cédric Lameire",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/05/CedricLamiere-288x300.webp",
    category: 'Auteur/Editeur',
    content: undefined,
  },
  {
    title: "Arthur Morgan",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/04/arthur-150x150.png",
    category: 'Auteur/Editeur',
    content: undefined,
  },
  {
    title: "Tom Logan",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/tom-logan-150x150.png",
    category: 'Auteur/Editeur',
    content: undefined,
  },
  {
    title: "Catherine Loiseau",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/hydralune-1-150x150.png",
    category: 'Auteur/Editeur',
    content: undefined,
  },
  {
    title: "Tondy",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/07/Image1-300x253.png",
    category: 'Createur',
    content: undefined,
  },
  {
    title: "Tov Illustration",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/tov-150x150.png",
    category: 'Createur',
    content: undefined,
  },
  {
    title: "Aleades",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/gfshshg-150x150.png",
    category: 'Createur',
    content: undefined,
  },
  {
    title: "Artiludis",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/artiludis-150x150.png",
    category: 'Createur',
    content: undefined,
  },
  {
    title: "Kyt'n'Play",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/04/Sans-titre-1-150x150.png",
    category: 'Createur',
    content: undefined,
  },
  {
    title: "Les Cannoniers",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/canonniers-150x150.png",
    category: 'Figurinistes',
    content: undefined,
  },
  {
    title: "Pawns Pusher",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/482251351_661960446371022_244133054064327310_n-256x300.jpg",
    category: 'Figurinistes',
    content: undefined,
  },
  {
    title: "3Dés Parsec",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/Sans-titre-1-150x150.png",
    category: 'Figurinistes',
    content: undefined,
  },
  {
    title: "Joan of Arc",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/04/03ded0d88ddc2543ec6fe342d7c99f9e58dfd1809e05d0ed29dbebc671b4-300x249.webp",
    category: 'Figurinistes',
    content: undefined,
  },
  {
    title: "Thylgames",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/467342613_535349895988333_7644348880963533883_n-150x150.jpg",
    category: 'Magasins',
    content: undefined,
  },
  {
    title: "Les quatre Chemins",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/main-150x150.png",
    category: 'Magasins',
    content: undefined,
  },
  {
    title: "38 CC Escape Game",
    src: "https://heraultsdelambert.fr/wp-content/uploads/2025/03/6046ba51b393f673914281-150x150.jpg",
    category: 'Autres',
    content: undefined,
  },
];

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
  return (
    [...tabsData, ...tabsData, ...tabsData].map(partenaire => 
      <div className="flex flex-col items-center space-y-2">
        <Avatar size="2xl">
          <AvatarFallbackText>{partenaire.title}</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: partenaire.src,
            }}
          />
        </Avatar>
        <span className="text-center">{partenaire.title}</span>
      </div>
    )
  );
};
export default HeraultsPartenairesFold;
