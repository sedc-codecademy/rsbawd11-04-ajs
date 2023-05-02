//stack overflow
// function callMe() {
//   console.log("Pozvana je funkcija callMe.");
//   callMe();
// }
// callMe();

// console.log("Početak programa");
// setTimeout(() => {
//   console.log("Ovo će biti ispisano nakon 2 sekunde.");
// }, 2000);
// console.log("Kraj programa");

//
//Guess the output:
// console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 1000);
// console.log("3");
// setTimeout(function () {
//   console.log("4");
// }, 0);
// console.log("5");

//

// console.log("stack [1]");

// setTimeout(() => console.log("macro [2]"), 0);
// setTimeout(() => console.log("macro [3]"), 1);

// const p = Promise.resolve();
// for (let i = 0; i < 3; i++)
//   p.then(() => {
//     setTimeout(() => {
//       console.log("stack [4]");
//       setTimeout(() => console.log("macro [5]"), 0);
//       p.then(() => console.log("micro [6]"));
//     }, 0);
//     console.log("stack [7]");
//   });

// console.log("stack [8]");

//

// console.log("script start");

// const interval = setInterval(() => {
//   console.log("setInterval");
// }, 0);

// setTimeout(() => {
//   console.log("setTimeout 1");

//   Promise.resolve()
//     .then(() => console.log("promise 3"))
//     .then(() => console.log("promise 4"))
//     .then(() => {
//       setTimeout(() => {
//         console.log("setTimeout 2");
//         Promise.resolve()
//           .then(() => console.log("promise 5"))
//           .then(() => console.log("promise 6"))
//           .then(() => clearInterval(interval));
//       }, 0);
//     });
// }, 0);

// Promise.resolve()
//   .then(() => console.log("promise 1"))
//   .then(() => console.log("promise 2"));

/*
The first console.log() is added to the callback stack, executed then removed.
Schedule the setInterval() task (+ Macro task)
Schedule the first setTimeout task (+ Macro task)
Promise 1 and Promise 2 console.logs are scheduled as microtasks, then executed. Both console logs are printed
Microtask queue is empty - time to execute the macrotask queue. setInterval() is executed, then scheduled again.
The microtask queue is still empty. Execute the setTimeout() method (first in the queue). setTimeout 1 is printed.
Promise 3 and Promise 4 are scheduled as microtasks, then executed. Both console logs are printed
setTimeout 2 task is scheduled (+ Macro task)
Microtask queue is empty - execute the setInterval() method again, then insert another setInterval() task at the end of the call stack
Execute setTimeout 2
Promise 5 and promise 6 are schedule as microtasks, then executed. both console logs are printed
Execute clearInterval()
The last setInterval will not be called, it is being cleared before the execution.
*/
