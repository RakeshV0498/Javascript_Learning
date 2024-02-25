'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Es5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH175');
createBooking('FAS172', 5, 250);
createBooking('LH155', 5);
createBooking('LH154', 2);

// If we try to bypass the second parameter, it wont work due to the parameters are set at their place it cant be modified

createBooking('PO147', 1000);

// To bypass the parameter left in between we need to use 'undefined', instead of leaving it as blank

createBooking('LK145', undefined, 1000);

// Passing Arguments as values vs objects

const flight = 'LJ454';

const passsenger = {
  name: 'Rakesh Vengatesan',
  passportNo: 4578945612,
};

*/

// const checkIn = function (flight, passengerDetails) {
//   console.log(flight, passengerDetails);

//   flight = 'LH999';
//   passengerDetails.name = 'Mr.' + passengerDetails.name;

//   if (passengerDetails.passportNo === 4578945612) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport!');
//   }

//   console.log(flight, passengerDetails);
// };

// checkIn(flight, passsenger);

// No changes will happen to primitive values since its only creating a copy when we pass through the function
// console.log(flight);

// CHanges will happen to objects, since it referencing to the memory where the orginal object is created, so when we pass the objects, we are just referencing the value, so whatever changes that we make will reflect to the original object

// console.log(passsenger);

// const newPassport = function (passengerDetails) {
//   passengerDetails.passportNo = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(passsenger);
// checkIn(flight, passsenger);

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// HighOrder Functions
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

const names = ['a', 'b', 'c'];

names.forEach(high5);

*/

// Function returning a function

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greet('Hey')('Rakesh ');
greetArr('Hello')('Rakesh');

const greeterHey = greet('Hey');
greeterHey('Rakesh');
*/

/*

const lufthansa = {
  airline: 'Lufthnasa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Rakesh');
lufthansa.book(359, 'Vignesh');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'SW',
  booking: [],
};

const book = lufthansa.book;

// Doesnt work
// book(451, 'John');

book.call(eurowings, 23, 'Rakesh');
console.log(eurowings);

book.call(lufthansa, 451, 'Vignesh');
console.log(lufthansa);

// Apply function takes parameter/Arguments as an array

const flighData = [235, 'Rakesh Vengatesan'];
book.apply(lufthansa, flighData);

console.log(lufthansa);

// Bind Method

const bookEW = book.bind(eurowings);
const bookSW = book.bind(swiss);

bookEW(451, 'Surekha');
console.log(eurowings);

// We can set parameteres as well in the bind method

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Rakesh');
bookEW23('Vignesh');
console.log(eurowings);

lufthansa.planes = 300;

lufthansa.buyplane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

console.log(lufthansa);

const btnBuy = document.querySelector('.buy');

btnBuy.addEventListener('click', lufthansa.buyplane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 15));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const addTaxRate = rate => value => value + value * rate;

const addVAT2 = addTaxRate(0.23);

console.log(addTaxRate(0.1)(150));

console.log(addVAT2(1500));

*/
/*
console.log('------------------Coding Challenge#1------------');

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}\n ${this.options.join('\n')}`)
    );

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      console.log(this.answers);
    }
  },
};

const btnPoll = document.querySelector('.poll');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

btnPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));
*/

/* IIFE

// If we dont enclosing the function with in a bracket operator, then it will be considered as function declaration, function declaration cannot be called immediately. Hence we are enclosing the function in the bracket, making it as a function expresssion and calling it.

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also not run ever again'))();
*/

// Closures
/*
let item = 'passengers';

const secureBooking = function () {
  let passsengerCount = 0;
  return function () {
    passsengerCount++;
    console.log(`${passsengerCount} ${item}`);
  };
};

const booker = secureBooking();

booker();

booker();

booker();

console.dir(booker); */

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 3);
  };
};

g();
f();
console.dir(f);

// Reassignment done after calling h function

h();
f();
console.dir(f);

//Example - 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers `);
    console.log(`There are 3 group, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(30, 5);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
