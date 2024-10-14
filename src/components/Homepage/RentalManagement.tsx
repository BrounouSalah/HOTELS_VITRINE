import { ArrowRight } from "@/assets/icons/ArrowRight";
import { Flare } from "@/assets/illustrations/Flare";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Location from "public/img/location.png";
import React from "react";

export const RentalManagement = () => {
  return (
    <Flex as="section" justify="center" pos="relative">
      <Flare
        color="blue"
        pos="absolute"
        left="-200px"
        top="-50px"
        data-aos="fade"
        data-aos-delay="500"
      />
      <Stack
        style={{ maxWidth: "1000px" }}
        pt={32}
        w="full"
        px="4"
        spacing={12}
        direction={["column", "row-reverse"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing="6" maxW="300px" minW={[0, "400px"]}>
          <Heading as="h1" data-aos="fade">
            Gérez facilement les services de location
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: "lg", xl: "xl" }}
            data-aos="fade"
          >
            Louez des salles de conférence ou de mariage et suivez les
            réservations dans un tableau de gestion des plannings, tout en
            évitant les doubles réservations.
          </Text>

          <Button
            as={Link}
            rightIcon={<ArrowRight />}
            href={`/request`}
            variant="ghost"
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
            src={Location}
            alt="Location management system"
            placeholder="blur"
          />
        </Box>
      </Stack>
    </Flex>
  );
};
