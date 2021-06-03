import React from "react";
import styled from "styled-components";

// Components
import { Center, Heading, Text } from "@chakra-ui/layout";
import { VerticalTimeline, VerticalTimelineElement } from "./VerticalTimeline";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Career = () => {
  return (
    <Center backgroundColor="gray.50" px={["2", "3", "4"]}>
      <StyledVerticalTimeline layout="1-column">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#247AFD", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #247AFD" }}
          date="2020 - ..."
          iconStyle={{ background: "#247AFD", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} size="lg" />}
        >
          <Heading
            className="vertical-timeline-element-title"
            as="h1"
            fontSize={["xl", "xl", "2xl"]}
          >
            WeGroup
          </Heading>
          <Heading
            className="vertical-timeline-element-subtitle"
            as="h2"
            fontSize={["lg", "lg", "2xl"]}
          >
            Front-End Engineer
          </Heading>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#FFAB0F", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" />}
        >
          <Heading as="h1" fontSize={["xl", "xl", "2xl"]}>
            Master Industrieel Ingenieur: Informatica
          </Heading>
          <Heading as="h2" fontSize={["lg", "lg", "2xl"]}>
            Universiteit Gent
          </Heading>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#FFAB0F", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" />}
        >
          <Heading as="h1" fontSize={["xl", "xl", "2xl"]}>
            Schakelprogramma Industrieel Ingenieur: Informatica
          </Heading>
          <Heading as="h2" fontSize={["lg", "lg", "2xl"]}>
            Universiteit Gent
          </Heading>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="februari 2018 - mei 2018"
          iconStyle={{ background: "#247AFD", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} size="lg" />}
        >
          <Heading as="h1" fontSize={["xl", "xl", "2xl"]}>
            Full Stack Developer
          </Heading>
          <Heading as="h2" fontSize={["lg", "lg", "2xl"]}>
            Kayzr
          </Heading>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="2015 - 2018"
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#FFAB0F", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" />}
        >
          <Heading as="h1" fontSize={["xl", "xl", "2xl"]}>
            Professionele Bachelor in de Toegepaste Informatica
          </Heading>
          <Heading as="h2" fontSize={["lg", "lg", "2xl"]}>
            Hogeschool Gent
          </Heading>
          <Text>Web en Mobile Apps</Text>
        </VerticalTimelineElement>
      </StyledVerticalTimeline>
    </Center>
  );
};

const StyledVerticalTimeline = styled(VerticalTimeline)`
  max-width: 960px;
`;

export default Career;
