# Tailwind

Tailwind CSS é um framework de estilo utility-first que simplifica o processo de construção de interfaces de usuário (UI) modernas e responsivas. Ao contrário de alguns frameworks CSS que oferecem componentes pré-projetados, o Tailwind adota uma abordagem diferente, fornecendo classes utilitárias de baixo nível que você aplica diretamente aos elementos HTML.

Documentação: https://tailwindcss.com/

Guia para vite: https://tailwindcss.com/docs/guides/vite

## Vantagens

- Configuração Personalizada: Você pode personalizar facilmente as configurações do Tailwind para atender aos requisitos específicos do seu projeto, incluindo a definição de cores, fontes, espaçamentos e muito mais.

- Abordagem Utility-First: O Tailwind incentiva o uso extensivo de classes diretamente no HTML para aplicar estilos, eliminando a necessidade de escrever CSS adicional.

- Responsividade Integrada (Mobile Fisrt): O Tailwind facilita a criação de designs responsivos, fornecendo classes que se adaptam automaticamente a diferentes tamanhos de tela.

## Como usar tailwind com vite

### 01- Crie seu projeto

```js
npm create vite@latest my-project -- --template react
cd my-project
```

### 02- Instale o tailwind

```js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
cd my-project
```

### 03- Cole esse arquivo na pasta (tailwind.config.js) gerada pelo tailwind

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 04- na pasta ./src/index.css cole esse arquivo

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Pronto!!!

### Agora é só usar

```js
export default function App() {
  return <h1 className='text-3xl font-bold underline'>Hello world!</h1>
}
```
