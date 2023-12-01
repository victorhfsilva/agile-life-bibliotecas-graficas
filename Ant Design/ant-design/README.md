# Ant Design

## O que é?

Ant Design é uma biblioteca de componentes de interface de usuário (UI) para React. Desenvolvida pela Alibaba, ela oferece uma ampla variedade de componentes prontos para uso, seguindo um design consistente e moderno. Esses componentes incluem botões, formulários, tabelas, gráficos, entre outros, e são projetados para ajudar os desenvolvedores a criar interfaces de usuário atraentes e funcionais de maneira eficiente. 

## Vantagens

- Componentes: Você pode usar mais de 50 componentes pré-fabricados diretamente em seus projetos ao invés de criá-los a partir do zero. Estes componentes incluem botões, ícones, tipografia, layouts, navegação, entrada de dados, exibição de dados, feedback, etc.
- Responsividade: Os componentes do Ant Design são projetados para serem responsivos, facilitando a criação de aplicativos que se adaptam bem a diferentes dispositivos e tamanhos de tela.
- Suporte para Internacionalização: A biblioteca oferece suporte incorporado para internacionalização (i18n), permitindo que os aplicativos sejam facilmente adaptados para diferentes idiomas e regiões.


## Inicialização

- Para instalar o styled-components basta:

```bash
npm install antd
```
ou 

```bash
yarn add antd
```


- Para importá-lo basta adicionar a linha a seguir no seu arquivo:

```javascript
import { elementoASerImportado } from 'antd';
```

## Utilização

Para utilizar basta importar os componentes selecionados e utilizar no código. 

```javascript

//  Utilizando os componentes ant design
import { Button } from 'antd';

const App = () => {
  return (
    <div>
      <Button type="primary">Botão Ant Design</Button>
    </div>
  );
};

export default App;

```
O type primary é um dos tipos de botão que já existe na biblioteca. Outras configurações podem ser passadas dessa mesma maneira seguindo a [documentação](https://ant.design/components/overview). 

#### Estilizando um componente

Para customizar os componentes você pode adionar classes CSS personalizadas. 


```javascript
//Utilizando os componentes Container e Heading
import { Button } from 'antd';
import 'antd/dist/antd.css'; // Importe o estilo padrão do Ant Design

const App = () => {
  return (
    <div>
      <Button type="primary" className="meu-botao">
        Botão Ant Design Personalizado
      </Button>
    </div>
  );
};

export default App;
```

Agora, você pode estilizar o botão no seu arquivo CSS: 

```javascript
/* Estilos CSS personalizados */
.meu-botao {
  background-color: #ff5733;
  border-color: #e94512; 
  color: #ffffff; 
}
```
## Mais informações

[Ant Design](https://ant.design/)