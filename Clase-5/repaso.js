// ASYNCRONIA: 
// En javascript, el codigo se puede ejecutar de dos maneras:
// 1- Sincronico (sync): linea por linea, esperando que cada cosa termine
// 2- Asincronico (async): Node encarga una tarea, sigue ejecutando, y cuando termina, ejecuta la siguiente


// CALLBACK

// Callback = Una funcion que se pasa como argumento a otra funcion


const numeros = [1, 2, 3]

numeros.filter( (num) => num === 2)


// callbacks asincronicos
// cuando el callback se usa para algo que tarda, ahi entra la asicronia en juego


// console.log("1");


// setTimeout, es una funcion que recibe dos argumentos
// un callback, y el tiempo

// setTimeout(() => {
//     console.log("2");
    
// }, 1000);

// console.log("3");



// function sumar(a, b){

//     // if(!a || !b){
//     //     return "faltan datos"
//     // }

//     return a + b
// }


// PROMESAS: representa un valor/objeto/resultado que todavia no termino

// puede estar en 3 estados

// pending - todavia en curso

// cumplida - termino con exito => va en resolve()
// rejected - termino con error 


// al crear la promesa, si elegimos los dos parametros para el momento en que termina
// resolve -> todo salio bien
// reject -> cuanto algo salio mal


console.log(fetch("https://thesimpsonsapi.com/api/characters"));


// Hay dos maneras de abordar una promesa

// 1- Con encadenamiento de .then() y .catch()

fetch("https://thesimpsonsapi.com/api/characters/1")
.then(respuesta => respuesta.json())
.then( data => console.log(data))



// async - await
// te permite mas claramente, esperar a que un proceso termine antes de avanzar

// async -> nos marca que la funcion va a tratar con asincronidad
// await pausa esa funcion, hasta que la promesa se termine


async function TraerPokemon(id){


    try {
        
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await respuesta.json()

    console.log(data.name);

    } catch (error) {

        console.log(error);
        
    }
    
}


TraerPokemon(151)