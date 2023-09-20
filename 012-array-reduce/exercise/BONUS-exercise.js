/*
    1. Create the following array called "nums":
        [10, 30, 50, 70, 90]

    2. Create a new array called "squares" that:
        - maps over "nums" and return each item squared (x by itself)

    3. Create another new array called "over1000" that:
        - filters "squares" to contain only values over 1000

    4. Create a const called "finale" that:
        - reduces "over1000" to a single sum of it's elements

    5. Print out "nums", "squares", "over1000" and "finale"

    BONUS^2: Can you do 1-4 all in one line?
*/

const nums = [10, 30, 50, 70, 90];
console.log(nums); // [ 10, 30, 50, 70, 90 ]

const squares = nums.map((number) => {
  return number ** 2;
});
console.log(squares); // [ 100, 900, 2500, 4900, 8100 ]

const over1000 = squares.filter((number) => {
  if (number > 1000) {
    return number;
  }
});
console.log(over1000); // [ 2500, 4900, 8100 ]

const finale = over1000.reduce((sum, number) => {
  return sum + number;
});
console.log(finale); //15500

// USING ONE LINE

// const nums = [10, 30, 50, 70, 90]
//   .map((number) => {
//     return number ** 2;
//   })
//   .filter((number) => {
//     if (number > 1000) {
//       return number;
//     }
//   })
//   .reduce((sum, number) => {
//     return sum + number;
//   });

// console.log(nums); // 15500
