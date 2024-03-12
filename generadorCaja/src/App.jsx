import { useState } from 'react'
import './App.css'
import Caja from './components/Caja'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='container d-flex align-items-center justify-content-center '>Ingrese un color con nombre en Inglés o hexadecimal</h1>
    <Caja />
    </>
  )
}

export default App
