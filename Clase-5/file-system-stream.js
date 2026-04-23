// STREAMS en Node

// un stream es un flujo de datos, que se procesa en datos pequenos ( chunks )
// en lugar de cargar todo el contenido de una sola vez EN LA MEMORIA,  lo hace en partes

// casos de uso:
// 1- Archivos muy grandes (logs, videos, excels, csvs, )
// 2- Respuestas HTTP
// 3- subida y descarga de archivos
// 4- compresion, cifrado y transformacion de datos


// los Streams emiten eventos que escuchamos con .on()

// 'data' -> llego un nuevo chunk de datos
// 'end' -> se termino de leer todo el archivo
// 'error' -> ocurrio algun problema 


const fs = require('fs')
const path = require('path')

const archivoGrande = path.join(__dirname, 'data', 'archivo-grande.txt')
const archivoGrande2 = path.join(__dirname, 'data', 'archivo-grande2.txt')



// WRITE STREAM = escribir archivo grande
// createWriteSteam crea un canal de escritura al archivo
// En lugar de construir todo el contenido en la memoria y volcarlo de una,
// Node va enviando cada chunk al disco a medida que llamos a .write()
if(!fs.existsSync(archivoGrande)){

    const writeStream = fs.createWriteStream(archivoGrande, 'utf-8')

    for (let i = 1; i < 50000000; i++) {
     
            writeStream.write("\nLinea numero " + i)

            // fs.appendFileSync(archivoGrande, "\nLinea numero " + i)
    }

    // .end() decimos que no hay mas datos para escribir
    // cerrar el stream y liberar el recurso en el sistema operativo (OS)

    writeStream.end()
}

// const readFileSync = fs.readFileSync(archivoGrande, 'utf-8')

// console.log("ReadFileSync: ", readFileSync);


// READ STREAM: lee en chunks, parte por parte
// createReadStream


const stream = fs.createReadStream(archivoGrande, "utf-8")


// se dispara cada vez que llega un nuevo chunk dependiendo del tamaño, podria ejecutar muchas veces
stream.on('data', chunk => {

    console.log("chunk: ", chunk);
    
})


stream.on('end', () => {
    console.log("termino de leer");
    
})



stream.on("error", (err) => {
    console.log("sucedio un error: ", err);
    
})