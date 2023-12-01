import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App.tsx'
import './index.css'

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
