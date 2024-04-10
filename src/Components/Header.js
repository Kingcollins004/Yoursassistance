import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/Svg/logo.svg";
import logoB from "../Assets/Svg/logoBlack.svg";
import logoR from "../Assets/Svg/logoR.svg";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import menu from "../Assets/Svg/menu.svg";
import menuRed from "../Assets/Svg/menuRed.svg";
import menuBlack from "../Assets/Svg/menuBlack.svg";
import darkIcon from "../Assets/Svg/darkIcon.svg";
import darkIconRed from "../Assets/Svg/darkIconRed.svg";
import darkIconBlack from "../Assets/Svg/darkIconBlack.svg";

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
          <Box>
            {pathname === "/projects" ? (
              <Image width="80%" src={logoB} />
            ) : pathname === "/services" ? (
              <Image width="80%" src={logoR} />
            ) : (
              <Image width="80%" src={logo} />
            )}
          </Box>
        </Box>
        <Flex justifyContent="flex-end" flex="1">
          <Menu>
            <MenuButton display="flex" justifyContent="flex-end">
              {pathname === "/projects" ? (
                <Image float="right" width="70px" src={menuBlack} />
              ) : pathname === "/services" ? (
                <Image float="right" width="70px" src={menuRed} />
              ) : (
                <Image float="right" width="70px" src={menu} />
              )}
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/">
                  <Text
                    style={
                      pathname === "/"
                        ? {
                            color: "#0298DA",
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
                    fontWeight="600"
                    textAlign="center"
                    fontSize="16px"
                  >
                    Home
                  </Text>
                </Link>
              </MenuItem>

              <MenuItem>
                <Link to="/services">
                  <Text
                    style={
                      pathname === "/services"
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
                    fontWeight="600"
                    textAlign="center"
                    fontSize="16px"
                  >
                    Services
                  </Text>
                </Link>
              </MenuItem>

              <MenuItem>
                <Link to="/projects">
                  <Text
                    style={
                      pathname === "/projects"
                        ? {
                            color: "#393637",
                          } // if the path is services change the color to red
                        : pathname === "/services"
                        ? {
                            color: "#ED3237",
                          }
                        : null
                    }
                    color="#0298DA"
                    fontWeight="600"
                    textAlign="center"
                    fontSize="16px"
                  >
                    Projects
                  </Text>
                </Link>
              </MenuItem>

              <MenuItem>
                <Link to="/contact-us">
                  <Text
                    style={
                      pathname === "/contact-us"
                        ? {
                            color: "#0298DA",
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
                    fontWeight="600"
                    textAlign="center"
                    fontSize="16px"
                  >
                    Contact
                  </Text>
                </Link>
              </MenuItem>

              <Box width="100%" marginX="5%">
                {pathname === "/projects" ? (
                  <Flex alignItems="center">
                    <Text
                      fontSize="14px"
                      fontWeight="600"
                      marginRight="10px"
                      color="#393637"
                    >
                      Switch to Dark Mode
                    </Text>
                    <Image src={darkIconBlack} />
                  </Flex>
                ) : pathname === "/services" ? (
                  <Flex alignItems="center">
                    <Text
                      fontSize="14px"
                      fontWeight="600"
                      marginRight="10px"
                      color="#ED3237"
                    >
                      Switch to Dark Mode
                    </Text>
                    <Image src={darkIconRed} />
                  </Flex>
                ) : (
                  <Flex alignItems="center">
                    <Text
                      fontSize="14px"
                      fontWeight="600"
                      marginRight="10px"
                      color="#0298DA"
                    >
                      Switch to Dark Mode
                    </Text>
                    <Image src={darkIcon} />
                  </Flex>
                )}
              </Box>
            </MenuList>
          </Menu>
        </Flex>
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
          ) : pathname === "/services" ? (
            <Image src={logoR} />
          ) : (
            <Image src={logo} />
          )}
        </Box>

        <Flex
          justifyContent="flex-start"
          alignItems="center"
          height="100px"
          position="relative"
          top="0"
          float="right"
        >
          <Flex
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
                  padding="12px 34px"
                  fontSize="14px"
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
                  padding="12px 34px"
                  fontSize="14px"
                >
                  Services
                </Text>
              </Link>
            </Box>

            <Box>
              <Link to="/projects">
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
                  padding="12px 34px"
                  fontSize="14px"
                >
                  Projects
                </Text>
              </Link>
            </Box>

            <Box>
              <Link to="/contact-us">
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
                  padding="12px 34px"
                  fontSize="14px"
                >
                  Contact
                </Text>
              </Link>
            </Box>

            <Box width="30px">
              {pathname === "/projects" ? (
                <Image src={darkIconBlack} />
              ) : pathname === "/services" ? (
                <Image src={darkIconRed} />
              ) : (
                <Image src={darkIcon} />
              )}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
