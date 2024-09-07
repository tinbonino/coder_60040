import { useEffect, useState } from "react"

function EjemploSimpleUseEffect() {

    const [count,setCount] = useState(0);
    const [titulo,setTitulo]= useState("");

    //Montaje del componente

    useEffect(() => {
      console.log("Primera vez que se renderiza el componente")
    },[]);

    //Cuando se actualiza count

    useEffect(() => {
      console.log("Se actualizó el valor de  count ")
    },[count])

    //Cuando se actualiza titulo

    useEffect(() => {
      console.log("Se actualizó título")
    },[titulo]);

    // Cuando se renderiza el componente

    useEffect(() => {
      console.log("Se renderizó el componente")
    })
    
    console.log("Se renderizó el componente")
  return (
    <>
        <h2>{titulo}</h2>
        <p>contador: {count}</p>
        <button onClick={()=>setCount(count=>count+1)}>Incrementar contador</button>
        <button onClick={()=>setTitulo("Bienvenidos a la clase 3")}>Implementar título</button>
    </>
  )     
}

export default EjemploSimpleUseEffect