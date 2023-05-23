// //Functions as First-class citizens in JS

let sayHello = function (name) {
  console.log(`Hello there ${name}`);
};
sayHello("Bob");

// funkcija kao niz
let numStatsFunctions = [
  (num) => (num > 0 ? "Positive" : "Negative"), //poz neg
  (num) => (num % 2 === 0 ? "Even" : "Odd"), //par nepar
  (num) => (num >= 0 ? num.toString().length : num.toString().length - 1),
]; //u slucaju neg broja vratio bi se string sa dodatim - pa se oduzima jedan
console.log("Result1: ", numStatsFunctions[0](13));
console.log("Result2: ", numStatsFunctions[1](13));
console.log("Result3: ", numStatsFunctions[2](13));

for (let func of numStatsFunctions) {
  console.log(func(-20)); //prolazi ceo niz i sve funkcije
}

for (let i = 0; i < numStatsFunctions.length; i++) {
  console.log(numStatsFunctions[i](5466)); //prolazi ceo niz i sve funkcije
}

// funkcija kao argument
let sum = (num1, num2) => num1 + num2;
let difference = (num1, num2) => num1 - num2;
let calculator = (operationFunc, num1, num2) => operationFunc(num1, num2);
console.log(calculator(sum, 5, 15)); //prosledjujemo funkciju sum i dva broja
console.log(calculator(difference, 12, 2)); //prosledjujemo funkciju difference i dva broja

// switch i funkcija
function calculator2(operation) {
  switch (operation) {
    case "+":
      return function (num1, num2) {
        return num1 + num2;
      };
    case "-":
      return function (num1, num2) {
        return num1 - num2;
      };
    default:
      console.log("ERROR");
  }
}

console.log(calculator2("+")(6, 7));
console.log(calculator2("-")(15, 38));
console.log(calculator2("fdj"));

//Exercise 1: Write the calculator function as an arrow function, in one row
let calc = (op) =>
  op === "+"
    ? (num1, num2) => num1 + num2
    : op === "-"
    ? (num1, num2) => num1 - num2
    : "Error";
console.log(calc("+")(6, 6));
console.log(calc("-")(16, 6));
console.log(calc("")); //nepostojeci

//functions have properties and methods like objects
//svojstva funkcije name, length, prototype i custom
let greeting = (name, aaa) => console.log(`Hey there ${name} ${aaa}`);
console.log(greeting.name); //ugradjeni
console.log(greeting.length); //koliko parametara prosledjuje
greeting.description = "This is a function that greets a person"; //custom
console.log(greeting.description);
greeting.differentGreeting = (name) =>
  console.log(`Hello, have a good day ${name}`);
greeting("Ana");
greeting.differentGreeting("Petar");

//U telu funkcije, koristi se objekat arguments koji predstavlja niz svih argumenata koji su
//prosledjeni funkciji.
//Ovaj pristup koriscenju arguments objekta moze biti koristan ako funkcija prima promenljiv
//broj argumenata, jer omogucava da se pristupi svakom argumentu nezavisno od toga koliko ih ima
function func(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
func(1, 2, 3);

//Higher order functions
//forEach
//filter
//map
//reduce
//sort

let students = [
  {
    firstName: "Joe",
    lastName: "Doe",
    age: 19,
    averageGrade: 5,
  },
  {
    firstName: "Tim",
    lastName: "Green",
    age: 17,
    averageGrade: 3,
  },
  {
    firstName: "Gill",
    lastName: "Flung",
    age: 20,
    averageGrade: 2,
  },
  {
    firstName: "Eric",
    lastName: "Tung",
    age: 15,
    averageGrade: 1,
  },
  {
    firstName: "Max",
    lastName: "Mad",
    age: 64,
    averageGrade: 1,
  },
];

//for & foreach
for (let i = 0; i < students.length; i++) {
  console.log(`For loop: ${students[i].firstName} ${students[i].lastName}`);
}

function printFullName(student) {
  console.log(`forEach: ${student.firstName} ${student.lastName}`);
}
students.forEach(printFullName);

students.forEach(function (student) {
  console.log(`ForEach + Anonymous: ${student.firstName} ${student.lastName}`);
});

students.forEach((student) =>
  console.log(`ForEach + arrow: ${student.firstName} ${student.lastName}`)
);

//filter
let above18 = students.filter((arrayElement) => arrayElement.age >= 18);
let above18anonymous = students.filter(function (element) {
  return element.age >= 21;
});
console.log("result", above18anonymous);
console.log(above18);

let aboveEighteen = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].age >= 21) {
    aboveEighteen.push(students[i]);
  }
}
console.log("For loop:", aboveEighteen);

// filter & map
let studentsWithAverageGradeFive = students.filter(
  (student) => student.averageGrade === 5
);
console.log(studentsWithAverageGradeFive);

let printAvergeGrade = studentsWithAverageGradeFive.map(
  (student) => `Averge grade: ${student.averageGrade}`
);
console.log(printAvergeGrade);

let aver = students
  .filter((student) => student.averageGrade === 5)
  .map((student) => `Averge grade: ${student.averageGrade}`);
console.log("AVERAGE", aver);

// //reduce
let numbersArr = [1, 2, 3, 4, 5]; //15

let result = numbersArr.reduce((sum, number) => (sum += number), 0);
console.log("Result reduce", result);

// //Exercise 2: Sum up all grades that are larger than 1

// //step1: filter all students with grade larger than 1
// //step2: map all students and return an array of their grades
// //step3: reduce the array of grades to a sum of all grades

let gradesChained = students
  .filter((student) => student.averageGrade > 1)
  .map((student) => student.averageGrade)
  .reduce((sum, number) => (sum += number), 0);
console.log(gradesChained);

//sort
let numbers = [3, 2, 1, 4, 5];
let asc = numbers.sort((element1, element2) => element1 - element2);
// (3, 2) => 3 - 2 = 1  [2, 3, 1, 4, 5]
console.log("Numbers arr", numbers);
console.log("ASC", asc);

//rastuce i opadajuce sortiranje sort metodom
let numbers2 = [3, 2, 1, 4, 5, { 1: 1, 2: 2, 3: 3 }];
let copiedNumbers = [...numbers2];
console.log(numbers2);
copiedNumbers.sort(); //metoda sortiranja
console.log("Original array", numbers2);
console.log("Sorted array", copiedNumbers);
copiedNumbers[0] = 1;
console.log(numbers2[0]);

let desc = copiedNumbers.sort((element1, element2) => element2 - element1);
console.log("DESC", desc); //opadajuce sortiranje

//copy foreach & push
function copyArray(arr) {
  let copied = [];
  arr.forEach((x) => copied.push(x));
  return copied;
}
console.log("CopyArr result", copyArray(numbers));

// sortiranje objekta studenata
students.sort((student1, student2) => student1.age - student2.age);
console.log("Students sorted", students);
