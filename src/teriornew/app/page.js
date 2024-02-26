
import React from 'react'
import Layout from './layout/Layout'
import {Flex} from '@chakra-ui/react'
import Hero from './components/Hero'
import Subhero from './components/Subhero'
import RoomProjects from './components/RoomProjects'

export default function Page() {

  return (
    <Layout >
      <Flex className="hero" maxH="calc(100dvh - 200px)">
        <Flex className="hero__separator" h="65px" />
          <Flex
            className="hero__container"
            w="full"
            alignItems="center"
            justifyContent="flex-start"
            maxH="calc(100dvh - 200px)"
          >
            <Hero />
          </Flex>
      </Flex>
      <Subhero/>
      <RoomProjects/>
    </Layout>
  )
}