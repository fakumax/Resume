import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import {
  Stack,
  HStack,
  VStack,
  Text,
  Link,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import { RiTelegramFill } from 'react-icons/ri';
import { AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai';
import { Grid, GridItem } from '@chakra-ui/react';
const Body = () => {
  return (
    <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(4, 1fr)'
      gap={0}
    >
      <GridItem colSpan={{ base: 4, sm: 2 }} height={{ base: '54vh', sm: '84vh' }}>
        <VStack h='100%' spacing={8} align='center' isInline={false} justify='center'>
          <Image
            borderRadius='full'
            boxSize='250px'
            src='https://bit.ly/3kcBHy7'
            alt='Facundo Vergara'
          />
          <Text fontWeight='700'>Full Stack Web Developer</Text>
          <HStack spacing={4} m={4}>
            <Link href={'https://github.com/fakumax/'} isExternal>
              <VscGithub />
            </Link>
            <Link href={'https://www.linkedin.com/in/fakumax/'} isExternal>
              <AiFillLinkedin />
            </Link>
            <Link
              href={'https://api.whatsapp.com/send?phone=5493764721108&text=Hola!'}
              isExternal
            >
              <AiOutlineWhatsApp />
            </Link>
            <Link href={'https://t.me/fakumax'} isExternal>
              <RiTelegramFill />
            </Link>
          </HStack>
        </VStack>
      </GridItem>
      <GridItem colSpan={{ base: 4, sm: 2 }} height={{ base: '54vh', sm: '84vh' }}>
        <VStack h='100%' spacing={4} align='center' isInline={false} justify='center'>
          <Text>
            Me apasiona la tecnología y la programación, estoy comprometido en aprender y
            utilizar siempre las mejores prácticas. Soy desarrollador Full Stack pero lo
            que realmente me gusta es el Frontend, uso tecnologías como Javascript, React,
            Redux y varias herramientas más.
          </Text>
          <Text>Si estás interesado podés contactarme!</Text>
        </VStack>
      </GridItem>

      <GridItem colSpan={4} pb={2}>
        <HStack justify='center'>
          <Flex
            textTransform='uppercase'
            alignSelf={'center'}
            textAlign={{ base: 'center' }}
            fontFamily={'sans-serif'}
            fontSize='small'
            color={useColorModeValue('gray.800', 'white')}
          >
            Descargar CV/Resume:
          </Flex>

          <Link
            fontSize={'sm'}
            fontWeight={700}
            textTransform='uppercase'
            alignSelf='center'
            href={
              'https://drive.google.com/uc?export=download&id=19f-2CacDvsE3mBeev_zl0WSFrTJuKwBr'
            }
            _hover={{
              color: '#ffc214',
            }}
          >
            Eng
          </Link>

          <Link
            fontSize={'sm'}
            fontWeight={700}
            href='https://drive.google.com/uc?export=download&id=1hEg3uAEKoTSEZpbRpe3lO3yGMxPHGXEf'
            textTransform='uppercase'
            alignSelf='center'
            _hover={{
              color: '#ffc214',
            }}
          >
            Esp
          </Link>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Body;
