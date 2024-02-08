'use strict';

// function calcAge(birthYear) {
//   const age = 2024 - birthYear;
//   // firstName will be looked up by the execution context until find the variable
//   // console.log(firstName);
//   // // it it doesnt find then it will throw error
//   // console.log(lastName);
//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Vignesh';
//       const str = `oh you are a millenial! ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Rakesh';

// calcAge(1994);

// Hosisting with Variables

// console.log(me);
// console.log(age);
// console.log(job);

// var me = 'rakesh';
// const age = 25;
// let job = 'SSE';

// // Function Hoisting

// console.log(add(2, 3));

// // console.log(addExp(2, 3));

// // console.log(addArr(2, 3));

// function add(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// const addArr = (a, b) => a + b;

// //Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All Products deleted');
// }

// console.log(this);

// console.log(`-------------------------------------`);

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   console.log(this);
// };

// calcAge(1998);

// console.log(`-------------------------------------`);

// const calcAgeArr = birthYear => {
//   console.log(2024 - birthYear);
//   console.log(this);
// };

// calcAgeArr(1994);

// console.log(`-------------------------------------`);

// const rakesh = {
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);
//   },
// };

// rakesh.calcAge();

// console.log(`-------------------------------------`);

// const vignesh = {
//   year: 2002,
// };

// vignesh.calcAge = rakesh.calcAge;

// vignesh.calcAge();

// const rakesh = {
//   firstName: 'Rakesh',
//   year: 1998,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);

//we are using self variable to access the year and firstname variable inside the function's function.

// solution -1
// const self = this;
// const isMillenal = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

// solution 2

//     const isMillenal = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenal();
//   },

//   greet: () => console.log(`hey ${this.firstName}`),
// };

// rakesh.greet();
// rakesh.calcAge();

//arguments keyword

// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExp(8, 5);
// addExp(10, 15, 16, 1, 5, 10);

// const addArr = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArr(2, 9);

//Primitive vs object

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(oldAge, age);

// const me = {
//   name: 'rakesh',
//   age: 26,
// };

// const friend = me;

// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Me: ', me);

let lastName = 'Vengatesan';
let oldLastName = lastName;
lastName = 'V';
// oldLastName = lastName;

console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

console.log('Before Marriage:', jessica.firstName, jessica.lastName);
console.log(
  'After Marriage:',
  marriedJessica.firstName,
  marriedJessica.lastName
);

// Copying the objects (Shallow Copy)

const jessicaCopy = {
  firstName: 'Jessica',
  lastName: 'Williams',
  family: ['abc', 'def'],
};

const marriedJessicaCopy = Object.assign({}, jessicaCopy);

marriedJessicaCopy.lastName = 'Davis';

console.log('Before Marriage:', jessicaCopy);
console.log('After Marriage:', marriedJessicaCopy);

marriedJessicaCopy.family.push('ghi');
marriedJessicaCopy.family.push('jkl');

console.log('Before Marriage:', jessicaCopy);
console.log('After Marriage:', marriedJessicaCopy);
