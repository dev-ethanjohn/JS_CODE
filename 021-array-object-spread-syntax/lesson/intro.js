const array = [10, 20, 30, 40, 50];

// using for loops
const arrayCopy1 = [];
for (i = 0; i < array.length; i++) {
  arrayCopy1.push(array[i]);
}

console.log(arrayCopy1); // [ 10, 20, 30, 40, 50 ]

// using for of loop
const arrayCopy2 = [];
for (const number of array) {
  arrayCopy2.push(number);
}
console.log(arrayCopy1); // [ 10, 20, 30, 40, 50 ]

// using Spread operator
const arrayCopy3 = [...array];
console.log(arrayCopy3); // [ 10, 20, 30, 40, 50 ]

// Spread operator and .push
const arrayCopy4 = [...arrayCopy3, 60, 70, 80];
console.log(arrayCopy4);
/*
[
  10, 20, 30, 40,
  50, 60, 70, 80
]
*/
