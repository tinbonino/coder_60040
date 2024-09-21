import { useState } from "react"
function EjemploOnClick() {

    const [info,setInfo] = useState("Click no realizado aun");

    const clickHandler= () => {
      setInfo("Click Realizado");
      console.log(info);
    }

  return (
    <div>
        <button onClick={clickHandler}>Click!</button>
        <h2>{info}</h2>
    </div>
  )
}

export default EjemploOnClick