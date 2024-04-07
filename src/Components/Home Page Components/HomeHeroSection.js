import React from "react";
import { Flex, Text, Button, Image } from "@chakra-ui/react";
import HeroBMan from "../../Assets/Svg/heroBman.svg";
import HeroWMan from "../../Assets/Svg/heroWMan.svg";
import lineS from "../../Assets/Svg/lineSvg.svg";
import lineB from "../../Assets/Svg/lineSvgB.svg";
import socialIcons from "../../Assets/Svg/socialIcons.svg";

const HomeHeroSection = () => {
  return (
    <Flex
      flexDirection="column"
      paddingX={{ base: "5%", sm: "7%" }}
      paddingY="2%"
      alignItems="center"
      justifyContent="center"
    >
    <Image position="absolute" top="2%" src={socialIcons} />
      <Flex
        textAlign="center"
        flexDirection="column"
        alignItems="center"
        flex="1"
      >
        <Image position="relative" left="5%" src={lineS} />
        <Button
          backgroundColor="white"
          color="#393637"
          borderRadius="50px"
          width={{ base: "13%", sm: "105px" }}
          height={{ base: "30px", sm: "45px" }}
          fontSize={{ base: "14px", sm: "20px" }}
          border="1px solid #393637"
          fontWeight="600"
          marginTop="-1%"
        >
          Hello!
        </Button>
        <Text
          marginTop={{ base: "4%", sm: "2%" }}
          width={{ base: "100%", sm: "100%" }}
          color="#393637"
          fontWeight="600"
          fontSize={{ base: "28px", sm: "86px" }}
          lineHeight="90px"
        >
          Welcome to <span style={{ color: "#0298DA" }}>Yoursassistance</span>{" "}
          <br />
          Digital Agency.
        </Text>
        <Image position="relative" right="28%" marginTop="-3%" src={lineB} />

        <Text
          width={{ base: "100%", sm: "70%" }}
          fontSize={{ base: "14px", sm: "24px" }}
          color="#7A7A7A"
          marginY={{ base: "2%", sm: "1%" }}
        >
          It’s not the best product that sells but the best marketed product.
        </Text>
        <Flex marginTop="1%">
          <Button
            backgroundColor="#0298DA"
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
        position="absolute"
        top="38%"
        marginTop="2%"
        justifyContent="space-between"
        flex="1"
      >
        <Image
          position="relative"
          right="80%"
          marginTop="15%"
          width={{ base: "100%", sm: "80%" }}
          src={HeroBMan}
        />
        <Image
          position="relative"
          left="80%"
          width={{ base: "100%", sm: "80%" }}
          src={HeroWMan}
        />
      </Flex>
    </Flex>
  );
};

export default HomeHeroSection;
