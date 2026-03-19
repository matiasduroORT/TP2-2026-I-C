



// Devolver un array solo con palabras palindromas

function esPalindromo(palabras) {

    let respuesta = []

    palabras.forEach(function (palabra) {

        let palabraMinuscula = palabra.toLowerCase()

        let palabraInvertida = palabraMinuscula.split("").reverse().join("")
        // console.log(palabraInvertida);

        // let palabraUnida = palabraInvertida.join("")

        // console.log(palabraUnida);
        // console.log("Es Igual: ", palabraInvertida == palabraMinuscula);

        if(palabraInvertida == palabraMinuscula){

            // console.log(palabra);
            
            respuesta.push(palabra)

        }
    })

    return respuesta
}

const palabras = ["Oso", "Sol", "Ana", "Reconocer", "Neuquen", "Saludo"]


// console.log("resultado: ", esPalindromo(palabras))


let solucion2 = palabras.filter(function(palabra){

     let palabraMinuscula = palabra.toLowerCase()

    let palabraInvertida = palabraMinuscula.split("").reverse().join("")

    return palabraMinuscula == palabraInvertida
})

console.log("solucion 2: ", solucion2);
