/*
    1. Create a variable called "multiple" and initialize it to 5
    2. Create an array with the numbers 10-15 (inclusive)
    3. Loop through the array and on each iteration:
        - Multiply the number by the multiple and print out the result
        - As you're printing, use this format (example):
            10 x 5 = 50
            11 x 5 = 55
            ...
            15 x 5 = 75

    BONUS: Try to see if you can make it so that all you need to change
    is the "multiple" variable and the program still works correctly.
*/

const multiple = 5;

const numbers = [10, 11, 12, 13, 14, 15];

for (let count = 0; count < numbers.length; count++) {
  const product = numbers[count] * multiple;
  console.log(`${numbers[count]} x ${multiple} = ${product}`);
}

/*
10 x 5 = 50
11 x 5 = 55
12 x 5 = 60
14 x 5 = 70
15 x 5 = 75

*/

// Pratice 2: Sept 22
/*
// 1. Create a variable called "multiples" and initialize it to 5

// 2. Create an array with the numbers 10-15 (inclusive)

// 3. Loop through the array and on each iteration:
    // a. Generate a random multiplier between 2 and 10
    // b. Multiply the number by the random multiplier
    // c. Print the result in the format: "10 x 5 = 50"

*/

const multiples = 5;
const numArray = [10, 11, 12, 13, 14, 15];

for (i = 0; i < numArray.length; i++) {
  let randomMultiplier = Math.floor(Math.random() * 9) + 2;
  let result = randomMultiplier * numArray[i];
  console.log(`${numArray[i]} x ${randomMultiplier} = ${result}`);
}
