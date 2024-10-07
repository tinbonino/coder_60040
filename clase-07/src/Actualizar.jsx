import { doc,getFirestore,updateDoc } from "firebase/firestore";



function Actualizar() {

    //conectamos a la base de datos

    const db=getFirestore();

    //Referenciamos al documento que queremos actualizar

    const item=doc(db,"items","CixosGFDogmDdde9zV0b");
    //             db - collection - id

    //Actualizo

    updateDoc(item,{price:12000});

    console.log("Item actualizado correctamente");


  return (
    <div>Actualizar</div>
  )
}

export default Actualizar