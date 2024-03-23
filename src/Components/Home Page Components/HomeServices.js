import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import service1 from "../../Assets/Images/service1.png";
import service2 from "../../Assets/Images/service2.png";
import service3 from "../../Assets/Images/service3.png";
import service4 from "../../Assets/Images/service4.png";
import service5 from "../../Assets/Images/service5.png";
import service6 from "../../Assets/Images/service6.png";
import service7 from "../../Assets/Images/service7.png";
import service8 from "../../Assets/Images/service8.png";

const HomeServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Box backgroundColor="#F7F7F7" padding="5% 2%" className="slider-container">
      <Box textAlign="center" marginBottom="3%">
        <Text fontSize="48px" fontWeight="semibold">Our Services</Text>
      </Box>

      <Slider {...settings}>
        <Box>
          <Image marginRight="5%" src={service1} />
        </Box>

        <Box marginTop="30px">
          <Image src={service2} />
        </Box>

        <Box>
          <Image src={service3} />
        </Box>

        <Box marginTop="30px">
          <Image src={service4} />
        </Box>

        <Box>
          <Image src={service5} />
        </Box>

        <Box marginTop="30px">
          <Image src={service6} />
        </Box>

        <Box>
          <Image src={service7} />
        </Box>

        <Box marginTop="30px">
          <Image src={service8} />
        </Box>
      </Slider>
    </Box>
  );
};

export default HomeServices;
