import React from "react";
import { Flex, Text, Box, Button, Image } from "@chakra-ui/react";
import HeroBMan from "../../Assets/Svg/projectsMan.svg";
import HeroWMan from "../../Assets/Svg/ProjectWoman.svg";
import lineS from "../../Assets/Svg/lineSvgBlack.svg";
import lineB from "../../Assets/Svg/lineSvgBlackB.svg";
import quote from "../../Assets/Svg/quoteB.svg";
import stars from "../../Assets/Svg/starsB.svg";
import arrowDown from "../../Assets/Svg/downArrow.svg";

const AboutHero = () => {
  return (
    <Flex
      flexDirection="column"
      paddingX={{ base: "5%", sm: "7%" }}
      paddingBottom="2%"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        position="relative"
        top="15%"
        width="86vw"
        justifyContent="space-between"
      >
        <Flex
          justifyContent="flex-start"
          flexDirection="column"
          alignItems="flex-start"
          width="50%"
        >
          <Image src={quote} />
          <Text textAlign="left" width="60%" color="#7A7A7A" fontSize="20px">
            Yoursassistance exceptional product design ensures our website’s
            success.
            <br />
            <span style={{ fontWeight: "700" }}>Highly Recommended!!!</span>
          </Text>
        </Flex>

        <Flex
          width="50%"
          justifyContent="flex-end"
          flexDirection="column"
          alignItems="flex-end"
        >
          <Image width="20%" src={stars} />
          <Text fontSize="40px" fontWeight="700" color="#7A7A7A">
            5+ Years
          </Text>
          <Text>Experience</Text>
        </Flex>
      </Flex>

      <Flex
        textAlign="center"
        flexDirection="column"
        alignItems="center"
        flex="1"
        marginTop="2%"
      >
        <Image position="relative" left="6.5%" src={lineS} />
        <Button
          backgroundColor="white"
          color="#393637"
          borderRadius="50px"
          width={{ base: "13%", sm: "135px" }}
          height={{ base: "30px", sm: "45px" }}
          fontSize={{ base: "14px", sm: "20px" }}
          border="1px solid #393637"
          fontWeight="600"
          marginTop="-1%"
        >
          Services!
        </Button>
        <Text
          marginTop={{ base: "4%", sm: "2%" }}
          width={{ base: "100%", sm: "100%" }}
          color="#393637"
          fontWeight="600"
          fontSize={{ base: "28px", sm: "86px" }}
          lineHeight="90px"
        >
          Our <span style={{ color: "#0298DA" }}>Projects</span> speaks volume.{" "}
        </Text>
        <Image position="relative" right="52%" marginTop="-3%" src={lineB} />

        <Text
          width={{ base: "100%", sm: "70%" }}
          fontSize={{ base: "14px", sm: "24px" }}
          color="#7A7A7A"
          // marginY={{ base: "2%", sm: "1%" }}
          marginTop="-2%"
          marginBottom="2%"
        >
          It’s not the best product that sells but the best marketed product.
        </Text>
        <Flex marginTop="1%">
          <Button
            backgroundColor="#393637"
            color="white"
            borderRadius="50px"
            width={{ base: "13%", sm: "239px" }}
            height={{ base: "30px", sm: "72px" }}
            fontSize={{ base: "14px", sm: "20px" }}
            fontWeight="600"
            marginRight="2%"
          >
            Explore Services
          </Button>
          <Button
            backgroundColor="white"
            color="#393637"
            borderRadius="50px"
            width={{ base: "13%", sm: "239px" }}
            height={{ base: "30px", sm: "72px" }}
            fontSize={{ base: "14px", sm: "20px" }}
            border="1px solid #393637"
            fontWeight="600"
          >
            Hire us
          </Button>
        </Flex>
      </Flex>

      <Flex
        position="relative"
        marginTop="-10%"
        justifyContent="space-between"
        flex="1"
      >
        <Image
          position="relative"
          right="40%"
          marginTop="15%"
          width={{ base: "100%", sm: "80%" }}
          src={HeroBMan}
        />
        <Image
          position="relative"
          left="40%"
          width={{ base: "100%", sm: "80%" }}
          src={HeroWMan}
        />
      </Flex>

      <Box position="relative" marginTop="-15%">
        <Image src={arrowDown} />
      </Box>
    </Flex>
  );
};

export default AboutHero;
