// CALLBACKS
// Un callback no es mas que una funcion, que se pasa como argumento a otra funcion

function sumar(num1, num2) {

    return num1 + num2
}


function restar(num1, num2) {

    return num1 - num2
}


function operacionMatematica(num1, num2, callback) {


    return callback(num1, num2)
}

// console.log("Suma: ", operacionMatematica(5, 10, sumar));
// console.log("Resta: ", operacionMatematica(5, 10, restar));
// console.log("Multiplicar: ", operacionMatematica(5, 10, function(a, b){
//     return a * b
// }))



// Dos escenarios posibles
// peticion sale bien
// peticion sale mal

// Patron Error-First 
// el callback siempre recibe dos parametros (error, resultado)
// si algo salio mal => callback(error, null)
// si todo salio bien => callback(null, resultado)



function obtenerUsuario(id, callback) {

    // simular una peticion a una base de datos

    setTimeout(() => {

        if (id === 3) {

            return callback({ id, nombre: "Usuario 3 no encontrado" }, null)
        }


        return callback(null, { id, nombre: `Usuario ${id} encontrado` })

    }, 3000);


}

const findUser = (error, usuario) => {
    // nuestro callback
    // el caso de el error
    // el caso de que todo salga bien
    if (error) {

        console.log("Sucedio un error: ", error);
        return
    }

    console.log("Usuario Encontrado: ", usuario);

}


// obtenerUsuario(7, findUser)
// obtenerUsuario(4, findUser)
// obtenerUsuario(1, findUser)
// obtenerUsuario(3, findUser)



function verificarCliente(clienteId, callback) {

    console.log("Verificar cliente...");
    

    setTimeout(() => {

        if (clienteId === 99) {
            return callback("Cliente no encontrado", null)
        }

        callback(null, { id: clienteId, nombre: "Mateo", tipo: "VIP" })

    }, 1500);

}

function obtenerHistorial(clienteId, callback) {

        console.log("Obtener Historial...");


    setTimeout(() => {

        if (clienteId === 99) {
            return callback("Sin historial", null)
        }

        callback(null, { clienteId, pedidosPrevios: 15, totalGastado: 18000 })

    }, 1500);

}

function calcularDescuento(tipoCliente, historial, callback) {

        console.log("Calcular Descuento...");


    setTimeout(() => {
        
        const descuento = tipoCliente === "VIP" && historial.pedidosPrevios > 10 
                ? 0.20 
                : 0.05
        callback(null, descuento)

    }, 1500);

}

function registrarPedido(clienteId, descuento, callback) {


    console.log("Registrar Pedido...");
    
    setTimeout(() => {
        
        const total = 1000 * (1 - descuento)
        callback(null, {pedidoId: 101, clienteId, total})

    }, 800);
}




// Callback Hell
// cada funcion abre una llave, que no se cierra hasta el final

function procesarPedido(clienteId) {

    verificarCliente(clienteId, (err, cliente) => {
        if (err) {
            console.log("Error: ", err);
            return
        }

        console.log(cliente);

        obtenerHistorial(cliente.id, (err, historial) => {
            if (err) {
                console.log("Error: ", err);
                return
            }

            calcularDescuento(cliente.tipo, historial, (err, descuento) => {

                if (err) {
                    console.log("Error: ", err);
                    return
                }

                registrarPedido(cliente.id, descuento, (err, pedido) => {
                    if (err) {
                    console.log("Error: ", err);
                    return
                    }

                    console.log("Pedido procesado");
                    console.log("Cliente: ", cliente.nombre);
                    console.log("Historial: ", historial.pedidosPrevios);
                    console.log("Descuento: ", descuento * 100 + "%");
                    console.log("Total: ", pedido.total);
                    
                    

                })
            })

        })


    })


}

procesarPedido(27)