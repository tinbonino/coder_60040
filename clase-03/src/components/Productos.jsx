import "../styles.css";

function Productos({children}){
    return (
        <div className="container">
            {/* <h3>Aca van a ir los productos</h3> */}
            {children}
        </div>
    )
}

export default Productos;