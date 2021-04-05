import React from "react";
import { Flex } from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";

const Intro = () => {
  return (
    <Flex
      overflow="hidden"
      align="center"
      justify="center"
      backgroundImage="url('/images/mountains.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="100vh"
    >
      <ProfileCard
        title="Hi!"
        description="Ik ben Michiel Glibert"
        link={{ href: "cv", text: "Bekijk mijn cv" }}
      />
    </Flex>
  );
};

export default Intro;
