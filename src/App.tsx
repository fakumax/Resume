import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

export const App = () => (
  <Box textAlign='center' fontSize='xl'>
    <Navbar />
    <Body />
    <Footer />
  </Box>
);
