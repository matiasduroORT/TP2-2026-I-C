// Rutas a implementar:
// /api/productos -> devuelva todos los productos
// /api/productos/:id -> devuelva un producto por su id
// /api/productos -> que agrege un producto
// si consulto una url que no existe, que devuelva un 404

const express = require("express")
const fs = require("fs")
const path = require("path") // -> construye las rutas de forma segura al archivo

const app = express()
const PORT = 4000

app.use(express.json())

const rutaProducto = path.join(__dirname,"productos.json")

const productos = JSON.parse(fs.readFileSync(rutaProducto, "utf-8"))

app.get("/api/productos", (req, res) => {
    res.json(productos)
})


app.get("/api/productos/:id", (req, res) => {

     const id = Number(req.params.id)

     const producto = productos.find(p => p.id === id)

     if(!producto){

        return res.status(404).json({error: "producto no encontrado"})
     }

    res.json(producto)
})


app.post("/api/productos", (req, res) => {


    // req.body contiene los datos enviados por el cliente, en formato JSON
    const { nombre, precio, stock} = req.body

    if(!nombre || !precio){
        return res.status(400).json({
            error: "Faltan datos. el body debe tener nombre y precio"
        })
    }



    const nuevoProducto = {
        id: productos.length + 1, // el id simple, se basa en la cantidad actual
        nombre,
        precio,
        stock: stock ? stock : 0
    }

    productos.push(nuevoProducto)
    fs.writeFileSync(rutaProducto, JSON.stringify(productos))
    
    // 201 created -> es el codigo de exito cuando se crea un registro en la api
    res.status(201).json(nuevoProducto)
})



app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" })
})



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
