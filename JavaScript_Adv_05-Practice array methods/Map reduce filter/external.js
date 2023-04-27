//Map, filter, reduce

// const brojevi = [2, 4, 6, 8];
// const rezultat = brojevi.map((broj) => broj + 5);
// console.log(rezultat); // Output: [4, 8, 12, 16]

//
// const brojevi = [1, 2, 3, 4, 5];
// const kvadrati = brojevi.map(function (broj) {
//   return broj * broj;
// });
// console.log(kvadrati); // Output: [1, 4, 9, 16, 25]

//
// const brojevi = [1, 2, 3, 4];
// const rezultat = brojevi.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(rezultat); // Output: 10

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(1, 1));
//
// const brojevi = [1, 2, 3, 4];
// const rezultat = brojevi.filter((broj) => broj % 2 === 0);
// console.log(rezultat); // Output: [2, 4]

//zadaci

// //Napiši funkciju koja će transformirati svaku riječ u nizu tako da svaka riječ počinje velikim slovom, a ostatak slova je malo.

// const rijeci = ["ovo", "je", "primjer", "za", "map", "metodu"];

// const transformiraneRijeci = rijeci.map((rijec) => {
//   const prvoSlovo = rijec.charAt(0).toUpperCase();
//   const ostatakRijeci = rijec.slice(1).toLowerCase();
//   return prvoSlovo + ostatakRijeci;
// });

// console.log(transformiraneRijeci);
// // Output: ['Ovo', 'Je', 'Primjer', 'Za', 'Map', 'Metodu']

// //Napiši funkciju koja će izračunati zbroj svih brojeva u nizu.

// const brojevi = [1, 2, 3, 4, 5];

// const zbroj = brojevi.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(zbroj);
// // Output: 15

// //Napiši funkciju koja će filtrirati niz objekata prema određenom kriteriju.
// //U ovom primjeru, filtrirat ćemo objekte prema polju "godine" tako da dobijemo
// //samo one objekte čije su godine manje od 30.

// const osobe = [
//   { ime: "Ana", godine: 25 },
//   { ime: "Ivan", godine: 32 },
//   { ime: "Mateo", godine: 28 },
//   { ime: "Lucija", godine: 19 },
// ];

// const mladeOsobe = osobe.filter((osoba) => osoba.godine < 30);

// console.log(mladeOsobe);
// // Output: [{ ime: 'Ana', godine: 25 }, { ime: 'Mateo', godine: 28 }, { ime: 'Lucija', godine: 19 }]
