import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { VStack } from "@chakra-ui/layout";
import { scroller } from "react-scroll";

// Components
import ProfileCard from "./ProfileCard";
import Nav from "./Nav";
import View from "./View";

const Intro: React.FC = () => {
  const handleOnArrowClick = () =>
    scroller.scrollTo("about", {
      duration: 1200,
      smooth: "easeInOut",
      ignoreCancelEvents: true,
    });

  return (
    <View
      align="center"
      justify="center"
      backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23ffffff' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23f3f7f9' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23e7eff3' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23dce7ee' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23d0e0e8' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23c4d8e2' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");`}
      backgroundSize="cover"
      backgroundAttachment="fixed"
    >
      <Nav />
      <VStack spacing="8">
        <ProfileCard
          title="Hi!"
          description="Ik ben Michiel Glibert"
          link={{ href: "cv", text: "Bekijk mijn cv" }}
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          size="4x"
          color="white"
          cursor="pointer"
          onClick={handleOnArrowClick}
        />
      </VStack>
    </View>
  );
};

export default Intro;
