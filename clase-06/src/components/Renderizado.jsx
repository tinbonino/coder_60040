import {useState} from "react";



function Renderizado() {

    const [mostrar,setMostrar]=useState(false);

    const handleClick = () => {
      setMostrar(!mostrar);
    }

    // Renderizado condicional con if

    const renderConIf = () => {
      if (mostrar) {
        return <p>Este texto se muestra si el estado es true CON IF</p>
      }
      return <p>Este texto se muestra si el estado es false CON IF</p>
    }

  return (
    <div>
        <button onClick={handleClick}>
            {mostrar? "ocultar": "mostrar"}
        </button>
        {renderConIf()}
        {/* Renderizado condicional con ternario */}
        {mostrar 
            ?<p>Este texto se muestra si el estado es true con un TERNARIO</p>
            : <p>Este texto se muestra si el estado es False con un TERNARIO</p>}
            
        {/*Renderizado condicional con operador &&*/}
            
        {mostrar && <p>Este texto se muestra si el estado es true con &&</p>}

        {/*Renderizado condicional con un if en el render*/}
        
        {(() => {
          if(mostrar){
            return <p>Este texto se muestra si el estado es true con un if dentro del render</p>
          }
          return <p>Este texto se muestra si el estado es false con un if dentro del render</p>
        })()}

    </div>
  )
}

export default Renderizado