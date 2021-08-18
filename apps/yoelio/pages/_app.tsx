import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { PillPity } from "pill-pity";

import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PillPity pattern="topography" patternFill="cyan" bgColor="transparent" patOpacity={0.3}>
        <Component {...pageProps} />
      </PillPity>
    </ChakraProvider>
  );
}
export default MyApp;
