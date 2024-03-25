import React, { useState } from "react";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/react";

const ServiceHero = () => {
  const [selectedButton, setSelectedButton] = useState("Discover");
  //   const { onOpen, onClose, isOpen } = useDisclosure();

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const isButtonSelected = (button) => {
    return selectedButton === button;
  };
  return (
    <Box padding="0 10%">
      <Flex marginTop="5%" flexDirection={{ base: "column", md: "row" }}>
        <Box flex="1">
          <Text
            fontSize={{ base: "32px", md: "64px" }}
            fontWeight="800"
            color="#0298DA"
          >
            THE WAY WE WORK
          </Text>
        </Box>
        <Box flex="1">
          <Text fontSize={{ base: "14px", md: "16px" }}>
            A digital agency that knows the internet and people in equal
            measure. End users, browsers, audiences, customers. We get them
            because we are them. And because we spend more time online than
            most, we have an eye for what works.
          </Text>
        </Box>
      </Flex>

      <Flex
        marginX={{ base: "0%", md: "20%" }}
        alignItems="center"
        justifyContent="center"
        marginTop="5%"
      >
        <Box marginRight={{ base: "5%", md: "0" }} textAlign="center" flex="1">
          <Button
            padding={{ base: "2% 20%", md: "2% 25%" }}
            backgroundColor={isButtonSelected("Discover") ? "#0298DA" : "white"}
            color={isButtonSelected("Discover") ? "white" : "#0298DA"}
            border="1px solid #0298DA"
            borderRadius="30px"
            onClick={() => handleClick("Discover")}
            fontSize={{ base: "13px", md: "16px" }}
            colorScheme="#0298DA"
          >
            Discover
          </Button>
        </Box>

        <Box marginRight={{ base: "2%", md: "0" }} textAlign="center" flex="1">
          <Button
            backgroundColor={isButtonSelected("Define") ? "#0298DA" : "white"}
            borderRadius="30px"
            padding={{ base: "2% 20%", md: "2% 25%" }}
            color={isButtonSelected("Define") ? "white" : "#0298DA"}
            onClick={() => handleClick("Define")}
            border="1px solid #0298DA"
            fontSize={{ base: "13px", md: "16px" }}
            colorScheme="#0298DA"
          >
            Define
          </Button>
        </Box>

        <Box
          marginRight={{ base: "2%", md: "0" }}
          textAlign="center"
          color="white"
          flex="1"
        >
          <Button
            backgroundColor={isButtonSelected("Build") ? "#0298DA" : "white"}
            color={isButtonSelected("Build") ? "white" : "#0298DA"}
            borderRadius="30px"
            padding={{ base: "2% 20%", md: "2% 25%" }}
            onClick={() => handleClick("Build")}
            border="1px solid #0298DA"
            fontSize={{ base: "13px", md: "16px" }}
            colorScheme="#0298DA"
          >
            Build
          </Button>
        </Box>

        <Box textAlign="center" color="white" flex="1">
          <Button
            backgroundColor={isButtonSelected("Deliver") ? "#0298DA" : "white"}
            borderRadius="30px"
            padding={{ base: "2% 20%", md: "2% 25%" }}
            onClick={() => handleClick("Deliver")}
            border="1px solid #0298DA"
            color={isButtonSelected("Deliver") ? "white" : "#0298DA"}
            fontSize={{ base: "13px", md: "16px" }}
            colorScheme="#0298DA"
          >
            Deliver
          </Button>
        </Box>
      </Flex>

      <Box>
        <Flex
          marginTop={{ base: "15%", md: "5%" }}
          paddingBottom="2%"
          borderBottom="1px solid #ED3237"
        >
          <Box flex="1">
            <Text fontSize="14px" color="#0298DA" fontWeight="700">
              01
            </Text>
            <Text
              fontSize={{ base: "20px", md: "32px" }}
              color="#0298DA"
              fontWeight="700"
            >
              Brand Audit
            </Text>
          </Box>
          <Box flex="2">
            <Text fontSize={{ base: "13px", md: "16px" }}>
              Brand Audit service goes beyond the surface, delving deep into the
              heart of your brand to uncover its essence. Through meticulous
              analysis, we identify strengths, refine weaknesses, and provide
              strategic insights to ensure your brand not only stands out but
              resonates powerfully with your target audience.
            </Text>
          </Box>
        </Flex>

        <Flex marginTop="2%" paddingBottom="2%">
          <Box flex="1">
            <Text fontSize="14px" color="#0298DA" fontWeight="700">
              02
            </Text>
            <Text
              fontSize={{ base: "20px", md: "32px" }}
              color="#0298DA"
              fontWeight="700"
            >
              Audience Analysis
            </Text>
          </Box>
          <Box flex="2">
            <Text fontSize={{ base: "13px", md: "16px" }}>
              We understand that reaching the right audience is crucial. Our
              Audience Analysis service goes beyond demographics, delving into
              the intricacies of behavior and preferences. With insightful data,
              we help you tailor your message effectively, ensuring it resonates
              with your audience and creates a lasting impact.
            </Text>
          </Box>
        </Flex>

        <Box textAlign="center" marginTop={{ base: "6%", md: "2%" }}>
          <Button
            colorScheme="#0298DA"
            transition="1s ease-in"
            backgroundColor="#0298DA"
            color="white"
            padding={{ base: "8% 10%", md: "2% 5%" }}
            borderRadius="50px"
          >
            Contact us
          </Button>
        </Box>
      </Box>

      <Box textAlign="center" marginTop="15%">
        <Text
          fontSize={{ base: "28px" }}
          display={{ base: "block", md: "none" }}
          fontWeight={{ base: "600" }}
        >
          Our Services
        </Text>
      </Box>
    </Box>
  );
};

export default ServiceHero;
