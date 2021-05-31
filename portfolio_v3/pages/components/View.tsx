import React from "react";
import { Flex } from "@chakra-ui/layout";

interface Props {
  [x: string]: any;
}

const View: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Flex position="relative" overflow="hidden" h="100vh" {...props}>
      {children}
    </Flex>
  );
};

export default View;
