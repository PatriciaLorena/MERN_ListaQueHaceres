import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lista from './components/Lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='contenedor d-flex align-items-center justify-content-center mx-auto mt-3'>
    <h1 >Lista de quehaceres</h1>
    </div>
    <Lista />
      
    </>
  )
}

export default App
