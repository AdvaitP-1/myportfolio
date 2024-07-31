'use client'


import { Box, Heading, SimpleGrid, Text, VStack, Button, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'


const ProjectCard = ({ title, description, githubUrl }) => (
  <Box borderWidth={1} borderRadius="lg" overflow="hidden">
    <Box p={6}>
      <Heading as="h3" size="md" mb={2}>{title}</Heading>
      <Text mb={4}>{description}</Text>
      <Link href={githubUrl} isExternal>
        <Button leftIcon={<FaGithub />} colorScheme="gray" size="sm">
          View on GitHub
        </Button>
      </Link>
    </Box>
  </Box>
)

const Projects = () => {
  const projects = [
    {
      title: 'Job Board',
      description: 'List of internship opportunities for students',
      githubUrl: 'https://github.com/AdvaitP-1/Job-Board'
    },
    {
      title: 'Roudy Recipes',
      description: 'Make it easier to find recipes',
      githubUrl: 'https://github.com/AdvaitP-1/tastyrecipes'
    },
    {
      title: 'Weather',
      description: 'Find the weather condtions in your area',
      githubUrl: 'https://github.com/AdvaitP-1/weather-app'
    },
    {
        title: 'Stock Prediction',
        description: 'Predict stock prices using previous data', 
        githubUrl: 'https://github.com/AdvaitP-1/Stock-Predictor-Algorithm'
    },
    {
        title: 'To-Do List',
        description: 'Keep track of your tasks',
        githubUrl: 'https://github.com/AdvaitP-1/To-Do-list'
    }
  ]

  return (
    <Box as="section" id="projects" py={20}>
      <VStack spacing={8} alignItems="flex-start">
        <Heading as="h2" size="xl">Projects</Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={10} width="100%">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

export default Projects