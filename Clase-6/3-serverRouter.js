
// SERVIDOR HTTP -> CON ROUTING (manejo de rutas)





const http = require("http")

const PORT = 4000

const alumnos = [
    { id: 1, nombre: "Mateo", edad: 20 },
    { id: 2, nombre: "Lucia", edad: 21 },
    { id: 3, nombre: "Sofia", edad: 21 }
]

http.createServer((req, res) => {


    if (req.url === "/") {
        // Ruta Raiz (root) -> localhost:4000
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h1>Bienvenido a la API</h1>")
        res.write("<p>Rutas disponibles:</p>")
        res.write("<ul><li><a href='/api/alumnos'>/api/alumnos</a></li></ul>")


    } else if (req.url === "/api/alumnos") {

        // ruta de la API 
        // localhost:4000/api/alumnos
        res.write(JSON.stringify(alumnos))

    } else {

        // cualquier ruta que no exista -> 404 not found
        // es importante responder claramente un 404, y no el status 200 por defecto
        res.writeHead(404, { "Content-Type":"text/plain"})
        res.write("404 - Ruta no encontrada")
    }

    res.end()

}).listen(PORT, () => {

    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log("Abri esta url en el navegador para probarlo");
    console.log("Para detener el servidor, se presiona: ctrl + C");


})