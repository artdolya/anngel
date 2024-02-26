
import React from 'react'
import { Container, Text, Button, Flex} from '@chakra-ui/react'
import { SlArrowDown } from "react-icons/sl";

const Subhero = () => {
    return (
        <Container maxW="8xl" mt={{ base: '50px', md: '100px', lg: '175px'}}>
            <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'40px'}>
                <Text 
                    fontSize={{ base: '24px', md: '28px', lg: '32px' }}
                    fontWeight={700}
                    letterSpacing={2}
                    >
                    About Anna Dolya
                </Text>
                <Text 
                fontSize={{ base: '24px', md: '28px', lg: '32px' }}
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
    )
}

export default Subhero;