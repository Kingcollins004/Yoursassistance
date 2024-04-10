import React, { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Header from "../Components/Header";
import AboutHero from "../Components/About Components/AboutHero";
import data from "../Utilities/Data";
import brandData from "../Utilities/BrandData";
import logoData from "../Utilities/LogoData";
import webData from "../Utilities/WebData";
import ProjectDetails from "./ProjectDetails";
import ProjectCard from "../Components/ProjectsCard";
import Footer from "../Components/Footer";
import GetInTouch from "../Components/GetInTouch";

const Projects = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  //   const { onOpen, onClose, isOpen } = useDisclosure();
  const projectsPerPage = 6;
  const [visibleProjects, setVisibleProjects] = useState(projectsPerPage);
  const handleDetails = (title, services, navlink) => {
    setSelectedProject({ title, services, navlink });
    setClicked(true);
  };
  const handleViewMore = () => {
    setVisibleProjects(
      (prevVisibleProjects) => prevVisibleProjects + projectsPerPage
    );
  };
  return (
    <Box backgroundColor="white">
      <Box>
        {clicked ? (
          <ProjectDetails
            title={selectedProject.title}
            services={selectedProject.services}
            navlink={selectedProject.navlink}
          />
        ) : (
          <Box>
            <Header />
            <AboutHero />
            {isMobile ? (
              <Box>
                <Tabs
                  marginX="2%"
                  marginTop="10%"
                  // align="end"
                  variant="enclosed"
                >
                  <TabList>
                    <Tab fontSize="12px" fontWeight="600">
                      All
                    </Tab>
                    <Tab fontSize="12px" fontWeight="600">
                      Brand Identity
                    </Tab>
                    <Tab fontSize="12px" fontWeight="600">
                      Logo
                    </Tab>
                    <Tab fontSize="12px" fontWeight="600">
                      Web Designs
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Flex
                        marginTop="5%"
                        flexWrap="wrap"
                        align="center"
                        justifyContent="center"
                        marginX="-5%"
                      >
                        {data
                          .slice(0, visibleProjects)
                          .map((project, index) => (
                            <ProjectCard
                              onClick={() =>
                                handleDetails(project.title, project.services)
                              }
                              key={index}
                              date={project.date}
                              imageSrc={project.imgSrc}
                              services={project.services}
                              title={project.title}
                              navlink={project.titleNav}
                              style={{
                                marginTop: "20px",
                                textAlign: index % 2 === 0 ? "left" : "right",
                              }}
                            />
                          ))}
                      </Flex>
                    </TabPanel>

                    <TabPanel>
                      <Flex
                        marginTop="5%"
                        flexWrap="wrap"
                        align="center"
                        justifyContent="center"
                      >
                        {brandData
                          .slice(0, visibleProjects)
                          .map((project, index) => (
                            <ProjectCard
                              onClick={() =>
                                handleDetails(
                                  project.title,
                                  project.services,
                                  project.titleNav
                                )
                              }
                              key={index}
                              date={project.date}
                              imageSrc={project.imgSrc}
                              services={project.services}
                              title={project.title}
                              navlink={project.titleNav}
                              style={{
                                marginTop: "20px",
                                textAlign: index % 2 === 0 ? "left" : "right",
                              }}
                            />
                          ))}
                      </Flex>
                    </TabPanel>

                    <TabPanel>
                      <Flex
                        marginTop="5%"
                        flexWrap="wrap"
                        align="center"
                        justifyContent="center"
                      >
                        {logoData
                          .slice(0, visibleProjects)
                          .map((project, index) => (
                            <ProjectCard
                              onClick={() =>
                                handleDetails(
                                  project.title,
                                  project.services,
                                  project.titleNav
                                )
                              }
                              key={index}
                              date={project.date}
                              imageSrc={project.imgSrc}
                              services={project.services}
                              title={project.title}
                              navlink={project.titleNav}
                              style={{
                                marginTop: "20px",
                                textAlign: index % 2 === 0 ? "left" : "right",
                              }}
                            />
                          ))}
                      </Flex>
                    </TabPanel>

                    <TabPanel>
                      <Flex
                        marginTop="5%"
                        flexWrap="wrap"
                        align="center"
                        justifyContent="center"
                      >
                        {webData
                          .slice(0, visibleProjects)
                          .map((project, index) => (
                            <ProjectCard
                              onClick={() =>
                                handleDetails(
                                  project.title,
                                  project.services,
                                  project.titleNav
                                )
                              }
                              key={index}
                              date={project.date}
                              imageSrc={project.imgSrc}
                              services={project.services}
                              title={project.title}
                              navlink={project.titleNav}
                              style={{
                                marginTop: "20px",
                                textAlign: index % 2 === 0 ? "left" : "right",
                              }}
                            />
                          ))}
                      </Flex>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            ) : (
              <Box>
                <Tabs
                  marginX="7%"
                  marginTop="10%"
                  // align="end"
                  variant="enclosed"
                >
                  <TabList>
                    <Tab fontWeight="600">All Projects</Tab>
                    <Tab fontWeight="600">Brand Identity Designs</Tab>
                    <Tab fontWeight="600">Logo Designs</Tab>
                    <Tab fontWeight="600">Web Designs</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Flex
                        marginTop="5%"
                        flexWrap="wrap"
                        align="center"
                        justifyContent="center"
                      >
                        {data
                          .slice(0, visibleProjects)
                          .map((project, index) => (
                            <ProjectCard
                              onClick={() =>
                                handleDetails(
                                  project.title,
                                  project.services,
                                  project.titleNav
                                )
                              }
                              key={index}
                              date={project.date}
                              imageSrc={project.imgSrc}
                              services={project.services}
                              title={project.title}
                              navlink={project.titleNav}
                              style={{
                                marginTop: index % 2 === 0 ? "0" : "90px",
                                textAlign: index % 2 === 0 ? "left" : "right",
                              }}
                            />
                          ))}
                      </Flex>
                    </TabPanel>

                    <TabPanel>
                      <Flex
                        marginTop="5%"
                        flexWrap="wrap"
                        align="center"
                        justifyContent="center"
                      >
                        {brandData
                          .slice(0, visibleProjects)
                          .map((project, index) => (
                            <ProjectCard
                              onClick={() =>
                                handleDetails(
                                  project.title,
                                  project.services,
                                  project.titleNav
                                )
                              }
                              key={index}
                              date={project.date}
                              imageSrc={project.imgSrc}
                              services={project.services}
                              title={project.title}
                              navlink={project.titleNav}
                              style={{
                                marginTop: index % 2 === 0 ? "0" : "90px",
                                textAlign: index % 2 === 0 ? "left" : "right",
                              }}
                            />
                          ))}
                      </Flex>
                    </TabPanel>

                    <TabPanel>
                      <Flex
                        marginTop="5%"
                        flexWrap="wrap"
                        align="center"
                        justifyContent="center"
                      >
                        {logoData
                          .slice(0, visibleProjects)
                          .map((project, index) => (
                            <ProjectCard
                              onClick={() =>
                                handleDetails(
                                  project.title,
                                  project.services,
                                  project.titleNav
                                )
                              }
                              key={index}
                              date={project.date}
                              imageSrc={project.imgSrc}
                              services={project.services}
                              title={project.title}
                              navlink={project.titleNav}
                              style={{
                                marginTop: index % 2 === 0 ? "0" : "90px",
                                textAlign: index % 2 === 0 ? "left" : "right",
                              }}
                            />
                          ))}
                      </Flex>
                    </TabPanel>

                    <TabPanel>
                      <Flex
                        marginTop="5%"
                        flexWrap="wrap"
                        align="center"
                        justifyContent="center"
                      >
                        {webData
                          .slice(0, visibleProjects)
                          .map((project, index) => (
                            <ProjectCard
                              onClick={() =>
                                handleDetails(
                                  project.title,
                                  project.services,
                                  project.titleNav
                                )
                              }
                              key={index}
                              date={project.date}
                              imageSrc={project.imgSrc}
                              services={project.services}
                              title={project.title}
                              navlink={project.titleNav}
                              style={{
                                marginTop: index % 2 === 0 ? "0" : "90px",
                                textAlign: index % 2 === 0 ? "left" : "right",
                              }}
                            />
                          ))}
                      </Flex>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            )}

            {visibleProjects < data.length && (
              <Flex justifyContent="center">
                <Button
                  width={{ base: "40%", sm: "15%" }}
                  marginX="5%"
                  fontSize={{ base: "14px", md: "22px" }}
                  backgroundColor="#0298DA"
                  fontWeight="bold"
                  paddingY={{ base: "4%", md: "2.5%" }}
                  borderRadius="50px"
                  color="white"
                  colorScheme="#0298DA"
                  transition="1s ease-in"
                  onClick={handleViewMore}
                  marginY={{ base: "5%", md: "5%" }}
                >
                  View More
                </Button>
              </Flex>
            )}
          </Box>
        )}
      </Box>
      <GetInTouch />
      <Footer />
    </Box>
  );
};

export default Projects;
