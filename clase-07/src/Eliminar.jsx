import { doc,getFirestore, deleteDoc } from "firebase/firestore";



function Eliminar() {

    const db= getFirestore();

    const docRef= doc(db,"items","cApmNNHteyUHdV4fGO04");

    deleteDoc(docRef);

    console.log("Documento eliminado con éxito")

  return (
    <div>Eliminar</div>
  )
}

export default Eliminar