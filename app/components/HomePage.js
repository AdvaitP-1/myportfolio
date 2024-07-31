'use client'

import { Box, Container } from '@chakra-ui/react'
import Header from './Header'

import Projects from './Projects'
import Experience from './Experience'
import Socials from './Socials'
import Footer from './Footer'

export default function HomePage() {
  return (
    <Box>
      <Header />
      <Container maxW="container.xl" pt={20}>
        {/*<Hero />*/}
        <Projects />
        <Experience />
        <Socials />
      </Container>
      <Footer />
    </Box>
  )
}