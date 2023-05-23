// ## Exercise 1

// Make 3 functions:
// 1. Function that takes a number through a parameter and returns how many digits that number has
// 2. Function that takes a number through a parameter and returns if its even or odd
// 3. Function that takes a number through a parameter and returns if its positive or negative

// Function to count the number of digits in a number
function countDigits(number) {
  const numString = String(Math.abs(number));
  return numString.length;
}

// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Function to check if a number is positive or negative
function checkPositiveOrNegative(number) {
  if (number === 0) {
    return "Zero";
  } else if (number > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}

console.log(countDigits(123)); // Output: 3
console.log(checkEvenOrOdd(42)); // Output: Even
console.log(checkPositiveOrNegative(-7)); // Output: Negative

// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.
// #### Ex:
// **Code:** getNumberStats(-25);
// **Console:** 2 Digits, Odd, Negative

function getDigits(number) {
  if (number < 0) {
    return number.toString().length - 1;
  }
  return number.toString().length;
}

console.log(getDigits(234));
console.log(getDigits(-6754));
