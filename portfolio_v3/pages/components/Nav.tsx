import { HStack } from "@chakra-ui/react";
import styled from "styled-components";
import React from "react";

const Nav: React.FC = ({ ...otherProps }) => {
  return (
    <HStack
      fontSize="lg"
      spacing={16}
      position="absolute"
      top="8"
      {...otherProps}
    >
      <Link>Over mijzelf</Link>
      <Link>Carriere</Link>
      <Link>Projecten</Link>
      <Link className="show">Blog</Link>
      <Link>Contact</Link>
    </HStack>
  );
};

const Link = styled.a`
  font-weight: 500;
  display: none;
  cursor: pointer;
  text-transform: uppercase;

  @media screen and (max-width: 719px) {
    &.show {
      margin-left: 0;
      display: block;
    }
  }

  @media screen and (min-width: 720px) {
    display: block;
  }
`;

export default Nav;
