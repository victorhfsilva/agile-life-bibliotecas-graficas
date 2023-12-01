import trash from "./assets/trash3-fill.svg"
import './styles.css'


import { Button, Input, Form, Flex } from 'antd';

const App = () => (
  <Flex vertical 
 
   align="center"
   style={{ height: 800 }}
   >
    <Form style={{ maxWidth: 400 }} className="Form">
      <label className="label" htmlFor="name">Qual o seu nome?</label>
      <Input id="name" />
      <Button htmlType="submit" type="primary" className="meu-botao">Entrar na sala </Button>

    </Form>
  </Flex>
);

export default App;


