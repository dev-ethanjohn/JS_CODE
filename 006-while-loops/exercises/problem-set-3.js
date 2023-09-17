/*
    1. Create a while loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!

    HINT: Lookup for "continue" keyword for loops
*/

let number = 1;
while (number <= 100) {
  if (number % 10 === 0) {
    if (number === 50) {
      console.log("Half way there!");
    } else if (number === 100) {
      console.log("You made it!");
    } else {
      console.log("Checkpoint!", +number);
    }
  }
  number++;
}
console.log("All, done!");

// [2] September 17, 2023
/*
1. Create a while loop that counts down from 10 to 1.
2. Print the current countdown value on each iteration.
3. However, when the countdown reaches 5, print "Checkpoint!" and the countdown value.
4. On the final countdown (1), print "Blastoff!"
5. After the loop is done, print "Countdown complete!"
*/

let number2 = 10;
while (number2 >= 1) {
  if (number2) {
    if (number2 === 5) {
      console.log("Checkpoint! ", +number2);
    } else if (number2 === 1) {
      console.log("Blastoff!");
    } else {
      console.log(number2);
    }
  }
  number2--;
}

console.log("Countdown complete!");

/* Result in console
  10
  9
  8
  7
  6
  Checkpoint! 5
  4
  3
  2
  1
  Blastoff!
  Countdown complete!

  NOTE: all numbers must be an integer,  and not a string. 

*/
