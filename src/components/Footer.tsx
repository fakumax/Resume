import { Flex, GridItem, HStack, Link, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
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

        {/* <Link
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
          </Link> */}

        <Link
          fontSize={'sm'}
          fontWeight={700}
          href='https://drive.google.com/uc?export=download&id=18BvooWmoNCT5HYSIB3_OguiHjSPxogEo'
          textTransform='uppercase'
          alignSelf='center'
          _hover={{
            color: '#ffc214',
          }}
        >
          Español
        </Link>
      </HStack>
    </GridItem>
  );
};

export default Footer;
