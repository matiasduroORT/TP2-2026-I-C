// ctrl + D, habiendo seleccionado una palabra, se le selecciona la misma multiples veces, dependiendo
//           la cantidad de veces que apreten ctrl + D

let nombre = "Matias" // Tipo: String
let edad = 30 // Tipo: Number
let decimales = 3.14 // Tipo: Number
let activo = true // Tipo: Boolean
let vacio
let nulo = null

// let materias = ["PNT2", "TP2"]

// console.log("nombre: ",typeof nombre)
// console.log("edad: ",typeof edad)
// console.log("decimales: ",typeof decimales)
// console.log("activo: ",typeof activo)
// console.log("vacio: ",typeof vacio)
// console.log("nulo: ",typeof nulo)
// console.log("materias: ",typeof materias)
  
// console.log(materias[1]);

let materias = {
    // llave : valor
    // key : value
    PNT2: "Programacion de nuevas tecnologias 2",
    TP2: "Taller de Programacion 2",
    TP1: '1'
}

// console.log(materias["TP2"]);
// console.log(materias.PNT2);



let usuario = {
    // llave : valor
    // key : value
    nombre: nombre,
    apellido: "Perez",
    estado: activo,
    materias: materias
}

console.log(usuario.materias);
