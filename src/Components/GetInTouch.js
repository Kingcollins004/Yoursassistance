import {
  Box,
  Text,
  Image,
  Flex,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import contactImg from "../Assets/Svg/contactImg.svg";

const GetInTouch = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      {isMobile ? (
        <Box width="100%" backgroundColor="#fff" height="fit-content">
          <Box width="92%" margin="auto" paddingTop="5%" paddingLeft="2%">
            <Text fontSize="28px" fontWeight="600">
              Get In Touch
            </Text>
            <Flex flexDirection="column" width="97%">
              <Image
                src={contactImg}
                width="97%"
                height="65vh"
                
              />
              <Box width="100%">
                <Text fontSize="1rem" fontWeight="600">
                  Name
                </Text>
                <Input
                  placeholder="John Doe"
                  width="100%"
                  height="7vh"
                  marginTop="2%"
                  border="1px solid gray"
                />

                <Text fontSize="1rem" fontWeight="600" paddingTop="2%">
                  Email
                </Text>
                <Input
                  placeholder="email@gmail.com"
                  width="100%"
                  height="7vh"
                  marginTop="2%"
                  border="1px solid gray"
                />

                <Text fontSize="1rem" fontWeight="600" paddingTop="2%">
                  Message
                </Text>
                <Input
                  placeholder="Enter your message"
                  width="100%"
                  height="25vh"
                  marginTop="2%"
                  border="1px solid gray"
                />

                <Button
                  borderRadius="50px"
                  marginRight="1%"
                  padding="3% 3%"
                  backgroundColor="#0298DA"
                  color="white"
                  colorScheme="red"
                  transition="1s ease-in"
                  marginTop="5%"
                  width="50%"
                  marginBottom="7%"
                >
                  send
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      ) : (
        <Box padding="2% 10%" width="100%" height="fit-content">
          <Box width="92%" margin="auto" paddingTop="2%" paddingLeft="2%">
            <Text fontSize="42px" fontWeight="600">
              Get In Touch
            </Text>
            <Flex
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              width="97%"
            >
              <Image
                src={contactImg}
                width="50%"
                height="65vh"
                marginTop="3%"
              />
              <Flex flexDirection="column" width="50%">
                <Text fontSize="1rem" fontWeight="600">
                  Name
                </Text>
                <Input
                  placeholder="John Doe"
                  width="85%"
                  height="7vh"
                  marginTop="2%"
                  borderRadius="50px"
                />

                <Text fontSize="1rem" fontWeight="600" paddingTop="2%">
                  Email
                </Text>
                <Input
                  placeholder="email@gmail.com"
                  width="85%"
                  height="7vh"
                  marginTop="2%"
                  borderRadius="50px"
                />

                <Text fontSize="1rem" fontWeight="600" paddingTop="2%">
                  Message
                </Text>
                <Textarea
                  placeholder="Enter your message"
                  width="85%"
                  height="25vh"
                  marginTop="2%"
                  borderRadius="25px"
                />

                <Button
                  borderRadius="50px"
                  marginRight="1%"
                  padding="4% 1%"
                  backgroundColor="#0298DA"
                  color="white"
                  colorScheme="red"
                  transition="1s ease-in"
                  marginTop="5%"
                  width="30%"
                >
                  send
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default GetInTouch;
