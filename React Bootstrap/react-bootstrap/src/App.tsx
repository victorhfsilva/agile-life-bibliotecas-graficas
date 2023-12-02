import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
    <main>
        <Stack id="stack" gap ={3}>
          <Form.Label id="lb-name" htmlFor='name'>Insira seu nome.</Form.Label>
          <Form.Control type="name" id="f-name" placeholder='Nome'/>
          
          <Form.Label id="lb-project">Selecione o projeto.</Form.Label>
          <Form.Select id='sl-project'>
            <option>Aleatório</option>
            <option>Unicórnio</option>
            <option>Apocalipse Zombie</option>
            <option>Navio Pirata</option>  
          </Form.Select>


          <Form.Label id="lb-lista">Escolha da Lista:</Form.Label>
          <Form>
            <Form.Group>
              <Form.Check
                  type={'radio'}
                  id={'2-aleatorios'}
                  label={'2 aleatórios'}
                />
                <Form.Check
                  type={'radio'}
                  id={'3-aleatorios'}
                  label={'3 aleatórios'}
                />
                <Form.Check
                  type={'radio'}
                  id={'4-aleatorios'}
                  label={'4 aleatórios'}
                />
            </Form.Group>
          </Form>
          <Button variant="primary" id="bt-enter">Entrar na sala</Button>
        </Stack>
    </main>
   </>
  )
}

export default App
