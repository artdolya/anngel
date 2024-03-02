'use client'

import React, { useRef } from "react";
import SETTINGS from "../settings";
import { 
  Container, Flex, Image, Button, Drawer, DrawerOverlay, 
  DrawerContent, DrawerCloseButton, DrawerHeader, 
  DrawerBody, DrawerFooter, useDisclosure } from "@chakra-ui/react";
import { Link } from '@chakra-ui/next-js'
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const { siteName } = SETTINGS;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const links = [
    { href: '/about', label: 'ABOUT' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/services', label: 'SERVICES' },
    { href: '/contacts', label: 'CONTACTS' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <Flex as="header" position="fixed" h="80px" bg="white" w="full" zIndex={999} boxShadow='md'>
      <Container maxW="8xl">
        <Flex px={6} py={4} justifyContent='space-between'>
          <Link href='/'>
            <Flex h="48px">
                <Image src='/logo.png' htmlHeight="100%" alt={siteName}/>
            </Flex>
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            w='600px'
            justifyContent='space-around'
            alignItems="center"
            letterSpacing={1}
          >
            {links.map(link => (
              <Link key={link.href} href={link.href} fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
                {link.label}
              </Link>
            ))}
          </Flex>
          <Button
            display={{ base: "none", md: "block" }} 
            w='383px'
            h='47px'
            variant='outline'
            colorScheme='black'
            _hover={{ bg: 'gray.100' }}
            textTransform={'uppercase'}
          >
            CALCULATE THE COST
          </Button>
          <Button
              display={{ base: "block", md: "none" }}
              ref={btnRef}
              onClick={onOpen}
              mt={'4px'}
              bg="transparent"
            >
              <IoMdMenu size={35}/>
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Flex direction="column">
                  {links.map(link => (
                    <Link key={link.href} href={link.href} fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
                      {link.label}
                    </Link>
                  ))}
                </Flex>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  w='100%'
                  h='47px'
                  border='1px solid'
                  fontSize='lg'
                  fontWeight={700}
                  backgroundColor={'white'}
                >
                  CALCULATE THE COST
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
