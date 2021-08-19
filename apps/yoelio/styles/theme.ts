import { extendTheme } from "@chakra-ui/react";
import { theme as _theme } from "@chakra-ui/theme";
import { mode } from "@chakra-ui/theme-tools";
import { HeaderStyle as Header, CardStyle as Card } from "@yoelio/components";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      "html, body": {
        backgroundColor: mode("base.3", "base.03")(props),
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
  textStyles: {
    h1: {
      fontSize: ["2.25rem", "3.75rem", "6rem"],
      fontWeight: "black",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["1.5rem", "1.875rem", "2.25rem"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    body: {
      fontSize: ["0.875rem", "1rem", "1.125rem"],
    },
    headline: {
      fontSize: ["1rem", "1.25rem", "1.5rem"],
    },
    footer: {
      fontSize: ["0.75rem", "0.875rem", "1rem"],
    },
  },
  components: {
    Button: {
      baseStyle: (props) => ({
        bg: mode("base.2", "base.02")(props),
        boxShadow: "md",
      }),
      variants: {
        alt: (props) => ({
          bg: mode("base.3", "base.03")(props),
          boxShadow: "md",
          _hover: {
            boxShadow: "xl",
          },
        }),
      },
    },
    Link: {
      variants: {
        button: (props) => ({
          ..._theme.components.Button.baseStyle,
          p: 4,
          display: "flex",
          gridGap: 4,
          boxShadow: "md",
          bg: mode("base.2", "base.02")(props),
          _hover: {
            bg: mode("base.3", "base.03")(props),
            boxShadow: "xl",
          },
        }),
        buttonGhost: (props) => ({
          ..._theme.components.Button.baseStyle,
          p: 4,
          display: "flex",
          gridGap: 4,
          _hover: {
            bg: mode("base.3", "base.03")(props),
            boxShadow: "xl",
          },
        }),
      },
    },
    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === "dark" ? "base.2" : "base.02",
        textStyle: "body",
      }),
      variants: {
        secondary: (props) => ({
          color: props.colorMode === "dark" ? "base.1" : "base.01",
          textStyle: "body",
        }),
      },
    },
    Header: {
      baseStyle: (props) => ({
        ...Header.baseStyle,
        bg: props.colorMode === "dark" ? "base.02" : "base.2",
      }),
    },
    Card: {
      baseStyle: (props) => ({
        ...Card.baseStyle,
        bg: props.colorMode === "dark" ? "base.02" : "base.2",
      }),
    },
  },
});

export default theme;
