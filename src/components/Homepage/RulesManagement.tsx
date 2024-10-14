import { ArrowRight } from "@/assets/icons/ArrowRight";
import { Flare } from "@/assets/illustrations/Flare";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Rules from "public/img/rules.png";
import React from "react";

export const RulesManagement = () => {
  return (
    <Flex as="section" justify="center" pos="relative">
      <Flare
        color="orange"
        pos="absolute"
        right="-200px"
        top="100px"
        data-aos="fade"
        data-aos-delay="500"
      />
      <Stack
        style={{ maxWidth: "1000px" }}
        pt={32}
        w="full"
        px="4"
        spacing={12}
        direction={["column", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing="6" maxW="300px" minW={[0, "400px"]}>
          <Heading as="h1" data-aos="fade">
            Règles de tarification dynamique pour une flexibilité maximale
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: "lg", xl: "xl" }}
            data-aos="fade"
          >
            Permettez aux gestionnaires d'hôtels de créer des règles de
            tarification basées sur le nombre de clients ou des dates
            spécifiques, comme les week-ends ou les périodes de forte demande.
            Automatisez les promotions et maximisez vos revenus grâce à cette
            fonctionnalité flexible.
          </Text>

          <Button
            as={Link}
            rightIcon={<ArrowRight />}
            href={`/request`}
            variant="ghost"
            colorScheme="orange"
            data-aos="fade"
          >
            Essayez-le !
          </Button>
        </Stack>
        <Box rounded="md" data-aos="fade">
          <Image
            style={{
              paddingTop: 40,
              paddingLeft: 40,
              backgroundColor: "#ff8b1a",
              borderRadius: 20,
            }}
            src={Rules}
            alt="rules system"
            placeholder="blur"
          />
        </Box>
      </Stack>
    </Flex>
  );
};
