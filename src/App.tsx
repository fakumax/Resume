import React from "react";
import {
  Box,
  Grid,
} from "@chakra-ui/react"
import Navbar from './components/Navbar/Navbar';

export const App = () => (
 
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
 
        <Navbar />
      </Grid>
    </Box>

)
