import React from "react";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";
import Nav from "./Nav";

const Intro = () => {
  return (
    <Flex
      position="relative"
      overflow="hidden"
      align="center"
      justify="center"
      backgroundImage="url('/images/mountains.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="100vh"
    >
      <StyledNav />
      <ProfileCard
        title="Hi!"
        description="Ik ben Michiel Glibert"
        link={{ href: "cv", text: "Bekijk mijn cv" }}
      />
    </Flex>
  );
};

const StyledNav = styled(Nav)`
  position: absolute;
  top: 32px;
`;

export default Intro;
