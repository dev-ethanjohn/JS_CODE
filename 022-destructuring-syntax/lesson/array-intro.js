const cities = ["Vancouver", "Mexico", "Toronto", "London", "Berlin"];

// LONGER SOLUTION
// const vancouver = cities[0];
// const mexico = cities[1];
// console.log(vancouver, mexico); // Vancouver Mexico

// DESTRUCTURING
const [, secondCity, ...theRest] = cities;
// u are accessing index 2 of the array which isnt decalred from "cities", thus undefined
console.log(secondCity); // Mexico
console.log(theRest); // [ 'Toronto', 'London', 'Berlin' ]

const numbers = new Set();
numbers.add(5);
numbers.add(10);
const [five, ten] = numbers;

console.log(five, ten); // 5 10
console.log(numbers); // Set(2) { 5, 10 }
