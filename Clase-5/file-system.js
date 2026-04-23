

// MODULO llamado FILE SYSTEM (fs) de NODE.js

// el modulo fs, nos permite interactuar con archivos del sistema operativo
// leer, escribir, renombrar, eliminar archivos y carpetas, etc

// Que es el require?
// Es la forma de importar los modulos de NODE js
// hay 3 tipos de modulos
// 1- Modulo Nativo: Ya viene incluido en node.js
// 2- De terceros: modulos que instalamos desde otro lado (npm install )
// 3- propios: archivos.js que nosotros mismos creamos, y requerimos


const fs = require('fs') // -> da acceso al sistema de archivos
const path = require("path") // -> construye las rutas de forma segura al archivo



// __dirname: variable global de NODE, con la ruta absoluta de este archivo

console.log("dirname??: ", __dirname);


const ruta = path.join(__dirname, "diario.txt")
// C:\Users\Matias-edu\Documents\ORT\TP2\Clase-5\diario.txt
console.log("Ruta: ", ruta);



// fs.WriteFileSync // escribe el archivo, y si no existe, lo crea
// fs.existsSync // verifica que el archivo exista



if(fs.existsSync(ruta)){
    // console.log("Existe");
    
}else{

    // console.log("No existe");
    fs.writeFileSync(ruta, "Primer paso")
    
}


const contenido = fs.readFileSync(ruta, "utf-8")
// el segundo argumento "utf8", indica la codificacion del texto
// sin el utf8 nos devuelve el buffer (bytes crudos), en lugar del texto
// console.log(contenido);



// Operaciones Asincronicas ( con Callbacks)

fs.readFile(ruta, (err, data) => {

    if(err) throw err;

    console.log("Lectura Asincronica: ", data.toString());
    
})


fs.appendFileSync(ruta, "\n" + "1- Pollo")

fs.appendFile(ruta, "\n" + "1- Verdura", (err) => {

    if(err)  throw err

    // if(err){
    //     throw err
    // }
})


const rutaRenombre = path.join(__dirname, "data")

if(fs.existsSync(rutaRenombre)){
    console.log("existe");
    
}else{
    console.log("no existe");
    fs.mkdirSync(rutaRenombre)
}

const archivoRenombre = path.join(rutaRenombre, 'mensajes.txt')


fs.renameSync(ruta, archivoRenombre)






