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

console.log(
  `-----------------------Truthy/Falsey values---------------------------------`
);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));

const money = 100;

if (money) {
  //always be converted to boolean
  console.log("Dont spend all at one place");
} else {
  console.log("You should get a job");
}

let height_1 = 100;

if (height_1) {
  console.log("height is defined");
} else {
  console.log("Height is not defined");
}

console.log(
  `-----------------------equality == vs === ---------------------------------`
);

const age1 = "18";

if (age1 === 18) console.log("You're an adult (Strict)");

if (age1 == 18) console.log("You're an adult (loose)");

// const favoruite = Number(prompt("Enter your favourite number"));

// console.log(favoruite);

// console.log(typeof favoruite);

// if (favoruite === 23) {
//   console.log("23 is amazing number");
// } else if (favoruite === 7) {
//   console.log("7 is also an cool number");
// } else if (favoruite === 9) {
//   console.log("9 is also an cool number");
// } else {
//   console.log("You entered an number");
// }

// //difference operator

// if (favoruite !== 23) {
//   console.log("Why not 23 ???");
// }

console.log(
  `----------------------- Boolean Logic ---------------------------------`
);

const hasDrivingLicense = true;
const hasGoodVision = true;
const isTried = true;

// console.log(hasDrivingLicense && hasGoodVision);

// console.log(hasDrivingLicense || hasGoodVision);

// console.log(!hasGoodVision);

const shouldDrive = hasDrivingLicense && hasGoodVision && isTried;

if (shouldDrive) {
  console.log("Sarah can drive");
} else {
  console.log("Sarah shouldn't drive");
}

console.log(
  `----------------------- Switch statement ---------------------------------`
);

const day = "Wedneday";

switch (day) {
  case "Monday":
    console.log("Monday is boring");
    console.log("Need to work");
    break;
  case "Tuesday":
    console.log("TuesDay is also boring");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Need to Work");
    break;
  case "Friday":
    console.log("Friday is Funday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Holiday");
    break;
  default:
    console.log("Not a valid day");
}

console.log(
  `----------------------- Statements and Expression ---------------------------------`
);
//refer the lecture

console.log(
  `--------------------------Conditonal or tenary operator------------------------------------`
);

const age_1 = 15;

age_1 >= 18
  ? console.log("I want to drink wine")
  : console.log("I want to drink water");

console.log(`I would like to drink ${age >= 18 ? "wine" : "water"}`);
