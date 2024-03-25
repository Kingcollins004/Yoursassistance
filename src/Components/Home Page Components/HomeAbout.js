import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import dart from "../../Assets/Images/dart.png";
import apart from "../../Assets/Images/apart.png";
import showcase from "../../Assets/Images/showcase.png";
import giftImg from "../../Assets/Images/giftImg.png";

const HomeAbout = () => {
  return (
    <Flex
      flexDirection={{ base: "column", sm: "row" }}
      alignItems="center"
      padding="5% 10%"
    >
      <Box flex="1">
        <Box>
          <Image src={dart} />
          <Box>
            <Text fontSize="24px" fontWeight="semibold" color="#0298DA">
              Our Mission
            </Text>
            <Text fontSize="16px" marginTop="1%">
              Our primary mission is to provide businesses and companies with
              top-notch digital solutions that transcend expectations. We
              believe in the power of exclusive services to deliver world-class
              products, and we are passionate about helping our clients succeed
              in the digital landscape.
            </Text>
          </Box>
        </Box>

        <Box marginTop="5%">
          <Image src={apart} />
          <Box>
            <Text
              marginTop="2%"
              fontSize="24px"
              fontWeight="semibold"
              color="#0298DA"
            >
              What Sets Us Apart
            </Text>
            <Text fontSize="16px" marginTop="1%">
              Yoursassistance stands out in the crowded digital arena by
              offering more than just services—we provide an experience. Our
              commitment to excellence is evident in every project we undertake.
              We believe that it's not just about the products; it's about the
              journey—from brand whispers to digital roars.
            </Text>
          </Box>
        </Box>

        <Box marginTop="5%">
          <Image src={showcase} />
          <Box marginTop="2%">
            <Text fontSize="24px" fontWeight="semibold" color="#0298DA">
              Showcase of Excellence
            </Text>
            <Text fontSize="16px" marginTop="1%">
              Explore our portfolio to witness the competence and capability we
              bring to the table. We showcase a diverse range of projects, each
              a testament to our dedication to quality and innovation. Our
              exclusive services are tailored to meet the unique needs of
              businesses seeking a competitive edge in the digital realm.
            </Text>
          </Box>
        </Box>
      </Box>
      <Flex margin={{base: "10% 0", sm: "0"}} justifyContent="flex-end" flex="1">
        <Image src={giftImg} />
      </Flex>
    </Flex>
  );
};

export default HomeAbout;
