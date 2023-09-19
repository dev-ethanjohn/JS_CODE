// map only works on Arrays
// map() creates a NEW Array with a function.
// it allow us to apply a function on each element creating a new array that doesnt modify the original array

// Original copy
const animals = ["monkey", "dog", "cat", "koala"];
console.log(animals); // [ 'monkey', 'dog', 'cat', 'koala' ]

// new copy
const bigAnimals = animals.map((animal) => {
  return animal.toUpperCase();
});

console.log(bigAnimals); // [ 'MONKEY', 'DOG', 'CAT', 'KOALA' ]

// NOW: there are 2 arrays

const numbers = [5, 10, 15, 20, 25];
console.log(numbers); // [ 50, 100, 150, 200, 250 ]

const timesTen = numbers.map((number) => {
  return number * 10;
});
console.log(timesTen); // [ 50, 100, 150, 200, 250 ]

// NOTE: ALways return when dealing with functions
