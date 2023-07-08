import theme from '@/styles/theme';
import { Box, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box height="100vh" display="flex" alignItems="center" justifyContent="center" width="100vw">
      <Spinner color={theme.colors.tertiary} size="xl" />
    </Box>
  );
};

export default Loader;
