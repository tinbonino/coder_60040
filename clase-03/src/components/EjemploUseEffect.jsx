import { useEffect, useState } from "react";


function EjemploUseEffect() {

    const [laps,setLaps] = useState(0);
    const [timeInSeconds,setTimeInSeconds]= useState(0);

    useEffect(() => {
        setTimeInSeconds(0);

        const intervalId=setInterval(() => {
          setTimeInSeconds(time=>time+1)
        },1000);  //se repite cada 1 segundo
        return () => {
          clearInterval(intervalId);
          console.log("Se desmonta el componente")
        }
      
    },[laps])

    useEffect(() => {
      console.log("Se actualizo time")
    },[timeInSeconds])

    

  return (
    <>
        <p>Vueltas: {laps}</p>
        <p>Tiempo en segundos: {timeInSeconds}</p>
        <button onClick={()=>setLaps(laps=>laps+1)}>Finalizar vuelta</button>
    </>
  )
}

export default EjemploUseEffect