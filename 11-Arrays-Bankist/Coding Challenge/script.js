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
