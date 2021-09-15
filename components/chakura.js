import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"

export default function Chakura() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Button colorScheme="blue">Button</Button>

  <Button colorScheme="teal" size="xs">
    Button
  </Button>
  <Button colorScheme="teal" size="sm">
    Button
  </Button>
  <Button colorScheme="teal" size="md">
    Button
  </Button>
  <Button colorScheme="teal" size="lg">
    Button
  </Button>
  <Button colorScheme="teal" variant="solid">
    Button
  </Button>
  <Button colorScheme="teal" variant="outline">
    Button
  </Button>
  <Button colorScheme="teal" variant="ghost">
    Button
  </Button>
  <Button colorScheme="teal" variant="link">
    Button
  </Button>
    </ChakraProvider>
  )
}