// Basic way of defining functions
// function printFullName(firstName, lastName) {
//   console.log(`${firstName} ${lastName}`); //interpolacija
//   console.log(firstName + " " + lastName);
// }
// printFullName("John", "Doe");
// const a = printFullName("Marko", "s");
// console.log(a);

//numbers
// function addTwoNumbers(numOne, numTwo) {
//   return numOne + numTwo;
// }
// console.log(addTwoNumbers(100, 150));
// const resultOne = addTwoNumbers(30, 20);
// console.log(resultOne);
// console.log(addTwoNumbers(30, 50));

//Saving an anonymous function in a variable
// const multiplyTwoNumbers = function (numOne, numTwo) {
//   console.log(numOne * numTwo);
//   return numOne * numTwo;
// };
// console.log(multiplyTwoNumbers);
// console.log(multiplyTwoNumbers(2, 100));

// // Calling one function inside another one
// const calculator = function (operator, numOne, numTwo) {
//   // "+", "*"
//   if (operator === "+") {
//     return addTwoNumbers(numOne, numTwo);
//   }
//   if (operator === "*") {
//     return multiplyTwoNumbers(numOne, numTwo);
//   }
//   return "Invalid Operator";
// };
// console.log(calculator("+", 3, 2));
// console.log(calculator("*", 5, 5));
// console.log(calculator("1", 8, 2));

// Arrow functions
// const sayHello = () => {
//   console.log("Hello from an arrow function");
// };
// sayHello();

// Arrow functions without function body brackets
// const subtractTwoNumbers = (numOne, numTwo) => numOne - numTwo;

// console.log(subtractTwoNumbers(100, 99));

// Identical as arrow func below but with classic definition
// const printMoneyFunc = function (money) {
//   return `You have a total of ${money}$`;
// };
// const printMoney = (money) => `You have a total of ${money}$`;
// console.log(printMoney(10000));

// Arrow functions as anonymous functions in event listners
// const btnEL = document.querySelector(".btn");

// btnEL.addEventListener("click", (event) => {
//   console.log(event.target);
//   console.log("i was clicked");
// });

// Arrow functions as methods in objects
// const person = {
//   firstName: "Maja",
//   lastName: "Punisic",
//   money: 6500,

//   //In normal methods this refers to the parent object
//   printFullName: function () {
//     console.log(`${this.firstName} ${this.lastName}
//     ${this.money}`);
//   },
//   printFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },

//   //   In arrow functions this refers to the window object always
//   printMoney: () => {
//     console.log(this);

//     console.log(`You have ${this.money}$`);
//   },
// };
// person.printFullName();
// person.printMoney();

// Hoisting
// Variables declared with var and normal functions are hoisted, let & const are not
// console.log(test); //hoisted-deklarisana ali nedefinisana
//console.log(a); //ReferenceError: Cannot access 'a' before initialization
//console.log(b); //isti slucaj
// printSomething(); //hoisted
// var test = "SEDC";
// let a = "a";
// const b = "b";
// console.log(test);

// function printSomething() {
//   console.log("I am printing something");
// }
// console.log(String(9990));

//hoisting: Najbolja praksa je deklarisati varijable na početku njihovog obima kako bi se
//izbegao ovaj problem. Osim toga, korišćenje let i const umesto var je još jedan način da se
//izbegne hoisting i da se izbegnu potencijalni problemi sa neinicijalizovanim varijablama.
// console.log(x); // undefined
// var x = 5;

//let y;
// foo(); // "hello"
// function foo() {
//   console.log("ispis");
//   console.log("hello");
// }
// console.log(y); // ReferenceError, nismo je ni deklarisali ni inicijalizovali
