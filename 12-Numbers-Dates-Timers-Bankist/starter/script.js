'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2024-03-06T23:36:17.929Z',
    '2024-03-08T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatNumbers = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const updateUI = function (account) {
  calcDisplayBalance(account);
  displayMovements(account);
  calcDisplaySummary(account);
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, value) => acc + value, 0);
  const dipslayBalance = formatNumbers(
    account.balance,
    account.locale,
    account.currency
  );

  labelBalance.textContent = dipslayBalance;
};

const formattedDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} DAYS AGO`;
  return new Intl.DateTimeFormat(locale).format(date);
};

// calcDisplayBalance(account1.movements);

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const moves = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  const locale = acc.locale;
  moves.forEach(function (value, index) {
    const transactionType = value > 0 ? 'deposit' : 'withdrawal';
    const now = new Date(acc.movementsDates[index]);
    const date = formattedDate(now, locale);
    const formattedMov = formatNumbers(value, acc.locale, acc.currency);
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${transactionType}">${
      index + 1
    } ${transactionType}</div>
      <div class="movements__date">${date}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

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

  labelSumIn.textContent = formatNumbers(income, acc.locale, acc.currency);
  labelSumOut.textContent = formatNumbers(expense, acc.locale, acc.currency);
  labelSumInterest.textContent = formatNumbers(
    interest,
    acc.locale,
    acc.currency
  );
};

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

const startLogOutTimer = function () {
  // set time
  let logOutTime = 600;

  const tick = function () {
    let min = String(Math.trunc(logOutTime / 60)).padStart(2, 0);
    let sec = String(Math.trunc(logOutTime % 60)).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (logOutTime === 0) {
      clearInterval(logOutTimer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    logOutTime--;
  };

  // call the timer every second
  tick();
  const logOutTimer = setInterval(tick, 1000);
  return logOutTimer;
};

let currentAccount, timer;

// Login

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  const userName = inputLoginUsername.value.toLowerCase();
  const userPin = inputLoginPin.value;

  currentAccount = accounts.find(acc => acc.userName === userName);

  if (currentAccount?.pin === +userPin) {
    inputLoginUsername.value = inputLoginPin.value = '';
    document.activeElement.blur();
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    const now = new Date();
    const options = {
      day: '2-digit',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    // to GET THE locale of the user from the browser
    // const locale = navigator.language;

    const locale = currentAccount.locale;

    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );
    // Updating UI
    containerApp.style.opacity = 100;
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
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
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  if (amount > 0 && amount <= currentAccount.balance) {
    if (receiverAcc && receiverAcc?.userName !== currentAccount.userName) {
      //Initiating Transfer
      currentAccount.movements.push(amount * -1);
      receiverAcc.movements.push(amount);
      // inserting dates
      currentAccount.movementsDates.push(new Date().toISOString());
      receiverAcc.movementsDates.push(new Date().toISOString());
      // Updating UI
      inputTransferTo.value = inputTransferAmount.value = '';
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
  clearInterval(timer);
  timer = startLogOutTimer();
});

// Loan Request

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);

  const isEligible = currentAccount.movements.some(
    value => value > loanAmount * 0.1
  );

  setTimeout(function () {
    if (loanAmount > 0 && isEligible) {
      currentAccount.movements.push(loanAmount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    } else {
      alert('You are not eligible for the loan');
    }

    clearInterval(timer);
    timer = startLogOutTimer();
  }, 3000);
  inputLoanAmount.value = '';
});

// Close Account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const userName = inputCloseUsername.value;
  const userPin = +inputClosePin.value;

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
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
