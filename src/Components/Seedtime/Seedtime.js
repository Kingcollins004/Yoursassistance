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
import img13 from "./Assets/img13.jpg";
import img14 from "./Assets/img14.jpg";
import img15 from "./Assets/img15.jpg";
import img16 from "./Assets/img16.jpg";
import img17 from "./Assets/img17.jpg";
import img18 from "./Assets/img18.jpg";
import img19 from "./Assets/img19.jpg";
import img20 from "./Assets/img20.jpg";
import img21 from "./Assets/img21.jpg";
import img22 from "./Assets/img22.jpg";
import img23 from "./Assets/img23.jpg";
import img25 from "./Assets/img25.jpg";
import img26 from "./Assets/img26.jpg";
import img27 from "./Assets/img27.jpg";
import img28 from "./Assets/img28.jpg";
import img29 from "./Assets/img29.jpg";
import img30 from "./Assets/img30.jpg";
import img31 from "./Assets/img31.jpg";
import img32 from "./Assets/img32.jpg";
import img33 from "./Assets/img33.jpg";

const Seedtime = () => {
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
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
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

export default Seedtime;
