import {useRef,useState} from "react";

function EjemploUseRef(){

    const [count,setCount]=useState(0);
    const renderCount=useRef(0);

    renderCount.current++;
    return (
        <>
          <p>contador: {count}</p> 
          <button onClick={()=>setCount(count=>count+1)}>Incrementar</button> 
          <button onClick={()=>setCount(count=>count-1)}>Decrementar</button> 
          <button onClick={()=>setCount(count=>count+5)}>+5</button> 
          <p>Esta es la cantidad de veces que se renderiza el componente: {renderCount.current}</p>
        </>
    )
}

export default EjemploUseRef;
