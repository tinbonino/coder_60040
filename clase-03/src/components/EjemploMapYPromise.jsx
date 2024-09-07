import { useState, useEffect } from "react";

import {productos} from "../data/productos";

import Producto from "./Producto";

import "../styles.css";


function EjemploMapYPromise() {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
      const traerProductos = () => {
        return new Promise(resolve =>{
            setTimeout(()=>{
                resolve(productos)
            },3000)
        })
      }

      traerProductos().then(resultados=>{
        setData(resultados);
        setLoading(false);
      })
    },[])

    if(loading){
        return <h2>Cargando...</h2>
    }

    console.log(data);

  return (
    <div className="container">
        {data.map(({nombre,precio,descripcion,id})=>(  // es lo mismo data.map(prod=>(...prod.nombre))
        // Desestructuramos el objeto que recibe en cada iteración

            <Producto 
                nombre={nombre} 
                precio={precio} 
                descripcion={descripcion} 
                key={id} 
            />

            // <div className="card" key={prod.id} >
            //     <h2>{prod.nombre}</h2>
            //     <p>{prod.descripcion}</p>
            //     <h2>{prod.precio}</h2>

            // </div>
        ))}

    </div>
  )
}

export default EjemploMapYPromise