import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Boton from './Boton'
import Datos from './Datos'
import MostrarNombre from './MostrarNombre'
function App() {
  const [count, setCount] = useState(0);
  const [nombre,setNombre] =useState("")
  console.log("renderizado")
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Boton count={count} setCount={setCount}/>
      <Boton count={count} setCount={setCount}/>
      <Datos nombre={nombre}setNombre={setNombre}/>
      <MostrarNombre nombre={nombre}/>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
