

import { FormHelperText, HStack, Radio, RadioGroup, Select, Text, Heading, Link, Flex, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";

/*
-H1 - Agile Life
- link = navegador google,
- p = A sua equipe de TI resolveu diversificar e trabalhar com tipos de projetos pouco ortodoxos.
Seu desafio é entregar todos os itens solicitados antes que acabe o prazo, o café ou a boa-vontade do cliente.
- label: selecione o projeto
- select (aleatorio, unicornio, apolicalipse zumbi, navio pirata)
- radio = escolher da lista, 2 aleatorios, 3 aleatorios, 4 aleatorios
- "acho multi select" 
- Botao = Iniciar Jogo
*/


const buttonStyles = {
  mt: "6",
  bgColor: "#485495",
  color: "#fff",
  size: "lg",
  w: "200px"
}

function App() {

  return (

    <Flex
      w="100vw"
      h="100vh"
      align="center"

      direction="column"
      gap="10"
      p="0 5vw">

      <header>
        <Flex p="5px 5vw" gap="30px" align="center" w="100vw" bg="gray.300">
          <Heading as='h1' color="black">Agile Life</Heading>
          <Link href="https://www.google.com/" isExternal>Inglês</Link>
        </Flex>
      </header>


      <Text as="p">
        A sua equipe de TI resolveu diversificar e trabalhar com tipos de projetos pouco ortodoxos.
        Seu desafio é entregar todos os itens solicitados antes que acabe o prazo, o café ou a boa-vontade do cliente.
      </Text>
      <FormControl>
        <FormLabel> Selecione o projeto</FormLabel>
        <Select placeholder='Select option'>
          <option value='option1'>Aleatório</option>
          <option value='option2'>Unicórnio</option>
          <option value='option3'>Apocalipse zumbi</option>
          <option value='option4'>Navio pirata</option>

        </Select>
      </FormControl>

      <FormControl as='fieldset'>
        <FormLabel as='legend'>Selecione de 2 a 4 papéis para compor o Time:</FormLabel>
        <RadioGroup  defaultValue='1' name = "radio">
        <HStack spacing='24px'>
            <Radio value='1' >Escolher da lista  </Radio>
            <Radio value='2'>2 aleatórios</Radio>
            <Radio value='3'>3 aleatórios</Radio>
            <Radio value='4'>4 aleatórios</Radio>
        </HStack> 
        </RadioGroup>
        <Select multiple h="150" >
          <option value='option1'>Dev Jr.</option>
          <option value='option2'>Dev Sr.</option>
          <option value='option3'> Suporte</option>
          <option value='option4'>Gerente</option>
          <option value='option3'> Analista</option>
          <option value='option4'>Estagiário</option>

        </Select>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>

      <Button> Iniciar Jogo</Button>

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
