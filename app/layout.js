'use client'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from './theme'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <CSSReset />
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}