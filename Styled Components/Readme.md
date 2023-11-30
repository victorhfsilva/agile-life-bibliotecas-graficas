# Styled Components

## O que é?

É uma biblioteca que nos permite escrever códigos CSS dentro do Javascript ao nível de componente da aplicação. O que significa que a estilização CSS se aplica ao escopo do componente e não do documento global.

## Vantagens

- Facilidade de manutenção: armazenar os estilos do componente junto dos próprios componentes permite uma melhor manutenção do código.

- Simplificação da estilização dinâmica: adaptar o estilo de um componente com base em props ou um tema global é simples e intuitivo. 

## Inicialização

- Para instalar o styled-components basta:

```bash
npm install styled-components
```

- Para importá-lo basta adicionar a linha a seguir no seu arquivo:

```javascript
import styled from 'styled-components';
```

## Exemplos

### Criando um Styled Component

```javascript
// Crie um componente ./styles.js estilizado
const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
```

```javascript
// Use o componente em seu aplicativo
import {Button} from './styles';

function App() {
  return (
    <div>
      <Button>Styled Button</Button>
    </div>
  );
}
```

### Extendendo Estilos

```javascript
const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

// Um novo componente baseado em Button que sobrescreve alguns estilos. 
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function App() {
    return (
        <div>
            <Button>Normal Button</Button>
            <TomatoButton>Tomato Button</TomatoButton>
        </div>
    );
};
```

### Adaptando o estilo ao props

#### Exemplo 1:

```typescript
// Crie um componente ./styles.js estilizado
const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;
```

```typescript
// Use o componente em seu aplicativo
import {Button} from './styles';

function App() {
    return (
        <div>
            <Button>Normal</Button>
            <Button $primary>Primary</Button>
        </div>
    );
};
```

#### Exemplo 2:

```typescript
// Crie um componente ./styles.js estilizado
const Input = styled.input<{ $inputColor?: string; }>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$inputColor || "#BF4F74"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
```

```typescript
// Use o componente em seu aplicativo
import {Input} from './styles';

function App() {
    return (
        <div>
            <Input defaultValue="@probablyup" type="text" />
            <Input defaultValue="@geelen" type="text" $inputColor="rebeccapurple" />
        </div>
    );
};
```

### Utilizando estados com o Styled Component

```javascript
// Criando um componente estilizado
const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid ${props => (props.primary ? 'palevioletred' : 'white')};
  border-radius: 3px;
  color: ${props => (props.primary ? 'palevioletred' : 'white')};
  background: ${props => (props.primary ? 'white' : 'palevioletred')};
`;

// Criando um componente funcional React
function MyComponent() {
  // Adicionando um estado local usando o hook useState
  const [isPrimary, setIsPrimary] = useState(true);

  return (
    <div>
      <StyledButton primary={isPrimary} onClick={() => setIsPrimary(!isPrimary)}>
        Toggle Style
      </StyledButton>
    </div>
  );
}

// Exemplo de uso
function App() {
  return (
    <div>
      <h1>Styled Components with State</h1>
      <MyComponent />
    </div>
  );
}
```

No exemplo fornecido, o caractere $ é usado como uma convenção para indicar que a propriedade específica ($inputColor neste caso) é uma propriedade personalizada ou uma propriedade que está sendo usada para passar valores específicos para estilização. Esta prática ajuda a evitar colisões de nomes de propriedades com palavras reservadas ou outras variáveis no escopo.

## Mais informações

[Styled Components](https://styled-components.com/)