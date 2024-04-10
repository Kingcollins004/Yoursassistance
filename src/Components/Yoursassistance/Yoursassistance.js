import { Box, Image } from "@chakra-ui/react";
import React from "react";
import img1 from "./Assets/img1.jpg";
import img3 from "./Assets/img3.jpg";
import img4 from "./Assets/img4.jpg";
import img5 from "./Assets/img5.jpg";
import img6 from "./Assets/img6.jpg";
import img7 from "./Assets/img7.jpg";
import img8 from "./Assets/img8.jpg";
import img9 from "./Assets/img9.jpg";
import img10 from "./Assets/img10.jpg";
import img11 from "./Assets/img11.jpg";
import img12 from "./Assets/img12.jpg";

const Yoursassistance = () => {
  const data = [
    img1,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  return (
    <Box>
      <Box>
        {data.map((item) => (
          <Box
            paddingX="10%"
            paddingY="5%"
            marginX="15%"
            borderRadius="15px"
            marginTop="1%"
            backgroundColor="#F7F7F7"
          >
            <Image borderRadius="8px" src={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Yoursassistance;
