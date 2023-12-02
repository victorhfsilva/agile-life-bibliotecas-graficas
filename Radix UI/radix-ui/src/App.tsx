import { Flex, TextField, Theme , Text, Button} from '@radix-ui/themes';
import './App.css';

function App() {

  return (
    <>
      <main>
        <Theme accentColor='indigo' appearance='light' radius='medium' scaling='110%'>
          <Flex direction={'column'} align={'center'} justify={'center'} gap={'3'}>
            <Text as='label' size={'6'}>Qual o seu nome?</Text>
            <TextField.Input placeholder='Nome' size={'3'}/>
            <Button size={'4'}>Entrar na sala</Button>
          </Flex>
        </Theme>
      </main>
    </>
  )
}

export default App
