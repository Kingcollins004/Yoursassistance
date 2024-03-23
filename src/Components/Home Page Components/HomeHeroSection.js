import React from "react";
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import HeroImg from "../../Assets/Svg/HeroImg.svg";
import yoursassistance from "../../Assets/Svg/yoursassistance.svg";


const HomeHeroSection = () => {
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
        <Image width="30%" src={yoursassistance} />
        <Text
          marginTop="2%"
          width="70%"
          color="#0298DA"
          fontWeight="bold"
          fontSize="46px"
        >
          It’s not the best product that sells but the best marketed product.
        </Text>
        <Text width="70%" fontSize="20px" color="#7A7A7A" marginY="1%">
          Cracking the Code: Delving Into the Intricacies of Consumer Behavior,
          Unraveling the Myth of Product Supremacy, and Embracing the Dominance
          of Strategic Marketing Brilliance
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

export default HomeHeroSection;
