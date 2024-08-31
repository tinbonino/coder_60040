// Desestructurando Arrays!

let nombres = ["Erika", "Pablo", "Jair", "Ariel"];

// let nombre1=nombres[0];
// let nombre2=nombres[1];
// let nombre3=nombres[2];
// let nombre4=nombres[3];
let [nombre1,nombre2,nombre3,nombre4] = nombres;
//     0        1      2        3

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
console.log(nombre4);

//El array se desestructura por posición

let [primero,,,ultimo] = nombres;


console.log("El primer nombre es "+primero);
console.log("El último nombre es "+ultimo);

// Desestructurando con rest operator

let [presente,...ausentes] = nombres;

console.log(presente);
console.log(ausentes);

// Desestructurando funciones

function estudiantes() {
    return ["Pablo", "Abdiel", "Ariel"]
}

let [estudiante1,estudiante2,estudiante3]= estudiantes();

console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);

// Desestructurando objetos!

let estudianteReact = {
    nombre: "Mateo",
    apellido: "Polci",
    cursos: ["JavaScript","React"]
}

// let estudianteNombre= estudianteReact.nombre;
// let estudianteApellido= estudianteReact.apellido;
// let estudianteCursos= estudianteReact.cursos;

// console.log(estudianteNombre);
// console.log(estudianteApellido);
// console.log(estudianteCursos);


// let {nombre,cursos,apellido} = estudianteReact;

// // console.log(nombre);
// console.log(apellido);
// console.log(cursos);

let {nombre, ...loDemas}=estudianteReact;

console.log(nombre);
console.log(loDemas)

// Desestructurar cambiando el nombre de la variable

let {nombre:nombreLoco,apellido:apellidoLoco} = estudianteReact;

console.log(nombreLoco);
console.log(apellidoLoco);