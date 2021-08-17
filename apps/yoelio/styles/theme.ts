import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: props.colorMode === "dark" ? "base.03" : "base.3",
      },
    }),
  },
  fonts: {
    heading: "Roboto Mono",
    body: "Roboto Mono",
  },
  colors: {
    base: {
      "03": "#002b36",
      "02": "#073642",
      "01": "#586e75",
      "00": "#657b83",
      0: "#839496",
      1: "#93a1a1",
      2: "#eee8d5",
      3: "#fdf6e3",
    },
    yellow: "#b58900",
    orange: "#cb4b16",
    red: "#dc322f",
    magenta: "#d33682",
    violet: "#6c71c4",
    blue: "#268bd2",
    cyan: "#2aa198",
    green: "#859900",
  },
  components: {
    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === "dark" ? "base.2" : "base.02",
      }),
      variants: {
        secondary: (props) => ({
          color: props.colorMode === "dark" ? "base.1" : "base.01",
        }),
      },
    },
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === "dark" ? "base.1" : "base.01",
      }),
    },
  },
});

export default theme;
