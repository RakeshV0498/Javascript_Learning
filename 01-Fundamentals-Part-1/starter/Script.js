let js = "amazing";
console.log(40 + 8 + 5 + 6);

let country = "India";
let continent = "Asia";
let population = "140 Million";

console.log(country);
console.log(continent);
console.log(population);

//Variables

let firstName = "Rakesh";

const BIRTHYEAR = 1998;

var lastName = "Vengatesan";
console.log(firstName, lastName);

//Operations
const now = 2037;

const ageJones = now - 1991;
const ageSarah = now - 2018;

console.log(ageJones, ageSarah);

console.log(ageJones * 2, ageJones / 10, 2 ** 3);
//2**3 means 2*2*2

console.log(firstName + " " + lastName);

//Assignment and Artimetic Operators

let x = 10 + 5;
console.log(x);

x += 10; //x=x+10
console.log(x);

x -= 4; //x=x-4
console.log(x);

x *= 3; //x = x * 3
console.log(x);

x++; //  x = x+1
console.log(x);

x--; //x =x-1
console.log(x);

//Comparison Operators

console.log(ageJones > ageSarah);

console.log(ageJones < ageSarah);

console.log(ageJones <= 18);

console.log(ageJones >= 18);

// Refere order of precedence in MDN

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const MarkHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(MarkHigherBMI);

//String and template literals

const birthYear = 1998;
const currentYear = 2024;

console.log(
  `My Name is ${firstName} ${lastName} and my age is ${currentYear - birthYear}`
);

console.log(12);

//Taking Decisions if/else statement

console.log(
  `-----------------------Taking Decsions if/else----------------------------------`
);
const age = 20;

if (age >= 18) {
  console.log(`Sarah can take driving license test 😀`);
} else {
  console.log(`Sarah can take driving license test in ${18 - age} Years`);
}

const birth_Year = 2002;

let century;

if (birth_Year <= 2000) {
  century = "20th";
} else {
  century = "21st";
}

console.log(`The person born in ${century} century`);

//Type Conversion and coercision

console.log(
  `-----------------------Type Conversion and Coercision---------------------------------`
);

const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(String(23), 23);

//type coercion

console.log("I am " + 25 + " Years Old");
