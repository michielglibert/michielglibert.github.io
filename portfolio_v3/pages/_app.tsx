import "../styles/globals.css";
import "../styles/animate.css";
import "../styles/verticalTimeline.css";

import { AppProps } from "next/app";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
