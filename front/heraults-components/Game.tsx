import React, { useState } from "react";
import { Box, Card, Heading, Text, Image, VStack, Badge, BadgeText, BadgeIcon, CircleIcon, Button, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, Icon, CloseIcon, ModalBody, ModalFooter, ButtonText, ButtonSpinner, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon } from "../components/ui";
import colors from "tailwindcss/colors"

export type GameDto = {
    id: number,
    name: string,
    dateStart: string,
    timeStart: string,
    timeEnd: string,
    numberOfPlayers: number,
    MJName: string,
    imgUrl: string,
    description: string,
    players: string[]
}

type GameProps = {
    game: GameDto,
    updateGames: () => Promise<void>,
}

const Game = ({ game, updateGames }: GameProps) => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isPseudoInvalid, setIsPseudoInvalid] = useState(false)
  const [pseudoInputValue, setPseudoInputValue] = useState<string>()
  const [isMailInvalid, setIsMailInvalid] = useState(false)
  const [mailInputValue, setMailInputValue] = useState<string>()
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false)
  const [phoneInputValue, setPhoneInputValue] = useState<string>()
  return (
    <>
      <Card size="md" variant="elevated" className="p-6 rounded-lg m-3 bg-background-100" >
        <Box className="flex-row items-center">
          <Image 
            source={game.imgUrl ?? require("../assets/logo.svg")}
            size="md"
            alt={`${game.name} Image`} 
            className="mr-4"/>
          <Heading size="md" className="mb-1 flex-grow">
            {game.name}
          </Heading>
          <Button 
            action="secondary"
            onPress={() => setShowModal(true)}
            isDisabled={game.players.length >= game.numberOfPlayers}>
                Inscris toi!
          </Button>
        </Box>
          <Text className="flex-1" size="sm">{game.dateStart}: {game.timeStart} - {game.timeEnd}</Text>
          <Text className="flex-1" size="sm">Joueurs: {game.numberOfPlayers}</Text>
          <Text className="flex-1" size="sm">MJ: 
            <Badge size="md" variant="solid" action="warning">
                <BadgeIcon as={CircleIcon} />
                <BadgeText className="ml-2">{game.MJName}</BadgeText>
            </Badge>
          </Text>
          <Text className="flex-1 flex-row" size="sm">Joueurs: 
            {game.players.map(player => (
                <Badge size="md" variant="solid" action="info" className="my-1">
                    <BadgeIcon as={CircleIcon} />
                    <BadgeText className="ml-2">{player}</BadgeText>
                </Badge>
            ))}
          </Text>
          <Text className="flex-1" size="sm">{game.description}</Text>
      </Card>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        size="lg"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="md" className="text-typography-950">
              Inscris-toi!
            </Heading>
            <ModalCloseButton>
              <Icon
                as={CloseIcon}
                size="md"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text size="sm" className="text-typography-500">
              Merci de remplir ces informations pour envoyer ta demande d'inscription, les informations de contact seront utilisés qu'uniquement dans le cadre de l'organisation de la convention
            </Text>
                    
            <VStack className="w-full mt-4">
                <FormControl
                    isInvalid={isPseudoInvalid}
                    size="md"
                    isDisabled={false}
                    isReadOnly={false}
                    isRequired={true}
                >
                    <FormControlLabel>
                        <FormControlLabelText>Pseudo</FormControlLabelText>
                    </FormControlLabel>
                    <Input className="my-1" size="md">
                        <InputField
                            type="text"
                            placeholder="Pseudo"
                            value={pseudoInputValue}
                            onChangeText={(text) => setPseudoInputValue(text)}
                        />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                            Le pseudo est obligatoire
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl
                    isInvalid={isMailInvalid}
                    size="md"
                    isDisabled={false}
                    isReadOnly={false}
                    isRequired={true}
                >
                    <FormControlLabel>
                        <FormControlLabelText>Mail</FormControlLabelText>
                    </FormControlLabel>
                    <Input className="my-1" size="md">
                        <InputField
                            type="text"
                            placeholder="Mail"
                            value={mailInputValue}
                            onChangeText={(text) => setMailInputValue(text)}
                        />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                            Le mail est obligatoire et doit être dans un format valide
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl
                    isInvalid={isPhoneInvalid}
                    size="md"
                    isDisabled={false}
                    isReadOnly={false}
                    isRequired={false}
                >
                    <FormControlLabel>
                        <FormControlLabelText>Téléphone</FormControlLabelText>
                    </FormControlLabel>
                    <Input className="my-1" size="md">
                        <InputField
                            type="text"
                            placeholder="Téléphone"
                            value={phoneInputValue}
                            onChangeText={(text) => setPhoneInputValue(text)}
                        />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText>
                            Le téléphone doit être dans un bon format (10 chiffres)
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Annuler</ButtonText>
            </Button>
            <Button
              onPress={async () => {
                let invalid = false;
                if (!pseudoInputValue) {
                    invalid = true;
                    setIsPseudoInvalid(true)
                } else {
                    setIsPseudoInvalid(false)
                }
                if (!mailInputValue || !mailInputValue?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                    invalid = true;
                    setIsMailInvalid(true)
                } else {
                    setIsMailInvalid(false)
                }
                if (phoneInputValue && !phoneInputValue.match(/^(0|\\+33|0033)[1-9][0-9]{8}$/g)) {
                    invalid = true;
                    setIsPhoneInvalid(true)
                } else {
                    setIsPhoneInvalid(false)
                }
                if(invalid) {return}

                setLoading(true);
                await fetch("http://localhost:3000/api/games/player/add", {method: 'POST', body: JSON.stringify({ id: game.id, pseudo: pseudoInputValue, mail: mailInputValue, phone: phoneInputValue }), headers: { "Content-Type": "application/json"}});
                setLoading(false);
                updateGames();
                setShowModal(false)
              }}
              isDisabled={loading}
            >
              {loading && <ButtonSpinner color={colors.gray[400]} />}
              <ButtonText>Envoi</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Game;
