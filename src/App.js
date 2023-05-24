import React from 'react';
import { ChakraProvider, Box, theme, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import MyProjects from './pages/Projects';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import SideMenu from './components/SideMenu';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="1vh" p={3}>
          <SideMenu />
          <ButtonGroup>
            <Button as={Link} to="/" colorScheme="teal" variant="ghost">
              Home
            </Button>
            <Button as={Link} to="/about" colorScheme="teal" variant="ghost">
              About Me
            </Button>
            <Button as={Link} to="/projects" colorScheme="teal" variant="ghost">
              Academic Info
            </Button>
          </ButtonGroup>
          <Spacer />
          <ColorModeSwitcher alignSelf="flex-end" justifySelf="flex-end" />
        </Flex>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<MyProjects />}></Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
