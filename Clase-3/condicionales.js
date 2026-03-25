let numero

// console.log("Es 5?: ", numero === "5");

if(numero === 7){
    // console.log("numero: ", numero);
    
}

if(!numero){
    // console.log("No hay un numero");
    
}

// Operador Ternario ( version compacta del if / else)

let edad = 0

if(edad < 18){
    console.log(" Denegado ");
    
}else if(edad < 21){
    console.log(" Aceptado con tutor ");
    
}else{
    console.log("Licencia Otorgada");
    
}

let licencia = (edad >= 18) ? "Permitido" : "Denegado"

let licencia2 = (edad < 18) ? "Denegada" : (edad < 21) ? "Permitido con tutor" : "Licencia Otorgada"


// console.log("licencia: ", licencia);



// && (AND) ejecutar la derecha solo si la izquierda es positiva

let nombre = ""

nombre !== "Matias" && console.log("Puede entrar")

// OPERADOR (OR) o || devuelve el primer valor verdadero/positivo/truthy


let elNombre = nombre || "Sin el nombre"

console.log(elNombre);


if(nombre || edad || numero){

    console.log("tenemos al menos un dato");
    
}else{
    console.log("no tenemos ni un dato");
    
}

let database = {}

// let usuario = {
//     nombre: database.nombre || "nombre default"
// }

// console.log(usuario);


// ?? Nullish (si la condicion es null/undefined, ejecuta lo siguiente)


let userInput = ""

let conTernario = userInput ? userInput : "input vacio"
let conNullish = userInput ?? "input vacio"


// optional Chaining (?.), sirve para leer propiedades profundas, sin que rompa

const usuario = {
    nombre: "Mateo"
}

console.log(usuario.direccion?.calle);

setTimeout(() => {

    console.log("Consultando base de datos...");
    
    usuario.direccion ={
        calle: "La Plata",
        altura: 29
    }
    
}, 2000);

setTimeout(() => {
    console.log(usuario.direccion.calle);

}, 3000);