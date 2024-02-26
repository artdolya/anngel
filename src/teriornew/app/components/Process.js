import { Flex, Text, Container, Image, Button } from '@chakra-ui/react';

const Process = () => {
  const steps = [
    { src: '/rec1.png', alt: 'Planing', label: 'Planing' },
    { src: '/rec2.png', alt: 'Design', label: 'Design' },
    { src: '/rec3.png', alt: 'Drawing', label: 'Drawing' },
    { src: '/rec4.png', alt: 'Realization', label: 'Realization' },
  ];

  return (
    <Container maxW="8xl" mt={{ base: '100px', md: '200px' }}>
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={{ base: 4, md: 8 }}
      >
        <Text
          fontSize={{ base: '24px', md: '32px' }}
          fontWeight={700}
          textTransform={'uppercase'}
        >
          Services
        </Text>
        <Text
          fontSize={{ base: '24px', md: '32px' }}
          fontWeight={300}
          textTransform={'uppercase'}
        >
          SHOW PROCESS OF WORK
        </Text>
      </Flex>
      <Flex
        justifyContent={'space-around'}
        mt={{ base: '50px', md: '75px' }}
        mb={{ base: '65px', md: '130px' }}
        flexWrap="wrap"
      >
        {steps.map((step) => (
          <Flex
            key={step.alt}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            mb={{ base: '20px', md: '0' }}
            w={{ base: '100%', sm: '50%', lg: '25%' }}
          >
            <Image
              src={step.src}
              alt={step.alt}
              objectFit="cover"
              boxSize={{ base: '150px', md: '200px', lg: '250px' }}
            />
            <Text
              fontSize={{ base: '20px', md: '24px', lg: '32px' }}
              fontWeight={700}
              textTransform={'uppercase'}
              mt={{ base: 2, md: 3 }}
            >
              {step.label}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Button
        display={'block'}
        m={'0 auto'}
        w={{ base: '100%', sm: '50%', md: '383px' }}
        h={{ base: '40px', md: '47px' }}
        variant='outline'
        colorScheme='black'
        _hover={{ bg: 'gray.100' }}
        textTransform={'uppercase'}
        mb={{ base: '100px', md: '200px' }}
        fontSize={{ base: '14px', md: '16px' }}
      >
        CALCULATE THE COST
      </Button>
    </Container>
  );
};

export default Process;
