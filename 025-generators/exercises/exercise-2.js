/*
    1. Create a generator function called "randomAmountFromRange"
       which has 3 parameters: amount, min, and max

    2. ^ This function will generate the amount of random numbers
       provided as an argument, between the min and max (inclusive)
       Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19

    3. Create a for...of loop that will loop through the following
       generator objects to test it:
       - randomAmountFromRange(3, 10, 20)
       - randomAmountFromRange(5, 100, 200)
       - randomAmountFromRange(10, 1000, 2000)
*/

const randomAmountFromRange = function* (amount, min, max) {
  let count = 3;
  for (i = 0; i < count; i++) {
    yield Math.floor(Math.random() * (max - min + 1) + min);
  }
};

const result = randomAmountFromRange(3, 10, 20);
console.log(randomAmountFromRange); // [GeneratorFunction: randomAmountFromRange]
console.log(result); // Object [Generator] {}

// CAN USE WHILE LOOP
// let count = 0;
// while (count < 3) {
//   console.log(result.next().value);
//   count++;
// }

for (const number of result) {
  console.log(number);
}

/*
14
16
13
*/
