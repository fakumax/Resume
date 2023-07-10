import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Slider = ({ images }) => {
  console.log(images);
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <Box width="100%" position="relative">
      <Flex alignItems="center" justifyContent="space-between" mb={2}>
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon />}
          onClick={handlePrev}
          size="sm"
          disabled={images.length <= 1}
        />
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon />}
          onClick={handleNext}
          size="sm"
          disabled={images.length <= 1}
        />
      </Flex>
      <Box position="relative">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            opacity={index === currentImage ? 1 : 0}
            transition="opacity 0.3s ease-in-out"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
