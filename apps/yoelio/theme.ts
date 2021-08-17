import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Roboto Mono",
        color: props.colorMode === "dark" ? "base.1" : "base.01",
        backgroundColor: props.colorMode === "dark" ? "base.03" : "base.3",
      },
    }),
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
});

export default theme;
