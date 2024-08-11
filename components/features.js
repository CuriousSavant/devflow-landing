import { SearchIcon } from '@chakra-ui/icons';
import {
  Stack,
  Flex,
  Container,
  Text,
  SimpleGrid,
  Heading,
  Image,
  useColorModeValue,
  StackDivider,
  Icon,
  Button,
} from '@chakra-ui/react';

import { ArrowTrendingUpIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

const Feature = ({ icon, iconBg, text }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Container maxW="full" py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            DevFlow: Your Ultimate IT Solution
          </Text>
          <Heading fontSize={{ base: "xl", md: "3xl" }}>A Cutting-Edge Project Management Tool</Heading>
          <Text color={'gray.500'} fontSize={{ base: "sm", sm: "md", md: "lg" }}>
            DevFlow is designed to streamline your IT projects with powerful features. Our platform helps you plan, track, and manage your projects efficiently, allowing for better collaboration and productivity.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={ArrowTrendingUpIcon} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Advanced Project Planning'}
            />
            <Feature
              icon={<Icon as={CurrencyDollarIcon} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Cost and Budget Management'}
            />
            <Feature
              icon={<Icon as={SearchIcon} color={'purple.500'} w={4} h={4} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Makret Analysis'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

