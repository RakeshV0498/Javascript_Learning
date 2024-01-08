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

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
}
checkWinner(scoreDolphins, scoreKoalas);

lectureName("Arrays");

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];

console.log(friends);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends[friends.length - 1]);

friends[2] = "Jake";

console.log(friends);

const years = new Array(1991, 1998, 1989, 2002);

console.log(years);

const rakesh = [
  "Rakesh",
  "Vengatesan",
  2024 - 1998,
  "Software Engineer",
  friends,
];
console.log(rakesh);
console.log(rakesh.length);

// console.log(calcAge(years[0]));
// console.log(calcAge(years[1]));
// console.log(calcAge(years[2]));
// console.log(calcAge(years[3]));

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[3]),
// ];

// console.log(ages);

lectureName("Basic Array Methods");

const friends1 = ["Michael", "Steven", "Peter"];

const newLength = friends1.push("Jake"); //pushes the element to end  of the array and returns the length of the array

console.log(friends1);
console.log(newLength);

friends1.unshift("John"); //adds the ekement to the start of the array
console.log(friends1);

friends1.pop(); //Removes the last element of the array and returns the  removed elemnet
const popped = friends1.pop();

console.log(friends1);
console.log(popped);

friends1.shift(); //removes the first element and returns the removed element

console.log(friends1);

console.log(friends1.indexOf("Steven")); //returns the index of the element that we pass through as argument
console.log(friends1.includes("Peter")); //if no element is found, it will return -1

console.log(friends1.includes("Michael")); // check whether the element is available in the array and retrun true or false
console.log(friends1.includes("Peter"));

if (friends1.includes("Peter")) {
  console.log("You have a friend called Peter");
} else {
  console.log("You dont have a friend named Peter");
}

lectureName("Objects");

const rakeshobj = {
  firstName: "Rakesh",
  lastName: "Vengatesan",
  age: 2024 - 1998,
  job: "Senior Software engineer",
  friends: friends,
};

console.log(rakeshobj);
//Dot Notation
console.log(rakeshobj.firstName);
//bracket Notation
console.log(rakeshobj["lastName"]);

const nameKey = "Name";
console.log(rakeshobj["first" + nameKey]);
console.log(rakeshobj["last" + nameKey]);

console.log(rakeshobj.age);

// const interestedIn = prompt(`what do you want to know about Rakesh ?
// choose between firstname,lastname,age
// `);

// if (rakeshobj[interestedIn]) {
//   alert(rakeshobj[interestedIn]);
//   console.log(rakeshobj[interestedIn]);
// } else {
//   alert("choose between firstname,lastname,age");
//   console.log("choose between firstname,lastname,age");
// }

rakeshobj.location = "Chennai"; //we can add element like this as well

console.log(
  `${rakeshobj.firstName} has ${rakeshobj.friends.length} friends and his best friend is called ${rakeshobj.friends[0]}`
);

lectureName("Object Methods");

const rakeshObj = {
  firstName: "Rakesh",
  lastName: "Vengatesan",
  birthYear: 1998,
  job: "Senior Software engineer",
  friends: friends,
  hasDrivingLicense: true,

  //   calcAge: function (birthYear) {
  //   return 2037-birthYear
  // }

  // calcAge: function () {
  //   return 2024 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he ${
        this.hasDrivingLicense
          ? "has a driving license"
          : "dont have a driving license"
      }`
    );
  },
};

rakeshObj.calcAge(); // This will call the function in the object, then it will create property and stroe the output in the age property
//we can simply initizalize the function and store the value in the key.

console.log(rakeshObj.age);
console.log(rakeshObj.age);
console.log(rakeshObj.age);

rakeshObj.getSummary();

// console.log(rakeshObj["calcAge"]());

// console.log(
//   `${rakeshObj.firstName} is a ${rakeshObj.age} years old ${
//     rakeshObj.job
//   }, and he ${
//     rakeshObj.hasDrivingLicense
//       ? "has a driving license"
//       : "dont have a driving license"
//   }`
// );

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI() > john.calcBMI()
  ? console.log(
      `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
    )
  : console.log(
      `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
    );

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
//   );
// }

lectureName("Loop - the for loop");

//for loop keeps running while the condition is true, i can use either index <=10 or index <11
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetititon ${rep} 🏋️‍♂️`);
}

const types = [];

for (let i = 0; i < rakesh.length; i++) {
  console.log(rakesh[i]);
  types.push(typeof rakesh[i]);
}

console.log(types);

// const years = new Array(1991, 1998, 1989, 2002);

const ages = [];

for (let index = 0; index < years.length; index++) {
  ages.push(2024 - years[index]);
}

console.log(ages);

// Only strings
for (let index = 0; index < rakesh.length; index++) {
  if (typeof rakesh[index] !== "string") continue;
  console.log(rakesh[index], typeof rakesh[index]);
}

//Break with Number
for (let index = 0; index < rakesh.length; index++) {
  if (typeof rakesh[index] === "number") break;
  console.log(rakesh[index], typeof rakesh[index]);
}

lectureName("Looping backwards and Loops in loop");

for (let i = rakesh.length - 1; i >= 0; i--) {
  console.log(rakesh[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------Starting Exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetiton ${rep} 🏋️‍♂️`);
  }
}

lectureName("While Loops");

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

console.log(dice);

do {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop about to end");
} while (dice !== 6);
