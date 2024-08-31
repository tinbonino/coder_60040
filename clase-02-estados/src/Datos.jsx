
function Datos({nombre,setNombre}) {
    
    function handleClick() {
        if(!nombre) {
            setNombre("Jair");
        } else {
            setNombre("")
        }
    }

  return (
    <>
        <button onClick={handleClick}>Cambiar nombre a Jair</button>
        
    </>
  )
}

export default Datos