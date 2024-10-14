import { EndCta } from "@/components/Homepage/EndCta";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header/Header";
import { SocialMetaTags } from "@/components/common/SocialMetaTags";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { animateScroll as scroll } from "react-scroll";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const AboutPage = () => {
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
    <>
      <Flex
        direction="column"
        align="center"
        w="full"
        overflowX="hidden"
        px={{ base: "4", md: "8" }}
      >
        <Header />
        {/* <SocialMetaTags currentUrl={`https://www.hotels-saas.com/about`} /> */}
        <Stack
          spacing={10}
          mx="auto"
          maxW={{ base: "full", md: "3xl" }}
          my="20"
          fontSize={{ base: "16px", md: "17px" }}
          textAlign="justify"
          px={{ base: "4", md: "0" }}
        >
          <Flex w="full" justify="center">
            <Heading as="h1" size="xl" textAlign="center">
              Pourquoi choisir _HOTELS ?
            </Heading>
          </Flex>
          <Text>
            Bienvenue sur _HOTELS, votre solution SaaS complète pour la gestion
            hôtelière. Notre plateforme vous permet de gérer efficacement toutes
            les facettes de votre établissement, du suivi des réservations à la
            gestion des tarifs et des services, tout en automatisant les
            processus fastidieux.
          </Text>
          <Text>
            _HOTELS a été conçu pour simplifier la vie des gérants d'hôtels et
            leur offrir un outil puissant, flexible et accessible. Que vous
            gériez un petit hôtel familial ou une chaîne hôtelière, notre
            solution est adaptée pour répondre à vos besoins spécifiques.
          </Text>
          <Text>
            Nous savons que la gestion hôtelière peut être complexe, avec de
            nombreuses tâches à réaliser quotidiennement. C'est pourquoi _HOTELS
            vous permet de centraliser la gestion de vos chambres, des services,
            des tarifs, des réservations et bien plus encore.
          </Text>
          <Text>
            Avec _HOTELS, vous bénéficiez d'une vue d'ensemble claire de vos
            réservations, de vos dépenses, et de vos revenus, tout en ayant la
            possibilité de personnaliser les prix et de proposer des offres
            spéciales avec la tarification dynamique.
          </Text>
          <Text>Nos fonctionnalités clés incluent :</Text>
          <List listStyleType="initial" spacing={2}>
            <ListItem>Gestion des chambres et des services</ListItem>
            <ListItem>Tarification dynamique et promotionnelle</ListItem>
            <ListItem>
              Gestion des réservations de services de location
            </ListItem>
            <ListItem>Suivi des dépenses et des paiements</ListItem>
            <ListItem>Gestion des réservations et du personnel</ListItem>
            <ListItem>Exportation des données pour analyse</ListItem>
          </List>
          <Text>
            En utilisant _HOTELS, vous économisez du temps et améliorez
            l'efficacité de votre établissement, tout en offrant une expérience
            client améliorée grâce à une gestion optimale des réservations et
            des services.
          </Text>
          <Text>
            Notre plateforme permet à votre équipe de se concentrer sur
            l'accueil des clients, plutôt que sur la gestion administrative,
            grâce à des outils simples, intuitifs et conçus pour s'adapter à vos
            besoins.
          </Text>
          <Text>
            Que vous souhaitiez ajuster vos tarifs en fonction de la saison,
            gérer des services supplémentaires comme la location de salles de
            conférence, ou suivre précisément vos dépenses et revenus, _HOTELS
            est l'outil qu'il vous faut.
          </Text>
          <Text>
            Découvrez dès maintenant comment _HOTELS peut transformer la gestion
            de votre hôtel.
          </Text>
        </Stack>
      </Flex>
      <EndCta heading="Optimisez la gestion de votre hôtel avec _HOTELS" />
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
    </>
  );
};

export default AboutPage;
