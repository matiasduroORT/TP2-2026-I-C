//bucles, for, foreach, etc

// For CLASICO (cuando sabes cuanto va a durar)

let numeros = [5, 6, 29, 10, 7]

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    // console.log("element: ", element);
}

// For Each (recorre un array)

numeros.forEach(element => {
        // console.log("element: ", element);
});

// WHILE: (No sabemos cuanto va a durar)
// Se va a ejecutar siempre que la condicion, se cumpla

let n = 20

while(n < 10){
    // console.log("N es: ", n);
    n = n + 1
}

// Do... while, (se ejecuta al menos, una vez)

do{
//  console.log("N es: ", n);

} while( n < 10)


// FOR... OF (sirve para recorrer arrays o strings)

let frutas = ["manzana", "pera", "durazno"]

let nombre = "durazno"

for (const fruta of frutas) {
    // console.log("fruta: ", fruta);
    
}

for (const element of nombre) {
    // console.log("element: ", element);
    
}


// FOR... IN (sirve para recorrer objetos)

const persona = {
    nombre: "Manuel",
    edad: 29,
    estado: true,
    materias: "TP2"
}


for (const key in persona) {

    console.log(key);

    const element = persona[key];
    
    console.log("element: ", element);
    
}

