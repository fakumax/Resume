import { Box, Center, Heading } from '@chakra-ui/react';
import Slider from './Slider';

const images = [
  { title: 'Card 1', description: 'This is the description for card 1.' },
  { title: 'Card 2', description: 'This is the description for card 2.' },
  { title: 'Card 3', description: 'This is the description for card 3.' },
];

const Cards = () => {
  return (
    <Box p={4} flex={1}>
      <Center>
        <Heading as="h1" size="md" mb={8}>
          My Projects
        </Heading>
      </Center>
      <Slider images={images} />
    </Box>
  );
};

export default Cards;
