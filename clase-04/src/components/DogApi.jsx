import {useState} from "react";

function DogApi() {

    const [dogImageUrl,setDogImageUrl]= useState("");

    const fetchDogApi=() =>{
        fetch("https://dog.ceo/api/breeds/image/random") // retorna una promesa
        .then(response=>{
            console.log(response)
            if(!response.ok){
                throw new Error("No pudimos traer la imagen");
            }
            return response.json();
        })
        .then(data=>{
            console.log(data);
            setDogImageUrl(data.message);
        })
        .catch(error=>console.error("Eror haciendo el fetch",error))
    }

  return (
    <div>
        <h1>Imagen de Perro aleatorio</h1>
        <button onClick={fetchDogApi}>Ver perrito</button>
        {dogImageUrl && <img src={dogImageUrl}/>}
        {/* FALSE     AND     SIEMPRE es  true
                     FALSE */}
    </div>
  )
}

export default DogApi