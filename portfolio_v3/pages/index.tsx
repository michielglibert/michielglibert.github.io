import Head from "next/head";
import Link from "next/link";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import Intro from "./components/Intro";

const Home: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Intro />
    </ChakraProvider>
  );
};

export default Home;
