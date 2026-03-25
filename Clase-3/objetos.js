// Objetos

// el array tiene indices vs el objeto tiene llaves

const nombre = "Matias"


const familia = {
    cantidad: 4,
    padre: {
        nombre,
        edad: 30
    },
    madre:{
        nombre: "Mar",
        edad: 30
    },
}


let rol = "client"

const usuario = {
    nombre: "Lucas",
    edad: 28,
    activo: true,
    hablar: function(){

        return "hola"
    },
    familia,
    aprobados: null,
    presentar(){
        return `Soy ${this.nombre}, tengo ${this.edad}, y curso TP2`
    },
    [rol]: null,
    ["sistema Operativo"]: "Windows"
}


console.log("Usuario: ", usuario["sistema Operativo"]);

