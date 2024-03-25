import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HeaderServices = () => {
    //
  return (
    <Box padding="3% 5%" borderRadius="10px">
      <Flex>
        <Box
          flex="1"
          marginRight="15px"
          flexDirection="column"
          colorScheme="white"
          textAlign="left"
          className="serviceHeader"
        >
          <Link to="/services">
            <Text fontWeight="semibold" color="#7A7A7A">
              Graphics Design
            </Text>
            <Text fontSize="14px" color="#7A7A7A">
              like logo design, branding, social media graphics
            </Text>
          </Link>
        </Box>

        <Box
          flex="1"
          marginRight="15px"
          flexDirection="column"
          colorScheme="white"
          textAlign="left"
          className="serviceHeader"
        >
          <Link>
            <Text fontWeight="semibold" color="#7A7A7A">
              Brand Identity Design
            </Text>
            <Text fontSize="14px" color="#7A7A7A">
              Like company building
            </Text>
          </Link>
        </Box>
      </Flex>

      <Flex marginTop="2%">
        <Box
          flex="1"
          marginRight="15px"
          flexDirection="column"
          colorScheme="white"
          textAlign="left"
          className="serviceHeader"
        >
          <Link>
            <Text fontWeight="semibold" color="#7A7A7A">
              Web Development
            </Text>
            <Text fontSize="14px" color="#7A7A7A">
              like Landing pages, company websites, web applications etc
            </Text>
          </Link>
        </Box>

        <Box
          flex="1"
          marginRight="15px"
          flexDirection="column"
          colorScheme="white"
          textAlign="left"
          className="serviceHeader"
        >
          <Link>
            <Text fontWeight="semibold" color="#7A7A7A">
              Digital Marketing
            </Text>
            <Text fontSize="14px" color="#7A7A7A">
              Like SEO, Social Media Marketing, Email Marketing etc
            </Text>
          </Link>
        </Box>
      </Flex>

      <Flex marginTop="2%">
        <Box
          flex="1"
          marginRight="15px"
          flexDirection="column"
          colorScheme="white"
          textAlign="left"
          className="serviceHeader"
        >
          <Link>
            <Text fontWeight="semibold" color="#7A7A7A">
              Content management
            </Text>
            <Text fontSize="14px" color="#7A7A7A">
              like blog writing, content strategy, content marketing
            </Text>
          </Link>
        </Box>

        <Box
          flex="1"
          marginRight="15px"
          flexDirection="column"
          colorScheme="white"
          textAlign="left"
          className="serviceHeader"
        >
          <Link>
            <Text fontWeight="semibold" color="#7A7A7A">
              Content Design
            </Text>
            <Text fontSize="14px" color="#7A7A7A">
              Like content strategy, content creation, content optimization
            </Text>
          </Link>
        </Box>
      </Flex>

      <Flex marginTop="2%">
        <Box
          width="50%"
          marginRight="15px"
          flexDirection="column"
          colorScheme="white"
          textAlign="left"
          className="serviceHeader"
        >
          <Link>
            <Text fontWeight="semibold" color="#7A7A7A">
              Animations
            </Text>
            <Text fontSize="14px" color="#7A7A7A">
              like motion graphics, 2D/3D animations, explainer videos
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderServices;
