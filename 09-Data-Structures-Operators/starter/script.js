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

//
