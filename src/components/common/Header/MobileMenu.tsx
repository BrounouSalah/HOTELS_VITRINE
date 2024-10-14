import { Button, Collapse, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = { isOpen: boolean };

export const MobileMenu = ({ isOpen }: Props) => (
  <Collapse in={isOpen}>
    <Stack
      pos="absolute"
      insetX={0}
      bgGradient="linear(to-b, gray.900, gray.800)"
      px="6"
      py="10"
      spacing={4}
    >
      <Button as={Link} href="/request" colorScheme="orange" fontWeight={700}>
        S'abonner
      </Button>
      <Button
        as={Link}
        href="/hotels"
        variant="outline"
        colorScheme="gray"
        fontWeight={700}
      >
        Hotels
      </Button>
      <Button
        as={Link}
        href="/about"
        variant="outline"
        colorScheme="gray"
        fontWeight={700}
      >
        About
      </Button>
    </Stack>
  </Collapse>
);
