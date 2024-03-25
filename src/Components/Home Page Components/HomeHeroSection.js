import React from "react";
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import HeroImg from "../../Assets/Svg/HeroImg.svg";
import yoursassistance from "../../Assets/Svg/yoursassistance.svg";

const HomeHeroSection = () => {
  return (
    <Flex
      flexDirection="column"
      paddingX={{ base: "5%", sm: "10%" }}
      paddingY="2%"
      alignItems="center"
    >
      <Flex
        textAlign="center"
        flexDirection="column"
        alignItems="center"
        flex="1"
      >
        <Image width={{ base: "70%", sm: "30%" }} src={yoursassistance} />
        <Text
          marginTop={{ base: "4%", sm: "2%" }}
          width={{ base: "100%", sm: "70%" }}
          color="#0298DA"
          fontWeight="bold"
          fontSize={{ base: "28px", sm: "46px" }}
        >
          It’s not the best product that sells but the best marketed product.
        </Text>
        <Text
          width={{ base: "100%", sm: "70%" }}
          fontSize={{ base: "14px", sm: "20px" }}
          color="#7A7A7A"
          marginY={{ base: "2%", sm: "1%" }}
        >
          Cracking the Code: Delving Into the Intricacies of Consumer Behavior,
          Unraveling the Myth of Product Supremacy, and Embracing the Dominance
          of Strategic Marketing Brilliance
        </Text>
        <Box>
          <Button
            backgroundColor="#0298DA"
            color="white"
            borderRadius="50px"
            paddingY={{ base: "13%", sm: "15%" }}
            paddingX={{ base: "30px", sm: "40px" }}
            fontSize={{ base: "14px", sm: "16px" }}
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

export default HomeHeroSection;
