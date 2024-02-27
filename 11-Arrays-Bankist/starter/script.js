'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements) {
//   movements.forEach((value, index) => {
//     const transType = value > 0 ? 'deposit' : 'withdrawal';
//     const movementRow = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${transType}">${
//       index + 1
//     }  ${value > 0 ? 'Deposit' : 'Withdrawal'}</div>
//       <div class="movements__date">3 days ago</div>
//       <div class="movements__value">${value}€</div>
//     </div>`;

//     containerMovements.innerHTML += movementRow;
//   });
// };

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (value, index) {
    const transactionType = value > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${transactionType}">${
      index + 1
    } ${transactionType}</div>
          <div class="movements__value">${value}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// //Slice//

console.log(`=========== Slice =============`);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));

console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...[arr]);

console.log(`=========== Splice =============`);

// Splice method actually mutates the original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); //STarts at 1st position and deletes 2 items.
console.log(arr);

console.log(`=========== Reverse =============`);

// Reverse method also mutuates the original array

arr = ['a', 'b', 'c', 'd', 'e'];

let arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

console.log(`=========== Concat =============`);

// Both the methods doesnt mutate the original arrays

let letters = arr.concat(arr2);

console.log(letters);
console.log([...arr, ...arr2]);

console.log(`=========== Join =============`);

console.log(letters.join('-'));
*/

// // At method

// const arr = [12, 156, 147];

// console.log(arr[0]);
// console.log(arr.at(0));

// // to get the last element in the array

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// // At method also works on strings

// console.log('Rakesh'.at(1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, value] of movements.entries()) {
//   if (value < 0) {
//     console.log(`${i + 1}: User Withdrew $${Math.abs(value)}`);
//   } else {
//     console.log(`${i + 1}: User Deposited $${Math.abs(value)}`);
//   }
// }

// console.log(`=============For Each==================`);

// movements.forEach((value, index, arr) => {
//   if (value < 0) {
//     console.log(
//       `Transaction - ${index + 1} : User Withdrew $${Math.abs(value)}`
//     );
//   } else {
//     console.log(
//       `Transaction - ${index + 1} : User Deposited $${Math.abs(value)}`
//     );
//   }
//   console.log(arr.at(index));
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// let arr = [
//   1, 1, 2, 3, 4, 5, 5, 7, 8, 9, 7, 9, 1, 2, 2, 3, 6, 8, 9, 4, 6, 1, 3, 0,
// ];

// arr = arr.sort((a, b) => a - b);

// const newArr = new Set(arr);

// console.log(newArr);

// newArr.forEach((value, index) => {
//   console.log(`${index + 1} - ${value}`);
// });
