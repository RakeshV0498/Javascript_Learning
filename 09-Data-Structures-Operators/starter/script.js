'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Before Es6
  // openingHours: openingHours,
  // ES6 enhanced literals

  openingHours,

  // order: function (startIndex, mainIndex) {
  //   return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  // },
  // ES6 New way of creating methods

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};

// ---------------Sets------------------------//

// console.log(`=================Sets===================`);

// const ordersSet = new Set([
//   'pizza',
//   'rositto',
//   'pasta',
//   'pizza',
//   'Bruschetta',
//   'pasta',
// ]);

// console.log(ordersSet);

// console.log(new Set('Rakesh'));

// console.log(ordersSet.size);

// console.log(ordersSet.has('pasta'));
// console.log(ordersSet.has('bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('rositto');

// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Realtime example

// const staff = [
//   'waiter',
//   'chef',
//   'waiter',
//   'waiter',
//   'receptionist',
//   'manager',
//   "sou's chef",
//   'pastry chef',
//   'waiter',
//   'chef',
// ];

// const hotelStaff = [...new Set(staff)];
// console.log(hotelStaff);

// for (const [key, staff] of hotelStaff.entries()) {
//   console.log(key + 1, staff);
// }

//================Maps===========================

// console.log(`=============================Map===================`);

// const rest = new Map();

// rest.set('name', 'Classico Restraunto');
// rest.set(1, 'Firenze,Italy');
// rest.set(2, 'Lisbon,Portugal');
// rest
//   .set('Categories', restaurant.categories)
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'Open')
//   .set(false, 'closed');

// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 12;

// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('Categories'));

// rest.delete(2);
// // rest.clear();
// const arr = [1, 2];

// rest.set(arr, 'Test');

// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again'],
]);

// console.log(question);

console.log(`Question: ${question.get('question')}`);
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your Answer'));

// alert(question.get(question.get('correct') === answer));n

// if (answer === question.get('correct')) alert(question.get(true));
// else alert(question.get(false));

console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [day, { open, close }] of hoursMap) {
  console.log(
    `On ${day}, We open at ${open}:00 HRS and close at ${close}:00 HRS `
  );
}

// Convert Map to array

console.log(...question);

console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// Without Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // With Optional Chaining

// console.log(restaurant.openingHours?.mon?.open);

