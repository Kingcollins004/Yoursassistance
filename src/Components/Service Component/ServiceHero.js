import React from "react";
import { Flex, Text, Box, Button, Image } from "@chakra-ui/react";
import HeroBMan from "../../Assets/Svg/serviceMan.svg";
import HeroWMan from "../../Assets/Svg/serviceWoman.svg";
import lineS from "../../Assets/Svg/lineSvgR.svg";
import lineB from "../../Assets/Svg/lineSvgBR.svg";
import quote from "../../Assets/Svg/quote.svg";
import stars from "../../Assets/Svg/stars.svg";
import arrowDown from "../../Assets/Svg/downArrow.svg";

const ServiceHero = () => {
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
          <Image width={{ base: "10%", sm: "3%" }} src={quote} />
          <Text
            textAlign="left"
            width={{ base: "100%", sm: "40%" }}
            color="#7A7A7A"
            fontSize={{ base: "12px", sm: "14px" }}
          >
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
          <Image width={{ base: "30%", sm: "10%" }} src={stars} />
          <Text
            fontSize={{ base: "24px", sm: "32px" }}
            fontWeight="700"
            color="#7A7A7A"
          >
            5+ Years
          </Text>
          <Text fontSize={{ base: "12px", sm: "16px" }}>Experience</Text>
        </Flex>
      </Flex>

      <Flex
        textAlign="center"
        flexDirection="column"
        alignItems="center"
        flex="1"
        marginTop={{ base: "25%", sm: "2%" }}
      >
        <Image
          width={{ base: "7%", sm: "3%" }}
          position="relative"
          left={{ base: "15%", sm: "6.5%" }}
          src={lineS}
        />
        <Button
          backgroundColor="white"
          color="#393637"
          borderRadius="50px"
          width={{ base: "30%", sm: "135px" }}
          height={{ base: "35px", sm: "45px" }}
          fontSize={{ base: "18px", sm: "20px" }}
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
          fontSize={{ base: "6vw", sm: "86px" }}
          lineHeight={{ base: "auto", sm: "90px" }}
        >
          Explore or line of <span style={{ color: "#ED3237" }}>Services</span>.{" "}
        </Text>
        <Image
          display={{ base: "none", sm: "block" }}
          position="relative"
          right="52%"
          marginTop="-3%"
          src={lineB}
        />

        <Text
          width={{ base: "100%", sm: "70%" }}
          fontSize={{ base: "16px", sm: "24px" }}
          color={{ base: "#393637", sm: "#7A7A7A" }}
          // marginY={{ base: "2%", sm: "1%" }}
          marginTop={{ base: "1%", sm: "-2%" }}
          marginBottom="2%"
        >
          It’s not the best product that sells but the best marketed product.
        </Text>
        <Flex marginTop="1%">
          <Button
            backgroundColor="#ED3237"
            color="white"
            borderRadius="50px"
            width={{ base: "145px", sm: "239px" }}
            height={{ base: "45px", sm: "72px" }}
            fontSize={{ base: "14px", sm: "20px" }}
            fontWeight="600"
            marginRight="2%"
          >
            Explore Projects
          </Button>
          <Button
            backgroundColor="white"
            color="#393637"
            borderRadius="50px"
            width={{ base: "145px", sm: "239px" }}
            height={{ base: "45px", sm: "72px" }}
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
        marginTop={{ base: "10%", sm: "-19%" }}
        justifyContent="space-between"
        flex="1"
      >
        <Image
          position="relative"
          right={{ base: "0", sm: "20%" }}
          marginTop="15%"
          width={{ base: "60%", sm: "80%" }}
          src={HeroBMan}
        />
        <Image
          position="relative"
          left={{ base: "-5%", sm: "20%" }}
          width={{ base: "50%", sm: "80%" }}
          src={HeroWMan}
        />
      </Flex>

      <Flex justifyContent="center" position="relative" marginTop={{base:"0", sm: "-12%"}}>
        <Image width={{base: "50%", sm: "100%"}} src={arrowDown} />
      </Flex>
    </Flex>
  );
};

export default ServiceHero;
