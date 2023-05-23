let url = "https://api.chucknorris.io/jokes/";
let lista = document.getElementById("lista");
let dugme = document.getElementById("dugme");
let jokeContainer = document.getElementById("jokeContainer");

dugme.addEventListener('click', fetchData);
async function fetchData() {
    try {
        let response = await fetch(`${url}categories`);
        let data = await response.json();
        for (let i = 0; i < data.length; i++) {
            let jokes = document.createElement("li");
            jokes.innerText = data[i];
            jokes.addEventListener("click", function (e) {
                console.log(e.target.innerText);
                fetchJokesByCategory(url, e.target.innerText);
            })
            lista.appendChild(jokes);
        }
    }
    catch (error) {
        console.log(error);
    }
}
async function fetchJokesByCategory(url, category) {
    try {
        let response = await fetch(`${url}random?category=${category}`);
        let data = await response.json();
        // console.log(unos.value);
        console.log("response", response);
        console.log("object", data);
        jokeContainer.innerText = data.value;
    } catch (error) {
        console.log(error);
    };
};