# Material-UI (MUI)

Documentação: https://mui.com/material-ui/getting-started/installation/

## O que é?

Material-UI é uma biblioteca de componentes React para um desenvolvimento ágil e fácil. É uma implementação do Material Design do Google. Material-UI fornece componentes que são fáceis de usar e personalizar.

## Vantagens

- Componentes Pré-Projetados: Material-UI fornece uma variedade de componentes pré-projetados que seguem as diretrizes do Material Design. Isso inclui botões, cartões, diálogos e muito mais.

- Personalização: Material-UI permite que você personalize os temas e estilos de acordo com suas necessidades.

- Responsividade Integrada: Material-UI facilita a criação de designs responsivos, fornecendo componentes que se adaptam automaticamente a diferentes tamanhos de tela.

## Acessibilidade

- Rótulos Acessíveis: Componentes como TextField e Select garantem a presença de rótulos acessíveis e compatíveis com leitores de tela.

- O Material-UI implementa as práticas recomendadas do ARIA (Accessible Rich Internet Applications) para fornecer informações adicionais e melhorar a experiência para usuários de leitores de tela.

- Suporte para Controle de Teclado: A navegação e interação com os componentes do Material-UI podem ser realizadas usando apenas o teclado, garantindo uma experiência suave para usuários que dependem de dispositivos de entrada alternativos.

## Inicialização

- Para instalar o Material-UI basta:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

- Fontes do material-ui:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
/>
```

- Ícones material-ui:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

Para importá-lo basta adicionar a linha a seguir no seu arquivo:

```js
import { Button } from '@mui/material'

export function App() {
  return (
    <div>
      <Button variant='contained' color='primary'>
        Styled Button
      </Button>
    </div>
  )
}
```

```javascript
import TextField from '@mui/material/TextField'

export function App() {
  return (
    <div>
      <Button>Styled Button</Button>
      <TextField label='Digite aqui' variant='outlined' />
    </div>
  )
}
```

```javascript
import Typography from '@mui/material/Typography'
export function App() {
  return (
    <div>
      <Button>Styled Button</Button>
      <TextField label='Digite aqui' variant='outlined' />
      <Typography variant='h4' color='primary'>
        Título Aqui
      </Typography>
    </div>
  )
}
```
