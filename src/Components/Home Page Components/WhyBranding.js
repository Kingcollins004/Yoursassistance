import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import redDot from "../../Assets/Svg/redDot.svg";
import whyBranding1 from "../../Assets/Images/whyBrandImg.png";
import whyBranding2 from "../../Assets/Images/whyBrandImg2.png";
import whyBranding3 from "../../Assets/Images/whyBrandImg3.png";
const WhyBranding = () => {
  const [currentImage, setCurrentImage] = useState(whyBranding1);

  useEffect(() => {
    const changeImage = () => {
      // Define the sequence of images
      const images = [whyBranding1, whyBranding2, whyBranding3];
      // Calculate the next image index
      const nextIndex = (images.indexOf(currentImage) + 1) % images.length;
      // Set the new image
      setCurrentImage(images[nextIndex]);
    };

    const intervalId = setInterval(changeImage, 7000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup function
  }, [currentImage]); // Run effect whenever currentImage changes

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      paddingX="10%"
      paddingY="5%"
      backgroundColor="#EEF6FE"
      flexDirection={{ base: "column", sm: "row" }}
    >
      <Box flex="1">
        <Text fontSize={{ base: "28px", sm: "48px" }} fontWeight="semibold">
          Why company & business branding{" "}
          <span style={{ color: "#ED3237" }}>important.</span>
        </Text>
        <Flex
          marginTop="3%"
          justifyContent="flex-start "
          alignItems="flex-start"
        >
          <Image marginTop="1%" width={{ base: "16px", sm: "22px" }} src={redDot} />
          <Box marginLeft="2%">
            <Text fontSize={{ base: "16px", sm: "22px" }} fontWeight="semibold">
              Creating Identity and Recognition
            </Text>
            <Text fontSize={{ base: "14px", sm: "16px" }}>
              Branding gives your business a distinguishable personality,
              separating you from competitors in a crowded market.
            </Text>
            <Text fontSize={{ base: "14px", sm: "16px" }} marginTop="2%">
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
          <Image marginTop="1%" width={{ base: "16px", sm: "22px" }} src={redDot} />
          <Box marginLeft="2%">
            <Text fontSize={{ base: "16px", sm: "22px" }} fontWeight="semibold">
              Builds Trust and Credibility
            </Text>
            <Text fontSize={{ base: "14px", sm: "16px" }}>
              A well-developed brand conveys professionalism and reliability,
              boosting your customer's confidence in your business.
            </Text>
            <Text fontSize={{ base: "14px", sm: "16px" }} marginTop="2%">
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
          <Image marginTop="1%" width={{ base: "16px", sm: "22px" }} src={redDot} />
          <Box marginLeft="2%">
            <Text fontSize={{ base: "16px", sm: "22px" }} fontWeight="semibold">
              Influences Customer Choice
            </Text>
            <Text fontSize={{ base: "14px", sm: "16px" }}>
              Branding goes beyond visuals; it communicates your values,
              mission, and unique selling proposition.
            </Text>
            <Text fontSize={{ base: "14px", sm: "16px" }} marginTop="2%">
              This messaging resonates with customers who identify with your
              brand, making them more likely to choose you over competitors.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Flex margin={{ base: "10% 0", sm: "0" }} justifyContent="flex-end" flex="1">
        <Image src={currentImage} />
      </Flex> 
    </Flex>
  );
};

export default WhyBranding;
