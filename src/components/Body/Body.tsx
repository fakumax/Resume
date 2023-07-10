import { Flex } from '@chakra-ui/react';
import { Right } from '@components/Body';
import { Cards } from '@components/Cards';

const Body = () => {
  return (
    <Flex height={'80%'} paddingX={20}>
      <Cards />
      <Right />
    </Flex>
  );
};

export default Body;
