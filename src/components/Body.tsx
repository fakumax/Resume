import { Grid, GridItem, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import { VscGithub } from 'react-icons/vsc';
const Body = () => {
  return (
    <Grid
      h='100vh'
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
    </Grid>
  );
};

export default Body;
