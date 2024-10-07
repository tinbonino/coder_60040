import { addDoc, collection,getFirestore } from "firebase/firestore";



function Agregar() {

    //Creamos el nuevo objeto referente al documento que queremos crear.

    const item = {
        title: "Pato 🦆",
        description: "Pequeño pato de juguete",
        categoryId: "Juguetes",
        imageId: "pato.jpg",
        price: 9000,
        stock: 500
    }

    // Conectamos a la base de datos

    const db = getFirestore();

    // Referenciamos a la collection

    const itemCollection = collection(db,"items");

    // Agregar el nuevo documento a la collection

    addDoc(itemCollection,item). then(({id})=> {
        console.log(id);
        console.log("Item agregado correctamente a la base de datos")
    })

  return (
    <div>Agregando item</div>
  )
}

export default Agregar