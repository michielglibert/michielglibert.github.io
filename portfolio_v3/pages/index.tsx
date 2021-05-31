import { useEffect, useRef } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

import Intro from "./components/Intro";
import About from "./components/About";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
    AOS.refresh();
  }, []);

  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <ChakraProvider theme={theme}>
      <Intro />
      <About />
    </ChakraProvider>
  );
};

export default Home;
