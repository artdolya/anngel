import { Container, Flex, Text, Input, Textarea, Button } from "@chakra-ui/react";

const ContactForm = () => {
    return (
        <Container maxW="4xl" mt="70px" px={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }}>
            <Flex 
                direction={{ base: "column", md: "row" }}
                justifyContent="center" 
                alignItems="center" 
                minHeight={{ base: '0px', md: '70dvh' }}
                gap={6}
            >
                <Flex flexDirection="column" maxW={{ base: "100%", md: "426px" }} flexGrow={1}>
                    <Text fontSize="2xl" fontWeight={400} lineHeight="shorter" textAlign={{ base: "center", md: "left" }}>
                        GET A FREE <br />CONSULTATION
                    </Text>
                    <Text
                        mt={4}
                        fontSize="sm"
                        fontWeight={300}
                        lineHeight="tall"
                        textAlign={{ base: "center", md: "left" }}
                    >
                        At ANNA DOLYA, luxury knows no bounds and we are excited to embark on this extraordinary journey with you. Contact us today, and let us redefine your world of opulence. Whether you aspire to create an awe-inspiring living space or explore our exclusive furniture, we are here to cater to your discerning tastes.
                    </Text>
                    <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="space-between" mt={6}>
                        <Flex flexDirection="column" alignItems={{ base: "center", md: "flex-start" }}>
                            <Text fontSize="md" fontWeight={300} textTransform="uppercase">Email us</Text>
                            <Text fontSize="md" fontWeight={300} mt={5}>info@exsample-email.com</Text>
                        </Flex>
                        <Flex flexDirection="column" alignItems={{ base: "center", md: "flex-start" }} mt={{ base: 4, md: 0 }}>
                            <Text fontSize="md" fontWeight={300} textTransform="uppercase">Call us</Text>
                            <Text fontSize="md" fontWeight={300} mt={5}>
                                +1 800 403 8310 <br /> +1 954 271 2636
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDirection="column" maxW={{ base: "100%", md: "360px" }} flexGrow={1} ml={{ md: 8 }} mt={{ base: 6, md: 20 }}>
                    <Text fontSize="lg" fontWeight={400} textTransform="uppercase" textAlign="left">Full name</Text>
                    <Input mb={4} variant="outline" />
                    <Flex direction={{ base: "column", md: "row" }} gap={4}>
                        <Flex flexDirection="column" width="full">
                            <Text fontSize="lg" fontWeight={400} textTransform="uppercase">Email</Text>
                            <Input variant="outline" />
                        </Flex>
                        <Flex flexDirection="column" width="full">
                            <Text fontSize="lg" fontWeight={400} textTransform="uppercase">Phone number</Text>
                            <Input variant="outline" />
                        </Flex>
                    </Flex>
                    <Text fontSize="lg" fontWeight={400} textTransform="uppercase" mt={4}>Message</Text>
                    <Textarea variant="outline" minHeight="140px" mb={4} />

                    <Button
                        mt={4}
                        fontSize="lg"
                        fontWeight={800}
                        backgroundColor="black"
                        color="white"
                        width="full"
                    >
                        Submit
                    </Button>
                </Flex>
            </Flex>
        </Container>
    );
}

export default ContactForm;
