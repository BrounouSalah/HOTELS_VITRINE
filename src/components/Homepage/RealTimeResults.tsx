import { ArrowRight } from "@/assets/icons/ArrowRight";
import { HandDrawnArrow } from "@/assets/illustrations/HandDrawnArrow";
import { Button, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Dashboard from "../../../public/img/dashboard.png";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const RealTimeResults = () => {
  return (
    <Flex as="section" justify="center">
      <Stack
        style={{ maxWidth: "1200px" }}
        pt={"52"}
        w="full"
        px="4"
        spacing={16}
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack spacing={6}>
          <Heading
            fontSize={{ base: "4xl", xl: "6xl" }}
            textAlign="center"
            data-aos="fade"
          >
            Consulter les résultats en Temps Réel
          </Heading>
          <Text
            textAlign="center"
            color="gray.400"
            maxW="1000px"
            fontSize={{ base: "lg", xl: "xl" }}
            data-aos="fade"
          >
            Prenez des décisions éclairées grâce à des statistiques en temps
            réel directement accessibles depuis votre tableau de bord. Suivez
            l'évolution des réservations, des revenus générés par les chambres
            et les services, et surveillez vos dépenses en un seul coup d'œil.
            Grâce à notre système de reporting en temps réel, vous pouvez
            analyser les performances de votre hôtel à tout moment, anticiper
            les tendances et ajuster vos stratégies pour maximiser votre
            rentabilité.
          </Text>
          <Flex>
            <Button
              as={Link}
              rightIcon={<ArrowRight />}
              href={`/request`}
              variant="ghost"
              colorScheme="blue"
              data-aos="fade"
            >
              Essayez-le !
            </Button>
          </Flex>
        </VStack>

        <Stack
          w="full"
          direction={["column", "row"]}
          spacing="4"
          pos="relative"
          data-aos="fade"
        >
          <Image
            style={{
              borderRadius: 20,
            }}
            src={Dashboard}
            alt="Dashboard management system"
            placeholder="blur"
          />
          <Flex
            top="-60px"
            right="-30px"
            pos="absolute"
            display={{ base: "none", xl: "flex" }}
          >
            <Text fontFamily="'Indie Flower'" fontSize="2xl">
              Un apérçu réel du Tableau de bord !
            </Text>
            <HandDrawnArrow
              transform="rotate(30deg)"
              boxSize="100px"
              top="15px"
              right="-60px"
              pos="absolute"
            />
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
};
