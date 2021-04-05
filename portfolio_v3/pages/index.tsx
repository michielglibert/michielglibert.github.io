import Head from "next/head";
import Link from "next/link";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import Intro from "./components/Intro";

interface Props {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}

const Home: React.FC<Props> = ({ allPostsData }) => {
  return (
    <ChakraProvider theme={theme}>
      <Intro />
    </ChakraProvider>
  );
};

export default Home;
