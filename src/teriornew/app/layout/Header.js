'use client'

import React, { useState } from "react";
import SETTINGS from "../settings";
import { Container, Flex, Text, Image, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure } from "@chakra-ui/react";
import { Link } from '@chakra-ui/next-js'
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const {siteName } = SETTINGS;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  
  return (
    <Flex as="header" position="fixed" h="80px" bg="white" w="full" zIndex={999} boxShadow='md'>
      <Container maxW="8xl">
        <Flex px={6} py={4} justifyContent='space-between'>
          <Flex>
            <Link href='/'>
              <Flex h="48px">
                  <Image src='/logo.png' htmlHeight="100%" alt={siteName}/>
              </Flex>
            </Link>
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            w='600px'
            justifyContent='space-around'
            alignItems="center"
            letterSpacing={1}
          >
            <Link href='/about' fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
              ABOUT
            </Link>
            <Link href='/projects' fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
              PROJECTS
            </Link>
            <Link href='/services' fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
              SERVICES
            </Link>
            <Link href='/contacts' fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
              CONTACTS
            </Link>
            <Link href='/faq' fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
              FAQ
            </Link>
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
            >
              <IoMdMenu />
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
                  <Link href='/' fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
                    ABOUT
                  </Link>
                  <Link href='/projects' fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
                    PROJECTS
                  </Link>
                  <Link href='/services' fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
                    SERVICES
                  </Link>
                  <Link href='/contacts' fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
                    CONTACTS
                  </Link>
                  <Link href='/faq' fontSize='lg' fontWeight='900' color='black' _hover={{ color: 'grey' }}>
                    FAQ
                  </Link>
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
