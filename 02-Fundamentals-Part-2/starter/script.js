"use strict";

//Using Strict Mode//

// lectureName("Using Strict Mode");

// let hasDrivingLicense = false;
// const passTest = true;

// if (passTest) hasDrivingLicense = true;

// if (hasDrivingLicense) console.log("Please Drive");

//it will not reserved keyword to used in the code
// const interface = "Audio";
// const private = 5;

function lectureName(name) {
  console.log(
    `------------------------------ ${name}--------------------------------`
  );
}

lectureName("Function basic");

function logger() {
  console.log("My name is Rakesh");
}

//Invoking /running/calling the function.
logger();

function fruitProcesor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice; // need to declare the result in a variable to get the result or we need to console it to get the output
}

// console.log(fruitProcesor(5, 10));

const appleJuice = fruitProcesor(5, 10);
console.log(appleJuice);

const appleOrangeJuice = fruitProcesor(2, 4);
console.log(appleOrangeJuice);

lectureName("fucntion declaration Vs expression");

//fucntion decalration
function calcAge(birthYear) {
  // const age = 2024 - birthYear;
  // return age
  return 2037 - birthYear;
}

console.log(calcAge(1998));

//function expression
//Annononymous function, function without a name, we can use a variable to run the function
const calcAge1 = function (birthYear) {
  return 2024 - birthYear;
};

console.log(calcAge1(1998));

lectureName("Arrow function");

const calcAge2 = (birthYear) => 2037 - birthYear;

console.log(calcAge2(1998));

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };
const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return ` ${firstname} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1998, "Rakesh"));
console.log(yearsUntilRetirement(2002, "Vignesh"));

lectureName("Function calling fucntions");

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcesor1(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcesor1(2, 3));

lectureName("Reviewing functions");

const calcAge3 = function (birthyear) {
  return 2024 - birthyear;
};

const yearsUntilRetirement1 = function (birthYear, firstname) {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return ` ${firstname} retires in ${retirement} years`;
    //anything after retun, it wont be printed or executed
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement1(1998, "Rakesh"));
console.log(yearsUntilRetirement1(1958, "Vignesh"));
