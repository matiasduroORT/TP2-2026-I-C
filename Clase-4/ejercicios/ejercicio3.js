// fetch a la api pokemon

// se traigan el nombre de un pokemon segun el id

// https://pokeapi.co/api/v2/pokemon/${id}

// retorne el nombre solo del pokemon


async function llamarPokemon(id){


    try {
        
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()

    console.log(data.name);

    } catch (error) {
        console.log("error: ", error);
        
    }
}


llamarPokemon(6)

