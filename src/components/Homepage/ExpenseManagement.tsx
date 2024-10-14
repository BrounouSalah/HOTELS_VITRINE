import { ArrowRight } from "@/assets/icons/ArrowRight";
import { Flare } from "@/assets/illustrations/Flare";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Expenses from "public/img/expense.png";
import React from "react";

export const ExpenseManagement = () => {
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
            Suivez facilement les dépenses et les paiements
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: "lg", xl: "xl" }}
            data-aos="fade"
          >
            Gardez une trace précise des dépenses de l'hôtel, des paiements, et
            accédez aux informations financières en un coup d'œil. Tous les
            paiements et données de dépenses sont centralisés pour une gestion
            simplifiée.
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
            src={Expenses}
            alt="Expenses system"
            placeholder="blur"
          />
        </Box>
      </Stack>
    </Flex>
  );
};
