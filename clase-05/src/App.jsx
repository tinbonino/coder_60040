import {BrowserRouter,Routes,Route} from "react-router-dom";


import Home from "./paginas/Home";
import Layout from "./paginas/Layout";
import Blog from "./paginas/Blog";
import NoPage from "./paginas/NoPage";
import Productos from "./paginas/Productos";
import DetalleProducto from "./paginas/DetalleProducto";
import Eventos from "./paginas/Eventos";
import './App.css'

function App() {
  

  return (
    <>
     <BrowserRouter>

        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="blog" element={<Blog/>}/>
              <Route path="productos" element={<Productos/>}/>
              <Route path="productos/:id" element={<DetalleProducto/>}/>
              <Route path="eventos" element={<Eventos/>}/>
              <Route path="*" element={<NoPage/>}/>
            </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
