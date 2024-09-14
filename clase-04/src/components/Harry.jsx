import useFetch from "../customHooks/useFetch"

function Harry() {

   

    const {data,loading,error} = useFetch("https://hp-api.onrender.com/api/characters")

    if(loading) return <p>Loading...</p>;

    if(error) return <p>Error: {error.message}</p>

    const characters = data.slice(0,15);
  return (
    <div>
        <h2>Personajes de Harry Potter</h2>
        <ul>
            {characters.map(char=>(
                <li key={char.id}>
                    <h2>{char.name}</h2>
                    <h3>{char.house}</h3>
                    <img src={char.image} alt={char.name} width="100" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Harry