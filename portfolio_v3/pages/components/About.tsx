import React from "react";
import {
  Heading,
  VStack,
  Image,
  Text,
  HStack,
  Box,
  Center,
  Link,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Center data-aos="fade" id="about">
      <HStack
        spacing={{ base: "0", xl: "8" }}
        justifyContent="center"
        m={{ base: "6", md: "9", xl: "12" }}
        maxWidth="5xl"
      >
        <Box width="8xl" display={{ base: "none", xl: "block" }}>
          <Image
            src="/images/lappy.jpg"
            objectFit="cover"
            borderRadius="6px"
            height="2xl"
            alt="Laptop on desk"
          />
        </Box>
        <VStack align="flex-start">
          <Heading as="h1">Over mijzelf</Heading>
          <Heading as="h2" fontSize="3xl">
            Hi!
          </Heading>
          <Text fontSize="lg">
            Ik ben Michiel, geboren in Gent en getogen in Evergem. Al van kleins
            af aan ben ik geïnspireerd door computers. Op jonge leeftijd schreef
            ik zelf mijn eigen eenvoudige programma's in Java. Dit heeft er toe
            geleid dat ik in mijn verdere leven voor de opleiding Toegepaste
            Informatica heb gekozen aan{" "}
            <Link href="https://www.hogent.be/" target="_blank" color="blue">
              Hogeschool Gent
            </Link>
            . Tijdens deze opleiding heb ik enorm veel praktijkervaring
            opgedaan. Na 3 jaar heb ik deze opleiding met succes kunnen afronden
            waarbij ik de laatste 14 weken stage heb gelopen bij{" "}
            <Link href="https://kayzr.com/" target="_blank" color="blue">
              Kayzr
            </Link>{" "}
            als Full Stack Developer.
          </Text>
          <Text fontSize="lg">
            Na mijn opleiding heb ik gekozen om nog niet te gaan werken. Ik had
            het gevoel dat ik nog meer capaciteiten had en had daarnaast nog de
            motivatie om verder te studeren. Dit heeft ertoe geleid dat ik ben
            begonnen aan een schakelprogramma naar Industrieel Ingenieur:
            Informatica aan de{" "}
            <Link href="https://www.ugent.be/" target="_blank" color="blue">
              Universiteit Gent
            </Link>
            . Net als mijn bachelor opleiding heb ik mijn master opleiding met
            succes kunnen afronden. Daardoor ben ik nu officieel Master in de
            industriële wetenschappen: informatica, behaald met onderscheiding.
            🎓
          </Text>
          <Text fontSize="lg">
            Sociaal contact is voor mij zeer belangrijk, ook tijdens mijn job.
            Zelfstandig werken kan ik zeker, maar ik heb niks liever dan een
            goede groepssfeer! Uit teamwork haal ik enorm veel motivatie en dat
            geeft mijn productiviteit een grote boost. Mijn keuze voor mijn
            huidige job bij{" "}
            <Link href="https://www.wegroup.be/" target="_blank" color="blue">
              WeGroup
            </Link>{" "}
            was dan ook heel snel gemaakt. Daar ben ik momenteel als de slag als
            Front-End engineer.
          </Text>
          <Text fontSize="lg">
            Verder ben ik niet alleen een gepassioneerde IT'er, maar ook gewoon
            een aangenaam persoon. Hoewel ik er kan van genieten om wat vitamine
            D op te doen in mijn tuin, geniet ik er nog meer van om een stapje
            in de wereld te zetten. De kans is daarom ook groot dat je mij in
            Evergem of Gent eens tegen het lijf loopt 😎
          </Text>
        </VStack>
      </HStack>
    </Center>
  );
};

export default About;
