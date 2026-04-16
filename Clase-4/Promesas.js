// Promesas

// Las promesas representan un valor que todavia no existe
// va a existir en el futuro


function obtenerUsuarioPromise(id) {


    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (id === 3) {

                return reject({ id, nombre: "Usuario 3 no encontrado" })
            }

            return resolve({ id, nombre: `Usuario ${id} encontrado` })
        }, 3000);
    })
    // setTimeout(() => {
    //     if (id === 3) {
    //         return callback({ id, nombre: "Usuario 3 no encontrado" }, null)
    //     }
    //     return callback(null, { id, nombre: `Usuario ${id} encontrado` })
    // }, 3000);
}


// const usuario = obtenerUsuarioPromise(7)

//     console.log(usuario);

// setTimeout(() => {

//     console.log(usuario);
// }, 3001);



// 3 metodos de promesas, o para manejar las promesas
// THEN -> Se ejecuta cuando la promesa tiene exito, y es el segundo paso
// CATCH -> Atrapa cualquier error, de toda la cadena
// FINALLY -> totalmente opcional: se ejecuta siempre al final, haya fallado o no


// obtenerUsuarioPromise(3)
//     .then((resultado) => {
//         console.log("Se resolvio");
//         console.log("resultado: ", resultado);

//     })
//     .catch((error) => {
//         console.log("error: ", error);

//     })
//     .finally(() => {
//         console.log("Termino");

//     })


function verificarCliente(clienteId) {

    console.log("Verificar cliente...");

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (clienteId === 99) {
                return reject("Cliente no encontrado")
            }

            resolve({ id: clienteId, nombre: "Mateo", tipo: "VIP" })

        }, 1500);

    })

}

function obtenerHistorial(clienteId) {

    console.log("Obtener Historial...");

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (clienteId === 99) {
                return reject("Sin historial")
            }

            resolve({ clienteId, pedidosPrevios: 15, totalGastado: 18000 })

        }, 1500);
    })

}

function calcularDescuento(tipoCliente, historial) {

    console.log("Calcular Descuento...");

    return new Promise((resolve) => {

        setTimeout(() => {

            const descuento = tipoCliente === "VIP" && historial.pedidosPrevios > 10
                ? 0.20
                : 0.05
            resolve(descuento)

        }, 1500);
    })
}

function registrarPedido(clienteId, descuento) {


    console.log("Registrar Pedido...");
    return new Promise((resolve) => {

        setTimeout(() => {

            const total = 1000 * (1 - descuento)
            resolve({ pedidoId: 101, clienteId, total })

        }, 800);
    })
}


let cliente

// verificarCliente(7)
//     .then((clienteObtenido) => {    

//         cliente = clienteObtenido
//         return obtenerHistorial(cliente.id)
//     })
//     .then((historial) => {
//         return calcularDescuento(cliente.tipo, historial)
//     })
//     .then((descuento) => {
//         return registrarPedido(cliente.id, descuento)
//     })
//     .then((resultado) => {
//         console.log("resultado: ", resultado );

//     })
//     .catch((err) => {
//         console.log("error: ", err);

//     })




const getPedidos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve({ id: 1, mesa: 3, total: 200 }, { id: 2, mesa: 8, total: 400 })
        }, 2000)
    })
}


const getStock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve([
                { ingrediente: "Harina", total: 5 },
                { ingrediente: "Tomate", total: 3 },
                { ingrediente: "Muzarella", total: 8 },
            ])
        }, 2000);
    })
}


const getReview = () => {
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve([
                { puntaje: 5 },
                { puntaje: 4 }
            ])

        }, 2000);
    })
}


let pedidos
let stock
let review


getPedidos().then((resultado) => {
    // console.log("Pedidos: ", resultado);

})

getStock().then((resultado) => {
    // console.log("Stock: ", resultado);

})

getReview().then((resultado) => {
    // console.log("Review: ", resultado);

})


// Promise. ALL

Promise.all([getPedidos(), getStock(), getReview()])
    .then(([pedidos, stock, review]) => {
        // console.log("Pedidos ALL: ", pedidos);
        // console.log("Stock ALL: ", stock);
        // console.log("Review ALL: ", review);
})




function obtenerAlumno(nombre){

    return new Promise((resolve, reject) => {
         
        setTimeout(() => {

            if(!nombre){
                // Rechazamos la promesa
                return reject("No hay alumno")
            }
            // Resolvemos la promesa: tenemos un resultado
    
            // resolve("Alumno: ", nombre)
            resolve(`Alumno: ${nombre}`)

        }, 1000);
    })
}


obtenerAlumno("Manuel")
.then((respuesta ) => {
    // console.log("respuesta: ", respuesta);
    
    
}).catch((err ) => {

    // console.log("err: ", err);
    
})


// ASYNC / AWAIT
// puedo ya declarar que una funcion va a ser asincrona
// puedo ya pedir, que espere a que algo se termine de ejecutar, para despues continuar


// funcion declarada:
// async function miFuncion(){

// }


// arrow Function:
// const miFuncion = async () => {

// }



const probarAsincronia = async (id) => {

    // obtenerUsuarioPromise(id).then(result => console.log(result))

    try {
        

    console.log("Comenzando...");
    

    const respuesta = await obtenerUsuarioPromise(id)
    
    console.log("terminando...");
    

    console.log(respuesta);
    } catch (error) {

        console.log("error: ", error);
        
        
    }
    
}


probarAsincronia(3)


const obtenerCliente = async (id) => {


    try {


    const cliente = await verificarCliente(id) 

    const historial = await obtenerHistorial(cliente.id)

    const descuento = await calcularDescuento(cliente.tipo, historial)

            
    } catch (error) {
        console.log("error: ", error);
        
    }
}






// verificarCliente(7)
//     .then((clienteObtenido) => {    

//         cliente = clienteObtenido
//         return obtenerHistorial(cliente.id)
//     })
//     .then((historial) => {
//         return calcularDescuento(cliente.tipo, historial)
//     })
//     .then((descuento) => {
//         return registrarPedido(cliente.id, descuento)
//     })
//     .then((resultado) => {
//         console.log("resultado: ", resultado );

//     })
//     .catch((err) => {
//         console.log("error: ", err);

//     })

