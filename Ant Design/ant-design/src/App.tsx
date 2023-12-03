import './styles.css'


import { Space, Radio, Select, Typography, Button, Input, Form, Flex } from 'antd';

const { Title, Paragraph } = Typography;

const App = () => (
  <Flex vertical

    align="center"
    style={{ height: 800, }}
    gap="20px"
  >
    <header>
      <Flex align="center" gap="50px" style={{ width: "100vw", padding: "10px 10vw" }}>
        <Title>Agile Life</Title>
        <a href="https://www.google.com/"> Inglês</a>
      </Flex>

    </header>
    <Paragraph>A sua equipe de TI resolveu diversificar e trabalhar com tipos de projetos pouco ortodoxos.
        Seu desafio é entregar todos os itens solicitados antes que acabe o prazo, o café ou a boa-vontade do cliente.</Paragraph>
    <Space>
      <label className="select" htmlFor="select">Selecione o projeto</label>
      <Select id="select" placeholder='Select option'>
        <option value='option1'>Aleatório</option>
        <option value='option2'>Unicórnio</option>
        <option value='option3'>Apocalipse zumbi</option>
        <option value='option4'>Navio pirata</option>

      </Select>
    </Space>

    <fieldset className='fildset'>
      <legend>Selecione de 2 a 4 papéis para compor o Time:</legend>
      <Space>

        <Radio.Group id="radio" defaultValue={1} name="radio">
          <Radio value={1} >Escolher da lista  </Radio>
          <Radio value={2}>2 aleatórios</Radio>
          <Radio value={3}>3 aleatórios</Radio>
          <Radio value={4}>4 aleatórios</Radio>
        </Radio.Group>


      </Space>
      <Select mode="tags" style={{ width: '800px' }}>
        <option value='option1'>Dev Jr.</option>
        <option value='option2'>Dev Sn.</option>
        <option value='option3'> Suporte</option>
        <option value='option4'>Gerente</option>
        <option value='option5'> Analista</option>
        <option value='option6'>Estagiário</option>
      </Select>

    </fieldset>

    <Button>Iniciar Jogo</Button>



    <Form style={{ maxWidth: 400 }} className="Form">
      <label className="label" htmlFor="name">Qual o seu nome?</label>
      <Input id="name" />
      <Button htmlType="submit" type="primary" className="meu-botao">Entrar na sala </Button>

    </Form>
    <p> Feito utilizando o Ant design</p>
  </Flex>


);

export default App;


