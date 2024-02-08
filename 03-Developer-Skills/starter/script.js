// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const birthYear = 1998;

// const calcAge = (birthYear) => 2024 - birthYear;

// console.log(calcAge(birthYear));

// console.log("hello there");

// for (let i = 1; i <= 10; i++) {
//   console.log(`Your number is ${i}`);
//   console.log("Hi there");
// }

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

let temp = [12, 5, -5, 0, 4];

function printForecast(arr) {
  console.log(
    arr.map((item, index) => `... ${item}ºC in ${index + 1} days ...`).join(" ")
  );
}

printForecast(temp);

let x = null == undefined;
let y = null === undefined;

console.log(x === y);
