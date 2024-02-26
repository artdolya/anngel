'use client'
import React from 'react'
import Layout from './layout/Layout'
import { Container, Text, Button, Flex} from '@chakra-ui/react'
import Hero from './components/Hero'
import { SlArrowDown } from "react-icons/sl";

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
      <Container maxW="8xl" mt={'175px'}>
            <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'40px'}>
              <Text 
              fontSize={'32px'}
              fontWeight={700}
              letterSpacing={2}
              >
                About Anna Dolya
              </Text>
              <Text 
               fontSize={'32px'}
               fontWeight={300}
               textAlign={'center'}
               maxW={'806px'}
              >
                Щоб не створила твоя уява, завжди знайдеться той, хто це вже зробив до тебе.
                <br />
                Отже, головне - зробити це краще. 
              </Text>
              <Button 
                w={'254px'}
                h={'47px'}
                variant='outline'
                colorScheme='black'
                _hover={{ bg: 'gray.100' }}
                textTransform={'uppercase'}
                >
                Projects
              </Button>
              <SlArrowDown size={'57px'}/>
            </Flex>   
          </Container>
    </Layout>
  )
}