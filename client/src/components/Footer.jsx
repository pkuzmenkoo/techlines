import {
    ButtonGroup,
    Container,
    IconButton,
    Stack,
    Text,
    Box,
    useColorModeValue,
    Flex,
    Icon,
    Button,
    Input,
    Divider
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";

export const Footer = () => (
    <Box w="100%" bg={useColorModeValue("gray.100", "gray.900")}>
        <Container as="footer" role="contentinfo" maxW={{ lg: "7xl" }}>
            <Stack
                spacing="8"
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                py={{ base: "12", md: "row" }}
            >
                <Stack spacing={{ base: "6", md: "8" }} align="start">
                    <Flex alignItems="center">
                        <Icon
                            as={GiTechnoHeart}
                            h={10}
                            w={10}
                            color={useColorModeValue(
                                "orange.400",
                                "orange.600"
                            )}
                        />
                    </Flex>
                    <Text color="muted">We love technology!</Text>
                </Stack>
                <Stack
                    direction={{
                        base: "column-reverse",
                        md: "column",
                        lg: "row",
                    }}
                    spacing={{ base: "12", md: "8" }}
                >
                    <Stack direction="row" spacing="8">
                        <Stack spacing="4" minW="36" flex="1">
                            <Text
                                fontSize="sm"
                                fontWeight="semibold"
                                color="subtle"
                            >
                                Product
                            </Text>
                            <Stack spacing="3" shouldWrapChildren>
                                <Button variant="link">How it works</Button>
                                <Button variant="link">Pricing</Button>
                                <Button variant="link">Use Cases</Button>
                            </Stack>
                        </Stack>
                        <Stack spacing="4" minW="36" flex="1">
                            <Text
                                fontSize="sm"
                                fontWeight="semibold"
                                color="subtle"
                            >
                                Legal
                            </Text>
                            <Stack spacing="3" shouldWrapChildren>
                                <Button variant="link">Privacy</Button>
                                <Button variant="link">Terms</Button>
                                <Button variant="link">License</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack spacing='4'>
                        <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                            Stay up to date
                        </Text>
                        <Stack spacing='4' direction={{base: 'column', sm: 'row'}} maxW={{lg: '360px'}}>
                            <Input placeholder="Enter your email" type="email" required />
                            <Button variant='primary' type="submit" flexShrink={0}>
                                Subscribe
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Divider />
            <Stack pt='8' pb='12' justify='space-between' direction={{base: 'column-reverse', md: 'row'}} align='center'>
                <Text fontSize='sm' color='subtle'>
                    &copy; {new Date().getFullYear()} Tech Lines, Inc. All rights reserved.
                </Text>
                <ButtonGroup variant='ghost'>
                    <IconButton as='a' href="#" aria-label="Linkedin" icon={<FaLinkedin fontSize='1.25rem' />} />
                    <IconButton as='a' href="#" aria-label="Githup" icon={<FaGithub fontSize='1.25rem' />} />
                    <IconButton as='a' href="#" aria-label="Twitter" icon={<FaTwitter fontSize='1.25rem' />} />
                </ButtonGroup>
            </Stack>
        </Container>
    </Box>
);
