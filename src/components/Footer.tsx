import { Flex, HStack, Link, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex height={'10%'} placeContent={'center'}>
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
              'https://drive.google.com/uc?export=download&id=REDACTED_CV_ID'
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
          href='https://drive.google.com/uc?export=download&id=REDACTED_CV_ID'
          textTransform='uppercase'
          alignSelf='center'
          _hover={{
            color: '#ffc214',
          }}
        >
          Español
        </Link>
      </HStack>
    </Flex>
  );
};

export default Footer;
