"use client";

import React, { type ReactNode } from "react";

import { Logo } from "@/assets/icons/Logo";
import {
  Box,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TextLink } from "./TextLink";
import Image from "next/image";
import hotelLogo from "../../../public/img/logo.png";
const discordServerUrl = "https://typebot.io/discord";
const typebotLinkedInUrl = "https://www.linkedin.com/company/typebot";
const typebotTwitterUrl = "https://twitter.com/Typebot_io";
const baptisteTwitterUrl = "https://twitter.com/baptisteArno";
const statusPageUrl = "https://status.typebot.io";
export const contactUrl = "https://bot.typebot.io/landing-page-bubble-en";
export const roadmapLink = "https://app.typebot.io/feedback";
export const documentationLink = "https://docs.typebot.io";
export const githubRepoLink = "https://github.com/baptisteArno/typebot.io";

export const Footer = () => {
  return (
    <Box w="full">
      <Container as={Stack} maxW={"1000px"} py={10}>
        <SimpleGrid columns={[1, 2, 4]} spacing={8} px={2}>
          <Stack spacing={6}>
            <HStack>
              <Image height={100} width={100} src={hotelLogo} alt="logo" />
              {/* <Logo boxSize="30px" />
              <Heading as="p" fontSize="lg">
                Typebot
              </Heading> */}
            </HStack>
            <Text>Made with ❤️ by _HOTELS</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact</ListHeader>
            <Text>e-mail:RE_@contact.com</Text>
            <Text>Tél:+216 24 647 960</Text>

            {/* <TextLink href={typebotTwitterUrl} isExternal>
              Twitter
            </TextLink>
            <TextLink href={typebotLinkedInUrl} isExternal>
              LinkedIn
            </TextLink> */}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Services</ListHeader>
            {/* <TextLink href={statusPageUrl} isExternal>
              Status
            </TextLink>
            <TextLink href={documentationLink} isExternal>
              Documentation
            </TextLink>
            <TextLink href={roadmapLink} isExternal>
              Roadmap
            </TextLink> */}
            <TextLink href={"/hotels"}>Hotels</TextLink>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <TextLink href="/about">About</TextLink>
            <TextLink href="mailto:RE_@contact.com">Contact</TextLink>
            <TextLink href={"/terms-of-service"}>Terms of Service</TextLink>
            <TextLink href={"/privacy-policies"}>Privacy Policy</TextLink>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Heading fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Heading>
  );
};
