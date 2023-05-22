import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';

function About() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="1vh" p={3}>
          <h2>About</h2>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
export default About;
