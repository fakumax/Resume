import { Box } from '@chakra-ui/react';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';

export const App = () => (
  <Box textAlign='center' fontSize='xl' height='100vh'>
    <Navbar />
    <Body />
    <Footer />
  </Box>
);
