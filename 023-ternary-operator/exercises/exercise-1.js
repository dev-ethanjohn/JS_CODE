/*
  1. Create a function called "over9000" that has a single
     parameter which is a Number. This function:
     - Returns "It's over 9000!!!" if the argument is > 9000
     - Returns "Taking a Nappa..." in all other cases

  2. Do step 1 with a regular if/else clause first

  3. Re-do step 1 with a ternary expressions

  BONUS: Can you shorten this with the short "arrow function
         expression" syntax?
*/

// USING if else
let over9000 = (number) => {
  if (number > 9000) {
    return "It's over 9000!!!";
  } else {
    return "Taking a Nappa..";
  }
};

const result = over9000(9999);
console.log(result); // It's over 9000!!!

// USING ternary operator
over9000 = (number) => {
  return number > 9000 ? "It's over 9000!!!" : "Taking a Nappa...";
};

const resultTernary = over9000(2023);
console.log(resultTernary); // Taking a Nappa...
