# Chakra UI

## O que é?

O Chakra UI é uma biblioteca de componentes de interface de usuário para React que oferece uma experiência de desenvolvimento rápida e fácil. Ele fornece um conjunto de componentes prontos para uso, bem como estilos e temas personalizáveis, tornando-o uma escolha popular para desenvolvedores que procuram criar interfaces de usuário elegantes e acessíveis. 

## Vantagens

- Customização: Você pode facilmente customizar qualquer parte dos componentes que ela fornece para complementar seus requisitos de design. Quer seja tema, templates, configurações ou qualquer outra coisa, você pode fazer o melhor uso desta ferramenta de design.
- Responsividade: criação de estilos responsivos de uma forma simples e intuitiva. Podendo utilizar notação de matriz ou de objeto.
- Acessibilidade: O Chakra UI segue os padrões WAI-ARIA em seus componentes, tornando seus aplicativos facilmente acessíveis.
- Dark Mode: todos os componentes são compatíveis com os modos claro e escuro. Podemos criar nossa própria experiência de modo claro e escuro.

## Inicialização

- Para instalar o styled-components basta:

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
ou 

```bash
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```


- Para importá-lo basta adicionar a linha a seguir no seu arquivo:

```javascript
import { elementoASerImportado } from '@chakra-ui/react';
```

## Utilização

O Chakra UI usa um componente Provider para fornecer estilos e temas para toda a sua aplicação. 

Para configurar o Provider basta importá-lo em torno dos seu componente App no seu arquivo principal main.js. 

```javascript

//  Configurando o Provider
  import { ChakraProvider } from '@chakra-ui/react'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <React.StrictMode>
   <ChakraProvider>
     <App />
   </ChakraProvider>
 </React.StrictMode>
)

```

#### Usando componentes Chakra UI

A biblioteca oferece uma ampla gama de [componentes](https://chakra-ui.com/docs/components), desde botões e formulários até modais e barras de progresso.

Cada componente traz estilizações e comportamentos intrínsecos, mas você pode customizá-los através de propriedades, semelhantes às propriedades que utilizamos no CSS.


```javascript
//Utilizando os componentes Container e Heading
import { Container, Heading } from '@chakra-ui/react'


function App() {
 return (
   <Container
     textAlign="center"
     display="flex"
     flexDirection="column"
     alignItems="center"
     justifyContent="center"
     h="100vh"
   >
     <Heading>Meu primeiro projeto utilizando Chakra-ui!</Heading>
     <a
       href="https://github.com/camilacno/chakra-ui-tutorial"
       target="_blank"
       rel="noopener noreferrer"
     >
       Acesse o repositório
     </a>
   </Container>
 )
}
```

A estilização pode ser feita inline como no exemplo acima ou utilizando um objeto com as propriedades, semelhante ao styled-components: 

```javascript
//estilizando objeto com propriedades e atribuindo ao componente
import { Box, Container, Heading } from '@chakra-ui/react'


const boxStyles = {
  p: '10px',
  bg: 'blue.400',
  color: 'white',
  m: '10px',
  textAlign: 'center',
  borderRadius: '5px',
}


function App() {
  return (
    <Container
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Heading>Meu primeiro projeto utilizando Chakra-ui!</Heading>


      <Box sx={boxStyles}>
        <a
          href="https://github.com/camilacno/chakra-ui-tutorial"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse o repositório
        </a>
      </Box>
    </Container>
  )
}
```
## Mais informações

[Chakra-UI](https://chakra-ui.com/)