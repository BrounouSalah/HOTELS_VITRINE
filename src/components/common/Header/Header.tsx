"use client";

import { HamburgerIcon } from "@/assets/icons";
import { ChevronDownIcon } from "@/assets/icons/ChevronDownIcon";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import hotelLogo from "../../../../public/img/logo.png";
import { Logo } from "@/assets/icons/Logo";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  useColorModeValue as mode,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";

export const Header = () => {
  const { isOpen: isMobileMenuOpen, onToggle: onMobileMenuToggle } =
    useDisclosure();

  return (
    <Flex pos="relative" zIndex={10} w="full">
      <HStack
        as="header"
        aria-label="Main navigation"
        maxW="7xl"
        w="full"
        mx="auto"
        px={{ base: "6", md: "8" }}
        py="4"
        justify="space-between"
      >
        <Flex
          align="center"
          justify="space-between"
          className="nav-content__mobile"
          color={mode("white", "white")}
        >
          <HStack as={Link} href="/" rel="home" ml="2">
            <Image height={100} width={100} src={hotelLogo} alt="logo" />
            {/* <Logo boxSize="35px" /> */}
            {/* <Heading as="p" fontSize="lg">
              _HOTELS
            </Heading> */}
          </HStack>
        </Flex>
        <Box display={["block", "block", "none"]}>
          <IconButton
            aria-label={"Open menu"}
            icon={
              isMobileMenuOpen ? (
                <CloseIcon boxSize="20px" />
              ) : (
                <HamburgerIcon boxSize="20px" />
              )
            }
            variant="ghost"
            colorScheme="gray"
            onClick={onMobileMenuToggle}
          />
          <MobileMenu isOpen={isMobileMenuOpen} />
        </Box>
        <HStack as="nav" spacing={4} display={["none", "none", "flex"]}>
          <Button
            as={Link}
            href="/hotels"
            variant="ghost"
            colorScheme="gray"
            fontWeight={700}
          >
            Hotels
          </Button>
          <Button
            as={Link}
            href="/about"
            variant="ghost"
            colorScheme="gray"
            fontWeight={700}
          >
            About
          </Button>

          <Button
            as={Link}
            href="/request"
            colorScheme="orange"
            fontWeight={700}
          >
            S'abonner
          </Button>
        </HStack>
      </HStack>
    </Flex>
  );
};
