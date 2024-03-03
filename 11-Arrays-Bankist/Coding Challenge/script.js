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
