import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../Components/Header'
import ServiceHero from '../Components/Service Component/ServiceHero'
// import ServiceCarousel from '../Components/Service Component/ServiceCarousel'

const Services = () => {
  return (
    <Box backgroundColor="white">
      <Header />
      <ServiceHero />
      {/* <ServiceCarousel /> */}
    </Box>
  )
}

export default Services
