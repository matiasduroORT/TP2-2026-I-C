
const http = require("http")

const PORT = 4000

const alumnos = [
    {id: 1, nombre: "Mateo", edad: 20},
    {id: 2, nombre: "Lucia", edad: 21},
    {id: 3, nombre: "Sofia", edad: 21}
]

http.createServer((req, res) => {

    try {
        
    res.writeHead(201, { "Content-Type": "application/json"})


    // los objetos y arrays NO pueden viajar directamente por http
    res.write(JSON.stringify(alumnos))

    res.end()
    } catch (error) {

        // si algo falla, respondemos con 500 (INTERNAL SERVER ERROR)
        res.writeHead(500, { "Content-Type": "text/plain"})
        res.write("Error interno del servidor")
        res.end()
        
    }


}).listen(PORT, () => {

    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log("Abri esta url en el navegador para probarlo");
    console.log("Para detener el servidor, se presiona: ctrl + C");
    
    
})