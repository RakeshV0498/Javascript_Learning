const checkDogs = function (dogsJulia, dogsKate) {
  const updatedDogsJulia = dogsJulia.slice();
  updatedDogsJulia.splice(0, 1);
  updatedDogsJulia.splice(-2);
  // const dogsArr = [...updatedDogsJulia, ...dogsKate];
  const dogsArr = updatedDogsJulia.concat(dogsKate);

  dogsArr.forEach((value, index) => {
    console.log(
      `Dog number ${index + 1} is ${
        value >= 3 ? `an adult and is ${value} years old` : "still a puppy 🐶"
      }`
    );
  });
};

console.log(`------------------Test Data 1-----------------`);
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log(`------------------Test Data 2-----------------`);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

console.log(`-------------------------Coding Challenge #2----------------`);

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map((value) =>
//     value <= 2 ? 2 * value : 16 + value * 2
//   );

//   // console.log(`Dogs age in human age ${humanAge.join(", ")}`);

//   const adultDogs = humanAge.filter((value) => value > 18);

//   // console.log(`Adult Dogs - ${adultDogs.join(", ")}`);

//   // const averageAge = Math.floor(
//   //   adultDogs.reduce((acc, value) => {
//   //     return acc + value;
//   //   }, 0) / adultDogs.length
//   // );

//   const averageAge = adultDogs.reduce(
//     (acc, value, i, arr) => acc + value / arr.length,
//     0
//   );

//   console.log(`Average Age: ${averageAge}`);
// };

console.log(`-------------------------Coding Challenge #3----------------`);

const calcAverageHumanAge = (ages) => {
  return ages
    .map((value) => (value <= 2 ? 2 * value : 16 + value * 2))
    .filter((value) => value > 18)
    .reduce((acc, value, i, arr) => acc + value / arr.length, 0);
};

console.log(`------------------Test Data 1-----------------`);
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(`------------------Test Data 2-----------------`);
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

console.log(`-------------------------Coding Challenge #4----------------`);

console.log(`====================Task 1=================`);

dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(`====================Task 2=================`);

const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));

console.log(
  `${
    sarahsDog.curFood > sarahsDog.recFood
      ? "Sarah's Dog eat much"
      : "Sarah's Dog eat less"
  } `
);

console.log(`====================Task 3=================`);

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooLittle);

console.log(`====================Task 4=================`);

console.log(ownersEatTooMuch.join(" and ").concat("'s dogs eat too much!"));
console.log(ownersEatTooLittle.join(" and ").concat("'s dogs eat too little!"));

console.log(`====================Task 5=================`);

console.log(dogs.some((dog) => dog.curFood === dog.recFood));

console.log(`====================Task 6=================`);

console.log(
  dogs.some(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

console.log(`====================Task 7=================`);

const okayDogs = (dog) => {
  return dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
};

console.log(dogs.filter(okayDogs));

console.log(`====================Task 8=================`);

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogs);
console.log(dogsCopy);
