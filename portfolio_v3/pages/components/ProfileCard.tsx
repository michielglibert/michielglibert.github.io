import { Avatar, Heading, Stack, VStack } from "@chakra-ui/react";
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

const ProfileCard: React.FC<Props> = ({ title, description, link }) => {
  return (
    <Stack
      align="center"
      direction={["column", "row"]}
      backgroundColor="white"
      py="6"
      px="8"
      m="4"
      borderRadius="5"
    >
      <Avatar
        height="40"
        width="40"
        name="Michiel Glibert"
        src="/images/propic.jpg"
      />
      <VStack pl={[0, 8]} pt={[4, 0]}>
        <Heading as="h1" size="xl" fontWeight="900">
          {title}
        </Heading>
        {description && (
          <Heading
            as="h2"
            textAlign="center"
            fontSize="24px"
            fontWeight="600"
            pb="2"
          >
            {description}
          </Heading>
        )}
        {link && <Link href={link.href}>{link.text}</Link>}
      </VStack>
    </Stack>
  );
};

export default ProfileCard;
