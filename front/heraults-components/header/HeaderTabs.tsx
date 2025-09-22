import React from "react";
import { Button, ButtonIcon, ButtonText, StarIcon, Link, ButtonGroup } from "../../components/ui";

const HeaderTabs = () => {
  return (
      <ButtonGroup flexDirection="row" style={{flexDirection:"row"}}>
        <Link href="https://www.helloasso.com/associations/heraults-de-lambert/adhesions/inscriptions-2022-2023" isExternal>
          <Button size="md" variant="solid" action="primary">
            <ButtonIcon as={StarIcon}/>
            <ButtonText>Adhérer</ButtonText>
          </Button>
        </Link>
      </ButtonGroup>
  );
};
export default HeaderTabs;
