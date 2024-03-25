import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Svg/logo.svg";
import { NavLink } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import HeaderServices from "./HeaderServices";
import menu from "../Assets/Svg/menu.svg";

const Header = () => {
  return (
    <Box>
      <Flex
        display={{ base: "flex", sm: "none" }}
        paddingX="5%"
        paddingY="5%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flex="1">
          <Image src={logo} />
        </Box>
        <Box>
          <Menu>
            <MenuButton>
              <Image src={menu} />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <NavLink
                  to="/"
                  activeStyle={{ color: "blue", fontSize: "18px" }}
                >
                  <Text>Home</Text>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink
                  to="/about"
                  activeStyle={{ color: "blue", fontSize: "18px" }}
                >
                  <Text>About</Text>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <Menu>
                  <MenuButton>
                    <Text>Services</Text>
                  </MenuButton>

                  <MenuList
                    width="500px"
                    marginTop="3%"
                    border="1px solid #EEF6FE"
                    boxShadow="0px 4px 19px rgba(0, 0, 0, 0.15)"
                  >
                    <HeaderServices />
                  </MenuList>
                </Menu>
              </MenuItem>

              <MenuItem>
                <NavLink
                  to="/projects"
                  activeStyle={{ color: "blue", fontSize: "18px" }}
                >
                  <Text>Projects</Text>
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink
                  to="/contact-us"
                  activeStyle={{ color: "blue", fontSize: "18px" }}
                >
                  <Text>Contact</Text>
                </NavLink>
              </MenuItem>

              <Button
                backgroundColor="#0298DA"
                color="white"
                borderRadius="50px"
                paddingY="5%"
                paddingX="20px"
                marginLeft="5%"
              >
                Explore Services
              </Button>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      {/* for Desktop view */}
      <Flex display={{ base: "none", md: "flex" }} paddingX="10%" paddingY="2%">
        <Box flex="1">
          <Image src={logo} />
        </Box>
        <Flex justifyContent="flex-end" flex="1" alignItems="center">
          <Flex justifyContent="flex-end" marginRight="3%">
            <Box marginRight="10%">
              <NavLink to="/" activeStyle={{ color: "blue", fontSize: "18px" }}>
                <Text>Home</Text>
              </NavLink>
            </Box>
            <Box marginRight="10%">
              <NavLink
                to="/about"
                activeStyle={{ color: "blue", fontSize: "18px" }}
              >
                <Text>About</Text>
              </NavLink>
            </Box>

            <Box marginRight="10%">
              <Menu>
                <MenuButton>
                  <NavLink
                    to="/services"
                    activeStyle={{ color: "blue", fontSize: "18px" }}
                  >
                    <Text>Services</Text>
                  </NavLink>
                </MenuButton>

                <MenuList
                  width="500px"
                  marginTop="3%"
                  border="1px solid #EEF6FE"
                  boxShadow="0px 4px 19px rgba(0, 0, 0, 0.15)"
                >
                  <HeaderServices />
                </MenuList>
              </Menu>
            </Box>

            <Box marginRight="10%">
              <NavLink
                to="/projects"
                activeStyle={{ color: "blue", fontSize: "18px" }}
              >
                <Text>Projects</Text>
              </NavLink>
            </Box>
            <Box marginRight="10%">
              <NavLink
                to="/contact-us"
                activeStyle={{ color: "blue", fontSize: "18px" }}
              >
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
    </Box>
  );
};

export default Header;
