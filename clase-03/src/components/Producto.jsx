function Producto({nombre,precio,descripcion,key}) {
    return (
        <div className="card" key={key}>
            <h2>{nombre}</h2>
            <h3>{descripcion}</h3>
            <p>{precio}</p>
        </div>
    )
}

export default Producto