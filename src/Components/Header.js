import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Svg/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Flex paddingX="10%" paddingY="2%">
      <Box flex="1">
        <Image src={logo} />
      </Box>
      <Flex justifyContent="flex-end" flex="1" alignItems="center">
        <Flex justifyContent="flex-end" marginRight="3%">
          <Box marginRight="10%">
            <NavLink to="/" activeStyle={{ color: 'blue', fontSize: '18px' }}>
              <Text>Home</Text>
            </NavLink>
          </Box>
          {/* <Box marginRight="10%">
            <NavLink to="/about" activeStyle={{ color: 'blue', fontSize: '18px' }}>
              <Text>About</Text>
            </NavLink>
          </Box> */}
          <Box marginRight="10%">
            <NavLink to="/services" activeStyle={{ color: 'blue', fontSize: '18px' }}>
              <Text>Services</Text>
            </NavLink>
          </Box>
          <Box marginRight="10%">
            <NavLink to="/projects" activeStyle={{ color: 'blue', fontSize: '18px' }}>
              <Text>Projects</Text>
            </NavLink>
          </Box>
          <Box marginRight="10%">
            <NavLink to="/contact-us" activeStyle={{ color: 'blue', fontSize: '18px' }}>
              <Text>Contact</Text>
            </NavLink>
          </Box>
        </Flex>
        <Flex justifyContent="flex-end">
          <Button
            backgroundColor="#0298DA"
            color="white"
            borderRadius="50px"
            paddingY="15%"
            paddingX="20px"
          >
            Explore Services
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
