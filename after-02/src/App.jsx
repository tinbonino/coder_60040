import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Nuestros productos" />} />

        <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestros productos" />} />

        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

      </Routes>    
    </BrowserRouter>
  );
}

export default App;
