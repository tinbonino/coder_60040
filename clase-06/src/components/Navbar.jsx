import ThemeContext from "../context"
import { useContext } from "react"

function Navbar() {

    const {tema,handleTema} = useContext(ThemeContext);

  return (
    <div>
        <button onClick={handleTema} style={{background:tema.background,color:tema.font}}>Cambiar tema</button>
    </div>
  )
}

export default Navbar