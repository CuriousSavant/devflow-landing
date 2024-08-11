import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "gray.900")(props),
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Zain, sans-serif",
  },
  fontSizes: {
    sm: "12px",
    md: "16px",
    lg: "18px",
    xl: "24px",
  },
});

export default theme;