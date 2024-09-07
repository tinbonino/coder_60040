
import './App.css'
import Productos from './components/Productos';
import Producto from './components/Producto';
import EjemploUseRef from './components/EjemploUseRef';
import EjemploSimpleUseEffect from './components/EjemploSimpleUseEffect';
import EjemploUseEffect from './components/EjemploUseEffect';
import EjemploMapYPromise from './components/EjemploMapYPromise';
function App() {


  return (
    <>
      {/* <Productos>
        <Producto nombre="Empanada" precio="1500" descripcion="Empanada de jamón y queso"/>
        <Producto nombre="Pizza" precio="15700" descripcion="Lalalalalala"/>
        <Producto nombre="Hamburguesa" precio="8000" descripcion="Empanada de jamón y queso"/>
        <Producto nombre="Torta" precio="7000" descripcion="Empanada de jamón y queso"/>
        <Producto nombre="Helado" precio="2500" descripcion="Empanada de jamón y queso"/>
        <Producto nombre="Gaseosa" precio="1500" descripcion="Empanada de jamón y queso"/>
      </Productos>

      <EjemploUseRef/> */}
      {/* <EjemploSimpleUseEffect/> */}
      {/* <EjemploUseEffect/> */}
      <EjemploMapYPromise/>
    </>
  )
}

export default App
