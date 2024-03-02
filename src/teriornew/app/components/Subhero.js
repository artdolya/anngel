
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
                    textTransform={'uppercase'}
                    >
                    About Anna Dolya
                </Text>
                <Text 
                fontSize={{ base: '24px', md: '28px', lg: '32px' }}
                fontWeight={300}
                textAlign={'center'}
                textTransform={'uppercase'}
                >
                     я ЛЮБЛЮ СВОЇХ ЗАМОВНИКІВ.
                     <br/>
                    лЮБЛЮ ЗА ДОВІРУ, ЯКУ ДО МЕНЕ ВИЯВЛЯЮТЬ.
                    <br/>
                    лЮБЛЮ ЗА РОЗГУБЛЕНЕ: “Я НЕ ЗНАЮ, ЧОГО ХОЧУ”.
                    <br/>
                    лЮБЛЮ ЗА ВПЕВНЕНЕ: “я ХОЧУ, ЩОБ БУЛО КРАСИВО”.
                    <br/>
                    лЮБЛЮ ЗА ЩАСЛИВЕ: “тАК, ЦЕ ВОНО! яК ВИ ЗДОГАДАЛИСЯ?”
                    <br/>
                    я ЗДОГАДУЮСЯ ВЖЕ 10 РОКІВ. і ДО СИХ ПІР НЕ ЗНАЮ, ЯК. 
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