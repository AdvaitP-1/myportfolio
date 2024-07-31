'use client'


import { Box, Heading, HStack, Link, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SocialLink = ({ href, icon, label }) => (
  <Link href={href} isExternal>
    <Icon as={icon} boxSize={20} aria-label={label} />
  </Link>
)

const Socials = () => {
  return (
    <Box as="section" id="socials" py={20}>
      <Heading as="h2" size="xl" mb={8}>Connect with Me</Heading>
      <HStack spacing={8} justifyContent="center">
        <SocialLink href="https://github.com/AdvaitP-1" icon={FaGithub} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/advp/" icon={FaLinkedin} label="LinkedIn" />
      </HStack>
    </Box>
  )
}

export default Socials