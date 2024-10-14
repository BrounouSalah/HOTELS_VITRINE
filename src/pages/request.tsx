import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header/Header";
import { BackgroundPolygons } from "@/components/Homepage/Hero/BackgroundPolygons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  VStack,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

type RequestType = "Demo" | "Subscription";

type FormData = {
  request_type: RequestType;
  requester_email: string;
  requester_phone: string;
  hotel_email: string;
  hotel_phone: string;
  additional_info?: string;
};

const DemoRequestForm = () => {
  const [formData, setFormData] = useState<FormData>({
    request_type: "Demo",
    requester_email: "",
    requester_phone: "",
    hotel_email: "",
    hotel_phone: "",
    additional_info: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API + "/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(
          "Votre demande a été soumise avec succès nous vous contacterons au plus bref délais."
        );
        setIsError(false);
        setLoading(false);
        setFormData({
          request_type: "Demo",
          requester_email: "",
          requester_phone: "",
          hotel_email: "",
          hotel_phone: "",
          additional_info: "",
        });
      } else {
        setMessage(
          "Il y a eu une erreur lors de la soumission de votre demande."
        );
        setIsError(true);
        setLoading(false);
      }
    } catch (error) {
      setMessage(
        "Il y a eu une erreur lors de la soumission de votre demande."
      );
      setIsError(true);
      setLoading(false);
    }
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
        <BackgroundPolygons />
        <Header />
        <Flex
          as="form"
          onSubmit={handleSubmit}
          direction="column"
          align="center"
          justify="center"
          p={8}
          bgColor="gray.800"
          rounded="lg"
          shadow="lg"
          maxW="600px"
          w="100%"
          mx="auto"
        >
          <VStack spacing={4} w="100%">
            <FormControl id="request_type" isRequired>
              <FormLabel>Type de demande</FormLabel>
              <Select
                name="request_type"
                value={formData.request_type}
                onChange={handleChange}
              >
                <option value="demo">Démo</option>
                <option value="subscription">Abonnement</option>
              </Select>
            </FormControl>
            <FormControl id="requester_email" isRequired>
              <FormLabel>Votre Email</FormLabel>
              <Input
                type="email"
                name="requester_email"
                value={formData.requester_email}
                onChange={handleChange}
                placeholder="Votre email"
              />
            </FormControl>
            <FormControl id="requester_phone" isRequired>
              <FormLabel>Votre Téléphone</FormLabel>
              <Input
                type="tel"
                name="requester_phone"
                value={formData.requester_phone}
                onChange={handleChange}
                placeholder="Votre téléphone"
              />
            </FormControl>
            <FormControl id="hotel_email" isRequired>
              <FormLabel>Email de l'Hôtel</FormLabel>
              <Input
                type="email"
                name="hotel_email"
                value={formData.hotel_email}
                onChange={handleChange}
                placeholder="Email de l'hôtel"
              />
            </FormControl>
            <FormControl id="hotel_phone" isRequired>
              <FormLabel>Téléphone de l'Hôtel</FormLabel>
              <Input
                type="tel"
                name="hotel_phone"
                value={formData.hotel_phone}
                onChange={handleChange}
                placeholder="Téléphone de l'hôtel"
              />
            </FormControl>
            <FormControl id="additional_info">
              <FormLabel>Informations Supplémentaires</FormLabel>
              <Textarea
                name="additional_info"
                value={formData.additional_info}
                onChange={handleChange}
                placeholder="Informations supplémentaires"
              />
            </FormControl>
            <Button
              isLoading={loading}
              disabled={loading}
              type="submit"
              colorScheme="blue"
            >
              Soumettre la Demande
            </Button>
            {message && (
              <Text align={"center"} color={isError ? "red.500" : "green.500"}>
                {message}
              </Text>
            )}
          </VStack>
        </Flex>
      </Flex>
      <Footer />
    </Stack>
  );
};

export default DemoRequestForm;
