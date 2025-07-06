import React from "react";
import { HStack, Icon, Pressable, Text, SearchIcon, Button, ButtonIcon, ButtonText, StarIcon, Link, LinkText, ButtonGroup } from "../../components/ui";

const HeaderTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState("Anywhere");
  return (
      <ButtonGroup flexDirection="row" style={{flexDirection:"row"}}>
        <Link href="#home">
          <Button size="md" variant="link" >
            <ButtonText>Home</ButtonText>
          </Button>
        </Link>
        <Link href="#evenements">
          <Button size="md" variant="link" >
            <ButtonText>Evénements</ButtonText>
          </Button>
        </Link>
        <Link href="https://www.helloasso.com/associations/heraults-de-lambert/adhesions/inscriptions-2022-2023">
          <Button size="md" variant="solid" action="primary">
            <ButtonIcon as={StarIcon}/>
            <ButtonText>Adhérer</ButtonText>
          </Button>
        </Link>
        <Link href="#blog">
          <Button size="md" variant="link" >
            <ButtonText>Blog</ButtonText>
          </Button>
        </Link>
        <Link href="#partenaires">
          <Button size="md" variant="link" >
            <ButtonText>Partenaires</ButtonText>
          </Button>
        </Link>
      </ButtonGroup>
  );
};
export default HeaderTabs;
