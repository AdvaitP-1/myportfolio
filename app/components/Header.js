'use client'

import { Box, Flex, Spacer, Link } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box as="header" bg="white" boxShadow="sm" position="fixed" width="100%" zIndex={10}>
      <Flex maxW="container.xl" mx="auto" p={4} alignItems="center">
        <Link href="/" fontWeight="bold" fontSize="xl" color="brand.500">Advait Pandey</Link>
        <Spacer />
        <Flex>
          <Link href="#projects" mr={4} color="gray.600">Projects</Link>
          <Link href="#experience" mr={4} color="gray.600">Experience</Link>
          <Link href="#socials" color="gray.600">Socials</Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header