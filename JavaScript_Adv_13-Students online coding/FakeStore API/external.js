
let url = "https://fakestoreapi.com/products";
let container = document.getElementById('myDiv');

async function fetchData() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log("response", response);
        console.log("object", data);

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
            console.log(data[i].description);
            console.log(data[i].image);
            let card = document.createElement("div");
            let title = document.createElement("h3");
            let description = document.createElement("p");
            let image = document.createElement("img");

            title.innerText = data[i].title;
            description.innerText = data[i].description;
            image.src = data[i].image;

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(image);

            container.appendChild(card);

        }

        return data;
    } catch (error) {
        console.log(error)
    }
};

fetchData();
