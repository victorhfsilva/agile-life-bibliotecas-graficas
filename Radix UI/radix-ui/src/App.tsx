import { Flex, TextField, Theme , Text, Button, Heading, Separator, Link, Select, RadioGroup} from '@radix-ui/themes';
import './App.css';

function App() {

  return (
    <>
    <Theme accentColor='indigo' appearance='light' radius='medium' scaling='110%'>
      <header>
        <Heading size='7'>Agile Life</Heading>
      </header>
        <main>
            <Flex direction={'column'} align={'center'} justify={'center'} gap={'3'}>
              <Text as='label' size={'6'} id="lb-name">Qual o seu nome?</Text>
              <TextField.Input placeholder='Nome' size={'3'}/>
              <Button size={'4'} id="bt-enter">Entrar na sala</Button>
              
              <Separator orientation='horizontal' size={'4'}/>
              
              <Link id='a-google'  href="https://www.google.com/">Antes de prosseguir que tal uma busca rápida no Google?</Link>
              <Text id="p-text">
                A sua equipe de TI resolveu diversificar e trabalhar com tipos de projetos pouco ortodoxos.<br/>
                Seu desafio é entregar todos os itens solicitados antes que acabe o prazo, o café ou a boa-vontade do cliente.
              </Text>

              <Separator orientation='horizontal' size={'4'}/>

              <Text as='label' size={'6'} id="lb-project">Selecione o projeto.</Text>
              <Select.Root defaultValue='aleatorio' size={'3'}>
              <Select.Trigger id='sl-project'/>
                <Select.Content>
                  <Select.Item value='aleatorio'>Aleatório</Select.Item>
                  <Select.Item value='unicornio'>Unicórnio</Select.Item>
                  <Select.Item value='apocalipse'>Apocalipse Zumbi</Select.Item>
                  <Select.Item value='navio'>Navio Pirata</Select.Item>
                </Select.Content>
              </Select.Root>
              
              <Separator orientation='horizontal' size={'4'}/>

              <Text as='label' size={'6'} id="lb-project">Escolher da lista:</Text>
              <RadioGroup.Root defaultValue="1" id='rg-players'>
                <Flex gap="2" direction="column">
                  <Text as="label" size="4">
                    <Flex gap="2">
                      <RadioGroup.Item value="1" /> 2 aleatórios
                    </Flex>
                  </Text>
                  <Text as="label" size="4">
                    <Flex gap="2">
                      <RadioGroup.Item value="2" /> 3 aleatórios
                    </Flex>
                  </Text>
                  <Text as="label" size="4">
                    <Flex gap="2">
                      <RadioGroup.Item value="3" /> 4 aleatórios
                    </Flex>
                  </Text>
                </Flex>
              </RadioGroup.Root>
            </Flex>
            
        </main>
      </Theme>
    </>
  )
}

export default App
