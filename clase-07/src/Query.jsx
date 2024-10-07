import { collection,getDocs,getFirestore,query,where } from "firebase/firestore";

import { useEffect } from "react";

function Query() {

// conecto la base de datos

const db=getFirestore();

// Creo la referencia a la collection
useEffect(() => {
  
    const refItems = collection(db,"items"); // referencia de collection
    
    // genero la query (consulta)
    
    const refItemsFiltrada=query(refItems,where("price",">",1000)); // referencia de collection filtrada
    
    getDocs(refItemsFiltrada).then(snapshot=>{
        if(snapshot.size===0){
            console.log("No hay resultados para la búsqueda");
        } else {
            snapshot.docs.map(prod=>console.log(prod.data()))
        }
    })
},[])
    
  return (
    <div>Haciendo una query con filtro</div>
  )
}

export default Query