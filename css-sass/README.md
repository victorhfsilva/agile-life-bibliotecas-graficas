# SASS

## O que é?

Folhas de estilo com uma sintaxe incrível. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas que iremos comentar. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente

## Vantagens

- Visando facilitar a criação de códigos CSS,

- Podemos declarar uma variável utilizando o operador $, então passamos a propriedade

- escrever código de forma mais limpa, rápida e com mais aproveitamento

## Inicialização

- Para instalar o SASS, caso estiver usando NPM basta:

```bash
npm install -g sass
```

ou

```bash
npm install --save-dev sass (como dependencia)
```

- Para importá-lo basta adicionar no começo do arquivo .tsx:

```javascript
@import "styles/colors";
@import "styles/fonts";
```

## Utilização

```javascript
// No arquivo com a extensão .tsx, podemos declarar utilizando o className para aplicar estilos.

function App() {

  return (
    <div className='container-main'>
      <div>
        <h1>Qual e seu nome?</h1>
        <input type="text" />
        <button>Entrar na Sala</button>
      </div>
    </div>
  )
}

export default App

// Inclua a classe no arquivo ./styles.scss para aplicar estilos.

.container-main {
    @include flexCenter(center);

    width: 100vw;
    height: 100vh;

    background-color: $bg-gray;
}
```

## Mixins - Diminuir código repetitivos

```javascript
//Podemos declarar o código que se repete constantemente e chamá-lo nos locais apropriados. Além disso, é possível passar parâmetros para personalizar a funcionalidade do código conforme necessário.

@mixin flexCenter($justify) {
    display: flex;
    align-items: center;
    justify-content: $justify;
}
```

## Partials e Váriaveis
```javascript
//Um arquivo "parcial" de estilização que você pode usar dentro de outros arquivos .sass.

//São arquivos nomeados com um _ no início, permitindo a importação e reutilização nas folhas de Sass. Isso facilita a manutenção e a organização do código.

//importa o arquivo _colors.scss

@import "styles/colors";

//E possível reutilizar, conforme exemplo abaixo

background-color: $bg-gray;
```

## Mais informações

[SASS ou SCSS](https://sass-lang.com/)