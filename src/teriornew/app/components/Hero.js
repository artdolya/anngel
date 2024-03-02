import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import SETTINGS from "../settings";

const Hero = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
    >
      <Image
        src="/hero.png"
        alt={SETTINGS.siteName}
        objectFit="cover"
        minH="100vh"
        minW="100%"
        position="absolute"
      />
      <Flex
        position="absolute"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        color="black"
        fontWeight={700}
        zIndex={2}
        px={{ base: 4, md: 8 }}
        
      >
        <Text fontSize={{ base: '24px', md: '38px', lg: '48px' }} letterSpacing={3}>Generating cozy interiors</Text>
      </Flex>
    </Flex>
  );
};

export default Hero;