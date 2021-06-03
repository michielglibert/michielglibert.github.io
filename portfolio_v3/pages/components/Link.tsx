import { Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface Props {
  href: string;
}

const Link: React.FC<Props> = ({ href, children, ...rest }) => {
  return (
    <Text textAlign="center" fontSize="xl" color="blue.500" fontWeight="600">
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    </Text>
  );
};

export default Link;
