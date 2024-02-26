'use client'

import React, { useState } from 'react'
import { Flex, Image, Box, Text } from '@chakra-ui/react'

const RoomProjects = () => {
    
    const images = [
        { src: '/room1.jpg', alt: '1', label: 'Living Room' },
        { src: '/room2.jpg', alt: '2', label: 'Kitchen' },
        { src: '/room3.jpg', alt: '3', label: 'Bed Room' },
        { src: '/room4.jpg', alt: '4', label: 'Children Room' },
        { src: '/room5.jpg', alt: '5', label: 'Bathroom' },
        { src: '/room6.jpg', alt: '6', label: 'Others' }
    ];

    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <Flex
    direction={{ base: 'column', md: 'row' }}
    h={{ base: 'auto', md: '100vh' }}    
    gap="2px"
    mt={{ base: '55px', md: '95px' }}          
>
    {images.map((image, index) => (
        <Flex key={index} position="relative" w={{ base: '100%', md: '16.6%' }} mb={{ base: '20px', md: '0' }} onMouseEnter={() => setHoveredImage(index)} onMouseLeave={() => setHoveredImage(null)}>
            <Image
                src={image.src}
                alt={image.alt}
                objectFit="cover"
                objectPosition="center"
                w='100%'
                h={{ base: '350px', md: '100%' }}
                filter={hoveredImage === index ? 'none' : 'grayscale(100%)'}
                transition="filter 0.3s"
            />
            {hoveredImage === index && (
                <Text
                    position="absolute"
                    bottom="10px"
                    right="10px"
                    fontSize="32px"
                    fontWeight="900"
                    color="white"
                    textTransform="uppercase"
                    textAlign="right"
                >
                    {image.label}
                </Text>
            )}
        </Flex>
    ))}
</Flex>
    )
}

export default RoomProjects