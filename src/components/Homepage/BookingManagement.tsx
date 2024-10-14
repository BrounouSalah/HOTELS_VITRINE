import { ArrowRight } from "@/assets/icons/ArrowRight";
import { Flare } from "@/assets/illustrations/Flare";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Booking from "public/img/booking.png";
import React from "react";

export const BookingManagement = () => {
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
            Gestion des réservations
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: "lg", xl: "xl" }}
            data-aos="fade"
          >
            Suivez et gérez les réservations ainsi que leurs paiements en toute
            simplicité.
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
            src={Booking}
            alt="Booking management system"
            placeholder="blur"
          />
        </Box>
      </Stack>
    </Flex>
  );
};
