'use client'

import { Box, Heading, VStack, Text, Flex, UnorderedList, ListItem } from '@chakra-ui/react'

const ExperienceItem = ({ company, position, duration, description }) => (
  <Box mb={8}>
    <Heading as="h3" size="md">{company}</Heading>
    <Flex justifyContent="space-between" fontWeight="medium" mb={2}>
      <Text>{position}</Text>
    </Flex>

    <Text>{duration}</Text>
    
    <Flex justifyContent="space-between" fontWeight="medium" mb={2}>
        <UnorderedList>
        {Array.isArray(description) ? description.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
        )) : <ListItem>{description}</ListItem>}
        </UnorderedList>
    </Flex>
  </Box>
)
const Experience = () => {
  const experiences = [
    {
      company: 'Headstarter AI',
      position: 'Software Engineer Fellow',
      duration: 'July 2024 - Present',
      description: 'Incoming Fall ',
    },
    {
      company: 'North Carolina State Univeristy',
      position: 'Undergraduate Research Assistant',
      duration: '   August 2024 - November 2024',
      description: 'Incoming Fall '
    },
    {
        company: 'Outlier',
        position: 'AI Intern',
        duration: 'June 2024 - August 2024',
        description: ['Trained and globally deployed 4 AI use-cases with Grannite for user-friendly responses via AWS',
            'Developed a 95% accurate outlier detection model using PyTorch and TensorFlow',
            'Creating an NLP model that achieved 85% accuracy in text classification',
        'Implemented and debugged software components, improving product performance by 15%',]
    },
    {
        company: 'Productify',
        position: 'Full Stack Engineer and Co-Founder',
        duration: 'Feb 2024 - July 2024',
        description: ['Developed a web app for college students’ mental health and productivity, with 200 users',
            'Integrated Oauth and user functionalities using Next.Js and React.JS',
            'Created a back-end using PostgresSQL paired with AWS Lamda improving system']
    }
  ]

  return (
    <Box as="section" id="experience" py={20}>
      <VStack spacing={8} alignItems="flex-start">
        <Heading as="h2" size="xl">Experience</Heading>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </VStack>
    </Box>
  )
}

export default Experience