import React, { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Header from "../Components/Header";
import AboutHero from "../Components/About Components/AboutHero";
import data from "../Utilities/Data";
import ProjectDetails from "./ProjectDetails";
import ProjectCard from "../Components/ProjectsCard";
import Footer from "../Components/Footer";
import GetInTouch from "../Components/GetInTouch";

const Projects = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  //   const { onOpen, onClose, isOpen } = useDisclosure();
  const projectsPerPage = 4;
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
              <Flex
                marginTop="5%"
                flexWrap="wrap"
                align="center"
                justifyContent="center"
              >
                {data.slice(0, visibleProjects).map((project, index) => (
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
            ) : (
              <Flex
                marginTop="5%"
                flexWrap="wrap"
                align="center"
                justifyContent="center"
              >
                {data.slice(0, visibleProjects).map((project, index) => (
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
            )}

            {visibleProjects < data.length && (
              <Flex justifyContent="center">
                <Button
                  width="15%"
                  marginX="5%"
                  fontSize={{ base: "16px", md: "22px" }}
                  backgroundColor="#0298DA"
                  fontWeight="bold"
                  paddingY={{ base: "8%", md: "2.5%" }}
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
