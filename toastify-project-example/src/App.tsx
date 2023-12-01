import { toast } from 'react-toastify';
import './App.css'

function App() {

  function ToastifyTopLeft() {
    return (
      toast('Oláaaaa!', {
        role: "alert", //acessibilidade
        position: toast.POSITION.TOP_LEFT,
        icon: "🚀",
        closeButton: true,
        hideProgressBar: false,
        theme: "dark"
      }))
  }

  return (
    <div className='container-main'>
      <button onClick={ToastifyTopLeft}>Clicar Aqui</button>
    </div>
  )
}

export default App
