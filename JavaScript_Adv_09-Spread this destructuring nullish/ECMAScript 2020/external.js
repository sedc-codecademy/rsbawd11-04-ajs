//The ?? operator returns
//the first argument if it is not nullish (null or undefined).
//Otherwise it returns the second.
let name1 = null;
let text = "missing";
let result = name1 ?? text;
document.getElementById("demo").innerHTML = "The name is " + result;

//The ?. operator returns undefined if an object is undefined or null
//(instead of throwing an error)
const car = { type: "Fiat", model: "500", color: "white", aaa: null };
let name2 = car?.aaa;
let name3 = car?.name;
let name4 = car?.someNonExistentMethod?.();
document.getElementById("demo2").innerHTML = name3;
console.log(name2);
console.log(name3);
//car?.property = 1; // SyntaxError: Invalid left-hand side in assignment

function printMagicIndex(arr) {
  console.log(arr?.[42]);
  //console.log(arr[42]);
}
printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw an error

//If the first value is true, the second value is assigned
//let x = 100;
let x = false;
x &&= 5;
document.getElementById("demo3").innerHTML = "Value of x is: " + x;

//If the first value is false, the second value is assigned
let y = undefined;
y ||= 5;
document.getElementById("demo4").innerHTML = "Value of y is: " + y;
