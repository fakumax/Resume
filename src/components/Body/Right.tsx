import theme from '@/styles/theme';
import { HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import { VscGithub } from 'react-icons/vsc';

const Right = () => {
  return (
    <VStack flex={1} height={'inherit'} placeSelf={'center'}>
      <VStack flex={1} spacing={4} align="center" justify="center">
        <Image borderRadius="full" boxSize="250px" src="https://bit.ly/3kcBHy7" alt="Facundo Vergara" />
        <Text fontWeight="700" m={0} p={0}>
          Full Stack Web Developer
        </Text>
        <HStack spacing={8} m={0}>
          <Link color={theme.colors.tertiary} href={'https://github.com/fakumax/'} isExternal>
            <VscGithub />
          </Link>
          <Link color={theme.colors.tertiary} href={'https://www.linkedin.com/in/fakumax/'} isExternal>
            <AiFillLinkedin />
          </Link>
          <Link
            color={theme.colors.tertiary}
            href={'https://api.whatsapp.com/send?phone=5493764721108&text=Hola!'}
            isExternal
          >
            <AiOutlineWhatsApp />
          </Link>
          <Link color={theme.colors.tertiary} href={'https://t.me/fakumax'} isExternal>
            <RiTelegramFill />
          </Link>
        </HStack>
      </VStack>
      <VStack flex={1} align="center" justify="center">
        <Text fontSize="md">
          Me apasiona la tecnología y la programación. Estoy comprometido en aprender y utilizar las mejores prácticas.
          Soy desarrollador Front-End, uso tecnologías como JavaScript, TypeScript, React, NextJS, Redux y muchas más.
        </Text>
      </VStack>
    </VStack>
  );
};

export default Right;
