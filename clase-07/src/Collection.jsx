import { collection, getDocs, getFirestore } from "firebase/firestore";

import { useEffect } from "react";



function Collection() {

    useEffect(() => {
      const db = getFirestore();

      // Creamos la referencia a la collection

      const itemCollection = collection(db,"items");

      // Traemos la información

      getDocs(itemCollection).then(snapshot=>snapshot.docs.map(docu=>console.log(docu.data())))
    })

  return (
    <div>Traemos una collection</div>
  )
}

export default Collection
