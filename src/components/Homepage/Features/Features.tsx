import { AccessibilityIcon } from "@/assets/icons/AccessibilityIcon";
import { CalculatorIcon } from "@/assets/icons/CaluclatorIcon";
import { ConditionIcon } from "@/assets/icons/ConditionIcon";
import { FolderIcon } from "@/assets/icons/FolderIcon";
import { PersonAddIcon } from "@/assets/icons/PersonAddIcon";
import { ShareIcon } from "@/assets/icons/ShareIcon";
import {
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    Icon: AccessibilityIcon,
    title: "Opérations rationalisées",
    content:
      "Gérez toutes les opérations de votre hôtel depuis une seule plateforme.",
  },
  {
    Icon: PersonAddIcon,
    title: "Solution évolutive et personnalisable",
    content:
      "Adaptez la plateforme aux besoins spécifiques de votre hôtel, qu'il soit petit ou grand.",
  },
  {
    Icon: ConditionIcon,
    title: "Efficacité accrue",
    content:
      "Les règles de tarification, l'automatisation et le suivi des finances font gagner un temps précieux.",
  },
  {
    Icon: CalculatorIcon,
    title: "Informations précieuses",
    content:
      "Obtenez des rapports détaillés et optimisez vos processus de gestion.",
  },
  {
    Icon: FolderIcon,
    title: "Sécurité des données",
    content:
      "Profitez d'une gestion sécurisée de vos informations sensibles, avec des sauvegardes régulières et une protection avancée des données pour assurer la confidentialité et l'intégrité de votre hôtel.",
  },
  {
    Icon: ShareIcon,
    title: "Accès mobile",
    content:
      "Le personnel peut gérer les réservations à distance avec notre application mobile.",
  },
];

export const Features = () => {
  return (
    <Flex justifyContent="center">
      <Stack
        style={{ maxWidth: "1200px" }}
        pt={"52"}
        w="full"
        px="4"
        spacing={12}
      >
        <VStack>
          <Heading as="h1" textAlign="center" data-aos="fade">
            Pourquoi choisir _HOTELS pour la gestion hôtelière ?
          </Heading>
          <Text
            color="gray.500"
            fontSize={["lg", "xl"]}
            textAlign="center"
            data-aos="fade"
          >
            _HOTELS facilite la gestion et le suivi des opérations hôtelières en
            toute simplicité
          </Text>
        </VStack>
        <SimpleGrid columns={[1, 3]} spacing="10" pt="10" data-aos="fade">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </SimpleGrid>
      </Stack>
    </Flex>
  );
};
