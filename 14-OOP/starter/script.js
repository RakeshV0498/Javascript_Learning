'use strict';

const Person = function (firstName, birthYear) {
  // Instance Properities
  this.firstName = firstName;
  this.birthYear = birthYear;

  // this.calcAge = function () {
  //   return new Date().getFullYear() - this.birthYear;
  // };
};

// Static Function - It wont be inherited to the new created instances of this prototype

Person.hey = function () {
  console.log('Hi There 👋');
};

Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

Person.prototype.isAdult = function () {
  return this.calcAge() > 18 ? true : false;
};

console.log(Person.prototype);

const rakesh = new Person('Rakesh', 2018);

const vignesh = new Person('Vignesh', 2002);

const surekha = new Person('Surekha', 1981);

console.log(rakesh, vignesh, surekha);

console.log(rakesh.calcAge());

console.log(`${rakesh.firstName} is a ${rakesh.isAdult() ? 'Adult' : 'Child'}`);

console.log(surekha.calcAge());

console.log(rakesh instanceof Person);

console.log(rakesh.__proto__);

console.log(rakesh.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(rakesh));

Person.prototype.species = 'Homo Sapiens';

console.log(rakesh.species);
console.log(vignesh.species);

console.log(rakesh.hasOwnProperty('firstName'));
console.log(rakesh.hasOwnProperty('species'));

// Person Prototype
console.log(rakesh.__proto__);
// Object Prototype (top of Prototype chain )
console.log(rakesh.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 5, 7, 5, 6, 1, 6];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Creating a new method

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(h1);

// Coding Challenge - 2

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} Km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} Km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();

// Coding Challenge 3

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Battery charge is at ${this.charge}`);
};

EV.prototype.acceleate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

console.log(tesla);
tesla.acceleate();
tesla.acceleate();
tesla.chargeBattery(90);
console.log(tesla);
tesla.acceleate();
tesla.brake();

// ES6 Classes

// Class Expression

// const PersonCl = class {

// }

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set setName(lastName) {
    this.lastName = lastName;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hi there 👋');
    console.log(this);
  }
}

const rakeshCl = new PersonCl('Rakesh Vengatesan', 1998);

console.log(rakeshCl);

rakeshCl.calcAge();
rakeshCl.greet();
console.log(rakeshCl.age);
rakesh.setName = 'Vengatesan';
Person.hey();

console.log(rakeshCl);

const account = {
  owner: 'Rakesh',
  movements: [200, 300, 150, 132],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest);

account.latest = 120;

console.log(account.latest);

// Coding Challenge 2

class Cars {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  acceleate() {
    return (this.speed += 10);
  }

  brake() {
    console.log((this.speed -= 5));
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bmwcl = new Cars('BMW', 120);

console.log(bmwcl);
console.log(bmwcl.acceleate());
console.log(bmwcl.brake());
console.log(bmwcl.speedUS);
bmw.speedUS = 50;
console.log(bmwcl);

// Coding Challenge 4

class EVcl extends Cars {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery charge is at ${this.#charge}`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} is going at ${this.speed}, with a charge of ${this.charge}%`
    );
    return this;
  }
}

const rivian = new EVcl('Rivian', 120, 23);

console.log(rivian);
rivian.chargeBattery(75).accelerate();
rivian.brake().chargeBattery(78);

/*

// Inheritance between class and constructor function

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// We are linking Person prototype
Student.prototype = Object.create(Person.prototype);

console.log(Student.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi I am ${this.firstName} and I am studying ${this.course}`);
};

const mike = new Student('mike', 1998, 'Computer Science');

console.log(mike);

mike.introduce();
console.log(mike.hasOwnProperty());

console.log(mike.calcAge());
console.log(mike.isAdult());

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Inheritance In Es6 Classes
class Studentcl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always Super keyword should be present to inherit the parent class
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // This function will override the function from the person class, since its first appears in the prorotype chain. but it doesnt impact the calcAge function of the parent class. simply doesnt use the function from the parent.
  calcAge() {
    console.log(`I'm ${new Date().getFullYear() - this.birthYear} years old`);
  }
}

const steve = new Studentcl('Steve Rogers', 1932, 'Social Science');

console.log(steve);
steve.hey;
steve.calcAge();
steve.introduce();

// Inheritance using object.create

const PersonProto = {
  calcAge() {
    return 2037 - this.birthYear;
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

steven.init('steven', 1998);
console.log(steven.calcAge());

const StudentProto = Object.create(PersonProto);

const jay = Object.create(StudentProto);

StudentProto.hello = function () {
  console.log(`Hi There ${this.firstName}`);
};

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My Name is ${this.firstName} and I study ${this.course}`);
};

jay.init('Jay', 1998, 'Computer Science');

console.log(jay);

jay.hello();
jay.introduce();
console.log(jay.calcAge());

// New Class scenario

// 1.Public Field
// 2.Private Field
// 3.Public Method
// 4.Private Method

class Account {
  // Public Fields(It will be avaialable for all instances)
  locale = navigator.language;

  // Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected Property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // Public Method

  getMovements() {
    console.log(this.#movements);
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawal(val) {
    this.#movements.push(val * -1);
    return this;
  }

  displayBalance() {
    console.log(this.#movements.reduce((acc, value) => acc + value, 0));
  }

  requestLoan(val) {
    if (this.#approveloan(val)) {
      console.log('Approved');
      this.deposit(val);
      return this;
    }
  }

  // Private Method

  #approveloan(val) {
    return true;
  }
}

const acc1 = new Account('Rakesh', 'INR', 1122);
console.log(acc1);

acc1.deposit(150);
acc1.withdrawal(100);
acc1.displayBalance();
acc1.getMovements();

acc1.requestLoan(100);

console.log(acc1);
acc1.getMovements();
// console.log(acc1.#movements);

// Chaining
acc1.deposit(300).deposit(400).withdrawal(500).requestLoan(2500);
acc1.getMovements();
acc1.displayBalance();
*/
