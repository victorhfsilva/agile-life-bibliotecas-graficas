# CSS

## O que é?

CSS é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página.

## Vantagens

- CSS permite que você estilize tudo em um arquivo diferente, criando assim o estilo separadamente.

## Utilização

- Criar arquivo extensão "css" e importe para sua página 

```javascript
// Importe o arquivo './styles.css' no início do arquivo onde deseja realizar a estilização, geralmente no início da página 

import './styles.css'

function Index() {
  return(
     <div className='container-main'>
     Olá Mundo
     </div>
  )
}
```

- Já no arquivo extensão .css

```javascript
// É sempre recomendável nomear classes ao utilizar CSS, garantindo assim que a estilização aplicada não afete inadvertidamente outras divs nas quais se busca uma estilização diferente

.container-main {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```

## Mais informações

[CSS MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

[CSS W3C](https://www.w3schools.com/css/)