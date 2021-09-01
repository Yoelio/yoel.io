import { extendTheme } from "@chakra-ui/react";
import { theme as _theme } from "@chakra-ui/theme";
import { mode } from "@chakra-ui/theme-tools";
import { HeaderStyle as Header, CardStyle as Card } from "@yoelio/components";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
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
    solYellow: "#b58900",
    solRed: "#dc322f",
    solMagenta: "#d33682",
    solViolet: "#6c71c4",
    solBlue: "#268bd2",
    solCyan: "#2aa198",
    solGreen: "#859900",
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
    h3: {
      fontSize: ["1rem", "1.25rem"],
      fontWeight: "semibold",
      letterSpacing: "-1%",
    },
    body: {
      fontSize: ["0.875rem", "1rem"],
    },
    headline: {
      fontSize: ["1rem", "1.25rem", "1.5rem"],
      fontWeight: "medium",
    },
    footer: {
      fontSize: ["0.75rem", "0.875rem"],
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
          bg: mode("base.3", "base.02")(props),
          boxShadow: "none",
          _hover: {
            bg: mode("base.2", "base.03")(props),
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
          bg: mode("base.3", "base.02")(props),
          _hover: {
            bg: mode("base.2", "base.03")(props),
            boxShadow: "xl",
          },
        }),
        buttonGhost: (props) => ({
          ..._theme.components.Button.baseStyle,
          p: 4,
          display: "flex",
          gridGap: 4,
          _hover: {
            bg: mode("base.2", "base.03")(props),
          },
        }),
      },
    },
    Text: {
      baseStyle: (props) => ({
        color: mode("base.02", "base.2")(props),
        textStyle: "body",
      }),
      variants: {
        secondary: (props) => ({
          color: mode("base.01", "base.1")(props),
          textStyle: "body",
        }),
      },
    },
    Header: {
      baseStyle: (props) => ({
        ...Header.baseStyle,
        bg: mode("base.3", "base.02")(props),
      }),
    },
    Card: {
      baseStyle: (props) => ({
        ...Card.baseStyle,
        bg: mode("base.3", "base.02")(props),
      }),
    },
  },
});

export default theme;
