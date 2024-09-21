import CartWidget from "./CartWidget";

import {Link} from "react-router-dom";

import "./navbar.css";



function Navbar() {
  return (
   <nav className="navbar">
        <Link to="/" className="icon-navbar">
            <img className="icon-navbar" src="./img/logitech-icon.png" alt="" />
        </Link>
        <ul className="categories-navbar">
            <Link to="/category/mouse" className="categorie-navbar">
                Mouse
            </Link>
            <Link to="/category/teclado" className="categorie-navbar">
                Teclados
            </Link>
            <Link to="/category/audio" className="categorie-navbar">
                Audio
            </Link>
        </ul>
        <CartWidget/>
   </nav>
  )
}

export default Navbar