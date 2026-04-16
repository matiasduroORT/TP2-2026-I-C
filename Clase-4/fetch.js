

function llamarApi(){


    let resultado

    fetch("https://thesimpsonsapi.com/api/characters")
        .then((respuesta) => {
            // console.log(respuesta);
            return respuesta.json()
        }).then((respuesta) => {
            console.log(respuesta);
        })
    // console.log("Resultado: ", resultado);
    
}


function llamarApi2(){
    fetch("https://thesimpsonsapi.com/api/characters")
     .then((res) => res.json())
     .then((data)=> console.log(data.results[0]))
    
}


async function llamarApi3(){

    const response = await fetch("https://thesimpsonsapi.com/api/characters")

    const data = await response.json()

    console.log("data: ", data);
    
}

llamarApi3()