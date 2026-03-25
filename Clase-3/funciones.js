// 1- funcion declarada
// Se puede llamar antes de su definicion, tambien llamado hoisting

// console.log(saludo())
// console.log(despedir())


function saludo(){

    return "Hola"
}

let nombre = "Mateo"

// funcion expresada
// no tiene hoisting, no podes llamarla antes de declararla

const despedir = function(nombre){
    return "Adios " + nombre
}


// funcion flecha (arrow function)
// tiene una sintaxis, mas corta, se puede hacer en una sola linea, y en ese caso, el return es implicito

const hablar = (nombre) =>  "Como estas? " + nombre




hablar(nombre)

console.log(despedir(nombre));
console.log(hablar(nombre));

let numeros = [ 1, 2, 3, 4, 5]

numeros.map(function(num){
    return num + 5
})

numeros.map((num) => num + 5)


console.log(numeros.map((num) => num + 5));
