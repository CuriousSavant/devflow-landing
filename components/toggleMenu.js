import {
    Button,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    Box,
    Stack,
    Text,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

export default function ToggleMenu() {
    return (
        <Box display={{ base: "block", md: "none" }}>
            <Menu>
                <MenuButton as={Button}>
                    <HamburgerIcon />
                </MenuButton>
                <MenuList as={Stack} spacing={2}>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                    <MenuItem>Get Started</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}