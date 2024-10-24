import { BackgroundPolygons } from "@/components/Homepage/Hero/BackgroundPolygons";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header/Header";
import { SocialMetaTags } from "@/components/common/SocialMetaTags";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import type { GetStaticPropsResult } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

type Props = {
  hotels: any[];
};

export default function HotelsPages({ hotels }: Props) {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTopButton && window.pageYOffset > 400) {
        setShowScrollTopButton(true);
      } else if (showScrollTopButton && window.pageYOffset <= 400) {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTopButton]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Stack overflowX="hidden" bgColor="gray.900">
      <Flex
        pos="relative"
        flexDir="column"
        minHeight="100vh"
        alignItems="center"
        bgGradient="linear(to-b, gray.900, gray.800)"
        pb={40}
      >
        {/* <SocialMetaTags currentUrl={`https://www.typebot.io/oss-friends`} /> */}
        <BackgroundPolygons />
        <Header />
        <VStack spacing={12}>
          <Stack pt="20" px="2" spacing="4">
            <Heading fontSize={{ base: "4xl", xl: "6xl" }} textAlign="center">
              Notre{" "}
              <Text as="span" color="blue.200" fontWeight="bold">
                Panoplie
              </Text>{" "}
              d'Hôtels
            </Heading>
            <Text
              maxW="900px"
              textAlign="center"
              fontSize={{ base: "lg", xl: "xl" }}
            >
              Nous sommes fier de supporter ces Hôtels 💙
            </Text>
          </Stack>

          <SimpleGrid columns={[1, 2, 3]} spacing="6" maxW="1200px">
            {hotels.map((friend, index) => (
              <Stack
                key={index}
                p="6"
                rounded="lg"
                bgColor="gray.800"
                color="white"
                shadow="lg"
                spacing="4"
                data-aos="fade"
                justifyContent="space-between"
              >
                <Stack spacing={4}>
                  <Heading fontSize="2xl">{friend.name}</Heading>
                  <Text noOfLines={6}>{friend.description}</Text>
                </Stack>

                <Flex>
                  <Button
                    as={Link}
                    target="_blank"
                    href={`/hotel/${friend.id}`}
                    variant="outline"
                  >
                    Afficher plus
                  </Button>
                </Flex>
              </Stack>
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>
      <Footer />
      {showScrollTopButton && (
        <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
          <IconButton
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            colorScheme="teal"
            size="lg"
            aria-label="Scroll to top"
            boxShadow="lg"
            borderRadius="full"
            bg={useColorModeValue("white", "gray.700")}
            color={useColorModeValue("gray.900", "white")}
          />
        </Box>
      )}
    </Stack>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + "/hotels/active?offset=0&limit=1000"
  );
  const data = await res.json();
  return {
    props: {
      hotels: data,
    },
  };
}
