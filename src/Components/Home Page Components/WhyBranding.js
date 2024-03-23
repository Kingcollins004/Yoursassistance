import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import redDot from "../../Assets/Svg/redDot.svg";
import whyBranding1 from "../../Assets/Images/whyBrandImg.png";
const WhyBranding = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      paddingX="10%"
      paddingY="5%"
      backgroundColor="#EEF6FE"
    >
      <Box flex="1">
        <Text fontSize="48px" fontWeight="semibold">
          Why company & business branding{" "}
          <span style={{ color: "#ED3237" }}>important.</span>
        </Text>
        <Flex
          marginTop="3%"
          justifyContent="flex-start "
          alignItems="flex-start"
        >
          <Image marginTop="1%" src={redDot} />
          <Box marginLeft="2%">
            <Text fontSize="22px" fontWeight="semibold">
              Creating Identity and Recognition
            </Text>
            <Text fontSize="16px">
              Branding gives your business a distinguishable personality,
              separating you from competitors in a crowded market.
            </Text>
            <Text fontSize="16px" marginTop="2%">
              A consistent brand image (logo, colors, fonts, etc.) makes you
              easily recognizable, helping customers find and remember you.
            </Text>
          </Box>
        </Flex>

        <Flex
          marginTop="3%"
          justifyContent="flex-start "
          alignItems="flex-start"
        >
          <Image marginTop="1%" src={redDot} />
          <Box marginLeft="2%">
            <Text fontSize="22px" fontWeight="semibold">
              Builds Trust and Credibility
            </Text>
            <Text fontSize="16px">
              A well-developed brand conveys professionalism and reliability,
              boosting your customer's confidence in your business.
            </Text>
            <Text fontSize="16px" marginTop="2%">
              Consistent branding across all platforms - website, social media,
              marketing materials - reinforces this positive image.
            </Text>
          </Box>
        </Flex>

        <Flex
          marginTop="3%"
          justifyContent="flex-start "
          alignItems="flex-start"
        >
          <Image marginTop="1%" src={redDot} />
          <Box marginLeft="2%">
            <Text fontSize="22px" fontWeight="semibold">
              Influences Customer Choice
            </Text>
            <Text fontSize="16px">
              Branding goes beyond visuals; it communicates your values,
              mission, and unique selling proposition.
            </Text>
            <Text fontSize="16px" marginTop="2%">
              This messaging resonates with customers who identify with your
              brand, making them more likely to choose you over competitors.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Flex justifyContent="flex-end" flex="1">
        <Image src={whyBranding1} />
      </Flex>
    </Flex>
  );
};

export default WhyBranding;
