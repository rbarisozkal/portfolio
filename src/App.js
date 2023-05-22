import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="1vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
