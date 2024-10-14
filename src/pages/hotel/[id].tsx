import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Heading,
  Image,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  AspectRatio,
  Container,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
  FaFlag,
  FaAddressBook,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-scroll";

const HotelPreviewPage = ({ hotelData, servicesData }) => {
  const [hotel, setHotel] = useState(hotelData);
  const [services, setServices] = useState(servicesData);

  const isMobile = useBreakpointValue({ base: true, md: false });

  const daysOfWeekMap = (day) => {
    const french_days = {
      Monday: "Lundi",
      Tuesday: "Mardi",
      Wednesday: "Mercredi",
      Thursday: "Jeudi",
      Friday: "Vendredi",
      Saturday: "Samedi",
      Sunday: "Dimanche",
    };
    return french_days[day];
  };

  return (
    <Box>
      {/* Navbar */}
      <Flex
        as="nav"
        bg={useColorModeValue("gray.800", "gray.900")}
        color="white"
        py={4}
        px={6}
        align="center"
        justify="space-between"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <HStack spacing={4}>
          <Image
            height={"50px"}
            width={"50px"}
            src={hotel?.logo ? hotel.logo : "https://via.placeholder.com/50"}
            alt={"hotel_logo"}
            borderRadius="lg"
          />
          {!isMobile && (
            <Text fontSize="lg" fontWeight="bold">
              {hotel?.name}
            </Text>
          )}
        </HStack>

        <Button colorScheme="blue" size="md">
          Réserver maintenant
        </Button>
      </Flex>

      {/* Hero Section */}
      <Box
        bg={useColorModeValue("gray.800", "gray.900")}
        color="white"
        py={20}
        px={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          w="100%"
          maxW="container.lg"
        >
          <VStack spacing={4} align={isMobile ? "center" : "start"} flex="1">
            <Heading
              textAlign={isMobile ? "center" : "start"}
              as="h1"
              size="2xl"
            >
              Bienvenue à {hotel?.name}
            </Heading>
            <Text textAlign={isMobile ? "center" : "start"} fontSize="lg">
              Découvrez notre hôtel de luxe et réservez votre séjour maintenant.
            </Text>
            <Button colorScheme="blue" size="lg" mb={2}>
              Réserver maintenant
            </Button>
          </VStack>
          <Box
            width={{ base: "100%", md: "500px" }}
            flex="1"
            ml={{ base: 0, md: 10 }}
          >
            <Swiper
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              style={{ width: "100%" }}
            >
              {hotel?.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    width={{ base: "100%", md: "450px" }}
                    height={{ base: "auto", md: "400px" }}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    borderRadius="lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Flex>
      </Box>

      {/* About Hotel Section */}
      <Box
        id="about"
        bg={useColorModeValue("gray.100", "gray.700")}
        py={10}
        textAlign={isMobile ? "center" : "left"}
      >
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            À propos de l'hôtel
          </Heading>
          <Text fontSize="lg">{hotel?.description}</Text>
          {hotel?.policies && (
            <Text fontSize="lg" mt={4}>
              Check-in: {hotel.policies.check_in_time} | Check-out:{" "}
              {hotel.policies.check_out_time}
            </Text>
          )}
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" py={10} textAlign={isMobile ? "center" : "left"}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            Nos Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {services.map((service, index) => (
              <Box key={index}>
                <Image
                  height={{ base: "auto", md: "320px" }}
                  width={{ base: "100%", md: "450px" }}
                  src={
                    service.images.length > 0
                      ? service.images[0]
                      : "https://via.placeholder.com/450"
                  }
                  alt={service.service_name}
                  borderRadius="lg"
                />
                <Text fontSize="xl" fontWeight="bold" mt={2}>
                  {service.service_name}
                </Text>
                <Text>{service.description}</Text>
                <Text fontSize="sm" color="gray.500">
                  Disponible:{" "}
                  {service.availability.days_of_week
                    .map((el) => daysOfWeekMap(el))
                    .join(", ")}{" "}
                  de {service.availability.start_time} à{" "}
                  {service.availability.end_time}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        bg={useColorModeValue("gray.800", "gray.900")}
        py={10}
        color="white"
        textAlign="center"
      >
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            Réservez votre séjour maintenant
          </Heading>
          <Button colorScheme="blue" size="lg">
            Réserver maintenant
          </Button>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box id="gallery" py={10} textAlign={isMobile ? "center" : "left"}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            Galerie
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {hotel?.images?.map((image, index) => (
              <Image
                height={{ base: "auto", md: "300px" }}
                width={{ base: "100%", md: "400px" }}
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                borderRadius="lg"
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" bg={useColorModeValue("gray.100", "gray.700")} py={10}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg" fontWeight="bold">
                Informations de contact
              </Text>
              <Text fontSize="md" mb={1}>
                Pour toute question ou demande de réservation, n'hésitez pas à
                nous contacter.
              </Text>
              <HStack>
                <Icon as={FaEnvelope} boxSize={6} />
                <Text>Email: {hotel?.contact_info.email}</Text>
              </HStack>
              <HStack>
                <Icon as={FaPhone} boxSize={6} />
                <Text>Téléphone: {hotel?.contact_info.phone_number}</Text>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} boxSize={6} />
                <Text>Adresse: {hotel?.location.address}</Text>
              </HStack>
              <HStack>
                <Icon as={FaCity} boxSize={6} />

                <Text>Ville: {hotel?.location.city}</Text>
              </HStack>
              <HStack>
                <Icon as={FaFlag} boxSize={6} />

                <Text>Pays: {hotel?.location.country}</Text>
              </HStack>
            </VStack>
            <AspectRatio ratio={16 / 9}>
              <iframe
                key={hotel?.location.map_url}
                title="Google Map"
                src={hotel?.location.map_url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </AspectRatio>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        bg={useColorModeValue("gray.800", "gray.900")}
        color="white"
        py={10}
        textAlign="center"
      >
        <Container maxW="container.lg">
          <VStack spacing={4} align="center">
            <HStack>
              <Image
                height={"50px"}
                width={"50px"}
                src={
                  hotel?.logo ? hotel.logo : "https://via.placeholder.com/50"
                }
                alt={"hotel_logo"}
                borderRadius="lg"
              />
              <Text fontSize="lg" fontWeight="bold">
                {hotel?.name}
              </Text>
            </HStack>
            <HStack>
              <FaAddressBook style={{ marginRight: 2 }} />
              <Text>Adresse: {hotel?.location.address}</Text>
            </HStack>
            <HStack>
              <FaPhone style={{ marginRight: 2 }} />
              <Text>Téléphone: {hotel?.contact_info.phone_number}</Text>
            </HStack>
            <HStack>
              <FaEnvelope style={{ marginRight: 2 }} />
              <Text>Email: {hotel?.contact_info.email}</Text>
            </HStack>
            <HStack justify="center" spacing={4}>
              <Link
                href={hotel?.contact_info.facebook_url}
                to={hotel?.contact_info.facebook_url}
              >
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link
                href={hotel?.contact_info.x_url}
                to={hotel?.contact_info.x_url}
              >
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
              <Link
                href={hotel?.contact_info.instagram_url}
                to={hotel?.contact_info.instagram_url}
              >
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const hotelData = await fetch(
      `${process.env.NEXT_PUBLIC_API}/hotels/${id}`
    );
    const data = await hotelData.json();

    const servicesData = await fetch(
      `${process.env.NEXT_PUBLIC_API}/services/hotel/${id}`
    );
    const services = await servicesData.json();

    return {
      props: {
        hotelData: data,
        servicesData: services,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default HotelPreviewPage;
