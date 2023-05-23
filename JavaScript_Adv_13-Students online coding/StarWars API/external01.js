async function fetchData() {
    try {
        let response = await fetch("https://swapi.dev/api/planets/?page=1");
        let data = await response.json();
        console.log("response", response);
        console.log("object", data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function fetchData2() {
    try {
        let response2 = await fetch("https://swapi.dev/api/planets/?page=2");
        let data2 = await response2.json();
        console.log("response", response2);
        console.log("object", data2);
        return data2;
    } catch (error) {
        console.log(error);
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
    let data = await fetchData();
    let planets = data.results;
    let buttonDiv = document.getElementById("buttonDiv");
    let button = document.createElement("button");
    button.innerHTML = "Next 10 planets";
    button.style.backgroundColor = "#212529";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "10px";
    button.style.borderRadius = "5px";
    buttonDiv.appendChild(button);
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < planets.length; i++) {
        let trow = document.createElement("tr");
        let tdata1 = document.createElement("td");
        tdata1.innerText = planets[i].name;
        let tdata2 = document.createElement("td");
        tdata2.innerText = planets[i].population;
        let tdata3 = document.createElement("td");
        tdata3.innerText = planets[i].climate;
        let tdata4 = document.createElement("td");
        tdata4.innerText = planets[i].gravity;
        trow.appendChild(tdata1);
        trow.appendChild(tdata2);
        trow.appendChild(tdata3);
        trow.appendChild(tdata4);
        tbody.appendChild(trow);
    }

    button.addEventListener("click", async () => {
        let data2 = await fetchData2();
        let planets2 = data2.results;
        let tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        for (let i = 0; i < planets2.length; i++) {
            let trow = document.createElement("tr");
            let tdata1 = document.createElement("td");
            tdata1.innerText = planets2[i].name;
            let tdata2 = document.createElement("td");
            tdata2.innerText = planets2[i].population;
            let tdata3 = document.createElement("td");
            tdata3.innerText = planets2[i].climate;
            let tdata4 = document.createElement("td");
            tdata4.innerText = planets2[i].gravity;
            trow.appendChild(tdata1);
            trow.appendChild(tdata2);
            trow.appendChild(tdata3);
            trow.appendChild(tdata4);
            tbody.appendChild(trow);

        }
    });
});