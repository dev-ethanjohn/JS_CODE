/*
    1. Create an array called 'bools' of the following booleans:
        [true, true, false, true, false, false]

    2. Map over 'bools' and do the following:
        - if "true", return a random number in it's place
        - if "false", return 0

    3. Print out both arrays

    HINT: Google for "random number js" to find a random
          number function built-in to Javascript to use
*/
const bools = [true, true, false, true, false, false];

const newBools = bools.map((bool) => {
  if (bool === true) {
    // Math.floor(Math.random()*100) + 1;  returns a random integer from 1 to 100
    return Math.floor(Math.random() * 100) + 1;
  } // else is implicit
  return 0;
});

console.log(newBools); // [ 82, 85, 0, 50, 0, 0 ]
