import React from "react";
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import HeroImg from "../../Assets/Svg/aboutHero.svg";
import yoursassistance from "../../Assets/Svg/yoursassistance.svg";

const AboutHero = () => {
  return (
    <Flex
      flexDirection="column"
      paddingX="10%"
      paddingY="2%"
      alignItems="center"
    >
      <Flex
        textAlign="center"
        flexDirection="column"
        alignItems="center"
        flex="1"
      >
        <Text color="#0298DA" fontWeight="bold" fontSize="48px">
          Projects
        </Text>
        <Image marginTop="2%" width="20%" src={yoursassistance} />
        <Text
          marginTop="2%"
          width="60%"
          color="#0298DA"
          fontWeight="bold"
          fontSize="32px"
        >
          Success in digital projects hinges on strategic marketing, not just
          product quality.
        </Text>
        <Text width="70%" fontSize="18px" color="#7A7A7A" marginY="1%">
          At Yoursassistance, we understand that effective marketing is the
          key to showcasing the brilliance of your project. Let us collaborate
          with you to not only create exceptional digital solutions but also to
          ensure they reach their full potential through innovative and
          strategic marketing strategies
        </Text>
        <Box>
          <Button
            backgroundColor="#0298DA"
            color="white"
            borderRadius="50px"
            paddingY="15%"
            paddingX="40px"
          >
            Explore Services
          </Button>
        </Box>
      </Flex>

      <Flex marginTop="2%" justifyContent="flex-end" flex="1">
        <Image src={HeroImg} />
      </Flex>
    </Flex>
  );
};

export default AboutHero;
