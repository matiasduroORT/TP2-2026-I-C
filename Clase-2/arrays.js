

// Metodos de Arrays

let frutas = ["uva", "manzana", "banana"]


// Agrega un elemento al final del array
// metodo: Push
// console.log(frutas);

frutas.push("Tomate")

// console.log(frutas);


// Elimina el ultimo elemento:
// metodo: Pop

frutas.pop()

// console.log(frutas);


// Elimina el primer elemento
// Metodo: Shift

frutas.shift()

// console.log(frutas);

// Agrega un elemento al comienzo del array
// Metodo: Unshift

frutas.unshift("Kiwi")


// console.log(frutas.length);

// Metodo para recorrer un array: 
// For Each
frutas.forEach(function(fruta){

    // console.log("fruta forEach: ", fruta);

})


// Metodo Map
// Map vs ForEach
// Map ademas de recorrer un array, devuelve un nuevo array

let resultado = frutas.map(function(fruta){

    // console.log("fruta Map: ", fruta);

    return fruta + " 5"
})

// console.log("Resultado: ", resultado);

let numeros = [2, 7, 9, 20, 4, 19]

// Metodo Filter
// genera un nuevo aray, a partir de el filtrado del array original

let filtrado = numeros.filter(function(number){

    return number > 8

})

// console.log(filtrado);


// Metodo Find
// devuelve el primer elemento, que cumple con la condicion

let encontrado = numeros.find(function(num){

    return num > 8
})


// console.log(encontrado);


// Metodo some:
// Si alguno cunmple con la condicion, retorna true

let hayMayores = numeros.some(function(num){

    return num > 18
})

// console.log(hayMayores);


// Metodo every:
// Si alguno cunmple con la condicion, retorna true

let todosMayores = numeros.every(function(num){

    return num > 3
})

// console.log(todosMayores);


// Metodo Split

let nombre = "Educacion"

let split = nombre.split("")


// Metodo Reverse

let dadoVuelta =split.reverse()

// Metodo Join

let unido = dadoVuelta.join("")

// console.log(unido);


let palabra = "HolA"

console.log(palabra.toUpperCase());

console.log(palabra.toLowerCase());



