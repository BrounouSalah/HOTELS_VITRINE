"use client";

import {
  Button,
  Flex,
  Heading,
  Stack,
  type StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BackgroundPolygons } from "./Hero/BackgroundPolygons";

type Props = {
  heading?: string;
  polygonsBaseTop?: string;
} & StackProps;

export const EndCta = ({ heading, polygonsBaseTop, ...props }: Props) => {
  return (
    <VStack
      as="section"
      py={32}
      pos="relative"
      bgGradient="linear(to-b, gray.900, gray.800)"
      height="100vh"
      justifyContent="center"
      {...props}
    >
      <BackgroundPolygons baseTop={polygonsBaseTop} />
      <VStack
        spacing="6"
        maxW="3xl"
        mx="auto"
        px={{ base: "6", lg: "8" }}
        py={{ base: "16", sm: "20" }}
        textAlign="center"
      >
        {heading ? (
          <Heading
            fontWeight="extrabold"
            letterSpacing="tight"
            data-aos="fade-up"
          >
            {heading}
          </Heading>
        ) : null}
        <Flex>
          <Stack
            direction={["column-reverse", "row"]}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Button
              as={Link}
              href="/request"
              colorScheme="orange"
              size="lg"
              height="4rem"
              px="2rem"
              minWidth={300}
            >
              Demander une démo
            </Button>
            <Button
              _hover={{ bgColor: "orange" }}
              bgColor={"#ff8b1a"}
              as={Link}
              href="/request"
              colorScheme="orange"
              size="lg"
              height="4rem"
              px="2rem"
              minWidth={300}
            >
              S'abonner aux mises à jour
            </Button>
          </Stack>
        </Flex>
      </VStack>
    </VStack>
  );
};
