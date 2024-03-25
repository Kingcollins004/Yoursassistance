import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import yoursassistanceImg from "../../Assets/Images/yoursassistanceImg.png";

const GraphicsServices = () => {
    const [edwincare, setEdwincare] = useState(false);
  const [seedtime, setSeedtime] = useState(false);
  const [yoursassistance, setYoursassistance] = useState(false);

  const onMouseEnterEdwinCare = () => {
    setEdwincare(true);
  };

  const onMouseLeaveEdwinCare = () => {
    setEdwincare(false);
  };

  const onMouseEnterSeedtime = () => {
    setSeedtime(true);
  };

  const onMouseLeaveSeedtime = () => {
    setSeedtime(false);
  };

  const onMouseEnterYoursassistance = () => {
    setYoursassistance(true);
  };

  const onMouseLeaveYoursassistance = () => {
    setYoursassistance(false);
  };
  return (
    <Box padding="5% 10%">
      <Text fontSize="48px" color="#ED3237" fontWeight="semibold">
        Recent Projects
      </Text>

      <Box marginTop="5%">
        <Box
          onMouseEnter={onMouseEnterEdwinCare}
          onMouseLeave={onMouseLeaveEdwinCare}
          borderTop="1px solid #E0E0E0"
          borderBottom="1px solid #E0E0E0"
          paddingY="4%"
          cursor="pointer"
        >
          <Text fontSize="22px" fontWeight="semibold">
            Edwin Care Services
          </Text>
          {edwincare && (
            <Image
              style={{ transition: "opacity 0.5s ease-in" }}
              position="absolute"
              left="50%"
              marginTop="-15%"
              src={yoursassistanceImg}
              opacity={1}
            />
          )}
        </Box>

        <Box
          onMouseEnter={onMouseEnterSeedtime}
          onMouseLeave={onMouseLeaveSeedtime}
          borderTop="1px solid #E0E0E0"
          borderBottom="1px solid #E0E0E0"
          paddingY="4%"
          cursor="pointer"
        >
          <Text fontSize="22px" fontWeight="semibold">
            Seedtime Landscape
          </Text>
          {seedtime && (
            <Image
              transition="opacity 0.5s ease-in"
              transitionDelay="4s"
              position="absolute"
              left="50%"
              marginTop="-15%"
              src={yoursassistanceImg}
              opacity={1}
            />
          )}
        </Box>
        <Box
          onMouseEnter={onMouseEnterYoursassistance}
          onMouseLeave={onMouseLeaveYoursassistance}
          borderTop="1px solid #E0E0E0"
          borderBottom="1px solid #E0E0E0"
          paddingY="4%"
        >
          <Text fontSize="22px" fontWeight="semibold">
            Yoursassistance
          </Text>
          {yoursassistance && (
            <Image
              width="35%"
              transition="opacity 0.5s ease-in"
              transitionDelay="4s"
              position="absolute"
              left="50%"
              marginTop="-15%"
              src={yoursassistanceImg}
              opacity={1}
            />
          )}
        </Box>
        <Box
          borderTop="1px solid #E0E0E0"
          borderBottom="1px solid #E0E0E0"
          paddingY="4%"
        >
          <Text fontSize="22px" fontWeight="semibold">
            Vera Coth
          </Text>
        </Box>
        <Box
          borderTop="1px solid #E0E0E0"
          borderBottom="1px solid #E0E0E0"
          paddingY="4%"
        >
          <Text fontSize="22px" fontWeight="semibold">
            Vixtus
          </Text>
        </Box>
        <Box
          borderTop="1px solid #E0E0E0"
          borderBottom="1px solid #E0E0E0"
          paddingY="4%"
        >
          <Text fontSize="22px" fontWeight="semibold">
            Coast Wide Church
          </Text>
        </Box>
      </Box>

      <Box textAlign="center" marginTop="3%">
        <Button
          backgroundColor="#0298DA"
          color="white"
          borderRadius="50px"
          paddingY="2%"
          paddingX="40px"
        >
          View More
        </Button>
      </Box>
    </Box>
  )
}

export default GraphicsServices
