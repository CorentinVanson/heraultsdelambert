import React, { useEffect } from "react";
import { StatusBar, Platform } from "react-native";
import { Box } from "../components/ui";
import MobileBottomTabs from "./MobileBottomTabs";
import MobileModeChangeButton from "./MobileModeChangeButton";
import {
  Home,
  Calendar,
  Star,
  Rss,
  Handshake
} from "lucide-react-native";
import MobileProfilePage from "./MobileProfilePage";
import Explorepage from "./ExplorePage";

const bottomTabs = [
  {
    icon: Home,
    label: "Home",
    href: "#home",
  },
  {
    icon: Calendar,
    label: "Evénements",
    href: "#evenements",
  },
  {
    icon: Star,
    label: "Adhérer",
    href: "https://www.helloasso.com/associations/heraults-de-lambert/adhesions/inscriptions-2022-2023",
  },
  {
    icon: Rss,
    label: "Blog",
    href: "#blog",
  },
  {
    icon: Handshake,
    label: "Partenaires",
    href: "#partenaires",
  },
];

const HeraultsPage = () => {
  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <>
      <Box className="flex-1">
        <StatusBar />

        <Box className="flex-1">
          <MobileProfilePage isActive={activeTab === "Profile"} />

          <Explorepage setActiveTab={setActiveTab} activeTab={activeTab} />

          <MobileModeChangeButton />
        </Box>
        {/* mobile bottom tabs */}
        <Box className="h-[72px] items-center w-full flex md:hidden border-t border-outline-50">
          <MobileBottomTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            bottomTabs={bottomTabs}
          />
        </Box>
      </Box>
      {/* )} */}
    </>
  );
};
export default HeraultsPage;
