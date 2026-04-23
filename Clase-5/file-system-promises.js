// FILE SYSTEM CON PROMESAS y ASYNC AWAIT

// node nos ofrece tres formas de usar fs:
// 1- Callbacks -> fs.readFile(ruta, callback)
// 2- Sync -> fs.readFileSync(ruta)
// 3- Promesas -> fs.promises.readFile(ruta)

const fs = require("fs")
const path = require("path")

const fsPromise = fs.promises

// fsPromise.readFile

// fs = objeto
// fs = {
//     readFile: callback(),
//     readFileSync: () => ,
//     promises: {
//         readfile: async () => {},
//         fs.writeFile: async () => {}
//     }
// }


const ruta = path.join(__dirname, 'data', 'bloq.txt')



// bloque sincronico
try {

    if(!fs.existsSync(ruta)){
        fs.writeFileSync(ruta, "Primera Linea", 'utf-8')
    }

    const contenido = fs.readFileSync(ruta, 'utf-8')

    console.log("contenido sync: ", contenido);
    

    fs.appendFileSync(ruta, '\nNueva Linea (sync)', 'utf-8')
    
} catch (error) {
    
}




// bloque asincronico( fs.promises + async/await)

const Promesas = async () => {

    try {

        // await espera que readfile termine antes de pasar a la siguiente linea
        // mientras espera, node avanza con otras  tareas
        const contenido = await fs.promises.readFile(ruta, 'utf-8')
        console.log("Contenido async: ", contenido);

        // sin await, esta linea lanza el appendFile, pero no espera a que termine
        // la lectura del contenido2, puede ejecutarse antes que termine el appendFile
        fs.promises.appendFile(ruta,'\nNueva Linea (async/await)', 'utf-8')

        const contenido2 = await fsPromise.readFile(ruta, 'utf-8')

        
        console.log("Contenido 2: ", contenido2);
        


        
    } catch (error) {
        // catch captura el error, en el rechazo de una promesa
        console.log("error: ", error);
        
    }
}

Promesas()


fs.writeFileSync(ruta, JSON.stringify({nombre: "martin"}), "utf-8")