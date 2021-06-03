import { useEffect, useRef } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

import Intro from "./components/Intro";
import About from "./components/About";
import Career from "./components/Career";

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
    <>
      <Intro />
      <About />
      <Career />
    </>
  );
};

export default Home;
