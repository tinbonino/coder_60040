import { useState } from "react"

function EjemploEventoMouse() {

    const [isHovered,setIsHovered] = useState(false);

    const handleMouseOver=() => {
      setIsHovered(true);
    }

    const handleMouseOut= () => {
      setIsHovered(false);
    }

  return (
    <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
            width:"100px",
            height:"100px",
            backgroundColor: isHovered? "blueviolet" : "greenyellow"
        }}
     />

    
  )
}

export default EjemploEventoMouse