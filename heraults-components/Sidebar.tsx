import React from "react";
import { VStack, ScrollView, Menu, MenuItem, MenuItemLabel, MenuSeparator } from "../components/ui";
import SidebarSection from "./sidebar/SidebarSection";

const links = [
  {
    label: 'Home',
    link: '#home'
  },
  {
    label: 'Evénements',
    link: '#evenements'
  },
  {
    label: 'Partenaires',
    link: '#partenaires'
  }
];

const Sidebar = () => {
  const [scrollEnabled, setScrollEnabled] = React.useState<boolean>(true);
  return (
    <ScrollView className="w-full" scrollEnabled={scrollEnabled}>
      <VStack space="xs" className="py-6 px-4">
        {links.map(({ label, link }) => 
          <SidebarSection label={label} link={link} />
        )}
      </VStack>
    </ScrollView>
  );
};
export default Sidebar;
