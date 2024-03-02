import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import '../globals.css'

const PostCard = ({ imageSrc, title, description, category }) => {

    return (
        <Flex 
            justifyContent={'center'} 
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}
            flexDirection={{ base: 'column-reverse', lg: 'row' }}
            alignItems={{ base: 'center', lg: 'flex-start' }}
            mt={'100px'}
            className="postCardAnimation"
            
        >
            <Flex 
                flexDir={'column'} 
                maxW={'570px'} 
                marginRight={{ base: '0px', lg: '70px' }} 
                mt={{ base: '20px', lg: '0px' }}
                textAlign={{ base: 'center', lg: 'left' }}
                
            >
                <Text
                    fontSize={{ base: '10px', md: '11px', lg: '12px' }}
                    fontWeight={500}
                    letterSpacing={2}
                    color={'rgb(138, 139, 138)'}
                >
                    {category}
                </Text>
                <Text
                    mt={'50px'}
                    fontSize={{ base: '24px', md: '30px', lg: '37.5px' }}
                    fontWeight={900}
                >
                    {title}
                </Text>
                <Text
                    mt={'19px'}
                    fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                    fontWeight={300}
                    color={'rgb(76, 76, 76)'}
                    lineHeight={{ base: '30px', lg: '35px' }}
                >
                   {description}
                </Text>
            </Flex>
            <Image 
                src={imageSrc} 
                alt="post1"
                objectFit="cover"
                maxW={'565px'}
                maxH={'339px'}
                w={{ base: '100%', md: '70%', lg: 'auto' }} 
                h={{ base: 'auto', lg: '339px' }}
                sx={{
                    transition: '0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    }
                }}
            />
        </Flex>
    )
}

export default PostCard;
