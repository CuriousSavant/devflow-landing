'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react'

const Testimonial = (props) => {
  const { children } = props;
  return <Box>{children}</Box>
}

const TestimonialContent = (props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.700")}
      boxShadow="lg"
      p={8}
      rounded="xl"
      align="center"
      pos="relative"
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props) => {
  const { children } = props;
  return (
    <Heading as="h3" fontSize="2xl">
      {children}
    </Heading>
  )
}

const TestimonialText = (props) => {
  const { children } = props;

  return (
    <Text
      textAlign="center"
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize="14px">
      {children}
    </Text>
  )
}

const TestimonialAvatar = (props) => {
  const { src, name, title } = props;

  return (
    <Flex align="center" mt={8} direction="column">
      <Avatar src={src} mb={2} w={68} h={68} />
      <Stack spacing={-1} align="center">
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue("white", "gray.900")} mt={8}>
      <Container maxW="full" py={16} as={Stack} spacing={12}>
        <Stack align="center">
          <Heading>What Our Clients Say</Heading>
          <Text>Here's what our clients have to say about Devflow</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Project Management</TestimonialHeading>
              <TestimonialText>
                Devflow has streamlined our project management process, making collaboration effortless and efficient.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'John Doe'}
              title={'CTO at XYZ Corp'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Interface</TestimonialHeading>
              <TestimonialText>
                The user interface of Devflow is intuitive and easy to navigate, making it simple for our team to get up to speed.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Smith'}
              title={'Product Manager at ABC Inc.'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Outstanding Support</TestimonialHeading>
              <TestimonialText>
                The support team at Devflow is always responsive and helpful, ensuring that we have everything we need to succeed.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Michael Brown'}
              title={'CEO at LMN Ltd.'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}