import { Heading, Stack, VStack, Image, StackProps } from "@chakra-ui/react";
import React from "react";
import Link from "./Link";

interface Props {
  title: string;
  description?: string;
  link?: {
    text: string;
    href: string;
  };
}

const ProfileCard: React.FC<Props & StackProps> = ({
  title,
  description,
  link,
  ...props
}) => {
  return (
    <Stack
      align="center"
      direction={["column", "row"]}
      backgroundColor="white"
      py="6"
      px="12"
      m="4"
      borderRadius="5"
      {...props}
    >
      <Image
        borderRadius="full"
        boxSize="48"
        src="/images/propic.jpg"
        alt="Michiel Glibert"
        mr={["0", "12"]}
        fit="cover"
      />
      <VStack pl={[0, 8]} pt={[4, 0]}>
        <Heading as="h1" size="2xl" fontWeight="900">
          {title}
        </Heading>
        {description && (
          <Heading as="h2" textAlign="center" size="lg" fontWeight="600" pb="2">
            {description}
          </Heading>
        )}
        {link && <Link href={link.href}>{link.text}</Link>}
      </VStack>
    </Stack>
  );
};

export default ProfileCard;
