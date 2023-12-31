import './App.css'
import { Text } from './components/text/styles'
import { Input } from './components/input/styles'
import { FilledButton } from './components/filled_button/styles'

function App() {
  return (
    <>
      <main>
        <Text>Qual o seu nome?</Text>
        <Input placeholder='Nome'></Input>
        <FilledButton>Entrar na sala</FilledButton>
      </main>
    </>
  )
}

export default App;
