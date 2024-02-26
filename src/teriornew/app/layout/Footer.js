import React from "react";
import SETTINGS from "../settings";
import { Container, Flex, Text, Image, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const { siteName } = SETTINGS;
  
  const footerLinks = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/contacts', label: 'CONTACTS' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/services', label: 'SERVICES' }
  ];

  return (
    <Flex as="footer" bg="white" justifyContent="center">
      <Container maxW="8xl" px={4}>
        <Flex flexDirection="column" alignItems="center" gap={4}>
          <Flex alignItems="center">
            <Image src='/logo.png' htmlHeight="100%" alt='logo'></Image>
            <Text
              ml={2} 
              fontSize={['24px', '28px', '36px']}
              fontWeight={900}
              color={'black'}
              textTransform="uppercase"
            >{siteName}</Text>
          </Flex>
          <Flex flexDirection={['column', 'row']} alignItems={['center', 'center', 'flex-end']} justifyContent={['center', 'space-around']} w={['100%', '600px']} gap={4}>
            {footerLinks.map(({ href, label }) => (
              <Link 
                key={label}
                href={href} 
                fontSize={['16px', '18px', '20px']}
                fontWeight='900' 
                color='gray' 
                textTransform="uppercase"
                _hover={{ color: 'black' }}
              >
                {label}
              </Link>
            ))}
          </Flex>
          <Flex gap={4}>
            <FaFacebook size={'28px'} /> 
            <FaInstagram size={'28px'} />
            <FaTelegram size={'28px'} />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Footer;
