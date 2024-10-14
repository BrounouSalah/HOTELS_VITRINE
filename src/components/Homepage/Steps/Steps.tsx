import { Flex, Heading, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import type * as React from "react";
import { SingleStep } from "./SingleStep";

export type StepsData = {
  name: string;
  role?: string;
  content: string | React.ReactNode;
};

const stepsData: StepsData[][] = [
  [
    {
      name: "Étape 1",
      role: "Inscription",
      content:
        "Inscrivez-vous et créez le profil de votre hôtel avec toutes les informations necéssaires.",
    },
  ],
  [
    {
      name: "Étape 2",
      role: "Ajout des données",
      content:
        "Ajoutez des chambres, des services et des espaces de location avec les configurations respectives, et définissez les tarifs.",
    },
  ],

  [
    {
      name: "Étape 3",
      role: "Configuration",
      content:
        "Configurez des règles de tarification dynamique et gérez les réservations .",
    },
  ],
  [
    {
      name: "Étape 4",
      role: "Suivi et Gestion",
      content:
        "Suivez les dépenses, gérez les paiements et générez des rapports selon des périodes choisies.",
    },
  ],
];

export const HowSteps = () => {
  return (
    <Flex as="section" justify="center">
      <VStack spacing={12} pt={"52"} px="4" maxW="1400px">
        <Heading textAlign={"center"} data-aos="fade">
          Comment ça marche : Une solution intuitive pour la gestion hôtelière
          💙
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing="6">
          {stepsData.map((stepsGroup, index) => (
            <Stack key={index} spacing="6">
              {stepsGroup.map((step, index) => (
                <SingleStep key={index} {...step} />
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};
