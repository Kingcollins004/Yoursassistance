import { Box, Image, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import service1 from "../../Assets/Images/service1.png";
import service2 from "../../Assets/Images/service2.png";
import service3 from "../../Assets/Images/service3.png";
import service4 from "../../Assets/Images/service4.png";
import service5 from "../../Assets/Images/service5.png";
import service6 from "../../Assets/Images/service6.png";
import service7 from "../../Assets/Images/service7.png";
import service8 from "../../Assets/Images/service8.png";
import spiralBg from "../../Assets/Svg/serviceBg.svg";
import spiralBg2 from "../../Assets/Svg/serviceBgMobile.svg";
import back from "../../Assets/Svg/arrowBack.svg";
import next from "../../Assets/Svg/arrowNext.svg";

const serviceData = [
  { name: "Graphics Design", image: service1 },
  { name: "Content Management", image: service2 },
  { name: "Branding & Brand Identity Design", image: service3 },
  { name: "Content Design", image: service4 },
  { name: "Website Development", image: service5 },
  { name: "Coaching", image: service6 },
  { name: "Animations", image: service7 },
  { name: "Digital Marketing", image: service8 },
];

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === serviceData.length - 1 ? 0 : prevIndex + 1
    );
    setSlideDirection("next");
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? serviceData.length - 1 : prevIndex - 1
    );
    setSlideDirection("prev");
  };

  const handleTransitionEnd = () => {
    setSlideDirection(null);
  };

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      backgroundColor="white"
      minHeight={{ base: "50%", sm: "100vh" }}
      padding="2% 7%"
    >
      <Flex justifyContent="flex-start" width="100%">
        <Text fontSize={{ base: "18px", sm: "32px" }} fontWeight="semibold">
          Our Services
        </Text>
      </Flex>

      <Flex
        backgroundPosition="center"
        backgroundImage={spiralBg}
        backgroundRepeat="no-repeat"
        width="1568px"
        height="1105px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        display={{ base: "none", sm: "flex" }}
      >
        <Box
          style={{
            transition: "transform 1s",
            transform: `translateX(${
              slideDirection === "next"
                ? "-10%"
                : slideDirection === "prev"
                ? "10%"
                : "0"
            })`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <Box textAlign="center">
            <Text fontSize="28px" marginBottom="2%" fontWeight="600">
              {serviceData[currentIndex].name}
            </Text>
            <Image width="485px" src={serviceData[currentIndex].image} />
            <Text marginTop="2%" color="#0298DA" fontWeight="600">
              Click to view
            </Text>
          </Box>
        </Box>
        <Flex width="60vw" justifyContent="space-between" position="absolute">
          <Image marginX="5%" onClick={handleBack} src={back} />
          <Image marginRight="5%" onClick={handleNext} src={next} />
        </Flex>
      </Flex>

      <Flex
        backgroundPosition="center"
        backgroundImage={spiralBg2}
        backgroundRepeat="no-repeat"
        width="410px"
        height="277px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        display={{ base: "block", sm: "none" }}
      >
        <Box
          style={{
            transition: "transform 1s",
            transform: `translateX(${
              slideDirection === "next"
                ? "-10%"
                : slideDirection === "prev"
                ? "10%"
                : "0"
            })`,
          }}
          onTransitionEnd={handleTransitionEnd}
          marginTop="6%"
        >
          <Flex flexDirection="column" alignItems="center" textAlign="center">
            <Text fontSize="12px" marginBottom="2%" fontWeight="600">
              {serviceData[currentIndex].name}
            </Text>
            <Image width="159px" src={serviceData[currentIndex].image} />
          </Flex>
        </Box>
        <Flex marginX="13%" marginTop="-20%" width="69vw" justifyContent="space-between" position="absolute">
          <Image width="5%" marginX="5%" onClick={handleBack} src={back} />
          <Image width="5%" marginRight="5%" onClick={handleNext} src={next} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ServiceCarousel;
