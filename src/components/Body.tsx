import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";
import {
    Stack, HStack, VStack, Text, Link, Flex, useColorModeValue,
    useBreakpointValue,
} from "@chakra-ui/react"
import { VscGithub } from "react-icons/vsc";
import { RiTelegramFill } from "react-icons/ri";
import { AiOutlineWhatsApp, AiFillLinkedin} from "react-icons/ai";
const Body = () => {
    return (
        <SimpleGrid columns={{ base: 1, sm: 2 }} >
            <Box bg="blue.400" height="20rem">
                <VStack
                    h='100%'
                    spacing={4}
                    align="center"
                    isInline={false}
                    justify='center'

                >
                    <Image
                        borderRadius="full"
                        boxSize="150px"
                        src="https://bit.ly/3kcBHy7"
                        alt="Facundo Vergara"
                    />
                    <Text fontWeight='700'>Full Stack Web Developer</Text>
                    <HStack spacing={2} m={4}>
                        <VscGithub />
                        <AiFillLinkedin />
                        <AiOutlineWhatsApp />
                        <RiTelegramFill />
                    </HStack>

                </VStack>
            </Box>

            <Box bg="tomato" height="20rem" >
                <VStack
                    h='100%'
                    spacing={4}
                    align="center"
                    isInline={false}
                    justify='center'

                >

                    <Text>Me apasiona la tecnología y la programación, estoy comprometido en aprender
                        y utilizar siempre las mejores prácticas. Soy desarrollador Full Stack pero lo
                        que realmente me gusta es el Frontend, uso tecnologías como Javascript, React,
                        Redux y varias herramientas más.
                    </Text>
                    <Text>
                        Si estás interesado podés contactarme!
                    </Text>
                    <Text>
                        <Flex
                            alignSelf={'center'}
                            display={{ base: 'none', md: 'inline-flex' }}
                            textAlign={({ base: 'center', md: 'left' })}
                            fontFamily={'sans-serif'}
                            fontSize='small'
                            color={useColorModeValue('gray.800', 'white')}>
                            CV/Resume:
                        </Flex>

                        <Link
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={700}
                            textTransform='uppercase'
                            alignSelf='center'
                            href={'https://drive.google.com/uc?export=download&id=19f-2CacDvsE3mBeev_zl0WSFrTJuKwBr'}
                            _hover={{
                                color: '#ffc214'
                            }}
                        >
                            Eng
                        </Link>

                        <Link
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={700}
                            href='https://drive.google.com/uc?export=download&id=1hEg3uAEKoTSEZpbRpe3lO3yGMxPHGXEf'
                            textTransform='uppercase'
                            alignSelf='center'
                            _hover={{
                                color: '#ffc214'
                            }}
                        >
                            Esp
                        </Link>
                    </Text>

                </VStack>
            </Box>
        </SimpleGrid>



    )
}

export default Body
