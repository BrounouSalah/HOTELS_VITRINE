import { Avatar, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import type { StepsData } from "./Steps";

export const SingleStep = ({ content, name, role }: StepsData) => (
  <Stack
    p="6"
    rounded="lg"
    bgColor="gray.800"
    color="white"
    shadow="lg"
    spacing="4"
    data-aos="fade"
    minHeight={"200px"}
  >
    <Flex justifyContent="space-between">
      <HStack spacing="4">
        <Avatar name={name} />

        <Stack spacing={1}>
          <Text
            as="cite"
            fontStyle="normal"
            fontWeight="extrabold"
            color="white"
          >
            {name}
          </Text>
          <Text fontSize="sm" color={"gray.100"}>
            {role}
          </Text>
        </Stack>
      </HStack>
    </Flex>

    <Text mt="3" maxW="38rem" color="gray.400">
      {content}
    </Text>
  </Stack>
);
