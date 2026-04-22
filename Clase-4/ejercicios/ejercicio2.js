const usuariosDB = {
    1: { nombre: "Ana", edad: 25 },
    2: { nombre: "Pedro", edad: 30 },
    3: { nombre: "Lucia", edad: 28 },
    4: { nombre: "Juan", edad: 22 },
};

const listaDeAlumnos = [1, 2, 7, 4, 5]

//crear 2 funciones, para obtener los usuarios

// una con async await
// otra con new promise


function obtenerUsuario(id, usuariosDB) {

    // new promise
    // reject
    // resolve

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const usuario = usuariosDB[id]

            if (usuario) {
                resolve(usuario)
            } else {
                reject(`Usuario con id: ${id}, no existe`)
            }

        }, 500);

    })

}



function mostrarUsuarios(ids, usuariosDB) {

 
    let respuesta = ids.map(id => {

        obtenerUsuario(id, usuariosDB)
            .then(usuario => {
                // console.log("usuario: ", usuario);
                
                return {usuario}
                
            })
            .catch(error => {
                console.log("error: ", error);
                return {error}
            })
        
    });

    console.log(respuesta);
    
    
    
}

// async function mostrarUsuarios(ids, usuariosDB) {
//     let respuesta = []
//     for (const id of ids) {
//         try {
//             const usuario = await obtenerUsuario(id, usuariosDB)
//             respuesta.push(usuario)
//         } catch (error) {
//             console.log("err: ", error);

//         }
//     }

//     return respuesta

// }


mostrarUsuarios(listaDeAlumnos, usuariosDB)

