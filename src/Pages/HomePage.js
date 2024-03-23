import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header";
import HomeHeroSection from "../Components/Home Page Components/HomeHeroSection";
import WhyBranding from "../Components/Home Page Components/WhyBranding";
import RecentProjects from "../Components/Home Page Components/RecentProjects";
import HomeServices from "../Components/Home Page Components/HomeServices";
import HomeAbout from "../Components/Home Page Components/HomeAbout";
import Testimonials from "../Components/Testimonials";
import GetInTouch from "../Components/GetInTouch";
import pageCover from "../Assets/Images/PageCover.png";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <Box backgroundColor="white">
      <Header />
      <HomeHeroSection />
      <WhyBranding />
      <RecentProjects />
      <HomeServices />
      <HomeAbout />
      <Testimonials />
      <GetInTouch />
      <Flex
        justifyContent="center"
        marginBottom={{ base: "15%", md: "0" }}
        marginTop={{ base: "10%", md: "5%" }}
        marginX="15%"
      >
        <Image width={{ base: "100%", md: "100%" }} src={pageCover} />
      </Flex>
      <Footer />
    </Box>
  );
};

export default HomePage;
