/*
    Create a program that starts with a number variable.
    The program will print out whether the variable is
    even or odd to the screen when run.

    Change the variable to test it works in both cases.

    HINT: modulus operator ( % ) is your friend
*/
const number = 101;
if (number % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is an odd number"); // (will run)
}
