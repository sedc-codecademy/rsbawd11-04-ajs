
let lista = document.getElementById('list');
let myDiv = document.getElementById('myDiv');

async function fetchData() {
    try {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon');
        let data = await response.json();
        console.log("response", response);
        console.log("object", data);

        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i]);
            let pokemonNames = document.createElement('li');
            pokemonNames.innerText = data.results[i].name;
            lista.appendChild(pokemonNames);
            pokemonNames.addEventListener("click", function (e) {
                myDiv.innerText = data.results[i].name;
                fetchPicture(data.results[i].url);
                console.log(e.target);
            })
        };
        return data;
    } catch (error) {
        console.log(error)
    }
};

async function fetchPicture(param) {
    try {
        let response = await fetch(param);
        let data = await response.json();
        console.log("response", response);
        console.log("object", data);
        let pokemonPicture = document.createElement('img');
        if (data.sprites.front_female === null) {
            pokemonPicture.src = data.back_default;
            console.log(data.back_default)
        } else {
            pokemonPicture.src = data.sprites.front_female;
        }
        myDiv.appendChild(pokemonPicture);
        return data;
    } catch (error) {
        console.log(error)
    }
};

fetchData();