const submit = document.getElementById("submit");
const getPokemonName = document.getElementById("pokemon-name");

let initialUrl = "https://pokeapi.co/api/v2/pokemon/";
let url;
async function getName(event){
    event.preventDefault();
    let pokemonName = getPokemonName.value.trim();
    url = initialUrl + pokemonName;
    getPokemonName.value = "";
    let f = await getDetails(url);
    displayDetails(f)
}


async function getDetails(url) {
    try{
        let data = await fetch(url);
        let jsonFormat = await data.json();
        return jsonFormat;
    }
    catch(error){
        console.error(error)
    }
}

function displayDetails(object){
    console.log(object.name)
    console.log(object.sprites.front_default)
    console.log(object)
    //Variables
    let details = document.createElement("div");
    let pokemonImage = document.createElement("img")
    let pokemonName = document.createElement("p")
    pokemonImage.src = object.sprites.front_default;
    pokemonName.textContent = object.name
    details.append(pokemonImage , pokemonName)
    document.body.append(details)
    
}

// const getData = new Promise((resolve, reject)  =>{

// })

submit.addEventListener("click" , getName)