// const days = weekDays;

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we are open at ${open}:00 hrs`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'method not found');

// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// const users = [
//   {
//     userName: 'Rakesh',
//     email: 'rockr4674@gmail.com',
//   },
// ];

// console.log(users[0]?.userName ?? 'User does not exist');
// console.log(users[1]?.userName ?? 'User does not exist');

// // getting Property names from object using Object.keys for..0f loop

// const properties = Object.keys(openingHours);

// console.log(properties);

// let strOpen = `The restruant open on ${properties.length} days: `;

// for (const day of properties) {
//   strOpen += `${day}, `;
// }

// console.log(strOpen);

// // Getting Property values from object using object.values

// const values = Object.values(openingHours);

// console.log(values);

// // Entire Object

// const entries = Object.entries(openingHours);

// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(
//     `On ${key.toLocaleUpperCase()}, we open at ${open}:00 hrs and close at ${close}:00 hrs`
//   );
// }

// const arr = [1, 2, 3, 4];

// console.log(arr);

// const [a, b] = arr;

// console.log(a, b);

// Destructing arrays in objects

// const [first, second] = restaurant.categories;

// console.log(first);
// console.log(second);

// to get the third element, we can simply leave the space the between declaration of the elements

// const [first, , third] = restaurant.categories;

// console.log(first);
// console.log(third);

// Now we want to switch the items in categories in a different order

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// console.log(`------------------switch old method---------------------`);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

//Nested Destructing

// const nested = [2, 4, [1, 3]];

// to get the items in the nested array use this method [[]]

// const [, , [e, f]] = nested;

// console.log(e, f);

//default values

// Here we are setting the default value for the variables, if there is no value in the array index, it will assume the default value that we set

// const [p = 1, q = 1, r = 1] = [8, , 45];

// console.log(p, q, r);

// Destructing Objects

// console.log(`--------------------------- Destructuring Objects--------------`);

// const { name, openingHours: hour, categories } = restaurant;
// console.log(name, hour, categories);

// console.log(`---------------Renaming Property name to variable name---------`);

// const {
//   name: restruantName,
//   categories: tags,
//   openingHours: hours,
//   // If we want different variable name from the property name, we need assign the property name to variable name like below
//   location: address,
// } = restaurant;

// console.log(restruantName);
// console.log(address);
// console.log(categories);
// console.log(openingHours);

// Setting default values - to set the default value since we usually get the data from the outside source

// const { mainMenu: menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu);
// console.log(starters);

// Mutating  variables

// let x = 111;
// let y = 999;

// const obj = { x: 23, y: 7, z: 14 };

// ({ x, y } = obj);

// console.log(x, y);

// // Nested object destructing

// const {
//   fri: { open: O, close: C },
// } = restaurant.openingHours;

// console.log(O, C);

// //Object destructing functions

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Chennai, 21',
//   mainIndex: 2,
//   startIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Chennai-24',
// });

// // Spread Operators

// const testArr = [7, 8, 9];

// const newTestArr = [1, 2, testArr[0], testArr[1], testArr[2]];

// console.log(newTestArr);

// const newArr = [1, 2, ...testArr];

// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnoccci'];

// console.log(newMenu);

// // Copy Arrray

// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays or more

// const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menus);

// //Spead operator can be used on all iterables expect objects
// // Arrays,strings,maps,sets

// const spreadString = [...restaurant.name].join('-');

// console.log(spreadString);

//Spread operator use with function

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// Objects

// const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };

// newRestaurant.name = 'Ristronate Roma';

// console.log(newRestaurant);

// // Rest Pattern and Parameters

// // 1. Destructing

// // Spread operator because we use it right side of the (=) Operator
// const arrNew = [1, 2, ...[3, 4, 5]];

// // Rest Opeator because we use it left side of the (=) Operator
// const [i, j, ...others] = [1, 2, 3, 4, 5];

// console.log(i, j, others);

// // Combining both arrays using spread and rest

// const [pizza, , risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// const [pizza, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// Rest operator will just collect the rest of the items, it will capture the in between elements, it will collect the elements after the last declared element

// In the below output, it left out the pasta, since its in middle of both pizza and rosotto and the rest only takes after the last declared variable.

// Rest operator should always be the last element

// It doesnt include the skipped elements

// Rest Operator should be used only once in the destructing assignments

// console.log(pizza, risotto, otherFoods);

// // Objects with Rest Operator

// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(sat, weekdays);

// // 2. Functions

// const add = function (...numbers) {
//   const result = numbers.reduce((value, sum) => sum + value, 0);
//   console.log(result);
// };

// add(5, 4, 12);
// add(10, 15, 12, 13);
// add(...newArr);

// const multiply = function (...numbers) {
//   const result = numbers.reduce((value, acc) => value * acc, 1);
//   console.log(result);
// };

// multiply(1, 4, 3);
// multiply(...newArr);

// restaurant.orderPizza('mushrooms', 'onion', 'cheeze', 'spinach');

// // Short Circuiting(&& and ||)

// // If the first operand is a truthy value, then in case of OR operator it will always return the first operand. It wont even evaluate the second operand

// console.log(`------------------------or---------------`);

// console.log(3 || 'a');

// console.log('' || 'rakesh');

// console.log(true || 0);

// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// // restaurant.numGuests = 23;

// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;

// // console.log(guests2);

// console.log(`------------------------AND---------------`);

// // If the first operand value is falsey, it returns the first operand value and not even evaluate the second operand value

// console.log(0 && 'Rakesh');

// // if the first operand value is truthy, it will evaluate the second operand value and if that also truthy value it will return the second operand vale.

// console.log(7 && 'Rakesh');

// // If there is a series of evaluation is going to happen, if any oeprand value is falsey value, then it will return that value and stops the flow.

// console.log(23 && 'hello' && null && undefined);

// // Practical Example

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushroom', 'Cheese', 'Olives');
// }

// restaurant.orderPizza && restaurant.orderPizza('Chicken', 'olives', 'cheese');

// console.log(`------------------Nullish Operator(??)--------------`);

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;

// console.log(guests);

// // ?? operator works on Nullish Value null and undefined values (Not inclues 0 or "")

// const guestsCorrect = restaurant.numGuests ?? 10;

// console.log(guestsCorrect);

// // Three new logical assignement operators

// console.log(
//   `---------------Three New Logical Assignment Operators------------`
// );

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossai',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // Or Assignment Operator

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // To resolve the 0 zero issue
// // Nullish Assignment Operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && 'Annonymous';
// // rest2.owner = rest2.owner && 'Annonymous';

// rest1.owner &&= 'Annonymous';
// rest2.owner &&= 'Annonymous';

// console.log(rest1, rest2);

// // For of loop
// console.log(`===================for of loop====================`);

// const menU = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menU);

// for (const item of menU) {
//   console.log(item);
// }

// for (const [num, menu] of menU.entries()) {
//   // console.log(`${item[0] + 1} --- ${item[1]}`);
//   console.log(`${num + 1} --> ${menu}`);
// }
