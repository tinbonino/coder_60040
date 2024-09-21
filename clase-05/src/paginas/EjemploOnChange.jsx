import { useState } from "react"

function EjemploOnChange() {

    const [valor,setValor]=useState("");

    const inputHandler= (e) => {
        setValor(e.target.value);
      
    }

    console.log("Renderizando")

  return (
    <div>
        <input 
            type="text" 
            // value={valor}
            onChange={inputHandler}
            placeholder="Ingrese aquí"
            />
            <h2>Texto Ingresado: {valor}</h2>
    </div>
  )
}

export default EjemploOnChange