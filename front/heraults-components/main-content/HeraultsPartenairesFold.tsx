import React from "react";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "../../components/ui";

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
    <section className="py-10 gap-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-7xl leading-tight text-stroke">Les partenaires</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <TabPanelData />
          </div>
        </div>
      </div>
    </section>
  );
};

const TabPanelData = () => {
  return (
    tabsData.map(partenaire => 
      <div className="flex flex-col items-center">
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
