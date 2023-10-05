/*
    1. Create a variable called "hungry" that start as true;

    2. Create an if/else statement that:
       - If "hungry" is true, print out "Have a cookie!"
       - Otherwise, print out: "No cookies for you!";

    3. Execute the code to make sure it works.

    4. Repeat steps 2-3 but with a ternary expression.
*/

const hungry = true;

// USING if else
if (hungry === true) {
  console.log("Have a cookie!"); // Have a cookie!
} else {
  console.log("No cookies for you!");
}

// USING ternary operator
hungry === true
  ? console.log("Have a cookie!") // Have a cookie!
  : console.log("No cookies for you!");
