import { useState } from "react";
import axios from "axios";


function DogApiAxios() {
    const [dogImageUrl,setDogImageUrl]=useState("");

    const fetchDogImage = async ()=>{
        try{
            const response = await axios.get("https://dog.ceo/api/breeds/image/random");
            console.log(response);
            setDogImageUrl(response.data.message);
        }
        catch(error) {
            console.error("Se complicó", error);
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

export default DogApiAxios