/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    3. After 3 loop iterations, change "loggedIn" to be true.
    4. After the loops is done print out: "Sucessfully logged in!"

    HINT1: Be careful for an infinite loop!
    HINT2: Use CMD+C or CTRL+C to get out of an infinite loop in node
*/

let logginIn = false;
let countIteration = 0;

while (!logginIn) {
  console.log("Incorrect login credentials");

  if (countIteration >= 2) {
    logginIn = true;
  }

  countIteration++;
}

console.log("Successfully logged in!");

//SEPARATE [sept 17, 20223]
console.log("------------------------");

/*
1. Create a variable called "correctPassword" with a password of your choice (e.g., "secret123").
2. Create a variable called "attempts" and set it to 0.
3. Create a while loop that loops while the user's guess is not equal to the correct password.
4. In each iteration, ask the user to enter a password.
5. If the user's guess is incorrect, print "Incorrect password. Try again." and increment the "attempts" variable by 1.
6. If the user's guess is correct, print "Successfully logged in!" and break out of the loop.
7. Limit the number of attempts to 3. If the user exceeds three attempts, print "Too many incorrect attempts. Account locked." and break out of the loop.
8. After the loop, print "Game over."
*/

let correctPassword = "john121";
let attempts = 0;

while (attempts < 3) {
  let userPassword = prompt("Enter your password");

  if (userPassword !== correctPassword) {
    console.log("Incorrect password. Try again.");
  } else {
    console.log("Successfully logged in!");
    break;
  }

  attempts++;
}

if (attempts >= 3) {
  console.log("Too many incorrect attemps. Account locked");
}

console.log("Game Over!");
