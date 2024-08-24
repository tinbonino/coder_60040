// function calcularCuadrado(numero){
//     let cuadrado= numero*numero;
//     console.log("El resultado del cuadrado de "+numero+" es: "+cuadrado);   
// }

// let numero=5;

// calcularCuadrado(numero);


function pedirNombre() {
    let nombre=prompt("Ingrese su nombre");
    return nombre;
}

function saludar(nombre){
    console.log("Bienvenido "+nombre);
}


let nombreSaludo=pedirNombre();

saludar(nombreSaludo);