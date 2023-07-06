import { Spinner } from '@chakra-ui/react';
import theme from '../styles/theme';

const Loader = () => {
  return <Spinner color={theme.colors.tertiary} />;
};

export default Loader;
