# Toastify

## O que é?

é uma biblioteca criada em JavaScript que, permite a criação de notificações de diversos tipos. Essas notificações podem ser com mensagens de sucesso, de erro, serem informativas, etc.

## Vantagens

- Presença do modo dark para exibição de notificações;
- Criação de uma notificação em poucos minutos;
- Fácil personalização;
- Com um simples ato de deslizar em seu dispositivo, o aviso já é fechado;
- Programar por quanto tempo a notificação será exibida;
- Ele possui uma barra de progresso no aviso, cujo podemos controlar o seu fluxo (se vai da esquerda para direita ou vice-versa);
- Possibilidade de adição de ícones com as mensagens, nos avisos;

## Inicialização

- Para instalar o toastify, basta:

```bash
npm install react-toastify
```

ou

```bash
yarn add react-toastify
```

## Utilização

Para facilitar o uso do React Toastify em todas as páginas sem a necessidade de importá-lo repetidamente, é recomendável integrar o código no arquivo principal main.tsx, onde o ReactDOM é geralmente utilizado.

A importação pode ser realizada da seguinte maneira, conforme exemplificado abaixo. Dessa forma, todas as outras telas terão acesso ao componente Toast sem a necessidade de importação adicional:

```javascript
// como mostrado no exemplo abaixo, é possível passar configuração inicial para Toast
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      autoClose={1000}
      transition={Slide}
      newestOnTop={true}
      closeOnClick
      draggable
      closeButton={true}
    />
  </React.StrictMode>,
)

//preciso importa também o css do toastify e o toastify, no mesmo arquivo
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
```

- Por último, importamos a função necessária para chamar o Toastify (notificação), conforme exemplificado abaixo. Ao clicar no botão, a notificação será exibida.

```javascript
//É possível fornecer configurações específicas apenas para esse Toastify em particular.
function ToastifyTopLeft() {
    return (
      toast('Oláaaaa!', { //com a mensagem "Oláaaa!"
        role: "alert", //acessibilidade
        position: toast.POSITION.TOP_LEFT, //aparecer ao lado de cima e a esquerda da tela
        icon: "🚀", //tera esse icone
        hideProgressBar: false, //Tera barra de progresso, mostrando quanto tempo falta para finalizar o toast.
        theme: "dark" //É possível personalizar o Toast da maneira desejada ao passar uma classe, no entanto, já existe um tema predefinido que pode ser escolhido entre colored, light e dark. O tema padrão será escuro, mas podemos ajustá-lo conforme necessário através de classes, de acordo com as preferências da nossa aplicação.
      }))
  }

  return (
    <div className='container-main'>
      <button onClick={ToastifyTopLeft}>Clicar Aqui</button>
    </div>
  )
```

## Mais informações

[Toastify - Introdução](https://fkhadra.github.io/react-toastify/introduction)

[Toastify - API](https://fkhadra.github.io/react-toastify/api/toast)
