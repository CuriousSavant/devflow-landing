'use client';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from './theme.js'

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  );
}
