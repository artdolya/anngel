import React from "react";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import SETTINGS from "../settings";

const Hero = () => {
  return (
    <Flex
    alignItems="center"
    justifyContent="center"
    h="100%"
    w="100%"
    position="relative"
  >
    <Image
      src="/hero.png"
      alt={SETTINGS.siteName}
      objectFit="cover"
      maxHeight="100%"
      w="100%"
    />
    <Flex
      position="absolute"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      color="black"
      fontWeight={700}
      zIndex={1}
      px={{ base: 4, md: 8 }}
    >
      <Text fontSize={{ base: '24px', md: '38px', lg: '48px' }} letterSpacing={3}>Generating cozy interiors</Text> {/* Изменяем размер текста в зависимости от ширины экрана */}
    </Flex>
  </Flex>
  );
};

export default Hero;
