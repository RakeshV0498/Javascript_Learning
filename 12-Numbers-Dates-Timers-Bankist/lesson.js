/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// base 10 0-9
// Binary base 2 - 0 1

console.log(23 == 23.0);
console.log(23 == 23.0);

console.log(3 / 10);

// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing

console.log(Number.parseInt("30Px", 10));
console.log(parseInt("30Px", 10));
console.log(Number.parseInt("E23", 10));
console.log(parseInt("E23", 10));

console.log(Number.parseFloat(" 2.5rem"));
console.log(parseFloat(" 2.5rem"));

console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(23 * 1));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));

//Math methods

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(27 ** (1 / 3));

console.log(Math.max(5, 18, 23, 15));
console.log(Math.max(5, 18, "23", 15));

console.log(Math.min(5, 18, 23, 15));

console.log(Math.PI * Number.parseFloat("10Px") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1);

console.log(randomInt(1, 5));

// Rounding Integers

console.log(Math.trunc(23.1));

console.log(Math.round(23.6));
console.log(Math.round(23.4));

// Round Up
console.log(Math.ceil(23.6));
console.log(Math.ceil(23.4));

// Round Down
console.log(Math.floor(23.6));
console.log(Math.floor(23.4));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// rounding  decimals

console.log(+(2.765452).toFixed(2));
console.log(+(2.7).toFixed(3));

// Remainder opeator

const isEven = (n) => (n % 2 === 0 ? `${n} is Even` : `${n} is Odd`);
console.log(isEven(5));
console.log(isEven(124));

// [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//   if ((i + 1) % 2 === 0) row.style.backgroundColor = 'orangered';
//   if ((i + 1) % 3 === 0) row.style.backgroundColor = 'blue';
// });

// Numeric Seperators

const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

console.log(transferFee1, transferFee2);

console.log(2 ** 53 - 1);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);

// Dates

const now = new Date();

console.log(now);
console.log(new Date("Mar 05 2024 08:16:17"));
console.log(new Date(accounts[0].movementsDates[0]));
console.log(new Date(accounts[0].movementsDates[1]));

console.log(new Date(2024, 3, 12, 19, 0, 0));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with Dates

const future = new Date(2024, 3, 12, 19, 15, 15);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toTimeString());
console.log(future.toDateString());
console.log(future.toISOString());

console.log(new Date(Date.now()).toDateString());

future.setFullYear(2025);
console.log(future);

// Experimenting with numbers

const numbers = 54213421.12;

const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
};

console.log(new Intl.NumberFormat("fr-FR", options).format(numbers));
console.log(new Intl.NumberFormat("en-GB", options).format(numbers));
console.log(new Intl.NumberFormat("de-DE", options).format(numbers));
console.log(new Intl.NumberFormat(navigator.language, options).format(numbers));

// setTimeout and set interval

// setTimeout with function and arguments

const ingreidents = ["olives", "pepperoni"];

const pizzaDelivery = setTimeout(
  (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2} 🍕`),
  2000,
  ...ingreidents
);
console.log("Waiting...");

if (ingreidents.includes("spinach")) clearTimeout(pizzaDelivery);

// SetInterval

setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
