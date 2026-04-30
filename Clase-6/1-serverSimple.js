
const http = require("http")

const PORT = 4000




// http.createServer -> crea el servidor
// recibe una funcion callback, que se ejecuta cada vez que alguien hace una peticion

// este callback recibe 2 parametros
// req -> request -> aca iria lo que el cliente manda al servidor
// res -> response -> aca es todo lo que el servidor devuelve

const servidor = http.createServer((req, res) => {


    // res.write() => escribir el contenido que sera el cuerpo de la respuesta
    res.write("Hola Mundo")

    // res.end() => cierra la peticion, y envia la respuesta al cliente
    res.end()
})



// .listen() -> hace que el servidor empiece a escuchar las peticiones, en el puerto indicado
// el callback se ejecuta UNA SOLA VEZ, cuando el servidor arranca correctamente
servidor.listen(PORT, () => {

    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log("Abri esta url en el navegador para probarlo");
    console.log("Para detener el servidor, se presiona: ctrl + C");
    
    
})