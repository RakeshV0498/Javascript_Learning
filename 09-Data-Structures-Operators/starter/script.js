'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
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

const arr = [1, 2, 3, 4];

console.log(arr);

const [a, b] = arr;

console.log(a, b);

// Destructing arrays in objects

// const [first, second] = restaurant.categories;

// console.log(first);
// console.log(second);

// to get the third element, we can simply leave the space the between declaration of the elements

// const [first, , third] = restaurant.categories;

// console.log(first);
// console.log(third);

// Now we want to switch the items in categories in a different order

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// console.log(`------------------switch old method---------------------`);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];

console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

//Nested Destructing

const nested = [2, 4, [1, 3]];

// to get the items in the nested array use this method [[]]

const [, , [e, f]] = nested;

console.log(e, f);

//default values

// Here we are setting the default value for the variables, if there is no value in the array index, it will assume the default value that we set

const [p = 1, q = 1, r = 1] = [8, , 45];

console.log(p, q, r);

// Destructing Objects

console.log(`--------------------------- Destructuring Objects--------------`);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

console.log(`---------------Renaming Property name to variable name---------`);

const {
  name: restruantName,
  categories: tags,
  openingHours: hours,
  // If we want different variable name from the property name, we need assign the property name to variable name like below
  location: address,
} = restaurant;

console.log(restruantName);
console.log(address);
console.log(categories);
console.log(openingHours);

// Setting default values - to set the default value since we usually get the data from the outside source

const { mainMenu: menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu);
console.log(starters);

// Mutating  variables

let x = 111;
let y = 999;

const obj = { x: 23, y: 7, z: 14 };

({ x, y } = obj);

console.log(x, y);

// Nested object destructing

const {
  fri: { open: O, close: C },
} = restaurant.openingHours;

console.log(O, C);

//Object destructing functions

restaurant.orderDelivery({
  time: '22:30',
  address: 'Chennai, 21',
  mainIndex: 2,
  startIndex: 2,
});

restaurant.orderDelivery({
  address: 'Chennai-24',
});

// Spread Operators

const testArr = [7, 8, 9];

const newTestArr = [1, 2, testArr[0], testArr[1], testArr[2]];

console.log(newTestArr);

const newArr = [1, 2, ...testArr];

console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnoccci'];

console.log(newMenu);

// Copy Arrray

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more

const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menus);

//Spead operator can be used on all iterables expect objects
// Arrays,strings,maps,sets

const spreadString = [...restaurant.name].join('-');

console.log(spreadString);

//Spread operator use with function

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };

newRestaurant.name = 'Ristronate Roma';

console.log(newRestaurant);

// Rest Pattern and Parameters

// 1. Destructing

// Spread operator because we use it right side of the (=) Operator
const arrNew = [1, 2, ...[3, 4, 5]];

// Rest Opeator because we use it left side of the (=) Operator
const [i, j, ...others] = [1, 2, 3, 4, 5];

console.log(i, j, others);

// Combining both arrays using spread and rest

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// const [pizza, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// Rest operator will just collect the rest of the items, it will capture the in between elements, it will collect the elements after the last declared element

// In the below output, it left out the pasta, since its in middle of both pizza and rosotto and the rest only takes after the last declared variable.

// Rest operator should always be the last element

// It doesnt include the skipped elements

// Rest Operator should be used only once in the destructing assignments

console.log(pizza, risotto, otherFoods);

// Objects with Rest Operator

const { sat, ...weekdays } = restaurant.openingHours;

console.log(sat, weekdays);

// 2. Functions

const add = function (...numbers) {
  const result = numbers.reduce((value, sum) => sum + value, 0);
  console.log(result);
};

add(5, 4, 12);
add(10, 15, 12, 13);
add(...newArr);

const multiply = function (...numbers) {
  const result = numbers.reduce((value, acc) => value * acc, 1);
  console.log(result);
};

multiply(1, 4, 3);
multiply(...newArr);

restaurant.orderPizza('mushrooms', 'onion', 'cheeze', 'spinach');

// Short Circuiting(&& and ||)

// If the first operand is a truthy value, then in case of OR operator it will always return the first operand. It wont even evaluate the second operand

console.log(`------------------------or---------------`);

console.log(3 || 'a');

console.log('' || 'rakesh');

console.log(true || 0);

console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;

// console.log(guests2);

console.log(`------------------------AND---------------`);

// If the first operand value is falsey, it returns the first operand value and not even evaluate the second operand value

console.log(0 && 'Rakesh');

// if the first operand value is truthy, it will evaluate the second operand value and if that also truthy value it will return the second operand vale.

console.log(7 && 'Rakesh');

// If there is a series of evaluation is going to happen, if any oeprand value is falsey value, then it will return that value and stops the flow.

console.log(23 && 'hello' && null && undefined);

// Practical Example

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'Cheese', 'Olives');
}

restaurant.orderPizza && restaurant.orderPizza('Chicken', 'olives', 'cheese');

console.log(`------------------Nullish Operator(??)--------------`);

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;

console.log(guests);

// ?? operator works on Nullish Value null and undefined values (Not inclues 0 or "")

const guestsCorrect = restaurant.numGuests ?? 10;

console.log(guestsCorrect);

// Three new logical assignement operators

console.log(
  `---------------Three New Logical Assignment Operators------------`
);

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossai',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Or Assignment Operator

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// To resolve the 0 zero issue
// Nullish Assignment Operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && 'Annonymous';
// rest2.owner = rest2.owner && 'Annonymous';

rest1.owner &&= 'Annonymous';
rest2.owner &&= 'Annonymous';

console.log(rest1, rest2);
