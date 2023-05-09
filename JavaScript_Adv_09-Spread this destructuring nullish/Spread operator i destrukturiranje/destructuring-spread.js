let trainer = {
  firstName: "Pera",
  lastName: "Peric",
  age: 33,
  academy: "Web Development",
  courses: ["javascript basic", "javascript advanced", "html", "css"],
};
console.log(trainer);

// we make a copy of trainer
let trainer1 = {
  ...trainer,
  firstName: "Marko",
  lastName: "Markovic",
};
console.log(trainer1);

// create a copy of trainer
let trainer2 = {}; // Stvaramo novi objekt

for (let entrie of Object.entries(trainer)) {
  // Petlja prolazi kroz sve parove ključ-vrednost objekta "trainer"
  // Prva iteracija: "firstName", "Pera"
  // Druga iteracija: "lastName", "Peric"
  // Treća iteracija: "age", 33
  // Četvrta iteracija: "academy", "Web Development"
  // Peta iteracija: "courses", ["javascript basic", "javascript advanced", "html", "css"]
  trainer2[entrie[0]] = entrie[1]; // Kopiramo ključ-vrednost u novi objekt "trainer2"
}
console.log(trainer2);

// create a copy of trainer using destructuring
// Svaka iteracija petlje prvo destrukturira entry u dva elementa, key i value, gdje key
//predstavlja ključ objekta trainer, a value predstavlja vrijednost povezanu s tim ključem.
let trainer3 = {}; // Stvaramo novi objekt

for (let [key, value] of Object.entries(trainer)) {
  // Petlja prolazi kroz sve parove ključ-vrijednost objekta "trainer"
  // Prva iteracija: key="firstName", value="Pera"
  // Druga iteracija: key="lastName", value="Peric"
  // Treća iteracija: key="age", value=33
  // Četvrta iteracija: key="academy", value="Web Development"
  // Peta iteracija: key="courses", value=["javascript basic", "javascript advanced", "html", "css"]

  trainer3[key] = value; // Kopiramo ključ-vrijednost u novi objekt "trainer3"
}
console.log(trainer3);

//Zakljucak: upotreba entrie u Object.entries() se preporučuje kada je potrebno proći kroz sve
//ključeve i vrednosti objekta, dok se [ključ, vrijednost] koristi kada je potrebno izdvojiti
//pojedinačne vrednosti iz niza.

//primer kad svim kljucevima dodajemo vrednost a
let objekt = { a: 1, b: 2, c: 3 };
let kopijaObjekta = {};

for (let [ključić, vrijednost] of Object.entries(objekt)) {
  //kopijaObjekta[ključić] = "a";
  kopijaObjekta[vrijednost] = "a";
}

console.log(kopijaObjekta);

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

//[first, ...rest] je leva strana destrukturiranja, tj. varijable koje želimo stvoriti.
//first će sadržati prvi element niza numbers, dok će rest biti novi niz koji sadrži sve
//preostale elemente niza nakon prvog elementa.
let numbers = [
  1, 2, 3, 4, 5, 67, 8, 98, 9, 02, 1, 1, 2, 3, 4, 2, 3, 4, 5, 3, 34, 53, 2,
  21321, 10,
];

let [first, secon, ...rest] = numbers;
console.log(first, secon, rest);

//suma koristeci niz numbers
function sum(numbersArray) {
  let sum = 0;
  for (let num of numbersArray) {
    sum += num;
  }
  return sum;
}

console.log(sum(numbers));
//suma koristeci niz numbers rekurzivnu funkciju

// Definisemo rekurzivnu funkciju koja sumira sve elemente niza
function sumRecursive(sum, numbersArray) {
  // Ako nema više elemenata u nizu, vraćamo trenutnu sumu
  if (numbersArray.length === 0) {
    return sum;
  }

  // Koristimo destrukturiranje niza da izdvojimo prvi element niza i stvorimo novi niz preostalih elemenata
  let [first, ...rest] = numbersArray;

  // Dodajemo prvi element niza na trenutnu sumu
  sum += first;

  // Rekurzivno pozivamo funkciju sa novom sumom i nizom preostalih elemenata nakon prvog
  return sumRecursive(sum, rest);
}

// Pozivamo funkciju sa početnom vrijednošću sume 0 i nizom brojeva koje želimo sabrati
console.log(sumRecursive(0, numbers));

//Unutar funkcije, koristi se destrukturiranje objekta kako bi se dobile vrednosti name i lastName iz
//svojstava firstName i lastName objekta koji se prosleđuje funkciji.
//Takođe se koristi podrazumevana vrednost niza praznih stringova u slučaju da objekat nema svojstvo courses.
let trainer10 = {
  firstName: "Ivana",
  lastName: "Ivanovic",
  age: 33,
  academy: "Web Development",
  courses: ["javascript basic", "javascript advanced", "html", "css"],
};
function printCourses({ firstName: name, lastName, courses = [] }) {
  console.log(name, lastName);
  console.log(courses);
}

printCourses(trainer10);

//destrukturiranje je razbijanje na manje delove
let dog = {
  dogName: "Barnie",
  dogColor: "brown",
  dogAge: 3,
};
console.log("dog:");
console.log(dog.dogName); //Barnie
console.log(dog.dogColor); //brown
//destrukturiranje objekta dog
let { dogName, dogColor, dogAge } = dog;
console.log("after destructuring:");
console.log(dogName); //Barnie
console.log(dogColor); //brown
console.log(dog.dogName);

//obicno pozivanje funkcije, destrukturiranje, spread
let nums = [1, 2, 3, 4, 5];

function sumThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

let sumOfThree = sumThreeNumbers(nums[0], nums[1], nums[2]);

let [first1, second, third] = nums;
let sumOfThree1 = sumThreeNumbers(first1, second, third);

let sumOfThree2 = sumThreeNumbers(...nums);

console.log(sumOfThree);
console.log(sumOfThree1);
console.log(sumOfThree2);
