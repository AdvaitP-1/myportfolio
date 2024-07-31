import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    brand: {
      50: '#e6f6ff',
      100: '#b3e0ff',
      500: '#0077cc',
      900: '#003566',
    },
  },
})

export default theme