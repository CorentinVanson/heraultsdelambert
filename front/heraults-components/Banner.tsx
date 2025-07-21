import React from "react";
import { Button, ButtonText, HStack } from "../components/ui";
import { useNavigation } from "@react-navigation/native";

const Banner = () => {
  const navigation = useNavigation();
  return (
    <HStack
      className="justify-center items-center min-h-16 bg-shade-0"
      space="sm"
    >
      <Button variant="link" action="secondary" onPress={() => navigation.navigate('Inscription')}>
        <ButtonText className="text-content-0">
          Les inscriptions pour la convention sont ouvertes!
        </ButtonText>
      </Button>
    </HStack>
  );
};
export default Banner;
