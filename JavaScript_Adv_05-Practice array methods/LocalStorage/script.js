const object = {
  name: "Pera",
  lastName: "Peric",
  age: 12,
  favouritePhrase: "ucite deco JavaScript",
};

console.log("stavljamo podatke u localStorage", object);
localStorage.setItem("podaci", JSON.stringify(object));
const dataFromLocalStorage = localStorage.getItem("podaci");

const objectFromStorage = JSON.parse(dataFromLocalStorage);
console.log(objectFromStorage);
