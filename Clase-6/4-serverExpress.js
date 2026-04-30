// SERVIDOR EXPRESS -> FORMA PROFESIONAL DE HACER UNA API

// Express es un framework construido SOBRE http
const alumnos = [
    { id: 1, nombre: "Mateo", edad: 20 },
    { id: 2, nombre: "Lucia", edad: 21 },
    { id: 3, nombre: "Sofia", edad: 21 }
]

const express = require("express")

const PORT = 4000


// express() crea la aplicacion, que es equivalente a http.createServer()

const app = express()


// MIDDLEWARES
// es una funcion que se ejecuta antes de la peticion
// sirve para procesar, trasnformar o validar datos

// app.use registra un middleware para TODAS las rutas

// express.json() -> este middelware se encarga de parsear el body de las peticiones http
// cuando nos envian un JSON, sin este middleware, el body vendria en undefined

app.use( express.json() )


//RUTAS
// en expres se definen con app.METODO(ruta, callback o handler)
// el handler o callback siempre recibe (req, res)

app.get("/", (req, res) => {

    res.send("<h1>API con Express</h1><p>Rutas disponibles: GET /api/alumnos</p>")
})

app.get("/api/alumnos", (req, res) => {

    // res.json() -> convierte el dato a JSON, y tambien setea el content type automaticamente

    res.json(alumnos)
})

app.get("/api/alumnos/:id", (req, res) => {

    // req.params es un objeto con todos los parametros de la ruta
    // los params siempre vienen como string
    // console.log("id: ", req.params.id);

    const id = Number(req.params.id)


    const alumno = alumnos.find((alumno) => alumno.id === id)

    if (alumno) {
        res.json(alumno)
    } else {
        res.status(404).json({ error: "alumno no encontrado" })

    }

    // let alumnoEncontrado 

    // alumnos.forEach(alumno => {
    //     if(id === alumno.id){
    //         alumnoEncontrado= alumno
    //     }
    // })

    // if(!alumnoEncontrado){
    //     res.status(404).json({error: "alumno no encontrado"})
    // }


    res.json(alumnoEncontrado)
})

// RUTAS GET => VOY A BUSCAR INFORMACION A LA API
// RUTAS POST => LLEVO INFORMACION A LA API

// POST se usa para crear

// POST /API/ALUMNOS => CREE UN NUEVO ALUMNO
app.post("/api/alumnos", (req, res) => {


    // req.body contiene los datos enviados por el cliente, en formato JSON
    const { nombre, edad} = req.body

    if(!nombre || !edad){
        return res.status(400).json({
            error: "Faltan datos. el body debe tener nombre y edad"
        })
    }


    const nuevoAlumno = {
        id: alumnos.length + 1, // el id simple, se basa en la cantidad actual
        nombre,
        edad
    }

    alumnos.push(nuevoAlumno)

    
    // 201 created -> es el codigo de exito cuando se crea un registro en la api
    res.status(201).json(nuevoAlumno)
})























app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`)


})