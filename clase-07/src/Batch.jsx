import { getFirestore, writeBatch,doc } from "firebase/firestore";



function Batch() {

    const db= getFirestore();

    const batch = writeBatch(db);

    const item1=doc(db,"items","5X23RSPySnAvEO6qb4Nn");
    const item2=doc(db,"items","CixosGFDogmDdde9zV0b");
    const item3=doc(db,"items","cApmNNHteyUHdV4fGO04");

    batch.update(item1,{stock:0});
    batch.update(item2,{stock:0});
    batch.update(item3,{stock:0});

    batch.commit();



  return (
    <div>Batch</div>
  )
}

export default Batch