'use client'
import React from 'react'
import Layout from './layout/Layout'
import { Container, Text, Button, Flex, Link, Center } from '@chakra-ui/react'
import Hero from './components/Hero'

export default function Page() {

  return (
    <Layout >
       <Flex className="hero" direction="column" h="100dvh">
        <Flex className="hero__separator" h="80px" />
          <Flex
            className="hero__container"
            w="full"
            alignItems="center"
            justifyContent="center"
            h="calc(100dvh - 200px)"
          >
            <Hero />
          </Flex>
        <Flex>
          <Container maxW="8xl">
            
          </Container>
        </Flex>
      </Flex>
    </Layout>
  )
}