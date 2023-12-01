import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
    <main>
    
      <Form>
        <Stack id="stack" gap ={2}>
          <Form.Label id="label" htmlFor='name'>Insira seu nome.</Form.Label>
          <Form.Control type="name" id="form" placeholder='Nome'/>
          <Button variant="primary" id="button">Entrar na sala</Button>
        </Stack>
      </Form>
    </main>
   </>
  )
}

export default App
