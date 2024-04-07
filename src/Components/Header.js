import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Svg/logo.svg";
import logoB from "../Assets/Svg/logoBlack.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import HeaderServices from "./HeaderServices";
import menu from "../Assets/Svg/menu.svg";
import background from "../Assets/Svg/navCont.svg";

const Header = () => {
  const { pathname } = useLocation();
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
      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        paddingX="7%"
        paddingY="2%"
        alignItems="center"
        position="relative"
        zIndex="1000"
      >
        <Box>
          {pathname === "/projects" ? (
            <Image src={logoB} />
          ) : (
            <Image src={logo} />
          )}
        </Box>

        <Flex
          backgroundImage={background}
          backgroundRepeat="no-repeat"
          justifyContent="flex-start"
          alignItems="center"
          height="100px"
          position="relative"
          top="0"
          float="right"
        >
          <Flex
            width="484px"
            justifyContent="space-between"
            marginRight="8%"
            marginLeft="30px"
            alignItems="center"
          >
            <Box>
              <Link to="/">
                <Text
                  style={
                    pathname === "/"
                      ? {
                          backgroundColor: "#0298DA",
                          color: "white",
                        } // if the path is services change the color to red
                      : pathname === "/services"
                      ? {
                          color: "#ED3237",
                        }
                      : pathname === "/projects"
                      ? {
                          color: "#393637",
                        }
                      : null
                  }
                  color="#0298DA"
                  fontWeight="700"
                  borderRadius="50px"
                  textAlign="center"
                  width="117px"
                  padding="13px"
                >
                  Home
                </Text>
              </Link>
            </Box>

            <Box>
              <Link to="/services">
                <Text
                  style={
                    pathname === "/services"
                      ? {
                          backgroundColor: "#ED3237",
                          color: "white",
                        }
                      : pathname === "/projects"
                      ? {
                          color: "#393637",
                        }
                      : null
                  }
                  color="#0298DA"
                  fontWeight="700"
                  borderRadius="50px"
                  textAlign="center"
                  width="117px"
                  padding="13px"
                >
                  Services
                </Text>
              </Link>
            </Box>

            <Box>
              <NavLink to="/projects">
                <Text
                  style={
                    pathname === "/projects"
                      ? {
                          backgroundColor: "#393637",
                          color: "white",
                        } // if the path is services change the color to red
                      : pathname === "/services"
                      ? {
                          color: "#ED3237",
                        }
                      : null
                  }
                  color="#0298DA"
                  fontWeight="700"
                  borderRadius="50px"
                  textAlign="center"
                  width="117px"
                  padding="13px"
                >
                  Projects
                </Text>
              </NavLink>
            </Box>

            <Box>
              <NavLink to="/contact-us">
                <Text
                  style={
                    pathname === "/contact-us"
                      ? {
                          backgroundColor: "#0298DA",
                          color: "white",
                        } // if the path is services change the color to red
                      : pathname === "/services"
                      ? {
                          color: "#ED3237",
                        }
                      : pathname === "/projects"
                      ? {
                          color: "#393637",
                        }
                      : null
                  }
                  color="#0298DA"
                  fontWeight="700"
                  borderRadius="50px"
                  textAlign="center"
                  width="117px"
                  padding="13px"
                >
                  Contact
                </Text>
              </NavLink>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
