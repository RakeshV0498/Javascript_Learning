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

const updateUI = function (account) {
  calcDisplayBalance(account);
  displayMovements(account.movements);
  calcDisplaySummary(account);
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, value) => {
    return acc + value;
  }, 0);
  // acc.balance = balance;
  labelBalance.textContent = `${account.balance}€`;
};

// calcDisplayBalance(account1.movements);

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;
  moves.forEach(function (value, index) {
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

// displayMovements(account1.movements);

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(value => value > 0)
    .reduce((acc, value) => acc + value, 0);

  const expense = acc.movements
    .filter(value => value < 0)
    .reduce((acc, value) => acc + value, 0);

  const interest = acc.movements
    .filter(value => value > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(value => value >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(expense)}€`;
  labelSumInterest.textContent = `${Math.ceil(interest)}€`;
};

// calcDisplaySummary(account1.movements);

const createUserName = function (accts) {
  accts.forEach(acct => {
    acct.userName = acct.owner
      .toLowerCase()
      .split(' ')
      .map(value => value.slice(0, 1))
      .join('');
  });
};

createUserName(accounts);

let currentAccount;

// Login

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  const userName = inputLoginUsername.value.toLowerCase();
  const userPin = inputLoginPin.value;

  currentAccount = accounts.find(acc => acc.userName === userName);

  if (currentAccount?.pin === Number(userPin)) {
    inputLoginUsername.value = inputLoginPin.value = '';
    document.activeElement.blur();
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Updating UI
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    alert('Incorrect username or Password');
    inputLoginPin.value = '';
  }
});

// Transfer

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  if (amount > 0 && amount <= currentAccount.balance) {
    if (receiverAcc && receiverAcc?.userName !== currentAccount.userName) {
      //Initiating Transfer
      currentAccount.movements.push(amount * -1);
      receiverAcc.movements.push(amount);
      // Updating UI
      document.activeElement.blur();
      updateUI(currentAccount);
    } else {
      alert('Invalid User!! Please check and try again');
      inputTransferTo.value = inputTransferAmount.value = '';
      inputTransferTo.focus();
    }
  } else {
    alert("You don't have suffient balance");
    inputTransferAmount.value = '';
    inputTransferAmount.focus();
  }
});

// Loan Request

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);

  const isEligible = currentAccount.movements.some(
    value => value > loanAmount * 0.1
  );

  if (loanAmount > 0 && isEligible) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  } else {
    alert('You are not eligible for the loan');
  }
  inputLoanAmount.value = '';
});

// Close Account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const userName = inputCloseUsername.value;
  const userPin = Number(inputClosePin.value);

  if (userName === currentAccount.userName && userPin === currentAccount.pin) {
    const confirmClosure = confirm('Do you want to close the account?');
    if (confirmClosure) {
      const index = accounts.findIndex(
        acc => acc.userName === currentAccount.userName
      );
      // Delete Account
      accounts.splice(index, 1);
      // HIde Ui
      containerApp.style.opacity = 0;
    } else {
      inputCloseUsername.value = inputClosePin.value = '';
    }
  } else {
    alert('Invalid Credentials, Please check');
    inputCloseUsername.value = inputClosePin.value = '';
    inputCloseUsername.focus();
  }
  // Clear fields
  inputCloseUsername.value = inputClosePin.value = '';
  inputLoginUsername.focus();
});

// Sort
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// accounts.forEach(value => {
//   console.log(createUserName(value.owner));
// });

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

// Data Transformations (MRF)

// Map

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const EURToUSD = 1.1;

// const usdMovements = movements.map(value => Math.floor(value * EURToUSD));

// console.log(movements);
// console.log(usdMovements);

// // With for-of loop/foreach loop
// const updatedMovements = [];
// for (const value of movements) {
//   updatedMovements.push(value * EURToUSD);
// }

// console.log(updatedMovements);

// // const arr = ['12 13 14 15 16 17 18 19'];

// // const newArr = arr[0].split(' ').map(Number);

// // console.log(newArr);

// const transactions = movements.map((value, index) => {
//   return `Transaction - ${index + 1} : User ${
//     value > 0 ? `deposited` : `withdrew`
//   } $${Math.abs(value)}`;
// });

// transactions.forEach(value => {
//   console.log(value);
// });

// Filter

// const deposits = movements.filter(value => value > 0);
// const withdrawals = movements.filter(value => value < 0);

// console.log(deposits);
// console.log(withdrawals);

// Reduce

// const totalBalance = movements.reduce((acc, value, i) => {
//   return acc + value;
// }, 0);

// console.log(totalBalance);

// Maximum value

// console.log(movements);
// const maximumValue = movements.reduce((acc, value) => {
//   return acc > value ? acc : value;
// }, movements[0]);

// console.log(maximumValue);

// const minimumValue = movements.reduce((acc, value) => {
//   return acc < value ? acc : value;
// }, movements[0]);

// console.log(minimumValue);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const totalDeposits = movements
//   .filter(value => value > 0)
//   .map(value => value * 1.1)
//   .reduce((acc, value) => acc + value, 0);

// console.log(`You have deposited $${Math.round(totalDeposits)} till now`);

// const totalWithdrawals = movements
//   .filter(value => value < 0)
//   .map(value => value * 1.1)
//   .reduce((acc, value) => acc + value * -1, 0);

// console.log(`You withdrew $${Math.round(totalWithdrawals)} till now`);

// Find Method

// const firstWithdrawal = movements.find(value => value < 0);

// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account.userName);

// Some and Every

// console.log(movements);
// // Equality
// console.log(movements.includes(-130));

// console.log(movements.some(value => value === -130));
// // Conditions
// const anyDeposits = movements.some(value => value > 1500);
// console.log(anyDeposits);

// Every, All the conditons should be true

// console.log(movements.every(value => value > 0));

// console.log(account4.movements.every(value => value > 0));

// const deposit = value => value > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// Flat and FlatMap

// const arr = [[1, 2, [3, [45]]], [4, 5, 6], 7, 8, [9, 0]];

// console.log(arr.flat());
// console.log(arr.flat(1)); //same as above by default is 1
// console.log(arr.flat(2));
// console.log(arr.flat(3));
// console.log(arr.flat(4));

// const addition = arr.flat(Infinity).reduce((acc, value) => acc + value, 0);

// console.log(addition);

// const overallBalance = accounts
//   .map(account => account.movements)
//   .flat()
//   .reduce((acc, value) => acc + value, 0);

// console.log(overallBalance);

// const overallBalance2 = accounts
//   .flatMap(account => account.movements)
//   .reduce((acc, value) => acc + value, 0);

// console.log(overallBalance2);

// Sorting

// Strings

// const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];

// console.log(owners.sort());

// console.log(owners);

// console.log(movements);

// // return > 0, change order
// // return<0, keep order

// const sortedMovements = movements.slice().sort((a, b) => a - b);
// console.log(sortedMovements);

// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });

// // console.log(movements);

// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });

// // console.log(movements);

// const sortedMovements2 = movements.slice().sort((a, b) => b - a);
// console.log(sortedMovements2);

// Creating and filling arrays

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));

const x = new Array(7);

console.log(x);

x.fill(1, 0, 2);
console.log(x);
x.fill(2, 2);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 10 }, () => Math.ceil(Math.random() * 10));
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
