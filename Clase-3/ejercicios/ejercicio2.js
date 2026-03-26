// En una funcion, separa y devolve un objeto, con los hombres y mujeres separados


const separarUsuarios = (usuarios) => {

    let mujeres = []
    let hombres = []
    // inicializar las variables como un array




    // utilizar for of
    

    return {
        mujeres: mujeres,
        hombres: hombres
    }
}


const usuarios = [
    { nombre: "Ana", sexo: "F" },
    { nombre: "Pedro", sexo: "M" },
    { nombre: "Lautaro", sexo: "M" },
    { nombre: "Sofia", sexo: "F" },
    { nombre: "Mar", sexo: "F" },
]

const resultado = separarUsuarios(usuarios)

console.log(resultado);
