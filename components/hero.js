import {
  Stack,
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <>
      <Stack
        as={Box}
        textAlign="center"
        pb={{ base: 20, md: 36 }}
        pt={{ base: 36, md: 44 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "xl", sm: "4xl", md: "7xl" }}
          lineHeight={{ base: "110%" }}
        >
          Welcome to DevFlow <br />
          <Text as={"span"} color="teal.400">
            IT Project Management
          </Text>
        </Heading>
        <Text color="gray.400" fontSize="lg" mb={6}>
          make contact Planning your work is easier with Devflow.
        </Text>
        <Stack
          direction="column"
          position="relative"
          alignSelf="center"
          align="center"
        >
          <Button
            px={8}
            rounded="md"
            colorScheme="teal"
            color="whitesmoke"
            bg="teal.500"
            _hover={{ bg: "teal.600" }}
          >
            Get Started
          </Button>
          <Button
            variant="link"
            colorScheme="blue"
            size="md"
          >
            Learn More
          </Button>
        </Stack>
      </Stack>
    </>
  )
}