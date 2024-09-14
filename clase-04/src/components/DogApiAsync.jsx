import { useState } from "react"



function DogApiAsync() {
    const [dogImageUrl,setDogImageUrl]=useState("");

    const fetchDogImage= async() => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        console.log(response);

        if(!response.ok) {
            throw new Error("No pudimos traer la imagen");
        }

        const data=await response.json();
        console.log(data);
        setDogImageUrl(data.message);
      }
      catch (error) {
        console.error("Error en la API:",error)
      }
    }

  return (
    <div>
      <h1>Imagen de perro</h1>
      <button onClick={fetchDogImage}>Ver perro</button>
      {dogImageUrl && <img src={dogImageUrl} alt="Perro aleatorio" />}
    </div>
  )
}

export default DogApiAsync