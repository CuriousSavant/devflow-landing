import { Stack, Box, Container, chakra, Text, VisuallyHidden, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box bg={useColorModeValue('white', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW="full"
                py={6}
                direction={{ base: "cloumn", md: "row" }}
                spacing={4}
                justify="center"
                align="center"
            >
                <Text>© 2022 Chakra Templates. All rights reserved</Text>
            </Container>
        </Box>
    )
}

export default Footer;