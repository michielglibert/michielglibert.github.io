import { Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface Props {
  href: string;
}

const Link: React.FC<Props> = ({ href, children, ...rest }) => {
  const theme = useTheme();

  return (
    <Text textAlign="center" fontSize="2xl" color="blue" fontWeight="600">
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    </Text>
  );
};

export default Link;
