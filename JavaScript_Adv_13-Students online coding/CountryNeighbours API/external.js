



// async function imeDrzave(baseURL, skracenicaDrzave) {
//     try {
//         let response = await fetch(`${baseURL}${skracenicaDrzave}`);
//         let data = await response.json();
//         // console.log(unos.value);
//         //console.log("response", response);
//         // console.log("object", data);
//         let imeZemlje = data.name;
//         return imeZemlje;
//     } catch (error) {
//         console.log(error);
//     };
// };
// dugme.addEventListener('click', fetchData)
// async function fetchData() {
//     if (window.navigator.onLine === false) {
//         alert('Nemate internet konekciju!')
//     }
//     try {
//         let response = await fetch(`${url}${unos.value}`);
//         let data = await response.json();
//         if (response.status === 404) {
//             alert("unesite postojecu drzavu");
//         }
//         else if (response.status === 200) {
//             console.log(window.navigator.onLine);
//             for (let i = 0; i < data.borders.length; i++) {
//                 let borders = document.createElement("li");
//                 borders.innerText = await imeDrzave(url, data.borders[i]);
//                 lista.appendChild(borders);
//                 // console.log(data.borders[i]);
//                 // console.log(imeDrzave(url, data.borders[i]))
//                 imeDrzave(url, data.borders[i])
//             }
//         }
//         else { alert("Doslo je do greske, pokusajte ponovo kasnije.") }
//         // console.log(unos.value);
//         console.log("response", response);
//         // console.log("object", data);
//         return data;
//     } catch (error) {
//         console.log(error);
//     };
// };
let unos = document.getElementById('unos');
let lista = document.getElementById('lista');
let dugme = document.getElementById('dugme');
let url = "https://restcountries.com/v2/alpha/";
async function fetchData(baseURL, skracenicaDrzave) {
    try {
        let response = await fetch(`${baseURL}${skracenicaDrzave}`);
        let data = await response.json();
        // console.log(unos.value);
        //console.log("response", response);
        // console.log("object", data);
        let imeZemlje = data.name;
        return imeZemlje;
    } catch (error) {
        console.log(error);
    };
};
dugme.addEventListener('click', fetchData)
fetchData()
if (window.navigator.onLine === false) {
    alert('Nemate internet konekciju!')
}
else if (await fetchData(url, unos.value)) {
    if (response.status === 404) {
        alert("unesite postojecu drzavu");
    }
    else if (response.status === 200) {
        console.log(window.navigator.onLine);
        for (let i = 0; i < data.borders.length; i++) {
            let borders = document.createElement("li");
            borders.innerText = fetchData(url, data.borders[i]);
            lista.appendChild(borders);
            // console.log(data.borders[i]);
            // console.log(imeDrzave(url, data.borders[i]))
            imeDrzave(url, data.borders[i])
        }
    }
    else { alert("Doslo je do greske, pokusajte ponovo kasnije.") }
    // console.log(unos.value);
    console.log("response", response);
    // console.log("object", data);

}


