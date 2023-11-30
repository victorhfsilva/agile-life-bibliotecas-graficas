import './App.css'

import { Flex, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";


const buttonStyles = {
  mt:"6",
  bgColor:"#485495",
  color:"#fff",
  size:"lg",
  w:"200px"
}

function App() {

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      p="0">
      <Flex
        as="form"
        w="100%"
        maxWidth="360"
        bg="#fff"
        p="8"
        alignItems="center"
  
        flexDir="column">


        <FormControl>

          <FormLabel
            textAlign="center"
            fontSize="32px"
            color="#485494"
            margin="40px 0"
          >Qual o seu nome? </FormLabel>
          <Input
            border="1px solid #485495"
            type="text"
            name="text"
            focusBorderColor="pink.500"
            bgColor="rgb(72,84,148,15%)"
            size="lg"
            variant="filled"
            borderRadius="2px"
            _hover={{
              bgColor:
                "gray.900",
            }} />
        </FormControl>
        <Button sx={buttonStyles}
          type="submit"
          >
          Entrar na sala
        </Button>
      </Flex>
    </Flex>
  )
}

export default App
