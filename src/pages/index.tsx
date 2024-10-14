import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { RoomManagement } from "@/components/Homepage/RoomManagement";
import { RulesManagement } from "@/components/Homepage/RulesManagement";
import { EndCta } from "@/components/Homepage/EndCta";
import { Features } from "@/components/Homepage/Features";
import { Hero } from "@/components/Homepage/Hero";
import { RealTimeResults } from "@/components/Homepage/RealTimeResults";
import { HowSteps } from "@/components/Homepage/Steps";
import { Footer } from "@/components/common/Footer";
import { SocialMetaTags } from "@/components/common/SocialMetaTags";
import { Stack, Box, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { RentalManagement } from "@/components/Homepage/RentalManagement";
import { ExpenseManagement } from "@/components/Homepage/ExpenseManagement";
import { BookingManagement } from "@/components/Homepage/BookingManagement";

const App = () => {
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
    <Stack w="full" overflowX="hidden" bgColor="gray.900">
      {/* <SocialMetaTags currentUrl={`https://www.typebot.io/`} /> */}
      <Hero />
      <RoomManagement />
      <RulesManagement />
      <RentalManagement />
      <ExpenseManagement />
      <BookingManagement />
      <RealTimeResults />
      <Features />
      <HowSteps />
      <EndCta heading="Prêt à transformer la gestion de votre hôtel ?" />
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
};

export default App;
