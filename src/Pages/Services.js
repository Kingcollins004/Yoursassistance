import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../Components/Header";
import ServiceHero from "../Components/Service Component/ServiceHero";
import ServiceCarousel from '../Components/Service Component/ServiceCarousel'
import spiralBg from "../Assets/Svg/spiralBg.svg";
import Footer from "../Components/Footer";
import GetInTouch from "../Components/GetInTouch";

const Services = () => {
  return (
    <Box>
      <Box
        backgroundImage={spiralBg}
        backgroundRepeat="no-repeat"
        backgroundColor="white"
        backgroundPosition="center"
        minHeight="100vh"
      >
        <Header />
        <ServiceHero />
      </Box>
        <ServiceCarousel />
        <GetInTouch />
        <Footer />
    </Box>
  );
};

export default Services;
