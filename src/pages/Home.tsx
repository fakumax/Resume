import { Box } from '@chakra-ui/react';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Loader from '../components/Spinner';

const Home = () => (
  <Box textAlign="center" fontSize="xl" height="100vh">
    <Loader />
    <Body />
    <Footer />
  </Box>
);

export default Home;
