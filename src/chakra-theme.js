import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Degular', sans-serif",
  },
  colors: {
    blackColor: {
      500: "#131316",
    },
    lightGrey: {
      500: "#F8F9FA",
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        focusBorderColor: "customColorScheme.500",
      },
    },
    Button: {
      baseStyle: {
        _disabled: {
          bg: "#DBDEE5",
        },
      },
    },
  },
});

export default theme;
