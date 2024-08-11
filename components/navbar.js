'use client'
import {
  Box,
  Container,
  Stack,
  Flex,
  useColorModeValue,
  Button,
  Text,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';

import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import ToggleMenu from './toggleMenu';

export default function Navbar() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} p={{ base: 0, md: 4 }}>
      <Container
        as={Stack}
        direction={"row"}
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
        maxW="100%"
      >
        <Flex alignItems="center" mt={3}>
          <Text
            fontWeight={600}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontFamily="heading"
          >
            <Text as="span" color="teal.500">{"< "}</Text>
            DevFlow
            <Text as="span" color="teal.500">{" >"}</Text>
          </Text>
          <Stack
            direction="row"
            spacing={4}
            ml={10}
            display={{ base: "none", md: "flex" }}
          >
            <Box>
              <Box
                as="a"
                p={2}
                href="#home"
                fontSize={'md'}
                fontWeight={500}
                borderBottom="4px solid teal"
                color={useColorModeValue('gray.700', 'white')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('teal.500', 'teal.300'),
                }}
              >
                Home
              </Box>
            </Box>
            <Box>
              <Box
                as="a"
                p={2}
                href="#features"
                fontSize={'md'}
                fontWeight={500}
                color={useColorModeValue('gray.700', 'white')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('teal.500', 'teal.300'),
                }}
              >
                Features
              </Box>
            </Box>
            <Box>
              <Box
                as="a"
                p={2}
                href="#pricing"
                fontSize={'md'}
                fontWeight={500}
                color={useColorModeValue('gray.700', 'white')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('teal.500', 'teal.300'),
                }}
              >
                Pricing
              </Box>
            </Box>
            <Box>
              <Box
                as="a"
                p={2}
                href="#about"
                fontSize={'md'}
                fontWeight={500}
                color={useColorModeValue('gray.700', 'white')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('teal.500', 'teal.300'),
                }}
              >
                About
              </Box>
            </Box>
            <Box>
              <Box
                as="a"
                p={2}
                href="#contact"
                fontSize={'md'}
                fontWeight={500}
                color={useColorModeValue('gray.700', 'white')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('teal.500', 'teal.300'),
                }}
              >
                Contact
              </Box>
            </Box>
            <Box>
              <Box
                as="a"
                p={2}
                href="#faq"
                fontSize={'md'}
                fontWeight={500}
                color={useColorModeValue('gray.700', 'white')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('teal.500', 'teal.300'),
                }}
              >
                FAQ
              </Box>
            </Box>
          </Stack>
        </Flex>
        <Box>
          <Stack direction="row" spacing={2}>
            <Button display={{ base: "none", md: "block" }} bg="teal.400" color="white" _hover={{ bg: "teal.500" }}>
              Get Started
            </Button>
            <ToggleMenu />
            <IconButton
              colorScheme={useColorModeValue('purple', 'orange')}
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              onClick={toggleColorMode}/>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
